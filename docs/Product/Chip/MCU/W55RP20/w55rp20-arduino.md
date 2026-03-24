---
id: w55rp20-arduino
title: W55RP20-arduino
date: 2024-07-09
keywords: [raspberry pi pico, rp2040, pico ethernet, w5500, arduino]
description: W55RP20--arduino made for prototyping and testing Ethernet capabilities on Pico
---

## Overview

W55RP20-arduino is an evaluation board for W55RP20, a chip that combines W5500, a wired TCP/IP controller, and RP2040.
Therefore, both the functions of Raspberry Pi Pico and those of the W5500 are available.

- Raspberry Pi Pico Clone
- Ethernet (W55RP20 Hardwired TCP/IP CHIP)

![W55RP20-arduino](/img/products/w55rp20-arduino/arduino_diagonal_s.png)

## Features

- W55RP20 microcontroller
  - Internal 2MByte Flash
  - Dual-core cortex M0+ at up to 133MHz
  - 264kByte multi-bank high performance SRAM
  - External Quad-SPI Flash with eXecute In Place (XIP)
  - High performance full-crossbar bus fabric
  - 22 multi-function General Purpose IO (4 can be used for ADC)
    - 1.8-3.3V IO Voltage (NOTE. Pico IO voltage is fixed at 3.3V)
  - 12-bit 500ksps Analogue to Digital Converter (ADC)
  - Various digital peripherals
    - 2 × UART, 2 × I2C, 2 × I2C, 2 × SPI, 16 × PWM channels
    - 1 × Timer with 4 alarms, 1 × Real Time Counter
  - 2 × Programmable IO (PIO) blocks, 8 state machines total
  - Flexible, user-programmable high-speed IO
  - Can emulate interfaces such as SD Card and VGA
  - Supports Hardwired Internet Protocols: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
  - Supports 8 Independent Hardware SOCKETs simultaneously
  - Internal 32 Kbytes Memory for TX/ RX Buffers
  - Supports High Speed Serial Peripheral Interface(SPI MODE 0, 3)
- USB C port for power and data (and for reprogramming the Flash)
- 3-pin ARM Serial Wire Debug (SWD) port
- 10 / 100 Ethernet PHY embedded
- Supports Auto Negotiation
  - Full / Half Duplex
  - 10 / 100 Based
- Built-in RJ45 (POE)
- Built-in DCDC (PWM/PFM)
- Additional modules are installed to enable POE

## Hardware Specification

### Pin-out(작성중)

![W55RP20-arduino](/img/products/w55rp20-arduino/pinmap.png)
This product is optimized for an external input DC range of 5V to 3.3V. Excessive heat generation may occur when supplying DC power of 7V or higher.

## Technical Reference

### RP2040 Datasheet

- <a href="https://datasheets.raspberrypi.org/rp2040/rp2040-datasheet.pdf" target="_blank">Download</a>

### W5500 Datasheet

- <a href="https://docs.wiznet.io/Product/Chip/Ethernet/W5500/datasheet" target="_blank">Download</a>

### W55RP20 Datasheet

- <a href="https://docs.wiznet.io/Product/Chip/MCU/W55RP20/documents_md#w55rp20-datasheet" target="_blank">Download</a>

### Schematic

- <a href="https://github.com/Wiznet/document_framework/blob/master/static/img/products/w55rp20-arduino/W55RP20_Arduino_sch.pdf" target="_blank">Download</a>

### Schematic & Part list & Gerber File

- <a href="https://github.com/Wiznet/document_framework/blob/master/static/img/products/w55rp20-arduino/W55RP20%20Arduino%20-%20Final(260225)A.zip" target="_blank">Download</a>

### Dimension (Unit : mm)

![W5500-EVB-RP2040](/img/products/w55rp20-evb-pico/w55rp20-evb-pico-dimension.png)

### Firmware Example
Please refer to below links to find firmware example.

- C/C++
  - [Ethernet Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)
  - [AWS Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AWS-C)
  - [Azure Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AZURE-C)
  - [LwIP Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-LWIP-C)
  - [FreeRTOS Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-FREERTOS-C)
