---
id: programmer_guide_eng
title: Programmer Guide(Eng)
date: 2020-03-
---


## Content
# Overview

This page provides detailed information about AT commands set and how to
use the Configuration tool, which retrieves and sets all configurations
of WIZ550S2E via Ethernet. Users can change any value of the WIZ550S2E
and communicate with the peer system through TCP(or UDP) socket by
sending AT commands.
# WIZ550S2E AT Command Set

This section provides a list of WIZ550S2E AT commands and their
functions. Users can input commands and parameters through USART line.

## Enter/Exit Command Mode

The command mode is entered by sending the "Trigger Code" (default 2B 2B
2B in Hex) to the serial port of the WIZ550S2E module.  
This three byte Trigger Code need to be send without any character
before and after the three byte = also without CR or LF for 500ms
time.  
The command mode is closed by sending "AT+MDATA/r/n"  
The Trigger Code can be en/disabled and also changed with the config
tool.  
  
\<WRAP round important 50%\> **The three byte Trigger Code need to be
isolated = without CR(0x0D), LF(0x0A)** \</WRAP\>  
Every command starts with “AT”. Any other initial character will cause
an error in return. Commands and parameters are all ASCII characters,
i.e. when you input 'AT+NSTAT', you should input ASCII characters 'A',
'T', '+', 'N', 'S', 'T', 'A', 'T' and 'Enter Key' which is CR, LF (0x0d,
0x0A).  
\<WRAP round important 50%\> **All commands should be terminated with
CR(0x0D), LF(0x0A)** \</WRAP\>

Some parameters are mandatory and others are optional. Parameters must
be entered in the order of format column given by the command tables.
Although the optional parameter is not used, the comma delimiters ','
must still be included in the command. In most cases, valid commands
return the character \[S\] and invalid inputs return \[F\]. The possible
responses sent from WIZ550S2E to the user are described as Responses.
Below are examples of user input. As you can see, WIZ550S2E return
“\\r\\n” back instead of “\\r”, which means user (host system) always
handle '\\r\\n' as the only delimiter.

| Input by User         | AT\\r\\n (0x61 0x74 0x0d 0x0a)         |
| --------------------- | -------------------------------------- |
| Output from WIZ550S2E | \[S\]\\r\\n (0x5b 0x53 0x5d 0x0d 0x0a) |

-----
## Responses

### Response Format

    [(Type),(Id),(Param1),(Param2),(Param3),(Param4),(Param5),(Param6)]↓(Data)↓

  - (Type): Type of response. It can be one of **S**, **D**, **F**,
    **W**, **R** and **V**.
  - (Id): Socket Identifier. This is the mandatory in Async mode.
  - (Param1) \~ (Param6): ): These are included in case of commands
    retrieving module's setting value.
  - ↓: This means 'Enter' key as delimiter and CR, LF(0x0d, 0x0a) are
    its real value.
  - (Data): When huge data are needed, 'Data' will be followed in case
    of Type of response, D and R.

  
Responses are listed below.

<table>
<thead>
<tr class="header">
<th>Response</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Success Response</td>
<td>[S,(Id),(Param1),(Param2),(Param3),(Param4),(Param5),(Param6)]↓<br />
Command Request Success, outputs with param when it's needed.</td>
</tr>
<tr class="even">
<td>Success Dump Response</td>
<td>[D,(Id),(Size)]↓(Data)↓<br />
Command Request Success, Outputs large data include 'Enter key' value.</td>
</tr>
<tr class="odd">
<td>Fail Response</td>
<td>[F,(Id),(ErrorCode),(ErrorParam)]↓<br />
Command Request Fail, outputs with param when it's needed.</td>
</tr>
<tr class="even">
<td>Wait Response</td>
<td>[W,(Id)]↓<br />
Command is started with ID in Async mode.</td>
</tr>
<tr class="odd">
<td>Data Receive Response</td>
<td>[R,(SockId),(ReceivedSize),(SrcIP),(SrcPort)]↓(Data)↓<br />
Outputs the received data.</td>
</tr>
<tr class="even">
<td>Event Response</td>
<td>[V,(Id),(EventCode)]↓<br />
Event occurred.</td>
</tr>
</tbody>
</table>

  - (Id): 0 - System ID or 0\~n - Socket Number
  - (Size): Byte size of the output data
  - (ErrorCode): Error Code
  - (ErrorParam): Value of description for Error Code
  - (SockId): Socket Identifier of the socket which received data
  - (ReceivedSize): Byte size of received data
  - (SrcIP): Sender's IP address. This is mandatory in case of UDP & TCP
    Client. In case of TCP Server this is omitted.
  - (SrcPort): Sender socket's port number. This is mandatory in case of
    UDP & TCP Client.In case of TCP Server this is omitted.
  - (EventCode): Indication of which event happened. 

  

