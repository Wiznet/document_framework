---
id: wizwiki-w7500eco
title: WIZwiki-W7500ECO
date: 2020-04-07
---

# WIZwiki-W7500ECO

![WIZwiki-W7500ECO](/img/products/wizwiki-w7500eco/wizwiki-w7500eco3dtop.png)

-----


## WIZwiki Platform

WIZnet WIZwiki-W7500ECO is a WIZwiki platform board based on W7500. The
IOP4IoT W7500 chip is a one-chip solution which integrates an ARM
Cortex-M0, 128KB Flash and hardwired TCP/IP core for various embedded
application platforms especially internet of things. You can develop
prototype products more quickly using WIZwiki-W7500ECO and it includes
CMSIS-DAP for debugging and ethernet-phy.

![WIZwiki-W7500ECO TOP Side](/img/products/wizwiki-w7500eco/wizwiki-w7500eco3d0degtop.png)
![WIZwiki-W7500ECO BOTTOM Side](/img/products/wizwiki-w7500eco/wizwiki-w7500eco3d0degbottom.png)

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

 * IC+ IP101GRI
 * Single Port 10/100 MII/RMII/TP/Fiber Fast Ethernet Transceiver 
 * Auto MDI/MDIX function 
 * Supports MDC and MDIO to communicate with the MAC


**CMSIS-DAP**

 * LPC11U35FHI33/501, ARM Cortex-M0 Core, NXP
 * Drag-n-drop programming
 * USB Serial Port
 * Easy to use C/C++ SDK


**Connector**

  * Micro USB
  * Slim Size RJ45(with transformer)
  * GPIO Header


**ETC**

  * Power source - micro USB or external 5V pin
  * 1 RESET SW.
  * RGB LED for CMSIS-DAP
  * 2 Blue LED for USER
  * 2 2.54mm 1x20 Externel connector


**WIZwiki-W7500ECO Blockdiagram**  
![WIZwiki-W7500ECO Blockdiagram](/img/products/wizwiki-w7500eco/wizwiki-w7500eco_blockdiagram_v1.1.png)  
**WIZwiki-W7500ECO Callout**  
![WIZwiki-W7500ECO Callout](/img/products/wizwiki-w7500eco/wizwiki-w7500eco_callout.png)


**WIZwiki-W7500ECO Detail Pinout**  
![WIZwiki-W7500ECO Detail Pinout](/img/products/wizwiki-w7500eco/wizwiki-w7500eco_detailpinout.png)


**WIZwiki-W7500ECO Simple Pinout**  
![WIZwiki-W7500ECO Simple Pinout](/img/products/wizwiki-w7500eco/wizwiki-w7500eco_simplepinout.png)

-----


## Firmware

**W7500 Library**

  * [W7500 Library PAGE](./../iMCU/W7500/Libraries-Examples.md)
    
    -----


## Getting Started

   * [How to start WIZwiki-W7500 Board](./Getting-Started/How_to_start_WIZwiki_W7500_Board.md)
   * [How to install WIZwiki-W7500 serial driver](./Getting-Started/How_to_install_WIZwiki_W7500_serial_driver.md)
   * [How to write the firmware into WIZwiki-W7500](./Getting-Started/How_to_write_the_firmware_into_WIZwiki_W7500.md)
   * [How to debug Wizwiki-W7500](./Getting-Started/How_to_debug_Wizwiki_W7500.md)
   * [How to write the firmware into CMSIS-DAP](./Getting-Started/How_to_write_the_firmware_into_CMSIS_DAP.md)

-----


## Make New WIZwiki-W7500ECO Projects
 
   * [How to install KEIL uVision5](./../iMCU/W7500/documents/appnote/How_to_install_KEIL.md)
   * [How to create KEIL uVision5 new project for W7500](./../iMCU/W7500/documents/appnote/How_to_make_KEIL_new_project_for_W7500.md)
   * [How to use MDK for W7500 Peripherals Examples](./../iMCU/W7500/documents/appnote/How-to-use-MDK-for-W7500-Peripherals-Examples.md)
   * [How to use gcc for W7500 Peripherals Examples](./../iMCU/W7500/documents/appnote/How_to_use_GCC_for_W7500_Peripherals_Examples.md)

-----


## Technical Reference

**Datasheet**

   * [W7500 Documents](./../iMCU/W7500/Documents.md)
   * <a href="/img/products/w7500/overview/IP101G_DS_R01_20121224.pdf" target="_blank">IP101GRI Datasheet</a>
   * <a href="/img/products/w7500p/overview/LPC11U3X.pdf" target="_blank">LPC11U35FHI33/501 Datasheet</a>


**Schematic**

  - **Schematic Version 1.1**

   * <a href="/img/products/wizwiki-w7500eco/wizwiki_w7500_eco_v1.1.zip" target="_blank">WIZwiki-W7500eco V1.1 Schematic (Altium Designer)</a>
   * <a href="/img/products/wizwiki-w7500eco/wizwiki-w7500eco.pdf" target="_blank">WIZwiki-W7500eco V1.1 Schematic (PDF)</a>

**Part list**

   * <a href="/img/products/wizwiki-w7500eco/wizwiki_w7500eco_v1.1_partlist.pdf" target="_blank">WIZwiki-W7500eco V1.1 BOM (PDF)</a>

**Dimension**

   * WIZwiki-W7500ECO V1.1 Dimension

![WIZwiki-W7500ECO Dimension](/img/products/wizwiki-w7500eco/wizwiki_w7500_eco_v1.1_dim_01.png)

-----


## Etc.

**Serial Port Driver**

   * [ARM mbed Window serial configuration PAGE ](https://os.mbed.com/handbook/Windows-serial-configuration)
   
**W7500 ISP Program**

   * [Go to ISP tool manual & Program download](./../iMCU/W7500/documents/appnote/How-to-use-ISP-tool.md)

 **Examples Binary**
   
   * [WIZwiki-W7500 Examples Binary](./Getting-Started/How_to_write_the_firmware_into_WIZwiki_W7500.md#examples-binary)

-----
