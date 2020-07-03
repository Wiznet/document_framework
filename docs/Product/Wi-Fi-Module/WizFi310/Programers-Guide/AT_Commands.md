---
id: at_commands
title: AT Commands
date: 2020-04-15
---

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
most cases, valid commands return the characters [OK]. Invalid inputs
return [ERROR]. The possible responses sent by WizFi310 to the user
side are described at Responses. Below is a possible example which users
can input. As you can see, WizFi310 return “rn” back instead of
“r”, which means user (host system) always handle 'rn' as a
only delimiter.  

| Input by User        | ATr (0x61 0x74 0x0d)                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Output from WizFi310 | ATrn[OK]rn (0x61 0x74 0x0d 0x0a 0x5b 0x4f 0x4b 0x5d 0x0d 0x0a) (- “ATrn” is Echo back of user input) |

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
|[AT](#at)|	Terminal Check|
|**WiFi Commands**||
|[AT+WJOIN](#atwjoin)|	WiFi Association|
|[AT+WLEAVE](#atwleave)|	WiFi Disassociation|
|[AT+WSCAN](#atwscan)|	WiFi Scan|
|[AT+WSET](#atwset)	|WiFi SSID Configuration|
|[AT+WSET2](#atwset2)|	WiFi SSID Configuration for special Chars|
|[AT+WSEC](#atwsec)|	WiFi Security Configuration|
|[AT+WNET](#atwnet)|Network Configuration|
|[AT+WSTAT](#atwstat)	|Get Current WiFi Status|
|[AT+WWPS](#atwwps)|	WiFi WPS Connection|
|[AT+WADNS](#atwadns)	|Add DNS Server|

|Network Commands||
|-----------|---------|
|[AT+SCON](#atscon)	|Socket Open/Connect|
|[AT+SMGMT](#atsmgmt)	|Socket Management|
|[AT+SSEND](#atssend)	|Data Send|
|[AT+SDATA](#atsdata)	|Return to Data Mode|
|[AT+SFORM](#atsform)	|Define Data Receive Header Form|
|[AT+SOPT](#atsopt)|	S2W Socket Option|
|[AT+SOPT1](#atsopt1)|	S2W miscellaneous option|

|Management Commands||
|-------------------|---|
|[AT+MPROF](#atmprof)|	Profile Management|
|[AT+MFDEF](#atmfdef)	|Perform Factory Reset|
|[AT+MRESET](#atmreset)|	Perform System Reset|
|[AT+MMSG](#atmmsg)	|Set Message Print Level|
|[AT+MMAC](#atmmac)	|Set MAC Address|
|[AT+MINFO](#atminfo)|	Get System Information|
|[AT+MECHO](#atmecho)|	Set Echo Mode|
|[AT+MHELP](#atmhelp)|	Print Command Description and Usage|
|[AT+MMCUPS](#atmmcups)|	MCU Power Save Enable/Disable|
|[AT+MWIFIPS](#atmwifips)	|Wi-Fi Power Save Enable/Disable|
|[AT+USET](#atuset)	|UART Configuration|
|[AT+MCUSTOM](#atmcustom)|	Custom code|
|[AT+MAIRCMD](#atmaircmd)|	Air Command Configuration|
|[AT+MEVTMSG](#atmevtmsg)	|Print [Listen x] as soon as it opens up a socket through TCP server.|
|[AT+MEVTFORM](#atmevtform)	|Event Message Form|
|[AT+MUPGRADE](#atmupgrade)|	Firmware upgrade using serial|

|Function Commands||
|----------------|---|
|[AT+FPING](#atfping)	|PING Test|
|[AT+FDNS](#atfdns)	|DNS Query|
|[AT+FGPIO](#atfgpio)	|GPIO Control|
|[AT+FGETADC](#atfgetadc)|	Read ADC value|
|[AT+FSOCK](#atfsock)|	SOCKET Extension Option|
|[AT+FOTA](#atfota)	|Launch OTA Mode|

**Available Protocol**

|MQTT Commands||
|-------|------|
|[AT+MQTTSET](#atmqttset)	|MQTT Configuration|
|[AT+MQTTCON](#atmqttcon)|	MQTT Connect/Disconnect|
|[AT+MQTTSUB](#atmqttsub)|	MQTT Subscribe|
|[AT+MQTTPUB](#atmqttpub)|	MQTT Publish|

|GMMP Commands||
|----------|---|
|[AT+GMMPSET](#atgmmpset)	|GMMP Configuration, Connect/Disconnect|
|[AT+GMMPDATA](#atgmmpdata)|	GMMP Data Send|
|[AT+GMMPOPT](#atgmmpopt)|	GMMP Option Management|

|Connecting ThingPlug Commands||
|------------------|---------|
|[AT+SKTPCON](#atsktpcon)|	Connecting authorization, Connect/Disconnect|
|[AT+SKTPDEVICE](#atsktpdevice)	|Device registration|
|[AT+SKTPCONTAINER](#atsktpcontainer) |Container Create|
|[AT+SKTPSEND](#atsktpsend)|	Data sending to ThingPlug|
|[AT+SKTPCMD](#atsktpcmd)|	Command registration to ThingPlug|
|[AT+SKTPRESULT](#atsktpresult)|	Response to ThingPlug Command|


## Basic Commands

Basic commands are listed below.

---

#### AT

 * Format:
    AT
    
 * Meaning: Terminal Check
 
Check if AT Command Terminal is working.

 * Response:
    [OK]


## WiFi Commands

Commands related to WiFi are listed below.
---

#### AT+WJOIN
    
- Format: 
    
    AT+WJOIN
    
- Meaning: WiFi Association
  
    In the STA mode, it joins with the BSS selected by AT+WSET(or AT+WSET2), AT+WSEC.
    And in the AP mode, it starts to run as an Access Point.

   - There are 2 Wi-Fi modes in WizFi310, STA mode and SoftAP mode. When users 
      execute AT+WJOIN command, the current Wi-Fi mode works as the one previously 
      selected by user input. It can be selected or checked by AT+WSET(or AT+WSET2) and       AT+WSEC commands, and it is the only way to handle Wi-Fi mode.

   - SoftAP mode does not support WEP security method.
- Response:
  
    [Link-Up Event]
    IP Addr    : xxx.xxx.xxx.xxx
    Gateway   : xxx.xxx.xxx.xxx
    [OK]

 
    Already Associated : (Mode)
    [OK]

---

#### AT+WLEAVE
    
- Format:
    AT+WLEAVE
    
- Meaning: WiFi Disassociation
  
In the STA mode, it leaves current Access Point, but in the SoftAP mode, it stops to run as Access Point.

- Response:
    [Link-Down Event]
    [OK]

---

#### AT+WSCAN

- Format:
 
    AT+WSCAN=&#60;SSID&#62;,&#60;BSSID&#62;,&#60;Channel&#62;
    
- Meaning: WiFi Scan
  
Return the scan results filtered by parameters.

&#60;SSID&#62;: SSID Filter (Optional)
Scan only the AP which has this SSID.
&#60;BSSID&#62;: BSSID Filter (Optional)
Scan only the AP which has this BSSID.
&#60;Channel&#62;: Channel Filter (Optional)
Scan only the AP in this Channel.

* When combining these filters, it works at the same time. For example, if you enter AT+WSCAN=TestAP,00:08:DC:11:22:33', it only scans the AP which has TestAP as SSID and 00:08:DC:11:22:33 as BSSID in all the channel.

Examples)

- AT+WSCAN=TestAP
- AT+WSCAN=,,6
- AT+WSCAN=,08:00:DC:11:22:33,11
  
* **Response:**
    Index/SSID/BSSID/RSSI(-dBm)/MaxDataRate(Mbps)/Security/RadioBand(GHz)/Channel
    ...
    [OK]

---
  
#### AT+WSET

- **Format:**
 
    AT+WSET=&#60;WiFiMode&#62;,&#60;SSID&#62;,&#60;BSSID&#62;,&#60;Channel&#62;
    
 * **Meaning:** WiFi Configuration
 
&#60;WiFiMode&#62;: WiFi Mode to set (Required)
This changes current WiFi mode.

|Parameter|	Meaning|
|----------|-------|
|0	|Set Wi-Fi mode as STA mode|
|1	|Set Wi-Fi mode as AP mode|

&#60;SSID&#62;: Target/Own SSID (Required, Max: 32 Character)

|Mode|	Meaning|
|----|---------|
|STA	|The SSID of target AP|
|AP	|Its own SSID|

&#60;BSSID&#62;: Target BSSID (Optional, Form: xx:xx:xx:xx:xx:xx)

|Mode|	Meaning|
|----|----------|
|STA	|The BSSID of target AP|
|AP|	Not used. if any, it will be ignored|

&#60;Channel&#62;: Target/Own Channel (Optional)

|Mode|	Meaning|
|----|---------|
|STA	|In STA mode, the Channel of target AP|
|AP	|In AP mode, its own Channel to run (Default: 6)|

* There are 2 Wi-Fi modes in WizFi310, STA mode and SoftAP mode. When users execute AT+WJOIN command, it works as Wi-Fi mode previously selected by the user. It can be selected or checked by AT+WSET(or AT+WSET2) and AT+WSEC commands, and it is the only way to handle Wi-Fi mode.

* AT+WSET(or AT+WSET2), AT+WSEC commands save its parameters into the profile automatically, so the user does not need to save the current profile.

Examples)

- AT+WSET=0,WizFiAP
- AT+WSET=0,WizFiAP,08:00:DC:11:22:33,1

 * **Response:**
    [OK]
    
---    

- **Format:**
    AT+WSET=?
    
 * **Meaning**: Get Current WiFi configuration Settings
 * **Response:**
 &#62;
 
    &#60;WiFiMode&#62;,&#60;SSID&#62;,&#60;BSSID&#62;,&#60;Channel&#62;
    [OK]

---

#### AT+WSET2

 * **Format:**
      
    AT+WSET2=&#60;WiFiMode&#62;,&#60;SSID&#62;

 * **Meaning:** WiFi Configuration for SSID of special Characters like '“' ',' '共'
 
&#60;WiFiMode&#62;: WiFi Mode to set (Required)
This changes current WiFi mode.

|Parameter|	Meaning|
|---------|---------|
|0	|Set Wi-Fi mode as STA mode|
|1	|Set Wi-Fi mode as AP mode|

&#60;SSID&#62;: Target/Own SSID (Required, Max: 32 Character)

|Mode|	Meaning|
|----|---------|
|STA|	The SSID of target AP|
|AP	|Its own SSID to run|

* There are 2 Wi-Fi modes in WizFi310, STA mode and SoftAP mode. When users execute AT+WJOIN command, it works as Wi-Fi mode previously selected by the user. It can be selected or checked by AT+WSET and AT+WSEC commands, and it is the only way to handle Wi-Fi mode.

* AT+WSET, AT+WSEC commands save its parameters into the profile automatically, so the user does not need to save the current profile.

Examples)

- AT+WSET2=0,가나다”,無線共有器

 * **Response:**
    [OK]
    
---    

- **Format:**
    AT+WSET2=?
    
- **Meaning:** Get Current WiFi configuration Settings
  
- **Response:**
 &#62;
 
    &#60;WiFiMode&#62;,&#60;SSID&#62;,&#60;BSSID&#62;,&#60;Length of SSID&#62;
    [OK]

---

#### AT+WSEC

- **Format:**
    AT+WSEC=&#60;WiFiMode&#62;,&#60;SecType&#62;,&#60;Key&#62;
    
- **Meaning:** WiFi Security Configuration
  
&#60;WiFiMode&#62;: Target WiFi mode to set (Required)

|Parameter|	Meaning|
|---------|--------|
|0	|Set Wi-Fi mode as STA mode|
|1	|Set Wi-Fi mode as AP mode|

&#60;SecType&#62;: Security type (Optional)

|Parameter|	Meaning|
|---------|--------|
|OPEN|	None|
||WiFi Auto Security|
|WEP|	WEP (* Not support at SoftAP mode)|
|WPA	|WPA1 - TKIP|
|WPAAES|	WPA1 - AES|
|WPA2AES	WPA2 - AES|
|WPA2TKIP|	WPA2 - TKIP|
|WPA2	|WPA2 - Mixed|

&#60;Key&#62;: Security key value

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

- AT+WSEC=0,WEP,12345
- AT+WSEC=1,WPA2,12345678
- AT+WSEC=0,,123456789

 * **Response:**
    [OK]

---

- **Format:**
    AT+WSEC=?
    
- **Meaning:** Get the Current Security Mode and Settings
- **Response:**
    &#60;WiFiMode&#62;,&#60;SecType&#62;,&#60;Key&#62; 
    [OK]

---

#### AT+WNET

- **Format:**
    AT+WNET=&#60;DHCP&#62;,&#60;IP&#62;,&#60;SN&#62;,&#60;GW&#62;
    
 * **Meaning:** Network Configuration
 
&#60;DHCP&#62;: DHCP On/Off (Optional)

|Parameter|	Meaning|
|---------|--------|
|0	|DHCP Off, Static|
|1|	DHCP On, DHCP Client|
|**Mode**|	**Meaning**|
|STA	|DHCP Client On/Off|
|AP	|Not used. if any, it will be ignored|

&#60;IP&#62;: IP Address (Optional)
&#60;SN&#62;: Subnet Mask (Optional)
&#60;GW&#62;: Gateway Address (Optional)

|Mode|	Meaning|
|-----|--------|
|STA|	AP(Router) gateway address|
|AP	|Not used. if any, it will be ignored|

* When you turn DHCP On in STA Mode, &#60;IP&#62;,&#60;SN&#62;,&#60;GW&#62; are not needed. If you input them at this time, they will be stored in the memory. They can be used later when set as Static(DHCO Off) without inputting these parameters.

* In AP mode, DHCP Server will always run despite DHCP option, and Gateway option will not be used, So both options will be ignored.

- **Response:**
    [OK]
    
---    

- **Format:**
    AT+WNET=?
    
 * **Meaning:** Get Current Network Setting
 
Note that &#60;IP&#62;,&#60;SN&#62;,&#60;GW&#62; address of response are not actual addresses, but addresses stored in the memory. So when DHCP is on, it usually different from actual addresses.

- **Response:**
    &#60;DHCP&#62;,&#60;IP&#62;,&#60;SN&#62;,&#60;GW&#62;
    [OK]

---

#### AT+WSTAT

- **Format:**
    AT+WSTAT
    
- **Meaning:** Get Current WiFi Status
  
- **Response:**
    IF/SSID/IP-Addr/Gateway/MAC/TxPower(dBm)/RSSI(-dBm)
    ...
    [OK]
    
---   

#### AT+WWPS

- **Format:**
    AT+WWPS=&#60;Mode&#62;,&#60;PinNum&#62;
    
 * **Meaning:** WiFi WPS Connection
Join with an AP through WPS method

&#60;Mode&#62;: WPS Mode (Required)

|Parameter|	Meaning|
|---------|--------|
|0|	WPS_PBC_MODE|
|1	|WPS_PIN_MODE|

&#60;PinNum&#62;: Pin Number (Pin Mode: Required, PBC Mode: N/A)
* The maximum pin number letter is 8.

Examples)

- AT+WWPS=0
- AT+WWPS=1,12345670

 * **Response:**
    [OK]

---

#### AT+WADNS

- **Format:**
 &#62;
 
    AT+WADNS=&#60;DNS Server1&#62;,&#60;DNS Server2&#62;
    
 * **Meaning:** Add DNS Server
 
&#60;DNS Server 1&#62;: DNS Server 1
&#60;DNS Server 2&#62;: DNS Server 2

Examples)

- AT+WADNS=8.8.8.8
  
- **Response:**
    [OK]


## Network Commands

Commands related to Network are listed below.

---

#### AT+SCON

- **Format:**
  &#62;
  
    AT+SCON=&#60;OpenType&#62;,&#60;SocketType&#62;,&#60;RemoteIP&#62;,&#60;RemotePort&#62;,&#60;LocalPort&#62;,&#60;DataMode&#62;
    
 * **Meaning:** Socket Open/Connect ( User can use max 8 sockets. )
Opens a socket and if it is a TCP Client, establishes TCP connection with remote peer device.

&#60;OpenType&#62;: Socket open type (Required)

|Parameter	|Meaning|
|------------|------|
|O	|open at Once|
|S|	register as a Service|
|SO|	open at Once & register as a Service|

* AT ONCE: Assigns a socket immediately and if the socket is a TCP Client, tries to connect peer socket.

* AS SERVICE: Registers its information to the profile. When WiFi Joined, socket open/connect will be performed automatically. If you want to use this after reset, It should be saved by using AT+MPROF=S

&#60;SocketType&#62;: Socket protocol to use (Required)

|Parameter|	Meaning|
|---------|-------|
|TSN|	TCP Server Normal|
|TCN|	TCP Client Normal|
|TCS	|TCP Client Secured|
|USN|	UDP Server Normal|
|UCN	|UDP Client Normal|

* 'Secured' means TCP connection through SSL Encryption. It can be used in only TCP Client mode.

* Actually, there is no Server/Client concept in UDP protocol. This concept is used to decide peer address purposes. If a UDP Server receives any packet, its default peer address will be changed to the address of the packet, so if you send data after that, it goes to the changed address. But If you use UDP Client, its …default address stored by AT+SCON will never be changed.

&#60;RemoteIP&#62;: Remote IP address

|Protocol	|Parameter Application|
|---------|---------------------|
|TCP Server|	N/A|
|TCP Client	|Required|
|UDP Server|	Optional|
|UDP Client|	Required|

&#60;RemotePort&#62;: Remote port number
Same condition with upper, RemoteIP

&#60;LocalPort&#62;: Local port number (Required)
Local port number should not be duplicated with others which have opened before. When the value is 0, in case the socket was a TCP/UDP Client, a random port number will be selected. If it was a TCP/UDP Server, it will return an error message.

&#60;DataMode&#62;: Mode to run (Optional, default: 0)

|Parameter|	Meaning|
|---------|--------|
|0|	Open as Command mode|
|1|	Open as Data mode|
* About Command/Data mode, refer to Command mode & Data mode

Examples)

AT+SCON=O,TSN,,,5000,0
AT+SCON=S,UCN,192.168.0.10,12345,5000,1 (Profile must be saved)

- **Response:**
    [OK]
    
---    
    
- **Format:**
 &#62;
 
     AT+SCON=?
     
- **Meaning:** Get Previous Input Parameters
  
Use for check if previous input parameters are correct.

- **Response:**
    &#60;OpenType&#62;,&#60;SocketType&#62;,&#60;RemoteIP&#62;,&#60;RemotePort&#62;,&#60;LocalPort&#62;,&#60;DataMode&#62;
    [OK]

---

#### AT+SMGMT

- **Format:**
    AT+SMGMT=&#60;SocketID&#62;
    
 - **Meaning:** Socket Management - Socket Close
   
Closes the selected socket and releases all its resources.

&#60;SocketID&#62;: Socket ID (Required)

|Parameter	|Meaning|
|-----------|--------|
|0 ~ 7|	The socket ID to close|
|ALL|	All the opened sockets|

* Opened socket information can be found by using '?' option.

Examples)

- AT+SMGMT=5
- AT+SMGMT=ALL

 * **Response:**
    [OK]

---

 * **Format:**

      AT+SMGMT=?
      
 * **Meaning:** Socket Management - Get Opened Socket Status
This prints all of the opened sockets statuses.

- **Response:**
      Number of Sockets : x (SCID/Socket/Mode/Remote/Local/DataMode)
      &#60;SocketID&#62;,&#60;SocketAddr&#62;,&#60;SocketType&#62;,&#60;RemoteIP&#62;,&#60;RemotePort&#62;,&#60;LocalPort&#62;,&#60;DataMode&#62;
      ...
      [OK]

---

#### AT+SSEND

 * **Format:**
     AT+SSEND=&#60;SocketID&#62;,&#60;RemoteIP&#62;,&#60;RemotePort&#62;,&#60;SendSize&#62;,&#60;Timeout&#62;
     
 * **Meaning: Data Send**
 
This is used only in command mode, not in data mode. It is not required in data mode as you can input directly, but if you exit from data mode to command mode by inputting '+++', you can send data through this command.

&#60;SocketID&#62;: Socket ID (Required)

&#60;RemoteIP&#62;: Remote IP Address
  
|Protocol|	Parameter Application|
|--------|-----------------------|
|TCP Server	|N/A|
|TCP Client	|N/A|
|UDP Server|	Optional|
|UDP Client	|Optional|

* In case of TCP Server waiting for a client on listen state or in case of undecided remote address of the UDP Server (meaning its remote address is 0.0.0.0:0), this command will fail.

&#60;RemotePort&#62;: Remote Port Number
Same condition with upper, RemoteIP

&#60;SendSize&#62;: Data size to send (Required)
Valid Range: 1 ~ 100,000,000 Byte

&#60;Timeout &#62;: Set timeout value (milliseconds unit) (Optional)
If the transmission takes time more time than timeout value, it will fail and return error response. Default value is 10s + (100s / 1 MB)

Examples)

- AT+SSEND=0,,,3
- AT+SSEND=1,192.168.0.100,5000,1000000,50000

 * **Response:**
    [OK]
    
---    

#### AT+SDATA

- **Format:**
     AT+SDATA
     
- **Meaning:** Return to Data Mode
  
In data mode, it can be changed to command mode temporally by using serial '+++' input. After that, to return to the data mode, you can use this command. If it is not data mode, [ERROR] response will be returned.

 * **Response:**
    [OK]

---

#### AT+SFORM

- **Format:**
    AT+SFORM=&#60;Format&#62;,&#60;Start&#62;,&#60;Delim&#62;,&#60;End&#62;,&#60;Cls1&#62;,&#60;Cls2&#62;
    
 * **Meaning:** Define Data Receive Header Form
 
Define the header of received data which is used at command mode. For example, default receiving format look like below.
“{0,192.168.0.216,59834,5}hello(0xd)(0xa)”
This means ASCII code "hello" was received from 192.168.0.216:59834 by
socket ID 0, and its length was 5. You can change this format to suit
your system through this command.  
  
Factory default option is "111111111,7B,2C,7D,0D,0A"  
  
&#60;Format&#62;: Decide each of header items to use. (Required)  
If you want to set it to active, input '1'.  
If not, input '0'.  

| Order | Meaning |
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

- At default format, '{' '}' is header start and end, ',' is delimiter,
0xd,0xa is data end 1,2.  
  
&#60; Start&#62;: Header Start Character (Required)  
&#60; Delim&#62;: Delimiter Character (Required)  
&#60; End&#62;: Header End Character (Required)  
&#60; Cls1&#62;: Data End Character 1/2 (Required)  
&#60; Cls2&#62;: Data End Character 2/2 (Required)  
  
Examples)


- AT+SFORM=111111111,7B,2C,7D,0D,0A
- AT+SFORM=101100110,5B,2F,5D,0D,00  

  - **Response:**

    [OK]

 
----

  - **Format:**

    AT+SFORM=?

  - **Meaning:** Get Current Data Receive Header Form

  - **Response:**
    &#60;Format&#62;,&#60;Start&#62;,&#60;Delim&#62;,&#60;End&#62;,&#60;Cls1&#62;,&#60;Cls2&#62;
    [OK]

-----

#### AT+SOPT

- **Format:** 
     AT+SOPT=&#60;Option&#62;,&#60;SocketID&#62;,&#60;Socket Level&#62;,&#60;Option Name&#62;,&#60;Option Value
- **Meaning:** S2W miscellaneous option 
&#60;Option&#62;: Option to configure (Required)

| Option | Value                 |
| ------ | --------------------- |
| 1      | Set socket option     |
| ~~2~~  | ~~Get socket option~~ |

&#60;SocketID&#62;: Socket ID (Required)

&#60;Socket Level&#62;: Socket Level (Required)

| Socket Level | Value            |
| ------------ | ---------------- |
| 4095         | SOL_SOCKET      |
| 0            | IPPROTO_IP      |
| 6            | IPPROTO_TCP     |
| 17           | IPPROTO_UDP     |
| 136          | IPPROTO_UDPLITE |

&#60;Option Name&#62; : Option name for socket level options for level
SOL_SOCKET

| Option Name | Value         |
| ----------- | ------------- |
| 4           | SO_REUSEADDR |
| 8           | SO_KEEPALIVE |

options for level IPPROTO_IP

| Option Name | Value   |
| ----------- | ------- |
| 1           | IP_TOS |
| 2           | IP_TTL |

options for level IPPROTO_TCP

| Option Name | Value          |
| ----------- | -------------- |
| 1           | TCP_NODELAY   |
| 2           | TCP_KEEPALIVE |
| 3           | TCP_KEEPIDLE  |
| 4           | TCP_KEEPINTVL |
| 5           | TCP_KEEPCNT   |

Examples)


- AT+SOPT=1,0,4095,8,1
- AT+SOPT=1,0,6,3,10
- AT+SOPT=1,0,6,4,15
- AT+SOPT=1,0,6,5,3

 - **Response:**

      [OK]



-----

#### AT+SOPT1

- **Format:** 
    AT+SOPT1=&#60;Option&#62;,&#60;Value

  - **Meaning:** S2W miscellaneous option

&#60;Option&#62;: Option to configure (Required) &#60;Value&#62;: Value of the
option (Required)

| Option | Value                                                           |
| ------ | --------------------------------------------------------------- |
| 10     | Escape sequence(+++) Timer(millisecond, default 1000, 1~10000) |

Examples)

- AT+SOPT1=10,500


  - **Response:**

     [OK]

## Management Commands
  
Commands related to system management are listed below.

-----

#### AT+MPROF
  
- **Format:** 

    AT+MPROF=&#60;Action

  - **Meaning:** Profile Management

 You can save/load the environmental
information in the RAM to/from flash ROM, or check the setting values in
both of them through this command.  
(- AT+WSET, AT+WSEC are immediately stored in the Flash ROM)  
  
&#60;Action&#62;: The action to perform (Required)  

| Parameter | Meaning |
| -- | ------------------- |
| VD | Get saved profile   |
| VG | Get current profile |
| L  | Load profile        |
| S  | Save profile        |

- There is no '?' option at this command.  
  
Examples)

- AT+MPROF=S  

  - **Response:**
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

-----

####  AT+MFDEF
  
- **Format:**

    AT+MFDEF=FR

  - **Meaning:** Perform Factory Reset

Factory Reset means that all of
environmental variables return back to the default state. (You can check
that by using AT+MPROF command)

  - **Response:**
    [OK]

-----

#### AT+MRESET

- **Format:** 

    AT+MRESET

  - **Meaning:** Perform System Reset

System will reboot after this command.

  - **Response:**

    [OK]

#### AT+MMSG  
  
- **Format:** 

    AT+MMSG=&#60;Level

  - **Meaning:** Set Message Print Level

 &#60;Level&#62;: Message Print Level (Required)

| Parameter | Meaning                             |
| --------- | ----------------------------------- |
| 1         | Not Print Responses                 |
| 2         | Print Responses, Events (Default)   |
| 3         | Print Responses, Events, Debug Logs |

Examples)

- AT+MMSG=2  

  - **Response:**

    [OK]

----

  - **Format:**
    AT+MMSG=?

  - **Meaning:** Get Current Message Print Level


  - **Response:**

    &#60;Level&#62;
    [OK]

#### AT+MMAC 
  
- **Format:** 

    AT+MMAC=&#60;MAC

  - **Meaning:** Set MAC Address

 &#60;MAC&#62;: MAC Address (separated by colon)
(Required)  
  
Examples)

- AT+MMAC=00:08:DC:11:22:33  

  - **Response:**

    [OK]

----

  - **Format:**

    AT+MMAC=?

  - **Meaning:** Get Current MAC Address

  - **Response:**

    &#60;MAC&#62;
    [OK]

#### AT+MINFO
  
- **Format:** 

    AT+MINFO

  - **Meaning:** Get System Information

  - **Response:**

    FW version / HW version
    &#60;FWver&#62; / &#60;HWver&#62;
    [OK]


#### AT+MECHO
    
- **Format:**

    AT+MECHO=&#60;Action

  - **Meaning:** Set Echo Mode

 If you turn the echo mode off, you cannot
see the characters that you inputted returning. It is easy to use to
turn off when Host MCU handles AT Command control.  
  
&#60;Action&#62;: Echo Mode (Required)  
^ Parameter ^ Meaning ^

|   |                   |
| - | ----------------- |
| 0 | Echo Off          |
| 1 | Echo On (Default) |

Examples)

- AT+MECHO=0  

  - **Response:**
    [OK]

----

  - **Format:**

    AT+MECHO=?

  - **Meaning:** Get Current Echo Mode

  - **Response:**

    &#60;Mode&#62;
    [OK]

#### AT+MHELP  
  
- **Format:** 

    AT+MHELP

  - **Meaning:** Print Command Description and Usage

This is command usage guide for user
convenience. 

  - **Response:**

    ...
    [OK]

#### AT+MMCUPS  
  
  
- **Currently Not Available**
-----

#### AT+MWIFIPS 
  
  
- **Format:** 

    AT+MWIFIPS=&#60;Action&#62;,&#60;Delay
  - **Meaning:** Wi-Fi Power Save Enable/Disable

Wi-Fi power save mode can be selected
through this command.  
  
&#60;Action&#62; : Wi-Fi Power Save Mode (Required)

| Parameter | Meaning                                                         |
| --------- | --------------------------------------------------------------- |
| 0         | Wi-Fi Power Save Mode Disable                                   |
| 1         | Wi-Fi Power Save Mode Enable                                    |
| 2         | Enables power save mode while attempting to maximize throughput |

- To using Wi-Fi Power Save Mode, WizFi310 has to connect to Access
Point. And WizFi310 can only use this mode in station mode.  
  
&#60;Delay &#62; : Return to Sleep Delay  
If it is set with a bigger value, the performance will improve but the
power consumption will rise.

| Action | Application |
| ------ | ----------- |
| 0      | N/A         |
| 1      | N/A         |
| 2      | Required    |

- This parameter is used only to set 2 of &#60;Action&#62; parameter.  
  
- It must be set to a multiple of 10. When set to 0, the timeout period
default to 2 beacon intervals (approximately 204ms).  
  
- It can be set to 0 ~ 90 

  - **Response:**

    [OK]

----

  - **Format:**

    AT+MWIFIPS=?

  - **Meaning:** Get Current Wi-Fi Power Save Status

&#60;Status &#62; : Current Wi-Fi Power Save
Status

| Return value | Meaning                       |
| ------------ | ----------------------------- |
| 0            | Wi-Fi Power Save Mode Disable |
| 1            | Wi-Fi Power Save Mode Enable  |

  - **Response:**

    [OK]

-----

#### AT+USET
  
- **Format:** 

    AT+USET=&#60;Baudrate&#62;,&#60;Parity&#62;,&#60;WordLen&#62;,&#60;StopBit&#62;,&#60;FlowCon

  - **Meaning:** UART Configuration

UART parameter can be set through this
command. Factory default parameter is "115200,N,8,1,N ".  
  
&#60;Baudrate&#62;: Set the Baud-Rate. (Required)

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

&#60;Parity&#62;: Set the Parity-Bit type. (Required)

| Parameter | Meaning |
| --------- | ------- |
| N         | None    |
| O         | Odd     |
| E         | Even    |

&#60;WordLen&#62;: Set the Word-Length. (Required)

| Parameter | Meaning |
| --------- | ------- |
| 7         | 7 bits  |
| 8         | 8 bits  |

&#60;StopBit&#62;: Set the Stop-Bit. (Required)

| Parameter | Meaning |
| --------- | ------- |
| 1         | 1 bits  |
| 2         | 2 bits  |

&#60;FlowCon&#62;: Set the Flow-Control method. (Required)

| Parameter | Meaning               |
| --------- | --------------------- |
| N         | None                  |
| HW        | Hardware Flow Control |

Examples)

- AT+USET=115200,N,8,1,N
- AT+USET=921600,N,8,2,HW  



- **Response:** 

    [OK]


----

  - **Format:**

    AT+USET=?

  - **Meaning:** Get Current UART Setting

  - **Response:**

    &#60;Baudrate&#62;,&#60;Parity&#62;,&#60;WordLen&#62;,&#60;StopBit&#62;,&#60;FlowCon&#62;
    [OK]

----

#### AT+MCUSTOM
  
- **Format:** 

    AT+MCUSTOM=&#60;custom code  - **Meaning:** Set to customized settings by request of specific
    customers.

Examples)  
  
Default custom code is WIZNET  
- AT+MCUSTOM=WIZNET 

  - **Response:**
    [OK]

----

  - **Format:**

    AT+MCUSTOM=?

  - **Meaning:** Get current custom code
  - **Response:**

    WIZNET
    [OK]

#### AT+MAIRCMD 
    
- **Format:**

    AT+MAIRCMD=&#60;OpenType&#62;,&#60;SocketType&#62;,&#60;LocalPort&#62;,&#60;Option
  - **Meaning:** Configure Air Command mode

&#60;OpenType&#62;: Air Command mode type
(Required)

| Parameter | Meaning               |
| --------- | --------------------- |
| O         | open at Once          |
| S         | register as a Service |

- AT ONCE: Assigns a Air-Command-socket immediately.  
  
- AS SERVICE: Registers its information to the profile. When WiFi
Joined, Air-Command-socket open will be performed automatically. If you
want to use this after reset, It should be saved by using AT+MPROF=S  
  
&#60;SocketType&#62;: Air-Command-Socket protocol to use (Required)

| Parameter | Meaning           |
| --------- | ----------------- |
| T         | TCP Server Normal |
| U         | UDP Server Normal |

&#60;LocalPort&#62;: Local port number (Required)  
Local port number should not be duplicated with others which have opened
before. When the value is 0, in case the socket was a TCP/UDP Client, a
random port number will be selected. If it was a TCP/UDP Server, it will
return an error message.  
  
&#60;Option&#62;: Reserved (Required)
Examples)

- AT+MAIRCMD=O,T,50001,0
- AT+MAIRCMD=S,U,50001,0
- AT+MAIRCMD=?

  - **Response:**

    &#60;OpenType&#62;,&#60;SocketType&#62;,&#60;LocalPort&#62;,&#60;Option&#62;
    [OK]

----

#### AT+MEVTMSG
  
- **Format:** 

    AT+MEVTMSG=&#60;Status
  - **Meaning:** Print [Listen x] as soon as it opens up a socket
    through TCP server.

It is able to print TCP Server Status
with [Listen x].(x:socket number).  
A user can decide whether WizFi310 will print out Listen message or not
in initialization mode on TCP server.  
This command is made for mbed library.  
Uses 1 Parameter and set status of socket as 0,1 for each relevant below
table.  
  
&#60;Status&#62;: Printing status (Required)  
^ Parameter ^ Meaning ^

|   |                                 |
| - | ------------------------------- |
| 0 | No display [Listen x] message |
| 1 | Display [Listen x] message    |

  
Examples)

- AT+MEVTMSG=0
- AT+MEVTMSG=1

  - **Response:**

    [OK]

----

#### AT+MEVTFORM  
  
- **Format:** 

    AT+MEVTFORM=&#60;format

  - **Meaning:** Define Event Message Form

It is able to control format and printing
status of WizFi310 event messages.  
Uses 10 Parameters and set event message as 0,1,2 for each relevant
one  
  
&#60;Format&#62;: Event Message Format (Required)  
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
<td>WizFi310 Version 1.0.0.6 (WIZnet Co.Ltd)rn</td>
<td>rn[0]rn</td>
</tr>
<tr class="even">
<td>b</td>
<td></td>
<td>rn[CONNECT %x]rn</td>
<td>rn[1]rn</td>
</tr>
<tr class="odd">
<td>c</td>
<td></td>
<td>rn[DISCONNECT %x]rn</td>
<td>rn[2]rn</td>
</tr>
<tr class="even">
<td>d</td>
<td></td>
<td>rn[Link-Up Event]rn<br />
IP Addr : ...rn<br />
Gateway : ...rn</td>
<td>rn[3]rn</td>
</tr>
<tr class="odd">
<td>e</td>
<td></td>
<td>rn[Link-Down Event]rn</td>
<td>rn[4]rn</td>
</tr>
<tr class="even">
<td>f</td>
<td></td>
<td>rn[Reset Event]rn</td>
<td>rn[5]rn</td>
</tr>
<tr class="odd">
<td>g</td>
<td></td>
<td>rn[TCP Send Error]rn</td>
<td>rn[6]rn</td>
</tr>
<tr class="even">
<td>h</td>
<td></td>
<td>rn[P2P Fail Event]rn</td>
<td>rn[7]rn</td>
</tr>
<tr class="odd">
<td>i</td>
<td></td>
<td>rn[LISTEN %x]rn</td>
<td>rn[8]rn</td>
</tr>
<tr class="even">
<td>j</td>
<td></td>
<td>rn[MQTT CONNECT]rn</td>
<td>rn[9]rn</td>
</tr>
<tr class="odd">
<td>k</td>
<td></td>
<td>rn[MQTT DISCONNECT]rn</td>
<td>rn[a]rn</td>
</tr>
</tbody>
</table>

Examples)

- AT+MEVTFORM=111111111111
- AT+MEVTFORM=122220000000
- AT+MEVTFORM=000000000000

  - **Response:**

    [OK]
  
----

  - **Format:**

    AT+MEVTFORM=?


  - **Meaning:** Get Current Event Message Form


  - **Response:**

    &#60;Format&#62;
    [OK]
 
#### AT+MUPGRADE 
  
  
- **Format:** 

    AT+MUPGRADE


- **Meaning:** This command is for upgrading firmware of WizFi310 After using this command, WizFi310 will wait UART signal for XMODEM protocol. After this command, You have to send binary file which you want to upload using XMODEM protocol. If it is done successfully, WizFi310 will display "[OK]" message and then restart.  

Examples)

- AT+MUPGRADE

  - **Response:**

    [OK]

----
## Function Commands
  
Commands related to additional functions are listed below.

-----

#### AT+FPING
  
- **Format:** 

    AT+FPING=&#60;RepeatCnt&#62;,&#60;TargetIP
  - **Meaning:** PING Test

&#60;RepeatCnt&#62;: Repeat Count (Required)  
Valid Range: 1 ~ 50 (unit:number of times)  
  
&#60;TargetIP&#62;: Target IP Address (Required)  
  
Examples)

- AT+FPING=3,192.168.0.10  

  - **Response:**

    Ping Reply :  xxx ms
    ...
    [OK]

#### AT+FDNS 
    
- **Format:** 

    AT+FDNS=&#60;HostName&#62;,&#60;Timeout

  - **Meaning:** DNS Query

 &#60;HostName&#62;: The domain name to search
(Required)  
  
&#60;Timeout&#62;: Maximum Delay (milliseconds unit) (Required)  
Valid Range: 1,000 ~ 1,000,000 (unit:ms)(Recommend: 1000)  
  
Examples)

- AT+FDNS=www.google.com,1000  

  - **Response:**

    xxx.xxx.xxx.xxx
    [OK]

#### AT+FGPIO
  
- **Format:** 

    AT+FGPIO=&#60;gpio_number&#62;,&#60;action:0&#62;,&#60;config_value&#62;
    AT+FGPIO=&#60;gpio_number&#62;,&#60;action:1&#62;,&#60;config_value&#62;
    AT+FGPIO=&#60;gpio_number&#62;,&#60;action:2&#62;,&#60;gpio_value&#62;
    AT+FGPIO=&#60;gpio_number&#62;,&#60;action:3&#62;,&#60;gpio_value
  - **Meaning:** GPIO Control Function  
       
GPIO can be set through this command.  
&#60;gpio_number&#62;: Available GPIO number (Required)

| Return value | Meaning |
| ------------ | ------- |
| 3            | GPIOB 3 |
| 4            | GPIOC 4 |
&#60;action&#62;: The action to perform (Required)

| Return value | Meaning                            |
| ------------ | ---------------------------------- |
| 0            | GPIO Initialize as a Input mode    |
| 1            | GPIO Initialize as a Output mode   |
| 2            | Get GPIO value of &#60;gpio_number&#62; |
| 3            | Set GPIO value of &#60;gpio_number&#62; |

&#60;config_value&#62;: Current GPIO Configuration Value (It can be used when
action is 0, 1)

| Return value | Meaning                                                |
| ------------ | ------------------------------------------------------ |
| 0            | PULL_NONE (Not use pull-up & pull-down resistor)      |
| 1            | PULL_UP (Input with an internal pull-up resistor)     |
| 2            | PULL_DOWN (Input with an internal pull-down resistor) |
| 3            | OPEN_DRAIN (Output open drain)                        |
  
&#60;gpio_value&#62;: Current GPIO Value (It can be used when action is 2, 3)

| Return value | Meaning |
| ------------ | ------- |
| 0            | Low     |
| 1            | High    |
  
Examples)

- AT+FGPIO=3,1,1 &#60;&#60; Initialize GPIOB 3 as a Output mode
- AT+FGPIO=3,3,0 &#60;&#60; Set GPIO value of GPIOB 3 to Low
- AT+FGPIO=3,3,1 &#60;&#60; Set GPIO value of GPIOB 3 to High
- AT+FGPIO=3,2,0 &#60;&#60; Get GPIO value of GPIOB 3

  - **Response:**

 If &#60;action&#62; is 2

    &#60;gpio_value&#62;
    [OK]
    ex)
    AT+FGPIO=3,2,0
    0
    [OK]
  
If &#60;action&#62; is 0, 1, 3

    [OK]
  
----

  - **Format:**

    AT+FGPIO=?

  - **Meaning:** Get available GPIO number

Examples)

- AT+FGPIO=? 

  - **Response:**

    &#60;gpio_num_1&#62;,&#60;gpio_num_2&#62;
    [OK]
    
    ex) 
    3,4
    [OK]
  
----

#### AT+FGETADC 
  
- **Format:** 

    AT+FGETADC=?

  - **Meaning:** Read ADC from ADC pin of WizFi310 when using this AT
    Command  
  
Examples)


- AT+FGETADC=? 

  - **Response:**

    xxxx
    [OK]
    
    ex) 
    1697
    [OK]

#### AT+FSOCK 
    
- **Format:** 

    AT+FSOCK=&#60;Option&#62;,&#60;Value

  - **Meaning:** SOCKET Extension Option

 When there is no socket connected, it
tries to reconnect the server using this option.  
6,8 options must be set as service mode(AT+SCON=S) for Auto
Reconnection.  
Profile(AT+MPROF=S) has to be saved after AT+FSOCK  
  
This is for extended options of Socket. It will be added continuously.

&#60;Option&#62;: Extended options of Socket (Required)

| Parameter | Meaning                                                                                    |
| --------- | ------------------------------------------------------------------------------------------ |
| 1         | TCP Send error timeout (value : 2000~20000ms)                                             |
| 6         | Recreates Socket then attempts Auto-Reconnection after &#60;Value&#62; seconds (value: 10~1000) |
| 8         | Automatically resets WizFi310 module. when there is no socket connected (value: 5~1000)   |

&#60;Value&#62; : Value of extended option (Required)

Examples)

- AT+FSOCK=1,5000
- AT+FSOCK=6,10
- AT+FSOCK=8,30  

  - **Response:**

    [OK]

-----

  - **Format:**

    AT+FSOCK=?

  - **Meaning:** Get Current extended options of socket
  - **Response:**

    &#60;Extened option 1&#62;&#60;2&#62;&#60;3&#62;&#60;4&#62;&#60;5&#62;&#60;6&#62;&#60;7&#62;&#60;8&#62;
    [OK]
    
    ex)
    5000,0,0,0,0,10,0,30

-----

#### AT+FOTA
  
- **Format:** 

    AT+FOTA=&#60;Server IP&#62;,&#60;Server Port
  - **Meaning:** Launch OTA Mode

 User can update firmware in OTA mode
which can be entered by this command. Refer to [Wi-Fi
OTA](firmware_upgrade_using_ota)

OTA Server should run some protocol. that included in OTA tool.

&#60;Server IP&#62;: Firmware Server IP

&#60;Server Port&#62; : Firmware Server Port

  - **Response:**

    [OK]

----

## MQTT Commands
  
MQTT (Message Queuing Telemetry Transport) is a light weight messaging
protocol for use on top of the TCP/IP protocol. It is designed for
connections with remote locations where a "small code footprint" is
required or the network bandwidth is limited.  
It is a communication protocol which almost can link all networked
objects with the external, and it is used as a sensor.  

[Wikipedia](https://en.wikipedia.org/wiki/MQTT)  
  
[WizFi310 MQTT Example](examples#example---mqtt)  

----

#### AT+MQTTSET 
  
- **Format:**

    AT+MQTTSET=&#60;UserName&#62;,&#60;Password&#62;,&#60;ClientID&#62;,&#60;AliveTime
  - **Meaning:** This command is used to initialize the necessary
    parameters of MQTT connection. 

&#60;UserName&#62;: The User Name used in the
broker authentication (Required, Max: 50 Character)  
&#60;Password&#62;: The Password used in the broker authentication (Required,
Max: 50 Character)  
&#60;ClientID&#62;: The Client ID connected to the broker (Required, Max: 50
Character)  
&#60;AliveTime&#62;: The keep-alive time setting with the broker (Required,
30S ~ 300S)  

- this command needs to be invoked before the command of "AT+MQTTCON"
connecting the broker.  
  
Examples)

- AT+MQTTSET=wiznet,12345678,wiznet-01,60  

  - **Response:**

    [OK]

----

  - **Format:**

    AT+MQTTSET=?

  - **Meaning:** Get Current Information of MQTT Connection and
    Authentication

  - **Response:**

    &#60;UserName&#62;,&#60;Password&#62;,&#60;ClientID&#62;,&#60;AliveTime&#62;
    [OK]
 
----

#### AT+MQTTCON  
    
- **Format:** 

    AT+MQTTCON=&#60;Con/Discon&#62;,&#60;BrokerIP&#62;,&#60;BrokerPort&#62;,&#60;SSL_Enable

  - **Meaning:** Implement MQTT to connect the Broker. 

&#60;Con/Discon&#62;: MQTT Connection
(Required)  

| Parameter | Meaning |
| - | -------------------------- |
| 0 | Connect to the broker      |
| 1 | Disconnect from the broker |

&#60;BrokerIP&#62;: IP address of the broker (Optional)  
- It can be used when the WizFi310 connect to broker  
&#60;BrokerPort&#62;: Broker Port (optional, default: 1883)  
- It can be used when the WizFi310 connect to broker  
&#60;SSL_Enable&#62;: whether to enable secure connection (optional, default:
0)  
- It can be used when the WizFi310 connect to broker  

| Parameter | Meaning                      |
| --------- | ---------------------------- |
| 0         | Not to enable SSL connection |
| 1         | Enable SSL connection        |

Connection Examples)

- AT+MQTTCON=1,192.168.1.229,1883,0 
- AT+MQTTCON=1,192.168.1.229,8883,1 

  - **Response:**
    [MQTT CONNECT]
    [OK]
  
Disconnection Examples)

- AT+MQTTCON=0 

  - **Response:**

    [MQTT DISCONNECT]
    [OK]

----

  - **Format:**

    AT+MQTTCON=?

  - **Meaning:** Get Current Connection Status

  - **Response:**

    &#60;Connection Status&#62;
    [OK]

----

#### AT+MQTTSUB

- **Format:**

    AT+MQTTSUB=&#60;Sub/Unsub&#62;,&#60;Topic

  - **Meaning:** Such topics will be pushed to the WizFi310 when
    received by the Broker,  
    for example, wiznet/temp indicates that the WizFi310 has subscribed
    data (input data) sent by other clients. 

&#60;Sub/Unsub&#62;: Subscribe/Unsubscribe the
Topic (Required)  

| Parameter | Meaning               |
| --------- | --------------------- |
| 0         | Unsubscribe the topic |
| 1         | Subscribe the topic   |

&#60;Topic&#62;: Themes subscribed by the WizFi310 (Required, Max: 64
Character)  
    
Examples)

- AT+MQTTSUB=1,wiznet/temp 
- AT+MQTTSUB=0,wiznet/temp

  - **Response:**

    [OK]

----

#### AT+MQTTPUB

- **Format:** 

    AT+MQTTPUB=&#60;Topic&#62;,&#60;Length

  - **Meaning:** Publish the message to subscribed Client

&#60;Topic&#62;: Themes subscribed by the WizFi310 (Required, Max: 64
Character)  
&#60;Length&#62;: Length of the message (Required)  
- After using this command, You must input the message.  
    
Examples)

- AT+MQTTPUB=wiznet/temp,3  

  - **Response:**

    &#60;Length&#62;
    [OK]

----

## GMMP Commands

GMMP Commands are for SK Telecom in Korea. So these command can't use in
other country. (It can be used only in Korea). So descriptions for these
commands will be written in Korea.

GMMP는 M2M 단말과 개방형 M2M 플랫폼(OMP)사이의 TCP 기반 연동 규격으로서, 단말 등록/해지, 주기보고, 단말 제어
등의 기능을 수행하는 SKTelecom 내부 규격이다.

-----

#### AT+GMMPSET
  
- **Format:** 

    AT+GMMPSET=&#60;Con/Discon&#62;,&#60;ThingPlug IP&#62;,&#60;Thingplug Port&#62;,&#60;Domain Code&#62;,&#60;Auth ID&#62;,&#60;Manufacture ID&#62;,&#60;Device ID

  - **Meaning:** GMMP_GW_Registration 절차를 수행하기 위한 설정. 사전에
    &#60;https://sandbox.sktiot.com에서&#62; 디바이스(TCP) 등록이 되어 있어야 G/W, Device 등로
    한다.  
    ThingPlug의 IP, Port, Domain Code, WizFi310의 Auth ID, Manufacture ID,
    Device ID를 설정한다.  

<table>
<thead>
<tr class="header">
<th>Element</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Con/Discon</td>
<td>1 or 0</td>
<td>1: GMMP_GW_Registration과 GMMP_Delivery를 수행한다. GMMP_Delivery는 AT+GMMPDATA가 설정되어있어야 한다.<br />
0: GMMP_Delivery를 중지한다.</td>
</tr>
<tr class="even">
<td>ThingPlug IP</td>
<td>61.250.21.211</td>
<td>ThingPlug의 IP를 입력한다.</td>
</tr>
<tr class="odd">
<td>ThingPlug Port</td>
<td>31002</td>
<td>ThingPlug의 TCP Listen Port를 입력한다.<br />
ThingPlug-&gt;마이페이지-&gt;서비스 정보수정에서 확인 가능</td>
</tr>
<tr class="even">
<td>Domain Code</td>
<td>ThingPlug</td>
<td>ThingPlug의 서비스명을 입력한다.<br />
ThingPlug-&gt;마이페이지-&gt;서비스 정보수정에서 확인 가능</td>
</tr>
<tr class="odd">
<td>Auth ID</td>
<td>0008dc1e000000</td>
<td>GW ID, 디바이스 등록시 입력한 MAC Address를 입력한다.<br />
ThingPlug-&gt;디바이스 정보-&gt;디바이스 조회에서 확인 가능</td>
</tr>
<tr class="even">
<td>Manufacture ID</td>
<td>WIZnet_GWMFID</td>
<td>제조사 ID를 입력한다.<br />
ThingPlug-&gt;디바이스 정보-&gt;디바이스 조회에서 확인 가능</td>
</tr>
<tr class="odd">
<td>Device ID</td>
<td>deviceID</td>
<td>디바이스 ID를 입력한다.<br />
디바이스 고유의 ID를 사용한다.</td>
</tr>
</tbody>
</table>
  
Connection Examples)

- AT+GMMPSET=1,61.250.21.211,31002,ThingPlug,0008dc1e000000,WIZnet_GWMFID,WizFi310 

  - **Response:**
    [GMMP CONNECT]
    [OK]
  
Disconnection Examples)

- AT+GMMPSET=0 

  - **Response:**

    [GMMP DISCONNECT]
    [OK]

----

#### AT+GMMPDATA
  
- **Format:**

    AT+GMMPDATA=&#60;Option&#62;,&#60;Data

  - **Meaning:** OMP로 보내고 싶은 데이터를 해당 AT command를 이용해서 설정할 수 있다.  
    옵션에 따라 AT Command 이후 즉시 보내거나, 설정된 주기마다(AT+GMMPOPT로 설정) 데이터(Report
    type: Collect Data)를 보낼 수 있다.  
    
<table>
<thead>
<tr class="header">
<th>Element</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Option</td>
<td>0 or 1</td>
<td>0: 설정된 주기마다 보낼 데이터를 설정한다.<br />
1: AT명령 즉시 데이터를 보낸다.</td>
</tr>
<tr class="even">
<td>Data</td>
<td>DATA</td>
<td>데이터</td>
</tr>
</tbody>
</table>
  
Examples)

- AT+GMMPDATA=0,test data 
- AT+GMMPDATA=1,test data  

  - **Response:**

    [OK]

----

#### AT+GMMPOPT 
  
- **Format:** 

    AT+GMMPOPT=&#60;Option&#62;,&#60;values

  - **Meaning:** GMMP 옵션을 설정하는 명령어이다. AT+GMMPOPT의 옵션에는 3가지가 있다.

#### &#60;Option&#62; = 10


-   &#60;Option&#62; = 10은 이벤트 로그, 디버그 프린트를 설정하는 옵션이다.  
-   Examples) AT+GMMPOPT=10,&#60;set&#62;,&#60;val1&#62;,&#60;val2
<table>
<thead>
<tr class="header">
<th>Element</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>set</td>
<td>0 or 1</td>
<td>0: 현재 설정된 값을 읽는다.<br />
1: val1, val2의 값으로 설정한다.</td>
</tr>
<tr class="even">
<td>val1</td>
<td>0 or 1</td>
<td>0: 이벤트 로그를 프린트 하지 않는다.<br />
1: 이벤트 로그를 프린트 한다.</td>
</tr>
<tr class="odd">
<td>val2</td>
<td>0 or 1</td>
<td>0: 디버그 메세지를 프린트하지 않는다.<br />
1: 디버그 메세지를 프린트 한다.</td>
</tr>
</tbody>
</table>
===&#60;Option&#62; = 11===

- &#60;Option&#62; = 11은 Heartbeat 패킷의 전송 주기(Heartbeat Period)이다.   

| Element | Example | Description               |
| ------- | ------- | ------------------------- |
| period  | 10      | Heartbeat 패킷 전송 주기(단위: 분) |
  
===&#60;Option&#62; = 12===

- &#60;Option&#62; = 12은 Delivery 패킷의 전송 주기(Report Period)이다.  

- Examples) AT+GMMPOPT=12,&#60;period

| Element | Example | Description              |
| ------- | ------- | ------------------------ |
| period  | 10      | Delivery 패킷 전송 주기(단위: 분) |
  
----

## Connecting ThingPlug Commands
  
ThingPlug는 SK Telecom의 IoT 플랫폼으로, oneM2M 표준 기반의 IoT 서비스를 제공합니다.  
  
[Connecting ThingPlug Example](thingplug_example)  

----

#### AT+SKTPCON    
  
- **Format:** 

    AT+SKTPCON=<Con/Discon>,<ThingPlug IP>,<ThingPlug Port>,<Alive Time>,
    <ThingPlug Portal ID>,<Credential ID>,<Service ID>,<Version>,<Device ID> 

  - **Meaning:** This command is used to connect to ThingPlug. 

 &#60;Con/Discon&#62;: ThingPlug
Connect/Disconnect

| Parameter | Meaning                     |
| --------- | --------------------------- |
| 0         | Disconnect to the ThingPlug |
| 1         | Connect from the ThingPlug  |

&#60;ThingPlug IP&#62;: ThingPlug IP 주소  
  
&#60;ThingPlug Port&#62;: ThingPlug Port 번호  
  
&#60;Alive Time&#62;: ThingPlug에 접속 유지하는 시간 설정  
  
&#60;ThingPlug Portal ID&#62;: ThingPlug에 가입한 사용자 ID  
  
&#60;Credential ID&#62;: 초기 디바이스 인증 코드  
  
&#60;Service ID&#62;: 등록한 서비스 ID  
  
&#60;Version&#62;: 버젼 정보  
  
&#60;Device ID&#62;: 디바이스 ID  
  
  
Examples)

- AT+SKTPCON=1,mqtt.thingplug.net,1883,300,ThingPlug User ID,ThingPlug Credential ID,ThingPlug Service ID,v1_0,Registered Device ID   

  - **Response:**

    [MQTT CONNECT]
    [OK]

----

#### AT+SKTPDEVICE  
  
- **Format:** 

    AT+SKTPDEVICE=&#60;Register/Delete&#62;,&#60;Device ID&#62;,&#60;Device Authorization Code(AE-ID)

  - **Meaning:** Device register to ThingPlug. 

&#60;Register/Delete&#62;: Device
Register/Delete to ThingPlug  

| Parameter | Meaning |
| - | --------------- |
| 0 | Device Delete   |
| 1 | Device Register |

&#60;Device ID&#62;: Device ID  
&#60;Device Authorization Code(AE-ID)&#62;: AE-ID  
  
  
Connection Examples)


- AT+SKTPDEVICE=1,Registered Device ID,Device Authorization Code(AE-ID) 


  - **Response:**

    [OK]


----

#### AT+SKTPCONTAINER

- **Format:** 

    AT+SKTPCONTAINER=&#60;Register/Delete&#62;,&#60;Container Name

  - **Meaning:** Register the Container Name. 

 &#60;Register/Delete&#62;: Container
Register/Delete to ThingPlug  

| Parameter | Meaning |
| - | ------------------ |
| 0 | Container Delete   |
| 1 | Container Register |

&#60;Container Name&#62;: Container Name  
  
  
Examples)


- AT+SKTPCONTAINER=1,WIZnet  

  - **Response:**

    [OK]

----

#### AT+SKTPSEND
  
- **Format:** 

    AT+SKTPSEND=&#60;Container Name&#62;,&#60;Data
  - **Meaning:** Sending the data to ThingPlug

&#60;Container Name&#62;: Container Name  
&#60;Data&#62;: Data to send  
- Data Format is TTV(Between Device Platform and ThingPlug Service
Platform communication rule).  
    
Examples)

- AT+SKTPSEND=WIZnet,010600000028  

  - **Response:**

    [OK]

----

#### AT+SKTPCMD 
    
- **Format:** 

    AT+SKTPCMD=&#60;Register/Delete&#62;,&#60;Management command

  - **Meaning:** Register the response command to management.

&#60;Register/Delete&#62;: Container Register/Delete to ThingPlug  
^ Parameter ^ Meaning ^

|   |                             |
| - | --------------------------- |
| 0 | Management command Delete   |
| 1 | Management command Register |

&#60;Management command&#62;: Response command to management  
   
Examples)
 
  - **Response:**

    [OK]

----

#### AT+SKTPRESULT 
  
- **Format:** 

    AT+SKTPRESULT=&#60;Management command&#62;,&#60;Execute Status&#62;,&#60;Execute Result
  - **Meaning:** Publish the message to subscribed Client

&#60;Management command&#62;: Registered Management command  
&#60;Execute Status&#62;: Execute status value  
&#60;Execute Result&#62;: Execute result value  
    
Examples)

- AT+SKTPRESULT=WIZnet_CMD,3,0  

  - **Response:**

    [OK]


----

## Command mode & Data mode

  
There are two user interface modes between WizFi310 and User-System.  
  
**Command mode** is the default communication mode and all AT Commands
can be used only at this mode. Through AT Commands, users can do 'WiFi
Configuration', 'Sending/Receiving Data', 'Managing System', and so on.
WizFi310 treats all received data from users as AT command. If all
received data follows the correct command format, WizFi310 processes it
and returns a proper response to user.  
  
**Data mode**, on the other hand, is the mode which passes data of
application layers to peer devices directly, without AT commands or any
other interventions. It can be considered as a black box which passes
all USART input to USART output directly. Its concept is simple but to
enter this mode, Users need to set the environment properly through AT
Commands.

### Entering Data mode

Users can enter Data mode by writing '1' at '&#60;DataMode&#62;' parameter of
AT+SCON command. Make sure that there are no open sockets before
performing this, because Data mode works with one socket only. (So if
you try to open another socket in data mode it will fail). If the socket
of Data mode is closed, the mode will be changed to Command mode
automatically so users can input AT Commands. If users set AT+SCON
command as service with data mode option and save the profile, Data mode
will be started when WiFi is joined, so the user does not need to set
environments anymore. If the system boots or reboots at that time, WiFi
Join will also be started automatically. Users can exit from data mode
temporally by entering '+++' in a row (Wait for a second until [OK]
response show up). Any AT Command can be entered during Data mode except
AT+SCON command. If you want to return to data mode again, you just need
to enter AT+SDATA. If you want to exit Data mode completely, close the
socket by using 'AT+SMGMT=0' or 'AT+SMGMT=ALL'.

### Data transmission in Command mode

In Command mode, you can make more than one socket, and you can
send/receive data through opened sockets at the same time by using AT
Command. You can send data to specific socket opened through AT+SSEND
command and receive data with information header which informs you on
the socket number, the peer address and the received data length.
