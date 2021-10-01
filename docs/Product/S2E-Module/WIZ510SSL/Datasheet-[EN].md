---
id: datasheet
title: Datasheet
date: 2021-03-15
---

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
<td>Arm® 32-bit Cortex®-M33 CPU<br />with TrustZone® and FPU</td>
<td>
48Mhz maximum frequency<br />
Internal 16Mhz RC Oscillator<br />
Flash: 512KB<br />
256 Kbytes of SRAM including 64 Kbytes with hardware parity check<br />
Arm® TrustZone® and securable I/Os, memories and peripherals<br />
512-byte OTP (one-time programmable) for user data<br />
</td>
</tr>
<tr class="even">
<td>:::</td>
<td>Hardwired<br />
TCP/IP<br />
Core</td>
<td>4 independent Sockets<br />
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
<td>WIZ510SSL<br />
</td>
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
<td> ( PCB board size )<br />
 ( Include part size )</td>
</tr>
<tr class="odd">
<td>Connector type</td>
<td></td>
<td>TBC 2.54mm Pitch 1x12 Pin-header(Data Line)<br />
2.54mm Pitch 1x12 Pin-header(ISP)<br />
2.54mm Pitch 1x12 Pin-header(Expansion GPIO &amp; app_boot)<br />
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
<td>TBC 0℃ ~ 70℃ (Operation), -40℃ ~ 85℃ (Storage range)</td>
</tr>
</tbody>
</table>

-----

### Callout

#### Rev1.0

|                                                                      |                                                                         |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![](/img/products/wiz510ssl/getting_started/wiz510ssl_top_parts_rev1.0.png) | ![](/img/products/wiz510ssl/getting_started/wiz510ssl_bottom_parts_rev1.0.png) |
| **TOP**                                                              | **BOTTOM**                                                              |

-----

## Schematic

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
<td>RS-232</td>
<td>Altium</td>
<td><img src="" /> <a href="">Download</a></td>
<td>-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>PDF</td>
<td><img src="" /> <a href="/img/productsWIZ510SSL/static/WIZ510SSL_schematic.pdf">Download</a></td>
<td>-</td>
</tr>
</tbody>
</table>

-----

## Part list

| H/W version | Filetype | Download Link      | Remarks |
| ----------- | -------- | ------------------ | ------- |
| 1.0         | Excel    | <a href="/img/products/WIZ510SSL/static/Bill-of-Materials-WIZ510SSL.xlsx" target="_blank">Download</a>|         |
|         | PDF  |  <a href="/img/productsWIZ510SSL/static/WIZ510SSL_partlist.pdf" target="_blank">Download</a> |         |

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
<td>3.6</td>
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
<td>-40</td>
<td>85</td>
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

### Absolute maximum ratings

#### Voltage characteristics

<table>
<thead>
<tr class="header">
<th>Symbol</th>
<th>Ratings</th>
<th>Min</th>
<th>Max</th>
<th>Unit</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>V<em>DDX</em>-V<em>SS</em></td>
<td><strong>External main supply voltage (including VDD, VDDA, VDDIO2, VDDUSB, VBAT, VDDSMPS, VREF+)</strong></td>
<td>-0.3</td>
<td>4.0</td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>DD12</em>-V<em>SS</em></td>
<td><strong>External SMPS supply voltage (All ranges 0/1/2)</strong></td>
<td>-0.3</td>
<td>1.4</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>IN</em></td>
<td><strong>Input voltage on FT_xxx pins except FT_c pins</strong></td>
<td>V<em>SS</em>-0.3</td>
<td>min (VDD, VDDA, VDDIO2, VDDUSB, VDDSMPS) + 4.0</td>
<td>V</td>
</tr>
<tr class="even">
<td>::</td>
<td><strong>Input voltage on FT_c pins</strong></td>
<td>V<em>SS</em>-0.3</td>
<td>5.5</td>
<td>V</td>
</tr>
<tr class="odd">
<td>::</td>
<td><strong>Input voltage on any other pins</strong></td>
<td>V<em>SS</em>-0.3</td>
<td>4.0</td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>REF+</em>-V<em>DDA</em></td>
<td><strong>Allowed voltage difference for VREF+ > VDDA</strong></td>
<td>-</td>
<td>0.4</td>
<td>V</td>
</tr>
<tr class="odd">
<td>|∆V<em>DDX</em>|</td>
<td><strong>Variations between different VDDX power pins of the same domain</strong></td>
<td>-</td>
<td>50</td>
<td>mV</td>
</tr>
<tr class="even">
<td>|V<em>SSX</em>-V<em>SS</em>|</td>
<td><strong>Variations between all the different ground pins</strong></td>
<td>-</td>
<td>50</td>
<td>mV</td>
</tr>
</tbody>
</table>


