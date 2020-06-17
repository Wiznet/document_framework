---
id: overview-[EN]
title: Product Overview [EN]
date: 2020-04-16
---

## Overview

![WIZ550SR Overview](/img/products/wiz550sr/wiz550sr_overview.png)

WIZ550SR is Serial to Ethernet module, It's mounted TCP/IP chip W5500 of
WIZnet and Cortex-M3-based STM32F103RCT6 of STmicro. WIZ550SR does not
contain RJ45 because very small size type. WIZ550SR provides the user
Interface 2.00mm Pitch Pin header.

WIZ550SR is the protocol converter that transmits the data sent by
serial equipment as TCP/IP data type, and converts back the TCP/IP data
received through the network into serial data to transmit back to a
serial equipment. It complies with industrial temperature standard and
supports the serial interfaces of UART.

WIZ550SR is is compatible with the Configuration Tool of WIZ550S2E and
WIZ550WEB, and will use the same AT Command.

However, Configuration Tool must use the latest version.

## Features

  - Very small size Serial to Ethernet Module. 22mm x 24mm x 13mm.
  - WIZnet, TCP/IP Chip **W5500**.
  - STmicro, Cortex-M3 based STM32F103RCT6.
  - Not include a transformer and RJ45.
  - 2.00mm Pitch Pin Header Type, 1x11.
  - Support the **MDI**(Medium Dependent Interface).
      - TXN, TXP, RXN, RXP
  - Support the **UART** Interface.
      - RXD, TXD, RTS, CTS, DSR(Option), DTR(Option)
      - Buad Rate : 600bps to 230.4kbps
      - Length : 8bit
      - Parity bit : None, Odd, Even
      - Stop bit : 1bit, 2bit
      - Support the RS-232C Interface.
      - Will be supported the RS-422/485 Interface.
      - **Default : 115200, 8, n, 1**
  - Support the Debug UART.
      - DEBUG RXD, DEBUG TXD
      - **Default : 115200, 8, n, 1**
  - Support the PHY Status Output.
      - Active LED, Link LED
  - Support the STATUS Output.
      - LOW : TCP Connect.
      - HIGH : TCP Diconnect.
  - System Pin.
      - RESET : System Reset, Active Low.
      - BOOT0 : MCU BOOT mode operation, Active High.
      - H/W TRIG : App BOOT mode operation, Active Low.
  - Support the Indicator LED.
      - Power LED(LD3).
      - LED 0(LD1) : 
      - LED 1(LD2) : 
  - Support the Pin Header Hole for firmware upload.
      - 2.54mm Pitch, Not Mount.
  - Support the Pin Header Hole for SWD.
      - 1.27mm Pitch, Not Mount.
  - Include eeprom for data storage.
  - Support the AT Command for the set of WIZ550SR.
  - Support the WIZ VSP (Virtual Serial Port).
  - Operation Temperature : -40℃ \~ 85℃
  - Size : 22mm x 24mm x 13mm
