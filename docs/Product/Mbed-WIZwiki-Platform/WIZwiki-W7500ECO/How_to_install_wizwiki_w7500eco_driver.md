---
id: how_to_install_wizwiki_w7500eco_driver
title: How to install WIZwiki-W7500ECO serial driver
date: 2020-04-07
---

## Overview

CMSIS-DAP of WIZwiki-W7500ECO has two functions. The first function is
firmware writing to the W7500 (Target MCU) through USB Interface. The
second function is to receive and transmit data in the UART2 of W7500
using the USB Interface.  
The first function is used without the driver, but the second function
is used after install the driver.  
CMSIS-DAP Interface of WIZwiKI-W7500ECO has shows as the photo below.  
![CMSIS-DAP Interface](/img/products/wizwiki_w7500eco/start_getting_started/wizwiki-w7500eco_cmsis-dap_block.png)

-----

## Serial driver installation

The driver could be found on the LINK below, click on the "Download
latest driver" can download the latest driver.  
[ARM mbed Window serial configuration PAGE](http://developer.mbed.org/handbook/Windows-serial-configuration)  
If the driver is successfully installed, serial port that is created as
"mbed Seral Port (COMn)" in Device Manager.

-----