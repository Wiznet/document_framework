---
id: flowcontrol
title: UART Hardware Control example
date: 2020-06-10
--- 

******************************************************************************
(C) COPYRIGHT 2015 WIZnet Co.,Ltd.

  * file    : UART/Uart_HardwareFlowControl/readme.md 
  * author  : IOP Team
  * version : V1.0.0
  * date    : 1-May-2015
  * brief   : Description of the Uart HardwareFlowControl example.
******************************************************************************
THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS.
******************************************************************************

### Example Description

This example provides a description of how to use the UART with hardware flow
control and communicate with another UART.(UART0 and UART1 connect)
First, the UART2 send the debug data to the hyperterminal.
The receive buffer have a RxBufferSize bytes as maximum.

The UART0/UART1 is configured as follow:

  - BaudRate = 115200 baud  
  - Word Length = 8 Bits
  - One Stop Bit
  - No parity
  - Hardware flow control enabled (RTS and CTS signals)
  - Receive and transmit enable
  - Enable FIFOs(FEN of UART_LCR-H)

This example describes that the data send from UART0 to UART1.
The interrupts are generated when the fill level progresses through the
trigger level.

UART1 Check Point when RX status operate
  1. The bit RXFF of UARTFR(6) confirm '1'
  2. The bit BUSY of UARTFR(3) confirm '1'
  3. Send RTS as '1' (RTS of UARTCR(11))and the nUARTRTS pin is LOW.

________________________________________
### Directory contents

  - UART/Uart_HardwareFlowControl/main.c                                            (Main program)
  - UART/Uart_HardwareFlowControl/W7500x_conf.h                                     (Library Configuration file)
  - UART/Uart_HardwareFlowControl/W7500x_it.h                                       (Interrupt handlers header file)
  - UART/Uart_HardwareFlowControl/W7500x_it.c                                       (Interrupt handlers)
  - UART/Uart_HardwareFlowControl/MDK/W7500x_Uart_HardwareFlowContolTest.uvproj     (Project file)
  - UART/Uart_HardwareFlowControl/GCC/Makefile                        			(GCC Make file)


### Hardware and Software environment 

  - This example runs on W7500 Connectivity line Devices.
  
  -  W7500 Set-up
```
   --------------            --------------
  |    UART0     |          |    UART1     |
  |              |          |              |
  |   (PA_13)TXD |----------|   RXD(PB_03) |
  |   (PA_14)RXD |----------|   TXD(PB_02) |
  |   (PA_11)CTS |----------|   RTS(PB_01) |
  |   (PA_12)RTS |----------|   CTS(PB_00) |
  |              |          |              |
  |              |          |              |
   --------------            --------------

```
   - CTS(PA11) and RTS(PB00) connected.
   - RTS(PA12) and CTS(PB01) connected.
   - TXD(PA13) and RXD(PB02) connected.
   - RXD(PA14) and TXD(PB03) connected.
  
 
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
