---
id: wiz107sr_um
title: WIZ107SR User's Manual
date: 2020-04-16
---

### How to Start

As you can see in the [schematic](/products/wiz107sr/wiz107sr_sch/start)
and at the [EVB](/products/wiz107sr/wiz107sr_EVB/start) the module
provide a 12 pin connection header (2.54mm = 100mil) with 3.3V TTL level
IOs (5V tollerant) or +/-10V RS-232 level serial interface. Therefor the
module need a stable 3.3V power suply to start operation.  
As the [W7100A](/products/w7100a/start) chip provide Hardwired TCP/IP
there is no operation system inside this Serial-to-Ethernet Gateway. The
firmware is a 'simple' status machine and within a few ms the module
operates normally with full performance.  
To start the module need a configuration. There are 3 ways for that:

1.  by our Config Tool for Windows PCs over Ethernet / Internet
2.  by serial command - after entering software triggered "command mode"
    using the UART I/F
3.  by hardware signal triggered config mode (also use the UART I/F)

Below the 3 configuration sections we will also show you some
application setup examples (Server, Client, mixed mode) - the "How to
Use" section.
### Configuration by Network

Please install our 🌎[Config
Tool](http://eucache.wiznet.co.kr/sub_modules/en/product/product_detail.asp?Refid=706&page=1&cate1=5&cate2=8&cate3=0&pid=1092&cType=2)
on your Windows PC. It's open source so you can customize and check the
insides. Within this config tool you find also the Network setup part as
the first flag (part 10, 11 & 12):  
  
![](/img/products/wiz107sr/wiz107sr_um/wiz107sr_network.jpg)  
The start position of our WIZ107SR / WIZ108SR config tool, after
"Search".  
### (1) Search
You always start with "Search".  
The Search function (pop-up window) is used to find all devices existing
in the same LAN or in WAN. By using UDP broadcast, all connected devices
in the same subnet will be found. If the TCP unicast method is checked,
the specified IP address must be given. The founded device will be
listed in the “Serial to Ethernet” tree with it's MAC address. The
complete modules current setup is transfered and can now be changed.  
Please, note the identification code must be input if the device has
been configured with an identification code.  
![](/img/products/wiz107sr/wiz107sr_um/wiz107sr_search-udp.jpg)

![](/img/products/wiz107sr/wiz107sr_um/wiz107sr_search-tcp.jpg)  
Search by UDP broadcast or IP address unicast - and identification code
protection as option.  
### (2) Setting
This function is to complete the configuration
change.  
If (after search) you select the MAC Address from the “Serial to
Ethernet” tree, the current configuration value of the module will be
displayed. Change the configuration and click “Setting” button to
complete the configuration. The module will re-initialize with the
changed configuration. Changed value are permanently stored in the
EEPROM of the module. Thus, the value is not removed even though power
is disconnected.  
### (3) new FW Upload 
From time to time we offer a new firmware
(FW) for function and bug-fix updates. You can easy update the FW "over
the air", means by Network. More about that function further down.  
### (4) Reset
You can reset and restart the selected module if you
select the MAC Address from the tree and click “Reset” button.  
### (5) Factory default settings
All configuration is set back to
the original Factory default values if you select the MAC Address from
the tree and click “Factory” button.  
### (6) Ping
It will Pop-up a Simple Ping application program, you
can test the ping operation.
#### (7) Firewall

Popup the Windows Firewall setup program.  
### (8) EXIT 
Close the configuration Tool Program.  
### (9) "Serial to Ethernet" search result list
If you click
“Search” button, all modules' MAC address on a same subnet will be
displayed in this area. You can see the basic information such as Model
name, Firmware version, connection status ...  
### (10) Network Seting  
Select IP setting mode, you can select a
Static setup or dynamic IP-address by DHCP.  
(PPPoE mode is not supported in the WIZ107SR)  
   - Using a static IP Address:  
This is an option for setting WIZ107SR module’s IP with static IP
address. Firstly, select the Modules' MAC address which you wanted to
set as static IP in the board list. Then “Device IP, Subnet, Gateway
box” will be enabled. Input a static IP address and click “setting”
button. Then the Module is restarting with that IP address.  
   - DHCP: Set this option to use DHCP mode. Firstly, check ‘DHCP’ and
click ‘Setting’ button. If IP address is successfully acquired from DHCP
server, the MAC address will be displayed again on the configuration
window. As it takes some time to acquire IP address from DHCP server you
might need to try "Search" a few times. When a module on the board list
is displayed again and selected, the IP address, Subnet mask and Gateway
are displayed. If the module could not acquire a new network information
from a DHCP server, the IP address, Gateway Address and Subnet mask will
be initialized to 0.0.0.0. You might try again or try a static IP
setup.  
### (11) Network Operation Mode 
Client / server / mixed : This is
to select the communication method based on TCP. TCP is the protocol to
establish the connection before data communication, but UDP just
processes the data communication without connection establishment. The
Network mode of WIZ107SR can be divided into TCP Server, TCP Client and
Mixed mode according to the connection establishing method. At the TCP
server mode, WIZ107SR operates as server on the process of connection,
and waits for the connection trial from the client. WIZ107SR operates as
client at the TCP Client mode on the process of connection, and tries to
connect to the server’s IP and Port. Mixed modes supports both of Server
and Client. The communication process of each mode is as below.

**TCP server mode Communication**

At the TCP Server mode, WIZ107SR waits for the connection requests.
CP Server mode can be useful when the monitoring center tries to connect
to the device (where WIZ107SR is installed) in order to check the status
or provide the commands. In normal time WIZ107SR is on the waiting
status, and if there is any connection request (SYN) from the monitoring
center, the connection is established (ESTABLISH), and data
communication is processed (Data Transaction). Finally connection is
closed (FIN).  
In order to operate this mode, Local IP, Subnet, Gateway Address and
Local Port Number should be configured first.

The Data transmission proceeds as follows,

  - The host connects to the WIZ107SR which is configured as TCP Server
mode.

  - As the connection is established, data can be transmitted in both
directions – from the host to the WIZ107SR, and from the WIZ107SR to the
host.

**TCP client mode Communication**

If WIZ107SR is set as TCP Client, it tries to establish connection to
the server. To operate this mode, Local IP, Subnet, Gateway Address,
Server IP, and Server port number should be set. If server IP had domain
name, use DNS function. In TCP Client mode, WIZ107SR can actively
establish a TCP connection to a host computer when power is supplied.

The Data transmission proceeds as follows:

  1.As power is supplied, WIZ107SR board operating as TCP client mode
actively establishes a connection to the server.

  2.If the connection is complete, data can be transmitted in both
directions – from the host to the WIZ107SR and from WIZ107SR to the
host.

**Mixed mode Communication**

In this mode, WIZ107SR normally operates as TCP Server and waits for the
connection request from the peer. However, if WIZ107SR receives data
from the serial device before connection is established, it changes to
the client mode and sends the data to the server IP. Therefore, at the
mixed mode, the server mode is operated prior to the client mode.  
As like TCP Server mode, the Mixed mode is useful for the case that the
monitoring center tries to connect to the serial device (in which
WIZ107SR is used) to check device status. In addition to this, if any
emergency occurs in the serial device, the module will change to Client
mode to establish the connection to the server and deliver the emergency
status of the device.

**UDP mode Communication**

UDP is not a connection oriented protocol. But the communication port
should also be defined well. If the UDP mode is selected, the data from
serial interface can be defined where to delivery via the “Sever IP
Address” and “Port”, and the WIZ107SR can also be defined where to
receive Ethernet data from via the “Remote Peer IP Address” definition.
If the data destination and source are the same, the two IP address will
also be the same. Please note the destination and source are using the
same port.  
### (12) DDNS Setting
