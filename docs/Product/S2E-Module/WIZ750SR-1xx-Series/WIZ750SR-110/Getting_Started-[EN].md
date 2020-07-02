---
id: getting_started-[EN]
title: Getting Started-[EN]
date: 2020-04-09
---

**Supported Languages**  
* [English](getting_started-[EN]) (current page)  
* [Korean](getting_started-[KO])

![](/img/products/wiz750sr/docs_icon.png)

-----

**This section was written on the assumption that the use of WIZ750SR-110 Module.**

-----

## Unpacking the WIZ750SR-110

### What's in the Box?

<!--
|                                                    |
| -------------------------------------------------- |
|                                                    |
| Figure: ***WIZ750SR-110 Rev. 1.0 Module Package*** |
-->

The WIZ750SR-110 evaluation board package contains the following parts.

  - WIZ750SR-110 RS-232C Module
  - Cables (Ethernet / Serial)

The entire list of parts of the board is available at the [WIZ750SR-110
Overview: Product
Contents](overview-[EN]#product-contents) page.

### Device Layout

|                                                                               |
| ----------------------------------------------------------------------------- |
| ![](/img/products/wiz750sr-110/gettingstarted/wiz750sr-110_device_layout_top.png) |
| Figure: ***WIZ750SR-110 Revision 1.0 Top***                                   |

|                                                                                  |
| -------------------------------------------------------------------------------- |
| ![](/img/products/wiz750sr-110/gettingstarted/wiz750sr-110_device_layout_bottom.png) |
| Figure: ***WIZ750SR-110 Revision 1.0 Bottom***                                   |

### Parts

  - ARM Cortex-M0 based Hardwired TCP/IP core plus PHY Ethernet MCU
    **W7500** \[1\] \[1\]
  - **PHY(Single 10/100M Ethernet Transceiver)** \[2\]
  - **Ethernet Connector** for connecting to LAN Cable \[3\]
  - **PNP Transistor** for UART trans/receive indicate \[4\]
  - **Access to Boot mode Switch** from App mode \[5\]
  - **Access to AT command mode Switch** from App mode \[6\]
  - **Transceiver** for convert TTL to RS-232C \[7\]
  - **RS-232C Connector(D-SUB9 Port)** \[8\]
  - **Data Flash** for saving device data \[9\]
  - **SWD(JTAG) port for use hardware debug port** \[10\]
  - **Access to ISP mode Switch** \[11\]
  - **Reset Button** \[12\]
  - **Reset IC** \[13\]
  - **EEPROM** for saving device setting \[14\]
  - **Expansion ISP Port** for firmware download \[15\]
  - **Expansion GPIO Port** for 4-Pins user I/O \[16\]
  - **LDO** for convert 5V to 3.3V power \[17\]
  - **DC-JACK** for connect 5V 2A adaptor \[18\]
  - **ESD Protect IC** for protecting ethernet signal \[19\]

### Interfaces and Ports

- **Data Port(RS-232C)**: D-SUB9 Port
- **Network Port**: RJ-45 Ethernet Connector
- **User's Optional Port**: 1x6 2.54mm Pin header 2ea (Debug UART2 pins(ISP) / 4-Pins user I/O)

-----

## Prerequisites for Setup

### Software

  - Configuration tool program ([Download
    page](../../WIZ750SR/download))
  - TCP server / TCP client / UDP terminal program
  - Serial terminal program

### Hardware

  - Your WIZ750SR-110 module
  - Ethernet cable 
  - USB type B cable (for Debug UART)
  - DB9 serial RS-232 cable (for Data UART, RS-232/TTL Ver. only)
  - Power source for device
      - Such as 5V DC adapter, USB port on your computer, or 3.3V Power
        source
  - ** UART2 pin is not mounted. Therefore, users can download ISP by
    using 'USB to UART module' to J2 connector. **

-----

## Connect Your WIZ750SR-110

### WIZ750SR-110 Factory Settings

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
  - Serial command mode switch code: **+++** (hex code,
    \[2B\]\[2B\]\[2B\])



  - Data packing option - Time: **Disabled**
  - Data packing option - Size: **Disabled**
  - Data packing option - Char: **Disabled**



  - Inactivity Timer: **Disabled**
  - Reconnection Timer: **3 second**
  - Keep-Alive: **Enabled, 7-sec initial delay, 5-sec send interval**

### PC Settings

Double check that the WIZ750SR-110
and the PC, or laptop you are using to set up WIZ750SR-110 with are both
on the same Ethernet network.

#### Example: PC Network Settings

\* When the WIZ750SR-110's settings are factory default,

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

  - User should to matching the network settings of 'WIZ750SR-110's
    remote host' and 'PC (or laptop)' for testing TCP client/mixed mode.



  - If the DHCP(automatic IP allocation) is used, both the WIZ750SR-110
    and test PC must be set to be assigned the same IP from the same
    router.

### Connecting Steps

The **WIZ750SR-110-EVB** is designed
to use the **DB9 connector** to connect with the user’s serial device.
Therefore, it is recommended to have all **Ethernet and serial ports
connected to the PC** when testing. If the PC does not have a serial
port, please purchase a **RS-232 to USB converter** separately.



#### Step 1: Plug in

Connect the WIZ750SR-110 module to evaluation board and also the cable
as shown in the picture below.

  - Ethernet Cable
      - Used to connect the evaluation board’s RJ-45 connector and the
        PC’s Ethernet network interface card (PC's RJ-45 connector)



  - Serial Cable
      - Used to connect the evaluation board’s DB9 connector and the
        serial interface card (DB9 connector). If the PC does support
        serial interface, use the RS-232 to USB converter.



  - Optional: USB type B cable (for debug message)
      - Used to connect the evaluation board’s USB connector and the
        PC’s USB connector.

<!--
|                                           |
| ----------------------------------------- |
|                                           |
| Figure: **Combining WIZ750SR-110 module** |

|                                    |
| ---------------------------------- |
|                                    |
| Figure: **WIZ750SR-110 side view** |
-->

#### Step 2: Power on

Connect the 5V power adaptor or USB cable to the evaluation board and
turn on the power switch.

  - The power LED will turn red once the evaluation board is on.

#### Step 3: Search

Open the configuration tool and click the search button. If the board is
turned on and connected to the same network, the MAC address or settings
of the WIZ750SR-110 module can be checked using the configuration tool.

|                                                       |
| ----------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/configtool.png) |
| Figure: **WIZnet Configuration Tool**                 |

#### Step 4: Set up your WIZ750SR-110

Change the settings accordingly to the customer’s environment. The test
shown in this document is based on factory setting.

``` 
  * Click the **setting** button to apply the changes in settings of the configuration tool.
```

#### Step 5: Connect

Connect the PC as the TCP client of the user’s serial device for data
communication testing. In order to do this, the serial terminal program
/ TCP client terminal program must be opened on the PC. The serial
terminal program and TCP client program must be set as below.

  - Serial terminal program: **115200-8-N-1, Flow control: None**
  - TCP client program: **192.168.11.2:5000** (The IP address and port
    number of WIZ750SR-110)

The COM port for serial terminal program connection can be checked as
below.

  - Control Panel \> System \> Device Manager

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/img/products/wiz750sr/gettingstarted/windows_devicemanager.png) |
| Figure: Device Manager                                           |

