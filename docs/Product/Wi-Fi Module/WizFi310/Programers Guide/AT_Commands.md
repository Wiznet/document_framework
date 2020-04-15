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

    AT+WSCAN

  * Format:
 >
 
    AT+WSCAN=<SSID>,<BSSID>,<Channel>
    
  * Meaning: WiFi Scan
  
Return the scan results filtered by parameters.

<SSID>: SSID Filter (Optional)
Scan only the AP which has this SSID.
<BSSID>: BSSID Filter (Optional)
Scan only the AP which has this BSSID.
<Channel>: Channel Filter (Optional)
Scan only the AP in this Channel.

* When combining these filters, it works at the same time. For example, if you enter AT+WSCAN=TestAP,00:08:DC:11:22:33', it only scans the AP which has TestAP as SSID and 00:08:DC:11:22:33 as BSSID in all the channel.

Examples)

  * AT+WSCAN=TestAP
  * AT+WSCAN=,,6
  * AT+WSCAN=,08:00:DC:11:22:33,11
  
* **Response:**
>

    Index/SSID/BSSID/RSSI(-dBm)/MaxDataRate(Mbps)/Security/RadioBand(GHz)/Channel
    ...
    [OK]

---
>
      
      AT+WSET

  * **Format:**
 >
 
    AT+WSET=<WiFiMode>,<SSID>,<BSSID>,<Channel>
    
 * **Meaning:** WiFi Configuration
 
<WiFiMode>: WiFi Mode to set (Required)
This changes current WiFi mode.

|Parameter|	Meaning|
|----------|-------|
|0	|Set Wi-Fi mode as STA mode|
|1	|Set Wi-Fi mode as AP mode|

<SSID>: Target/Own SSID (Required, Max: 32 Character)

|Mode|	Meaning|
|----|---------|
|STA	|The SSID of target AP|
|AP	|Its own SSID|

<BSSID>: Target BSSID (Optional, Form: xx:xx:xx:xx:xx:xx)

|Mode|	Meaning|
|----|----------|
|STA	|The BSSID of target AP|
|AP|	Not used. if any, it will be ignored|

<Channel>: Target/Own Channel (Optional)

|Mode|	Meaning|
|----|---------|
|STA	|In STA mode, the Channel of target AP|
|AP	|In AP mode, its own Channel to run (Default: 6)|

* There are 2 Wi-Fi modes in WizFi310, STA mode and SoftAP mode. When users execute AT+WJOIN command, it works as Wi-Fi mode previously selected by the user. It can be selected or checked by AT+WSET(or AT+WSET2) and AT+WSEC commands, and it is the only way to handle Wi-Fi mode.

* AT+WSET(or AT+WSET2), AT+WSEC commands save its parameters into the profile automatically, so the user does not need to save the current profile.

Examples)

  * AT+WSET=0,WizFiAP
  * AT+WSET=0,WizFiAP,08:00:DC:11:22:33,1

 * **Response:**
>

    [OK]
    
---    

  * **Format:**
>

    AT+WSET=?
    
 * **Meaning**: Get Current WiFi configuration Settings
 * **Response:**
 >
 
    <WiFiMode>,<SSID>,<BSSID>,<Channel>
    [OK]

---
>

    AT+WSET2

 * **Format:**
 >
      
      AT+WSET2=<WiFiMode>,<SSID>
      
 * **Meaning:** WiFi Configuration for SSID of special Characters like '“' ',' '共'
 
<WiFiMode>: WiFi Mode to set (Required)
This changes current WiFi mode.

|Parameter|	Meaning|
|---------|---------|
|0	|Set Wi-Fi mode as STA mode|
|1	|Set Wi-Fi mode as AP mode|

<SSID>: Target/Own SSID (Required, Max: 32 Character)

|Mode|	Meaning|
|----|---------|
|STA|	The SSID of target AP|
|AP	|Its own SSID to run|

* There are 2 Wi-Fi modes in WizFi310, STA mode and SoftAP mode. When users execute AT+WJOIN command, it works as Wi-Fi mode previously selected by the user. It can be selected or checked by AT+WSET and AT+WSEC commands, and it is the only way to handle Wi-Fi mode.

* AT+WSET, AT+WSEC commands save its parameters into the profile automatically, so the user does not need to save the current profile.

Examples)

  * AT+WSET2=0,가나다”,無線共有器

 * **Response:**
>

    [OK]
    
---    

  * **Format:**
>

    AT+WSET2=?
    
  * **Meaning:** Get Current WiFi configuration Settings
  
  * **Response:**
 >
 
    <WiFiMode>,<SSID>,<BSSID>,<Length of SSID>
    [OK]

---
>

      AT+WSEC

  * **Format:**
>

    AT+WSEC=<WiFiMode>,<SecType>,<Key>
    
  * **Meaning:** WiFi Security Configuration
  
<WiFiMode>: Target WiFi mode to set (Required)

