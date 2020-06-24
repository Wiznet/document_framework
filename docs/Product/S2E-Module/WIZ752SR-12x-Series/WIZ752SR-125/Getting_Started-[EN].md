---
id: getting_started_guide-[EN]
title: Getting Started Guide-[EN]
date: 2020-04-15
---



# Getting Started with WIZ752SR-125

 **Supported Languages**  
* [English](Getting_Started-[EN].md) (current page)  
* [Korean](Getting_Started-[KO].md)

![](/img/products/wiz750sr/docs_icon.png)

-----

* **This section was written on the assumption that based on the use
of the WIZ120SR evaluation board using the WIZ752SR-125 module.**

-----

## Unpacking the WIZ752SR-125

### What's in the Box?

|                                                          |
| -------------------------------------------------------- |
| ![](/)                                                   |
| Figure: ***WIZ752SR-125 V1.0 Evaluation Board Package*** |

The WIZ752SR-125 evaluation board package contains the following parts.

  - WIZ752SR-120 Module
  - Cables (Ethernet / Serial)
  - DC 5V/2A adapter

The entire list of parts of the board is available at the [WIZ752SR-125
Overview: Product
Contents](/products/s2e_module/wiz752sr-125/overview/en#product_contents)
page.

## Prerequisites for Setup

### Software

  - Configuration tool program (\[\[|Download page\]\])
  - TCP server / TCP client / UDP terminal program
  - Serial terminal program

### Hardware

  - Your WIZ752SR-125 module
  - Ethernet cable 
  - DB9 serial RS-232 cable
  - 5V/2A DC adapter

-----

## Connect Your WIZ752SR-125

### WIZ752SR-125 Factory Settings

| Network Settings | Local  | IP address      | 192.168.11.2  | \-                |
| ---------------- | ------ | --------------- | ------------- | ----------------- |
| :::              | :::    | Gateway address | 192.168.11.1  | \-                |
| :::              | :::    | Subnet mask     | 255.255.255.0 | \-                |
| :::              | :::    | DNS server      | 8.8.8.8       | Google Public DNS |
| :::              | :::    | Port0 number    | 5000          | \-                |
| :::              | :::    | Port1 number    | 5001          | \-                |
| :::              | Remote | IP address      | 192.168.11.3  | \-                |
| :::              | :::    | Port0 number    | 5000          | \-                |
| :::              | :::    | Port1 number    | 5001          | \-                |

| Serial Port Settings | RS-232C-1 | 115200-8-N-1 / Flow Control: None | \- |
| -------------------- | --------- | --------------------------------- | -- |
| :::                  | RS-232C-2 | 115200-8-N-1 / Flow Control: None | \- |

| User's I/O Settings | UserIO A | Analog / Input   | Read only    |
| ------------------- | -------- | ---------------- | ------------ |
| :::                 | UserIO B | Digital / Input  | Read only    |
| :::                 | UserIO C | Digital / Output | Read / Write |
| :::                 | UserIO D | Digital / Output | Read / Write |

  - Operation mode: **TCP server mode**
  - Debug message: **Enabled**
  - Serial command mode switch: **Enabled**
  - Serial command mode switch code: **+++** (hex code,
    \[2B\]\[2B\]\[2B\])



  - Data packing option - Time: **Disabled**
  - Data packing option - Size: **Disabled**
  - Data packing option - Char: **Disabled**



  - Inactivity Timer: **Disabled**
  - Reconnection Timer: **3 second**
  - Keep-Alive: **Enabled, 7-sec initial delay, 5-sec send interval**

### PC Settings

Double check that the WIZ752SR-120
and the PC, or laptop you are using to set up WIZ752SR-120 with are both
on the 5same Ethernet network.

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

  - User should to matching the network settings of 'WIZ750SR-120's
    remote host' and 'PC (or laptop)' for testing TCP client/mixed mode.



  - If the DHCP(automatic IP allocation) is used, both the WIZ752SR-120
    and test PC must be set to be assigned the same IP from the same
    router.

### Connecting Steps

The **WIZ752SR-125** is designed to
use the **DB9 connector** to connect with the user’s serial device.
Therefore, it is recommended to have all **Ethernet and serial ports
connected to the PC** when testing. If the PC does not have a serial
port, please purchase a **RS-232 to USB converter** separately.



#### Step 1: Plug in

Connect the WIZ752SR-125 module to the cable as shown in the picture
below.

  - Ethernet Cable
      - Used to connect the evaluation board’s RJ-45 connector and the
        PC’s Ethernet network interface card (PC's RJ-45 connector)



  - Serial Cable
      - Used to connect the evaluation board’s DB9 connector and the
        serial interface card (DB9 connector). If the PC does support
        serial interface, use the RS-232 to USB converter.

|                                           |
| ----------------------------------------- |
| ![]()                                     |
| Figure: **Combining WIZ752SR-125 module** |

#### Step 2: Power on

Connect the 5V power adaptor to the evaluation board and turn on the
power switch.

  - The power LED will turn red once the evaluation board is on.

#### Step 3: Search

Open the configuration tool and click the search button.  
If the board is turned on and connected to the same network, the MAC
address or settings of the WIZ752SR-125 module can be checked using the
configuration tool.

|                                                                     |
| ------------------------------------------------------------------- |
| ![](/img/products/s2e_module/wiz752sr-120/gettingstarted/01_search.png) |
| Figure: **WIZnet Configuration Tool**                               |

#### Step 4: Set up your WIZ752SR-125

Change the settings accordingly to the customer’s environment. The test
shown in this document is based on factory setting.

#### Step 5: Connect

Connect the PC as the TCP client of the user’s serial device for data
communication testing. In order to do this, the serial terminal program
/ TCP client terminal program must be opened on the PC. The serial
terminal program and TCP client program must be set as below.

  - Serial terminal program: **115200-8-N-1, Flow control: None**
  - TCP client program: **192.168.11.2:5000** (The IP address and port
    number of WIZ750SR)

The COM port for serial terminal program connection can be checked as
below.

  - Control Panel \> System \> Device Manager

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/windows_devicemanager.png) |
| Figure: Device Manager                                           |

#### Step 6: Verify

The basic data communication of the WIZ752SR-125 can be verified as
below.

  - **Serial to Ethernet: data communication verification**
      - Enter the character string in the serial terminal and check if
        the identical character string appears on the TCP client
        terminal.



  - **Ethernet to Serial: data communication verification**
      - Enter the character string in the TCP client terminal and check
        if the identical character string appears on the serial
        terminal. 

#### Step 7: Done

Now you’re ready to use the WIZ752SR-125\!

  - This document is based on the **assumption of the PC as the serial
    device / remote network device**. 



  - The next step is to **connect the WIZ752SR-125 module to the target
    serial device** and check if the device can **communicate, control,
    and monitor** via the **remote PC or monitoring server**.

-----

**If there is any problem?**  
Please refer to our **[Troubleshooting
Guide](trouble_shooting-[EN])**\!

-----
