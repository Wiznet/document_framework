---
id: datasheet
title: Datasheet
date: 2022-05-09
keywords: [wiznet, wiz510sr-rp,wiz510sr-rp datasheet, hardwired tcp/ip,serial-to-ethernet, w5100s, rp2040]
description: WIZ510SR-RP is a compact sized serial to Ethernet module using the RP2040 MCU with W5100S Ethernet Chip
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
| ![WIZ510SR-RP Callout](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-callout-top.png) |
| TOP                                                          |
| ![WIZ510SR-RP Bottom](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-3d-bottom.png) |
| BOTTOM                                                       |



------------------------------------------------------------------------

### WIZ510SR-RP Pinout

![WIZ510SR-RP Pinout](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-pinout.png)

------



### WIZ510SR-RP indicators

![WIZ510SR-RP LED indicators](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-led.png)

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

## Schematic & Artwork

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ510SR-RP/WIZ510SR-RP_V100/Schematic/WIZ510SR-RP_V100.zip" target="_blank">Download</a> | \-      |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ510SR-RP/WIZ510SR-RP_V100/Schematic/WIZ510SR-RP_SCH_V100.pdf" target="_blank">Download</a> | \-      |
------------------------------------------------------------------------

## Part list

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ510SR-RP/WIZ510SR-RP_V100/Partlist/WIZ510SR-RP_PL_V100.xlsx" target="_blank">Download</a> | \-      |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ510SR-RP/WIZ510SR-RP_V100/Partlist/WIZ510SR-RP_PL_V100.pdf" target="_blank">Download</a> | \-      |
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
| 100M Transmitting              | \-   |      | 130  |      | mA   |




### External Flash Memory

| Symbol | Parameter            | Min     | Unit   |
| ------ | -------------------- | ------- | ------ |
| N*END* | **Sector Endurance** | 100,000 | Cycles |
| T*DR*  | **Data Retention**   | 20      | Years  |

------------------------------------------------------------------------

## Connector Specification

### Magnetic RJ45 modular jack (P1)

![WIZ510SR-RP Magnetic RJ45 modular jack (P1)](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-p1.png)

-   If there is no Ethernet connection, the WIZ510SR-RP device will enter into a continuous reset loop.



### 2Ø DC-JACK (P2)

![WIZ510SR-RP 2Ø DC-JACK (P2)](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-dc-jack.png)

- 5V input 

### DB9M Serial Interface (J2)

![WIZ510SR-RP Serial Interface (J2)](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-j2-pinmap.png)

![WIZ510SR-RP DB9M](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-db9m.png)

| Pin Number | Signal | Description                  |
| ---------- | ------ | ---------------------------- |
| 1          | DCD    | NC                           |
| 2          | RXD    | Receive Data                 |
| 3          | TXD    | Transmit Data                |
| 4          | DTR    | NC                           |
| 5          | GND    | System Ground(Signal Ground) |
| 6          | DSR    | NC                           |
| 7          | RTS    | Request To Send              |
| 8          | CTS    | Clear To Send                |
| 9          | RI     | NC                           |

-   RXD, TXD, GND: These are all you need if the device does not use hardware handshaking.
-   RXD, TXD, GND, RTS, CTS: These are the signals used when serial device uses hardware handshaking.
-   DCD, DTR, DSR, RI: Not used


### 1x4 Download (J5)

![WIZ510SR-RP 1x4 Download (J5)](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-j5-pinmap.png)

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
</tbody>
</table>

### 1x6 UART0, SWD (J1)

![WIZ510SR-RP 1x6 UART0, SWD (J1)](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-j1-pinmap.png)

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


-   J1 is not mounted



### 1x2 BOOT MODE (J3)

![WIZ510SR-RP 1x2 BOOT MODE (J3)](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-j3-pinmap.png)

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
Active Low<br />
Drive this pin low and reset(or power on),then WIZ510SR-RP will enter Boot mode</td>
</tr>
<tr class="even">
<td>2</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

-   J3 is not mounted



### 1x2 FACT RST (J4)

![WIZ510SR-RP 1x2 FACT RST (J4)](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-j4-pinmap.png)

| Pin Number | Signal   | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| 1          | FACT RST | Factory Reset Signal input<br />Drive this pin to Low for at least 5.0s then WIZ510SR-RP will be reset to factory settings |
| 2          | GND      | System Ground                                                |

-   J4 is not mounted



------------------------------------------------------------------------

## Switch Specification



### Reset Switch (SW1)

![WIZ510SR-RP Reset Switch (SW1)](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-reset.png)

- Pressing SW1 will initiate a reset of the WIZ510SR-RP device.

### BOOTSEL Switch (SW2)

![WIZ510SR-RP BOOTSEL Switch (SW2)](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-bootsel.png)

- Pressing SW2 and resetting (or powering on) will cause the RP2040 to enter USB Mass Storage Device mode. This enables the RP2040 to be reprogrammed.



### HW TRIG Switch (SW3)

![WIZ510SR-RP HW TRIG Switch (SW3)](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-hw-trig.png)

-   Slide SW3 Left : AT command
-   Slide SW3 Right : Gateway Mode
-   Changes will be reflected after reset

------



## Dimension

-   WIZ510SR-RP Rev1.0 Dimension :
    -   63mm x 45mm x 1.6mm ( PCB board size )
    -   76mm x 45mm x 15mm ( Included part size )

![WIZ510SR-RP Dimension](/img/products/s2e_module/wiz510sr-rp/wiz510sr-rp-pcb-top.png)

