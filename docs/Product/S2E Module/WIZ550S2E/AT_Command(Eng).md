---
id: at_command_eng
title: AT Command(Eng)
date: 2020-03-
---


## Content
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
  
**The three byte Trigger Code need to be
isolated = without CR(0x0D), LF(0x0A)** 

Every command starts with “AT”. Any other initial character will cause
an error in return. Commands and parameters are all ASCII characters,
i.e. when you input 'AT+NSTAT', you should input ASCII characters 'A',
'T', '+', 'N', 'S', 'T', 'A', 'T' and 'Enter Key' which is CR, LF (0x0d,
0x0A).  
**All commands should be terminated with
CR(0x0D), LF(0x0A)** 

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

  
### Event Code 

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
>

    AT+NSET====

  
  
  
\* **Format:** 

    AT+NSET=<DHCP>,<IP>,<SN>,<GW>,<DNS>



  - **Meaning:** Network Configuration

\<DHCP\>: Static/DHCP

| Parameter | Meaning              |
| --------- | -------------------- |
| S         | DHCP Off, Static     |
| D         | DHCP On, DHCP Client |

\<IP\>: IP Address (Optional)  
\<SN\>: Subnet Mask (Optional)  
\<GW\>: Gateway Address (Optional)  
\<DNS\>: DNS Address(Optional) 
\* **Response:** 

    [S,,S,192.168.11.100,255.255.255.0,192.168.11.1,8.8.8.8]

    [S,,D]


  - ***Example 2:***
>

     AT+NSET-2,192.168.11.110\r\n


  - ***Meaning:*** *Update Second Parameter*


  - ***Response:***
>
       
       [S]


-----
>

    AT+NSTAT 
  
  
  
\* **Format:** 

    AT+NSTAT

    AT+NSTAT?



  - **Meaning:** Display Current Network Status



  - **Response:**

>

    [S,,<DHCP>,<IP>,<SN>,<GW>,<DNS>]



  - ***Example 1:***
>

    AT+NSTAT\r\n` `AT+NSTAT?\r\n


  - ***Meaning:*** *Display Current Network Status*

<!-- end list -->

  - ***Response:***
>

    [S,,S,192.168.11.100,255.255.255.0,192.168.11.1,8.8.8.8]
    [S,,D]


-----
>

      AT+NMAC 
  
  
  
\* **Format:** 

    AT+NMAC

    AT+NMAC?



  - **Meaning:** Get MAC Address



  - **Response:**

>

    [S,,<MAC>]



  - ***Example 1:***
>

     AT+NMAC=00:08:dc:1d:bb:8b\r\n`


  - ***Meaning:*** *Set MAC Address*

<!-- end list -->

  - ***Response:***
>

    [S]


  - ***Example 2:***
>

    AT+NMAC\r\n` `AT+NMAC?\r\n`

\* ***Meaning:*** *Get MAC Address*

  - ***Response:***
>

    [S,,00:08:dc:1d:bb:8a]


-----
>

    AT+NOPEN
  
  
  
\* **Format:** 

    AT+NOPEN=<SockType>,<SrcPort>,<DstIP>,<DstPort>



  - **Meaning:** Initialize Socket

 \<SockType\>: Socket Type

| Parameter | Meaning           |
| --------- | ----------------- |
| S         | TCP Server Socket |
| C         | TCP Client Socket |
| U         | UDP Socket        |

\<SrcPort\>: Local Port Number  
\<DstIP\>: Destination IP Address  

  - **Response:**

>

    [W,(SockId)]

    [S,(SockId)]



  - ***Example 1:***
>

    AT+NOPEN=C,3000,192.168.11.100,3000

  - ***Meaning:*** *Create TCP Client Socket*

<!-- end list -->

  - ***Response:***
>

    [W,0]
    [S,0]
    [W,0]
    [F,,1]


  - ***Example 2:***
>

    AT+NOPEN=S,5000,,

  - ***Meaning:*** *Create TCP Server Socket*

<!-- end list -->

  - ***Response:***
>

    [S,,0]


-----
>

    AT+NCLOSE 
  
  
  
\* **Format:** 

    AT+NCLOSE=(SockId)



  - **Meaning:** Close Socket

 \<SockId\>: Socket ID 

  - **Response:**

>

    [W,(SockId)]

    [S,(SockId)]



  - ***Example 1:***
>

     AT+NCLOSE\r\n

  - ***Meaning:*** // Close Socket//

<!-- end list -->

  - ***Response:***
>

    [W,0]
    [S,0]
    [F,,11]


