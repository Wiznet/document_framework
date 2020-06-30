---
id: ioshield_a
title: ioShield-A
date: 2020-04-03
---

## Overview

![](/img/osh/ioshield-a/io_s_a.png) ioShield-A allows an Arduino board to
connect to the Internet.

It is based on the [WIZ550io network module](../ioModule/WIZ550io/overview)
which uses [WIZnet W5500 ethernet chip(W5500
Datasheet)](../iEthernet/W5500/datasheet). The WIZnet W5500 provides a
network (TCP/IP) stack capable of both TCP and UDP. It supports up to
eight simultaneous socket connections. And, when Powered on and nRESET
triggered, WIZ550io initializes itself with embedded real MAC and
default IP address and can be pinged from user’s computer.

As ioShield uses W5500 chipset, instead of W5100 which was used before
in the Arduino Ethernet Shield, users needs to use [WIZnet Ethernet
Library]().

## Available Board List

  - Arduino Board
      - 🌎[Arduino board (e.g. the
        Uno)](http://arduino.cc/en/Main/ArduinoBoardUno)
      - 🌎[Arduino
        Leonardo](http://arduino.cc/en/Main/ArduinoBoardLeonardo)
  - Arduino-compatible Board
      - 🌎[Seeeduino v3.0](http://www.seeedstudio.com/wiki/Seeeduino_v3.0)
        : Based on 🌎[Arduino
        Duemilanove](http://arduino.cc/en/Main/ArduinoBoardDuemilanove)

-----
>
 Although you have non-AVR
Arduino-compatible board, you could use ioShield Hardware. But you
should use adequate S/W libraries for each chipsets. please refer to
each product's web site.

  - Cookie Board : Based on ARM Cortex-M3/M0
    🌎<http://www.coocox.org/Cookie.html>
  - GR-Sakura Board : Based on Renesas 32-bit RX63N
    🌎<http://www.renesas.com/products/promotion/gr/index.jsp#board>
  - Chipkit : Based on Microchip PIC series 🌎<http://chipkit.net/>

>

## Available Resource

All design files and source codes for the ioShield can be found on
GitHub:

  - Hardware Ver1.0: schematic([PDF file](/img/osh/ioshield-a/ioshield-a.pdf)), schematic & PCB file([Eagle CAD](/img/osh/ioshield-a/ioshield-a_eaglecad.zip)), Part List([PDF file](/img/osh/ioshield-a/ioshield-a_v1_0_pl_130904.pdf))
  - Hardware Ver1.1: schematic([PDF file](/img/osh/ioshield-a/ioshield-a_v1.1_sch.pdf)), schematic & PCB file([Eagle CAD](/img/osh/ioshield-a/ver1_1.zip)), Part List([PDF file](/img/osh/ioshield-a/ioshield-a_v1_1_pl_140120.pdf))
  - Ethernet Library : 🌎<https://github.com/Wiznet/WIZ_Ethernet_Library>
