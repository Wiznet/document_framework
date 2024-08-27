---
id: overview
title: Overview
date: 2023-03-21
---



# W55RP20

<p align="center">
  <img src="/img/products/w55rp20/W55RP20_Chip_Coming_Soon.png" />
</p>

<!-- ![](/img/products/w55rp20/W55RP20_Chip.jpg) -->

:::note

Experience optimized networking with our upcoming W55RP20 chip, integrating serial interfaces and Ethernet for enhanced performance and security.
:::

----

## Overview

- Our latest ioNIC integrates serial interfaces with Ethernet connectivity, offering tailor-made networking solutions for you. Experience optimized performance for industry-specific applications with support for various network protocols, enhanced SSL security features and cloud SDKs! 

![](/img/products/w55rp20/w55rp20_overview.png)

----

The W55RP20 chip is a System-in-Package (SiP) solution that integrates WIZnet's W5500 Ethernet controller with the RP2040 microcontroller from Raspberry Pi, providing networking and processing capabilities for IoT devices and smart applications. The W5500 supports a hardware TCP/IP stack, simplifying network connectivity and communication management, and offers an efficient solution without the need for external memory. The RP2040 features a dual-core ARM Cortex-M0+ processor, enabling fast data processing and multitasking capabilities to handle multiple tasks simultaneously. 

This chip is designed to be compatible with various programming environments, supporting languages such as Python and C/C++, making it easier for developers to implement applications. Additionally, it supports various external interfaces and GPIO, ADC, UART, SPI, and I2C, facilitating connections with sensors, actuators, and other peripheral devices. 

![](/img/products/w55rp20/W55RP20_system_overview.png)

## Pin Map


<p align="center">
  <img src="/img/products/w55rp20/W55RP20_pinout_v2_1.png" />
</p>

## Features
* Dual ARM Cortex-M0+ @ 133MHz 
* Hardwired TCP/IP stack 
* 2MByte Flash memory on-chip 
* 264kB on-chip SRAM in six independent banks 
* DMA controller 
* Fully-connected AHB crossbar 
* Interpolator and integer divider peripherals 
* On-chip programmable LDO to generate core voltage 
* 2 on-chip PLLs to generate USB and core clocks 
* 23 GPIO pins, 4 of which can be used as analogue inputs 
* Peripherals 
    * 2 UARTs 
    * 2 SPI controllers 
    * 2 I2C controllers 
    * 16 PWM channels 
    * USB 1.1 controller and PHY, with host and device support 
    * 8 PIO state machines 
* Supported Network Protocols 
    * TCP  
    * UDP 
    * IPv4 
    * ICMP 
    * ARP 
    * IGMP 
    * PPPoE 


## Details
### Documents
- Datasheet
    - [W55RP20](https://docs.wiznet.io/Product/ioNIC/W55RP20/documents_md#data-sheet)
    - [RP2040](https://docs.wiznet.io/Product/ioNIC/W55RP20/documents_md#rp2040-data-sheet)
    - [W5500](https://docs.wiznet.io/Product/iEthernet/W5500/datasheet)

### Related EVB-Pico
- [Description of W55RP20-EVB-Pico](https://docs.wiznet.io/Product/ioNIC/W55RP20/w55rp20-evb-pico)
    - Features
    - Technical Reference
- Firmware Example
    - C/C++
        - [Ethernet Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)
        - [AWS Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AWS-C)
        - [Azure Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AZURE-C)
        - [LwIP Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-LWIP-C)
        - [FreeRTOS Examples](https://github.com/WIZnet-ioNIC/WIZnet-PICO-FREERTOS-C)
    - CircuitPython Examples (Update Coming Soon)
    - MicroPython Examples (Update Coming Soon)
