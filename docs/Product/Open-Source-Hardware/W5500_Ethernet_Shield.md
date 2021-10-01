---
id: w5500_ethernet_shield
title: W5500 Ethernet Shield
date: 2020-04-03
---

## Overview

  - **ARM mbed compatible** operation
  - **Arduino Pin-compatible**
  - Ethernet (W5500 Hardwired TCP/IP chip)

W5500 Ethernet shield is designed using the WIZnet W5500 chip. Please
click the link for the further information about
[W5500](../iEthernet/W5500/overview). It supports both 3.3V & 5V. This
Ethernet Shield is compatible with Arduino and ARM mbed Platform.

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/w5500_main_picture2.png").default}><img src={require("/img/osh/w5500_ethernet_shield/w5500_main_picture2.png").default} alt=""/></a>

## Available Board List

  - ARM mbed Board
      - 🌎[ARM mbed Platform](http://developer.mbed.org/platforms/) : ARM
        mbed platform Site
      - 🌎[FRDM-KL25Z](http://developer.mbed.org/platforms/KL25Z/) :
        Freescale
      - 🌎[NXP LPC800-MAX](http://developer.mbed.org/platforms/NXP-LPC800-MAX/)
        : NXP
  - Arduino Board
      - 🌎[Arduino board (e.g. the Uno, Mega, Due)](http://www.arduino.cc/en/Main/Products)
      - 🌎[Arduino Leonardo](http://arduino.cc/en/Main/ArduinoBoardLeonardo)
  - Arduino-compatible Board
      - 🌎[Seeeduino v3.0](http://www.seeedstudio.com/wiki/Seeeduino_v3.0)
        : Based on 🌎[Arduino Duemilanove](http://arduino.cc/en/Main/ArduinoBoardDuemilanove)

-----

## Getting Started

  - You need to update Arduino IDE to use W5500 Ethernet
    shield(**Required**)
  - Check the below.
      - 🌎[Getting Started](getting_started_arduino)

-----
## Language

  - [Korean Ver](w5500_ethernet_shield_kor)
  - [Japanese Ver](w5500_ethernet_shield_jp)

-----

## Features

  - Support 3.3V / 5V
  - High Speed Ethernet controller W5500 chip
  - SPI interface
  - Internal 32Kbytes Tx/Rx buffer
  - 10/100 Ethernet PHY embedded
  - Support Auto Negotiation (Full / Half duplex, 10 / 100-based)
  - Hardwired TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
  - User Selectable GPIO pin
  - Support SD-card slot for storage
  - Support I2C, UART interface

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/w5500_ethernet_pin2.png").default}><img src={require("/img/osh/w5500_ethernet_shield/w5500_ethernet_pin2.png").default} alt=""/></a>

## Hardware Configuration

  - RJ-45 with Transformer : Ethernet Port
  - W5500 : a Hardwired TCP/IP Ethernet Controller
  - RESET : Reset Ethernet shield and Arduino when pressed
  - SD-Slot : support Micro SD card in FAT16 or FAT32 ; (Please read
    'Caution' below)
  - I2C : I2C interface
  - UART : UART interface

## Pins usage on Arduino & ARM mbed

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/gpio_select_intn.png").default}><img src={require("/img/osh/w5500_ethernet_shield/gpio_select_intn.png").default} alt=""/></a>

W5500 Ethernet shield has several configurable GPIOs

  - When you operate it with other modules, you may need to change 'Chip
    Select' pin to a different one.
  - W5500 INTn pin is linked to D2 (2,3 Short). So, if you need INTn
    pin. You soldering to 0R Resistor to Dx pin

**Caution)** When the user uses 5V Platform, we cannot confirm a stable
operation of SD-CARD. Therefore, though 5V Platform is safe to use after
going through enough tests, it is highly recommended to mount buffer &
100nF Capacitor for a secure operation.

-----
## SPI Operation & Timing Diagram

**SPI Operation**

There is a W5500 inside W5500 Ethernet shield. Therefore SPI operation &
Timing Diagram of Ethernet shield follows one of W5500. For more
information about [W5500](../iEthernet/W5500/overview) chip please also refer
to the chip's datasheet:

  - <a href="/img/osh/w5500_ethernet_shield/limitation_note_-_arp_problem_in_the_nlb_environment_-_korean_0312_.pdf" target="_blank">W5500 Datasheet v1.0.6 - English</a>
  - <a href="/img/osh/w5500_ethernet_shield/w5500_ds_v106k_141230.pdf" target="_blank">W5500 Datasheet v1.0.6 - Korean</a>

-----

## Technical Reference

**Block Diagram**

  - Not buffer

![](/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_blockdiagram.gif)

  - Using buffer

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_blockdiagram_buffer.jpg").default}><img src={require("/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_blockdiagram_buffer.jpg").default} alt=""/></a>

**Rev 1.0 Schematic**

  - <a href="/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch_zip.zip" target="_blank">W5500 Ethernet shield Rev1.0 Schematic(Eagle CAD with PCB file)</a>
  - <a href="/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch.pdf" target="_blank">W5500 Ethernet shield Rev1.0 Schematic(PDF)</a>

**Rev 1.1 Schematic**

  - <a href="/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v1.1.zip" target="_blank">W5500 Ethernet shield Rev1.1 Schematic(Eagle CAD with PCB file</a>
  - <a href="/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch.pdf" target="_blank">W5500 Ethernet shield Rev1.1 Schematic(PDF)</a>

-----

**Rev 1.01\_Customize Schematic**

  - **Do you want to develop new this product? Please look at the Rev
    1.01_Customize circuit**
  - Rev 1.01 removed the buffer ICs from Rev 1.0 circuit
  - Because, Buffer IC was limited delay speed.
  - Arduino compatible INT(R25) remove



  - <a href="/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v1.01.pdf" target="_blank">W5500 Ethernet shield Rev1.01 Schematic</a>

-----

**Part list**

  - [W5500 Ethernet shield Rev1.0 Part list](/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v1.0_pl_150414.xlsx)

**Dimension**

  - **The board size of the W5500 Ethernet shield Rev1.1 is the same as
    Rev1.0.**
  - W5500 Ethernet shield Rev1.0/1.1 Dimension

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_dimension.png").default}><img src={require("/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_dimension.png").default} alt=""/></a>

-----
## Etc.

  - 🌎**[Ethernet Library for ioShield-A](ethernet_library_for_ioShield_A)**

**Examples**

  - 🌎[Twitter test](twitter_test)

**Ethernet Library**

  - 🌎<https://github.com/Wiznet/WIZ_Ethernet_Library>

-----