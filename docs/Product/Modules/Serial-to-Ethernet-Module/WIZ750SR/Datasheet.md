---
id: datasheet
title: Datasheet
date: 2020-04-08
---

## Hardware Specification

### Product Spec Table

| Category |                | Description |
|----------|----------------|------------------------|
| MCU      | ARM Cortex-M0 Core | W7500P PHY Included 48Mhz maximum frequency Internal 8Mhz RC Oscillator Flash: 128KB Large flexible-size SRAM buffer for various User Application - Min 16KB available if full 32KB socket buffer used - Max 48KB available if no socket buffer used ROM for boot code: 6 KB |
|          | :::            | Hardwired TCP/IP Core 8 independent Sockets SRAM for socket: 32KB MII (Medium-Independent Interface) TCP/IP Protocols: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE |
|          | :::            | IC+(IP101G) PHY Auto negotiation (Full-duplex and Half-duplex) Auto MDI/MDIX |
| Serial   | Interface      | WIZ750SR-TTL: TTL Version WIZ750SR-232: RS-232 Version WIZ750SR-422/485: RS-422/485 Version |
|          | Signal         | TXD, RXD, RTS, CTS, GND |
|          | Parameters     | Parity: None, Odd, Even Data bits: 7, 8 bit Flow control: None, RTS / CTS, XON / XOFF |
|          | Speed          | Up to 230Kbps |
| Dimension|                | 45mm x 30mm (PCB board size) 48mm x 30mm x 18mm (Include part size) |
| Connector type |            | 2.54mm Pitch 6x2 Pin-header(Data Line) 2.54mm Pitch 1x6 Pin-header(ISP) 2.54mm Pitch 1x6 Pin-header(Expansion GPIO & app_boot) 1.27mm Pitch 1x5 Pin-header (JTAG) |
| Input Voltage |            | DC 3.3V |
| Temperature |              | 0℃ ~ 70℃ (Operation), -40℃ ~ 85℃ (Storage range) |

-----

### Callout

#### Rev1.0/Rev1.1

|                                                                      |                                                                         |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/clitool/datasheet/wiki_wiz750sr_v1.1_top_callout.png) | ![](/img/products/wiz750sr/clitool/datasheet/wiki_wiz750sr_v1.1_bottom_callout.png) |
| **TOP**                                                              | **BOTTOM**                                                              |

#### Rev1.2

|                                                                     |                                                                        |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_top_parts_exp_rev1.2.png) | ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_bottom_parts_exp_rev1.2.png) |
| **TOP**                                                             | **BOTTOM**                                                             |

  - WIZ750SR Rev1.2 has erased Watchdog IC and J5 connector and added
    POR(MIC811SUY) IC for stable operation.

-----

## WIZ750SR Pinout

|                                                                    |                                                                  |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_all_pinout_20160628.png) | ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_pinout_exp_rev1.2.png) |
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

|        |        |
|--------|--------|
|![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_ttl_blockdiagram_rev1.2.png)|  |
| <img src="/img/products/wiz750sr/clitool/datasheet/wiki_wiz750sr_v1.1_ttl_top_calout.png" width="250" /> | ![](/img/products/wiz750sr/clitool/datasheet/wiki_wiz750sr_v1.1_ttl_bottom_calout.png) |

  - Feature
      - This Product operates with WIZ750SR-TTL/232 EVB Board.
      - Caution) This product doesn't have any RS-232C & RS-422/485 Transceivers on it.

-----

### WIZ750SR-232

|        |            |
|--------|------------|
| ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_rs232_blockdiagram_rev1.2.png)     |  |
| <img src="/img/products/wiz750sr/clitool/datasheet/wiki_wiz750sr_v1.1_rs232_top_calout.png" width="250" /> | ![](/img/products/wiz750sr/clitool/datasheet/wiki_wiz750sr_v1.1_rs232_bottom_calout.png) |

  - Feature
      - This Product operates with WIZ750SR-TTL/232 EVB Board.

-----

### WIZ750SR-485

|          |           |
|----------|-----------|
| ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_rs485_blockdiagram_rev1.2.png)    |  |
| <img src="/img/products/wiz750sr/clitool/datasheet/wiki_wiz750sr_v1.1_rs232_top_calout.png" width="250" /> | ![](/img/products/wiz750sr/clitool/datasheet/wiki_wiz750sr_v1.1_rs485_bottom_calout.png) |

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
| ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr-evb_ttl_232_description_v3.png) |
| **WIZ750SR EVB TTL/RS232 Call Out**                                   |

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr-evb_ttl_232_block.png) |
| **WIZ750SR EVB TTL/RS232 Block Diagram**                     |

