---
id: datasheet
title: WIZ750SR-100 Datasheet
date: 2020-04-08
---

## Hardware Specification

### Product Spec Table

| Category       |                        | Description |
|----------------|------------------------|-------------|
| MCU            | ARM Cortex-M0 Core      | W7500<br />48Mhz maximum frequency<br />Internal 8Mhz RC Oscillator<br />Flash: 128KB<br />Large flexible-size SRAM buffer for various User Application<br />- Min 16KB available if full 32KB socket buffer used<br />- Max 48KB available if no socket buffer used<br />ROM for boot code: 6 KB |
| MCU            | Hardwired TCP/IP Core   | 8 independent Sockets<br />SRAM for socket: 32KB<br />MII (Medium-Independent Interface)<br />TCP/IP Protocols: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE |
| PHY            | Transceiver             | IP101GRI<br />Single 10/100M Ethernet Transceiver |
| Serial         | Interface               | UART (LVTTL 3.3V) |
| Serial         | Signal                  | TXD, RXD, RTS, CTS, DTR, DSR GND |
| Serial         | Parameters              | Parity: None, Odd, Even<br />Data bits: 7, 8 bit<br />Flow control: None, RTS / CTS, XON / XOFF |
| Serial         | Speed                   | Up to 230Kbps |
| Dimension      |                        | 50mm x 30mm x 12mm (Include part size) |
| Connector type |                        | Mount Connector<br />2.00mm Pitch 1x12 Pin-header 2EA<br /><br />Not Mount Connector<br />2.00mm Pitch 1x12 Pin-header 1ea<br />2.54mm Pitch 1x6 Pin-header<br />1.27mm Pitch 1x5 Pin-header |
| Input Voltage  |                        | DC 3.3V, 100mA under |
| Temperature    |                        | -40℃ ~ 85℃ (Operation), -40℃ ~ 85℃ (Storage range) |


------------------------------------------------------------------------

### WIZ750SR-100 Callout

|                                                                                                  |
|--------------------------------------------------------------------------------------------------|
| <img src="/img/products/wiz750sr-100/datasheet/wiz750sr_callout_rev1.1_top_v2.png" width="600" />    |
| TOP                                                                                              |
| <img src="/img/products/wiz750sr-100/datasheet/wiz750sr_callout_rev1.1_bottom_v2.png" width="600" /> |
| BOTTOM                                                                                           |

------------------------------------------------------------------------

### WIZ750SR-100 Pinout

<img src="/img/products/wiz750sr-100/datasheet/wiz750sr-100_allpinout_rev1.1_v2.png" width="800" />

------------------------------------------------------------------------

### WIZ750SR-100 indicate

<img src="/img/products/wiz750sr-100/datasheet/wiz750sr-100_indicateled_pinout.png" width="800" />

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
<td>Power LED</td>
<td>-</td>
</tr>
<tr class="even">
<td>2</td>
<td>LD2</td>
<td>Status_LED0</td>
<td>PHY LINK check or initialize done</td>
</tr>
<tr class="odd">
<td>3</td>
<td>LD3</td>
<td>Status_LED1</td>
<td>TCP Connectoin</td>
</tr>
<tr class="even">
<td>4</td>
<td>LD4</td>
<td>STATUS</td>
<td>Trigger mode indicate<br />
TCP connection indicate</td>
</tr>
<tr class="odd">
<td>5</td>
<td>LD5</td>
<td>UART0 RX</td>
<td>UART receiver indicate</td>
</tr>
<tr class="even">
<td>6</td>
<td>LD6</td>
<td>UART0 TX</td>
<td>UART Transceiver indicate</td>
</tr>
</tbody>
</table>

------------------------------------------------------------------------

### WIZ750SR-100 Block Diagram

<img src="/img/products/wiz750sr-100/datasheet/wiz750sr-100_blockdiagram_v2.png" width="800" />

------------------------------------------------------------------------

## WIZ750SR-100-EVB

-   WIZ750SR-100 Developer Board.
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
|------------|--------|------------------------------|
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

### WIZ750SR-100

| H/W version | Type | Filetype | Download Link | Remarks |
|-------------|------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| 1.0         | TTL  | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100_v1.0_wiki_upload_files.zip" target="_blank">Download</a> | \-      |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100_v2.pdf" target="_blank">Download</a>    | \-      |
| 1.1         | TTL  | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100_v1.1_wiki_upload_files.zip" target="_blank">Download</a> | \-      |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100_rev1.1.pdf" target="_blank">Download</a>               | \-      |

### WIZ750SR-EVB

| H/W version | Type  | Filetype | Download Link                                                                                                                                         | Remarks |
|-------------|-------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| 1.0         | RS232 | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100-evb_sch_v1.0.zip" target="_blank">Download</a> | \-      |
| :::         | :::   | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100-evb.pdf" target="_blank">Download</a> | \-      |

------------------------------------------------------------------------

## 3D File

| H/W version | Type | Filetype | Download Link | Remarks |
|-------------|------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| 1.1         | TTL  | Altium   | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/3d-step-files/WIZ750SR-100_V1.1.step" target="_blank">Download</a> | \-      |

