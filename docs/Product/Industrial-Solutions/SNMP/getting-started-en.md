---
id: getting-started-en
title: EOE-ioNIC SNMP Module Getting Started Guide
sidebar_label: Getting Started
date: 2026-10-12
keywords:
  - SNMP
  - SNMPv3
  - Getting Started
  - EOE-ioNIC
  - W55RP20
description: Step-by-step guide from wiring an EOE-ioNIC SNMP module to reading a value over SNMP
---
# EOE-ioNIC SNMP Module Getting Started Guide

<p style={{textAlign: 'right'}}>Firmware 1.2.0</p>

This guide takes a new module to the point where it talks to an SNMP manager, in four
steps.

| Step | Contents |
|---|---|
| [Step 1](#step1) | Wiring |
| [Step 2](#step2) | Check that the module answers |
| [Step 3](#step3) | Set the IP address |
| [Step 4](#step4) | Read a value over SNMP |

The firmware is already written to the module. The MAC address and serial number are
written during production, so there is nothing to enter.

---

## What you need

- An EOE-ioNIC SNMP module: one of
  [WIZ-IP20](https://docs.wiznet.io/Product/Modules/Serial-to-Ethernet-Module/WIZ-IP20),
  [W232N](https://docs.wiznet.io/Product/Modules/Serial-to-Ethernet-Module/W232N) or
  [EOE-W55RP20](https://docs.wiznet.io/Product/Modules/EOE/EOE-W55RP20)
- A USB-to-serial adapter, to connect the module's AT port to a PC
- An Ethernet cable and a PC on the same network as the module
- A terminal program such as Tera Term or PuTTY
- An SNMP manager, used in step 4. The examples use `net-snmp` 5.8 or later; how to
  install it is in [chapter 0 of the SNMP Setup Guide](./snmp-setup-guide-en.md#sec-install)

---

<a id="step1"></a>

## Step 1: Wiring

AT commands are exchanged on UART1.

| Connection | Module pin | Other side |
|---|---|---|
| AT port TX | GP4 | RX of the USB-serial adapter |
| AT port RX | GP5 | TX of the USB-serial adapter |
| GND | GND | GND of the USB-serial adapter |
| Ethernet | RJ-45 | Switch or PC |

> **Cross TX and RX.** The module's TX goes to the other side's RX. If the two wires are
> swapped nothing answers, which is the most common mistake on a first connection.

The flow control pins (GP6 CTS, GP7 RTS) do not need to be connected. The factory
default uses no flow control, and it can be turned on later with `AT+UART`.

The module boots as soon as power is applied.

---

<a id="step2"></a>

## Step 2: Check that the module answers

Open the terminal with these settings.

| Item | Value |
|---|---|
| Speed | 115200 |
| Data bits · parity · stop bits | 8 · none · 1 |
| Flow control | None |

When booting finishes, the module sends this line:

```text
+READY:"1.2.0"
```

If you missed it, that is fine. Type `AT` and press Enter.

```text
AT
OK
```

`OK` means the connection works. If nothing comes back, see
[Troubleshooting](#trouble).

Next, check what the device is:

```text
AT+VERSION?
+VERSION:"1.2.0","EOE-ioNIC_SNMP","EOE-ioNIC_SNMP-0008DC360034",0x454F4501
```

The fields are firmware version, model, serial number and product ID.

### Checking status with the pins

To check the state from the board alone, without a PC, look at these output pins.

| Pin | When high |
|---|---|
| GP10 | The Ethernet link is up |
| GP11 | At least one TCP connection exists |
| GP9 (DSR) | The module is ready for AT commands |

---

<a id="step3"></a>

## Step 3: Set the IP address

From the factory the module uses the static IP `192.168.11.2`.

> If the PC is on a different subnet it cannot reach the module. Change the module's
> address as shown below, or put the PC in the `192.168.11.x` range.

To use DHCP:

```text
AT+NETMODE=DHCP
AT+SAVE
```

To use a static address:

```text
AT+NETMODE=STATIC
AT+IP="192.168.0.100"
AT+MASK="255.255.255.0"
AT+GW="192.168.0.1"
AT+SAVE
```

> **Do not forget `AT+SAVE`.** Set commands only record the value in memory; `AT+SAVE`
> stores and applies it. This is the most common mistake.

Check the address in use:

```text
AT+IP?
+IP:"192.168.0.100"
```

Step 3 is done when the module answers `ping` from the PC.

```bash
ping 192.168.0.100
```

---

<a id="step4"></a>

## Step 4: Read a value over SNMP

From the factory there are no SNMPv3 users. Reading before a user exists gives an
`Unknown user name` error in the manager. That is the module answering "no such user",
so it also shows that communication itself works.

Create a user:

```text
AT+USMADD="admin1",AUTHPRIV,SHA256,"authpass123",AES128,"privpass123"
AT+SAVE
```

Creating a user takes a few seconds. Wait for `OK`.

> **Passwords are not stored on the module.** A forgotten password cannot be recovered
> and the user has to be created again, so keep a record of it.

Read from the PC:

```bash
snmpget -v3 -l authPriv -u admin1 \
        -a SHA-256 -A authpass123 -x AES -X privpass123 \
        192.168.0.100 1.3.6.1.2.1.1.1.0
```

```text
SNMPv2-MIB::sysDescr.0 = STRING: EOE-ioNIC_SNMP SNMPv3 module, firmware 1.2.0
```

If this appears, communication is confirmed. The 11 standard objects can be read like
this without creating any object.

### Publishing a value

The shortest way to publish a value from your device over SNMP:

```text
AT+OBJADD=1,"temperature",Integer32,RO,VOLATILE
AT+OBJVAL=1,253
AT+SAVE
```

A manager reading `1.3.6.1.4.1.52942.1.0` now gets `253`. Each time the value changes,
send `AT+OBJVAL=1,<new value>`. `AT+OBJVAL` needs no `AT+SAVE`.

---

<a id="trouble"></a>

## Troubleshooting

### Nothing answers `AT`

| Check | Details |
|---|---|
| TX/RX direction | The module's TX (GP4) must go to the other side's RX |
| Speed | The factory default is 115200. A board used elsewhere may have been changed |
| Port | AT commands are accepted only on UART1 (GP4/GP5). GP0/GP1 carry the debug log only |
| Flow control | If only the PC side has it on, the link looks frozen. Turn it off on both sides |
| GND | Without a GND connection, communication is unreliable |

If nothing works, hold GP18 low for 5 seconds or more to perform a factory reset. The
AT port returns to 115200 8N1 with no flow control.

> **A factory reset clears all settings.** Network settings, SNMPv3 users, communities,
> objects and stored values are all reset. The MAC address, serial number, model name
> and product ID are kept.

### The manager shows `Unknown user name`

The module has no user by that name. Check with `AT+USMUSER?` that the user exists and
that the name matches. The module is answering, so the address and wiring are fine.

### The manager gets no response

1. Address: `AT+IP?` reports the address the module is actually using.
2. Agent: `AT+SNMP?` must return `+SNMP:1`.
3. Version: only SNMPv3 is enabled by default, and requests in a disabled version get
   no answer. If you used v1 or v2c, check `AT+SNMPVER?`.

### Settings disappear after a reboot

Most likely `AT+SAVE` was not sent.

---

## Using the web interface

The web interface is disabled by default, so that an unconfigured device is not exposed
on the network. It can be turned on only with an AT command.

From the factory there is no web password, so no one can log in. When turning the web
interface on, also set a password with `AT+WEBPASS`. The password must be at least 8
characters. The web commands are:

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

On the login page, enter the account name (factory default `admin`) in User and the password
set with `AT+WEBPASS` in Password.

Open it in a browser.

```text
http://192.168.0.100:50003/
```

> **The port is 50003, not 80.** If you enter only the address, the browser goes to
> port 80, gets no response, and the web interface looks as if it were off.

---

## Where to go next

| Document | Read it when |
|---|---|
| [SNMP Setup Guide](./snmp-setup-guide-en.md) | Setting up v1/v2c communities, OID mapping and Traps in detail |
| [AT Command Guide](./at-command-guide-en.md) | Looking up the arguments and responses of a command |
| [Product Overview](./SNMP.mdx) | Getting an overview of the product's features |
| [Firmware Update Guide](./firmware-update-guide-en.md) | Updating the firmware of a running module |
