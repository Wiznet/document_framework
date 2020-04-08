---
id: at_command_set
title: AT Command Set
date: 2020-03-
---


## Content
  
## AT Command Set 
This section provides a list of WizFi250 AT commands and their effects.
Users can input commands and parameters through USART line. Every
command starts with the characters “AT”. Any other initial character
will cause an error in return. Commands and parameters are all ASCII
characters, e.g. When you input 'AT+MMSG=1', you can input ASCII
characters 'A', 'T', '+', 'M', 'M', 'S', 'G', '=', '1' and 'Enter Key'
which should be CR(0x0d), but neither CRLF(0x0d, 0x0a) nor LF(0x0a).  
  
Some parameters are mandatory and the others are optional. (refer to
[Command
Tables](/products/wizfi250/wizfi250pg/at_command_set-command_list))
Parameters must be entered in an order of format column given by the
command tables. Even though an optional parameter is not used, the comma
delimiters must still be included in the command. In most cases, valid
commands return the characters \[OK\]. Invalid inputs return \[ERROR\].
The possible responses sent by WizFi250 to the user side are described
at [Responses](/products/wizfi250/wizfi250pg/at_command_set-responses).
Below is a possible example which users can input. As you can see,
WizFi250 return "\\r\\n" back instead of "\\r", which means user (host
system) always handle '\\r\\n' as a only delimiter.

|**input by user**|AT\r (0x61 0x74 0x0d)|
|-------|---|
|**Output from WizFi250**|AT\r\n[OK]\r\n (0x0d 0x0a 0x5b 0x4f 0x4b 0x5d 0x0d 0x0a)(* “AT\r\n” is Echo back of user input)|

## Responses

Responses are listed below.
|**Response**|**Meaning**|
|-------|------|
|[OK]|Command Request Success|
|[ERROR]	|Command Request Fail|
|[ERROR: INVALID INPUT]	|Wrong command or parameter|
|[ERROR: INVALID SCID]	|Wrong Socket ID|
|[ERROR: WiFi Status]	|Wrong WiFi Status (Some commands work only with Wi-Fi Joined status)|
|[ERROR: Mode Status]|	Wrong Mode Status (Some commands do not work in Data mode)|
|[CONNECT x]	|TCP Connection established & Socket Open|
|[DISCONNECT x]	|TCP Connection closed & Socket Close|
|[Link-Up Event]	|WiFi Connection was established|
|[Link-Down Event]	|WiFi Connection was closed|
|[Reset Event]	|System reset occurred (not by user)|

