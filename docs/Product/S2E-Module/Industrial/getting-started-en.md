---
id: getting-started
title: Getting Started
date: 2024-07-30
keywords: [wiznet, w55rp20,w232n datasheet, hardwired tcp/ip,serial-to-ethernet, w5500, rp2040]
description: W232N is a industrial serial to Ethernet module using the W55RP20
---

## Unpacking the W232N

### What's in the Box?

The W232N package contains the following parts.

<img src="/img/products/w232n/W232_Rail_mount.png" width="400" />
  - W232N
  - 5V 2A Power adapter
  - Ethernet cable


### Device Layout

|                                                                       |
| --------------------------------------------------------------------- |
| ![](/img/products/s2e_module/wiz500sr-rp/wiz500sr-rp-callout-top.png) |
| Figure: ***WIZ500SR-RP Revision 1.0 Top***                            |


### connector pin map

<img src="/img/products/w232n/W232_Rail_mount.png" width="400" />

| Pin Number | Signal | Description                  |
|------------|--------|------------------------------|
| 1          | DCD    | NC                           |
| 2          | RXD    | Receive Data                 |
| 3          | TXD    | Transmit Data                |
| 4          | DTR    | Transmit Data                |
| 5          | GND    | System Ground(Signal Ground) |
| 6          | DSR    | Receive Data                 |
| 7          | RTS    | Request To Send              |
| 8          | CTS    | Clear To Send                |
| 9          | RI     | NC                           |

-   W232N supports 6 signals. (TXD, RXD, CTS, RTS, DTR, DSR)

<img src="/img/products/w232n/serial.png" width="600" />

-----

## Prerequisites for Setup

### Software

- Configuration tool program ([Download page](./../../WIZ750SR/Download.md#wiznet-s2e-configuration-tool))
- TCP server / TCP client / UDP terminal program
- Serial terminal program



-----

## Connect Your W232N

### W232N Factory Settings

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

Double check that the W232N and the PC, or laptop you are using to set up W232N with are both in the same Ethernet network.

#### Example: PC Network Settings

When the W232N settings are factory default,

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

- User should to matching the network settings of 'W232N's remote host' and 'PC (or laptop)' for testing TCP client/mixed mode.
- If the DHCP(automatic IP allocation) is used, both the W232N and test PC must be set to be assigned the same IP from the same router.

### Connecting Steps


#### Step 1: Plug in


- Ethernet Cable
  - W232N's RJ-45 connector and the PC’s Ethernet network interface card (PC's RJ-45 connector)
- Serial Cable
  - W232N’s DB9 connector and the serial interface card (DB9 connector). If the PC does support serial interface, use the RS-232 to USB converter.
- Optional: UART to USB converter (for debug message)
  - W232N has debug pin(J4)


#### Step 2: Power on

Connect the 5V~36V power to W232N's DC jack or Terminal.

- The power LED will turn red.

*Image to be added*

#### Step 3: Search

Open the configuration tool and click the search button. If the board is turned on and connected to the same network, the MAC address and settings of the W232N can be checked using the configuration tool.

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| ![](/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/configuration_tool_for_wiz5xxsr-rp.png) |
| Figure: **WIZnet Configuration Tool**                                                                      |

#### Step 4: Set up your WIZ500SR-RP

Change the settings accordingly to the customer’s environment. The test shown in this document is based on factory setting.

:::tip
Click **Apply Settings** button to save the changes in settings of the configuration tool.
:::

#### Step 5: Connect

Connect the PC as the TCP client of the user’s serial device for data communication testing. In order to do this, the serial terminal program / TCP client terminal program must be opened on the PC. The serial terminal program and TCP client program must be set as below.

- Serial terminal program: **115200-8-N-1, Flow control: None**
- TCP client program: **192.168.11.2:5000** (The IP address and port number of WIZ500SR-RP)

The COM port for serial terminal program connection can be checked as below.

- Control Panel -> System -> Device Manager

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/windows_devicemanager.png) |
| Figure: Device Manager                                           |

#### Step 6: Verify

The basic data communication of the WIZ500SR-RP can be verified as below.

- **Serial to Ethernet: data communication verification**
  - Enter the character string in the serial terminal and check if the identical character string appears on the TCP client terminal.
- **Ethernet to Serial: data communication verification**
  - Enter the character string in the TCP client terminal and check if the identical character string appears on the serial terminal. 

#### Step 7: Done

Now you’re ready to use the WIZ500SR-RP!

- This document is based on the **assumption of the PC as the serial device / remote network device**. 
- The next step is to **connect the WIZ500SR-RP module to the target serial device** and check if the device can **communicate, control, and monitor** via the **remote PC or monitoring server**.

-----

**If there is any problem?**

Please refer to our **[Troubleshooting guide](./../../WIZ750SR/Trouble-Shooting-EN.md)**!

-----