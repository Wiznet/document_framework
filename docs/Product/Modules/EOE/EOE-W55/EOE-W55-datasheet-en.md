---
id: eoe-w55-datasheet-en
title: EOE-W55 Datasheet [EN]
keywords: [wiznet, w5500, esp32-s3, EOE-W55, hardwired tcp/ip, ethernet, wifi, ble, som, spi]
description: EOE-W55 combines the ESP32-S3 with the WIZnet W5500 in a dual-connectivity System-on-Module.
---

## Overview

EOE-W55 combines an Espressif ESP32-S3 application processor with the WIZnet W5500 Hardwired TCP/IP Ethernet controller. The two devices communicate over SPI, while the ESP32-S3 provides Wi-Fi, Bluetooth LE, USB, and general-purpose peripheral interfaces.

:::note
This page describes the current pre-release hardware definition. Final pin allocation, current consumption, and production ratings remain subject to confirmation.
:::

## Key Features

- ESP32-S3 dual-core Xtensa LX7 processor up to 240 MHz
- Wi-Fi 4 / 802.11 b/g/n at 2.4 GHz and Bluetooth LE
- W5500 Hardwired TCP/IP controller connected over SPI
- 10/100Base-T Ethernet MAC and PHY
- TCP, UDP, ICMP, IPv4, ARP, IGMP, and PPPoE processed in hardware
- 8 independent hardware sockets
- 32 KB internal TX/RX buffer memory
- SPI modes 0 and 3, up to 80 MHz at the W5500 interface
- Native USB and UART0 for programming and debug
- GPIO, ADC, I2C, and SPI expansion interfaces
- 18.3 × 26.15 mm module with 1.1 mm pin pitch

## W5500 Ethernet Controller

| Item | Specification |
| --- | --- |
| Host interface | SPI mode 0 or 3 |
| Maximum SPI clock | 80 MHz |
| Hardware sockets | 8 |
| Internal packet buffer | 32 KB for TX/RX |
| Network protocols | TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE |
| Ethernet | 10Base-T / 100Base-TX with auto-negotiation |
| Power features | Power-down mode and Wake-on-LAN over UDP |

## Module Interfaces

| Interface | Function |
| --- | --- |
| Ethernet | W5500 Ethernet MDI signals for external RJ45 magnetics |
| Wireless | ESP32-S3 Wi-Fi and Bluetooth LE through the antenna connector |
| USB | Native ESP32-S3 USB for programming and debug |
| UART | UART0 transmit and receive |
| Expansion | GPIO, ADC, I2C, and SPI |
| Ethernet status | Link, activity, speed, and duplex status outputs |

## Design Notes

- Keep the W5500 SPI connection short and follow the released reference schematic.
- Provide external RJ45 magnetics or a magnetics-integrated RJ45 jack on the carrier board.
- Size the 3.3 V supply for ESP32-S3 Wi-Fi transmit-current peaks.
- Treat ESP32-S3-facing external I/O as 3.3 V and not 5 V tolerant.

## Pending Information

- Final pinout and mechanical drawing
- Module current consumption and thermal characterization
- Certification and production ordering information
- Reference schematic, BOM, and 3D model
