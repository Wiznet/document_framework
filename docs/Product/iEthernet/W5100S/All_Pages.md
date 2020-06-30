---
id: all_pages
title: All Pages
date: 2020-04-03
---


## Overview

![](/img/products/w5100s/w5100s_pm.png)

W5100S is an embedded Internet controller designed as a full hardwired
TCP/IP with WIZnet technology. W5100S provides internet connectivity to
your embedded system by using SPI (Serial Peripheral Interface) or
Parallel System BUS. SPI and Parallel System BUS provide easy connection
via external MCU to W5100S. The clock speed of W5100S SPI supports upto
70MHz and the Parallel System Bus supports higher speed network
communication than SPI.

Since W5100S integrates the Hardwired TCP/IP stack with 10/100 Ethernet
MAC and PHY, it is truly a one-chip solution for the stable internet
connectivity. WIZnet’s hardwired TCP/IP stack supports TCP, UDP, IPv4,
ICMP, ARP, IGMP, and PPPoE - and it has been proven through various
applications over the last decade.

W5100S provides four independent SOCKETs to be used simultaneously and
16KB internal memory for data communication. Users can develop an
Ethernet application easily by using the simple W5100S SOCKET program
instead of handling a complex Ethernet controller. W5100S also provides
WOL (Wake on LAN) and a Power Down Mode in order to reduce power
consumption.

W5100S is a low-cost chip that exceeds its predecessor, W5100. Existing
firmware using W5100 can be used on W5100S without modification. W5100S
has two types of packages, 48 Pin LQFP & QFN Lead-Free Package.

![W5100S Block diagram](/img/products/w5100s/w5100s_diagram.png)

-----


## Pin MAP
![W5100S Pin map](/img/products/w5100s/w5100s_pinmap.png)

-----


## Features

   - Support Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE
   - Support 4 Independent Hardware SOCKETs simultaneously
   - Support SOCKET-less Command: ARP-Request, PING-Request
   - Support Ethernet Power Down Mode & Main Clock gating for power save
   - Support Wake on LAN over UDP
   - Support Serial & Parallel Host Interface: High Speed SPI(MODE 0/3), Parallel System Bus with 2 Address signal & 8bits Data
   - Internal 16 Kbytes Memory for TX/ RX Buffers 
   - Not support IP Fragmentation
   - Not Maintain ARP-cache Table 
   - 10BaseT/100BaseTX Ethernet PHY Integrated
   - Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)
   - Support Auto-MDIX when Auto-Negotiation Mode.
   - 3.3V operation with 5V I/O signal tolerance
   - LED outputs (Full/Half Duplex, Link, 10/100 Speed, Active)
   - Two types of packages: 48 Pin LQFP & QFN Lead-Free Package (7x7mm, 0.5mm pitch)

-----


## Target Application

  - User product based on W5100 : No need to modify Firmware
  - Home Network Devices: Set-Top Boxes, PVRs, Digital Media Adapters
  - Serial-to-Ethernet: Access Controls, LED displays, Wireless AP
    relays, etc.
  - Parallel-to-Ethernet: POS / Mini Printers, Copiers
  - USB-to-Ethernet: Storage Devices, Network Printers
  - GPIO-to-Ethernet: Home Network Sensors
  - Security Systems: DVRs, Network Cameras, Kiosks
  - Factory, Building, Home Automations
  - Medical Monitoring Equipment
  - Embedded Servers
  - Internet of Things (IoT) Devices
  - IoT Cloud Devices

-----

# Driver

The ioLibrary means **"Internet Offload Library"** for WIZnet chip. It
includes **drivers** and **application protocols**. The ioLibrary can be
used for [W5100S](Overview.mdt) application designs. These
will be updated continuously.

-----


## ioLibrary


#### Overview

This driver provides the Berkeley Socket type APIs. The function names
of this ioLibrary\_BSD are the same as the function names of the
ioLibrary.

  - Directory Structure ![](/img/products/w5100s/w5100s_iolibrary.png)
      - Ethernet : SOCKET APIs like BSD & WIZCHIP(W5500,W5200 and etc)
        Driver
      - Internet : 
          - DHCP client 
          - DNS client 
          - FTP client
          - FTP Server
          - Http Server
          - SNMP
          - SNTP
          - TFTP


#### Download

**ioLibrary : latest version**

**ioLibrary GitHub Repository**

**https://github.com/Wiznet/ioLibrary_Driver**

For more information on ioLibrary, click 🌎[W5500 Driver](driver)
---


## Data Sheet

#### Korean
 * [W5100S Datasheet v1.2.5](/img/products/w5100s/w5100s_ds_v125k.pdf)
#### English
 * [W5100S Datasheet v1.2.5](/img/products/w5100s/w5100s_ds_v125e.pdf)

----


## W5100S vs W5100 Comparison Sheet
#### Korean
 * [W5100S vs W5100 Comparison Sheet v1.1.0](/img/products/w5100s/application/w5100svsw5100_cs_v110k.pdf)

#### English
 * [W5100S vs W5100 Comparison Sheet v1.1.0](/img/products/w5100s/application/w5100svsw5100_cs_v110e.pdf)

----


## Application Note

#### Korean
 * [W5100S IPRAW v1.0.0](/img/products/w5100s/w5100s_an_ipraw_v100k.pdf)
 * [W5100S PPPoE v1.0.0](/img/products/w5100s/application/w5100s_an_pppoe_v100k.pdf)
 * [W5100S SLC v1.0.0](/img/products/w5100s/application/w5100s_an_slc_v100k.pdf)
 * [W5100S Interrupt v1.1.0](/img/products/w5100s/application/w5100s_an_interrupt_v110k.pdf)

