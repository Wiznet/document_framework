---
id: overview
title: Overview
date: 2020-04-03
---

## W5500

### Overview

![W5500 Photo 1](/document_framework/blob/img/products/w5500/img_w5500h.jpg)

The W5500 chip is a Hardwired Internet controller designed as a full
hardwired TCP/IP stack with WIZnet technology. W5500 provides Internet
connectivity to your embedded systems by using SPI(Serial Peripheral
Interface). SPI provides easy connection via external MCU to W5500. The
clock speed of W5500 SPI supports upto 80MHz.

Since W5500 integrates the Hardwired TCP/IP stack with 10/100 Ethernet
MAC and PHY, it is truly a one-chip solution for the stable internet
connectivity. WIZnet's Hardwired TCP/IP stack supports TCP, UDP, IPv4,
ICMP, ARP, IGMP, and PPPoE - and it has been proven through various
applications over the last decade.

W5500 provides 8 independent SOCKETs to be used simultaneously and 32KB
internal memory for data communication. Users can develop an Ethernet
application easily by using the simple W5500 SOCKET program instead of
handling a complex Ethernet controller. W5500 also provides WOL (Wake on
LAN) and a Power Down Mode in order to reduce power consumption.

## Features

  - Supports following Hardwired TCP/IP Protocols : TCP, UDP, ICMP,
    IPv4, ARP, IGMP, PPPoE
  - Supports 8 independent sockets simultaneously
  - Supports Power down mode
  - Supports Wake on LAN over UDP
  - Supports High Speed Serial Peripheral Interface(SPI MODE 0, 3)
  - Internal 32Kbytes Memory for Tx/Rx Buffers
  - 10BaseT/100BaseTX Ethernet PHY embedded
  - Support Auto Negotiation (Full and half duplex, 10 and 100-based)
  - Not support IP Fragmentation
  - 3.3V operation with 5V I/O signal tolerance
  - LED outputs (Full/Half duplex, Link, Speed, Active)
  - 48 Pin LQFP Lead-Free Package (7x7mm, 0.5mm pitch)

### Language

  - [Japanese.Ver]()

### Material

  - [W5500 Datasheet](Datasheet.md)
  - [W5500 Driver](Driver.txt)
  - [W5500 Reference Schematic](Ref._Schematic.md)
  - [Migration from W5200 to W5500](Migration_from_W5200.txt)
  - [W5500 TCP Function](TCP.md)
  - [W5500 UDP Function](UDP.md)
  - [W5500 Application Note (IPRAW)](IPRAW.md)
  - [W5500 Application Note (PPPoE)](PPPoE.md)
  - [W5500 Confirmation of ESD Test](SPI_Performance.md)
