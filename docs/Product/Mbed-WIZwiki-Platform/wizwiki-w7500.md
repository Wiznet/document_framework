---
id: wizwiki-w7500
title: WIZwiki-W7500
date: 2020-04-07
---

![WIZwiki-W7500](/img/products/w7500/overview/wizwiki-w7500_main.png)

-----

## WIZwiki Platform

WIZnet WIZwiki Platform based on WIZnet's MCU. WIZnet WIZwiki-W7500 is a
WIZwiki platform board based on the W7500. The IOP4IoT W7500 chip is a
one-chip solution which integrates an ARM Cortex-M0, 128KB Flash and
hardwired TCP/IP core for various embedded application platforms
especially internet of things. If you use WIZwiki-W7500, you will be
able to easily develop a prototype. It is compatible with Arduino
Shields. This is using the CMSIS-DAP USB and ISP Header easily available
firmware writing.

-----

## Features

**WIZnet W7500**

   * ARM Cortex-M0 Core
   * 48MHz, 128KB Flash
   * 16KB RAM
   * 32KB RAM for TCP/IP - Can be extended to system RAM
   * Hardwired TCP/IP Core
   * MII Interface
   * ADC (8)
   * GPIO (53)
   * SWD (Serial Wire Debug)
   * Timer/PWM 
   * UART (3)
   * SPI (2)
   * I2C (Operate using GPIO)

**External Ethernet PHY**

 * IC+ IP101GA
 * Single Port 10/100 MII/RMII/TP/Fiber Fast Ethernet Transceiver 
 * Auto MDI/MDIX function 
 * Supports MDC and MDIO to communicate with the MAC


**CMSIS-DAP**


 * LPC11U35FHI33/501, ARM Cortex-M0 Core, NXP
 * Drag-n-drop programming
 * USB Serial Port
 * Easy to use C/C++ SDK


**Connector**

   * USB Mini B Type
   * Slim Size RJ45(with transformer)
   * Arduino compatible pin headers
   * SWD Header (1.27mm and 2.54mm)
   * GPIO Header
   * ISP Header


**ETC**

   * 5V USB Power or 5V header supply
   * 2 system SW - RESET SW, BOOT SW
   * RGB LED
   * Micro SD card slot

**WIZwiki-W7500 Blockdiagram**  
![WIZwiki-W7500 Blockdiagram](/img/products/w7500/overview/wizwiki-w7500_blockdiagram_v1.1.png)  

**WIZwiki-W7500 Callout**  
![WIZwiki-W7500 Callout](/img/products/w7500/overview/wizwiki-w7500_callout.png)  

**WIZwiki-W7500 Detail Pinout**  
![wizwiki_w7500_pinout_wiki_150701_detail.png](/img/products/w7500/overview/wizwiki_w7500_pinout_wiki_150701_detail.png)  

**WIZwiki-W7500 Simple Pinout**  
![wizwiki_w7500_pinout_wiki_150701_simple.png](/img/products/w7500/overview/wizwiki_w7500_pinout_wiki_150701_simple.png)  

-----


## Firmware

**W7500 Library**

   * [W7500 Library PAGE ](./../iMCU/W7500/Libraries-Examples.md)

-----


## Getting Started

   * [How to start WIZwiki-W7500 Board](./Getting-Started/How_to_start_WIZwiki_W7500_Board.md)
   * [How to install WIZwiki-W7500 serial driver](./Getting-Started/How_to_install_WIZwiki_W7500_serial_driver.md)
   * [How to write the firmware into WIZwiki-W7500](./Getting-Started/How_to_write_the_firmware_into_WIZwiki_W7500.md)
   * [How to debug Wizwiki-W7500](./Getting-Started/How_to_debug_Wizwiki_W7500.md)
   * [How to write the firmware into CMSIS-DAP](./Getting-Started/How_to_write_the_firmware_into_CMSIS_DAP.md)

-----


## Make New WIZwiki-W7500 Projects

   * [How to use ARM mbed.org platform](./WIZwiki-W7500-Mbed-Starter-Kit/Tutorial-Eng.md)
   * [How to install KEIL uVision5](./../iMCU/W7500/documents/appnote/How_to_install_KEIL.md)
   * [How to create KEIL uVision5 new project for W7500](./../iMCU/W7500/documents/appnote/How_to_make_KEIL_new_project_for_W7500.md)
   * [How to use MDK for W7500 Peripherals Examples](./../iMCU/W7500/documents/appnote/How-to-use-MDK-for-W7500-Peripherals-Examples.md)
   * [How to use gcc for W7500 Peripherals Examples](./../iMCU/W7500/documents/appnote/How_to_use_GCC_for_W7500_Peripherals_Examples.md)

-----


## Technical Reference

**Datasheet**

   * 🌎[W7500 Documents](./../iMCU/W7500/Documents.md)
   * 🌎<a href="/img/products/w7500/overview/IP101G_DS_R01_20121224.pdf" target="_blank">IP101GA Datasheet</a>
   * 🌎<a href="/img/products/w7500/overview/LPC11U3X.pdf" target="_blank">LPC11U35FHI33/501 Datasheet</a>

**Schematic**

   **Schematic Version 1.1**



   * <a href="/img/products/wizwiki_w7500/wizwiki_w7500_v1.1.zip" target="_blank">WIZwiki-W7500 V1.1 Schematic (Altium Designer)</a>
   * <a href="/img/products/w7500/overview/wizwiki_w7500_v1.1.pdf" target="_blank">WIZwiki-W7500 V1.1 Schematic (PDF)</a>

  - **Schematic Version 1.0**

   * <a href="/img/products/wizwiki_w7500/wizwiki-w7500_v1.0.zip" target="_blank">WIZwiki-W7500 V1.0 Schematic (Altium Designer)</a>
   * <a href="/img/products/w7500/overview/wizwiki_w7500_sch_v1.0_150401.pdf" target="_blank">WIZwiki-W7500 V1.0 Schematic (PDF)</a>

**Part list**

   * <a href="/img/products/w7500/overview/wizwiki_w7500_bom_v1.0_150407.pdf" target="_blank">WIZwiki-W7500 V1.0 BOM (PDF)</a>
   
**Dimension**

   * WIZwiki-W7500 V1.0 Dimension

![WIZwiki-W7500 Dimension](/img/products/w7500/overview/wizwiki-w7500_dimension.png)

-----


## Etc.

**Serial Port Driver**

   * 🌎[ARM mbed Window serial configuration PAGE](http://os.mbed.com/handbook/Windows-serial-configuration)

**W7500 ISP Program**

   * [Go to ISP tool manual & Program download](./../iMCU/W7500/documents/appnote/How-to-use-ISP-tool.md)

 **Examples Binary**

   * [WIZwiki-W7500 Examples Binary](./Getting-Started/How_to_write_the_firmware_into_WIZwiki_W7500.md#examples-binary)
   
    -----
