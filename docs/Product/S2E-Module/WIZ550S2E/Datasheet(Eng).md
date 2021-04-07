---
id: datasheet_eng
title: Datasheet(Eng)
date: 2020-04-29
---

# Overview

This page provides information about the hardware description of
WIZ550S2E base on RS232 & RS422/485 Interface board as following:

  - Basic Hardware Specification
  - Operating Characteristics
  - Reference Schematics 
  - Dimension information

The revision history will be updated in this page in case of any changes
of hardware specification or exterior design.

-----
## Hardware Specification

### WIZ550S2E

   * MCU LPC11E36FHN33
   * TCP/IP Controller W5500
   * RJ45(Integrated Transformer)
   * 2.54mm Header x2

![](/img/products/wiz550s2e/wiz550s2eds/wiz550s2e_pin.jpg)

#### Pin Description

| Ref No. | Pin No. | Symbol      | Type    | Description                                                                                 |
| ------- | ------- | ----------- | ------- | ------------------------------------------------------------------------------------------- |
| J1      | **1**   | **3V3D**    | **P**   | Supply DC+3.3V                                                                              |
| :::     | **2**   | **RSVD1**   | **I/O** | Reserved I/O                                                                                |
| :::     | **3**   | **RSVD2**   | **I/O** | Reserved I/O                                                                                |
| :::     | **4**   | **nSYSRST** | **I**   | System reset input. Active Low.                                                             |
| :::     | **5**   | **nFACRST** | **I**   | Factory reset. Active Low \> 5sec. Changing the settings of the module to the default value |
| :::     | **6**   | **nHWTRIG** | **I**   | Hardware Trigger input Active Low.                                                          |
| :::     | **7**   | **GND**     | **P**   | Power Ground                                                                                |
| :::     | **8**   | **GND**     | **P**   | Power Ground                                                                                |

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
<td><strong>GND</strong></td>
<td><strong>P</strong></td>
<td>Power Ground</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>2</strong></td>
<td><strong>NC</strong></td>
<td><strong>-</strong></td>
<td>No connection</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>3</strong></td>
<td><strong>STATUS1</strong></td>
<td><strong>O</strong></td>
<td>Output for LED Display<br />
High and low once a second when operating</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>4</strong></td>
<td><strong>STATUS2</strong></td>
<td><strong>O</strong></td>
<td>Output for LED Display<br />
Low when operating</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>5</strong></td>
<td><strong>nCTS</strong></td>
<td><strong>I</strong></td>
<td>Clear To Send input for UART</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>6</strong></td>
<td><strong>nRTS</strong></td>
<td><strong>O</strong></td>
<td>Request To Send output for UART.<br />
This pin also serves as the RS485 control.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>7</strong></td>
<td><strong>RXD</strong></td>
<td><strong>I</strong></td>
<td>Receiver input for UART</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>8</strong></td>
<td><strong>TXD</strong></td>
<td><strong>O</strong></td>
<td>Transmitter output for UART</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>9</strong></td>
<td><strong>3V3D</strong></td>
<td><strong>P</strong></td>
<td>Supply DC+3.3V</td>
</tr>
</tbody>
</table>

-----

### WIZ550S2E-232 Interface board

   * Line Driver SP3232EBEY
   * System Reset Switch
   * Factory Reset Switch
   * Hardware-Trigger Mode Switch
   * Status LEDs
   * DC-Jack (for +5V Input Power)

![](/img/products/wiz550s2e/wiz550s2eds/rs232if_pin_20140729.jpg)
![](/img/products/wiz550s2e/wiz550s2eds/크기변환_wiz550s2e-232-evb.png)

-----

### WIZ550S2E-485/422 Interface board

   * Line Driver SP3485EN
   * System Reset Switch
   * Factory Reset Switch
   * Hardware-Trigger Mode Switch
   * Status LEDs
   * DC-Jack (for +5V Input Power)

![](/img/products/wiz550s2e/wiz550s2eds/rs485-422if_pin_20140729.jpg)
![](/img/products/wiz550s2e/wiz550s2eds/크기변환_wiz550s2e-485-evb.png)

-----
# Characteristic

### WIZ550S2E

| Input Power           | DC +3.3V     |
| --------------------- | ------------ |
| Current Consumption   | 140mA(Typ.)  |
| Operating Temperature | \-40 \~ 85 ℃ |

### WIZ550S2E-232-EVB

| Input Power                                   | DC +5V (Plug type: Outdiameter 5.5Pi - Caliber 2.1Pi) |
| --------------------------------------------- | ----------------------------------------------------- |
| Current Consumption(connected with WIZ550S2E) | 154mA(Max.)                                           |
| Operating Temperature                         | \-40 \~ 85 ℃                                          |

### WIZ550S2E-485/422-EVB

| Input Power                                   | DC +5V (Plug type: Outdiameter 5.5Pi - Caliber 2.1Pi) |
| --------------------------------------------- | ----------------------------------------------------- |
| Current Consumption(connected with WIZ550S2E) | 179mA(Max.)@RS422Mode, 157mA(Max.)@RS485Mode          |
| Operating Temperature                         | \-40 \~ 85 ℃                                          |

# Schematic

| Item                              | Version | Schematic(PDF)                                                     |
| --------------------------------- | ------- | ------------------------------------------------------------------ |
| WIZ550S2E                         | 1.1/1.2 | <a href="/img/products/wiz550s2e/schematic1_wiz550s2e_v1.pdf" target="_blank">Schematic\_PDF</a> |
| WIZ550S2E-232 interface board     | 1.0     | <a href="/img/products/wiz550s2e/wiz550s2eds/rs232if_v1_0.pdf" target="_blank"></a>              |
| WIZ550S2E-485/422 interface board | 1.0     | <a href="/img/products/wiz550s2e/wiz550s2eds/rs485-422if_v1_0.pdf" target="_blank"></a>          |

| Item      | Version | Partlist                                                             | PCB                                                                              |
| --------- | ------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| WIZ550S2E | 1.1     | <a href="/img/products/wiz550s2e/wiz550s2e_ver1.1_pl_150916.pdf" target="_blank">Partlist_PDF</a> | [WIZ550S2E\_v1.1\_PCB](/img/products/wiz550s2e/wiz550s2eds_kr/wiz550s2e_v1.1.1.zip) |
| WIZ550S2E | 1.2     | :::                                                                  | [WIZ550S2E\_v1.2\_PCB](/img/products/wiz550s2e/wiz550s2eds_kr/wiz550s2e_v1.2.zip)   |

  - Rev 1.1 Update Schematic

![](/img/products/wiz550s2e/wiz550s2e_rev.png)

-----
## Dimension

(Unit: mm)

### WIZ550S2E

![](/img/products/wiz550s2e/wiz550s2eds/wiz550s2e_dimension.jpg)

-----

### WIZ550S2E-232 Interface board

![](/img/products/wiz550s2e/wiz550s2eds/rs232if_dimension.jpg)

-----

### WIZ550S2E-485/422 Interface board

![](/img/products/wiz550s2e/wiz550s2eds/rs485-422if_dimension.jpg)