-----
>

     AT+NSEND
  
  
\* **Format:** 

    AT+NSEND=<SockId>,<size>,<DstIP>,<DstPort>



  - **Meaning:** Send Data

\<SockId\>: Socket ID

| Parameter | Meaning           |
| --------- | ----------------- |
| S         | TCP Server Socket |
| C         | TCP Client Socket |
| U         | UDP Socket        |

\<SrcPort\>: Local Port Number  
\<DstIP\>: Destination IP Address  
\<DstPort\>: Destination Port Number 

  - **Response:**

>

    [W,(SockId)]

    [S,(SockId)]


\* ***Example 1:*** 
>

      AT+NSEND=0,4\r\n
      aaaa

  - ***Meaning:*** *In TCP Server mode, Destination IP and port are not
    need.*

<!-- end list -->

  - ***Response:***
>

    [W,0]
    [S,0]


-----
>

    AT+NMODE
  
  
\* **Notice:**  This feature has been
added to v1.0.3 and v1.1.5 has been renamed AT + MMODE.


  - **Format:**

>

    AT+NSOCK=S/C/U/M,<SrcPort>,<DstIP><DstPort>,



  - **Meaning:** Change the network information of the module
    (automatically saved in EEPROM)

 S/C/U/M: Network Mode  
S = Server, C = Client, U = UDP, M = Mixed TCP(Server/Client)



  - **Response:**

>

    [S]

-----



  - ***Example 1:*** To change the network information of the module to
    Client, Local Port 5000, Server IP 192.168.0.3, Remote Port 5000
>

     AT+NMODE=C,5000,192.168.0.3,5000

  - ***Meaning:*** *Change & save network information of module to
    client, local port 5000, server IP 192.168.0.3, remote port 5000*

<!-- end list -->

  - ***Response:***
>

     [S]


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
#### AT 
  
  
  
\* **Format:** 

``` 
AT
```



  - **Meaning:** Terminal Check



  - **Response:**

>

    [S]



-----
>

    AT+MSTAT  
  
  
  
\* **Format:** 

    AT+MSTAT

    AT+MSTAT?



  - **Meaning:** Get Current Version



  - **Response:**

>

    [S,,<Version>]



-----
>

    AT+MUSART 
  
  
  
\* **Format:** 

    AT+MUSART=<BR>,<W>,<P>,<S>,<F>



  - **Meaning:** Serial Interface Configuration

 \<BR\>: Baud rate  
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



  - **Response:**

>

    [S,,<BR>,( <W>, <P>, <S> ) <F>]



-----
\* **Example1:** 

    AT+MUSART

    AT+MUSART?



  - **Meaning:** Get Serial Interface Information



  - **Response:**

>

    [S,,<BR>,( <W>, <P>, <S> ) <F>]



  - **Example2:**

>

    AT+MUSART=,,E,,0



  - **Meaning:** Set Serial Interface Information



  - **Response:**

>

    [S]



-----
>

    AT+MRST 
  
  
  
\* **Format:** 

    AT+MRST



  - **Meaning:** Reset the module.



  - **Response:**

>

    [S]



-----
>

     AT+MDATA
  
  
\* **Format:** 

    AT+MDATA



  - **Meaning:** Terminal Check - exit AT Command mode



  - **Response:**

>

    [S]


-----

#### AT+MSAVE
  
  
  
\* **Format:** 

    AT+MSAVE



  - **Meaning:** Save the setting value.

The values set via AT+MUSART, AT+NSET (except AT+NMAC)
are basically only until the module is reset. (In Data Mode, the
corresponding setting value is shared. Check through Search in
Configuration Tool) In other words, when module is reset, it returns to
the value before setting. However, the user can save the set value
through the corresponding command (AT+MSAVE) so that the module does not
change even if it is reset. That is, it is the same as Setting function
in Configuration Tool.

  - **Response:**

>

      [S]



-----

## Function Commands

| Command                                                       | Prop. | Input Parameter | Input Resp.          | Query Response |
| ------------------------------------------------------------- | ----- | --------------- | -------------------- | -------------- |
| [AT+FDNS](/products/wiz550s2e/wiz550s2epg_en/atcomm&#at+fdns) | None  |                 | \[D,,(Size)\]↓(Data) |                |

-----

#### AT+FDNS

  
  
  
\* **Format:** 

    AT+FDNS



  - **Meaning:** Do DNS Query and then return its result. Using Domain
    and DNS Server IP what has set via Configuration Tool.


  - **Response:**

>

    [D,,13]
    DNS Timeout



    [D,,17]
    173.194.126.180