|Parameter|	Meaning|
|---------|--------|
|0	|Set Wi-Fi mode as STA mode|
|1	|Set Wi-Fi mode as AP mode|

<SecType>: Security type (Optional)

|Parameter|	Meaning|
|---------|--------|
|OPEN|	None|
||WiFi Auto Security|
|WEP|	WEP (* Not support at SoftAP mode)|
|WPA	|WPA1 - TKIP|
|WPAAES|	WPA1 - AES|
|WPA2AES	\WPA2 - AES|
|WPA2TKIP|	WPA2 - TKIP|
|WPA2	|WPA2 - Mixed|

<Key>: Security key value

|Method	|Length|
|-------|------|
|WEP	|5 or 13 (ASCII), 10 or 26 (HEX)|
|WPA	|8 ~ 63 (ASCII), 128 (HEX)|

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

  * AT+WSEC=0,WEP,12345
  * AT+WSEC=1,WPA2,12345678
  * AT+WSEC=0,,123456789

 * **Response:**
>

    [OK]

---

  * **Format:**
>

    AT+WSEC=?
    
  * **Meaning:** Get the Current Security Mode and Settings
  * **Response:**
>

    <WiFiMode>,<SecType>,<Key> 
    [OK]

---
>

    AT+WNET

  * **Format:**
>

    AT+WNET=<DHCP>,<IP>,<SN>,<GW>
    
 * **Meaning:** Network Configuration
 
<DHCP>: DHCP On/Off (Optional)

|Parameter|	Meaning|
|---------|--------|
|0	|DHCP Off, Static|
|1|	DHCP On, DHCP Client|
|**Mode**|	**Meaning**|
|STA	|DHCP Client On/Off|
|AP	|Not used. if any, it will be ignored|

<IP>: IP Address (Optional)
<SN>: Subnet Mask (Optional)
<GW>: Gateway Address (Optional)

|Mode|	Meaning|
|-----|--------|
|STA|	AP(Router) gateway address|
|AP	|Not used. if any, it will be ignored|

* When you turn DHCP On in STA Mode, <IP>,<SN>,<GW> are not needed. If you input them at this time, they will be stored in the memory. They can be used later when set as Static(DHCO Off) without inputting these parameters.

* In AP mode, DHCP Server will always run despite DHCP option, and Gateway option will not be used, So both options will be ignored.

  * **Response:**
>

    [OK]
    
---    

  * **Format:**
>

    AT+WNET=?
    
 * **Meaning:** Get Current Network Setting
 
Note that <IP>,<SN>,<GW> address of response are not actual addresses, but addresses stored in the memory. So when DHCP is on, it usually different from actual addresses.

  * **Response:**
>

    <DHCP>,<IP>,<SN>,<GW>
    [OK]

---
>

      AT+WSTAT

  * **Format:**
>

    AT+WSTAT
    
  * **Meaning:** Get Current WiFi Status
  
  * **Response:**
>

    IF/SSID/IP-Addr/Gateway/MAC/TxPower(dBm)/RSSI(-dBm)
    ...
    [OK]
    
---   
>

    AT+WWPS

  * **Format:**
>

    AT+WWPS=<Mode>,<PinNum>
    
 * **Meaning:** WiFi WPS Connection
Join with an AP through WPS method

<Mode>: WPS Mode (Required)

|Parameter|	Meaning|
|---------|--------|
|0|	WPS_PBC_MODE|
|1	|WPS_PIN_MODE|

<PinNum>: Pin Number (Pin Mode: Required, PBC Mode: N/A)
* The maximum pin number letter is 8.

Examples)

  * AT+WWPS=0
  * AT+WWPS=1,12345670

 * **Response:**
>

    [OK]

---
>

    AT+WADNS

  * **Format:**
 >
 
    AT+WADNS=<DNS Server1>,<DNS Server2>
    
 * **Meaning:** Add DNS Server
 
<DNS Server 1>: DNS Server 1
<DNS Server 2>: DNS Server 2

Examples)

  * AT+WADNS=8.8.8.8
  
  * **Response:**
>

    [OK]


## Network Commands

Commands related to Network are listed below.

---
>

    AT+SCON

  * **Format:**
  >
  
    AT+SCON=<OpenType>,<SocketType>,<RemoteIP>,<RemotePort>,<LocalPort>,<DataMode>
    
 * **Meaning:** Socket Open/Connect ( User can use max 8 sockets. )
Opens a socket and if it is a TCP Client, establishes TCP connection with remote peer device.

<OpenType>: Socket open type (Required)

|Parameter	|Meaning|
|------------|------|
|O	|open at Once|
|S|	register as a Service|
|SO|	open at Once & register as a Service|

* AT ONCE: Assigns a socket immediately and if the socket is a TCP Client, tries to connect peer socket.

