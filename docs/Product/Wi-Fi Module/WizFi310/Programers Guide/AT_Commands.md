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

  
