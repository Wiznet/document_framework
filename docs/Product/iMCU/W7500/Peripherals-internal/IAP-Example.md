---
id: iap-example
title: Flash example (IAP example)
date: 2020-06-10
--- 

******************************************************************************
(C) COPYRIGHT 2015 WIZnet Co.,Ltd.

  * file    : Flash/IAP_Example/readme.md
  * author  : IOP Team
  * version : V1.0.0
  * date    : 1-May-2015
  * brief   : Description of IAP example.
******************************************************************************
THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS.
******************************************************************************

### Example Description

This example shows how to use IAP of W7500.

In this example:
  - SET Start address of Data memory & flash memory
  - Data0 area Erase , Read and Write Test (Start address :  0x0003_FE00, Size : 256)
  - Data1 area Erase, Read and Write Test (Start address : 0x0003_FF00, Size : 256)
  - Code Flash Block Rease, Read and Write Test (Start address : 0x0001F000, Size : 4096)
______________________________________________________________________________

### Directory contents

  - Flash/IAP_Example/main.c                                (Main program)
  - Flash/IAP_Example/W7500x_it.c                           (Interrupt Handlers)
  - Flash/IAP_Example/W7500x_it.h                           (Interrupt Handlers Header file)
  - Flash/IAP_Example/W7500x_conf.h                         (Library Configuration file)
  - Flash/IAP_Example/MDK/W7500x_IAP_Example.uvproj     (MDK Project file)
  - Flash/IAP_Example/GCC/Makefile                          (GCC Make file)
______________________________________________________________________________

### Hardware and Software environment 

  - This example has been tested with WIZnet WIZwiki W7500 platform.
  - To select the WIZnet WIZwiki platform used to run the example.

  - WIZwiki W7500 Set-up
    - No need to hardware setup
______________________________________________________________________________

### How to use it ? 

In order to make the program work, you must do the following :

 - Open your preferred toolchain.
 - Rebuild all files and load your image into target memory.
 - Run the example.
 - WIZwiki W7500 where the Flash memory density ranges 128Kbytes.
 - If you have any questions, please use the forum site.
   - "https://maker.wiznet.io/forum/"
______________________________________________________________________________


&copy; COPYRIGHT 2015 WIZnet Co.,Ltd.