* AS SERVICE: Registers its information to the profile. When WiFi Joined, socket open/connect will be performed automatically. If you want to use this after reset, It should be saved by using AT+MPROF=S

<SocketType>: Socket protocol to use (Required)

|Parameter|	Meaning|
|---------|-------|
|TSN|	TCP Server Normal|
|TCN|	TCP Client Normal|
|TCS	|TCP Client Secured|
|USN|	UDP Server Normal|
|UCN	|UDP Client Normal|

* 'Secured' means TCP connection through SSL Encryption. It can be used in only TCP Client mode.

* Actually, there is no Server/Client concept in UDP protocol. This concept is used to decide peer address purposes. If a UDP Server receives any packet, its default peer address will be changed to the address of the packet, so if you send data after that, it goes to the changed address. But If you use UDP Client, its …default address stored by AT+SCON will never be changed.

<RemoteIP>: Remote IP address

|Protocol	|Parameter Application|
|---------|---------------------|
|TCP Server|	N/A|
|TCP Client	|Required|
|UDP Server|	Optional|
|UDP Client|	Required|

<RemotePort>: Remote port number
Same condition with upper, RemoteIP

<LocalPort>: Local port number (Required)
Local port number should not be duplicated with others which have opened before. When the value is 0, in case the socket was a TCP/UDP Client, a random port number will be selected. If it was a TCP/UDP Server, it will return an error message.

<DataMode>: Mode to run (Optional, default: 0)

|Parameter|	Meaning|
|---------|--------|
|0|	Open as Command mode|
|1|	Open as Data mode|
* About Command/Data mode, refer to Command mode & Data mode

Examples)

AT+SCON=O,TSN,,,5000,0
AT+SCON=S,UCN,192.168.0.10,12345,5000,1 (Profile must be saved)

  * **Response:**
>

    [OK]
    
---    
    
  * **Format:**
 >
 
     AT+SCON=?
     
  * **Meaning:** Get Previous Input Parameters
  
Use for check if previous input parameters are correct.

  * **Response:**
>

    <OpenType>,<SocketType>,<RemoteIP>,<RemotePort>,<LocalPort>,<DataMode>
    [OK]

---

AT+SMGMT

  * **Format:**
>

    AT+SMGMT=<SocketID>
    
   * **Meaning:** Socket Management - Socket Close
   
Closes the selected socket and releases all its resources.

<SocketID>: Socket ID (Required)

|Parameter	|Meaning|
|-----------|--------|
|0 ~ 7|	The socket ID to close|
|ALL|	All the opened sockets|

* Opened socket information can be found by using '?' option.

Examples)

  * AT+SMGMT=5
  * AT+SMGMT=ALL

 * **Response:**
>

    [OK]

---

 * **Format:**

>

      AT+SMGMT=?
      
 * **Meaning:** Socket Management - Get Opened Socket Status
This prints all of the opened sockets statuses.

  * **Response:**
>

      Number of Sockets : x (SCID/Socket/Mode/Remote/Local/DataMode)
      <SocketID>,<SocketAddr>,<SocketType>,<RemoteIP>,<RemotePort>,<LocalPort>,<DataMode>
      ...
      [OK]

---
>

    AT+SSEND

 * **Format:**
>

     AT+SSEND=<SocketID>,<RemoteIP>,<RemotePort>,<SendSize>,<Timeout>
     
 * **Meaning: Data Send**
 
This is used only in command mode, not in data mode. It is not required in data mode as you can input directly, but if you exit from data mode to command mode by inputting '+++', you can send data through this command.

<SocketID>: Socket ID (Required)

<RemoteIP>: Remote IP Address
  
|Protocol|	Parameter Application|
|--------|-----------------------|
|TCP Server	|N/A|
|TCP Client	|N/A|
|UDP Server|	Optional|
|UDP Client	|Optional|

* In case of TCP Server waiting for a client on listen state or in case of undecided remote address of the UDP Server (meaning its remote address is 0.0.0.0:0), this command will fail.

<RemotePort>: Remote Port Number
Same condition with upper, RemoteIP

<SendSize>: Data size to send (Required)
Valid Range: 1 ~ 100,000,000 Byte

<Timeout >: Set timeout value (milliseconds unit) (Optional)
If the transmission takes time more time than timeout value, it will fail and return error response. Default value is 10s + (100s / 1 MB)

Examples)

  * AT+SSEND=0,,,3
  * AT+SSEND=1,192.168.0.100,5000,1000000,50000

 * **Response:**
>

    [OK]
    
---    
>

    AT+SDATA

  * **Format:**
>

     AT+SDATA
     
  * **Meaning:** Return to Data Mode
  
In data mode, it can be changed to command mode temporally by using serial '+++' input. After that, to return to the data mode, you can use this command. If it is not data mode, [ERROR] response will be returned.

 * **Response:**
>

    [OK]

---
>

    AT+SFORM

  * **Format:**
