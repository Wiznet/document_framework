---
id: wizwiki-w7500p
title: WIZwiki-W7500P
date: 2020-04-07
---

![WIZwiki-W7500](/img/products/w7500p/overview/wizwiki-w7500p.png)

-----


## WIZwiki Platform

WIZnet WIZwiki Platform based on WIZnet's MCU. WIZnet WIZwiki-W7500P is
a WIZwiki platform board based on W7500P. The IOP4IoT W7500P chip is the
one-chip solution which integrates an ARM Cortex-M0, 128KB Flash,
hardwired TCP/IP core for various embedded application platforms, 10/100
Ethernet MAC and PHY, and especially internet of things. The TCP/IP core
is a market-proven hardwired TCP/IP stack and PHY is IC plus IP101G, an
IEEE 802.3/802.3u Fast Ethernet Transceiver for 10/100Mbps. The
Hardwired TCP/IP stack supports the TCP, UDP, IPv4, ICMP, ARP, IGMP and
PPPoE which has been used in various applications for more than 15
years. W7500P best suits users who need Internet connectivity.

-----


## Features

**WIZnet W7500P**

   * ARM Cortex-M0 Core
   * PHY (IC+(IP101G))
   * 48MHz, 128KB Flash
   * 16KB RAM
   * 32KB RAM for TCP/IP - Can be extended to system RAM
   * Hardwired TCP/IP Core
   * Internal Ethernet PHY
   * MDI Interface
   * ADC (8)
   * GPIO (34)
   * SWD (Serial Wire Debug)
   * Timer/PWM 
   * UART (3)
   * SPI (2)
   * I2C (Operate using GPIO)
   * 64 LQFP (7x7 mm)

**CMSIS-DAP**

 
  * LPC11U35FHI33/501, ARM Cortex-M0 Core, NXP
  * Drag-n-drop programming
  * USB Serial Port
  * Easy to use C/C++ SDK


**Connector**

  * USB Mini B Type
  * Slim Size RJ45(with transformer)
  * Arduino compatible pin headers
  * Xbee Header

**ETC**

   * 5V USB Power or 5V header supply
   * 2 system SW - RESET SW, BOOT SW
   * 1 User SW
   * RGB LED
   * Micro SD card slot

**WIZwiki-W7500P Blockdiagram**  
![WIZwiki-W7500 Blockdiagram](/img/products/w7500p/overview/wizwiki-w7500p_blockdiagram.png)  
**WIZwiki-W7500P Callout**  
![WIZwiki-W7500 Callout](/img/products/w7500p/overview/wizwiki-w7500p_callout.png)  
**WIZwiki-W7500P Pinout**  
![WIZwiki-W7500 Pinout](/img/products/w7500p/overview/wizwiki_w7500p_pinout_mbed_150907.png)  

-----


## Firmware

**W7500P Library**

   * [W7500P Library PAGE](./../iMCU/W7500P/Libraries-Examples.md)

-----


## Getting Started

   * [How to start WIZwiki-W7500P Board](./Getting-Started/How_to_start_WIZwiki_W7500_Board.md)
   * [How to install WIZwiki-W7500P serial driver](./Getting-Started/How_to_install_WIZwiki_W7500_serial_driver.md)
   * [How to write the firmware into WIZwiki-W7500P](./Getting-Started/How_to_write_the_firmware_into_WIZwiki_W7500.md)
   * [How to debug Wizwiki-W7500P](./Getting-Started/How_to_debug_Wizwiki_W7500.md)
   * [How to write the firmware into CMSIS-DAP](./Getting-Started/How_to_write_the_firmware_into_CMSIS_DAP.md)

-----

## Make New WIZwiki-W7500P Projects

   * [How to use ARM mbed.org platform](./WIZwiki-W7500-Mbed-Starter-Kit/Tutorial-Eng.md)
   * [How to install KEIL uVision5](./../iMCU/W7500/documents/appnote/How_to_install_KEIL.md)
   * [How to create KEIL uVision5 new project for W7500](./../iMCU/W7500/documents/appnote/How_to_make_KEIL_new_project_for_W7500.md)
   * [How to use MDK for W7500 Peripherals Examples](./../iMCU/W7500/documents/appnote/How-to-use-MDK-for-W7500-Peripherals-Examples.md)
   * [How to use gcc for W7500 Peripherals Examples](./../iMCU/W7500/documents/appnote/How_to_use_GCC_for_W7500_Peripherals_Examples.md)

-----

## Technical Reference

**Datasheet**

   * [W7500P Documents](./../iMCU/W7500/Documents.md)
   * <a href="/img/products/w7500p/overview/LPC11U3X.pdf" target="_blank">LPC11U35FHI33/501 Datasheet</a>

**Schematic**

  - If your project uses the W7500P, do not refer to the WIZwiki-W7500P
    V1.0 schematic.
  - Refer to the reference schematic of W7500P.
      - 🌎[Reference schematic of W7500P](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/01_iMCU/W7500P/Reference%20Schematic)



  - **Schematic Version 1.0**

   * <a href="/img/products/wizwiki_w7500p/wizwiki-w7500p_sch_v1.0.zip" target="_blank">WIZwiki-W7500P V1.0 Schematic (Altium Designer)</a>
   * <a href="/img/products/w7500p/overview/wizwiki-w7500p_sch_v1.0.pdf" target="_blank">WIZwiki-W7500P V1.0 Schematic (PDF)</a>

**Part list**

   * <a href="/img/products/w7500p/overview/wizwiki_w7500p_bom_v1.0_150909.pdf" target="_blank">WIZwiki-W7500P V1.0 BOM (PDF)</a>

**Dimension**

   * WIZwiki-W7500P V1.0 Dimension

![WIZwiki-W7500P Dimension](/img/products/w7500p/overview/wizwiki-w7500_dimension.png)

-----

## Etc.

**Serial Port Driver**

   * 🌎[ARM mbed Window serial configuration PAGE ](http://os.mbed.com/handbook/Windows-serial-configuration)

**W7500 ISP Program**

   * [Go to ISP tool manual & Program download](./../iMCU/W7500/documents/appnote/How-to-use-ISP-tool.md)

 **Examples Binary**

   * [WIZwiki-W7500 Examples Binary](./Getting-Started/How_to_write_the_firmware_into_WIZwiki_W7500.md#examples-binary)
   
    -----
