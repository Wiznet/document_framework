---
id: eoe-w63e-datasheet-en
title: EOE-W63E Datasheet [EN]
date: 2026-08-25
keywords: [wiznet, w6300, esp32-s3, EOE-W63E datasheet, hardwired tcp/ip, ethernet, wifi, ble, som, quad-spi]
description: EOE-W63E is an Ethernet + Wi-Fi/BLE System-on-Module (SoM) combining the ESP32-S3 with the WIZnet W6300.
---

<!-- Product image pending. -->

## Overview

This document is the hardware specification for the **EOE-W63E**, an Ethernet +
Wi-Fi/BLE **System-on-Module (SoM)** that combines the Espressif **ESP32-S3** Wi-Fi/BLE
MCU with the WIZnet **W6300** hardwired TCP/IP (Ethernet Offload Engine) controller,
linked over a dedicated **Quad-SPI** bus.

The EOE-W63E is a solder-down module intended to be mounted on a customer carrier board.
It brings the ESP32-S3 GPIO / ADC / I2C / SPI / USB / UART lines and the Ethernet MDI pair
out to three headers. For an out-of-the-box evaluation platform, see the
[EOE-W63E-EVB](./EOE-W63E-EVB.md).

:::note
The EOE-W63E is a module, not a finished board. It has **no RJ45 jack, no USB connector,
no DC jack, no push buttons and no on-board 3.3V regulator** — those belong to the carrier
board. The module is powered directly from a 3.3V rail.
:::

## Features

- Dual-controller module: **ESP32-S3** (Wi-Fi 802.11 b/g/n + Bluetooth LE, dual-core
  Xtensa LX7 MCU, QFN56) + **W6300** hardwired TCP/IP Ethernet controller (LQFP48)
  - Hardwired TCP/IP protocols on the W6300: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
- **10/100 Mbps Ethernet** with the on-module MDI front-end — 49.9 Ω differential
  termination and the 12.4 kΩ 1% bandgap reference are already fitted, so the carrier
  board only needs external RJ45 magnetics
- **Quad-SPI** link between the two controllers (`W6300_SPI_D0`–`D3`, `W6300_SPI_CLK`,
  `W6300_SPI_nCS`, `W6300_nINT`, `W6300_nRST`) — internal to the module, not exposed
- On-module **16 Mbit SPI flash** (PY25Q16HB-VXH) — the ESP32-S3 is the QFN56 variant with
  no in-package flash, so this device is the boot flash
- **U.FL antenna connector** (J3) with an on-module pi matching network for Wi-Fi / BLE
- **Native USB** (`ESP_USB_P` / `ESP_USB_N`) for programming and debug — no USB-to-UART bridge
- Ethernet PHY status outputs: `LINKn`, `ACTn`, `SPD`, `DUP`
- On-module clocks: 40 MHz crystal for the ESP32-S3 and 25 MHz crystal for the W6300 —
  no external clock required
- Rich I/O expansion: GPIO, ADC (A0–A10), I2C (SDA / SCL), SPI (SCK / MISO / MOSI) and UART0
- Single 3.3V supply; the 1.2V core rail is generated on-module
- Signal headers: two 1×23 (J1, J2) plus one 1×12 Ethernet MDI header (J4)

## Electrical Specification

| Item | Symbol | Min | Typ | Max | Unit | Remarks |
| ---- | ------ | --- | --- | --- | ---- | ------- |
| Supply voltage | VDD33 | 3.0 | 3.3 | 3.6 | V | Single rail; 1.2V core generated on-module |
| I/O level | — | — | 3.3 | — | V | TTL, not 5V tolerant |
| Operating temperature | TA | −40 | — | +85 | ℃ | Component rating; module rating TBD |
| Supply current | IDD | — | TBD | TBD | mA | Varies strongly with Wi-Fi TX activity |

:::caution
All module I/O is **3.3V and is not 5V tolerant**. Level-shift any 5V host signals on the
carrier board.
:::

### Power Supply

The module takes a single 3.3V input (`VDD33`). An on-module inductor separates the
analog `VDD33` domain from the digital `3V3` rail, and the 1.2V core rail used by the
W6300 is generated and decoupled on-module. No external core supply is required.

:::caution
Wi-Fi transmit bursts draw significantly more current than idle operation. Size the
carrier-board 3.3V supply and bulk capacitance for the ESP32-S3 peak TX current, not the
average — an undersized rail shows up as brown-out resets during association.
:::

## Hardware Specification

### Clocks

| Reference | Frequency | Function |
| --------- | --------- | -------- |
| Y2 | 40 MHz | ESP32-S3 system clock (crystal with 6 pF load capacitors, 499 Ω series) |
| Y1 | 25 MHz | W6300 Ethernet PHY clock (crystal with 18 pF load capacitors) |

Both clock sources are fitted on the module. No external clock input is needed.

### Ethernet Interface

The ESP32-S3 talks to the W6300 over a dedicated **Quad-SPI** bus. These nets are internal
to the module and are **not** brought out to the headers:

