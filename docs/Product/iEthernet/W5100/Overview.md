---
id: overview
title: Overview
date: 2025-08-13
keywords: [w5100,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: W5100 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# W5100
<h1>W5100</h1>
<div className="main_intro"> 
  <div className="main_intro_image">
    <img src="/img/products/W5100/W5100-7-500x500.jpg" width="550" />
  </div>
  <div className="w5100-text">
    <p>
       W5100 is an embedded Internet controller designed as a full hardwired TCP/IP with WIZnet technology. W5100 provides internet connectivity to your embedded system by using SPI (Serial Peripheral Interface) or Parallel System BUS. SPI and Parallel System BUS provide easy connection via external MCU to W5100. The clock speed of W5100 SPI supports up to 70MHz and the Parallel System Bus supports higher speed network communication than SPI.
    </p>
  </div>
</div>

<details>
<summary><b>Block Diagram</b></summary> 
<img src="/img/products/W5100/w5100-block-d.jpg" alt="W5100_Block_Diagram" width="500"/>

</details>

<details>
<summary><b>Pin Map</b></summary> 
<img src="/img/products/w5100/w5100_pin_map.png" alt="W5500_Block_Diagram" width="500"/>

</details>

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

## Documentation

### Technical Documents

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [![link](\img\download.png) W5100 Datasheet (EN)](/img/products/w5100/W5100_DS_V128E.pdf) | Technical specifications and features of the W5500 chip | - |
| [![link](\img\download.png) W5100 Errarta](/img/products/w5100/3150Aplus_5100_ES_V260E.pdf) | Known issues and corrections for the W5100 chip | - |

## Software Resources

<Tabs groupId="Software Resources" >
  <TabItem value="Driver" label="Driver" default >

    | **Resource** | **Description** |
    |--------------|-----------------|
    | [![link](\img\link.png) ioLibrary_Driver][link-ioLibrary-Driver]| Official WIZnet driver library for W5100 and other chips |



<details>
<summary><b>Click to view supported protocols</b></summary>
### Supported Protocols 

| **Name** | **Description**                       | **Notes**                        |
|----------|---------------------------------------|----------------------------------|
| DHCP        | Dynamic Host Configuration Protocol - Automatically obtains IP address from network |     |
| DNS         | Domain Name System - Resolves domain names to IP addresses  |     |
| MQTT        | Message Queuing Telemetry Transport - Lightweight publish/subscribe messaging protocol |     |
| SNTP        | Simple Network Time Protocol - Synchronizes system time with network time servers |     |
| TFTP        | Trivial File Transfer Protocol - Simple file transfer over UDP |     |
| httpServer  | HTTP Server - Web server implementation for hosting web pages and APIs |     |

</details>

      :::info
      The ioLibrary_Driver is a host MCU-independent library that provides complete control functions for the W5500 chip. It is compatible with all WIZnet chips and includes implementations of various network protocols. This library serves as the foundation for developing TCP/IP-based applications with minimal host MCU dependencies.
      :::
    
  </TabItem>
  <TabItem value="Application Note" label="Application Note" >

    | **Resource** | **Description** |
    |--------------|-----------------|
    | [![link](\img\download.png) DNS ](/img/products/w5100/documents/App_note_DNS.pdf) | How to implement DNS |
    | [![link](\img\download.png) DHCP ](/img/products/w5100/documents/App_note_DHCP.pdf) | How to implement DHCP |
    | [![link](\img\download.png) Multi-casting ](/img/products/w5100/documents/HowtoMulticasting_En_v1.0.pdf)  | How to use Multi-casting |
    | [![link](\img\download.png) ADSL (PPPoE) ](/img/products/w5100/documents/HowtoADSL_En_v1.0.pdf)  | How to use ADSL (PPPoE) |
    <details>
      <summary><b>Click to view supported protocols</b></summary>
      ### Supported Protocols

      | **Name** | **Description**                       | **Notes**                        |
      |----------|---------------------------------------|----------------------------------|
      | [![link](\img\download.png) DNS, DHCP, Multicasting, PPPoE](/img/products/w5100/W5100_Application_Note.zip)               | How to use  DNS, DHCP, Multicasting, PPPoE     | DNS, DHCP, Multicasting, PPPoE handles communication    |
    </details>
    :::info
   These application notes explain how to use W5100's core networking functions including DNS, DHCP, Multi-casting , and ADSL (PPPoE) protocols.
    :::
  </TabItem>
</Tabs>

## Hardware Resources

### Technical Resources

| **Resource**           | **Description**                | **Notes**                           |
|------------------------|--------------------------------|-------------------------------------|
| [![link](\img\link.png) Reference Schematic](/img/products/w5100/w5100_hardware.zip)    | Typical application schematic        | Includes recommended circuit design |

### Test & Certification

| **Resource**                | **Description**                        | **Notes**                      |
|-----------------------------|----------------------------------------|-------------------------------|
| [![link](\img\link.png) **Ethernet Compliance Test**]| Results and documentation of Ethernet standard compliance tests | Covers IEEE 802.3 physical and protocol layer verification |
| [![link](\img\link.png) **Distance Test**]             | Cable length performance test results      | Verified up to 100m Ethernet cable |
| [![link](\img\link.png) **EMC Test**]                  | Electromagnetic compatibility test reports | Covers conducted and radiated emissions |
| [![link](\img\link.png) Reliability Test](img/products/w5100/W5100_qual_report.zip)           | Reliability and endurance test reports     | Includes thermal cycling and aging analysis |
| [![link](\img\link.png) **Certificate**]               | Official certification documents           | CE, FCC, and RoHS certificates available |

## Evaluation Boards & Related modules
<Tabs groupId="Evaluation Boards" >
 <TabItem value="eval_board" label="Evaluation Boards" >

  <div className="link-card">
  <a
    href="/Product/iEthernet/W5100/w5100-evb"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/img/products/W5100/W5100E01-AVR1.jpg" alt="W5100-EVB" />
    <div>
      <h3>W5100-EVB</h3>
      <p>
        W5100 EVB is a microcontroller evaluation board based on the ATMEL128 and fully hardwired TCP/IP controller W5100 
      </p>
    </div>
  </a>
  </div>  
  </TabItem>
</Tabs>


[link-W5100-EVB]: Product/iEthernet/W5100/w5100-evb
[link-ioLibrary-Driver]: https://github.com/Wiznet/ioLibrary_Driver
