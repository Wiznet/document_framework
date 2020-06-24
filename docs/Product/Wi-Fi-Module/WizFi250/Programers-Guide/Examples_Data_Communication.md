---
id: examples_data_communication
title: Examples - Data Communication
date: 2020-04-24
---

## Method of setting TCP Client and exchanging data in Data Mode

#### Socket Open

This section explains how to open < TCP Client Socket> and communicate with peer system. Below is an example showing how to set TCP Client and change the mode to data mode. It also explains parameters of < AT+SCON> command.
      
`(AT+SCON=< OpenType>,< SocketType>,< RemoteIP>,< RemotePort>,< LocalPort>,< DataMode>)`

If you enter < O> or < SO> value to < Open Type> parameter, WizFi250 will try to connect to TCP Server immediately.
      
But when using < S> value, WizFi250 will try to connect to TCP Server after reboot and you have to set SocketType,RemoteIP,RemotePort and LocalPort as below
      
In order to set WizFi250 to data mode, you have to enter 1 value to < Data Mode> parameter of AT+SCON command. For detailed information to this command, refer to AT+SCON. 
      
 * Mode: Data Mode, TCP Client
 * Remote IP : 192.168.12.102
 * Remote Port : 5000
 * Local Port : 5001
  
```
AP Association                    ( Refers to Association & Disassociation Example )

AT+SCON=O,TCN,192.168.12.102,5000,5001,1 ( AT command connecting with a TCP Client Socket )
[OK]

[CONNECT 0]                          < = At this point, a TCP connection is done 
```

#### Exchanging data with a peer system

If WizFi250 successfully connects to a peer system, WizFi250 will print [CONNECT(CID)] message and enter data mode. In data mode, WizFi250 can send serial data to peer system and receive network data from peer system without other translation.

#### Socket Close

In order to close TCP connection, WizFi250 has to switch to AT Command Mode. ( When +++ message entered, WizFi250 can be changed to AT Command Mode. ) After being changed to AT Command Mode, TCP Connection can be closed by using < AT+SMGMT=CID> or < AT+SMGMT=ALL> command.

#### Checking Socket Status

After being changed to AT Command Mode, TCP Connection can be closed by using < AT+SMGMT=CID> or < AT+SMGMT=ALL> command.

```
AT+SMGMT=?
Number of Sockets : 1 (SCID/Socket/Mode/Remote/Local/DataMode)
0/TCN/192.168.12.23:5000/5001/1
[OK]
```

## Method of setting TCP Server and exchanging data in Data Mode

#### Socket Open

This section explains how to open < TCP Server Socket> and communicate with peer system. Below is the example for setting TCP Server and then changing to data mode. For detailed information about < AT+SCON> command, refer to AT+SCON and Socket Open.
       * Mode : Data Mode, TCP Server
       * Local Port : 5000

```  
AP Association              ( Refer to Association & Disassociation Example )

AT+SCON=O,TSN, , ,5000,1        ( AT command listening with a TCP Server Socket )
[OK]

[CONNECT 0]          < = When TCP connection is done, you can see this message
```   

#### Exchanging data with a peer system

Exchanging data with its peer system is the same as previous [Exchanging data with a peer system.]()

#### Socket Close

Closing socket connection is the same as previous [Socket Close]().

#### Checking Socket Status

Checking socket status is the same as previous [Checking Socket Status.]()

## Method of setting UDP Client and exchanging data in Data Mode

#### Socket Open

This section explains how to open < UDP Client Socket> and communicate to peer system. Below is an example for setting up UDP Client and changing into data mode. For detailed information about < AT+SCON> command, refer to [AT+SCON]() and [Socket Open.]()
       * Mode : Data Mode, UDP Client
       * Remote IP : 192.168.12.23
       * Remote Port : 5001
       * Local Port : 5000
 
```
AP Association              ( Refer to Association & Disassociation Example )

AT+SCON=O,UCN,192.168.12.23,5001,5000,1 
[OK]

[CONNECT 0]                          < = At this point, a UDP connection is done 
```

#### Exchanging data with a peer system

Exchanging data with its peer system is the same as previous [Exchanging data with a peer system.]()

#### Socket Close

Closing socket connection is the same as previous [Socket Close.]()

#### Checking Socket Status

Checking socket status is the same as previous [Checking Socket Status.]()

## Method of setting UDP Server and exchanging data in Data Mode

#### Socket Open

