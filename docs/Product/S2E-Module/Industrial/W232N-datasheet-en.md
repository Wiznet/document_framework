---
id: W232N-datasheet-en
title: W232N Datasheet-[EN]
date: 2024-10-04
keywords: [wiznet, w55rp20,w232n datasheet, hardwired tcp/ip,serial-to-ethernet, w5500, rp2040]
description: W232N is a industrial serial to Ethernet module using the W55RP20
---

## Overview

This document is the HW specification for the W232N, an industrial Ethernet to RS232 data conversion device.

<img src="/img/products/w232n/W232_Rail_mount.png" width="600" />

## Features

- RS232 to Ethernet protocol conversion device
- Supports Modbus TCP to Modbus RTU/ASCII protocol conversion
- Enables easy implementation of Ethernet into existing serial devices
- KC,FCC certified to ensure high system stability and reliability
- Supports 10/100Mbps Ethernet and up to 230kbps serial speeds
- Supports RS232C standard with D-SUB9 port
- Supports password setting for device discovery
- Supports AT command via D-SUB9 port
- Configurable with Config-tool
- Supports Web Config
- Wide input voltage 5~36V
- Industrial-standard operating temperature -25~80°C
- Supports DIN rail (DIN 46277) mounting
- Protected against ESD

### What's inside

The package of W232N is organized as follows.

  - W232N
  - 5V 2A power adapter
  - Ethernet cable


### Appearance

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/Front.png" width="300" />               |
| ***W232N Revision 1.0 Front***                                        |

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/Back.png" width="300" />                |
| ***W232N Revision 1.0 Back***                                         |

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/LED.png" width="100" />                 |
| ***W232N Revision 1.0 LED***                                          |

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/RJ45.png" width="300" />                |
| ***W232N Revision 1.0 RJ45,power jack***                              |

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/DSUB.png" width="300" />                |
| ***W232N Revision 1.0 DSUB***                                         |

### Dimension

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/Dimension.png" width="300" />           |
| ***W232N Revision 1.0 Dimension***                                    |

- 78 x 52 x 28 (mm)

### Pin map, Switch

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/w232n_pinout.png" width="500" />        |
| ***W232N Revision 1.0 DB9M port***                                    |

| Pin Number | Signal | Description                  |
|------------|--------|------------------------------|
| 1          | DCD    | NC                           |
| 2          | RXD    | Receive Data                 |
| 3          | TXD    | Transmit Data                |
| 4          | DTR    | Data Terminal Ready          |
| 5          | GND    | System Ground(Signal Ground) |
| 6          | DSR    | Data Set Ready               |
| 7          | RTS    | Request To Send              |
| 8          | CTS    | Clear To Send                |
| 9          | RI     | NC                           |
<img src="/img/products/w232n/Serial.png" width="600" />


|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/RJ45_PIN.png" width="400" />            |
| ***W232N Revision 1.0 RJ45 port***                                    |

| Pin Number | Signal | Description                  |
|------------|--------|------------------------------|
| 1          | TXP    | TX+                          |
| 2          | TXN    | TX-                          |
| 3          | RXP    | RX+                          |
| 4          | NC     | PoE+ or PoE-                 |
| 5          | NC     | PoE+ or PoE-                 |
| 6          | RXN    | RX-                          |
| 7          | NC     | PoE- or PoE+                 |
| 8          | NC     | PoE- or PoE+                 |

- PoE is only available on models that support it.
- When using PoE, the polarity of pins 4,5 and 7,8 must be different.
    - If pin 4,5 is +, then pin 7,8 is -, or if pin 4,5 is -, then pin 7,8 is +.

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/RST.png" width="100" />                 |
| ***W232N Revision 1.0 Reset SW***                                     |

- HW Reset switch


-----

### Ports and switches inside the case

- The top case can be removed by removing the bolts (M3) on each side of the W232N.

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/Screw.png" width="300" />               |
| ***W232N Case bolts***                                                |

