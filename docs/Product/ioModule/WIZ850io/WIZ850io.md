---
id: wiz850io
title: WIZ850io
date: 2020-04-15
---

## Overview

WIZ850io is a compact size network module that includes a W5500 (TCP/IP
hardwired chip and PHY embedded), a transformer and RJ45. It can be used
as a component and no effort is required to interface W5500 and
Transformer. The WIZ850io is an ideal option for users who want to
develop their Internet enabling systems rapidly. WIZ850io is hardware
compatible with WIZ820io. WIZ820io users, to migrate to WIZ850io, need
to modify the Firmware.  

For the detailed information on implementation of Hardware TCP/IP, refer
to the [W5500 Datasheet](../../iEthernet/W5500/datasheet).

![WIZ850io](/img/products/wiz850io/wiz850io.png)  

-----

## Hardware Specification

### WIZ850io

   * Plugin Network Module.
   * Hardware compatible with WIZ820io.
   * Usable without H/W design for W5500, Transformer & RJ45.
   * Fast evaluation for W5500 & MCU in the target board.
   * Support high speed SPI interface.
   * Support power down mode and Wake-on-LAN function
   * Very small form factor : 23mm x 25mm x 18mm
   * 1 x 6, 2.54mm Pin Header x 2

### Pin Out

![WIZ850io Pinmap](/img/products/wiz850io/wiz850io_pinmap.png)  

### Pin Description

<table>
<thead>
<tr class="header">
<th><strong>Pin No.</strong></th>
<th></th>
<th><strong>Pin Type</strong></th>
<th>Pin Name</th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>J1</td>
<td><strong>1</strong></td>
<td><strong>P</strong></td>
<td><strong>GND</strong></td>
<td><strong>Ground</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>2</strong></td>
<td><strong>P</strong></td>
<td><strong>GND</strong></td>
<td><strong>Ground</strong></td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>3</strong></td>
<td><strong>I</strong></td>
<td><strong>MOSI</strong></td>
<td><strong>SPI Master Out Slave In</strong><br />
This pin is used for SPI MOSI signal pin</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>4</strong></td>
<td><strong>I</strong></td>
<td><strong>SCLK</strong></td>
<td><strong>SPI Clock</strong><br />
This pin is used for SPI Clock Signal pin</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>5</strong></td>
<td><strong>I</strong></td>
<td><strong>SCNn</strong></td>
<td><strong>SPI Slave Select</strong><br />
This pin is used for SPI Slave Select Signal Pin when using SPI interface</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>6</strong></td>
<td><strong>I</strong></td>
<td><strong>INTn</strong></td>
<td><strong>W5500 Interrupt</strong> : Low activity<br />
This pin is used for indicating event like socket TCP connection, disconnection, data receiving timeout, WOL(Wake on Lan) and so on occurred in W5500 inside WIZ550io.<br />
The interrupt is cleared by writing IR register or Sn_IR. All interrupts are maskable.</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>Pin No.</strong></th>
<th></th>
<th><strong>Pin Type</strong></th>
<th>Pin Name</th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>J2</td>
<td><strong>1</strong></td>
<td><strong>P</strong></td>
<td><strong>GND</strong></td>
<td><strong>Ground</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>2</strong></td>
<td><strong>P</strong></td>
<td><strong>3.3V</strong></td>
<td><strong>Power</strong> : 3.3V power supply</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>3</strong></td>
<td><strong>P</strong></td>
<td><strong>3.3V</strong></td>
<td><strong>Power</strong> : 3.3V power supply</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>4</strong></td>
<td><strong>-</strong></td>
<td><strong>NC</strong></td>
<td><strong>Not Connect</strong></td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>5</strong></td>
<td><strong>I</strong></td>
<td><strong>RSTn</strong></td>
<td><strong>Reset</strong> : Low activity<br />
Hold at least 500us after asserted to LOW and keep HIGH until next Reset needed.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>6</strong></td>
<td><strong>O</strong></td>
<td><strong>MISO</strong></td>
<td><strong>SPI Master In Slave Out</strong><br />
This pin is used for SPI MISO signal pin</td>
</tr>
</tbody>
</table>

User need to wait for 50ms after this pin is changed to HIGH to
communicate with WIZ850io. (Refer to 5. Timing Diagram)

-----

## Characteristic

