---
id: wizfi310_shield
title: WizFi310 Shield
date: 2020-04-03
---

![WizFi310 Shield](/img/osh/wizfi310_shield/wizfi310_shield_1.png)

## Overview

This document describes the contents of WizFi310 Shield. WizFi310 Shield
is a Shield with built-in WizFi310 WiFi module of WIZnet.

Because WizFi310 Shield is Pin Compatible with Arduino, it can be used
in Arduino, and it can be used in Arduino Pin Compatible development
platform. It is also used on the WIZWiki Platform.

In addition, an temprature/humidity sensor and an CDS sensor are built
in.

-----

## Features

### WizFi310

  - Single band 2.4GHz IEEE 802.11b/g/n
  - 72.2Mbps receive PHY rate and 72.2Mbps transmit PHY rate using 20MHz
    bandwidth
  - 150Mbps receive PHY rate and 150Mbps transmit PHY rate using 40MHz
    bandwidth
  - Low power consumption & excellent power management performance
    extend battery life.
  - Easy for integration into mobile and handheld device with flexible
    system configuration.
  - Serial Interface : UART
  - UART Max Baud : 921600 bps
  - Soft AP
      - Enough memory retention
      - Wi-Fi Security (WEP, WPA/WPA2PSK)
      - L2 Switching 
  - OTA(Over The Air F/W Upgrading)

### ETC

  - Built-in UART to USB chip
      - CP2104-GM
      - Micro USB B Type Connector
  - UART Selector
      - J1, J2, J3
      - 2.54mm Pin Header
  - Built-in Sensors
      - Temprature/Humidity sensor : DHT11
      - CDS Sensor : GL5537
  - Built-in Tact Switchs
      - System Reset Switch: SW2
      - WiFi Reset Switch: SW3
      - WiFi Function Switch: SW4
  - Built-in LED Indicators
      - D13 LED
      - WizFi310 MODE/WiFi LED
      - WizFi310 RXD/TXD LED
  - Built-in Level Shifters
      - The voltage of the RXD/TXD signal changes according to the main
        board platform voltage.
  - Built-in DIP Switchs
      - UART RXD/TXD Selector : SW1
      - Digital/Analog PIN Selector : SW5
      - UART RTS/CTS Selector : SW6

## WizFi310 Shield Callout & Pinmap

![WizFi310 Shield Pinmap](/img/osh/wizfi310_shield/wizfi310_shield_pinmap.png)

-----

## H/W Configurations

### DIP Switch Configurations

#### SW1 - RXD/TXD Selector DIP Switch

  - **ON** : RXD/TXD of WizFi310 connect to USB
      - It is possible to communicate with WizFi310 using USB.
  - **OFF** : RXD/TXD of WizFi310 connect to J1 and J3
      - UART Pin Header, Arduino PIN
      - If the jumper cap is not attached to the UART pin header, it
        will not be connected to the arduino pin.



    Pin 1 : RXD
    Pin 2 : TXD

#### SW6 - RTS/CTS Selector DIP Switch

  - **ON** : RTS/CTS of WizFi310 connect to D6 and D7
  - **OFF** : RTS/CTS of WizFi310 not connect to anywhere
  - **If the state of SW5 is ON, D6 and D7 of UART jumper can not be
    used.**



    Pin 1 : RTS - D6
    Pin 2 : CTS - D7

#### SW5 - Aruduino Pin Selector DIP Switch

  - **ON** : Connect to Arduino Pin
  - **OFF** : Not connect to anywhere



    Pin 1 : A0 - CDS
    Pin 2 : D14 - DHT11
    Pin 3 : D9 - WizFi310 Reset Pin

#### UART Selector Jumper

  - **It can be used when SW2 is OFF.**
  - You have to specify the desired Arduino pin, use Jumper Cap to
    connect J1 to J2, and J3 to J2.
      - Default : J1(RXD) - D1, J3(TXD) - D0
  - **If the state of SW5 is ON, D6 and D7 of UART jumper can not be
    used.**



    J1 : RXD
    J2 : D0 ~ D8
    J3 : TXD

-----

### Getting Started

-----

### Technical Refernce

#### Datasheet

  - [WizFi310 Datasheet](../../Product/Wi-Fi-Module/WizFi310/datasheet)

#### Schematic

  - <a href="/img/osh/wizfi310_shield/wizfi310_shield_sch_v100.zip" target="_blank">WizFi310 Shield Schematic(Altium)</a>
  - <a href="/img/osh/wizfi310_shield/wizfi310_shield_sch_v100.pdf" target="_blank">WizFi310 Shield Schematic(PDF)</a>

#### Partlist

  - <a href="/img/osh/wizfi310_shield/wizfi310_shield_pl_v100_170329.pdf" target="_blank">WizFi310 Shield Partlist</a>

-----

### ETC

#### Serial Port Driver

  - 🌎[CP210x USB to UART Bridge VCP Drivers](http://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

#### Sensor Datasheets

  - 🌎<a href="http://www.micropik.com/PDF/dht11.pdf" target="_blank">DHT11 Humidity & Temperature Sensor Datasheet</a>
  - 🌎<a href="https://www.kth.se/social/files/54ef17dbf27654753f437c56/GL5537.pdf" target="_blank">GL5537 Datasheet</a>

-----