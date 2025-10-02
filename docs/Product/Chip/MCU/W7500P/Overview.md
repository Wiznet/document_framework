---
id: overview
title: Overview
date: 2025-08-11
slug: /Product/Chip/MCU/W7500P/

keywords: [W7500P,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: W7500P is an ARM Cortex-M0-based MCU with built-in hardwired TCP/IP, 128KB Flash, and 16KB RAM, ideal for compact Ethernet IoT applications.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# W7500P

<h1>W7500P</h1>
<div className="main_intro"> 
  <div className="main_intro_image">
    <img src="/img/products/w7500p/20150908_171109.png" width="550" />
  </div>
  <div className="w7500-text">
    <p>
      The IOP4IoT W7500P chip is the one-chip solution which integrates an ARM Cortex-M0, 128KB Flash, hardwired TCP/IP core for various embedded application platform, 10/100 Ethernet MAC and PHY, and especially internet of things.
      The TCP/IP core is a market-proven hardwired TCP/IP stack and PHY is IC plus IP101G, an IEEE 802.3/802.3u Fast Ethernet Transcevier for 10/100Mbps. The Hardwired TCP/IP stack supports the TCP, UDP, IPv4, ICMP, ARP, IGMP and PPPoE which has been used in various applications for more than 15 years. W7500P suits users who need Internet connectivity best.
    </p>
  </div>
</div>

<details>
<summary><b>Block Diagram</b></summary> 
TBD
</details>

<details>
<summary><b>Pin Map</b></summary> 
<img src="/assets/images/20170718_w7500p_pinout-ca62240f7b8358a7705c4955b0f2e921.png" alt="W7500P_Block_Diagram" width="500"/>
</details>

## Features

* ARM Cortex-M0( MAX 48MHz)
* Hardwired TCP/IP Core
    * 8 Sockets
    * SRAM for socket: 32 KB
* PHY : IC+(IP101G)
* Memories
  * Flas: 128 KB, SRAM: 16KB, ROM for boot code: 6 KB
* Clock, reset and supply management
	* POR (Power-On Reset)
	* Internal Voltage Regulator : 3.3V to 1.5V
	* 8-to-24MHz external crystal oscillator
	* Internal 8MHz RC Oscillator
	* PLL for CPU clock
* ADC : 12bit, 8ch, 1Msps
* DMA
    * 6-channel DMA controller(Peripheral supported: UARTs, SPIs)
* GPIO
    * 34 I/Os (15 IO x 2ea, 4 IO x 1ea)
* Debug mode
    * Serial Wire Debug (SWD)
* Timer/PWM
	* 1 Watchdog (32-bit down-counter)
	* 4 Timers (32-bit or 16-bit down-counter)
	* 8 PWMs (32-bit counter/timers with programmable 6-bit prescaler)
* Communication Interfaces
    * 3 UART (2 UARTs with FIFO and Flow Control, 1 simple UART)
    * 2 SPI
* Crypto
    * 1 RNG (Random Number Generator): 32-bit random number
* Package
    * 64 LQFP (7x7 mm)

-----

## Documentation

### Datasheet
| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [![link](\img\download.png) W7500P Datasheet](/img/products/w7500/w7500x_ds_v110.pdf) | Technical specifications and features of the W7500P chip | - |
| [![link](\img\download.png) W7500P Internal PHY Datasheet](/img/products/w7500/overview/IP101G_DS_R01_20121224.pdf) | How to control the internal PHY of W7500P using indirect register access via PHYR/PHYSR, with busy flag polling for read/write operations. | - |

### Technical Documents

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [![link](\img\download.png) W7500P Reference Manual](/img/products/w7500/w7500x_rm_v112_20181017_.pdf) | Known issues, register details, and functional corrections for the W7500P chip | - |
| [![link](\img\download.png) W7500P Errata(EN)](/img/products/w7500/w7500x_erratasheet_v120e.pdf)<br /> [![link](\img\download.png) 7500P Errata(KR)](/img/products/w7500/w7500x_erratasheet_v120k.pdf)  |  Known issues and corrections for the chips| - |
| [![link](\img\download.png) How to Access W7500x PHY Register](/img/products/w7500p/ref_sch/how_to_access_phy_application_note_v100.pdf) | W7500x PHY is accessed indirectly via PHYR/PHYSR registers; read/write operations use busy flag polling to ensure proper completion | - |
| [![link](\img\download.png) Limitation Note ARP problem in the NLB environment](/img/products/w7500/w7500_arp_problem_in_the_nlb.pdf) | Technical specifications and features of the W7500P chip | - |


### Getting Started

| **Title** | **Description** | **Notes** |
| --------- | --------------- | --------- |
| [![link](\img\link.png) How to install KEIL](../w7500x_Common_resource/appnote/How_to_install_KEIL.md) | Step-by-step guide for installing KEIL development environment for W7500P | - |
| [![link](\img\link.png) How to make KEIL new project for W7500](../w7500x_Common_resource/appnote/How_to_make_KEIL_new_project_for_W7500.md) | Tutorial for creating new KEIL projects for W7500P development | - |
| [![link](\img\link.png) How to use MDK for W7500 Peripherals Examples](/Product/Chip/MCU/w7500x_Common_resource/appnote/how-to-make-keil-new-project-for-w7500) | Guide for using MDK with W7500P peripheral examples | - |
| [![link](\img\link.png) How to use GCC for W7500 Peripherals Examples](../w7500x_Common_resource/appnote/How_to_use_GCC_for_W7500_Peripherals_Examples.md) | Instructions for using GCC compiler with W7500P peripheral examples | - |
| [![link](\img\link.png) How to use ISP tool](../w7500x_Common_resource/appnote/How-to-use-ISP-tool.md) | Guide for using In-System Programming tool with W7500P | - |




## Software Resources
<Tabs groupId="software" queryString>
    <TabItem value="driver" label="Driver" default >

  ### Driver
  
      | **Resource** | **Description** |
      |--------------|-----------------|
      | [![link](\img\link.png) Library and Peripheral Example](https://github.com/Wiznet/W7500x_StdPeriph_Lib) | The W7500p Standard Peripherals library provides a rich set of examples covering the main features of each peripheral |
        
  
  </TabItem>
</Tabs>


## Hardware Resources

### Technical Resources

| **Resource**           | **Description**                | **Notes**                           |
|------------------------|--------------------------------|-------------------------------------|
| [![link](\img\link.png) Reference Schemati](https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/01_iMCU/W7500P/Reference%20Schematic/W7500P_Ref_Schematic_V130.pdf)  |Typical application schemati       | Includes recommended circuit design |

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

<Tabs groupId="modules"  queryString >
 <TabItem value="evb" label="Evaluation Boards" >

### Evaluation Boards

  <div className="link-card">
  <a
    href="https://docs.wiznet.io/Product/Mbed-WIZwiki-Platform/wizwiki-w7500p"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/img/products/w7500p/overview/wizwiki-w7500p.png" alt="wizwiki-w7500p" />
    <div>
      <h3>WizWiki-w7500p</h3>
      <p>
       WIZnet WIZwiki Platform based on WIZnet's MCU. WIZnet WIZwiki-W7500P is a WIZwiki platform board based on W7500P.
      </p>
    </div>
  </a>
  </div>  
  </TabItem>

 <TabItem value="s2e" label="Serial to Ethernet module" default>
### Serial to Ethernet module

   <div className="link-card">
  <a
    href="https://docs.wiznet.io/Product/S2E-Module/WIZ750SR"
    target="_blank"
    rel="noopener noreferrer"
    className="link-card-content"
  >
    <img src="/img/products/wiz750sr/wiz750sr_rev1.0_main_1024x693.png" alt="WIZ750SR" />
    <div>
      <h3>WIZ750SR</h3>
      <p>
       WIZ750SR is a compact sized serial to Ethernet module using the W7500P Ethernet MCU 
      </p>
    </div>
  </a>
  </div>  
  </TabItem>
</Tabs>


[link-WIZ750SR]: https://docs.wiznet.io/Product/S2E-Module/WIZ750SR
[link-WIZwiki-W7500P]: https://docs.wiznet.io/Product/Mbed-WIZwiki-Platform/wizwiki-w7500p