### RS422 / RS485 Version

|                                                                        |
| ---------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr-evb_422_485_description.png) |
| **WIZ750SR EVB RS422/485 Call Out**                                |

|                                                                    |
| ------------------------------------------------------------------ |
| ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr-evb_rs422_485_block.png) |
| **WIZ750SR EVB RS422/485 Block Diagram**                       |

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
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_schematic_v1.0_altium.zip" target="_blank">Download</a></td>
<td>-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_schematic_v1.0_pdf.pdf" target="_blank">Download</a></td>
<td>-</td>
</tr>
<tr class="odd">
<td>1.1</td>
<td>:::</td>
<td>Altium</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_altium_v1.1_sch.zip" target="_blank">Download</a></td>
<td>-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_schematic_v1.1.pdf" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="odd">
<td>1.2</td>
<td>:::</td>
<td>Altium</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_schematic_v1.2_wiki_upload.zip" target="_blank">Download</a></td>
<td><strong>Latest version H/W</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.2.pdf" target="_blank">Download</a></td>
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
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_ttl_rs232_v1.0_altium.zip" target="_blank">Download</a></td>
<td><strong>Latest version H/W</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_ttl_rs232_v1.0_schematic.pdf" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>RS-422<br />
RS-485</td>
<td>Altium</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_rs485.zip" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_rs485.pdf" target="_blank">Download</a></td>
<td>:::</td>
</tr>
</tbody>
</table>

-----

## 3D File


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
<td>1.2</td>
<td>TTL<br />
RS-232<br />
RS-485</td>
<td>Altium</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/3d-step-files/WIZ750SR_V1.2.step" target="_blank">Download</a></td>
<td>-</td>
</tr>
</tbody>
</table>

## Part list

### WIZ750SR

| H/W version | Type   | Filetype | Download Link                                                                                                                     | Remarks |
| ----------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 1.0         | TTL    | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) [Download](/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.0_pl_160421_ttl.xls)       | \-      |
| :::         | :::    | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.0_pl_160421_ttl.pdf" target="_blank">Download</a>       | :::     |
| :::         | RS-232 | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) [Download](/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.0_pl_160421_rs232.xls)     | :::     |
| :::         | :::    | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.0_pl_160421_rs232.pdf" target="_blank">Download</a>     | :::     |
| :::         | RS-485 | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) [Download](/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.0_pl_160421_rs422_485.xls) | :::     |
| :::         | :::    | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.0_pl_160421_rs422_485.pdf" target="_blank">Download</a> | :::     |
| 1.1         | TTL    | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) [Download](/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.1_pl_ttl_20171214.xls)     | \-      |
| ::: | :::    | PDF   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.1_pl_ttl_20171214.pdf" target="_blank">Download</a>    | :::                    |
| ::: | RS-232 | Excel | ![](/img/products/w5500/w5500_evb/icons/download.png) [Download](/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.1_pl_rs232_20171214.xls)  | :::                    |
| ::: | :::    | PDF   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.1_pl_rs232_20171214.pdf" target="_blank">Download</a>  | :::                    |
| ::: | RS-485 | Excel | ![](/img/products/w5500/w5500_evb/icons/download.png) [Download](/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.1_pl_rs485_20171214.xls)  | :::                    |
| ::: | :::    | PDF   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.1_pl_rs485_20171214.pdf" target="_blank">Download</a>  | :::                    |
| 1.2 | TTL    | Excel | ![](/img/products/w5500/w5500_evb/icons/download.png) [Download](/img/products/wiz750sr/clitool/datasheet/wiz750sr_v120_pl_ttl_20180703.xls)    | **Latest version H/W** |
| ::: | :::    | PDF   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v120_pl_ttl_20180703.pdf" target="_blank">Download</a>    | :::                    |
| ::: | RS-232 | Excel | ![](/img/products/w5500/w5500_evb/icons/download.png) [Download](/img/products/wiz750sr/clitool/datasheet/wiz750sr_v120_pl_rs232_20180703.xls)  | :::                    |
| ::: | :::    | PDF   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v120_pl_rs232_20180703.pdf" target="_blank">Download</a>  | :::                    |
| ::: | RS-485 | Excel | ![](/img/products/w5500/w5500_evb/icons/download.png) [Download](/img/products/wiz750sr/clitool/datasheet/wiz750sr_v120_pl_rs485_201800703.xls) | :::                    |
| ::: | :::    | PDF   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v120_pl_rs485_201800703.pdf" target="_blank">Download</a> | :::                    |

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
<td>TTL</td>
<td>Excel</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.0_pl_160621_ttl.xls" target="_blank">Download</a></td>
<td>BOM version 1.0</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.0_pl_160621_ttl.pdf" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>RS-232</td>
<td>Excel</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.0_pl_160621_rs232.xls" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.0_pl_160621_rs232.pdf" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>RS-485</td>
<td>Excel</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.0_pl_160621_rs422_485.xls" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_v1.0_pl_160421_rs422_485.pdf" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="odd">
<td>1.0</td>
<td>TTL</td>
<td>Excel</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.1_pl_171214_ttl.xls" target="_blank">Download</a></td>
<td>BOM version 1.1<br />
<strong>Latest version H/W</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.1_pl_171214_ttl.pdf" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>RS-232</td>
<td>Excel</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.1_pl_171214_rs232.xls" class="align-center" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.1_pl_171214_rs232.pdf" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>RS-485</td>
<td>Excel</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.1_pl_171214_rs422_485.xls" target="_blank">Download</a></td>
<td>:::</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="/img/products/w5500/w5500_evb/icons/download.png" /> <a href="/img/products/wiz750sr/clitool/datasheet/wiz750sr_evb_v1.1_pl_171214_rs422_485.pdf" target="_blank">Download</a></td>
<td>:::</td>
</tr>
</tbody>
</table>

