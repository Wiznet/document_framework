---
id: overview
title: Overview
slug: /Product/Chip/Ethernet/W5100/
date: 2025-08-13
keywords: [w5100,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: W5100 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# W5100
<div className="main_intro"> 
  <div className="main_intro_image">
    <img src="/img/products/w5100/W5100-7-500x500.jpg" width="550" />
  </div>
  <div className="w5100-text">
    <p>
W5100 is a hardwired TCP/IP stack internet controller chip with WIZnet technology, which enables easy internet connectivity to an external MCU via SPI or Parallel System BUS. The SPI interface supports up to 70MHz clock speed, and the Parallel System BUS offers higher communication performance compared to SPI. With an embedded Ethernet MAC and PHY, W5100 allows simple Ethernet application development using socket programming.
    </p>
  </div>
</div>

<details>
<summary><b>Block Diagram</b></summary> 
<img src="/img/products/w5100/w5100-block-d.jpg" alt="W5100_Block_Diagram" width="500"/>

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

### datasheet 

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [![link](\img\download.png) W5100 Datasheet (EN)](/img/products/w5100/W5100_DS_V128E.pdf) | Technical specifications and features of the W5100 chip | - |

### Technical Documents

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [![link](\img\download.png) W5100 Errarta](/img/products/w5100/3150Aplus_5100_ES_V260E.pdf) | Known issues and corrections for the W5100 chip | - |

## Software Resources

<Tabs groupId="software"  queryString>
  <TabItem value="driver" label="Driver" default >
### Driver

    | **Resource** | **Description** |
    |--------------|-----------------|
    | [![link](\img\link.png) ioLibrary_Driver][link-ioLibrary-Driver]| Official WIZnet driver library for W5100 and other chips |


      :::info

The ioLibrary_Driver is an MCU-independent library for WIZnet W5x00, W6x00 chips .
It provides implementations of essential TCP/IP services, enabling developers to build network applications with minimal MCU dependencies.
      ### Supported services
DHCP, DNS, MQTT, SNTP, TFTP, HTTP Server

      :::
  
    
  </TabItem>
  <TabItem value="appnote" label="Application Note" >
### Application Note

    | **Resource** | **Description** |
    |--------------|-----------------|
    | [![link](\img\download.png) DNS ](/img/products/w5100/documents/App_note_DNS.pdf) | How to implement DNS |
    | [![link](\img\download.png) DHCP ](/img/products/w5100/documents/App_note_DHCP.pdf) | How to implement DHCP |
    | [![link](\img\download.png) Multi-casting ](/img/products/w5100/documents/HowtoMulticasting_En_v1.0.pdf)  | How to use Multi-casting |
    | [![link](\img\download.png) ADSL (PPPoE) ](/img/products/w5100/documents/HowtoADSL_En_v1.0.pdf)  | How to use ADSL (PPPoE) |

      ### project download

      | **Name** | **Description**                       | **Notes**                        |
      |----------|---------------------------------------|----------------------------------|
      | [![link](\img\download.png) DNS, DHCP, Multicasting, PPPoE](/img/products/w5100/W5100_Application_Note.zip)               | How to use  DNS, DHCP, Multicasting, PPPoE     | DNS, DHCP, Multicasting, PPPoE handles communication    |

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

## Related modules
<Tabs groupId="evb" queryString >
 <TabItem value="evb" label="Evaluation Boards" default >
### Evaluation Boards

  <div className="link-card">
  <a
    href="/Product/Chip/Ethernet/W5100/w5100-evb"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/img/products/w5100/W5100E01-AVR1.jpg" alt="W5100-EVB" />
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


[link-W5100-EVB]: Product/Chip/Ethernet/W5100/w5100-evb
[link-ioLibrary-Driver]: https://github.com/Wiznet/ioLibrary_Driver
