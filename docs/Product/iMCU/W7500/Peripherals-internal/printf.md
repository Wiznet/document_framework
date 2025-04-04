---
id: printf
title: UART Polling example
date: 2020-04-03
---

******************************************************************************
(C) COPYRIGHT 2015 WIZnet Co.,Ltd.

  * file    : UART/Polling/readme.md 
  * author  : IOP Team
  * version : V1.0.0
  * date    : 1-May-2015
  * brief   : Description of the UART_Polling example.
******************************************************************************
THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS.
******************************************************************************

### Example Description

This example provides a basic communication between UART0 and UART1 using flags.


First, the UART0 sends TxBuffer to UART1. The UART1 reads the received data and
store it into RxBuffer.
The received data is then compared with the send ones and the result of this 
comparison is stored in the "TransferStatus" variable.

The UART0/UART1 is configured as follow:

  - BaudRate = 115200 baud  
  - Word Length = 8 Bits
  - One Stop Bit
  - No parity
  - Hardware flow control disable
  - Receive and transmit enable
    
This example describes that the data send from UART0 to UART1.

______________________________________________________________________________
### Directory contents

  - UART/Polling/main.c                                            (Main program)
  - UART/Polling/W7500x_conf.h                                     (Library Configuration file)
  - UART/Polling/W7500x_it.h                                       (Interrupt handlers header file)
  - UART/Polling/W7500x_it.c                                       (Interrupt handlers)
  - UART/Polling/MDK/W7500x_Uart_Polling.uvproj                    (Project file)
  - UART/Polling/GCC/Makefile                        		   	  (GCC Make file)


### Hardware and Software environment 

  - This example runs on W7500 Connectivity line Devices.
  
  -  W7500 Set-up

```
   --------------            --------------
  |    UART0     |          |     UART1    |
  |              |          |              |
  |   (PA_13)TXD |----------|   RXD(PB_03) |
  |   (PA_14)RXD |----------|   TXD(PB_03) |
  |              |          |              |
  |              |          |              |
   --------------            --------------
```

  - TXD(PA13) and  RXD(PB_03) connected.
  - RXD(PA14) and  TXD(PB_02) connected.
  
______________________________________________________________________________

### How to use it ? 
In order to make the program work, you must do the following:
 - Copy all source files from this example folder to the template folder under
   Project\Peripheral_Example
 - Open your preferred toolchain 
 - Rebuild all files and load your image into target memory
 - Run the example 
______________________________________________________________________________

&copy; COPYRIGHT 2015 WIZnet Co.,Ltd.
