---
id: getting-started
title: Getting Started
date: 2023-10-18
---

**This section was written on the assumption that the use of Surf5 board.**

-----

### What's in the Box?

Comming soon
<!--
|                                                                              |
| ---------------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr-ttl-evb_package_1024x858.jpg) |
| Figure: ***WIZ750SR Rev. 1.1 Evaluation Board Package***                     |

The WIZ750SR-232 evaluation board package contains the following parts.

  - WIZ750SR-232 Module
  - WIZ750SR-232/TTL-EVB Evaluation Board
  - Cables (Ethernet / Serial / Micro USB Type B)

The entire list of parts of the board is available at the [WIZ750SR Overview: Product Contents](./Overview-EN.md#product-contents) page.

-->
-----

## PC Settings

  ### Install UART to USB driver 

  Surf5 has UART to USB converter IC(CH340N) that need to install driver.
  you can download driver <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/01_iMCU/W7500P/Surf5/Doc/CH340N/Driver.ZIP">here</a> or CH340 manufacturer's web
  CH340N's manufacture [link](https://wch-ic.com/downloads/CH341SER_ZIP.html)

<a target="_blank" href={require('/img/osh/surf5/Setup_img.png').default}><img src={require('/img/osh/surf5/Setup_img.png').default} alt="Surf5"/></a>
  After unzipping the downloaded ZIP file, you'll find a SETUP.EXE executable in the folder, which you'll need to run.
<a target="_blank" href={require('/img/osh/surf5/install_img.png').default}><img src={require('/img/osh/surf5/install_img.png').default} alt="Surf5"/></a>
  When you run SETUP.EXE, the DriverSetup window appears, and you can select INSTALL to install the driver.

  ### Example Source Using Keil

* [How to install KEIL uVision5](./../iMCU/W7500/documents/appnote/How_to_install_KEIL.md)
* [How to create KEIL uVision5 new project for W7500](./../iMCU/W7500/documents/appnote/How_to_make_KEIL_new_project_for_W7500.md)

  ### Example Source Using VSCODE  

  comming soon