>

    AT+SFORM=<Format>,<Start>,<Delim>,<End>,<Cls1>,<Cls2>
    
 * **Meaning:** Define Data Receive Header Form
 
Define the header of received data which is used at command mode. For example, default receiving format look like below.
“{0,192.168.0.216,59834,5}hello(0xd)(0xa)”
This means ASCII code "hello" was received from 192.168.0.216:59834 by
socket ID 0, and its length was 5. You can change this format to suit
your system through this command.  
  
Factory default option is "111111111,7B,2C,7D,0D,0A"  
  
\<Format\>: Decide each of header items to use. (Required)  
If you want to set it to active, input '1'.  
If not, input '0'.  
^ Order ^ Meaning ^

|   |                    |
| - | ------------------ |
| 0 | Header Start       |
| 1 | Socket ID          |
| 2 | Delimiter          |
| 3 | Remote IP Address  |
| 4 | Remote Port Number |
| 5 | Data Length        |
| 6 | Header End         |
| 7 | Data End 1/2       |
| 8 | Data End 2/2       |

\* At default format, '{' '}' is header start and end, ',' is delimiter,
0xd,0xa is data end 1,2.  
  
\< Start\>: Header Start Character (Required)  
\< Delim\>: Delimiter Character (Required)  
\< End\>: Header End Character (Required)  
\< Cls1\>: Data End Character 1/2 (Required)  
\< Cls2\>: Data End Character 2/2 (Required)  
  
Examples)

``` 
  * AT+SFORM=111111111,7B,2C,7D,0D,0A
  * AT+SFORM=101100110,5B,2F,5D,0D,00 \\ \\
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\----

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+SFORM=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get Current Data Receive Header Form

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    <Format>,<Start>,<Delim>,<End>,<Cls1>,<Cls2>
    [OK]

\</WRAP\>\</WRAP\>

-----

  
\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+SOPT====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+SOPT=<Option>,<SocketID>,<Socket Level>,<Option Name>,<Option Value>

\</WRAP\>\</WRAP\>
\* **Meaning:** S2W miscellaneous option \<WRAP indent\>\<WRAP indent\>

\<Option\>: Option to configure (Required)

| Option | Value                 |
| ------ | --------------------- |
| 1      | Set socket option     |
| ~~2~~  | ~~Get socket option~~ |

\<SocketID\>: Socket ID (Required)

\<Socket Level\>: Socket Level (Required)

| Socket Level | Value            |
| ------------ | ---------------- |
| 4095         | SOL\_SOCKET      |
| 0            | IPPROTO\_IP      |
| 6            | IPPROTO\_TCP     |
| 17           | IPPROTO\_UDP     |
| 136          | IPPROTO\_UDPLITE |

\<Option Name\> : Option name for socket level options for level
SOL\_SOCKET

| Option Name | Value         |
| ----------- | ------------- |
| 4           | SO\_REUSEADDR |
| 8           | SO\_KEEPALIVE |

options for level IPPROTO\_IP

| Option Name | Value   |
| ----------- | ------- |
| 1           | IP\_TOS |
| 2           | IP\_TTL |

options for level IPPROTO\_TCP

| Option Name | Value          |
| ----------- | -------------- |
| 1           | TCP\_NODELAY   |
| 2           | TCP\_KEEPALIVE |
| 3           | TCP\_KEEPIDLE  |
| 4           | TCP\_KEEPINTVL |
| 5           | TCP\_KEEPCNT   |

Examples)

``` 
  * AT+SOPT=1,0,4095,8,1
  * AT+SOPT=1,0,6,3,10
  * AT+SOPT=1,0,6,4,15
  * AT+SOPT=1,0,6,5,3
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>

-----

  
\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+SOPT1====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+SOPT1=<Option>,<Value>

\</WRAP\>\</WRAP\>

  - **Meaning:** S2W miscellaneous option

\<WRAP indent\>\<WRAP indent\>

\<Option\>: Option to configure (Required) \<Value\>: Value of the
option (Required)

| Option | Value                                                           |
| ------ | --------------------------------------------------------------- |
| 10     | Escape sequence(+++) Timer(millisecond, default 1000, 1\~10000) |

Examples)

``` 
  * AT+SOPT1=10,500
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>

## Management Commands

  
Commands related to system management are listed below.

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MPROF====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MPROF=<Action>

\</WRAP\>\</WRAP\>

  - **Meaning:** Profile Management

\<WRAP indent\>\<WRAP indent\> You can save/load the environmental
information in the RAM to/from flash ROM, or check the setting values in
both of them through this command.  
(\* AT+WSET, AT+WSEC are immediately stored in the Flash ROM)  
  
\<Action\>: The action to perform (Required)  
^ Parameter ^ Meaning ^

|    |                     |
| -- | ------------------- |
| VD | Get saved profile   |
| VG | Get current profile |
| L  | Load profile        |
| S  | Save profile        |

\* There is no '?' option at this command.  
  
Examples)

``` 
  * AT+MPROF=S \\ \\
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

    +WSET=...
    +WSEC=...
    +WNET=...
    +WREG=...
    +SCON=...
    +SFORM=...
    +MMSG=...
    +MMAC=...
    +USET=...
    +MECHO=...
    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MFDEF====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MFDEF=FR

