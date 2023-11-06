---
id: datasheet
title: Datasheet
date: 2022-05-09
keywords: [wiznet, wiz505sr-rp,wiz505sr-rp datasheet, hardwired tcp/ip,serial-to-ethernet, w5100s, rp2040]
description: WIZ505SR-RP is a compact sized serial to Ethernet module using the RP2040 MCU with W5100S Ethernet Chip
---

## Hardware Specification

### Product Spec Table

| Category       |               | Description   |
|----------------|---------------|---------------|
| MCU (RP2040)   | ARM Cortex-M0+ Dure Core | 133Mhz maximum frequency<br />264KB on-chip SRAM<br />16KB on-chip ROM<br />2MB External ROM<br />2 × UART, 2 × SPI controllers, 2 × I2C controllers, 16 × PWM channels<br />1 × USB 1.1 controller and PHY, with host and device support<br />8 × Programmable I/O (PIO) state machines for custom peripheral support |
| Ethernet (W5100S) | Hardwired TCP/IP With MAX and PHY | Support Hardwired Internet protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE<br />Support 4 independent SOCKETs simultaneously<br />Support SOCKET-less Command: ARP-Request, PING-Request<br />Internal 16Kbytes Memory for TX/ RX Buffers<br />10BaseT/100BaseTX Ethernet PHY Integrated |
| Serial         | Interface     | UART (LVTTL 3.3V)<br />SWD |
| Serial         | Signal        | TXD, RXD, RTS, CTS, DTR, DSR GND<br />SWCLK, SWDIO |
| Serial         | Parameters    | Parity: None, Odd, Even<br />Data bits: 7, 8 bit<br />Flow control: None, RTS / CTS, XON / XOFF |
| Serial         | Speed         | TBD           |


------------------------------------------------------------------------

### WIZ505SR-RP Callout

|                                                              |
| ------------------------------------------------------------ |
| ![WIZ505SR-RP Callout top](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-callout-top.png) |
| TOP                                                          |
| ![WIZ505SR-RP callout bottom](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-3d-bot.png) |
| BOTTOM                                                       |



## Connector Specification



### Magnetic rj45 modular jack (P1)

![WIZ505SR-RP Magnetic rj45 modular jack (P1)](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-p1.png)

-   If there is no Ethernet connection, the WIZ505SR-RP device will enter into a continuous reset loop.

### 2x7 UART1, Download (J2)

![WIZ505SR-RP 2x7 UART1, Download (J2)](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-j2-pinmap.png)

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
<td>RUN</td>
<td>RP2040 Reset Signal Input<br />
Active Low</td>
</tr>
<tr class="even">
<td>2</td>
<td>VCC</td>
<td>System Power Input (3.3V)</td>
</tr>
<tr class="odd">
<td>3</td>
<td>UART1_RX</td>
<td>UART1 RX</td>
</tr>
<tr class="even">
<td>4</td>
<td>VCC</td>
<td>System Power Input (3.3V)</td>
</tr>
<tr class="odd">
<td>5</td>
<td>UART1_CTS</td>
<td>UART1 CTS</td>
</tr>
<tr class="even">
<td>6</td>
<td>FACT RST</td>
<td>Factory Reset Signal input<br />
Drive this pin to Low for at least 5.0s then WIZ505SR-RP will be reset to factory settings</td>
</tr>
<tr class="odd">
<td>7</td>
<td>UART1 TX</td>
<td>UART1 TX</td>
</tr>
<tr class="even">
<td>8</td>
<td>HW_TRIG</td>
<td>HW TRIG signal input<br />
Active Low<br />
High : Gateway Mode<br />
Low : AT Command Mode<br />
Changes will be reflected after reset</td>
</tr>
<tr class="odd">
<td>9</td>
<td>UART1_RTS</td>
<td>UART1 RTS</td>
</tr>
<tr class="even">
<td>10</td>
<td>BOOTSEL</td>
<td>Active Low<br />
Drive this pin Low and reset(or power on),then RP2040 will enter USB Mass Storage Device mode<br />
Then RP2040 can be re-programming</td>
</tr>
<tr class="odd">
<td>11</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>12</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="odd">
<td>13</td>
<td>USB_DP</td>
<td>USB DP signal input for RP2040</td>
</tr>
<tr class="even">
<td>14</td>
<td>USB_DM</td>
<td>USB DM Signal input for RP2040</td>
</tr>
</tbody>
</table>

