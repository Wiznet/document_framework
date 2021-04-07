---
id: w5500_ethernet_shield_kor
title: W5500 Ethernet Shield (KOR)
date: 2020-04-03
---

## Overview

  - **ARM mbed compatible** operation
  - **Arduino Pin-compatible**
  - Ethernet (W5500 Hardwired TCP/IP chip)

![](/img/osh/w5500_ethernet_shield/w5500_main_picture2.png)

W5500 Ethernet shield는 W5500 기반으로 제작되었습니다. W5500에 대한 자세한 정보는 링크를 확인해주세요.
W5500 Ethernet shield는 3.3V & 5V 로 동작합니다. 이 Ethernet Shield는 Arduino
Platform과 ARM mbed Platform에 호환되어 사용됩니다.

## Available Board List

  - ARM mbed Board
      - [ARM mbed Platform](http://developer.mbed.org/platforms/) : ARM
        mbed platform Site
      - [FRDM-KL25Z](http://developer.mbed.org/platforms/KL25Z/) :
        Freescale
      - [NXP
        LPC800-MAX](http://developer.mbed.org/platforms/NXP-LPC800-MAX/)
        : NXP
  - Arduino Board
      - [Arduino board (e.g. the Uno, Mega,
        Due)](http://www.arduino.cc/en/Main/Products)
      - [Arduino
        Leonardo](http://arduino.cc/en/Main/ArduinoBoardLeonardo)
  - Arduino-compatible Board
      - [Seeeduino v3.0](http://www.seeedstudio.com/wiki/Seeeduino_v3.0)
        : Based on [Arduino
        Duemilanove](http://arduino.cc/en/Main/ArduinoBoardDuemilanove)

-----

## Getting Started

  - W5500 Ethernet Shield를 사용하기 위해 Arduino IDE (Sketch Program)에 포함된
    WIZnet Ethernet Library의 Update가 필요하다. (**필수**)
  - 아래 링크를 참조하기 바란다.
      - Follow this URL: [Getting
        Started\_kor](getting_started_arduino_kr)

-----

## Language

  - [Eng.Ver](w5500_ethernet_shield)
  - [Jp.Ver](w5500_ethernet_shield_jp)

-----

## Features

  - Suppport 3.3V / 5V DC 
  - High Speed Ethernet controller W5500 chip
  - User Select GPIO pin
  - SPI interface
  - Internal 32Kbytes Tx/Rx buffer
  - 10/100 Ethernet PHY embedded
  - Support Auto Negotiation (Full / Half duplex, 10 / 100-based)
  - Hardware TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
  - Support SD-card slot for storgae
  - Support I2C, UART interface

## Hardware Configuration

  - RJ-45 with Transformer : Ethernet Port
  - W5500 : a hardware TCP/IP Ethernet Controller
  - RESET : Reset Ethernet shield and Arduino when pressed
  - SD-Slot : support Micro SD card in FAT16 or FAT32 ; (Please Read the
    Caution)
  - I2C : interface
  - UART : interface

## Pins usage on Arduino & ARM mbed

![](/img/osh/w5500_ethernet_shield/gpio_select.png)

W5500 Ethernet shield is Possible to User Select GPIO

  - 사용자가 Chip Select 변경하여 다른 Module 사용 가능
  - 다른 보드와 중첩하여 사용 가능

**Caution)** 사용자가 5V Platform을 사용할 때, SD-CARD동작의 낮은 신뢰성이 요구된다. 하지만, 충분한
테스트를 통해 사용해도 무방하다. 신뢰성 있는 동작을 원한다면 buffer와 100nF Capacitor를 실장하여
사용바란다.

-----

## SPI Operation & Timing Diagram

**SPI Operation**

W5500 Ethernet shield는 W5500 기반으로 제작되었습니다. 그러므로 SPI 동작 & 타이밍 등은 W5500
Datasheet를 확인해주세요. 더 많은 정보를 원하시면[W5500](../iEthernet/W5500/overview)과
Datasheet 확인해주세요.

  - <a href="/img/products/w5500/w5500_ds_v106e_141230.pdf" target="_blank">W5500 Datasheet v1.0.6 - English</a>
  - <a href="/img/products/w5500/w5500_ds_v106k_141230.pdf" target="_blank">W5500 Datasheet v1.0.6 - Korean</a>

\---

## Technical Reference

**Block Diagram**

  - Not buffer

![](/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_blockdiagram.gif)

  - Using buffer

![](/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_blockdiagram_buffer.jpg)

**Schematic**

  - <a href="/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch_zip.zip" target="_blank">W5500 Ethernet shield Rev1.0 Schematic(Eagle CAD) with PCB file</a>
  - <a href="/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch.pdf" target="_blank">W5500 Ethernet shield Rev1.0 Schematic(PDF)</a>

**Part list**

  - [W5500 Ethernet shield Rev1.0 Part list](/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v1.0_pl_150414.xlsx)

**Dimension**

  - W5500 Ethernet shield Rev1.0 Dimension

![](/img/osh/w5500_ethernet_shield/w5500_shield_dimension.png)

-----

## Etc.

**Ethernet shield Library 추가하기**

  - [Ethernet Library for ioShield-A](ethernet_library_for_ioShield_A)

**Arduino 예제**

  - [Twitter test](twitter_test)

**Ethernet Library**

  - <https://github.com/Wiznet/WIZ_Ethernet_Library>

-----

## See Also

![](/img/products/w5500/w5500_evb/icons/link.png) [WizWiki
Forum](https://forum.wiznet.io/) : WIZnet Forum for Technical
support and Project shared

[Ethernet Library for ioShield-A](ethernet_library_for_ioShield_A) : WIZnet
WIZ550io Technical support

<!--<http://wizwiki.net/jp> : WIZnet Japanese Blog-->

![](/img/products/w5500/w5500_evb/icons/download.png) Product brief: will be
added

-----

## Where to Buy

![WIZnet Online Shop](/img/products/w5500/buynow.png)  
[![WIZnetUS Online Shop,
USA](/img/products/w5500/w5500_evb/icons/dollar.png)](http://www.shopwiznet.com/)
[![WIZnetEU Online Shop,
Germany](/img/products/w5500/w5500_evb/icons/european-euro.png)](http://shop.wiznet.eu/)
[![WIZnetKorea Online Shop,
Korea](/img/products/w5500/w5500_evb/icons/won.png)](http://shop.wiznet.co.kr/)

-----