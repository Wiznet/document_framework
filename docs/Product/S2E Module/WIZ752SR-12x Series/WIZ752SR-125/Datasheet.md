---
id: datasheet
title: Datasheet
date: 2020-04-15
---

## Content

# WIZ752SR-125 Datasheet

\*\* Supported Languages \*\*  
\* English only
![WIZ752SR-125](/products/s2e_module/wiz752sr-125/wiz752sr-125_main.png)

-----

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
<td>W7500<br />
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
<td>PHY</td>
<td>Ethernet<br />
Transceiver</td>
<td>IP101GRI<br />
Single 10/100M Ethernet Transceiver</td>
</tr>
<tr class="even">
<td>Serial</td>
<td>Interface</td>
<td>RS-232C-1<br />
RS-232C-2</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>Signal</td>
<td>TXD0, RXD0, RTS0, CTS0<br />
TXD1, RXD1, RTS1, CTS1</td>
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
<td>Up to 230Kbps</td>
</tr>
<tr class="even">
<td>Dimension</td>
<td></td>
<td>88.50(W) x 66.00(L) x 18.00(H) (Unit : mm)</td>
</tr>
<tr class="odd">
<td>Connector type</td>
<td></td>
<td><strong>D-sub9 Connector(RS-232C) 2EA</strong><br />
2.54mm Pitch 1x6 Pin-header(Expansion GPIO, Not Mount)<br />
2.54mm Pitch 1x6 Pin-header (ISP &amp; Debug UART, Not Mount)<br />
1.27mm Pitch 1x5 Pin-header (SWD(Serial Wire Debug), Not Mount)</td>
</tr>
<tr class="even">
<td>Input Voltage</td>
<td></td>
<td>DC 5V</td>
</tr>
<tr class="odd">
<td>Operation Temperature</td>
<td></td>
<td>-40℃ ~ 85℃ (Operation)</td>
</tr>
</tbody>
</table>

-----

### WIZ752SR-125 Callout

![WIZ752SR-125
Callout](/products/s2e_module/wiz752sr-125/wiz752sr-125_callout.png)

-----

### WIZ752SR-125 Pinout

![WIZ752SR-125
Pinout](/products/s2e_module/wiz752sr-125/wiz752sr-125_pinout.png)

<table>
<thead>
<tr class="header">
<th>Connector</th>
<th>Pin Number</th>
<th>Signal</th>
<th>I/O(( "I/O" Description - P:Power, I:Input, O:Output ))</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><br />
J1<br />
<br />
SWD<br />
(Serial Wire Debug)</td>
<td>1</td>
<td>3.3V</td>
<td>P</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>SWDIO</td>
<td>I/O</td>
<td>SWD Data I/O</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>3</td>
<td>SWCLK</td>
<td>I</td>
<td>SWD Clock</td>
</tr>
<tr class="even">
<td>:::</td>
<td>4</td>
<td>/RESET</td>
<td>I</td>
<td>System Reset</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>5</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th>Connector</th>
<th>Pin Number</th>
<th>Signal</th>
<th>I/O</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><br />
J2<br />
<br />
ISP<br />
&amp;<br />
Debug UART</td>
<td>1</td>
<td>3.3V</td>
<td>P</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>BOOT</td>
<td>I</td>
<td>System BOOT<br />
4.7k Pull down<br />
When booting(Power on or Reset),<br />
High : Boot operating<br />
Low : Application operating</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>3</td>
<td>RXD2</td>
<td>I</td>
<td>UART2 Receive Data</td>
</tr>
<tr class="even">
<td>:::</td>
<td>4</td>
<td>TXD2</td>
<td>O</td>
<td>UART2 Transmit Data</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>5</td>
<td>/RESET</td>
<td>I</td>
<td>System Reset signal (Active Low), 4.7k Pullup</td>
</tr>
<tr class="even">
<td>:::</td>
<td>6</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th>Connector</th>
<th>Pin Number</th>
<th>Signal</th>
<th>I/O</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><br />
J3<br />
<br />
Expansion<br />
GPIO</td>
<td>1</td>
<td>3.3V</td>
<td>P</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>GPIO_D</td>
<td>I/O</td>
<td>Expansion User's depend on GPIO port</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>3</td>
<td>GPIO_C</td>
<td>I/O</td>
<td>:::</td>
</tr>
<tr class="even">
<td>:::</td>
<td>4</td>
<td>GPIO_B</td>
<td>I/O</td>
<td>:::</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>5</td>
<td>GPIO_A</td>
<td>I/O</td>
<td>:::</td>
</tr>
<tr class="even">
<td>:::</td>
<td>6</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th>Connector</th>
<th>Pin Number</th>
<th>Signal</th>
<th>I/O</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><br />
J4<br />
<br />
System<br />
BOOT</td>
<td>1</td>
<td>3.3V</td>
<td>P</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>BOOT</td>
<td>I</td>
<td>System BOOT<br />
4.7k Pull down<br />
When booting(Power on or Reset),<br />
High : System Boot operating<br />
Low : Application operating</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th>Connector</th>
<th>Pin Number</th>
<th>Signal</th>
<th>I/O</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><br />
J5<br />
<br />
Application<br />
BOOT</td>
<td>1</td>
<td>APP_BOOT</td>
<td>I</td>
<td>Application BOOT<br />
<strong>Not Uesed</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

