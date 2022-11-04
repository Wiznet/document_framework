---
id: datasheet
title: Datasheet
date: 2022-05-09

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
<td>MCU<br />
(RP2040)</td>
<td>ARM<br />
Cortex-M0+<br />
Dure Core</td>
<td>133Mhz maximum frequency<br />
264KB on-chip SRAM<br />
16KB on-chip ROM<br />
2MB External ROM<br />
2 × UART, 2 × SPI controllers, 2 × I2C controllers, 16 × PWM channels<br />
1 × USB 1.1 controller and PHY, with host and device support<br />
8 × Programmable I/O (PIO) state machines for custom peripheral support</td>
</tr>
<tr class="even">
<td>Ethernet<br />
(W5100S)</td>
<td>Hardwired<br />
TCP/IP<br />
With MAX and PHY</td>
<td>Support Hardwired Internet protocols<br />
: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE<br />
Support 4 independent SOCKETs simultaneously<br />
Support SOCKET-less Command<br />
: ARP-Request, PING-Request<br />
Internal 16Kbytes Memory for TX/ RX Buffers<br />
10BaseT/100BaseTX Ethernet PHY Integrated<br />
    </td>
</tr>
<tr class="even">
<td>Serial</td>
<td>Interface</td>
<td>UART (LVTTL 3.3V)<br />
SWD</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>Signal</td>
<td>TXD, RXD, RTS, CTS, DTR, DSR GND<br />
SWCLK, SWDIO</td>
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
<td>TBD</td>
</tr>
</tbody>
</table>





------------------------------------------------------------------------

### WIZ500SR-RP Callout

|                                                              |
| ------------------------------------------------------------ |
| <img src="https://raw.githubusercontent.com/Wiznet/Hardware-Files-of-WIZnet/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20Callout_Top.png" width="800" /> |
| TOP                                                          |
| <img src="https://raw.githubusercontent.com/Wiznet/Hardware-Files-of-WIZnet/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20Callout_Bot.png" width="800" /> |
| BOTTOM                                                       |



------

### Connector Specification



### 1x12 Network Line (J3)

<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20(J3-Pinmap).png?raw=true" width="800" />

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
<td>System Power Input (3.3V)</td>
</tr>
<tr class="even">
<td>2</td>
<td>RX_N</td>
<td>10/100M MDIO Receiver Differential Signal (N signal)</td>
</tr>
<tr class="odd">
<td>3</td>
<td>RX_P</td>
<td>10/100M MDIO Receiver Differential Signal (P signal)</td>
</tr>
<tr class="even">
<td>4</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="odd">
<td>5</td>
<td>TX_N</td>
<td>10/100M MDIO Transceiver Differential Signal (N signal)</td>
</tr>
<tr class="even">
<td>6</td>
<td>TX_P</td>
<td>10/100M MDIO Transceiver Differential Signal (P signal)</td>
</tr>
<tr class="odd">
<td>7</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>8</td>
<td>LINKn</td>
<td>Link Status LED Signal<br />
Low : Link up<br />
High : Link down</td>
</tr>
<tr class="odd">
<td>9</td>
<td>SPDn</td>
<td>Link Speed LED Signal<br />
Low : 100Mbps<br />
High : 10Mbps</td>
</tr>
<tr class="even">
<td>10</td>
<td>ACTn</td>
<td>Active LED Signal<br />
No Flash : Link up state without TX/RX<br />
Flash : Link up state with TX/RX data<br />
High : Link-down state</td>
</tr>
<tr class="odd">
<td>11</td>
<td>COLn</td>
<td>Link Collision Detect LED Signal<br />
Low : Collision Detected<br />
High : No Collision</td>
</tr>
<tr class="even">
<td>12</td>
<td>VCC</td>
<td>System Power Input (3.3V)</td>
</tr>
</tbody>
</table>
- When Ethernet not connect, WIZ500SR-RP will be in reset loop



### 1x12 UART1 (J4)

<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20(J4-Pinmap).png?raw=true" width="800" />