This section explains how to open <  UDP Server Socket> and communicate to peer system. Below is an example for setting up UDP Server and changing into data mode. For detailed information about <  AT+SCON> command, refer to [AT+SCON]() and [Socket Open]().
       * Mode: Data Mode, UDP Server
       * Local Port: 5000
  
     AP Association              ( Refer to Association & Disassociation Example )

    AT+SCON=O,USN, , ,5000,1
    [OK]

    [CONNECT 0]                          < = At this point, a UDP connection is done 
    
#### Exchanging data with a peer system

< UDP Server Mode> can connect UDP connection without peer systes information like IP address and port number. But before peer system is connected to WizFi250, WizFi250 does not send data to peer system because WizFi250 does not know its information. Thus peer system must send data to WizFi250 in order to know peer system’s information like below.
![](/img/products/wizfi250/wizfi250pg/caution_when_using_udp_server_mode.png)
The other information for exchanging data is same as [Exchanging data with a peer system.]()

#### Socket Close

Closing socket connection is the same as previous Socket Close.

#### Checking Socket Status

Checking socket status is the same as previous Checking Socket Status.

## Method of setting TCP Client and exchanging data in Command Mode

#### Socket Open

This section explains how to set <  TCP Client> in <  Command Mode> and communicate to peer system. Below is the example for setting TCP Client on the Command Mode . In order to enter in the Command Mode, you have to enter 0 value to <  Data Mode> parameter of <  AT+SCON> command. For detailed information to this command, refer to AT+SCON
       * Mode : Command Mode, TCP Client
       * Remote IP: 192.168.12.23
       * Remote Port : 5000
       * Local Port : 5001
   
    AP Association              ( Refer to Association & Disassociation Example )

    AT+SCON=O,TCN,192.168.12.23,5000,5001,0
    [OK]

    [CONNECT 0]                            < = At this point, a TCP connection is done 
  
#### Exchanging data with a peer system

If WizFi250 connects to peer system successfully, WizFi250 will print [CONNECT(CID)] message. At this time, WizFi250 is in command mode. In order to send data to peer system, you have to use <  AT+SSEND=CID, Destination IP, Destination Port, Data Length> command. If you input serial command like <  Data Length> , WizFi250 will send serial data to peer system.
  
    AT+SSEND=0,,,5   ( Sending data to a Socket with CID 0 )
    Hello             < = When serial data is 5byte, WizFi250 send this data to peer system
    [OK]

    {0,192.168.12.23,5000,11}Hi WizFi250  ( Receiving data from pear system )
 
#### Socket Close

In < AT Command Mode>, TCP connection can be closed through < AT+SMGMT=CID> or < AT+SMGMT=ALL> command.

#### Checking Socket Status

In < AT Command Mode>, Information of connected sockets are shown by using < AT+SMGMT=?> command.
  
    AT+SMGMT=?
    Number of Sockets : 1 (SCID/Socket/Mode/Remote/Local/DataMode)
    0/TCN/192.168.12.23:5000/5001/0
    [OK]
   
## Method of setting TCP Server and exchanging data in Command Mode

#### Socket Open
This section explains how to set < TCP Server> in < Command Mode> and communicate to peer system. Below is the example for setting TCP Server on the Command Mode. For detailed information about < AT+SCON> command, refer to AT+SCON and Socket Open.
       * Mode : Command Mode, TCP Server
       * Local Port : 5000

  
      AP Association              ( Refer to Association & Disassociation Example )

      AT+SCON=O,TSN, , ,5000,0        ( AT command listening with a TCP Server Socket )
      [OK]

      [CONNECT 0] 
 

#### Exchanging data with a peer system
Exchanging data with its peer system is the same with previous Exchanging data with a peer system.

#### Socket Close
Closing socket connection is the same with previous Socket Close.


## Method of setting UDP Client and exchanging data in Command Mode

#### Socket Open

This section explains how to set < UDP Client> in < Command Mode> and communicate to peer system. Below is an example for setting UDP Client on Command Mode. For detailed information about < AT+SCON> command, refer to AT+SCON and Socket Open.
         * Mode : Command Mode, UDP Client
         * Remote IP : 192.168.12.23
         * Remote Port : 5001
         * Local Port : 5000
 
  
      AP Association              ( Refer to Association & Disassociation Example )

      AT+SCON=O,UCN,192.168.12.23,5001,5000,0 
      [OK]

      [CONNECT 0]                          < = At this point, a UDP connection is done 
 
  
#### Exchanging data with a peer system

Exchanging data with its peer system is the same as previous Exchanging data with a peer system.

#### Socket Close

Closing socket connection is the same as previous Socket Close.