-----

![WIZ752SR-125 D-Sub9
Pinout](/products/s2e_module/wiz752sr-125/wiz752sr-125_dsub.png)

<table>
<thead>
<tr class="header">
<th>Connector</th>
<th>Pin Number</th>
<th>Signal</th>
<th>I/O</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><br />
J6<br />
<br />
RS-232C-1<br />
D-SUB 9Pin/Male<br />
Connector</td>
<td>1</td>
<td>NC</td>
<td>-</td>
<td>-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>RXD0</td>
<td>I</td>
<td>RS-232C Receive Data</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>3</td>
<td>TXD0</td>
<td>O</td>
<td>RS-232C Transmit Data</td>
</tr>
<tr class="even">
<td>:::</td>
<td>4</td>
<td>NC</td>
<td>-</td>
<td>-</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>5</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>:::</td>
<td>6</td>
<td>NC</td>
<td>-</td>
<td>-</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>7</td>
<td>RTS0</td>
<td>O</td>
<td>RS-232C Request To Send</td>
</tr>
<tr class="even">
<td>:::</td>
<td>8</td>
<td>CTS0</td>
<td>I</td>
<td>RS-232C Clear To Send</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>9</td>
<td>NC</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th>Connector</th>
<th>Pin Number</th>
<th>Signal</th>
<th>I/O</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><br />
J7<br />
<br />
RS-232C-2<br />
D-SUB 9Pin/Male<br />
Connector</td>
<td>1</td>
<td>NC</td>
<td>-</td>
<td>-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>RXD1</td>
<td>I</td>
<td>RS-232C Receive Data</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>3</td>
<td>TXD1</td>
<td>O</td>
<td>RS-232C Transmit Data</td>
</tr>
<tr class="even">
<td>:::</td>
<td>4</td>
<td>NC</td>
<td>-</td>
<td>-</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>5</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>:::</td>
<td>6</td>
<td>NC</td>
<td>-</td>
<td>-</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>7</td>
<td>RTS1</td>
<td>O</td>
<td>RS-232C Request To Send</td>
</tr>
<tr class="even">
<td>:::</td>
<td>8</td>
<td>CTS1</td>
<td>I</td>
<td>RS-232C Clear To Send</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>9</td>
<td>NC</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>

-----

### WIZ752SR-125 Block Diagram

![WIZ752SR-125 Block
Diagram](/products/s2e_module/wiz752sr-125/wiz752sr-125_blockdiagram.png)

-----

## Schematic & Partlist

  - Hardware Files of WIZ752SR-125 in Github Repositories
      - [Go to
        Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/04_Serial_to_Ethernet_Module/WIZ752SR-125)

### WIZ752SR-125

  - ![](/products/w5500/w5500_evb/icons/download.png) ![WIZ752SR-125
    Schematic(Altium)](https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/WIZ752SR-125/WIZ752SR-125_V100/Schematic/WIZ7525SR-125_SCH_V100.zip)
  - ![](/products/w5500/w5500_evb/icons/download.png) ![WIZ752SR-125
    Schematic(PDF)](https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/WIZ752SR-125/WIZ752SR-125_V100/Schematic/WIZ7525SR-125_SCH_V100.pdf)

-----

## Part list

### WIZ752SR-125

  - ![](/products/w5500/w5500_evb/icons/download.png) ![WIZ752SR-125
    Partlist(Excel)](https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ752SR-125/WIZ752SR-125_V100/Partlist/WIZ752SR-125_V100_BOM_180112.xls)
  - ![](/products/w5500/w5500_evb/icons/download.png) ![WIZ752SR-125
    Partlist(PDF)](https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/WIZ752SR-125/WIZ752SR-125_V100/Partlist/WIZ752SR-125_V100_BOM_180112.pdf)

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
<td>2.7</td>
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
<td>2.145</td>
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
<td>1.155</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>OH</em></td>
<td><strong>Output high voltage<br />
(High driving strength Current load = 6mA)<br />
(Low driving strength Current load = 3mA)</strong></td>
<td>ALL</td>
<td>2.5</td>
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
<td>0.5</td>
<td>V</td>
</tr>
</tbody>
</table>

### Ethernet Power Dissipation

| Condition                      | Min | Typ | Max | Tol | Unit |
| ------------------------------ | --- | --- | --- | --- | ---- |
| 100M Link                      | \-  | TBD | \-  |     | mA   |
| 10M Link                       | \-  | TBD | \-  |     | mA   |
| Unlink (Auto-negotiation mode) |     | TBD |     |     | mA   |
| 100M Transmitting              | \-  | TBD | \-  |     | mA   |
| 10M Transmitting               | \-  | TBD | \-  |     | mA   |

※ Refer to WIZ752SR-120 Power Dissipation information (below Link)  
[WIZ750SR\_Power
dissipation](/products/wiz750sr/datasheet/start#ethernet_power_dissipation)

-----

## Dimension

  - WIZ752SR-125 V1.0 Dimension : 
      - 88.50(W) x 66.00(L) x 18.00(H) (Unit : mm)

![WIZ752SR-120 V1.0
Dimension](/products/s2e_module/wiz752sr-125/wiz752sr-125_dimension.png)
