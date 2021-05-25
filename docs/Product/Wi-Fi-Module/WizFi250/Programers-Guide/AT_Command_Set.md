---
id: at_command_set
title: AT Command Set
date: 2020-05-12
---

This section provides a list of WizFi250 AT commands and their effects.
Users can input commands and parameters through USART line. Every
command starts with the characters “AT”. Any other initial character
will cause an error in return. Commands and parameters are all ASCII
characters, e.g. When you input 'AT+MMSG=1', you can input ASCII
characters 'A', 'T', '+', 'M', 'M', 'S', 'G', '=', '1' and 'Enter Key'
which should be CR(0x0d), but neither CRLF(0x0d, 0x0a) nor LF(0x0a).  
  
Some parameters are mandatory and the others are optional. (refer to
[Command Tables](#command-list))
Parameters must be entered in an order of format column given by the
command tables. Even though an optional parameter is not used, the comma
delimiters must still be included in the command. In most cases, valid
commands return the characters \[OK\]. Invalid inputs return \[ERROR\].
The possible responses sent by WizFi250 to the user side are described
at [Responses](#responses).
Below is a possible example which users can input. As you can see,
WizFi250 return "\\r\\n" back instead of "\\r", which means user (host
system) always handle '\\r\\n' as a only delimiter.

|**input by user**|AT\r (0x61 0x74 0x0d)|
|-------|---|
|**Output from WizFi250**|AT\r\n[OK]\r\n (0x0d 0x0a 0x5b 0x4f 0x4b 0x5d 0x0d 0x0a)(* “AT\r\n” is Echo back of user input)|

## Responses

Responses are listed below.

| Response                 | Meaning                                                              |
| ------------------------ | -------------------------------------------------------------------- |
| \[OK\]                   | Command Request Success                                              |
| \[ERROR\]                | Command Request Fail                                                 |
| \[ERROR: INVALID INPUT\] | Wrong command or parameter                                           |
| \[ERROR: INVALID SCID\]  | Wrong Socket ID                                                      |
| \[ERROR: WiFi Status\]   | Wrong WiFi Status (Some commands work only with Wi-Fi Joined status) |
| \[ERROR: Mode Status\]   | Wrong Mode Status (Some commands do not work in Data mode)           |
| \[CONNECT x\]            | TCP Connection established & Socket Open                             |
| \[DISCONNECT x\]         | TCP Connection closed & Socket Close                                 |
| \[Link-Up Event\]        | WiFi Connection was established                                      |
| \[Link-Down Event\]      | WiFi Connection was closed                                           |
| \[Reset Event\]          | System reset occurred (not by user)                                  |


## Command list

| [Basic Commands](#basic-commands)     |                                                          |
| -------------------------------- | ---- |
| [AT](#at)                             | Terminal Check                                           |
| [WiFi Commands](#wifi-commands)       |                                                          |
| [AT+WJOIN](#atwjoin)                  | WiFi Association                                         |
| [AT+WLEAVE](#atwleave)                | WiFi Disassociation                                      |
| [AT+WSCAN](#atwscan)                  | WiFi Scan                                                |
| [AT+WSET](#atwset)                    | WiFi Configuration                                       |
| [AT+WSEC](#atwsec)                    | WiFi Security Configuration                              |
| [AT+WNET](#atwnet)                    | Network Configuration                                    |
| [AT+WSTAT](#atwstat)                  | Get Current WiFi Status                                  |
| [AT+WREG](#atwreg)                    | Country Configuration                                    |
| [AT+WWPS](#atwwps)                    | WiFi WPS Connection                                      |
| [AT+WANT](#atwant)                    | WiFi Antenna Configuration                               |
| [AT+WP2P\_START](#atwp2p_start)       | Start WiFi Direct                                        |
| [AT+WP2P\_STOP](#atwp2p_stop)         | Stop WiFi Direct                                         |
| [AT+WP2P\_PEERLIST](#atwp2p_peerlist) | Get WiFi Direct peer list                                |
| [AT+WP2P\_INVITE](#atwp2p_invite)     | Invite WiFi Direct peer ID                               |
| [AT+WCHECK](#atwcheck)                | Check Wi-Fi status using Ping and Re-association with AP |

| [Network Commands](#network-commands)  |                                 |
| ---------------------------------------------------------------------------------- | ------------------------------- |
| [AT+SCON](#atscon)   | Socket Open/Connect             |
| [AT+SMGMT](#atsmgmt) | Socket Management               |
| [AT+SSEND](#atssend) | Data Send                       |
| [AT+SDATA](#atsdata) | Return to Data Mode             |
| [AT+SFORM](#atsform) | Define Data Receive Header Form |

| [Management Commands](#management-commands)   |                                                                        |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [AT+MPROF](#atmprof)     | Profile Management                                                     |
| [AT+MFDEF](#atmfdef)     | Perform Factory Reset                                                  |
| [AT+MRESET](#atmreset)   | Perform System Reset                                                   |
| [AT+MMSG](#atmmsg)       | Set Message Print Level                                                |
| [AT+MMAC](#atmmac)       | Set MAC Address                                                        |
| [AT+MINFO](#atminfo)     | Get System Information                                                 |
| [AT+MECHO](#atmecho)     | Set Echo Mode                                                          |
| [AT+MHELP](#atmhelp)     | Print Command Description and Usage                                    |
| [AT+MMCUPS](#atmmcups)   | MCU Power Save Enable/Disable                                          |
| [AT+MWIFIPS](#atmwifips) | Wi-Fi Power Save Enable/Disable                                        |
| [AT+MCWUI](#atmcwui)     | Change WebServer User Information                                      |
| [AT+USET](#atuset)       | UART Configuration                                                     |
| [AT+MSPI](#atmspi)       | SPI Configuration                                                      |
| [AT+MAIRCMD](#atmaircmd) | Air Command Configuration                                              |
| [AT+MEVTMSG](#atmevtmsg)  | Print \[Listen x\] as soon as it opens up a socket through TCP server. |
| [AT+MEVTFORM](#atmevtform)                   | Event Message Form  |

| [Function Commands](#function-commands) |                         |
| -------------------- | ----------------------- |
| [AT+FPING](#atfping) | PING Test               |
| [AT+FDNS](#atfdns)   | DNS Query               |
| [AT+FWEBS](#atfwebs) | Launch Web Server       |
| [AT+FGPIO](#atfgpio) | GPIO Control            |
| [AT+FSOCK](#atfsock) | SOCKET Extension Option |
| [AT+FOTA](#atfota)   | Launch OTA Mode         |

### Basic Commands

Basic commands are listed below.

----

#### AT

* **Format:**

<code>AT</code>

* **Meaning:** Terminal Check

Check if AT Command Terminal is working.

* **Response:**

<code>
[OK]
</code>

  
### WiFi Commands

Commands related to WiFi are listed below.

-----

#### AT+WJOIN
  
- **Format:** 

```
AT+WJOIN
```

- **Meaning:** WiFi Association

In the **STA** mode, it joins with the BSS selected by AT+WSET, AT+WSEC.  
And in the **AP** mode, it starts to run as an Access Point.

* There are 2 Wi-Fi modes in WizFi250, STA mode and SoftAP mode. When users execute AT+WJOIN command, the current Wi-Fi mode works as the one previously selected by user input. It can be selected or checked by AT+WSET and AT+WSEC commands, and it is the only way to handle Wi-Fi mode.
* SoftAP mode does not support WEP security method.


- **Response:**
```
Joining : (SSID)
Successfully joined : (SSID)
    
[Link-Up Event]
IP Addr    : xxx.xxx.xxx.xxx
Gateway   : xxx.xxx.xxx.xxx
[OK]
```
```
Already Associated :
(Mode)
[OK]
```

#### AT+WLEAVE
 
- **Format:** 

```
AT+WLEAVE
```

- **Meaning:** WiFi Disassociation

 In the STA mode, it leaves current BSS, but in the SoftAP mode, it stops to run as Access Point.


- **Response:**
```
[Link-Down Event]
[OK]
```
```
[OK]
```  

#### AT+WSCAN
  
- **Format:** 

```
AT+WSCAN=<SSID>,<BSSID>,<Channel>
```

- **Meaning:** WiFi Scan

Return the scan results filtered by parameters.  
  
&lt;SSID&gt;: SSID Filter (Optional)  
Scan only the AP which has this SSID.  
&lt;BSSID&gt;: BSSID Filter (Optional)  
Scan only the AP which has this BSSID.  
&lt;Channel&gt;: Channel Filter (Optional)  
Scan only the AP in this Channel.  
  
When combining these filters, it works at the same time. For example, if you enter AT+WSCAN=TestAP,00:08:DC:11:22:33', it only scans the AP which has TestAP as SSID and 00:08:DC:11:22:33 as BSSID in all the channel.  
  
Examples)

``` 
  * AT+WSCAN=TestAP
  * AT+WSCAN=,,6
  * AT+WSCAN=,08:00:DC:11:22:33,11
```

- **Response:**

    Index/SSID/BSSID/RSSI(-dBm)/MaxDataRate(Mbps)/Security/RadioBand (GHz)/Channel
    ...
    [OK]

 
#### AT+WSET

- **Format:** 

```
AT+WSET=<WiFiMode>,<SSID>,<BSSID>,<Channel>
```

- **Meaning:** WiFi Configuration

&lt;WiFiMode&gt;: WiFi Mode to set (Required)  
This changes current WiFi mode.

| Parameter | Meaning                    |
| --------- | -------------------------- |
| 0         | Set Wi-Fi mode as STA mode |
| 1         | Set Wi-Fi mode as AP mode  |

&lt;SSID&gt;: Target/Own SSID (Required, Max: 32 Character)

| Mode | Meaning               |
| ---- | --------------------- |
| STA  | The SSID of target AP |
| AP   | Its own SSID to run   |

&lt;BSSID&gt;: Target BSSID (Optional, Form: xx:xx:xx:xx:xx:xx)

| Mode | Meaning                              |
| ---- | ------------------------------------ |
| STA  | The BSSID of target AP               |
| AP   | Not used. if any, it will be ignored |

&lt;Channel&gt;: Target/Own Channel (Optional)

| Mode | Meaning                                         |
| ---- | ----------------------------------------------- |
| STA  | In STA mode, the Channel of target AP           |
| AP   | In AP mode, its own Channel to run (Default: 6) |

\* There are 2 Wi-Fi modes in WizFi250, STA mode and SoftAP mode. When
users execute AT+WJOIN command, it works as Wi-Fi mode previously
selected by the user. It can be selected or checked by AT+WSET and
AT+WSEC commands, and it is the only way to handle Wi-Fi mode.  
  
\* AT+WSET, AT+WSEC commands save its parameters into the profile
automatically, so the user does not need to save the current profile.  
  
Examples)

``` 
  * AT+WSET=0,WizFiAP
  * AT+WSET=0,WizFiAP,08:00:DC:11:22:33,1
```

- **Response:**

    [OK]

- **Format:**

    AT+WSET=?

- **Meaning:** Get Current Setting

- **Response:**

```
<WiFiMode>,<SSID>,<BSSID>,<Channel>
[OK]
```
 
#### AT+WSEC
  
- **Format:** 
```
AT+WSEC=<WiFiMode>,<SecType>,<Key>
```

- **Meaning:** WiFi Security Configuration

&lt;WiFiMode&gt;: Target WiFi mode to set (Required)

| Parameter | Meaning                    |
| --------- | -------------------------- |
| 0         | Set Wi-Fi mode as STA mode |
| 1         | Set Wi-Fi mode as AP mode  |

&lt;SecType&gt;: Security type (Optional)

| Parameter | Meaning                             |
| --------- | ----------------------------------- |
| OPEN      | None                                |
|           | WiFi Auto Security                  |
| WEP       | WEP (\* Not support at SoftAP mode) |
| WPA       | WPA1 - TKIP                         |
| WPAAES    | WPA1 - AES                          |
| WPA2AES   | WPA2 - AES                          |
| WPA2TKIP  | WPA2 - TKIP                         |
| WPA2      | WPA2 - Mixed                        |

&lt;Key&gt;: Security key value

| Method | Length                          |
| ------ | ------------------------------- |
| WEP    | 5 or 13 (ASCII), 10 or 26 (HEX) |
| WPA    | 8 \~ 63 (ASCII), 128 (HEX)      |

\* There are 2 Wi-Fi modes in WizFi250, STA mode and SoftAP mode. When users execute AT+WJOIN command, it works as Wi-Fi mode previously selected by the user. It can be selected or checked by AT+WSET and AT+WSEC commands, and it is the only way to handle Wi-Fi mode.  
  
\* AT+WSET, AT+WSEC commands save its parameters into the profile automatically, it works as Wi-Fi mode previously selected by the user.  
  
\* Minimum key length is 8 bytes in WiFi Auto Security.  
In case of WEP mode and 5 bytes key, you should input the key with HEX type.  
AT+WSEC=0,,12345(X)  
AT+WSEC=0,,3132333435(O)  
In case of OPEN mode, you should input the 8 bytes dummy string. Then WizFi250 will ignore the dummy key in OPEN mode.  
AT+WSEC=0,,(X)  
AT+WSEC=0,,12345678(O)  

Examples)

``` 
  * AT+WSEC=0,WEP,12345
  * AT+WSEC=1,WPA2,12345678 
  * AT+WSEC=0,,123456789\\ \\
```

- **Response:**

`[OK]
`

- **Format:**

    AT+WSEC=?

- **Meaning:** Get Security Setting of Current Mode

- **Response:**

```
<WiFiMode>,<SecType>,<Key> 
[OK]
```
 
#### AT+WNET  
  
- **Format:** 

```
AT+WNET=<DHCP>,<IP>,<SN>,<GW>
```

- **Meaning:** Network Configuration

&lt;DHCP&gt;: DHCP On/Off (Optional)

| Parameter | Meaning                              |
| --------- | ------------------------------------ |
| 0         | DHCP Off, Static                     |
| 1         | DHCP On, DHCP Client                 |
| Mode      | Meaning                              |
| STA       | DHCP Client On/Off                   |
| AP        | Not used. if any, it will be ignored |

&lt;IP&gt;: IP Address (Optional)  
&lt;SN&gt;: Subnet Mask (Optional)  
&lt;GW&gt;: Gateway Address (Optional)

| Mode | Meaning                              |
| ---- | ------------------------------------ |
| STA  | AP(Router) gateway address           |
| AP   | Not used. if any, it will be ignored |

\* When you turn DHCP On in STA Mode, &lt;IP&gt;,&lt;SN&gt;,&lt;GW&gt; are not needed. If you input them at this time, they will be stored in the memory. They can be used later when set as Static(DHCP Off) without inputting these parameters.  
  
\* In AP mode, DHCP Server will always run despite DHCP option, and Gateway option will not be used, So both options will be ignored.


- **Response:**

[OK]

- **Format:**

AT+WNET=?

- **Meaning:** Get Current Network Setting

 Note that &lt;IP&gt;,&lt;SN&gt;,&lt;GW&gt; address of response are not actual addresses, but addresses stored in the memory.
So when DHCP is on, it usually different from actual addresses.

- **Response:**

```
<DHCP>,<IP>,<SN>,<GW>
[OK]
```

#### AT+WSTAT
 

- **Format:** 

```
AT+WSTAT
```

- **Meaning:** Get Current WiFi Status

- **Response:**

```
IF/SSID/IP-Addr/Gateway/MAC/TxPower(dBm)/RSSI(-dBm)
...
[OK]
```

#### AT+WREG
 
- **Format:** 

```
AT+WREG=<Country>
```

- **Meaning:** Country Configuration

Input a two letter country code (ISO 3166-1 A2) like US. 

- **Response:**

    [OK]

- **Format:**

    AT+WREG=?

- **Meaning:** Get Current Country Setting

 Refer to ISO 3166-1 A2 

- **Response:**

```
<Country>
[OK]
```
 
#### AT+WWPS
  
- **Format:** 

```
AT+WWPS=<Mode>,<PinNum>
```

- **Meaning:** WiFi WPS Connection

Join with an AP through WPS method  
  
&lt;Mode&gt;: WPS Mode (Required)

| Parameter | Meaning        |
| --------- | -------------- |
| 0         | WPS\_PBC\_MODE |
| 1         | WPS\_PIN\_MODE |

&lt;PinNum&gt;: Pin Number (Pin Mode: Required, PBC Mode: N/A)  
\* The maximum pin number letter is 8.  
  
Examples)

``` 
  * AT+WWPS=0
  * AT+WWPS=1,12345670
```

- **Response:**

    [OK]

-----

#### AT+WANT
  
- **Format:** 

```
AT+WANT=<Antenna type>
```

- **Meaning:** WiFi Antenna Configuration

You had better not use this command unless it's absolutely necessary.  
  
&lt;Mode&gt;: WiFi Antenna Type (Required)

| Parameter | Meaning        |
| --------- | -------------- |
| 0         | u.FL Antenna   |
| 1         | PCB Antenna    |
| 3         | Auto Selection |

- **Response:**

    [OK]

-----

- **Format:**

    AT+WANT=?

- **Meaning:** Get Current WiFi Antenna Type

- **Response:**

```
<Antenna Type>
[OK]
```
 
#### AT+WP2P_START
 
- **Format:** 

```
AT+WP2P_START
```

- **Meaning:** Start WiFi Direct

- **Response:**

    STA MAC: CE:52:AF:C6:CF:B5
    [OK]

 
#### AT+WP2P_STOP  
  
- **Format:** 

```
AT+WP2P_STOP
```

- **Meaning:** Stop WiFi Direct

- **Response:**

    [OK]

 
#### AT+WP2P_PEERLIST  
  
- **Format:** 

```
AT+WP2P_PEERLIST
```

- **Meaning:** Get WiFi Direct peer list

- **Response:**

```
P2P Peers:
0: 'SHV-E250S' on channel 1
[OK]
```
 
#### AT+WP2P_INVITE  
  
  
- **Format:** 

```
AT+WP2P_INVITE=<Peer ID>
```

- **Meaning:** Invite WiFi Direct peer ID

 &lt;Peer ID&gt;: Peer ID to invite. This is from &lt;AT+WP2P\_PEERLIST&gt; command.(Required) 

- **Response:**

    [OK]

 
#### AT+WCHECK
  
- **Format:** 

```
AT+WCHECK=<time>,<ping try>,<ping error>
```

- **Meaning:** Check Wi-Fi status using Ping and Re-association with AP

It must be set as service mode in order to use Re-association function.  
This function only exist later vision of F/W 1.0.3.5.  
  
To use this option, you must enter a non-zero value.  

&lt;time&gt;: try to ping (to gateway) each time. 10 \~ 86400(required, unit:sec)  
&lt;ping try&gt;: count of ping. 5 \~ 20(required, unit:number of times)  
&lt;ping error&gt;: WizFi250 will be disassociated if ping timeout is more than this. 1 \~ 20(required, unit:number of times)  
  
Examples)

``` 
  * AT+WCHECK=0,0,0 (Not in use)
  * AT+WCHECK=60,5,3 (Recommended. WizFi250 will try to ping to the gateway every 60 seconds. If ping timeout is more than 3, it would be disassociated.)
```

- **Response:**

    [OK]

 
#### AT+WADNS
  
- **Format:** 

```
AT+WADNS=<DNS Server1>,<DNS Server2>
```

- **Meaning:** Add DNS Server

&lt;DNS Server 1&gt;: DNS Server 1  
&lt;DNS Server 2&gt;: DNS Server 2  
  
Examples)

``` 
  * AT+WADNS=8.8.8.8
```

- **Response:**

    [OK]
  
### Network Commands

Commands related to Network are listed below.

-----

#### AT+SCON
 
- **Format:** 

```
AT+SCON=<OpenType>,<SocketType>,<RemoteIP>,<RemotePort>,<LocalPort>,<DataMode>
```

- **Meaning:** Socket Open/Connect ( User can use max 8 sockets. )

Opens a socket and if it is a TCP Client, establishes TCP connection with remote peer device.  
  
&lt;OpenType&gt;: Socket open type (Required)

| Parameter | Meaning                              |
| --------- | ------------------------------------ |
| O         | open at Once                         |
| S         | register as a Service                |
| SO        | open at Once & register as a Service |

\* AT ONCE: Assigns a socket immediately and if the socket is a TCP Client, tries to connect peer socket.  
  
\* AS SERVICE: Registers its information to the profile. When WiFi Joined, socket open/connect will be performed automatically. If you want to use this after reset, It should be saved by using AT+MPROF=S.

&lt;SocketType&gt;: Socket protocol to use (Required)

| Parameter | Meaning            |
| --------- | ------------------ |
| TSN       | TCP Server Normal  |
| TSS       | TCP Server Secured |
| TCN       | TCP Client Normal  |
| TCS       | TCP Client Secured |
| USN       | UDP Server Normal  |
| UCN       | UDP Client Normal  |

\* 'Secured' means TCP connection through SSL Encryption.  
  
\* Actually, there is no Server/Client concept in UDP protocol. This concept is used to decide peer address purposes. If a UDP Server receives any packet, its default peer address will be changed to the address of the packet, so if you send data after that, it goes to the changed address. But If you use UDP Client, its …default address stored by AT+SCON will never be changed.  
  
&lt;RemoteIP&gt;: Remote IP address

| Protocol   | Parameter Application |
| ---------- | --------------------- |
| TCP Server | N/A                   |
| TCP Client | Required              |
| UDP Server | Optional              |
| UDP Client | Required              |

&lt;RemotePort&gt;: Remote port number  
Same condition with upper, RemoteIP  
  
&lt;LocalPort&gt;: Local port number (Required)  
Local port number should not be duplicated with others which have opened before. When the value is 0, in case the socket was a TCP/UDP Client, a random port number will be selected. If it was a TCP/UDP Server, it will return an error message.  
  
&lt;DataMode&gt;: Mode to run (Optional, default: 0)

| Parameter | Meaning              |
| --------- | -------------------- |
| 0         | Open as Command mode |
| 1         | Open as Data mode    |

\* About Command/Data mode, refer to [Command mode & Data mode]  
  
Examples)

``` 
  * AT+SCON=O,TSN,,,5000,0
  * AT+SCON=S,UCN,192.168.0.10,12345,5000,1 (Profile must be saved)
```

- **Response:**

    [OK]

- **Format:**

    AT+SCON=?

- **Meaning:** Get Previous Input Parameters

 Use for check if previous input parameters are correct. 

- **Response:**

```
<OpenType>,<SocketType>,<RemoteIP>,<RemotePort>,<LocalPort>,<DataMode>
[OK]
```

#### AT+SMGMT
 
- **Format:** 

```
AT+SMGMT=<SocketID>
```

- **Meaning:** Socket Management - Socket Close

 Closes the selected socket and releases all its resources.

&lt;SocketID&gt;: Socket ID (Required)

| Parameter | Meaning                |
| --------- | ---------------------- |
| 0 \~ 7    | The socket ID to close |
| ALL       | All the opened sockets |

\* Opened socket information can be found by using '?' option.  
  
Examples)

``` 
  * AT+SMGMT=5
  * AT+SMGMT=ALL
```

- **Response:**

    [OK]

- **Format:**

    AT+SMGMT=?

- **Meaning:** Socket Management - Get Opened Socket Status

 This prints all of the opened sockets statuses. 

- **Response:**

```
Number of Sockets : x (SCID/Socket/Mode/Remote/Local/DataMode)
<SocketID>,<SocketAddr>,<SocketType>,<RemoteIP>,<RemotePort>,<LocalPort>,<DataMode>
...
[OK]
```
 
#### AT+SSEND

  
- **Format:** 

```
AT+SSEND=<SocketID>,<RemoteIP>,<RemotePort>,<SendSize>,<Timeout>
```

- **Meaning:** Data Send

This is used only in command mode, not in data mode. It is not required in data mode as you can input directly, but if you exit from data mode to command mode by inputting '+++', you can send data through this command.  
  
&lt;SocketID&gt;: Socket ID (Required)  
  
&lt;RemoteIP&gt;: Remote IP Address  

| Protocol   | Parameter Application |
| ---------- | -------- |
| TCP Server | N/A      |
| TCP Client | N/A      |
| UDP Server | Optional |
| UDP Client | Optional |

\* In case of TCP Server waiting for a client on listen state or in case of undecided remote address of the UDP Server (meaning its remote address is 0.0.0.0:0), this command will fail.
  
&lt;RemotePort&gt;: Remote Port Number  
Same condition with upper, RemoteIP  
  
&lt;SendSize&gt;: Data size to send (Required)  
Valid Range: 1 \~ 100,000,000 Byte  
  
&lt;Timeout &gt;: Set timeout value (milliseconds unit) (Optional)  
If the transmission takes time more time than timeout value, it will fail and return error response. Default value is 10s + (100s / 1 MB)  
  
Examples)

``` 
  * AT+SSEND=0,,,3
  * AT+SSEND=1,192.168.0.100,5000,1000000,50000
```

- **Response:**

    [OK]

#### AT+SDATA
  
- **Format:** 

```
AT+SDATA
```

- **Meaning:** Return to Data Mode

 In data mode, it can be changed to command mode temporally by using serial '+++' input. After that, to return to the data mode, you can use this command. If it is not data mode, [ERROR] response will be returned. 

- **Response:**

    [OK]

#### AT+SFORM
 
- **Format:** 

```
AT+SFORM=<Format>,<Start>,<Delim>,<End>,<Cls1>,<Cls2>
```

- **Meaning:** Define Data Receive Header Form

Define the header of received data which is used at command mode. For example, default receiving format look like below.  
"{0,192.168.0.216,59834,5}hello(0xd)(0xa)"  
This means ASCII code "hello" was received from 192.168.0.216:59834 by socket ID 0, and its length was 5. You can change this format to suit your system through this command. Factory default option is "111111111,7B,2C,7D,0D,0A"  
  
&lt;Format&gt;: Decide each of header items to use. (Required)  
If you want to set it to active, input '1', if not, input '0'.  

| Order  |  Meaning      |
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
  
&lt; Start&gt;: Header Start Character (Required)  
&lt; Delim&gt;: Delimiter Character (Required)  
&lt; End&gt;: Header End Character (Required)  
&lt; Cls1&gt;: Data End Character 1/2 (Required)  
&lt; Cls2&gt;: Data End Character 2/2 (Required)  
  
Examples)

``` 
  * AT+SFORM=111111111,7B,2C,7D,0D,0A
  * AT+SFORM=101100110,5B,2F,5D,0D,00
```

- **Response:**

    [OK]

- **Format:**

    AT+SFORM=?

- **Meaning:** Get Current Data Receive Header Form

- **Response:**

```
<Format>,<Start>,<Delim>,<End>,<Cls1>,<Cls2>
[OK]
```

-----

#### AT+SOPT1

- **Format:** 

```
AT+SOPT1=<Option>,<Value>
```

- **Meaning:** S2W miscellaneous option

&lt;Option&gt;: Option to configure (Required) &lt;Value&gt;: Value of the option (Required)

| Option | Value                                                           |
| ------ | --------------------------------------------------------------- |
| 10     | Escape sequence(+++) Timer(millisecond, default 1000, 1\~10000) |

Examples)

``` 
  * AT+SOPT1=10,500
```

- **Response:**

    [OK]

### Management Commands

Commands related to system management are listed below.

-----

#### AT+MPROF
  
- **Format:** 

```
AT+MPROF=<Action>
```

- **Meaning:** Profile Management

 You can save/load the environmentalinformation in the RAM to/from flash ROM, or check the setting values in both of them through this command.  
  
&lt;Action&gt;: The action to perform (Required)  

| Parameter   |  Meaning   |
| -- | ------------------- |
| VD | Get saved profile   |
| VG | Get current profile |
| L  | Load profile        |
| S  | Save profile        |

\* There is no '?' option at this command.  
  
Examples)

``` 
  * AT+MPROF=S
```

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
    +FWEBS=...
    [OK]

#### AT+MFDEF
   
- **Format:** 

```
AT+MFDEF=FR
```

- **Meaning:** Perform Factory Reset

Factory Reset means that all of environmental variables return back to the default state. (You can check that by using AT+MPROF command) 

- **Response:**

    [OK]

#### AT+MRESET
 
- **Format:** 

```
AT+MRESET
```

- **Meaning:** Perform System Reset

System will reboot after this command.

- **Response:**

    [OK]

#### AT+MMSG
 
- **Format:** 

```
AT+MMSG=<Level>
```

- **Meaning:** Set Message Print Level

 &lt;Level&gt;: Message Print Level (Required)

| Parameter | Meaning                             |
| --------- | ----------------------------------- |
| 1         | Not Print Responses                 |
| 2         | Print Responses, Events (Default)   |
| 3         | Print Responses, Events, Debug Logs |

Examples)

``` 
  * AT+MMSG=2
```

- **Response:**

    [OK]

- **Format:**

    AT+MMSG=?

- **Meaning:** Get Current Message Print Level

- **Response:**

```
<Level>
[OK]
```
 
#### AT+MMAC
  
- **Format:** 

```
AT+MMAC=<MAC>
```

- **Meaning:** Set MAC Address

 &lt;MAC&gt;: MAC Address (separated by colon)
(Required)  
  
Examples)

``` 
  * AT+MMAC=00:08:DC:11:22:33
```

- **Response:**

    [OK]

- **Format:**

    AT+MMAC=?

- **Meaning:** Get Current MAC Address

- **Response:**

```
<MAC>
[OK]
```
 
#### AT+MINFO
 
- **Format:** 

```
AT+MINFO
```

- **Meaning:** Get System Information

- **Response:**

```
FW version / HW version
<FWver> / <HWver>
[OK]
```
 
#### AT+MECHO
  
- **Format:** 

```
AT+MECHO=<Action>
```

- **Meaning:** Set Echo Mode

If you turn the echo mode off, you cannot see the characters that you inputted returning. It is easy to use to turn off when Host MCU handles AT Command control.  
  
&lt;Action&gt;: Echo Mode (Required)  

| Parameter | Meaning   |
| - | ----------------- |
| 0 | Echo Off          |
| 1 | Echo On (Default) |

Examples)

``` 
  * AT+MECHO=0
```

- **Response:**

    [OK]

- **Format:**

    AT+MECHO=?

- **Meaning:** Get Current Echo Mode

- **Response:**

```
<Mode>
[OK]
```
 
#### AT+MHELP
  
- **Format:** 

```
AT+MHELP
```

- **Meaning:** Print Command Description and Usage

 This is command usage guide for user convenience. 

- **Response:**

    ...
    [OK]

#### AT+MMCUPS
  
- **Format:** 

```
AT+MMCUPS=<Action>,<Timeout>
```

- **Meaning:** MCU Power Save Enable/Disable 

MCU Power Save Mode can be selected through this command.  
  
&lt;Action&gt; : MCU Power Save Mode (Required)

| Parameter | Meaning                     |
| --------- | --------------------------- |
| 0         | MCU Power Save Mode Disable |
| 1         | MCU Power Save Mode Enable  |

\* while using MCU Power Save Mode, WizFi250 cannot use serial communication.  
&lt;Timeout&gt; : MCU Power Save Timeout value (Required)  
Valid Range : 10 \~ 3600000 (unit:ms)  
cc

- **Response:**

    [OK]

#### AT+MWIFIPS
 
- **Format:** 

```
AT+MWIFIPS=<Action>,<Delay>
```

- **Meaning:** Wi-Fi Power Save Enable/Disable

Wi-Fi power save mode can be selected through this command.  
  
&lt;Action&gt; : Wi-Fi Power Save Mode (Required)

| Parameter | Meaning                                                         |
| --------- | --------------------------------------------------------------- |
| 0         | Wi-Fi Power Save Mode Disable                                   |
| 1         | Wi-Fi Power Save Mode Enable                                    |
| 2         | Enables power save mode while attempting to maximize throughput |

\* To using Wi-Fi Power Save Mode, WizFi250 has to connect to Access Point. And WizFi250 can only use this mode in station mode.  
  
&lt;Delay &gt; : Return to Sleep Delay  
If it is set with a bigger value, the performance will improve but the power consumption will rise.

| Action | Application |
| ------ | ----------- |
| 0      | N/A         |
| 1      | N/A         |
| 2      | Required    |

\* This parameter is used only to set 2 of &lt;Action&gt; parameter.  
  
\* It must be set to a multiple of 10. When set to 0, the timeout period default to 2 beacon intervals (approximately 204ms).  
  
\* It can be set to 0 \~ 90 

- **Response:**

    [OK]

- **Format:**

    AT+MWIFIPS=?

- **Meaning:** Get Current Wi-Fi Power Save Status

&lt;Status &gt; : Current Wi-Fi Power Save Status

| Return value | Meaning                       |
| ------------ | ----------------------------- |
| 0            | Wi-Fi Power Save Mode Disable |
| 1            | Wi-Fi Power Save Mode Enable  |

- **Response:**

    [OK]

#### AT+MCWUI
  
- **Format:** 

```
AT+MCWUI=<Current ID>,<Current P/W><New ID>,<New P/W>
```

- **Meaning:** Change Web Server's User Information

User ID and User Password used by web server can be changed through this command  
  
&lt;Current ID&gt; : Current ID (Required)  
\* Default value is admin  
  
&lt;Current P/W&gt; : Current Password (Required)  
\* Default value is admin  
  
&lt;New ID&gt; : New ID which you want to change (Required)  
\* Max length of New ID : 20 bytes  
  
&lt;New P/W&gt; : New Password which you want to change (Required)  
\* Max length of New Password : 20 bytes  
    
Examples)

``` 
  * AT+MCWUI=admin,admin,newid,newpassword
```

- **Response:**

    [OK]

- **Format:**

    AT+MCWUI=?

- **Meaning:** Get Current user ID and user P/W

- **Response:** 
```
<Current ID>,<Current P/W>
[OK]
```

-----

#### AT+USET

- **Format:** 

```
AT+USET=<Baudrate>,<Parity>,<WordLen>,<StopBit>,<FlowCon>
```

- **Meaning:** UART Configuration

 UART parameter can be set through this
command. Factory default parameter is "115200,N,8,1,N ".  
  
&lt;Baudrate&gt;: Set the Baud-Rate. (Required)

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

&lt;Parity&gt;: Set the Parity-Bit type. (Required)

| Parameter | Meaning    |
| --------- | ---------- |
| N         | None       |
| O         | (Reserved) |
| E         | (Reserved) |

&lt;WordLen&gt;: Set the Word-Length. (Required)

| Parameter | Meaning    |
| --------- | ---------- |
| 7         | (Reserved) |
| 8         | 8 bits     |

\* 7 bits word length with no parity bit is not allowed.  
  
&lt;StopBit&gt;: Set the Stop-Bit. (Required)

| Parameter | Meaning  |
| --------- | -------- |
| 0.5       | 0.5 bits |
| 1         | 1 bits   |
| 1.5       | 1.5 bits |
| 2         | 2 bits   |

&lt;FlowCon&gt;: Set the Flow-Control method. (Required)

| Parameter | Meaning               |
| --------- | --------------------- |
| N         | None                  |
| HW        | Hardware Flow Control |

Examples)

``` 
  * AT+USET=115200,N,8,1,N
  * AT+USET=921600,N,8,2,HW
```

- **Response:**

    [OK]

 
- **Format:**

    AT+USET=?

- **Meaning:** Get Current UART Setting

- **Response:**

```
<Baudrate>,<Parity>,<WordLen>,<StopBit>,<FlowCon>
[OK]
```
 
#### AT+MSPI
  
- **Format:** 

```
AT+MSPI=<Interface>,<SPI Option>
```

- **Meaning:** SPI Configuration  

&lt;Interface&gt;: Choice of interface
(Required)  
If &lt;Interface&gt; set 0, WizFi250 Will set the interface it received first. For example, If MCU sends UART signal to WizFi250, WizFi250 will be set as UART interface. On the other hand, If MCU send SPI signal to WizFi250, WizFi250 will be set as SPI interface.

| Parameter | Meaning       |
| --------- | ------------- |
| 0         | Auto(Default) |
| 1         | UART          |
| 2         | SPI           |

  
&lt;SPI Option&gt;: Configure SPI Option (Optional when use SPI)  

| Value |  Bit3   | Bit2 |  Bit1     |  Bit0      |
| ---- | ---------- | --- | ----------------- | -------------------- |
| 0 | LSB_FIRST |  | CLOCK_IDLE_LOW  | CLOCK_FALLING_EDGE |
| 1 | MSB_FIRST |  | CLOCK_IDLE_HIGH | CLOCK_RISING_EDGE  |

  
Examples(Received through UART interface):

``` 
  * **AT+MSPI=1,0**          (SET UART Interface)
```

Examples(Received through SPI interface):

``` 
  * **AT+MSPI=2,0**        (SET LSB_FIRST, CLOCK_IDLE_LOW, CLOCK_FALLING_EDGE)  \\  
  * **AT+MSPI=2,1**        (SET LSB_FIRST, CLOCK_IDLE_LOW, CLOCK_RISING_EDGE)   \\
  * **AT+MSPI=2,2**        (SET LSB_FIRST, CLOCK_IDLE_HIGH, CLOCK_FALLING_EDGE) \\
  * **AT+MSPI=2,3**        (SET LSB_FIRST, CLOCK_IDLE_HIGH, CLOCK_RISING_EDGE)  \\
  * **AT+MSPI=2,8**        (SET MSB_FIRST, CLOCK_IDLE_LOW, CLOCK_FALLING_EDGE)  \\ 
  * **AT+MSPI=2,9**        (SET MSB_FIRST, CLOCK_IDLE_LOW, CLOCK_RISING_EDGE)   \\ 
  * **AT+MSPI=2,10**       (SET MSB_FIRST, CLOCK_IDLE_HIGH, CLOCK_FALLING_EDGE) \\ 
  * **AT+MSPI=2,11**       (SET MSB_FIRST, CLOCK_IDLE_HIGH, CLOCK_RISING_EDGE)  \\ 
```

- **Response:**

    [OK]

- **Format:**

   AT+MSPI=?

- **Meaning:** Get Current Interface and SPI Option

- **Response:**

```
<Interface>,<SPI Option>
[OK]
```
 
#### AT+MCSTGPIO
  
- **Format:** 

```
AT+MCSTGPIO
```

- **Meaning:** TBD

- **Response:**

    [OK]

 
#### AT+MCUSTOM
  
- **Format:** 

```
AT+MCUSTOM=<custom code>
```

- **Meaning:** Set to customized settings by request of specific customers.

Examples)  
  
Default custom code is WIZNET  
\* AT+MCUSTOM=WIZNET 

- **Response:**

    [OK]

- **Format:**

    AT+MCUSTOM=?

- **Meaning:** Get current custom code

- **Response:**

    WIZNET
    [OK]

#### AT+MAIRCMD
  
- **Format:** 

```
AT+MAIRCMD=<OpenType>,<SocketType>,<LocalPort>,<Option>
```

- **Meaning:** Configure Air Command mode

 &lt;OpenType&gt;: Air Command mode type
(Required)

| Parameter | Meaning               |
| --------- | --------------------- |
| O         | open at Once          |
| S         | register as a Service |

\* AT ONCE: Assigns a Air-Command-socket immediately.  
  
\* AS SERVICE: Registers its information to the profile. When WiFi Joined, Air-Command-socket open will be performed automatically. If you want to use this after reset, It should be saved by using AT+MPROF=S  
  
&lt;SocketType&gt;: Air-Command-Socket protocol to use (Required)

| Parameter | Meaning           |
| --------- | ----------------- |
| T         | TCP Server Normal |
| U         | UDP Server Normal |

&lt;LocalPort&gt;: Local port number (Required)  
Local port number should not be duplicated with others which have opened before. When the value is 0, in case the socket was a TCP/UDP Client, a random port number will be selected. If it was a TCP/UDP Server, it will return an error message.  
  
&lt;Option&gt;: Reserved (Required)  
Examples)

``` 
  * AT+MAIRCMD=O,T,50001,0
  * AT+MAIRCMD=S,U,50001,0
  * AT+MAIRCMD=?
```

- **Response:**

```
<OpenType>,<SocketType>,<LocalPort>,<Option>
[OK]
```

#### AT+MEVTMSG
 
- **Format:** 

```
AT+MEVTMSG=<Status>
```

- **Meaning:** Print \[Listen x\] as soon as it opens up a socket     through TCP server.

It is able to print TCP Server Status with \[Listen x\].(x:socket number).  
A user can decide whether WizFi 250 will print out Listen message or not in initialization mode on TCP server.  
This command is made for mbed library.  
Uses 1 Parameter and set status of socket as 0,1 for each relevant below table.  
  
&lt;Status&gt;: Printing status (Required)  

| Parameter  |       Meaning          |
| - | ------------------------------- |
| 0 | No display \[Listen x\] message |
| 1 | Display \[Listen x\] message    |

  
Examples)

``` 
  * AT+MEVTMSG=0
  * AT+MEVTMSG=1
```

- **Response:**

    [OK]

#### AT+MEVTFORM
  
- **Format:** 

```
AT+MEVTFORM=<format>
```

- **Meaning:** Define Event Message Form

 It is able to control format and printing status of WizFi250 event messages.  
Uses 10 Parameters and set event message as 0,1,2 for each relevant one  
  
&lt;Format&gt;: Event Message Format (Required)  
0: No display  
1: Full Message  
2: Short Message  
  
AT+MEVTFORM=abcdefghij

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
<td>WizFi250 Version 1.0.3.6 (WIZnet Co.Ltd)\r\n</td>
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
<td>\r\n[Link-Up Event]\r\n</td>
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
<td>Joining : ...<br />
Successfully joined : ...<br />
IP Addr : ...<br />
Gateway : ...</td>
<td></td>
</tr>
</tbody>
</table>
  
Examples)

``` 
  * AT+MEVTFORM=1111111111
  * AT+MEVTFORM=1222200000
  * AT+MEVTFORM=0000000000
```

- **Response:**

    [OK]

 - **Format:**

    AT+MEVTFORM=?

- **Meaning:** Get Current Event Message Form

- **Response:**

```
<Format>
[OK]
```

### Function Commands

Commands related to additional functions are listed below.

-----

#### AT+FPING
  
- **Format:** 

```
AT+FPING=<RepeatCnt>,<TargetIP>
```

- **Meaning:** PING Test

 &lt;RepeatCnt&gt;: Repeat Count (Required)  
Valid Range: 1 \~ 50 (unit:number of times)  
  
&lt;TargetIP&gt;: Target IP Address (Required)  
  
Examples)

``` 
  * AT+FPING=3,192.168.0.10
```

- **Response:**

    Ping Reply :  xxx ms
    ...
    [OK]

#### AT+FDNS
  
- **Format:** 

```
AT+FDNS=<HostName>,<Timeout>
```

- **Meaning:** DNS Query

 &lt;HostName&gt;: The domain name to search
(Required)  
  
&lt;Timeout&gt;: Maximum Delay (milliseconds unit) (Required)  
Valid Range: 1,000 \~ 1,000,000 (unit:ms)(Recommend: 1000)  
  
Examples)

``` 
  * AT+FDNS=www.google.com,1000
```

- **Response:**

    xxx.xxx.xxx.xxx
    [OK]

#### AT+FWEBS
  
- **Format:** 

```
AT+FWEBS=<Action>,<Type>
```

- **Meaning:** Launch Web Server

 Web server can be set through this command. The default setting is to start web server when Wi-Fi link up
event occurs. ( Factory default parameter is "0,M" )  
&lt;Action&gt;: The action to perform (Required)

| Parameter | Meaning          |
| --------- | ---------------- |
| 0         | Web server Stop  |
| 1         | Web server Start |

&lt;Type&gt; : The web server launch type (Required)

| Parameter | Meaning                                                             |
| --------- | ------------------------------------------------------------------- |
| A         | Web server start when Wi-Fi link up event occurs                    |
| M         | Web server start when enter AT+FWEBS command after Wi-Fi is joined. |

\* If &lt;Action&gt; parameter is 1 and Wi-Fi is joined, WizFi250 starts web server immediately without regard for &lt;Type&gt; parameter. If Wi-Fi is not joined, web server is started according to &lt;Type&gt; parameter. If you want to use &lt;Type&gt; parameter after reset, it should be saved using AT+MPROF=S  
  
Examples)

``` 
  * AT+FWEBS=1,A
  * AT+FWEBS=0,M
```

- **Response:**

    [OK]

- **Format:**

    AT+FWEBS=?

- **Meaning:** Get Current WEB Server Status and Type

 &lt;Status&gt;: Current WEB Server status

| Return value | Meaning         |
| ------------ | --------------- |
| 0            | Web server Stop |
| 1            | Web server Run  |

- **Response:**

```
<Status>,<Type>
[OK]
```
 
#### AT+FGPIO
 
- **Format:** 

```
AT+FGPIO=<action:0>,<gpio_number>
AT+FGPIO=<action:1>,<gpio_number>,<gpio_value>
AT+FGPIO=<action:2>,<gpio_number>,<config_value>
```

- **Meaning:** GPIO Control Function  
      
GPIO can be set through this command.  
&lt;action&gt;: The action to perform (Required)

| Return value | Meaning                           |
| ------------ | --------------------------------- |
| 0            | Get GPIO value when &lt;mode&gt; is 0 |
| 1            | Set GPIO value when &lt;mode&gt; is 1 |
| 2            | GPIO Initialize                   |
  
&lt;gpio_number&gt;: Available GPIO number (Required)

| Return value | Meaning |
| ------------ | ------- |
| 1            | GPIO 1  |
| 5            | GPIO 5  |
| 6            | GPIO 6  |
| 7            | GPIO 7  |
| 8            | GPIO 8  |
  
&lt;config\_value&gt;: Current GPIO Configuration Value (It can be used when action is 2)

| Return value | Meaning                                                     |
| ------------ | ----------------------------------------------------------- |
| 0            | INPUT\_PULL\_UP (Input with an internal pull-up resistor)   |
| 1            | INPUT\_PULL\_DOWN (Input with an internal pull-down resistor) |
| 2            | INPUT\_HIGH\_IMPEDANCE (Input - must always be driven, either actively or by an external pullup resistor) |
| 3            | OUTPUT\_PUSH\_PULL (Output actively driven high and actively driven low - must not be connected to other active outputs) |
| 4            | OUTPUT\_OPEN\_DRAIN\_NO\_PULL (Output actively driven low but is high-impedance when set high - can be connected to other open-drain/open-collector outputs. Needs an external pull-up resistor) |
| 5            | OUTPUT\_OPEN\_DRAIN\_PULL\_UP (Output actively driven low and is pulled high with an internal resistor when set high - can be connected to other open-drain/open-collector outputs) |

&lt;gpio\_value&gt;: Current GPIO Value (It can be used when action is 1)

| Return value | Meaning |
| ------------ | ------- |
| 0            | Low     |
| 1            | High    |

Examples)

``` 
  * AT+FGPIO=2,6,3
  * AT+FGPIO=0,1
  * AT+FGPIO=1,5,1
```

- **Response:**

 If &lt;action&gt; is 0

```
<gpio_value>
[OK]
ex)
AT+FGPIO=0,1
0
[OK]
```
  
If &lt;action&gt; is 1 or 2

    [OK]

- **Format:**

    AT+FGPIO=?

- **Meaning:** Get Current GPIO Setting

&lt;mode&gt;: Current GPIO mode

| Return value | Meaning |
| ------------ | ------- |
| 0            | Input   |
| 1            | Output  |

\* &lt;mode&gt; can be set to 0 automatically when &lt;config\_value&gt; is set to 0,1 or 2. If &lt;config\_value&gt; is set to 3,4 or 5, &lt;mode&gt; can be set to 1 automatically.  
  
&lt;gpio\_number&gt;: Available GPIO number  
  
&lt;config\_value&gt;: Current GPIO Configuration Value  
  
&lt;gpio\_value&gt;: Current GPIO Value  
  
Examples)

``` 
  * AT+FGPIO=?
```

- **Response:**

```
{<mode>,<gpio_num>,<config_value>,<set_value>}
[OK]

ex) 
{1,1,3,0},{1,5,3,0},{1,6,3,0},{1,7,3,0},{1,8,3,0}
[OK]
```
  
#### AT+FSOCK
 
- **Format:** 

```
AT+FSOCK=<Option>,<Value>
```

- **Meaning:** SOCKET Extension Option

When there is no socket connected, it try to reconnect the server using this option.  
6,8 options must be set as service mode(AT+SCON=S) for Auto Reconnection.  
Profile(AT+MPROF=S) has to be saved after AT+FSOCK  
  
This function only exist later vision of F/W 1.0.4.1.

This is for extended options of Socket. It will be added continuously.

&lt;Option&gt;: Extended options of Socket (Required)

| Parameter | Meaning                                                                                    |
| --------- | ------------------------------------------------------------------------------------------ |
| 1         | TCP Send error timeout (value : 2000\~20000ms)                                             |
| 6         | Recreates Socket then attempts Auto-Reconnection after &lt;Value&gt; seconds (value: 10\~1000) |
| 8         | Automatically resets WizFi250 module. when there is no socket connected (value: 5\~1000)   |

&lt;Value&gt; : Value of extended option (Required)
  
Examples)

``` 
  * AT+FSOCK=1,5000
  * AT+FSOCK=6,10
  * AT+FSOCK=8,30
```

- **Response:**

    [OK]

- **Format:**

    AT+FSOCK=?

- **Meaning:** Get Current extended options of socket

- **Response:**

```
<Extened option 1><2><3><4><5><6><7><8>
[OK]
    
ex)
5000,0,0,0,0,10,0,30
```

-----

#### AT+FOTA
 
- **Format:** 

```
AT+FOTA
```

- **Meaning:** Launch OTA Mode

User can update firmware in OTA modewhich can be entered by this command. Refer to [Wi-Fi OTA]

- **Response:**

    [OK]

#### AT+FWEBSOPT
 
- **Format:** 

```
AT+FWEBSOPT
```

- **Meaning:** TBD

- **Response:**

    [OK]
  
## Command mode & Data mode

There are two user interface modes between WizFi250 and User-System.  
  
**Command mode** is the default communication mode and all AT Commands can be used only at this mode. Through AT Commands, users can do 'WiFi Configuration', 'Sending/Receiving Data', 'Managing System', and so on. WizFi250 treats all received data from users as AT command. If all received data follows the correct command format, WizFi250 processes it and returns a proper response to user.  
  
**Data mode**, on the other hand, is the mode which passes data of application layers to peer devices directly, without AT commands or any other interventions. It can be considered as a black box which passes all USART input to USART output directly. Its concept is simple but to enter this mode, Users need to set the environment properly through AT Commands.

### Entering Data mode

Users can enter Data mode by writing '1' at '&lt;DataMode&gt;' parameter of AT+SCON command. Make sure that there are no open sockets before performing this, because Data mode works with one socket only. (So if you try to open another socket in data mode it will fail). If the socket of Data mode is closed, the mode will be changed to Command mode automatically so users can input AT Commands. If users set AT+SCON command as service with data mode option and save the profile, Data mode will be started when WiFi is joined, so the user does not need to set environments anymore. If the system boots or reboots at that time, WiFi Join will also be started automatically. Users can exit from data mode temporally by entering '+++' in a row (Wait for a second until \[OK\]
response show up). Any AT Command can be entered during Data mode except AT+SCON command. If you want to return to data mode again, you just need to enter AT+SDATA. If you want to exit Data mode completely, close the socket by using 'AT+SMGMT=0' or 'AT+SMGMT=ALL'.

### Data transmission in Command mode

In Command mode, you can make more than one socket, and you can send/receive data through opened sockets at the same time by using AT Command. You can send data to specific socket opened through AT+SSEND command and receive data with information header which informs you on the socket number, the peer address and the received data length.