| Pin Number | Signal    | Description                                                  |
| ---------- | --------- | ------------------------------------------------------------ |
| 1          | VCC       | System Power Input (3.3V)                                    |
| 2          | RUN       | RP2040 Reset Signal input<br />Active Low                    |
| 3          | GND       | System Ground                                                |
| 4          | UART1_TX  | UART1 TX                                                     |
| 5          | UART1_RTS | UART1 RTS                                                    |
| 6          | UART1_DTR | UART1 DTR                                                    |
| 7          | GND       | System Ground                                                |
| 8          | UART1_RX  | UART1 RX                                                     |
| 9          | UART1_CTS | UART1 CTS                                                    |
| 10         | UART1_DSR | UART1 DSR                                                    |
| 11         | GND       | System Ground                                                |
| 12         | BLINK     | Working LED Signal <br />When Module working well Switch Toggle every 1.0s |



### 1x12 Other pin (J5)

<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20(J5-Pinmap).png?raw=true" width="800" />

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
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>2</td>
<td>LINK_STATUS</td>
<td>Link Status signal<br />
High : Link<br />
Low : UnLink</td>
</tr>
<tr class="odd">
<td>3</td>
<td>TCP_STATUS</td>
<td>TCP Connection<br />
High : Connect<br />
Low : Disconnect</td>
</tr>
<tr class="even">
<td>4</td>
<td>BOOTSEL</td>
<td>Active Low<br />
Drive this pin Low and reset(or power on),then RP2040 will enter USB Mass Storage Device mode<br />
Then RP2040 can be re-programming</td>
</tr>
<tr class="odd">
<td>5</td>
<td>USB_DP</td>
<td>USB DP Signal input for RP2040</td>
</tr>
<tr class="even">
<td>6</td>
<td>USB_DM</td>
<td>USB DM Signal input for RP2040</td>
</tr>
<tr class="odd">
<td>7</td>
<td>BOOT MODE</td>
<td>Boot Mode Select signal input<br />
Active Low<br />
Drive this pin low and reset(or power on),then WIZ500SR-RP will enter Boot mode</td>
</tr>
<tr class="even">
<td>8</td>
<td>FACT_RST</td>
<td>Factory Reset Signal input<br />
Drive this pin to Low for at least 5.0s then WIZ500SR-RP will be reset to factory settings</td>
</tr>
<tr class="odd">
<td>9</td>
<td>HW_TRIG</td>
<td>Active Low<br />
High : Gateway Mode<br />
Low : AT Command Mode<br />
Changes will be reflected after reset</td>
</tr>
<tr class="even">
<td>10</td>
<td>GPIO26/ADC0</td>
<td>Reserved</td>
</tr>
<tr class="odd">
<td>11</td>
<td>GPIO27/ADC1</td>
<td>Reserved</td>
</tr>
<tr class="even">
<td>12</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>



### 1x6 UART0, SWD (J1)

<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20(J1-Pinmap).png?raw=true" width="800" />

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
<td>TX</td>
<td>UART0_TX (Debug)</td>
</tr>
<tr class="odd">
<td>3</td>
<td>RX</td>
<td>UART0_RX (Debug)</td>
</tr>
<tr class="even">
<td>4</td>
<td>SWCLK</td>
<td>SWDCLK</td>
</tr>
<tr class="odd">
<td>5</td>
<td>SWDIO</td>
<td>SWDIO</td>
</tr>
<tr class="even">
<td>6</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>
**J1 is not mounted connector**



### 1x2 BOOTSEL set pin (J2)

<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20(J2-Pinmap).png?raw=true" width="800" />

| Pin Number | Signal  | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| 1          | BOOTSEL | Active Low<br />Drive this pin Low and reset(or power on),then RP2040 will enter USB Mass Storage Device mode<br />Then RP2040 can be re-programming |
| 2          | GND     | System Ground                                                |

**J2 is not mounted connector**




------------------------------------------------------------------------

## Switch Specification



### RESET Switch (SW1)

<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20(Reset).png?raw=true" width="800" />

-   When push SW1, WIZ500SR-RP will be reset
------------------------------------------------------------------------

### WIZ500SR-RP indicate

<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20LED.png?raw=true" width="800" />

