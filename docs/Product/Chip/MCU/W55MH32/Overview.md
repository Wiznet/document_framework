---
id: overview
title: Overview
slug: /Product/Chip/MCU/W55MH32/
date: 2020-04-03
keywords: [W55MH32,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: W55MH32 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# W55MH32
<div className="main_intro"> 
  <div className="main_intro_image">
    <img src="/img/products/W55MH32/W55MH32L.png" width="550" />
  </div>
  <div className="w5500-text">
    <p>

    The **W55MH32** is a high-performance 32-bit microcontroller that combines **Cortex-M3** processing power with **Hardwired TCP/IP** for efficient and secure IoT solutions. It operates at up to **216MHz**, featuring **1024KB Flash** and **96KB SRAM** for fast data handling. This dedicated hardware networking stack ensures low latency and reduced CPU overhead, making it ideal for real-time applications. Security is a core focus, with **AES, DES, and SHA** hardware encryption, a **True Random Number Generator (TRNG)**, and **SRAM scrambling** to protect sensitive data through network communication.


    </p>
  </div>
</div>

<details>
<summary><b>Block Diagram</b></summary> 

![Block diagram](\img\products\W55MH32\Block_Diagram.png)

</details>

<details>
<summary><b>Pin Map</b></summary> 
<img src="/assets/images/W55MH32L_Pin_assignment-b382cf3b2d3217054a0af58f0f633f06.png" alt="W55MH32_Pin_Map" width="500"/>


</details>


## Features

- Core: 32-bit Arm® Cortex®-M3 Core  − Up to 216MHz operation  
- Hardwired TCP/IP stack
- 1024K bytes of Flash memory  
- 96K bytes of SRAM
- 12-channel DMA controller
- Hardware encryption algorithm unit 
- Generate sequence of true random  numbers
- 66 (W55MH32L) /  36 (W55MH32Q) GPIO pins
- Up to 12 different Peripherals
  - 5 (W55MH32L) / 3 (W55MH32Q) USARTs
  - 2 SPI controllers
  - 1 multiplexed I2S controllers
  - 2 I2C controllers
  - CAN interface
  - USB 2.0 full-speed controller
  - SDIO interface (only W55MH32L) 
- Supported Network Protocols
  - TCP
  - UDP
  - IPv4
  - ICMP
  - ARP
  - IGMP
  - PPPoE
-----

## Documentation

### Datasheet

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [📄 W55MH32 Datasheet[EN]](/img/products/W55MH32/W55MH32_Datasheet_V1.0.0_EN.pdf) | Technical specifications and features of the W55MH32 chip | - |
| [📄 W55MH32 Datasheet[CN]](/img/products/W55MH32/W55MH32_Datasheet_V1.0.0_CN.pdf) | Technical specifications and features of the W55MH32 chip | - |

### Technical Documents

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [📄 W55MH32 User Manal[EN]](/img/products/W55MH32/W55MH32_User_Manual_V1.0.0_EN.pdf) | Technical specifications and features of the W55MH32 chip | - |
| [📄 W55MH32 User Manal[CN]](/img/products/W55MH32/W55MH32_User_manual_V1.0.0_CN.pdf) | Technical specifications and features of the W55MH32 chip | - |


## Software Resources
<Tabs groupId="software" queryString >
<TabItem value="driver" label="Driver" >

### Reference Code
The following are the reference codes for W55MH32:

| **Resource**                                                 | **Description**                                      |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| [🔗 W55MH32Lib (EN)](https://github.com/Wiznet/W55MH32-Reference-code) | Official WIZnet W55MH32 reference code in Github     |
| [🔗 W55MH32Lib (CN)](https://gitee.com/wiznet-hk/W55MH32_reference_code/tree/master) | Official WIZnet W55MH32 reference code in Gitee (CN) |
| [🔗 W55MH32 Package and Flash Algorithm](\img\products\W55MH32\4.Package_files.rar) | W55MH32 Package and Flash Algorithm                  |

  </TabItem>

  <TabItem value="appnote" label="Application Note" >

### Application Note
| **Example Name** | **Description** | **Notes** |
|------------------|-----------------|-----------|
| [🔗 Install KEIL5](https://docs.wiznet.io/Product/Chip/MCU/W55MH32/install_keil) | Step-by-step setup of Keil MDK (device pack, project template, build, flash, debug) | - |
   </TabItem>
</Tabs>

## Hardware Resources

### Technical Resources

| **Resource**           | **Description**                | **Notes**                           |
|------------------------|--------------------------------|-------------------------------------|
| [🔗 Reference Schematic](/img/products/W55MH32/W55MH32L_ref_Rev1.0_20250714.pdf)    | Typical application schematic        | Includes recommended circuit design |


### Test & Certification 

| **Resource**                | **Description**                        | **Notes**                      |
|-----------------------------|----------------------------------------|-------------------------------|
| [🔗 Ethernet Compliance Test] | Results and documentation of Ethernet standard compliance tests | Covers IEEE 802.3 physical and protocol layer verification |
| [🔗 Distance Test]              | Cable length performance test results      | Verified up to 100m Ethernet cable |
| [🔗 EMC Test]                   | Electromagnetic compatibility test reports | Covers conducted and radiated emissions |
| [🔗 Reliability Test]           | Reliability and endurance test reports     | Includes thermal cycling and aging analysis |
| [🔗 Certificate]                | Official certification documents           | CE, FCC, and RoHS certificates available |

<Tabs groupId="module" queryString>
<TabItem value="evb" label="Evaluation Boards & Related modules" default>

### Related modules

  <div className="link-card">
  <a
    href="/Product/Chip/MCU/W55MH32/W55MH32L-evb"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/img/products/W55MH32/W55MH32L-EVB_HD.png" alt="W55MH32L-EVB_HD" />
    <div>
      <h3>WW55MH32L-EVB</h3>
      <p>
The W55MH32L-EVB is a comprehensive evaluation board built around the W55MH32L microcontroller, designed for high-performance industrial, IoT, and embedded system applications. Powered by a 216MHz 32-bit Cortex-M3 processor, it integrates 1024KB Flash and 96KB SRAM, providing ample memory for complex, real-time applications.
      </p>
    </div>
  </a>
  </div>

  <div className="link-card">
  <a
    href="/Product/Chip/MCU/W55MH32/W55MH32Q-evb"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/img/products/W55MH32/W55MH32Q-EVB_HD.png" alt="W55MH32Q-EVB_HD" />
    <div>
      <h3>W55MH32Q-EVB</h3>
      <p>
The W55MH32Q-EVB is an advanced evaluation board built around the W55MH32Q microcontroller, offering robust performance and efficient networking capabilities for industrial, IoT, and embedded system applications. Powered by a 216MHz 32-bit processor, it integrates 1024KB Flash and 96KB SRAM, ensuring high-speed data processing. 
      </p>
    </div>
  </a>
  </div>

  </TabItem>

</Tabs>
---



[link-W55MH32L-EVB]: https://docs.wiznet.io/Product/Chip/MCU/W55MH32/W55MH32L-evb
[link-W55MH32Q-EVB]: https://docs.wiznet.io/Product/Chip/MCU/W55MH32/W55MH32L-evb
[link-W5100S-vs-W5100-Comparison-Sheet]: https://docs.wiznet.io/img/products/w5100s/application/w5100svsw5100_cs_v110e.pdf
[link-rp2040]: https://www.raspberrypi.org/products/rp2040/
[link-rp2350]: https://www.raspberrypi.com/products/rp2350/
[link-w5100s]: https://docs.wiznet.io/Product/Chip/Ethernet/W5100S/overview
[link-w5500]: https://docs.wiznet.io/Product/Chip/Ethernet/W5500/overview
[link-w6100]: https://docs.wiznet.io/Product/Chip/Ethernet/W6100/overview
[link-w6300]: https://docs.wiznet.io/Product/Chip/Ethernet/W6300/overview
[link-wiznet_ethernet_chips]: https://docs.wiznet.io/Product/iEthernet#product-family
[link-w55rp20-evb-pico]: https://docs.wiznet.io/Product/Chip/MCU/W55RP20/w55rp20-evb-pico
[link-raspberry_pi_pico]: https://www.raspberrypi.com/products/raspberry-pi-pico/
[link-wiznet_ethernet_hat]: https://docs.wiznet.io/Product/Open-Source-Hardware/wiznet_ethernet_hat
[link-w5100s-evb-pico]: https://docs.wiznet.io/Product/Chip/Ethernet/W5100S/w5100s-evb-pico
[link-w5500-evb-pico]: https://docs.wiznet.io/Product/Chip/Ethernet/W5500/w5500-evb-pico
[link-w6100-evb-pico]: https://docs.wiznet.io/Product/Chip/Ethernet/W6100/w6100-evb-pico
[link-w6300-evb-pico]: https://docs.wiznet.io/Product/Chip/Ethernet/W6300/w6300-evb-pico
[link-w5500-evb-pico2]: https://docs.wiznet.io/Product/Chip/Ethernet/W5500/w5500-evb-pico2
[link-w5100s-evb-pico2]: https://docs.wiznet.io/Product/Chip/Ethernet/W5100S/w5100s-evb-pico2