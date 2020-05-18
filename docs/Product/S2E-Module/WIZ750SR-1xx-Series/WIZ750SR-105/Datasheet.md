---
id: datasheet
title: Datasheet
date: 2020-04-09
---

## Content

# WIZ750SR-105 Datasheet

**Supported Languages**  
* English only

![](/products/wiz750sr/docs_icon.png)

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
<td>Transceiver</td>
<td>IP101GRI<br />
Single 10/100M Ethernet Transceiver</td>
</tr>
<tr class="even">
<td>Serial</td>
<td>Interface</td>
<td>WIZ750SR-105: TTL Version<br />
WIZ105SR-EVB: RS-232 Version</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>Signal</td>
<td>TXD, RXD, RTS, CTS, GND</td>
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
<td>62mm x 40mm ( PCB board size )<br />
62mm x 40mm x 18mm ( Include part size )</td>
</tr>
<tr class="odd">
<td>Connector type</td>
<td></td>
<td><strong>RJ-45(Ethernet Connector)</strong><br />
2.00mm Pitch 2x6 SMD Pin-header(Data Line)</td>
</tr>
<tr class="even">
<td>Input Voltage</td>
<td></td>
<td>DC 3.3V, 100mA under</td>
</tr>
<tr class="odd">
<td>Temperature</td>
<td></td>
<td>-40℃ ~ 85℃ (Operation), -40℃ ~ 85℃ (Storage range)</td>
</tr>
</tbody>
</table>

-----

### WIZ750SR-105 Callout

|                                                                      |
| -------------------------------------------------------------------- |
| ![](/products/wiz750sr-105/datasheet/wiz750sr-105_callouttop.png)    |
| TOP                                                                  |
| ![](/products/wiz750sr-105/datasheet/wiz750sr-105_calloutbottom.png) |
| BOTTOM                                                               |

-----

### WIZ750SR-105 Pinout

![](/products/wiz750sr-105/datasheet/wiz750sr-105_pinout_all.png)

-----

### WIZ750SR-105 indicate

![](/products/wiz750sr-105/datasheet/wiz750sr-105_indicateled_pinout.png)

| Pin Number | Pin Name | Signal       | Description                       |
| ---------- | -------- | ------------ | --------------------------------- |
| 1          | LD1      | UART0 RX     | UART receiver indicate            |
| 2          | LD2      | UART0 TX     | UART Transceiver indicate         |
| 3          | LD3      | Status\_LED0 | PHY LINK check or initialize done |
| 4          | LD4      | Status\_LED1 | TCP Connection                    |
| 5          | LD5      | Power LED    | \-                                |
| 6          | LD6      | STATUS       | Not function                      |
| 7          | LD7      | COL          | Collision Detected                |

-----

### WIZ750SR-105 Block Diagram

![](/products/wiz750sr-105/datasheet/wiz750sr-105_blockdiagram_v2.png)

-----

## WIZ105SR-EVB

  - WIZ750SR-105 Developer Interface Board.
  - RESET Tact SW.
  - FACTORY RESET SW.
  - BOOT0 Slide SW.
  - H/W Trig Slide SW.
  - RS-232C Transceiver, D-SUB9-MALE.
  - 5V DC-JACK (External 4.5pi, internal 1.3pi)
  - inside LDO 3.3V (5V to 3.3V)

![](/products/wiz750sr-105/datasheet/wiz105sr-evb.jpg)

**WIZ750SR-105 EVB is must use the WIZ105SR-EVB Because WIZ750S-105 is a
replacement for WIZ105SR.**

### Serial Interface

![](/products/wiz750sr-105/datasheet/wiz750sr-105-evb_pinout.png)

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

  - RXD, TXD, GND: These are all you need if the device does not use
    hardware handshaking.
  - RXD, TXD, GND, RTS, CTS: These are the signals used when serial
    device uses hardware handshaking.
  - DTR, DSR: Not used