- MicroPython Examples
  - [Ethernet Examples](https://github.com/WIZnet-ioNIC/WIZnet-ioNIC-micropython)
- CircuitPython Examples
  - [CircuitPython Examples](https://github.com/WIZnet-ioNIC/WIZnet-ioNIC-Circuitpython)
- Arduino Examples
  - [Arduino Examples](https://github.com/earlephilhower/arduino-pico)

### Application Notes

#### C/C++
- Ethernet Examples
  - <a href = "/img/application_notes/PICO-C/DHCP_DNS_EXAMPLE_AN_V100.pdf" target ="_blank">DHCP_DNS_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/FTP_Client_EXAMPLE_AN_V100.pdf" target ="_blank">FTP_Client_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/FTP_Server_EXAMPLE_AN_V100.pdf" target ="_blank">FTP_Server_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/HTTP_Server_EXAMPLE_AN_V100.pdf" target ="_blank">HTTP_Server_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/LOOPBACK_EXAMPLE_AN_V100.pdf" target ="_blank">LOOPBACK_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/MQTT_Publish_EXAMPLE_AN_V100.pdf" target ="_blank">MQTT_Publish_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/MQTT_Publish_Subscribe_EXAMPLE_AN_V100.pdf" target ="_blank">MQTT_Publish_Subscribe_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/MQTT_Subscribe_EXAMPLE_AN_V100.pdf" target ="_blank">MQTT_Subscribe_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/NETBIOS_EXAMPLE_AN_V100.pdf" target ="_blank">NETBIOS_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/SNTP_EXAMPLE_AN_V100.pdf" target ="_blank">SNTP_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/TCP_Client_over_SSL_EXAMPLE_AN_V100.pdf" target ="_blank">TCP_Client_over_SSL_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/TFTP_Client_EXAMPLE_AN_V100.pdf" target ="_blank">TFTP_Client_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-C/UDP_multicast_receiver_EXAMPLE_AN_V100.pdf" target ="_blank">UDP_multicast_receiver_EXAMPLE_AN_V100 - English</a>
- AWS Examples
  - <a href = "/img/application_notes/PICO-AWS-C/AWS_IoT_HTTP_EXAMPLE_AN_V100.pdf" target ="_blank">AWS_IoT_HTTP_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-AWS-C/AWS_IoT_MQTT_EXAMPLE_AN_V100.pdf" target ="_blank">AWS_IoT_MQTT_EXAMPLE_AN_V100 - English</a>
- Azure Examples
  - <a href = "/img/application_notes/PICO-AZURE-C/AZURE_telemetry_EXAMPLE_AN_V100.pdf" target ="_blank">AZURE_telemetry_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-AZURE-C/AZURE_2CD_EXAMPLE_AN_V100.pdf" target ="_blank">AZURE_2CD_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-AZURE-C/AZURE_client_X509_EXAMPLE_AN_V100.pdf" target ="_blank">AZURE_client_X509_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-AZURE-C/AZURE_prov_X509_EXAMPLE_AN_V100.pdf" target ="_blank">AZURE_prov_X509_EXAMPLE_AN_V100 - English</a>
- LwIP Examples
  - <a href = "/img/application_notes/PICO-LWIP-C/lwIP_DHCP_DNS_EXAMPLE_AN_V100.pdf" target ="_blank">lwIP_DHCP_DNS_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-LWIP-C/lwIP_iPerf_EXAMPLE_AN_V100.pdf" target ="_blank">lwIP_iPerf_EXAMPLE_AN_V100 - English</a>
  - <a href = "/img/application_notes/PICO-LWIP-C/lwIP_LOOPBACK_EXAMPLE_AN_V100.pdf" target ="_blank">lwIP_LOOPBACK_EXAMPLE_AN_V100 - English</a>

[![WIZnetUS Online Shop, USA](/img/products/w5500-evb-pico/icons/dollar.png)](https://eshop.wiznet.io/shop/module/w55rp20-evb-pico/)
[![WIZnetKorea Online Shop, Korea](/img/products/w5500-evb-pico/icons/won.png)](https://wiznetshop.io/product/detail.html?product_no=1094&cate_no=55&display_group=1)