#### English
 * [W5100S IPRAW v1.0.0](/img/products/w5100s/w5100s_an_ipraw_v100e.pdf)
 * [W5100S PPPoE v1.0.0](/img/products/w5100s/application/w5100s_an_pppoe_v100e.pdf)
 * [W5100S SLC v1.0.0](/img/products/w5100s/application/w5100s_an_slc_v100e.pdf)
 * [W5100S Interrupt v1.0.0](/img/products/w5100s/application/w5100s_an_interrupt_v100e.pdf)

----


## Hardware Design Guide
#### Korean
 * [Crystal Selection Guide v1.0.0](/img/products/w5100s/w5100s_crystal_selection_guide_v100k.pdf)

#### English
 * [Crystal Selection Guide v1.0.0](/img/products/w5100s/w5100s_crystal_selection_guide_v100e.pdf)
 * [IR Reflow Profile](Document.md)
----

 Reference Schematic

---



## External Transformer Type

[Go to github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S/Reference%20Schematic)
![](/img/products/w5100s/ref_sch/w5100s_ref_schematic_v110_use_trans.jpg)

-----


## RJ45 with Transformer Type

[Go to github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S/Reference%20Schematic)
![](/img/products/w5100s/ref_sch/w5100s_ref_schematic_v110_use_trans.jpg)

-----
## W5100S Comparison Sheet

Functionally, **W5100S** is very similar to **W5100 and W5500**, with
slightly different Hardware Specification. And Software can be shared.
For example, Software written for the W5100 or W5500 is compatible with
Hardware for the W5100S. However, there are some differences between
W5100S and W5100/W5500 have in Software and Hardware. The difference are
described in the document titled "W5100S comparison sheet" below.

-----

### document

<table>
<thead>
<tr class="header">
<th>Version</th>
<th>Date</th>
<th>Download</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1.0.0</td>
<td>2018-04-01</td>
<td><embed src="/img/products/w5100s/w5100s_cp_v100k.pdf" class="align-center" /><br />
<embed src="/img/products/w5100s/w5100s_cp_v100e.pdf" class="align-center" /></td>
</tr>
</tbody>
</table>
---
# W5100S Application
Refer to the following application examples
---
  * [TCP](TCP.md)
  * [UDP](UDP.md)
  * [IPRAW](IPRAW.md)
  * [PPPoE](PPPoE.md)
  * [SOCKET-less Command](SOCKET-less_Command.md)
  * [Interrupt](Interrupt.md)
  * [DMA](DMA.md)
 W5100S-EVB

---

  - W5100S chip development platform for **net-enabled** microcontroller
    applications
  - Ethernet (W5100S Hardwired TCP/IP chip) and 32-bit ARM® Cortex™-M3
    based designs
  - **Arduino Pin-compatible** platform hardware.

-----


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
[W5100S DMA V1.0.0 Korean.pdf](/img/products/w5100s/w5100s_evb/w5100s_an_dma_v100k.pdf)
For More information about DMA, click
[DMA](Application-Note/dma)


-----

## Getting Started


![](/img/link.png) [Getting Started](/products/w5100s/w5100s_evb/getting_started)

![](/img/link.png) [How to uploading to firmware](/products/w5100s/w5100s_evb/getting_started#how_to_uploading_to_firmware)

-----

## Make New W5100S-EVB Projects


![](/img/link.png) [Make New W5100S-EVB Projects using Eclipse](/products/w5100s/w5100s_evb/make_a_new_projects_eclipse)

![](/img/link.png) [Make New W5100S-EVB Projects using TrueSTUDIO](/products/w5100s/w5100s_evb/make_a_new_projects_truestudio)

-----


## Technical Reference

**Datasheet**

  - 🌎[datasheet\#W5100S Datasheet](/products/w5100S/datasheet#W5100S%20Datasheet)
  - 🌎[STMicroelectronics STM32F103VCT6 Datasheet](http://www.st.com/en/microcontrollers/stm32f103vc.html)
  - 🌎[Virtual COM Port:
    CP2104 COM Port Datasheet](https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104)
  - 🌎[SINGLE INVERTER GATE SN74LVC1G04DBVR Datasheet](http://www.ti.com/lit/ds/symlink/sn74lvc1g04.pdf)
  - 🌎[Octal D-type transparent latch; 3-state 74HC573PW Datasheet](https://assets.nexperia.com/documents/data-sheet/74HC_HCT573.pdf)
  - 🌎[Quad 1-of-2 multiplexer 74CBTLV3257PW Datasheet](https://www.nxp.com/docs/en/data-sheet/74CBTLV3257.pdf)

**Schematic & Part list**

  - 🌎[Go to Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S)

**Dimension**

  - W5100S-EVB Rev1.0 Dimension(unit:mm)

![](/img/products/w5100s/w5100s_evb/w5100s-evb_dimension.png)

-----


## See Also

🌎[WIZnet Website - W5100S](https://www.wiznet.io/product-item/w5100s) : W5100S Chip
features, Pin assignment and Hardware Ref. Design Guide

🌎[WizWiki Forum](https://forum.wiznet.io) : WIZnet Forum for Technical support and
Project shared

-----

## Where to Buy

![WIZnet Online Shop](/products/w5500/buynow.png)  
[![WIZnetUS Online Shop, USA](/products/w5500/w5500_evb/icons/dollar.png)](http://www.shopwiznet.com/)
[![WIZnetEU Online Shop, Germany](/products/w5500/w5500_evb/icons/european-euro.png)](http://shop.wiznet.eu/)
[![WIZnetKorea Online Shop, Korea](/products/w5500/w5500_evb/icons/won.png)](http://shop.wiznet.co.kr/)
