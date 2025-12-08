---
id: wizse_at_command_s1
title: WIZse AT Command
date: 2025-08-20

---

# W5500S2E Configure AT command

AT command will use different color to represent each kind of information.

| Color                                             | Meaning                                         |
| ------------------------------------------------- | ----------------------------------------------- |
| **Bold**                                          | Default value of the AT command                 |
| <span style={{ color: 'blue' }}>**Blue**</span>   | Parameters inputs for the AT command            |
| <span style={{ color: 'green' }}>**Green**</span> | Return value of the AT command                  |
| <span style={{ color: 'red' }}>**Red**</span>     | Special note of the AT command or Error message |

## Overview of AT Command

The AT command supported by W5500S2E serial to Ethernet module series is a standard interface that is not case sensitive and always starts with "AT" and ends with "\r\n". The format of its commands, return values, and parameters is fixed. Generally speaking, AT commands have the following formats:

1、No parameter command

Format: *AT+\r\n*

Explanation: The command is followed by no parameters or symbols.

Example:

Command: *AT+EXIT\r\n*

Response: *OK\r\n*

2、Query command

Format: AT＋"command"?\r\n

Description: Used to query the current configuration value of a parameter.

Example:

Command: *AT+ECHO?\r\n*

Response: *[ECHO] Value is: 1\r\nOK\r\n*

3、Command with parameters

Format: AT＋"command"="parameter"\r\n

Explanation: It is the most commonly used format for setting a certain parameter (except for the DEFAULT command and RESET).

Example:

Command: *AT+ECHO=1\r\n*

Response: *[ECHO] Value is: 1\r\n OK\r\n*

## AT command Return values

According to the different AT commands input by the user, W5500S2E will reply with the execution results of the commands, as shown in the table below.

| **Response type**                                            | **Response**                                                 | **Description**                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------- |
| Error message                                                | Command Invalid\r\nERROR\r\n                                 | Command error                                     |
| <span style={{ color: 'red' }}>**Error Info**</span>         | Command parameter error or mismatch with  current working mode |                                                   |
| Correct information                                          | OK\r\n                                                       | Parameter free command for correct  configuration |
| [Command] Value is: <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n | Correct configuration of query commands  and parameterized commands |                                                   |

## Enter AT command mode

There are two operating modes for W5500S2E serial to Ethernet modules: AT command mode and data transmission mode. In AT command mode, users can use serial tools or configure various parameters of the module through their MCU, and also support data transmission under AT commands.

<span style={{ color: 'red' }}>**Note**: If a TCP connection is established before entering AT command mode, the connection will be closed when entering AT command mode.</span>

<br>

</br>

<br>

</br>

When W55000S2E is in AT command mode, input the terminal detection command "AT\r\n" to its serial port. If the module correctly receives "AT\r\n", it will reply with "OK\r\n".

When W5500S2E is in data transmission mode, any AT command input to the serial port is invalid. At this point, input "+++" to its serial port, and W5500S2E will switch to AT command mode.

Input rule for "+++": Three "+" must be sent continuously to the serial port at once, and there must be no other characters within 1 second before and after the "+++" in order for W5500S2E to respond correctly and switch to AT command mode.

<span style={{ color: 'red' }}>**Note**: The default operating mode of W5500S2E at the factory is AT command mode.</span>



## AT command list

W5500S2E serial to Ethernet modules support serial AT command configuration parameters and also support data transmission in AT command mode. Therefore, AT commands can be roughly divided into two categories: AT configuration commands and AT data transmission commands.

All WIZSE products are using the same AT command Structure. Due to different solutions, it may have more than 1 serial channel for serial setup and communication. 

The following are the information for W5500S2E:

###     W5500S2E / W7500S2E Series

| Number of Channels | Serial Type | Format | Name of Channel | Example     |
| :----------------- | ----------- | ------ | --------------- | ----------- |
| 1                  | RS232       | C[CH]  | C1              | AT+C1_PORT? |

<a name="at"></a>