<table>
<thead>
<tr class="header">
<th>Pin Number</th>
<th>Pin Name</th>
<th>Signal</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>LD2</td>
<td>Power LED(Red)</td>
<td>Power on LED</td>
</tr>
<tr class="even">
<td>2</td>
<td>LD3</td>
<td>TCP_STATUS LED(Green)</td>
<td>ON : Connect<br />
OFF : Disconnect</td>
</tr>
<tr class="odd">
<td>3</td>
<td>LD4</td>
<td>LINK_STATUS LED(Green)</td>
<td>ON : LINK<br />
OFF : Unlink</td>
</tr>
<tr class="even">
<td>4</td>
<td>LD5</td>
<td>BLINK LED(Green)</td>
<td>Working indicate<br />
When Module working well Blinking every 1.0s </td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------

## WIZ500SR-RP EVB SET

-   The WIZ500SR-RP EVB SET is a combination of [WIZ500SR-RP EVB](https://docs.wiznet.io/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP-EVB/datasheet) and [WIZ505SR-RP EVB](https://docs.wiznet.io/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP-EVB/datasheet).


<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP-EVB(RJ45)/Images/%EA%B2%B0%ED%95%A9%EC%82%AC%EC%A7%842-1.png?raw=true" width="700" />

------------------------------------------------------------------------

### Switch Specification


### RESET Switch (SW1)

<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20(Reset).png?raw=true" width="800" />

-   When push SW1, WIZ500SR-RP will be reset


------------------------------------------------------------------------

## Schematic & Artwork

### WIZ500SR-RP

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ500SR-RP/WIZ500SR-RP_V100/Schematic/WIZ500SR-RP_SCH_V100.zip">Download</a> | \-      |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ500SR-RP/WIZ500SR-RP_V100/Schematic/WIZ500SR-RP_SCH_V100.pdf" target="_blank">Download</a> | \-      |


------------------------------------------------------------------------

## Part list

### WIZ500SR-RP

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ500SR-RP/WIZ500SR-RP_V100/Partlist/WIZ500SR-RP_PL_V100.xlsx" target="_blank">Download</a> |         |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ500SR-RP/WIZ500SR-RP_V100/Partlist/WIZ500SR-RP_PL_V100.pdf" target="_blank">Download</a> |         |


------------------------------------------------------------------------

## Electrical Characteristics

### Operating Conditions

<table>
<thead>
<tr class="header">
<th>Symbol</th>
<th>Parameter</th>
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
<td>3.135</td>
<td>3.3</td>
<td>3.465</td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>ss</em></td>
<td><strong>Ground</strong></td>
<td></td>
<td>0</td>
<td>50</td>
<td>mV</td>
</tr>
<tr class="odd">
<td>f<em>FCLK</em></td>
<td><strong>Internal CPU clock frequency</strong></td>
<td>-</td>
<td>-</td>
<td>133</td>
<td>MHz</td>
</tr>
<tr class="even">
<td>T<em>stg</em></td>
<td><strong>Storage Temperature (max)</strong></td>
<td>-20</td>
<td></td>
<td>85</td>
<td>℃</td>
</tr>
<tr class="odd">
<td>T<em>A</em></td>
<td><strong>Ambient operating temperature</strong></td>
<td>-20</td>
<td></td>
<td>85</td>
<td>℃</td>
</tr>
<tr class="odd">
<td>V<em>IH</em></td>
<td><strong>Input high voltage</strong></td>
<td>2.5</td>
<td></td>
<td></td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>IL</em></td>
<td><strong>Input low voltage</strong></td>
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
<td></td>
<td></td>
<td>0.32</td>
<td>V</td>
</tr>
</tbody>
</table>


### Ethernet Power Dissipation

| Condition                      | Min  | Typ  | Max  | Tol  | Unit |
| ------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 100M Transmitting              | \-   | 120  | -    |      | mA   |




### External Flash Memory

| Symbol | Parameter            | Min     | Unit   |
| ------ | -------------------- | ------- | ------ |
| N*END* | **Sector Endurance** | 100,000 | Cycles |
| T*DR*  | **Data Retention**   | 20      | Years  |

### 

------------------------------------------------------------------------





## Dimension

-   WIZ500SR-RP Rev1.0 Dimension :
    -   50mm x 30mm x 1.6mm ( PCB board size )
    -   50mm x 30mm x 5.7mm ( Included part size )

<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-RP%20PCB%20TOP.png?raw=true" width="700" />


