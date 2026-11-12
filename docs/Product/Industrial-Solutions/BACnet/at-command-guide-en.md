---
id: at-command-guide-en
title: EOE-W55RP20_BACnet Module AT Command Guide
sidebar_label: AT Command Guide
date: 2026-11-12
keywords:
  - AT Command
  - BACnet
  - EOE-W55RP20
  - W55RP20
description: Reference for all 56 AT commands of the EOE-W55RP20_BACnet module
---
# EOE-W55RP20_BACnet Module AT Command Guide

This is the reference for the commands with which a host MCU configures the EOE-W55RP20_BACnet
module over UART, puts values into BACnet objects, and receives writes that come from the network.

Firmware 1.0.0. **56 commands** (including the bare `AT`). The B/IP-only build lacks the 7 marked `[SC]` and has 49.

---

<a id="sec-0"></a>

## 0. Contents

| § | Contents |
|---|---|
| [1](#sec-1) | [**Full command list** (by category)](#sec-1) |
| [2](#sec-2) | [Alphabetical index](#sec-2) |
| [3](#sec-3) | [Syntax and rules](#sec-3) |
| [4](#sec-4) | [**Device** — device control, storage, diagnostics](#sec-4) |
| [5](#sec-5) | [**Network** — addressing](#sec-5) |
| [6](#sec-6) | [**BACnet** — device identity and mode](#sec-6) |
| [7](#sec-7) | [**B/IP** — BACnet/IP datalink](#sec-7) |
| [8](#sec-8) | [**SC** — BACnet/SC datalink](#sec-8) |
| [9](#sec-9) | [**Object** — host objects and object mapping](#sec-9) |
| [10](#sec-10) | [**Time** — clock and time source](#sec-10) |
| [11](#sec-11) | [**Socket** — TCP/UDP user channels](#sec-11) |
| [12](#sec-12) | [**Web** — web administration](#sec-12) |
| [13](#sec-13) | [**OTA** — firmware update](#sec-13) |
| [14](#sec-14) | [URC (asynchronous events)](#sec-14) |
| [15](#sec-15) | [`AT+DIAG?` line reference](#sec-15) |
| [16](#sec-16) | [Error codes](#sec-16) |
| [17](#sec-17) | [Common pitfalls](#sec-17) |
| [18](#sec-18) | [Related documents](#sec-18) |

---

<a id="sec-1"></a>

## 1. Full command list

**Click a command name in the tables below to jump to its description.**

The Set, Query and Exec columns show which forms a command accepts: a ● means that form exists. The
Save column shows how a setting is kept.

| Column | Form | Meaning |
|---|---|---|
| **Set** | `AT+NAME=<value>` | Sets a value or orders an action |
| **Query** | `AT+NAME?` | Reads the current value. Without a ● here there is no way to read it |
| **Exec** | `AT+NAME` | Performs an action with no arguments |
| **Save** | | A ● means the value is stored **and applied** only by [`AT+SAVE`](#cmd-save) ([§3.5](#sec-3)); a ● with a footnote is an exception whose value is used before that. `—` means the command stores what it changes by itself. A blank means there is no setting to store (queries, actions, values passed through) |

**`[SC]`** marks a command that exists only in builds that include the BACnet/SC datalink. The
standard build has them; the B/IP-only build does not, so they get `ERROR:INVALID_COMMAND` — in that
build [`AT+BACMODE=SC`](#cmd-bacmode) is `ERROR:NOT_SUPPORTED`. `AT+BIP` · `AT+BIPFD` ·
`AT+BMAP*` are in both shipped builds (standard and B/IP-only).

### 1.1 Device — device control, storage, diagnostics ([§4](#sec-4))

| # | Command | Set | Query | Exec | Save | Function |
|---|---|:-:|:-:|:-:|:-:|---|
| 1 | [`AT`](#cmd-at) | | | ● | | Check the module answers |
| 2 | [`AT+SAVE`](#cmd-save) | | | ● | — | Write the settings to flash and apply them (BACnet settings included) |
| 3 | [`AT+REBOOT`](#cmd-reboot) | | | ● | — | Close all connections and reboot |
| 4 | [`AT+FACTORY`](#cmd-factory) | ● | | | — | Factory reset (`"CONFIRM"` required, **also erases the SC credentials**) |
| 5 | [`AT+VERSION`](#cmd-version) | | ● | | | Firmware, model, serial, Product ID |
| 6 | [`AT+DIAG`](#cmd-diag) | | ● | | | Socket, port, storage, watchdog, BACnet, B/IP, SC and clock statistics ([§15](#sec-15)) |
| 7 | [`AT+UART`](#cmd-uart) | ● | ● | | ● | AT port speed, data bits, parity, flow control (**applied after a reboot**) |
| 8 | [`AT+PRODUCTID`](#cmd-productid) | ● | ● | | ●³ | Product ID **override** |

³ **Used from the moment it is set** — [`AT+SAVE`](#cmd-save) only makes it survive a reboot ([§3.5](#sec-3)).

### 1.2 Network — addressing ([§5](#sec-5))

| # | Command | Set | Query | Exec | Save | Function |
|---|---|:-:|:-:|:-:|:-:|---|
| 9 | [`AT+NETMODE`](#cmd-netmode) | ● | ● | | ● | DHCP / STATIC |
| 10 | [`AT+IP`](#cmd-ip) | ● | ● | | ● | IP address (the query gives **the chip's current value**) |
| 11 | [`AT+MASK`](#cmd-mask) | ● | ● | | ● | Subnet mask (the query gives the chip's current value) |
| 12 | [`AT+GW`](#cmd-gw) | ● | ● | | ● | Gateway (the query gives the chip's current value) |
| 13 | [`AT+DNS`](#cmd-dns) | ● | ● | | ● | DNS server |

### 1.3 BACnet — device identity and mode ([§6](#sec-6))

| # | Command | Set | Query | Exec | Save | Function |
|---|---|:-:|:-:|:-:|:-:|---|
| 14 | [`AT+BACMODE`](#cmd-bacmode) | ● | ● | | ● | Datalink selection — `OFF` / `BIP` / `SC` (factory default `OFF`) |
| 15 | [`AT+BACDEV`](#cmd-bacdev) | ● | ● | | ● | Device instance and Object_Name (derived from the MAC by default) |
| 16 | [`AT+BACVENDOR`](#cmd-bacvendor) | ● | ● | | ● | Vendor_Identifier · Vendor_Name · Model_Name — **the manufacturer identity** (default WIZnet · 1697) |
| 17 | [`AT+BACDEVINFO`](#cmd-bacdevinfo) | ● | ● | | ● | Location · Description of the Device |
| 18 | [`AT+BACAPDU`](#cmd-bacapdu) | ● | ● | | ● | APDU_Timeout · Number_Of_APDU_Retries |
| 19 | [`AT+BACNETNUM`](#cmd-bacnetnum) | ● | ● | | ● | Network_Number of the B/IP and SC Network Ports |
| 20 | [`AT+BACPASS`](#cmd-bacpass) | ● | | | ● | DCC · ReinitializeDevice password (**no query**) |

### 1.4 B/IP — BACnet/IP datalink ([§7](#sec-7))

| # | Command | Set | Query | Exec | Save | Function |
|---|---|:-:|:-:|:-:|:-:|---|
| 21 | [`AT+BIP`](#cmd-bip) | ● | ● | | ● | UDP port (default 47808) and broadcast method |
| 22 | [`AT+BIPFD`](#cmd-bipfd) | ● | ● | | ● | Foreign Device registration (BBMD · port · TTL) |

### 1.5 SC — BACnet/SC datalink ([§8](#sec-8))

| # | Command | Set | Query | Exec | Save | Function |
|---|---|:-:|:-:|:-:|:-:|---|
| 23 | [`AT+BSCHUB`](#cmd-bschub) | ● | ● | | ● | `[SC]` Hub URIs — primary · failover (`wss://`) |
| 24 | [`AT+BSCTIME`](#cmd-bsctime) | ● | ● | | ● | `[SC]` The five hub connector timers |
| 25 | [`AT+BSCVALIDITY`](#cmd-bscvalidity) | ● | ● | | ● | `[SC]` Certificate validity-period check while the clock is unknown — `LENIENT` / `STRICT` |
| 26 | [`AT+BSCHOSTCHECK`](#cmd-bschostcheck) | ● | ● | | ● | `[SC]` Name check of the hub certificate — `OFF` / `ON` |
| 27 | [`AT+BSCSTATUS`](#cmd-bscstatus) | | ● | | | `[SC]` Hub connection state, VMAC, UUID, last failure |
| 28 | [`AT+BSCCERT`](#cmd-bsccert) | ● | ● | | — | `[SC]` Start, delete or cancel a credential upload; list the stored items (**the private key is never exported**) |
| 29 | [`AT+BSCCERTW`](#cmd-bsccertw) | ● | | | — | `[SC]` Write a credential chunk — **binary mode** ([§3.4](#sec-3)) |

### 1.6 Object — host objects and object mapping ([§9](#sec-9))

| # | Command | Set | Query | Exec | Save | Function |
|---|---|:-:|:-:|:-:|:-:|---|
| 30 | [`AT+BOBJADD`](#cmd-bobjadd) | ● | | | ●¹ | Define an object (AI · AO · AV · BI · BO · BV · MSI · MSO · MSV) |
| 31 | [`AT+BOBJDEL`](#cmd-bobjdel) | ● | | | ●¹ | Delete an object |
| 32 | [`AT+BOBJVAL`](#cmd-bobjval) | ● | | | | Host → Present_Value · Reliability (immediate) |
| 33 | [`AT+BOBJ`](#cmd-bobj) | | ● | | | Object list — type, instance, name, flags, current value |
| 34 | [`AT+BWRACK`](#cmd-bwrack) | ● | | | | The host's answer to a confirmed (CONFIRMED) remote write |
| 35 | [`AT+BMAP`](#cmd-bmap) | | ● | | | Source, object count, CRC and generation of the stored mapping |
| 36 | [`AT+BMAPRELOAD`](#cmd-bmapreload) | | | ● | — | Re-apply the CSV in storage |
| 37 | [`AT+BMAPCLEAR`](#cmd-bmapclear) | ● | | | — | Delete the mapping and every object (`"CONFIRM"`) |

¹ The object table changes immediately, but **without [`AT+SAVE`](#cmd-save) it is gone at the next boot.**

### 1.7 Time — clock and time source ([§10](#sec-10))

| # | Command | Set | Query | Exec | Save | Function |
|---|---|:-:|:-:|:-:|:-:|---|
| 38 | [`AT+TIME`](#cmd-time) | | ● | | | Current UTC, and the source and age of the last synchronization |
| 39 | [`AT+TIMESRC`](#cmd-timesrc) | ● | ● | | ● | Time source — `NONE` / `BACNET` / `SNTP` / `BOTH`, SNTP server and interval |
| 40 | [`AT+UTCOFFSET`](#cmd-utcoffset) | ● | ● | | ● | UTC_Offset of the Device |

### 1.8 Socket — TCP/UDP user channels ([§11](#sec-11))

| # | Command | Set | Query | Exec | Save | Function |
|---|---|:-:|:-:|:-:|:-:|---|
| 41 | [`AT+SOCKAVAIL`](#cmd-sockavail) | | ● | | | Number of channels that can be opened now |
| 42 | [`AT+SOCKSTATUS`](#cmd-sockstatus) | | ● | | | Channel status list |
| 43 | [`AT+SOCKOPEN`](#cmd-sockopen) | ● | | | | Open a channel (TCP_CLIENT/SERVER/UDP) |
| 44 | [`AT+SOCKCLOSE`](#cmd-sockclose) | ● | | | | Close a channel |
| 45 | [`AT+SOCKSEND`](#cmd-socksend) | ● | | | | Send — **binary mode** ([§3.4](#sec-3)) |
| 46 | [`AT+SOCKSENDTO`](#cmd-socksendto) | ● | | | | UDP send to a given destination — binary mode |
| 47 | [`AT+SOCKPEER`](#cmd-sockpeer) | ● | | | | Default UDP recipient |
| 48 | [`AT+SOCKOPT`](#cmd-sockopt) | ● | ● | | | Socket options |

### 1.9 Web — web administration ([§12](#sec-12))

| # | Command | Set | Query | Exec | Save | Function |
|---|---|:-:|:-:|:-:|:-:|---|
| 49 | [`AT+WEB`](#cmd-web) | ● | ● | | ●⁴ | Web UI on or off (+ timeout) |
| 50 | [`AT+WEBUSER`](#cmd-webuser) | ● | ● | | ●⁴ | Login account |
| 51 | [`AT+WEBPASS`](#cmd-webpass) | ● | | | ●⁴ | Set the password (**no query**) |
| 52 | [`AT+WEBTIMEOUT`](#cmd-webtimeout) | ● | ● | | ●⁴ | Session timeout |

⁴ **The login check uses the new value from the moment it is set** (account · password · the refusal of
logins under `AT+WEB=0` · the session timeout of the next login). Only opening and closing the web
server, and making the values survive a reboot, are done by [`AT+SAVE`](#cmd-save) ([§12](#sec-12)).

### 1.10 OTA — firmware update ([§13](#sec-13))

| # | Command | Set | Query | Exec | Save | Function |
|---|---|:-:|:-:|:-:|:-:|---|
| 53 | [`AT+OTAFWUP`](#cmd-otafwup) | ● | | | | **Send firmware over UART** |
| 54 | [`AT+OTASTATUS`](#cmd-otastatus) | | ● | | | Progress state and percentage |
| 55 | [`AT+OTACANCEL`](#cmd-otacancel) | | | ● | | Cancel an update in progress |
| 56 | [`AT+OTAREBOOT`](#cmd-otareboot) | | | ● | | Reboot into the prepared image |

---

<a id="sec-2"></a>

## 2. Alphabetical index

The same order as the command table (case-insensitive). The firmware binary-searches in this order.

| Command | Category | § | Command | Category | § |
|---|---|---|---|---|---|
| [`AT`](#cmd-at) | Device | [4](#sec-4) |  |  |  |
| [`AT+BACAPDU`](#cmd-bacapdu) | BACnet | [6](#sec-6) | [`AT+GW`](#cmd-gw) | Network | [5](#sec-5) |
| [`AT+BACDEV`](#cmd-bacdev) | BACnet | [6](#sec-6) |  |  |  |
| [`AT+BACDEVINFO`](#cmd-bacdevinfo) | BACnet | [6](#sec-6) |  |  |  |
| [`AT+BACMODE`](#cmd-bacmode) | BACnet | [6](#sec-6) | [`AT+IP`](#cmd-ip) | Network | [5](#sec-5) |
| [`AT+BACNETNUM`](#cmd-bacnetnum) | BACnet | [6](#sec-6) | [`AT+MASK`](#cmd-mask) | Network | [5](#sec-5) |
| [`AT+BACPASS`](#cmd-bacpass) | BACnet | [6](#sec-6) | [`AT+NETMODE`](#cmd-netmode) | Network | [5](#sec-5) |
| [`AT+BACVENDOR`](#cmd-bacvendor) | BACnet | [6](#sec-6) | [`AT+OTACANCEL`](#cmd-otacancel) | OTA | [13](#sec-13) |
| [`AT+BIP`](#cmd-bip) | B/IP | [7](#sec-7) | [`AT+OTAFWUP`](#cmd-otafwup) | OTA | [13](#sec-13) |
| [`AT+BIPFD`](#cmd-bipfd) | B/IP | [7](#sec-7) | [`AT+OTAREBOOT`](#cmd-otareboot) | OTA | [13](#sec-13) |
| [`AT+BMAP`](#cmd-bmap) | Object | [9](#sec-9) | [`AT+OTASTATUS`](#cmd-otastatus) | OTA | [13](#sec-13) |
| [`AT+BMAPCLEAR`](#cmd-bmapclear) | Object | [9](#sec-9) | [`AT+PRODUCTID`](#cmd-productid) | Device | [4](#sec-4) |
| [`AT+BMAPRELOAD`](#cmd-bmapreload) | Object | [9](#sec-9) | [`AT+REBOOT`](#cmd-reboot) | Device | [4](#sec-4) |
| [`AT+BOBJ`](#cmd-bobj) | Object | [9](#sec-9) | [`AT+SAVE`](#cmd-save) | Device | [4](#sec-4) |
| [`AT+BOBJADD`](#cmd-bobjadd) | Object | [9](#sec-9) | [`AT+SOCKAVAIL`](#cmd-sockavail) | Socket | [11](#sec-11) |
| [`AT+BOBJDEL`](#cmd-bobjdel) | Object | [9](#sec-9) | [`AT+SOCKCLOSE`](#cmd-sockclose) | Socket | [11](#sec-11) |
| [`AT+BOBJVAL`](#cmd-bobjval) | Object | [9](#sec-9) | [`AT+SOCKOPEN`](#cmd-sockopen) | Socket | [11](#sec-11) |
| [`AT+BSCCERT`](#cmd-bsccert) | SC | [8](#sec-8) | [`AT+SOCKOPT`](#cmd-sockopt) | Socket | [11](#sec-11) |
| [`AT+BSCCERTW`](#cmd-bsccertw) | SC | [8](#sec-8) | [`AT+SOCKPEER`](#cmd-sockpeer) | Socket | [11](#sec-11) |
| [`AT+BSCHOSTCHECK`](#cmd-bschostcheck) | SC | [8](#sec-8) | [`AT+SOCKSEND`](#cmd-socksend) | Socket | [11](#sec-11) |
| [`AT+BSCHUB`](#cmd-bschub) | SC | [8](#sec-8) | [`AT+SOCKSENDTO`](#cmd-socksendto) | Socket | [11](#sec-11) |
| [`AT+BSCSTATUS`](#cmd-bscstatus) | SC | [8](#sec-8) | [`AT+SOCKSTATUS`](#cmd-sockstatus) | Socket | [11](#sec-11) |
| [`AT+BSCTIME`](#cmd-bsctime) | SC | [8](#sec-8) | [`AT+TIME`](#cmd-time) | Time | [10](#sec-10) |
| [`AT+BSCVALIDITY`](#cmd-bscvalidity) | SC | [8](#sec-8) | [`AT+TIMESRC`](#cmd-timesrc) | Time | [10](#sec-10) |
| [`AT+BWRACK`](#cmd-bwrack) | Object | [9](#sec-9) | [`AT+UART`](#cmd-uart) | Device | [4](#sec-4) |
|  |  |  | [`AT+UTCOFFSET`](#cmd-utcoffset) | Time | [10](#sec-10) |
| [`AT+DIAG`](#cmd-diag) | Device | [4](#sec-4) | [`AT+VERSION`](#cmd-version) | Device | [4](#sec-4) |
| [`AT+DNS`](#cmd-dns) | Network | [5](#sec-5) | [`AT+WEB`](#cmd-web) | Web | [12](#sec-12) |
|  |  |  | [`AT+WEBPASS`](#cmd-webpass) | Web | [12](#sec-12) |
|  |  |  | [`AT+WEBTIMEOUT`](#cmd-webtimeout) | Web | [12](#sec-12) |
| [`AT+FACTORY`](#cmd-factory) | Device | [4](#sec-4) | [`AT+WEBUSER`](#cmd-webuser) | Web | [12](#sec-12) |

---

<a id="sec-3"></a>

## 3. Syntax and rules

### 3.1 Port

| Item | Value |
|---|---|
| Port | `uart1` (GP4 TX / GP5 RX, GP6 CTS / GP7 RTS) |
| Serial settings | Default **115200 8N1, no flow control**. Changed with [`AT+UART`](#cmd-uart) |
| Line ending | `CR`, `LF` and `CRLF` are all accepted. Responses always end with `CRLF` |
| Line length | **255 bytes** maximum (not counting the terminator). A longer line is not executed: `ERROR:BUFFER_TOO_LONG` |
| Arguments | **12** maximum |

The console log goes out separately on `uart0` (921600). No log mixes into the AT port.

When boot finishes, `+READY:"<version>"` is sent ([§14](#sec-14)). Send commands after it.

### 3.2 Forms

```text
AT                       check the module answers → OK
AT+NAME=<args>           set
AT+NAME?                 query
AT+NAME                  execute (action without arguments)
AT+NAME=?                test — OK if there is a set or execute form, ERROR:INVALID_COMMAND if query only
```

- Command names and keywords are **case-insensitive** (`at+bacmode=bip` works). The exception is
  the confirmation word `"CONFIRM"` ([`AT+FACTORY`](#cmd-factory) · [`AT+BMAPCLEAR`](#cmd-bmapclear))
  — it must be in capitals exactly as written.
- Enclose string arguments in double quotes. A comma inside quotes is not a separator. There is no
  escape for putting a double quote inside quotes. Only one pair of quotes, at the two ends, is
  stripped from an argument, so with an even number of quotes an inner `"` is not refused but stored
  as it is (`AT+BOBJADD=AI,1,"say "hi"",62` gives the name `say "hi"`). With an odd number, the
  commas after it are read as inside the quotes too and the arguments shift. A query outputs the name
  inside quotes without escaping — **do not use `"` in a name** ([`AT+BOBJ?`](#cmd-bobj)).
- Most numbers accept both decimal and `0x` hexadecimal (instances, state counts, vendor id, ports,
  TTL, lengths and so on). **A leading 0 is plain decimal** — `047808` is 47808 (it is not read as octal).
  **Some places take decimal only** — the object-side values, which use the same parser as the CSV.

  | Place | Given `0x` |
  |---|---|
  | The type number of [`AT+BOBJADD`](#cmd-bobjadd) · [`AT+BOBJDEL`](#cmd-bobjdel) · [`AT+BOBJVAL`](#cmd-bobjval) | `TYPE_MISMATCH` (`0x2` is read neither as a type name nor as a number) |
  | The analog Units number of `AT+BOBJADD` | `INVALID_PARAMETER` |
  | The multi-state and binary values of `AT+BOBJVAL` | `INVALID_PARAMETER` |

- **`AT+NAME=?` is the test form** (3GPP 27.007). It **does not execute** the command; it only
  answers whether the command has a form that takes arguments (set or execute). An execute-only
  command answers `OK` too — `AT+REBOOT=?` · `AT+BMAPRELOAD=?` answer `OK` and neither reboot nor
  re-apply. A query-only command (`AT+BOBJ=?`) gives `ERROR:INVALID_COMMAND`. `AT+FACTORY=?` ·
  `AT+BACPASS=?` do nothing either.
- **More arguments than the command can take at most are refused.** `AT+IP="1.2.3.4",5` is
  `ERROR:INVALID_PARAMETER` — the command is not half-applied with an `OK`. A command that takes a
  different number of arguments in different forms is counted per form — a surplus argument on the
  `TCP_SERVER` or `UDP` form of [`AT+SOCKOPEN`](#cmd-sockopen) (`AT+SOCKOPEN=2,UDP,6000,9`) also
  opens nothing and is `INVALID_PARAMETER`.
- A value that does not read as a number (a negative number in an unsigned place included) is
  `INVALID_PARAMETER`. In an unsigned place **the first character must be a digit** — a leading
  space and a `+` are refused as well (`AT+BIP= 47808` · `AT+BIP=+47808`). The web's Product ID is
  judged the same way ([`AT+PRODUCTID`](#cmd-productid)). A number out of range is
  `INVALID_PARAMETER` or `VALUE_OUT_OF_RANGE` depending on the command, but **either way it is never
  truncated, wrapped or corrected.** A 32-bit value is checked **before** it is narrowed —
  `AT+BOBJDEL=AI,4194304` never ends up pointing at a different object.
- Port numbers are the same in every command — 1 … 65535; outside that, `VALUE_OUT_OF_RANGE`
  (`BIP` · `BIPFD` · `SOCKOPEN` · `SOCKSENDTO` · `SOCKPEER`).
- **A query must end at `?`.** `AT+BOBJ?x` · `AT+VERSION? ` (with the trailing space) are
  `ERROR:INVALID_PARAMETER`. No query takes arguments.
- **An empty position and an empty string are different.** A position left empty, with only its
  comma, means "not given" — `AT+BSCHUB=,"wss://b"` leaves the primary as it is (exception: [`AT+BACVENDOR`](#cmd-bacvendor) clears an empty
  position too). A bare `""` means
  "an empty value was given", and in a field that can be emptied it means "clear it" —
  `AT+BACDEV=5,""` returns the name to the derived value, and `AT+TIMESRC=BACNET,""` clears the SNTP
  server. A `""` given to a field that cannot be empty (the broadcast method of `AT+BIP`, the fourth
  position of `AT+BOBJADD`, the value and status of `AT+BOBJVAL`) is refused. The fifth position
  (flags) of `AT+BOBJADD` takes `""` as "no flags" as well.
- There is **no** command that lists the command table.

### 3.3 Responses

Every command ends with a single `OK` line on success or `ERROR:<code>` on failure ([§16](#sec-16)).
Queries and some set commands send one or more `+NAME:...` lines before that.

```text
AT+BIP?
+BIP:47808,SUBNET,192.168.0.100,192.168.0.255
OK
```

URCs ([§14](#sec-14)) are serialized through the same transmit path and can come before or after a
command's response. A host that reads line by line tells them apart by the `+NAME:` prefix. Where a
query response and a URC could take the same shape, they have been made different on purpose —
`+BIPFD:STATE,…` / `+BIPFD:CONFIG,…` are query responses, `+BIPFD:REGISTERED,…` /
`+BIPFD:FAILED,…` are URCs, and `+TIME:` has 4 fields as a query response and 3 as a URC.

### 3.4 Binary mode

`AT+SOCKSEND` · `AT+SOCKSENDTO` · `AT+BSCCERTW` declare a length first, then accept **exactly the
declared number of bytes** of raw data after the `> ` prompt (no line break).

```text
AT+SOCKSEND=0,5
> HELLO
+SOCKSEND:0,5
OK
```

- In this phase `CR`, `LF`, `NUL` and even the string `"AT"` are all data.
- No line break follows the prompt, so in the bytes the module sends, the result arrives **on the
  same line as the prompt**, as in `> +SOCKSEND:0,5`. A host that reads line by line should
  recognize the prompt as the two bytes `> ` and strip the `> ` from the front of the result line.
- The time limit is **an absolute 10 seconds from when the prompt is sent** (not an idle time).
  Even if bytes are still arriving, the command ends with `ERROR:PAYLOAD_TIMEOUT` after 10 seconds.
- The maximum length accepted at a time is **1460 bytes** (sockets) and **1024 bytes** (`AT+BSCCERTW`).
- **End command lines with `CRLF`.** A single `LF` byte right after a `CR` is dropped as the other
  half of the line ending. So when a host that ends lines with `CR` alone sends a payload **that
  starts with `LF` (0x0A)**, that first byte is lost — the module cannot tell it apart from the byte
  stream of a `CRLF` host.
- A refusal after the prompt makes the data the host sent go to waste. So **everything that can be
  known is checked before the prompt** — the channel state, the destination, the length, the offset
  of a credential upload.
- On a port configured for 7 bits or XON/XOFF, **the transfer is refused before it starts**
  (`ERROR:NOT_SUPPORTED`). Those two settings silently corrupt data ([`AT+UART`](#cmd-uart)).
- The payload of `AT+BSCCERTW` (which may be a piece of a private key) is wiped from the receive
  ring, the line buffer and the payload buffer right after it is processed.

[`AT+OTAFWUP`](#cmd-otafwup) also accepts raw data but does not declare the length in advance: the
firmware package carries its own size in its header, and that header is itself the front of the
stream. The only difference is that it is the module, not the host, that knows where the end is;
everything else is the same.

### 3.5 When settings are saved — most settings take no effect until `AT+SAVE`

Set commands change only the settings in RAM. Writing them to flash and actually applying them is
done by `AT+SAVE`. The exceptions are the two tables below — commands that act without a save, and
settings that `AT+SAVE` stores but whose **value in RAM is read right away**.

```text
AT+BACMODE=BIP
AT+BACDEV=1001,"AHU-3"
AT+BIP=47808
AT+SAVE
```

This is so that the datalink, the instance and the port are applied in one go. Applied command by
command, the datalink would restart once per command, and clients would see a half-changed device in
between.

- **BACnet settings have no effect on the network before they are saved.** Even after `AT+BACDEV` ·
  `AT+BACVENDOR` are changed, Who-Is · I-Am · ReadProperty answer with the old values until the
  save. A reset without saving loses the settings, but no client has ever seen those values.
- Most queries answer the **configured value** (the value the next `AT+SAVE` will apply). A command
  that also has a separate value in operation now shows it as well — `RUNNING|STOPPED` in
  `AT+BACMODE?`, the `APPLIED` line of `AT+BACDEV?`, the last two fields of `AT+BIP?`, the `STATE`
  line of `AT+BIPFD?`, `ACTIVE|PENDING` in `AT+UART?`.
- `AT+UART` takes effect only **after a reboot**, even once it is saved.

**Exceptions** — what acts immediately, without `AT+SAVE`:

| Immediate | Why |
|---|---|
| `AT+BOBJVAL` `AT+BWRACK` | Values and answers, not settings |
| `AT+SOCK*` | Channels are not stored |
| `AT+BSCCERT` `AT+BSCCERTW` | Credentials are not settings. They are written to the credential area the moment an upload completes or a delete is done, and the hub connector reconnects with them |
| `AT+BMAPRELOAD` `AT+BMAPCLEAR` | They change the mapping directly and save by themselves when a save is needed — [§9](#cmd-bmapreload), [§17](#sec-17) pitfall 7 |
| `AT+OTAFWUP` | A receive action. The received image is written straight to the staging area |
| `AT+FACTORY` `AT+REBOOT` `AT+OTAREBOOT` | Reboot on the spot |

`AT+BOBJADD` / `AT+BOBJDEL` are half and half. The object table changes immediately, but
**without `AT+SAVE` it is gone at the next boot.**

**Settings whose value is used at once, with only the storing done by `AT+SAVE`** — a reset
without a save returns them to the old value.

| Setting | What changes the moment it is set | What `AT+SAVE` does |
|---|---|---|
| `AT+PRODUCTID` | The Product ID check of OTA (UART and web upload), `AT+PRODUCTID?`, the fourth field of `AT+VERSION?` | Makes it survive a reboot |
| `AT+WEBUSER` `AT+WEBPASS` | The account and password the web login checks | Makes them survive a reboot |
| `AT+WEB` `AT+WEBTIMEOUT` | With `AT+WEB=0` new logins are refused. The session timeout applies from the next login | Opens or closes the web server, and makes them survive a reboot |

---

<a id="sec-4"></a>

## 4. Device — device control, storage, diagnostics

<a id="cmd-at"></a>

### AT — check the module answers

```text
AT
OK
```

<a id="cmd-save"></a>

### AT+SAVE — the commit point

```text
AT+SAVE
OK
```

Writes the settings to flash and applies them ([§3.5](#sec-3)), in this order:

1. **PERSISTENT values first.** Any Present_Value the journal's rate limit (10 seconds per object)
   has been holding back is written now — so that no value is lost if power fails after the "save".
2. **The object table is folded into the mapping.** Without this, definitions made with
   [`AT+BOBJADD`](#cmd-bobjadd) would be gone at the next boot. The folding and the writing happen
   under one mapping lock, so a web CSV import cannot change the table in between.
3. **The whole configuration is written to the A/B slots.**
4. **It is applied — only the settings that actually changed.** Network (only when the address
   differs from the chip's — all sockets close and the services come back up) → BACnet → web, in
   that order. Saving after changing only the object mapping does not cut the AT channels.

BACnet is applied **by the BACnet task in its next cycle (at most 20 ms)**. The `OK` comes first,
and an [`AT+BACMODE?`](#cmd-bacmode) right after it may show `STOPPED` for a moment (with SC, several
seconds, through the TLS handshake). What is applied: the mode · B/IP port and broadcast method · FD
registration · hub URIs and timers · instance and name · Vendor text · time source · UTC offset ·
certificate-period check policy · DCC/RD password, and only what changed is restarted. **When the
instance or the name changes, I-Am is broadcast again and Database_Revision goes up by 1.**

- If the save succeeded and only the apply failed, the answer is `OK` and a warning is left on the
  console. The stored settings are already right and are used at the next boot — telling the host to
  save again would be the wrong advice. If the network apply fails, the module **keeps running on
  the previous address** and the services come back up on that address. Whether the address actually
  changed is told by [`+IPCHANGED`](#sec-14) — if it did not come, the address did not change.
- If the save itself fails, the answer is `ERROR:<code>` and nothing is applied: `STORAGE_BUSY` if
  another operation is using the storage (try again), `MAPPING_TOO_LARGE` if the object mapping does
  not fit in the configuration slot, **`STORAGE_FAILURE` for a write failure in which the slot written
  to flash does not read back**, and `INTERNAL` for any other failure (a factory reset in progress
  and so on). In every case the previous slot is left as it was.
- If the stored object mapping could not be read at boot (logged on the console), step 2 is skipped
  and the stored table is protected. In that state `AT+BOBJADD` · `AT+BOBJDEL` are refused from the
  start with `ERROR:STORAGE_FAILURE`, so an edit that could not be stored never gets an `OK`.

<a id="cmd-reboot"></a>

### AT+REBOOT

```text
AT+REBOOT
OK
```

After the response has gone out, it **first** writes the PERSISTENT values the journal's rate limit
was holding back, **closes everything in the order AT channels → persistent services (B/IP · SC hub
connection · web)**, waits 200 ms, stands the watchdog down and reboots. Peers receive a FIN. With an
immediate reset, every peer would hold on to a dead connection until its own timeout.

Each channel is waited for up to 200 ms only — a channel that is resolving a name or connecting for
`AT+SOCKOPEN` (up to about 11 seconds) is not closed but left to the reset (only that peer gets no
FIN). This is because the restart of ReinitializeDevice takes this path on the BACnet task, and the
wait must not run past the watchdog's supervision (4 seconds). The web's Reboot and the restart after
an OTA are the same.

At the next boot [`+DIAG:RESET`](#sec-15) is `SOFTWARE`, and the Device's `Last_Restart_Reason` is
`COLDSTART`.

<a id="cmd-factory"></a>

### AT+FACTORY — factory reset

```text
AT+FACTORY="CONFIRM"
+FACTORY:COMPLETE
```

The module reboots right after `+FACTORY:COMPLETE` (no `OK` comes).

```text
AT+FACTORY="CONFIRM"
+FACTORY:ERROR,CREDENTIALS
ERROR:STORAGE_FAILURE
```

**If the credential slots cannot be erased, nothing is reset and the module does not reboot.** It
tries the erase once more, and if that fails too the command ends with `+FACTORY:ERROR,CREDENTIALS`
and `ERROR:STORAGE_FAILURE` — a reboot with the private key still in place would look like a
completed factory reset. Try again. If it keeps failing, the flash is faulty. From then until a
reboot, credential upload and delete answer `STORAGE_BUSY`. Until the reboot `AT+BSCCERT?` shows every item
`ABSENT`, but **that does not mean the key is gone** — the erase failed, so it may still be in flash.

Erase order:

1. **BACnet/SC credentials** — the two slots that hold the private key, certificate and CA are erased
   (erased, not overwritten). This comes first so that, even if the reset is cut off midway, the most
   important part (destroying the private key) is already done. **The B/IP-only build erases the same
   area too** — the board may hold credentials an SC build put there.
2. **The whole configuration** — to the defaults below.
3. **The object mapping and the runtime journal** — host object definitions and PERSISTENT values.
   Database_Revision is not reset but keeps counting (going backwards would fool clients that cache).
4. **The stored object CSV** (when the staging area holds a CSV).

| Item | Factory default |
|---|---|
| Network | `STATIC`, 192.168.11.2 / 255.255.255.0, gateway 192.168.11.1, DNS 8.8.8.8 |
| AT port | 115200, 8, `NONE`, `NONE` |
| Web | **Off, no password** (`MUSTCHANGE`), account `admin`, session 600 seconds |
| BACnet | Mode **`OFF`**, instance and name derived from the MAC, Vendor `1697` / `"WIZnet"` / `"EOE-W55RP20_BACnet"` (1697 is the Vendor ID ASHRAE assigned to WIZnet), no DCC/RD password. An integrator who ships it as their own product can put in their own number with [`AT+BACVENDOR`](#cmd-bacvendor) |
| B/IP | 47808, `SUBNET`, FD registration off (BBMD port 47808, TTL 300) |
| SC | No hub, timers 300 / 10 / 10 / 2 / 30 seconds |
| Time | `BACNET`, `LENIENT`, no SNTP server · interval 3600 seconds, UTC offset 0 |
| Product ID | No override (the factory record's value) |

- **The factory record (MAC · serial · model · Product ID · hardware revision) is not erased.**
- If an OTA image is staged, the command is refused with `ERROR:OTA_PENDING`. Losing the settings
  can be lived with, but cancelling a firmware update that was waiting is not what was asked for.
- The web UI (Maintenance tab, `POST /api/factory-reset`) and the `FAC_RSTn` pin (GP18, active low)
  do the same. The refusals are the same too: whichever path is used, `+FACTORY:ERROR,CREDENTIALS` or
  `+FACTORY:ERROR,OTA_PENDING` goes out on the AT port — `FAC_RSTn` has nobody to answer, so this URC
  is the only news the host hears, and while the pin is held the reset is tried again every 5
  seconds. The web answers `200` only after the credentials have been erased; a failure is
  `500 Credential Erase Failed`, and a staged image is `409 Firmware Update Pending`.
- `"CONFIRM"` must match exactly, including case. Anything else is `ERROR:INVALID_PARAMETER`.

<a id="cmd-version"></a>

### AT+VERSION?

```text
+VERSION:"1.0.0","EOE-W55RP20_BACnet","EOE-W55RP20_BACnet-0008DC123456",0x454F4502
```

Firmware version · model · serial · the Product ID **in effect**. The fourth field carries no
override mark — only [`AT+PRODUCTID?`](#cmd-productid) tells whether the value is the factory one or
an override. The first field is the same value as the Device object's `Firmware_Revision`.

<a id="cmd-diag"></a>

### AT+DIAG? — diagnostic counters

```text
AT+DIAG?
+DIAG:SOCKETS,3,4,0,0,0
+DIAG:PORT,115200,8,NONE,NONE,NODTR,READY
...
+DIAG:RESET,POWERON,12
OK
```

It outputs some twenty lines at a time. The fields of each line and the matching web values are in
**[§15](#sec-15)**. The order of the lines:

```text
SOCKETS  PORT  RXDROP  STORAGE  ATTX  WATCHDOG  CHIP
BACNET  BIP¹  BSC²  BSCTLS²  BSCMSG²  BSCQ²
BACPEND  BACNOTIFY  BACSTORE  BACCOV  BACTSM  BACDM  BIPFD¹
TIME  SNTP³  RESET
```

¹ Builds with the B/IP datalink · ² builds with the SC datalink · ³ builds with the SNTP client.
The standard build outputs all of them; the B/IP-only build outputs all but the four `BSC*` lines.

- **The BACnet lines are output whatever the mode (`OFF` included), with zeros if need be.** "Nothing
  has arrived" is the answer to "are clients reaching the device", and a line that appears only when
  something happens cannot give that answer.
- Fields are only ever added at the end of a line. The positions of the earlier fields do not change,
  so a parser written for an older line still reads it. `RESET` is always last.
- The counters are copied without a lock, so two numbers on one line can be one request apart. For
  diagnostics that does no harm.

---

<a id="cmd-uart"></a>

### AT+UART — serial settings of the AT port

```text
AT+UART=<speed>,<data bits>,<parity>,<flow control>
AT+UART?     → +UART:115200,8,NONE,RTSCTS,ACTIVE
             → +UART:230400,8,EVEN,XONXOFF,PENDING
```

The port this command deals with is **the port the command itself is being sent on**. That makes it
different from the other settings in two ways — it does not take effect immediately, and a wrong
value removes the path to undo it.

| Argument | Values |
|---|---|
| Speed | `9600` `19200` `38400` `57600` `115200` `230400` `460800` `921600` |
| Data bits | `7` `8` |
| Parity | `NONE` `ODD` `EVEN` |
| Flow control | `NONE` `RTSCTS` `DTRDSR` `XONXOFF` |

**All four are required.** If one could be left out, a value the operator did not choose would come
along with it, and the four values are not independent of each other — 7 bits with no parity and 8
bits with even parity are entirely different decisions.

Parity and flow control are given by **name** (case-insensitive). An unknown name does not fall back
to the default; it is **refused**, because the default here is a setting that drops bytes.

**Stop bits are not configurable.** They are always 1.

#### The four kinds of flow control

| Value | What | Direction |
|---|---|---|
| `NONE` | None | — |
| `RTSCTS` | **Hardware.** GP6 (CTS) / GP7 (RTS), handled directly by the PL011 | Both |
| `DTRDSR` | **GPIO.** Watches DTR on GP8 | **Module transmit only** |
| `XONXOFF` | **In-band.** `0x11`/`0x13` | Both |

> **`DTRDSR` is one-sided.** When the host lowers DTR, the module stops transmitting. There is no
> reverse direction — DSR (GP9) already means **"module ready"**, and if the module lowered it because
> its receive buffer was full, a host that reads DSR as the ready signal would **read a busy module as
> a dead one.** If both directions are needed, use `RTSCTS`. RTS/CTS on GP6/GP7 and DTR/DSR on GP8/GP9
> are **different pins and different signals**.

> **With `RTSCTS`, while the host holds CTS,** the module's transmission **sleeps** until the FIFO
> empties — meanwhile the web, DHCP, SC and link supervision keep running. After 5 seconds it reports
> once on the console. Lines that pile up while transmission is held are dropped once the transmit
> queue (8 entries) is full, and counted as dropped in [`+DIAG:ATTX`](#sec-15).

> **`XONXOFF` is software.** The module stops transmitting when it receives `0x13` (XOFF) and resumes
> on `0x11` (XON). In the other direction, it sends XOFF when the free space in its receive ring buffer
> (1024 B) falls below 1/4, and XON when it recovers above 1/2. These two bytes are **not passed to
> the parser.**

#### Two settings cannot carry binary payloads

**`7` bits and `XONXOFF` block [`AT+SOCKSEND`](#cmd-socksend) · [`AT+SOCKSENDTO`](#cmd-socksendto)
· [`AT+BSCCERTW`](#cmd-bsccertw) · [`AT+OTAFWUP`](#cmd-otafwup).**

| Setting | Why |
|---|---|
| Data bits `7` | The 8th bit of every byte is lost |
| `XONXOFF` | `0x11`/`0x13` inside the payload are taken as flow control (both directions) |

Both **corrupt the payload silently instead of failing it.** The host could neither detect nor retry
such a result, so the transfer is not allowed to start at all (`ERROR:NOT_SUPPORTED`). The module also
says so at the moment of setting.

```text
AT+UART=115200,7,EVEN,RTSCTS
+UART:BINARYOFF,7BIT
OK
AT+UART=115200,8,NONE,XONXOFF
+UART:BINARYOFF,XONXOFF
OK
```

**Only one** such line is output. A setting that picks both (`AT+UART=115200,7,EVEN,XONXOFF`) reports
only `7BIT`, so a host that reverts only the 7 bits stays blocked because of `XONXOFF` — to use binary
payloads, revert both.

Command lines and responses are all ASCII, so they work normally at 7 bits too. Only **binary
payloads** are blocked. On such a port, upload the SC credentials through the web UI.

#### When it takes effect

```text
AT+UART=230400,8,NONE,RTSCTS
OK
AT+SAVE
OK                          ← still 115200
AT+REBOOT                   ← changes here
```

[`AT+SAVE`](#cmd-save) **only writes to flash.** The actual change happens at the reboot.
Reprogramming the UART the moment the setting changes would empty the transmit FIFO, and the first
byte thrown away would be that very command's `OK`.

| Last field | Meaning |
|---|---|
| `ACTIVE` | The stored values are the same as this port's current settings |
| `PENDING` | Stored but not applied yet. **A reboot is required** |

#### Caution

> **The way back is narrow.** If the module comes up with new settings the host cannot match, nothing
> can be done over the AT port. Only three ways remain — the web UI's Network tab, a factory reset
> with the `FAC_RSTn` pin (GP18), and an SWD reflash. **Keeping the web UI enabled**
> ([`AT+WEB`](#cmd-web)) before the change is the cheapest insurance.

- **The default is `NONE`.** This lets a host connected with only three wires (TX · RX · GND)
  communicate right away, with no setup.
- **If you use binary payloads, turn on `RTSCTS`.** With `NONE` the module keeps sending even when the
  host cannot receive, so a payload of up to 1460 bytes can be silently broken.
- If transmission is held for 5 seconds or more by `DTRDSR` or `XONXOFF`, a warning is printed on the
  console. Unlike CTS, these two **cannot be seen from outside**, so a host that forgot to raise DTR
  looks exactly like a module that does not answer. The last two fields of [`+DIAG:PORT`](#sec-15) and
  `dtr` · `uart_tx_held` in the web's `/api/status` show that state.
- [`AT+FACTORY`](#cmd-factory) returns this setting to its initial values too (**115200, 8, NONE, NONE**).
- A speed not in the list and a bit count other than `7`/`8` are `ERROR:VALUE_OUT_OF_RANGE`; an
  unknown parity or flow-control name is `ERROR:INVALID_PARAMETER`.
- The web UI's Network tab has the same settings. Whichever way they are changed, the value is the
  same and so is the moment it takes effect.

<a id="cmd-productid"></a>

### AT+PRODUCTID — Product ID override

```text
AT+PRODUCTID=0x00010002    set an override
AT+PRODUCTID=0             clear the override
AT+PRODUCTID?
  +PRODUCTID:0x454F4502,FACTORY
  +PRODUCTID:0x00010002,OVERRIDE
  +PRODUCTID:FACTORY,0x454F4502      ← only while overridden: the original value underneath
```

The Product ID does one thing: **it makes OTA refuse a package meant for another product.** This
product's value is **`0x454F4502`** (`"EOE"` + variant 2, EOE-W55RP20_BACnet), deliberately different
from that of the SNMP product (variant 1) that runs on the same hardware — a package installed on the
other product's board would read a different settings format and flash layout.

An override is therefore a way of turning that check off. Whether one is in place is told by this
query, the web UI's Identity tab (a red warning) and `,OVERRIDDEN` in the OTA refusal line. **The
fourth field of [`AT+VERSION?`](#cmd-version) gives only the value in effect, with no override
mark.** `0` is not a setting but **clears** the override.

The value is decimal or `0x` hexadecimal ([§3.2](#sec-3) — a leading 0 is decimal, a sign or a space
is refused). The Product ID on the web Identity tab is **judged the same way**.

**It takes effect the moment it is set (or cleared).** Without waiting for a save, the OTA Product ID
check (UART and web upload), this query and the fourth field of `AT+VERSION?` use the new value at
once. [`AT+SAVE`](#cmd-save) only makes it survive a reboot — reset without saving and the override
returns to its previous state. [`AT+FACTORY`](#cmd-factory) clears it.

| Mark on the first line | Meaning |
|---|---|
| `OVERRIDE` | A value written over by this command |
| `FACTORY` | The factory record's value |
| `PLACEHOLDER` | A board with no factory record — the build default (`0x454F4502`) is in use |

The second line, `+PRODUCTID:FACTORY,<value>`, appears only while an override is in place, and gives
the value that clearing the override returns to. On a board with no factory record that value is the
build default, but the mark is still `FACTORY`.

---

<a id="sec-5"></a>

## 5. Network — addressing

<a id="cmd-netmode"></a>

### AT+NETMODE — address assignment

```text
AT+NETMODE=DHCP
AT+NETMODE=STATIC
AT+NETMODE?          → +NETMODE:STATIC
```

The factory default is `STATIC` (the table under [`AT+FACTORY`](#cmd-factory)). The words are
case-insensitive — so is `mode` on the web Network tab.

**How DHCP behaves.** The lease is renewed at T1 (half the lease if the server gives none). If a
renewal gets no answer, the module waits and asks again: before T2 (7/8 of the lease) it waits half
the time left until T2, and after T2 half the time left until the lease expires — but always at least
60 seconds (RFC 2131 4.4.5). If the server refuses the renewal (NAK), the module drops
that address and starts negotiating from the beginning at once. If the address received is different,
the channels are cut with `ADDRESS_CHANGED` and `+IPCHANGED` is sent. When the link goes down the
lease is released at that moment, and when the link comes back negotiation starts again at once. A
failed negotiation and a lease that fails to apply are retried at intervals starting at 1 second and
doubling up to at most 64 seconds. A DHCP response that arrives right after `STATIC` is saved is
discarded — it does not overwrite the stored address.

<a id="cmd-ip"></a>
<a id="cmd-mask"></a>
<a id="cmd-gw"></a>
<a id="cmd-dns"></a>

### AT+IP · AT+MASK · AT+GW · AT+DNS

```text
AT+IP="192.168.0.100"
AT+MASK="255.255.255.0"
AT+GW="192.168.0.1"
AT+DNS="8.8.8.8"

AT+IP?               → +IP:"192.168.0.100"
```

> **Set and query look at different things.** Set writes to the stored settings; query reads **the
> value the chip is using now**. Under DHCP the two differ for good — the leased address is not
> written to the settings. If it were, the next `AT+SAVE` would freeze the temporary address into the
> STATIC settings, and switching back to STATIC would leave the user with an address they never chose.
> The configured values are given by `cfg_ip` · `cfg_mask` · `cfg_gw` · `cfg_dns` in the web's
> `/api/status` — these are the settings in RAM, so they include edits such as `AT+IP=` that **have
> not been saved yet** (they may differ from the stored values).
>
> Only `AT+DNS?` answers the value the resolver holds, because the DNS server is used by the firmware,
> not by the chip. Name resolution for hub URIs, the BBMD, the SNTP server and socket channel host
> names uses this server.
>
> The resolver accepts **only responses from this server's address and UDP port 53** (a random ID for
> each query). A DNS server that answers from a different address or port (some behind NAT, servers
> with several addresses) has its responses discarded and the name does not resolve — in that case,
> give the address the responses come from with `AT+DNS`. Each name is asked twice, 3 seconds each.

**Only the format is checked.** Only a value that does not read as dotted-quad notation is
`ERROR:INVALID_PARAMETER`; any address that reads is accepted and put into the chip at `AT+SAVE` —
`0.0.0.0`, broadcast and multicast IPs, a mask that is not contiguous or is `0.0.0.0`, and a gateway
outside the subnet are not refused either. One typo can leave the module unreachable over IP after the
save. The way back is then the AT port. Before saving, check the four values again by hand, not by
query (the query gives the chip's current values).

**Under DHCP the lease's DNS comes first.** Every time a lease is received, the resolver switches to
the DNS server the lease gave (DHCP option 6). **If the DHCP server gives no DNS option, the stored DNS
(`AT+DNS` followed by `AT+SAVE`) is used** — the names of hub URIs, the BBMD and the SNTP server are
resolved with that server. An `AT+DNS` that has not been saved does not go into the resolver, even
when the lease is renewed. `AT+SAVE` in DHCP mode does not re-apply the address, but if the current
lease has no DNS it puts the stored `AT+DNS` into the resolver at once (channels are not cut). The web
locks the address fields under DHCP, so on the web the DNS saved while in STATIC becomes this fallback
server. Check the server the resolver actually uses with `AT+DNS?`.

**Caution — when a save cuts the channels.** When `AT+SAVE` **re-applies the chip's address**, every
open socket descriptor is closed. AT channels receive `+SOCKDISCONNECTED:<ch>,NETWORK_RECONFIGURED`
and, by design, are not recovered automatically, so the host reopens them. BACnet recovers by itself
— the B/IP socket reopens on the new address (the broadcast address is recomputed too), FD
registration starts again from the beginning, and SC reconnects to the hub. The new address is
announced by `+IPCHANGED` ([§14](#sec-14)).

| Saved change | At the save |
|---|---|
| In STATIC, **any one** of address · mask · gateway · DNS differs from the chip or the resolver | Re-applied — all channels are cut and `+IPCHANGED` follows. **A DNS change alone does this too** — even with the same IP all channels are cut, and `+IPCHANGED` announces the same address |
| DHCP → STATIC | Re-applied — all channels are cut and `+IPCHANGED` follows |
| STATIC → DHCP | **Nothing is closed.** The services stay on the old address and only DHCP negotiation starts. No `+IPCHANGED` either. If the address of the lease received is different, **then** the channels are cut with `+SOCKDISCONNECTED:<ch>,ADDRESS_CHANGED` and `+IPCHANGED` follows. A lease for the same address changes nothing |
| Only `AT+IP` and the like changed under DHCP | Nothing is done (the lease decides the address). The values are used on returning to STATIC. `AT+DNS` alone is the exception — if the current lease has no DNS it goes into the resolver at once (channels are not cut) |
| Only settings outside the network changed | The network is not touched |

**When a re-apply is refused.** If a connection that is closing (a web browser that did not read its
response to the end, for example) does not let go of the chip's socket within 1 second, the chip does
not take the new address. The module brings the services back up on the old address and re-applies
the saved STATIC settings **up to five times, 3 seconds apart**. Each re-apply cuts all channels as
above (`+SOCKDISCONNECTED:<ch>,NETWORK_RECONFIGURED`), logs the web out and reconnects SC to the hub,
so a channel reopened in between can be cut too. `+IPCHANGED` comes **only when the address was
actually applied** — after changing the address, wait for it before opening channels. If all five are
refused, no URC says so: if `+IPCHANGED` does not come within **a little over 20 seconds**, the
address was refused, and channels can be opened on the old address. The settings are applied at the
next reboot — or at the **next `AT+SAVE`**, even one that changes nothing in the network (the saved
settings differ from the chip's, so that save re-applies them and the channels are cut). `AT+SAVE`
answers `OK` in every case, since the save itself completed. If applying a DHCP lease is refused, the
DHCP client retries by itself.

---

<a id="sec-6"></a>

## 6. BACnet — device identity and mode

All settings in this chapter **take effect at [`AT+SAVE`](#cmd-save)** ([§3.5](#sec-3)). The web
UI's BACnet tab (`GET/POST /api/bacnet`) handles the same settings, and AT and the web use the same
check functions — a value one side accepts is never refused by the other.

<a id="cmd-bacmode"></a>

### AT+BACMODE — datalink selection

```text
AT+BACMODE=OFF       BACnet not used (factory default)
AT+BACMODE=BIP       BACnet/IP (UDP)
AT+BACMODE=SC        BACnet/SC (TLS 1.3 + WebSocket, hub connector)
AT+BACMODE?          → +BACMODE:BIP,RUNNING
```

**A module in its factory state announces nothing on the network.** Only when a mode is chosen and
saved does the datalink open and an I-Am go out. One datalink is used at a time (no router function).

The two fields of the query deliberately come from different sources.

| Field | Meaning |
|---|---|
| First | The **configured** mode — the value the next `AT+SAVE` will apply |
| Second | **The actual state of the datalink.** `RUNNING` means the B/IP socket is bound or, under SC, that the hub has accepted the connection. Otherwise `STOPPED` |

Right after `AT+BACMODE=OFF`, before the save, `OFF,RUNNING` is shown — a sign that the change is
still waiting to be applied. If it is `STOPPED` under SC, [`AT+BSCSTATUS?`](#cmd-bscstatus) tells why.

| Refusal | Response |
|---|---|
| Unknown word | `ERROR:INVALID_PARAMETER` |
| `SC` — B/IP-only build | `ERROR:NOT_SUPPORTED` |
| `SC` — no primary hub URI | `ERROR:URI` — [`AT+BSCHUB`](#cmd-bschub) first |
| `SC` — `STRICT` with time source `BACNET`/`NONE` | `ERROR:INVALID_PARAMETER` — a combination that would never connect ([§10](#sec-10)) |
| The Device name that would be derived is already used by a host object | `ERROR:DUPLICATE_NAME` |
| The stored object table cannot be read, so name uniqueness cannot be checked | `ERROR:STORAGE_FAILURE` |

- SC credentials are not a precondition. The mode may be set first; until the credentials arrive, the
  hub connector reports that with `+BSC:DISCONNECTED,CREDENTIALS`.
- While the stored mode is `SC`, the AT socket channels keep one more in reserve — the hub connection
  uses one socket, and during failover the primary probe and the reconnection's DNS query briefly use
  one more ([`AT+SOCKAVAIL?`](#cmd-sockavail)).
- `Max_APDU_Length_Accepted` differs by datalink — B/IP **1024**, SC **1476**. This is because the
  W5500 does not reassemble IP fragments, so on B/IP a UDP datagram larger than 1472 B is lost.

<a id="cmd-bacdev"></a>

### AT+BACDEV — Device instance and name

```text
AT+BACDEV=1001                 change only the instance (the name stays)
AT+BACDEV=1001,"AHU-3"         instance and Object_Name
AT+BACDEV=1001,""              return the name to the derived value
AT+BACDEV=DEFAULT              return the instance to the derived value
AT+BACDEV?
  +BACDEV:1001,"AHU-3"
  +BACDEV:APPLIED,1193046,"EOE-W55RP20_BACnet-123456"   ← only when the configured and running values differ
```

| Argument | Value |
|---|---|
| Instance | **Required.** `0` … `4194302`, or `DEFAULT`. `4194303` is the wildcard every device answers to, so no device can have it — `VALUE_OUT_OF_RANGE`. Left empty (`AT+BACDEV=,"name"`) it is `INVALID_PARAMETER` — there is no form that changes only the name |
| Name | Up to **31 bytes** of UTF-8, no control characters (C0 · DEL · C1 U+0080 … U+009F — judged as in [`AT+BOBJADD`](#cmd-bobjadd)). Longer is `BUFFER_TOO_LONG`; not UTF-8, or with control characters, `INVALID_PARAMETER`. `""` gives the derived value; omitted, the name stays as it is |

| Other refusals | Response |
|---|---|
| The name (a derived name included) is used by a host object or the Network Port | `DUPLICATE_NAME` |
| The stored object table cannot be read, so name uniqueness cannot be checked | `STORAGE_FAILURE` |

**Derived values.** So that even unconfigured modules are distinct devices from the moment they are
powered on, the instance and the name are made from the factory MAC.

- Instance = `(MAC[3] & 0x3F) << 16 | MAC[4] << 8 | MAC[5]` — for MAC `00:08:DC:12:34:56`,
  `1193046`. A MAC for which the formula gives the wildcard `4194303` (`MAC[3] & 0x3F` is `0x3F`,
  `MAC[4]` · `MAC[5]` are `0xFF`) gets `4194302`.
- Name = `<Model_Name>-<last 3 MAC bytes in hex>` — `"EOE-W55RP20_BACnet-123456"`. The Model_Name is
  set by [`AT+BACVENDOR`](#cmd-bacvendor). So that the name fits in 31 bytes, **only the first 24
  bytes of the Model_Name part** are used (a UTF-8 character is not cut in the middle; that character
  is left out whole). A Model_Name, which may be up to 63 bytes, does not always appear in full in the
  derived name.

**The query answers the actual value as a number.** Even when set to `DEFAULT`, the derived instance
is shown — that is better than the word `DEFAULT`, which cannot tell the integrator the device number
to look for. Whether a value is derived is told by `instance_auto` · `name_auto` in the web's
`/api/bacnet`. The `APPLIED` line is added only when the configured value differs from the value the
device answers with now (before the save, or right after it, before the BACnet task applies it).

> **When changing only the name, do not write back the queried instance.** If the number the query
> gave is put in as it is (`AT+BACDEV=1193046,"AHU-3"`), the setting changes from `DEFAULT` to a
> **fixed number**, and the instance will not follow the MAC if the MAC changes later. To change only
> the name while keeping the derived instance, send `AT+BACDEV=DEFAULT,"AHU-3"`.

The query's name comes inside quotes **without escaping**. A `"` in the name breaks the host's line
parsing, so do not use one ([§3.2](#sec-3)).

**Object_Name must be unique within the device** (Clause 12.1.1.2). A name used by a host object or
the Network Port (`"BACnet Network Port"`) is `ERROR:DUPLICATE_NAME`. The derived name gets the same
check.

On save, I-Am is broadcast again and Database_Revision goes up.

<a id="cmd-bacvendor"></a>

### AT+BACVENDOR — manufacturer identity

```text
AT+BACVENDOR=<vendor id>,"<Vendor_Name>","<Model_Name>"
AT+BACVENDOR=1234,"Acme Controls","AHU-Controller"
AT+BACVENDOR?        → +BACVENDOR:1697,"WIZnet","EOE-W55RP20_BACnet"
```

These are the `Vendor_Identifier` · `Vendor_Name` · `Model_Name` the Device object reports. The
defaults are WIZnet's (Vendor ID **1697**, assigned by ASHRAE). This module is a component, so an
integrator who ships it as their own product can change them to the number and name they received
from ASHRAE. The three are one statement, so **all three are taken together** — a Vendor_Identifier
carrying another company's Vendor_Name is worse than leaving both at the default. (The `1234` in the
example only shows the format.)

| Argument | Value |
|---|---|
| vendor id | `0` … `65535`. Beyond that, `VALUE_OUT_OF_RANGE` |
| Vendor_Name · Model_Name | Each up to **63 bytes** of UTF-8, no control characters. Longer is `BUFFER_TOO_LONG`; not UTF-8, or with control characters, `INVALID_PARAMETER`. **An empty string `""` is accepted too** — with an empty Model_Name, the derived Device name keeps only the MAC part, as in `"-123456"`. **A position left empty, with only its comma, clears the value too**, as `""` does — unlike other commands it does not mean "leave as is", so always give all three |

| Other refusals | Response |
|---|---|
| The derived Device name made with the new Model_Name is already used by a host object or the Network Port (a device whose name was not set directly) | `DUPLICATE_NAME` |
| The stored object table cannot be read, so the uniqueness of that name cannot be checked | `STORAGE_FAILURE` |

> **Vendor ID.** The factory default `1697` is the number ASHRAE assigned to WIZnet. If you change it,
> put in **the number your own company received from ASHRAE** — do not borrow another company's
> number. `0` is ASHRAE's own number, so while the value is 0 the firmware leaves a warning in the
> boot log.

- The Model_Name is also the front part of the derived Device name (the first 24 bytes,
  [`AT+BACDEV`](#cmd-bacdev)). A device whose name was not set directly takes a name made with the new
  Model_Name at the next `AT+SAVE`. **The uniqueness of that name is checked by `AT+BACVENDOR`
  itself** — if the name is already in use, this command refuses with `ERROR:DUPLICATE_NAME`, and
  `AT+SAVE` does not refuse for this reason.
- `Firmware_Revision` cannot be changed (the first field of [`AT+VERSION?`](#cmd-version)).
- The Device's Location · Description are set by [`AT+BACDEVINFO`](#cmd-bacdevinfo), and the APDU
  timeout · retry count by [`AT+BACAPDU`](#cmd-bacapdu).

<a id="cmd-bacdevinfo"></a>

### AT+BACDEVINFO — Location · Description of the Device

```text
AT+BACDEVINFO="Plant 2, Room 101","AHU-3 supply fan"     both
AT+BACDEVINFO="Plant 2, Room 101"                         Location only (Description unchanged)
AT+BACDEVINFO=,"AHU-3 supply fan"                         Description only
AT+BACDEVINFO="",""                                       clear both
AT+BACDEVINFO?        → +BACDEVINFO:"Plant 2, Room 101","AHU-3 supply fan"
```

The Device object's `Location` · `Description` — where the device is and what it does, in the site's
own words. Neither can be written over BACnet (they are read-only), so the host or the web sets them.
The same check as the web BACnet tab is used.

| Argument | Value |
|---|---|
| Location · Description | Each up to **63 bytes** of UTF-8, no control characters. Longer is `BUFFER_TOO_LONG`; not UTF-8, or with control characters, `INVALID_PARAMETER`. `""` clears it, and **left empty (no quotes) it stays as it is** |

- Leaving both empty (`AT+BACDEVINFO=` · `AT+BACDEVINFO=,`) makes a line that changes nothing, so it
  is `INVALID_PARAMETER`.
- The whole Device configuration is checked again, so the `DUPLICATE_NAME` · `STORAGE_FAILURE` of
  [`AT+BACVENDOR`](#cmd-bacvendor) can come in the same cases.
- The query's strings come without escaping — do not put `"` in them ([§3.2](#sec-3)).
- Applied at `AT+SAVE`. The factory default for both is an empty string.

<a id="cmd-bacapdu"></a>

### AT+BACAPDU — APDU timeout · retry count

```text
AT+BACAPDU=3000,3     APDU_Timeout 3000 ms, Number_Of_APDU_Retries 3 (factory default)
AT+BACAPDU?           → +BACAPDU:3000,3
```

The `APDU_Timeout` (ms) and `Number_Of_APDU_Retries` the Device object reports. Confirmed requests the
device sends itself (confirmed COV notifications) follow these values too. Together they decide how
long a client waits in all, so **both are taken together**. The same check as the web BACnet tab is
used.

| Argument | Value |
|---|---|
| Timeout | `1` … `65535` ms. Above 65535, `VALUE_OUT_OF_RANGE`; `0` is `INVALID_PARAMETER` |
| Retries | `0` … `10`. Above 255, `VALUE_OUT_OF_RANGE`; `11` … `255` is `INVALID_PARAMETER` — retrying more than ten times at the default 3 seconds means having already waited over 30 seconds, so it is taken as a typo, not a setting |

Applied at `AT+SAVE`. The whole Device configuration is checked again, so the `DUPLICATE_NAME` ·
`STORAGE_FAILURE` of [`AT+BACVENDOR`](#cmd-bacvendor) can come in the same cases.

<a id="cmd-bacnetnum"></a>

### AT+BACNETNUM — network number of the Network Ports

```text
AT+BACNETNUM=BIP,5    Network_Number of the B/IP Network Port
AT+BACNETNUM=SC,7     Network_Number of the SC Network Port
AT+BACNETNUM?
  +BACNETNUM:BIP,5
  +BACNETNUM:SC,7     ← builds with SC only
```

The `Network_Number` the Network Port object of each datalink reports. `0` means "unknown", and then
`Network_Number_Quality` is `UNKNOWN`; otherwise it is `CONFIGURED`. The device is not a router, so
this value is **only displayed** — it does not change the network's number, and it is not learned from
Network-Number-Is. The same check as the web's BACnet/IP · BACnet/SC tabs is used.

| Argument | Value |
|---|---|
| Datalink | `BIP` or `SC` (case-insensitive). An unknown word is `INVALID_PARAMETER`; a datalink this build does not have (`SC` in the B/IP-only build) is `NOT_SUPPORTED` |
| Number | `0` … `65534`. `65535` is the global broadcast DNET and cannot be the number of any network; like larger numbers, it is `VALUE_OUT_OF_RANGE` |

**`=SC` does not look at the number alone.** Like the web's SC form, it checks **the whole SC
configuration**, with the number in it, against the current mode before storing it, so even a valid
number can be refused for the two reasons below (nothing changes then).

| Response | Reason | Where to fix it |
|---|---|---|
| `URI` | The mode is `SC` but the SC configuration has no primary hub URI | Put in the URI first with [`AT+BSCHUB`](#cmd-bschub) |
| `VALUE_OUT_OF_RANGE` | An SC setting other than the number — the hub URI format, a failover equal to the primary, the timers — fails the check (this happens only with settings stored by other firmware) | Look with [`AT+BSCHUB?`](#cmd-bschub) · [`AT+BSCTIME?`](#cmd-bsctime) and fix it |

`=BIP` checks the whole B/IP configuration the same way, and a refusal by that check for something
other than the number is `VALUE_OUT_OF_RANGE` as well.

The query has one line per datalink in this build. Both are configured values, applied at `AT+SAVE`.

<a id="cmd-bacpass"></a>

### AT+BACPASS — DCC · ReinitializeDevice password

```text
AT+BACPASS="s3cret"       set (1 … 20 bytes)
AT+BACPASS=""             clear — both services accept without a password (or with any password)
```

The password that guards DeviceCommunicationControl and ReinitializeDevice from remote clients.

- The length is **1 … 20 bytes** of text, as in the CharacterString the two services carry. Longer is
  `BUFFER_TOO_LONG`; not text, `INVALID_PARAMETER`.
- **`AT+BACPASS=` (no argument) is refused.** Removing the only protection of the two services takes
  two quote marks — a slip of the finger is not enough.
- Only a salt and a SHA-256 hash are stored. **There is no query** — there is nothing it could
  honestly return. Whether a password is set is told by `password_set` in the web's `/api/bacnet`,
  and whether one is waiting for a save by `password_pending`. The plain text is wiped at once, down to
  the line buffer.
- Applied at `AT+SAVE`. A wrong password is refused with `Error SECURITY / PASSWORD_FAILURE` and the
  password failures of [`+DIAG:BACDM`](#sec-15) go up.
- Accepted requests are reported to the host — `+BACDCC`, `+BACREINIT` ([§14](#sec-14)).
  DeviceCommunicationControl accepts only `ENABLE` · `DISABLE_INITIATION`. **`DISABLE` is
  `Error SERVICES / SERVICE_REQUEST_DENIED` even with the right password** and changes nothing —
  the value is deprecated from Protocol_Revision 20 on, and this device claims 22 (with a wrong
  password, `PASSWORD_FAILURE` comes first). ReinitializeDevice accepts only `COLDSTART` · `WARMSTART`.
  Any other state (backup/restore · `ACTIVATE_CHANGES`) is `Error SERVICES / OPTIONAL_FUNCTIONALITY_NOT_SUPPORTED`.
- If there is no entropy to make the salt, or the hash fails, `ERROR:INTERNAL`.

---

<a id="sec-7"></a>

## 7. B/IP — BACnet/IP datalink

Used when [`AT+BACMODE=BIP`](#cmd-bacmode). In other modes the settings can be set and saved, but the
socket is not opened. The web UI's BACnet/IP tab (`GET/POST /api/bacnet/bip`) handles the same settings.

<a id="cmd-bip"></a>

### AT+BIP — UDP port and broadcast

```text
AT+BIP=47808                   port only (broadcast method unchanged)
AT+BIP=47808,SUBNET            subnet-directed broadcast (factory default)
AT+BIP=47809,GLOBAL            255.255.255.255
AT+BIP?        → +BIP:47808,SUBNET,192.168.0.100,192.168.0.255
```

| Broadcast | Where local broadcasts (an I-Am answering a Who-Is, etc.) are sent |
|---|---|
| `SUBNET` | The subnet broadcast address computed from the IP and the mask |
| `GLOBAL` | `255.255.255.255` |

The first two fields of the query are the **configured values**; the last two are the values of the
**socket in operation** — the chip's address when the socket was opened (a DHCP lease included) and
the actual broadcast destination. With no socket (the mode is not `BIP`, or there is no link) both are
`0.0.0.0`.

If the mode is `BIP` but the socket cannot be opened — another socket (a channel of
[`AT+SOCKOPEN`](#cmd-sockopen), for example) holds the same local port, or hardware sockets run short
— the module **reopens it by itself**: after 5 seconds, then at intervals doubling up to 60 seconds,
until it opens. Meanwhile the socket field of [`+DIAG:BIP`](#sec-15) is `RETRY` and the last field is
the errno of the failure (port conflict `112`, socket shortage `105` · `12`). It does not wait for a
save or a reconfiguration.

- The port is 1 … 65535 (outside, `VALUE_OUT_OF_RANGE`). **The same number as the web UI's TCP port
  (50003) is `ERROR:INVALID_PARAMETER`** — the W5500 uses one port space for TCP and UDP, so whichever
  binds later would fail silently after the save.
- An unknown broadcast word is `INVALID_PARAMETER`.
- Applied at `AT+SAVE`. If the port changes, the socket is reopened; if only the broadcast method
  changes, the socket stays and only the destination is recomputed.

<a id="cmd-bipfd"></a>

### AT+BIPFD — Foreign Device registration

```text
AT+BIPFD="<bbmd>",<port>,<ttl>     register with this BBMD as a foreign device
AT+BIPFD="bbmd.example.com",47808,300
AT+BIPFD="10.0.5.1",47808,600
AT+BIPFD=0                         stop registering
AT+BIPFD?
  +BIPFD:STATE,REGISTERED,287
  +BIPFD:CONFIG,1,"bbmd.example.com",47808,300
```

Registers with a BBMD so that a device on a subnet with no BBMD can be found and read from other
subnets (Annex J.5). While it is registered, this device's broadcasts are also sent to the BBMD as
Distribute-Broadcast-To-Network.

| Argument | Value |
|---|---|
| bbmd | An IPv4 literal or a DNS name (letters, digits, `-`, `.`), **up to 63 bytes**, without `:port`. Longer is `BUFFER_TOO_LONG`; a wrong format, `INVALID_PARAMETER` |
| port | The BBMD's UDP port, 1 … 65535 |
| ttl | The requested Time-to-Live (seconds), 1 … 65535. Outside, `VALUE_OUT_OF_RANGE`. **The registration is renewed every half TTL** |

**All three are taken together.** A registration is one statement, and a TTL left over from another
BBMD is not a value the operator chose. `AT+BIPFD=0` is the only number that turns it off (any other
single number is `INVALID_PARAMETER`). After it is turned off, the BBMD address stays in the settings
so the query shows what was used, and the registration on the BBMD side disappears by itself when the
TTL runs out. Applied at `AT+SAVE`; registration starts over only when the settings actually changed.

**The query has two lines.**

```text
+BIPFD:STATE,<state>,<seconds left>[,<reason>[,0x<code>]]
+BIPFD:CONFIG,<0|1>,"<bbmd>",<port>,<ttl>
```

| State | Meaning |
|---|---|
| `OFF` | Registration is off, the mode is not `BIP`, the B/IP socket is closed, or the module **is waiting for the Ethernet link** |
| `RESOLVING` | Looking up the BBMD name (on the system workqueue — it does not block the BACnet task). An IPv4 literal skips this step |
| `REGISTERING` | Register-Foreign-Device sent, waiting for the BVLC-Result |
| `REGISTERED` | Registered. `<seconds left>` is the time until the BBMD deletes the entry if no renewal reaches it |
| `FAILED` | Failed. Retried at intervals that start at 64 seconds and double, up to the TTL (but no more than 10 minutes) |

`FAILED` carries a reason — `DNS` (the name did not resolve), `TIMEOUT` (no answer from the BBMD),
`NO_SOCKET` (no B/IP socket), `NAK` (the BBMD refused; the BVLC-Result code follows — usually
`0x0030`). When the B/IP socket closes during registration and the state becomes `OFF`, a reason is
attached as well: `+BIPFD:STATE,OFF,0,NO_SOCKET`. The second line holds the **configured values**.

> Why the first line starts with `STATE`: otherwise a registered module's query response
> `+BIPFD:REGISTERED,<seconds left>` would have the same shape as the registration URC
> `+BIPFD:REGISTERED,<ttl>`, and a host reading line by line could not tell a query response from a
> new registration. No URC starts with `STATE` or `CONFIG`.

**With no Ethernet link, registration is neither started nor sent.** Booting with a static address,
the B/IP socket opens at about 0.3 seconds but the PHY link comes up at about 2 seconds. Meanwhile the
state stays `OFF`, neither the name lookup nor Register-Foreign-Device goes out, and nothing is counted
as a failure (no retry interval is used either). If the link drops during registration, the remaining
transmissions wait for the link and carry on as soon as it comes up. If the BBMD's TTL runs out while
there is no link, that is a real expiry, so it is `FAILED,TIMEOUT`.

A `+BIPFD` URC goes out when the state changes ([§14](#sec-14)). The counters are in
[`+DIAG:BIPFD`](#sec-15).

---

<a id="sec-8"></a>

## 8. SC — BACnet/SC datalink

Used when [`AT+BACMODE=SC`](#cmd-bacmode). **Every command in this chapter is `[SC]`** — the B/IP-only
build does not have them, so they get `ERROR:INVALID_COMMAND`. The web UI's BACnet/SC tab
(`/api/bacnet/sc`, `/api/bacnet/sc/status`, `/api/bacnet/sc/cred`) does the same work.

The module is a **hub connector** (Annex AB). It has no hub function and no direct connections. The
connection is built on one hardware TCP socket of the W5500, in the order TLS 1.3 (mutual
authentication, EC P-256) → WebSocket (`hub.bsc.bacnet.org` subprotocol) → BVLC-SC Connect-Request.

**Order of preparation**

```text
AT+BSCCERT=KEY,<length>   + AT+BSCCERTW ...   device private key        (§8 AT+BSCCERT)
AT+BSCCERT=CERT,<length>  + AT+BSCCERTW ...   device operational certificate
AT+BSCCERT=CA1,<length>   + AT+BSCCERTW ...   issuer of the hub's chain
AT+BSCHUB="wss://hub.example.com:4443"        hub URI
AT+BACMODE=SC
AT+SAVE                                       → +BSC:CONNECTED,PRIMARY
```

Credentials need no save (they are written the moment they are uploaded); the URI and the mode are
applied at `AT+SAVE`.

**How the hub connector behaves**

- **One connection at a time.** It always tries the primary first and, if that fails, the failover at
  once. If both fail, it waits the reconnect delay and starts again from the primary. The delay starts
  at the minimum reconnect time, doubles with every failed round up to the maximum reconnect time, and
  goes back to the start on reaching `CONNECTED`.
- **While attached to the failover**, it probes the primary with a TCP connection only, once every
  maximum reconnect time (a momentary second socket, no TLS). If the connection opens, it sends a
  Disconnect-Request to the failover and moves to the primary. If the probe or the primary session
  fails, the interval doubles, up to 8 times the maximum reconnect time.
- **Heartbeat.** While connected, if nothing has been received (or sent) for the heartbeat time, it
  sends a Heartbeat-Request, and if nothing is received for twice that time, the connection is taken
  as lost (`HEARTBEAT`).
- The **VMAC** is drawn at random once when the SC thread starts (low nibble of the first octet `0x2`,
  locally administered · unicast) and kept across reconnections. It is drawn again only when the hub
  refuses with `NODE_DUPLICATE_VMAC` (up to 3 times per round). The **Device UUID** is a name-based
  UUID (version 5) made from the factory MAC, so it stays the same for the whole life of the device.
- When the connection is made, an I-Am is sent. When the mode leaves SC, or the URIs, timers or
  credentials change, the connection is closed politely with a Disconnect-Request.

<a id="cmd-bschub"></a>

### AT+BSCHUB — hub URIs

```text
AT+BSCHUB="wss://hub.example.com"                          primary only (failover unchanged)
AT+BSCHUB="wss://hub.example.com:4443/bsc","wss://10.0.0.9"  primary and failover
AT+BSCHUB=,"wss://backup.example.com"                       change only the failover
AT+BSCHUB=,""                                               clear the failover
AT+BSCHUB?   → +BSCHUB:"wss://hub.example.com:4443/bsc","wss://10.0.0.9"
```

The format is **`wss://host[:port][/path]`**.

| Part | Rule |
|---|---|
| scheme | `wss` (case-insensitive). **`ws://` is refused** — SC runs only over TLS |
| host | A DNS name (letters, digits, `-`, `.`) or an IPv4 literal, up to 63 bytes. If it is only digits and dots it must be canonical dotted-quad notation (`010.0.0.1` · `10.1.1` refused). IPv6 literals · `user@` refused |
| port | 1 … 65535; omitted, **443**. Left empty, as in `host:`, refused |
| path | Omitted, `/`. RFC 3986 path and query characters only. A query only after a `/` (`wss://host?x` refused). A fragment (`#`) is refused |

- One URI is **up to 127 bytes** (longer is `BUFFER_TOO_LONG`). A command line is 255 bytes, so two of
  the longest URIs do not fit in one line — set them one at a time with an empty position (`,`).
- A wrong format is `ERROR:URI`. **A failover equal to the primary is `URI` too** — moving over to the
  hub that just failed is not a failover.
- `""` clears that field: the failover at any time, the primary **only when the mode is not SC**
  (under SC it is `URI` — there would be nowhere left to connect to).
- Giving nothing, as in `AT+BSCHUB=` · `AT+BSCHUB=,`, is `INVALID_PARAMETER`.
- Applied at `AT+SAVE`. When a URI changes, the current connection is closed and the connector starts
  again from the primary.
- A URI holds no secret (`user:password@` is refused), so the query returns it exactly as stored.

<a id="cmd-bsctime"></a>

### AT+BSCTIME — hub connector timers

```text
AT+BSCTIME=<heartbeat>,<connect wait>,<disconnect wait>,<min reconnect>,<max reconnect>
AT+BSCTIME=300,10,10,2,30          (factory default)
AT+BSCTIME?   → +BSCTIME:300,10,10,2,30
```

All units are seconds, and the values are the same as the Network Port's SC properties.

| Order | Value | Network Port property | Rule |
|---|---|---|---|
| 1 | heartbeat | SC_Heartbeat_Timeout | 1 … 65535 |
| 2 | connect wait — the time to wait for Connect-Accept | SC_Connect_Wait_Timeout | 1 … 65535 |
| 3 | disconnect wait — the time to wait for Disconnect-ACK | SC_Disconnect_Wait_Timeout | 1 … 65535 |
| 4 | min reconnect | SC_Minimum_Reconnect_Time | **2** or more, at most max |
| 5 | max reconnect | SC_Maximum_Reconnect_Time | At least min, at most 65535 |

- **All five are required.** They are one schedule, and the two reconnect values only mean something
  as a pair.
- Not a number is `INVALID_PARAMETER`. Above 65535, or breaking the rules above, is `VALUE_OUT_OF_RANGE`
  — the value is judged before it is narrowed, so 65536 never becomes 0.
- The whole SC configuration is checked together, so if the mode is `SC` and there is no primary hub
  URI, the command is refused with `URI` — [`AT+BSCHUB`](#cmd-bschub) first. (This is the case when
  the stored SC configuration held a primary that could not be used and the boot cleared it.)
- Applied at `AT+SAVE` (the current connection is closed and made again).

<a id="cmd-bscvalidity"></a>

### AT+BSCVALIDITY — certificate validity-period check while the clock is unknown

```text
AT+BSCVALIDITY=LENIENT     (factory default)
AT+BSCVALIDITY=STRICT
AT+BSCVALIDITY?   → +BSCVALIDITY:LENIENT
```

The module has no RTC, so after every reboot it does not know the time ([§10](#sec-10)). This setting
decides how the notBefore/notAfter of the hub and device certificates are handled in the meantime.
Chain validation itself is done either way.

| Value | While the clock is unknown | Once the clock is known |
|---|---|---|
| `LENIENT` | Defers the period check and connects. The validity unchecked count of [`+DIAG:BSC`](#sec-15) goes up and the last field of [`AT+BSCSTATUS?`](#cmd-bscstatus) is `TIME_UNKNOWN` | **Checks again on the spot** the periods of the hub certificate kept from the handshake and of the device certificate. If one is out of its period, the connection is closed with `+BSC:DISCONNECTED,CERT_EXPIRED` |
| `STRICT` | Does not try to connect (`+BSC:DISCONNECTED,TIME_UNKNOWN`) | Connects after the normal check |

**A deadlocking combination is refused.** With mode `SC` + `STRICT` + time source `BACNET` (or
`NONE`), no BACnet time synchronization can arrive before the SC connection, so it **would never
connect.** This combination is refused with `ERROR:INVALID_PARAMETER` (web 400) by
`AT+BSCVALIDITY` · [`AT+TIMESRC`](#cmd-timesrc) · [`AT+BACMODE`](#cmd-bacmode) and the web alike. To
use `STRICT`, first change the time source to `SNTP` or `BOTH` (an SNTP server is required).

Stored in the time settings section and applied at `AT+SAVE`. A session made unchecked under
`LENIENT` ends, for the same reason, the moment `STRICT` is saved.

<a id="cmd-bschostcheck"></a>

### AT+BSCHOSTCHECK — name check of the hub certificate

```text
AT+BSCHOSTCHECK=OFF     (factory default)
AT+BSCHOSTCHECK=ON
AT+BSCHOSTCHECK?   → +BSCHOSTCHECK:OFF
```

The issuer and validity period of the hub certificate are checked either way. This setting decides
whether the certificate must also name **the host of the URI just dialled**.

| Value | Hub accepted |
|---|---|
| `OFF` | A certificate signed by a configured issuer (CA1 · CA2) and within its period is accepted. That is the check Annex AB.7.4 lists, and the name is not part of it. **Another device that received its certificate from the same issuer would be accepted as the hub too** — usually that is every device on the site |
| `ON` | In addition, the certificate must name the URI's host |

What counts as a match under `ON` depends on the URI's host.

| Host of the URI | What counts as a match |
|---|---|
| DNS name | A DNS name in the SAN (case-insensitive, a `*` allowed as the single leftmost label). The CN is looked at **only for a certificate with no SAN at all** |
| IPv4 address | Only an IP address in the SAN. An address written in the CN is not looked at |

- If the name differs, that URI ends in failure: `+BSC:DISCONNECTED,CERT`, and the detail in
  [`AT+BSCSTATUS?`](#cmd-bscstatus) is `0x00000004`. Exactly like any other failure, the connector
  moves to the failover and follows the reconnect delay. The primary and the failover are each checked
  against the host of their own URI.
- **If the primary's name is wrong while the device is attached to the failover, the connection is cut
  periodically.** The primary probe looks only at the TCP connection, so it succeeds; the device
  drops the failover, goes to the primary, is refused with `CERT` and comes back. The interval grows
  by the probe rule (up to 8 times the maximum reconnect time). If you see `CERT`, fix the URI or the
  hub certificate.
- **Check the hub certificate before turning this on.** The standard does not require the name, so a
  hub certificate without one is not defective. Turned on at a site that runs with such certificates,
  the module will not connect to the hub.
  To check: `openssl x509 -in hub.pem -noout -subject -ext subjectAltName`
- SNI has nothing to do with this setting. It is sent for a DNS name and not for an IPv4 address.
- The argument is only `OFF` · `ON` (case-insensitive); any other value is `INVALID_PARAMETER`.
- Applied at `AT+SAVE`. If the value changed, the current connection is closed and made again with
  the new setting. A device updated from earlier firmware is `OFF`. On the web it is the same item on
  the BACnet/SC tab.

<a id="cmd-bscstatus"></a>

### AT+BSCSTATUS? — hub connection state

```text
AT+BSCSTATUS?
+BSCSTATUS:PRIMARY,CONNECTED,IDLE,02:1A:2B:3C:4D:5E,6f1c2a50-3b7e-5d21-9a44-1f0e8c7b2d10,NONE,0,CHECKED
+BSCSTATUS:CONN,PRIMARY,CONNECTED,NONE,0,3,3,1204
+BSCSTATUS:CONN,FAILOVER,IDLE,TCP,-116,2,0,3611
OK
```

**First line** — `<hub state>,<primary>,<failover>,<vmac>,<uuid>,<last error>,<detail>,<validity>`

| Field | Value |
|---|---|
| hub state | `NO_CONNECTION` · `PRIMARY` · `FAILOVER` — the words of the `+BSC` URC |
| primary · failover | The connection state of each URI — `IDLE` · `CONNECTING` · `AWAITING_ACCEPT` · `CONNECTED` · `DISCONNECTING` |
| vmac | This device's VMAC. `00:00:00:00:00:00` before the SC thread draws it |
| uuid | The Device UUID carried in the Connect-Request (RFC 4122 lowercase notation) |
| last error | Why there is no connection, or why the last connection ended — table below. `NONE` if there has never been one |
| detail | The number for that failure — table below. `0` if none |
| validity | `CHECKED`, `TIME_UNKNOWN` (connected unchecked under LENIENT — the check is still to come), `-` with no connection |

**`CONN` lines** (one per URI) — `CONN,<PRIMARY|FAILOVER>,<state>,<last error>,<detail>,<attempts>,<connects>,<seconds in state>`.
The number of dials since boot, how many of them reached `CONNECTED`, and the seconds spent in the
current state (0 if it has never dialled). `CONN` is not a hub state word, so these lines cannot be
confused with the first line.

**With no Ethernet link, the connector does not dial.** Booting with a static address, SC comes up at
about 0.3 seconds and the PHY link at about 2 seconds. While it waits for the link nothing counts as an
attempt (attempts unchanged, state `IDLE`, the reason unchanged too) and no reconnect delay is used;
when the link comes up, the waiting dial goes out at once. The probe for returning to the primary
while attached to the failover is also put off while there is no link.

**Failure reasons** — `+BSC:DISCONNECTED`, `AT+BSCSTATUS?` and the web's `/api/bacnet/sc/status` use
the same words.

| Reason | Meaning | detail |
|---|---|---|
| `NO_HUB` | The mode is SC but there is no primary URI | — |
| `CREDENTIALS` | KEY/CERT/CA1 is missing, KEY and CERT do not match, they cannot be read, or the clock is known and the device certificate is out of its period | Negative errno (missing · mismatch), `-0x….` (mbedTLS code), `0x…` (verification flags) |
| `TIME_UNKNOWN` | `STRICT` and the clock is unknown | — |
| `DNS` | The hub name did not resolve | — |
| `NO_SOCKET` | No socket could be obtained | — |
| `TCP` | TCP connection failure or timeout | errno |
| `TLS` | The handshake failed, or the hub ended it with a fatal alert | The alert number (0 or more — how the hub refused this device's certificate) or `-0x….` (mbedTLS code) |
| `CERT` | The hub's certificate was refused: chain or period, or the name under [`AT+BSCHOSTCHECK=ON`](#cmd-bschostcheck) | `0x…` verification flags (they can combine): `0x00000001` expired, `0x00000004` name differs, `0x00000008` issuer differs |
| `CERT_EXPIRED` | LENIENT re-check — the time now known is outside the certificate's period | — |
| `WS` | WebSocket upgrade refused | HTTP status code |
| `TIMEOUT` | No Connect-Accept came within the connect wait | — |
| `NAK` | The hub refused the Connect-Request | `0x….` error code |
| `DUPLICATE_VMAC` | Duplicate-VMAC refusals went past the retry limit | `0x….` |
| `HEARTBEAT` | Nothing came from the hub for twice the heartbeat | — |
| `CLOSED` | The hub closed the WebSocket/TLS, or sent a Disconnect-Request before accepting | — |
| `IO` | Send or receive failure | errno |
| `PROTOCOL` | The hub broke a WebSocket or BVLC-SC rule, or accepted with a limit no NPDU can fit in | Close code or errno |
| `NETWORK_DOWN` | The network layer stopped the service (link or address change) | — |
| `STOPPED` | This side closed it because of a mode or settings change | — |
| `STALLED` | The SC thread could not make progress (stall watch) | — |
| `HUB_DISCONNECT` | The hub ended a connected session politely with a Disconnect-Request — not an error | — |

<a id="cmd-bsccert"></a>

### AT+BSCCERT — credential upload, delete, query

```text
AT+BSCCERT=<KEY|CERT|CA1|CA2>,<total length>    start an upload
AT+BSCCERT=<KEY|CERT|CA1|CA2>,DEL               delete a stored item
AT+BSCCERT=ABORT                                give back an open upload
AT+BSCCERT?                                     what is stored
```

| Item | Content | Required |
|---|---|---|
| `KEY` | Device private key — **EC P-256**, SEC1 or PKCS#8, unencrypted PEM or DER | ● |
| `CERT` | Device operational certificate — an EC P-256 X.509 whose public key is that of `KEY` | ● |
| `CA1` | The issuer certificate the hub's certificate chain must lead to | ● |
| `CA2` | A second issuer (optional) — for a CA changeover period or an intermediate CA | |

- One item is **up to 4096 bytes** in the form it is uploaded in (PEM or DER). Longer is
  `BUFFER_TOO_LONG`; 0 is `INVALID_PARAMETER`. It is stored as DER, and the DER of the four items
  together must fit in one 8 KiB slot (if it does not, `BUFFER_TOO_LONG` at the last chunk).
- Starting opens a place to receive the [`AT+BSCCERTW`](#cmd-bsccertw) chunks. **Nothing is stored
  until the last chunk has arrived and passed verification.** Starting discards a previous upload this
  port had open — a host that loses its way midway can simply start again from the beginning.
- `ABORT` only gives the place back, without starting an upload. Use it to let a web upload or a `DEL`
  use the place. An upload with no chunk for 60 seconds is discarded when the other side (a web
  upload · `DEL` · the start of another item) asks for the place.
- `DEL` is `STORAGE_BUSY` while an upload is open (`ABORT` first). An upload with no chunk for 60
  seconds, however, does not block it — `DEL` discards that upload and deletes. A failed flash write is
  `STORAGE_FAILURE`.
- **`DEL` of an item that is not stored is `OK` too** (not `OBJECT_NOT_FOUND`), because "that item is
  not there" is the result asked for. Whether it was there is seen with `AT+BSCCERT?`.
- **No save (`AT+SAVE`) is needed.** A completed upload and a delete are written on the spot to the
  credential area (two slots, A/B; if power fails during a write, the previous credentials remain), and
  the hub connector reconnects with what changed. [`AT+FACTORY`](#cmd-factory) erases both slots.

**Key and certificate pair.** A new `CERT` that does not match the stored `KEY` is refused
(`CRED_MISMATCH` — it is a certificate that cannot be used). A new `KEY`, on the other hand, is
accepted even if it does not match the stored `CERT` — to change both, one of them has to be uploaded
first. In between, the pair shows as `MISMATCH` and the hub connector does not dial (`CREDENTIALS`).
That clears when the matching `CERT` arrives.

**Query** — one line per item (`KEY`, `CERT`, `CA1`, `CA2`, in that order), then the store line.

```text
+BSCCERT:KEY,PRESENT,P256,MATCH
+BSCCERT:CERT,PRESENT,436,P256,3A:91:…:7C,"device-0034","Site Issuing CA","2026-01-01T00:00:00Z","2027-01-01T00:00:00Z"
+BSCCERT:CA1,PRESENT,421,P256,B0:12:…:E5,"Site Issuing CA","Site Issuing CA","2025-06-01T00:00:00Z","2035-06-01T00:00:00Z"
+BSCCERT:CA2,ABSENT
+BSCCERT:STORE,A,4,4,4,0
```

| Line | Fields |
|---|---|
| `KEY` | `PRESENT`, key type (`P256` — a key the handshake can sign with — or `OTHER`), pair (`MATCH` · `MISMATCH` · `-` if either is missing) |
| `CERT` · `CA1` · `CA2` | `PRESENT`, DER length, key type, SHA-256 fingerprint (uppercase colon-separated pairs — the same notation as `openssl x509 -fingerprint -sha256`), subject CN, issuer CN, notBefore, notAfter (UTC) |
| Missing item | `<item>,ABSENT` |
| `STORE` | The slot in use (`A` · `B` · `NONE`), sequence number, credential generation, number of flash writes since boot, number of failed writes |

> **The private key is never exported in any form.** The `KEY` line says only that it is there, its
> type and its pairing — no length, no hash, no value computed from the key. The web's
> `/api/bacnet/sc/cred` gives the same three things only. Whether a certificate's period is valid now
> is judged by the hub connector with the BACnet clock.

**CN notation.** The subject and issuer CNs are someone else's characters inside the certificate, so
they are converted on output so as not to break the line — every byte outside `0x20` … `0x7E`, and
quotes and backslashes, become `?`, and **they are cut at 63 bytes.** So a **non-ASCII (UTF-8) CN,
Korean for example, shows as a run of `?`**, and a long CN is cut. When a host compares with a
certificate it holds, it compares the **SHA-256 fingerprint**, not the CN.

<a id="cmd-bsccertw"></a>

### AT+BSCCERTW — write a credential chunk

```text
AT+BSCCERTW=<item>,<offset>,<len>
> <exactly len bytes>
```

Writes `<len>` (1 … **1024**) bytes from `<offset>` into the upload [`AT+BSCCERT`](#cmd-bsccert)
opened. It is **binary mode** ([§3.4](#sec-3)), so the line breaks of PEM and every byte value of DER
pass through as they are.

```text
AT+BSCCERT=CERT,1500
OK
AT+BSCCERTW=CERT,0,1024
> <1024 bytes>+BSCCERTW:CERT,1024,1500
OK
AT+BSCCERTW=CERT,1024,476
> <476 bytes>+BSCCERTW:CERT,STORED,MATCH,INCOMPLETE
OK
```

| Response | Meaning |
|---|---|
| `+BSCCERTW:<item>,<received>,<total>` | The chunk was received. Send more |
| `+BSCCERTW:<item>,STORED,<pair>,<COMPLETE\|INCOMPLETE>` | The item passed verification and went into flash. The pair is the same word as on the `KEY` line of `AT+BSCCERT?`; `COMPLETE` means that `KEY` · `CERT` · `CA1`, which the hub connector needs, are all there |

**What is refused before the prompt** — a refusal after the prompt wastes up to 1024 bytes the host has
sent, so whatever can be known is looked at first.

| Refusal | Response |
|---|---|
| Argument format, `len` 0, no upload open for this item | `INVALID_PARAMETER` |
| `len` over 1024, or the chunk goes past the declared total length | `BUFFER_TOO_LONG` |
| The offset neither continues from what has been received nor repeats the previous chunk | `INVALID_PARAMETER` |
| 7-bit or XON/XOFF port | `NOT_SUPPORTED` |

"No upload open" is judged from the upload state the AT port **remembers on its own side**. Once 60
seconds have passed without a chunk and the store has given the place to the other side (a web upload
· `DEL`), the AT port does not know that, so it refuses with `INVALID_PARAMETER` **only after giving
the prompt and receiving the bytes** — that chunk is discarded. Start an upload that stopped for more
than 60 seconds again with `AT+BSCCERT=<item>,<length>`.

**When an answer is lost.** The offset must continue from what has been received or be **a repeat of
the previous chunk**. If no `OK` came, send the same chunk again (same offset, length and bytes) — the
store checks that the bytes are the same and accepts it. A repeat of **the last chunk, the one that
completed the item**, gets the first answer again (`STORED` or the refusal). If the store changed in
between (a web upload or delete) or the host sent a different `AT+BSCCERT=`, it is
`INVALID_PARAMETER`.

**The last chunk can take a while.** The completing chunk is converted to DER, verified and written to
the slot on the spot. If the SC thread is in the middle of a cryptographic operation, the store waits
**up to 15 seconds** for that step to end, and the slot erase comes on top. The host should wait **20
seconds or more** for the answer to the last chunk. Meanwhile the AT port answers no other command.

**Refusals of the last chunk**

| Response | Meaning |
|---|---|
| `CRED_INVALID` | Not PEM/DER, does not parse, an encrypted key, or not EC P-256 |
| `CRED_MISMATCH` | The key of `CERT` does not pair with the stored `KEY` |
| `BUFFER_TOO_LONG` | The four items together do not fit in one slot |
| `STORAGE_BUSY` | The SC thread held the crypto lock for more than 15 seconds, or a TLS session is using the mbedTLS heap and there is no room to parse — a passing state. Send again, or upload while the mode is not SC |
| `STORAGE_FAILURE` | Flash write failure |

In every case the upload is closed (start again with `AT+BSCCERT=`). If the host stops in the middle of
a chunk and `ERROR:PAYLOAD_TIMEOUT` occurs, the upload is given back as well — a half-received chunk
cannot be continued, so send that item again from the beginning.

> The received bytes (which may be a piece of a private key) are wiped from the receive ring, the
> receive buffer and the payload buffer right after processing, and the store's staging buffer is wiped
> too on completion or cancellation.

The web UI uploads an item in one go, through the same checks (`POST /api/bacnet/sc/cred?item=…`).

---

<a id="sec-9"></a>

## 9. Object — host objects and object mapping

**The host MCU owns the objects.** The module shows the objects the host defined on the BACnet
network, the host puts in the values with [`AT+BOBJVAL`](#cmd-bobjval), and writes from the network
are passed to the host as `+BACWRITE` ([§14](#sec-14)). The Device and the Network Port are fixed
objects the module holds itself.

| Type | Short name | Long name | Number | Notes |
|---|---|---|---|---|
| Analog Input / Output / Value | `AI` `AO` `AV` | `analog-input` … | 0 / 1 / 2 | Units required |
| Binary Input / Output / Value | `BI` `BO` `BV` | `binary-input` … | 3 / 4 / 5 | |
| Multi-state Input / Output / Value | `MSI` `MSO` `MSV` | `multi-state-input` … | 13 / 14 / 19 | Number_Of_States required |

A type can be written in any of the three forms (case-insensitive). It is the same parser as the CSV
import.

- **Up to 256 objects** (the Device and the Network Port not counted), and **up to 64 priority
  arrays** (commandable objects) (both fixed at build time).
- Many objects are defined **at once with a CSV** on the web UI's Object mapping tab. AT has only
  [`AT+BMAPRELOAD`](#cmd-bmapreload), which re-applies the stored CSV, and
  [`AT+BMAPCLEAR`](#cmd-bmapclear), which clears it. The CSV is stored in the same staging area as
  the OTA image, so **uploading firmware removes the stored CSV** (the applied object definitions stay
  in the settings). The web's apply checks a file of up to 124 KiB **before storing it**, so a refused
  file does not change the stored CSV. A larger file is `413 Too Large To Check`, and it replaces the
  stored CSV only with the mark that says to store it first without a check (`?unchecked=1`, which the
  page adds after asking for confirmation) — if that file is then refused, `AT+BMAPRELOAD` is
  `INVALID_CSV` too, and if the transfer was cut, `CSV_NOT_AVAILABLE`.
- Every time the object list changes (add · delete · import · clear all), the Device's
  `Database_Revision` goes up. **It is not guaranteed to go up by 1 at a time** —
  [`AT+BMAPCLEAR`](#cmd-bmapclear) raises it twice, and a re-apply that discards a failed import or
  unsaved edits raises it too. Clients only look at whether the value **changed**.

<a id="cmd-bobjadd"></a>

### AT+BOBJADD — define an object

```text
AT+BOBJADD=<type>,<instance>,"<name>"[,<units|states>[,<flags>]]

AT+BOBJADD=AI,1,"Zone Temp",degrees-celsius
AT+BOBJADD=AV,10,"Setpoint",62,WP          62 = degrees-celsius
AT+BOBJADD=BO,1,"Supply Fan",,F
AT+BOBJADD=MSV,1,"Mode",4,C                → stored as CW
```

| Argument | Value |
|---|---|
| type | One of the nine in the table above |
| instance | `0` … `4194302` |
| name | Up to **31 bytes** of UTF-8, no control characters (C0 · DEL, and C1 U+0080 … U+009F — for example NEL `C2 85`), **unique within the device** (the Device and Network Port names included) |
| fourth | Analog: **Units required** — a name (`degrees-celsius`, case-insensitive) or a number 0 … 65535 (proprietary units of 256 and above included). Multi-state: **Number_Of_States required**, 2 … 16. Binary: **must be empty** (a value is refused — so that a value the host believes applied is not silently ignored) |
| flags | A combination of the letters below (case-insensitive, each once); omitted · `""` · `-` mean none |

| Flag | Name | Meaning |
|---|---|---|
| `C` | COMMANDABLE | Has a priority array (Priority_Array · Relinquish_Default · Current_Command_Priority). **Always on for an Output, refused for an Input.** Given to a Value, it turns `W` on as well |
| `P` | PERSISTENT | Keeps the Present_Value in the runtime journal and restores it after a reboot. **Refused for a commandable object** (there would be two values) — so it cannot be used on an Output. The journal takes **one record per object per 10 seconds**, so even a value that was answered may be missing from flash for up to about 10 seconds — a power cut in that time loses it ("PERSISTENT values and power loss" under [`AT+BOBJVAL`](#cmd-bobjval)) |
| `F` | CONFIRMED | A remote Present_Value write is committed **after the host approves it** (`+BACWRITE:<tid>,…` → [`AT+BWRACK`](#cmd-bwrack)). Without it, the write is committed at once and only reported. **It only means something on an object the network can write while it is in service — an Output, or a Value with `W` (or `C`).** Every type accepts it, but the network can write an Input only while it is Out_Of_Service, and that write is committed without asking, while a Value without `W` has no remote write at all — `AT+BOBJADD=AI,…,F` is `OK` but the `F` does nothing |
| `W` | WRITABLE | The network can write the Present_Value of a Value object. **On a type that is not a Value it has no meaning and is dropped** |

Values at creation: no minimum or maximum limit, COV_Increment 0, Relinquish_Default 0.0 / `INACTIVE`
/ state 1, no Description, Polarity normal. These values are set with a CSV.

| Refusal | Response |
|---|---|
| Unknown type word, a type number that is not one of the nine, a type number written in `0x` | `TYPE_MISMATCH` |
| Type number above 1023, instance above 4194302, Units number above 65535, state count outside 2 … 16 | `VALUE_OUT_OF_RANGE` |
| Name of 32 bytes or more | `BUFFER_TOO_LONG` |
| Instance missing or not a number, empty name (`""` or omitted), name not UTF-8 or with control characters, fourth position missing · wrong unit name · unit number in `0x`, state count not a number, a fourth position on a binary, wrong flags, `C` on an Input, `P` on a commandable | `INVALID_PARAMETER` |
| The same type and instance exist | `INSTANCE_IN_USE` |
| The same name exists | `DUPLICATE_NAME` |
| The object table is full | `OBJECT_LIMIT` |
| The priority arrays are all used (a limit separate from the object count) | `COMMAND_SLOTS` |
| The stored object table was not loaded at boot — this edit could not be stored | `STORAGE_FAILURE` |

The object is visible on the network at once, but **survives the next boot only after
[`AT+SAVE`](#cmd-save).**

<a id="cmd-bobjdel"></a>

### AT+BOBJDEL — delete an object

```text
AT+BOBJDEL=AI,1
```

The object disappears at once and the deletion is made final by `AT+SAVE` (reset before saving and it
comes back). COV subscriptions to that object end too. If there is no such object,
`OBJECT_NOT_FOUND`; the type and instance checks are the same as in `AT+BOBJADD`. If the stored table
was not loaded, `STORAGE_FAILURE`.

<a id="cmd-bobjval"></a>

### AT+BOBJVAL — the host puts in a value

```text
AT+BOBJVAL=<type>,<instance>,<value>[,<OK|FAULT>]

AT+BOBJVAL=AI,1,23.5
AT+BOBJVAL=BI,3,ACTIVE
AT+BOBJVAL=MSI,2,3
AT+BOBJVAL=AI,1,,FAULT          value unchanged, Reliability only
AT+BOBJVAL=AO,1,,OK             a commandable object can only report its status
```

Changes an Input's reading or a Value object's value **at once**. COV subscribers get a notification
when the change exceeds the COV_Increment or the Status_Flags change, and a PERSISTENT object is
recorded in the journal (once per object per 10 seconds — changes in between are merged into the next
record and counted in [`+DIAG:BACSTORE`](#sec-15); see "PERSISTENT values and power loss" below).

**PERSISTENT values and power loss.** Journal records are limited to one per object per 10 seconds (a
build option, 1 second … 1 hour). WriteProperty has no authentication, so if a client that changes a
writable PERSISTENT value without pause were allowed one record per datagram, the journal flash would
wear out within a few weeks. This limit applies equally to `AT+BOBJVAL` and to WriteProperty ·
WritePropertyMultiple from the network.

- An object that has had no record since the previous 10-second tick has **its first change recorded
  at once**.
- Further changes within the same period stay in RAM only, and **at the next 10-second tick only the
  last value** is recorded. The values in between are already visible on the network, and the `OK`
  (AT) or SimpleACK (WriteProperty) has already gone out.
- So **even a value that was answered may be missing from flash for up to about 10 seconds.** If power
  is cut, or a reset-pin or watchdog reset comes, in that time, the object returns after the reboot to
  **the last value recorded**. Example: if `271` is written and `272` right after it, and power is cut
  before the next tick (or during the tick's write), the value after the reboot is `271`, even though
  both writes were answered. Values are never mixed or corrupted — a record cut off mid-write is
  skipped and the complete value before it is used.
- Waiting values are written by [`AT+SAVE`](#cmd-save), [`AT+REBOOT`](#cmd-reboot),
  [`AT+OTAREBOOT`](#cmd-otareboot), the web's restarts (reboot button · automatic restart after an
  update) and ReinitializeDevice, **before any restart**. A power cut, the reset pin and a watchdog
  reset give no such chance.
- If a value must survive and power may be cut soon (the host knows of a power cut in advance, for
  example), **wait at least 10 seconds after the last write, or send `AT+SAVE`.** `AT+SAVE` also
  rewrites the whole configuration, so it is not meant to be called after every value.
- The number of merged changes is the second field of [`+DIAG:BACSTORE`](#sec-15).

| Value format | |
|---|---|
| Analog | Decimal real — `23.5` · `-0.125` · `1e3`. Hexadecimal reals · `nan` · `inf` · leading or trailing spaces are refused |
| Binary | `ACTIVE` · `INACTIVE` · `1` · `0` |
| Multi-state | `1` … Number_Of_States, decimal |

The status is the Reliability — `FAULT` is `UNRELIABLE_OTHER` (the FAULT bit of Status_Flags is set),
`OK` is `NO_FAULT_DETECTED`. The value can be left empty and only the status given. With neither,
`INVALID_PARAMETER`.

| Refusal | Response |
|---|---|
| A malformed value or status, a binary or multi-state value written in `0x`, **a multi-state value of `0` or above 65535** | `INVALID_PARAMETER` |
| An analog value outside the minimum/maximum, a multi-state value of 2 … 65535 that exceeds Number_Of_States | `VALUE_OUT_OF_RANGE` |
| No such object | `OBJECT_NOT_FOUND` |
| **A value for a commandable object** — its Present_Value is decided by the priority array and belongs to the network (a status can be given) | `ACCESS_DENIED` |
| A value or status for **an object that is Out_Of_Service** — the network has detached the object from the host | `ACCESS_DENIED` |

Which of the two it is can be told from the `C` flag of [`AT+BOBJ?`](#cmd-bobj). OOS clears when the
network sets it back; commandable never clears. When OOS clears, an Input returns to the host's reading
from just before OOS.

<a id="cmd-bobj"></a>

### AT+BOBJ? — object list

```text
AT+BOBJ?
+BOBJ:AI,1,"Zone Temp",-,23.5
+BOBJ:AO,1,"Damper",CF,40
+BOBJ:AV,10,"Setpoint",PW,21.5
+BOBJ:BO,1,"Supply Fan",CF,INACTIVE
+BOBJ:MSV,1,"Mode",CW,1
OK
```

Outputs `+BOBJ:<type>,<instance>,"<name>",<flags>,<value>`, one line per object, in object identifier
order (type number, instance). The flags are in `CPFW` order, `-` if none. The value is in exactly the
format `AT+BOBJVAL` accepts, and an analog value is **the shortest notation that reads back as the same
float** (6 … 9 significant digits) — `1234567` comes out as `1234567`. Out-of-range exponents take the
form `1.5e+12`.

- It is a **live list**. An object shows right after `AT+BOBJADD`, before the save (the stored table
  is [`AT+BMAP?`](#cmd-bmap)).
- Each line is a separate snapshot, so if another interface adds an object in between, the later lines
  can shift by one.
- With no objects, only `OK` comes.
- **Names come inside quotes without escaping.** A name can contain `"` and `,` — over AT too
  (`AT+BOBJADD=AI,1,"say "hi"",62` stores `say "hi"`), as well as through the CSV import and the web.
  Such a name breaks a host that reads `"<name>"` by cutting at quote pairs or commas. **Do not use
  `"` in object names.** A host that must read any name reads it **from just after the first `"` up to
  the `"` right before the second-to-last `,`** — the type and instance have no quotes, and the flags
  and value after the name have no commas.

<a id="cmd-bwrack"></a>

### AT+BWRACK — answer a confirmed write

```text
+BACWRITE:17,AO,1,8,42.5          ← URC: a client wants to write 42.5 to AO,1 at priority 8
AT+BWRACK=17,OK                   approve → commit, SimpleACK to the client
AT+BWRACK=17,VALUE_OUT_OF_RANGE   refuse → Error PROPERTY / VALUE_OUT_OF_RANGE to the client
```

A remote Present_Value write to an `F` (CONFIRMED) object asks the host before it is committed. The
module does not wait — it keeps the request in a pending slot (there are 4) and goes on handling the
next requests, and the answer goes out when `AT+BWRACK` arrives or the deadline passes.

| Argument | Value |
|---|---|
| tid | The first field of `+BACWRITE`, 1 … 65535 (outside, `VALUE_OUT_OF_RANGE`) |
| verdict | `OK`, or the error to send the client (class PROPERTY) — `WRITE_ACCESS_DENIED` · `VALUE_OUT_OF_RANGE` · `INVALID_DATA_TYPE`. Any other word is `INVALID_PARAMETER` (so that a typo of `OK` does not turn into a refusal) |

- **The deadline is 750 ms** (well short of the client's APDU timeout). Past it, the client receives `Error DEVICE / OPERATIONAL_PROBLEM`, and a late
  `AT+BWRACK` is `ERROR:HOST_TIMEOUT` (only the most recently expired tid is remembered — older ones
  are `OBJECT_NOT_FOUND`).
- An unknown tid, or one already answered, is `OBJECT_NOT_FOUND` — this answer changed nothing.
- `OK` means the answer was recorded. The commit and the SimpleACK are done by the BACnet task right
  after. If the object was deleted in between, the client receives an error.
- **If the datalink changed while the write was waiting** (a saved `AT+BACMODE` or B/IP · SC settings
  were applied), the host's verdict is still followed — with `OK` the value is committed — but **no
  answer is sent to the client.** The same goes for a refusal and an expired deadline. The client ends
  with its own APDU timeout.
- If the pending slots are all full, or there is no room in the AT transmit queue to send
  `+BACWRITE`, the client receives `Error RESOURCES / NO_SPACE_TO_WRITE_PROPERTY` at once (a question
  the host never even saw is not held until the deadline).
- A request the same client sends again with the same invoke id (a retransmission) does not take a new
  slot; it gets the answer to the first request.
- **WritePropertyMultiple does not ask the host.** If the Present_Value of an in-service CONFIRMED
  object is among its writes, the whole batch is refused with `WRITE_ACCESS_DENIED` — an
  all-or-nothing batch cannot wait for an answer that may be "no".
- A write to an Out_Of_Service object is committed without asking or reporting, even if the object is
  CONFIRMED ([§14](#sec-14) `+BACWRITE`).

<a id="cmd-bmap"></a>

### AT+BMAP? — the stored mapping

```text
AT+BMAP?   → +BMAP:CSV_IMPORT,42,1,3815,0x8C1D22A7,7
```

`<source>,<object count>,<CSV schema version>,<CSV size>,0x<CSV CRC-32>,<generation>`

| Source | Meaning |
|---|---|
| `DEFAULT` | No objects defined (factory state) |
| `MANUAL_AT` | A table made with `AT+BOBJADD` |
| `CSV_IMPORT` | A table imported from a CSV |
| `CSV_IMPORT_MODIFIED` | A table imported from a CSV and then changed over AT |

- These are the **stored values**. After `AT+BOBJADD` and before `AT+SAVE`, the old object count shows
  (the live list is [`AT+BOBJ?`](#cmd-bobj)).
- The **generation** goes up every time the stored mapping changes. Even with the same object count,
  "the same mapping" and "a different mapping" can be told apart without reading them. It is the same
  value as `mapping_generation` in the web's `/api/status`.

<a id="cmd-bmapreload"></a>

### AT+BMAPRELOAD — re-apply the stored CSV

```text
AT+BMAPRELOAD
OK
```

Imports the CSV stored in the staging area again. It is the same **replace-all** transaction as a web
upload — it changes the mapping only after every row has been validated, and if there is even one
error the current mapping is left as it is. When a save is needed it **saves by itself** (no
`AT+SAVE` needed).

**The two cases differ.**

| The CSV | What happens |
|---|---|
| **is the very CSV of the stored mapping** (same CRC · size · object count · table — the most common re-apply) | **Nothing is written to flash.** The generation ([`AT+BMAP?`](#cmd-bmap)) stays the same too. Only the live object table is refilled from the stored table — so **unsaved `AT+BOBJADD` · `AT+BOBJDEL` edits are lost, with nothing saved.** Database_Revision goes up. Other unsaved settings are not written either |
| differs | **The whole configuration is saved** together with the new mapping — see the warning below. The generation goes up |

| Response | Meaning |
|---|---|
| `CSV_NOT_AVAILABLE` | There is no stored CSV (an OTA image took the staging area, or a web upload over 124 KiB that was being stored without a check, `?unchecked=1`, did not finish) |
| `INVALID_CSV` | The file has errors. Which rows is told by the web's import report — this command only says whether it works or not. This firmware's web apply checks files of up to 124 KiB before storing them, so the only way that apply leaves a bad file as the stored CSV is a large file stored without a check (`?unchecked=1`) |
| `STORAGE_BUSY` | A web CSV upload or a firmware upload is using the staging area — try again when it ends. Conversely, a re-apply holds the area while it parses the CSV, so a web upload started meanwhile gets `409 Storage Busy`, and [`AT+OTAFWUP`](#cmd-otafwup) during a web Re-apply gets `STORAGE_BUSY`. |
| `MAPPING_TOO_LARGE` | The new mapping does not fit in the configuration slot |
| `STORAGE_FAILURE` | The stored CSV could not be read, or the new mapping could not be written to flash (read-back failure) |
| `INTERNAL` | Any other failure, or a factory reset is in progress |

If it is caught in validation (`INVALID_CSV`), nothing changes. If it fails at the apply or save step,
the stored mapping is left as it is and the live table is put back to the stored table — unsaved edits
are lost in this case too, and Database_Revision goes up.

<a id="cmd-bmapclear"></a>

### AT+BMAPCLEAR — clear the mapping

```text
AT+BMAPCLEAR="CONFIRM"
OK
```

Empties the live objects and the stored mapping, **both of them, right now**, and **saves by itself.** Objects
made with `AT+BOBJADD` and the PERSISTENT values in the journal go too, so a confirmation word is
required — exactly `"CONFIRM"`, including case; anything else is `INVALID_PARAMETER`. On the web it is
`POST /api/mapping/clear` with `{"confirm":"CONFIRM"}`. The stored CSV file itself remains (it can be
brought back with `AT+BMAPRELOAD`).

| Response | Meaning |
|---|---|
| `INVALID_PARAMETER` | The confirmation word is missing or wrong |
| `STORAGE_BUSY` | Another operation is using the storage — try again |
| `STORAGE_FAILURE` | The empty mapping could not be written to flash (read-back failure) |
| `INTERNAL` | Any other failure, or a factory reset is in progress |

If the save fails, nothing is cleared (the save happens before the live table is emptied).
Database_Revision goes up once before the save and once after the table is emptied — twice on
success.

> **`AT+BMAPCLEAR`, and an `AT+BMAPRELOAD` that changes the mapping, save the whole configuration.** At
> that moment **other unsaved settings that were in RAM are written to flash as well.** BACnet and time
> settings are applied by the BACnet task when it notices the save; network, web and UART settings are
> applied at the next `AT+SAVE` or reboot. If settings are being edited, `AT+SAVE` them first or
> discard them (reboot) before running it. The web UI's CSV import is the same. An `AT+BMAPRELOAD` of
> the same CSV as the stored mapping saves nothing, but instead **discards unsaved object edits**
> ([`AT+BMAPRELOAD`](#cmd-bmapreload)) — either way, `AT+SAVE` object edits first.

---

<a id="sec-10"></a>

## 10. Time — clock and time source

**The module has no RTC.** The clock is computed from the time received from the network and the time
elapsed since, and after a reboot it is "unknown" again. It gives neither 1970 nor a guess — while
the time is unknown, the Device's `Local_Time` · `Local_Date` are encoded as unspecified. A
synchronization that gives a time earlier than 2026-01-01 is refused and counted.

Where the clock is used: the Device's `Local_Time` · `Local_Date` · `UTC_Offset` ·
`Time_Of_Device_Restart`, and the period check of SC certificates ([`AT+BSCVALIDITY`](#cmd-bscvalidity)).
On the web it is the time section of the BACnet tab (`GET/POST /api/time`).

<a id="cmd-time"></a>

### AT+TIME? — current time

```text
AT+TIME?   → +TIME:SYNCED,SNTP,"2026-10-12T05:31:07Z",42
           → +TIME:UNKNOWN,-,"",0
```

`<SYNCED|UNKNOWN>,<side that last set it BACNET|SNTP|->,"<UTC ISO 8601>",<seconds since the last sync>`.
Local time is this value minus the offset of [`AT+UTCOFFSET`](#cmd-utcoffset).

The fourth field is what tells this response apart from the `+TIME:SYNCED` URC (three fields,
[§14](#sec-14)).

<a id="cmd-timesrc"></a>

### AT+TIMESRC — who sets the clock

```text
AT+TIMESRC=<NONE|BACNET|SNTP|BOTH>[,"<ntp server>[:<port>]"[,<interval s>]]

AT+TIMESRC=BACNET                              (factory default)
AT+TIMESRC=SNTP,"pool.ntp.org"
AT+TIMESRC=BOTH,"192.168.0.10",3600
AT+TIMESRC=SNTP,"192.168.0.10:1123"            a test server that cannot open 123
AT+TIMESRC=BACNET,""                           clear the server
AT+TIMESRC?   → +TIMESRC:BOTH,"192.168.0.10",3600
```

| Value | BACnet TimeSynchronization · UTCTimeSynchronization | SNTP |
|---|---|---|
| `NONE` | Ignored (counted) | Not used. **The moment it is saved, a clock already known is cleared too** |
| `BACNET` | Sets the clock | Not used |
| `SNTP` | Ignored (counted) | Every interval |
| `BOTH` | Only when SNTP has never succeeded, or **twice the interval** has passed since its last success | Every interval — SNTP first |

- TimeSynchronization carries **local** time, so it is converted to UTC with
  [`AT+UTCOFFSET`](#cmd-utcoffset). UTCTimeSynchronization is used as it is.
- The server is an IPv4 literal or a DNS name with an optional `:port` (123 if none), **up to 63
  bytes** in all (longer is `BUFFER_TOO_LONG`, a wrong format `INVALID_PARAMETER`). The interval is
  **64 … 65535 seconds** (default 3600; outside, `VALUE_OUT_OF_RANGE`).
- Omitting the server and the interval keeps the current values — changing only the time source takes
  one argument. `""` clears the server.
- `SNTP` · `BOTH` need a server (without one, `INVALID_PARAMETER`).
- The SC + `STRICT` + `BACNET`/`NONE` deadlock combination is `INVALID_PARAMETER`
  ([`AT+BSCVALIDITY`](#cmd-bscvalidity)).
- In a build without the SNTP client, `SNTP` · `BOTH` are `NOT_SUPPORTED` (both shipped builds have
  it).
- Applied at `AT+SAVE` — SNTP queries start or stop then.

SNTP opens one socket on the system workqueue, asks, and closes it (it does not block the BACnet
task). On failure it asks again at intervals that start at 64 seconds and double, up to the interval.
Only a response that returns the request's random transmit timestamp is accepted (forged or stale
responses and unsynchronized servers are counted as bad replies).
**With no Ethernet link, it does not ask.** The first query comes 2 seconds after the network comes
up, and in a static-address boot the PHY link comes up at 1.8 to 2.5 seconds, so that query can come
before the link. Then it waits for the link and asks — this is not counted as a failure, and there is
no `+TIME:SNTPFAIL` and no 64-second retry interval.

When the clock is set for the first time or the side that set it changes, `+TIME:SYNCED` goes out;
when SNTP turns to the failed state, `+TIME:SNTPFAIL` goes out ([§14](#sec-14)). The counters are in
[`+DIAG:TIME` · `+DIAG:SNTP`](#sec-15).

> **If the SC certificate period refuses a BACnet time, that time is forgotten.** In SC mode, a time
> received over BACnet came over the very connection now being judged, so a wrong time could block
> every reconnection — even the one that would bring the correct time. The connection ends, and the
> next dial proceeds with the clock "unknown". A time received by SNTP is kept. The number of times a
> time was forgotten is the forgotten field of `+DIAG:TIME`.

<a id="cmd-utcoffset"></a>

### AT+UTCOFFSET — the Device's UTC_Offset

```text
AT+UTCOFFSET=-540              minutes with the BACnet sign — Korea
AT+UTCOFFSET="UTC+09:00"       the same value as people write it
AT+UTCOFFSET="+05:30"
AT+UTCOFFSET="UTC"             0
AT+UTCOFFSET?   → +UTCOFFSET:-540,"UTC+09:00"
```

**There are two signs.** A number is the BACnet `UTC_Offset` as it is — the minutes added to local
time to get UTC, so **west is positive** (Korea −540, New York in winter 300). Text with a colon uses
the ISO 8601 sign (local = UTC + value). The query gives both forms, so the value can be read back
whichever form it was written in.

- The range is ±1440 minutes (one day); outside, `VALUE_OUT_OF_RANGE`. A wrong text format (hours 1–2
  digits, minutes exactly 2 digits and under 60) is `INVALID_PARAMETER`.
- It means something with every time source, and with `BACNET` **the operator must set it** — it is
  the value that converts the local time of TimeSynchronization to UTC. The firmware does not check
  this: it accepts `AT+TIMESRC=BACNET` with the factory default `0`, and then uses the local time of
  TimeSynchronization as UTC unchanged (in Korea that is 9 hours off).
- Applied at `AT+SAVE`. Daylight saving time is not changed automatically.

---

<a id="sec-11"></a>

## 11. Socket — TCP/UDP user channels

TCP/UDP channels the host uses separately from BACnet. Logical channels **0 … 3**. A channel number
is a handle for the host and has nothing to do with the W5500's hardware socket numbers — hardware
socket numbers are not exposed through any interface.

The maximum payload that can be sent at a time is **1460 bytes**.

The W5500 has 8 hardware sockets, shared with BACnet, the web, DHCP, DNS and SNTP. When a channel is
opened, one is kept back for system services, and one more if the stored mode is `SC`. How many can be
opened now is answered by [`AT+SOCKAVAIL?`](#cmd-sockavail).

<a id="cmd-sockavail"></a>
<a id="cmd-sockstatus"></a>

### AT+SOCKAVAIL? · AT+SOCKSTATUS?

```text
AT+SOCKAVAIL?
+SOCKAVAIL:2                number of logical channels that can be opened now

AT+SOCKSTATUS?
+SOCKSTATUS:0,TCP_CLIENT,ESTABLISHED,"192.168.0.20",5000,40001
+SOCKSTATUS:1,TCP_SERVER,LISTENING,"0.0.0.0",0,5001
+SOCKSTATUS:2,UDP,OPEN,"0.0.0.0",0,6000
```

`<ch>,<mode>,<state>,"<peer address>",<peer port>,<local port>` — only channels in use are listed.
States: `CLOSED` `OPENING` `LISTENING` `CONNECTING` `ESTABLISHED` `CLOSING` `OPEN` `ERROR`.

- **The local port is the value the host gave.** A `TCP_CLIENT` opened without a local port shows
  `0`, not the ephemeral port actually in use (the `40001` in the example above is a case where one
  was given).
- The peer address and port are the connection's peer; for UDP, the default recipient set with
  [`AT+SOCKPEER`](#cmd-sockpeer). `AT+SOCKPEER` given to a TCP channel changes only these fields
  (below).

> A UDP channel is **`OPEN`**, not `ESTABLISHED`, because there is no connection to make; it sends
> normally in this state.

**Data received over TCP is not discarded.** If the peer sends faster than the host reads `+SOCKRX`,
the module does not take the data out of the chip until there is room in the transmit queue — the
chip's receive buffer fills, the TCP window closes and the peer slows down. Two slots of the queue are
always kept for command responses and URCs. Room in the queue is reserved before reading, so even when
several channels receive at once or a URC comes in between, no byte taken out of the chip is lost. A
UDP datagram is discarded whole if there is no room — that is within a datagram's contract.

<a id="cmd-sockopen"></a>

### AT+SOCKOPEN

```text
AT+SOCKOPEN=0,TCP_CLIENT,"192.168.0.20",5000
AT+SOCKOPEN=0,TCP_CLIENT,"server.example.com",5000
AT+SOCKOPEN=0,TCP_CLIENT,"192.168.0.20",5000,40001    with local port
AT+SOCKOPEN=1,TCP_SERVER,5001
AT+SOCKOPEN=2,UDP,6000
```

- A channel number outside 0 … 3 is `ERROR:INVALID_CHANNEL`; a channel already open is
  `ERROR:ALREADY_OPEN`.
- With no free resources, `ERROR:NO_SOCKET`. **Existing channels are never forcibly closed to make
  room.**
- Ports are 1 … 65535; outside, `ERROR:VALUE_OUT_OF_RANGE` — port 0 for UDP or a TCP server is refused
  too. A TCP client's local port means "any" when omitted, and must keep to the same range when given.
- The `TCP_SERVER` · `UDP` forms take three arguments. A surplus after them
  (`AT+SOCKOPEN=2,UDP,6000,9`) is `ERROR:INVALID_PARAMETER` and the channel is not opened
  ([§3.2](#sec-3)).

**`TCP_CLIENT` is synchronous.** It resolves the name (DNS) and completes the connection inside the
command before it answers. Meanwhile the AT port gives no answer for **the name resolution time + up
to 5 seconds** (the connection timeout), so set the host's command timeout longer than that. On
success, `+SOCKCONNECTED:<ch>,"<ip>",<port>` comes before `OK`.

```text
AT+SOCKOPEN=0,TCP_CLIENT,"192.168.0.20",5000
+SOCKCONNECTED:0,"192.168.0.20",5000
OK
```

**Connection failures** are all answered with the single `ERROR:CONNECT_FAILED`, and the reason is
given by the `+SOCKERROR:<ch>,<reason>` URC that comes **before** it. The channel stays unopened.

| `+SOCKERROR` reason | Meaning |
|---|---|
| `CONNECTION_REFUSED` | The peer refused (RST) |
| `CONNECTION_TIMEOUT` | Not connected within 5 seconds — the peer does not answer, or **a peer given as an IP literal could not be reached** (no ARP answer · routing) |
| `UNREACHABLE` | **The host name did not resolve** (DNS). Look at the name and the DNS server, not at routing |

**If the local port is already in use, it is `ERROR:INVALID_PARAMETER`** (no `+SOCKERROR`). The W5500
uses one port space for TCP and UDP, and refuses a port already bound whatever the protocol — another
AT channel, the B/IP UDP port (default 47808), the web UI's TCP port (50003), the ephemeral ports the
module is using, all of them. This covers both the port of `TCP_SERVER` · `UDP` and a local port given
to `TCP_CLIENT`. It is the same answer as `AT+BIP` gives to a B/IP port equal to the web port — open
again with another port.

- A TCP server takes one client per channel. When the client leaves, `+SOCKDISCONNECTED` comes but the
  channel is not closed; it goes back to `LISTENING` ([§14](#sec-14)).

<a id="cmd-sockclose"></a>
<a id="cmd-sockpeer"></a>

### AT+SOCKCLOSE · AT+SOCKPEER

```text
AT+SOCKCLOSE=0
AT+SOCKPEER=2,"192.168.0.30",7000      default UDP recipient
AT+SOCKPEER=2,"sensor.example.com",7000
```

**`AT+SOCKCLOSE=<ch>`**

| Case | Response |
|---|---|
| An open channel | `OK` — it is closed. The host closed it, so **there is no URC** |
| A channel already dead (left `CLOSED` · `ERROR` after `+SOCKDISCONNECTED`) | `OK` — the place is freed |
| A channel that is not open | `ERROR:NOT_CONNECTED` |
| Outside 0 … 3, or not a number | `ERROR:INVALID_CHANNEL` |

A TCP channel sends a FIN and waits up to 0.5 seconds for the peer to close before answering.

**`AT+SOCKPEER=<ch>,"<host>",<port>`** — sets the channel's default recipient. **On a UDP channel it
must be set before [`AT+SOCKSEND`](#cmd-socksend) can be used.**

| Case | Response |
|---|---|
| Set | `OK` |
| The host name does not resolve — DNS is waited for inside the command | `ERROR:CONNECT_FAILED` (**no `+SOCKERROR`**) |
| A channel that is not open | `ERROR:NOT_CONNECTED` |
| Port outside 1 … 65535 | `ERROR:VALUE_OUT_OF_RANGE` |
| Empty host | `ERROR:INVALID_PARAMETER` |
| Outside 0 … 3, or not a number | `ERROR:INVALID_CHANNEL` |

The name is resolved **before** the module checks that the channel is open, so a name that does not
resolve, given for a closed channel, gets `CONNECT_FAILED` first. A TCP channel accepts it too,
without refusal, but all it does there is change the peer address and port in
[`AT+SOCKSTATUS?`](#cmd-sockstatus) — TCP data still goes to the connection's peer. Do not use it on
TCP channels.

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

AT+SOCKSENDTO=2,"192.168.0.30",7000,5
> HELLO
+SOCKSENDTO:2,5
OK
```

- The result line differs by command — `AT+SOCKSEND` gives `+SOCKSEND:<ch>,<sent>`, `AT+SOCKSENDTO`
  gives **`+SOCKSENDTO:<ch>,<sent>`**. A parser that keys only on `+SOCKSEND:` misses the second.
- The second number is **the number of bytes actually sent**. It can be smaller than requested, so the
  host handles the rest.
- A `len` of 0, or none, is `INVALID_PARAMETER`; over 1460 is `BUFFER_TOO_LONG` — they are different
  mistakes, so they get different answers.
- On a channel that cannot send, `ERROR:NOT_CONNECTED` comes before the prompt — a channel whose state
  is not `ESTABLISHED` · `OPEN`, and `AT+SOCKSEND` on a UDP channel with no recipient
  ([`AT+SOCKPEER`](#cmd-sockpeer)).
- `AT+SOCKSENDTO` also checks the destination **before** the prompt: not an open UDP channel is
  `NOT_CONNECTED`, a port outside 1 … 65535 is `VALUE_OUT_OF_RANGE`, and `0.0.0.0` is
  `INVALID_PARAMETER`.

**Failures that come after the payload is received** — things that cannot be known before the
prompt. Those bytes are discarded, not sent.

| Case | Response |
|---|---|
| The host name of `AT+SOCKSENDTO` does not resolve (it is resolved at send time) | `ERROR:CONNECT_FAILED` (**no `+SOCKERROR`**) |
| The destination cannot be reached — for UDP the destination (or the gateway) does not answer ARP, for TCP every retransmission failed. This applies to an address given as digits too | `ERROR:CONNECT_FAILED` (**no `+SOCKERROR`**) |
| The TCP peer closed or reset the connection | `ERROR:NOT_CONNECTED` — see the channel state in the URCs and [`AT+SOCKSTATUS?`](#cmd-sockstatus) |
| The network was being reconfigured in the meantime | `ERROR:NOT_CONNECTED` |

<a id="cmd-sockopt"></a>

### AT+SOCKOPT

```text
AT+SOCKOPT=<ch>,<option>,<value>
AT+SOCKOPT?
  +SOCKOPT:0,KEEPALIVE,1
  +SOCKOPT:0,KEEPIDLE,30
  +SOCKOPT:2,BROADCAST,1
```

| Option | Applies to | Value |
|---|---|---|
| `KEEPALIVE` | TCP | 0 / 1. Turning it off clears the idle time too |
| `KEEPIDLE` | TCP | Seconds, 0 … 65535 — outside, `VALUE_OUT_OF_RANGE`. A non-zero value turns keepalive on. **The chip rounds it up to 5-second steps with a maximum of 1275 s, so a larger value runs as 1275 s** (`AT+SOCKOPT?` still shows the value as given) |
| `NODELAY` | TCP | 0 / 1 |
| `BROADCAST` | UDP | 0 / 1 |

- Option names are case-insensitive. A TCP option on a UDP channel, or the reverse, is
  `ERROR:NOT_SUPPORTED`. An option not in the list (`RECONNECT` and the like) is not silently accepted
  either: `NOT_SUPPORTED`.
- A channel that is not open is `ERROR:NOT_CONNECTED`.
- **A `TCP_SERVER` channel can be set before a client arrives.** While there is no client, the chip is
  not touched; the setting is remembered on the channel and applied to **every client** the channel
  accepts. The setting stays when the client changes, and the query shows it.
- The query shows **the values set**. For a TCP channel `KEEPALIVE` is always shown, the others only
  when set — so that "none" and "off" can be told apart.

---

<a id="sec-12"></a>

## 12. Web — web administration

<a id="cmd-web"></a>
<a id="cmd-webuser"></a>
<a id="cmd-webpass"></a>
<a id="cmd-webtimeout"></a>

```text
AT+WEB=1                 enable the web UI
AT+WEB=0                 disable
AT+WEB=1,600             enable + session timeout of 600 s (1 … 65535)
AT+WEB?                  → +WEB:1,600,SET

AT+WEBUSER="admin"       1 … 23 bytes
AT+WEBUSER?              → +WEBUSER:"admin"

AT+WEBTIMEOUT=600        1 … 65535 s
AT+WEBTIMEOUT?           → +WEBTIMEOUT:600

AT+WEBPASS="new-password"   8 … 63 bytes
AT+SAVE
```

**In the factory state the web UI is off and has no password.** With no password, no login succeeds —
so that an HTTP server is never opened with a known default password. The order for turning it on the
first time:

```text
AT+WEBPASS="<8 characters or more>"
AT+WEB=1
AT+SAVE
```

- The second argument of `AT+WEB`, if given, must be 1 … 65535 — 0 · 70000 are `VALUE_OUT_OF_RANGE`,
  a non-number is `INVALID_PARAMETER`. For `AT+WEBTIMEOUT`, out of range is `INVALID_PARAMETER` too.
- **The web password is 8 bytes or more.** Shorter is `ERROR:INVALID_PARAMETER`; the web form gives
  `400 Password Too Short`. 64 bytes or more is `INVALID_PARAMETER` as well.
- The account name is up to 23 bytes; empty or longer is `INVALID_PARAMETER`.

**The moment of effect is split in two.** The web login reads the settings in RAM, so these four
commands affect login at once, without waiting for a save.

| When | What |
|---|---|
| **The moment it is set** | Login is checked against the new account name and password (sessions already logged in stay). With `AT+WEB=0` new logins are refused (the listener is still open). The timeout of `AT+WEBTIMEOUT` · `AT+WEB` is used from the session of the **next login** |
| `AT+SAVE` | Opens or closes the web server (it restarts only when the settings changed). Makes the settings survive a reboot |

A reset without saving brings back the old account and password. When changing the password while
remote users are on, `AT+SAVE` right after the change.

Third field of `AT+WEB?`:

| Value | Meaning |
|---|---|
| `MUSTCHANGE` | No password has been set yet (factory state) |
| `SET` | A password is set |

> **The web UI is at `http://<address>:50003/`, not on 80.** If you type only the address after
> turning it on with `AT+WEB=1`, the browser goes to 80 and gets no answer — which looks no different
> from the web UI being off. The port is fixed at build time and cannot be changed over AT. This is
> also why the same number cannot be used as the B/IP port or a socket channel's port
> ([`AT+BIP`](#cmd-bip), [`AT+SOCKOPEN`](#cmd-sockopen)).

> **The web server handles requests one at a time.** It takes the request being handled and one
> connection waiting behind it, and a third connection arriving in between is refused with a TCP RST.
> This is because only one socket listens on the web port, to save the 8 hardware sockets. Windows
> retries a refused connection a few times over a little more than 2 seconds, so it usually shows as a
> connection 0.5 – 2 seconds slower, and if it is refused in the end, `WSAECONNREFUSED` (10061). Linux
> and macOS clients get "connection refused" at once. The web page sends at most two requests at a
> time, so it does not hit this limit. **When calling the web API from a script, send requests one at
> a time**, and on a refused connection (`ECONNREFUSED`) or a reset (`ECONNRESET`) try again after a
> moment.

> **Password re-confirmation uses the same limit as login.** The web's account change (`/api/web`),
> factory reset and DCC/RD password (`/api/bacnet`) ask for the current web password again, even
> within a session. A wrong password is counted together with login failures (0.5 · 1 · 1.5 · 2-second
> delays), and the fifth brings a 60-second lockout — meanwhile both login and re-confirmation get
> `429`. The session that brought on the lockout ends.

> **The web's JSON accepts only three escapes inside strings: `\"` · `\\` · `\/`.** Any other escape
> (`\u003e`, `\n` and so on) makes the whole request refused with `400` — so that nothing is stored as a
> different string. Send text such as names, descriptions and passwords **as plain UTF-8**. The web
> page's `JSON.stringify()` escapes only control characters and unpaired surrogates (values these
> fields refuse anyway), so the page has no problem; match this when using the web API from another
> client.

> **There is no `AT+WEBPASS?`.** Only a salt and a hash are stored, and neither ever leaves the device,
> so there is nothing it could honestly answer. The plain text is wiped at once, down to the line
> buffer. [`AT+BACPASS`](#cmd-bacpass) is the same.

Tabs of the web UI: Dashboard · Network · Identity · BACnet · BACnet/IP · BACnet/SC · Objects · Object
mapping · Firmware · Diagnostics · Account · Maintenance. AT and the web use the same checks and give
the same words — a value one side accepts is not refused by the other.

---

<a id="sec-13"></a>

## 13. OTA — firmware update

There are two ways to put an image into the module — a web UI upload (Firmware tab,
`POST /api/ota/upload`) and [`AT+OTAFWUP`](#cmd-otafwup). **The receiving side does not install.**
The received image is placed, verified, in the staging area, and the actual installation is done by
the bootloader at the next boot. So whether the transfer fails, is cut off midway or is simply
abandoned, **the firmware running now stays as it is**.

> **The staging area is the same place as the stored object CSV.** Starting an OTA removes the stored
> CSV file (the applied object definitions stay in the settings). To use
> [`AT+BMAPRELOAD`](#cmd-bmapreload) again, upload the CSV again.

Who causes the reboot differs. **After a web upload the module reboots by itself** — it answers the
upload with `{"staged":true,"reboot_in_s":5}`, waits 5 seconds and reboots. If
[`AT+OTACANCEL`](#cmd-otacancel) withdraws the image in that time, it does not reboot. **On the AT path
the host decides**, with [`AT+OTAREBOOT`](#cmd-otareboot) (or any reboot) — so that the module does not
take away from the host MCU the choice of when to tidy up its own state.

<a id="cmd-otafwup"></a>

### AT+OTAFWUP — send firmware over UART

```text
AT+OTAFWUP=<seconds>
```

`<seconds>` is the **idle timeout**. If not a single byte comes in for this long, the transfer is
abandoned and the module returns to AT command mode. **1 … 600 seconds** (outside,
`VALUE_OUT_OF_RANGE`), with no default. Missing or not a number (`AT+OTAFWUP`, `AT+OTAFWUP=x`) is
`ERROR:INVALID_PARAMETER`, and this refusal comes **before** the staging area is erased.

There is a reason this argument has no default. The value says "how quiet the host may be and still be
normal", and that depends on where the package comes from. And this value is **the only way out when
the transfer is stuck.** The module does not choose for you the means of getting the command port
back.

#### Sequence — send it in one go

```text
AT+OTAFWUP=30
+OTAFWUP:READY                 ← staging erase done. Send the whole package now
<the entire .fwpkg file, as it is>
+OTAFWUP:IMAGE,1.0.0,408188    ← header accepted: version and image size
+OTAFWUP:DONE,408188,1.0.0
OK
```

**There is no place to pause midway.** After seeing `+OTAFWUP:READY`, push the `.fwpkg` through whole;
the header is just the front of that stream. `+OTAFWUP:IMAGE` is a line reporting progress, not a
prompt.

> **Wait for `READY`.** On receiving the command the module erases the whole staging area (about 2
> seconds). During the erase, interrupts are locked and reception itself stops, so anything sent in
> that time is lost from the UART FIFO. **The only moment the host is sure to be quiet** is this one,
> after sending the command and while waiting for the response, and that is why the erase is placed
> here.

#### With a terminal program

After seeing `READY`, send the file as binary. If it fails, check with `RXDROP` in
[`AT+DIAG?`](#cmd-diag) whether **the host ran ahead**.

#### Erasing comes first — and its cost

The staging area is erased **before** the header is checked. In a stream, erasing after reading the
header would mean erasing while the payload is already on the wire, and those bytes would be lost. So
**even a package that fails the check has already emptied the staging area.** Not a single byte is
written before the header passes, but what was there before (the stored CSV included) is gone.

No progress is reported during the transfer. Reporting progress would use the transmit queue, and when
the queue is full, **the very thread that is taking in the firmware** stops. The amount received is
told by the line that ends the transfer — `+OTAFWUP:DONE` on success,
`+OTAFWUP:ERROR,TIMEOUT,<received>,<total>` on an idle timeout. **After a timeout or a `MAGIC`
refusal, [`AT+OTASTATUS?`](#cmd-otastatus) is `IDLE` · received 0** — that transfer is cleaned up as
cancelled, so the amount received remains only in that `TIMEOUT` line.

#### When it looks stuck — **do not type anything**

**The module has not stopped. It is waiting for the rest of the package.** In stream mode **every byte
typed is firmware data**, and it also **restarts the idle timer from zero.** Every `AT` typed to see
whether the module is alive puts off its return by that much. Take your hands off and wait
`<seconds>`, and the module comes out by itself.

```text
+OTAFWUP:ERROR,TIMEOUT,183253,408188,OVERRUN
ERROR:PAYLOAD_TIMEOUT
```

Only 183,253 of the image's 408,188 bytes arrived. **Both numbers count only the image payload** —
the 96-byte header is not included, and this is not the size of the package file either. A timeout
before the header has fully arrived (including when nothing arrived at all) is `TIMEOUT,0,0`, however
much of the header came. The trailing `OVERRUN` means **the port lost those bytes** — the host sent
everything. A timeout **without** `OVERRUN` is short with no sign of loss, so the host really did stop
midway. If the port cannot keep up, use `RTSCTS` or lower the speed.

#### The most common refusal — `PRODUCT`

```text
+OTAFWUP:ERROR,PRODUCT,0x454F4501,0x454F4502
ERROR:INVALID_IMAGE
```

The first value is the **package's**, the second the **module's**. If they differ, the module writes
nothing and refuses. The example above is a **package of the SNMP product** (`0x454F4501`) for the same
hardware sent to the BACnet module (`0x454F4502`) — an intended refusal. A trailing `,OVERRIDDEN`
means the module's value comes from an [`AT+PRODUCTID`](#cmd-productid) override.

Check the module's value in the fourth field of [`AT+VERSION?`](#cmd-version) (and whether it is
overridden with [`AT+PRODUCTID?`](#cmd-productid)).

> **A string of `ERROR:INVALID_COMMAND` lines following a refusal is normal.** The rest of the bytes
> already sent are being read as command lines; sending one empty line (`CR`) clears it up.

#### Refusals and failures

| URC | Response | Meaning |
|---|---|---|
| `+OTAFWUP:ERROR,MAGIC` | `INVALID_IMAGE` | Not a firmware package. Refused right at the first 4 bytes |
| `+OTAFWUP:ERROR,HEADERCRC` | `INVALID_IMAGE` | The header is corrupt |
| `+OTAFWUP:ERROR,PRODUCT,<package>,<module>[,OVERRIDDEN]` | `INVALID_IMAGE` | Built for another product |
| `+OTAFWUP:ERROR,HWREV,<min>,<max>,<module>` | `INVALID_IMAGE` | The product matches, but the hardware revision is outside the range the package requires |
| `+OTAFWUP:ERROR,SIZE` | `INVALID_IMAGE` | Image size out of range |
| `+OTAFWUP:ERROR,HEADER` | `INVALID_IMAGE` | A header value, such as the link address, does not match this device |
| `+OTAFWUP:ERROR,UNSUPPORTED` | `INVALID_IMAGE` | The header format differs from this firmware's (a header version **higher or lower**, or a header size other than 96 bytes), or the package requires a higher bootloader version than this board's |
| `+OTAFWUP:ERROR,IMAGECRC` | `INVALID_IMAGE` | Payload CRC mismatch. Caught **after everything has been received** |
| `+OTAFWUP:ERROR,NOTAPP` | `INVALID_IMAGE` | Header, product and CRC are right, but it is **not an executable image** (the initial SP and reset vector do not point into RAM and into the image). Caught after everything has been received, and the staging area is emptied. The bootloader makes the same check before it erases anything |
| `+OTAFWUP:ERROR,BUSY` | `STORAGE_BUSY` | The storage is in use by something else — a web upload, or a re-apply of the stored CSV ([`AT+BMAPRELOAD`](#cmd-bmapreload) · web Re-apply) that is parsing |
| `+OTAFWUP:ERROR,STORAGE` | `STORAGE_FAILURE` | Flash write failure |
| `+OTAFWUP:ERROR,TIMEOUT,<received>,<total>` | `PAYLOAD_TIMEOUT` | Idle timeout. The host stopped midway. The two numbers are the amount received and the total of the **image payload** (header excluded); `0,0` before the header has fully arrived |
| `+OTAFWUP:ERROR,TIMEOUT,<received>,<total>,OVERRUN` | `PAYLOAD_TIMEOUT` | The same timeout, but **the port lost bytes** |
| `+OTAFWUP:ERROR,PORT,"<reason>"` | `NOT_SUPPORTED` | A port that cannot carry 8 bits (7 bits, XON/XOFF) |

**However it ends, the port returns to AT command mode.** No reboot or other command is needed.

#### Port requirements

On a 7-bit or XON/XOFF port the transfer **does not start** — either one corrupts the data silently
instead of failing it, and that would show only in the CRC after hundreds of KiB had been sent. Change
to 8 bits and one of `NONE`/`RTSCTS`/`DTRDSR` with [`AT+UART`](#cmd-uart) and try again. `RTSCTS` is
not required, but it is recommended as a margin when raising the speed (GP6 module CTS ← host RTS,
GP7 module RTS → host CTS).

> **With `DTRDSR`, start with DTR raised.** The module erases the staging area, enters receive mode and
> starts the idle timer, and **only then** puts `+OTAFWUP:READY` in the transmit queue. If DTR is low,
> `READY` just stays in the queue, and a host waiting for `READY` sends nothing, so the transfer is
> abandoned after `<seconds>`. If DTR is raised after that, the host receives `READY` followed at once
> by `+OTAFWUP:ERROR,TIMEOUT,0,0` and `ERROR:PAYLOAD_TIMEOUT` — the staging area has already been
> erased. The idle timeout ends this wait too.

<a id="cmd-otastatus"></a>

### AT+OTASTATUS?

```text
+OTASTATUS:DOWNLOADING,131072,408188,32
```

State · bytes received · total size · progress (%). States: `IDLE` `HEADER` `ERASING` `DOWNLOADING`
`VERIFYING` `READY` `FAILED`. If an image is waiting to be installed, it is `READY` even right after
boot.

- `FAILED` is left when the header was refused (`HEADERCRC` · `PRODUCT` · `HWREV` · `SIZE` · `HEADER`
  · `UNSUPPORTED`), on `IMAGECRC` · `NOTAPP` after everything was received, on a write failure, and
  when a web upload was refused. [`AT+OTACANCEL`](#cmd-otacancel) puts it back to `IDLE`.
- **The idle timeout and the `MAGIC` refusal of `AT+OTAFWUP` do not leave `FAILED`** — that transfer is
  cleaned up as a cancellation and becomes `IDLE` · received 0. The amount received then is only in the
  `+OTAFWUP:ERROR,TIMEOUT` line.

<a id="cmd-otacancel"></a>
<a id="cmd-otareboot"></a>

### AT+OTACANCEL · AT+OTAREBOOT

```text
AT+OTACANCEL         cancel an update in progress, or withdraw the prepared image
AT+OTAREBOOT         reboot into the prepared image
```

| State | `AT+OTACANCEL` | `AT+OTAREBOOT` |
|---|---|---|
| `IDLE`, no prepared image | `ERROR:OTA_NOT_STAGED` | `ERROR:OTA_NOT_STAGED` |
| Receiving (`HEADER` … `VERIFYING`) | `OK` — cancels | `ERROR:OTA_NOT_STAGED` |
| `READY` (an image waiting to be installed) | `OK` — withdraws the image | `OK`, then reboot |
| `FAILED` (no prepared image) | **`OK`** — puts the state back to `IDLE` | `ERROR:OTA_NOT_STAGED` |

`AT+OTAREBOOT` looks only at whether the staging metadata holds an image waiting to be installed.
`AT+OTACANCEL` is `OTA_NOT_STAGED` only when the OTA state is `IDLE`, and it clears a `FAILED` left by
a failed transfer with `OK`.

- `AT+OTAREBOOT` sends `OK`, then closes the connections in the same order as
  [`AT+REBOOT`](#cmd-reboot) and reboots. The bootloader installs the image only after verifying it
  again.
- `AT+OTACANCEL` **reaches an image that is already committed, too.** Called in the `READY` state, it
  invalidates the staging metadata so that the image is not installed at the next boot.

---

<a id="sec-14"></a>

## 14. URC (asynchronous events)

URCs come up at any time, without the host asking. They are serialized through the same UART TX path
as command responses, so even while a command is being handled they can come before or after its `OK`.

| URC | Category | Meaning |
|---|---|---|
| `+READY:"1.0.0"` | Device | Boot complete. **Send commands after this line.** When the AT parser starts it discards only the bytes already in the UART FIFO, and the parser starts running before this line (before the network, BACnet and the web are up) — a command sent in between is not discarded but **executed**, against services that are not up yet. Right after a reset, TX (GP4) is low until pinctrl takes hold, so at every reset a single 0x00 byte may be seen before the first line |
| `+LINK:UP` / `+LINK:DOWN` | Network | Ethernet carrier change. With a static address, I-Am is sent again when the link comes back. Under DHCP, when the link goes down the lease is released (and negotiated again at once when the link comes back), and the I-Am goes out once **after the lease has been received again**, not at link up — from the link supervision if the address is the same, from the restart that reopens B/IP if it changed. **While there is no link, nothing the device initiates goes out** — SC hub connection attempts, FD registration and SNTP queries wait for the link and go out at link up (not counted as failures, no retry interval used), and an I-Am requested in between is discarded (the link-up I-Am above takes its place). **The host's UDP sends ([`AT+SOCKSENDTO`](#cmd-socksendto) and the like) answer `OK` even while there is no link, but the datagrams cannot go out and are lost** — the chip reports the send as complete even without a link. Do not send between `+LINK:DOWN` and `+LINK:UP`, or use a protocol that confirms arrival with a response. In a static-address boot the link comes up at about 2 seconds |
| `+IPCHANGED:"<ip>","<mask>","<gw>"` | Network | A new address was applied — see below |
| `+BACWRITE:<tid>,<type>,<inst>,<prio>,<value>` | Object | **Confirmed form**: a remote write came to a CONFIRMED object — answer with [`AT+BWRACK`](#cmd-bwrack) |
| `+BACWRITE:<type>,<inst>,<prio>,<value>` | Object | **Notification form**: a remote write was committed and something changed |
| `+FACTORY:ERROR,<CREDENTIALS\|OTA_PENDING>` | Device | The factory reset was not done (no reboot either) — the credential slots could not be erased in two tries, or an OTA image is staged. It goes out whichever path is used, AT, web or `FAC_RSTn` ([`AT+FACTORY`](#cmd-factory)) |
| `+BACDCC:<ENABLE\|DISABLE_INITIATION>,<minutes>` | BACnet | A DeviceCommunicationControl was accepted, or its time ran out and it returned to `ENABLE,0`. 0 minutes means no time limit. A refused `DISABLE` (a deprecated value, `SERVICE_REQUEST_DENIED`) is not reported |
| `+BACREINIT:<COLDSTART\|WARMSTART>` | BACnet | A ReinitializeDevice was accepted. It goes out after the SimpleACK, **just before the restart** |
| `+BIPFD:REGISTERED,<ttl>` | B/IP | FD registration succeeded (only for a new registration — a successful renewal is not reported) |
| `+BIPFD:FAILED,<DNS\|TIMEOUT\|NO_SOCKET>` · `+BIPFD:FAILED,NAK,0x<code>` | B/IP | FD registration failed |
| `+BSC:CONNECTED,<PRIMARY\|FAILOVER>` | SC | `[SC]` Connected to the hub |
| `+BSC:DISCONNECTED,<reason>` | SC | `[SC]` No hub connection — the reasons are in the table under [`AT+BSCSTATUS?`](#cmd-bscstatus) |
| `+TIME:SYNCED,<BACNET\|SNTP>,"<UTC ISO 8601>"` | Time | The clock was set for the first time since boot, or the side that sets it changed |
| `+TIME:SNTPFAIL,<DNS\|TIMEOUT\|BADREPLY\|NO_SOCKET\|SEND>` | Time | SNTP entered the failed state, or the failure reason changed |
| `+SOCKCONNECTED:<ch>,"<ip>",<port>` | Socket | TCP client connected |
| `+SOCKACCEPTED:<ch>,"<ip>",<port>` | Socket | TCP server accepted a client |
| `+SOCKRX:<ch>,<len>` | Socket | Data received — followed by `<len>` raw bytes. **No line break follows the data** — the next line starts right after the last byte, so after this line read `<len>` bytes by count, not by line |
| `+SOCKRXFROM:<ch>,"<ip>",<port>,<len>` | Socket | UDP received — followed by `<len>` raw bytes. As with `+SOCKRX`, no line break follows the data |
| `+SOCKDISCONNECTED:<ch>,<reason>` | Socket | Connection ended — usually the channel ends too. **A `TCP_SERVER` channel also sends this line when the client it accepted leaves, and the channel stays open and goes back to `LISTENING`** — the channel number is not given up |
| `+SOCKERROR:<ch>,<reason>` | Socket | Socket error |
| `+FACTORY:COMPLETE` | Device | Factory reset complete — a reboot follows |

### +BACWRITE

- `<type>` is the short name (`AO` …); `<prio>` is the priority written, 1 … 16, for a commandable
  object, and 0 otherwise. `<value>` is in the same format as [`AT+BOBJ?`](#cmd-bobj), and a relinquish
  is `NULL`.
- **The confirmed form** comes from objects with the `F` flag. `<tid>` is 1 … 65535. Answer with
  `AT+BWRACK` within 750 ms.
- **The notification form** goes out only when any other write actually changed something (for a
  commandable object, the value of the slot written or the set of active slots; otherwise the
  Present_Value). A supervisory controller that writes the same value again produces no line.
- **`+BACWRITE` is never dropped.** Writes from the network are unauthenticated and can come faster than
  the UART drains, so these lines are sent leaving room for command responses. If there is no room, the
  confirmed form answers the client at once with a `NO_SPACE_TO_WRITE_PROPERTY` error (the host never
  saw the question), and the notification form is left on the object as "notification pending" and
  sent when room frees up — writes arriving in between merge into one, and the line that goes out late
  carries **the value now in effect and its command priority**. The counts are in
  [`+DIAG:BACNOTIFY`](#sec-15).
- A write to **an Out_Of_Service object** is committed only inside the device, and the host is neither
  asked nor told (the reason for putting an output OOS is to try commanding it without moving the
  equipment). When OOS clears, an output or Value object whose Present_Value changed in the meantime
  reports the current value and command priority (0 if it is the Relinquish_Default or the object is
  not commandable) in one notification-form line, so that the host follows again.

### Other BACnet URCs

- `+BACDCC` · `+BACREINIT` · `+BIPFD` · `+BSC` · `+TIME:*` **do not wait, and do not use the room kept
  for command responses.** If there is no room, the line is discarded (not sent again). The number
  discarded is counted by **the last field** of each line in [§15](#sec-15) — `+DIAG:BSCMSG` for
  `+BSC`, `+DIAG:BIPFD` for `+BIPFD`, `+DIAG:TIME` for `+TIME:*`, `+DIAG:BACDM` for `+BACDCC`. These
  lines are discarded before they are formatted, so they are not in the dropped count of
  [`+DIAG:ATTX`](#sec-15). If a count went up, the host reads the state again — `AT+BIPFD?`,
  `AT+BSCSTATUS?`, `AT+TIME?`, and for DCC the leading fields of `+DIAG:BACDM`.
  `+BACREINIT` is not counted, because a restart follows right after — the `+READY` and `+DIAG:RESET`
  of the next boot are its trace.
- The restart after `+BACREINIT` drains the AT transmit queue for up to 500 ms, then closes the
  connections and resets. The `Last_Restart_Reason` of the next boot is `COLDSTART` or `WARMSTART`, as
  requested.
- `+BIPFD` — a `FAILED` identical to the last one reported (same reason and code) is not sent again (so
  that a stopped BBMD does not produce a line on every retry). When the B/IP socket closes during
  registration or while registered (mode change · link · address change), `+BIPFD:FAILED,NO_SOCKET`;
  when it reopens and registers, `+BIPFD:REGISTERED`. Saving new settings forgets what was reported.
- `+BSC` — nothing is output before the first connection attempt has ended. After that, there is one
  line when the state changes, and one when, with no connection, the device's reason becomes different
  from the one last reported and **the reason of either URI** has changed. A hub that keeps refusing
  with the same reason, or a primary and failover failing in turn with two different reasons (each
  URI's reason stays the same and only the device's reason swings between the two), does not produce a
  line every round. The BACnet task samples the state every cycle and outputs from that, so a
  connection that dropped and reconnected within one cycle produces no line — the record of it is the
  attempts · connects of `AT+BSCSTATUS?`. Discarded lines are the last field of
  [`+DIAG:BSCMSG`](#sec-15).
- `+TIME:SNTPFAIL` reasons: `DNS` (the server name did not resolve), `TIMEOUT` (no answer, or no ARP
  answer), `BADREPLY` (a response that is not the answer to the request — forged, stale, an
  unsynchronized server, or a server that says it is synchronized but gives a time before 2026: an
  answer the clock cannot be set from), `NO_SOCKET` (no hardware socket), `SEND` (the request could not
  even be sent — a failure on this side, in bind or send). It goes out only when the state changes, not
  on every attempt.

### Socket URCs

`+SOCKDISCONNECTED` reasons: `REMOTE_CLOSE` `ERROR` `NETWORK_RECONFIGURED` `ADDRESS_CHANGED`
`MODULE_RESET`. A link down does not close sockets — when the cable is plugged back in, the TCP
connection carries on, and if data sent while the link was down goes past the retransmission limit, it
ends with `+SOCKERROR`.

When the module recovers a network chip that stopped answering by itself (one `+IPCHANGED` goes out),
an open channel either drops first, before the recovery, and ends with `+SOCKERROR` and `ERROR`, or is
closed by the recovery and ends with `MODULE_RESET`. Either way, reopen channels after `+IPCHANGED`.

`+SOCKERROR` reasons: `CONNECTION_TIMEOUT` `CONNECTION_RESET` `CONNECTION_REFUSED`
`CONNECTION_ABORTED` `CONNECTION_CLOSED` `INVALID_DESCRIPTOR` `UNREACHABLE` `NO_RESOURCE`
`UNKNOWN`.

> A channel that is already dead gets no second notification. Two disconnects for one connection would
> read like two events.

### +IPCHANGED

Sent every time an address reconfiguration succeeds (**after** the channel loss notifications —
"everything you had is gone", then "here I am now"). The values are the address the chip actually
uses.

| When | Notes |
|---|---|
| Boot | With a static address, before `+READY`. With DHCP, after the lease has been received, so after `+READY` · `+LINK:UP` |
| `AT+SAVE` | In STATIC, when any of address · mask · gateway · DNS differs from the chip's (**a DNS change alone too** — the same address is announced), and DHCP → STATIC. **STATIC → DHCP does not send it at the save** — it is sent when a lease brings a different address ([§5](#cmd-ip)) |
| DHCP lease | Only a lease with a changed address. None for a renewal of the same address |
| Chip recovery | Once, when the system supervisor has revived the W5500 — with the same address the chip was running on |

---

<a id="sec-15"></a>

## 15. `AT+DIAG?` line reference

In the order [`AT+DIAG?`](#cmd-diag) outputs them. Apart from the values marked "now" (open count · free
count · pending · in progress · state), every counter is **cumulative since boot**. In the web column,
`diag.x` is the object in `GET /api/diagnostics`, `status.x` is `GET /api/status`, `bip.x` is
`GET /api/bacnet/bip`, and `time.x` is `GET /api/time` — the same values, read by the same functions.
The one exception is `PORT` (table below).

### Platform

| Line | Fields | Web |
|---|---|---|
| `+DIAG:SOCKETS` | Descriptors open now · hardware sockets free now · socket() failures · accept() failures · socket exhaustion events | `diag.sockets` (open · free · sock_fail · accept_fail · exhausted) |
| `+DIAG:PORT` | The speed · bits · parity · flow control the AT port **is actually running at now** · `DTR`/`NODTR` · `READY`/`HELD` | The first four **have no counterpart** — `status.uart_baud` · `uart_bits` · `uart_parity` · `uart_flow` are the **configured values**, not the running ones, and when the two differ `status.uart_pending` is simply `true`. The last two are `status.dtr` · `status.uart_tx_held` |
| `+DIAG:RXDROP` | Bytes dropped from the AT receive ring · whether there was a FIFO overrun (0/1) | — |
| `+DIAG:STORAGE` | Staging content (0 empty · 1 object CSV · 2 OTA image) · state (0 empty · 1 writing · 2 valid · 3 installing · 4 installed · 5 error) | `status.storage_content` · `status.storage_state` |
| `+DIAG:ATTX` | Items put in the AT transmit queue · bytes sent out · **number dropped** because the queue was full | `diag.at_tx` |
| `+DIAG:WATCHDOG` | Armed (0/1) · timeout ms — 8000 while armed, **0 before arming, or after it is stood down just before a planned reboot** | — |
| `+DIAG:CHIP` | `OK`/`UNRESPONSIVE` · number of chip checks · number of recoveries started in this boot (a recovery already in progress is not counted again) | — |

- `PORT` can differ from the stored values, and that difference is told by `PENDING` in
  [`AT+UART?`](#cmd-uart). `NODTR,HELD` means **the host has lowered DTR and transmission is held** —
  it is not a fault. But this line itself comes out through that blocked port, so it cannot be read
  while the port really is blocked. Then look at the web's `/api/status`.
- If either `RXDROP` value is non-zero, the host was faster than the module and part of what it sent is
  simply gone — this is **the value that tells you which side to look at** when chasing a failed
  transfer or odd responses. Why the second one is 0/1 and not a count: the driver does not clear the
  PL011's overrun bit, so it stays set for the whole boot and only "it happened" can be counted.
- The dropped count of `ATTX` is a value the host cannot find out by itself. A URC or datagram that
  could not get into the queue is discarded whole, without a trace. Data received over TCP is not
  counted here — it stays in the chip until there is room ([§11](#sec-11)).
- If the recoveries of `CHIP` is non-zero, **a recovery has already run at least once.** A device after
  a recovery looks fine, so nothing but this value tells you it happened. The supervisor recovers the
  chip if it does not answer for about 3 seconds, and tries up to three times in a row. If it still does
  not come back, the supervisor leaves it `UNRESPONSIVE` and keeps the device running (so that the host
  can be told — then use [`AT+REBOOT`](#cmd-reboot) or the power). If the chip answers **for an hour
  without a single failure**, the limit of three is refilled — so that unrelated transient faults months
  apart do not use up the limit. Unlike the limit, recoveries is a total since boot that never goes
  back down.
- **Diagnostic values found only on the web.** `GET /api/diagnostics` also gives values that are not
  in this chapter's lines — `reserve` in `diag.sockets` (sockets refused to protect the system's share)
  · `resets` (times a network reconfiguration invalidated all descriptors at once), `diag.storage` (busy · conflict · commits ·
  aborts · cfg_saves · cfg_crc_fail · journal_records · journal_reclaims), `diag.web` (requests ·
  logins_ok · logins_failed · lockouts · csrf), and the started · absorbed · accepted · refused · busy ·
  replies_dropped of `diag.host_write` (the ones not in `BACPEND` · `BACNOTIFY` below).

### BACnet common

| Line | Fields | Web |
|---|---|---|
| `+DIAG:BACNET` | NPDUs received · NPDUs sent · ReadProperty · ReadPropertyMultiple · WriteProperty · Rejects sent · Aborts sent · Errors sent | `diag.bacnet` (rx_npdu · tx_npdu · rp · rpm · wp · reject · abort · error) — the web gives more detailed counters |
| `+DIAG:BACPEND` | Confirmed writes waiting for the host's answer · writes past their deadline · COV subscriptions now · COV notifications sent (unconfirmed + confirmed) | `diag.host_write.pending` · `.timeouts` · `diag.cov.subscriptions` · `sent_unconfirmed + sent_confirmed` |
| `+DIAG:BACNOTIFY` | Notification-form `+BACWRITE` lines put in the queue · notifications deferred because the AT queue was full (retries not counted again) · writes merged into a pending notification | `diag.host_write.notified` · `.deferred` · `.coalesced` |
| `+DIAG:BACSTORE` | Journal records of PERSISTENT values · changes merged into a later record by the rate limit | `diag.bac_store` |
| `+DIAG:BACCOV` | SubscribeCOV accepted · refused · subscriptions whose lifetime ended · unconfirmed notifications sent · confirmed notifications · failed confirmed notifications | `diag.cov` |
| `+DIAG:BACTSM` | Confirmed requests the device sent (confirmed COV notifications): in progress · started · retransmitted · ACK · Error/Reject/Abort · timed out · refused for lack of a slot | `diag.tsm` |
| `+DIAG:BACDM` | DCC state (`ENABLE` · `DISABLE_INITIATION`; `DISABLE` does not appear, because that request is refused) · seconds left (0 = no limit) · DCCs accepted · RDs accepted · wrong/missing passwords · receptions discarded by DCC (0, since this happens only under `DISABLE`) · transmissions blocked by DCC · `+BACDCC` refused by the AT queue | `diag.dm` (… · `urcs_dropped`) |

- If deferred in `BACNOTIFY` goes up, clients are writing faster than this UART can carry — the host
  receives the result late, and once.
- If coalesced in `BACSTORE` rises fast, some client is writing a persistent value more often than
  needed.
- The failed confirmed notifications of `BACCOV` count only those that ended in a timeout or an error
  response. Those whose time ran out because DCC or a datalink that was down (the SC hub between
  connections) held back the retransmissions are not counted, and are sent again.
- If busy in `BACTSM` goes up, there are more confirmed COV subscribers than concurrent request slots
  (4).

### B/IP

| Line | Fields | Web |
|---|---|---|
| `+DIAG:BIP` | Datagrams received · datagrams sent · BVLC NAKs sent · FD state (the words of `AT+BIPFD?`; `OFF` with no registration or with the socket closed) · socket (`OPEN` · `CLOSED` — the mode is not `BIP`, or a network reconfiguration stopped it · `RETRY` — opening failed and the module is reopening it by itself, [`AT+BIP`](#cmd-bip)) · errno of the last failed open (0 on success) | `diag.bip` (rx · tx · naks · running · retrying · start_error · start_failures) · `bip.fd.state` |
| `+DIAG:BIPFD` | FD state · last failure reason (`NONE` · `DNS` · `TIMEOUT` · `NAK` · `NO_SOCKET`) · successful registrations and renewals · BBMD NAKs · registrations with no answer · BBMD names that did not resolve · broadcasts also passed to the BBMD · `+BIPFD` refused by the AT queue | `bip.fd` (state · fail · registrations · naks · timeouts · dns_failures · distributed · urcs_dropped) |

`BIP` comes right after the BACnet line, and `BIPFD` after `BACDM`. Both exist only in builds with the
B/IP datalink.

### BACnet/SC `[SC]`

| Line | Fields | Web |
|---|---|---|
| `+DIAG:BSC` | Hub state (`NO_CONNECTION` · `PRIMARY` · `FAILOVER`) · sessions that reached `CONNECTED` · failed TLS handshakes · failed WebSocket upgrades · Heartbeat-Requests sent · sessions made under `LENIENT` with the clock unknown · ms of the last successful handshake · **mbedTLS heap peak since boot** · heap size (61440) | `diag.bsc` (hub_state · connects · tls_failures · ws_failures · heartbeats_sent · validity_unchecked · last_ok_handshake_ms · heap_peak · heap_size) |
| `+DIAG:BSCTLS` | TLS sessions opened · successful handshakes · failed handshakes · ms of the last handshake attempt (success or failure) · of that, ms spent inside handshake steps · longest successful handshake ms · longest single step ms · the hub's last fatal alert (-1 = none) · **session peak heap** · heap in session · idle heap · **current heap (`heap_cur`)** · **hub resets met while closing (`resets_at_close`)** | `diag.bsc_tls` (opens · handshakes_ok · handshake_failures · last_handshake_ms · last_step_ms · max_handshake_ms · max_step_ms · last_alert · heap_session_peak · heap_in_session · heap_idle · heap_cur · resets_at_close) |
| `+DIAG:BSCMSG` | BVLC-SC messages decoded · messages refused as malformed · NPDUs passed to the BACnet task · NPDUs discarded for lack of room · NPDUs sent · NAKs sent · NAKs received · duplicate-VMAC NAKs · heartbeats with no answer · `+BSC` lines the port refused | `diag.bsc` (rx_messages · rx_malformed · rx_npdu · rx_npdu_dropped · tx_npdu · naks_sent · naks_received · dup_vmac · heartbeat_timeouts · urcs_dropped) |
| `+DIAG:BSCQ` | NPDUs queued to the hub · refused because the queue was full · flushed because the connection ended · received NPDUs delivered to the application · SC thread stall-watch triggers | `diag.bsc` (tx_queued · tx_queue_full · tx_flushed · rx_delivered · stalls) |

- **Heap figures** (bytes, allocator block headers included) are counted by the allocator itself on
  every allocation and free, so they are not samples. The standard SC build outputs all of them. In a
  build that does not measure the heap they are `-` (web `null`) — because 0 would read as "not used".
- **Session peak** is the peak from the last TLS session open (handshake included) to the end of that
  session, and it is kept after the session ends. **Idle heap** **must come back to the same value**
  every time a session ends — it is the baseline for a leak check. **`heap_cur`** is the usage at the
  moment the crypto lock was last released (every allocation and free happens under that lock, so it
  is exact when the lock is free, and the reader does not wait for the lock). For long-term operation,
  watch this and the peaks as the heap signal.
- **`resets_at_close`** — the number of times the hub reset the connection while this side was
  deliberately ending a session (Disconnect-Request · WebSocket Close · close_notify). It is taken as a
  normal end and only an info line is left on the console. A reset while writing is still a warning and
  an `IO` failure.
- In `BSC`, the first six fields are the format as first defined; the rest were added later.
- The handshake time and the longest step time are the measurements behind the time a credential
  upload may wait for the crypto lock (15 seconds).

### Clock · reset

| Line | Fields | Web |
|---|---|---|
| `+DIAG:TIME` | `SYNCED`/`UNKNOWN` · the side that last set it (`BACNET` · `SNTP` · `-`) · BACnet time syncs accepted · BACnet time syncs ignored (time source policy or the 2026 floor) · successful SNTP · failed SNTP · settings that moved an already-known clock by more than 2 seconds · BACnet times forgotten because the SC certificate period refused them · `+TIME:*` refused by the AT queue | `time.known` · `src` · `bacnet_taken` · `bacnet_ignored` · `sntp_taken` · `sntp_failed` · `steps` · `forgotten` · `urcs_dropped` |
| `+DIAG:SNTP` | Result of the last exchange (`OK` · `DNS` · `TIMEOUT` · `BADREPLY` · `NO_SOCKET` · `SEND`, `-` before the first exchange) · queries · responses · failures · of those failures, responses refused as not answering the request | `time.sntp` (last · queries · ok · failures · bad_replies) |
| `+DIAG:RESET` | Reason of the last start (`POWERON` · `PIN` · `WATCHDOG` · `SOFTWARE` · `DEBUG` · `UNKNOWN`) · number of starts counted by the journal | `diag.reset` (reason · count) |

- If steps in `TIME` goes up, the two time sources are telling different times.
- `SNTP` exists only in builds with the SNTP client (all shipped builds have it).
- `RESET` is always the last line. The Device's `Last_Restart_Reason` comes from this value.

  | Reason | When | `Last_Restart_Reason` |
  |---|---|---|
  | `POWERON` | Power-on · brown-out | `DETECTED_POWER_LOST` |
  | `PIN` | RUN pin reset | `COLDSTART` |
  | `SOFTWARE` | A restart the firmware asked for (`AT+REBOOT`, web, OTA, factory reset, ReinitializeDevice) | `COLDSTART`; `WARMSTART` for a ReinitializeDevice WARMSTART |
  | `WATCHDOG` | Watchdog reset — the supervisor stopped feeding it (BACnet task stalled, a W5500 recovery not finished within 1 minute, a W5500 without its configuration for over 1 minute), or nobody could feed it (CPU halted by a fatal error) | `HARDWARE_WATCHDOG` |
  | `DEBUG` | Reset from the debug port | `UNKNOWN` |
  | `UNKNOWN` | The chip left no trace | `UNKNOWN` |

  The start after a firmware install reports **the reason of the reset that led to the install** (for
  example `WATCHDOG` for an image installed after a watchdog reset, `SOFTWARE` for a planned OTA). A
  reset made by a debugger after a watchdog reset is reported as `WATCHDOG`.

---

<a id="sec-16"></a>

## 16. Error codes

```text
ERROR:<code>
```

| Code | Meaning |
|---|---|
| `INVALID_COMMAND` | Unknown name / does not start with `AT` / that form (set · query · execute) is not supported / a command this build does not have (`[SC]`) |
| `INVALID_PARAMETER` | Argument format or count, an unknown word, a refusal by a check (a deadlock combination, a B/IP port equal to the web port, a local port already in use (`AT+SOCKOPEN`), and so on) |
| `BUFFER_TOO_LONG` | A line over 255 B, a payload over 1460 B (a credential chunk over 1024 B), a string too long to hold, and the four credential items not fitting in one slot together (the last `AT+BSCCERTW` chunk — not the length of any one line) |
| `OBJECT_NOT_FOUND` | No such object; no pending write with that tid |
| `TYPE_MISMATCH` | Unknown object type, or a type this device does not have |
| `ACCESS_DENIED` | A value the host cannot change — the Present_Value of a commandable object, an object that is Out_Of_Service |
| `VALUE_OUT_OF_RANGE` | A number, but out of range (port, instance, TTL, timer, interval, offset, object minimum/maximum …) |
| `HOST_TIMEOUT` | `AT+BWRACK` came after the deadline (750 ms) — the client has already received an error |
| `NO_SOCKET` | Not enough socket resources |
| `INVALID_CHANNEL` | Channel number outside 0 … 3 |
| `ALREADY_OPEN` | The channel is already open |
| `NOT_CONNECTED` | A channel in a state that cannot send — including a UDP channel with no recipient (`AT+SOCKPEER`) and a TCP channel the peer closed or reset |
| `CONNECT_FAILED` | Connection failure — for `AT+SOCKOPEN` the reason is in the `+SOCKERROR` before it. When **the host name does not resolve** in `AT+SOCKPEER` · `AT+SOCKSENDTO`, no `+SOCKERROR` comes. The same goes for `AT+SOCKSEND` · `AT+SOCKSENDTO` that cannot reach the destination (no ARP answer, TCP retransmissions failed) |
| `PAYLOAD_TIMEOUT` | The binary payload did not fully arrive within 10 seconds / OTA idle timeout |
| `STORAGE_BUSY` | The storage or the crypto engine is in use by another operation — a passing state, try again |
| `OTA_PENDING` | Refused because an OTA image is staged (`AT+FACTORY`) |
| `INVALID_CSV` | The stored CSV has errors |
| `INVALID_IMAGE` | The firmware package did not pass the checks (the reason is in `+OTAFWUP:ERROR`, [§13](#cmd-otafwup)) |
| `MAPPING_TOO_LARGE` | The object mapping does not fit in the storage space |
| `CSV_NOT_AVAILABLE` | There is no CSV in storage |
| `OTA_NOT_STAGED` | There is no prepared OTA image |
| `STORAGE_FAILURE` | Flash write failure, or the stored object table cannot be read, so this edit or name check cannot be made. **The commands that give this code are fixed** — `AT+BACMODE` · `AT+BACDEV` · `AT+BACVENDOR` · `AT+BACDEVINFO` · `AT+BACAPDU` · `AT+BOBJADD` · `AT+BOBJDEL`, credentials (`DEL` of `AT+BSCCERT` · the last `AT+BSCCERTW`), OTA writes, write failures of `AT+SAVE` · `AT+BMAPRELOAD` · `AT+BMAPCLEAR`, and an `AT+FACTORY` that could not erase the credential slots (after `+FACTORY:ERROR,CREDENTIALS`) |
| `DUPLICATE_NAME` | That Object_Name is already in use (host object · Device · Network Port) |
| `OBJECT_LIMIT` | The object table is full |
| `NOT_SUPPORTED` | Something this build, or this port or channel, cannot do — `SC` in the B/IP-only build, `SNTP` in a build without SNTP, binary transfers on a 7-bit or XON/XOFF port, a socket option that does not fit the channel |
| `INTERNAL` | Internal error. Not only a firmware fault — every lower-level error without a name of its own ends up here (a factory reset in progress, for example) |
| `INSTANCE_IN_USE` | An object of the same type and instance already exists |
| `COMMAND_SLOTS` | The priority arrays for commandable objects are all used (a limit separate from the object count) |
| `CRED_INVALID` | The uploaded key or certificate does not parse or fails verification (not EC P-256, an encrypted key, and so on) |
| `CRED_MISMATCH` | The certificate's key does not pair with the stored private key |
| `URI` | An unusable hub URI, a failover equal to the primary, or mode SC with no primary (this last one is also given by `AT+BACNETNUM=SC`) |

The code strings and their order do not change (codes are only ever added at the end). Hosts tell them
apart by the string.

---

<a id="sec-17"></a>

## 17. Common pitfalls

1. **Forgetting `AT+SAVE`.** BACnet settings have no effect on the network before they are saved, and
   without a save they are gone at the next boot. The same goes for object definitions made with
   `AT+BOBJADD`.
2. **Looking for the device without setting a mode.** In the factory state `AT+BACMODE` is `OFF`, so
   nobody answers Who-Is. `AT+BACMODE=BIP` and `AT+SAVE` come first.
3. **`AT+IP?` differs from the value just set.** That is normal — the query gives the chip's current
   value (§5).
4. **Putting your own company's name on WIZnet's Vendor ID (1697).** The three are one statement. When
   shipping the module as your own product, put in your own ASHRAE Vendor ID, company name and model
   name together with [`AT+BACVENDOR`](#cmd-bacvendor); otherwise leave the defaults as they are.
5. **Putting a value into a commandable object with `AT+BOBJVAL`.** It is `ACCESS_DENIED` — the
   Present_Value is decided by the network's priority array. The host can only report the status
   (`,OK`/`,FAULT`).
6. **Answering the `+BACWRITE` of a CONFIRMED object late.** The deadline is 750 ms. Past it, the client
   has already received an error and `AT+BWRACK` is `HOST_TIMEOUT`. If the host cannot decide that fast,
   use the notification form instead of `F` and let the host follow the result.
7. **Running `AT+BMAPRELOAD` · `AT+BMAPCLEAR` · a web CSV import in the middle of editing.** When they
   change the mapping, they save the whole configuration, so other unsaved settings go into flash too. An
   `AT+BMAPRELOAD` of the same CSV as the stored mapping saves nothing, but instead **discards unsaved
   `AT+BOBJADD` · `AT+BOBJDEL` edits** (§9). Either way, `AT+SAVE` first.
8. **`AT+BMAPRELOAD` gives `CSV_NOT_AVAILABLE` after an OTA.** That is normal — the firmware image took
   the place of the stored CSV. The object definitions remain; to load the CSV again, upload it again.
   Keep the original CSV on the host side.
9. **Setting SC to `STRICT` and leaving the time source at `BACNET`.** It is a deadlock combination and
   is refused. To use `STRICT`, first put in `AT+TIMESRC=SNTP,"<server>"` (or `BOTH`).
10. **Setting the B/IP port to 50003.** It shares one port space with the web UI's TCP port and is
    refused.
11. **Reversing the sign of the UTC offset.** A number uses the BACnet sign (west positive, Korea
    `-540`); quoted text uses the ISO sign (`"UTC+09:00"`). The query shows both.
12. **Giving up while waiting for the answer to the last `AT+BSCCERTW` chunk.** Verification and writing
    can take up to a little over 15 seconds. If the answer was lost, send the same chunk again unchanged
    — the first answer is given again.
13. **Getting CRLF and data mixed up in binary mode.** Every byte inside the payload is data. Send exactly
    the declared length. The result line comes on the same line as `> `.
14. **Judging a UDP channel to have failed because it is not `ESTABLISHED`.** `OPEN` is normal for UDP
    (§11).
15. **Adding surplus arguments.** Beyond the maximum number the command can take, it does nothing and
    refuses. Queries are the same — `AT+BOBJ?x` is `ERROR:INVALID_PARAMETER`. `AT+SOCKOPEN`, whose
    count differs by form, is counted against the count of that form (§3.2).
16. **Reading a query response as a URC.** `+BIPFD:STATE,…` · `+BIPFD:CONFIG,…` are query responses,
    `+BIPFD:REGISTERED,…` · `+BIPFD:FAILED,…` are URCs. `+TIME:` has four fields as a query response and
    three as a URC.
17. **Sending credentials or firmware on a 7-bit or XON/XOFF port.** The transfer does not even start:
    `NOT_SUPPORTED`. Change to 8 bits · `NONE`/`RTSCTS`, or use the web UI.
18. **`AT+SOCKSEND` on a UDP channel without `AT+SOCKPEER`.** It is `ERROR:NOT_CONNECTED`, with no
    prompt — meaning there is no recipient. Use `AT+SOCKPEER` first, or `AT+SOCKSENDTO` (§11).
19. **Writing the queried instance back into `AT+BACDEV` to change only the name.** The derived
    instance turns into a fixed number. Use `AT+BACDEV=DEFAULT,"<name>"` (§6).
20. **Trying to change the lease's DNS with `AT+DNS` on a DHCP network.** If the lease gives a DNS, that
    one is used. `AT+DNS` is the fallback server for when the lease gives no DNS (§5).

---

<a id="sec-18"></a>

## 18. Related documents

| Document | Contents |
|---|---|
| [BACnet Setup Guide](./bacnet-setup-guide-en.md) | From a module in factory state to one that talks to a BACnet workstation — the order in which to use the commands of this guide |
