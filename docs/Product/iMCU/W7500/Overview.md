---
id: overview
title: Overview
slug: /Product/iMCU/W7500/
date: 2025-08-11
keywords: [W7500P,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: W7500P is an ARM Cortex-M0-based MCU with built-in hardwired TCP/IP, 128KB Flash, and 16KB RAM, ideal for compact Ethernet IoT applications.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# W7500

<h1>W7500</h1>
<div className="main_intro"> 
  <div className="main_intro_image">
    <img src="/assets/images/w7500_chip-a0d40e933542f642f9f4b86b58d37595.png" width="550" />
  </div>
  <div className="w7500-text">
    <p>
The IOP4IoT W7500 chip is the one-chip solution which integrates an ARM Cortex-M0, 128KB Flash and hardwired TCP/IP core for various embedded application platforms. The TCP/IP core is a market-proven hardwired TCP/IP stack with an integrated Ethernet MAC. The Hardwired TCP/IP stack supports the TCP, UDP, IPv4, ICMP, ARP, IGMP and PPPoE which has been used in various applications for more than 15 years. W7500 suits users who need Internet connectivity best.
    </p>
  </div>
</div>

<details>
<summary><b>Block Diagram</b></summary> 
TBD
</details>

<details>
<summary><b>Pin Map</b></summary> 
<img src="/assets/images/2_w7500_pin_layout-e8123570d46a90fdf10f916f4be019e7.png" alt="W7500_Block_Diagram" width="500"/>
</details>

## Features
* ARM Cortex-M0
  * 48MHz maximum frequency
* Hardwired TCP/IP Core
    * 8 Sockets
    * SRAM for socket: 32 KB
    * MII (Medium-Independent Interface)
* Memories
  * Flash: 128 KB
  * SRAM: 16 KB
  * ROM for boot code: 6 KB
* Clock, reset and supply management
	* POR (Power-On Reset)
	* Internal Voltage Regulator : 3.3V to 1.5V
	* 8-to-24MHz external crystal oscillator
	* Internal 8MHz RC Oscillator
	* PLL for CPU clock
* ADC : 12bit, 8ch, 1Mbps
* DMA
    * 6-channel DMA controller
    * Peripheral supported: UARTs, SPIs
* GPIO
    * 53 I/Os (16 IO x 3ea, 5 IO x 1ea)
* Debug mode
    * Serial Wire Debug (SWD)
* Timer/PWM
	* 1 Watchdog (32-bit down-counter)
	* 4 Timers (32-bit or 16-bit down-counter)
	* 8 PWMs (32-bit counter/timers with programmable 6-bit prescaler)
* Communication Interfaces
    * 3 UART (2 UARTs with FIFO and Flow Control, 1 simple UART)
    * 2 SPI
    <!-- * I2C (using GPIO, Master/Slave, Fast-mode (400 kbps)) -->
* Crypto
    * 1 RNG (Random Number Generator): 32-bit random number
* Package
    * 64 TQFP (7x7 mm)
-----

## Documentation

### Datasheet

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [![link](\img\download.png) W7500P Datasheet](/img/products/w7500/w7500x_ds_v110.pdf) | Technical specifications and features of the W7500P chip | - |

### Technical Documents

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [![link](\img\download.png) W7500P Reference Manual](/img/products/w7500/w7500x_rm_v112_20181017_.pdf) | Known issues, register details, and functional corrections for the W7500P chip | - |
| [![link](\img\download.png) W7500P Errata(EN)](//img/products/w7500/w7500x_erratasheet_v120e.pdf)<br /> [![link](\img\download.png) 7500P Errata(KR)](/img/products/w7500/w7500x_erratasheet_v120k.pdf)  |  Known issues and corrections for the chips| - |
| [![link](\img\download.png) Limitation Note ARP problem in the NLB environment](/img/products/w7500/w7500_arp_problem_in_the_nlb.pdf) | Technical specifications and features of the W7500P chip | - |


### Getting Started

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [![link](\img\link.png) How to install KEIL](../w7500x_Common_resource/appnote/How_to_install_KEIL.md) | Step-by-step guide for installing KEIL development environment for W7500P | - |
| [![link](\img\link.png) How to make KEIL new project for W7500](../w7500x_Common_resource/appnote/How_to_make_KEIL_new_project_for_W7500.md) | Tutorial for creating new KEIL projects for W7500P development | - |
| [![link](\img\link.png) How to use MDK for W7500 Peripherals Examples](/Product/iMCU/w7500x_Common_resource/appnote/how-to-make-keil-new-project-for-w7500) | Guide for using MDK with W7500P peripheral examples | - |
| [![link](\img\link.png) How to use GCC for W7500 Peripherals Examples](../w7500x_Common_resource/appnote/How_to_use_GCC_for_W7500_Peripherals_Examples.md) | Instructions for using GCC compiler with W7500P peripheral examples | - |
| [![link](\img\link.png) How to use ISP tool](../w7500x_Common_resource/appnote/How-to-use-ISP-tool.md) | Guide for using In-System Programming tool with W7500P | - |



## Software Resources
<Tabs groupId="software" queryString>
  <TabItem value="driver" label="Driver" default >
### Driver
    | **Resource** | **Description** |
    |--------------|-----------------|
    | [![link](\img\link.png) Library and Peripheral Example](https://github.com/Wiznet/W7500x_StdPeriph_Lib) | The W7500p Standard Peripherals library provides a rich set of examples covering the main features of each peripheral |
      


  :::info
### Peripheral description and example
The W7500P Standard Peripherals library provides a rich set of examples covering the main features of each peripheral.
It includes comprehensive driver support and example code for all integrated components.

      ### Supported Peripherals
GPIO, ADC, DMA, CRG, DualTimer, EXTI, Flash, PWM, RNG, SSP, TOE, UART, WDT, SysTick, AFC, PADCON

  :::


  </TabItem>
</Tabs>


## Hardware Resources

### Technical Resources

| **Resource**           | **Description**                | **Notes**                           |
|------------------------|--------------------------------|-------------------------------------|
| [![link](\img\link.png) W7500 Reference Schematic with IP101GA](https://docs.wiznet.io/img/products/w7500/ref_sch/w7500_ref_schematic_v1.1_ip_.pdf)  |Typical application schematic     | - |
| [![link](\img\link.png) W7500 Reference Schematic with IP101GRI](https://docs.wiznet.io/img/products/w7500/w7500_ip101gri_reference_sch_20170525.pdf)  |Typical application schematic      | - |
| [![link](\img\link.png) W7500 Reference Schematic with RTL8201CP-VD-LF](https://docs.wiznet.io/img/products/w7500/ref_sch/w7500_ref_schematic_v1.1_rtl_.pdf)  |Typical application schematic      | - |
| [![link](\img\link.png) W7500 Reference Schematic with RTL8201F-VB-CG](https://docs.wiznet.io/img/products/w7500/w7500_rtl8201f_reference_sch.pdf)  |Typical application schematic       | - |

### Test & Certification

| **Resource**                | **Description**                        | **Notes**                      |
|-----------------------------|----------------------------------------|-------------------------------|
| [![link](\img\link.png) ESD Test]   | Confirmation of ESD Test | - |
| [![link](\img\link.png) Ethernet Compliance Test] |Results and documentation of Ethernet standard compliance tests | Covers IEEE 802.3 physical and protocol layer verification |
| [![link](\img\link.png) Distance Test]            |  Cable length performance test results      | Verified up to 100m Ethernet cable |
| [![link](\img\link.png) EMC Test]                 | Electromagnetic compatibility test reports | Covers conducted and radiated emissions |
| [![link](\img\download.png) Reliability Test]        |  Reliability and endurance test reports     | Includes thermal cycling and aging analysis |
| [![link](\img\link.png) Certificate]              | Official certification documents           | CE, FCC, and RoHS certificates available |

## Related modules

<Tabs groupId="evb" queryString>
 <TabItem value="evb" label="Evaluation Boards" >

  <div className="link-card">
  <a
    href="/Product/Mbed-WIZwiki-Platform/wizwiki-w7500"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/assets/images/wizwiki-w7500_main-4f653aba8dd3e12631c19a5ee940fb8b.png" alt="wizwiki-w7500" />
    <div>
      <h3>WizWiki-w7500</h3>
      <p>
    WIZnet WIZwiki Platform based on WIZnet's MCU. WIZnet WIZwiki-W7500 is a WIZwiki platform board based on the W7500. The IOP4IoT W7500 chip is a one-chip solution which integrates an ARM Cortex-M0, 128KB Flash and hardwired TCP/IP core for various embedded application platforms especially internet of things. If you use WIZwiki-W7500, you will be able to easily develop a prototype. It is compatible with Arduino Shields.
      </p>
    </div>
  </a>
  </div>  

   <div className="link-card">
  <a
    href="/Product/Mbed-WIZwiki-Platform/wizwiki-w7500eco"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/assets/images/wizwiki-w7500eco3dtop-3a5e06feae28eb23e1dc8090728380c4.png" alt="wizwiki-w7500eco" />
    <div>
      <h3>wizwiki-w7500eco</h3>
      <p>
        WIZnet WIZwiki-W7500ECO is a WIZwiki platform board based on W7500. The IOP4IoT W7500 chip is a one-chip solution which integrates an ARM Cortex-M0, 128KB Flash and hardwired TCP/IP core for various embedded application platforms especially internet of things. You can develop prototype products more quickly using WIZwiki-W7500ECO and it includes CMSIS-DAP for debugging and ethernet-phy.
      </p>
    </div>
  </a>
  </div>  
  </TabItem>
</Tabs>


[link-WIZ750SR]: https://docs.wiznet.io/Product/S2E-Module/WIZ750SR
[link-WIZwiki-W7500P]: https://docs.wiznet.io/Product/Mbed-WIZwiki-Platform/wizwiki-w7500p