## Part list

### WIZ750SR-100

| H/W version | Type | Filetype | Download Link | Remarks |
|-------------|------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| 1.0         | TTL  | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100_v1.1_pl_20171215.xls" target="_blank">Download</a> |         |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100_v1.1_pl_20171215.pdf" target="_blank">Download</a> |         |
| 1.1         | TTL  | Excel    | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100_v110_pl_20180417.xls" target="_blank">Download</a> |         |
| :::         | :::  | PDF      | ![](/img/products/w5500/w5500_evb/icons/download.png) <a href="/img/products/wiz750sr-100/datasheet/wiz750sr-100_v110_pl_20180417.pdf" target="_blank">Download</a> |         |

### WIZ750SR-100-EVB

| H/W version | Type | Filetype | Download Link                                                                                                                                                 | Remarks |
|-------------|------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
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
|--------|----------------------|--------|--------|
| N*END* | **Sector Endurance** | 10,000 | Cycles |
| T*DR*  | **Data Retention**   | 10     | Years  |

### EEPROM

| Symbol | Parameter            | Min | Unit   |
|--------|----------------------|-----|--------|
| N*END* | **Sector Endurance** | 1M  | Cycles |
| T*DR*  | **Data Retention**   | 200 | Years  |

------------------------------------------------------------------------

## Connector Specification

### 1x12 Data Pin Connector (J1)

<img src="/img/products/wiz750sr-100/datasheet/wiz750jr_pin_description_j1_v2.png" width="600" />

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
<td>RESET</td>
<td>System Reset signal (Active HIGH)</td>
</tr>
<tr class="odd">
<td>3</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>4</td>
<td>U_TXD0</td>
<td>Transmit Data (TTL : 3.3V)</td>
</tr>
<tr class="odd">
<td>5</td>
<td>U_RTS0</td>
<td>Request To Send (TTL : 3.3V)</td>
</tr>
<tr class="even">
<td>6</td>
<td>U_DTR0<br />
PHY LINK</td>
<td>Data Terminal Ready (TTL : 3.3V)<br />
PHY Link status check signal</td>
</tr>
<tr class="odd">
<td>7</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>8</td>
<td>U_RXD0</td>
<td>Receive Data (TTL : 3.3V)</td>
</tr>
<tr class="odd">
<td>9</td>
<td>U_CTS0</td>
<td>Clear To Send (TTL : 3.3V)</td>
</tr>
<tr class="even">
<td>10</td>
<td>U_DSR0<br />
TCP CON<br />
HW_TRIG</td>
<td>Data Set Ready (TTL : 3.3V)<br />
TCP Connection check signal</td>
</tr>
<tr class="odd">
<td>11</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>12</td>
<td>STATUS</td>
<td>TCP Connection &amp; Trigger mode<br />
High: Not Connected<br />
Low: Connected</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>HW_TRIG</td>
<td>Hardware Trigger (Only Check once at booting)<br />
High &amp; Floating: Normal mode<br />
Low: App boot mode</td>
</tr>
</tbody>
</table>

-   **STATUS pin was changed HW\_TRIG pin.**

### 1x12 Network Line (J3)

#### WIZ750SR Rev1.0

<img src="/img/products/wiz750sr-100/datasheet/wiz750sr-100_pin_description_j3_v2.png" width="600" />

#### WIZ750SR Rev1.1

<img src="/img/products/wiz750sr-100/datasheet/wiz750sr-100_ethernetpinout_rev1.1.png" width="600" />

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
<td>NC</td>
<td>Not Connect</td>
</tr>
<tr class="even">
<td>2</td>
<td>MDI_RN</td>
<td>10/100M MDIO Receiver Differential Signal (N signal)</td>
</tr>
<tr class="odd">
<td>3</td>
<td>MDI_RP</td>
<td>10/100M MDIO Receiver Differential Signal (P signal)</td>
</tr>
<tr class="even">
<td>4</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="odd">
<td>5</td>
<td>MDI_TN</td>
<td>10/100M MDIO Transceiver Differential Signal (N signal)</td>
</tr>
<tr class="even">
<td>6</td>
<td>MDI_TP</td>
<td>10/100M MDIO Transceiver Differential Signal (P signal)</td>
</tr>
<tr class="odd">
<td>7</td>
<td>GND</td>
<td>System Ground</td>
</tr>
<tr class="even">
<td>8</td>
<td>Link LED</td>
<td>High: Link down<br />
Low: Link up<br />
(When the PHY is physically connected, the LINK LED lights up.)</td>
</tr>
<tr class="odd">
<td>9</td>
<td>NC</td>
<td>Not Connect</td>
</tr>
<tr class="even">
<td>10</td>
<td>ACT LED</td>
<td>Blink: 100M ACT<br />
(ACT LED blinks when data is transmitted/received between PHYs.)</td>
</tr>
<tr class="odd">
<td>11</td>
<td>NC</td>
<td>Not Connect<br />
(This pin connected to COL pin in Rev1.0.<br />
this pin outputs a high-status signal it means a collision is detected.<br />
Processed to NC in Rev1.1.)</td>
</tr>
<tr class="even">
<td>12</td>
<td>VCC</td>
<td>System Power input (3.3V)</td>
</tr>
</tbody>
</table>

