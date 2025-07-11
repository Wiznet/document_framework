---
id: wiz630io
title: WIZ630io
date: 2025-05-22
---


### Overview

WIZ630io is the network module that includes W6300 (TCP/IP hardwired chip, include PHY), MAG-JACK (RJ45 with X’FMR) with other glue logics. Please click the link for the further information about
**[W6300](../iEthernet/W6300/Overview.md)**. It can be used as a component and no effort is required to interface W6300 and Transformer. To support ethernet performance over 80Mbps and above, it supports 150MHz system clock and QSPI interface(including 4 Data lines). W6300 supports a total SRAM size of 64KB for 8 sockets, each has 4KB TX/RX buffer by default.

|                                                   |
| ------------------------------------------------- |
| ![WIZ630io](/img/products/wiz630io/WIZ630io_Front_side_view.png) |
| Figure: ***WIZ630io***                            |

-----

### Feature

  - Support Hardwired Internet protocols
      - : TCP, UDP, IPv6, IPv4, ICMPv6, ICMPv4, IGMP, MLDv1, ARP, PPPoE
  - Support IPv4/IPv6 Dual Stack
  - Support 8 independent SOCKETs simultaneously with 32KB Memory
  - Supports half/full duplex operation
  - Support SOCKET-less command
      - : ARP, PING, ICMPv6(PING, ARP,DAD,NA,RS) Command for IPv6
        Auto-configuration& Network Monitoring
  - Support Ethernet Power down mode & Main Clock Switching for power
    save
  - Support Wake on LAN over UDP
  - Supports high speed SPI Interface (SPI mode 0/3)
  - Internal 32Kbytes Memory for TX/ RX Buffers
  - 10BaseT/10BaseTe/100BaseTX Ethernet PHY Integrated
  - Support Auto Negotiation (Full and half duplex, 10 and 100-based )
  - Support Auto-MDIX only when Auto-Negotiation mode
  - Not support IP Fragmentation
  - 3.3V operation with 5V I/O signal tolerance
  - Interfaces with two 2.54mm pitch 1 x 6 header pin
  - Temperature : -40 \~ 85℃(Operation)

### Pin Out

![WIZ630io Pinmap](/img/products/wiz630io/WIZ630io_pin_out.png)  

-----

### Getting Started

  - **Coming soon**

-----

### Datasheet(W6300)

  - <a href="/img/products/w6300/W6300 DS_V090E.pdf" target="_blank">W6300 DataSheet v1.0.0</a>

-----

### Technical Reference

## Schematic

  - Revision 1.0<a href="/img/products/wiz630io/WIZ630IO_sch.pdf" target="_blank"> WIZ630io Rev1.0 Schematic(PDF)</a>

## Dimension

![WIZ630io Dimension](/img/products/wiz630io/WIZ630IO_Dimension.png)

## 3D Step File

  - Revision 1.0 <a href="/img/products/wiz630io/WIZ630IO.step" target="_blank">WIZ630io Rev1.0 3D(STEP)</a>


-----

**Ethernet Library**

  - 🌎[Go to Github](https://github.com/Wiznet/ioLibrary_Driver)

-----
