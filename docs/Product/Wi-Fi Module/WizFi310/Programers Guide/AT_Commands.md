---
id: at_commands
title: AT Commands
date: 2020-03-
---


## Content
# AT Command Set

This section provides a list of WizFi310 AT commands and their effects.
Users can input commands and parameters through UART line. Every command
starts with the characters “AT”. Any other initial character will cause
an error in return. Commands and parameters are all ASCII characters,
e.g. When you input 'AT+MMSG=1', you can input ASCII characters 'A',
'T', '+', 'M', 'M', 'S', 'G', '=', '1' and 'Enter Key' which should be
CR(0x0d), but neither CRLF(0x0d, 0x0a) nor LF(0x0a).  
  
Some parameters are mandatory and the others are optional. (refer to
Command Tables) Parameters must be entered in an order of format column
given by the command tables. Even though an optional parameter is not
used, the comma delimiters must still be included in the command. In
most cases, valid commands return the characters \[OK\]. Invalid inputs
return \[ERROR\]. The possible responses sent by WizFi310 to the user
side are described at Responses. Below is a possible example which users
can input. As you can see, WizFi310 return “\\r\\n” back instead of
“\\r”, which means user (host system) always handle '\\r\\n' as a
only delimiter.  

| Input by User        | AT\\r (0x61 0x74 0x0d)                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Output from WizFi310 | AT\\r\\n\[OK\]\\r\\n (0x61 0x74 0x0d 0x0a 0x5b 0x4f 0x4b 0x5d 0x0d 0x0a) (\* “AT\\r\\n” is Echo back of user input) |

## Responses

Responses are listed below.

|Response	|Meaning|
|---------|-------|
|[OK]|	Command Request Success|
|[ERROR]	|Command Request Fail|
|[ERROR: INVALID INPUT]|	Wrong command or parameter|
|[ERROR: INVALID SCID]	|Wrong Socket ID|
|[ERROR: WiFi Status]|	Wrong WiFi Status (Some commands work only with Wi-Fi Joined status)|
|[ERROR: Mode Status]|	Wrong Mode Status (Some commands do not work in Data mode)|
|[CONNECT x]|	TCP Connection established & Socket Open|
|[DISCONNECT x]|	TCP Connection closed & Socket Close|
|[Link-Up Event]	|WiFi Connection was established|
|[Link-Down Event]	|WiFi Connection was closed|
|[Reset Event]	|System reset occurred (not by user)|



## Command List

|Basic Commands||
|-------|-------|
|AT|	Terminal Check|
|**WiFi Commands**||
|AT+WJOIN|	WiFi Association|
|AT+WLEAVE|	WiFi Disassociation|
|AT+WSCAN|	WiFi Scan|
|AT+WSET	|WiFi SSID Configuration|
|AT+WSET2|	WiFi SSID Configuration for special Chars|
|AT+WSEC|	WiFi Security Configuration|
|AT+WNET	|Network Configuration|
|AT+WSTAT	|Get Current WiFi Status|
|AT+WWPS|	WiFi WPS Connection|
|AT+WADNS	|Add DNS Server|

|Network Commands||
|-----------|---------|
|AT+SCON	|Socket Open/Connect|
|AT+SMGMT	|Socket Management|
|AT+SSEND	|Data Send|
|AT+SDATA	|Return to Data Mode|
|AT+SFORM	|Define Data Receive Header Form|
|AT+SOPT|	S2W Socket Option|
|AT+SOPT1|	S2W miscellaneous option|

|Management Commands||
|-------------------|---|
|AT+MPROF|	Profile Management|
|AT+MFDEF	|Perform Factory Reset|
|AT+MRESET|	Perform System Reset|
|AT+MMSG	|Set Message Print Level|
|AT+MMAC	|Set MAC Address|
|AT+MINFO|	Get System Information|
|AT+MECHO|	Set Echo Mode|
|AT+MHELP|	Print Command Description and Usage|
|AT+MMCUPS|	MCU Power Save Enable/Disable|
|AT+MWIFIPS	|Wi-Fi Power Save Enable/Disable|
|AT+USET	|UART Configuration|
|AT+MCUSTOM|	Custom code|
|AT+MAIRCMD|	Air Command Configuration|
|AT+MEVTMSG	|Print [Listen x] as soon as it opens up a socket through TCP server.|
|AT+MEVTFORM	|Event Message Form|
|AT+MUPGRADE|	Firmware upgrade using serial|

