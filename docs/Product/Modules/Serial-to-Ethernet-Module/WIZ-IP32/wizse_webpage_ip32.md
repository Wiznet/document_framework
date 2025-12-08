---
id: wizse_webpage_ip32
title: WIZse Webpage Configuration
date: 2025-08-20
---



# WIZ-IP32 Web Configuration

WIZ-IP32  supports web page configuration. We recommend using Chrome or Firefox. Other browsers may have display or functional issues. Let's take Chrome browser as an example to illustrate.

Before using web configuration, it is necessary to ensure that WIZ-IP32  can be accessed correctly. That is, if configuring within a local area network, WIZ-IP32  needs to be on the same network segment as the computer. If configuring remotely, WIZ-IP32  needs to be mapped to a public IP. Taking the local area network as an example for configuration, the specific configuration method is introduced as follows.

---

## Webpage Setting list

### Basic Settings list


| [Network Setting](#network-setting) | Descriptions              | Default           |
| --------------------------------------------------------- | ------------------------- | ----------------- |
| MAC Address                                               | MAC address of the module | Not configurable  |
| Use DHCP                                                  | DHCP mode option          | Disable (uncheck) |
| IP address                                                | IP address of the module  | 192.168.1.88      |
| Subnet Mask                                               | Subnet Mask               | 255.255.255.0     |
| Gateway                                                   | Gateway                   | 192.168.1.1       |
| DNS Server                                                | DNS server IP address     | 114.114.114.114   |



| [Device Options](#device-options) | Descriptions                     | Default          |
| --------------------------------- | -------------------------------- | ---------------- |
| Device Name                       | Set/Display the module name      | Module Name      |
| Use NETBIOS                       | Enable/Disable NetBIOS function  | Enable (checked) |
| HTTP Port                         | Set/Display the HTTP port number | 80               |



| [Serial Output Messages Enable/Disable](#serial-output-messages-enabledisable) | Descriptions          | Default          |
| ------------------------------------------------------------ | --------------------- | ---------------- |
| Show Debug Message                                           | Display debug message | Enable (checked) |
| Echo in AT Mode                                              | Echo your inputs      | Enable (checked) |



### Channel 1 & Channel 2 Settings list

Since WIZ-IP32 has two serial channels, it has two identical setting pages for both channels. For distinguish both channels, please find the table below.

| Number of Channels | Serial Type | Name of Channel |
| :----------------- | ----------- | --------------- |
| 2                  | RS232       | Channel 1       |
|                    | RS485       | Channel 2       |



| [UART Setting](#uart-setting) | Descriptions            | Default |
| ----------------------------- | ----------------------- | ------- |
| Baud Rate                     | 1200 bps ~ 1,152,000bps | 115,200 |
| Data Bit                      | 7 or 8 bits             | 8       |
| Parity                        | NONE, ODD or EVEN       | NONE    |
| Stop Bit                      | 1 or 2 bits             | 1       |
| Flow Control                  | NONE or "CTS/RTS mode"  | NONE    |


| [Serial Data Packing Conditions](#serial-data-packing-conditions) | Descriptions                               | Default |
| ------------------------------------------------------------ | ------------------------------------------ | ------- |
| by Nagle Waiting Time (ms)                                   | Ethernet packets separate by time interval | 0       |
| by Data Length (byte)                                        | Ethernet packets separate by Data length   | 0       |



| [Socket Setting](#socket-setting) | Descriptions                                  | Default           |
| --------------------------------- | --------------------------------------------- | ----------------- |
| Start mode                        | "AT Command Mode" or "Data pass-through mode" | AT Command Mode   |
| Socket Type                       | "TCP Server", "TCP Client" or "UDP mode"      | TCP Server        |
| Remote Host                       | Remote host IP address or domain name         | 192.168.1.99      |
| Remote Port                       | Remote host port number                       | 5000              |
| Local Port                        | Local port number (0~65535, avoid used port)  | 5000              |
| Bind Local Port                   | Only valid in TCP client mode                 | Disable (uncheck) |



| [Modbus Option](#modbus-option) | Descriptions                   | Default    |
| ------------------------------- | ------------------------------ | ---------- |
| Enable Modbus Mode              | Enable Modbus function         | Disable    |
| Select Modbus Mode              | "Modbus RTU" or "Modbus ASCII" | Modbus RTU |



| [TCP Connection Options](#tcp-connection-options) | Descriptions                                                 | Default  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| TCP Reconnection Time (ms)                                   | TCP reconnection time                                        | 0        |
| Inactivity Time (ms)                                         | TCP inactivity time                                          | 0        |
| Keep Alive Time (5s)                                         | TCP keep alive time                                          | 0        |
| Clear Buffer if connected                                    | Clear Serial port buffer when it connects to TCP 			  | Disable (uncheck) |
| Connect TCP Server When  									   | Connect TCP server when Power on or Serial data received     | Power On          |


| [Security Options](#security-options) | Descriptions                         | Default    |
| ------------------------------------------------------------ | ------------------------------------ | ---------- |
| Request Admin Password                                       | Verification password for connection | No         |
| Auto Message (First Packet)                                  | Auto message from the module         | No Message |

### Firmware

| [Firmware Upgrade](#firmware-upgrade) | Descriptions                     | Default           			   								|
| ------------------------------------- | -------------------------------- | ---------------------------------------------------------- |
| Current Firmware Version              | Display latest firmware version  | Check [Software Resource](../WIZ-IP32#software-resources)    |
| Firmware Updated           		    | Firmware upgrade 				   | -															|

### Management list

| [Change Admin Password](#change-admin-password) | Descriptions                                  | Default |
| ----------------------------------------------- | --------------------------------------------- | ------- |
| Old Password                                    | The default password or the previous password | admin   |
| New Password                                    | Type in new password, Max 15 bytes 			  | -       |
| Confirm New Password                            | Retype the new password 				      | -       |


| [Factory Reset or Reset Your Device](#factory-reset-or-reset-your-device) | Descriptions                                  | Default |
| ------------------------------------------------------------------------- | --------------------------------------------- | ------- |
| Default                                  									| Reset module back to factory settings     	| - 	  |
| Reset                                   									| Reset module without saving configuration  	| -       |
| Logout                            										| Logout and back to login page 				| -       |

---

## Login page

Open the Chrome browser, enter the WIZ-IP32  module's IP address in the address bar (the factory default is 192.168.1.88), and the login interface shown in the ﬁgure below will appear.

|                                         |
| --------------------------------------- |
| ![](/img/products/w5500s2e-z1/web_login.png) |
| **Figure:** Web login interface         |

The default login password is “**admin**”. Click "Login" to log in and enter the WIZ-IP32  homepage. It should be noted that after logging into the WIZ-IP32  webpage, in order to ensure the security of module information, if the user does not take any action within 5 minutes, they need to log in again, as shown in the following figure.

|                                           |
| ----------------------------------------- |
| ![](/img/products/w5500s2e-z1/web_timeout.png) |
| **Figure:** Web Prompt - Login Timeout    |

As shown in the figure below, it is the basic information page after logging in to the WIZ-IP32  configuration page. If you need to log out, click the "Logout" link in the upper right corner. This page provides an overview of the basic configuration information for WIZ-IP32 .

|                                                         |
| ------------------------------------------------------- |
| ![](/img/products/wiz-ip51s/web_device_overview_32.png) |
| **Figure:** Basic Information Page                      |

<a href="#webpage-setting-list">
  <button>Back to top</button>
</a>

---

## Basic Settings

As shown in the following figure, it is the WIZ-IP32  basic parameter configuration page,which is divided into following parts for explanation.

|                                                 |
| ----------------------------------------------- |
| ![](/img/products/wizdtu/web_basic_setting.png) |
| **Figure:** Basic Configuration Page            |

### Network setting 

- **MAC Address :** Display the module's MAC address
- **Use DHCP :** Enable the option to dynamically obtain IP addresses. Checking this option will enable this feature
- **IP Address:** Display/set module IP address, **default is 192.168.1.88**
- **Subnet Mask :** Display/set module subnet mask, **default is 255.255.255.0**
- **Gateway :** Display/set module gateway, **default is 192.168.1.1**
- **DNS Server :** Display/set module DNS server address, **default is 114.114.114.114**

<a href="#basic-settings-list">
  <button>Back</button>
</a>

### Device Options

**Device Name:** Set/Display the module name. It must consist of numbers, letters, or a combination of both, and cannot be empty. Case sensitivity is applied. The maximum length is 15 bytes. **The default is the module name.**

**Use NETBIOS:** Enable the NetBIOS function option. When checked, the NetBIOS function will be enabled. **By default, it is enabled.** After enabling the NetBIOS function, users can directly access the built-in web page of WIZ-IP32  by entering "http:// module name" in the browser address bar.

**HTTP Port:** Set/Display the port number of the Web server of WIZ-IP32 . **The default is 80.** It is not recommended to change it. The range of values is 0 to 65,535. If not set to 80, then in the browser address bar, it should be entered as "IP:Port", for example: 192.168.1.88:8000.

<a href="#basic-settings-list">
  <button>Back</button>
</a>

### Serial Output Messages Enable/Disable

**Show Debug Message:** Display module debugging information. Checking this option will print the module debugging information from the serial port. **It is enabled by default.**

**Echo in AT Mode:** Enable the AT command echo function. The echo function means that the WIZ-IP32 module returns the input command exactly as it is to the serial port and then displays it on the serial port software interface. When users use the serial port software to configure the module, enabling the echo function helps users configure it conveniently. However, when using single-chip microcontrollers or other embedded devices to configure the module, enabling the echo function will cause problems. In this case, the echo function must be turned off. **By default, this option is checked to enable the echo function.**

<a href="#basic-settings-list">
  <button>Back</button>
</a>

### Save Settings

Click the "Save Settings" button. The webpage will indicate that the settings were saved successfully. You need to further click the "Reset" button to restart the module for all configurations to be effective.

|                                                 |
| ----------------------------------------------- |
| ![](/img/products/w5500s2e-z1/web_saved_setting.png) |
| **Figure:** Web Prompt - Save Successful        |

### Reset 

Click this button to restart the module. Note that this does not save any unsaved conﬁguration changes. After clicking this button, the webpage will pop up the following dialog box. Click "OK" to restart the module and the webpage will jump to the login interface.

|                                         |
| --------------------------------------- |
| ![](/img/products/w5500s2e-z1/web_reset.png) |
| **Figure:** Web Prompt - Reset          |

<a href="#basic-settings-list">
  <button>Back</button>
</a>

---

## Channel 1 & Channel 2 options

As shown in the figure below, it is Channel 1's configuration page of WIZ-IP32 . The following is a detailed explanation:

|                                                       |
| ----------------------------------------------------- |
| ![img](/img/products/wizdtu/web_channel1_setting.png) |
| **Figure:** Channel 1 Configuration Page              |

### UART Setting

- **Baud Rate:** Displays/sets the serial port baud rate. **The default is 115200**. Users can select 16 common baud rate values ranging from 1200bps to 1.152Mbps.
- **Data Bit:** Displays/sets the data bits of the serial port. **The default is 8**. It can be set to 7 or 8.
- **Parity:** Displays/sets the parity bit of the serial port. **The default is NONE**. It can be set to NONE, ODD, or EVEN.
- **Stop Bit:** Displays/sets the stop bits of the serial port. **The default is 1**. It can be set to 1 or 2.
- **Flow Control:** Serial port flow control function configuration. **The default is NONE**. It can be set to NONE or CTS/RTS.

<a href="#channel-1--channel-2-settings-list">
  <button>Back</button>
</a>

### Serial Data Packing Conditions

**by Nagle Waiting Time (ms):** This option encapsulates the serial port input data into Ethernet packets at a time interval. **The default value is 0 (no packetization)**, and the maximum value is 60000, with the unit being ms;

**by Data Length (byte):** This option sets and displays the byte length of the serial port data packets. The device serial port input data is packaged according to the byte length and converted into Ethernet packets for transmission. **The default value is 0 (no packetization)**, and the maximum value is 2048 bytes.

<a href="#channel-1--channel-2-settings-list">
  <button>Back</button>
</a>

### Socket Setting

- **Start Mode:** Device startup mode configuration, which can be set to AT command mode and data transmission mode. The WIZ-IP32  will operate in this mode upon the next power-on/reboot. **The default is AT command mode.**
- **Work as:** Module operation mode configuration, which can be set to TCP Server, TCP Client, and UDP modes. **The default is TCP Server.**
- **Remote Host:** Displays/sets the IP address/domain name of the remote host. This is effective when the module is running in TCP Client and UDP modes. **The default is 192.168.1.99.** If this is set to the domain name of the remote host, the module will automatically perform domain name resolution. The maximum length of the domain name is 32 characters.
- **Remote Port:** Displays/sets the port number of the remote host. **The default is 5000**, and the range is 0 to 65535.
- **Local Port:** Displays/sets the local port number. **The default is 5000**, and the range is from 0 to 65535.
- **Bind Local Port:** Binds the local port number. When checked, it enables the function of binding the local port number. This is effective when the module runs in TCP Client mode.

<span style={{ color: 'red' }}>**Note:** Some protocols in the Ethernet protocol have default port numbers. These port numbers should be avoided. The default occupied port numbers can be found in the </span> [appendix](wizse_at_command_ip32#appendix).

<a href="#channel-1--channel-2-settings-list">
  <button>Back</button>
</a>

### Modbus Option

- **Enable Modbus Mode:** A checkbox to enable and disable Modbus Function. **The default is Disable.**
- **Select Modbus Mode:** In WIZ-IP32 , it includes Modbus RTU and Modbus ASCII format to let user to communicate using Modbus TCP. **The default is Modbus RTU.**

<a href="#channel-1--channel-2-settings-list">
  <button>Back</button>
</a>

### TCP Connection Options 

**TCP Reconnection Time (ms):** Sets/Displays the reconnection time. This option is effective when the device is in TCP Client mode. It sets the waiting time for the TCP Client to reconnect to the TCP Server after the connection is disconnected. **The default value is 0, it means immediate reconnection.** The range of values is from 0 to 60000, with units in ms.

**Inactivity Time (ms):** The time interval for timeout disconnection. This option is effective when the device is in TCP mode. The range of values is from 0 to 60000, with units in ms. **The default value is 0 (this function is disabled).**

**Keep Alive Time (5s):** Online time. This option is effective when the device is in TCP mode. The range of values is from 0 to 65536, with units of 5s. **The default value is 0 (this function is disabled).**

**Clear Buffer if connected:** Whether to clear the serial port Buffer after connection establishment. This option will only be activated when it is enabled (checked) and the module is working TCP modes. **The default is disabled (unchecked)** 

**Connect TCP Server When:** In TCP client mode, the user could choose the pirority for TCP client to connect the Server. It can be set as "Power on" to establish the connection immediately after "power-on" or wait until "Serial data received" to establish the connection after receiving data from the serial port. **The default is power-on**.

<a href="#channel-1--channel-2-settings-list">
  <button>Back</button>
</a>

### Security Options

**Request Admin Password:** This feature is for connection verification password. It is effective when the device is operating in TCP Server mode. If set to "Check Password", after the client sends a connection request and establishes a connection in TCP Server mode, the client needs to send the device password to communicate with the module. Otherwise, the connection will be disconnected. **The default is "NO" (disable this function).**

**Auto Message (First Packet):** Sends information after connection establishment. It is effective in TCP mode. You can choose "**No message" to not send information (default)**, "Send Device Name" to send the device name, "Send MAC Address" to send the device MAC address, or "Send IP Address" to send the device IP address.

For saving your configured setups, please refer to "[Save Settings](#save-settings)" section. 

<a href="#channel-1--channel-2-settings-list">
  <button>Back</button>
</a>

---

## Firmware upgrade

In the Firmware section as shown in the figure below, click the  "Select file" button, select the firmware to be updated and click the "Upload" button to start updating the firmware.

|                                                    |
| -------------------------------------------------- |
| ![](/img/products/wizdtu/web_firmware_upgrade.png) |
| **Figure:** Firmware upgrade via Webpage           |

After the firmware upgrade is completed, WIZ-IP32 module will automatically restart to complete the firmware upgrade and the webpage will automatically redirect to the login interface.

<a href="#firmware">
  <button>Back</button>
</a>

---

## Management

Click on "Management" to enter the device management page, as shown in the following figure. There are two sections as follows:

|                                              |
| -------------------------------------------- |
| ![](/img/products/wizdtu/web_management.png) |
| **Figure:** Equipment Management Page        |

### Change Admin Password

**Old Password:** Original module password, **default is admin**.

**New Password:** New module password, maximum length is 15 bytes, must be a numbers, letters or a combination of both. it cannot be left blank.

**Confirm New Password**: Retype your new module password for confirmation.

**Set:** Confirmation button for password setting. When the original module password is entered correctly and the new module password is correct, the page will prompt that the password has been successfully modified, as shown in the following picture. Click "OK" to jump to the login page.

|                                                              |
| ------------------------------------------------------------ |
| ![](/img/products/w5500s2e-z1/web_password.png)                   |
| **Figure:** Webpage message - Module password modification successful |

<a href="#management-list">
  <button>Back</button>
</a>
### Factory Reset or Reset Your Device

**Factory Default:** When clicked the default button, the page prompts whether to restore the module to its factory settings. As shown in the picture below, click "OK" and the module will perform the factory reset and jump to the login page.

|                                                       |
| ----------------------------------------------------- |
| ![img](/img/products/w5500s2e-z1/web_factory_reset.png)    |
| **Figure:** Webpage prompt - Restore factory settings |

**Reset Device:** Reset Button to reset the module. It reset the module without saving any unsaved configuration. It shows the following window, click 'OK' and it will jump to the login page after reset.

|                                         |
| --------------------------------------- |
| ![](/img/products/w5500s2e-z1/web_reset.png) |
| **Figure:** Web Prompt - Reset          |

**Logout:** Logout Button to logout the WIZ-IP32  configuration page. It shows the following window, click "Ok' will jump to login page.

|                                          |
| ---------------------------------------- |
| ![](/img/products/w5500s2e-z1/web_logout.png) |
| **Figure:** Web Prompt - Logout          |

<a href="#management-list">
  <button>Back</button>
</a>
 





 