---
id: wiz140sr
title: WIZ140SR
date: 2021-07-22
---

## Overview

![](/img/products/wiz140sr/wiz140sr-web-2.jpg)

WIZ140SR is an embedded module based on WIZnet W5300 &  ARM Cortex-M3. WIZ140SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to the equipment.

## Features

- Serial to Ethernet Module based on W5300 & Cortex-M3
- Pin-header mounted module
- Serial signals : TXD, RXD, RTS, CTS, GND signals (4 UART/RS-232C)
- Support the configuration method of AT command & Configuration tool program
- 10/100Mbps Ethernet & Max.115.2kbps serial speed
- Support WIZ VSP (Virtual Serial Port) program

## Hardware Specification

- Pin Header Connector Type : 2.5mm Pitch (1×14, 2×14)
- Dimension (mm) : 48 x 36 x 16
- Input Voltage : 3.3V
- Max. Power Consumption : 250mA
- Operation Temperature : 0 ~ 70℃
- RoHS, SVHC Compliant

## Utilities

- Configuration Tool for Windows
- WizVSP: Virtual Serial Port (COM port) for User’s Programs

## Pin Assignment

![](/img/products/wiz140sr/140_pin.jpg)

## Download

### Documents

#### WIZ140SR & WIZ145SR User’s Munual v2.0.1

Last Update: 2013.07.13

<a href="/img/products/wiz140sr/WIZ14xSR_UM_v201e.pdf" target="_blank">Download</a>

#### WIZ140SR & WIZ145SR Datasheet v1.1.0

Last Update: 2020.11.17

<a href="/img/products/wiz140sr/WIZ140SR_WIZ145SR_DS_V110e.pdf" target="_blank">Download</a>

### Firmware

#### Firmware v1.7.0

- Last Update: 2021.04.20
- Update buffer management

<a href="/img/products/wiz140sr/WIZ140v1_7_0_210209.zip" target="_blank">Download</a>

#### Firmware v1.6.8

- Last Update: 2019.03.29
- Update buffer management

<a href="/img/products/wiz140sr/WIZ140v1_6_8_190209.zip" target="_blank">Download</a>

#### Firmware v1.6.5

- Last Update: 2015.06.10
- Update buffer management

<a href="/img/products/wiz140sr/WIZ140v1_6_5_150610.zip" target="_blank">Download</a>

#### Old firmware

| Version | Description |
|---------|-------------|
|Firmware v1.6.4|- Last Update: 2015.01.07<br />- Telnet mode is added<br />- Bug fix about serial data corruption with data from ethernet<br />- Bug fix with Data packing condition ‘Size’|
|Firmware v1.6.1|- Last Update: 2013.11.18<br />- Bug fixed : The previous firmware has error, when trying to connect to the remote server|
|Firmware v1.6.0|- Last Update: 2013.08.07<br />- Baud rate : 600 bps added<br />- The format of Serial cmd WnBU/RnBU got changed<br />- Debug message displays current network information<br />- The notation of firmware version was changed to x.x.x|
|Firmware v1.5.2|- Last Update: 2013.06.11<br />- Bug fixed : When transmitting to WIZ140/145SR more than  8K bytes data continuously, some data is lost|
|Firmware v1.5|- Last Update: 2013.04.18<br />- Optimize the code by reflecting W5300 erratum4 & erratum5|

<a href="/img/products/wiz140sr/WIZ14x_old_FW.zip" target="_blank">Download</a>

### Utilities

#### WIZ140SR/WIZ145SR Configuration Tool for Windows v1.7

- Last Update: 2015.01.07

<a href="/img/products/wiz140sr/WIZ14xSRConfig_Rev1_7.zip" target="_blank">Download</a>

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

#### Reference Schematic for WIZ140SR & WIZ145SR V1.0

Last Update: 2010.04.27

<a href="/img/products/wiz140sr/WIZ14xSR_Ref_Schematic.pdf" target="_blank">Download</a>