### Error Code

#### General Error Code

| Code | Error Name            | Description               |
| ---- | --------------------- | ------------------------- |
| 0    | ERR\_Undefined        | Undefined Error           |
| 1    | ERR\_WrongOperator    | Wrong Operator            |
| 2    | ERR\_WrongCommandSign | Wrong Command Sign        |
| 3    | ERR\_WrongArguments   | Wrong Arguments           |
| 4    | ERR\_OurofRange       | Parameter is out of Range |
| 5    | ERR\_FuncDisabled     | This function is disabled |
| 6    | ERR\_NotAllowed       | Not Allowed               |
| 7    | ERR\_CommandBusy      | Command Busy              |
| 8    | ERR\_CommandTimeout   | Command Timeout           |

#### Socket Error Code

| Code | Error Name                | Description          |
| ---- | ------------------------- | -------------------- |
| 10   | ERR\_SockNotAvail         | Socket Not Available |
| 11   | ERR\_SockClosed           | Socket Closed        |
| 12   | ERR\_SockPortNumNotAvail  | Port Not Available   |
| 13   | ERR\_SockNotConnected     | Not Connected        |
| 14   | ERR\_SockWrongAddr        | Wrong Address        |
| 15   | ERR\_SockDataNotAvailable | Data Not Available   |

#### Other Error Code

| Code | Error Name     | Description    |
| ---- | -------------- | -------------- |
| 20   | ERR\_NoFreeMem | No Free Memory |

  
\==== Event Code ====

#### Socket Event Code

| Code | Socket Event Name       | Description                                                                  |
| ---- | ----------------------- | ---------------------------------------------------------------------------- |
| 0    | EVENT\_SockConnected    | Connected. Socket transition from Listen state to established state          |
| 1    | EVENT\_SockDisconnected | Disconnected. Socket transition from established state to disconnected state |
| 2    | EVENT\_SockClosed       | Closed. Socket transition to closed state                                    |
| 3    | EVENT\_SockDataRcvd     | Data Received. The corresponding socket received data from its peer          |

-----

## Network Commands