|Function Commands||
|----------------|---|
|AT+FPING	|PING Test|
|AT+FDNS	|DNS Query|
|AT+FGPIO	|GPIO Control|
|AT+FGETADC|	Read ADC value|
|AT+FSOCK|	SOCKET Extension Option|
|AT+FOTA	|Launch OTA Mode|

**Available Protocol**

|MQTT Commands||
|-------|------|
|AT+MQTTSET	|MQTT Configuration|
|AT+MQTTCON|	MQTT Connect/Disconnect|
|AT+MQTTSUB|	MQTT Subscribe|
|AT+MQTTPUB|	MQTT Publish|

|GMMP Commands||
|----------|---|
|AT+GMMPSET	|GMMP Configuration, Connect/Disconnect|
|AT+GMMPDATA|	GMMP Data Send|
|AT+GMMPOPT|	GMMP Option Management|

|Connecting ThingPlug Commands||
|------------------|---------|
|AT+SKTPCON|	Connecting authorization, Connect/Disconnect|
|AT+SKTPDEVICE	|Device registration|
|AT+SKTPCONTAINER |Container Create|
|AT+SKTPSEND|	Data sending to ThingPlug|
|AT+SKTPCMD|	Command registration to ThingPlug|
|AT+SKTPRESULT|	Response to ThingPlug Command|


## Basic Commands

Basic commands are listed below.

---
>

    AT

 * Format:
>

    AT
    
 * Meaning: Terminal Check
 
Check if AT Command Terminal is working.

 * Response:
>

    [OK]


## WiFi Commands

Commands related to WiFi are listed below.
---
>

    AT+WJOIN
    
  * Format:
>  
    
    AT+WJOIN
    
  * Meaning: WiFi Association
  
    In the STA mode, it joins with the BSS selected by AT+WSET(or AT+WSET2), AT+WSEC.
    And in the AP mode, it starts to run as an Access Point.

     * There are 2 Wi-Fi modes in WizFi310, STA mode and SoftAP mode. When users 
      execute AT+WJOIN command, the current Wi-Fi mode works as the one previously 
      selected by user input. It can be selected or checked by AT+WSET(or AT+WSET2) and       AT+WSEC commands, and it is the only way to handle Wi-Fi mode.

     * SoftAP mode does not support WEP security method.
  * Response:
 >
 
    [Link-Up Event]
    IP Addr    : xxx.xxx.xxx.xxx
    Gateway   : xxx.xxx.xxx.xxx
    [OK]
 >
 
    Already Associated : (Mode)
    [OK]

---
>

    AT+WLEAVE
    
  * Format:
>

    AT+WLEAVE
    
  * Meaning: WiFi Disassociation
  
In the STA mode, it leaves current Access Point, but in the SoftAP mode, it stops to run as Access Point.

  * Response:
>

    [Link-Down Event]
    [OK]

---
>

    **AT+WSCAN**

Format:
AT+WSCAN=<SSID>,<BSSID>,<Channel>
Meaning: WiFi Scan
Return the scan results filtered by parameters.

<SSID>: SSID Filter (Optional)
Scan only the AP which has this SSID.
<BSSID>: BSSID Filter (Optional)
Scan only the AP which has this BSSID.
<Channel>: Channel Filter (Optional)
Scan only the AP in this Channel.

* When combining these filters, it works at the same time. For example, if you enter AT+WSCAN=TestAP,00:08:DC:11:22:33', it only scans the AP which has TestAP as SSID and 00:08:DC:11:22:33 as BSSID in all the channel.

Examples)

AT+WSCAN=TestAP
AT+WSCAN=,,6
AT+WSCAN=,08:00:DC:11:22:33,11
Response:
Index/SSID/BSSID/RSSI(-dBm)/MaxDataRate(Mbps)/Security/RadioBand(GHz)/Channel
...
[OK]