### 1x6 UART0, SWD (J1)

![WIZ505SR-RP 1x6 UART0, SWD (J1)](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-j1-pinmap.png)

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

### 1x2 Boot mode select (J3)

![WIZ505SR-RP x2 Boot mode select (J3)](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-j3-pinmap.png)

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
<td>BOOTMODE</td>
<td>Boot Mode Select signal input<br />
Active Low<br />
Drive this pin low and reset(or power on),then WIZ505SR-RP will enter Boot mode</td>
</tr>
<tr class="even">
<td>2</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

**J3 is not mounted connector**

## Switch Specification

### RESET Switch (SW1)

![WIZ505SR-RP RESET Switch (SW1)](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-reset.png)

- Pressing SW1 will initiate a reset of the WIZ500SR-RP device.

### BOOTSEL Switch (SW2)

![WIZ505SR-RP BOOTSEL Switch (SW2)](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-boot.png)

- Pressing SW2 and resetting (or powering on) will cause the RP2040 to enter USB Mass Storage Device mode. This enables the RP2040 to be reprogrammed.

## WIZ505SR-RP indicators

![WIZ505SR-RP LED indicators](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-led.png)

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
## WIZ505SR-RP EVB

To utilize the [WIZ505SR-RP EVB](../wiz505sr-rp-evb-en.md), connect the J1 connector of the WIZ505SR-RP to the J6 connector of the EVB.  

|                                                              |
| ------------------------------------------------------------ |
| ![WIZ505SR-RP LED indicators](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-evb-top.png) |
| TOP                                                          |
| ![WIZ505SR-RP LED indicators](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-evb-bottom.png) |
| BOTTOM    |

----------------------------------------------------------------------
  
## Schematic & Artwork

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ505SR-RP/WIZ505SR-RP_V100/Schematic/WIZ505SR-RP_SCH_V100.zip" target="_blank">Download</a> | \-      |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ505SR-RP/WIZ505SR-RP_V100/Schematic/WIZ505SR-RP_SCH_V100.pdf" target="_blank">Download</a> | \-      |

## Part list

| H/W version | Type | Filetype | Download Link                                                | Remarks |
| ----------- | ---- | -------- | ------------------------------------------------------------ | ------- |
| 1.0         | TTL  | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ505SR-RP/WIZ505SR-RP_V100/Partlist/WIZ505SR-RP_PL_V100.xlsx" target="_blank">Download</a> |\-      |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/4d4c49d044e6d49c58748386eb2b5292ab607564/04_Serial_to_Ethernet_Module/WIZ505SR-RP/WIZ505SR-RP_V100/Partlist/WIZ505SR-RP_PL_V100.pdf" target="_blank">Download</a> |\-      |

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
| 100M Transmitting              | \-   |      | 125  |      | mA   |



### External Flash Memory

| Symbol | Parameter            | Min     | Unit   |
| ------ | -------------------- | ------- | ------ |
| N*END* | **Sector Endurance** | 100,000 | Cycles |
| T*DR*  | **Data Retention**   | 20      | Years  |



------------------------------------------------------------------------

## Dimensions

-   WIZ505SR-RP Rev1.0 Dimension :
    -   40mm x 62mm x 1.6mm ( PCB board size )
    -   40mm x 66.5mm x 15mm ( Included part size )

![WIZ505SR-RP Dimensions](/img/products/s2e_module/wiz505sr-rp/wiz505sr-rp-pcb-top.png)