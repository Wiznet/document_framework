---
id: datasheet
title: Datasheet
date: 2022-05-09

---

## Overview

<img src="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ500SR-RP/Pictures/WIZ500SR-V100%202.png" width="800" />

WIZ500SR-RP is a compact sized serial to Ethernet module using the
RP2040 MCU with W5100S Ethernet Chip.
WIZ500SR-RP is a protocol converter that transmits
data sent by serial equipment as TCP/IP data, and converts the TCP/IP
data received through the network back into serial data to the serial
equipment.

In addition, WIZ500SR-RP contains serial debug port(J1).

**WIZ500SR-RP is the best fit solution to control user's serial device
via Ethernet network.**

------



## Features

  - Serial to Ethernet Module based on **RP2040** MCU (TTL level)
  - Included W5100S
  - **10/100Mbps Ethernet & Up to 230kbps serial speed**
  - **2mm pitch 1x12 Pin-header(3ea) mounted module**
  - Status pins: PHY link status / TCP connection status
  - Serial signals(UART or RS-232C)
    - WIZ500SR-RP module(UART): TXD, RXD, RTS, CTS
    - WIZ5xxSR-RP-EVB(RS-232C): TXD, RXD, RTS, CTS
    - Optional DTR/DSR signals supported
  - WIZ500SR-RP has UART x 2, SWD x 1, Ethernet x 1
    - UART0, SWD for Debug and UART1, Ethernet for Data transceive
  - Separate **Data UART** and **Debug UART** port
  - Configuration is possible via serial AT commands or via
    Configuration tool 
  - Support WIZ VSP (Virtual Serial Port) program 

------



## Product Contents

### WIZ500SR-RP Module Series

| Ordering Information | Item                    | Q'ty | Remarks |
| -------------------- | ----------------------- | ---- | ------- |
| WIZ500SR- RP         | WIZ500SR-RP module(TTL) | 1    | \-      |

### WIZ5xxSR-RP Evaluation Board Series

| Ordering Information | Category | Item            | Q'ty | Remarks |
| -------------------- | -------- | --------------- | ---- | ------- |
| WIZ5xxSR-RP-EVB      | Device   | WIZ5xxSR-RP EVB | 1    | -       |
| :::                  | Cable    | TBD             | TBD  | TBD     |





------



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
| <img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP Callout_Top.png" width="800" /> |
| TOP                                                          |
| <img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP Callout_Bot.png" width="800" /> |
| BOTTOM                                                       |



------

### WIZ500SR-RP Pinout

<img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP Pinout.png" width="800" />

------------------------------------------------------------------------

### WIZ500SR-RP indicate

<img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP LED.png" width="800" />

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

## WIZ5xxSR-RP-EVB (추후 수정 예정)

-   WIZ500SR-RP Developer Board.
-   USB to UART chip, CP2104.
-   RESET Tact SW.
-   BOOT0 Slide SW.
-   H/W Trig Slide SW.
-   Expansion GPIO TEST (Digital / Analog)
-   Micro USB.
-   WIZ750SR-100-EVB (RS-232)
    -   RS-232C Transceiver, D-SUB9-MALE.

<img src="/img/products/wiz750jr/datasheet/wiz750jr-evb_description.png" width="800" />

------------------------------------------------------------------------

### Serial Interface

<img src="/img/products/wiz750sr-100/datasheet/wiz750sr-100-evb_pinout.png" width="400" />

| Pin Number | Signal | Description                  |
| ---------- | ------ | ---------------------------- |
| 1          | DCD    | NC                           |
| 2          | RXD    | Receive Data                 |
| 3          | TXD    | Transmit Data                |
| 4          | DTR    | Data Terminal Ready          |
| 5          | GND    | System Ground(Signal Ground) |
| 6          | DSR    | Data Set Ready               |
| 7          | RTS    | Request To Send              |
| 8          | CTS    | Clear To Send                |
| 9          | RI     | NC                           |

