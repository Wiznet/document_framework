---
id: configuration-tool-manual-new-EN
title: Configuration Tool Manual (New)-[EN]
date: 2020-04-08
---

**Supported Languages** 
  * [English](./Configuration-Tool-Manual-New-EN.md) (current page)  
  * [Korean](./Configuration-Tool-Manual-New-KO.md)

![](/img/products/wiz750sr/docs_icon.png)

-----

WIZnet’s configuration tool enables product search, product settings,
and firmware upload via the network\[1\]. WIZ750SR is compatible with
WIZ107/108SR and uses the same configuration tool\[2\].

The WIZ750SR Series Configuration Tool is published on the Github under
the name of WIZnet-S2E-Tool-GUI. The latest version of the executable
can be downloaded from the release page.

  - **Github repository: [WIZnet-S2E-Tool-GUI Github repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)**
  - **Download the latest version: [WIZnet-S2E-Tool-GUI Github repository: Release](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)**

The following screen will appear once the program is installed and
opened.

|                                                                            |
| -------------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/guiconfigtoolmanual/gui_configtool_main.png)    |
| Figure: **Configuration Tool for WIZ750SR series & WIZ107/108SR Products** |

-----

### Support Devices

Refer to the link below for a list of supported devices.

* [**WIZnet-S2E-Tool-GUI Support Devices**](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI#support-devices)

-----

1.  WIZnet-S2E-Tool-GUI is Python interpreter based and it is
    platform-independent.

2.  If user has used either WIZ107/108SR, the same program can be used
    for WIZ750SR.
    
## Configuration Tool Layout

|                                                                           |
| ------------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/guiconfigtoolmanual/gui_configtool_layout.png) |
| Figure: **Configuration Tool Layout**                                     |

The configuration tool is composed of four sections. Details of each
section are available below.

#### ① Icon Menu

  - Device search, save settings, firmware upload, device reset and Etc.

#### ② Network Interface configuration

  - If using multiple network adapters, select the band to use

#### ③ Device List

  - Lists the information of searched devices on the network

#### ④ Search method

  - Device search method
  - Default: UDP broadcast

#### ⑤ Status bar

  - Configuration Tool's working status

#### ⑥ General options

  - Device's general options
  - Basic settings / Options / User I/O tab (WIZ750SR)

#### ⑦ Each channel options

  - Options for each channel. If the device has more than 1 channel, it
    will display a multi-channel tab.

-----

## Configuration Tool Details

### 1. Icon Menu

|                                                                              |
| ---------------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/guiconfigtoolmanual/gui_configtool_icon_menu.png) |
| Figure: **Menu Icons**                                                       |