| Net | Function |
| --- | -------- |
| W6300_SPI_CLK | Quad-SPI clock |
| W6300_SPI_D0 – D3 | Quad-SPI data lines |
| W6300_SPI_nCS | Chip select (active low) |
| W6300_nINT | Interrupt to the ESP32-S3 (active low) |
| W6300_nRST | Reset from the ESP32-S3 (active low) |

The W6300's parallel host data bus (`DAT0`–`DAT7`) is unused in this design and is left
unconnected.

### Ethernet MDI Interface

The module implements the W6300 analog front end, including 49.9 Ω differential termination
and the 12.4 kΩ 1% bandgap reference on `RSET_BG`. The carrier board only has to provide
the **RJ45 magnetics** (or a magnetics-integrated RJ45 jack).

| J4 pin | Signal | Connect to |
| ------ | ------ | ---------- |
| 2  | RD_N | Transformer receive pair − |
| 3  | RD_P | Transformer receive pair + |
| 5  | RCT  | Receive center tap |
| 8  | TCT  | Transmit center tap |
| 10 | TD_N | Transformer transmit pair − |
| 11 | TD_P | Transformer transmit pair + |

Pins 1, 4, 6, 7, 9 and 12 of J4 are ground.

Typical RJ45 wiring on the carrier board (cable side of the magnetics):

| RJ45 pin | Signal | Description |
| -------- | ------ | ----------- |
| 1 | TXP | TX+ |
| 2 | TXN | TX− |
| 3 | RXP | RX+ |
| 4 | —   | Unused (or PoE pair) |
| 5 | —   | Unused (or PoE pair) |
| 6 | RXN | RX− |
| 7 | —   | Unused (or PoE pair) |
| 8 | —   | Unused (or PoE pair) |

:::note
The EOE-W63E does **not** include PoE. If PoE is required it must be implemented on the
carrier board; when it is, pins 4/5 and 7/8 must carry opposite polarity.
:::

### Ethernet Status Signals

| Signal | Header | Indication |
| ------ | ------ | ---------- |
| LINKn | J2 | Ethernet link established (active low) |
| ACTn  | J2 | Transmit / receive activity (active low) |
| SPD   | J2 | Link speed status |
| DUP   | J2 | Duplex status |

These are signal outputs only — no indicator LEDs are fitted on the module. Add LEDs with
an appropriate series resistor on the carrier board if required.

### Wireless / Antenna

Wi-Fi and Bluetooth LE are provided by the ESP32-S3. The RF path from the chip's `LNA_IN`
pin runs through an on-module pi matching network (a 3.3 nH series inductor with 1 pF
shunt capacitors) to a **U.FL / IPEX connector (J3)**.

:::caution
Keep the carrier board free of copper — planes, traces and mounting hardware — beneath and
around the antenna connector and any attached antenna. Nearby metal detunes the match and
reduces range.
:::

### USB Interface

`ESP_USB_P` (J1 pin 19) and `ESP_USB_N` (J1 pin 18) are the ESP32-S3's **native USB** lines;
there is no USB-to-UART bridge on the module. Route them as a 90 Ω differential pair on the
carrier board and fit a USB connector.

The USB interface is used to program and debug the ESP32-S3. `U0TXD` / `U0RXD` (J1 pins 21
and 22) provide the serial console as an alternative.

### Boot / Control Pins

These are **pins, not switches or buttons.** Drive them from the carrier board with a
jumper, push button, or host GPIO.

| Header / pin | Signal | Function |
| ------------ | ------ | -------- |
| J2 pin 8  | CHIP_PU | ESP32-S3 chip enable — drive low to reset / hold in shutdown |
| J2 pin 18 | GPIO0   | Boot mode select — hold low at reset to enter the ESP32-S3 serial bootloader |

### Pin-out

The complete header-pinout diagram will be added when the pinout image is available.

### Dimension

|                          |
| ------------------------ |
| TBD                      |
| ***EOE-W63E Revision 1.0 Dimension*** |

- TBD (mm)

## Manuals

| Title | Description | Link | Notes |
| ----- | ----------- | ---- | ----- |
| Getting Started | Programming the ESP32-S3 and bringing up Ethernet | - | TBD |
| W6300 Driver / ioLibrary | W6300 TCP/IP driver for the ESP32-S3 | - | TBD |

## Certification

- TBD

## Design file

### Schematic

| H/W version | Filetype | Download Link | Remarks |
| ----------- | -------- | ------------- | ------- |
| 1.0         | Altium   | TBD           | -       |
| :::         | PDF      | TBD           | :::     |

### Part list

| H/W version | Filetype | Download Link | Remarks |
| ----------- | -------- | ------------- | ------- |
| 1.0         | Excel    | TBD           | -       |
| :::         | PDF      | TBD           | :::     |

### 3D file

| H/W version | Filetype | Download Link | Remarks |
| ----------- | -------- | ------------- | ------- |
| 1.0         | STEP     | TBD           | -       |