-----

## Electrical Characteristics

### Operating Conditions

<table>
<thead>
<tr class="header">
<th>Symbol</th>
<th>Parameter</th>
<th>Pins</th>
<th>Min</th>
<th>Typ</th>
<th>Max</th>
<th>Unit</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>V<em>cc</em></td>
<td><strong>Operating Voltage</strong></td>
<td>3.3V</td>
<td>3.135</td>
<td>3.3</td>
<td>3.465</td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>ss</em></td>
<td><strong>Ground</strong></td>
<td>ALL</td>
<td></td>
<td>0</td>
<td>50</td>
<td>mV</td>
</tr>
<tr class="odd">
<td>f<em>FCLK</em></td>
<td><strong>Internal CPU clock frequency</strong></td>
<td>ALL</td>
<td>0</td>
<td>-</td>
<td>48</td>
<td>MHz</td>
</tr>
<tr class="even">
<td>T<em>stg</em></td>
<td><strong>Storage Temperature (max)</strong></td>
<td>ALL</td>
<td>-40</td>
<td></td>
<td>85</td>
<td>℃</td>
</tr>
<tr class="odd">
<td>T<em>A</em></td>
<td><strong>Ambient operating temperature</strong></td>
<td>ALL</td>
<td>0</td>
<td>70</td>
<td></td>
<td>℃</td>
</tr>
<tr class="even">
<td>V<em>IO</em></td>
<td><strong>I/O Signal voltage (Tolerance)</strong></td>
<td>ALL</td>
<td>Vss-0.3</td>
<td>3.3</td>
<td>5</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>IH</em></td>
<td><strong>Input high voltage</strong></td>
<td>ALL</td>
<td>2.5</td>
<td></td>
<td></td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>IL</em></td>
<td><strong>Input low voltage</strong></td>
<td>ALL</td>
<td></td>
<td></td>
<td>0.6</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>OH</em></td>
<td><strong>Output high voltage<br />
(High driving strength Current load = 6mA)<br />
(Low driving strength Current load = 3mA)</strong></td>
<td>ALL</td>
<td>2.83</td>
<td></td>
<td></td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>OL</em></td>
<td><strong>Output high voltage<br />
(High driving strength Current load = 6mA)<br />
(Low driving strength Current load = 3mA)</strong></td>
<td>ALL</td>
<td></td>
<td></td>
<td>0.32</td>
<td>V</td>
</tr>
</tbody>
</table>

### Flash Memory

| Symbol | Parameter            | Min    | Unit   |
| ------ | -------------------- | ------ | ------ |
| N*END* | **Sector Endurance** | 10,000 | Cycles |
| T*DR*  | **Data Retention**   | 10     | Years  |

### EEPROM