## Method of setting UDP Server and exchanging data in Command Mode

#### Socket Open

This section explains how to open < UDP Server Socket> in Command Mode and communicate to peer system. Below is an example for setting UDP Server on Command Mode. For detailed information about < AT+SCON> command, refer to AT+SCON and Socket Open.
       * Mode : Command Mode, UDP Server
       * Local Port : 5000
 
  
      AP Association              ( Refer to Association & Disassociation Example )

      AT+SCON=O,USN, , ,5000,0 
      [OK]

      [CONNECT 0] 
  
   
#### Exchanging data with a peer system

< UDP Server Mode> of WizFi250 can connect UDP connection without peer system information like IP address and port number. Before peer system is connected to WizFi250, WizFi250 does not send data to peer system. So you should be careful when using < UDP Server Mode>.

{0,192.168.12.23,5001,11}Hi WizFi250  ( Receiving data from peer system )

      AT+SSEND=0,,,5                     ( Sending data to a Socket with CID 0 )
      Hello           < = When serial data is 5byte, WizFi250 send this data to peer system
      [OK ]

## AT+SCON

AT+SCON=< OpenType>,< SocketType>,< RemoteIP>,< RemotePort>,< LocalPort>,< DataMode>

This section explains the usage of < Open Type> parameter of < AT+SCON> command. This table describes values of < Open Type> parameter.

Parameter	Meaning
S	Register as a Service
O	Open at Once
SO	Open at Once & Register as a Service
< S> : Register as a Service
When using this parameter, WizFi250 will try to connect to peer system using TCP or UDP when power is on.
      
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
      WizFi250 Version 0.9.0.0 (WIZnet Co.Ltd)
      Joining : WizFiDemoAP
      Successfully joined : WizFiDemoAP

      [Link-Up Event]
        IP Addr    : 192.168.12.10
        Gateway    : 192.168.12.1

      AT+SMGMT=?
      Number of Sockets : 1 (SCID/Mode/Remote/Local/DataMode)
      0/TSN/0.0.0.0:0/5000/0
      [OK]
 
  
< O> : Open at Once
When using this parameter, WizFi250 will try to connect to peer system using TCP or UDP when enter the < AT+SCON> command. For using this parameter, WizFi250 should be already associated with AP or running AP mode. In this section, we have only explained steps in Station Mode. In AP Mode, you can use this command like in Station Mode

      
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
< SO> Open at Once & Register as a Service
When using this parameter, you can use functions of < S> and < O> at the same time. When using this parameter, WizFi250 will try to connect to peer system momentarily. And if you restart WizFi250, WizFi250 will try to connect to AP and peer system.
  
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

      WizFi250 Version 0.9.0.0 (WIZnet Co.Ltd)
      Joining : WizFiDemoAP
      Successfully joined : WizFiDemoAP

      [Link-Up Event]
        IP Addr    : 192.168.12.10
        Gateway    : 192.168.12.1

      [CONNECT 0]



## Example of SSL Connection

This section explains how to connect to and communicate with SSL server. To connect to SSL server, use < TCS(TCP Client SSL)> / < TSS(TCP Server SSL)> parameter of < AT+SCON> command. ( When using UDP, WizFi250 cannot use SSL Connection. ) In order to use SSL connection, you can use AT command as below.

      AT+SCON=SO,TCS,199.59.148.212,443,5000,0
      [OK]

      [CONNECT 0]
      AT+SSEND=0,,,18
      GET / HTTP/1.1{0x0d}{0x0a}
      {0x0d}{0x0a}
      [OK]
      
{0,173.194.33.38,443,990}HTTP/1.1 302 Found
Location: https://www.google.co.kr/
Cache-Control: private
Content-Type: text/html; charset=UTF-8
Set-Cookie: PREF=ID=3e64d81fb97c7e6c:FF=0:TM=1371553236:LM=1371553236:S=H3NKySD63UwelF_z; expires=Thu, 18-Jun-2015 11:00:36 GMT; path=/; domain=.google.com
Set-Cookie: NID=67=vtzYXz5msxRYzO-KzH5EKgcnABE4_YOcbUG1RGXufiQM2PNc84gyr8O12VNkOOap8MUCmGNQfnfsGMarSS9Jlkb7MiZdIQxrJg-FL1uKUqgSBA2CGIEqI5syrKnNW2YK; expires=Wed, 18-Dec-2013 11:00:36 GMT; path=/; domain=.google.com; HttpOnly
P3P: CP="This is not a P3P policy! See http://www.google.com/support/accounts/bin/answer.py?hl=en&answer=151657 for more info."
Date: Tue, 18 Jun 2013 11:00:36 GMT
Server: gws
Content-Length: 222
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN

