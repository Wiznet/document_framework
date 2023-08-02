---
id: datasheet_hardware_spec_characteristics-EN
title: Datasheet-EN
date: 2020-04-16
---


## WIZ550SR Datasheet

## Overview

This page provides information about the hardware description of
WIZ550SR as following:  

  - Hardware Specification
  - Electrical Characteristics
  - Schematic
  - Dimension

The revision history will be updated in this page in case of any changes
of hardware specification or exterior design.

-----

## Hardware Specification

### WIZ550SR

  - Very small size Serial to Ethernet Module.
  - WIZnet TCP/IP Chip **W5500**.
  - STM32F103RCT6.
  - Not include a transformer and RJ45.
  - 2.00mm Pitch Pin Header Type, 1x11.
  - Support the **MDI**(Medium Dependent Interface).
      - TXN, TXP, RXN, RXP
  - Support the **UART** interface.
      - RXD, TXD, RTS, CTS, DSR(Option), DTR(Option)
      - Support the RS-232C Interface.
      - Will be soppoted the RS-422/485 Interface.
  - Support the Debug UART.
      - DEBUG RXD, DEBUG TXD
  - Support the PHY Status Output.
      - Active LED, Link LED
  - Support the STATUS output.
      - LOW : TCP Connect.
      - HIGH : TCP Diconnect.
  - System Pins.
      - RESET : System Reset, Active Low.
      - BOOT0 : MCU BOOT mode operation, Active High.
      - H/W TRIG : App BOOT mode operation, Active Low.
  - Support the Indicator LED.
      - Power LED(LD3).
      - LED 0(LD1) : 
      - LED 1(LD2) : 
  - Support the Pin Header Hole for Firmware upload.
      - 2.54mm Pitch, Not Mount.
  - Support the Pin Header Hole for SWD.
      - 1.27mm Pitch, Not Mount.
  - Include eeprom for data storage.
  - Operation Temperature : -40℃ \~ 85℃
  - Size : 22mm x 24mm x 13mm

#### WIZ550SR Pin Out

![WIZ550SR Pin Out](/img/products/wiz550sr/wiz550sr_ds/wiz550sr_pinmap.png)

![WIZ550SR Pin Out](/img/products/wiz550sr/wiz550sr_ds/wiz550sr_pinout_2.png)

#### WIZ550SR Pin Description