### DC Characteristic

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
<td>V<em>DD</em></td>
<td><strong>Supply voltage</strong></td>
<td>3.3V</td>
<td>2.97</td>
<td>3.3</td>
<td>3.63</td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>IL</em></td>
<td><strong>High level input voltage</strong></td>
<td>ALL</td>
<td>2.0</td>
<td></td>
<td>5.5</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>IH</em></td>
<td><strong>Low level input voltage</strong></td>
<td>ALL</td>
<td>-0.3</td>
<td></td>
<td>0.8</td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>OL</em></td>
<td><strong>Low level output voltage</strong></td>
<td>ALL</td>
<td></td>
<td></td>
<td>0.4</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>OH</em></td>
<td><strong>High level output voltage</strong></td>
<td>ALL</td>
<td>2.4</td>
<td></td>
<td></td>
<td>V</td>
</tr>
<tr class="even">
<td>L<em>OL</em></td>
<td><strong>Low level output Current</strong></td>
<td>ALL</td>
<td>8.6</td>
<td>13.9</td>
<td>18.9</td>
<td>mA</td>
</tr>
<tr class="odd">
<td>L<em>OH</em></td>
<td><strong>High level output Current</strong></td>
<td>ALL</td>
<td>12.5</td>
<td>26.9</td>
<td>47.1</td>
<td>mA</td>
</tr>
<tr class="even">
<td>I<em>DD</em></td>
<td><strong>Supply Current<br />
(Normal operation mode)</strong></td>
<td>3.3V</td>
<td></td>
<td>132</td>
<td></td>
<td>mA</td>
</tr>
<tr class="odd">
<td>L<em>OH</em></td>
<td><strong>Supply Current<br />
(Power Down mode)</strong></td>
<td>3.3V</td>
<td></td>
<td>13</td>
<td></td>
<td>mA</td>
</tr>
</tbody>
</table>

### Power Dissipation

| Condition                       | Min | Typ | Max | Unit |
| ------------------------------- | --- | --- | --- | ---- |
| 100M Link                       | \-  | 128 | \-  | mA   |
| 10M Link                        | \-  | 75  | \-  | mA   |
| Un-Link (Auto-negotiation mode) | \-  | 65  | \-  | mA   |
| 100M Transmitting               | \-  | 132 | \-  | mA   |
| 10M Transmitting                | \-  | 79  | \-  | mA   |
| Power Down mode                 | \-  | 13  | \-  | mA   |

-----

## SPI Operations

As WIZ850io consists of W5500 and others, SPI operation of WIZ850io
follows one of W5500. For more information about SPI operation of
WIZ850io, please refer to [W5500 Datasheet](../../iEthernet/W5500/datasheet)).

-----

## Timing Diagram

### Reset Timing

![WIZ850io Reset Timing](/img/products/wiz850io/wiz850io_reset_timing.png)

| Symbol | Description                      | Min   | Max  |
| ------ | -------------------------------- | ----- | ---- |
| TRC    | Reset Cycle Time                 | 500us | \-   |
| TPL    | Internal Auto Configuration Time | \-    | 50ms |

### SPI Timing

![WIZ850io SPI Timing](/img/products/spi_timing.jpg)

| Symbol | Description          | Min | Max | Units |
| ------ | -------------------- | --- | --- | ----- |
| Fsck   | SCLK Clock Frequency | \-  | 80  | MHz   |
| TWH    | SCLK High duration   | 6   | \-  | ns    |
| TWL    | SCLK Low duration    | 6   | \-  | ns    |
| TCS    | nSCS High duration   | 5   | \-  | ns    |

-----

## Schematic

  - Revision 1.0 <a href="/img/products/wiz850io/wiz850io_sch_v100.pdf" target="_blank">WIZ850io Rev1.0 Schematic(PDF)</a>
  - Revision 1.0 <a href="/img/products/wiz850io/wiz850io_sch_v100.zip" target="_blank">WIZ850io Rev1.0 Schematic(Altium)</a>

-----

## Dimension

  - WIZ850io V1.0 3D PDF :
    <a href="/img/products/wiz850io/wiz850io_v100_3d.pdf" target="_blank">Download</a>  
    \* This PDF must be run using the 'Adobe Acrobat'.

![WIZ850io Dimension](/img/products/wiz850io/wiz850io_dimension.png)

-----

## See Also

   * 🌎[WIZnet Forum](https://forum.wiznet.io/) : WIZnet Forum for Technical support and Project sharing

-----

## Where to Buy

![WIZnet Online Shop](/img/products/w5500/buynow.png)  
[![WIZnetHK Online Shop, HK](/img/products/w5500/w5500_evb/icons/dollar.png)](https://www.wiznet.hk/en/network-module/91-wiz610io.html)
[![WIZnetUS Online Shop, USA](/img/products/w5500/w5500_evb/icons/dollar.png)](http://www.shopwiznet.com/)
[![WIZnetEU Online Shop, Germany](/img/products/w5500/w5500_evb/icons/european-euro.png)](http://shop.wiznet.eu/)
[![WIZnetKorea Online Shop, Korea](/img/products/w5500/w5500_evb/icons/won.png)](http://shop.wiznet.co.kr/)
