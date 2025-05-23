---
id: overview
title: Overview
date: 2024-03-21
keywords: [w6300,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: w6300 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology
---




---

## W6300

![](/img/products/w6300/overview/w6300_chip.png)

W6300 is a WIZnet 10/100 TOE ethernet chip that combines the high-speed ethernet performance with Dual IPv4/v6 Hardware stack. 
To support ethernet performance over 80Mbps and above, it supports 150MHz system clock and QSPI interface(including 4 Data lines). 
W6300 supports a total SRAM size of 64KB for 8 sockets, each has 4KB TX/RX buffer by default. 


<img src="/img/products/w6300/overview/W6300_block_diagram_250228.png" width="500" />

---

## Pin MAP

<!-- ![W6300_pinmap](https://github.com/Wiznet/document_framework/assets/77008882/1651376c-6a33-48b4-a6c0-338f08095b17) -->
<img src="https://github.com/Wiznet/document_framework/assets/77008882/1651376c-6a33-48b4-a6c0-338f08095b17" width="500" />
--- 


## Features
 - Support Hardwired TCP/IP Protocols : TCP, UDP, IPv6, IPv4, ICMPv6, ICMPv4, IGMP, MLDv1, ARP, PPPoE
 - Support IPv4/IPv6 Dual Stack
 - Support 8 independent SOCKETs simultaneously with 64KB Memory
 - Support SOCKET-less Command: ARP, PING, ICMPv6(PING, ARP,DAD,NA,RS) Command for IPv6 Auto-configuration& Network Monitoring
 - Support Ethernet Power Down Mode & System Clock Switching for power save
 - Support Wake on LAN over UDP
 - Support Serial & Parallel Host Interface: High Speed QSPI(MODE 0/3), System Bus with 2 Address signal & 8bit Data
 - Internal 32Kbytes Memory for TX/ RX Buffers(total 64Kbytes Memory)
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

## iperf 3 Test Results

### with RP2350

This test measured network speed using **RP2350** and **W6300** with **iperf 3**. The goal was to compare performance across different modes (**SINGLE**, **DUAL**, **QUAD**) and clock speeds.

<img src="/img/products/w6300/overview/iperf_test_1.png" width="600" />

#### Test Method
- **Clock Speed:** 5MHz ~ 43MHz
- **Communication Modes:** QSPI SINGLE/DUAL/QUAD
- **Measurement Tool:** iperf 3

#### Key Results
- **SINGLE Mode:** Up to **36.32 Mbits/sec**
- **DUAL Mode:** Up to **62.53 Mbits/sec**
- **QUAD Mode:** Up to **91.2 Mbits/sec**

The highest speed was achieved in **QUAD mode** at **43MHz**, reaching **91.2 Mbits/sec**.
## [LWIP] iperf 3 Test Results

### with RP2350

This test measured network speed using **RP2350** and **W6300** with **iperf 3**. The goal was to compare performance of **software-based lwIP** across different modes (**SINGLE**, **DUAL**, **QUAD**) and clock speeds.

<img src="/img/products/w6300/overview/iperf_test_Lwip.png" width="600" />

#### Test Method
- **TCP/IP Stack:** lwip(software)
- **Clock Speed:** 5MHz ~ 43MHz
- **Communication Modes:** QSPI SINGLE/DUAL/QUAD
- **Measurement Tool:** iperf 3

#### Key Results 
- **SINGLE Mode:** Up to **18.1 Mbits/sec**
- **DUAL Mode:** Up to **22.5 Mbits/sec**
- **QUAD Mode:** Up to **24.4 Mbits/sec**

The highest speed was achieved in **QUAD mode** at **43MHz**, reaching **24.4 Mbits/sec**.



<!-- ### with STM32 -->


---
