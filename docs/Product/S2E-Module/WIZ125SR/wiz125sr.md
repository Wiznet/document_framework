---
id: wiz125sr
title: WIZ125SR
date: 2021-07-22
---

:::tip
WIZ125SR is not discontinued, but we do not recommend it for new designs.

Please check **[WIZ752SR-125](./../WIZ752SR-12x-Series/WIZ752SR-125/WIZ752SR-125.md)** instead.
:::

## Overview

![](/img/products/wiz125sr/125.jpg)

WIZ125SR is an embedded module based on WIZnet W5100 &  ARM Cortex-M3. WIZ125SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to the equipment. It supports two serial ports so that it can communicate with two serial equipments at the same time.

## Features

- Serial to Ethernet Module based on W5100 & Cortex-M3
- Serial signals : TXD, RXD, RTS, CTS, GND signals (2 UART/RS-232C)
- 2 DB-9 & RJ-45 mounted
- Support the configuration method of AT command & Configuration tool program
- 10/100Mbps Ethernet & Max.115.2kbps serial speed
- Support WIZ VSP (Virtual Serial Port) program

## Hardware Specification

- 2 DB-9 for serial  & 1 RJ-45 for Ethernet interface
- Dimension (mm) : 88.5(L) x 65.5 (W) x 18 (H)
- Input Voltage : 5V
- Max. Power Consumption : 220mA
- Operation Temperature : 0 ~ 70℃
- RoHS, SVHC Compliant

## Utilities

- Configuration Tool for Windows
- WizVSP: Virtual Serial Port (COM port) for User’s Programs

## Hardware Interface

![](/img/products/wiz125sr/hw_if.jpg)

## Download

### Documents

#### WIZ125SR User Manual V1.0

Last Update: 2010.07.10

<a href="/img/products/wiz125sr/WIZ125SR_User_Manual_EN_V1.0.pdf" target="_blank">User Manual</a>

#### WIZ125SR Datasheet v1.00

Last Update: 2010.05.26

<a href="/img/products/wiz125sr/WIZ125SR_Datasheet_EN_V1.0.pdf" target="_blank">Datasheet</a>

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

[**Go to WIZ VSP Guide page**](./../serial-to-ethernet-guide.md#wiz-vsp)