AT+WSET



Format:
AT+WSET=<WiFiMode>,<SSID>,<BSSID>,<Channel>
Meaning: WiFi Configuration
<WiFiMode>: WiFi Mode to set (Required)
This changes current WiFi mode.

Parameter	Meaning
0	Set Wi-Fi mode as STA mode
1	Set Wi-Fi mode as AP mode
<SSID>: Target/Own SSID (Required, Max: 32 Character)

Mode	Meaning
STA	The SSID of target AP
AP	Its own SSID
<BSSID>: Target BSSID (Optional, Form: xx:xx:xx:xx:xx:xx)

Mode	Meaning
STA	The BSSID of target AP
AP	Not used. if any, it will be ignored
<Channel>: Target/Own Channel (Optional)

Mode	Meaning
STA	In STA mode, the Channel of target AP
AP	In AP mode, its own Channel to run (Default: 6)
* There are 2 Wi-Fi modes in WizFi310, STA mode and SoftAP mode. When users execute AT+WJOIN command, it works as Wi-Fi mode previously selected by the user. It can be selected or checked by AT+WSET(or AT+WSET2) and AT+WSEC commands, and it is the only way to handle Wi-Fi mode.

* AT+WSET(or AT+WSET2), AT+WSEC commands save its parameters into the profile automatically, so the user does not need to save the current profile.

Examples)

AT+WSET=0,WizFiAP
AT+WSET=0,WizFiAP,08:00:DC:11:22:33,1

Response:
[OK]

Format:
AT+WSET=?
Meaning: Get Current WiFi configuration Settings
Response:
<WiFiMode>,<SSID>,<BSSID>,<Channel>
[OK]

AT+WSET2



Format:
AT+WSET2=<WiFiMode>,<SSID>
Meaning: WiFi Configuration for SSID of special Characters like '“' ',' '共'
<WiFiMode>: WiFi Mode to set (Required)
This changes current WiFi mode.

Parameter	Meaning
0	Set Wi-Fi mode as STA mode
1	Set Wi-Fi mode as AP mode
<SSID>: Target/Own SSID (Required, Max: 32 Character)

Mode	Meaning
STA	The SSID of target AP
AP	Its own SSID to run
* There are 2 Wi-Fi modes in WizFi310, STA mode and SoftAP mode. When users execute AT+WJOIN command, it works as Wi-Fi mode previously selected by the user. It can be selected or checked by AT+WSET and AT+WSEC commands, and it is the only way to handle Wi-Fi mode.

* AT+WSET, AT+WSEC commands save its parameters into the profile automatically, so the user does not need to save the current profile.

Examples)

AT+WSET2=0,가나다”,無線共有器

Response:
[OK]

Format:
AT+WSET2=?
Meaning: Get Current WiFi configuration Settings
Response:
<WiFiMode>,<SSID>,<BSSID>,<Length of SSID>
[OK]

AT+WSEC



Format:
AT+WSEC=<WiFiMode>,<SecType>,<Key>
Meaning: WiFi Security Configuration
<WiFiMode>: Target WiFi mode to set (Required)

Parameter	Meaning
0	Set Wi-Fi mode as STA mode
1	Set Wi-Fi mode as AP mode
<SecType>: Security type (Optional)

Parameter	Meaning
OPEN	None
WiFi Auto Security
WEP	WEP (* Not support at SoftAP mode)
WPA	WPA1 - TKIP
WPAAES	WPA1 - AES
WPA2AES	WPA2 - AES
WPA2TKIP	WPA2 - TKIP
WPA2	WPA2 - Mixed
<Key>: Security key value

Method	Length
WEP	5 or 13 (ASCII), 10 or 26 (HEX)
WPA	8 ~ 63 (ASCII), 128 (HEX)
* There are 2 Wi-Fi modes in WizFi310, STA mode and SoftAP mode. When users execute AT+WJOIN command, it works as Wi-Fi mode previously selected by the user. It can be selected or checked by AT+WSET and AT+WSEC commands, and it is the only way to handle Wi-Fi mode.

* AT+WSET, AT+WSEC commands save its parameters into the profile automatically, it works as Wi-Fi mode previously selected by the user.

