---
id: getting_started
title: Getting Started
date: 2021-05-10
---

**This section was written on the assumption that the use of WIZ510SSL evaluation board.**

-----



## Unpacking the WIZ510SSL Evaluation Kit



### What's in the Box?

|                                                           |
| --------------------------------------------------------- |
| ![](/img/products/wiz510ssl/getting_started/wiz510ssl-evb_package.png)       |
| Figure: ***WIZ510SSL Rev. 1.0 evaluation board package*** |

The WIZ510SSL evaluation board package contains the following parts.

  - WIZ510SSL Module
  - WIZ510SSL-RS232/TTL-EVB Evaluation Board
  - Cables (Ethernet / Serial / Micro USB Type B)

The entire list of parts of the board is available at the [WIZ510SSL Overview: Product Contents](wiz510ssl#product-contents) page.



### Device Layout

|                                                          |
| -------------------------------------------------------- |
| ![](/img/products/wiz510ssl/getting_started/wiz510ssl_top_parts_rev1.0.png) |
| Figure: ***WIZ510SSL Rev. 1.0 top***                 |

|                                                             |
| ------------------------------------------------------------|
| ![](/img/products/wiz510ssl/getting_started/wiz510ssl_bottom_parts_rev1.0.png) |
| Figure: ***WIZ510SSL Rev. 1.0 bottom***                 |



### Parts

  - **STM32L552CET6** based on ARM Cortex-M33 \[1\]
  - **W5100S** with Hardwired TCP/IP and PHY \[2\]
  - **Power LED** (red[LD4]) \[3\]
  - **Status LED** (green[LD1]: PHY link status / green[LD2]: TCP connection status / green[LD3]: not defined) \[4\]



### Interfaces and Ports

  - **Data UART Port**: 6x1 2.00mm Pin header (Data UART pin / MCU reset pin / GND) \[5\]
  - **Debug UART Port**: 6x1 2.00mm Pin header (Debug UART pin / MCU boot pin / GND) \[6\]
  - **Ethernet Port**: 6x1 2.00mm Pin header (Ethernet pin / GND) \[7\]

-----



## Prerequisites for Setup



### Software

  - Configuration tool program ([Github page](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases))
  - TCP server / TCP client / UDP terminal program
  - Serial terminal program



### Hardware

  - WIZ510SSL module and evaluation board
  - Ethernet cable
  - USB type B cable (for Debug UART)
  - DB9 serial RS-232 cable (for Data UART, RS-232/TTL Ver. only)
  - Power source for device
    - Such as 5V DC adapter, USB port on your computer, or 3.3V Power source

-----



## Connect Your WIZ510SSL



### WIZ510SSL Factory Settings

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
  - Serial command mode switch code: **+++** (hex code, \[2B\]\[2B\]\[2B\])

  - Data packing option - Time: **Disabled**
  - Data packing option - Size: **Disabled**
  - Data packing option - Char: **Disabled**

  - Inactivity Timer: **Disabled**
  - Reconnection Timer: **3 second**
  - Keep-Alive: **Enabled, 7-sec initial delay, 5-sec send interval**



### PC Settings

Double check that the WIZ510SSL and the PC, or laptop you are using to set up WIZ510SSL with are both on the same Ethernet network.



#### Example: PC Network Settings

\* When the WIZ510SSL's settings are factory default,

| Network Settings | PC or laptop(= destination) | IP address      | 192.168.11.3 | \- |
| ---------------- | --------------------------- | --------------- | ------------ | -- |
| :::              | :::                         | Gateway address | 192.168.11.1 | \- |
| :::              | :::                         | Port number     | 5000         | \- |

  - User should match the network settings of 'WIZ510SSL's remote host' and 'PC (or laptop)' for testing TCP client/mixed mode.

  - If the DHCP(automatic IP allocation) is used, both the WIZ510SSL and test PC must be set to be assigned the same IP from the same router.



### Connecting Steps

The **RS-232/TTL version of WIZ510SSL evaluation board** is designed to use the **DB9 connector** to connect with the user’s serial device. Therefore, it is recommended to have all **Ethernet and serial ports connected to the PC** when testing. If the PC does not have a serial port, please purchase a **RS-232 to USB converter** separately.

  - **In case of the RS-422/455 version of WIZ750SR-EVB, the serial connector is composed of terminal block.**



#### Step 1: Plug in

Connect the WIZ510SSL module to evaluation board and also the cable as shown in the picture below.

  - Ethernet Cable
    - Used to connect the evaluation board’s RJ-45 connector and the PC’s Ethernet network interface card (PC's RJ-45 connector)

  - Serial Cable
    - Used to connect the evaluation board’s DB9 connector and the serial interface card (DB9 connector). If the PC does support serial interface, use the RS-232 to USB converter.

  - Optional: USB type B cable (for debug message)
    - Used to connect the evaluation board’s USB connector and the PC’s USB connector.

|                                                               |
| ------------------------------------------------------------- |
| ![](/img/products/wiz510ssl/getting_started/wiz510ssl-evb_1.png)                 |
| Figure: ***Combining WIZ510SSL module and evaluation board*** |

|                                                    |
| -------------------------------------------------- |
| ![](/img/products/wiz510ssl/getting_started/wiz510ssl-evb_2.png)      |
| Figure: ***WIZ510SSL evaluation board side view*** |



#### Step 2: Power on

Connect the 5V power adaptor or USB cable to the evaluation board and turn on the power switch.

  - The power LED will turn red once the evaluation board is on.



#### Step 3: Search

Open the configuration tool and click the **Device Search** button. If the board is turned on and connected to the same network, the MAC address or settings of the WIZ510SSL module can be checked using the configuration tool.

**The WIZ510SSL configuration tool can be downloaded from Github below.**

  - [Download the latest version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.4.0)
  - [Download the older versions](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
  - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)

|                                                               |
| ------------------------------------------------------------- |
| ![](/img/products/wiz510ssl/getting_started/wiznet_s2e_configuration_tool.png)   |
| Figure: ***WIZnet S2E Configuration Tool***                   |



#### Step 4: Set up your WIZ510SSL

Change the settings accordingly to the customer’s environment. The test shown in this document is based on factory setting.

  * Click the **Apply Settings** button to apply the changes in settings of the configuration tool.



#### Step 5: Connect

Connect the PC as the TCP client of the user’s serial device for data communication testing. In order to do this, the serial terminal program / TCP client terminal program must be opened on the PC. The serial terminal program and TCP client program must be set as below.

  - Serial terminal program: **115200-8-N-1, Flow control: None**
  - TCP client program: **192.168.11.2:5000** (The IP address and port number of WIZ510SSL)

The COM port for serial terminal program connection can be checked as below.

  - Control Panel \> System \> Device Manager

|                                                     |
| ----------------------------------------------------|
| ![](/img/products/wiz510ssl/getting_started/windows_devicemanager.png) |
| Figure: ***Device Manager***                        |



#### Step 6: Verify

The basic data communication of the WIZ510SSL can be verified as below.

  - **Serial to Ethernet: data communication verification**
    - Enter the character string in the serial terminal and check if the identical character string appears on the TCP client terminal.

  - **Ethernet to Serial: data communication verification**
    - Enter the character string in the TCP client terminal and check if the identical character string appears on the serial terminal.



#### Step 7: Done

Now you’re ready to use the WIZ510SSL!

  - This document is based on the **assumption of the PC as the serial device / remote network device**.

  - The next step is to **connect the WIZ510SSL module to the target serial device** and check if the device can **communicate, control, and monitor** via the **remote PC or monitoring server**.

-----

**If there is any problem?**
Please refer to our **[Troubleshooting Guide](troubleshooting_guide)**!

-----