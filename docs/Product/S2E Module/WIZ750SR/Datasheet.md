---
id: datasheet
title: Datasheet
date: 2020-03-
---

## Content

# WIZ750SR Datasheet

## Hardware Specification

### Product Spec Table

<table>
<thead>
<tr class="header">
<th>Category</th>
<th></th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>MCU</td>
<td>ARM<br />
Cortex-M0<br />
Core</td>
<td>W7500P<br />
PHY Included<br />
48Mhz maximum frequency<br />
Internal 8Mhz RC Oscillator<br />
Flash: 128KB<br />
Large flexible-size SRAM buffer for various User Application<br />
- Min 16KB available if full 32KB socket buffer used<br />
- Max 48KB available if no socket buffer used<br />
ROM for boot code: 6 KB</td>
</tr>
<tr class="even">
<td>:::</td>
<td>Hardwired<br />
TCP/IP<br />
Core</td>
<td>8 independent Sockets<br />
SRAM for socket: 32KB<br />
MII (Medium-Independent Interface)<br />
TCP/IP Protocols: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>PHY</td>
<td>IC+(IP101G) PHY<br />
Auto negotiation (Full-duplex and Half-duplex)<br />
Auto MDI/MDIX</td>
</tr>
<tr class="even">
<td>Serial</td>
<td>Interface</td>
<td>WIZ750SR-TTL: TTL Version<br />
WIZ750SR-232: 232 Version<br />
WIZ750SR-422/485: 422/485 Version</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>Signal</td>
<td>TXD, RXD, RTS, CTS, GND</td>
</tr>
<tr class="even">
<td>:::</td>
<td>Parameters</td>
<td>Parity: None, Odd, Even<br />
Data bits: 7, 8 bit<br />
Flow control: None, RTS / CTS, XON / XOFF</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>Speed</td>
<td>Up to 460Kbps</td>
</tr>
<tr class="even">
<td>Dimension</td>
<td></td>
<td>45mm x 30mm ( PCB board size )<br />
48mm x 30mm x 18mm ( Include part size )</td>
</tr>
<tr class="odd">
<td>Connector type</td>
<td></td>
<td>2.54mm Pitch 6x2 Pin-header(Data Line)<br />
2.54mm Pitch 1x6 Pin-header(ISP)<br />
2.54mm Pitch 1x6 Pin-header(Expansion GPIO &amp; app_boot)<br />
1.27mm Pitch 1x5 Pin-header (JTAG)</td>
</tr>
<tr class="even">
<td>Input Voltage</td>
<td></td>
<td>DC 3.3V</td>
</tr>
<tr class="odd">
<td>Temperature</td>
<td></td>
<td>0℃ ~ 70℃ (Operation), -40℃ ~ 85℃ (Storage range)</td>
</tr>
</tbody>
</table>

-----

\<pagebreak\>

### Callout

#### Rev1.0/Rev1.1

|                                                                      |                                                                         |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![](/products/wiz750sr/datasheet/wiki_wiz750sr_v1.1_top_callout.png) | ![](/products/wiz750sr/datasheet/wiki_wiz750sr_v1.1_bottom_callout.png) |
| **TOP**                                                              | **BOTTOM**                                                              |

#### Rev1.2

|                                                                     |                                                                        |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![](/products/wiz750sr/datasheet/wiz750sr_top_parts_exp_rev1.2.png) | ![](/products/wiz750sr/datasheet/wiz750sr_bottom_parts_exp_rev1.2.png) |
| **TOP**                                                             | **BOTTOM**                                                             |

  - WIZ750SR Rev1.2 has erased Watchdog IC and J5 connector and added
    POR(MIC811SUY) IC for stable operation.

-----

\<pagebreak\>

## WIZ750SR Pinout

|                                                                    |                                                                  |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![](/products/wiz750sr/datasheet/wiz750sr_all_pinout_20160628.png) | ![](/products/wiz750sr/datasheet/wiz750sr_pinout_exp_rev1.2.png) |
| **Rev1.1**                                                         | **Rev1.2**                                                       |

-----

## Product Comparison Table