<table>
<thead>
<tr class="header">
<th>Command</th>
<th>Prop.</th>
<th>Input Parameter</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_en/atcomm&amp;#at+nset">AT+NSET</a></td>
<td>None or ?</td>
<td></td>
<td>[S,,S,(IP),(SN),(GW),(DNS)]</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>:::</td>
<td>[S,,D]</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>=</td>
<td>S,(IP),(SN),(GW),(DNS)</td>
<td>[S]</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>D</td>
<td>[S]</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>-</td>
<td><em>num</em>,Param</td>
<td>[S]</td>
</tr>
<tr class="even">
<td><a href="/products/wiz550s2e/wiz550s2epg_en/atcomm&amp;#at+nstat">AT+NSTAT</a></td>
<td>None or ?</td>
<td></td>
<td>[S,,S/D,(IP),(SN),(GW),(DNS)]</td>
</tr>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_en/atcomm#at+nmac">AT+NMAC</a></td>
<td>None or ?</td>
<td></td>
<td>[S,,(MAC)]</td>
</tr>
<tr class="even">
<td>:::</td>
<td>=</td>
<td>(MAC)</td>
<td>[S]</td>
</tr>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_en/atcomm#at+nopen">AT+NOPEN</a></td>
<td>=</td>
<td>S/C/U,(SrcPort),(DstIP),(DstPort)</td>
<td>[W,(SockId)]<br />
[S,(SockId)]</td>
</tr>
<tr class="even">
<td>:::</td>
<td>:::</td>
<td>A</td>
<td>:::</td>
</tr>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_en/atcomm#at+nclose">AT+NCLOSE</a></td>
<td>=</td>
<td>(SockId)</td>
<td>[W,(SockId)]<br />
[S,(SockId)]</td>
</tr>
<tr class="even">
<td><a href="/products/wiz550s2e/wiz550s2epg_en/atcomm#at+nsend">AT+NSEND</a></td>
<td>=</td>
<td>(SockId),(size),(DstIP),(DstPort)</td>
<td>[W,(SockId)]<br />
[S,(SockId)]</td>
</tr>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_en/atcomm#at+nsock">AT+NSOCK</a></td>
<td>None or ?</td>
<td></td>
<td>[D,,(Size)]↓(Data)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>=</td>
<td>(SockId)</td>
<td>[S,,S/C/U,(SrcPort),(DstIP),(DstPort)]</td>
</tr>
<tr class="odd">
<td><a href="/products/wiz550s2e/wiz550s2epg_en/atcomm&amp;#at+nmode">AT+NMODE</a></td>
<td>=</td>
<td>S/C/U/M,(SrcPort),(DstIP),(DstPort)</td>
<td>[S]</td>
</tr>
</tbody>
</table>

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+NSET====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+NSET=<DHCP>,<IP>,<SN>,<GW>,<DNS>

\</WRAP\>\</WRAP\>

  - **Meaning:** Network Configuration

\<WRAP indent\>\<WRAP indent\> \<DHCP\>: Static/DHCP

| Parameter | Meaning              |
| --------- | -------------------- |
| S         | DHCP Off, Static     |
| D         | DHCP On, DHCP Client |

\<IP\>: IP Address (Optional)  
\<SN\>: Subnet Mask (Optional)  
\<GW\>: Gateway Address (Optional)  
\<DNS\>: DNS Address(Optional) \</WRAP\>\</WRAP\>
\* **Response:** \<WRAP indent\>\<WRAP indent\>

    [S,,S,192.168.11.100,255.255.255.0,192.168.11.1,8.8.8.8]

    [S,,D]

\</WRAP\>\</WRAP\>

  - ***Example 2:***

* \<WRAP indent\>\<WRAP indent\> `AT+NSET-2,192.168.11.110\r\n`
\</WRAP\>\</WRAP\>*

  - ***Meaning:*** *Update Second Parameter*

*\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>*

  - ***Response:***

*\<WRAP indent\>\<WRAP indent\> `[S]
` \</WRAP\>\</WRAP\>*

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+NSTAT====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+NSTAT

    AT+NSTAT?

\</WRAP\>\</WRAP\>

  - **Meaning:** Display Current Network Status

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S,,<DHCP>,<IP>,<SN>,<GW>,<DNS>]

\</WRAP\>\</WRAP\>

  - ***Example 1:***

* \<WRAP indent\>\<WRAP indent\> `AT+NSTAT\r\n` `AT+NSTAT?\r\n`
\</WRAP\>\</WRAP\> *

  - ***Meaning:*** *Display Current Network Status*

<!-- end list -->

  - ***Response:***

* \<WRAP indent\>\<WRAP indent\>
`[S,,S,192.168.11.100,255.255.255.0,192.168.11.1,8.8.8.8]
` `[S,,D]
`\</WRAP\>\</WRAP\>*

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+NMAC====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+NMAC

    AT+NMAC?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get MAC Address

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S,,<MAC>]

\</WRAP\>\</WRAP\>

  - ***Example 1:***