\</WRAP\>\</WRAP\>

  - **Meaning:** Perform Factory Reset

\<WRAP indent\>\<WRAP indent\> Factory Reset means that all of
environmental variables return back to the default state. (You can check
that by using AT+MPROF command) \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>
-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MRESET====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MRESET

\</WRAP\>\</WRAP\>

  - **Meaning:** Perform System Reset

\<WRAP indent\>\<WRAP indent\> System will reboot after this command.
\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MMSG====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MMSG=<Level>

\</WRAP\>\</WRAP\>

  - **Meaning:** Set Message Print Level

\<WRAP indent\>\<WRAP indent\> \<Level\>: Message Print Level (Required)

| Parameter | Meaning                             |
| --------- | ----------------------------------- |
| 1         | Not Print Responses                 |
| 2         | Print Responses, Events (Default)   |
| 3         | Print Responses, Events, Debug Logs |

Examples)

``` 
  * AT+MMSG=2 \\ \\
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\----

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+MMSG=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get Current Message Print Level

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    <Level>
    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MMAC====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MMAC=<MAC>

\</WRAP\>\</WRAP\>

  - **Meaning:** Set MAC Address

\<WRAP indent\>\<WRAP indent\> \<MAC\>: MAC Address (separated by colon)
(Required)  
  
Examples)

``` 
  * AT+MMAC=00:08:DC:11:22:33 \\ \\
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>
\----

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+MMAC=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get Current MAC Address

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    <MAC>
    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MINFO====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MINFO

\</WRAP\>\</WRAP\>

  - **Meaning:** Get System Information

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    FW version / HW version
    <FWver> / <HWver>
    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MECHO====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MECHO=<Action>

\</WRAP\>\</WRAP\>

  - **Meaning:** Set Echo Mode

\<WRAP indent\>\<WRAP indent\> If you turn the echo mode off, you cannot
see the characters that you inputted returning. It is easy to use to
turn off when Host MCU handles AT Command control.  
  
\<Action\>: Echo Mode (Required)  
^ Parameter ^ Meaning ^

|   |                   |
| - | ----------------- |
| 0 | Echo Off          |
| 1 | Echo On (Default) |

Examples)

``` 
  * AT+MECHO=0 \\ \\
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\----

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+MECHO=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get Current Echo Mode

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    <Mode>
    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MHELP====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MHELP

\</WRAP\>\</WRAP\>

  - **Meaning:** Print Command Description and Usage

\<WRAP indent\>\<WRAP indent\> This is command usage guide for user
convenience. \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    ...
    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MMCUPS====
\</WRAP\>\</WRAP\>  
  
  
\* **Currently Not Available**
-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MWIFIPS====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MWIFIPS=<Action>,<Delay>

\</WRAP\>\</WRAP\>

  - **Meaning:** Wi-Fi Power Save Enable/Disable

\<WRAP indent\>\<WRAP indent\> Wi-Fi power save mode can be selected
through this command.  
  
\<Action\> : Wi-Fi Power Save Mode (Required)

| Parameter | Meaning                                                         |
| --------- | --------------------------------------------------------------- |
| 0         | Wi-Fi Power Save Mode Disable                                   |
| 1         | Wi-Fi Power Save Mode Enable                                    |
| 2         | Enables power save mode while attempting to maximize throughput |

\* To using Wi-Fi Power Save Mode, WizFi310 has to connect to Access
Point. And WizFi310 can only use this mode in station mode.  
  
\<Delay \> : Return to Sleep Delay  
If it is set with a bigger value, the performance will improve but the
power consumption will rise.

| Action | Application |
| ------ | ----------- |
| 0      | N/A         |
| 1      | N/A         |
| 2      | Required    |

\* This parameter is used only to set 2 of \<Action\> parameter.  
  
\* It must be set to a multiple of 10. When set to 0, the timeout period
default to 2 beacon intervals (approximately 204ms).  
  
\* It can be set to 0 \~ 90 \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\----

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+MWIFIPS=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get Current Wi-Fi Power Save Status

\<WRAP indent\>\<WRAP indent\> \<Status \> : Current Wi-Fi Power Save
Status

| Return value | Meaning                       |
| ------------ | ----------------------------- |
| 0            | Wi-Fi Power Save Mode Disable |
| 1            | Wi-Fi Power Save Mode Enable  |

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+USET====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+USET=<Baudrate>,<Parity>,<WordLen>,<StopBit>,<FlowCon>

\</WRAP\>\</WRAP\>

  - **Meaning:** UART Configuration

\<WRAP indent\>\<WRAP indent\> UART parameter can be set through this
command. Factory default parameter is "115200,N,8,1,N ".  
  
\<Baudrate\>: Set the Baud-Rate. (Required)

| Parameter | Meaning     |
| --------- | ----------- |
| 300       | 300 bps     |
| 600       | 600 bps     |
| 1200      | 1200 bps    |
| 2400      | 2400 bps    |
| 4800      | 4800 bps    |
| 9600      | 9600 bps    |
| 14400     | 14400 bps   |
| 19200     | 19200 bps   |
| 38400     | 38400 bps   |
| 57600     | 57600 bps   |
| 115200    | 115200 bps  |
| 230400    | 230400 bps  |
| 460800    | 460800 bps  |
| 921600    | 921600 bps  |
| 1843200   | 1843200 bps |

\<Parity\>: Set the Parity-Bit type. (Required)

| Parameter | Meaning |
| --------- | ------- |
| N         | None    |
| O         | Odd     |
| E         | Even    |

\<WordLen\>: Set the Word-Length. (Required)

| Parameter | Meaning |
| --------- | ------- |
| 7         | 7 bits  |
| 8         | 8 bits  |

\<StopBit\>: Set the Stop-Bit. (Required)

| Parameter | Meaning |
| --------- | ------- |
| 1         | 1 bits  |
| 2         | 2 bits  |

\<FlowCon\>: Set the Flow-Control method. (Required)

| Parameter | Meaning               |
| --------- | --------------------- |
| N         | None                  |
| HW        | Hardware Flow Control |

Examples)

``` 
  * AT+USET=115200,N,8,1,N
  * AT+USET=921600,N,8,2,HW \\ \\
