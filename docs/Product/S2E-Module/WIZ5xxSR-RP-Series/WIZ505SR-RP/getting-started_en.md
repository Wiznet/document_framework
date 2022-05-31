---
id: getting-started
title: Getting Started
date: 2022-05-26
---

## Unpacking the WIZ505SR-RP

### What's in the Box?

The WIZ505SR-RP evaluation board package contains the following parts.

  - WIZ505SR-RP Module

The entire list of parts of the board is available at the [WIZ505SR-RP Overview: Product Contents](./overview.md#product-contents) page.

As WIZ505SR-RP already has Ethernet port, it is necessary to use WIZ500/505SR-RP-EVB to get started working with module.

### Device Layout

|                                                                               |
| ----------------------------------------------------------------------------- |
| ![](/img/products/s2e_module/WIZ505SR-RP/HW/Document/WIZ505SR-RP-Callout_Top.png) |
| Figure: ***WIZ505SR-RP Revision 1.0 Top***                                   |


### Parts

| Item | Description  |
| ---- | ------------ |
| U1 | RP2040 MCU |
| U2 | W5100S |
| U4 | Flash memory |
| J1 | Debug |
| J2 | Header |
| J3 | Boot Mode |
| SW1 | Reset |
| SW2 | BOOTSEL |
| LD1~4 | LED indicators |

-----

## Prerequisites for Setup

### Software

- Configuration tool program ([Download page](./../../WIZ750SR/Download.md#wiznet-s2e-configuration-tool))
- TCP server / TCP client / UDP terminal program
- Serial terminal program

### Hardware

- WIZ505SR-RP module
- WIZ500/505SR-RP-EVB
- Ethernet cable
- DB9 serial RS-232 cable (for Data UART, RS-232/TTL Ver. only)
- Power source for device
  - Such as 5V DC adapter, USB port on your computer, or 3.3V Power source

:::tip
J1, J3 pins are not mounted.
:::

-----

## Connect Your WIZ505SR-RP

### WIZ505SR-RP Factory Settings

| Network Settings | Local  | IP address      | 192.168.11.2  | \-                |
| ---------------- | ------ | --------------- | ------------- | ----------------- |
| :::              | :::    | Gateway address | 192.168.11.1  | \-                |
| :::              | :::    | Subnet mask     | 255.255.255.0 | \-                |
| :::              | :::    | DNS server      | 8.8.8.8       | Google Public DNS |
| :::              | :::    | Port number     | 5000          | \-                |
| :::              | Remote | IP address      | 192.168.11.3  | \-                |
| :::              | :::    | Port number     | 5000          | \-                |

| Serial Port Settings | Data UART  | 115200-8-N-1 / Flow Control: None | \-    |
| -------------------- | ---------- | --------------------------------- | ----- |
| :::                  | Debug UART | 115200-8-N-1 / Flow Control: None | Fixed |

- Operation mode: **TCP server mode**
- Debug message: **Enabled**
- Serial command mode switch: **Enabled**
- Serial command mode switch code: **+++** (hex code, [2B][2B][2B])
- Data packing option - Time: **Disabled**
- Data packing option - Size: **Disabled**
- Data packing option - Char: **Disabled**
- Inactivity Timer: **Disabled**
- Reconnection Timer: **3 second**
- Keep-Alive: **Enabled, 7-sec initial delay, 5-sec send interval**

## PC Settings

Double check that the WIZ505SR-RP and the PC, or laptop you are using to set up WIZ505SR-RP with are both in the same Ethernet network.

#### Example: PC Network Settings

When the WIZ505SR-RP's settings are factory default,

<table>
<thead>
<tr class="header">
<th>Network Settings</th>
<th>PC or laptop<br />
(= Remote)</th>
<th>IP address</th>
<th>192.168.11.3</th>
<th>-</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>:::</td>
<td>:::</td>
<td>Gateway address</td>
<td>192.168.11.1</td>
<td>-</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>Subnet mask</td>
<td>255.255.255.0</td>
<td>-</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>:::</td>
<td>Port number</td>
<td>5000</td>
<td>-</td>
</tr>
</tbody>
</table>

- User should to matching the network settings of 'WIZ505SR-RP's remote host' and 'PC (or laptop)' for testing TCP client/mixed mode.
- If the DHCP(automatic IP allocation) is used, both the WIZ505SR-RP and test PC must be set to be assigned the same IP from the same router.

### Connecting Steps

The **WIZ500/505SR-RP-EVB** is designed to use the **DB9 connector** to connect with the user’s serial device. Therefore, it is recommended to have all **Ethernet and serial ports connected to the PC** when testing. If the PC does not have a serial port, please purchase a **RS-232 to USB converter** separately.

#### Step 1: Plug in

Connect the WIZ505SR-RP module to evaluation board WIZ500/505SR-RP-EVB and also the cable as shown in the picture below.

- Ethernet Cable
  - Used to connect the evaluation board’s RJ-45 connector and the PC’s Ethernet network interface card (PC's RJ-45 connector)
- Serial Cable
  - Used to connect the evaluation board’s DB9 connector and the serial interface card (DB9 connector). If the PC does support serial interface, use the RS-232 to USB converter.
- Optional: USB type B cable (for debug message)
  - Used to connect the evaluation board’s USB connector and the PC’s USB connector.

*Image to be added*

#### Step 2: Power on

Connect the 5V power adaptor or USB cable to the evaluation board and turn on the power switch.

- The power LED will turn red once the evaluation board is on.

*Image to be added*

#### Step 3: Search

Open the configuration tool and click the search button. If the board is turned on and connected to the same network, the MAC address or settings of the WIZ505SR-RP module can be checked using the configuration tool.

|                                                       |
| ----------------------------------------------------- |
| TO BE CHANGED <br />![](/img/products/wiz750sr/gettingstarted/configtool.png) |
| Figure: **WIZnet Configuration Tool**                 |

#### Step 4: Set up your WIZ505SR-RP

Change the settings accordingly to the customer’s environment. The test shown in this document is based on factory setting.

:::tip
Click **Apply Settings** button to save the changes in settings of the configuration tool.
:::

#### Step 5: Connect

Connect the PC as the TCP client of the user’s serial device for data communication testing. In order to do this, the serial terminal program / TCP client terminal program must be opened on the PC. The serial terminal program and TCP client program must be set as below.

- Serial terminal program: **115200-8-N-1, Flow control: None**
- TCP client program: **192.168.11.2:5000** (The IP address and port number of WIZ505SR-RP)

The COM port for serial terminal program connection can be checked as below.

- Control Panel -> System -> Device Manager

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/windows_devicemanager.png) |
| Figure: Device Manager                                           |

#### Step 6: Verify

The basic data communication of the WIZ505SR-RP can be verified as below.

- **Serial to Ethernet: data communication verification**
  - Enter the character string in the serial terminal and check if the identical character string appears on the TCP client terminal.
- **Ethernet to Serial: data communication verification**
  - Enter the character string in the TCP client terminal and check if the identical character string appears on the serial terminal. 

#### Step 7: Done

Now you’re ready to use the WIZ505SR-RP!

- This document is based on the **assumption of the PC as the serial device / remote network device**. 
- The next step is to **connect the WIZ505SR-RP module to the target serial device** and check if the device can **communicate, control, and monitor** via the **remote PC or monitoring server**.

-----

**If there is any problem?**

Please refer to our **[Troubleshooting guide](./../../WIZ750SR/Trouble-Shooting-EN.md)**!

-----