* \<WRAP indent\>\<WRAP indent\> `AT+NMAC=00:08:dc:1d:bb:8b\r\n`
\</WRAP\>\</WRAP\> *

  - ***Meaning:*** *Set MAC Address*

<!-- end list -->

  - ***Response:***

* \<WRAP indent\>\<WRAP indent\> `[S]
`\</WRAP\>\</WRAP\>*

  - ***Example 2:***

* \<WRAP indent\>\<WRAP indent\> `AT+NMAC\r\n` `AT+NMAC?\r\n`
\</WRAP\>\</WRAP\> *
\* ***Meaning:*** *Get MAC Address*

  - ***Response:***

* \<WRAP indent\>\<WRAP indent\> `[S,,00:08:dc:1d:bb:8a]
` \</WRAP\>\</WRAP\>*

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+NOPEN====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+NOPEN=<SockType>,<SrcPort>,<DstIP>,<DstPort>

\</WRAP\>\</WRAP\>

  - **Meaning:** Initialize Socket

\<WRAP indent\>\<WRAP indent\> \<SockType\>: Socket Type

| Parameter | Meaning           |
| --------- | ----------------- |
| S         | TCP Server Socket |
| C         | TCP Client Socket |
| U         | UDP Socket        |

\<SrcPort\>: Local Port Number  
\<DstIP\>: Destination IP Address  
\<DstPort\>: Destination Port Number \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [W,(SockId)]

    [S,(SockId)]

\</WRAP\>\</WRAP\>

  - ***Example 1:***

* \<WRAP indent\>\<WRAP indent\>
`AT+NOPEN=C,3000,192.168.11.100,3000\r\n` \</WRAP\>\</WRAP\> *

  - ***Meaning:*** *Create TCP Client Socket*

<!-- end list -->

  - ***Response:***

* \<WRAP indent\>\<WRAP indent\> `[W,0]
[S,0]
` `[W,0]
[F,,1]
`\</WRAP\>\</WRAP\> *

  - ***Example 2:***

* \<WRAP indent\>\<WRAP indent\> `AT+NOPEN=S,5000,,\r\n`
\</WRAP\>\</WRAP\> *

  - ***Meaning:*** *Create TCP Server Socket*

<!-- end list -->

  - ***Response:***

* \<WRAP indent\>\<WRAP indent\> `[S,,0]
` \</WRAP\>\</WRAP\> *

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+NCLOSE====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+NCLOSE=(SockId)

\</WRAP\>\</WRAP\>

  - **Meaning:** Close Socket

\<WRAP indent\>\<WRAP indent\> \<SockId\>: Socket ID \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [W,(SockId)]

    [S,(SockId)]

\</WRAP\>\</WRAP\>

  - ***Example 1:***

* \<WRAP indent\>\<WRAP indent\> `AT+NCLOSE\r\n` \</WRAP\>\</WRAP\> *

  - ***Meaning:*** // Close Socket//

<!-- end list -->

  - ***Response:***

* \<WRAP indent\>\<WRAP indent\> `[W,0]
[S,0]
` `[F,,11]
`\</WRAP\>\</WRAP\>*

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+NSEND====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+NSEND=<SockId>,<size>,<DstIP>,<DstPort>

\</WRAP\>\</WRAP\>

  - **Meaning:** Send Data

\<WRAP indent\>\<WRAP indent\> \<SockId\>: Socket ID

| Parameter | Meaning           |
| --------- | ----------------- |
| S         | TCP Server Socket |
| C         | TCP Client Socket |
| U         | UDP Socket        |

\<SrcPort\>: Local Port Number  
\<DstIP\>: Destination IP Address  
\<DstPort\>: Destination Port Number \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [W,(SockId)]

    [S,(SockId)]

\</WRAP\>\</WRAP\>
\* ***Example 1:*** * \<WRAP indent\>\<WRAP indent\> `AT+NSEND=0,4\r\n
aaaa` \</WRAP\>\</WRAP\> *

  - ***Meaning:*** *In TCP Server mode, Destination IP and port are not
    need.*

