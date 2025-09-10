---
id: getting-started-EN
title: Getting Started-[EN]
date: 2020-04-08
---

**Supported Languages**
  * [English](./Getting-Started-EN) (current page)  
  * [Korean](./Getting-Started-KO)

![](/img/products/wiz750sr/docs_icon.png)

-----

**This section was written on the assumption that the use of WIZ750SR-RS232 evaluation board.**

-----

## Unpacking the WIZ750SR Evaluation Kit

### What's in the Box?

|                                                                              |
| ---------------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr-ttl-evb_package_1024x858.jpg) |
| Figure: ***WIZ750SR Rev. 1.1 Evaluation Board Package***                     |

The WIZ750SR-232 evaluation board package contains the following parts.

  - WIZ750SR-232 Module
  - WIZ750SR-232/TTL-EVB Evaluation Board
  - Cables (Ethernet / Serial / Micro USB Type B)


### Device Layout

|                                                                      |
| -------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr_top_parts_rev1.2.png) |
| Figure: ***WIZ750SR Revision 1.1 Top***                              |

|                                                                         |
| ----------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr_bottom_parts_rev1.2.png) |
| Figure: ***WIZ750SR Revision 1.1 Bottom***                              |

### Parts

  - ARM Cortex-M0 based Hardwired TCP/IP core plus PHY Ethernet MCU
    **W7500P** \[1\] \[1\]
  - **Reset IC** \[3\]
  - **Power LED**(red) \[4\]
  - **Status LED** (blue: PHY link status / green: TCP connection
    status) \[5\]
  - **4-Channel ESD Protection IC** \[6\]
  - **RS-422/485 Transceiver** (Optional, WIZ750SR-RS485 module mount
    only) \[7\]
  - **RS-232 Transceiver** (Optional, WIZ750SR-RS232 module mount only)
    \[8\]

### Interfaces and Ports

  - **Ethernet Network Connector**: RJ-45 with transformer \[2\]
  - **Data UART Port**: 6x2 2.54mm Pin header
  - **Debug UART Port**: 6x1 2.54mm Pin header (Debug UART pins and MCU
    boot pin / GND)
  - **User I/O Pins**: 6x1 2.54mm Pin header (4-Pins user I/O and
    application boot pin / GND)

-----

## Prerequisites for Setup

### Software

  - Configuration tool program ([Download page](./Download))
  - TCP server / TCP client / UDP terminal program
  - Serial terminal program

### Hardware

  - Your WIZ750SR module and Evaluation board
  - Ethernet cable 
  - USB type B cable (for Debug UART)
  - DB9 serial RS-232 cable (for Data UART, RS-232/TTL Ver. only)
  - Power source for device
      - Such as 5V DC adapter, USB port on your computer, or 3.3V Power source

-----

## Connect Your WIZ750SR

### WIZ750SR Factory Settings

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

| User's I/O Settings | UserIO A | Analog / Input   | Read only    |
| ------------------- | -------- | ---------------- | ------------ |
| :::                 | UserIO B | Digital / Input  | Read only    |
| :::                 | UserIO C | Digital / Output | Read / Write |
| :::                 | UserIO D | Digital / Output | Read / Write |

  - Operation mode: **TCP server mode**
  - Debug message: **Enabled**
  - Serial command mode switch: **Enabled**
  - Serial command mode switch code: **+++** (hex code, \[2B\]\[2B\]\[2B\])



  - Data packing option - Time: **Disabled**
  - Data packing option - Size: **Disabled**
  - Data packing option - Char: **Disabled**



  - Inactivity Timer: **Disabled**
  - Reconnection Timer: **3 second**
  - Keep-Alive: **Enabled, 7-sec initial delay, 5-sec send interval**
  
  ### PC Settings

Double check that the WIZ750SR and the PC, or laptop you are using to set up WIZ750SR with are both on the same Ethernet network.

#### Example: PC Network Settings

\* When the WIZ750SR's settings are factory default,

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

  - User should to matching the network settings of 'WIZ750SR's remote host' and 'PC (or laptop)' for testing TCP client/mixed mode.



  - If the DHCP(automatic IP allocation) is used, both the WIZ750SR and test PC must be set to be assigned the same IP from the same router.

### Connecting Steps

The **RS-232/TTL version of WIZ750SR-EVB** is designed to use the **DB9 connector** to connect with the user’s serial device. Therefore, it is recommended to have all
**Ethernet and serial ports connected to the PC** when testing. If the PC does not have a serial port, please purchase a **RS-232 to USB converter** separately.

  - **In case of the RS-422/455 version of WIZ750SR-EVB, the serial connector is composed of terminal block.**



#### Step 1: Plug in

Connect the WIZ750SR module to evaluation board and also the cable as shown in the picture below.

  - Ethernet Cable
      - Used to connect the evaluation board’s RJ-45 connector and the PC’s Ethernet network interface card (PC's RJ-45 connector)



  - Serial Cable
      - Used to connect the evaluation board’s DB9 connector and the serial interface card (DB9 connector). If the PC does support serial interface, use the RS-232 to USB converter.



  - Optional: USB type B cable (for debug message)
      - Used to connect the evaluation board’s USB connector and the PC’s USB connector.

|                                                                        |
| ---------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr-ttl-evb_1_1024x816.png) |
| Figure: **Combining WIZ750SR module and EVB**                          |

|                                                                        |
| ---------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/wiz750sr-ttl-evb_2_1024x816.png) |
| Figure: **WIZ750SR-EVB side view**                                     |

#### Step 2: Power on

Connect the 5V power adaptor or USB cable to the evaluation board and turn on the power switch.

  - The power LED will turn red once the evaluation board is on.

#### Step 3: Search

Open the configuration tool and click the search button. If the board is turned on and connected to the same network, the MAC address or settings of the WIZ750SR module can be checked using the configuration tool.

**The new WIZ750SR configuration tool can be downloaded from Github below.**

  - https://github.com/Wiznet/WIZnet-S2E-Tool-GUI
  - https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases



|                                                       |
| ----------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/configtool.png) |
| Figure: **WIZnet Configuration Tool**                 |

#### Step 4: Set up your WIZ750SR

Change the settings accordingly to the customer’s environment. The test shown in this document is based on factory setting.


  * Click the **setting** button to apply the changes in settings of the configuration tool.


#### Step 5: Connect

Connect the PC as the TCP client of the user’s serial device for data communication testing. In order to do this, the serial terminal program / TCP client terminal program must be opened on the PC. The serial terminal program and TCP client program must be set as below.

  - Serial terminal program: **115200-8-N-1, Flow control: None**
  - TCP client program: **192.168.11.2:5000** (The IP address and port number of WIZ750SR)

The COM port for serial terminal program connection can be checked as below.

  - Control Panel \> System \> Device Manager

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/windows_devicemanager.png) |
| Figure: Device Manager                                           |

#### Step 6: Verify

The basic data communication of the WIZ750SR can be verified as below.

  - **Serial to Ethernet: data communication verification**
      - Enter the character string in the serial terminal and check if the identical character string appears on the TCP client terminal.



  - **Ethernet to Serial: data communication verification**
      - Enter the character string in the TCP client terminal and check if the identical character string appears on the serial terminal. 

#### Step 7: Done

Now you’re ready to use the WIZ750SR!

  - This document is based on the **assumption of the PC as the serial device / remote network device**. 



  - The next step is to **connect the WIZ750SR module to the target serial device** and check if the device can **communicate, control, and monitor** via the **remote PC or monitoring server**.

-----

**If there is any problem?**  
Please refer to our **[Troubleshooting Guide](./Trouble-Shooting-EN)**!

-----