<table>
<thead>
<tr class="header">
<th>Ref No.</th>
<th>Pin No.</th>
<th>Symbol</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>J1</td>
<td><strong>1</strong></td>
<td><strong>3.3V</strong></td>
<td><strong>P</strong></td>
<td><strong>+3.3V Input Power</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>2</strong></td>
<td><strong>3.3V_OUT</strong></td>
<td><strong>P</strong></td>
<td><strong>+3.3V Output Power.</strong><br />
This pin is connected to the TX resistor of MDI signal and Center TAP of RJ45.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>3</strong></td>
<td><strong>TXN</strong></td>
<td><strong>O</strong></td>
<td><strong>MDI Signal.</strong> TX Positive.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>4</strong></td>
<td><strong>TXP</strong></td>
<td><strong>O</strong></td>
<td><strong>MDI Signal.</strong> TX Negative.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>5</strong></td>
<td><strong>GND</strong></td>
<td><strong>P</strong></td>
<td><strong>Ground.</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>6</strong></td>
<td><strong>RXN</strong></td>
<td><strong>I</strong></td>
<td><strong>MDI Signal.</strong> RX Negative.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>7</strong></td>
<td><strong>RXP</strong></td>
<td><strong>I</strong></td>
<td><strong>MDI Signal.</strong> RX Positive.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>8</strong></td>
<td><strong>GND</strong></td>
<td><strong>P</strong></td>
<td><strong>Ground.</strong></td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>9</strong></td>
<td><strong>ACT LED</strong></td>
<td><strong>O</strong></td>
<td><strong>PHY Active LED</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>10</strong></td>
<td><strong>LINK LED</strong></td>
<td><strong>O</strong></td>
<td><strong>PHY Link LED</strong></td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>11</strong></td>
<td><strong>GND</strong></td>
<td><strong>P</strong></td>
<td><strong>Ground.</strong></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th>Ref No.</th>
<th>Pin No.</th>
<th>Symbol</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>J2</td>
<td><strong>1</strong></td>
<td><strong>RXD</strong></td>
<td><strong>I</strong></td>
<td><strong>Data UART.</strong> Recieve Pin.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>2</strong></td>
<td><strong>TXD</strong></td>
<td><strong>O</strong></td>
<td><strong>Data UART.</strong> Transmit Pin.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>3</strong></td>
<td><strong>RTS</strong></td>
<td><strong>O</strong></td>
<td><strong>Data UART.</strong> Request to Send Pin.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>4</strong></td>
<td><strong>CTS</strong></td>
<td><strong>I</strong></td>
<td><strong>Data UART.</strong> Clear to Send Pin.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>5</strong></td>
<td><strong>DEBUG_RX</strong></td>
<td><strong>I</strong></td>
<td><strong>Debug UART.</strong> Recieve Pin.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>6</strong></td>
<td><strong>DEBUG_TX</strong></td>
<td><strong>O</strong></td>
<td><strong>Debug UART.</strong> Transmit Pin.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>7</strong></td>
<td><strong>GND</strong></td>
<td><strong>P</strong></td>
<td><strong>Ground.</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>8</strong></td>
<td><strong>BOOT0</strong></td>
<td><strong>I</strong></td>
<td><strong>MCU Boot.</strong> Active High</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>9</strong></td>
<td><strong>nRST</strong></td>
<td><strong>I</strong></td>
<td><strong>Reset.</strong> Active Low</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>10</strong></td>
<td><strong>STATUS</strong></td>
<td><strong>O</strong></td>
<td><strong>Status Output.</strong><br />
High : Disconnect.<br />
Low : Connect.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>11</strong></td>
<td><strong>nH/W TRIG</strong></td>
<td><strong>I</strong></td>
<td><strong>App Boot.</strong><br />
Hardware TRIG Input. Active Low</td>
</tr>
</tbody>
</table>

#### WIZ550SR Block Diagram

![WIZ550SR Block Diagram](/img/products/wiz550sr/wiz550sr_ds/wiz550sr_block_diagram.png)

-----


### WIZ550SR EVB

![WIZ550SR EVB](/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_2.png)

  - WIZ550SR Developer Board.
  - USB to UART chip, FT2232D.
  - RJ45 with Transformer, RB1-1D5B8K1A.
  - RESET Tact SW.
  - BOOT0 Tact SW.
  - H/W Trig Tact SW.
  - LED Indicators.
  - Micro USB.

#### WIZ550SR EVB Call Out

![WIZ550SR EVB Call Out](/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_callout.png)

#### WIZ550SR EVB Block Diagram

![WIZ550SR Block Diagram](/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_block_diagram.png)

-----


## Electrical Characteristics

### Operating conditions at power-up / power-down

| Symbol | Parameter                | Conditions | Min | Max | Unit |
| ------ | ------------------------ | ---------- | --- | --- | ---- |
| T*VDD* | **V*DD* rise time rate** | \-         | 0   | \-  | us/V |
| :::    | **V*DD* fall time rate** | :::        | 20  | \-  | :::  |

### DC Characteristics

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
<td>3.6</td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>IL</em></td>
<td><strong>High level input voltage</strong></td>
<td>ALL</td>
<td>1.833</td>
<td></td>
<td>3.6</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>IH</em></td>
<td><strong>Low level input voltage</strong></td>
<td>ALL</td>
<td>-0.3</td>
<td></td>
<td>1.166</td>
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
<td>3.0</td>
<td></td>
<td></td>
<td>V</td>
</tr>
<tr class="even">
<td>L<em>OL</em></td>
<td><strong>Low level input Current</strong><br />
Sink Current</td>
<td>ALL</td>
<td></td>
<td></td>
<td>-25</td>
<td>mA</td>
</tr>
<tr class="odd">
<td>L<em>OH</em></td>
<td><strong>High level output Current</strong><br />
Source Current</td>
<td>ALL</td>
<td></td>
<td></td>
<td>25</td>
<td>mA</td>
</tr>
<tr class="even">
<td>I<em>DD</em></td>
<td><strong>Supply Current<br />
(Normal operation mode)</strong></td>
<td>3.3V</td>
<td></td>
<td>TBD</td>
<td></td>
<td>mA</td>
</tr>
</tbody>
</table>