```

\</WRAP\>\</WRAP\>
\* **Response:** \<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\----

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+USET=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get Current UART Setting

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    <Baudrate>,<Parity>,<WordLen>,<StopBit>,<FlowCon>
    [OK]

\</WRAP\>\</WRAP\>  
\----

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MCUSTOM====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MCUSTOM=<custom code>

\</WRAP\>\</WRAP\>

  - **Meaning:** Set to customized settings by request of specific
    customers.

\<WRAP indent\>\<WRAP indent\> Examples)  
  
Default custom code is WIZNET  
\* AT+MCUSTOM=WIZNET \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\----

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+MCUSTOM=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get current custom code
  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    WIZNET
    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MAIRCMD====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MAIRCMD=<OpenType>,<SocketType>,<LocalPort>,<Option>

\</WRAP\>\</WRAP\>

  - **Meaning:** Configure Air Command mode

\<WRAP indent\>\<WRAP indent\> \<OpenType\>: Air Command mode type
(Required)

| Parameter | Meaning               |
| --------- | --------------------- |
| O         | open at Once          |
| S         | register as a Service |

\* AT ONCE: Assigns a Air-Command-socket immediately.  
  
\* AS SERVICE: Registers its information to the profile. When WiFi
Joined, Air-Command-socket open will be performed automatically. If you
want to use this after reset, It should be saved by using AT+MPROF=S  
  
\<SocketType\>: Air-Command-Socket protocol to use (Required)

| Parameter | Meaning           |
| --------- | ----------------- |
| T         | TCP Server Normal |
| U         | UDP Server Normal |

\<LocalPort\>: Local port number (Required)  
Local port number should not be duplicated with others which have opened
before. When the value is 0, in case the socket was a TCP/UDP Client, a
random port number will be selected. If it was a TCP/UDP Server, it will
return an error message.  
  
\<Option\>: Reserved (Required)
Examples)

``` 
  * AT+MAIRCMD=O,T,50001,0
  * AT+MAIRCMD=S,U,50001,0
  * AT+MAIRCMD=?
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    <OpenType>,<SocketType>,<LocalPort>,<Option>
    [OK]

\</WRAP\>\</WRAP\>  
\----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MEVTMSG====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MEVTMSG=<Status>

\</WRAP\>\</WRAP\>

  - **Meaning:** Print \[Listen x\] as soon as it opens up a socket
    through TCP server.

\<WRAP indent\>\<WRAP indent\> It is able to print TCP Server Status
with \[Listen x\].(x:socket number).  
A user can decide whether WizFi310 will print out Listen message or not
in initialization mode on TCP server.  
This command is made for mbed library.  
Uses 1 Parameter and set status of socket as 0,1 for each relevant below
table.  
  
\<Status\>: Printing status (Required)  
^ Parameter ^ Meaning ^

|   |                                 |
| - | ------------------------------- |
| 0 | No display \[Listen x\] message |
| 1 | Display \[Listen x\] message    |

  
Examples)

