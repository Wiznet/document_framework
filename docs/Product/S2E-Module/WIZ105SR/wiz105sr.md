---
id: wiz105sr
title: WIZ105SR
date: 2021-07-21
---

:::tip
WIZ105SR is not discontinued, but we do not recommend it for new designs.

Please check **[WIZ750SR-105](./../WIZ750SR-1xx-Series/WIZ750SR-105/WIZ750SR-105.md)** instead.
:::

## Overview

![](/img/products/wiz105sr/wiz105sr-web-1.jpg)

WIZ105SR is the serial to Ethernet module using W5100 & 8051 MCU.  WIZ105SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to the equipment.

## Features

- Serial to Ethernet Module based on W5100 & 8051
- Pin-header type, RJ-45 mounted module
- Serial signals : TXD, RXD, RTS, CTS, GND
- Support the configuration method of AT command & Configuration tool program
- 10/100Mbps Ethernet & Max.230kbps serial speed
- Support WIZ VSP (Virtual Serial Port) program

## Hardware Specification

- Pin Header Connector Type : 2mm Pitch (6×2)
- Dimension (mm) : 40(L) x 62 (W) x 17 (H)
- Input Voltage : 3.3V
- Max. Power Consumption : 200mA
- Operation Temperature : 0~80℃
- RoHS, SVHC Compliant

## Utilities

- Configuration Tool for Windows
- WizVSP: Virtual Serial Port (COM port) for User’s Programs

## Pin Assignment

![](/img/products/wiz105sr/pinmap3.jpg)

## Download

### Documents

#### WIZ105SR User Manual v1.3.0

Last Update: 2017.02.28

<a href="/img/products/wiz105sr/WIZ105SR_UM_v130e.pdf" target="_blank">English Version</a>

#### WIZ100SR/ WIZ105SR/ WIZ110SR Programmer’s Guide

Last Update: 2013.06.19

<a href="/img/products/wiz100sr/WIZ1x0SR_AN_S2E-Programming-Guide_V030E.pdf" target="_blank">Download</a>

### Firmware

#### WIZ100SR Firmware v5.13

- Last Update: 2015.03.27
- Improved the exception for infinite loop during using socket functions : Apply time-out mechanism
- Bug Fixed : side effect of AT command

<a href="/img/products/wiz105sr/app_105sr_0513.zip" target="_blank">Download</a>

#### WIZ100SR Old Firmware

- V5.11 (2015.01.21)
- 5.10 (2014.01.14)
- 4.32 (2013.11.21)
- 4.31 (2013.01.30)
- 4.1 (2012-04-03)

<a href="/img/products/wiz105sr/WIZ105SR_old_FW.zip" target="_blank">Download</a>

### Utilities

#### WIZ100SR /WIZ105SR /WIZ110SR Config Tool for Windows v3.0.2

- Last Update: 2013.06.27
- WIZ1xxSR Config Tool Installation Package
- WIZ1xxSR Config Tool Source Code

<a href="/img/products/wiz100sr/WIZ1xxSR_Config.zip" target="_blank">Download</a>

#### Device Terminal Program for Windows

- Last Update: 2015.08.05
- Simple Configuration & Testing for WIZnet Serial to Ethernet Modules

<a href="/img/products/wiz100sr/Device_Terminal.zip" target="_blank">Download</a>

#### WIZVSP Program for Windows

- Last Update: 2017. 04. 28
- Virtual Serial COM Port program: It can be used to change the device that is connected to the PC through the existing serial interface to control by the remote Ethernet network.
- If you agree with the End User License Agreement for WIZVSP, you will be able to download the program and get a registration key. When registering the product with license agreement, the MAC address of the product in use and the email address of the contact person are required.

[Download](http://wizvsp.wiznet.io/)

### Hardware Design Guide

<a href="/img/products/wiz105sr/WIZ105SR_schematic.pdf" target="_blank">Reference Schematic for WIZ105SR V1.0</a>
<br />
<a href="/img/products/wiz105sr/JP3HeaderSpec_105SR.pdf" target="_blank">WIZ105SR PinHeader Description</a>

