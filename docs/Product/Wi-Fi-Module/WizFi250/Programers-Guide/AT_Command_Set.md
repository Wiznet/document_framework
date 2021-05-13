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

| [Basic Commands](/)                    |                                                          |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [AT](#AT)                             | Terminal Check                                           |
| [WiFi Commands](/)                      |                                                          |
| [AT+WJOIN](#AT+WJOIN)                  | WiFi Association                                         |
| [AT+WLEAVE](#AT+WLEAVE)                | WiFi Disassociation                                      |
| [AT+WSCAN](#AT+WSCAN)                  | WiFi Scan                                                |
| [AT+WSET](#AT+WSET)                    | WiFi Configuration                                       |
| [AT+WSEC](#AT+WSEC)                    | WiFi Security Configuration                              |
| [AT+WNET](#AT+WNET)                    | Network Configuration                                    |
| [AT+WSTAT](#AT+WSTAT)                  | Get Current WiFi Status                                  |
| [AT+WREG](#AT+WREG)                    | Country Configuration                                    |
| [AT+WWPS](#AT+WWPS)                    | WiFi WPS Connection                                      |
| [AT+WANT](#AT+WANT)                    | WiFi Antenna Configuration                               |
| [AT+WP2P\_START](#AT+WP2P_START)       | Start WiFi Direct                                        |
| [AT+WP2P\_STOP](#AT+WP2P_STOP)         | Stop WiFi Direct                                         |
| [AT+WP2P\_PEERLIST](#AT+WP2P_PEERLIST) | Get WiFi Direct peer list                                |
| [AT+WP2P\_INVITE](#AT+WP2P_INVITE)     | Invite WiFi Direct peer ID                               |
| [AT+WCHECK](#AT+WCHECK)                | Check Wi-Fi status using Ping and Re-association with AP |

| [Network Commands](/)  |                                 |
| ---------------------------------------------------------------------------------- | ------------------------------- |
| [AT+SCON](#AT+SCON)   | Socket Open/Connect             |
| [AT+SMGMT](#AT+SMGMT) | Socket Management               |
| [AT+SSEND](#AT+SSEND) | Data Send                       |
| [AT+SDATA](#AT+SDATA) | Return to Data Mode             |
| [AT+SFORM](#AT+SFORM) | Define Data Receive Header Form |

\<WRAP half column\>

| [Management Commands](/)   |                                                                        |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [AT+MPROF](#AT+MPROF)     | Profile Management                                                     |
| [AT+MFDEF](#AT+MFDEF)     | Perform Factory Reset                                                  |
| [AT+MRESET](#AT+MRESET)   | Perform System Reset                                                   |
| [AT+MMSG](#AT+MMSG)       | Set Message Print Level                                                |
| [AT+MMAC](#AT+MMAC)       | Set MAC Address                                                        |
| [AT+MINFO](#AT+MINFO)     | Get System Information                                                 |
| [AT+MECHO](#AT+MECHO)     | Set Echo Mode                                                          |
| [AT+MHELP](#AT+MHELP)     | Print Command Description and Usage                                    |
| [AT+MMCUPS](#AT+MMCUPS)   | MCU Power Save Enable/Disable                                          |
| [AT+MWIFIPS](#AT+MWIFIPS) | Wi-Fi Power Save Enable/Disable                                        |
| [AT+MCWUI](#AT+MCWUI)     | Change WebServer User Information                                      |
| [AT+USET](#AT+USET)       | UART Configuration                                                     |
| [AT+MSPI](#AT+MSPI)       | SPI Configuration                                                      |
| [AT+MAIRCMD](#AT+MAIRCMD) | Air Command Configuration                                              |
| [AT+MEVTMSG](/products/wizfi250/wizfi250pg/at_command_set#at_mevtmsg)                     | Print \[Listen x\] as soon as it opens up a socket through TCP server. |
| [AT+MEVTFORM](/products/wizfi250/wizfi250pg/at_command_set#at_mevtform)                   | Event Message Form                                                     |

| [Function Commands](/) |                         |
| ----------------------------------------------------------------------------------- | ----------------------- |
| [AT+FPING](#AT+FPING) | PING Test               |
| [AT+FDNS](#AT+FDNS)   | DNS Query               |
| [AT+FWEBS](#AT+FWEBS) | Launch Web Server       |
| [AT+FGPIO](#AT+FGPIO) | GPIO Control            |
| [AT+FSOCK](#AT+FSOCK) | SOCKET Extension Option |
| [AT+FOTA](#AT+FOTA)   | Launch OTA Mode         |

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

