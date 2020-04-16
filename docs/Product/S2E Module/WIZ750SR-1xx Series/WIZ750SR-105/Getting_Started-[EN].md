---
id: getting_started-[EN]
title: Getting Started-[EN]
date: 2020-04-09
---

## Content

# Getting Started with WIZ750SR-105

\*\* Supported Languages \*\*  
\* [English](/products/wiz750sr-105/gettingstarted/en) (current page)  
\* [Korean](/products/wiz750sr-105/gettingstarted/ko)

![](/products/wiz750sr/docs_icon.png)

-----

\*\* \* This section was written on the assumption that the use of
WIZ750SR-105-EVB evaluation board.\*\*

-----

## Unpacking the WIZ750SR-105

### What's in the Box?

|                                                              |
| ------------------------------------------------------------ |
|                                                              |
| Figure: ***WIZ750SR-105 Rev. 1.0 Evaluation Board Package*** |

The WIZ750SR-105 evaluation board package contains the following parts.

  - WIZ750SR-105 TTL Module
  - WIZ105SR-EVB Evaluation Board (RS-232C interface)
  - Cables (Ethernet / Serial)

The entire list of parts of the board is available at the [WIZ750SR-105
Overview: Product
Contents](/products/wiz750sr-105/overview/en#product_contents) page.

### Device Layout

|                                                                               |
| ----------------------------------------------------------------------------- |
| ![](/products/wiz750sr-105/gettingstarted/wiz750sr-105_device_layout_top.png) |
| Figure: ***WIZ750SR-105 Revision 1.0 Top***                                   |

|                                                                                  |
| -------------------------------------------------------------------------------- |
| ![](/products/wiz750sr-105/gettingstarted/wiz750sr-105_device_layout_bottom.png) |
| Figure: ***WIZ750SR-105 Revision 1.0 Bottom***                                   |

### Parts

\* ARM Cortex-M0 based Hardwired TCP/IP core plus PHY Ethernet MCU
**W7500** \[1\] \[1\]

  - **PHY(Single 10/100M Ethernet Transceiver)** \[2\]
  - **Ethernet Connector** for connecting to LAN Cable \[3\]
  - **PNP Transistor** for UART trans/receive indicate \[4\]
  - **Access to Boot mode Switch** from App mode \[5\]
  - **Access to ISP mode Switch** \[6\]
  - **Data Transmit Port(TTL level)** \[7\]
  - **Buffer IC** \[8\]
  - **Data Flash** for saving device data \[9\]
  - **SWD(JTAG) port for use hardware debug port** \[10\]
  - **Reset IC** \[11\]
  - **EEPROM** for saving device setting \[12\]
  - **Expansion ISP Port** for firmware download \[13\]
  - **Expansion GPIO Port** for 4-Pins user I/O \[14\]
  - **ESD Protect IC** for protecting ethernet signal \[15\]

### Interfaces and Ports

  - **Data Port(TTL)**: 2x6 2.00mm pitch SMD pin-header
  - **Network Port**: RJ-45 Ethernet Connector
  - **User's Optional Port**: 1x6 2.54mm Pin header 2ea (Debug UART2
    pins(ISP) / 4-Pins user I/O)

-----

## Prerequisites for Setup

### Software

  - Configuration tool program ([Download
    page](/products/wiz750sr/download/start))
  - TCP server / TCP client / UDP terminal program
  - Serial terminal program

### Hardware

  - Your WIZ750SR-105 module and Evaluation board
  - Ethernet cable 
  - USB type B cable (for Debug UART)
  - DB9 serial RS-232 cable (for Data UART, RS-232/TTL Ver. only)
  - Power source for device
      - Such as 5V DC adapter, USB port on your computer, or 3.3V Power
        source
  - \*\* UART2 pin is not mounted. Therefore, users can download ISP by
    using 'USB to UART module' to J2 connector. \*\*

-----

## Connect Your WIZ750SR-105

