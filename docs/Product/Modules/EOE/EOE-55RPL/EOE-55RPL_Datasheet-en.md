---
id: eoe-55rpl-datasheet-en
title: EOE-55RPL Datasheet [EN]
date: 2026-08-25
keywords: [wiznet, w55rp20, EOE-55RPL datasheet, hardwired tcp/ip, ethernet, SPE, 10BASE-T1L]
description: EOE-55RPL is a Single Pair Ethernet module that combines a 10BASE-T1L media converter with the WIZnet W55RP20.
---

<!-- Product image pending. -->

## Overview

This document describes the hardware specifications of the **EOE-55RPL**.

The EOE-55RPL is a **Combo Module** that combines a 10/100BASE-TX to 10BASE-T1L media converter circuit based on Analog Devices **ADIN1100 + ADIN1200** with the WIZnet **W55RP20**, which integrates a dual-core Arm Cortex-M0+ MCU and a hardwired TCP/IP Ethernet Offload Engine.

The EOE-55RPL is a solder-down module designed to be mounted on a customer carrier board. Refer to the module datasheet for detailed pin assignments.

<!-- If an evaluation board is required, refer to the [EOE-W63-EVB](./EOE-W63-EVB.md) document. -->

:::note

The EOE-55RPL is a module, not a complete standalone board. **RJ45 connectors, USB connectors, DC jacks, push buttons, and a 3.3 V regulator are not included on the module.** These components must be implemented on the carrier board.

The module operates from an externally supplied 3.3 V power source.

:::

## Key Features

- W55RP20 (RP2040 dual-core Arm Cortex-M0+ MCU + W5500 hardwired TCP/IP core + 2 MB Flash) + 10BASE-T1L media converter (ADIN1100 + ADIN1200)
  - Hardwired TCP/IP protocols: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE

- Two UART channels supporting full modem control when the S2E (Serial-to-Ethernet) firmware is installed (RX / TX / RTS / CTS / DSR / DTR)
  - UART or SPI host interface selectable using the `SPI_IF_SEL` pin
  - Per-channel status outputs: `STATUS0_PHY`, `STATUS0_TCP`, `STATUS1_TCP`
  - Ethernet PHY status outputs: `LINK`, `ACT`, `SPD`, `DUP` — each signal is routed through a 330 Ω series resistor

- On-board clocks: 12 MHz oscillator for the RP2040 core and 25 MHz crystal for the Ethernet PHY
  - No external clock source is required

- Single 3.3 V power supply

- Control pins exposed through the module edge interface: `RSTn`, `RP_BOOT` (RP2040 BOOTSEL)

- S2E firmware control pins: `FW_BOOT` (S2E firmware boot), `FACT_RSTn` (Factory Reset), `HW_TRIG` (AT Command Mode), `DEBUG`
  - Interface selection pins: `SPI_IF_SEL`, `UART0_IF_SEL`, `UART1_IF_SEL`

- Native USB (`D_P` / `D_N`) for firmware upload in BOOTSEL mode

- SWD debug port (`SWCLK` / `SWDIO`)

## Electrical Specifications

| Parameter | Symbol | Min. | Typ. | Max. | Unit | Remarks |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Supply Voltage | VDD33 | 3.0 | 3.3 | 3.6 | V | Single supply rail |
| I/O Level | — | — | 3.3 | — | V | TTL, not 5 V tolerant |
| Operating Temperature | TA | −40 | — | +85 | °C | Based on component ratings; module rating TBD |
| Supply Current | IDD | — | TBD | TBD | mA | Depends on the application implementation; to be updated |

:::caution

All module I/Os operate at **3.3 V and are not 5 V tolerant.** If the host system uses 5 V logic levels, an external level-shifting circuit must be used.

:::

### Power Supply

The module is powered by a single 3.3 V supply (`VDD33`) through pins 7, 12, and 27.

Decoupling capacitors are implemented internally on the module; therefore, additional external decoupling capacitors are not required.

### Reset

`RSTn` is an active-low reset signal and is internally pulled up to 3.3 V through a 4.7 kΩ resistor.

It is connected to pin 18.

## Hardware Specifications

### Clock

| Component | Frequency | Purpose |
| ---- | ------ | ---- |
| Y1 | 25 MHz | W55RP20 Ethernet PHY clock |
| Y2 | 12 MHz | W55RP20 Cortex-M0+ core clock |
| Y3 | 50 MHz | 10BASE-T1L PHY clock |

All clock sources are mounted on the module, and no external clock input is required.

### Ethernet Interface

The following signals are internal to the module and are **not exposed through the module pins**.

| Net | Function | Internal Connection |
| ---- | ---- | ---- |
| MDC | ADIN1100 / ADIN1200 SMI configuration clock | GP27 |
| MDIO | ADIN1100 / ADIN1200 SMI configuration data I/O | GP28 |

### Ethernet MDI Interface

The module includes the required 10BASE-T1L MDI termination circuitry. For stable operation, the use of an external common-mode choke (CMC) and protection components is recommended.

Refer to the EVB schematic for the recommended circuit implementation.

### Ethernet Status Signals

| Signal | Pin | Description |
| ---- | ---- | --------- |
| LINKn | 36 | Ethernet link established (active low) |
| LED_0 | 35 | TBD |
| LED_1 | 34 | TBD |

Only the status signals are provided. **No indicator LEDs are mounted on the module.** If visual indication is required, add LEDs and appropriate series resistors on the carrier board.

### USB Interface

`D_P` (pin 26) and `D_N` (pin 25) are the **native USB** signals of the W55RP20. The module does not include a USB-to-UART bridge.

On the carrier board, route these signals as a 90 Ω differential pair and provide the appropriate USB series termination resistors and USB connector.

The USB interface is used to upload or update firmware after the W55RP20 enters BOOTSEL mode by holding `RP_BOOT` low during reset. For detailed instructions, refer to the firmware update guide in the [Manual](#manual) section below.

### SWD / Debug Interface

| Module Pin | Signal | Description |
| ------- | ---- | ---- |
| 15 | SWCLK | Serial Wire Debug clock |
| 16 | SWD | Serial Wire Debug data |
| 18 | RSTn | Reset |

### Pin Assignment

TBD

### Mechanical Dimensions

| |
| ------------------------ |
| TBD |
| **EOE-W55RP20 Revision 1.0 Dimensions** |

- TBD (mm)

## Manual

TBD

## Certifications

- TBD

## Design Files

### Schematic

| H/W Version | File Format | Download | Remarks |
| -------- | --------- | -------- | ---- |
| 1.0 | Altium | TBD | - |
| ::: | PDF | TBD | ::: |

### Bill of Materials

| H/W Version | File Format | Download | Remarks |
| -------- | --------- | -------- | ---- |
| 1.0 | Excel | TBD | - |
| ::: | PDF | TBD | ::: |

### 3D Model

| H/W Version | File Format | Download | Remarks |
| -------- | --------- | -------- | ---- |
| 1.0 | STEP | TBD | - |