* Minimum key length is 8 bytes in WiFi Auto Security.
In case of WEP mode and 5 bytes key, you should input the key with HEX type.
AT+WSEC=0,,12345(X)
AT+WSEC=0,,3132333435(O)
In case of OPEN mode, you should input the 8 bytes dummy string. Then WizFi310 will ignore the dummy key in OPEN mode.
AT+WSEC=0,,(X)
AT+WSEC=0,,12345678(O)
Examples)

AT+WSEC=0,WEP,12345
AT+WSEC=1,WPA2,12345678
AT+WSEC=0,,123456789

Response:
[OK]

Format:
AT+WSEC=?
Meaning: Get the Current Security Mode and Settings
Response:
<WiFiMode>,<SecType>,<Key> 
[OK]

AT+WNET



Format:
AT+WNET=<DHCP>,<IP>,<SN>,<GW>
Meaning: Network Configuration
<DHCP>: DHCP On/Off (Optional)

Parameter	Meaning
0	DHCP Off, Static
1	DHCP On, DHCP Client
Mode	Meaning
STA	DHCP Client On/Off
AP	Not used. if any, it will be ignored
<IP>: IP Address (Optional)
<SN>: Subnet Mask (Optional)
<GW>: Gateway Address (Optional)

Mode	Meaning
STA	AP(Router) gateway address
AP	Not used. if any, it will be ignored
* When you turn DHCP On in STA Mode, <IP>,<SN>,<GW> are not needed. If you input them at this time, they will be stored in the memory. They can be used later when set as Static(DHCO Off) without inputting these parameters.

* In AP mode, DHCP Server will always run despite DHCP option, and Gateway option will not be used, So both options will be ignored.

Response:
[OK]

Format:
AT+WNET=?
Meaning: Get Current Network Setting
Note that <IP>,<SN>,<GW> address of response are not actual addresses, but addresses stored in the memory. So when DHCP is on, it usually different from actual addresses.

Response:
<DHCP>,<IP>,<SN>,<GW>
[OK]

AT+WSTAT



Format:
AT+WSTAT
Meaning: Get Current WiFi Status
Response:
IF/SSID/IP-Addr/Gateway/MAC/TxPower(dBm)/RSSI(-dBm)
...
[OK]

AT+WWPS



Format:
AT+WWPS=<Mode>,<PinNum>
Meaning: WiFi WPS Connection
Join with an AP through WPS method

<Mode>: WPS Mode (Required)

Parameter	Meaning
0	WPS_PBC_MODE
1	WPS_PIN_MODE
<PinNum>: Pin Number (Pin Mode: Required, PBC Mode: N/A)
* The maximum pin number letter is 8.

Examples)

AT+WWPS=0
AT+WWPS=1,12345670

Response:
[OK]

AT+WADNS



Format:
AT+WADNS=<DNS Server1>,<DNS Server2>
Meaning: Add DNS Server
<DNS Server 1>: DNS Server 1
<DNS Server 2>: DNS Server 2

Examples)

AT+WADNS=8.8.8.8
Response:
[OK]

2016/05/12 09:47 · jehoon song
Network Commands

Commands related to Network are listed below.

AT+SCON



Format:
AT+SCON=<OpenType>,<SocketType>,<RemoteIP>,<RemotePort>,<LocalPort>,<DataMode>
Meaning: Socket Open/Connect ( User can use max 8 sockets. )
Opens a socket and if it is a TCP Client, establishes TCP connection with remote peer device.

<OpenType>: Socket open type (Required)

Parameter	Meaning
O	open at Once
S	register as a Service
SO	open at Once & register as a Service
* AT ONCE: Assigns a socket immediately and if the socket is a TCP Client, tries to connect peer socket.

* AS SERVICE: Registers its information to the profile. When WiFi Joined, socket open/connect will be performed automatically. If you want to use this after reset, It should be saved by using AT+MPROF=S

<SocketType>: Socket protocol to use (Required)

Parameter	Meaning
TSN	TCP Server Normal
TCN	TCP Client Normal
TCS	TCP Client Secured
USN	UDP Server Normal
UCN	UDP Client Normal
* 'Secured' means TCP connection through SSL Encryption. It can be used in only TCP Client mode.

