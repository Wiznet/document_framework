---
id: datasheet_hardware_spec_characteristics-[KO]
title: Datasheet(Hardware Spec, Characteristics)-[KO]
date: 2020-04-24
---

## Content

# WIZ550SR Datasheet

## 개요

본 페이지는 WIZ550SR과 WIZ550-EVB 보드들에 대한 하드웨어 관련 정보를 제공하기 위한 것으로  

  - 기본적인 하드웨어 스펙
  - AC/DC 특성
  - 레퍼런스 회로도
  - 모듈의 Dimension 정보

가 포함된다.

향후 하드웨어 사양이나 외형에 변경이 있을 경우에는 변경한 내역이 추가될 수 있다.

-----

## Hardware Specification

### WIZ550SR

  - 아주 작은 사이즈의 Serial to Ethernet Module.
  - WIZnet의 TCP/IP Chip인 **W5500** 기반의 Serial to Ethernet Module.
  - STmicro의 **STM32F103RCT6** 기반의 Serial to Ethernet Module.
  - 2.00mm Pitch Pin Header 1x11 2ea 지원.
  - MDI(Medium Dependent Interface) 지원.
      - TXN, TXP, RXN, RXP
  - UART Interface 지원.
      - RXD, TXD, RTS, CTS, DSR(Option), DTR(Option)
      - RS-232C Interface 지원 가능.
      - RS-422/485 Interface 지원 예정.
  - Debug UART 지원.
      - DEBUG RXD, DEBUG TXD
  - PHY Status Output 지원.
      - Active LED, Link LED
  - STATUS Output 지원.
      - LOW : TCP Connect 상태.
      - HIGH : TCP Diconnect 상태.
  - 시스템 핀.
      - RESET : 시스템 리셋, Active Low.
      - BOOT0 : MCU BOOT 모드 진입, Active High.
      - H/W TRIG : App BOOT 모드 진입, Active Low.
  - Indicator LED 지원.
      - Power LED(LD3).
      - LED 0(LD1) : 
      - LED 1(LD2) : 
  - Firmware 업로드용 Pin Header Hole 지원.
      - 2.54mm Pitch, Not Mount.
  - SWD 용 Pin Header Hole 지원.
      - 1.27mm Pitch, Not Mount.
  - Data 저장용 EEPROM 내장.
  - Operation Temperature : -40℃ \~ 85℃
  - Size : 22mm x 24mm x 13mm

#### WIZ550SR Pin Out

![WIZ550SR Pin
Out](/products/wiz550sr/wiz550sr_ds/wiz550sr_pinmap.png%20)  
![WIZ550SR Pin
Out](/products/wiz550sr/wiz550sr_ds/wiz550sr_pinout_2.png%20%20)

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
<td><strong>MDI Signal.</strong> TX Negative.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>4</strong></td>
<td><strong>TXP</strong></td>
<td><strong>O</strong></td>
<td><strong>MDI Signal.</strong> TX Positive.</td>
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
High : TCP Disconnect.<br />
Low : TCP Connect.</td>
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

{{:products:wiz550sr:wiz550sr\_ds:wiz550sr\_block\_diagram.png ? direct
| WIZ550SR Block Diagram}

-----

### WIZ550SR EVB

![WIZ550SR
EVB](/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_2.png%20%20%20)

  - WIZ550SR Developer Board.
  - USB to UART chip, FT2232D.
  - RJ45 with Transformer, RB1-1D5B8K1A.
  - RESET Tact SW.
  - BOOT0 Tact SW.
  - H/W Trig Tact SW.
  - LED Indicators.
  - Micro USB.

#### WIZ550SR EVB Call Out

![WIZ550SR EVB Call
Out](/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_callout.png%20)

#### WIZ550SR EVB Block Diagram

![WIZ550SR Block
Diagram](/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_block_diagram.png%20%20)

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
| 100M Link                       | \-  | TBD | \-  | mA   |
| 10M Link                        | \-  | TBD | \-  | mA   |
| Un-Link (Auto-negotiation mode) | \-  | TBD | \-  | mA   |
| 100M Transmitting               | \-  | TBD | \-  | mA   |
| 10M Transmitting                | \-  | TBD | \-  | mA   |
| Power Down mode                 | \-  | TBD | \-  | mA   |

-----

## Schematics & BOM

### Ref. Schematic

![WIZ550SR Ref
Schematic](/products/wiz550sr/wiz550sr_ds/wiz550sr_v1.0_ref_sch.png%20)  

  - WIZ550SR Ref Schematic :
    ![Download](/products/wiz550sr/wiz550sr_ds/wiz550sr_v100_ref_sch_160526.pdf)  
    \==== WIZ550SR Schematic ====
  - WIZ550SR V1.0 Schematic :
    ![Download(Altium)](/products/wiz550sr/wiz550sr_ds/wiz550sr_sch_v100.zip)  
    \* WIZ550SR V1.0 Schematic :
    ![Download(PDF)](/products/wiz550sr/wiz550sr_ds/wiz550sr_sch_v100.pdf)  

### WIZ550SR BOM

  - WIZ550SR V1.0 BOM:
    ![Download](/products/wiz550sr/wiz550sr_ds/wiz550sr_bom_v100_160511.pdf)  
    \==== WIZ550SR EVB Schematic ====
  - WIZ550SR EVB V1.0 Schematic :
    ![Download(Altium)](/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_sch_v100.zip)  
    \* WIZ550SR EVB V1.0 Schematic :
    ![Download(PDF)](/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_sch_v100.pdf)  

### WIZ550SR EVB BOM

  - WIZ550SR EVB V1.0 BOM :
    ![Download](/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_bom_v100_160512.pdf)  

-----

## Dimension

  - WIZ550SR V1.0 3D PDF :
    ![Download](/products/wiz550sr/wiz550sr_ds/wiz550sr_v1.0_3d.pdf)  
    \* This PDF must be run using the 'Adobe Acrobat'.

![WIZ550SR
Dimension](/products/wiz550sr/wiz550sr_ds/wiz550sr_dimension.jpg%20)

-----

## See Also

    *[[http://www.wizwiki.net/forum|WizWiki Forum]] : WIZnet Forum for Technical support and Project shared

-----
