---
id: wiznet-pico-poe
title: WIZnet Pico PoE
date: 2023-03-09
keywords:
  - Raspberry Pi Pico
  - RP2040
  - Ethernet
  - W5100S
  - W5500
  - W6100
  - PoE
description: WIZnet Pico PoE made for prototyping and testing Ethernet capabilities on Pico
---

## Overview

It combines with the W5500, W5100S, and W6100 Io Module to provide Ethernet as well as a separate power supply. It can supply up to 6.6 W 

- Raspberry Pi Pico Mountable
- Ethernet W5100S, W5500, W6100 IO Module Mountable


<a target="_blank" href={require('/img/osh/WIZnet_Pico_PoE/WIZnet-Pico_PoE-3.png').default}><img src={require('/img/osh/WIZnet_Pico_PoE/WIZnet-Pico_PoE-3.png').default} alt="WIZnet Pico PoE"/></a>


## Features

- RP2040 microcontroller with 2MByte Flash
  - Dual-core cortex M0+ at up to 133MHz
  - 264kByte multi-bank high performance SRAM
  - External Quad-SPI Flash with eXecute In Place (XIP)
  - High performance full-crossbar bus fabric  
  - 30 multi-function General Purpose IO (4 can be used for ADC)
    - 1.8-3.3V IO Voltage (NOTE. Pico IO voltage is fixed at 3.3V)
  - 12-bit 500ksps Analogue to Digital Converter (ADC)
  - Various digital peripherals
    - 2 × UART, 2 × I2C, 2 × SPI, 16 × PWM channels
    - 1 × Timer with 4 alarms, 1 × Real Time Counter
  - 2 × Programmable IO (PIO) blocks, 8 state machines total
  - Flexible, user-programmable high-speed IO
  - Can emulate interfaces such as SD Card and VGA  
- W5100S-IO
  - Supports Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE
  - Supports 4 Independent Hardware SOCKETs simultaneously
  - Internal 16 Kbytes Memory for TX/ RX Buffers
  - SPI Interface
- W5500-IO
  - Supports Hardwired Internet Protocols: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
  - Supports 8 Independent Hardware SOCKETs simultaneously
  - Internal 32 Kbytes Memory for TX/ RX Buffers
  - Supports High Speed Serial Peripheral Interface(SPI MODE 0, 3)
- W6100-IO
  - Supports Hardwired Internet Protocols: TCP, UDP, IPv6, IPv4, ICMPv6, ICMPv4, IGMP, MLDv1, ARP, PPPoE
  - Supports 8 independent SOCKETs simultaneously with 32KB memory
  - Internal 16 Kbytes Memory for TX/ RX Buffers
  - SPI Interface
- 3-pin ARM Serial Wire Debug (SWD) port
- 10 / 100 Ethernet PHY embedded
- Supports Auto Negotiation
  - Full / Half Duplex
  - 10 / 100 Based
- Built-in RJ45(RJC-191R)
- Built-in LDO (LM8805SF5-33V)

## Hardware Specification

<a target="_blank" href={require('/img/osh/WIZnet_Pico_PoE/WIznet-Pico-PoE-1.png').default}><img src={require('/img/osh/WIZnet_Pico_PoE/WIznet-Pico-PoE-1.png').default} alt="WIZnet Pico PoE"/></a>

<a target="_blank" href={require('/img/osh/WIZnet_Pico_PoE/WIZnet-Pico_PoE-2.png').default}><img src={require('/img/osh/WIZnet_Pico_PoE/WIZnet-Pico_PoE-2.png').default} alt="WIZnet Pico PoE"/></a>

### J1 Power Output Header

| Pin No. | Pin Name | Description                                                                      |
| ------- | -------- | -------------------------------------------------------------------------------- |
| 1       | +5V      | Main +5V power output pin. Up to 6.6W, 1.32A                                     |
| 2       | +3.3V    | +3.3V voltage dropped out of +5V to the internal LDO. It can output up to 1.98W. |
| 3       | GND      | Ground |

#### J7 SWD Header
3-pin ARM Serial Wire Debug (SWD) port

| Pin No. | Pin Name | 
| ------- | -------- | 
| 1       | SWDIO    | 
| 2       | GND      | 
| 3       | SWCLK    | 

### Operation Condition

| Item                         | Description                  |
| ---------------------------- | ---------------------------- |
| Operation Temperature MAX    | 85C (including self-heating) |
| Operation Temperature MIN    | -20C                         |
| +5V                          | DC 5V (+/- 10%)              |
| +3.3V                        | DC 3.3V                      |
| Power Max                    | 6.6W                         |
| +3.3V Output Max (LDO Output)| 1.98W                        |

Recommended maximum ambient temperature of operation is 70C.

<!--
## Electrical Specification

### Power Consumption

TBA
-->

## Technical Reference

### RP2040 Datasheet



### W5100S Datasheet



### Schematic



### Schematic & Part list & Gerber File



### Dimension (Unit : mm)

<a target="_blank" href={require('/img/osh/WIZnet_Pico_PoE/Dimention.png').default}><img src={require('/img/osh/WIZnet_Pico_PoE/Dimention.png').default} alt="Dimention"/></a>



