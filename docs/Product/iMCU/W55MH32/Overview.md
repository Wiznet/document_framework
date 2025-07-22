---
id: overview
title: Overview
date: 2025-07-11
---

# W55MH32



![image-20250512160719777](\img\products\W55MH32\new_W55MH32.png)

------

## Overview

The **W55MH32** is a high-performance 32-bit microcontroller that combines **Cortex-M3** processing power with **Hardwired TCP/IP** for efficient and secure IoT solutions. It operates at up to **216MHz**, featuring **1024KB Flash** and **96KB SRAM** for fast data handling. With an integrated **10/100M Ethernet MAC and PHY**, it supports **TCP, UDP, ICMP, IPv4, ARP, IGMP, and PPPoE** protocols, offering 8 independent sockets for simultaneous connections. This dedicated hardware networking stack ensures low latency and reduced CPU overhead, making it ideal for real-time applications. Security is a core focus, with **AES, DES, and SHA** hardware encryption, a **True Random Number Generator (TRNG)**, and **SRAM scrambling** to protect sensitive data through network communication.

Beyond networking, the W55MH32 offers a comprehensive set of peripherals for versatile embedded designs. It includes **3 high-speed 12-bit ADCs**, **2 DACs**, **17 timers**, and a **12-channel DMA controller** for precise control over time-sensitive tasks. Its flexible connectivity options include **I2C, SPI, UART, CAN, USB, and SDIO** interfaces, supporting a wide range of external devices. The W55MH32 is a powerful, secure, and highly adaptable choice for next-generation IoT and embedded systems.

### Block Diagram

![image-20250512161246974](\img\products\W55MH32\Block_Diagram.png)

## Pin Map

### W55MH32L

![W55MH32L Pin assignment](\img\products\W55MH32\W55MH32L_Pin_assignment.png)

### W55MH32Q

![W55MH32Q Pin assignment](\img\products\W55MH32\W55MH32Q_Pin_assignment.png)

## Features

- Core: 32-bit Arm® Cortex®-M3 Core  − Up to 216MHz operation  
- Hardwired TCP/IP stack
- 1024K bytes of Flash memory  
- 96K bytes of SRAM
- 12-channel DMA controller
- Hardware encryption algorithm unit 
- Generate sequence of true random  numbers
- 66 (W55MH32L) /  36 (W55MH32Q) GPIO pins
- Up to 12 different Peripherals
  - 5 (W55MH32L) / 3 (W55MH32Q) USARTs
  - 2 SPI controllers
  - 1 multiplexed I2S controllers
  - 2 I2C controllers
  - CAN interface
  - USB 2.0 full-speed controller
  - SDIO interface (only W55MH32L) 
- Supported Network Protocols
  - TCP
  - UDP
  - IPv4
  - ICMP
  - ARP
  - IGMP
  - PPPoE

## Details

### Documents

- [W55MH32 Datasheet](./Datasheet.md)
  - [W55MH32 Pin Assignments](./Pin-Assignment.md)
  - [W55MH32 Electrical Characteristics](./Electrical-Characteristics.md)
- [W55MH32 User Manual](./Datasheet.md)
- [W55MH32 Reference Schematic](./ref-schematic)

### Related EVB

- [W55MH32L EVB](./W55MH32L-evb)
- [W55MH32Q EVB](./W55MH32Q-evb)

### Reference Code

- [Keil installation and related package](./install_keil)
- Keil Example
  - Networking
    - [Ethernet Examples](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE)
    - [HTTP Examples](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/8.HTTP_Client)
    - [MQTT Examples](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/WZTOE/22.MQTT&Aliyun)
  - Peripherals
    - [GPIO Examples](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/GPIO)
    - [USART Examples](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/USART)
    - [SPI Examples](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/SPI)
    - [I2S Examples](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/IIS)
    - [I2C Examples](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/IIC)
    - [CAN Examples](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/CAN)
  - Security / Encryption
    - [TRNG Example](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/TRNG)
    - [Encrpytions Examples](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master/ModuleDemo/CRYPT)
  - [All Examples](./W55MH32_examples)