<table>
<thead>
<tr class="header">
<th>Specification</th>
<th>WIZ750SR-TTL</th>
<th>WIZ750SR-232</th>
<th>WIZ750SR-485<br />
(RS-422)</th>
<th>WIZ750SR-485<br />
(RS-485)</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Operation mode</td>
<td>Single-Ended</td>
<td>Single-Ended</td>
<td>Differential</td>
<td></td>
</tr>
<tr class="even">
<td>Communication Method</td>
<td>Full Duplex</td>
<td>Full Duplex</td>
<td>Full Duplex</td>
<td>Half Duplex</td>
</tr>
<tr class="odd">
<td>Transceiver</td>
<td>N/A (Resistor)</td>
<td>RS-232C</td>
<td>RS-422/485</td>
<td>RS-422/485</td>
</tr>
</tbody>
</table>

-----

### WIZ750SR-TTL

|                                                                         |                                                                            |  |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |  |
|                                                                         | ![](/products/wiz750sr/datasheet/wiz750sr_ttl_blockdiagram_rev1.2.png)     |  |
| ![](/products/wiz750sr/datasheet/wiki_wiz750sr_v1.1_ttl_top_calout.png) | ![](/products/wiz750sr/datasheet/wiki_wiz750sr_v1.1_ttl_bottom_calout.png) |  |

  - Feature
      - This Product operates with WIZ750SR-TTL/232 EVB Board.
      - Caution) This product doesn't have any RS-232C & RS-422/485
        Transceivers on it.

-----

### WIZ750SR-232

|                                                                           |                                                                              |  |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |  |
|                                                                           | ![](/products/wiz750sr/datasheet/wiz750sr_rs232_blockdiagram_rev1.2.png)     |  |
| ![](/products/wiz750sr/datasheet/wiki_wiz750sr_v1.1_rs232_top_calout.png) | ![](/products/wiz750sr/datasheet/wiki_wiz750sr_v1.1_rs232_bottom_calout.png) |  |

  - Feature
      - This Product operates with WIZ750SR-TTL/232 EVB Board.

-----

### WIZ750SR-485

|                                                                           |                                                                              |  |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |  |
|                                                                           | ![](/products/wiz750sr/datasheet/wiz750sr_rs485_blockdiagram_rev1.2.png)     |  |
| ![](/products/wiz750sr/datasheet/wiki_wiz750sr_v1.1_rs232_top_calout.png) | ![](/products/wiz750sr/datasheet/wiki_wiz750sr_v1.1_rs485_bottom_calout.png) |  |

  - Feature
      - This Product operates with WIZ750SR-422/485 EVB Board.

-----

## WIZ750SR-EVB

  - WIZ750SR Developer Board.
  - USB to UART chip, CP2104.
  - RESET Tact SW.
  - BOOT0 Slide SW.
  - H/W Trig Slide SW.
  - Expansion GPIO TEST (Digital / Analog)
  - Micro USB.
  - WIZ750SR-EVB (TTL/232)
      - RS-232C Connector, D-SUB9-MALE.
  - WIZ750SR-EVB (422/485)
      - RS-422/485 Connector, ECH381R.
      
      ### TTL / RS232 Version

|                                                                           |
| ------------------------------------------------------------------------- |
| ![](/products/wiz750sr/datasheet/wiz750sr-evb_ttl_232_description_v3.png) |
| **\<WIZ750SR EVB TTL/RS232 Call Out\>**                                   |

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/products/wiz750sr/datasheet/wiz750sr-evb_ttl_232_block.png) |
| **\<WIZ750SR EVB TTL/RS232 Block Diagram\>**                     |

### RS422 / RS485 Version

|                                                                        |
| ---------------------------------------------------------------------- |
| ![](/products/wiz750sr/datasheet/wiz750sr-evb_422_485_description.png) |
| **\<WIZ750SR EVB RS422/485 Call Out\>**                                |

|                                                                    |
| ------------------------------------------------------------------ |
| ![](/products/wiz750sr/datasheet/wiz750sr-evb_rs422_485_block.png) |
| **\<WIZ750SR EVB RS422/485 Block Diagram\>**                       |

-----

## Schematic

### WIZ750SR

