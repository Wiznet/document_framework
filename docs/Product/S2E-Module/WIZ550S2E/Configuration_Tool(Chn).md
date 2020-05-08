---
id: configuration_tool_chn
title: Configuration Tool(Chn)
date: 2020-04-16
---


## Content
# Configuration Tool

## Description

![](/products/wiz550s2e/wiz550s2epg_kr/configtool/global_config.png)  
WIZ550S2E Configuration tool is an application program which is based on
java and can be used in most OS platforms including Windows, MAC OS and
Linux. Please download .jar file and execute it over Java Virtual
Machine.

WIZ550S2E Configuration tool consists four sections

1.  Common Configuration Section
2.  Network Configuration Section
3.  Serial Configuration Section
4.  Option Configuration Section

-----

## Common Configurations

![](/products/wiz550s2e/wiz550s2epg_kr/configtool/common_config.png)

### Search

The Search function is used to search for all existing modules on the
same LAN. By using UDP broadcast, it finds all modules on the same
subnet, and found devices will be listed in the “Serial to Ethernet”
tree(Search Window) with its MAC address.  

### Setting

This function is used to apply your configurations.  
When you select the MAC address from the “Search Window”, the default
value of the module will be displayed. Modify your configurations and
click “Setting” button to apply your settings. The module will
re-initialize and save the changed configurations.  
Users can change the configurations by following the steps below.  
![](/products/wiz550s2e/wiz550s2epg_kr/configtool/password.png)

    1. Select the MAC address of the device which you would like to modify in the “Search Window”
    2. Modify the settings according to your needs
    3. Click the “Setting” button and then "Password Input Windows" pop up
      - Default Password is "WIZnet"
    4. Input "Setting Password" and Click "OK" button
    5. The module will be initialized by a re-booting process
    6. To verify your settings, please click ‘Search’ button and view your new settings

### F/W Uploading

Firmware will be uploaded through TFTP. Click "F/W Uploading" Button and
then pop up windows following figures.  
![](/products/wiz550s2e/wiz550s2epg_kr/configtool/tftp_server_info.png)  
Server IP : TFTP Server IP

    Server Port : TFTP Server Port (TFTP default Port : 69)
    File Name : Firmware File Name
    Password : Setting Password

☞ WIZ550S2E Configure tool is not supported TFTP server. So you use TFTP
program separately.

### Reset

This is the function which makes WIZ550S2E reboot. This requires
"Setting Password".
### Factory Reset

All setting value is initialized to factory default, if the “Factory
Reset” button is clicked. Factory default values of WIZ550S2E are listed
below.  
^ Category ^ Item ^ Value ^

|             |                        |                   |
| ----------- | ---------------------- | ----------------- |
| **Network** | Local IP               | 192.168.11.100    |
| :::         | Local Gateway          | 192.168.11.1      |
| :::         | Local Subnet           | 255.255.255.0     |
| :::         | Local Port             | 5000              |
| :::         | Remote Port            | 5000              |
| :::         | Working Mode           | TCP Server        |
| :::         | Inactivity             | 0                 |
| :::         | Reconnection           | 1000              |
| **Serial**  | Baud Rate              | 115200            |
| :::         | Data Bits              | 8                 |
| :::         | Parity                 | NONE              |
| :::         | Stop Bits              | 1                 |
| :::         | Flow                   | NONE              |
| :::         | AT Command USE         | Enable            |
| :::         | Trigger Code           | 2B/ 2B / 2B       |
| :::         | Packing Condition Time | 0                 |
| :::         | Packing Condition Size | 0                 |
| :::         | Delimeter Length       | 0                 |
| :::         | Delimeter              | 2D / 2D / 2D / 2D |
| :::         | Delimeter Appendix     | 0                 |
| **Options** | Module Name            | WIZ550S2E         |
| :::         | Setting Password       | WIZnet            |
| :::         | Connection Password    | WIZnet            |
| :::         | DHCP USE               | Disable           |
| :::         | DNS USE                | Disable           |
| :::         | DNS Server IP          | 8.8.8.8           |

### Exit

Close the configuration tool program window.  

### Search Window

If you click the “Search” button, all MAC addresses on the same subnet
will be displayed.  

### Search Method

Reserved

### Firmware Version

It displays the firmware version.  

### Network Status

This field shows the current status of network connection.

    Connected : This means that TCP connection is established.
    Disconnected : This measn that TCP connection is disconnected.
    UDP : This means that UDP mode is used.

-----

## Network Configurations