| Symbol | Parameter            | Min | Unit   |
| ------ | -------------------- | --- | ------ |
| N*END* | **Sector Endurance** | 1M  | Cycles |
| T*DR*  | **Data Retention**   | 200 | Years  |

### Ethernet Power Dissipation

#### WIZ750SR-TTL

| Condition                      | Min | Typ | Max | Tol | Unit |
| ------------------------------ | --- | --- | --- | --- | ---- |
| 100M Link                      | \-  | 67  | \-  | ±3  | mA   |
| 10M Link                       | \-  | 52  | \-  |     | mA   |
| Unlink (Auto-negotiation mode) | 45  | 50  | 57  | ±3  | mA   |
| 100M Transmitting              | \-  | 74  | \-  | ±3  | mA   |
| 10M Transmitting               | \-  | 62  | \-  |     | mA   |

#### WIZ750SR-RS232

| Condition                      | Min | Typ | Max | Tol | Unit |
| ------------------------------ | --- | --- | --- | --- | ---- |
| 100M Link                      | \-  | 72  | \-  | ±3  | mA   |
| 10M Link                       | \-  | 57  | \-  |     | mA   |
| Unlink (Auto-negotiation mode) | 46  | 54  | 61  | ±3  | mA   |
| 100M Transmitting              | \-  | 79  | \-  | ±3  | mA   |
| 10M Transmitting               | \-  | 61  | \-  |     | mA   |

#### WIZ750SR-RS422/485

| Condition                      | Min | Typ | Max | Tol | Unit |
| ------------------------------ | --- | --- | --- | --- | ---- |
| 100M Link                      | \-  | 95  | \-  | ±3  | mA   |
| 10M Link                       | \-  | 80  | \-  |     | mA   |
| Unlink (Auto-negotiation mode) | 74  | 79  | 85  | ±3  | mA   |
| 100M Transmitting              | \-  | 102 | \-  | ±3  | mA   |
| 10M Transmitting               | \-  | 83  | \-  |     | mA   |

-----

## WIZ750SR Connector Specification

### 6x2 Data Pin Connector

#### TTL/RS-232

![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_data_connector_rs232.png)

<table>
<thead>
<tr class="header">
<th>Pin Number</th>
<th>Signal</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>VCC</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="even">
<td>2</td>
<td>VCC</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="odd">
<td>3</td>
<td>U_RXD0</td>
<td>Receive Data (TTL : 3.3V)</td>
</tr>
<tr class="even">
<td>4</td>
<td>nRESET</td>
<td>System Reset signal (Active Low)</td>
</tr>
<tr class="odd">
<td>5</td>
<td>U_RTS0</td>
<td>Request To Send (TTL : 3.3V)</td>
</tr>
<tr class="even">
<td>6</td>
<td>U_DTR0<br />
PHY LINK</td>
<td>Data Terminal Ready (TTL : 3.3V)<br />
PHY Link status check signal</td>
</tr>
<tr class="odd">
<td>7</td>
<td>U_TXD0</td>
<td>Transmit Data (TTL : 3.3V)</td>
</tr>
<tr class="even">
<td>8</td>
<td>U_DSR0<br />
TCP CON<br />
HW_TRIG</td>
<td>Data Set Ready (TTL : 3.3V)<br />
TCP Connection check signal<br />
Hardware Trigger signal (Active Low)</td>
</tr>
<tr class="odd">
<td>9</td>
<td>U_CTS0</td>
<td>Clear To Send (TTL : 3.3V)</td>
</tr>
<tr class="even">
<td>10</td>
<td>Not use</td>
<td>This pin use to RS-422/485 mode</td>
</tr>
<tr class="odd">
<td>11</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>12</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

#### RS-422/485

![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_data_connector_rs485.png)

<table>
<thead>
<tr class="header">
<th>Pin Number</th>
<th>Signal</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>VCC</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="even">
<td>2</td>
<td>VCC</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="odd">
<td>3</td>
<td>422_RXD+<br />
485+</td>
<td>Differential Data +<br />
RS-485+</td>
</tr>
<tr class="even">
<td>4</td>
<td>nRESET</td>
<td>System Reset signal (Active Low)</td>
</tr>
<tr class="odd">
<td>5</td>
<td>422_RXD-<br />
485-</td>
<td>Differential Data -<br />
RS-485-</td>
</tr>
<tr class="even">
<td>6</td>
<td>U_DTR0<br />
PHY LINK</td>
<td>Data Terminal Ready (TTL : 3.3V)<br />
PHY Link status check signal</td>
</tr>
<tr class="odd">
<td>7</td>
<td>422_TXD+</td>
<td>Differential Data +</td>
</tr>
<tr class="even">
<td>8</td>
<td>U_DSR0<br />
TCP CON<br />
HW_TRIG</td>
<td>Data Set Ready (TTL : 3.3V)<br />
TCP Connection check signal<br />
Hardware Trigger signal (Active Low)</td>
</tr>
<tr class="odd">
<td>9</td>
<td>422_TXD-</td>
<td>Differential Data -</td>
</tr>
<tr class="even">
<td>10</td>
<td>485_SEL</td>
<td>WIZ750SR-485, 485/422 MODE Select pin</td>
</tr>
<tr class="odd">
<td>11</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>12</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