#### AT MODE SW

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/AT_SW.png" width="400" />               |
| ***AT Mode SW***                                                      |

- You can use an AT Morse switch to enter serial command mode. <br />For more information, see How to use the AT command in the [Manual](#Manuals) below.
- 

#### Factory Reset SW

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/fact_rst.png" width="400" />            |
| ***Factory Reset SW***                                                |

- You can use the factory reset switch to factory reset your device. <br />For detailed instructions, see the Factory Reset guide in the [Manual](#Manuals) below.

#### BOOT SW

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/Boot.png" width="400" />                |
| ***Boot SW***                                                         |

#### W55RP20 BOOT SW

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/W55RP_boot.png" width="400" />          |
| ***W55RP20 Boot SW***                                                 |

#### USB Header

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/USB_header.png" width="400" />          |
| ***USB Header***  

-The USB header is used to upload and update the FW after the W55RP20 enters BOOT mode. <br />For detailed instructions, see the FW update guide in the [Manual](#Manuals) below.

-----



## Power on

The W232N can be powered via a DC jack, terminal block, or RJ45 jack if the product is PoE-enabled.

<!--
|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/s2e_module/wiz500sr-rp/wiz500sr-rp-callout-top.png) |
| ***DC Jack 사용시***                                                   |

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/s2e_module/wiz500sr-rp/wiz500sr-rp-callout-top.png) |
| ***터미널 블럭 사용시***                                                |

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/s2e_module/wiz500sr-rp/wiz500sr-rp-callout-top.png) |
| ***PoE 사용시***                                                |
-->

The available voltage is 5 V to 36 V.
If the polarity is reversed when power is applied, a protection circuit will prevent the power from being turned on.

|                                                                       |
| --------------------------------------------------------------------- |
| <img src="/img/products/w232n/POWER_LED.png" width="150" />           |
| ***Power LED***                                                         |

During normal operation, the POWER LED will be solid red and the RUN LED will flash in 1-second cycles, confirming that the W232N's FW has booted successfully.

## Manuals
- [How to use Config-tool](./Config-tool-Guide-en.md)
- [How to use Web config](./Web_Config_Guide_EN.md)
- [How to use AT CMD](./command-manual-en.md)
- [How to connect MQTT](./mqtt-connection-guide-en.md)
- [How to connet SSL](./ssl-connection-guide-en.md)
- [How to connet Modbus](./modbus-connection-guide-en.md)
- [How to update FW](./firmware-update-guide-en.md)
- [How to do factory reset ](./factory-rst-guide-en.md)


## Certification
<!--
- <a href="/img/products/w232n/KC.pdf" target="_blank">KC 인증</a>
- <a href="/img/products/w232n/FCC.pdf" target="_blank">FCC 인증</a>
-->

## Design file

### schematic

| H/W version | Filetype | Download Link                                                | Remarks |
| ----------- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/W232N/Schematic/W232N_R100.zip" target="_blank">Download</a> | \-      |
| :::         | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/W232N/Schematic/W232N_R100.pdf" target="_blank">Download</a> | \-      |


### Part list

| H/W version | Filetype | Download Link                                               | Remarks |
| ----------- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/bfa5e2d9cdb636196d6c1341709c02d7052f4d18/04_Serial_to_Ethernet_Module/W232N/Partlist/W232N%20PL_R100.xlsx" target="_blank">Download</a> | \-      |
| :::         | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/bfa5e2d9cdb636196d6c1341709c02d7052f4d18/04_Serial_to_Ethernet_Module/W232N/Partlist/W232N%20PL_R100.pdf" target="_blank">Download</a> | \-      |


### 3D file

| H/W version | Filetype | Download Link                                               | Remarks |
| ----------- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | Step   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/W232N/3D/W232N_3D_R100.step" target="_blank">Download</a> | \-      |