![](/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/network_config.png)
### IP

This section is for setting WIZ550S2E mode's network information  

    IP: 
        WIZ550S2E's IP Address
    Gateway: 
        WIZ550S2E's Gateway Address
    Subnet mask: 
        WIZ550S2E's Subnet Mask
    Host IP: 
        Peer system's IP address which WIZ550S2E connects(or sends) to, 
        when its operating mode is "Client mode","Mixed mode" or "UDP mode".

☞ If you are unclear about your Local IP, Subnet Mask, Gateway
information, you have to get this information from your network
administrator. If the IP address is not correct, IP collision or network
problems may occur.  
  
#### Port 

This section is for setting WIZ550S2E's Port information.

    Local port : 
        WIZ550S2E's local port number
    Remote port : 
        Peer system socket's port number which WIZ550S2E connects(or sends) to ,
        when its operating mode is "Client mode","Mixed mode" or "UDP mode".

  
#### Working Mode 
Client / server / mixed TCP establishes
connection before data communication, but UDP processes the data
communication without connection establishment. The network mode of
WIZ550S2E can be divided into TCP Server, TCP Client and Mixed mode
according to the connection establishing method. During TCP server mode,
WIZ550S2E operates as the server and waits for the connection trial from
the client. WIZ550S2E operates as the client in TCP Client mode and
tries to connect to the server’s IP and Port. Mixed mode supports both
Server and Client. The communication process of each mode is as below.  

#### TCP server mode communication

During the TCP Server mode, WIZ550S2E waits for the connection request.
TCP Server mode can be useful when the monitoring center attempts to
connect to the device, while WIZ550S2E is installed, in order to check
the status or provide commands. Normally WIZ550S2E is on the waiting
status, and if connection request (SYN) from the monitoring center is
received, the connection is established (ESTABLISH), and data
communication is processed (Data Transaction), and finally connection is
closed (FIN). In order to operate this mode, “Device IP”, “Subnet mask”,
“Gateway” and “Local port” should be configured first.

For TCP server mode communication, all network configurations including
Local IP, Subnet, Gateway and Local port number should be set correctly.

The Data transmission proceeds as below.

1.  The host connects to the WIZ550S2E which is configured as TCP Server
    mode.
2.  As the connection is established, data can be transmitted in both
    directions 

<!-- end list -->

``` 
   (host -> WIZ550S2E / WIZ550S2E -> host)
```
#### TCP client mode communication

If WIZ550S2E is set as TCP Client, it tries to establish connection to
the server. To operate this mode, “Device IP”, “Subnet mask”, “Gateway”,
“Remote host”, and “Remote port” should be set. If “Remote host” has a
domain name, you should use the “DNS server” field. In TCP Client mode,
WIZ550S2E can actively establish a TCP connection to a host computer
when power is supplied.

The Data transmission proceeds as below:

1.  As power is supplied, WIZ550S2E board operating as TCP client mode
    actively establishes a connection to the server.
2.  If the connection is complete, data can be transmitted in both
    directions

<!-- end list -->

``` 
   (host -> WIZ550S2E / WIZ550S2E -> host)
```

#### Mixed mode Communication

In this mode, WIZ550S2E normally operates as TCP Server and waits for
the connection request from the peer. However, if WIZ550S2E receives
data from the serial device before connection is established, it changes
to the client mode and sends the data to the server IP. Therefore,
during mixed mode, the server mode is operated prior to the client
mode.  
Like TCP Server mode, the Mixed mode is useful in case where the
monitoring center attempts to connect to the serial device, while
WIZ550S2E is used, to check the device status. In addition to this, if
any emergency occurs in the serial device, the module will change to
Client mode to establish the connection to the server and deliver the
emergency status of the device.  

#### UDP mode Communication

UDP is not a connection oriented protocol but the communication port
should be defined well. If UDP mode is selected, the data from serial
interface can be defined where to deliver via the “Remote host” and
“Remote port.” The WIZ550S2E can also be defined where to receive
Ethernet data from via the “Remote host” and “Local port” definition.  
If the data destination and source are the same, the two IP addresses
will also be the same. Please note that the destination and source are
using the same port.  

### Timer

#### Inactivity

