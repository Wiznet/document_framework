---
id: wiz550io
title: WIZ550io
date: 2021-09-08
---

## Overview

WIZ550io is an auto configurable Ethernet controller that includes a
W5500 (TCP/IP hardwired chip and PHY embedded), a transformer and RJ45.

It has a unique real MAC address and configures the network setting
automatically. When powered on, WIZ550io initializes itself … with
embedded real MAC and sets the default IP address (192.168.1.2) and it
can be pinged. Therefore, users are not required to write MAC and
network information like IP address, Subnet mask and Gateway address.
The WIZ550io is an ideal product for users who want to develop their
Internet enabling systems rapidly.

![](/img/products/wiz550io/wiz550io_small_005.png)

For more information on the [W5500](./../iEthernet/W5500/Overview.md) chip inside the WIZ550io module please also refer to the chip's [datasheet](./../iEthernet/W5500/Datasheet.md).

### Datasheet

- <a href="/img/products/w5500/w5500_ds_v109e.pdf" target="_blank">W5500 Datasheet v1.0.9 - English</a>
- <a href="/img/products/w5500/w5500_ds_v109k.pdf" target="_blank">W5500 Datasheet v1.0.9 - Korean</a>

### Datasheet History

<details>
<summary>Click to view W5500 datasheet history</summary>

|Version|	Date|	Description|
|-------|-----|------------|
|1.0.0|	2013-08-01|	Initial Release|
|1.0.1|	2013-09-13|	Corrected duplicated statements and typing errors (P.14, 23, 24, 28, 39, 51) Corrected descriptions (P.35)|
|1.0.2|	2013-11-14|	Changed “descriptions of pin at 1.1 Pin Descriptions” (P.10) starting ”It must be tied to GND to NC (PIN38..42)” / 2. corrected typing error: starting “0x02 to 0x42 value of SOCK_MACRAW at 4.2 Socket Registers(P.50)”|
|1.0.3|	2014-05-29	|Corrected “Sn_MSSR at 4.2 Socket Register” (P.53): wrong descriptions of Sn_MSSR about FMTU/MTU|
|1.0.4|	2014-06-13|	1. Added Note about reading size register value (P.56, 58) / 2. Added IR Reflow Temperature Profile (P.66)|
|1.0.5	|2014-11-11	|1. Added description for MISO pin (P.11):The SCSn signal defines MISO pin output value / 2. Modified the register notation (P.33), Modified the register notation “Sn_IR at 4.2 Socket Register” (P.49) :from [R] to [RCW1] / 3. Corrected typing error: from DICON to DISCON of Sn_SR at 4.2 Socket Register (P.50)|
|1.0.6|	2014-12-30|	Corrected typing error : from 0x02 to 0x42 value of SOCK_MACRAW “Sn_CR at 4.2 Socket Registers”(P.46)|
|1.0.7|	2016-02-24|	1. Corrected Interrupt Assert Wait Time function (P.34) / 2. Notice PLLclk is 150MHz (P.34)|
|1.0.8|	2017-05-19|	1. Corrected Driver Level Range Unit uW/MHz to uW (P.60)|
|1.0.9|	2019-05-22|	1. Corrected Sn_IMR Description (P.55) 2. Corrected Junction temperature Min value TJ (P.57) 3. Added Maximum junction temperature TJMAX (P.58)|
</details>

### WIZ550io History

|Version	|Date|	Description|
|---------|----|-------------|
|1.0	|2013-08-01|	Initial Release|
|1.1|	2014-01-17	|Changed “External Transformer + RJ-45 to MAGJACK(inside transformer)”|
|1.2|	2015-04-20|	Added “Resistor 33R in MDI line. because EMI issue.”Changed “PCB artwork. because changed develop tool(PADS → Altium)”|
|1.3|	2018-08-10|	Modified “inner 2 layer copper foil (3V3D). This copper foil plated below of CHAND area. It may affect ESD.”|

## Hardware Pins

### Pin Map

![](/img/products/wiz550io/wiz550io_pin_map.jpg)

### Pin out

![](/img/products/wiz550io/wiz550io_pinout_20140513_v4_mounthole_.jpg)

**Revision 1.2 version pinout is same to revision1.1 version.**

-----

### Pin Description