| Command name                                                 | Function                                      | Attribute | Max length | Parameters                                                   |
| ------------------------------------------------------------ | --------------------------------------------- | --------- | ---------- | ------------------------------------------------------------ |
| [AT](#atterminal-check)                                      | Terminal  detection                           | R         | -          | -                                                            |
| [ECHO](#echoenable-or-disable-echoing)                       | Feedback                                      | RW        | 1          | 0:  Turn off echo display **1: Open echo (default)**         |
| [DEBUGMSGEN](#debugmsgendebug-message)                       | Debug  information                            | RW        | 1          | 0:  Close debugging information **1: Enable debugging information (default)** |
| [NAME](#namemodule-name)                                     | Equipment  name                               | RW        | 15         | Must be a number, letter, or a combination of both       |
| [PASS](#passmodule-password)                                 | module  password                              | RW        | 15         | Must  be a number, letter, or a combination of both. Default: admin |
| [DEFAULT](#defaultreset-to-factory-default)                  | Restore  factory settings                     | W         | 15         | When  the parameter is "module password", factory Reset      |
| [RESET](#resetsave-and-restart-the-module)                   | Save  configuration and restart module        | W         | 15         | When  the parameter is' module password ', restart the module |
| [EXIT](#exitsave-and-exit-command-mode)<a name="at2"></a>    | Save  configuration and exit AT command mode  | W         | -          | -                                                            |
| [SAVE](#savesave-settings)                                   | Save  Configuration                           | W         | -          | -                                                            |
| [START_MODE](#start_modestart-mode)                          | Next  time starting the running mode          | RW        | 1          | **0:  AT command mode (default)** 1: Data transparent transmission mode |
| [C1_OP](#c1_opoperating-mode)                                | Working  mode                                 | RW        | 2          | **0:  TCP Server(default)** 1: TCP Client 2: UDP 16: Modbus RTU-TCP Server 17: Modbus  RTU-TCP Client 18: Modbus RTU-UDP 32: Modbus ASCII-TCP Server 33: Modbus  ASCII-TCP Client 34: Modbus ASCII-UDP |
| [IP_MODE](#ip_modeip-configuration-mode)                     | How  to obtain IP address                     | RW        | 1          | **0:  Static retrieval (default)** 1: DHCP acquisition       |
| [IP](#ipip-address)                                          | module  IP address                            | RW        | 15         | **Default**  :192.168.1.88                                   |
| [MARK](#marksubnet-mask)                                     | module  subnet mask                           | RW        | 15         | **Default**  :255.255.255.0                                  |
| [GATEWAY](#gatewaygateway)                                   | module  gateway                               | RW        | 15         | **Default**  :192.168.1.1                                    |
| [DNS](#dnsdns-server-address)                                | DNS  server address                           | RW        | 15         | **Default**  :114.114.114.114                                |
| [C1_PORT](#c1_portlocal-port-number)                         | Local  port number                            | RW        | 5          | 1  ~ 65535; **Default: 5000**                                |
| [C1_BIND](#c1_bindlocal-port-binding)                        | Bind  local port number                       | RW        | 1          | Valid  for TCP client **0: Do not bind local port number (Default)** 1: Bind local port  number |
| [DNSEN](#dnsendns-enable)                                    | DNS  function                                 | RW        | 1          | **0:  Disable DNS function (Default)** 1: Enable DNS function |
| [C1_CLI_IP1](#c1_cli_ip1remote-host-ip-address)              | Remote  host IP address                       | RW        | 15         | **Default**:  192.168.1.99                                   |
| [C1_CLI_PP1](#c1_cli_pp1remote-host-port-number)             | Remote  host port number                      | RW        | 5          | 1~65535；  **Default: 5000**                                 |
| [DOMAIN](#domainremote-host-name) <a name = "at3"></a>       | Remote  host domain name                      | RW        | 32         | **Default**: www.iwiznet.cn                                  |
| [RECONTIME](#recontimereconnection-interval)                 | Reconnect  time                               | RW        | 5          | Valid  for TCP client The value range is: 0~60000 Unit: ms **Default: 0 (reconnect  immediately)** |
| [NETBIOS](#netbiosnetbios)                                   | NetBIOS  functionality                        | RW        | 1          | **0:  Disable NetBIOS function (default)** 1: Enable NetBIOS functionality |
| [COM1](#com1serial-parameters)                               | Serial  port parameters                       | RW        | 10         | **Default:  9,1,0,1,0**                                      |
| [C1_BAUD](#c1_baudbaud-rate)                                 | Baud  rate                                    | RW        | 2          | 0:  1200； 1: 2400； 2: 4800 3: 9600； 4: 14400； 5: 19200 6: 38400； 7: 56000； 8:  57600 **9: 115200 (default)**; 10: 128000 11: 234000； 12: 256000； 13: 468000 14:  921600； 15: 1152000 |
| [C1_DATAB](#c1_databdata-bit)                                | Data  bits                                    | RW        | 1          | 0:7  digits **1: 8-bit (default)**                           |
| [C1_STOPB](#c1_stopbstop-bit)                                | stop  bit                                     | RW        | 1          | 0:  0.5 1: **1 (default)** 2: 1.5 3: 2                       |
| [C1_PARITY](#c1_parityparity-bit)                            | check  bit                                    | RW        | 1          | **0:  No verification (default)** 1: Odd verification 2: Even verification |
| [C1_SER_C](#c1_ser_cserial-port-flow-control)                | Serial  port flow control                     | RW        | 1          | **0:  No flow control (default)**                            |
| [C1_BUF_CLS](#c1_buf_clsclear-buffer-if-connected)           | Clear  serial port buffer                     | RW        | 1          | Effective  during TCP **0: Do not clear serial port buffer after connection (default)** 1:  Clear the serial port buffer after connection |
| [C1_SER_LEN](#c1_ser_lenserial-packaging-length)             | packet  length                                | RW        | 4          | The  value range is: 0~2048 bytes **Default: 0 (no packet)** |
| [C1_SER_T](#c1_ser_tserial-data-packing-nagle-wait-time)     | Serial  port frame interval                   | RW        | 5          | The  value range is: 0~60000 Unit: ms **Default: 0 (no packet)** |
| [C1_IT](#c1_itinactivity-timeout)                            | Timeout  disconnect time                      | RW        | 5          | Effective  during TCP The value range is: 0~60000 Unit: ms **Default: 0 (disable this  feature)** |
| [C1_TCPAT](#c1_tcpattcp-keepalive-interval)                  | Heartbeat  detection time                     | RW        | 3          | Effective  during TCP The value range is: 0~255 Unit: 5s **Default: 0 (disable this  feature)** |
| [C1_LINK_P](#c1_link_ptcp-password-authentication) <a name = "at4"></a> | Connection  password verification             | RW        | 1          | Valid  on TCP Server **0: Do not verify password after TCP connection is established  (default)** 1: Verify password after establishing TCP connection |
| [C1_LINK_T](#c1_link_tconnection-condition)                  | Connection  establishment conditions          | RW        | 1          | Valid  for TCP client **0: Establish connection immediately after power on (default)**  1: Establish a connection after receiving data through the serial port |
| [C1_LINK_M](#c1_link_msend-hello-message)                    | Send  a message after connecting              | RW        | 1          | Valid  in TCP mode **0: No message sent after connection establishment (default)** 1:  After establishing the connection, send the module name 2: Send module  MAC address after connection establishment 3: Send module IP address after  connection establishment |
| [C1_SEND_NUM](#c1_send_numnumber-of-bytes-sent-via-serial-port) | The  number of bytes sent by the serial port  | R         | -          | Display  range is 0 ~ 4294967295                             |
| [C1_RCV_NUM](#c1_rcv_numnumber-of-bytes-received-via-serial-port) | Serial  port received byte count              | R         | -          | Display  range is 0 ~ 4294967295                             |
| [C1_NETSEND](#c1_netsendnumber-of-bytes-sent-via-network-port) | Number  of bytes sent by the network port     | R         | -          | Display  range is 0 ~ 4294967295                             |
| [C1_NETRCV](#c1_netrcvnumber-of-bytes-received-by-the-network-port) | Number  of bytes received by the network port | R         | -          | Display  range is 0 ~ 4294967295                             |
| [PRE](#prelist-preset-values)                                | List  of default and current values           | R         | -          | -                                                            |
| [LIST](#listlist-all-commands)                               | All  command lists                            | R         | -          | -                                                            |
| [RUNTIME](#runtimemodule-run-time)                           | Equipment  operation time                     | R         | -          | -                                                            |
| [VER](#verfirmware-version)                                  | module  firmware version number               | R         | -          | -                                                            |
| [MAC](#macconverter-mac-address)                             | module  MAC address                           | R         | -          | -                                                            |
| [SN](#snequipment-serial-number)<a name = "at5"></a>         | Equipment  serial number                      | R         | -          | -                                                            |
| [TYPE](#typeequipment-type)                                  | module  Type                                  | R         | -          | -                                                            |
| [WEB_PORT](#web_portweb-port-number)                         | Web  port number                              | RW        | 5          | 1  ~ 65535;**Default: 80**                                   |
| [LINK](#link-phy-connection-status)                          | PHY connection status                         | R         | -          | 0: PHY not connected  1: PHY connected                       |
| [LISTEN](#listenestablish-tcp-listening)                     | Establish TCP listening                       | W         | -          | -                                                            |
| [CONNECT](#connectapply-for-tcp-connection)                  | Apply for TCP connection                      | W         | -          | -                                                            |
| [TCP_STATUS](#tcp_statustcp-connection-status)               | TCP connection status                         | R         | -          | 0: TCP not connected  1: TCP Connected                       |
| [UDP](#udpestablish-udp-communication)                       | Establish UDP communication                   | W         | -          | -                                                            |
| [SEND](#sendnumber-of-bytes-of-data-to-be-sent)              | The number of bytes of data to be sent        | W         | 4          | Range: 0~2048  Default value: 0 (any length)                 |
| [RLEN](#rlennumber-of-bytes-of-data-to-be-received)          | Number of bytes of data to be received        | R         | -          | -                                                            |
| [RCV](#rcvreceiving-data)                                    | Receive Data                                  | W         | 4          | Range: 0~2048  Default value: 0 (any length)                 |
| [CLEAR](#clearclear-the-network-port-receiving-cache)        | Clear the network port receiving cache        | W         | -          | -                                                            |
| [DISCON](#disconturn-off-tcpudp)                             | Turn off TCP/UDP                              | W         | -          | -                                                            |

---

## AT Control commands

### AT(Terminal check)

| **Command format** | **Parameters**   | **Function Description** |
| ------------------ | ---------------- | ------------------------ |
| AT                 | Nil              | Check the terminal       |
| Response           | OK\r\n           |                          |
| Example            | Command: AT\r\n  |                          |
|                    | Response: OK\r\n |                          |

**Description:** In AT command mode, it only provides response check to ensure it is in AT command mode.

<a href="#at">
  <button>Back</button>
</a>

---

### ECHO(Enable or disable echoing)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+ECHO?                                                     | Nil                                                          | Query current value       |
| AT+ECHO= <span style={{ color: 'blue' }}>**Parameters**</span> | 0: Disable the echo function                                 | Set new value             |
|                                                              | **1: Enable echo function (Default)**                        |                           |
| Response                                                     | [ECHO] Value is: AT+ECHO= <span style={{ color: 'green' }}>**Value**</span>\r\n OK \r\n |                           |
| Example                                                      | Command: AT+ECHO?\r\n                                        |                           |
|                                                              | Response: [ECHO] Value is: 1\r\n OK\r\n                      |                           |

**Description:** The echo function refers to returning the data input from the serial channel as it is, and only exists in AT command mode. Enabling the echo function can help users configure modules more conveniently when using serial software. However, when configuring modules using embedded modules such as microcontrollers, enabling the echo function can cause trouble. It is recommended to disable it at this time.

<a href="#at">
  <button>Back</button>
</a>

---

### DEBUGMSGEN(Debug message)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+ DEBUGMSGEN?                                              | Nil                                                          | Query current value       |
| AT+DEBUGMSGEN=<span style={{ color: 'blue' }}>**Parameters**</span> | 0: Close debugging information                               | Set new value             |
|                                                              | **1: Enable debugging information  (Default)**               |                           |
| Response                                                     | [DEBUGMSGEN] Value is: <span style={{ color: 'green' }}>**Value**</span>\r\n OK \r\n |                           |
| Example                                                      | Command: AT+DEBUGMSGEN=1\r\n                                 |                           |
|                                                              | Response: [DEBUGMSGEN] Value is: 1\r\n OK\r\n                |                           |

**Description:** This command is used to configure whether the module should enable debugging information. Debugging information includes basic module information and module status change information, which will be output through the serial channel at startup for easy user viewing. If the user does not need this information, the debugging information output can be turned off through this command.

<a href="#at">
  <button>Back</button>
</a>

---

### NAME(Module name)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+NAME?                                                     | Nil                                                          | Query current value       |
| AT+NAME =<span style={{ color: 'blue' }}>**Parameters**</span> | The total length is 15 characters, with  the first character being a letter and the remaining 14 characters being any  combination of letters, numbers, symbols' - 'or' _ '. | Set new value             |
|                                                              | **Default: Module P/N**                                      |                           |
| Response                                                     | NAME] Value is: <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+NAME=User1\r\n                                   |                           |
|                                                              | Response: [NAME] Value is:  User1\r\nOK\r\n                  |                           |

**Description**: Users can customize module names through this command.

<span style={{ color: 'red' }}>**Note**: This command can be used in conjunction with the NetBIOS function. If the NetBIOS function is enabled, users can access the module through the module name in the browser. Please refer to the "AT+NETBIOS" command.</span>

<br></br>

<a href="#at">
  <button>Back</button>
</a>

---

### PASS(Module password)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+PASS?                                                     | Nil                                                          | Query current value       |
| AT+PASS=<span style={{ color: 'blue' }}>**Parameters**</span> | The module password must be a  combination of numbers, letters, or both, and cannot be empty. It is case  sensitive and can be up to 15 bytes long | Set new value             |
|                                                              | **Default: admin**                                           |                           |
| Response                                                     | [PASS] Value is:<span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+PASS=Admin1\r\n                                  |                           |
|                                                              | Response: [PASS] Value is: Admin1\r\nOK\r\n                  |                           |

**Description**: The module password is used for restoring factory settings, verifying connection passwords, verifying web login passwords, and saving configurations and restarting the module.

<span style={{ color: 'red' }}>**Note**:</span>

<br></br>

<span style={{ color: 'red' }}>**Factory reset function:**</span>

<br></br>

<span style={{ color: 'red' }}>If you need to use the AT command to restore factory settings, you must enter the correct module password. Please refer to the "DEFAULT" command for detailed functions. </span>

<br></br><br></br>

<span style={{ color: 'red' }}>**Connection password verification function:**</span>

<br></br>

<span style={{ color: 'red' }}>In order to improve communication security, W5500S2E modules provide a "connection password verification" function. When the module communicates with the client as a TCP Server, if the "connection password verification" function is turned on, the client needs to enter the module password through the network port after establishing a connection with the module. If the password is correct, communication can begin; If the password is incorrect, you will be prompted to re-enter the correct password. For detailed functions, please refer to the "C 1 _LINK-P" command.</span>

<br></br><br></br>

<span style={{ color: 'red' }}>**Web login password verification function:**</span>

<br></br>

<span style={{ color: 'red' }}>If you need to log in to the module configuration webpage, you must enter the correct module password on the login verification page.</span>

<br></br><br></br>

<span style={{ color: 'red' }}>**Save configuration and restart module functionality:**</span>

<br></br>

<span style={{ color: 'red' }}>To save the current configuration and restart the module, the correct module password must be entered to reset. After using this command, all sockets will be automatically closed. Please refer to the "RESET" command for detailed functions.</span>

<br></br>

<a href="#at">
  <button>Back</button>
</a>

---

### DEFAULT(Reset to factory default)

| **Command format**                                           | **Parameters**                | **Function  Description** |
| ------------------------------------------------------------ | ----------------------------- | ------------------------- |
| AT+DEFAULT=<span style={{ color: 'blue' }}>**Parameters**</span> | Module password               | Set new value             |
|                                                              | default: admin                |                           |
| Response                                                     | OK\r\n                        |                           |
| Example                                                      | Command: AT+DEFAULT=admin\r\n |                           |
|                                                              | Response: OK\r\n              |                           |

**Description**: The module password must be completely correct in order to restore factory settings. The module password can be queried and set through the "PASS" command.

<a href="#at">
  <button>Back</button>
</a>

---

### RESET(Save and restart the module)

| **Command format**                                           | **Parameters**              | **Function  Description** |
| ------------------------------------------------------------ | --------------------------- | ------------------------- |
| AT+RESET=<span style={{ color: 'blue' }}>**Parameters**</span> | Module password             | Set new value             |
|                                                              | **Default: admin**          |                           |
| Response                                                     | OK\r\n                      |                           |
| Example                                                      | Command: AT+RESET=admin\r\n |                           |
|                                                              | Response: OK\r\n            |                           |

**Description:**

1    Save the current configuration information;

2    Restart the module to make the configuration information take effect;

3    When users need to directly enter data transmission mode during the next power on, they can configure the parameter value of the "AT+START-MODE=1\r\n" command to be 1, and then configure the "RESET" command;

4    The module password can be queried and set through the "PASS" command.

<a href="#at">
  <button>Back</button>
</a>

---

### EXIT(Save and exit command mode)

| **Command format** | **Parameters**       | **Function  Description** |
| ------------------ | -------------------- | ------------------------- |
| AT+EXIT            | Nil                  | Execute immediately       |
| Response           | OK\r\n               |                           |
| Example            | Command: AT+EXIT\r\n |                           |
|                    | Response: OK\r\n     |                           |

**Description**:

1    Save the current configuration information

2    Make the configuration information effective

3    Exit AT command mode and enter data transmission mode

<a href="#at">
  <button>Back</button>
</a>

---

### SAVE(Save settings)

| **Command format** | **Parameters**       | **Function  Description** |
| ------------------ | -------------------- | ------------------------- |
| AT+SAVE            | Nil                  | Execute immediately       |
| Response           | OK\r\n               |                           |
| Example            | Command: AT+SAVE\r\n |                           |
|                    | Response: OK\r\n     |                           |

**Description**:

1    Save the current configuration information

2    Make the configuration information effective

<a href="#at">
  <button>Back</button>
</a>

---

## Module information configuration command

### START_MODE(Start mode)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+START_MODE?                                               | Nil                                                          | Query current value       |
| AT+START_MODE=<span style={{ color: 'blue' }}>**Parameters**</span> | **0: AT command mode (default)**                             | Set new value             |
|                                                              | 1: Data transparent transmission mode                        |                           |
| Response                                                     | [START_MODE] Value is:  <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+START_MODE=1\r\n                                 |                           |
|                                                              | Response: [START_MODE] Value is:  1\r\nOK\r\n                |                           |

**Description**: This command configures the running mode for the next startup. When users need to directly enter data transmission mode during the next power on, they can configure the parameter value of the "START_MODE" command to be 1, and then configure the "RESET" command.

<a href="#at2">
  <button>Back</button>
</a>

---

### C1_OP(Operating mode)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_OP?                                                    | Nil                                                          | Query current value       |
| AT+C1_OP=<span style={{ color: 'blue' }}>**Parameters**</span> | **0: TCP Server(default)**  1: TCP Client  2: UDP            | Set new value             |
|                                                              | 16: Modbus RTU-TCP Server  17: Modbus RTU-TCP Client  18: Modbus RTU-UDP |                           |
|                                                              | 32: Modbus ASCII-TCP Server  33: Modbus ASCII-TCP Client  34: Modbus ASCII-UDP |                           |
| Response                                                     | [C1_OP] Value is:<span style={{ color: 'green' }}>**Value**</span> \r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_OP=1\r\n                                      |                           |
|                                                              | Response: [C1_OP] Value is: 1\r\nOK\r\n                      |                           |

**Description**: When transmitting data in AT command mode, if you need to use this command to modify the operation mode, you need to first call the "DISCON" command to turn off TCP/UDP.

<a href="#at2">
  <button>Back</button>
</a>

---

### IP_MODE(IP configuration mode)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+IP_MODE?                                                  | Nil                                                          | Query current value       |
| AT+IP_MODE=<span style={{ color: 'blue' }}>**Parameters**</span> | **0: Static retrieval (default)**                            | Set new value             |
|                                                              | 1: DHCP acquisition                                          |                           |
| Response                                                     | [IP_MODE] Value is:  <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+IP_MODE=1\r\n                                    |                           |
|                                                              | Response: [IP_MODE] Value is: 1\r\nOK\r\n                    |                           |

**Description**: When selecting the static retrieval method, users need to set their own IP address, gateway, subnet mask, DNS server address, etc., or they can choose the default settings; When selecting DHCP mode, W5500S2E will dynamically obtain IP information through DHCP servers in the local area network.

<a href="#at2">
  <button>Back</button>
</a>

---

### IP(IP address)

| **Command format**                                          | **Parameters**                                               | **Function  Description** |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------- |
| AT+IP?                                                      | Nil                                                          | Query current value       |
| AT+IP=<span style={{ color: 'blue' }}>**Parameters**</span> | **Default**: 192.168.1.88                                    | Set new value             |
| **Response**                                                | [IP] Value is: <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| **Example**                                                 | Command: AT+IP=192.168.1.88\r\n                              |                           |
|                                                             | Response: [IP] Value is: 1\r\nOK\r\n                         |                           |

**Description**: The IP address is represented in IPv4 standard format, such as 192.168.1.88; Its maximum length is 15 bytes, and the range of values for each decimal number is from 0 to 255. This setting only takes effect when the IP configuration mode (IP_MODE) is set to 'Static IP Mode'.

<a href="#at2">
  <button>Back</button>
</a>

---

### MARK(Subnet mask)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+MARK?                                                     | Nil                                                          | Query current value       |
| AT+MARK=<span style={{ color: 'blue' }}>**Parameters**</span> | **Default**: 255.255.255.0                                   | Set new value             |
| Response                                                     | [MASK] Value is: <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+MARK=255.255.255.0\r\n                           |                           |
|                                                              | Response: [MARK] Value is:  255.255.255.0\r\nOK\r\n          |                           |

**Description**: The subnet mask is represented in IPv4 standard format, such as 255.255.255.0, with a maximum length of 15 bytes. This setting only takes effect when the IP configuration mode (IP_MODE) is set to 'Static IP Mode'.

<a href="#at2">
  <button>Back</button>
</a>

---

### GATEWAY(Gateway)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+GATEWAY?                                                  | Nil                                                          | Query current value       |
| AT+ GATEWAY =<span style={{ color: 'blue' }}>**Parameters**</span> | **Default**: 192.168.1.1                                     | Set new value             |
| Response                                                     | [GATEWAY] Value is:  <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+GATEWAY=192.168.1.1\r\n                          |                           |
|                                                              | Response: [GATEWAY] Value is:  192.168.1.1\r\nOK\r\n         |                           |

**Description**: The gateway IP address is represented in IPv4 standard format, such as 192.168.1.1, with a maximum length of 15 bytes. This setting only takes effect when the IP configuration mode (IP_MODE) is in 'Static IP Mode'.

<a href="#at2">
  <button>Back</button>
</a>

---

### DNS(DNS server address)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+DNS?                                                      | Nil                                                          | Query current value       |
| AT+DNS=<span style={{ color: 'blue' }}>**Parameters**</span> | **Default**: 114.114.114.114                                 | Set new value             |
| Response                                                     | [DNS] Value is: <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+DNS=114.114.114.114\r\n                          |                           |
|                                                              | Response: [DNS] Value is:  114.114.114.114\r\nOK\r\n         |                           |

**Description**: The DNS server address is represented in IPv4 standard format, such as 114.114.114.114, with a maximum length of 15 bytes. This configuration does not accept address inputs ending in ". 0" or ". 255", for example: xxx.xxx.xxx.0 or xxx.xxx.xxx.255.

<a href="#at2">
  <button>Back</button>
</a>

---

### C1_PORT(Local port number)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_PORT?                                                  | Nil                                                          | Query current value       |
| AT+C1_PORT=<span style={{ color: 'blue' }}>**Parameters**</span> | Range: 1~65535, **Default: 5000**                            | Set new value             |
| Response                                                     | [C1_PORT]Value is:  <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_PORT=5000\r\n                                 |                           |
|                                                              | Response: [C1_PORT] Value is:  5000\r\nOK\r\n                |                           |

**Description**: This command is used to configure the local port number. The module operates in TCP Server and UDP mode with the corresponding number of channels, and communicates with the user module through this port.

<span style={{ color: 'red' }}>**Note**: Some protocols in the Ethernet protocol have default port numbers, which should be avoided. The default occupied port numbers are shown in the</span> [appendix](#appendix).

<a href="#at2">
  <button>Back</button>
</a>

---

### C1_BIND(Local port binding)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_BIND？                                                 | Nil                                                          | Query current value       |
| AT+C1_BIND=<span style={{ color: 'blue' }}>**Parameters**</span> | **0: Do not bind local port number  (default)**              | Set new value             |
|                                                              | 1: Bind local port number                                    |                           |
| Response                                                     | [C1_BIND] Value is: <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_BIND=1\r\n                                    |                           |
|                                                              | Response: [C1_BIND] Value is: 1\r\nOK\r\n                    |                           |

**Description**: When the module operates in TCP Client mode on the corresponding serial channel, after binding the port number, W5500S2E will always use the local port number configured by the "C1_PORT" command.

<a href="#at2">
  <button>Back</button>
</a>

---

### DNSEN(DNS enable)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+DNSEN?                                                    | Nil                                                          | Query current value       |
| AT+DNSEN=<span style={{ color: 'blue' }}>**Parameters**</span> | **0: Disable DNS function (default)**                        | Set new value             |
|                                                              | 1: Enable DNS function                                       |                           |
| Response                                                     | [DNSEN] Value is:  <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+DNSEN=1\r\n                                      |                           |
|                                                              | Response: [DNSEN] Value is:  1\r\nOK\r\n                     |                           |

**Description**: This setting takes effect only when the module operates in TCP Client or UDP mode on the serial channel.  After enabling DNS functionality, W5500S2E can access remote hosts by domain name and 
 perform a DNS query at each power-up. 

<span style={{ color: 'red' }}>Note: </span>

<span style={{ color: 'red' }}> 1. If enabled and "C1_DOMAIN" is set, the "C1_CLI_IP1" command becomes invalid. The module communicates with the host defined by "C1_DOMAIN"</span>

<span style={{ color: 'red' }}> 2. If disabled and "C1_CLI_IP1" is set, the "C1_DOMAIN" command becomes invalid. The module communicates with the IP defined by "C1_CLI_IP1" </span>

<span style={{ color: 'red' }}> 3. To use DNS functionality, the module IP information must be configured correctly. It is recommended to configure the module in DHCP mode.</span>

<br>

</br>

<a href="#at2">
  <button>Back</button>
</a>

---

### C1_CLI_IP1(Remote host IP address)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_CLI_IP1?                                               | Nil                                                          | Query current value       |
| AT+C1_CLI_IP1=<span style={{ color: 'blue' }}>**Parameters**</span> | **Default: 192.168.1.99**                                    | Set new value             |
| **Response**                                                 | [C1_CLI_IP1] Value is: <span style={{ color: 'green' }}>**Value**</span>r\nOK\r\n |                           |
| **Example**                                                  | Command: AT+C1_CLI_IP1=192.168.1.99\r\n                      |                           |
|                                                              | Response: [C1_CLI_IP1] Value is:  192.168.1.99\r\nOK\r\n     |                           |

 **Description:** This command is effective only in TCP Client or UDP mode and configures the remote IP address for the corresponding serial channel of W5500S2E. The IP address must comply with IPv4 format, such as 192.168.1.99, as defined in the "IP" command.

<span style={{ color: 'red' }}>**Note**: If the "DNSEN" command parameter is 0, the parameters configured by the command are valid. </span>

<br>

</br>

<a href="#at2">
  <button>Back</button>
</a>

---

### C1_CLI_PP1(Remote host port number)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_CLI_PP1?                                               | Nil                                                          | Query current value       |
| AT+C1_CLI_PP1=<span style={{ color: 'blue' }}>**Parameters**</span> | Range: 1~65535, **default: 5000**                            | Set new value             |
| Response                                                     | [C1_CLI_PP1] Value is: <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_CLI_PP1=5000\r\n                              |                           |
|                                                              | Response: [C1_CLI_PP1] Value is:  5000\r\nOK\r\n             |                           |

**Description**: The module operates in TCP Client and UDP modes with the corresponding number of channels.

<span style={{ color: 'red' }}>**Note**: Some protocols in the Ethernet protocol have default port numbers, which should be avoided. The default occupied port numbers are shown in the</span> [appendix](#appendix).

<a href="#at2">
  <button>Back</button>
</a>

---

### DOMAIN((Remote host name)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+DOMAIN?                                                   | Nil                                                          | Query current value       |
| AT+DOMAIN=<span style={{ color: 'blue' }}>**Parameters**</span> | **Default:** www.iwznet.cn <br></br>The maximum length is 32 characters | Set new value             |
| Response                                                     | [DOMAIN] Value is: <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+DOMAIN=www.iwiznet.cn\r\n                        |                           |
|                                                              | Response: [DOMAIN] Value is:  www.iwiznet.cn\r\nOK\r\n       |                           |

**Description**: This command configures the remote host's domain name. The setting takes effect when the corresponding module channels operate in TCP Client or UDP mode.

<span style={{ color: 'red' }}>**Note**: The command takes effect only when the "DNSEN" command's parameter value is set to 1.</span>

<br>

</br>

<a href="#at2">
  <button>Back</button>
</a>

---

### RECONTIME(Reconnection interval)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+RECONTIME?                                                | Nil                                                          | Query current value       |
| AT+RECONTIME=<span style={{ color: 'blue' }}>**Parameters**</span> | **Default: 0 (immediate reconnection),**  value range is 0 to 60000, unit: ms | Set new value             |
| Response                                                     | [C1_RECONTIME] Value is: <span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+RECONTIME=1000\r\n                               |                           |
|                                                              | Response: [RECONTIME] Value is:  1000\r\nOK\r\n              |                           |

**Description**: The number of channels corresponding to the module is valid when running in TCP Client and transparent mode. This command sets the time interval for the next connection request between W5500S2E and the remote host after the TCP connection is disconnected.

<a href="#at2">
  <button>Back</button>
</a>

---

### NETBIOS(NetBIOS)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+NETBIOS?                                                  | Nil                                                          | Query current value       |
| AT+NETBIOS=<span style={{ color: 'blue' }}>**Parameters**</span> | **0: Disable NetBIOS function (default)**                    | Set new value             |
|                                                              | 1: Enable NetBIOS functionality                              |                           |
| Response                                                     | [NETBIOS] Value is:<span style={{ color: 'green' }}>**Value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+NETBIOS=1\r\n                                    |                           |
|                                                              | Response: [NETBIOS] Value is: 1\r\nOK\r\n                    |                           |

**Description**: The NetBIOS protocol can provide module naming services within a local area network. After enabling the NetBIOS function, users can directly access W5500S2E's built-in web page by entering "http:// module name" in the browser address bar. The module name is configured using the "NAME" command.

<a href="#at2">
  <button>Back</button>
</a>



## Serial port information configuration command

### COM1(Serial parameters)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+COM1?                                                     | Nil                                                          | Query current value       |
| AT+COM1=<span style={{ color: 'blue' }}>**par1**</span>,<span style={{ color: 'blue' }}>**par2**</span>, <span style={{ color: 'blue' }}>**par3**</span>,<span style={{ color: 'blue' }}>**par4**</span>,<span style={{ color: 'blue' }}>**par5**</span> | <span style={{ color: 'blue' }}>**par1**</span>: Baud rate parameter,  refer to the "C1_BAUD" command | Set new value             |
|                                                              | <span style={{ color: 'blue' }}>**par2**</span>: Data bit parameters,  refer to the "C1_DATAB" command |                           |
|                                                              | <span style={{ color: 'blue' }}>**par3**</span>: Parity bit parameter,  refer to the "C1_PARITY" command |                           |
|                                                              | <span style={{ color: 'blue' }}>**par4**</span>: Stop bit parameter, refer  to the "C1_STOPB" command |                           |
|                                                              | <span style={{ color: 'blue' }}>**par5**</span>: Serial port flow control  parameters, refer to the "C1_ESER_C" command |                           |
| Response                                                     | [COM1] Value is:  <span style={{ color: 'green' }}>**value1**</span>,<span style={{ color: 'green' }}>**value2**</span>,<span style={{ color: 'green' }}>**value3**</span>,<span style={{ color: 'green' }}>**value4**</span>,<span style={{ color: 'green' }}>**value5**</span>\r\nOK\r\n |                           |
|                                                              | Explain:  <span style={{ color: 'green' }}>**Value1**</span>: Baud rate parameter value |                           |
|                                                              | <span style={{ color: 'green' }}>**Value2**</span>: Data bit parameter value |                           |
|                                                              | <span style={{ color: 'green' }}>**Value3**</span>: Parity bit parameter value |                           |
|                                                              | <span style={{ color: 'green' }}>**Value4**</span>: Stop bit parameter value |                           |
|                                                              | <span style={{ color: 'green' }}>**Value5**</span>: Serial port flow control  parameter values |                           |
| Example                                                      | Command: AT+COM1=9,1,0,1,0\r\n                               |                           |
|                                                              | Response: [COM1] Value is:  9,1,0,1,0\r\nOK\r\n              |                           |

**Description**: This command configures or queries 5 commonly used parameters of serial channel one at once, or configures or queries them separately with the corresponding command. 

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_BAUD(Baud Rate)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_BAUD?                                                  | Nil                                                          | Query current value       |
| AT+C1_BAUD=<span style={{ color: 'blue' }}>**parameter**</span> | 0:1200； 1:2400； 2:4800   3:9600； 4:14400； 5:19200   6:38400； 7: 56000； 8:57600   **9:115200 (default)**; 10:128000   11:234000； 12:256000； 13: 468000    14:921600； 15:1152000 | Set new value             |
| Response                                                     | [C1_BAUD] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_BAUD=9\r\n                                    |                           |
|                                                              | Response: [C1_BAUD] Value is: 9\r\nOK\r\n                    |                           |

**Description**: This command is used to configure or query the baud rate of serial channel 1.

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_DATAB(Data bit)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_DATAB?                                                 | Nil                                                          | Query current value       |
| AT+C1_DATAB=<span style={{ color: 'blue' }}>**parameter**</span> | 0:7bit  **1:8bit (default)**                                 | Set new value             |
| Response                                                     | [C1_DATAB] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_DATAB=1\r\n                                   |                           |
|                                                              | Response: [C1_DATAB] Value is:  1\r\nOK\r\n                  |                           |

**Description**: This command is used to configure or query the data bits of serial channel 1.

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_STOPB(Stop bit)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_STOPB?                                                 | Nil                                                          | Query current value       |
| AT+C1_STOPB=<span style={{ color: 'blue' }}>**parameter**</span> | 0:0.5   **1:1 (default)**  2:1.5   3:2                       | Set new value             |
| Response                                                     | [C1_STOPB] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_STOPB=1\r\n                                   |                           |
|                                                              | Response: [C1_STOPB] Value is:  1\r\nOK\r\n                  |                           |

**Description**: This command is used to configure or query the stop bit of serial channel 1.

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_PARITY(Parity bit)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_PARITY?                                                | Nil                                                          | Query current value       |
| AT+C1_PARITY=<span style={{ color: 'blue' }}>**parameter**</span> | **0:Nil (default)**   1:Odd  2:Even                          | Set new value             |
| Response                                                     | [C1_PARITY] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_PARITY=0\r\n                                  |                           |
|                                                              | Response: [C1_PARITY] Value is:  0\r\nOK\r\n                 |                           |

**Description**: This command is used to configure or query the parity of serial channel 1.

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_SER_C(serial port flow control)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_SER_C?                                                 | Nil                                                          | Query current value       |
| AT+C1_SER_C =<span style={{ color: 'blue' }}>**parameter**</span> | 0: Disable flow control (default)                            | Set new value             |
|                                                              | 1: Enable serial CTS/RTS hardware flow control               |                           |
|                                                              | 2: Enable 485EN pin                                          |                           |
| Response                                                     | [C1_SER_C] Value is: <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_SER_C=0\r\n                                   |                           |
|                                                              | Response: [C1_SER_C] Value is:  0\r\nOK\r\n                  |                           |

**Description**: This command is used to configure or query the serial channel flow control of serial channel 1.

<span style={{ color: 'red' }}>**Note**: This command with the parameter set to 2 will enable the 485EN pin. The RTS pin becomes an RS-485 enable output for connecting external RS485 chips. 485EN pin is supported. </span>

<br>

</br>

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_BUF_CLS(Clear Buffer if Connected)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_BUF_CLS?                                               | Nil                                                          | Query current value       |
| AT+C1_BUF_CLS=<span style={{ color: 'blue' }}>**parameter**</span> | **0: Do not clear the serial port buffer  after establishing a connection (default)** | Set new value             |
|                                                              | 1: Clear the serial port buffer after  establishing a connection |                           |
| Response                                                     | [C1_BUF_CLS] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_BUF_CLS=1\r\n                                 |                           |
|                                                              | Response: [C1_BUF_CLS] Value is:  1\r\nOK\r\n                |                           |

**Description**: The module is effective when running in TCP mode and data transparent mode. If the connection suddenly disconnects during data exchange, some data may remain in the serial buffer and not be sent. This command can be used to determine whether to send this data after the connection is reestablished.

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_SER_LEN(Serial packaging Length)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_SER_LEN?                                               | Nil                                                          | Query current value       |
| AT+C1_SER_LEN=<span style={{ color: 'blue' }}>**parameter**</span> | The value range is: 0~2048 bytes,  **default: 0 (not specified Package)** | Set new value             |
| Response                                                     | [C1_SER_LEN] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_SER_LEN=10\r\n                                |                           |
|                                                              | Response: [C1_SER_LEN] Value is:  10\r\nOK\r\n               |                           |

**Description**: This command sets the package length for each data transmission. 

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_SER_T(Serial data packing Nagle wait time)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_SER_T?                                                 | Nil                                                          | Query current value       |
| AT+C1_SER_T=<span style={{ color: 'blue' }}>**parameter**</span> | Value range: 0~60000, **default: 0 (not  subcontracted), unit: ms** | Set new value             |
| Response                                                     | [C1_SER_T] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_SER_T=1000\r\n                                |                           |
|                                                              | Response: [C1_SER_T] Value is:  1000\r\nOK\r\n               |                           |

**Description**: This command sets the serial waiting time. After the waiting time passes, it gathers all the data and transmit in one data package. 

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_IT(Inactivity timeout)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_IT?                                                    | Nil                                                          | Query current value       |
| AT+C1_IT=<span style={{ color: 'blue' }}>**parameter**</span> | The time interval for timeout  disconnection, with a value range of:  0~60000, unit: ms, **default: 0 (disable  this function)** | Set new value             |
| Response                                                     | [C1_IT] Value is: <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_IT=1000\r\n                                   |                           |
|                                                              | Response: [C1_IT] Value is:  1000\r\nOK\r\n                  |                           |

**Description**: The command is valid in TCP mode and data transparent mode. When the module operates in TCP mode, whether as a server or client, there may be situations in which the other party disconnects (e.g., due to a forced disconnection or network failure), and the module is unaware of the disconnection and continues to maintain an invalid connection. There will be an error when either party initiates communication, which will prevent data delivery. 

By setting this parameter, it disconnects the TCP connection when the serial or Ethernet interface does not receive new data within a continuous timeout period during communication. When the value is set to 0, it means disable this function.

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_TCPAT(TCP keepalive interval)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_TCPAT?                                                 | Nil                                                          | Query current value       |
| AT+C1_TCPAT=<span style={{ color: 'blue' }}>**parameter**</span> | Value range: 0~255, **default: 0 (disable  this function)**, unit: 5s | Set new value             |
| Response                                                     | [C1_TCPAT] Value is: <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_TCPAT=1\r\n                                   |                           |
|                                                              | Response: [C1_TCPAT] Value is:  1\r\nOK\r\n                  |                           |

**Description**: The module is effective when running in TCP mode and data transparent mode. When using TCP protocol for communication, Module will send a "heartbeat detection packet" to the other party at a fixed time period to test whether the connection exists after receiving or sending data communication. If no response is received after sending the 'heartbeat detection packet', the converter will automatically disconnect.

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_LINK_P(TCP password authentication)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_LINK_P?                                                | Nil                                                          | Query current value       |
| AT+C1_LINK_P=<span style={{ color: 'blue' }}>**parameter**</span> | **0: Do not verify password after TCP  connection is established (default)** | Set new value             |
|                                                              | 1: Verify password after establishing  TCP connection        |                           |
| Response                                                     | [C1_LINK_P] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_LINK_P=1\r\n                                  |                           |
|                                                              | Response: [C1_LINK_P] Value is:  1\r\nOK\r\n                 |                           |

**Description**: The module's serial channel is valid when running in TCP Server mode and data transparent mode. In order to improve communication security, the module will provide a "Connection password verification" function. When the module communicates with the client as a TCP Server and the "Connection Password Verification" function is turned on, the client needs to send the module password as the first packet of data after establishing a connection with the module. If the password is correct, communication can begin; If the password is incorrect, you will be prompted to re-enter the correct password. The module password can be queried and set through the "PASS" command.

<a href="#at3">
  <button>Back</button>
</a>

---

###  C1_LINK_T(Connection Condition)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_LINK_T?                                                | Nil                                                          | Query current value       |
| AT+C1_LINK_T=<span style={{ color: 'blue' }}>**parameter**</span> | **0: Establish connection immediately  after power on (default)** | Set new value             |
|                                                              | 1: Establish a connection after  receiving data through the serial port |                           |
| Response                                                     | [C1_LINK_T] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_LINK_T=1\r\n                                  |                           |
|                                                              | Response: [C1_LINK_T] Value is:  1\r\nOK\r\n                 |                           |

**Description**: This command is valid in TCP Client mode and data transparent mode. This command is used to configure under what conditions the module establishes a connection with TCP Server. When configured as Establish connection after receiving data through serial channel , the module will not initiate a connection to the server until the module's serial channel receives the first packet of data and immediately initiates a connection request to the server. After successful connection, the module's serial channel will send the first packet of data to the server and start normal data transmission mode.

<a href="#at3">
  <button>Back</button>
</a>

---

### C1_LINK_M(Send Hello Message)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_LINK_M?                                                | Nil                                                          | Query current value       |
| AT+C1_LINK_M=<span style={{ color: 'blue' }}>**parameter**</span> | **0: Do not send messages (default)**                        | Set new value             |
|                                                              | 1: Send converter name                                       |                           |
|                                                              | 2: Send converter MAC address                                |                           |
|                                                              | 3: Send converter IP address                                 |                           |
| Response                                                     | [C1_LINK_M] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+C1_LINK_M=1\r\n  Response: [C1_LINK_M] Value is:  1\r\nOK\r\n |                           |

**Description**: The command is valid in TCP Client mode and is valid in both data transparent mode and AT command transmission data mode. This command is used to configure the information that the module sends immediately after the connection is established.

<a href="#at3">
  <button>Back</button>
</a>

---

## Management commands

### C1_SEND_NUM(Number of bytes sent via serial port)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_SEND_NUM?    | Nil                                                          | Query current value       |
| Response           | [C1_SEND_NUM] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
|                    | Display range: 0~4294967295                                  |                           |
| Example            | Command: AT+C1_SEND_NUM?\r\n                                 |                           |
|                    | Response: [C1_SEND_NUM] Value is:  2048\r\nOK\r\n            |                           |

**Description**: This command is valid when the module is in data transmission mode or AT command transmission mode.

<a href="#at4">
  <button>Back</button>
</a>

---

### C1_RCV_NUM(Number of bytes received via serial port)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_RCV_NUM?     | Nil                                                          | Query current value       |
| Response           | [C1_RCV_NUM] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
|                    | Display range: 0~4294967295                                  |                           |
| Example            | Command: AT+C1_RCV_NUM?\r\n                                  |                           |
|                    | Response: [C1_RCV_NUM] Value is:  2048\r\nOK\r\n             |                           |

**Description**: This command is valid when the module is in data transmission mode or AT command transmission mode.

<a href="#at4">
  <button>Back</button>
</a>

---

### C1_NETSEND(Number of bytes sent via network port)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_NETSEND?     | Nil                                                          | Query current value       |
| Response           | [C1_NETSEND] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
|                    | Display range: 0~4294967295                                  |                           |
| Example            | Command: AT+C1_NETSEND?\r\n                                  |                           |
|                    | Response: [C1_NETSEND] Value is:  2048\r\nOK\r\n             |                           |

**Description**: This command is valid when the module is in data transmission mode or AT command transmission mode.

<a href="#at4">
  <button>Back</button>
</a>

---

### C1_NETRCV(Number of bytes received by the network port)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_NETRCV?      | Nil                                                          | Query current value       |
| Response           | [C1_NETRCV] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
|                    | Display range: 0~4294967295                                  |                           |
| Example            | Command: AT+C1_NETRCV?\r\n                                   |                           |
|                    | Response: [C1_NETRCV] Value is:  2048\r\nOK\r\n              |                           |

**Description**: This command is valid when the module is in data transmission mode or AT command transmission mode.

<a href="#at4">
  <button>Back</button>
</a>

---

### PRE(List preset values)

| **Command format** | **Parameters**  | **Function  Description** |
| ------------------ | --------------- | ------------------------- |
| AT+PRE?            | Nil             | Query current value       |
|                    | DEFAULT:        |                           |
| [NAME]:            | W5500S2E-xx     |                           |
| [PASS]:            | admin           |                           |
| [IP]:              | 192.168.1.88    |                           |
| [MARK]:            | 255.255.255.0   |                           |
| [GATEWAY]:         | 192.168.1.1     |                           |
| [DNS]:             | 114.114.114.114 |                           |
| [WEB_PORT]:        | 80              |                           |
| [C1_DOMAIN]:       | www,iwiznet.cn  |                           |
| [C1_PORT]:         | 5000            |                           |
| [C1_BAUD]:         | 9               |                           |
| [C1_DATAB]:        | 1               |                           |
| [C1_PARITY]:       | 0               |                           |
| [C1_STOPB]:        | 1               |                           |
| [C1_SER_C]:        | 0               |                           |
| [C1_SER_T] :       | 0               |                           |
| [C1_SER_LEN]:      | 0               |                           |
| [C1_CLI_IP1]:      | 192.168.1.99    |                           |
| [C1_CLI_PP1]:      | 5000            |                           |
| CURRENT:           |                 |                           |
| [NAME] :           | W5500S2E-xx     |                           |
| [PASS]:            | admin           |                           |
| [IP]:              | 192.168.1.88    |                           |
| [MARK]:            | 255.255.255.0   |                           |
| [GATEWAY]:         | 192.168.1.1     |                           |
| [DNS]:             | 114.114.114.114 |                           |
| [WEB_PORT]:        | 80              |                           |
| [C1_DOMAIN]:       | www,iwiznet.cn  |                           |
| [C1_PORT]          | 5000            |                           |
| [C1_BAUD]:         | 9               |                           |
| [C1_DATAB]:        | 1               |                           |
| [C1_PARITY]:       | 0               |                           |
| [C1_STOPB]:        | 1               |                           |
| [C1_SER_C]:        | 0               |                           |
| [C1_SER_T] :       | 0               |                           |
| [C1_SER_LEN]:      | 0               |                           |
| [C1_CLI_IP1]:      | 192.168.1.99    |                           |
| [C1_CLI_PP1]:      | 5000            |                           |
| OK                 |                 |                           |

<a href="#at4">
  <button>Back</button>
</a>

---

### LIST(List all commands)

| **Command format**        | **Parameters**    | **Function  Description** |
| ------------------------- | ----------------- | ------------------------- |
| AT+LIST?                  | Nil               | Query current value       |
|                           | [Control Command] |                           |
| AT                        | AT+ECHO           | AT+DEBUGMSGEN             |
| AT+NAME                   | AT+PASS           | AT+DEFAULT                |
| AT+RESET                  | AT+EXIT           | AT+SAVE                   |
| [Module Settings Command] |                   |                           |
| AT+START_MODE             | AT+C1_OP          | AT+IP_MODE                |
| AT+IP                     | AT+MARK           | AT+GATEWAY                |
| AT+DNS                    | AT+C1_PORT        | AT+C1_BIND                |
| AT+C1_DNSEN               | AT+C1_CLI_IP1     | AT+C1_CLI_PP1             |
| AT+DOMAIN                 | AT+RECONTIME      | AT+NETBIOS                |
| [Management Command]      |                   |                           |
| AT+C1_SEND_NUM            | AT+C1_RCV_NUM     | AT+C1_NETSEND             |
| AT+C1_NETRCV              | AT+PRE            | AT+LIST                   |
| AT+RUNTIME                | AT+VER            | AT+MAC                    |
| AT+SN                     | AT+TYPE           | AT+WEB_PORT               |
| [Data Transfer Command]   |                   |                           |
| AT+LINK                   | AT+LISTEN         | AT+CONNECT                |
| AT+TCP_STATUS             | AT+UDP            | AT+SEND                   |
| AT+RLEN                   | AT+RCV            | AT+CLEAR                  |
| AT+DISCON                 |                   |                           |
| OK                        |                   |                           |

<a href="#at4"><button>Back</button></a>

---

### RUNTIME(Module run time)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+RUNTIME?        | Nil                                                          | Query current value       |
| Response           | [RUNTIME] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
|                    | Format:  ddd-hh-mm-ss, where "d" represents days, "h" represents  hours, "m" represents minutes, and "s" represents  seconds. The display range is 000-00-00-00~999-23-59-59 |                           |
| Example            | Command: AT+RUNTIME?\r\n                                     |                           |
|                    | Response: [RUNTIME] Value is:  003-15-38-42\r\nOK\r\n        |                           |

<a href="#at4"><button>Back</button></a>

---

### VER(Firmware version)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+VER?            | Nil                                                          | Query current value       |
| Response           | [VER] Value is: <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example            | Command: AT+VER?\r\n                                         |                           |
|                    | Response: [VER] Value is: V1.0\r\nOK\r\n                     |                           |

<a href="#at4"><button>Back</button></a>

---

### MAC(Converter MAC Address)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+MAC?            | Nil                                                          | Query current value       |
| Response           | [MAC] Value is: <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example            | Command: AT+MAC?\r\n                                         |                           |
|                    | Response: [MAC] Value is:  00.08.DC.11.12.13\r\nOK\r\n       |                           |

<a href="#at4"><button>Back</button></a>

---

### SN(Equipment serial number)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+SN?             | Nil                                                          | Query current value       |
| Response           | [SN] Value is: <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example            | Command: AT+SN?\r\n                                          |                           |
|                    | Response: [SN] Value is:  20190102-111213\r\nOK\r\n          |                           |

<a href="#at4"><button>Back</button></a>

---

### TYPE(Equipment type)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+TYPE?           | Nil                                                          | Query current value       |
| Response           | [TYPE] Value is: <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example            | Command: AT+TYPE?\r\n                                        |                           |
|                    | Response: [TYPE] Value is: W5500S2E-xx\r\nOK\r\n             |                           |

 <a href="#at4"><button>Back</button></a>

---

###  WEB_PORT(Web port number)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+WEB_PORT?                                                 | Nil                                                          | Query current value       |
| AT+WEB_PORT=<span style={{ color: 'blue' }}>**parameter**</span> | Setting range: 1~65535, **default: 80**                      | Set new value             |
| Response                                                     | [WEB_PORT] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example                                                      | Command: AT+WEB_PORT=80\r\n                                  |                           |
|                                                              | Response: [WEB_PORT] Value is:  80\r\nOK\r\n                 |                           |

**Description**: This port number to access module's web page configuration site through a web browser, and it is not recommended to modify it. If configured with any port number other than 80, when accessing the module through a browser, the address bar should enter "IP: Port", for example: 192.168.1.88:8000.

<span style={{ color: 'red' }}>**Note:** Some protocols in the Ethernet protocol have default port numbers, which should be avoided. The default occupied port numbers are shown in the</span> [appendix](#appendix).

<br></br>

 <a href="#at4"><button>Back</button></a>

---

## Detailed description of AT data transmission command

### LINK (PHY connection status)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+LINK?           | Nil                                                          | Execute immediately       |
| Response           | [LINK] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
|                    | Explanation:  0: PHY not connected  1: PHY connected         |                           |
| Example            | Command: AT+LINK?\r\n                                        |                           |
|                    | Response: [LINK] Value is: 1\r\nOK\r\n                       |                           |

 <a href="#at5"><button>Back</button></a>

---

### LISTEN(Establish TCP listening)

| **Command format** | **Parameters**                                           | **Function  Description** |
| ------------------ | -------------------------------------------------------- | ------------------------- |
| AT+LISTEN          | Nil                                                      | Execute immediately       |
| Response           | OK\r\n                                                   |                           |
|                    | TCP listening has been established                       |                           |
| Error Response     | <span style={{ color: 'red' }}>**Error Info**</span>\r\n |                           |
|                    | The module is not in TCP Server mode                     |                           |
| Example            | Command: AT+C1_LISTEN\r\n                                |                           |
|                    | Response: OK\r\n                                         |                           |

**Description**: The command is valid when the module is running in TCP Server mode, which means that the command can only be configured correctly when the "C1_OP" command parameter is "0", otherwise an error will be reported. It can be closed through the "DISCON" command.

<span style={{ color: 'red' }}>**Note**: After configuring this command, check whether the TCP connection has been established using the "C1_TCP_STATUS" command. </span> 

<br></br>

 <a href="#at5"><button>Back</button></a>

---

###  CONNECT(Apply for TCP connection)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+CONNECT         | Nil                                                          | Execute immediately       |
| Response           | OK\r\n   TCP connection established                          |                           |
| Error Response     | <span style={{ color: 'red' }}>**Error Info**</span>\r\n     |                           |
|                    | The module is not in TCP Client mode, or the connection has timed out |                           |
| Example            | Command: AT+C1_CONNECT\r\n                                   |                           |
|                    | Response: OK\r\n                                             |                           |

**Description**: The command is valid when the module is running in TCP Client mode. This command can only be configured correctly when the parameter of the "C1_OP" command is "1", otherwise an error will be reported. After configuring this command, the converter immediately initiates a connection request to the TCP Server. If a TCP connection is not established after 3 seconds, an error message will be reported.

<span style={{ color: 'red' }}>**Note**: After configuring this command, it is necessary to check whether the TCP connection has been established through the "C1_TCP_STATUS" command.</span> 

<br></br>

 <a href="#at5"><button>Back</button></a>

---

### TCP_STATUS(TCP connection status)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+TCP_STATUS?     | Nil                                                          | Query current value       |
| Response           | [TCP_STATUS] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
|                    | 0: TCP not connected                                         |                           |
|                    | 1: TCP Connected                                             |                           |
| Example            | Command: AT+TCP_STATUS?\r\n                                  |                           |
|                    | Response: [TCP_STATUS] Value is:  1\r\nOK\r\n                |                           |

**Description**: This command is valid when running in TCP Server and TCP Client modes for the corresponding serial channel on the device. It is used for checking the TCP connection status.

 <a href="#at5"><button>Back</button></a>

---

### UDP(Establish UDP communication)

| **Command format** | **Parameters**                                           | **Function Description** |
| ------------------ | -------------------------------------------------------- | ------------------------ |
| AT+C1_UDP          | Nil                                                      | Query current value      |
| Response           | OK\r\n                                                   |                          |
|                    | UDP communication has been established                   |                          |
| Error Response     | <span style={{ color: 'red' }}>**Error Info**</span>\r\n |                          |
|                    | The module is not in UDP mode                            |                          |
| Example            | Command: AT+UDP\r\n                                      |                          |
|                    | Response: OK\r\n                                         |                          |

**Description**: The module operates in UDP mode. This command can only be configured correctly when the parameter of the "C1_OP" command is "2", otherwise an error will be reported.

 <a href="#at5"><button>Back</button></a>

---

### SEND(Number of bytes of data to be sent)

| **Command format**                                           | **Parameters**                                               | **Function  Description** |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+C1_SEND=<span style={{ color: 'blue' }}>**parameter**</span> | Set the length of data to be sent from the serial port,  Range: 0~2048, **default: 0 (any length)** | Set new value             |
| Response                                                     | [C1_SEND] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n |                           |
| Example1                                                     | Assuming the module is in TCP mode  and the TCP connection is normal: |                           |
|                                                              | Command: AT+C1_TCP_STATUS?\r\n                               |                           |
|                                                              | Response: [C1_TCP_STATUS] Value is:  1\r\nOK\r\n             |                           |
|                                                              | Command: AT+C1_SEND=5\r\n                                    |                           |
|                                                              | Response: [C1_SEND] Value is: 5\r\nOK\r\n                    |                           |
|                                                              | Sending data to module's serial port:  12345   Response: 5   |                           |
| Example2                                                     | Assuming the converter is in TCP mode  and the TCP connection is abnormal: |                           |
|                                                              | Command: AT+C1_TCP_STATUS?\r\n                               |                           |
|                                                              | Response: [C1_TCP_STATUS] Value is:  0\r\nOK\r\n             |                           |
|                                                              | Command: AT+C1_SEND=5\r\n                                    |                           |
|                                                              | Response: [C1_SEND] Value is:  5\r\nOK\r\n                   |                           |
|                                                              | Sending data to converter serial port:  12345   Response: 0  |                           |

**Description**: 

 1. If the module is running in TCP Server or TCP Client mode, before configuring this command, it is necessary to check whether the TCP connection has been 
 established by checking the result of the " TCP_STATUS" command. 
 2. After successfully configuring the command, the serial port will receive the corresponding return value. The following serial data will be considered as data input and sent out data, then it exits the data transmission and enters AT command mode. 
 3. If the specified sending length is 0, the serial port will default to packing the input data at 50ms frame intervals. Starting from the first byte sent over the serial channel, if the idle time exceeds 50ms, the data will be sent immediately. If the continuous byte length of the serial channel reaches 2048, the excess will be automatically discarded. 
 4. If the specified sending length is not 0, the serial channel will be packaged according to its length, and the specified length of characters will be immediately packaged and sent to the converter's serial channel. If it exceeds the specified length, the excess part will be automatically discarded; If it is less than the specified length, it will wait indefinitely. 
 5. After the data is successfully sent from the module's network port, the module's serial channel will immediately output a reply message in the format of "<span style={{ color: 'green' }}>len</span>".<span style={{ color: 'green' }}>len</span>: The number of bytes of data successfully sent from the module's network port, which users can use to determine whether their data has been successfully sent. 

 <a href="#at5"><button>Back</button></a>

---

### RLEN(Number of bytes of data to be received)

| **Command format** | **Parameters**                                               | **Function  Description** |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| AT+RLEN?           | Nil                                                          | Query current value       |
| Response           | [C1_RLEN] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n   Range: 0~2048 |                           |
| Example            | Data to be received: abcdef                                  |                           |
|                    | Command: AT+C1_RLEN?\r\n                                     |                           |
|                    | Response: [RLEN] Value is: 6\r\nOK\r\n                       |                           |

**Description**: This command queries the byte length of the data to be received in the receiving cache of the corresponding channel number network port.

 <a href="#at5"><button>Back</button></a>

---

### RCV(Receiving data)

| **Command format**                                          | **Parameters**                                               | **Function  Description**             |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------- |
| AT+RCV=<span style={{ color: 'blue' }}>**parameter**</span> | Specify the length of data to be  received from the serial port,  Range: 0~2048, **default: 0 (receive all)** | Set new value and Execute immediately |
| Response                                                    | [RCV] Value is:  <span style={{ color: 'green' }}>**value**</span>\r\nOK\r\n<span style={{ color: 'green' }}>**data**</span> |                                       |
|                                                             | Explain:  <span style={{ color: 'green' }}>**value**</span>: Number of received data  bytes |                                       |
|                                                             | <span style={{ color: 'green' }}>**data**</span>: Received data |                                       |
| Example                                                     | Data to be received: abcdef                                  |                                       |
|                                                             | Command: AT+RCV=0\r\n                                        |                                       |
|                                                             | Response: [RCV] Value is:  6\r\nOK\r\nabcdef                 |                                       |

**Description**:

 1. If the module is running in TCP Server or TCP Client mode, before configuring this command, it is necessary to check whether the TCP connection has been established by checking the result of the " TCP_STATUS" command. 
 2. After successfully configuring the command, the module serial channel will output data from the network port receiving cache, then exit data reception and enter AT command mode. 
 3. The size of the cache received by the three network ports is 2048 bytes. If the total length of data received by the network port from the cache is 2048 bytes, the network port will stop receiving data. 
 4. If the length of the data in the cache received by the network port is less than the specified length set by the "RCV" command, it will not be received. Thus, the number of received data bytes is 0. 

 <a href="#at5"><button>Back</button></a>

---

### CLEAR(Clear the network port receiving cache)

| **Command format** | **Parameters**        | **Function  Description** |
| ------------------ | --------------------- | ------------------------- |
| AT+CLEAR           | Nil                   | Execute immediately       |
| Response           | OK\r\n                |                           |
| Example            | Command: AT+CLEAR\r\n |                           |
|                    | Response: OK\r\n      |                           |

**Description**: If the module does not require the network port to receive data from the cache, this command can be used to clear it.

 <a href="#at5"><button>Back</button></a>

---

### DISCON(Turn off TCP/UDP)

| **Command format** | **Parameters**         | **Function  Description** |
| ------------------ | ---------------------- | ------------------------- |
| AT+DISCON          | Nil                    | Execute immediately       |
| Response           | OK\r\n                 |                           |
| Example            | Command: AT+DISCON\r\n |                           |
|                    | Response: OK\r\n       |                           |

**Description**: Close the TCP or UDP connection of the module.

 <a href="#at5"><button>Back</button></a>

---

## Appendix

## Default list of occupied ports in Ethernet protocol

| Protocol                       | Port    |
| ------------------------------ | ------- |
| Reserve                        | 0       |
| TCP port  multi-channel server | 1       |
| Reserve                        | 2       |
| ECHO                           | 7       |
| Reserve                        | 9       |
| Reserve                        | 11      |
| Reserve                        | 13      |
| Network  Status                | 15      |
| FTP                            | 20      |
| FTP                            | 21      |
| TELNET                         | 23      |
| SMTP                           | 25      |
| Printer                        | 35      |
| Time server                    | 37      |
| Name server                    | 42      |
| Reserve                        | 43      |
| Login Host  Protocol           | 49      |
| DNS                            | 53      |
| DHCP                           | 67      |
| DHCP                           | 68      |
| TFTP                           | 69      |
| Gopler                         | 70      |
| Finger                         | 79      |
| HTTP                           | 80      |
| Remote TELNET                  | 107     |
| SUN                            | 111     |
| NNTP                           | 119     |
| NTP                            | 123     |
| SNMP                           | 161     |
| SNMP                           | 162     |
| IPX                            | 213     |
| Reserve                        | 160~223 |

 <a href="#at"><button>Back</button></a> <a href="#c1_portlocal-port-number"><button>C1_PORT</button></a> <a href="#c1_cli_pp1remote-host-port-number"><button>C1_CLI_PP1</button></a> <a href="#web_portweb-port-number"><button>WEB_PORT</button></a> <a href="wizse_webpage_s1"><button>Webpage Configuration</button></a> <a href="wizse_config_tool_s1"><button>Configuration tools</button></a>



---