<table>
<thead>
<tr class="header">
<th>H/W version</th>
<th>Type</th>
<th>Filetype</th>
<th>Download Link</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1.0</td>
<td>TTL<br />
RS-232<br />
RS-485</td>
<td>Altium</td>
<td><img src="/products/w5500/w5500_evb/icons/download.png" /> <embed src="/products/wiz750sr/datasheet/wiz750sr_schematic_v1.0_altium.zip" /></td>
<td>-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/products/w5500/w5500_evb/icons/download.png" /> <embed src="/products/wiz750sr/datasheet/wiz750sr_schematic_v1.0_pdf.pdf" /></td>
<td>-</td>
</tr>
<tr class="odd">
<td>1.1</td>
<td>:::</td>
<td>Altium</td>
<td><img src="/products/w5500/w5500_evb/icons/download.png" /> <embed src="/products/wiz750sr/datasheet/wiz750sr_altium_v1.1_sch.zip" class="align-center" /></td>
<td>-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/products/w5500/w5500_evb/icons/download.png" /> <embed src="/products/wiz750sr/datasheet/wiz750sr_schematic_v1.1.pdf" class="align-center" /></td>
<td>:::</td>
</tr>
<tr class="odd">
<td>1.2</td>
<td>:::</td>
<td>Altium</td>
<td><img src="/products/w5500/w5500_evb/icons/download.png" /> <embed src="/products/wiz750sr/datasheet/wiz750sr_schematic_v1.2_wiki_upload.zip" class="align-center" /></td>
<td><strong>Latest version H/W</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/products/w5500/w5500_evb/icons/download.png" /> <embed src="/products/wiz750sr/datasheet/wiz750sr_v1.2.pdf" class="align-center" /></td>
<td>:::</td>
</tr>
</tbody>
</table>

### WIZ750SR-EVB

<table>
<thead>
<tr class="header">
<th>H/W version</th>
<th>Type</th>
<th>Filetype</th>
<th>Download Link</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1.0</td>
<td>TTL<br />
RS-232</td>
<td>Altium</td>
<td><img src="/products/w5500/w5500_evb/icons/download.png" /> <embed src="/products/wiz750sr/datasheet/wiz750sr_evb_ttl_rs232_v1.0_altium.zip" /></td>
<td><strong>Latest version H/W</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/products/w5500/w5500_evb/icons/download.png" /> <embed src="/products/wiz750sr/datasheet/wiz750sr_evb_ttl_rs232_v1.0_schematic.pdf" /></td>
<td>:::</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>RS-422<br />
RS-485</td>
<td>Altium</td>
<td><img src="/products/w5500/w5500_evb/icons/download.png" /> <embed src="/products/wiz750sr/datasheet/wiz750sr_evb_rs485.zip" /></td>
<td>:::</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/products/w5500/w5500_evb/icons/download.png" /> <embed src="/products/wiz750sr/datasheet/wiz750sr_evb_rs485.pdf" /></td>
<td>:::</td>
</tr>
</tbody>
</table>

-----

## Part list

### WIZ750SR

| H/W version | Type   | Filetype | Download Link                                                                                                                     | Remarks |
| ----------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 1.0         | TTL    | Excel    | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.0_pl_160421_ttl.xls)       | \-      |
| :::         | :::    | PDF      | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.0_pl_160421_ttl.pdf)       | :::     |
| :::         | RS-232 | Excel    | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.0_pl_160421_rs232.xls)     | :::     |
| :::         | :::    | PDF      | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.0_pl_160421_rs232.pdf)     | :::     |
| :::         | RS-485 | Excel    | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.0_pl_160421_rs422_485.xls) | :::     |
| :::         | :::    | PDF      | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.0_pl_160421_rs422_485.pdf) | :::     |
| 1.1         | TTL    | Excel    | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.1_pl_ttl_20171214.xls)     | \-      |
| ::: | :::    | PDF   | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.1_pl_ttl_20171214.pdf)    | :::                    |
| ::: | RS-232 | Excel | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.1_pl_rs232_20171214.xls)  | :::                    |
| ::: | :::    | PDF   | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.1_pl_rs232_20171214.pdf)  | :::                    |
| ::: | RS-485 | Excel | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.1_pl_rs485_20171214.xls)  | :::                    |
| ::: | :::    | PDF   | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v1.1_pl_rs485_20171214.pdf)  | :::                    |
| 1.2 | TTL    | Excel | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v120_pl_ttl_20180703.xls)    | **Latest version H/W** |
| ::: | :::    | PDF   | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v120_pl_ttl_20180703.pdf)    | :::                    |
| ::: | RS-232 | Excel | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v120_pl_rs232_20180703.xls)  | :::                    |
| ::: | :::    | PDF   | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v120_pl_rs232_20180703.pdf)  | :::                    |
| ::: | RS-485 | Excel | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v120_pl_rs485_201800703.xls) | :::                    |
| ::: | :::    | PDF   | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr/datasheet/wiz750sr_v120_pl_rs485_201800703.pdf) | :::                    |