``` 
  * AT+MEVTMSG=0
  * AT+MEVTMSG=1
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MEVTFORM====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MEVTFORM=<format>

\</WRAP\>\</WRAP\>

  - **Meaning:** Define Event Message Form

\<WRAP indent\>\<WRAP indent\> It is able to control format and printing
status of WizFi310 event messages.  
Uses 10 Parameters and set event message as 0,1,2 for each relevant
one  
  
\<Format\>: Event Message Format (Required)  
0: No display  
1: Full Message  
2: Short Message  
  
AT+MEVTFORM=abcdefghijkl

<table>
<thead>
<tr class="header">
<th></th>
<th>0(No display)</th>
<th>1(Full Message,Default)</th>
<th>2(Short Message)</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>a</td>
<td></td>
<td>WizFi310 Version 1.0.0.6 (WIZnet Co.Ltd)\r\n</td>
<td>\r\n[0]\r\n</td>
</tr>
<tr class="even">
<td>b</td>
<td></td>
<td>\r\n[CONNECT %x]\r\n</td>
<td>\r\n[1]\r\n</td>
</tr>
<tr class="odd">
<td>c</td>
<td></td>
<td>\r\n[DISCONNECT %x]\r\n</td>
<td>\r\n[2]\r\n</td>
</tr>
<tr class="even">
<td>d</td>
<td></td>
<td>\r\n[Link-Up Event]\r\n<br />
IP Addr : ...\r\n<br />
Gateway : ...\r\n</td>
<td>\r\n[3]\r\n</td>
</tr>
<tr class="odd">
<td>e</td>
<td></td>
<td>\r\n[Link-Down Event]\r\n</td>
<td>\r\n[4]\r\n</td>
</tr>
<tr class="even">
<td>f</td>
<td></td>
<td>\r\n[Reset Event]\r\n</td>
<td>\r\n[5]\r\n</td>
</tr>
<tr class="odd">
<td>g</td>
<td></td>
<td>\r\n[TCP Send Error]\r\n</td>
<td>\r\n[6]\r\n</td>
</tr>
<tr class="even">
<td>h</td>
<td></td>
<td>\r\n[P2P Fail Event]\r\n</td>
<td>\r\n[7]\r\n</td>
</tr>
<tr class="odd">
<td>i</td>
<td></td>
<td>\r\n[LISTEN %x]\r\n</td>
<td>\r\n[8]\r\n</td>
</tr>
<tr class="even">
<td>j</td>
<td></td>
<td>\r\n[MQTT CONNECT]\r\n</td>
<td>\r\n[9]\r\n</td>
</tr>
<tr class="odd">
<td>k</td>
<td></td>
<td>\r\n[MQTT DISCONNECT]\r\n</td>
<td>\r\n[a]\r\n</td>
</tr>
</tbody>
</table>

  
Examples)

``` 
  * AT+MEVTFORM=111111111111
  * AT+MEVTFORM=122220000000
  * AT+MEVTFORM=000000000000
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\----

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+MEVTFORM=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get Current Event Message Form

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    <Format>
    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MUPGRADE====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MUPGRADE

\</WRAP\>\</WRAP\>
\* **Meaning:** This command is for upgrading firmware of WizFi310
\<WRAP indent\>\<WRAP indent\> After using this command, WizFi310 will
wait UART signal for XMODEM protocol. After this command, You have to
send binary file which you want to upload using XMODEM protocol. If it
is done successfully, WizFi310 will display "\[OK\]" message and then
restart.  
Examples)

``` 
  * AT+MUPGRADE
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\----
## Function Commands

  
Commands related to additional functions are listed below.

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+FPING====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+FPING=<RepeatCnt>,<TargetIP>

\</WRAP\>\</WRAP\>

  - **Meaning:** PING Test

\<WRAP indent\>\<WRAP indent\> \<RepeatCnt\>: Repeat Count (Required)  
Valid Range: 1 \~ 50 (unit:number of times)  
  
\<TargetIP\>: Target IP Address (Required)  
  
Examples)

``` 
  * AT+FPING=3,192.168.0.10 \\ \\
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    Ping Reply :  xxx ms
    ...
    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+FDNS====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+FDNS=<HostName>,<Timeout>

\</WRAP\>\</WRAP\>

  - **Meaning:** DNS Query

\<WRAP indent\>\<WRAP indent\> \<HostName\>: The domain name to search
(Required)  
  
\<Timeout\>: Maximum Delay (milliseconds unit) (Required)  
Valid Range: 1,000 \~ 1,000,000 (unit:ms)(Recommend: 1000)  
  
Examples)

