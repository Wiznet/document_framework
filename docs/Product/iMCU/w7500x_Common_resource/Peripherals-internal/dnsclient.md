---
id: dmdnsclient
title: DNS Client for TCP/IP Offload Engine example
date: 2020-06-10
--- 

******************************************************************************
(C) COPYRIGHT 2015 WIZnet Co.,Ltd.

  * file    : WZTOE/DNSClient/readme.md
  * author  : IOP Team
  * version : V1.0.0
  * date    : 1-May-2015
  * brief   : Description of the TCP adn UDP Loopback example.
******************************************************************************
THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS.
******************************************************************************

### Example Description

This example shows how to use DNS Client in UDP mode.

In this example:

  - 1) Domain Name Service Client in UDP mode
  - 2) For more detail, please visit [TCP Function description](tcp-function.md)
______________________________________________________________________________

### Directory contents

  - WZTOE/ioLibrary/Ethernet/socket.c                     (socket APIs)
  - WZTOE/ioLibrary/Ethernet/wizchip_config.c             (WZTOE Config.)
  - WZTOE/ioLibrary/Internet/dhcp.c                       (DHCP Client)
  - WZTOE/ioLibrary/Internet/dns.c                        (DNS Client)
  - WZTOE/ioLibrary/MDIO/W7500x_miim.c                    (mdio via gpio)
  - WZTOE/DNSClient/main.c                                (Main program)
  - WZTOE/DNSClient/W7500x_it.c                           (Interrupt Handlers)
  - WZTOE/DNSClient/W7500x_it.h                           (Interrupt Handlers Header file)
  - WZTOE/DNSClient/W7500x_conf.h                         (Library Configuration file)
  - WZTOE/DNSClient/MDK/W7500x_WZTOE_DNSClient.uvproj  (MDK Project file)
  - WZTOE/DNSClient/GCC/Makefile                          (GCC Make file)
______________________________________________________________________________

### Hardware and Software environment 

  - This example has been tested with WIZnet WIZwiki W7500 platform.
  - To select the WIZnet WIZwiki platform used to run the example.

  - WIZwiki W7500 Set-up
    - Use PB_14 and PB_15 for MDIO
    - In order to use IC+101 PHY to be set Pull-up and Strength at TXD[3:0] and TXE
    
  - Hardware Connection
    - PB_14 --- MDIO (@IC+101)
	- PB_15 --- MDC  (@IC+101)
  
______________________________________________________________________________

### How to use it ? 

In order to make the program work, you must do the following :

 - Open your preferred toolchain.
 - Rebuild all files and load your image into target memory.
 - Run the example.
 - WIZwiki W7500 where the Flash memory density ranges 128Kbytes.
 - If you have any questions, please use the forum site.
   - "https://maker.wiznet.io/forum/"

&copy; COPYRIGHT 2015 WIZnet Co.,Ltd.