![](/products/wiz750sr-100/datasheet/wiz750sr-100-serial_cable.png)

-----

## Schematic & Artwork

### WIZ750SR-105

| H/W version | Type | Filetype | Download Link                                                                                                                | Remarks |
| ----------- | ---- | -------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- |
| 1.0         | TTL  | Altium   | ![](/products/w5500/w5500_evb/icons/download.png) [Download](/products/wiz750sr-105/datasheet/wiz750sr-105_v1.0_altium.zip) | \-      |
| :::         | :::  | PDF      | ![](/products/w5500/w5500_evb/icons/download.png) [Download](/products/wiz750sr-105/datasheet/wiz750sr-105.pdf)             | \-      |

-----

## Part list

### WIZ750SR-105

| H/W version | Type | Filetype | Download Link                                                                                                                     | Remarks |
| ----------- | ---- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 1.0         | TTL  | Excel    | ![](/products/w5500/w5500_evb/icons/download.png) [Download](/products/wiz750sr-105/datasheet/wiz750sr-105_v1.0_pl_20171227.xls) | \-      |
| :::         | :::  | PDF      | ![](/products/w5500/w5500_evb/icons/download.png) [Download](/products/wiz750sr-105/datasheet/wiz750sr-105_v1.0_pl_20171227.pdf) | \-      |

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
<td>3.135</td>
<td>3.3</td>
<td>3.465</td>
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
<td>2.5</td>
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
<td>0.6</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>OH</em></td>
<td><strong>Output high voltage<br />
(High driving strength Current load = 6mA)<br />
(Low driving strength Current load = 3mA)</strong></td>
<td>ALL</td>
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
<td>ALL</td>
<td></td>
<td></td>
<td>0.32</td>
<td>V</td>
</tr>
</tbody>
</table>

### Flash Memory

| Symbol | Parameter            | Min    | Unit   |
| ------ | -------------------- | ------ | ------ |
| N*END* | **Sector Endurance** | 10,000 | Cycles |
| T*DR*  | **Data Retention**   | 10     | Years  |

### EEPROM

| Symbol | Parameter            | Min | Unit   |
| ------ | -------------------- | --- | ------ |
| N*END* | **Sector Endurance** | 1M  | Cycles |
| T*DR*  | **Data Retention**   | 200 | Years  |

-----

## Connector Specification

### 6x2 Data Pin Connector (J4)

![](/products/wiz750sr-105/datasheet/wiz750sr-105_pinout_data_modi.png)

| Pin Number | Signal    | Description                          |
| ---------- | --------- | ------------------------------------ |
| 1          | nRESET    | System Reset signal (Active Low)     |
| 2          | VCC       | System Power (3.3V)                  |
| 3          | U\_RXD0   | Receive Data (TTL : 3.3V)            |
| 4          | VCC       | System Power (3.3V)                  |
| 5          | U\_CTS0   | Clear To Send (TTL : 3.3V)           |
| 6          | FAC\_nRST | System Reset signal (Active Low)     |
| 7          | U\_TXD0   | Transmit Data (TTL : 3.3V)           |
| 8          | HW\_TRIG  | Hardware Trigger signal (Active Low) |
| 9          | U\_RTS0   | Request To Send (TTL : 3.3V)         |
| 10         | NC        | Not Connect                          |
| 11         | GND       | System Ground                        |
| 12         | GND       | System Ground                        |

-----

### BOOT Pin (J5, J6)

![](/products/wiz750sr-105/datasheet/wiz750sr-105_pinout_boot.png)

| Parts | Pin Number | Signal   | Description                   |
| ----- | ---------- | -------- | ----------------------------- |
| J5    | 1          | APP BOOT | Application Jump at BOOT mode |
| :::   | 2          | GND      | System Ground                 |

| Parts | Pin Number | Signal | Description         |
| ----- | ---------- | ------ | ------------------- |
| J6    | 1          | BOOT   | System Ground       |
| :::   | 2          | VCC    | System Power (3.3V) |