#### Step 6: Verify

The basic data communication of the WIZ750SR-110 can be verified as
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

Now you’re ready to use the WIZ750SR-110\!

  - This document is based on the **assumption of the PC as the serial
    device / remote network device**. 



  - The next step is to **connect the WIZ750SR-110 module to the target
    serial device** and check if the device can **communicate, control,
    and monitor** via the **remote PC or monitoring server**.

-----

**If there is any problem?**  
Please refer to our **[Troubleshooting
Guide](../../WIZ750SR/trouble_shooting-[EN])**\!

-----

## Navigation

-----

WIZ750SR series Common Documents 

  - **User's Manual [(English)](/docs/Product/S2E-Module/WIZ750SR/users_manual-[EN])/[(Korean)](/docs/Product/S2E-Module/WIZ750SR/users_manual-[KO])** 
  
  - **Device Command Manual [(English)](../../WIZ750SR/command_manual-[EN])/[(Korean)](../../WIZ750SR/command_manual-[KO])**
  
  - **Troubleshooting Guide [(English)](../../WIZ750SR/trouble_shooting-[EN])/[(Korean)](../../WIZ750SR/trouble_shooting-[KO])**
  
  - **Update History [(English)](../../WIZ750SR/series_update_history-[EN])/[(Korean)](../../WIZ750SR/series_update_history-[KO])**
  
-----

**WIZ750SR series Downloads** 

  - **[Software Download](../../WIZ750SR/download)**
  - **[Technical References](../../WIZ750SR/technical_references)**

-----