<table>
<thead>
<tr class="header">
<th><strong>Pin No.</strong></th>
<th></th>
<th><strong>I/O</strong></th>
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
<td><strong>O</strong></td>
<td><strong>MISO</strong></td>
<td><strong>SPI Master In Slave Out</strong><br />
This pin is used for SPI MISO signal pin</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>5</strong></td>
<td><strong>I</strong></td>
<td><strong>SCLK</strong></td>
<td><strong>SPI Clock</strong><br />
This pin is used for SPI Clock Signal pin</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>6</strong></td>
<td><strong>I</strong></td>
<td><strong>SCSn</strong></td>
<td><strong>SPI Slave Select</strong><br />
This pin is used for SPI Slave Select Signal Pin when using SPI interface</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>7</strong></td>
<td><strong>P</strong></td>
<td><strong>3V3D</strong></td>
<td><strong>Power</strong>: 3.3V Power Supply</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>8</strong></td>
<td><strong>P</strong></td>
<td><strong>3V3D</strong></td>
<td><strong>Power</strong>: 3.3V Power Supply</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>Pin No.</strong></th>
<th></th>
<th><strong>I/O</strong></th>
<th><strong>Pin Name</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>J2</strong></td>
<td><strong>1</strong></td>
<td><strong>P</strong></td>
<td><strong>3V3D</strong></td>
<td><strong>Power</strong>: 3.3V Power Supply</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>2</strong></td>
<td><strong>O</strong></td>
<td><strong>RDY</strong></td>
<td><strong>READY</strong><br />
This pin is asserted to low after power on.<br />
When RSTn is activated, WIZ550io does auto configuration with embedded MAC and default IP address.<br />
After configuration gets completed, WIZ550io raises this pin to HIGH in order to inform about the completion of WIZ550io’s configuration.<br />
Host processor can only control WIZ55oio when RDY pin is HIGH.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>3</strong></td>
<td><strong>I</strong></td>
<td><strong>RSTn</strong></td>
<td><strong>Reset</strong>: Low activity<br />
This pin is to initialize WIZ550io.<br />
Hold at least 500us after asserted to LOW and wait for at least 150ms after it is changed to HIGH until WIY550io configured itself.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>4</strong></td>
<td><strong>I</strong></td>
<td><strong>NC</strong></td>
<td><strong>Not Connected</strong></td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>5</strong></td>
<td><strong>O</strong></td>
<td><strong>INTn</strong></td>
<td><strong>Interrupt</strong>: Low activity<br />
This pin indicates that W5500 inside WIZ550io requires<br />
MCU's due to events like socket connection, disconnection, data receiving timeout and WOL (Wake on Lan).<br />
The interrupt is cleared by writing IR register or Sn_IR.<br />
All interrupts are maskable.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>6</strong></td>
<td><strong>P</strong></td>
<td><strong>GND</strong></td>
<td><strong>Ground</strong></td>
</tr>
</tbody>
</table>

:::caution
*Some users may want to reinitialize W5500 inside WIZ550io with SW reset,
not handling RSTn pin. It will make WIZ550io hang up due to clearance of
all information in the registers of W5500. A tiny MCU inside WIZ550io
initializes W5500 with embedded MAC address and a default IP address and
Initialization is triggered by RSTn.*  
  
*In case of SW reset, all registers in W5500 will be cleared and WIZ550io
will not initialize itself. All information inside WIZ550io will be lost
and WIZ550io will hang up instead.*  
  
*Therefore, we recommend HW reset instead of SW reset. Nevertheless, if
users want to use SW reset, we recommend to save MAC address and network
information including IP address, Subnet mask and Gateway address before
SW reset, and writing those information to WIZ550io after SW reset.*
:::
-----

## Characteristics

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
<td>V<em>IH</em></td>
<td><strong>High level input voltage</strong></td>
<td>ALL</td>
<td>0.7*Vcc</td>
<td></td>
<td>5.5</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>IL</em></td>
<td><strong>Low level input voltage</strong></td>
<td>ALL</td>
<td>-0.3</td>
<td></td>
<td>0.3*Vcc</td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>OH</em></td>
<td><strong>High level output voltage</strong></td>
<td>ALL</td>
<td>2.9</td>
<td>3.3</td>
<td></td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>OL</em></td>
<td><strong>Low level output voltage</strong></td>
<td>ALL</td>
<td>0.0</td>
<td></td>
<td>0.52</td>
<td>V</td>
</tr>
<tr class="even">
<td>I<em>DD</em></td>
<td><strong>Supply Current<br />
(Normal operation mode)</strong></td>
<td>3.3V</td>
<td></td>
<td>141</td>
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

