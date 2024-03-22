---
id: overview
title: overview
date: 2024-03-21
keywords: [w6300,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: W6100 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology
---




---

## W6300
Chip Image is comming soon

![image](https://github.com/Wiznet/document_framework/assets/77008882/fcfc0573-8de7-434a-9608-0f47a39f557a)

overview

W6300 is a WIZnet 10/100 TOE ethernet chip that combines the high-speed ethernet performance with Dual IPv4/v6 Hardware stack. 
To support ethernet performance over 80Mbps and above, it supports 150MHz system clock and QSPI interface(including 4 Data lines). 
W6300 supports a total SRAM size of 64KB for 8 sockets, each has 4KB TX/RX buffer by default. 
And it also provides external MII interface for user external PHYs.


![w6300_block_diagram](https://github.com/Wiznet/document_framework/assets/77008882/a6e46089-6483-423f-9752-05fdafd6af9b)

---

## Pin MAP
![W6300_pinmap](https://github.com/Wiznet/document_framework/assets/77008882/1651376c-6a33-48b4-a6c0-338f08095b17)

---


## Features
 - Support Hardwired TCP/IP Protocols : TCP, UDP, IPv6, IPv4, ICMPv6, ICMPv4, IGMP, MLDv1, ARP, PPPoE
 - Support IPv4/IPv6 Dual Stack
 - Support 8 independent SOCKETs simultaneously with 64KB Memory
 - Support SOCKET-less Command: ARP, PING, ICMPv6(PING, ARP,DAD,NA,RS) Command for IPv6 Auto-configuration& Network Monitoring
 - Support Ethernet Power Down Mode & System Clock Switching for power save
 - Support Wake on LAN over UDP
 - Support Serial & Parallel Host Interface: High Speed QSPI(MODE 0/3), System Bus with 2 Address signal & 8bit Data
 - Internal 32Kbytes Memory for TX/ RX Buffers
 - 10BaseT / 10BaseTe / 100BaseTX Ethernet PHY Integrated
 - Support Auto Negotiation (Full and half duplex, 10 and 100-based )
 - Support Auto-MDIX only on Auto-Negotiation Mode
 - Not support IP Fragmentation
 - 3V operation with 5V I/O signal tolerance
 - Network Indicator LEDs (Full/Half Duplex, Link, 10/100 Speed, Active)
 - 48 Pin LQFP & QFN Lead-Free Package

---

# target application
 - Home Network Devices: Set-Top Boxes, PVRs, Digital Media Adapters
 - Serial-to-Ethernet: Access Controls, LED displays, Wireless AP relays, etc.
 - Parallel-to-Ethernet: POS / Mini Printers, Copiers
 - USB-to-Ethernet: Storage Devices, Network Printers
 - GPIO-to-Ethernet: Home Network Sensors
 - Security Systems: DVRs, Network Cameras, Kiosks
 - Factory, Building, Home Automations
 - Medical Monitoring Equipment
 - Embedded Servers
 - Internet of Things (IoT) Devices
 - IoT Cloud Devices

---