### 1x12 Expansion GPIO & APP BOOT & Debug(ISP) Port (J2)

<img src="/img/products/wiz750jr/datasheet/wiz750jr_pin_description_j2.png" width="600" />

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
<td>Status LED0</td>
<td>User's depend on pin(LED)</td>
</tr>
<tr class="odd">
<td>3</td>
<td>Status LED1</td>
<td>User's depend on pin(LED)</td>
</tr>
<tr class="even">
<td>4</td>
<td>BOOT</td>
<td>BOOT SW</td>
</tr>
<tr class="odd">
<td>5</td>
<td>U_TXD2</td>
<td>Simple UART2(Debug port)<br />
ISP mode firmware downloader port</td>
</tr>
<tr class="even">
<td>6</td>
<td>U_RXD2</td>
<td>Simple UART2(Debug port)<br />
ISP mode firmware downloader port</td>
</tr>
<tr class="odd">
<td>7</td>
<td>Expansion GPIOD</td>
<td>Expansion User's depend on GPIO port</td>
</tr>
<tr class="even">
<td>8</td>
<td>Expansion GPIOC</td>
<td>:::</td>
</tr>
<tr class="odd">
<td>9</td>
<td>Expansion GPIOB</td>
<td>:::</td>
</tr>
<tr class="even">
<td>10</td>
<td>Expansion GPIOA</td>
<td>:::</td>
</tr>
<tr class="odd">
<td>11</td>
<td>APP BOOT</td>
<td>Application Jump at BOOT mode</td>
</tr>
<tr class="even">
<td>12</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

------------------------------------------------------------------------

### 1x5 SWD

<img src="/img/products/wiz750sr-100/datasheet/wiz750sr-100_pinout_swd.png" width="600" />

| Pin Number | Signal     | Description                             |
|------------|------------|-----------------------------------------|
| 1          | VCC        | System Power input (3.3V)               |
| 2          | SWDIO      | SWD(JTAG) Data I/O pin                  |
| 3          | SWCLK      | SWD(JTAG) Clock pin                     |
| 4          | **nRESET** | **System Reset signal (Active Low)**[1] |
| 5          | GND        | System Ground                           |

**Caution)** **WIZ750SR-100 SWD reset pin must be active low, because it
was connected to MCU directly.**

------------------------------------------------------------------------

### 1x6 ISP

<img src="/img/products/wiz750jr/datasheet/wiz750jr_pin_description_isp.png" width="600" />

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
<td>BOOT</td>
<td>BOOT SW</td>
</tr>
<tr class="odd">
<td>3</td>
<td>U_TXD2</td>
<td>Simple UART2(Debug port)<br />
ISP mode firmware downloader port</td>
</tr>
<tr class="even">
<td>4</td>
<td>U_RXD2</td>
<td>Simple UART2(Debug port)<br />
ISP mode firmware downloader port</td>
</tr>
<tr class="odd">
<td>5</td>
<td><strong>nRESET</strong></td>
<td><strong>System Reset signal (Active Low)</strong><a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a></td>
</tr>
<tr class="even">
<td>6</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>
<section class="footnotes" role="doc-endnotes">
<hr />
<ol>
<li id="fn1" role="doc-endnote"><p>This pin connect to MCU reset pin directly<a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
</ol>
</section>

**Caution)** **WIZ750SR-100 ISP reset pin must be active low, because it
was connected to MCU directly.**

------------------------------------------------------------------------

### RJ-45 Connector (BS-RB10005)

<img src="/img/products/wiz750sr/clitool/datasheet/wiz750sr_magjack.png" class="align-center" width="300" />

| Pin Number | Pin              | Signal              |
|------------|------------------|---------------------|
| 1          | R1               | TX+                 |
| 2          | R2               | TX-                 |
| 3          | R3               | TCT/RCT(Center tap) |
| 4          | R7               | RX+                 |
| 5          | R8               | RX-                 |
| 6          | L1+(Active LED)  | Anode               |
| 7          | L2- (Active LED) | Cathode             |
| 8          | L3+(LINK LED)    | Anode               |
| 9          | L4- (LINK LED)   | Cathode             |

------------------------------------------------------------------------

## Dimension

-   WIZ750SR-100 Rev1.0 Dimension :
    -   50mm x 30mm ( PCB board size )
    -   50mm x 30mm x 12mm ( Included part size )

<img src="/img/products/wiz750sr-100/datasheet/wiz750sr-100-dimension.png" width="700" />

-   WIZ750SR-100-EVB Rev1.0 Dimension :
    -   105mm x 70mm ( PCB board size )
    -   105mm x 70mm x 18mm ( Included part size )

<img src="/img/products/wiz750sr-100/datasheet/wiz750sr-100-evb-dimension.png" width="700" />

------------------------------------------------------------------------

[1] This pin connect to MCU reset pin directly