-   RXD, TXD, GND: These are all you need if the device does not use
    hardware handshaking.
-   RXD, TXD, GND, RTS, CTS: These are the signals used when serial
    device uses hardware handshaking.
-   DTR, DSR: Not used

<img src="/img/products/wiz750sr-100/datasheet/wiz750sr-100-serial_cable.png" width="600" />

------------------------------------------------------------------------

## Schematic & Artwork

### WIZ500SR-RP

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ500SR-RP/WIZ500SR-RP_V100/Schematic/WIZ500SR-RP_SCH_V100.zip">Download</a> | \-      |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/s2e_module/WIZ500SR-RP/HW/Schematic & Artwork/WIZ500SR-RP_SCH_V100.pdf" target="_blank">Download</a> | \-      |

### WIZ5xxSR-RP-EVB (TBD)

| H/W version | Type  | Filetype | Download Link                                                | Remarks |
| ----------- | ----- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | RS232 | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100-evb_sch_v1.0.zip" target="_blank">Download</a> | \-      |
| :::         | :::   | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100-evb.pdf" target="_blank">Download</a> | \-      |

------------------------------------------------------------------------

## Part list

### WIZ500SR-RP

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/s2e_module/WIZ500SR-RP/HW/PartList/WIZ500SR-RP_PL_V100.xlsx" target="_blank">Download</a> |         |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/s2e_module/WIZ500SR-RP/HW/PartList/WIZ500SR-RP_PL_V100.pdf" target="_blank">Download</a> |         |

### WIZ5xxSR-RP-EVB (TBD)

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100_evb_v1.1_pl_20171215.xls" target="_blank">Download</a> |         |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100_evb_v1.1_pl_20171215.pdf" target="_blank">Download</a> |         |

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
| 100M Link                      | \-   | TBD  | \-   |      | mA   |
| 10M Link                       | \-   | TBD  | \-   |      | mA   |
| Unlink (Auto-negotiation mode) | -    | TBD  | -    |      | mA   |
| 100M Transmitting              | \-   | TBD  | -    |      | mA   |
| 10M Transmitting               | \-   | TBD  | \-   |      | mA   |




### External Flash Memory

| Symbol | Parameter            | Min     | Unit   |
| ------ | -------------------- | ------- | ------ |
| N*END* | **Sector Endurance** | 100,000 | Cycles |
| T*DR*  | **Data Retention**   | 20      | Years  |

### 

------------------------------------------------------------------------

## Connector Specification



### 1x12 Network Line (J3)

<img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP (J3-Pinmap).png" width="800" />

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
<td>RX_N</td>
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
<td>TX_N</td>
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

<img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP (J4-Pinmap).png" width="800" />

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

<img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP (J5-Pinmap).png" width="800" />

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

<img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP (J1-Pinmap).png" width="800" />

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

<img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP (J2-Pinmap).png" width="800" />

| Pin Number | Signal  | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| 1          | BOOTSEL | Active Low<br />Drive this pin Low and reset(or power on),then RP2040 will enter USB Mass Storage Device mode<br />Then RP2040 can be re-programming |
| 2          | GND     | System Ground                                                |

**J2 is not mounted connector**




------------------------------------------------------------------------

## Switch Specification



### RESET Switch (SW1)

<img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP (Reset).png" width="800" />

-   When push SW1, WIZ500SR-RP will be reset

------



## Dimension

-   WIZ500SR-RP Rev1.0 Dimension :
    -   50mm x 30mm x 1.6mm ( PCB board size )
    -   50mm x 30mm x 5.7mm ( Included part size )

<img src="/img/products/s2e_module/WIZ500SR-RP/HW/Document/WIZ500SR-RP PCB TOP.png" width="700" />

-   WIZ5xxSR-RP-EVB Rev1.0 Dimension :
    -   TBD ( PCB board size )
    -   TBD ( Included part size )

