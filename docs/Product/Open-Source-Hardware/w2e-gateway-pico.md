---
id: w2e-gateway-pico
title: W2E-Gateway-Pico (Preliminary)
date: 2022-02-18
---

## Overview

W2E-Gateway-Pico is an evaluation board based on Raspberry Pi RP2040; it supports both wired and wireless connection by using WizFi360 and W5100S - with the ability to connect to the Cloud easily through wired or wireless and can be used for prototyping IoT solutions.

- Raspberry Pi Pico Clone
- Wi-Fi (WizFi360)
- Ethernet (W5100S)

![](/img/osh/w2e-gateway-pico/w2e-gateway-pico-blockdiagram.png)

## Features

- RP2040 microcontroller with 2MByte Flash
    - Dual-core cortex M0+ at up to 133MHz
    - 264kByte multi-bank high performance SRAM
    - External Quad-SPI Flash with eXecute In Place (XIP)
- Includes WizFi360-PA
    - WiFi 2.4G, 802.11 b/g/n
    - Support Station / SoftAP / SoftAP+Station operation modes
    - Support “Data pass-through” and “AT command data transfer” mode
    - Support serial AT command configuration
    - Industrial grade (operating temperature range: -40 ° C ~ 85 ° C)
    - CE, FCC certification`
- Includes W5100S
    - Supports Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE
    - Supports 4 Independent Hardware SOCKETs simultaneously
    - Internal 16 Kbytes Memory for TX/ RX Buffers
    - SPI Interface
- Includes 16M-bit Flash Memory
- Micro-USB B port for power and data (and for reprogramming the Flash)
- 3-pin ARM Serial Wire Debug (SWD) port
- 10 / 100 Ethernet PHY embedded
- Supports Auto Negotiation
    - Full / Half Duplex
    - 10 / 100 Based
- Built-in RJ45
- Built-in LDO
