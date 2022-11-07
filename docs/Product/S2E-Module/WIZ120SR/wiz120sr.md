---
id: wiz120sr
title: WIZ120SR
date: 2021-07-22
---

:::tip
WIZ120SR is not discontinued, but we do not recommend it for new designs.

Please check **[WIZ752SR-120](./../WIZ752SR-12x-Series/WIZ752SR-120/WIZ752SR-120.md)** instead.
:::

## Overview

![](/img/products/wiz120sr/wiz12sr-1.jpg)

WIZ120SR is an embedded module based on WIZnet W5100 &  ARM Cortex-M3. WIZ120SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to the equipment. It supports two serial ports(3.3V LVTTL) so that it can communicate with two serial equipments at the same time.

## Features

- Serial to Ethernet Module based on W5100 & Cortex-M3
- Pin-header typed module
- Serial signals : 2 port serial port (3.3V LVTTL) / TXD, RXD, RTS, CTS, GND signals
- Support the configuration method of AT command & Configuration tool program
- Support password function for the security
- 10/100Mbps Ethernet & Max.230kbps serial speed
- Support WIZ VSP (Virtual Serial Port) program

## Hardware Specification

- Pin Header Connector Type : 2.5mm Pitch (1×14 & 2×14)
- Dimension (mm) : 50(L) x 30 (W) x 8.85 (H)
- Input Voltage : 3.3V
- Max. Power Consumption : 300mA
- Operation Temperature : 0 ~ 80℃
- RoHS, SVHC Compliant

## Utilities

- Configuration Tool for Windows
- WizVSP: Virtual Serial Port (COM port) for User’s Programs

## Pin Assignment

![](/img/products/wiz120sr/pinmap1.jpg)

## Download

### Documents

#### WIZ120SR User’s Manual v1.1.0

Last Update: 2013.06.19

<a href="/img/products/wiz120sr/WIZ120SR_UM_v110e.pdf" target="_blank">English Version</a>
<br />
<a href="/img/products/wiz120sr/WIZ120SR_UM_v110k.pdf" target="_blank">Korean Version</a>

### Firmware

#### Firmware v1.41

- Last Update: 2019.04.24
- Bug fixes
    - Data loss problem during serial data transmission with a serial transfer rate of 230400 bps has been resolved.
- Improvements
    - Stabilize the network operation by internal code modified
    - Watchdog timer added for device operation stability

<a href="/img/products/wiz120sr/wiz120_125sr_app_0141.zip" target="_blank">Download</a>

#### Firmware v1.4.0

- Last Update: 2015.08.18
- Ethernet to Serial Data Transmission problem has been fixed:
    The Ethernet data was not transmitted to the designated serial port. This problem sporadically occurred without any rule.

<a href="/img/products/wiz120sr/wiz120_125sr_app.zip" target="_blank">Download</a>

#### Firmware v1.3.0

- Last Update: 2013.04.18
- Bug fixed : When set (Databits : 7),(Parity:odd/even) in UART2, WIZ120/125SR sent wrong data

<a href="/img/products/wiz120sr/WIZ120SR_FW_V130E.zip" target="_blank">Download</a>

### Utilities

#### WIZ120SR/ WIZ125SR Config Tool for Windows v1.3

- Last Update: 2013.04.18
- WIZ120SR/ WIZ125SR Config Tool Program Installation Package
- WIZ120SR/ WIZ125SR Config Tool Source Code

<a href="/img/products/wiz120sr/WIZ12xSR_Config_V110.zip" target="_blank">Download</a>

#### Device Terminal Program for Windows

- Last Update: 2015.08.05
- Simple Configuration & Testing for WIZnet Serial to Ethernet Modules

<a href="/img/products/wiz100sr/Device_Terminal.zip" target="_blank">Download</a>

#### WIZVSP Program for Windows

- Last Update: 2017. 04. 28
- Virtual Serial COM Port program: It can be used to change the device that is connected to the PC through the existing serial interface to control by the remote Ethernet network.
- If you agree with the End User License Agreement for WIZVSP, you will be able to download the program and get a registration key. When registering the product with license agreement, the MAC address of the product in use and the email address of the contact person are required.

[Download](http://wizvsp.wiznet.io/)