< HTML>< HEAD>< meta http-equiv="content-type" content="text/html;charset=utf-8">< TITLE>302 Moved< /TITLE>< /HEAD>< BODY>< H1>302 Moved< /H1>The document has moved< A HREF="https://www.google.co.kr/">here< /A>.
< /BODY>< /HTML>
 [DISCONNECT 0]

## Example of Multi Socket Connection

This section explains how to use < Multi Socket Connection> function. WizFi250 can use max 8 TCP or UDP sockets. In order to use < Multi Socket Connection> function, you can use AT command as below. In this example, the peer system was running a loop back program. So if peer system received data from WizFi250, peer system will send received data to WizFi250.

#### AP Association

      AT+SCON=O,TCN,192.168.12.23,5000,5001,0
      [OK]

      [CONNECT 0]
      AT+SCON=O,TSN,,,6000,0
      [OK]

      [CONNECT 1]
      AT+SCON=O,UCN,192.168.12.23,7000,7000,0
      [OK]

      [CONNECT 2]
      AT+SCON=O,USN,,,8000,0
      [OK]

      [CONNECT 3]
      AT+SMGMT=?
      Number of Sockets : 4 (SCID/Socket/Mode/Remote/Local/DataMode)
      0/TCN/192.168.12.23:5000/5001/0
      1/TSN/192.168.12.23:58769/6000/0
      2/UCN/192.168.12.23:7000/7000/0
      3/USN/0.0.0.0:/8000/0
      [OK]

      AT+SSEND=0,,,16
      Hello_TCP_Client
      [OK]

      {0,192.168.12.23,5000,16}Hello_TCP_Client

      AT+SSEND=1,,,16
      Hello_TCP_Server
      [OK]

      {1,192.168.12.23,58769,16}Hello_TCP_Server

      AT+SSEND=2,,,16
      Hello_UDP_Client
      [OK]

      {2,192.168.12.23,7000,16}Hello_UDP_Client
      {3,192.168.12.23,8000,16}Hello_UDP_Server
      AT+SSEND=3,,,16
      Hello_UDP_Server
      [OK]

## Air Command mode - WizFi250AirCmd

This section explains how to operate Air-command-mode of WizFi250. With this Air-command-mode included in the WizFi250, you can issue AT commands to the module via WiFi, while the WizFi250 is in the TCP server or UDP server operation mode.

Please have a look at the following hints:

Air-command-mode should only be used for configuration of WizFi250. It is not recommended to use the command mode for other purpopses.
The Air-command-mode will automatically be started, when the module WizFi250 will be booted into the AP mode. The module can then be configured on the port 50001 on its IP address.
The AT command consists of following parts: Command header (WizFi250AirCmd:), AT command (for example: AT) and Carriage Return (\r).

The command should be sent with these conditions:

The command header “WizFi250AirCmd:” is case sensitive and has to be sent in this kind. It is 15 Bytes long.
A < Carriage Return, 0x1d> has to follow the AT command directly.
Air-command header, AT command and Carriage Return should be combined into one packet.
Example usage of the WizFi250AirCmd:

      AT+WSET=1,WizFi250_AIRCMD
      [OK]
      AT+WSEC=1,WPA2,123456789
      [OK]
      AT+WNET=0,192.168.11.1,255.255.255.0,192.168.11.1
      [OK]
      AT+WJOIN

      [Link-Up Event]
        IP Addr    : 192.168.11.1
        Gateway    : 192.168.11.1
      [OK]

      AT+MAIRCMD=O,T,50001,0
      [OK]

Now, TCP Client can connect to the WizFi250 and issue the AT commands via WiFi as below.

      (TCP Client TX) 
      WizFi250AirCmd:AT+MINFO\r (24 Byte)
      (RX) 
      FW version/HW version
      1.0.1.8/WizFi250 Rev 1.0
      [OK]

      (TCP Client TX) 
      WizFi250AirCmd:AT+WSEC=?\r (25 Byte)
      (RX) 
      1,WPA2,123456789
      [OK]

      (TCP Client TX) 
      WizFi250AirCmd:AT+WSEC=1,WPA2,aaaabbbb\r (39 Byte)
      (RX) 
      [OK]

      (TCP Client TX) 
      WizFi250AirCmd:AT+MMAC=?\r (25 Byte)
      (RX) 
      00:08:DC:00:55:76
      [OK]