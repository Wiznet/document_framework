---
id: overview
title: Overview
date: 2020-04-03
---


## Content

# W5100S

## Overview

![](/products/w5100s/w5100s_pm.png)

W5100S is an embedded Internet controller designed as a full hardwired
TCP/IP with WIZnet technology. W5100S provides internet connectivity to
your embedded system by using SPI (Serial Peripheral Interface) or
Parallel System BUS. SPI and Parallel System BUS provide easy connection
via external MCU to W5100S. The clock speed of W5100S SPI supports upto
70MHz and the Parallel System Bus supports higher speed network
communication than SPI.

Since W5100S integrates the Hardwired TCP/IP stack with 10/100 Ethernet
MAC and PHY, it is truly a one-chip solution for the stable internet
connectivity. WIZnet’s hardwired TCP/IP stack supports TCP, UDP, IPv4,
ICMP, ARP, IGMP, and PPPoE - and it has been proven through various
applications over the last decade.

W5100S provides four independent SOCKETs to be used simultaneously and
16KB internal memory for data communication. Users can develop an
Ethernet application easily by using the simple W5100S SOCKET program
instead of handling a complex Ethernet controller. W5100S also provides
WOL (Wake on LAN) and a Power Down Mode in order to reduce power
consumption.

W5100S is a low-cost chip that exceeds its predecessor, W5100. Existing
firmware using W5100 can be used on W5100S without modification. W5100S
has two types of packages, 48 Pin LQFP & QFN Lead-Free Package.

![W5100S Block diagram](/products/w5100s/w5100s_diagram.png)

-----

## Pin MAP

\<WRAP center centeralign\> ![W5100S Pin
map](/products/w5100s/w5100s_pinmap.png)

\</WRAP\>

-----

## Features

    *Support Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE
    * Support 4 Independent Hardware SOCKETs simultaneously
    * Support SOCKET-less Command: ARP-Request, PING-Request
    * Support Ethernet Power Down Mode & Main Clock gating for power save
    * Support Wake on LAN over UDP
    * Support Serial & Parallel Host Interface: High Speed SPI(MODE 0/3), Parallel System Bus with 2 Address signal & 8bits Data
    * Internal 16 Kbytes Memory for TX/ RX Buffers 
    * Not support IP Fragmentation
    *     Not Maintain ARP-cache Table 
    * 10BaseT/100BaseTX Ethernet PHY Integrated
    * Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)
    *     Support Auto-MDIX when Auto-Negotiation Mode.
    * 3.3V operation with 5V I/O signal tolerance
    * LED outputs (Full/Half Duplex, Link, 10/100 Speed, Active)
    * Two types of packages: 48 Pin LQFP & QFN Lead-Free Package (7x7mm, 0.5mm pitch)

-----

## Target Application

  - User product based on W5100 : No need to modify Firmware
  - Home Network Devices: Set-Top Boxes, PVRs, Digital Media Adapters
  - Serial-to-Ethernet: Access Controls, LED displays, Wireless AP
    relays, etc.
  - Parallel-to-Ethernet: POS / Mini Printers, Copiers
  - USB-to-Ethernet: Storage Devices, Network Printers
  - GPIO-to-Ethernet: Home Network Sensors
  - Security Systems: DVRs, Network Cameras, Kiosks
  - Factory, Building, Home Automations
  - Medical Monitoring Equipment
  - Embedded Servers
  - Internet of Things (IoT) Devices
  - IoT Cloud Devices

-----
