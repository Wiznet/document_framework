---
id: led-toggle
title: EXTI LED Toggle example
date: 2020-06-10
--- 

******************************************************************************
(C) COPYRIGHT 2015 WIZnet Co.,Ltd.

  * file    : EXTI/LED_Toggle/readme.md
  * author  : IOP Team
  * version : V1.0.0
  * date    : 1-May-2015
  * brief   : Description of the EXTI LED Toggle example.
******************************************************************************
THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS.
******************************************************************************

### Example Description

This example shows how to configure external interrupt lines.
In this example, EXTI line is configured to generate an interrupt on each rising or falling edge. In the interrupt routine a LED connected to a specific GPIO pin is toggled.
In this example:
  - EXTI line is mapped to PA.00

After EXTI configuration, a software interrupt is generated on the EXTI toggles LED(R).
After that, when rising edge is detected on EXTI, LED(R) toggles.
If WIZwiki W7500 is used, when button is pressed, LED(R) toggles but, Button has to be configured separately.

______________________________________________________________________________

### Directory contents

  - EXTI/Blink_LED/main.c                                (Main program)
  - EXTI/Blink_LED/W7500x_it.c                           (Interrupt Handlers)
  - EXTI/Blink_LED/W7500x_it.h                           (Interrupt Handlers Header file)
  - EXTI/Blink_LED/W7500x_conf.h                         (Library Configuration file)
  - EXTI/Blink_LED/MDK/W7500x_EXTI_LED_Toggle.uvproj     (MDK Project file)
  - EXTI/Blink_LED/GCC/Makefile                          (GCC Make file)
______________________________________________________________________________

### Hardware and Software environment

  - This example has been tested with WIZnet WIZwiki W7500 platform.
  - To select the WIZnet WIZwiki platform used to run the example.

  - WIZwiki W7500 Set-up
    - Use LED(R) connected to PC_08 pin.
    - Use EXTI connected to PA_00 pin.
    - In order to use the LED to be changed from PAD_AF0 to PAD_AF1.
    - Button has to be configured separately.
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