When there is no data transmission, the connection will close
automatically after the specified inactivity time. If the default value
‘0’ is set as the Inactivity time, the network connection is
maintained even though there is no data transmission. In this case, you
should use the ‘Close’ command to close the connection.  
This function is useful when there are two or more systems connected to
the WIZ550S2E module. If one system is connected to the WIZ550S2E, other
systems cannot connect to the module simultaneously. Therefore, the
inactivity time should be set and the other system can connect to the
module after the inactivity time is elapsed.  
Inactivity Time can also be used if the server system unexpectedly shuts
down. In this case, there is no data communication, and WIZ550S2E will
close the connection and enter into waiting state if the defined
inactivity time elapses.
#### Reconnection

This is the interval time which WIZ550S2E tries to connect again after
connection is closed. This is valid only in "Client mode" or "Mixed
mode" having data from serial prior to TCP connection is established.  

-----

## Serial Configurations

![](/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/serial_config.png)

### USART

This menu is used for setting the serial port.  
Baud Rate :

``` 
    WIZ550S2E's Baud Rate
Data Bits : 
    WIZ550S2E's Data Bits (7,8,9)
Parity : 
    WIZ550S2E's Parity Bits
Stop Bits : 
    WIZ550S2E's stop Bits
Flow : 
    WIZ550S2E's Flow Control & RS422/RS485
```

### AT Command

This function is for module configuration through network with the
configuration tool serial communication. The serial command mode is
enabled as default.  

### Packing Conditions

Normally, data received from UART are sent to Ethernet immediately. But
in many cases, users want to send data as a chunk of the whole frame
without separated ones. This option is for packetizing data into one
frame.

    Time (0 ~ 65535 ms, ‘0’: Function Disable) : 
        This field is for specifying time value to judge whether one frame 
        is received totally. If the time specified in this field is expired 
        after receiving one byte, then WIZ550S2E notice one data frame is finished, 
        make an Ethernet packet with all data in its serial buffer and send it to 
        the peer system via Ethernet. 
        If WIZ550S2E receives another byte from UART before the specified time is expired, 
        it restart timer and add the received one to the end of serial data buffer.       
    Size (0 ~ 255 byte, ‘0’: Function Disable) : 
        This field is for specifying size value to judge whether one frame is 
        received totally. If the size specified in this field is received, then WIZ550S2E 
        notice one data frame is finished, make an Ethernet packet with specifying size's 
        data in its serial buffer and send it to the peer system via Ethernet. 
    Char : 
        This field is for specifying delimiter value to judge whether one frame is received 
        totally. Char delimiters can be set up to 4 bytes in HEX and valid character count is decided 
        according to the value in Length field. In case the value of Length field is '0', 
        this option becomes inactivated. 
        Appendix is another option for this. If user selects any value in Appendix field, WIZ550S2E make 
        an ethernet packet with all received data by Char delimiter and next bytes in counts, 
        which designated by Appendix field. 
        When Appendix is set with any value, not '0', even though WIZ550S2E received Char delimiters, 
        it will wait until it receives next data.

-----

## Options Configurations

![](/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/option_config.png)

### Module Name

The device name is displayed in this area.  
User can use this name to distinguish this module with others
### Password

This is password field for authentication.  

    Setting Password : 
        Configure Tool Setting Password. Critical functions like "Setting", "Firmware Upload", 
        "Reset" and "Factory Reset" need this password to try issued action and avoid 
        unauthorized users' command.
        When user wants to change its default Setting Password with new one, put new one in this field.
    Connection Password : 
        When WIZ550S2E is tcp server, it needs connection password to check whether client is 
        an unauthorized user or not. After Client is connected, it must transfer correct 
        "Connection Password" within 3 seconds. Otherwise, WIZ550S2E will close its TCP connection.

### DHCP

This decides how to obtain IP address. If user selects "Use DHCP" then
WIZ550S2E will obtain IP address dynamically by DHCP operation.
Otherwise, it will operate in static mode.  

    Static mode :  
      If user uses this mode by deselecting "Use DHCP", 
      user has to set WIZ550S2E with specific network information.  
      1) First, select "MAC address" in "Search Windows"  
      2) Then, IP setting section will be activated  
      3) Fill those fields with information which user want to set.  
      4) And press "Setting" button then network information will be changed with value user entered.
    DHCP mode :
      WIZ550S2E's network information will be set automatically without user's interference.

### DNS

This is valid in TCP Client mode only. Normally, TCP Client mode has to
know its peer system's IP address. But there are some cases where the IP
address is unknown and especially when the IP address change
frequently.  
In this case, DNS function is needed.

User has to select “Use DNS” option and set DNS Server IP address and
peer systems' Domain name in string. Put DNS Server IP, provided by ISP,
into “DNS Server IP” field and peer system's Domain name into “Domain”
field.

-----