### 1x6 ISP Connector

![](/img/products/wiz750sr/clitool/datasheet/wiz750sr-isp.png)

<table>
<thead>
<tr class="header">
<th>Pin Number</th>
<th>Signal</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>VCC</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="even">
<td>2</td>
<td>BOOT</td>
<td>BOOT mode (Active High)</td>
</tr>
<tr class="odd">
<td>3</td>
<td>U_TXD2</td>
<td>Simple UART2(Debug port)<br />
ISP mode firmware downloader port</td>
</tr>
<tr class="even">
<td>4</td>
<td>U_RXD2</td>
<td>Simple UART2(Debug port)<br />
ISP mode firmware downloader port</td>
</tr>
<tr class="odd">
<td>5</td>
<td>nRESET</td>
<td>System Reset signal (Active Low)</td>
</tr>
<tr class="even">
<td>6</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

### 1x2 Supervisor Jumper / 1x6 Expansion GPIO & APP BOOT

|                                                                  |                                                                         |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_wdt_gpio_20160628.png) | ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_expansiongpio_exp_rev1.2.png) |
| **Rev1.1**                                                       | **Rev1.2**                                                              |

| Pin Number | Signal               | Description            |
| ---------- | -------------------- | ---------------------- |
| 1          | WDT\_nRST(input)     | It only has rev1.0/1.1 |
| 2          | W7500P\_RSTN(output) | :::                    |

| Pin Number | Signal          | Description                          |
| ---------- | --------------- | ------------------------------------ |
| 1          | Expansion GPIOD | Expansion User's depend on GPIO port |
| 2          | Expansion GPIOC | :::                                  |
| 3          | Expansion GPIOB | :::                                  |
| 4          | Expansion GPIOA | :::                                  |
| 5          | APP BOOT        | Application Jump at BOOT mode        |
| 6          | GND             | System Ground                        |

-----

### RJ-45 Connector (BS-RB10005)

![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_magjack.png)

| Pin Number | Pin              | Signal              |
| ---------- | ---------------- | ------------------- |
| 1          | R1               | TX+                 |
| 2          | R2               | TX-                 |
| 3          | R3               | TCT/RCT(Center tap) |
| 4          | R7               | RX+                 |
| 5          | R8               | RX-                 |
| 6          | L1+(Active LED)  | Anode               |
| 7          | L2- (Active LED) | Cathode             |
| 8          | L3+(LINK LED)    | Anode               |
| 9          | L4- (LINK LED)   | Cathode             |

-----

## WIZ750SR Dimension

  - **The board size of the WIZ750SR Rev1.1 is the same as Rev1.0.**

  - WIZ750SR Dimension : 
      - 45mm x 30mm ( PCB board size )
      - 48mm x 30mm x 18mm ( Included part size )

|                                                          |                                                                 |
| -------------------------------------------------------- | --------------------------------------------------------------- |
| ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_dimension.png) | ![](/img/products/wiz750sr/clitool/datasheet/wiz750sr_dimension_rev1.2.png) |
| **Rev1.0/1.1**                                           | **Rev1.2**                                                      |

  - WIZ750SR-EVB (TTL/RS232) Rev1.0 Dimension : 
      - 83mm x 65mm ( PCB board size )
      - 83mm x 65mm x 18mm ( Included part size )

![](/img/products/wiz750sr/clitool/datasheet/wiz750sr-evb-dimension_232.png)

  - WIZ750SR-EVB (RS422/485) Rev1.0 Dimension : 
      - 73mm x 65mm ( PCB board size )
      - 73mm x 65mm x 18mm ( Included part size )

![](/img/products/wiz750sr/clitool/datasheet/wiz750sr-evb-dimension_485.png)
