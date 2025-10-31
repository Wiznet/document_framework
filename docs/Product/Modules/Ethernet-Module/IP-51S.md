---
id: wizip51s
title: WIZ-IP51S
date: 2020-04-15

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WIZ-IP51s
<h1>WIZ-IP51s</h1>
<div className="main_intro"> 
  <div className="main_intro_image">
    <img src="/img/products/wiz-ip51s/ip51s_2_crop.png" width="300" />
  </div>
  <div className="wiz-ip51s-text">
    <p>
      The <b>WIZ-IP51s</b> is a network offloading module that integrates the <b>W5100S</b> chip (with built-in PHY physical layer and TCP/IP hardware protocol stack) and an RJ45 connector with integrated network transformer. As a plug-and-play component, it enables seamless interface connection between the W5100S and the transformer without the need for additional circuit design.


      For users who wish to quickly develop networked systems, the WIZ-IP51S is an ideal choice.
    </p>
  </div>
</div>

---

## Pin Information

<Tabs groupId="pinout" queryString>

  <TabItem value="pinmap" label="All" default>
<img src="/img/products/wiz-ip51s/IP51_55_pin.png" width="600" />

### P1 

| Pin | Type | Name | Description |
| --- | ---- | ---- | ----------- |
| 1 | I | **MISO** | SPI Master-In / Slave-Out |
| 2 | I | **CLK** | SPI clock input |
| 3 | I | **CSn** | SPI Master-Out / Slave-In |
| 4 | P | **GND** | Ground |
| 5 | P | **VCC** | 3.3 V Power supply |
| 6 | O | **ACT** | Activity LED signal |
| 7 | – | **LED1-** | Connect to ACT |
| 8 | – | **LED1+** | Connect in series with resistor to VCC |

### P2

| Pin | Type | Name | Description |
| --- | ---- | ---- | ----------- |
| 1 | I | **MOSI** | SPI Master-Out / Slave-In |
| 2 | I | **INTn** | Interrupt output (low-active) — indicates socket events like connection, disconnection, data reception, and WOL |
| 3 | I | **RSTn** | Hardware reset input (active low, ≥ 500 µs) |
| 4 | I | **SCL** | IIC clock line |
| 5 | I | **SDA** | IIC data cable |
| 6 | O | **LINK** | Network connection LED signal |
| 7 | – | **LED2-** | Connect to LINK |
| 8 | – | **LED2+** | Connect in series with resistor to VCC |

<p><i>*Wait at least 50 ms after RSTn goes high before SPI communication.*</i></p>
  </TabItem>
</Tabs>

---

## Features

<ul>
  <li>Supports full hardware TCP/IP protocol: TCP, UDP, WOL, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE</li>
  <li>Supports SOCKET-less instructions: ARP-request, PING-request</li>
  <li>Supports 4 independent SOCKET concurrent communication</li>
  <li>Supports half-duplex/full-duplex operation mode</li>
  <li>Supports Ethernet power-off mode and master clock selection energy-saving mode</li>
  <li>Supports UDP-based network wake-up (WOL) function</li>
  <li>High-speed SPI interface (MODE 0/3)</li>
  <li>Built-in total 16Kbytes of send/receive cache</li>
  <li>Integrated 10BaseT/100BaseTX Ethernet PHY</li>
  <li>Supports Ethernet auto-negotiation (full/half-duplex, 10Base-T/100Base-TX)</li>
  <li>Supports Auto-MDIX function (only supported in Ethernet auto-negotiation mode)</li>
  <li>Operating voltage: 3.3V (I/O compatible with 5V signal voltage)</li>
  <li>19-pin pin header interface</li>
  <li>Package size (length×width×height):32.5×16.5×17.3(mm)</li>
  <li>Compatible with WIZnet's IO module carrier board development board</li>
</ul>

---

## Electrical Characteristics

<Tabs groupId="electrical" queryString>
  <TabItem value="dc" label="DC Characteristics" default>

| Symbol | Parameter | Pins | Min | Typ | Max | Unit |
| ------- | ---------- | ---- | --- | --- | --- | ---- |
| V<sub>DD</sub> | Supply voltage | 3.3 V | 2.97 | 3.3 | 3.63 | V |
| V<sub>IH</sub> | High-level input | ALL | 2.3 | – | 5.5 | V |
| V<sub>IL</sub> | Low-level input | ALL | –0.3 | – | 0.9 | V |
| V<sub>OH</sub> | High-level output | ALL | 2.9 | 3.3 | – | V |
| V<sub>OL</sub> | Low-level output | ALL | 0.0 | – | 0.52 | V |
| I<sub>DD</sub> | Supply current (Normal) | 3.3 V | 124 | 130 | 137 | mA |

  </TabItem>

  <TabItem value="power" label="Power Dissipation">