-----

### SWD(JTAG) Pin (J3)

![](/products/wiz750sr-105/datasheet/wiz750sr-105_pinout_swd.png)

| Pin Number | Signal | Description                      |
| ---------- | ------ | -------------------------------- |
| 1          | VCC    | System Power (3.3V)              |
| 2          | SWDIO  | SWD(JTAG) Data I/O pin           |
| 3          | SWCLK  | SWD(JTAG) Clock pin              |
| 4          | nRESET | System Reset signal (Active Low) |
| 5          | GND    | System Ground                    |

-----

### ISP Port & Expansion GPIO (J1, J2)

![](/products/wiz750sr-105/datasheet/wiz750sr-105_pinout_expansion.png)

| Parts | Pin Number | Signal          | Description                          |
| ----- | ---------- | --------------- | ------------------------------------ |
| J1    | 1          | VCC             | System Power (3.3V)                  |
| :::   | 2          | Expansion GPIOD | Expansion User's depend on GPIO port |
| :::   | 3          | Expansion GPIOC | :::                                  |
| :::   | 4          | Expansion GPIOB | :::                                  |
| :::   | 5          | Expansion GPIOA | :::                                  |
| :::   | 6          | GND             | System Ground                        |

<table>
<thead>
<tr class="header">
<th>Parts</th>
<th>Pin Number</th>
<th>Signal</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>J2</td>
<td>1</td>
<td>VCC</td>
<td>System Power (3.3V)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>BOOT</td>
<td>BOOT SW</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>3</td>
<td>U_TXD2</td>
<td>Simple UART2(Debug port)<br />
ISP mode firmware downloader port</td>
</tr>
<tr class="even">
<td>:::</td>
<td>4</td>
<td>U_RXD2</td>
<td>Simple UART2(Debug port)<br />
ISP mode firmware downloader port</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>5</td>
<td>nRESET</td>
<td>System Reset signal (Active Low)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>6</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

-----

### RJ-45 Connector (BS-RB10005)

![](/products/wiz750sr/datasheet/wiz750sr_magjack.png)

| Pin Number | Pin              | Signal              |
| ---------- | ---------------- | ------------------- |
| 1          | R1               | TX+                 |
| 2          | R2               | TX-                 |
| 3          | R3               | TCT/RCT(Center tap) |
| 4          | R7               | RX+                 |
| 5          | R8               | RX-                 |
| 6          | L1+(Active LED)  | Anode               |
| 7          | L2- (Active LED) | Cathode             |
| 8          | L3+(LINK LED)    | Anode               |
| 9          | L4- (LINK LED)   | Cathode             |

-----

## Dimension

  - WIZ750SR-105 Rev1.0 Dimension : 
      - 62mm x 40mm ( PCB board size )
      - 62mm x 40mm x 18mm ( Included part size )

![](/products/wiz750sr-105/datasheet/wiz750sr-105_dimension_v2.png)

-----

## Navigation

-----
WIZ750SR series Common Documents 

  - **[User's Manual (English)](User's_Manual-[EN].md)** 
  - **[User's Manual (Korean)](User's_Manual-[KO].md)** 

<!-- end list -->

  - **[Device Command Manual (English)](Command_Manual-[EN].md)**
  - **[Device Command Manual (Korean)](Command_Manual-[KO].md)**

<!-- end list -->

  - **[Troubleshooting Guide (English)](Trouble_Shooting-[EN].md)**
  - **[Troubleshooting Guide (Korean)](Trouble_Shooting-[KO].md)**

<!-- end list -->

  - **[Update History (English)](Series_Update_History-[EN].md)**
  - **[Update History (Korean)](Series_Update_History-[KO].md)**

-----

**WIZ750SR series Downloads** 

  - **[Software Download](Download.md)**

<!-- end list -->

  - **[Technical References](Technical_References.md)**

-----