#### Current characteristics

<table>
<thead>
<tr class="header">
<th>Symbol</th>
<th>Ratings</th>
<th>Max</th>
<th>Unit</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>∑IVDD T</td>
<td><strong>Total current into sum of all VDD power lines (source)</strong></td>
<td>160</td>
<td>mA</td>
</tr>
<tr class="even">
<td>∑IVSS</td>
<td><strong>Total current out of sum of all VSS ground lines (sink)</strong></td>
<td>160</td>
<td>mA</td>
</tr>
<tr class="odd">
<td>IV<em>DD(PIN)</em></td>
<td><strong>Maximum current into each VDD power pin (source)</strong></td>
<td>100</td>
<td>mA</td>
</tr>
<tr class="even">
<td>IV<em>SS(PIN)</em></td>
<td><strong>Maximum current out of each VSS ground pin (sink)</strong></td>
<td>100</td>
<td>mA</td>
</tr>
<tr class="odd">
<td>I<em>IO(PIN)</em></td>
<td><strong>Output current sunk by any I/O and control pin except FT_f</strong></td>
<td>20</td>
<td>mA</td>
</tr>
<tr class="even">
<td>::</td>
<td><strong>Output current sunk by any FT_f pin</strong></td>
<td>20</td>
<td>mA</td>
</tr>
<tr class="odd">
<td>::</td>
<td><strong>Output current sourced by any I/O and control pin</strong></td>
<td>20</td>
<td>mA</td>
</tr>
<tr class="even">
<td>∑I<em>IO(PIN)</em></td>
<td><strong>Total output current sunk by sum of all I/Os and control pins</strong></td>
<td>100</td>
<td>mA</td>
</tr>
<tr class="odd">
<td>::</td>
<td><strong>Total output current sourced by sum of all I/Os and control pins</strong></td>
<td>100</td>
<td>mA</td>
</tr>
<tr class="even">
<td>I<em>INJ(PIN)</em></td>
<td><strong>Injected current on FT_xxx, TT_xx, RST and B pins, except PA4, PA5</strong></td>
<td>-5/+0</td>
<td>mA</td>
</tr>
<tr class="odd">
<td>::</td>
<td><strong>Injected current on PA4, PA5</strong></td>
<td>-5/0</td>
<td>mA</td>
</tr>
<tr class="even">
<td>∑|I<em>INJ(PIN)</em>| </td>
<td><strong>Total injected current (sum of all I/Os and control pins)</strong></td>
<td>+/-25</td>
<td>mA</td>
</tr>
</tbody>
</table>

#### Thermal characteristics


<table>
<thead>
<tr class="header">
<th>Symbol</th>
<th>Ratings</th>
<th>Max</th>
<th>Unit</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>T<em>STG</em></td>
<td><strong>Storage temperature range</strong></td>
<td>-65 to +150</td>
<td>℃</td>
</tr>
<tr class="even">
<td>TJ</td>
<td>Maximum junction temperature</td>
<td>150</td>
<td>℃</td>
</tr>
</tbody>
</table>

### Flash Memory