### nRST pin Characterisrics

| Symbol       | Parameter                                   | Conditions | Min   | Typ | Max  | Unit |
| ------------ | ------------------------------------------- | ---------- | ----- | --- | ---- | ---- |
| V*IL(nRST)*  | **NRST Input low level voltage**            | \-         | \-0.5 | \-  | 0.8  | V    |
| V*IH(nRST)*  | **NRST Input high level voltage**           | \-         | \-2   | \-  | 3.8V | V    |
| V*hys(nRST)* | **NRST Schmitt trigger voltage hysteresis** | \-         | \-    | 200 | \-   | mV   |
| R*PU*        | **Weak pull-up equivalent resistor**        | \-         | 30    | 40  | 50   | kΩ   |
| V*F(nRST)*   | **NRST Input filtered pulse**               | \-         | \-    | \-  | 100  | ns   |
| V*NF(nRST)*  | **NRST Input not filtered pulse**           | \-         | 300   | \-  | \-   | ns   |

### Power Dissipation

| Condition                       | Min | Typ | Max | Unit |
| ------------------------------- | --- | --- | --- | ---- |
| 100M Link                       | \-  | 180 | \-  | mA   |
| 10M Link                        | \-  | TBD | \-  | mA   |
| Un-Link (Auto-negotiation mode) | \-  | TBD | \-  | mA   |
| 100M Transmitting               | \-  | TBD | \-  | mA   |
| 10M Transmitting                | \-  | TBD | \-  | mA   |
| Power Down mode                 | \-  | TBD | \-  | mA   |

-----


## Schematics & BOM

### Ref. Schematic

![WIZ550SR Ref Schematic](/img/products/wiz550sr/wiz550sr_ds/wiz550sr_v1.0_ref_sch.png)  

  - WIZ550SR Ref Schematic : <a href="/img/products/wiz550sr/wiz550sr_ds/wiz550sr_v100_ref_sch_160526.pdf" target="_blank">Download</a>  
### WIZ550SR Schematic
  - WIZ550SR V1.0 Schematic : <a href="/img/products/wiz550sr/wiz550sr_ds/wiz550sr_sch_v100.zip" target="_blank">Download(Altium)</a>  
    * WIZ550SR V1.0 Schematic : <a href="/img/products/wiz550sr/wiz550sr_ds/wiz550sr_sch_v100.pdf" target="_blank">Download(PDF)</a>  

### WIZ550SR BOM

  - WIZ550SR V1.0 BOM: <a href="/img/products/wiz550sr/wiz550sr_ds/wiz550sr_bom_v100_160511.pdf" target="_blank">Download</a>  
  
### WIZ550SR EVB Schematic

  - WIZ550SR EVB V1.0 Schematic : <a href="/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_sch_v100.zip" target="_blank">Download(Altium)</a>  
  * WIZ550SR EVB V1.0 Schematic : <a href="/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_sch_v100.pdf" target="_blank">Download(PDF)</a>  

### WIZ550SR EVB BOM

  - WIZ550SR EVB V1.0 BOM : <a href="/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_bom_v100_160512.pdf" target="_blank">Download</a>  

-----

## Dimension

  - WIZ550SR V1.0 3D PDF : <a href="/img/products/wiz550sr/wiz550sr_ds/wiz550sr_v1.0_3d.pdf" target="_blank">Download</a>  
    \* This PDF must be run using the 'Adobe Acrobat'.

![WIZ550SR Dimension](/img/products/wiz550sr/wiz550sr_ds/wiz550sr_dimension.jpg)

-----