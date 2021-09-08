---
id: w5100s_evb
title: W5100S-EVB
date: 2020-04-03
---

  - W5100S chip development platform for **net-enabled** microcontroller
    applications
  - Ethernet (W5100S Hardwired TCP/IP chip) and 32-bit ARM® Cortex™-M3
    based designs
  - **Arduino Pin-compatible** platform hardware.

## Overview

W5100S-EVB is an evaluation board for W5100S chip based on the 32-bit
ARM® Cortex™-M3 microcontroller. It is the easy way to develop internet
connection for efficient and small embedded systems using W5100S,
WIZnet's hardwired TCP/IP embedded Ethernet controller. It has been
designed to be hardware pin-compatible with 'Arduino shields' for the
'Arduino UNO Rev3' and other footprint-compatible boards.

It is based on the STM STM32F103VCT6 MCU with a 32-bit ARM® Cortex™-M3
core running at Maximum 72MHz. It includes 256 or 512kB Flash memory,
64kB SRAM various interfaces, including BUS(Flexible static memory
controller), SPI/SSP, I2C, UART, ADC, PWM and other I/O interfaces.
Additionally, Two programmable push button switches, one RGB LED and a
10/100 Base-Tx RJ-45 connector with an integrated transformer are on
board to implement embedded networking applications.

The W5100S-EVB provides benefits in developing easier and powerful
network applications on small form-factor and non-OS based embedded
devices using the W5100S chip.

![](/img/products/w5100s/w5100s_evb/w5100s-evb_partdescription.png)

-----


## Features

**WIZnet W5100S Hardwired TCP/IP chip**

  - Hardwired TCP/IP embedded Ethernet controller
  - Parallel Host Interface (External BUS Interface)
  - SPI (Serial Peripheral Interface) Microcontroller Interface
  - 16kB internal Tx/Rx socket buffer memory (4 socket)
  - **Support SOCKET-less Command: ARP-Request, PING-Request**
  - Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)
  - Support Auto-MDIX when Auto-Negotiation Mode.
  - Hardwired TCP/IP stack supports TCP, UDP, WOL over UDP, ICMP,
    IGMPv1/v2, IPv4, ARP,PPPoE protocols
  - ![](/img/link.png) [W5100s Product page](Overview.md)

**STMicroelectronics STM32F103VCT6 MCU**

  - 32-bit ARM® Cortex™-M3 microcontroller running at up to 50MHz
  - 256 Kbytes of Flash memory
  - 48 Kbytes of SRAM
  - 5 × USARTs
  - 4 × 16-bit timers, 2 × basic timers
  - 3 × SPIs, 2 × I2Ss, 2 × I2Cs
  - USB, CAN, 2 × PWM timers
  - 3 × ADCs, 2 × DACs, 1 × SDIO
  - FSMC (100- and 144-pin packages)
  - ![](/img/link.png) [STMicroelectronics STM32F103VCT6 Product page](http://www.st.com/en/microcontrollers/stm32f103vc.html)

**Connectors**

  - 1-Channel 10/100Mbps Ethernet Connector (RJ45 with transformer)
  - Virtual COM Port(UART via Micro USB B type) –
    ![](/img/link.png) [CP2104 Drivers Download Page](https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104)
  - Expansion 80 GPIOs (Include analog Peripheral using 12bit ADC)
  - Pin-compatible with Arduino Shields designed for the UNO Rev3
  - Digital pins D0 to D15, Analog inputs A0 to A5, the power header and
    Etc.
  - ARM standard debug connector: 5-pin Cortex debug connector for SWD
    (Serial Wire Debug)

**Others**

  - 2 x User's Push button switches
  - 1 x RGB LED
  - Industrial temperature specified (-40 to +85 degrees Celsius)
  - \[Reset\] and \[boot0\] ISP access push button switch

**Form-factor**

  - Dimension : 90 X 80 X 15(H) (Unit : mm)
  - 5V DC power supply
  - GPIO Input Voltage : 0 \~ 5V
  - GPIO Output Voltage : 0 \~ 3.3V
  - 4-layer PCB (FR-4 material, 1.6T, 1oz)



  - Arduino Compatible with SWD Header Pinout

![](/img/products/w5100s/w5100s_evb/arduino_swd_pinout.png)

  - External Pinout (left side)

![](/img/products/w5100s/w5100s_evb/expansion_pinout_left_v3.png)

  - External Pinout (Right side)

![](/img/products/w5100s/w5100s_evb/expansion_pinout_right_v3.png)

-----

## Firmware


W5100S-EVB firmware project based on Eclipse IDE. For more details about
Eclipse IDE, please refer to below link. **DMA example** has been added
to the project.

**Download the Libraries and
Application example source code for W5100S-EVB** 
![](/img/github.png)
https://github.com/Wiznet/W5100S-EVB

 **DMA User Guide**  
<a href="/img/products/w5100s/w5100s_evb/w5100s_an_dma_v100k.pdf" target="_blank">W5100S DMA V1.0.0 Korean.pdf</a>
For More information about DMA, click
[DMA](Application-Note/dma)


-----

## Getting Started


![](/img/link.png) [Getting Started](w5100s_getting_started)

![](/img/link.png) [How to upload firmware](w5100s_getting_started#how-to-upload-firmware)

-----

## Make New W5100S-EVB Projects


![](/img/link.png) [Make New W5100S-EVB Projects using Eclipse](w5100s_projects_eclipse)

![](/img/link.png) [Make New W5100S-EVB Projects using TrueSTUDIO](w5100s_projects_truestudio)

-----


## Technical Reference

**Datasheet**

  - 🌎[datasheet\#W5100S Datasheet](document)
  - 🌎[STMicroelectronics STM32F103VCT6 Datasheet](http://www.st.com/en/microcontrollers/stm32f103vc.html)
  - 🌎[Virtual COM Port:
    CP2104 COM Port Datasheet](https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104)
  - 🌎<a href="http://www.ti.com/lit/ds/symlink/sn74lvc1g04.pdf" target="_blank">SINGLE INVERTER GATE SN74LVC1G04DBVR Datasheet</a>
  - 🌎<a href="https://assets.nexperia.com/documents/data-sheet/74HC_HCT573.pdf" target="_blank">Octal D-type transparent latch; 3-state 74HC573PW Datasheet</a>
  - 🌎<a href="https://www.nxp.com/docs/en/data-sheet/74CBTLV3257.pdf" target="_blank">Quad 1-of-2 multiplexer 74CBTLV3257PW Datasheet</a>

**Schematic & Part list**

  - 🌎[Go to Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S)

**Dimension**

  - W5100S-EVB Rev1.0 Dimension(unit:mm)

![](/img/products/w5100s/w5100s_evb/w5100s-evb_dimension.png)

-----