* Actually, there is no Server/Client concept in UDP protocol. This concept is used to decide peer address purposes. If a UDP Server receives any packet, its default peer address will be changed to the address of the packet, so if you send data after that, it goes to the changed address. But If you use UDP Client, its …default address stored by AT+SCON will never be changed.

<RemoteIP>: Remote IP address

Protocol	Parameter Application
TCP Server	N/A
TCP Client	Required
UDP Server	Optional
UDP Client	Required
<RemotePort>: Remote port number
Same condition with upper, RemoteIP

<LocalPort>: Local port number (Required)
Local port number should not be duplicated with others which have opened before. When the value is 0, in case the socket was a TCP/UDP Client, a random port number will be selected. If it was a TCP/UDP Server, it will return an error message.

<DataMode>: Mode to run (Optional, default: 0)

Parameter	Meaning
0	Open as Command mode
1	Open as Data mode
* About Command/Data mode, refer to Command mode & Data mode

Examples)

AT+SCON=O,TSN,,,5000,0
AT+SCON=S,UCN,192.168.0.10,12345,5000,1 (Profile must be saved)

Response:
[OK]

Format:
AT+SCON=?
Meaning: Get Previous Input Parameters
Use for check if previous input parameters are correct.

Response:
<OpenType>,<SocketType>,<RemoteIP>,<RemotePort>,<LocalPort>,<DataMode>
[OK]

AT+SMGMT



Format:
AT+SMGMT=<SocketID>
Meaning: Socket Management - Socket Close
Closes the selected socket and releases all its resources.

<SocketID>: Socket ID (Required)

Parameter	Meaning
0 ~ 7	The socket ID to close
ALL	All the opened sockets
* Opened socket information can be found by using '?' option.

Examples)

AT+SMGMT=5
AT+SMGMT=ALL

Response:
[OK]

Format:
AT+SMGMT=?
Meaning: Socket Management - Get Opened Socket Status
This prints all of the opened sockets statuses.

Response:
Number of Sockets : x (SCID/Socket/Mode/Remote/Local/DataMode)
<SocketID>,<SocketAddr>,<SocketType>,<RemoteIP>,<RemotePort>,<LocalPort>,<DataMode>
...
[OK]

AT+SSEND



Format:
AT+SSEND=<SocketID>,<RemoteIP>,<RemotePort>,<SendSize>,<Timeout>
Meaning: Data Send
This is used only in command mode, not in data mode. It is not required in data mode as you can input directly, but if you exit from data mode to command mode by inputting '+++', you can send data through this command.

<SocketID>: Socket ID (Required)

<RemoteIP>: Remote IP Address
Protocol	Parameter Application
TCP Server	N/A
TCP Client	N/A
UDP Server	Optional
UDP Client	Optional
* In case of TCP Server waiting for a client on listen state or in case of undecided remote address of the UDP Server (meaning its remote address is 0.0.0.0:0), this command will fail.

<RemotePort>: Remote Port Number
Same condition with upper, RemoteIP

<SendSize>: Data size to send (Required)
Valid Range: 1 ~ 100,000,000 Byte

<Timeout >: Set timeout value (milliseconds unit) (Optional)
If the transmission takes time more time than timeout value, it will fail and return error response. Default value is 10s + (100s / 1 MB)

Examples)

AT+SSEND=0,,,3
AT+SSEND=1,192.168.0.100,5000,1000000,50000

Response:
[OK]

AT+SDATA



Format:
AT+SDATA
Meaning: Return to Data Mode
In data mode, it can be changed to command mode temporally by using serial '+++' input. After that, to return to the data mode, you can use this command. If it is not data mode, [ERROR] response will be returned.

Response:
[OK]

AT+SFORM



Format:
AT+SFORM=<Format>,<Start>,<Delim>,<End>,<Cls1>,<Cls2>
Meaning: Define Data Receive Header Form
Define the header of received data which is used at command mode. For example, default receiving format look like below.
“{0,192.168.0.216,59834,5}hello(0xd)(0xa)”
This 