``` 
  * AT+FDNS=www.google.com,1000 \\ \\
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    xxx.xxx.xxx.xxx
    [OK]

\</WRAP\>\</WRAP\>  
\---- \<WRAP left round box 30%\>\<WRAP centeralign\>====AT+FGPIO====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+FGPIO=<gpio_number>,<action:0>,<config_value>
    AT+FGPIO=<gpio_number>,<action:1>,<config_value>
    AT+FGPIO=<gpio_number>,<action:2>,<gpio_value>
    AT+FGPIO=<gpio_number>,<action:3>,<gpio_value>

\</WRAP\>\</WRAP\>

  - **Meaning:** GPIO Control Function  
      
    \<WRAP indent\>\<WRAP indent\>

GPIO can be set through this command.  
\<gpio\_number\>: Available GPIO number (Required)

| Return value | Meaning |
| ------------ | ------- |
| 3            | GPIOB 3 |
| 4            | GPIOC 4 |
\<action\>: The action to perform (Required)

| Return value | Meaning                            |
| ------------ | ---------------------------------- |
| 0            | GPIO Initialize as a Input mode    |
| 1            | GPIO Initialize as a Output mode   |
| 2            | Get GPIO value of \<gpio\_number\> |
| 3            | Set GPIO value of \<gpio\_number\> |

  
\<config\_value\>: Current GPIO Configuration Value (It can be used when
action is 0, 1)

| Return value | Meaning                                                |
| ------------ | ------------------------------------------------------ |
| 0            | PULL\_NONE (Not use pull-up & pull-down resistor)      |
| 1            | PULL\_UP (Input with an internal pull-up resistor)     |
| 2            | PULL\_DOWN (Input with an internal pull-down resistor) |
| 3            | OPEN\_DRAIN (Output open drain)                        |

  
\<gpio\_value\>: Current GPIO Value (It can be used when action is 2, 3)

| Return value | Meaning |
| ------------ | ------- |
| 0            | Low     |
| 1            | High    |

  
Examples)

``` 
  * AT+FGPIO=3,1,1 << Initialize GPIOB 3 as a Output mode
  * AT+FGPIO=3,3,0 << Set GPIO value of GPIOB 3 to Low
  * AT+FGPIO=3,3,1 << Set GPIO value of GPIOB 3 to High
  * AT+FGPIO=3,2,0 << Get GPIO value of GPIOB 3
```

  
\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\> If \<action\> is 2

    <gpio_value>
    [OK]
    ex)
    AT+FGPIO=3,2,0
    0
    [OK]

  
If \<action\> is 0, 1, 3

    [OK]

\</WRAP\>\</WRAP\>

  
\----

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+FGPIO=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get available GPIO number

\<WRAP indent\>\<WRAP indent\>

Examples)

``` 
  * AT+FGPIO=? \\
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    <gpio_num_1>,<gpio_num_2>
    [OK]
    
    ex) 
    3,4
    [OK]

  
\----
\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+FGETADC====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+FGETADC=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Read ADC from ADC pin of WizFi310 when using this AT
    Command  
      
    \<WRAP indent\>\<WRAP indent\>

  
  
Examples)

``` 
  * AT+FGETADC=? \\
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    xxxx
    [OK]
    
    ex) 
    1697
    [OK]

  
\</WRAP\>\</WRAP\>  
\----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+FSOCK====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+FSOCK=<Option>,<Value>

\</WRAP\>\</WRAP\>

  - **Meaning:** SOCKET Extension Option

\<WRAP indent\>\<WRAP indent\> When there is no socket connected, it
tries to reconnect the server using this option.  
6,8 options must be set as service mode(AT+SCON=S) for Auto
Reconnection.  
Profile(AT+MPROF=S) has to be saved after AT+FSOCK  
  

This is for extended options of Socket. It will be added continuously.

\<Option\>: Extended options of Socket (Required)

| Parameter | Meaning                                                                                    |
| --------- | ------------------------------------------------------------------------------------------ |
| 1         | TCP Send error timeout (value : 2000\~20000ms)                                             |
| 6         | Recreates Socket then attempts Auto-Reconnection after \<Value\> seconds (value: 10\~1000) |
| 8         | Automatically resets WizFi310 module. when there is no socket connected (value: 5\~1000)   |

\<Value\> : Value of extended option (Required)

  
Examples)

``` 
  * AT+FSOCK=1,5000
  * AT+FSOCK=6,10
  * AT+FSOCK=8,30 \\ \\
```

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  

-----

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+FSOCK=?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get Current extended options of socket
  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    <Extened option 1><2><3><4><5><6><7><8>
    [OK]
    
    ex)
    5000,0,0,0,0,10,0,30

\</WRAP\>\</WRAP\>  

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+FOTA====
\</WRAP\>\</WRAP\>  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+FOTA=<Server IP>,<Server Port>

\</WRAP\>\</WRAP\>

  - **Meaning:** Launch OTA Mode

\<WRAP indent\>\<WRAP indent\> User can update firmware in OTA mode
which can be entered by this command. Refer to [Wi-Fi
OTA](/products/WizFi310/WizFi310pg/firmware_upgrade-wifi_ota)

OTA Server should run some protocol. that included in OTA tool.

\<Server IP\>: Firmware Server IP

\<Server Port\> : Firmware Server Port

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [OK]

\</WRAP\>\</WRAP\>  
\----
