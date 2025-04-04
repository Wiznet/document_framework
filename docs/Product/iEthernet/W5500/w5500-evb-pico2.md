---
id: w5500-evb-pico2
title: W5500-EVB-Pico2
date: 2024-07-22
keywords: [raspberry pi pico2, rp2350, pico ethernet, w5500]
description: W5500-EVB-Pico2 made for prototyping and testing Ethernet capabilities on Pico
---

## Overview

W5500-EVB-Pico2 is a microcontroller evaluation board based on the Raspberry Pi RP2350 and the fully hardwired TCP/IP controller W5500 enhancing the capabilities of the traditional Raspberry Pi Pico2 board with additional Ethernet functionality via W5500.

- Enhanced Raspberry Pi Pico2 Clone
- Ethernet (W5500 Hardwired TCP/IP CHIP)
- [AWS IoT Core Qualified](https://partners.amazonaws.com/devices/a3Gaq00000009GDEAY/W5500-EVB-Pico2)

<!-- - [AWS IoT Core Qualified](https://devices.amazonaws.com/detail/a3G8a00000311tuEAA/W5500-EVB-Pico)
- [Microsoft Azure Device Certified](https://devicecatalog.azure.com/devices/b278ce42-dde1-46b7-919e-4ae3a5266a3c) -->

![W5500-EVB-PICO2](/img/products/w5500-evb-pico2/w5500-evb-pico2-docs.png)

![Powered By Raspberry Pi logo](/img/pbp-logo-small.jpg)

## Revision History

| Date | Version | Description |
| ---- | ------- | ----------- |
| Jul 2024 | 1.0 | Initial board release |

## Features

- **RP2350 Microcontroller with Integrated 16Mbit Flash**
  - Symmetric dual Arm Cortex-M33 cores at up to 150MHz
  - 520kByte multi-bank high performance SRAM
  - External Quad-SPI Flash with eXecute In Place (XIP) capabilities
  - Enhanced performance full-crossbar bus fabric
  - Up to 48 multi-function General Purpose IO (8 can be used for ADC on RP2350-B)
    - 1.8-5.0V IO Voltage

- **Security Features**
  - **One Time Programmable (OTP) Memory:** For secure boot configuration and key storage.
  - **Secure Boot:** Ensures that only authenticated software can run on the device, utilizing OTP for key verification.
  - **Arm TrustZone Technology:** Provides hardware isolation between secure and non-secure software.

- **W5500 Ethernet Controller**
  - Supports Hardwired Internet Protocols: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
  - Supports 8 Independent Hardware SOCKETs simultaneously
  - Internal 32 Kbytes Memory for TX/ RX Buffers
  - Supports High Speed Serial Peripheral Interface (SPI MODE 0, 3)

- **Analog and Digital Peripherals**
  - 12-bit 500ksps Analogue to Digital Converter (ADC)
  - Advanced digital peripherals including:
    - 2 × UART, 2 × I2C, 2 × SPI, 16 × PWM channels
    - 1 × Timer with 4 alarms, 1 × Real Time Counter
  - 3 × Programmable IO (PIO) blocks, 12 state machines total
  - Flexible, user-programmable high-speed IO
  - Can emulate interfaces such as SD Card and VGA  

- **Connectivity**
  - C-Type USB port for power and data (and for reprogramming the Flash)
  - 40 pin 21x51 'DIP' style 1mm thick PCB with 0.1" through-hole pins also with edge castellations
  - 3-pin ARM Serial Wire Debug (SWD) port

- **Networking**
  - 10 / 100 Ethernet PHY embedded
  - Supports Auto Negotiation
    - Full / Half Duplex
    - 10 / 100 Based
  - Built-in RJ45

- **Power Supply**
  - Built-in Switch-mode DC-DC converter (replacing LDO for enhanced power efficiency)

## Hardware Specification

### Pin-out

![W5500-EVB-Pico2](/img/products/w5500-evb-pico2/w5500-evb-pico2-pinout.png)

W5500-EVB-Pico2 pinout is directly connected to the GPIO of RP2350 as shown in the picture above. It has the same pinout as the Raspberry Pi Pico2 board. However, GPIO16, GPIO17, GPIO18, GPIO19, GPIO20, GPIO21 are connected to W5500 inside the board. These pins enable SPI communication with W5500 to use Ethernet function. If you are using the Ethernet function, these pins cannot be used for any other purpose.

The RP2350 GPIO used inside W5500-EVB-Pico is as follows.

| I/O  | Pin Name | Description                                    |
| :--: | -------- | ---------------------------------------------- |
|  I   | GPIO16   | Connected to MISO on W5500                    |
|  O   | GPIO17   | Connected to CSn on W5500                     |
|  O   | GPIO18   | Connected to SCLK on W5500                    |
|  O   | GPIO19   | Connected to MOSI on W5500                    |
|  O   | GPIO20   | Connected to RSTn on W5500                    |
|  I   | GPIO21   | Connected to INTn on W5500                    |
|  I   | GPIO24   | VBUS sense - high if VBUS is present, else low |
|  O   | GPIO25   | Connected to user LED                          |
|  I   | GPIO29   | Used in ADC mode (ADC3) to measure VSYS/3      |

Apart from GPIO and ground pins, there are 7 other pins on the main 40-pin interface:

| Pin No. | Pin Name | Description                                                  |
| ------- | -------- | ------------------------------------------------------------ |
| PIN40   | VBUS     | Micro-USB input voltage, connected to micro-USB port pin 1. Nominally 5V. |
| PIN39   | VSYS     | Main system input voltage, which can vary in the allowed range 4.3V to 5.5V, and is used by the on-board LDO to generate the 3.3V . |
| PIN37   | 3V3_EN   | Connects to the on-board LDO enable pin. To disable the 3.3V (which also de-powers the RP2350 and W5500), short this pin low. |
| PIN36   | 3V3      | Main 3.3V supply to RP2350  and W5500, generated by the on-board LDO. |
| PIN35   | ADC_VREF | ADC power supply (and reference) voltage, and is generated on W5500-EVB-Pico by filtering the 3.3V supply. |
| PIN33   | AGND     | Ground reference for GPIO26-29.                              |
| PIN30   | RUN      | RP2350 enable pin, To reset RP2350, short this pin low.      |

### Operation Condition

| Item                      | Description                  |
| ------------------------- | ---------------------------- |
| Operation Temperature MAX | 85C (including self-heating) |
| Operation Temperature MIN | -20C                         |
| VBUS                      | DC 5V (+/- 10%)              |
| VSYS Min                  | DC 4.3V                      |
| VSYS Max                  | DC 5.5V                      |

Recommended maximum ambient temperature of operation is 70C.

## Technical Reference

### RP2350 Datasheet

- [Download](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf)


### W5500 Datasheet

- [W5500 overview](Overview.md)

### Schematic

![SCH-W5500-EVB-PICO2-V100](/img/products/w5500-evb-pico2/sch-w5500-evb-pico2-v100.png)

### Schematic & Part list & Gerber File

- [Go to Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5500/W5500-EVB-Pico2_V100)

### Dimension (Unit : mm)

![Dimension-W5500-EVB-Pico2](/img/products/w5500-evb-pico2/dimension-w5500-evb-pico2.png)

### Firmware Example

Please refer to below links to find firmware example.

- C/C++
  - [Ethernet Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)
  - [AWS Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AWS-C)
  - [Azure Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AZURE-C)
  - [LwIP Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-LWIP-C)
  
  <!-- - [FreeRTOS Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-FREERTOS-C) -->
  
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
  
### Certification

#### CE

- <a href="/img/products/w5500-evb-pico2/Certificate-CE-W5500-EVB-Pico2.pdf" target="_blank">CE Certificate</a>
- <a href="/img/products/w5500-evb-pico2/Test-Report-CE-W5500-EVB-Pico2.pdf" target="_blank">CE Test Report</a>

| Date    | Decription |
| ------- | ---------- |
| OCT2023 | \-         |

#### FCC

- <a href="/img/products/w5500-evb-pico2/Certificate-FCC-W5500-EVB-Pico2.pdf" target="_blank">FCC Certificate</a>
- <a href="/img/products/w5500-evb-pico2/Test-Report-FCC-W5500-EVB-Pico2.pdf" target="_blank">FCC Test Report</a>

| Date    | Decription |
| ------- | ---------- |
| OCT2023 | \-         |

### AWS Qualification

W55RP20-EVB-Pico is RP2040-based device that got AWS IoT Core Qualification.

![](/img/products/w5500-evb-pico2/aws_qualified_device_badge.png)

- [AWS Partner Device Catalog](https://partners.amazonaws.com/devices/a3Gaq00000009GDEAY/W5500-EVB-Pico2)
- <a href="https://github.com/WIZnet-ioNIC/WIZnet-PICO-AWS-C?tab=readme-ov-file#getting-started-guide-for-aws-iot-core" target="_blank">Getting Started Guide for AWS IoT Core</a>

### Microsoft Azure Certification

<!-- W5500-EVB-Pico is RP2040-based device certified to run with Microsoft Azure.

![](/img/osh/w5100s_evb_pico/Azure-Certified-Device-Badge_RGB.png)

- [Azure Certified Device Catalog](https://devicecatalog.azure.com/devices/b278ce42-dde1-46b7-919e-4ae3a5266a3c)
- <a href="/img/products/w5500-evb-pico/w5500-evb-pico-getting-started-guide-for-azure-iot-v1-0-1.pdf" target="_blank">Getting Started for Azure IoT</a> -->

## How to buy

[![WIZnetUS Online Shop, USA](/img/products/w5500-evb-pico/icons/dollar.png)](https://eshop.wiznet.io/shop/module/w5500-evb-pico2/)
[![WIZnetKorea Online Shop, Korea](/img/products/w5500-evb-pico/icons/won.png)](https://wiznetshop.io/product/detail.html?product_no=1096&cate_no=55&display_group=1)
