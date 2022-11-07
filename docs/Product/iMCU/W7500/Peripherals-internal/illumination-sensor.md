---
id: illumination-sensor
title: ADC example (Illumination sensor)
date: 2020-06-10
--- 

******************************************************************************
(C) COPYRIGHT 2015 WIZnet Co.,Ltd.

  * file    : Illumination_regled/readme.md
  * author  : IOP Team
  * version : V1.0.0
  * date    : 1-May-2015
  * brief   : Description of the Illumination sensor & REG led toggle example.
******************************************************************************
THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS.
******************************************************************************

### Example Description

This example shows how to use ADC of W7500.
In this example, ADC input is connected with illumination sensor. And control RGB led by illumination sensor value.

In this example:
  - Set the Alternate function of PAD for this example.
  - Sensing analog value of Illumination sensor.
  - If dark, ON the led, if not, OFF the led with GPIO control.
______________________________________________________________________________

### Directory contents

  - ADC/Illumination_regled/main.c                                (Main program)
  - ADC/Illumination_regled/W7500x_it.c                           (Interrupt Handlers)
  - ADC/Illumination_regled/W7500x_it.h                           (Interrupt Handlers Header file)
  - ADC/Illumination_regled/W7500x_conf.h                         (Library Configuration file)
  - ADC/Illumination_regled/MDK/W7500x_Illumination_regled.uvproj     (MDK Project file)
  - ADC/Illumination_regled/GCC/Makefile                          (GCC Make file)
______________________________________________________________________________

### Hardware and Software environment 

  - This example has been tested with WIZnet WIZwiki W7500 platform.
  - To select the WIZnet WIZwiki platform used to run the example.

  - WIZwiki W7500 Set-up
    - Use ADC input connected to PC_15(A0) pin.
    - Use LED(R) connected to PC_08 pin.
    - Use LED(G) connected to PC_09 pin.
    - Use LED(B) connected to PC_05 pin.
    - In order to use the LEDs to be changed from PAD_AF0 to PAD_AF1.  
    
  - Hardware Connection
  
     5V - 10K ohm register - PC_15(A0) - Illumination sensor - GND
______________________________________________________________________________

### How to use it ? 

In order to make the program work, you must do the following :

 - Open your preferred toolchain.
 - Rebuild all files and load your image into target memory.
 - Run the example.
 - WIZwiki W7500 where the Flash memory density ranges 128Kbytes.
 - If you have any questions, please use the forum site.
   - "https://forum.wiznet.io/"
______________________________________________________________________________
### Flow Chart 

 - Power on ADC
 - Select ADC channel
 - ADC start
 - Wait until EOC (end of conversion)
 - Read ADC value

&copy; COPYRIGHT 2015 WIZnet Co.,Ltd.
