---
id: datasheet
title: WIZ752SR-120 Datasheet
date: 2020-04-08
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
<td>UART0<br />
UART1</td>
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
<td>50.00(W) x 30.00(L) x 9.00(H) (Unit : mm)</td>
</tr>
<tr class="odd">
<td>Connector type</td>
<td></td>
<td><strong>2.00mm Pitch 1x14 Pin-header 2EA (Main)</strong><br />
2.54mm Pitch 1x6 Pin-header(Expansion GPIO, Not Mount)<br />
2.54mm Pitch 1x6 Pin-header (ISP &amp; Debug UART, Not Mount)<br />
1.27mm Pitch 1x5 Pin-header (SWD(Serial Wire Debug), Not Mount)</td>
</tr>
<tr class="even">
<td>Input Voltage</td>
<td></td>
<td>DC 3.3V</td>
</tr>
<tr class="odd">
<td>Operation Temperature</td>
<td></td>
<td>-40℃ ~ 85℃ (Operation)</td>
</tr>
</tbody>
</table>

------------------------------------------------------------------------

### WIZ752SR-120 Callout

<img src="/img/products/s2e_module/wiz752sr-120/wiz752sr-120_callout.png" width="600" />

------------------------------------------------------------------------

### WIZ752SR-120 Pinout

<img src="/img/products/s2e_module/wiz752sr-120/datasheet/wiz752sr-120_pinout.png" width="800" alt="WIZ752SR-120 Pinout" />

------------------------------------------------------------------------

### WIZ752SR-120 Block Diagram

<img src="/img/products/s2e_module/wiz752sr-120/wiz752sr-120_blockdiagram.png" width="800" alt="WIZ752SR-120 Block Diagram" />

------------------------------------------------------------------------

## Schematic & Partlist

-   Hardware Files of WIZ752SR-120 in Github Repositories
    -   [Go to Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/04_Serial_to_Ethernet_Module/WIZ752SR-120/WIZ752SR-120_V100)

### WIZ752SR-120

-   ![](/img/products/w5500/w5500_evb/icons/download.png)
    <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/WIZ752SR-120/WIZ752SR-120_V100/Schematic/WIZ752SR-120_SCH_V100.zip" target="_blank"> Download</a>
-   ![](/img/products/w5500/w5500_evb/icons/download.png)
    <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/WIZ752SR-120/WIZ752SR-120_V100/Schematic/WIZ752SR-120_SCH_V100.pdf" target="_blank"> Download</a>

------------------------------------------------------------------------

## Part list

### WIZ752SR-120

-   ![](/img/products/w5500/w5500_evb/icons/download.png)
    <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/WIZ752SR-120/WIZ752SR-120_V100/Partlist/WIZ752SR-120_BOM_V100_180112.xls" target="_blank"> Download</a>
    
-   ![](/img/products/w5500/w5500_evb/icons/download.png)
    <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/04_Serial_to_Ethernet_Module/WIZ752SR-120/WIZ752SR-120_V100/Partlist/WIZ752SR-120_BOM_V100_180112.pdf" target="_blank"> Download</a>

------------------------------------------------------------------------

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
|--------------------------------|-----|-----|-----|-----|------|
| 100M Link                      | \-  | TBD | \-  |     | mA   |
| 10M Link                       | \-  | TBD | \-  |     | mA   |
| Unlink (Auto-negotiation mode) |     | TBD |     |     | mA   |
| 100M Transmitting              | \-  |     | 90  |     | mA   |
| 10M Transmitting               | \-  | TBD | \-  |     | mA   |

