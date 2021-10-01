---
id: examples
title: Examples
date: 2020-04-15
---

## Association & Disassociation

#### Station Mode using WPA2 Static IP
  
This section explains how to connect to AP using WizFi310 with static IP
address. In this example, target AP information is as below. ( SSID :
WizFiDemoAP, Security : WPA2, Key : 12345678 )

    AT                  (Sent AT command with 0x0d (Hex of Enter button))
    [OK]                (Response meaning successful execution)
    
    AT+WSET=0,WizFiDemoAP   (AT command for setting WiFi association)
    [OK]
    
    AT+WSEC=0,WPA2,12345678 (AT command for setting WiFi security)
    [OK]
    
    AT+WNET=0,192.168.12.101,255.255.255.0,192.168.12.1 (AT command for setting Static IP address)
    [OK]
    
    AT+WJOIN            (AT command executing AP association)
    Joining : WizFiDemoAP
    Successfully joined : WizFiDemoAP
    
    [Link-Up Event]
      IP Addr    : 192.168.12.101
      Gateway   : 192.168.12.1
    [OK]
    
    AT+WLEAVE           (AT command making disassociation from AP association)
    
    [Link-Down Event]
    [OK]

#### Station Mode using WPA2 DHCP

This section explains how to connect WizFi310 to target AP with DCHP
Client Mode 

    AT (Sent AT command with 0x0d (Hex of Enter
    button)) [OK] (Response meaning successful execution)

    AT+WSET=0,WizFiDemoAP (AT command for setting WiFi association) [OK]

    AT+WSEC=0,WPA2,12345678 (AT command for setting WiFi security) [OK]
    AT+WNET=1 (AT command for setting DHCP) [OK]

    AT+WJOIN (AT command executing AP association) Joining : WizFiDemoAP
    Successfully joined : WizFiDemoAP

    [Link-Up Event]

        IP Addr    : 192.168.12.13
        Gateway   : 192.168.12.1

    [OK]

    AT+WLEAVE (AT command making disassociation from AP association)

    [Link-Down Event] [OK] 

#### AP Mode using WPA2 Static IP

This section explains how to set AP mode using WizFi310. In AP mode,
WizFi310 have to set static IP address. (AT+WNET=0,xxx,xxx,xxx) After
setting AP mode, WizFi310 will operate DHCP Server. Thus, when smart
phone or other devices connect to WizFi310, WizFi310 will give IP
address to connected device.

    AT                  (Sent AT command with 0x0d (Hex of Enter button))
    [OK]                (Response meaning successful execution)
    
    AT+WSET=1,WizFi310_AP   (AT command for setting WiFi association information)
    [OK]
    
    AT+WSEC=1,WPA2,12345678 (AT command for setting WiFi security)
    [OK]
    
    AT+WNET=0,192.168.12.105,255.255.255.0,192.168.12.1 (AT command for setting Static IP address)
    [OK]
    
    AT+WJOIN            (AT command executing run AP mode)
    Joining : WizFi310_AP
    
    [Link-Up Event]
      IP Addr    : 192.168.12.105
      Gateway   : 192.168.12.1
    [OK]
    
    AT+WLEAVE           (AT Command disassociating from AP association) 
    
    [Link-Down Event]
    [OK]
    
## Example - Data Communication

#### Method of setting TCP Client and exchanging data in Data Mode 

##### Socket Open

This section explains how to open &#60;TCP Client Socket&#62;
and communicate with peer system. Below is an example showing how to set
TCP Client and change the mode to data mode. It also explains parameters
of &#60;AT+SCON&#62; command.  
  