| Condition | Min | Typ | Max | Unit |
| ---------- | --- | --- | --- | ---- |
| 100 Mb/s Link | – | 93 | 110 | mA |
| 10 Mb/s Link | – | 93 | 210 | mA |
| Unlink (Auto-negotiation) | – | 43 | – | mA |
| 100 Mb/s Tx | – | 40 | 170 | mA |
| 10 Mb/s Tx | – | 25 | 150 | mA |

  </TabItem>
</Tabs>

---

## Documentation

This section provides key documentation, including user manuals and datasheets, to help you understand product features, specifications, and usage.

| Title | Description | Link | Notes |
|-------|-------------|------|-------|
| Datasheet | Technical specifications and features of the W5100s chip | ![link](\img\link.png) [EN](/img/products/w5100s/w5100s_ds_v127e.pdf) / ![link](\img\link.png) [한국어](/img/products/w5100s/W5100s_ds_v127k.pdf) | - |

:::note

**SPI operation of WIZ-IP51s follows W5100S**. For more information about SPI operation of W5100s, please refer to W5100s Datasheet.

:::

---

## Software Resources

<Tabs groupId="software"  queryString>
  <TabItem value="driver" label="Driver" default >
  **Driver**

    | **Resource** | **Description** |
    |--------------|-----------------|
    | [![link](\img\link.png) ioLibrary_Driver](https://github.com/Wiznet/ioLibrary_Driver)| Official WIZnet driver library for W5100s and other chips |
    
      :::info

The ioLibrary_Driver is an MCU-independent library for WIZnet W5x00, W6x00 chips .
It provides implementations of essential TCP/IP services, enabling developers to build network applications with minimal MCU dependencies.
      **Supported services**<br />
DHCP, DNS, MQTT, SNTP, TFTP, HTTP Server

      :::

  </TabItem>

  <TabItem value="appnote" label="Application Note" >

  **Application Note**

| **Name**                                                     | **Description**                 | **Notes**                                      |
| ------------------------------------------------------------ | ------------------------------- | ---------------------------------------------- |
| [![link](\img\link.png)TCP Function](/Product/Chip/Ethernet/W5100S/Application-Note/tcp) | How to use IPRAW Mode           | IPRAW Mode handles IPv4 layer communication    |
| [![link](\img\link.png)UDP Function](/Product/Chip/Ethernet/W5100S/Application-Note/udp) | How to use IPRAW Mode           | IPRAW Mode handles IPv4 layer communication    |
| ![link](\img\link.png)[IPRAW](/Product/Chip/Ethernet/W5100S/Application-Note/ipraw) | How to use IPRAW Mode           | IPRAW Mode handles IPv4 layer communication    |
| ![link](\img\link.png)[PPPoE](/Product/Chip/Ethernet/W5100S/Application-Note/pppoe) | How to use PPP/PPPoE            | PPP is Link-Layer protocol for point-to-point  |
| ![link](\img\link.png)[SOCKET-less command](/Product/Chip/Ethernet/W5100S/Application-Note/socket-less-command) | Non-Socket ARP and PING process | Command based handling ARP and PING processing |
| ![link](\img\link.png)[Interrupt](/Product/Chip/Ethernet/W5100S/Application-Note/interrupt) | Interrupt example               | Publishes messages to broker                   |
| [![link](\img\link.png)DMA](/Product/Chip/Ethernet/W5100S/Application-Note/dma) | How to use IPRAW Mode           | IPRAW Mode handles IPv4 layer communication    |

  :::info
  These application notes explain how to use W5500's core networking functions including TCP, UDP, IPRAW mode, and PPPoE protocols.
  :::

  </TabItem>
</Tabs>
---

## Hardware Resources

| Title | Revision | Description | Download | Notes |
|-------|----------|-------------|----------|-------|
| Schematic | 1.0 | Circuit diagram for reference |  | TBD |

---

## Mechanical Information

<img src="/img/products/wiz-ip51s/ip_dimension.png" width="500"/>

<ul>
  <li><b>Form factor:</b> Plug-in Port module</li>
  <li><b>Pin pitch:</b> 2.54 mm</li>
  <li><b>Dimensions:</b> 32.5 × 16.5 mm</li>
</ul>

---

## Related Products

| Product | Description |
|----------|-------------|
| [W5100S Chip](../../Chip/Ethernet/W5100S/Overview.md) | Hardwired TCP/IP Ethernet controller with integrated PHY |
