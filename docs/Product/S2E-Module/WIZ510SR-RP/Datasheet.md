---
id: datasheet
title: WIZ510SR-RP Datasheet
date: 2022-05-09

---

## Overview

WIZ510SR-RP is a compact sized serial to Ethernet module using the
RP2040 MCU with W5100S Ethernet Chip.
WIZ510SR-RP is a protocol converter that transmits
data sent by serial equipment as TCP/IP data, and converts the TCP/IP
data received through the network back into serial data to the serial
equipment.

In addition, WIZ510SR-RP contains serial debug port(J1).

**WIZ510SR-RP is the best fit solution to control user's serial device
via Ethernet network.**

------



## Features

  - Serial to Ethernet Module based on **RP2040** MCU (TTL level)
  - Included W5100S and magnetic rj45 modular jack
  - **10/100Mbps Ethernet & Up to 230kbps serial speed**
  - Status pins: PHY link status / TCP connection status
  - Serial signals(RS-232C)
    - WIZ510SR-RP module(RS-232C): TXD, RXD, RTS, CTS
  - WIZ510SR-RP has UART x 1, SWD x 1 ,RS232C x 1, Ethernet x 1
    - UART, SWD for Debug and RS232C, Ethernet for Data transceive
  - Configuration is possible via serial AT commands or via
  - Configuration tool 
  - Support WIZ VSP (Virtual Serial Port) program 
  - Built in 10/100Mbps Ethernet ESD Protection IC

------



## Product Contents

### WIZ510SR-RP Module Series

| Ordering Information | Item                    | Q'ty | Remarks |
| -------------------- | ----------------------- | ---- | ------- |
| WIZ510SR- RP         | WIZ510SR-RP module(TTL) | 1    | \-      |

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
<td>UART (LVTTL 3.3V) only debug<br />
SWD<br />
RS232C</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>Signal</td>
<td>TXD, RXD, RTS, CTS, GND<br />
SWCLK, SWDIO</td>
</tr>
<tr class="even">
<td>:::</td>
<td>Parameters</td>
<td>Parity: None, Odd, Even<br />
Data bits: 7, 8 bit<br />
Flow control: None, RTS / CTS </td>
</tr>
<tr class="odd">
<td>:::</td>
<td>Speed</td>
<td>TBD</td>
</tr>
</tbody>
</table>





------------------------------------------------------------------------

### WIZ510SR-RP Callout

|                                                              |
| ------------------------------------------------------------ |
| <img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP Callout_Top.png" width="800" /> |
| TOP                                                          |
| <img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP 3D(BOT).png" width="800" /> |
| BOTTOM                                                       |



------------------------------------------------------------------------

### WIZ510SR-RP Pinout

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP Pinout.png" width="800" />

------



### WIZ510SR-RP indicate

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP LED.png" width="800" />

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
<td>LD1</td>
<td>Power LED(Red)</td>
<td>Power on LED</td>
</tr>
<tr class="even">
<td>2</td>
<td>LD2</td>
<td>TCP_STATUS LED(Green)</td>
<td>ON : Connect<br />
OFF : Disconnect</td>
</tr>
<tr class="odd">
<td>3</td>
<td>LD3</td>
<td>LINK_STATUS LED(Green)</td>
<td>ON : LINK<br />
OFF : Unlink</td>
</tr>
<tr class="even">
<td>4</td>
<td>LD4</td>
<td>BLINK LED(Green)</td>
<td>Working indicate<br />
When Module working well Blinking every 1.0s </td>
</tr>
</tbody>
</table>



------------------------------------------------------------------------

## WIZ5xxSR-RP-EVB (추후 수정 예정)

-   WIZ510SR-RP Developer Board.
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

### WIZ510SR-RP

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/s2e_module/WIZ510SR-RP/HW/Schematic & Artwork/WIZ510SR-RP_V100.ZIP" target="_blank">Download</a> | \-      |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/s2e_module/WIZ510SR-RP/HW/Schematic & Artwork/WIZ510SR-RP_SCH_V100.PDF" target="_blank">Download</a> | \-      |

### WIZ5xxSR-RP-EVB (TBD)

| H/W version | Type  | Filetype | Download Link                                                | Remarks |
| ----------- | ----- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | RS232 | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100-evb_sch_v1.0.zip" target="_blank">Download</a> | \-      |
| :::         | :::   | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100-evb.pdf" target="_blank">Download</a> | \-      |

------------------------------------------------------------------------

## Part list

### WIZ510SR-RP

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/s2e_module/WIZ510SR-RP/HW/PartList/WIZ510SR-RP_PL_V100.xlsx" target="_blank">Download</a> |         |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/s2e_module/WIZ510SR-RP/HW/PartList/WIZ510SR-RP_PL_V100.PDF" target="_blank">Download</a> |         |

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



### External Flash Memory

| Symbol | Parameter            | Min     | Unit   |
| ------ | -------------------- | ------- | ------ |
| N*END* | **Sector Endurance** | 100,000 | Cycles |
| T*DR*  | **Data Retention**   | 20      | Years  |

### 

------------------------------------------------------------------------

## Connector Specification

### 1x6 UART0, SWD (J1)

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP (J1-Pinmap).png" width="800" />

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
<td>SWD CLK</td>
</tr>
<tr class="odd">
<td>5</td>
<td>SWDIO</td>
<td>SWD IO</td>
</tr>
<tr class="even">
<td>6</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>



### DB9M Serial Interface (J2)

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP (J2-Pinmap).png" width="800" />

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





### 1x2 BOOT MODE (J3)

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP (J3-Pinmap).png" width="800" />

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
<td>BOOT MODE</td>
<td>Boot Mode Select signal input<br />
Active Low : Enter Boot mode</td>
</tr>
<tr class="even">
<td>2</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>


-   J3 is not mounted

------------------------------------------------------------------------

### 1x2 FACT RST (J4)

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP (J4-Pinmap).png" width="800" />

| Pin Number | Signal   | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| 1          | FACT RST | Factory Reset Signal input<br />Drive this pin Low 5.0s Module will be Factory Reset |
| 2          | GND      | System Ground                                                |

-   J4 is not mounted

------

### 1x4 Download (J5)

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP (J5-Pinmap).png" width="800" />

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
<td>USB_DP</td>
<td>USB DP Signal input for RP2040</td>
</tr>
<tr class="odd">
<td>3</td>
<td>USB_DM</td>
<td>USB DM Signal input for RP2040</td>
</tr>
</tr>
<tr class="even">
<td>4</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>



------------------------------------------------------------------------

## Switch Specification



### Reset Switch (SW1)

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP (Reset).png" width="800" />

-   When Push SW1, WIZ510SR-RP will be reset



------

### BOOTSEL Switch (SW2)

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP (BOOTSEL).png" width="800" />

-   Push SW2 and Power on(or reset) then RP2040 will be USB Mass Storage Device mode 

------



### HW TRIG Switch (SW3)

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP (HW TRIG).png" width="800" />

-   Slide SW3 Left : AT command
-   Slide SW3 Right : Gateway Mode

------



## Dimension

-   WIZ510SR-RP Rev1.0 Dimension :
    -   63mm x 45mm x 1.6mm ( PCB board size )
    -   TBDmm x TBDmm x TBDmm ( Included part size )

<img src="/img/products/s2e_module/WIZ510SR-RP/HW/Document/WIZ510SR-RP PCB TOP.png" width="700" />

-   WIZ5xxSR-RP-EVB Rev1.0 Dimension :
    -   TBD ( PCB board size )
    -   TBD ( Included part size )