| Condition                      | Min | Typ | Max | Unit |
| ------------------------------ | --- | --- | --- | ---- |
| 100M Link                      | \-  | 135 | \-  | mA   |
| 10M Link                       | \-  | 80  | \-  | mA   |
| Unlink (Auto-negotiation mode) | 62  | \-  | 75  | mA   |
| 100M Transmitting              | 137 | \-  | 141 | mA   |
| 10M Transmitting               | \-  | 83  | \-  | mA   |
| Power Down mode                | \-  | 13  | \-  | mA   |

## SPI Operations

There is a W5500 inside WIZ550io. Therefore SPI operation of WIZ550io follows one of W5500. For more information about SPI operation of
WIZ550io, please refer to [W5500 Datasheet](./../iEthernet/W5500/Datasheet.md).

## Timing diagram


![](/img/products/wiz550io/nreset_rdy_timing.jpg)

| Symbol | Description                      | Min   | Max  |
| ------ | -------------------------------- | ----- | ---- |
| TRC    | Reset Cycle Time                 | 500us | \-   |
| TPL    | Internal Auto Configuration Time | \-    | 50ms |

### SPI Timing

![](/img/products/wiz550io/spi_timing.jpg)

| Symbol | Description          | Min | Max | Units |
| ------ | -------------------- | --- | --- | ----- |
| Fsck   | SCLK Clock Frequency | \-  | 80  | MHz   |
| TWH    | SCLK High duration   | 6   | \-  | ns    |
| TWL    | SCLK Low duration    | 6   | \-  | ns    |
| TCS    | nSCS High duration   | 5   | \-  | ns    |

## Block Diagram & Schematic

![](/img/products/wiz550io/wiz550io_blockdiagram_140207.png)

### Schematic

  - <a href="/img/products/wiz550io/wiz550io-r1.0_0830_.pdf" target="_blank">WIZ550io Rev1.0 Schematic</a>
  - <a href="/img/products/wiz550io/wiz550io_v1_1_20140117.pdf" target="_blank">WIZ550io Rev1.1 Schematic</a>
  - <a href="/img/products/wiz550io/wiz550io_v1_2_schematic.pdf" target="_blank">WIZ550io Rev1.2/1.3 Schematic</a>

### PCB

  - <a href="/img/products/wiz550io/wiz550io_v1.2.zip" target="_blank">WIZ550io Rev1.2 PCB(Altium)</a>
  - <a href="/img/products/wiz550io/wiz550io_v1.3.zip" target="_blank">WIZ550io Rev1.3 PCB(Altium)</a>

### Partlist

  - <a href="/img/products/wiz550io/wiz550io_v1_0_0830_pl.pdf" target="_blank">WIZ550io Rev1.0 Partlist</a>
  - <a href="/img/products/wiz550io/wiz550io_ver1.1_pl_140128_.pdf" target="_blank">WIZ550io Rev1.1 Partlist</a>
  - <a href="/img/products/wiz550io/wiz550io_ver1.2_pl.pdf" target="_blank">WIZ550io Rev1.2 Partlist</a>

## 3D File

-   ![](/img/products/w5500/w5500_evb/icons/download.png)
    <a href="/img/products/3d-step-files/WIZ550io V1.3.step" target="_blank"> Download</a>

## Dimension

### WIZ550io Ver1.0

![](/img/products/wiz550io/wiz550io_v1.0_dimension.jpg)

### WIZ550io Ver1.1

54mm(W) x 26mm(L) x 24mm(H) (±0.5)
![](/img/products/wiz550io/wiz550io_v1.1_dimension.png)

### WIZ550io Ver1.2

54mm(W) x 26mm(L) x 24mm(H) (±0.5)

Same to Ver1.1 and Ver1.2 PCB all size and hole size. There is little
change in all parts placement.

\* TOP ![](/img/products/wiz550io/wiz550io_topview.png)

\* BOTTOM ![](/img/products/wiz550io/wiz550io_bottomview.png)

\* Drill ![](/img/products/wiz550io/wiz550io_drillview.png)

## Related Products

 * [ioShield-A](./../Open-Source-Hardware/ioShield-A.md)
 * [ioShield-K](./../Open-Source-Hardware/ioShield-K.md)
 * [ioShield-L](./../Open-Source-Hardware/ioShield-L.md)