(AT+SCON=&#60;OpenType&#62;,&#60;SocketType&#62;,&#60;RemoteIP&#62;,&#60;RemotePort&#62;,&#60;LocalPort&#62;,&#60;DataMode&#62;)  
  
If you enter &#60;O&#62; or &#60;SO&#62; value to &#60;Open Type&#62; parameter, WizFi310
will try to connect to TCP Server immediately. But when using &#60;S&#62;
value, WizFi310 will try to connect to TCP Server after reboot and you
have to set &#60;SocketType&#62;,&#60;RemoteIP&#62;,&#60;RemotePort&#62; and &#60;LocalPort&#62;
as below  
In order to set WizFi310 to data mode, you have to enter 1 value to
&#60;Data Mode&#62; parameter of &#60;AT+SCON&#62; command. For detailed information
to this command, refer to
[AT+SCON](at_commands#atscon).  

  * Mode: Data Mode, TCP Client
  * Remote IP : 192.168.12.102
  * Remote Port : 5000
  * Local Port : 5001


```cpp
AP Association                    ( Refers to Association & Disassociation Example )

AT+SCON=O,TCN,192.168.12.102,5000,5001,1 ( AT command connecting with a TCP Client Socket )
[OK]

[CONNECT 0]                          <= At this point, a TCP connection is done 
```

  
##### Exchanging data with a peer system

If WizFi310 successfully connects to a peer system, WizFi310 will print [CONNECT(CID)] message and enter data mode. In data mode, WizFi310 can send serial data to peer system and receive network data from peer system without other
translation. 

##### Socket Close

In order to close TCP connection, WizFi310 has to switch to AT Command Mode. ( When +++ message entered, WizFi310 can be changed to AT Command Mode. ) After being changed to AT Command Mode,TCP Connection can be closed by using &#60;AT+SMGMT=CID&#62; or &#60;AT+SMGMT=ALL&#62; command.  

**Checking Socket Status**

After being changed to AT Command Mode, TCP
Connection can be closed by using &#60;AT+SMGMT=CID&#62; or &#60;AT+SMGMT=ALL&#62;
command.

    AT+SMGMT=?
    Number of Sockets : 1 (SCID/Socket/Mode/Remote/Local/DataMode)
    0/TCN/192.168.12.23:5000/5001/1
    [OK]
    
    
#### Method of setting TCP Server and exchanging data in Data Mode

  
**Socket Open**

This section explains how to open &#60;TCP Server Socket&#62; and communicate with peer system. Below is the example for setting TCP Server and then changing to data mode. For detailed information about &#60;AT+SCON&#62; command, refer to
[AT+SCON](at_commands#atscon)and [Socket Open](#example---data-communication).  
    * Mode : Data Mode, TCP Server
    * Local Port : 5000
    

    AP Association              ( Refer to Association & Disassociation Example )
    
    AT+SCON=O,TSN, , ,5000,1        ( AT command listening with a TCP Server Socket )
    [OK]
    
    [CONNECT 0]          &#60;= When TCP connection is done, you can see this message


**Exchanging data with a peer system**

Exchanging data with its peer system is the same as previous [Exchanging data with a peer system](#exchanging-data-with-a-peer-system).

**Socket Close**

Closing socket connection is the same as previous [Socket Close](#socket-close).

##### Checking Socket Status

Checking socket status is the same as previous [Checking Socket Status](#socket-open).  
  

#### Method of setting UDP Client and exchanging data in Data Mode

**Socket Open**
This section explains how to open &#60;UDP Client Socket&#62; and communicate to peer system. Below is an example for setting up UDP Client and changing into data mode. For detailed information about &#60;AT+SCON&#62; command, refer to [AT+SCON (at_commands#atscon) and [Socket
Open](#socket-open).  

  * Mode : Data Mode, UDP Client
  * Remote IP : 192.168.12.23
  * Remote Port : 5001
  * Local Port : 5000


``` 
AP Association              ( Refer to Association & Disassociation Example )

AT+SCON=O,UCN,192.168.12.23,5001,5000,1 
[OK]

[CONNECT 0]                          &#60;= At this point, a UDP connection is done 
```

**Exchanging data with a peer system**

Exchanging data with its peer system is the same as previous [Exchanging
data with a peer system](#exchanging-data-with-a-peer-system).

**Socket Close**

Closing socket connection is the same as previous [Socket Close](/#socket-close).

**Checking Socket Status**

Checking socket status is the same as previous [Checking Socket Status](#checking-socket-status).

#### Method of setting UDP Server and exchanging data in Data Mode

**Socket Open**

This section explains how to open &#60;UDP Server Socket&#62; and communicate to peer system. Below is an example for setting up UDP Server and changing into data mode. For detailed information about &#60;AT+SCON&#62; command, refer to [AT+SCON](at_commands#atscon)
and [Socket Open](#socket-open).  

  * Mode: Data Mode, UDP Server
  * Local Port: 5000


``` 
AP Association              ( Refer to Association & Disassociation Example )

AT+SCON=O,USN, , ,5000,1
[OK]

[CONNECT 0]                  <= At this point, a UDP connection is done 
```

**Exchanging data with a peer system**

&#60;UDP Server Mode&#62; can connect UDP connection without peer system
information like IP address and port number. But before peer system is
connected to WizFi310, WizFi310 does not send data to peer system
because WizFi310 does not know its information. Thus peer system must
send data to WizFi310 in order to know peer system’s information like
below. <a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/udp_server_caution.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/udp_server_caution.png").default} alt=""/></a> The
other information for exchanging data is same as [Exchanging data with a
peer system](/#exchanging-data-with-a-peer-system).

**Socket Close**

Closing socket connection is the same as previous [Socket Close](#socket-close).

**Checking Socket Status**

Checking socket status is the same as previous [Checking Socket Status](#checking-socket-status).  
  

#### Method of setting TCP Client and exchanging data in Command Mode

  
**Socket Open**

This section explains how to set &#60;TCP Client&#62; in&#60;Command Mode&#62; and communicate to peer system. Below is the example for setting TCP Client on the Command Mode . In order to enter in the Command Mode, you have to enter 0 value to &#60;Data Mode&#62; parameter of
&#60;AT+SCON&#62; command. For detailed information to this command, refer to
[AT+SCON](at_commands#atscon)  

  * Mode : Command Mode, TCP Client
  * Remote IP: 192.168.12.23
  * Remote Port : 5000
  * Local Port : 5001


``` 
AP Association              ( Refer to Association & Disassociation Example )

AT+SCON=O,TCN,192.168.12.23,5000,5001,0
[OK]

[CONNECT 0]                            &#60;= At this point, a TCP connection is done 
```
##### Exchanging data with a peer system

If WizFi310 connects to peer system successfully, WizFi310 will print
[CONNECT(CID)] message. At this time, WizFi310 is in command mode. In
order to send data to peer system, you have to use &#60;AT+SSEND=CID,
Destination IP, Destination Port, Data Length&#62; command. If you input
serial command like &#60;Data Length&#62; , WizFi310 will send serial data to
peer system.

    AT+SSEND=0,,,5   ( Sending data to a Socket with CID 0 )
    Hello             &#60;= When serial data is 5byte, WizFi310 send this data to peer system
    [OK]
    
    {0,192.168.12.23,5000,11}Hi WizFi310  ( Receiving data from pear system )

##### Socket Close

In &#60;AT Command Mode&#62;, TCP connection can be closed through
&#60;AT+SMGMT=CID&#62; or &#60;AT+SMGMT=ALL&#62; command.

##### Checking Socket Status

In &#60;AT Command Mode&#62;, Information of connected sockets are shown by
using &#60;AT+SMGMT=?&#62; command.

    AT+SMGMT=?
    Number of Sockets : 1 (SCID/Socket/Mode/Remote/Local/DataMode)
    0/TCN/192.168.12.23:5000/5001/0
    [OK]

  
  

#### Method of setting TCP Server and exchanging data in Command Mode

  
**Socket Open**

This section explains how to set &#60;TCP Server&#62; in &#60;Command Mode&#62; and communicate to peer system. Below is the example for setting TCP Server on the Command Mode. For detailed information about &#60;AT+SCON&#62; command, refer to
[AT+SCON](at_commands#atscon)
and [Socket Open](#socket-open).  
 
   * Mode : Command Mode, TCP Server 
   * Local Port : 5000


``` 
AP Association              ( Refer to Association & Disassociation Example )

AT+SCON=O,TSN, , ,5000,0        ( AT command listening with a TCP Server Socket )
[OK]

[CONNECT 0] 
```

##### Exchanging data with a peer system

Exchanging data with its peer system is the same with previous[Exchanging data with a peersystem](/#exchanging-data-with-a-peer-system).

#### Socket Close

Closing socket connection is the same with previous [Socket
Close](#socket-close).  
  

#### Method of setting UDP Client and exchanging data in Command Mode

  
**Socket Open**

This section explains how to set &#60;UDP Client&#62; in &#60;Command Mode&#62; and communicate to peer system. Below is an example for setting UDP Client on Command Mode. For detailed information about &#60;AT+SCON&#62; command, refer to
[AT+SCON](at_commands#atscon)
and [Socket Open](#socket-open).  

  * Mode : Command Mode, UDP Client 
  * Remote IP : 192.168.12.23
  * Remote Port : 5001
  * Local Port : 5000


``` 
AP Association              ( Refer to Association & Disassociation Example )

AT+SCON=O,UCN,192.168.12.23,5001,5000,0 
[OK]

[CONNECT 0]                          &#60;= At this point, a UDP connection is done 
```
##### Exchanging data with a peer system

Exchanging data with its peer system is the same as previous [Exchanging
data with a peer system](/#exchanging-data-with-a-peer-system).

#### Socket Close

Closing socket connection is the same as previous [Socket
Close](#socket-close).  
  

#### Method of setting UDP Server and exchanging data in Command Mode

  
**Socket Open**

This section explains how to open &#60;UDP Server Socket&#62;
in Command Mode and communicate to peer system. Below is an example for
setting UDP Server on Command Mode. For detailed information about&#60;AT+SCON&#62; command, refer to [AT+SCON](at_commands#atscon) and [Socket Open](#socket-open).  

  * Mode : Command Mode, UDP Server
  * Local Port : 5000


``` 
AP Association              ( Refer to Association & Disassociation Example )

AT+SCON=O,USN, , ,5000,0 
[OK]

[CONNECT 0] 
```

##### Exchanging data with a peer system

&#60;UDP Server Mode&#62; of WizFi310 can connect UDP connection without peer
system information like IP address and port number. Before peer system
is connected to WizFi310, WizFi310 does not send data to peer system. So
you should be careful when using &#60;UDP Server Mode&#62;.

    {0,192.168.12.23,5001,11}Hi WizFi310  ( Receiving data from peer system )
    
    AT+SSEND=0,,,5                     ( Sending data to a Socket with CID 0 )
    Hello           &#60;= When serial data is 5byte, WizFi310 send this data to peer system
    [OK ]

  
  

#### AT+SCON

  
AT+SCON=&#60;OpenType&#62;,&#60;SocketType&#62;,&#60;RemoteIP&#62;,&#60;RemotePort&#62;,&#60;LocalPort&#62;,&#60;DataMode&#62;  
  
This section explains the usage of &#60;Open Type&#62; parameter of
&#60;AT+SCON&#62; command. This table describes values of &#60;Open Type&#62;
parameter.

| Parameter | Meaning                              |
| --------- | ------------------------------------ |
| S         | Register as a Service                |
| O         | Open at Once                         |
| SO        | Open at Once & Register as a Service |

##### &#60;S&#62; : Register as a Service

When using this parameter, WizFi310 will try to connect to peer system
using TCP or UDP when power is on.

    AT+WLEAVE
    [OK]
    
    AT+WSET=0,WizFiDemoAP
    [OK]
    
    AT+WSEC=0,WPA2,12345678
    [OK]
    
    AT+WNET=1
    [OK]
    
    AT+SCON=S,TSN,,,5000,0
    [OK]
    
    AT+MPROF=S
    [OK]
    
    AT+MRESET
    [OK]
    WizFi310 Version 0.9.0.0 (WIZnet Co.Ltd)
    Joining : WizFiDemoAP
    Successfully joined : WizFiDemoAP
    
    [Link-Up Event]
      IP Addr    : 192.168.12.10
      Gateway    : 192.168.12.1
    
    AT+SMGMT=?
    Number of Sockets : 1 (SCID/Mode/Remote/Local/DataMode)
    0/TSN/0.0.0.0:0/5000/0
    [OK]
    
##### &#60;O&#62; : Open at Once

When using this parameter, WizFi310 will try to connect to peer system
using TCP or UDP when enter the &#60;AT+SCON&#62; command. For using this
parameter, WizFi310 should be already associated with AP or running AP
mode. In this section, we have only explained steps in Station Mode. In
AP Mode, you can use this command like in Station Mode  

    AT+WLEAVE
    [OK]
    
    AT+WSET=0,WizFiDemoAP
    [OK]
    
    AT+WSEC=0,WPA2,12345678
    [OK]
    
    AT+WNET=1
    [OK]
    
    AT+WJOIN
    Joining : WizFiDemoAP
    Successfully joined : WizFiDemoAP
    
    [Link-Up Event]
      IP Addr    : 192.168.12.10
      Gateway    : 192.168.12.1
    [OK]
    
    AT+SCON=O,TCN,192.168.12.23,5000,,0
    [OK]
    
    [CONNECT 0]

##### &#60;SO&#62; Open at Once & Register as a Service

When using this parameter, you can use functions of &#60;S&#62; and &#60;O&#62; at
the same time. When using this parameter, WizFi310 will try to connect
to peer system momentarily. And if you restart WizFi310, WizFi310 will
try to connect to AP and peer system.

    AT+WLEAVE
    [OK]
    
    AT+WSET=0,WizFiDemoAP
    [OK]
    
    AT+WSEC=0,WPA2,12345678
    [OK]
    
    AT+WNET=1
    [OK]
    
    AT+WJOIN
    Joining : WizFiDemoAP
    Successfully joined : WizFiDemoAP
    
    [Link-Up Event]
      IP Addr    : 192.168.12.10
      Gateway    : 192.168.12.1
    [OK]
    
    AT+SCON=SO,TCN,192.168.12.23,5000,,0
    [OK]
    [CONNECT 0]
    
    AT+MPROF=S
    [OK]
    
    AT+MRESET
    [OK]
    
    WizFi310 Version 0.9.0.0 (WIZnet Co.Ltd)
    Joining : WizFiDemoAP
    Successfully joined : WizFiDemoAP
    
    [Link-Up Event]
      IP Addr    : 192.168.12.10
      Gateway    : 192.168.12.1
    
    [CONNECT 0]
   
## Example - SSL Connection

  
This section explains how to connect to and communicate with SSL server.
To connect to SSL server, use &#60;TCS(TCP Client SSL)&#62; parameter of
&#60;AT+SCON&#62; command. ( When using UDP and TCP Server, WizFi310 cannot
use SSL Connection. ) In order to use SSL connection, you can use AT
command as below.

    AP Association                    ( Refers to Association & Disassociation Example )
    
    AT+FDNS=facebook.com,3000
    173.252.120.68
    [OK]
    AT+SCON=O,TCS,173.252.120.68,443,,0    ( Connect to Facebook.com using SSL Connection )
    [OK]
    
    [CONNECT 0]
    AT+SSEND=0,,,18
    [0,,,18]
    ...
    GET / HTTP/1.1{0x0d}{0x0a}                      ( Send data to Facebook )
    {0x0d}{0x0a}
    ...
    [OK]
    {0,173.252.120.68,443,1500}HTTP/1.1 400 Bad Request     ( Receive data from Facebook )
    Content-Type: text/html; charset=utf-8
    Date: Tue, 24 May 2016 06:03:48 GMT
    Connection: close
    Content-Length: 2959
    
    &#60;!DOCTYPE html&#62;
    &#60;html lang="en" id="facebook"&#62;
    &#60;head&#62;
    &#60;title&#62;Facebook | Error&#60;/title&#62;
    &#60;meta charset="utf-8"&#62;
    &#60;meta http-equiv="cache-control" content="no-cache"&#62;
    &#60;meta http-equiv="cache-control" content="no-store"&#62;
    &#60;meta http-equiv="cache-control" content="max-age=0"&#62;
    &#60;meta http-equiv="expires" content="-1"&#62;
    &#60;meta http-equiv="pragma" content="no-cache"&#62;
    &#60;meta name="robots" content="noindex,nofollow"&#62;
    
    ....
    
    [DISCONNECT 0]
    
## Example - Socket Connection with Domain name

  
When you want to connect the Web Server. you have to use the AT+SCON
Command. but the parameters of AT+SCON are IP and Port instead of Domain
name.  
When It case, It is useful to use AT+SDNAME for getting the IP from
Domain name.  
AT+SDNAME=&#60;Domain Name&#62;  
Destination IP would be set using DNS Query when this Command set. 

&#62;

    WizFi310 Version 1.0.0.0 (WIZnet Co.Ltd)
    AT+WSET=0,WizFiDemoAP
    [OK]
    AT+WSEC=0,,12345678
    [OK]
    AT+WNET=1
    [OK]
    AT+WJOIN

    [Link-Up Event]
    IP Addr : 192.168.3.55
    Gateway : 192.168.3.1
    [OK]

    AT+SDNAME=facebook.com
    [OK]
    AT+SCON=O,TCS,0.0.0.0,443,,0
    [OK]

    [CONNECT 0]

    AT+SMGMT=?
    Number of Sockets : 1 (SCID/Mode/Remote/Local/DataMode)
    0/TCS/69.171.230.68/443/32337/0
    [OK]

## Example - Auto re-connection

  
Some times you need to set WizFi310 which can be set for TCP
re-connection automatically. If you use AT+FSOCK command as below, you
can use WizFi310 in order to retry connection automatically.

  
  
AT+FSOCK=6,n  
  
This command means that WizFi310 will check every &#60;n&#62; seconds whether
socket is connected or not. If socket is not connected during &#60;n&#62;
second, WizFi310 will retry connection. ( For using AT+FSCOK command,
AT+SCON command is set to &#60;S&#62; or &#60;SO&#62; option. )
&#62;
  
    AT+WSET=0,WizFiDemoAP
    [OK]
    AT+WSEC=0,,12345678
    [OK]
    AT+WNET=1
    [OK]
    AT+SCON=S,TCN,222.98.173.250,6002,,0
    [OK]
    AT+FSOCK=6,30
    [OK]
    AT+MPROF=S
    [OK]

    WizFi310 Version 1.0.0.0 (WIZnet Co.Ltd)
    Joining : WizFiDemoAP
    Successfully joined : WizFiDemoAP

    [Link-Up Event]
    IP Addr : 192.168.3.52
    Gateway : 192.168.3.1

    [CONNECT 0]

    [DISCONNECT 0]
    (Socket is disconnected due to unknown reason )

    [DISCONNECT 0]
    (1st fail and try to connect socket after 30 seconds )

    [DISCONNECT 0]
    (2nd fail and try to connect socket after 30 seconds again )

    [CONNECT 0]
    (Connection is success after 30 seconds )


## Example - Auto re-start

  
This example describe how to use &#60;auto restart&#62; function when
connection is fail or disconnected If you use these commands, you can
set WizFi310 for using auto re-connection and automatically restart when
repeats connection a specific number of times.  
&#62;

    WizFi310 Version 1.0.0.0 (WIZnet Co.Ltd)
    AT+WSET=0,WizFiDemoAP
    [OK]
    AT+WSEC=0,,12345678
    [OK]
    AT+WNET=1
    [OK]
    AT+SCON=S,TCN,192.168.3.100,5000,,0
    [OK]
    AT+FSOCK=8,20
    [OK]
    AT+MPROF=S
    [OK]
    AT+MRESET
    [OK]

    WizFi310 Version 1.0.0.0 (WIZnet Co.Ltd)

    [Link-Up Event]
      IP Addr    : 192.168.3.52
      Gateway    : 192.168.3.1

    [DISCONNECT 0] (1st fail)

    [Link-Down Event]
    WizFi310 Version 1.0.0.0 (WIZnet Co.Ltd) (It will be restarted because
    tcp connection is fail during 20 seconds)

    [Link-Up Event]
      IP Addr    : 192.168.3.52
      Gateway    : 192.168.3.1

    [CONNECT 0] (WizFi310 will retry connection. then this message will be
    printed) 

## Example - Air Command 
This section explains how to operate Air-command-mode of WizFi310. With
this Air-command-mode included in the WizFi310, you can issue AT
commands to the module via WiFi, while the WizFi310 is in the TCP server
or UDP server operation mode.

Please have a look at the following hints:


  * Air-command-mode should only be used for configuration of WizFi310. It is not recommended to use the command mode for other purpopses.
  * The Air-command-mode will automatically be started, when the module WizFi310 will be booted into the AP mode. The module can then be configured on the port 50001 on its IP address.


The AT command consists of following parts: Command header
(`WizFi310AirCmd:`), AT command (for example:'' AT`) and Carriage Return
(`r'').

The command should be sent with these conditions:

  * The command header "WizFi310AirCmd:" is case sensitive and has to be sent in this kind. It is 15 Bytes long. 
  * A &#60;Carriage Return, 0x0d&#62; has to follow the AT command directly.
  * Air-command header, AT command and Carriage Return should be combined into one packet.


Example usage of the WizFi310AirCmd:

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/aircmd_intro.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/aircmd_intro.png").default} alt=""/></a>  
&#62;

    AT+WSET=1,WizFi310_AIRCMD
    [OK]
    AT+WSEC=1,WPA2,123456789
    [OK]
    AT+WNET=0,192.168.11.1,255.255.255.0,192.168.11.1
    [OK]
    AT+WJOIN

    [Link-Up Event]
    IP Addr : 192.168.11.1
    Gateway : 192.168.11.1
    [OK]

    AT+MAIRCMD=O,T,50001,0
    [OK]

Now, TCP Client can connect to the WizFi310 and issue the AT commands
via WiFi as below.
&#62;

    (TCP Client TX) 
    WizFi310AirCmd:AT+MINFOr (24 Byte)
    (RX) 
    FW version/HW version
    1.0.0.0/WizFi310 Rev 1.0
    [OK]

    (TCP Client TX) 
    WizFi310AirCmd:AT+WSEC=?r (25 Byte)
    (RX) 
    1,WPA2,123456789
    [OK]

    (TCP Client TX) 
    WizFi310AirCmd:AT+WSEC=1,WPA2,aaaabbbbr (39 Byte)
    (RX) 
    [OK]

    (TCP Client TX) 
    WizFi310AirCmd:AT+MMAC=?r (25 Byte)
    (RX) 
    00:08:DC:00:55:76
    [OK]


## Example - Serial to Wi-Fi Setting using Android App

  
If you use &#60;Air Command&#62;, You can configure WizFi310 using device
which can use TCP like &#60;Android App&#62;.  

#### WizFi310 Setting

In order to config the WizFi310 using Android APP, WizFi310 should
operate as SoftAP mode.  
After operating SoftAP,
&#60;[AT+MAIRCMD](at_commands#atmaircmd)&#62;
command should be set like "Example - Air Command".

Another way for setting WizFi310 in order to use &#60;Android app&#62;, You
have to press once function key of WizFi310. If you press function key
once, WizFi310 will be changed to &#60;Soft AP Mode&#62; and open TCP port
50001 for using &#60;Air Command Mode&#62;.

  
#### App example download 

You can download the App for configuration of WizFi310 at link below.  
App install file - [Google Play Store](https://play.google.com/store/apps/details?id=wiznet.wizfi310_config_tool)   Source Code - [GitHub
Repository](https://github.com/wpgnss/WizFi310_Config_Tool_Android) 

#### General Settings

This picture shows the configuration page of WizFi310 Config Tool. If you want to use &#60;WizFi310 Config Tool&#62;,
WizFi310 will be set to &#60;Soft AP mode&#62;

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/set_info.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/set_info.png").default} alt=""/></a>

  - **WizFi310**
     * **WizFi310 SSID** : SSID of WizFi310.
     * **WizFi310 PASSWORD** : Password of WizFi310.
     * **Aircmd IP** : IP address of WizFi310.
     * **Aircmd Port** : Port number of WizFi310.
 

  - **Access Point**
     * **AP SSID** : SSID of AP which will be connected with WizFi310.
     * **AP PASSWORD** : Passworkd of AP which will be connected with WizFi310.


  - **Destination Server** 
     * **Server IP** : IP address of TCP Server which WizFi310 will want to connect.
     * **Server Port** : Port number of TCP Server which WizFi310 will want to connect.


  - **SSL_Enable** : You have to check if you want to use SSL
    when WizFi310 connect to TCP Server.
  - **Datamode_Enable** : You have to check if you want to use
    &#60;Data Mode&#62; when WizFi310 connect to TCP Server.
  - **SAVE CONFIG** : Save these configuration value at
    &#60;WizFi310_Config_Tool_Android&#62;

  

#### Scan SSID of WizFi310

If you push &#60;SCAN&#62; button, &#60;WizFi310 Config Tool&#62; will search SSID
of WizFi310. If SSID of WizFi310 doesn't match &#60;WizFi310 SSID&#62; value
in general setting, &#60;WizFi310 Config Tool&#62; will display error message.

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/find_ap.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/find_ap.png").default} alt=""/></a>

#### Join to scanned AP

If you push &#60;Join&#62; button after scan SSID of WizFi310, &#60;WizFi310
Config Tool&#62; will connect to WizFi310.

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/join_ap.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/join_ap.png").default} alt=""/></a>

#### Set Air Command to WizFi310

If you push &#60;AIR COMMAND&#62; button after previous step is done
successfully, &#60;WizFi310 Config Tool&#62; will set WizFi310 in order to
join to AP and connect to destination server.

<a target="_blank" href={require("/img/products/wizfi310/wizfi310pg/set_atcmd.png").default}><img src={require("/img/products/wizfi310/wizfi310pg/set_atcmd.png").default} alt=""/></a>

## Example - MQTT

You can find the examples of mqtt using the WizFi310 at following
link.  
  
**Refer to [MQTT Example](mqtt_example)**

## Example - GMMP

You can find the examples of gmmp using the WizFi310 at following
link.  
  
**Refer to [GMMP Example(written korean)](gmmp_example)**
## Example - ThingPlug

You can find the examples of connecting to ThingPlug using the WizFi310
at following link.  
  
**Refer to [ThingPlug Example(written in Korean)](thingplug_example)**