1.  W7500/W7500P are One-chip Ethernet MCU solution based on [ARM
    Cortex-M0
    architecture](http://www.arm.com/products/processors/cortex-m/cortex-m0.php)
    plus WIZnet hardwired TCP/IP core include Ethernet PHY. For more
    details, please refer to [W7500 product page](/products/w7500/start)
    
    ### WIZ750SR-105 Factory Settings

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

<!-- end list -->

  - Data packing option - Time: **Disabled**
  - Data packing option - Size: **Disabled**
  - Data packing option - Char: **Disabled**

<!-- end list -->

  - Inactivity Timer: **Disabled**
  - Reconnection Timer: **3 second**
  - Keep-Alive: **Enabled, 7-sec initial delay, 5-sec send interval**

### PC Settings

\<WRAP center round important 80%\> Double check that the WIZ750SR-105
and the PC, or laptop you are using to set up WIZ750SR-105 with are both
on the same Ethernet network. \</WRAP\>

#### Example: PC Network Settings

\* When the WIZ750SR-105's settings are factory default,

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

  - User should to matching the network settings of 'WIZ750SR-105's
    remote host' and 'PC (or laptop)' for testing TCP client/mixed mode.

<!-- end list -->

  - If the DHCP(automatic IP allocation) is used, both the WIZ750SR-105
    and test PC must be set to be assigned the same IP from the same
    router.

### Connecting Steps

\<WRAP center round important 80%\> The **WIZ750SR-105-EVB** is designed
to use the **DB9 connector** to connect with the user’s serial device.
Therefore, it is recommended to have all **Ethernet and serial ports
connected to the PC** when testing. If the PC does not have a serial
port, please purchase a **RS-232 to USB converter** separately.

\</WRAP\>

#### Step 1: Plug in

Connect the WIZ750SR-105 module to evaluation board and also the cable
as shown in the picture below.

  - Ethernet Cable
      - Used to connect the evaluation board’s RJ-45 connector and the
        PC’s Ethernet network interface card (PC's RJ-45 connector)

<!-- end list -->

  - Serial Cable
      - Used to connect the evaluation board’s DB9 connector and the
        serial interface card (DB9 connector). If the PC does support
        serial interface, use the RS-232 to USB converter.

<!-- end list -->

  - Optional: USB type B cable (for debug message)
      - Used to connect the evaluation board’s USB connector and the
        PC’s USB connector.

|                                                   |
| ------------------------------------------------- |
|                                                   |
| Figure: **Combining WIZ750SR-105 module and EVB** |

|                                        |
| -------------------------------------- |
|                                        |
| Figure: **WIZ750SR-105-EVB side view** |

#### Step 2: Power on

Connect the 5V power adaptor or USB cable to the evaluation board and
turn on the power switch.

  - The power LED will turn red once the evaluation board is on.

#### Step 3: Search

Open the configuration tool and click the search button. If the board is
turned on and connected to the same network, the MAC address or settings
of the WIZ750SR-105 module can be checked using the configuration tool.

|                                                       |
| ----------------------------------------------------- |
| ![](/products/wiz750sr/gettingstarted/configtool.png) |
| Figure: **WIZnet Configuration Tool**                 |

#### Step 4: Set up your WIZ750SR-105

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
    number of WIZ750SR-105)

The COM port for serial terminal program connection can be checked as
below.

  - Control Panel \> System \> Device Manager

|                                                                  |
| ---------------------------------------------------------------- |
| ![](/products/wiz750sr/gettingstarted/windows_devicemanager.png) |
| Figure: Device Manager                                           |

#### Step 6: Verify

The basic data communication of the WIZ750SR-105 can be verified as
below.

  - **Serial to Ethernet: data communication verification**
      - Enter the character string in the serial terminal and check if
        the identical character string appears on the TCP client
        terminal.

<!-- end list -->

  - **Ethernet to Serial: data communication verification**
      - Enter the character string in the TCP client terminal and check
        if the identical character string appears on the serial
        terminal. 

#### Step 7: Done

Now you’re ready to use the WIZ750SR-105\!

  - This document is based on the **assumption of the PC as the serial
    device / remote network device**. 

<!-- end list -->

  - The next step is to **connect the WIZ750SR-105 module to the target
    serial device** and check if the device can **communicate, control,
    and monitor** via the **remote PC or monitoring server**.

-----

\<WRAP center round tip 80% centeralign\> **If there is any problem?**  
Please refer to our **[Troubleshooting
Guide](/products/wiz750sr/troubleshooting/en)**\! \</WRAP\>

-----

## Navigation

-----

\<WRAP group\> \<WRAP centeralign third column\>
[![arrow\_back.png](/etc/arrow_back.png)](/products/wiz750sr-105/overview/en)  
**Prev Page**  
[Product Overview](/products/wiz750sr-105/overview/en) \</WRAP\>

\<WRAP centeralign third column\>
[![arrow\_upward.png](/etc/arrow_upward.png)](#getting_started_with_wiz750sr-105)  
**Scroll to Top** \</WRAP\>

\<WRAP centeralign third column\>
[![arrow\_forward.png](/etc/arrow_forward.png)](/products/wiz750sr/usermanual/en)  
**Next Page**  
[User's Manual](/products/wiz750sr/usermanual/en) \</WRAP\> \</WRAP\>

\<WRAP centeralign\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-105/start)  
**Back to Product Main** \</WRAP\>

-----

\<WRAP round box group\> \<WRAP half column\> \<WRAP centeralign\> \*\*
WIZ750SR series Common Documents \*\* \</WRAP\>

  - **[User's Manual](/products/wiz750sr/usermanual/en)** 

<!-- end list -->

  - **[Device Command Manual](/products/wiz750sr/commandmanual/en)**

<!-- end list -->

  - **[Troubleshooting Guide](/products/wiz750sr/troubleshooting/en)**

<!-- end list -->

  - **[Update History](/products/wiz750sr/history/en)**

-----

\<WRAP centeralign\> \*\* WIZ750SR series Downloads \*\* \</WRAP\>

  - **[Software Downloads](/products/wiz750sr/download/start)**

<!-- end list -->

  - **[Technical Reference](/products/wiz750sr/reference/start)**

\</WRAP\>

\<WRAP half column\> \<WRAP centeralign\> \*\* WIZ750SR Individual
documents \*\* \</WRAP\>

  - **[WIZ750SR Product Overview](/products/wiz750sr/overview/en)**
  - **[WIZ750SR Getting Started
    Guide](/products/wiz750sr/gettingstarted/en)**
  - **[WIZ750SR Datasheet](/products/wiz750sr/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-100 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-100 Product
    Overview](/products/wiz750sr-100/overview/en)**
  - **[WIZ750SR-100 Getting Started
    Guide](/products/wiz750sr-100/gettingstarted/en)**
  - **[WIZ750SR-100 Datasheet](/products/wiz750sr-100/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-105 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-105 Product
    Overview](/products/wiz750sr-105/overview/en)**
  - **[WIZ750SR-105 Getting Started
    Guide](/products/wiz750sr-105/gettingstarted/en)**
  - **[WIZ750SR-105 Datasheet](/products/wiz750sr-105/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-110 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-110 Product
    Overview](/products/wiz750sr-110/overview/en)**
  - **[WIZ750SR-110 Getting Started
    Guide](/products/wiz750sr-110/gettingstarted/en)**
  - **[WIZ750SR-110 Datasheet](/products/wiz750sr-110/datasheet/start)**

\</WRAP\> \</WRAP\>
