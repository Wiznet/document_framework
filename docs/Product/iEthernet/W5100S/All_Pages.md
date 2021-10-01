---
id: all_pages
title: All Pages
date: 2020-04-03
---


## Overview

![](/img/products/w5100s/w5100s_pm.png)

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

![W5100S Block diagram](/img/products/w5100s/w5100s_diagram.png)

-----


## Pin MAP
![W5100S Pin map](/img/products/w5100s/w5100s_pinmap.png)

-----


## Features

   - Support Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE
   - Support 4 Independent Hardware SOCKETs simultaneously
   - Support SOCKET-less Command: ARP-Request, PING-Request
   - Support Ethernet Power Down Mode & Main Clock gating for power save
   - Support Wake on LAN over UDP
   - Support Serial & Parallel Host Interface: High Speed SPI(MODE 0/3), Parallel System Bus with 2 Address signal & 8bits Data
   - Internal 16 Kbytes Memory for TX/ RX Buffers 
   - Not support IP Fragmentation
   - Not Maintain ARP-cache Table 
   - 10BaseT/100BaseTX Ethernet PHY Integrated
   - Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)
   - Support Auto-MDIX when Auto-Negotiation Mode.
   - 3.3V operation with 5V I/O signal tolerance
   - LED outputs (Full/Half Duplex, Link, 10/100 Speed, Active)
   - Two types of packages: 48 Pin LQFP & QFN Lead-Free Package (7x7mm, 0.5mm pitch)

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

## Driver

The ioLibrary means **"Internet Offload Library"** for WIZnet chip. It
includes **drivers** and **application protocols**. The ioLibrary can be
used for [W5100S](overview) application designs. These
will be updated continuously.

-----


## ioLibrary


#### Overview

This driver provides the Berkeley Socket type APIs. The function names
of this ioLibrary\_BSD are the same as the function names of the
ioLibrary.

  - Directory Structure ![](/img/products/w5100s/w5100s_iolibrary.png)
      - Ethernet : SOCKET APIs like BSD & WIZCHIP(W5500,W5200 and etc)
        Driver
      - Internet : 
          - DHCP client 
          - DNS client 
          - FTP client
          - FTP Server
          - Http Server
          - SNMP
          - SNTP
          - TFTP


#### Download

**ioLibrary : latest version**

**ioLibrary GitHub Repository**

**https://github.com/Wiznet/ioLibrary_Driver**

For more information on ioLibrary, click 🌎[W5500 Driver](driver)
---


## Data Sheet

#### Korean
 * <a href="/img/products/w5100s/w5100s_ds_v125k.pdf" target="_blank">W5100S Datasheet v1.2.5</a>
#### English
 * <a href="/img/products/w5100s/w5100s_ds_v125e.pdf" target="_blank">W5100S Datasheet v1.2.5</a>

----


## W5100S vs W5100 Comparison Sheet
#### Korean
 * <a href="/img/products/w5100s/application/w5100svsw5100_cs_v110k.pdf" target="_blank">W5100S vs W5100 Comparison Sheet v1.1.0</a>

#### English
 * <a href="/img/products/w5100s/application/w5100svsw5100_cs_v110e.pdf" target="_blank">W5100S vs W5100 Comparison Sheet v1.1.0</a>

----


## Application Note

#### Korean
 * <a href="/img/products/w5100s/w5100s_an_ipraw_v100k.pdf" target="_blank">W5100S IPRAW v1.0.0</a>
 * <a href="/img/products/w5100s/application/w5100s_an_pppoe_v100k.pdf" target="_blank">W5100S PPPoE v1.0.0</a>
 * <a href="/img/products/w5100s/application/w5100s_an_slc_v100k.pdf" target="_blank">W5100S SLC v1.0.0</a>
 * <a href="/img/products/w5100s/application/w5100s_an_interrupt_v110k.pdf" target="_blank">W5100S Interrupt v1.1.0</a>

#### English
 * <a href="/img/products/w5100s/w5100s_an_ipraw_v100e.pdf" target="_blank">W5100S IPRAW v1.0.0</a>
 * <a href="/img/products/w5100s/application/w5100s_an_pppoe_v100e.pdf" target="_blank">W5100S PPPoE v1.0.0</a>
 * <a href="/img/products/w5100s/application/w5100s_an_slc_v100e.pdf" target="_blank">W5100S SLC v1.0.0</a>
 * <a href="/img/products/w5100s/application/w5100s_an_interrupt_v100e.pdf" target="_blank">W5100S Interrupt v1.0.0</a>

----


## Hardware Design Guide
#### Korean
 * <a href="/img/products/w5100s/w5100s_crystal_selection_guide_v100k.pdf" target="_blank">Crystal Selection Guide v1.0.0</a>

#### English
 * <a href="/img/products/w5100s/w5100s_crystal_selection_guide_v100e.pdf" target="_blank">Crystal Selection Guide v1.0.0</a>
 * [IR Reflow Profile](Document.md)
----

 Reference Schematic

---



## External Transformer Type

[Go to github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S/Reference%20Schematic)
![](/img/products/w5100s/ref_sch/w5100s_ref_schematic_v110_use_trans.jpg)

-----


## RJ45 with Transformer Type

[Go to github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S/Reference%20Schematic)
![](/img/products/w5100s/ref_sch/w5100s_ref_schematic_v110_use_trans.jpg)

-----
## W5100S Comparison Sheet

Functionally, **W5100S** is very similar to **W5100 and W5500**, with
slightly different Hardware Specification. And Software can be shared.
For example, Software written for the W5100 or W5500 is compatible with
Hardware for the W5100S. However, there are some differences between
W5100S and W5100/W5500 have in Software and Hardware. The difference are
described in the document titled "W5100S comparison sheet" below.

-----

### document

<table>
<thead>
<tr class="header">
<th>Version</th>
<th>Date</th>
<th>Download</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1.0.0</td>
<td>2018-04-01</td>
<td><embed src="/img/products/w5100s/w5100s_cp_v100k.pdf" class="align-center" /><br />
<embed src="/img/products/w5100s/w5100s_cp_v100e.pdf" class="align-center" /></td>
</tr>
</tbody>
</table>

-----

## W5100S Application
Refer to the following application examples

  * [TCP](./Application-Note/TCP.md)
  * [UDP](./Application-Note/UDP.md)
  * [IPRAW](./Application-Note/IPRAW.md)
  * [PPPoE](./Application-Note/PPPoE.md)
  * [SOCKET-less Command](./Application-Note/SOCKET-less_Command.md)
  * [Interrupt](./Application-Note/Interrupt.md)
  * [DMA](./Application-Note/DMA.md)