<!-- end list -->

  - ***Response:***

* \<WRAP indent\>\<WRAP indent\> `[W,0]
[S,0]
` \</WRAP\>\</WRAP\>*

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>==== AT+NMODE ====
\</WRAP\>\</WRAP\>  
  
  
\* **Notice:** \<WRAP indent\>\<WRAP indent\> This feature has been
added to v1.0.3 and v1.1.5 has been renamed AT + MMODE.
\</WRAP\>\</WRAP\>

  - **Format:**

\<WRAP indent\>\<WRAP indent\>

    AT+NSOCK=S/C/U/M,<SrcPort>,<DstIP><DstPort>,

\</WRAP\>\</WRAP\>

  - **Meaning:** Change the network information of the module
    (automatically saved in EEPROM)

\<WRAP indent\>\<WRAP indent\> S/C/U/M: Network Mode  
S = Server, C = Client, U = UDP, M = Mixed TCP(Server/Client)

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S]

-----

\</WRAP\>\</WRAP\>

  - ***Example 1:*** To change the network information of the module to
    Client, Local Port 5000, Server IP 192.168.0.3, Remote Port 5000

* \<WRAP indent\>\<WRAP indent\> `AT+NMODE=C,5000,192.168.0.3,5000\r\n`
\</WRAP\>\</WRAP\> *

  - ***Meaning:*** *Change & save network information of module to
    client, local port 5000, server IP 192.168.0.3, remote port 5000*

<!-- end list -->

  - ***Response:***

* \<WRAP indent\>\<WRAP indent\> `[S]
`\</WRAP\>\</WRAP\>*

-----

## Management Commands

| Command                                                           | Prop.     | Input Parameter      | Response                    |
| ----------------------------------------------------------------- | --------- | -------------------- | --------------------------- |
| [AT](/products/wiz550s2e/wiz550s2epg_en/atcomm&#at)               | None      |                      | \[S\]                       |
| :::                                                               | ?         | :::                  | \[D,,(Size)\]↓(Data)        |
| [AT+MSTAT](/products/wiz550s2e/wiz550s2epg_en/atcomm&#at+mstat)   | None or ? |                      | \[S,,(Version)\]            |
| [AT+MUSART](/products/wiz550s2e/wiz550s2epg_en/atcomm&#at+musart) | None or ? |                      | \[S,,(BR),(W),(P),(S),(F)\] |
| :::                                                               | \=        | (BR),(W),(P),(S),(F) | \[S\]                       |
| :::                                                               | \-        | *num*,Param          | \[S\]                       |
| [AT+MSAVE](/products/wiz550s2e/wiz550s2epg_en/atcomm&#at+msave)   | None      |                      | \[S\]                       |
| [AT+MRST](/products/wiz550s2e/wiz550s2epg_en/atcomm&#at+mrst)     | None      |                      | \[S\]                       |
| :::                                                               | \=        | F                    | \[S\]                       |
| [AT+MDATA](/products/wiz550s2e/wiz550s2epg_en/atcomm&#at+mdata)   | None      |                      | \[S\]                       |

-----
\<WRAP left round box 30%\>\<WRAP centeralign\>====AT====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

``` 
AT
```

\</WRAP\>\</WRAP\>

  - **Meaning:** Terminal Check

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S]

\</WRAP\>\</WRAP\>

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MSTAT====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MSTAT

    AT+MSTAT?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get Current Version

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S,,<Version>]

\</WRAP\>\</WRAP\>

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MUSART====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MUSART=<BR>,<W>,<P>,<S>,<F>

\</WRAP\>\</WRAP\>

  - **Meaning:** Serial Interface Configuration

\<WRAP indent\>\<WRAP indent\> \<BR\>: Baud rate  
^ Parameter ^ Meaning ^

|        |           |
| ------ | --------- |
| 300    | 300bps    |
| 600    | 600bps    |
| 1200   | 1200bps   |
| 2400   | 2400bps   |
| 4800   | 4800bps   |
| 9600   | 9600bps   |
| 19200  | 19200bps  |
| 38400  | 38400bps  |
| 57600  | 57600bps  |
| 115200 | 115200bps |
| 230400 | 230400bps |

\<W\>: Word length  
^ Parameter ^ Meaning ^

|   |        |
| - | ------ |
| 7 | 7 bits |
| 8 | 8 bits |

\<P\>: Parity bit  
^ Parameter ^ Meaning ^

|   |      |
| - | ---- |
| N | NONE |
| O | ODD  |
| E | EVEN |

\<S\>: Stop bit  
^ Parameter ^ Meaning ^

|   |        |
| - | ------ |
| 1 | 1 bits |
| 2 | 2 bits |

\<F\>: Flow Control  
^ Parameter ^ Meaning ^

|   |         |
| - | ------- |
| 0 | NONE    |
| 1 | RTS/CTS |
| 2 | RS422   |
| 3 | RS485   |

\</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S,,<BR>,( <W>, <P>, <S> ) <F>]

\</WRAP\>\</WRAP\>

-----
\* **Example1:** \<WRAP indent\>\<WRAP indent\>

    AT+MUSART

    AT+MUSART?

\</WRAP\>\</WRAP\>

  - **Meaning:** Get Serial Interface Information

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S,,<BR>,( <W>, <P>, <S> ) <F>]

\</WRAP\>\</WRAP\>

  - **Example2:**

\<WRAP indent\>\<WRAP indent\>

    AT+MUSART=,,E,,0

\</WRAP\>\</WRAP\>

  - **Meaning:** Set Serial Interface Information

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S]

\</WRAP\>\</WRAP\>

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MRST====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MRST

\</WRAP\>\</WRAP\>

  - **Meaning:** Reset the module.

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S]

