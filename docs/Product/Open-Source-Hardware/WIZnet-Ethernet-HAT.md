---
id: wiznet_ethernet_hat
title: WIZnet Ethernet HAT
date: 2021-09-07
keywords:
  - Raspberry Pi Pico
  - Ethernet HAT
  - RP2040
  - Ethernet
  - wiznet-ethernet-hat
  - wiznet
description: WIZnet Ethernet HAT - easiest way to add Ethernet to Raspberry Pi Pico
---



## Overview

WIZnet Ethernet HAT (Hardware Attached on Top) is a Raspberry Pi Pico pin-compatible board that utilizes W5100S and supports both 3.3V & 5V.

Please refer to this link to find more information about [W5100S](../../Product/iEthernet/W5100S/overview).

- Raspberry Pi Pico Pin-Compatible
- Ethernet (W5100S Hardwired TCP/IP CHIP)

![](/img/osh/wiznet-ethernet-hat/wiznet-ethernet-hat.png)

## Features

- Includes W5100S
  - Supports Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE
  - Supports 4 Independent Hardware SOCKETs simultaneously
  - Internal 16 Kbytes Memory for TX/ RX Buffers
- Operation Voltage 3.3V / 5V
  - Built-in LDO (LM8805SF5-33V)
- SPI Interface
  - 5V I/O tolerance
- 10 / 100 Ethernet PHY embedded
- Supports Auto Negotiation
  - Full / Half Duplex
  - 10 / 100 Based
- Built-in RJ45 (RB1-125BAG1A)

## Hardware Specification

### Pin-out

![WIZnet-Ethernet-HAT-Pinout](/img/osh/wiznet-ethernet-hat/wiznet-ethernet-hat-pinout.png)

### Pin Description

| I/O  | Pin Name | Description                      |
| ---- | -------- | -------------------------------- |
| P    | VBUS     | Power supply, 4.3~5.5 Voltage    |
| P    | 3V3      | Power supply, 3.3 Voltage        |
| P    | GND      | Power ground                     |
| I    | INTn     | W5100S Interrupt : Low activity. |
| I    | RSTn     | W5100S Reset : Low activity      |
| I    | SPI0 TX  | SPI MOSI (Master Out Slave In)   |
| I    | SPI0 SCK | SPI Clock                        |
| I    | SPI0 CSn | SPI Slave Select                 |
| O    | SPI0 RX  | SPI MISO(Master In Slave Out)    |



## Electrical Specification

TBA

## Technical Reference

### W5100S Datasheet

- <a href="/img/products/w5100s/w5100s_ds_v125e.pdf" target="_blank">W5100S Datasheet v1.2.5</a>

### Schematic & Part list & Gerber File

- [Go to Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/08_OSHW/WIZnet_Ethernet_HAT/WIZnet_Ethernet_HAT_V100)

### Schematic

![WIZnet-Ethernet-HAT-Schematic](/img/osh/wiznet-ethernet-hat/wiznet-ethernet-hat-schematic.png)

### Dimension (Unit : mm)

21 x 68 x 18 (mm)

![WIZnet-Ethernet-HAT-Dimension](/img/osh/wiznet-ethernet-hat/wiznet-ethernet-hat-dimension.png)


### Firmware Examples

Please refer to below links to find firmware example.

- [C/C++ Examples](https://github.com/Wiznet/RP2040-HAT-C)
- [CircuitPython Examples](https://github.com/Wiznet/RP2040-HAT-CircuitPython)

## How to buy

[![WIZnetUS Online Shop, USA](/img/products/w5500/w5500_evb/icons/dollar.png)](https://eshop.wiznet.io/shop/module/wiznet-ethernet-hat)
[![WIZnetKorea Online Shop, Korea](/img/products/w5500/w5500_evb/icons/won.png)](http://wiznetshop.co.kr/product/detail.html?product_no=1048&cate_no=1&display_group=2)