#### 1\) Device Search

  - Searches for WIZ750SR on the same network.
  - Search can be done via [UDP Broadcast](https://en.wikipedia.org/wiki/Broadcasting_\(networking\))\[1\]
    or [TCP Unicast](https://en.wikipedia.org/wiki/Unicast)\[2\]



  - Use **TCP/UDP port 50001** to search WIZ750SR. Search can be
    unsuccessful due to firewall or virus protection software.
      - In this case, try to search after turning off the firewall or
        virus protection software.
      - Please refer to this guide if still unsuccessful.
          - **[Troubleshooting Guide: Device cannot be searched](./Trouble-Shooting-EN.md)**

#### 2\) Apply Settings

  - Save the settings for WIZ750SR.
  - The settings will be applied through the configuration tool.
  - Then the module will automatically reboot.



1.  UDP Broadcast Search: can search multiple devices

2.  TCP Unicast Search: can search only one device

#### 3\) Firmware Upload

  - Use the firmware binary file provided from WIZnet to update
    WIZ750SR’s firmware
  - Then the module will automatically reboot.
  - The following pop-up will appear once the firmware upload is
    complete.

|                                                                                           |
| ----------------------------------------------------------------------------------------- |
| ![](/img/products/wiz750sr/guiconfigtoolmanual/gui_configtool_firmwareupload_success.png) |
| Figure: **Popup Message - Firmware Upload Successfully**                                  |

  - Use **TCP/UDP port 50002 to upload firmware** on to WIZ750SR.
    Firmware upload can be unsuccessful due to firewall or virus
    protection software.
      - In this case, try to upload after turning off the firewall or
        virus protection software.
      - Please refer to this guide if still unsuccessful.
          - **[Troubleshooting Guide: Firmware cannot be uploaded](./Trouble-Shooting-EN.md)**
  - The module will not work properly if the firmware is not correctly
    uploaded.

**DO NOT TURN OFF POWER
DURING FIRMWARE UPLOADING**  
**IT CAN CAUSE MALFUNCTIONING** 
#### 4\) Reset Device

  - Reboots WIZ750SR.

#### 5\) Factory Reset

  - Returns the settings of WIZ750SR to factory default.
  - Factory default setting of can be checked at [WIZ750SR Factory Settings](./Getting-Started-EN.md#wiz750sr-factory-settings).
  - Then the module will automatically reboot.

#### 6\) Save Config

  - Saves current device's settings to a file.
  - When the environment changes or you want to apply the current device
    settings to another device.

#### 7\) Load Config

  - Load the settings of the file saved with Save Config.
  - After loading the settings, press the **Apply Settings** button to
    apply the device.

#### 8\) Exit

  - Ends the configuration tool.

-----

### 2\. Network Interface configuration

|                                                                                |
| ------------------------------------------------------------------------------ |
| ![](/img/products/wiz750sr/guiconfigtoolmanual/gui_configtool_net_adapter.png) |
| Figure: **Network adapters**                                                   |

  - If using multiple types of network adapters, a list of adapters and
    the bands in use are displayed and can be selected according to your
    environment.
      - Example 1) If your laptop is using both Ethernet and WiFi
      - Example 2) Using Virtual Machine

-----

### 3\. Device List

|                                                                                |
| ------------------------------------------------------------------------------ |
| ![](/img/products/wiz750sr/guiconfigtoolmanual/gui_configtool_device_list.png) |
| Figure: **Device List**                                                        |

  - List of devices searched will appears.
      - **Searched results** shows the number of devices searched.
      - Each device is identified by its MAC address and device name.

-----

### 4\. Search Method

#### Search ID code

  - This section is for inputting code when the search identification
    code is set.
  - If this option is selected, the assigned code must be entered when
    searching devices.

#### Search method

  - Search can be done via [UDP Broadcast](https://en.wikipedia.org/wiki/Broadcasting_\(networking\))\[1\]
    or [TCP Unicast](https://en.wikipedia.org/wiki/Unicast)\[2\]

-----

### 5\. Status bar

  - Shows the result of the search.
      - MAC addresses will be shown together if multiple devices are
        searched.
  - The progress bar is shown during firmware updates.

-----

### 6-2. Basic settings Tab

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| ![](/img/products/wiz750sr/guiconfigtoolmanual/gui_configtool_tab_basicsettings.png) |
| Figure: **Basic settings Tab**                                                       |

1.  UDP Broadcast Search: can search multiple devices

2.  TCP Unicast Search: can search only one device

#### 1\) Device information

  - Shows the current **firmware version**\[1\]
  - Composed of three sections: **Major version number**, **Minor
    version number**, and **Maintenance version number** ex) v1.0.0

#### 2\) Search identification code

  - **Range: Up to 8-bytes string**
      - Default: Null (Not used)
  - The search identification code is for identifying the device
    search\[2\].
  - If this option is selected, the assigned code must be entered when
    searching devices.

#### 3\) Network configuration

  - **Static** (default)
      - By selecting this option, users can enter the IP address, subnet
        mask, gateway address, DNS server.



  - **DHCP**
      - By selecting this option, all information is automatically
        allocated from the router (DHCP server).

  * Details of IP address allocation are available at [WIZ750SR User's Manual: IP address settings](./Users-Manual-EN.md#ip-address-settings).  
 * PPPoE mode is not supported.

-----

### 6-2. Options Tab

|                                                                                |
| ------------------------------------------------------------------------------ |
| ![](/img/products/wiz750sr/guiconfigtoolmanual/gui_configtool_tab_options.png) |
| Figure: **Option Tab**                                                         |

-----

#### 1\) TCP Timeout

  - TCP retransmission retry count setting
  - Value: 1\~255

#### 2\) Status pin

  - Set status I/O pin S0(PA\_10) and S1(PA\_01) operation mode

#### 3\) Serial debug

  - **Enable debug message output**
      - By enabling this option, the product information or error status
        can be printed via the Debug UART.
      - The serial settings of the Debug UART is fixed as
        **115200-8-N-1:None**.
      - User can monitor S2E(Serial to Ethernet) or E2S(Ethernet to
        Serial) data when the **Enable with Data** option is set.
        (Available since WIZ750SR v1.2.2 or later)



1.  Stable version is recommended for usage. Ex) Development version:
    v1.0.0dev, Stable version: v1.0.0

2.  In cases when there are multiple devices in the same network.


#### 4\) Serial command mode


  * By enabling this option, the data communication mode (GW mode) will change to serial command mode (AT mode) when sending the **command mode switch code** via the serial data port.
    * Default: Enabled
  * Use the serial command mode composed of 2-byte to change settings.
  * The existing TCP connection will be lost if the mode changes to serial command mode.


  - **Serial command mode switch code: Trigger code**
      - This is a 3-byte code for switching the mode from data mode to
        serial command mode.
          - Default: \[2B\]\[2B\]\[2B\] (+++)
      - Each byte value reads hex code only.



:::info
**Please take caution of the following when using Trigger code.**

1.  It can only be recognized as switch code if there is a time gap of
    at least 500ms of no data communication time before and after the
    3-byte command mode switch.
2.  The time interval for each byte of the 3-byte command mode switch
    code has to be at most 500ms.
3.  Do not end the command mode switch code\[1\] with CR((CR: Carriage
    return, ('\\r', 0x0D) )) or LF((LF: Line feed, ('\\n', 0x0A) )).
4.  The default interval of the time gap before and after the command
    mode switch code is 500ms. The operation is based on the timer value
    of the serial data packaging option.

:::

#### 5\) Connection password (TCP server mode only)

  - **Range: Up to 8-bytes string**
      - Default: Null (Not used)
  - Connection password is available for **TCP server mode** (including
    TCP server mode of the mixed mode).
  - TCP client must send the connection password character upon
    connecting to WIZ750SR in order for data communication.
  - TCP connection will be disconnected if the password does not match

-----

### 7\. Channel Tab

|                                                                                |
| ------------------------------------------------------------------------------ |
| ![](/img/products/wiz750sr/guiconfigtoolmanual/gui_configtool_tab_channel.png) |
| Figure: **Network Configuration Tab**                                          |

1.  The serial command after switching modes must end with CR and LF.

#### 1\) Status & Serial Interface

| Status[1] | Shows the operational status of the device<br /><br />- **BOOT**: Settings and firmware upload is possible during this status<br />- **OPEN**: Status before TCP connection<br />- **CONNECT**: Status after TCP connection<br />- **UPGRADE**: Firmware update or DHCP IP allocation during this status<br />- **ATMODE**: Serial AT command mode.<br />- **UDP**: UDP mode |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

| Serial interface[2] | Shows the types of UART interfaces.<br /><br />- **RS-232/TTL**: WIZ750SR hardware TTL or RS-232 version.<br />- **RS-422/485**: WIZ750SR hardware RS-422/485 version. |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


-----

#### 2\) Operation mode

  - Setting for the network operation mode.
  - Users can choose among the four options that suits their
    application: TCP client mode, TCP server mode (default), TCP
    client/server mixed mode, UDP mode.
  - Details of each network operation mode are available at [WIZ750SR User's Manual: Network Operation Mode](./Users-Manual-EN.md#network-operation-mode). 

  - WIZ750SR does not support PPPoE / DDNS

-----

#### 3\) Local port & Remote host / Port

  - Local port
  - Remote host / Port
      - Users can enter the IP address or domain name of the destination
        or remote host when the module attempts connection in TCP client
        mode\[3\] or UDP mode.
      - The port number of the destination is required.
  - Details of the remote host setting are available at [WIZ750SR User's Manual: Remote Host Settings](./Users-Manual-EN.md#remote-host-settings).

-----

1.  Difference between WIZ107/108SR is the addition of BOOT and UDP
    mode.

2.  Difference between WIZ107/108SR is the number of UART interfaces(1).

3.  TCP client mode includes the TCP client mode of the TCP mixed mode.

#### 4\) Serial Options

  - **Baud Rate**
      - The supported baud rates are as below.
      - 300, 600, 1200, 1800, 2400, 4800, 9600, 14400, 19200, 28800,
        38400, 57600, 115200(default), 230400



  - **Data Bit**
      - The supported data bits are as below.
      - 7, 8(default)



  - **Parity Bit**
      - The supported parity bits are as below.
      - NONE(default), ODD, EVEN



  - **Stop Bit**
      - The supported stop bits are as below.
      - 1(default), 2



  - **Flow Control**
      - RS-232/TTL versions support the below serial data flow control.
          - NONE(default): Do not use flow control.
          - XON/XOFF: Software flow control
          - CTS/RTS: Hardware flow control
      - RS-422/485 versions will operate as ‘NONE’ shown above no matter
        which option is selected.

-----

#### 5\) Serial data packing condition

  - WIZ750SR provides **multiple serial data packing options**\[1\]. By
    using this option, user command frame or all other data can be
    collected and sent together.

 Data packing options can be
multi-selected but has priority as shown below.  
**Character =\> Size =\> Timer**

  - **Timer**
      - Range: 0 \~ 65535 / Unit: milliseconds (ms)
          - Default: 0 (Not used)
      - Collects the data until the designated time is lapsed and sent
        together. Will not operate if set to '0'.



  - **Size**
      - Range: 0 \~ 255 / Unit: data length (number of bytes)
          - Default: 0 (Not used)
      - Collects the data until the designated data length is reached
        and sent together.
      - Will does not operate if set to '0'.



  - **Character**
      - Range & Unit: 1-byte character (Hex code)
          - Default: 00 (Not used)
      - Collects the data until the designated character is entered and
        sent together.
      - The designated character will be included if the data size does
        not exceed the buffer size. The designated character will be
        excluded if the data size exceeds the buffer size.
      - Will does not operate if set to '0x00'.

-----

1.  Serial data can be collected according to the setting (character,
    size, or time) and be sent together.
    
#### 6\) Timer interval

  - **Inactivity Timer**
      - **Range: 0 \~ 65535 / Unit: seconds**
          - Default: 0 (Not used)
      - If inactivity timer is set, connection is lost after the
        designated time without data communication is lapsed after the
        last data is sent.
      - This setting is for **TCP Server or TCP Client mode and mixed
        mode**.



  - **Reconnection Interval**
      - **Range: 1 \~ 65535 / Unit: milliseconds (ms)**
          - Default: 3000 (Use, 3 seconds)
      - The re-connection interval is for **TCP Client Operation,
        including TCP Client of the mixed mode**.
      - This option is requires in order to re-connect TCP communication
        in case it is lost.
      - The setting must be at least 1ms.

-----

#### 7\) TCP Keep-alive interval

  - This option allows the connection status to be kept alive by sending
    the ‘keep-alive packet’ in **all three TCP modes**. (TCP server, TCP
    client, and TCP mixed mode)
      - Default: Enabled (recommended)
      - TCP connection is disconnected if there is no response to the
        ‘keep-alive’ packet. (Socket close / disconnect)
      - The ‘keep-alive’ packet is sent after the Ethernet packet is
        sent at least once from WIZ750SR.



  - **Send Keep-Alive Interval**
      - **Range: 0 \~ 65535, Unit: milliseconds(ms)**
          - Default: 7000, 5000 (recommended, 7 seconds / 5 seconds)
      - The required interval for sending the ‘keep-alive’ packet is as
        below.
          - Initial interval: The time until the first ‘keep-alive’
            packet is sent
          - Retry interval: The time interval between each ‘keep-alive’
            packets



  - This option is recommended in case of a physical disconnection with
    the remote device.
      - This option is recommended especially in TCP server mode.

-----

**If there is any problem?**  
Please refer to our **[Troubleshooting Guide](./Trouble-Shooting-EN.md)**\! 

-----

## Navigation

-----

 **WIZ750SR** 

  - **User's Manual [(English)](./Users-Manual-EN.md)/[(Korean)](./Users-Manual-KO.md)** 
  
  - **Device Command Manual [(English)](./Command-Manual-EN.md)/[(Korean)](./Command-Manual-KO.md)**
  
  - **Troubleshooting Guide [(English)](./Trouble-Shooting-EN.md)/[(Korean)](./Trouble-Shooting-KO.md)**
  
  - **Update History [(English)](./Series-Update-History-EN.md)/[(Korean)](./Series-Update-History-KO.md)**
  
-----

**WIZ750SR series Downloads** 

  - **[Software Download](./Download.md)**

  - **[Technical References](./Technical-References.md)**

-----

