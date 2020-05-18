---
id: hardware_pins
title: Hardware Pins
date: 2020-04-15
---


## Content
## Hardware Pins of WIZ550io

### Pin Map

![](/img/products/wiz550io/wiz550io_pin_map.jpg)

### Pin out

![](/img/products/wiz550io/wiz550io_pinout_20140513_v4_mounthole_.jpg)

**Revision 1.2 version pinout is same to revision1.1 version.**

-----

### Pin Description

<table>
<thead>
<tr class="header">
<th><strong>Pin No.</strong></th>
<th></th>
<th><strong>I/O</strong></th>
<th>Pin Name</th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>J1</td>
<td><strong>1</strong></td>
<td><strong>P</strong></td>
<td><strong>GND</strong></td>
<td><strong>Ground</strong></td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>2</strong></td>
<td><strong>P</strong></td>
<td><strong>GND</strong></td>
<td><strong>Ground</strong></td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>3</strong></td>
<td><strong>I</strong></td>
<td><strong>MOSI</strong></td>
<td><strong>SPI Master Out Slave In</strong><br />
This pin is used for SPI MOSI signal pin</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>4</strong></td>
<td><strong>O</strong></td>
<td><strong>MISO</strong></td>
<td><strong>SPI Master In Slave Out</strong><br />
This pin is used for SPI MISO signal pin</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>5</strong></td>
<td><strong>I</strong></td>
<td><strong>SCLK</strong></td>
<td><strong>SPI Clock</strong><br />
This pin is used for SPI Clock Signal pin</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>6</strong></td>
<td><strong>I</strong></td>
<td><strong>SCSn</strong></td>
<td><strong>SPI Slave Select</strong><br />
This pin is used for SPI Slave Select Signal Pin when using SPI interface</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>7</strong></td>
<td><strong>P</strong></td>
<td><strong>3V3D</strong></td>
<td><strong>Power</strong>: 3.3V Power Supply</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>8</strong></td>
<td><strong>P</strong></td>
<td><strong>3V3D</strong></td>
<td><strong>Power</strong>: 3.3V Power Supply</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>Pin No.</strong></th>
<th></th>
<th><strong>I/O</strong></th>
<th><strong>Pin Name</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>J2</strong></td>
<td><strong>1</strong></td>
<td><strong>P</strong></td>
<td><strong>3V3D</strong></td>
<td><strong>Power</strong>: 3.3V Power Supply</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>2</strong></td>
<td><strong>O</strong></td>
<td><strong>RDY</strong></td>
<td><strong>READY</strong><br />
This pin is asserted to low after power on.<br />
When RSTn is activated, WIZ550io does auto configuration with embedded MAC and default IP address.<br />
After configuration gets completed, WIZ550io raises this pin to HIGH in order to inform about the completion of WIZ550io’s configuration.<br />
Host processor can only control WIZ55oio when RDY pin is HIGH.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>3</strong></td>
<td><strong>I</strong></td>
<td><strong>RSTn</strong></td>
<td><strong>Reset</strong>: Low activity<br />
This pin is to initialize WIZ550io.<br />
Hold at least 500us after asserted to LOW and wait for at least 150ms after it is changed to HIGH until WIY550io configured itself.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>4</strong></td>
<td><strong>I</strong></td>
<td><strong>NC</strong></td>
<td><strong>Not Connected</strong></td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>5</strong></td>
<td><strong>O</strong></td>
<td><strong>INTn</strong></td>
<td><strong>Interrupt</strong>: Low activity<br />
This pin indicates that W5500 inside WIZ550io requires<br />
MCU's due to events like socket connection, disconnection, data receiving timeout and WOL (Wake on Lan).<br />
The interrupt is cleared by writing IR register or Sn_IR.<br />
All interrupts are maskable.</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>6</strong></td>
<td><strong>P</strong></td>
<td><strong>GND</strong></td>
<td><strong>Ground</strong></td>
</tr>
</tbody>
</table>

**Caution)**  
*Some users may want to reinitialize W5500 inside WIZ550io with SW reset,
not handling RSTn pin. It will make WIZ550io hang up due to clearance of
all information in the registers of W5500. A tiny MCU inside WIZ550io
initializes W5500 with embedded MAC address and a default IP address and
Initialization is triggered by RSTn.*  
  
*In case of SW reset, all registers in W5500 will be cleared and WIZ550io
will not initialize itself. All information inside WIZ550io will be lost
and WIZ550io will hang up instead.*  
  
*Therefore, we recommend HW reset instead of SW reset. Nevertheless, if
users want to use SW reset, we recommend to save MAC address and network
information including IP address, Subnet mask and Gateway address before
SW reset, and writing those information to WIZ550io after SW reset.*

-----
