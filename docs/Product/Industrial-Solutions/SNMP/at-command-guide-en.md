---
id: at-command-guide-en
title: EOE-ioNIC SNMP Module AT Command Guide
sidebar_label: AT Command Guide
date: 2026-10-12
keywords:
  - AT Command
  - SNMP
  - EOE-ioNIC
  - W55RP20
description: Reference for all 61 AT commands of the EOE-ioNIC SNMP module
---
# EOE-ioNIC SNMP Module AT Command Guide

Firmware 1.2.0 · 61 commands

AT commands are exchanged on `uart1` (GP4 TX / GP5 RX). The factory default is
115200 8N1, no flow control.

The console log goes out separately on `uart0`, so it never mixes into the AT port.

For installation and connecting an SNMP manager, see the [SNMP Setup Guide](./snmp-setup-guide-en.md).

---

<a id="sec-rules"></a>

## 1. Syntax and rules

### 1.1 Forms

```text
AT                       check the module answers
AT+NAME=<value>          set
AT+NAME?                 query
AT+NAME                  execute (action without arguments)
AT+NAME=?                test (not executed)
```

Each command supports different forms. They are listed in the table in
[Chapter 2 Command list](#sec-list).

### 1.2 Rules

| Item | Value |
|---|---|
| Case | Command names and keywords are case-insensitive |
| Strings | Enclose in double quotes. A comma inside quotes is not a separator |
| Numbers | Decimal and `0x` hexadecimal are both accepted. Leading zeros are ignored (`0161` = 161) |
| Line ending | `CR`, `LF` and `CRLF` are all accepted. Responses always end with `CRLF` |
| Line length | 256 bytes maximum. Longer lines are not executed: `ERROR:BUFFER_TOO_LONG` |
| Arguments | 12 maximum |

- More arguments than required are refused. `AT+IP="1.2.3.4",5` returns
  `ERROR:INVALID_PARAMETER` and the address is not changed.
- A query must end at `?`. `AT+OBJVAL?900` and `AT+VERSION?x` return
  `ERROR:INVALID_PARAMETER`. No query takes arguments.
- To skip an argument in the middle, keep its comma:
  `AT+USMADD="mon",NOAUTHNOPRIV,,,,,MONITOR`
- Out-of-range values and negative numbers are refused as they are, never adjusted.
  A port number is 1 … 65535 in every command; outside that the result is
  `ERROR:VALUE_OUT_OF_RANGE`.
- `AT+NAME=?` is the test form. The command is not executed; the answer is `OK`
  if it has a set form and `ERROR:INVALID_COMMAND` if it does not.

### 1.3 Responses

Every command ends with a single `OK` on success or `ERROR:<code>` on failure
([Chapter 13](#sec-error)). Queries and some set commands send one or more
`+NAME:...` lines before that.

```text
AT+SNMPPORT?
+SNMPPORT:161
OK
```

<a id="sec-rules-save"></a>

### 1.4 When settings take effect

Set commands change memory only. Storing to flash and actually applying the
settings is done by `AT+SAVE`.

```text
AT+NETMODE=STATIC
AT+IP="192.168.0.100"
AT+MASK="255.255.255.0"
AT+GW="192.168.0.1"
AT+SAVE
```

Commands that act immediately, without `AT+SAVE`:

| Command | Why |
|---|---|
| `AT+OBJVAL` · `AT+SETACK` | Values, not settings |
| `AT+SOCK*` | Channels are not stored |
| `AT+TRAPSEND` · `AT+INFORMSEND` | Send actions |
| `AT+OTAFWUP` | Receive action |
| `AT+OIDMAPRELOAD` · `AT+OIDMAPCLEAR` | Change the mapping directly |
| `AT+FACTORY` · `AT+REBOOT` · `AT+OTAREBOOT` | Reboot immediately |

`AT+OBJADD` and `AT+OBJDEL` change the object table immediately, but without
`AT+SAVE` the change is gone at the next boot.

<a id="sec-rules-binary"></a>

### 1.5 Binary mode

`AT+SOCKSEND` and `AT+SOCKSENDTO` declare a length first, then accept exactly that
many bytes of raw data after the `> ` prompt.

```text
AT+SOCKSEND=0,5
> HELLO
+SOCKSEND:0,5
OK
```

- In binary mode `CR`, `LF`, `NUL` and even the letters `AT` are all data.
- No line break follows the `> ` prompt. In the bytes the module sends, the result
  arrives on the same line as the prompt, as in `> +SOCKSEND:0,5`. A host that reads
  line by line should recognise the prompt as the two bytes `> `, not as a line, and
  strip a leading `> ` from the result line.
- Send all the declared bytes within 10 seconds of the prompt. After 10 seconds
  the command ends with `ERROR:PAYLOAD_TIMEOUT`, even if bytes are still arriving.
- End command lines with `CRLF`. An `LF` right after a `CR` is taken as the end of
  the line and dropped, so a host that ends lines with `CR` alone loses the first
  byte of a payload that starts with `LF` (0x0A).
- On a port configured for 7 bits or `XONXOFF`, the transfer is refused before it
  starts (`ERROR:NOT_SUPPORTED`).

### 1.6 Limits

All lengths are in bytes. Non-ASCII characters take more than one byte in UTF-8
(a Korean character, for example, takes 3).

| Item | Limit | If exceeded |
|---|---|---|
| AT line | 256 | `BUFFER_TOO_LONG` |
| Arguments | 12 | `INVALID_PARAMETER` |
| Socket send | 1460 | `BUFFER_TOO_LONG` |
| Object name | 19 | `INVALID_PARAMETER` |
| Object string value | 63 | `INVALID_PARAMETER` |
| String value of a `PERSISTENT` object | 44 | `BUFFER_TOO_LONG` |
| Object OID | 16 arcs, 20 bytes encoded | `OID_TOO_LONG` |
| SNMPv3 user name | 32 | `INVALID_PARAMETER` |
| Authentication · privacy password | 63 | `INVALID_PARAMETER` |
| Community name | 32 | `INVALID_PARAMETER` |
| Web account | 23 | `INVALID_PARAMETER` |
| Web password | 63 (minimum 8) | `INVALID_PARAMETER` |
| Socket host name | 63 | `INVALID_PARAMETER` |

| Item | Count |
|---|---|
| Objects | 1024 (of which 128 can be strings) |
| SNMPv3 users | 4 |
| Communities | 4 |
| Notification receivers | 4 |
| Socket channels | 4 |

The string value limit depends on the path: 63 bytes over AT, 64 bytes over an
SNMP SET, and 44 bytes for a `PERSISTENT` object ([`AT+OBJVAL`](#cmd-objval)).

---

<a id="sec-list"></a>

## 2. Command list

| Column | Meaning |
|---|---|
| Set | Supports the `AT+NAME=<value>` form |
| Query | Supports the `AT+NAME?` form |
| Exec | Supports the `AT+NAME` form |
| Save | ● means `AT+SAVE` is required. `—` means the command stores by itself |

### 2.1 Device control ([Chapter 3](#sec-device))

| Command | Set | Query | Exec | Save | Function |
|---|:-:|:-:|:-:|:-:|---|
| [`AT`](#cmd-at) | | | ● | | Check the module answers |
| [`AT+SAVE`](#cmd-save) | | | ● | — | Store settings to flash and apply |
| [`AT+REBOOT`](#cmd-reboot) | | | ● | — | Close connections and reboot |
| [`AT+FACTORY`](#cmd-factory) | ● | | | — | Factory reset |
| [`AT+VERSION`](#cmd-version) | | ● | | | Firmware, model, serial, product ID |
| [`AT+DIAG`](#cmd-diag) | | ● | | | Statistics and diagnostics |
| [`AT+UART`](#cmd-uart) | ● | ● | | ● | AT port settings |

### 2.2 Network ([Chapter 4](#sec-net))

| Command | Set | Query | Exec | Save | Function |
|---|:-:|:-:|:-:|:-:|---|
| [`AT+NETMODE`](#cmd-netmode) | ● | ● | | ● | DHCP / STATIC |
| [`AT+IP`](#cmd-ip) | ● | ● | | ● | IP address |
| [`AT+MASK`](#cmd-mask) | ● | ● | | ● | Subnet mask |
| [`AT+GW`](#cmd-gw) | ● | ● | | ● | Gateway |
| [`AT+DNS`](#cmd-dns) | ● | ● | | ● | DNS server |

### 2.3 SNMP agent ([Chapter 5](#sec-snmp))

| Command | Set | Query | Exec | Save | Function |
|---|:-:|:-:|:-:|:-:|---|
| [`AT+SNMP`](#cmd-snmp) | ● | ● | | ● | Agent on/off |
| [`AT+SNMPPORT`](#cmd-snmpport) | ● | ● | | ● | Listening port (default 161) |
| [`AT+SNMPVER`](#cmd-snmpver) | ● | ● | | ● | SNMP versions answered (default `3`) |
| [`AT+ENGINEID`](#cmd-engineid) | | ● | | | Engine ID (read-only) |
| [`AT+ENGINEBOOT`](#cmd-engineboot) | | ● | | | Engine boot count |
| [`AT+SYSOBJID`](#cmd-sysobjid) | ● | ● | | ● | sysObjectID |
| [`AT+SYSDESCR`](#cmd-sysdescr) | ● | ● | | ● | sysDescr (description) |
| [`AT+SYSNAME`](#cmd-sysname) | ● | ● | | ● | sysName (host name) |
| [`AT+SYSCONTACT`](#cmd-syscontact) | ● | ● | | ● | sysContact (contact) |
| [`AT+SYSLOCATION`](#cmd-syslocation) | ● | ● | | ● | sysLocation (location) |
| [`AT+PRODUCTID`](#cmd-productid) | ● | ● | | ● | Product ID override |
| [`AT+PRODUCTARC`](#cmd-productarc) | ● | ● | | ● | Product arc for automatic OID placement |

### 2.4 Users and communities ([Chapter 6](#sec-user))

| Command | Set | Query | Exec | Save | Function |
|---|:-:|:-:|:-:|:-:|---|
| [`AT+USMADD`](#cmd-usmadd) | ● | | | ● | Add or change an SNMPv3 user (up to 4) |
| [`AT+USMDEL`](#cmd-usmdel) | ● | | | ● | Delete a user |
| [`AT+USMUSER`](#cmd-usmuser) | | ● | | | List users |
| [`AT+COMMADD`](#cmd-commadd) | ● | | | ● | Add or change a community (up to 4) |
| [`AT+COMMDEL`](#cmd-commdel) | ● | | | ● | Delete a community |
| [`AT+COMM`](#cmd-comm) | | ● | | | List communities |

### 2.5 Objects ([Chapter 7](#sec-object))

| Command | Set | Query | Exec | Save | Function |
|---|:-:|:-:|:-:|:-:|---|
| [`AT+OBJADD`](#cmd-objadd) | ● | | | ●※ | Define an object |
| [`AT+OBJATTR`](#cmd-objattr) | ● | ● | | ●※ | Object attributes (set mode, range, unit, description, default) |
| [`AT+OBJDEL`](#cmd-objdel) | ● | | | ●※ | Delete an object |
| [`AT+OBJVAL`](#cmd-objval) | ● | ● | | | Write and read values |
| [`AT+OBJ`](#cmd-obj) | | ● | | | Query object definitions |
| [`AT+SETACK`](#cmd-setack) | ● | | | | Answer a confirmed SET |
| [`AT+OIDMAP`](#cmd-oidmap) | | ● | | | Mapping status |
| [`AT+OIDMAPRELOAD`](#cmd-oidmapreload) | | | ● | | Re-apply the stored CSV |
| [`AT+OIDMAPCLEAR`](#cmd-oidmapclear) | ● | | | | Clear the user mapping |

※ The object table changes immediately, but without `AT+SAVE` it is gone at the next
boot.

### 2.6 Notifications ([Chapter 8](#sec-notify))

| Command | Set | Query | Exec | Save | Function |
|---|:-:|:-:|:-:|:-:|---|
| [`AT+TARGETADD`](#cmd-targetadd) | ● | | | ● | Register a receiver (up to 4) |
| [`AT+TARGETDEL`](#cmd-targetdel) | ● | | | ● | Delete a receiver |
| [`AT+TARGET`](#cmd-target) | | ● | | | List receivers |
| [`AT+TARGETKEY`](#cmd-targetkey) | ● | | | ● | Register a receiver's localized keys |
| [`AT+TRAPSEND`](#cmd-trapsend) | ● | | | | Send a Trap |
| [`AT+INFORMSEND`](#cmd-informsend) | ● | | | | Send an Inform |

### 2.7 Sockets ([Chapter 9](#sec-socket))

| Command | Set | Query | Exec | Save | Function |
|---|:-:|:-:|:-:|:-:|---|
| [`AT+SOCKAVAIL`](#cmd-sockavail) | | ● | | | Channels available to open |
| [`AT+SOCKSTATUS`](#cmd-sockstatus) | | ● | | | Channel status list |
| [`AT+SOCKOPEN`](#cmd-sockopen) | ● | | | | Open a channel |
| [`AT+SOCKCLOSE`](#cmd-sockclose) | ● | | | | Close a channel |
| [`AT+SOCKSEND`](#cmd-socksend) | ● | | | | Send (binary mode) |
| [`AT+SOCKSENDTO`](#cmd-socksendto) | ● | | | | UDP send to a given destination |
| [`AT+SOCKPEER`](#cmd-sockpeer) | ● | | | | Default UDP peer |
| [`AT+SOCKOPT`](#cmd-sockopt) | ● | ● | | | Socket options |

### 2.8 Web ([Chapter 10](#sec-web))

| Command | Set | Query | Exec | Save | Function |
|---|:-:|:-:|:-:|:-:|---|
| [`AT+WEB`](#cmd-web) | ● | ● | | ● | Web interface on/off |
| [`AT+WEBUSER`](#cmd-webuser) | ● | ● | | ● | Login account |
| [`AT+WEBPASS`](#cmd-webpass) | ● | | | ● | Set password (no query) |
| [`AT+WEBTIMEOUT`](#cmd-webtimeout) | ● | ● | | ● | Session timeout |

### 2.9 Firmware update ([Chapter 11](#sec-ota))

| Command | Set | Query | Exec | Save | Function |
|---|:-:|:-:|:-:|:-:|---|
| [`AT+OTAFWUP`](#cmd-otafwup) | ● | | | | Send firmware over UART |
| [`AT+OTASTATUS`](#cmd-otastatus) | | ● | | | Progress status |
| [`AT+OTACANCEL`](#cmd-otacancel) | | | ● | | Cancel an update |
| [`AT+OTAREBOOT`](#cmd-otareboot) | | | ● | | Reboot into the staged image |

---

<a id="sec-device"></a>

## 3. Device control

<a id="cmd-at"></a>

### AT (check the module answers)

```text
AT
OK
```

<a id="cmd-save"></a>

### AT+SAVE (store and apply)

```text
AT+SAVE
OK
```

Stores the settings to flash and applies them ([1.4](#sec-rules-save)).

- Object definitions created with `AT+OBJADD` are stored at the same time.
- Network, SNMP and web settings are re-applied only if they actually changed.
- If the network settings change, all open sockets are closed.

<a id="cmd-reboot"></a>

### AT+REBOOT (reboot)

```text
AT+REBOOT
```

After sending the response, closes the socket channels and the network services in
turn and reboots. Peers receive a normal connection close, so no dead connection is
left on their side.

<a id="cmd-factory"></a>

### AT+FACTORY (factory reset)

```text
AT+FACTORY="CONFIRM"
+FACTORY:COMPLETE
```

Erases the settings, stored object values and the stored OID CSV, then reboots.

| Erased | Kept |
|---|---|
| Network, SNMP and web settings, AT port settings | MAC address |
| SNMPv3 users, communities | Serial number |
| Object definitions and values, OID mapping | Model name, product ID |

- `"CONFIRM"` must match exactly, including case.
- If an OTA image is staged, the command is refused with `ERROR:OTA_PENDING`.
- The web interface and the `FAC_RSTn` pin (held for 5 seconds) also reset the device.
- After the reset the AT port returns to 115200, 8, NONE, NONE.

<a id="cmd-version"></a>

### AT+VERSION? (version and identity)

```text
AT+VERSION?
+VERSION:"1.2.0","EOE-ioNIC_SNMP","EOE-ioNIC_SNMP-0008DC360034",0x454F4501
```

Firmware version · model · serial · product ID currently in effect.

<a id="cmd-diag"></a>

### AT+DIAG? (statistics and diagnostics)

```text
AT+DIAG?
+DIAG:SOCKETS,<open>,<free>,<open failures>,<accept failures>,<exhaustion>
+DIAG:SNMP,<get>,<getnext>,<getbulk>,<set>,<access denied>
+DIAG:USM,<unknown user>,<wrong digest>,<decrypt error>,<outside time window>
+DIAG:PORT,<speed>,<bits>,<parity>,<flow control>,<DTR|NODTR>,<READY|HELD>
+DIAG:RXDROP,<dropped bytes>,<FIFO overrun 0|1>
+DIAG:STORAGE,<content>,<state>
+DIAG:ATTX,<queued items>,<queued bytes>,<dropped items>
+DIAG:WATCHDOG,<enabled>,<timeout ms>
+DIAG:CHIP,<OK|UNRESPONSIVE>,<checks>,<recoveries>
```

| Value | If non-zero |
|---|---|
| `RXDROP` | The module missed incoming bytes. Enable flow control or lower the speed |
| `ATTX` dropped items | The transmit queue was full and URCs or data were dropped |
| `CHIP` recoveries | The Ethernet chip has been recovered at least once |
| `USM` wrong digest | Password or algorithm does not match the manager |

- `PORT` shows what this port is actually running at now. A difference from the
  stored value is reported by `PENDING` in [`AT+UART?`](#cmd-uart).
- If the last two `PORT` fields are `NODTR,HELD`, the host has lowered DTR and
  transmission is held.

<a id="cmd-uart"></a>

### AT+UART (AT port settings)

```text
AT+UART=<speed>,<data bits>,<parity>,<flow control>
AT+UART?     → +UART:115200,8,NONE,NONE,ACTIVE
```

| Argument | Values |
|---|---|
| Speed | `9600` `19200` `38400` `57600` `115200` `230400` `460800` `921600` |
| Data bits | `7` · `8` |
| Parity | `NONE` · `ODD` · `EVEN` |
| Flow control | `NONE` · `RTSCTS` · `DTRDSR` · `XONXOFF` |

- All four arguments are required. Stop bits are always 1 and cannot be set.
- Parity and flow control are given by name. Unknown names are refused.

#### When it takes effect

```text
AT+UART=230400,8,NONE,RTSCTS
OK
AT+SAVE
OK                          ← still 115200
AT+REBOOT                   ← applied here
```

| Last field of `AT+UART?` | Meaning |
|---|---|
| `ACTIVE` | The stored values match the current port settings |
| `PENDING` | Stored but not yet applied. A reboot is required |

#### Flow control

| Value | Method | Direction |
|---|---|---|
| `NONE` | None (factory default) | — |
| `RTSCTS` | Hardware. GP6 (module CTS) / GP7 (module RTS) | Both |
| `DTRDSR` | Watches DTR on GP8 | Module transmit only |
| `XONXOFF` | In-band `0x11` / `0x13` | Both |

`7` bits strips the top bit of every byte, and `XONXOFF` interprets `0x11` and `0x13`
inside a payload as flow-control signals. Both change the data without reporting an
error, so with these settings [`AT+SOCKSEND`](#cmd-socksend) and
[`AT+OTAFWUP`](#cmd-otafwup) are blocked entirely.

```text
AT+UART=115200,7,EVEN,RTSCTS
+UART:BINARYOFF,7BIT
OK
```

Commands and responses are ASCII, so they still work at 7 bits. Only binary transfers
are blocked.

> **A wrong setting is hard to undo.** If the module comes up with new settings the
> host cannot match, the AT port cannot be used to recover. What remains is the web
> interface ([Chapter 10](#sec-web)) and the `FAC_RSTn` pin.

- A speed not in the list returns `ERROR:VALUE_OUT_OF_RANGE`; an unknown name returns
  `ERROR:INVALID_PARAMETER`.
- [`AT+FACTORY`](#cmd-factory) also returns these settings to their defaults.

---

<a id="sec-net"></a>

## 4. Network

<a id="cmd-netmode"></a>

### AT+NETMODE (address assignment)

```text
AT+NETMODE=DHCP
AT+NETMODE=STATIC
AT+NETMODE?          → +NETMODE:DHCP
```

<a id="cmd-ip"></a>
<a id="cmd-mask"></a>
<a id="cmd-gw"></a>
<a id="cmd-dns"></a>

### AT+IP · AT+MASK · AT+GW · AT+DNS (address settings)

```text
AT+IP="192.168.0.100"
AT+MASK="255.255.255.0"
AT+GW="192.168.0.1"
AT+DNS="8.8.8.8"
AT+SAVE

AT+IP?               → +IP:"192.168.0.100"
```

The factory default is STATIC 192.168.11.2 / 255.255.255.0 with gateway
192.168.11.1.

- Set changes the value to be stored; query reads the value the module is using
  now. Under DHCP the two normally differ, because the leased address is not
  written to the settings.
- `AT+DNS?` is the exception: it reports the DNS address the firmware is using.
- If `AT+SAVE` actually changes the network settings, all open sockets are closed.
  Closed channels are not reopened automatically.

---

<a id="sec-snmp"></a>

## 5. SNMP agent and product identity

<a id="cmd-snmp"></a>

### AT+SNMP (agent on/off)

```text
AT+SNMP=1
AT+SNMP=0
AT+SNMP?             → +SNMP:1
```

<a id="cmd-snmpport"></a>

### AT+SNMPPORT (listening port)

```text
AT+SNMPPORT=161      1 … 65535
AT+SNMPPORT?         → +SNMPPORT:161
```

The query reports the stored value. Until `AT+SAVE`, it can differ from the port that
is actually open.

<a id="cmd-snmpver"></a>

### AT+SNMPVER (SNMP versions answered)

```text
AT+SNMPVER=3         v3 only (factory default)
AT+SNMPVER=2,3       v2c and v3
AT+SNMPVER=1,2,3     all three
AT+SNMPVER?          → +SNMPVER:2,3
```

This is a list, not a single value. Setting only v2c turns v3 off, which also cuts
the SNMPv3 access used to configure the device.

- Requests in a version not in the list get no response; only an internal counter is
  incremented. That counter can be read over SNMP at `1.3.6.1.2.1.11.3.0`
  (snmpInBadVersions).
- Listing the same version twice is refused (`1,1` · `3,3`).
- An empty list returns `ERROR:INVALID_PARAMETER`. To stop the agent, use
  [`AT+SNMP=0`](#cmd-snmp).
- Registering a community has no effect unless its version is enabled here.

#### Differences under v1

| v2c · v3 | v1 |
|---|---|
| `Counter64` value | `GET` returns `noSuchName`. `GETNEXT` skips the object |
| `noSuchObject` · `noSuchInstance` · `endOfMibView` | `noSuchName` |
| A SET with a bad value (`wrongType`, `wrongValue`, `wrongLength`, ...) | `badValue` |
| A target that cannot be written (`notWritable`, `noCreation`, `noAccess`) | `noSuchName` |
| Anything else, such as `commitFailed` | `genErr` |
| `GETBULK` | Does not exist. A v1 message containing it gets no response |

As a result, walking the same objects with SNMPv1 returns fewer entries, one fewer
for each `Counter64` object.

<a id="cmd-engineid"></a>

### AT+ENGINEID? (engine ID)

```text
AT+ENGINEID?         → +ENGINEID:"8000CECE030008DC123456"
```

`(Enterprise number | 0x80000000)` in 4 bytes + format byte `0x03` + 6-byte MAC.
Read-only; it changes if the MAC changes.

> SNMPv3 keys are derived together with this value, so if the engine ID changes,
> every registered user key becomes invalid.

<a id="cmd-engineboot"></a>

### AT+ENGINEBOOT? (engine boot count)

```text
AT+ENGINEBOOT?       → +ENGINEBOOT:37
```

A monotonically increasing value used for the SNMPv3 time window.

<a id="cmd-sysobjid"></a>

### AT+SYSOBJID (sysObjectID)

```text
AT+SYSOBJID="1.3.6.1.4.1.12345.1.1"
AT+SYSOBJID=""                          revert to default
AT+SYSOBJID?         → +SYSOBJID:"1.3.6.1.4.1.52942",DEFAULT
                     → +SYSOBJID:"1.3.6.1.4.1.12345.1.1",CONFIGURED
```

This value tells the manager which company's product the device is. The module is a
component, so set it to the enterprise OID of the end-product manufacturer. If it
is not set, the module answers with its own manufacturer's number.

- At least 2 arcs are required.
- This value alone is not subject to the product enterprise subtree check.
- It is read-only over SNMP.

<a id="cmd-sysdescr"></a>
<a id="cmd-sysname"></a>
<a id="cmd-syscontact"></a>
<a id="cmd-syslocation"></a>

### AT+SYSDESCR · AT+SYSNAME · AT+SYSCONTACT · AT+SYSLOCATION (description, name, contact, location)

```text
AT+SYSDESCR="Acme UPS-3000 controller"  up to 63 characters
AT+SYSNAME="ups-lab-03"                  up to 31 characters
AT+SYSCONTACT="ops@example.com"           up to 63 characters
AT+SYSLOCATION="Seoul HQ, B2, rack 4"     up to 63 characters
AT+SYSCONTACT=""                          clear
AT+SYSDESCR=""                            back to the module's own text
AT+SYSDESCR?         → +SYSDESCR:"Acme UPS-3000 controller",CONFIGURED
AT+SYSNAME?          → +SYSNAME:"ups-lab-03"
AT+SYSCONTACT?       → +SYSCONTACT:"ops@example.com"
AT+SYSLOCATION?      → +SYSLOCATION:"Seoul HQ, B2, rack 4"
AT+SAVE
```

The description (sysDescr), name (sysName), contact (sysContact) and location
(sysLocation) an SNMP manager shows in its device list. Set them so that each
installed device can be told apart.

- While sysDescr is not set (or after `""`), the module answers its own text,
  `EOE-ioNIC_SNMP SNMPv3 module, firmware <version>`. `DEFAULT` or `CONFIGURED` in
  the query result says which. With sysDescr set, check the firmware version with
  `AT+VERSION?`.

- `AT+SYSNAME` is the same value as Hostname on the web interface's Network tab.
  Changing it does not drop network connections.
- Only printable ASCII (letters, digits, space and symbols) is allowed, and `"` is not.
  Non-ASCII text is `ERROR:INVALID_PARAMETER`; a value that is too long is
  `ERROR:BUFFER_TOO_LONG`. A comma inside the quotes is part of the value.
- Takes effect at once; send `AT+SAVE` to keep it across a reboot.
- sysDescr, sysContact and sysLocation can also be set on the web interface's
  Identity tab.
- Read-only over SNMP.

<a id="cmd-productid"></a>

### AT+PRODUCTID (product ID override)

```text
AT+PRODUCTID=0x00010002    set override
AT+PRODUCTID=0             clear override
AT+PRODUCTID?
  +PRODUCTID:0x00010002,OVERRIDE
  +PRODUCTID:FACTORY,0x454F4501      ← only while overridden
```

The product ID is used to refuse OTA packages meant for other products. An
override disables that check, so every place the value is shown also indicates
whether it is overridden.

| Marker | Meaning |
|---|---|
| `FACTORY` | Value from the factory record |
| `OVERRIDE` | Value set by this command |
| `PLACEHOLDER` | Value never assigned |

`0` clears the override; it is not a value.

<a id="cmd-productarc"></a>

### AT+PRODUCTARC (product arc for automatic OID placement)

```text
AT+PRODUCTARC=7      → new objects at <enterprise>.7.<id>.0
AT+PRODUCTARC=0      → new objects at <enterprise>.<id>.0
AT+PRODUCTARC?       → +PRODUCTARC:7,SET  /  +PRODUCTARC:0,NONE
```

Where objects are placed when [`AT+OBJADD`](#cmd-objadd) omits the OID.
It applies only to objects created from now on; existing objects do not move.

---

<a id="sec-user"></a>

## 6. SNMPv3 users and communities

Up to 4 SNMPv3 users and up to 4 v1/v2c communities. The two tables are
separate: deleting from one does not free a slot in the other.

<a id="cmd-usmadd"></a>

### AT+USMADD (add or change an SNMPv3 user)

```text
AT+USMADD="<name>",<level>[,<auth>,"<auth-pw>"[,<priv>,"<priv-pw>"]][,<role>]
```

| Argument | Values |
|---|---|
| level | `NOAUTHNOPRIV` · `AUTHNOPRIV` · `AUTHPRIV` |
| auth | `SHA256` · `SHA1` (= `SHA`) |
| priv | `AES128` (= `AES`) |
| role | `ADMINISTRATOR` · `OPERATOR` · `MONITOR` · `NOTIFICATION` (default `OPERATOR`) |

```text
AT+USMADD="admin",AUTHPRIV,SHA256,"auth-password",AES128,"priv-password"
AT+USMADD="mon",NOAUTHNOPRIV,,,,,MONITOR
AT+SAVE
```

| role | Access |
|---|---|
| `ADMINISTRATOR` | Read and write all objects |
| `OPERATOR` | Read and write regular objects |
| `MONITOR` | Read only |
| `NOTIFICATION` | For receiving Traps / Informs |

- role is always the 7th position. Keep the commas even for a level that needs no
  keys.
- MD5 and DES are not supported. They are refused with `ERROR:NOT_SUPPORTED`
  rather than replaced with a weaker algorithm.
- An invalid role is refused, not replaced with the default.
- The name is up to 32 bytes and each password up to 63 bytes. Longer values
  return `ERROR:INVALID_PARAMETER`.
- The same name overwrites the existing user. With no free slot, the result is
  `ERROR:USER_LIMIT`.
- Registration takes a few seconds. Wait for `OK`.

> **Passwords are not stored.** They are converted at once into keys localized to the
> engine ID, and every plaintext copy is wiped. A lost password cannot be recovered;
> delete the user and create it again.

<a id="cmd-usmdel"></a>

### AT+USMDEL (delete a user)

```text
AT+USMDEL="admin"
AT+SAVE
```

An unknown name returns `ERROR:OBJECT_NOT_FOUND`.

<a id="cmd-usmuser"></a>

### AT+USMUSER? (list users)

```text
AT+USMUSER?
+USMUSER:"admin",AUTHPRIV,SHA256,AES128,CONFIGURED,ENABLED,Administrator
```

Name · level · authentication algorithm · privacy algorithm · keys configured ·
enabled · role.

The role is printed as `Administrator` · `Operator` · `Monitor` · `Notification`,
not in the upper case used on input. Input is not case-sensitive, so the printed value
can be entered again as it is. [`AT+COMM?`](#cmd-comm) does the same.

Neither passwords nor keys are returned, not even the key length.

<a id="cmd-commadd"></a>

### AT+COMMADD (add or change a community)

```text
AT+COMMADD="<name>",<role>[,<enabled>]
```

| Argument | Values | Default |
|---|---|---|
| role | `ADMINISTRATOR` · `OPERATOR` · `MONITOR` · `NOTIFICATION` | None (required) |
| enabled | `0` · `1` | `1` |

```text
AT+SNMPVER=2,3
AT+COMMADD="ro-poll",MONITOR
AT+SAVE
```

- role is required and has no default. An invalid value returns
  `ERROR:INVALID_PARAMETER`.
- Access checks are the same as for USM users. A community cannot reach more than a
  v3 user with the same role.
- For an existing name, only the given fields change. If `enabled` is omitted,
  the existing value is kept. To disable explicitly, use
  `AT+COMMADD="ro-poll",MONITOR,0`.
- The name is up to 32 bytes.
- With no free slot, the result is `ERROR:COMMUNITY_LIMIT`.

<a id="cmd-commdel"></a>

### AT+COMMDEL (delete a community)

```text
AT+COMMDEL="ro-poll"
AT+SAVE
```

A community can be deleted even if a Trap receiver still uses it. Sending to that
receiver then fails with `UNKNOWN_COMMUNITY`.

<a id="cmd-comm"></a>

### AT+COMM? (list communities)

```text
AT+COMM?
+COMM:"ro-poll",Monitor,ENABLED
```

Name · role · enabled. Community strings are returned as they are, because SNMP
already carries them in plaintext.

---

<a id="sec-object"></a>

## 7. Objects and OID mapping

Up to 1024 objects, of which up to 128 can be `OctetString`.

<a id="cmd-objadd"></a>

### AT+OBJADD (define an object)

```text
AT+OBJADD=<id>,"<name>",<type>,<access>[,<persistence>[,"<oid>"]]
```

| Argument | Values |
|---|---|
| id | 1 … 65535. The number the host uses to refer to this object |
| name | Up to 19 bytes. Longer returns `ERROR:INVALID_PARAMETER` |
| type | `Integer32` `Unsigned32` `Gauge32` `Counter32` `Counter64` `TimeTicks` `OctetString` `IpAddress` |
| access | `RO` · `RW` |
| persistence | `VOLATILE` (default) · `PERSISTENT` |
| oid | Placed automatically if omitted. Up to 16 arcs and 20 encoded bytes |

```text
AT+OBJADD=1,"temperature",Integer32,RO,VOLATILE
AT+OBJADD=3,"relay1",Integer32,RW,PERSISTENT
AT+OBJADD=9,"custom",Gauge32,RO,VOLATILE,"1.3.6.1.4.1.52942.9.0"
AT+SAVE
```

- If the OID is omitted, the object is placed at `<enterprise>[.<product arc>].<id>.0`.
- An explicit OID is checked against the enterprise subtree. Outside it, the result is
  `ERROR:OID_OUT_OF_SUBTREE`.
- The value of a `PERSISTENT` object survives a reboot; a `VOLATILE` one does not.
- The mapping source changes to `MANUAL_AT` ([`AT+OIDMAP?`](#cmd-oidmap)).
- Without `AT+SAVE`, the definition is gone at the next boot.

> **`ERROR:OID_TOO_LONG` is returned both for more than 16 arcs and for an OID whose
> BER encoding exceeds 20 B even with 16 arcs or fewer. A large number such as
> `52942` takes 3 B for one arc, a small one takes 1 B. `1.3.6.1.4.1.52942.a.b.c.0` is
> 12 B, well within the limit.

| Error | Cause |
|---|---|
| `DUPLICATE_ID` · `DUPLICATE_NAME` · `DUPLICATE_OID` | Tells you whether the number, name or OID collided |
| `TYPE_MISMATCH` | Unknown type |
| `INVALID_PARAMETER` | Invalid access or persistence value |
| `OBJECT_LIMIT` | No free object or string slot |

<a id="cmd-objattr"></a>

### AT+OBJATTR (object attributes)

```text
AT+OBJATTR=<id>,SETMODE,IMMEDIATE|CONFIRMED
AT+OBJATTR=<id>,RANGE,<min>,<max>      0,0 = no range
AT+OBJATTR=<id>,UNIT,"<unit>"           up to 7 bytes
AT+OBJATTR=<id>,DESC,"<description>"    up to 31 bytes
AT+OBJATTR=<id>,DEFAULT,<value>         integer types only, 0 = none
AT+OBJATTR?
  +OBJATTR:10,CONFIRMED,0,1,"","Relay; host must agree first",0
  +OBJATTR:2,IMMEDIATE,0,85,"degC","Board temperature",25
```

Adds or changes, on an object created with `AT+OBJADD`, the attributes a web CSV row
carries. One attribute per command; the object is not deleted, so its value (PERSISTENT
included) is kept.

```text
AT+OBJADD=10,"relay",Integer32,RW,PERSISTENT
AT+OBJATTR=10,SETMODE,CONFIRMED
AT+OBJATTR=10,RANGE,0,1
AT+OBJATTR=10,DESC,"Relay; host must agree first"
AT+SAVE
```

| Attribute | Meaning |
|---|---|
| `SETMODE` | With `CONFIRMED`, a manager's SET is not applied at once: the module asks the host with `+SNMPSET:<tid>,<id>,<value>`, and it is applied only when [`AT+SETACK`](#cmd-setack) approves it within 750 ms |
| `RANGE` | The value range for integer types, the length range (0 to 64) for `OctetString`. `AT+OBJVAL` and SNMP SETs outside it are refused |
| `UNIT` · `DESC` | Unit and description. `""` clears them |
| `DEFAULT` | The starting value when the object is created or the device boots. The current value is not changed. A PERSISTENT object's stored value takes precedence |

- A range that the current value falls outside is refused. Change the value first, then
  narrow the range.
- `IpAddress` and `Counter64` take no range; `OctetString` and `IpAddress` take no default.
- The mapping source becomes `MANUAL_AT`. Without `AT+SAVE` the change is gone at the next
  boot. The attributes also appear in the web CSV export.

| Error | Cause |
|---|---|
| `OBJECT_NOT_FOUND` | No object with that id |
| `VALUE_OUT_OF_RANGE` | A range or default does not fit the type, or the current value or the default is outside the range |
| `TYPE_MISMATCH` | That attribute cannot be given to this type |
| `BUFFER_TOO_LONG` | The unit or description is too long |
| `INVALID_PARAMETER` | Wrong attribute name or value format, or min is greater than max |

<a id="cmd-objdel"></a>

### AT+OBJDEL (delete an object)

```text
AT+OBJDEL=1
AT+SAVE
```

<a id="cmd-objval"></a>

### AT+OBJVAL (write and read values)

```text
AT+OBJVAL=1,253
AT+OBJVAL=5,"Busan-Lab-B"
AT+OBJVAL=7,"192.168.0.9"

AT+OBJVAL?
+OBJVAL:1,"temperature",1.3.6.1.4.1.52942.1.0,253
```

- No `AT+SAVE` needed. The value takes effect immediately.
- The value is interpreted according to the type. `Counter64` accepts the full 64 bits.
- An out-of-range value returns `ERROR:VALUE_OUT_OF_RANGE`.
- String values are up to 63 bytes; longer returns `ERROR:INVALID_PARAMETER`.
  The same object accepts up to 64 bytes through an SNMP SET.
- Strings in a `PERSISTENT` object are limited to 44 bytes, because a longer value
  does not fit the storage record. Longer values are refused with
  `ERROR:BUFFER_TOO_LONG` and the value is left unchanged.
- The query returns the whole list. `AT+OBJVAL?<id>` is not supported.
- Object definitions are not touched, so the mapping source does not change.

<a id="cmd-obj"></a>

### AT+OBJ? (query object definitions)

```text
AT+OBJ?
+OBJ:1,"temperature",1.3.6.1.4.1.52942.1.0,Integer32,RW,PERSISTENT,IMMEDIATE,"C"
```

id · name · OID · type · access · persistence · SET mode · unit.

| Field | Values |
|---|---|
| Access | `RO` · `RW` |
| Persistence | `PERSISTENT` · `VOLATILE` |
| SET mode | `IMMEDIATE` · `CONFIRMED` (set only through CSV) |

[`AT+OBJVAL?`](#cmd-objval) answers with values; this command answers with definitions.

<a id="cmd-setack"></a>

### AT+SETACK (answer a confirmed SET)

```text
+SNMPSET:27,3,1          ← confirmation request from the module (request no., object no., value)
AT+SETACK=27,OK          → approve
AT+SETACK=27,FAIL        → reject
```

- Answer within 750 ms. If the deadline passes, the manager receives an error and
  a late answer returns `ERROR:HOST_TIMEOUT`.
- Anything other than `OK` is treated as a rejection, but the answer must be 7 bytes
  or shorter. A longer one such as `ERROR:BUSY` is itself refused with
  `ERROR:INVALID_PARAMETER`, and the SET fails after the 750 ms deadline. Send `FAIL`
  to reject.

<a id="cmd-oidmap"></a>

### AT+OIDMAP? (mapping status)

```text
AT+OIDMAP?
+OIDMAP:CSV_IMPORT,64,3,32768,0xA1B2C3D4,ACTIVE
```

Source · object count · CSV schema version · original size · original CRC32 · active
state.

| Source | Meaning |
|---|---|
| `DEFAULT` | No user mapping |
| `MANUAL_AT` | Defined with AT commands |
| `CSV_IMPORT` | Imported from a CSV via the web interface |
| `CSV_IMPORT_MODIFIED` | Imported from a CSV, then changed with AT |

The original CSV content is not returned over AT.

<a id="cmd-oidmapreload"></a>
<a id="cmd-oidmapclear"></a>

### AT+OIDMAPRELOAD · AT+OIDMAPCLEAR

```text
AT+OIDMAPRELOAD              re-parse and apply the stored CSV
AT+OIDMAPCLEAR="CONFIRM"     clear the user mapping
```

- With no stored CSV the result is `ERROR:CSV_NOT_AVAILABLE`; with a corrupt one,
  `ERROR:INVALID_CSV`. A CSV with a header line and no object rows is also
  `INVALID_CSV`. To empty the mapping, use `AT+OIDMAPCLEAR="CONFIRM"`.
- CSV upload is available only through the web interface.

---

<a id="sec-notify"></a>

## 8. Notifications (Trap · Inform)

Up to 4 receivers, index `0 … 3`.

| | Trap | Inform |
|---|---|---|
| Acknowledgement | Not checked | Waits for a response |
| On failure | Ends as is | Retried, then `ERROR:NOTIFY_NO_RESPONSE` |

<a id="cmd-targetadd"></a>

### AT+TARGETADD (register a receiver)

```text
AT+TARGETADD=<idx>,"<ip>",<port>,"<user>",<level>
              [,<type>[,<retry>[,<timeout>[,<version>[,"<community>"]]]]]
```

| Argument | Values | Default |
|---|---|---|
| type | `TRAP` · `INFORM` | `TRAP` |
| retry | 0 … 255 | 3 |
| timeout | 1 … 65535 (ms) | 1000 |
| version | `V1` · `V2C` · `V3` | `V3` |
| community | Required for v1/v2c, not allowed for v3 | — |

```text
AT+TARGETADD=1,"192.168.0.20",162,"trapuser",AUTHPRIV
AT+TARGETADD=2,"192.168.0.21",162,"informuser",AUTHNOPRIV,INFORM,5,2000
AT+TARGETADD=3,"192.168.0.22",162,"",,TRAP,3,1000,V2C,"ro-poll"
AT+SAVE
```

- v1/v2c receivers have no user and no security level. Leave those two positions
  empty.
- Out-of-range retry or timeout values are refused, not clamped.
- Registering again at the same index erases the receiver keys stored there.
- Whether the community exists is checked when sending, not when registering.
- The user name and the community name are each up to 32 bytes.
- `INFORM` for a `V1` receiver returns `ERROR:NOT_SUPPORTED`. SNMPv1 has no Inform
  at all, and a Trap is not sent in its place.

<a id="cmd-targetdel"></a>
<a id="cmd-target"></a>

### AT+TARGETDEL · AT+TARGET?

```text
AT+TARGETDEL=1

AT+TARGET?
+TARGET:1,"192.168.0.20",162,"trapuser",TRAP,KEYED,AUTHPRIV,3,1000,V3,""
+TARGET:3,"192.168.0.22",162,"",TRAP,NOKEY,NOAUTHNOPRIV,3,1000,V2C,"ro-poll"
```

Index · address · port · user · type · keys registered · security level · retry ·
timeout · version · community. The keys themselves are not returned.

<a id="cmd-targetkey"></a>

### AT+TARGETKEY (register a receiver's localized keys)

```text
AT+TARGETKEY=<idx>,"<engine-id-hex>","<auth-key-hex>"[,"<priv-key-hex>"]
AT+TARGETKEY=1,"","",""        clear
```

Needed only for authenticated v3 Informs. Keys localized to the receiver's engine
ID are required, and since this device does not hold passwords, the keys are computed
outside and entered here (`inform_keys.md`).

- Sending an authenticated Inform without keys returns `ERROR:ACCESS_DENIED`.
- Not needed for Traps or v2c Informs.

<a id="cmd-trapsend"></a>
<a id="cmd-informsend"></a>

### AT+TRAPSEND · AT+INFORMSEND

```text
AT+TRAPSEND=<trap-id>[,<object-id>]
AT+INFORMSEND=<trap-id>[,<object-id>]
```

```text
AT+TRAPSEND=1001,2
AT+INFORMSEND=1001,2
```

Sent to every registered receiver. The command decides whether it is a Trap or an
Inform; the type stored for a receiver changes only through the 6th argument of
[`AT+TARGETADD`](#cmd-targetadd).

| Error | Cause |
|---|---|
| `NOTIFY_NO_RESPONSE` | The Inform got no response through all retries |
| `UNKNOWN_COMMUNITY` | The receiver's community is missing or disabled |
| `UNKNOWN_USER` | The USM user a v3 receiver names does not exist |
| `ACCESS_DENIED` | Authenticated Inform without keys |

A v2c Inform response is accepted only if the request-id, the community and the source
address all match.

---

<a id="sec-socket"></a>

## 9. TCP · UDP socket channels

Logical channels 0 … 3, with a maximum payload of 1460 bytes per send.
The channel number is the host's own number and has nothing to do with the socket
numbers inside the Ethernet chip.

<a id="cmd-sockavail"></a>
<a id="cmd-sockstatus"></a>

### AT+SOCKAVAIL? · AT+SOCKSTATUS?

```text
AT+SOCKAVAIL?
+SOCKAVAIL:2

AT+SOCKSTATUS?
+SOCKSTATUS:0,TCP_CLIENT,ESTABLISHED,"192.168.0.20",5000,40001
+SOCKSTATUS:1,TCP_SERVER,LISTENING,"0.0.0.0",0,5001
+SOCKSTATUS:2,UDP,OPEN,"0.0.0.0",0,6000
```

States: `CLOSED` `OPENING` `LISTENING` `CONNECTING` `ESTABLISHED` `CLOSING` `OPEN`
`ERROR`.

> A UDP channel is `OPEN`, not `ESTABLISHED`. It sends and receives normally in
> that state.

<a id="cmd-sockopen"></a>

### AT+SOCKOPEN (open a channel)

```text
AT+SOCKOPEN=0,TCP_CLIENT,"192.168.0.20",5000
AT+SOCKOPEN=0,TCP_CLIENT,"server.example.com",5000
AT+SOCKOPEN=0,TCP_CLIENT,"192.168.0.20",5000,40001    with local port
AT+SOCKOPEN=1,TCP_SERVER,5001
AT+SOCKOPEN=2,UDP,6000
```

- With no free resources the result is `ERROR:NO_SOCKET`. Existing channels are never
  closed to make room.
- Every connection failure returns `ERROR:CONNECT_FAILED`; the reason comes in the
  `+SOCKERROR` line sent just before it.
- Ports are 1 … 65535. The local port may be omitted.
- A TCP server accepts one client per channel.
- The host name is up to 63 bytes.

<a id="cmd-sockclose"></a>
<a id="cmd-sockpeer"></a>

### AT+SOCKCLOSE · AT+SOCKPEER

```text
AT+SOCKCLOSE=0
AT+SOCKPEER=2,"192.168.0.30",7000      default UDP peer
```

<a id="cmd-socksend"></a>
<a id="cmd-socksendto"></a>

### AT+SOCKSEND · AT+SOCKSENDTO

```text
AT+SOCKSEND=<ch>,<len>
AT+SOCKSENDTO=<ch>,"<host>",<port>,<len>
```

```text
AT+SOCKSEND=0,5
> HELLO
+SOCKSEND:0,5
OK
```

For the binary mode rules, see [1.5](#sec-rules-binary).

- The second number in the response is the number of bytes actually sent. It can be
  smaller than requested.
- A `len` of 0 returns `INVALID_PARAMETER`; over 1460 returns `BUFFER_TOO_LONG`.
- On a channel that cannot send, `ERROR:NOT_CONNECTED` is returned before the prompt.
- `AT+SOCKSENDTO` works on a UDP channel only, and the port (1 … 65535) and address
  (not `0.0.0.0`) are also checked before the prompt.
- Received data arrives as `+SOCKRX` · `+SOCKRXFROM` URCs ([Chapter 12](#sec-urc)).

<a id="cmd-sockopt"></a>

### AT+SOCKOPT (socket options)

```text
AT+SOCKOPT=<ch>,<option>,<value>
AT+SOCKOPT?
```

| Option | Applies to | Value |
|---|---|---|
| `KEEPALIVE` | TCP | 0 / 1 |
| `KEEPIDLE` | TCP | seconds, 0 … 65535 (outside: `VALUE_OUT_OF_RANGE`) |
| `NODELAY` | TCP | 0 / 1 |
| `BROADCAST` | UDP | 0 / 1 |

A TCP option on a UDP channel, or the reverse, returns `ERROR:NOT_SUPPORTED`.

---

<a id="sec-web"></a>

## 10. Web management

The web interface is disabled by default, and it can be turned on only over AT.
Its address is `http://<IP>:50003/` (the port cannot be changed).

From the factory there is no web password, so no one can log in. Set one with
`AT+WEBPASS` before turning the web on. The account name defaults to `admin`.

<a id="cmd-web"></a>
<a id="cmd-webuser"></a>
<a id="cmd-webpass"></a>
<a id="cmd-webtimeout"></a>

### AT+WEB · AT+WEBUSER · AT+WEBPASS · AT+WEBTIMEOUT

```text
AT+WEB=1                 enable the web interface
AT+WEB=0                 disable
AT+WEB=1,600             enable + session timeout of 600 s (1 … 65535)
AT+WEB?                  → +WEB:1,600,SET

AT+WEBUSER="admin"
AT+WEBUSER?              → +WEBUSER:"admin"

AT+WEBPASS="new-password"   8 … 63 bytes
AT+WEBTIMEOUT=600        1 … 65535 s
AT+WEBTIMEOUT?           → +WEBTIMEOUT:600
AT+SAVE
```

Third field of `AT+WEB?`:

| Value | Meaning |
|---|---|
| `MUSTCHANGE` | No password yet. Nobody can log in until one is set with `AT+WEBPASS` |
| `SET` | A password is set |

- There is no `AT+WEBPASS?`. The password is stored only in a form that cannot be
  reversed, so there is nothing to answer with.
- The account is up to 23 bytes and the password up to 63 bytes.
- One connection is served at a time. When requests come back to back, the later
  connection can be refused for a moment, so a script should retry once.

---

<a id="sec-ota"></a>

## 11. Firmware update (OTA)

There are two ways: upload through the web interface, or
[`AT+OTAFWUP`](#cmd-otafwup). Neither installs immediately. The received image is
verified, stored in a staging area and installed at the next boot. If the transfer
fails or is interrupted, the running firmware stays in place.

<a id="cmd-otafwup"></a>

### AT+OTAFWUP (send firmware over UART)

```text
AT+OTAFWUP=<seconds>     idle timeout, 1 … 600
```

#### Sequence

```text
AT+OTAFWUP=30
+OTAFWUP:READY                 ← staging area ready. Send the whole file now
<the entire .fwpkg file>
+OTAFWUP:IMAGE,1.2.0,218980    ← header accepted. Version and image size
+OTAFWUP:DONE,218980,1.2.0
OK
```

- There is no step at which to pause. After `+OTAFWUP:READY`, send the whole file
  in one go.
- `+OTAFWUP:IMAGE` is a progress notice, not a prompt.
- Wait for `READY`. Right after the command the module erases the staging area for
  about 0.5 s, during which reception stops and anything sent is lost.
- No progress is reported during the transfer. Check how much arrived with
  [`AT+OTASTATUS?`](#cmd-otastatus).

#### Tera Term

1. Type `AT+OTAFWUP=30`
2. Wait for `+OTAFWUP:READY` (about 0.5 s)
3. File → Send file → tick Binary → select the `.fwpkg`
4. Check for `+OTAFWUP:DONE` and `OK`, then [`AT+OTAREBOOT`](#cmd-otareboot)

Flow control is not required. At the factory default (115200 8N1, no flow control)
a package of about 214,000 bytes goes through in 19 seconds without loss. When raising
the speed, `RTSCTS` is recommended.

#### When it looks stuck

```text
+OTAFWUP:IMAGE,1.2.0,218980
(...no response...)
```

The module is waiting for the rest of the package. In this state every byte you
type goes in as firmware data and restarts the idle timer from zero.

> **Take your hands off and wait `<seconds>`; the module returns to command mode on
> its own.

```text
+OTAFWUP:ERROR,TIMEOUT,183253,218980,OVERRUN
ERROR:PAYLOAD_TIMEOUT
```

This means only 183,253 of 215,164 bytes arrived.

| Marker | Meaning | Action |
|---|---|---|
| `OVERRUN` present | The host sent everything but the module did not receive it all | Enable flow control or lower the speed |
| `OVERRUN` absent | The host stopped partway | Check the file and the transfer tool |

#### Refusals and failures

```text
+OTAFWUP:ERROR,PRODUCT,0xFFFF0001,0x454F4501
ERROR:INVALID_IMAGE
```

The first value is the package's product ID, the second the module's. The
module value is the fourth field of [`AT+VERSION?`](#cmd-version).

| URC | Response | Meaning |
|---|---|---|
| `+OTAFWUP:ERROR,MAGIC` | `INVALID_IMAGE` | Not a firmware package |
| `+OTAFWUP:ERROR,HEADERCRC` | `INVALID_IMAGE` | The header is corrupt |
| `+OTAFWUP:ERROR,PRODUCT,<package>,<module>` | `INVALID_IMAGE` | Built for another product. A trailing `,OVERRIDDEN` means the module value is an override |
| `+OTAFWUP:ERROR,HWREV,<min>,<max>,<module>` | `INVALID_IMAGE` | Hardware revision out of range |
| `+OTAFWUP:ERROR,SIZE` | `INVALID_IMAGE` | Image size out of range |
| `+OTAFWUP:ERROR,HEADER` | `INVALID_IMAGE` | A header value does not match this device |
| `+OTAFWUP:ERROR,UNSUPPORTED` | `INVALID_IMAGE` | Header version or required bootloader version is too high |
| `+OTAFWUP:ERROR,IMAGECRC` | `INVALID_IMAGE` | Content check failed. Detected after everything is received |
| `+OTAFWUP:ERROR,NOTAPP` | `INVALID_IMAGE` | The package is intact but is not firmware the module can start. Detected after everything is received |
| `+OTAFWUP:ERROR,BUSY` | `STORAGE_BUSY` | Storage is in use by something else |
| `+OTAFWUP:ERROR,STORAGE` | `STORAGE_FAILURE` | Flash write failed |
| `+OTAFWUP:ERROR,TIMEOUT,<received>,<total>` | `PAYLOAD_TIMEOUT` | The host stopped partway |
| `+OTAFWUP:ERROR,TIMEOUT,<received>,<total>,OVERRUN` | `PAYLOAD_TIMEOUT` | The module missed some bytes |
| `+OTAFWUP:ERROR,PORT,"<reason>"` | `NOT_SUPPORTED` | The port cannot carry 8 bits |

- However it ends, the port returns to AT command mode.
- After a refusal, leftover bytes may be read as command lines and a few
  `ERROR:INVALID_COMMAND` lines may follow. One empty line (`CR`) clears them.
- The staging area is erased before the header is checked. Even for a refused
  file, whatever was there before has already been erased.

#### Port requirements

The transfer does not start at 7 bits or with `XONXOFF`. Change to 8 bits with
`NONE`, `RTSCTS` or `DTRDSR` using [`AT+UART`](#cmd-uart) and try again.

`DTRDSR` can be used. However, if the host keeps DTR low, `+OTAFWUP:READY` does not
appear and the module waits. The idle timeout counts reception, so it does not end
this wait. Raising DTR lets the transfer continue.

<a id="cmd-otastatus"></a>

### AT+OTASTATUS? (progress status)

```text
AT+OTASTATUS?
+OTASTATUS:DOWNLOADING,131072,262144,50
```

State · bytes received · total size · progress (%). States: `IDLE` `HEADER` `ERASING`
`DOWNLOADING` `VERIFYING` `READY` `FAILED`.

<a id="cmd-otacancel"></a>
<a id="cmd-otareboot"></a>

### AT+OTACANCEL · AT+OTAREBOOT

```text
AT+OTACANCEL         cancel the update in progress
AT+OTAREBOOT         reboot into the staged image
```

- With nothing staged, both return `ERROR:OTA_NOT_STAGED`.
- `AT+OTACANCEL` also works after the transfer has finished and the state is `READY`.
- `AT+OTAREBOOT` closes connections in the same order as [`AT+REBOOT`](#cmd-reboot).
- An image uploaded through the web interface is installed by a reboot the module makes
  by itself 5 seconds later. An `AT+OTACANCEL` in that time discards the image and the
  reboot does not happen.

---

<a id="sec-urc"></a>

## 12. URCs (unsolicited messages)

These arrive at any time without a request from the host. They share the transmit path
with command responses, so they can appear before or after an `OK`.

| URC | Category | Meaning |
|---|---|---|
| `+READY:"1.2.0"` | Device | Boot complete. Bytes sent on the AT port before this line are discarded |
| `+LINK:UP` / `+LINK:DOWN` | Network | Ethernet link changed |
| `+IPCHANGED:"<ip>","<mask>","<gw>"` | Network | Addresses applied again (see below) |
| `+SNMPSET:<obj>,<value>` | Object | An immediate SET was applied |
| `+SNMPSET:<tid>,<obj>,<value>` | Object | Confirmed SET. Answer with [`AT+SETACK`](#cmd-setack) |
| `+NOTIFYFAIL:<idx>,<reason>` | Notification | A notification could not be sent |
| `+SOCKCONNECTED:<ch>,"<ip>",<port>` | Socket | TCP client connected |
| `+SOCKACCEPTED:<ch>,"<ip>",<port>` | Socket | TCP server accepted a client |
| `+SOCKRX:<ch>,<len>` | Socket | Data received. Raw bytes follow |
| `+SOCKRXFROM:<ch>,"<ip>",<port>,<len>` | Socket | UDP data received. Raw bytes follow |
| `+SOCKDISCONNECTED:<ch>,<reason>` | Socket | Channel closed |
| `+SOCKERROR:<ch>,<reason>` | Socket | Socket error |
| `+FACTORY:COMPLETE` | Device | Factory reset complete |

| URC | Reason values |
|---|---|
| `+SOCKDISCONNECTED` | `REMOTE_CLOSE` `ERROR` `NETWORK_RECONFIGURED` `ADDRESS_CHANGED` `MODULE_RESET` |
| `+SOCKERROR` | `CONNECTION_TIMEOUT` `CONNECTION_RESET` `CONNECTION_REFUSED` `CONNECTION_ABORTED` `CONNECTION_CLOSED` `INVALID_DESCRIPTOR` `UNREACHABLE` `NO_RESOURCE` `UNKNOWN` |
| `+NOTIFYFAIL` | `NO_RESPONSE` `NO_KEYS` `UNKNOWN_USER` `UNKNOWN_COMMUNITY` `AGENT_DOWN` `FAILED` |

`UNKNOWN_USER` means a v3 receiver names a USM user that does not exist
([`AT+USMUSER?`](#cmd-usmuser)); `UNKNOWN_COMMUNITY` means a v1/v2c receiver names a
community that is missing or disabled ([`AT+COMM?`](#cmd-comm)). They are fixed in
different places.

> **When the Ethernet cable is pulled.** `+LINK:DOWN` is sent, but open socket channels
> are not closed. When the cable is plugged back in, a TCP connection simply carries on.
> If data sent while the cable was out is not acknowledged within the retransmission
> limit, that channel ends with `+SOCKERROR`.

> **A 0x00 after a reset.** When the module resets, one 0x00 byte can arrive in front
> of the first line after the reset. That line is `+READY` with DHCP and `+IPCHANGED`
> with a static address. Depending on the host UART it shows as a framing error or a
> break. The module's TX pin (GP4) goes low for a moment during the reset. Look for URCs
> **within** the line rather than comparing from its first byte, and ignore a 0x00 in
> front of it. An external pull-up on GP4 (for example 10 kΩ) is recommended in the
> hardware design.

`+IPCHANGED` is sent every time the module applies its addresses, and the three
values are the IP address, subnet mask and gateway now in use.

- At boot. Before `+READY` with a static address; with DHCP, once the address is
  obtained (after `+READY`)
- After an address setting is changed and [`AT+SAVE`](#cmd-save) is sent. Nothing is
  sent if nothing changed
- When DHCP gives a new address. A renewal with the same address sends nothing

Applying the addresses again closes every open socket channel (`+SOCKDISCONNECTED`
comes first). An SNMP manager has to use the new address as well.

A channel that is already closed does not get a second notification.

---

<a id="sec-error"></a>

## 13. Error codes

```text
ERROR:<code>
```

| Code | Meaning |
|---|---|
| `INVALID_COMMAND` | Unknown command, does not start with `AT`, or that form is not supported |
| `INVALID_PARAMETER` | Argument format, count or range is wrong |
| `BUFFER_TOO_LONG` | A line over 256 B, a payload over 1460 B, or a value too long to store |
| `OBJECT_NOT_FOUND` | No such object, user, receiver or request number |
| `TYPE_MISMATCH` | Unknown object type |
| `ACCESS_DENIED` | Refused for security (e.g. an authenticated Inform sent without keys) |
| `VALUE_OUT_OF_RANGE` | The value is outside the range of its type |
| `HOST_TIMEOUT` | The confirmed SET deadline (750 ms) passed |
| `NO_SOCKET` | Not enough socket resources |
| `INVALID_CHANNEL` | Channel number outside 0 … 3 |
| `ALREADY_OPEN` | The channel is already open |
| `NOT_CONNECTED` | The channel is not in a state that can send |
| `CONNECT_FAILED` | The connection failed (reason in `+SOCKERROR`) |
| `PAYLOAD_TIMEOUT` | The binary payload did not arrive in full within 10 seconds |
| `SOCKET_OVERFLOW` | The receive queue overflowed |
| `STORAGE_BUSY` | Storage is in use by another operation |
| `OTA_PENDING` | Refused because firmware is waiting to be installed |
| `OTA_NOT_STAGED` | No firmware is waiting to be installed |
| `INVALID_CSV` | The CSV could not be parsed |
| `INVALID_IMAGE` | The firmware package failed verification (reason in `+OTAFWUP:ERROR`) |
| `MAPPING_TOO_LARGE` | The mapping exceeds capacity |
| `CSV_NOT_AVAILABLE` | No CSV is stored |
| `STORAGE_FAILURE` | Could not write to flash |
| `USER_LIMIT` | No free SNMPv3 user slot (4 users) |
| `COMMUNITY_LIMIT` | No free community slot (4). Separate from the user table |
| `UNKNOWN_COMMUNITY` | The receiver's community is missing or disabled |
| `UNKNOWN_USER` | The USM user a v3 receiver names does not exist |
| `NOTIFY_NO_RESPONSE` | The Inform got no response through all retries |
| `OID_OUT_OF_SUBTREE` | The OID is outside the product enterprise range |
| `OID_TOO_LONG` | The OID is too long: more than 16 arcs, or more than 20 bytes encoded |
| `DUPLICATE_ID` · `DUPLICATE_NAME` · `DUPLICATE_OID` | That number, name or OID is already in use |
| `OBJECT_LIMIT` | No free object or string slot |
| `NOT_SUPPORTED` | Unsupported algorithm or option |
| `INTERNAL` | Internal error |

---

<a id="sec-index"></a>

## 14. Alphabetical index

| Command | Ch. | Command | Ch. |
|---|---|---|---|
| [`AT`](#cmd-at) | 3 | [`AT+SNMP`](#cmd-snmp) | 5 |
| [`AT+COMM`](#cmd-comm) | 6 | [`AT+SNMPPORT`](#cmd-snmpport) | 5 |
| [`AT+COMMADD`](#cmd-commadd) | 6 | [`AT+SNMPVER`](#cmd-snmpver) | 5 |
| [`AT+COMMDEL`](#cmd-commdel) | 6 | [`AT+SOCKAVAIL`](#cmd-sockavail) | 9 |
| [`AT+DIAG`](#cmd-diag) | 3 | [`AT+SOCKCLOSE`](#cmd-sockclose) | 9 |
| [`AT+DNS`](#cmd-dns) | 4 | [`AT+SOCKOPEN`](#cmd-sockopen) | 9 |
| [`AT+ENGINEBOOT`](#cmd-engineboot) | 5 | [`AT+SOCKOPT`](#cmd-sockopt) | 9 |
| [`AT+ENGINEID`](#cmd-engineid) | 5 | [`AT+SOCKPEER`](#cmd-sockpeer) | 9 |
| [`AT+FACTORY`](#cmd-factory) | 3 | [`AT+SOCKSEND`](#cmd-socksend) | 9 |
| [`AT+GW`](#cmd-gw) | 4 | [`AT+SOCKSENDTO`](#cmd-socksendto) | 9 |
| [`AT+INFORMSEND`](#cmd-informsend) | 8 | [`AT+SOCKSTATUS`](#cmd-sockstatus) | 9 |
| [`AT+IP`](#cmd-ip) | 4 | [`AT+SYSCONTACT`](#cmd-syscontact) | 5 |
| [`AT+MASK`](#cmd-mask) | 4 | [`AT+SYSDESCR`](#cmd-sysdescr) | 5 |
| [`AT+NETMODE`](#cmd-netmode) | 4 | [`AT+SYSLOCATION`](#cmd-syslocation) | 5 |
| [`AT+OBJ`](#cmd-obj) | 7 | [`AT+SYSNAME`](#cmd-sysname) | 5 |
| [`AT+OBJADD`](#cmd-objadd) | 7 | [`AT+SYSOBJID`](#cmd-sysobjid) | 5 |
| [`AT+OBJATTR`](#cmd-objattr) | 7 | [`AT+TARGET`](#cmd-target) | 8 |
| [`AT+OBJDEL`](#cmd-objdel) | 7 | [`AT+TARGETADD`](#cmd-targetadd) | 8 |
| [`AT+OBJVAL`](#cmd-objval) | 7 | [`AT+TARGETDEL`](#cmd-targetdel) | 8 |
| [`AT+OIDMAP`](#cmd-oidmap) | 7 | [`AT+TARGETKEY`](#cmd-targetkey) | 8 |
| [`AT+OIDMAPCLEAR`](#cmd-oidmapclear) | 7 | [`AT+TRAPSEND`](#cmd-trapsend) | 8 |
| [`AT+OIDMAPRELOAD`](#cmd-oidmapreload) | 7 | [`AT+UART`](#cmd-uart) | 3 |
| [`AT+OTACANCEL`](#cmd-otacancel) | 11 | [`AT+USMADD`](#cmd-usmadd) | 6 |
| [`AT+OTAFWUP`](#cmd-otafwup) | 11 | [`AT+USMDEL`](#cmd-usmdel) | 6 |
| [`AT+OTAREBOOT`](#cmd-otareboot) | 11 | [`AT+USMUSER`](#cmd-usmuser) | 6 |
| [`AT+OTASTATUS`](#cmd-otastatus) | 11 | [`AT+VERSION`](#cmd-version) | 3 |
| [`AT+PRODUCTARC`](#cmd-productarc) | 5 | [`AT+WEB`](#cmd-web) | 10 |
| [`AT+PRODUCTID`](#cmd-productid) | 5 | [`AT+WEBPASS`](#cmd-webpass) | 10 |
| [`AT+REBOOT`](#cmd-reboot) | 3 | [`AT+WEBTIMEOUT`](#cmd-webtimeout) | 10 |
| [`AT+SAVE`](#cmd-save) | 3 | [`AT+WEBUSER`](#cmd-webuser) | 10 |
| [`AT+SETACK`](#cmd-setack) | 7 | | |