\</WRAP\>\</WRAP\>  

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MDATA====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MDATA

\</WRAP\>\</WRAP\>

  - **Meaning:** Terminal Check - exit AT Command mode

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S]

\</WRAP\>\</WRAP\>  

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+MSAVE====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+MSAVE

\</WRAP\>\</WRAP\>

  - **Meaning:** Save the setting value.

\<WRAP indent\>The values set via AT+MUSART, AT+NSET (except AT+NMAC)
are basically only until the module is reset. (In Data Mode, the
corresponding setting value is shared. Check through Search in
Configuration Tool) In other words, when module is reset, it returns to
the value before setting. However, the user can save the set value
through the corresponding command (AT+MSAVE) so that the module does not
change even if it is reset. That is, it is the same as Setting function
in Configuration Tool.\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [S]

\</WRAP\>\</WRAP\>  

-----

## Function Commands

| Command                                                       | Prop. | Input Parameter | Input Resp.          | Query Response |
| ------------------------------------------------------------- | ----- | --------------- | -------------------- | -------------- |
| [AT+FDNS](/products/wiz550s2e/wiz550s2epg_en/atcomm&#at+fdns) | None  |                 | \[D,,(Size)\]↓(Data) |                |

-----

\<WRAP left round box 30%\>\<WRAP centeralign\>====AT+FDNS====
\</WRAP\>\</WRAP\>  
  
  
  
\* **Format:** \<WRAP indent\>\<WRAP indent\>

    AT+FDNS

\</WRAP\>\</WRAP\>

  - **Meaning:** Do DNS Query and then return its result. Using Domain
    and DNS Server IP what has set via Configuration Tool.

\<WRAP indent\>\<WRAP indent\> \</WRAP\>\</WRAP\>

  - **Response:**

\<WRAP indent\>\<WRAP indent\>

    [D,,13]
    DNS Timeout

\</WRAP\>\</WRAP\> \<WRAP indent\>\<WRAP indent\>

    [D,,17]
    173.194.126.180

\</WRAP\>\</WRAP\>