| Symbol | Parameter            |Conditions| Min(1) | Unit   |
| ------ | -------------------- | ---------| ------ | ------ |
| N*END* | **Sector Endurance** | TA = –40 to +105 °C| 10,000 | Cycles |
| T*DR*  | **Data Retention**   | 1 kcycle(2) at TA = 85 °C <br /> 1 kcycle(2) at TA = 105 °C<br />1 kcycle(2) at TA = 125 °C<br />1 kcycle(2) at TA = 55 °C<br />1 kcycle(2) at TA = 85 °C<br />1 kcycle(2) at TA = 105 °C | 30<br />15<br />7<br />30<br />15<br />10<br /> | Years  |

(1) - Guaranteed by characterization results.
(2) - Cycling performed over the whole temperature range.

### Ethernet Power Dissipation

#### WIZ510SSL-TTL

| Condition                      | Min | Typ | Max | Tol | Unit |
| ------------------------------ | --- | --- | --- | --- | ---- |
| 100M Link                      | \-  | 67  | \-  | ±3  | mA   |
| 10M Link                       | \-  | 52  | \-  |     | mA   |
| Unlink (Auto-negotiation mode) | 45  | 50  | 57  | ±3  | mA   |
| 100M Transmitting              | \-  | 74  | \-  | ±3  | mA   |
| 10M Transmitting               | \-  | 62  | \-  |     | mA   |

-----

## WIZ510SSL Pinout

### 1x6 Pin Header

![](/img/products/wiz510ssl/datasheet/W510SSL_pinout_2.png)

#### J1 Pin

| Pin Number |  Signal              |
| ---------- |  ------------------- |
| 1          |  3V3D                |
| 2          |  SWDIO               |
| 3          |  SWCLK               |
| 4          |  NRST                |
| 5          |  GND                 |

#### J2 Pin

| Pin Number |  Signal              |
| ---------- |  ------------------- |
| 1          |  3V3D                |
| 2          |  BOOT0               |
| 3          |  UART2_TX            |
| 4          |  UART2_RX            |
| 5          |  NRST                |
| 6          |  GND                 |

#### J3 Pin

| Pin Number |  Signal              |
| ---------- |  ------------------- |
| 1          |  3V3D                |
| 2          |  BOOT0               |

### 1x12 Pin Header

![](/img/products/wiz510ssl/datasheet/W510SSL_pinout_1.png)

#### J4 Ethernet Line

| Pin Number |  Signal              |
| ---------- |  ------------------- |
| 1          |  3V3A                |
| 2          |  RX N                |
| 3          |  RX P                |
| 4          |  GND                 |
| 5          |  TX N                |
| 6          |  TX P                |
| 7          |  GND                 |
| 8          |  LINKn               |
| 9          |  SPDn                |
| 10         |  ACTn                |
| 11         |  COLn                |
| 12         |  3V3D                |

#### J5 Data Line

| Pin Number |  Signal              |
| ---------- |  ------------------- |
| 1          |  3V3D                |
| 2          |  NRST                |
| 3          |  GND                 |
| 4          |  USART1_TX           |
| 5          |  USART1_RTS          |
| 6          |  DTR                 |
| 7          |  GND                 |
| 8          |  USART1_RX           |
| 9          |  USART1_CTS          |
| 10         |  DSR                 |
| 11         |  GND                 |
| 12         |  STATUS              |

#### J6 Debug Line

| Pin Number |  Signal              |
| ---------- |  ------------------- |
| 1          |  GND                 |
| 2          |  STATUS LED0         |
| 3          |  STATUS LED1         |
| 4          |  BOOT00              |
| 5          |  UART2 TX            |
| 6          |  UART2 RX            |
| 7          |  PB3                 |
| 8          |  PB4                 |
| 9          |  PB5                 |
| 10         |  PB6                 |
| 11         |  PB7                 |
| 12         |  GND                 |

-----

## WIZ510SSL Dimension

  - WIZ510SSL Dimension : 
      - 50mm x 30mm ( PCB board size )


|                                                          |
| -------------------------------------------------------- |
| ![](/img/products/wiz510ssl/datasheet/wiz510ssl-dimensions.png) |
| **Rev0.1**                                               |