※ Refer to WIZ752SR-120 Power Dissipation information (below Link)  
[WIZ750SR\_Power dissipation](/Product/S2E-Module/WIZ750SR/Datasheet.md#ethernet-power-dissipation)

------------------------------------------------------------------------

## Connectors Specification

### Mount Connectors

-   These are pins associated with data communication and basic
    operation of the WIZ752SR-120.
    -   Power, UART, Ethernet, System, Indicate

<img src="/img/products/s2e_module/wiz752sr-120/datasheet/wiz752sr-120_pinout_mount.png" width="800" alt="WIZ752SR-120 Pinout" />

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
J6<br />
<br />
UART<br />
Data<br />
Connector</td>
<td>1</td>
<td>3.3V</td>
<td>P</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>3.3V</td>
<td>P</td>
<td>System Power input (3.3V)</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>3</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>:::</td>
<td>4</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>5</td>
<td>CTS0</td>
<td>I</td>
<td>UART0 Clear To Send</td>
</tr>
<tr class="even">
<td>:::</td>
<td>6</td>
<td>RTS0</td>
<td>O</td>
<td>UART0 Request To Send</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>7</td>
<td>TXD0</td>
<td>O</td>
<td>UART0 Transmit Data</td>
</tr>
<tr class="even">
<td>:::</td>
<td>8</td>
<td>RXD0</td>
<td>I</td>
<td>UART0 Receive Data</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>9</td>
<td>/RESET</td>
<td>I</td>
<td>System Reset signal (Active Low), Included 4.7k Pullup</td>
</tr>
<tr class="even">
<td>:::</td>
<td>10</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>11</td>
<td>RXD1</td>
<td>I</td>
<td>UART1 Receive Data</td>
</tr>
<tr class="even">
<td>:::</td>
<td>12</td>
<td>TXD1</td>
<td>O</td>
<td>UART1 Transmit Data</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>13</td>
<td>RTS1</td>
<td>O</td>
<td>UART1 Request To Send</td>
</tr>
<tr class="even">
<td>:::</td>
<td>14</td>
<td>CTS1</td>
<td>I</td>
<td>UART1 Clear To Send</td>
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
Ethernet<br />
&amp;<br />
Indicate</td>
<td>1</td>
<td>TPTX-</td>
<td>O</td>
<td>Ethernet Differential Output-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>TPTX+</td>
<td>O</td>
<td>Ethernet Differential Output+</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>3</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>:::</td>
<td>4</td>
<td>TPRX-</td>
<td>I</td>
<td>Ethernet Differential Input+</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>5</td>
<td>TPRX+</td>
<td>I</td>
<td>Ethernet Differential Input-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>6</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>7</td>
<td>NC</td>
<td>-</td>
<td>Not Connected</td>
</tr>
<tr class="even">
<td>:::</td>
<td>8</td>
<td>LINK</td>
<td>O</td>
<td>Ethernet LINK Status<br />
High : Link down<br />
Low : Link up</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>9</td>
<td>100M_ACT</td>
<td>O</td>
<td>Ethernet 100M ACT Status<br />
Blink : 100M Data communication<br />
No Blink : 100M No Data communication</td>
</tr>
<tr class="even">
<td>:::</td>
<td>10</td>
<td>GND</td>
<td>P</td>
<td>System Ground</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>11</td>
<td>NC</td>
<td>-</td>
<td>Not Connected</td>
</tr>
<tr class="even">
<td>:::</td>
<td>12</td>
<td>STATUS_1</td>
<td>O</td>
<td>UART0 Connected Status<br />
High : Not Connected<br />
Low : Connected</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>13</td>
<td>STATUS_2</td>
<td>O</td>
<td>UART1 Connected Status<br />
High : Not Connected<br />
Low : Connected</td>
</tr>
<tr class="even">
<td>:::</td>
<td>14</td>
<td>SW_INPUT</td>
<td>I</td>
<td>Reserved I/O</td>
</tr>
</tbody>
</table>

### Not Mount Connectors

-   These are pins associated with the separate functions of the
    WIZ752SR-120.

<img src="/img/products/s2e_module/wiz752sr-120/wiz752sr-120_pinout_not_mount.png" width="800" alt="WIZ752SR-120 Pinout" />

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
<strong>Not uesed</strong></td>
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

------------------------------------------------------------------------

## Dimension

-   WIZ752SR-120 V1.0 Dimension :
    -   50.00(W) x 30.00(L) x 9.00(H) (Unit : mm)

<img src="/img/products/s2e_module/wiz752sr-120/wiz752sr-120_dimension.png" width="700" alt="WIZ752SR-120 V1.0 Dimension" />
