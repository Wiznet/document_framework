---
id: command_manual-[EN]
title: Command Manual-[EN]
date: 2020-03-13
---

## Content

# WIZ752SR Command Manual

\*\* Supported Languages \*\*  
\* [English](/products/s2e_module/wiz752sr-120/commandmanual/en)
(current page)  
\* [Korean](/products/s2e_module/wiz752sr-120/commandmanual/ko)

![](/products/wiz750sr/docs_icon.png)

-----

## WIZ752SR Command Overview

WIZ752SR provides various commands for the product’s setting and
control. Each command is composed of a **2 byte alphabet character
strings** and all **capital letters**. By using these commands users can
add script to the serial device or main MCU for product settings, and
also can create a program\[1\] for controlling the WIZ750SR module via
network.

Each command can operate read/write depending on the parameter, and
there is also a **read only command**\[2\].

Entering the command and switching the command mode of the serial port
device is done using the **data UART** port. The **debug UART** port is
not supported for command entering or operation.

Identical 2-byte character strings is used for setting the product with
commands via serial and Ethernet network, but there will a distinction
of the sending frame form. Thus this document will cover explanations of
all commands and guides for each sending methods and its form of frames.

The different command modes are as following.

  - **[Control device using serial command
    mode](#entering_serial_command_mode)**

<!-- end list -->

  - **[Control device using Ethernet network](#command_via_ethernet)**

### Abbreviations

| CR | Carriage Return, moves the cursor to the far left(starting) position ('\\r', 0x0D) |
| -- | ---------------------------------------------------------------------------------- |
| LF | Line Feed, moves the cursor to the new line below ('\\n', 0x0A)                    |
| N  | Number of commands                                                                 |
| RW | Read / Write                                                                       |
| RO | Read only                                                                          |
| WO | Write only                                                                         |

-----

## Usage of Command Set

1.  The **Configuration tool** provided by WIZnet uses the identical
    command set to control WIZ750SR.

2.  For example, when the **MC** command for checking the MAC address
    and the **VR** command for checking the firmware are identical.
    
    ### Entering Serial Command Mode

You can use either of the two methods below to enter serial command
mode.

  - **1. Enter command mode using hardware trigger pin**
      - Use the HW\_TRIG pin of the WIZ750SR (For the EVB, HW\_TRIG
        switch) to enter command mode.
      - Upon turning the power on, check the pin to enter command mode.
        Use the trigger pin to re-enter the command mode when rebooting.
      - The trigger pin should be pull-up, and operates as low active.
      - This method is used when users wish to change settings while the
        product operation is initiated.

\<WRAP round box center 80%\>

``` 
  - **Set the hardware trigger pin(HW_TRIG) to Low. **
     * When using the EVB, place the HW_TRIG switch to Command.
  - **Power on the WIZ752SR.**
     * When operating in serial command mode, users can check the following message via Debug UART port.
     * <code>> SEG:AT Mode </code>
  - **Enter the Command and Parameter that needs setting via serial port**((Data UART port)).
  - **Switch to data transmission mode(GW mode) using [[#ex|EX]] command**.
     * If the switch to data transmission mode is successful, users can check the following message via Debug UART port.
     * <code>> SEG:GW Mode </code>
```

\</WRAP\>

  - **2. Enter command mode using command mode switch code**\[1\]
      - Users can enter command mode using the command mode switch code
        provided by WIZ752SR.
      - The command mode switch codes can be used only if it is enabled
        in the configuration tool. (**default: Enabled**)
      - The command mode switch code is composed of 3-byte Hex codes,
        and can be changed to a different value if needed. The code only
        accepts Hex value. (**default: Hex \[2B\]\[2B\]\[2B**\]\[2\])

\<WRAP round box center 80%\>

``` 
  - **Check if 'Serial command mode switch code' is enabled at the configuration tool and the 3-bytes 'command mode switch code'.**
  - **Enter the ‘command mode switch code’ via data UART port to change modes.**
    * Read below what you need to be cautious about when switching to command mode.
    * When operating in serial command mode, users can check the following message via Debug UART port.
    * <code>> SEG:AT Mode </code>
  - **Enter the Command and Parameter that needs setting via serial port.**
  - **Use [[#ex|EX]] command to switch to data transmission mode.**
    * When operating in data transmission mode, users can check the following message via Debug UART port.
    * <code>> SEG:GW Mode </code>
```

\</WRAP\>

1.  Command mode switch trigger code via Data UART port

2.  Char '+++'

\<WRAP round tip center 90%\>

**Please be cautious when using the trigger code to switch command
mode.**

``` 
  - There has to be a time gap of **at least 500ms** at the start and end of the ‘command mode switch code’ in order it to be read as switch code.
  - The entering time in between each byte of the ‘3-byte command mode switch code’ has to be **below 500ms**.
  - Do not add CR or LF at the end of the command mode switch code((Conversely, the serial command after mode switch must end with CR or LF.)).
  - The default values of 1 and 2 above are **500ms**; these values change to the timer value if the timer value of the serial data packing option is set to a certain value.
```

\</WRAP\>

#### Serial Command Frame Format

You must include CR and LF at the end of each command. CR and LF must be
included at the end of each commands when multiple commands are entered
simultaneously.

##### Get Request

    [2-bytes Command Code] [CR] [LF]

  - Enter command without parameter.
  - The response relevant to the command will return.

##### Set Request

    [2-bytes Command Code] [Parameters] [CR] [LF]

  - Enter the command and parameters you wish to set.
  - There will be no particular response and the field value relevant to
    the command will change instantly.
  - You have to use the **[SV](#sv)** command in order to save settings,
    and use the **[RT](#rt)** command to change IP allocation methods or
    other initial operation changes.

\* Note: You can check the Echoback of UART command via **[EC](#ec)**
command.

-----

### Command over Ethernet

Users can control or monitor WIZ752SR via Ethernet by using the
following commands. The user must use **UDP** or **TCP client** \[1\] to
send commands, and the port number for processing the commands is
**50001**.

\<WRAP round info center centeralign 80%\> **Network information for
command transmission:**  
**UDP / TCP Server : 50001**  
(User can send the commands by UDP / TCP Client to device) \</WRAP\>

#### Ethernet Command Frame Format

1.  Users must use UDP or TCP client because the UDP or TCP server is
    operating to handle the device commands.
    
    
    Two additional commands are required before sending the command code
when controlling the WIZ752SR via Ethernet. All other settings and
operations are the same as when sending the serial command code via data
UART port.

The two additional commands are **MA** and **PW**.

  - **\[MA\] command**
      - This field shows the **product’s MAC address**.
      - In both cases of TCP and UDP, 6-byte MAC address must be
        included after the 2-byte MA command.
          - When users wish to broadcast only Get Request via UDP\[1\],
            the relevant field value can be set as the Broadcast MAC
            address\[2\]. Users can receive responses from multiple
            peers. The search function of the configuration tool is
            implemented like this

<!-- end list -->

  - **\[PW\] command**
      - User must send the setting value of the WIZ750SR after the PW
        command when using the **'Search ID Code'** to distinguish the
        product group.
      - If the **'Search ID Code'** is not used, the PW command and the
        field between CR & LF (Search ID) must not be blank; enter the
        value of 0x20\[3\]. 

\<WRAP round info center centeralign 80%\> **The command frame for
sending commands via Ethernet  
MUST be in the order of MA → PW → (Command x N).** \</WRAP\>

##### Get Request

\<WRAP round box center 100%\> **When sending a single command**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] [Command] [CR] [LF]

**When sending multiple commands**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] ([Command] [CR] [LF]) * Number of commands

\</WRAP\>

  - The response for ‘get request’ will have the identical format as
    ‘request’ but include the parameter\[4\].

##### Set Request

1.  Data is sent to the broadcast IP address 255.255.255.255, and data
    can be sent to all peers in the same network.

2.  FF:FF:FF:FF:FF:FF

3.  Hex value 0x20 means ‘gap’ in ASCII code.

4.  The response for ‘Get Request’ has the same form as ‘Set Request’.

\<WRAP round box center 100%\> **When sending a single command**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] [Command] [Parameters] [CR] [LF]

**When sending multiple commands**

    MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] ([Command] [Parameters] [CR] [LF]) * Number of commands

\</WRAP\>

  - For ‘Set Request’, there is no additional response needed for
    changing the product setting.
  - If users want to check the modified setting, send the command
    without parameter at the end of the ‘Set Request frame’; in form of
    Set + Get Request.

#### Ethernet Command Examples

##### Example \#1: UDP Get Command Frame

  - When requesting MAC and local IP from multiple devices via UDP
      - Search ID is not used

| Request from User |
| ----------------- |

\<WRAP round box center 100%\>

**Command Frame**

    MA [FF FF FF FF FF FF] [CR] [LF] PW [ ] [CR] [LF] MC [CR] [LF] LI [CR] [LF] 

**Hex code version of Command Frame**

    4D 41 FF FF FF FF FF FF 0D 0A 50 57 20 0D 0A 4D 43 0D 0A 4C 49 0D 0A

\</WRAP\>

| Response by WIZ752SR |
| -------------------- |

\<WRAP round box center 100%\>

**Command Frame**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] MC [00 08 DC 00 00 11] [CR] [LF] LI [192.168.11.2] [CR] [LF] 

**Hex code version of Command Frame**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4D 43 00 08 DC 00 00 11 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 32 0D 0A

\</WRAP\>

##### Example \#2: TCP Get Command Frame

  - When requesting the local IP of the device, which MAC address is
    00:08:DC:00:00:11, via TCP
      - Search ID is not used

| Request from User |
| ----------------- |

\<WRAP round box center 100%\>

**Command Frame**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] LI [CR] [LF] 

**Hex code version of Command Frame**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4C 49 0D 0A

\</WRAP\>

| Response by WIZ752SR |
| -------------------- |

\<WRAP round box center 100%\>

**Command Frame**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] LI [192.168.11.2] [CR] [LF] 

**Hex code version of Command Frame**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 32 0D 0A

\</WRAP\>

##### Example \#3: TCP Set Command Frame

  - When requesting the local IP of the device, which MAC address is
    00:08:DC:00:00:11, via TCP
      - If the Search ID is set to HELLO
      - Or if user wishes to change the local IP to 192.168.11.5

| Request from User |
| ----------------- |

\<WRAP round box center 100%\>

**Command Frame**

    MA [00 08 DC 00 00 11] [CR] [LF] PW [HELLO] [CR] [LF] LI [192.168.11.5] [CR] [LF] 

**Hex code version of Command Frame**

    4D 41 00 08 DC 00 00 11 0D 0A 50 57 48 45 4C 4C 4F 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 35 0D 0A

\</WRAP\>

| Response by WIZ750SR |
| -------------------- |

\<WRAP round box center 100%\>

    None

\</WRAP\>

\<WRAP round info center centeralign 80%\> **When modifying the IP
address format\[1\], '.'(dot, 0x2E) must be included such as the
'192.168.11.5'.** \</WRAP\>

-----

## Command list

1.  IPv4 address forms like IP address, Gateway address, subnet mask,
    DNS server address, or Remote IP address.
    
    \* The Set command setting the applicable value will operate if the
parameter is included when entering the command.

  - The Get command reading the applicable value will operate if only
    the command is entered.
  - If the ‘Read only’ sign does not appear, it means the command
    supports both Get / Set. 
  - Write only command is for controlling the product without the
    parameter\[1\].
  - There is a basic command list\[2\] and an expanded command
    list\[3\].
  - Settings like IP allocation settings or DNS operation settings via
    command mode\[4\] require ‘module reboot’ via **[RT](#rt)** command
    after the settings are saved via **[SV](#sv)** command.

### Basic Commands

1.  Save setting, reboot, switch mode, factory reset and Etc.

2.  WIZ107/108SR sync command list, excluding \[UI\] command

3.  WIZ750SR exclusive command list

4.  When the remote peer address is changed from IP address to domain

<table>
<thead>
<tr class="header">
<th>CMD</th>
<th>Category</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="#mc">MC</a></td>
<td>Device Information</td>
<td>MAC address</td>
<td>RO</td>
</tr>
<tr class="even">
<td><a href="#vr">VR</a></td>
<td>:::</td>
<td>Firmware version</td>
<td>RO</td>
</tr>
<tr class="odd">
<td><a href="#mn">MN</a></td>
<td>:::</td>
<td>Product name</td>
<td>RO</td>
</tr>
<tr class="even">
<td><a href="#st">ST</a></td>
<td>:::</td>
<td>Operation status for channel 0</td>
<td>RO</td>
</tr>
<tr class="odd">
<td><a href="#st">QS</a></td>
<td>:::</td>
<td>Operation status for channel 1</td>
<td>RO</td>
</tr>
<tr class="even">
<td><a href="#un">UN</a></td>
<td>:::</td>
<td>UART interface(Str)</td>
<td>RO</td>
</tr>
<tr class="odd">
<td><a href="#un">UI</a></td>
<td>:::</td>
<td>UART interface(Code)</td>
<td>RO</td>
</tr>
<tr class="even">
<td><a href="#op">OP</a></td>
<td>Network Settings</td>
<td>Network operation mode for channel 0</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#op">QO</a></td>
<td>:::</td>
<td>Network operation mode for channel 1</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#im">IM</a></td>
<td>:::</td>
<td>IP address allocation method<br />
(Static/DHCP)</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#li">LI</a></td>
<td>:::</td>
<td>Local IP address</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#sm">SM</a></td>
<td>:::</td>
<td>Subnet mask</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#gw">GW</a></td>
<td>:::</td>
<td>Gateway address</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#ds">DS</a></td>
<td>:::</td>
<td>DNS server address</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#lp">LP</a></td>
<td>:::</td>
<td>Local port number for channel 0</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#lp">QL</a></td>
<td>:::</td>
<td>Local port number for channel 1</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#rh">RH</a></td>
<td>:::</td>
<td>Remote host IP address / Domain for channel 0</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#rh">QH</a></td>
<td>:::</td>
<td>Remote host IP address / Domain for channel 1</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#rp">RP</a></td>
<td>:::</td>
<td>Remote host port number for channel 0</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#rp">QP</a></td>
<td>:::</td>
<td>Remote host port number for channel 1</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#br">BR</a></td>
<td>Data UART Settings</td>
<td>UART 0 Baud rate</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#br">EB</a></td>
<td>:::</td>
<td>UART 1 Baud rate</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#db">DB</a></td>
<td>:::</td>
<td>UART 0 Data bit</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#db">ED</a></td>
<td>:::</td>
<td>UART 1 Data bit</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#pr">PR</a></td>
<td>:::</td>
<td>UART 0 Parity bit</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#pr">EP</a></td>
<td>:::</td>
<td>UART 1 Parity bit</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#sb">SB</a></td>
<td>:::</td>
<td>UART 0 Stop bit</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#sb">ES</a></td>
<td>:::</td>
<td>UART 1 Stop bit</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#fl">FL</a></td>
<td>:::</td>
<td>UART 0 Flow control</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#fl">EF</a></td>
<td>:::</td>
<td>UART 1 Flow control</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#pt">PT</a></td>
<td>Serial Data Packing Options</td>
<td>Time delimiter for channel 0</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#pt">NT</a></td>
<td>:::</td>
<td>Time delimiter for channel 1</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#ps">PS</a></td>
<td>:::</td>
<td>Size delimiter for channel 0</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#ps">NS</a></td>
<td>:::</td>
<td>Size delimiter for channel 1</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#pd">PD</a></td>
<td>:::</td>
<td>Char delimiter for channel 0</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#pd">ND</a></td>
<td>:::</td>
<td>Char delimiter for channel 1</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#it">IT</a></td>
<td>Options</td>
<td>Inactivity timer value for channel 0</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#it">RV</a></td>
<td>:::</td>
<td>Inactivity timer value for channel 1</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#cp">CP</a></td>
<td>:::</td>
<td>Connection password enable<br />
(TCP server only)</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#np">NP</a></td>
<td>:::</td>
<td>Connection password<br />
(TCP server only)</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#sp">SP</a></td>
<td>:::</td>
<td>Search ID code</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#dg">DG</a></td>
<td>:::</td>
<td>Serial debug message enable</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#ka">KA</a></td>
<td>:::</td>
<td>TCP Keep-alive enable for channel 0</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#ka">RA</a></td>
<td>:::</td>
<td>TCP Keep-alive enable for channel 1</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#ki">KI</a></td>
<td>:::</td>
<td>TCP Keep-alive initial interval for channel 0</td>
<td>RW</td>
</tr>
<tr class="header">
<th><a href="#ki">RS</a></th>
<th>:::</th>
<th>TCP Keep-alive initial interval for channel 1</th>
<th>RW</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="#ke">KE</a></td>
<td>:::</td>
<td>TCP Keep-alive retry interval for channel 0</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#ke">RE</a></td>
<td>:::</td>
<td>TCP Keep-alive retry interval for channel 1</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#ri">RI</a></td>
<td>:::</td>
<td>TCP Reconnection interval for channel 0<br />
(TCP client only)</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#ri">RR</a></td>
<td>:::</td>
<td>TCP Reconnection interval for channel 1<br />
(TCP client only)</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#ec">EC</a></td>
<td>:::</td>
<td>UART Echoback enable</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#te">TE</a></td>
<td>Command Mode Switch Settings</td>
<td>Command mode switch code enable</td>
<td>RW</td>
</tr>
<tr class="odd">
<td><a href="#ss">SS</a></td>
<td>:::</td>
<td>Command mode switch code<br />
(3-bytes Hex)</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#ex">EX</a></td>
<td>Device Control</td>
<td>Command mode exit<br />
(switch to data transfer mode)</td>
<td>WO</td>
</tr>
<tr class="odd">
<td><a href="#sv">SV</a></td>
<td>:::</td>
<td>Save device setting</td>
<td>WO</td>
</tr>
<tr class="even">
<td><a href="#rt">RT</a></td>
<td>:::</td>
<td>Device reboot</td>
<td>WO</td>
</tr>
<tr class="odd">
<td><a href="#fr">FR</a></td>
<td>:::</td>
<td>Device factory reset</td>
<td>WO</td>
</tr>
</tbody>
</table>

### Extended Commands

<table>
<thead>
<tr class="header">
<th>CMD</th>
<th>Category</th>
<th>Description</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><a href="#ca_-_cd">CA</a></td>
<td>User I/O Settings</td>
<td>User I/O pin A type &amp; direction</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#ca_-_cd">CB</a></td>
<td>:::</td>
<td>User I/O pin B type &amp; direction</td>
<td>:::</td>
</tr>
<tr class="odd">
<td><a href="#ca_-_cd">CC</a></td>
<td>:::</td>
<td>User I/O pin C type &amp; direction</td>
<td>:::</td>
</tr>
<tr class="even">
<td><a href="#ca_-_cd">CD</a></td>
<td>:::</td>
<td>User I/O pin D type &amp; direction</td>
<td>:::</td>
</tr>
<tr class="odd">
<td><a href="#ga_-_gd">GA</a></td>
<td>User I/O<br />
Status / Value</td>
<td>User I/O pin A status or value</td>
<td>Digital out: RW<br />
Digital in: RO<br />
Analog in: RO</td>
</tr>
<tr class="even">
<td><a href="#ga_-_gd">GB</a></td>
<td>:::</td>
<td>User I/O pin B status or value</td>
<td>:::</td>
</tr>
<tr class="odd">
<td><a href="#ga_-_gd">GC</a></td>
<td>:::</td>
<td>User I/O pin C status or value</td>
<td>:::</td>
</tr>
<tr class="even">
<td><a href="#ga_-_gd">GD</a></td>
<td>:::</td>
<td>User I/O pin D status or value</td>
<td>:::</td>
</tr>
<tr class="odd">
<td><a href="#sc">SC</a></td>
<td>Status I/O</td>
<td>Status pin S0 &amp; S1 operation mode setting</td>
<td>RW</td>
</tr>
<tr class="even">
<td><a href="#s0">S0</a></td>
<td>:::</td>
<td>Status of pin S0 (PHY link or DTR)</td>
<td>RO</td>
</tr>
<tr class="odd">
<td><a href="#s1">S1</a></td>
<td>:::</td>
<td>Status of pin S1 (TCP connect or DSR)</td>
<td>:::</td>
</tr>
</tbody>
</table>

-----

## Command Descriptions

### Device Information

-----

#### MC

-----

  - **Format:** `MC[CR][LF]`
  - **Meaning:** Check product’s MAC address
  - **Command Type:** Read only
  - **Return Type:** String
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

    MAC address with colons(:)

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `MC00:08:DC:00:00:01\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### VR

-----

  - **Format:** `VR[CR][LF]`
  - **Meaning:** Check the product’s firmware version
  - **Command Type:** Read only
  - **Return Type:** String
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Firmware version with dots(.)

  - \=\> Major version number . Minor version number . Maintenance
    version number

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `VR1.0.0\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### MN

-----

  - **Format:** `MN[CR][LF]`
  - **Meaning:** Check the product name
  - **Command Type:** Read only
  - **Return Type:** String
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Device model name

  - \=\> Default: WIZ750SR

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `MNWIZ750SR\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### ST

-----

  - **ST** : Command for channel 0
  - **QS** : Command for channel 1
  - **Format:** `ST[CR][LF]`
  - **Meaning:** Check the product operation status
  - **Command Type:** Read only
  - **Return Type:** String
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

| Status  | Description                                                   |
| ------- | ------------------------------------------------------------- |
| BOOT    | Boot mode; Users can update the product setting and firmware. |
| OPEN    | Status before TCP connection is successful.                   |
| CONNECT | Status after TCP connection is successful.                    |
| UPGRADE | Status during firmware update or DHCP IP allocation.          |
| ATMODE  | Serial AT command mode status.                                |
| UDP     | UDP mode status.                                              |

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `STATMODE\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### UN

-----

  - **Format:** `UN[CR][LF]`
  - **Meaning:** Check product’s UART Interface
  - **Command Type:** Read only
  - **Return Type:** String
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

| UART Interface | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| RS-232/TTL     | Device supports UART input/output of RS-232C or TTL signals.    |
| RS-422/485     | Device supports UART input/output of RS-422 and RS-485 signals. |

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `UNRS-232/TTL\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### UI

-----

  - **Format:** `UI[CR][LF]`
  - **Meaning:** Check product’s UART Interface
  - **Command Type:** Read only
  - **Return Type:** Number (0 / 1)
  - **Return Value:**

\<WRAP indent\>\<WRAP indent\>

| Return value | Description                                                     | Remarks    |
| ------------ | --------------------------------------------------------------- | ---------- |
| 0            | Device supports UART input/output of RS-232C or TTL signals.    | RS-232/TTL |
| 1            | Device supports UART input/output of RS-422 and RS-485 signals. | RS-422/485 |

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `UI0\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
  
  
  

### Network Settings

-----

#### OP

-----

  - **OP** : Command for channel 0
  - **QO** : Command for channel 1
  - **Format:** `OP<Parameter>[CR][LF]`
  - **Meaning:** Product’s network operation mode
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 3)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>TCP Client mode</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>TCP Server mode</td>
<td>-</td>
</tr>
<tr class="odd">
<td>2</td>
<td>TCP Mixed mode</td>
<td>TCP Server / Client mixed mode</td>
</tr>
<tr class="even">
<td>3</td>
<td>UDP mode</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `OP0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change the network operation mode

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### IM

-----

  - **Format:** `IM<Parameter>[CR][LF]`
  - **Meaning:** Product’s IP address allocation method
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>Static IP</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>DHCP</td>
<td>Obtain an IP address automatically</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `IM0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change product’s IP address allocation method

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### LI

-----

  - **Format:** `LI<Parameter>[CR][LF]`
  - **Meaning:** Product's IP address
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String of IPv4 address form (including
    dot)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 192.168.11.2

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `LI192.168.11.2\r\n`
      - In HEX: `4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 32 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change product’s IP address

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### SM

-----

  - **Format:** `SM<Parameter>[CR][LF]`
  - **Meaning:** Product’s subnet mask
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String of IPv4 address form (including
    dot)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 255.255.255.0

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `SM255.255.255.0\r\n`
      - In HEX: `53 4D 32 35 35 2E 32 35 35 2E 32 35 35 2E 30 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - o Change product’s subnet mask

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### GW

-----

  - **Format:** `GW<Parameter>[CR][LF]`
  - **Meaning:** Product’s gateway address
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String of IPv4 address form (including
    dot)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 192.168.11.1

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `GW192.168.11.1\r\n`
      - In HEX: `47 57 31 39 32 2E 31 36 38 2E 31 31 2E 31 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change product’s gateway address

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### DS

-----

  - **Format:** `DS<Parameter>[CR][LF]`
  - **Meaning:** Product’s DNS address
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String of IPv4 address form (including
    dot)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 8.8.8.8

  - Google Public DNS (IPv4)
      - 8.8.8.8
      - 8.8.4.4

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `DS8.8.8.8\r\n`
      - In HEX: `44 53 38 2E 38 2E 38 2E 38 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change Product’s DNS

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### LP

-----

  - **LP** : Command for channel 0
  - **QL** : Command for channel 1
  - **Format:** `LP<Parameter>[CR][LF]`
  - **Meaning:** Product’s port number
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 5000

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `LP5000\r\n`
      - In HEX: `4C 50 35 30 30 30 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change product’s port number

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### RH

-----

  - **RH** : Command for channel 0
  - **QH** : Command for channel 1
  - **Format:** `RH<Parameter>[CR][LF]`
  - **Meaning:** Product’s remote host IP address / Domain name
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String of IPv4 address form (including
    dot) or Domain string
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 192.168.11.3

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `RH192.168.11.3\r\n`
      - In HEX: `52 48 31 39 32 2E 31 36 38 2E 31 31 2E 33 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change product’s remote host IP address

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### RP

-----

  - **RP** : Command for channel 0
  - **QP** : Command for channel 1
  - **Format:** `RP<Parameter>[CR][LF]`
  - **Meaning:** Product’s remote host port number
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Ex> 5000

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `RP5000\r\n`
      - In HEX: `52 50 35 30 30 30 0D 0A`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change product’s remote host port number

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
### Data UART Settings


-----

#### BR

-----

  - **BR** : Command for channel 0
  - **EB** : Command for channel 1
  - **Format:** `BR<Parameter>[CR][LF]`
  - **Meaning:** Baud rate of serial interface (Data UART)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 13)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Baud rate</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>300</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>600</td>
<td>-</td>
</tr>
<tr class="odd">
<td>2</td>
<td>1200</td>
<td>-</td>
</tr>
<tr class="even">
<td>3</td>
<td>1800</td>
<td>-</td>
</tr>
<tr class="odd">
<td>4</td>
<td>2400</td>
<td>-</td>
</tr>
<tr class="even">
<td>5</td>
<td>4800</td>
<td>-</td>
</tr>
<tr class="odd">
<td>6</td>
<td>9600</td>
<td>-</td>
</tr>
<tr class="even">
<td>7</td>
<td>14400</td>
<td>-</td>
</tr>
<tr class="odd">
<td>8</td>
<td>19200</td>
<td>-</td>
</tr>
<tr class="even">
<td>9</td>
<td>28800</td>
<td>-</td>
</tr>
<tr class="odd">
<td>10</td>
<td>38400</td>
<td>-</td>
</tr>
<tr class="even">
<td>11</td>
<td>57600</td>
<td>-</td>
</tr>
<tr class="odd">
<td>12</td>
<td>115200</td>
<td>-</td>
</tr>
<tr class="even">
<td>13</td>
<td>230400</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `BR12\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change baud rate of serial interface

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### DB

-----

  - **DB** : Command for channel 0
  - **ED** : Command for channel 1
  - **Format:** `DB<Parameter>[CR][LF]`
  - **Meaning:** Data bit of serial interface (Data UART)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Data bit</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>7-bit</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>8-bit</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `DB1\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change data bit of serial interface

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### PR

-----

  - **PR** : Command for channel 0
  - **EP** : Command for channel 1
  - **Format:** `PR<Parameter>[CR][LF]`
  - **Meaning:** Parity bit of serial interface (Data UART)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 2)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Parity bit</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>NONE</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>ODD</td>
<td>-</td>
</tr>
<tr class="odd">
<td>2</td>
<td>EVEN</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `PR0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change parity bit of serial interface

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### SB

-----

  - **SB** : Command for channel 0
  - **ES** : Command for channel 1
  - **Format:** `SB<Parameter>[CR][LF]`
  - **Meaning:** Stop bit of serial interface (Data UART)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Stop bit</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>1-bit</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>2-bit</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `SB0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change stop bit of serial interface

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### FL

-----

  - **FL** : Command for channel 0
  - **EF** : Command for channel 1
  - **Format:** `FL<Parameter>[CR][LF]`
  - **Meaning:** Flow control of serial interface (Data UART) /
    (RS-232/TTL interface only)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 2)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Flow control</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>NONE</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>XON/XOFF</td>
<td>Software flow control</td>
</tr>
<tr class="odd">
<td>2</td>
<td>RTS/CTS</td>
<td>Hardware flow control</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `FL0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change flow control of serial interface

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
  
  
  

### Serial Data Packing Options

-----

#### PT

-----

  - **PT** : Command for channel 0
  - **NT** : Command for channel 1
  - **Format:** `PT<Parameter>[CR][LF]`
  - **Meaning:** Data packing of serial interface (Data UART) – Time
    delimiter\[1\]
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used / 1 ~ 65535: Data packing time (Unit: millisecond)

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `PT0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - None
      - Change the time delimiter value of serial data packing

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

1.  The received serial data is collected until the designated time is
    lapsed and will be sent all together via Ethernet. This time starts
    counting when receiving the serial data stop, and if additional
    serial data is received before the designated time is lapsed, the
    count restarts.
    
    -----

#### PS

-----

  - **PS** : Command for channel 0
  - **NS** : Command for channel 1
  - **Format:** `PS<Parameter>[CR][LF]`
  - **Meaning:** Data packing of serial interface (Data UART) – Data
    size delimiter\[1\]
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 255)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used / 1 ~ 255: Data packing size (Unit: byte)

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `PS0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - None
      - Change the data size of serial data packing

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### PD

-----

  - **PD** : Command for channel 0
  - **ND** : Command for channel 1
  - **Format:** `PD<Parameter>[CR][LF]`
  - **Meaning:** Data packing of serial interface (Data UART) -
    designated character delimiter\[2\]
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** 1-byte Character (Hex only)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    00: Not used / Other: Designated character

  - The designated character is not included in data.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `PD00\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - None
      - Change designated character delimiter of serial data packing

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
  
  
  

### Options

-----

#### IT

-----

  - **IT** : Command for channel 0
  - **RV** : Command for channel 1
  - **Format:** `IT<Parameter>[CR][LF]`
  - **Meaning:** Inactivity timer value for TCP connection close when
    there is no data exchange
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used / 1 ~ 65535: Inactivity timer value (Unit: second)

  - If the timer is active, the TCP connection closes when there is no
    data exchange.
  - The timer restarts when there is an Ethernet data exchange before
    reaching entered inactivity timer value.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `IT0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - o Change inactivity timer value

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

1.  The received serial data is collected until the designated data
    length is reached and will be sent all together via Ethernet.

2.  The received serial data is collected until the designated character
    is received and will be sent all together via Ethernet.
    
    -----

#### CP

-----

  - **Format:** `CP<Parameter>[CR][LF]`
  - **Meaning:** TCP connection password enable (TCP server mode only)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 / 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used(Disabled) / 1: Used(Enabled)

  - This option is only when the product is operating as **TCP server**.
  - If this option is active, the TCP client wishing to connect to the
    device must send first the TCP connection password and confirmation
    for actual data to be transmitted. 

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `CP0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change whether TCP connection password enabled or not.

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### NP

-----

  - **Format:** `NP<Parameter>[CR][LF]`
  - **Meaning:** TCP connection password (TCP server mode only)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String (up to 8-bytes)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Default: None(Null)

  - This option is applicable only when product is operating as **TCP
    server**.
  - The password can be maximum of 8 characters.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `NP\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change TCP connection password

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### SP

-----

  - **Format:** `SP<Parameter>[CR][LF]`
  - **Meaning:** Search identification code
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String (up to 8-bytes)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Default: None(Null)

  - If this option is active, only the products with matching ID are
    found via product search by configuration tool.
  - Search ID code can be maximum of 8 characters.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `SP\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change search ID code

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### DG

-----

  - **Format:** `DG<Parameter>[CR][LF]`
  - **Meaning:** Serial debug message enable (Debug UART port)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 / 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used(Disabled) / 1: Used(Enabled)

  - If this option is active, the product setting or error message will
    output via Debug UART port. 

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `DG1\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change whether serial debug message enabled or not.

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### KA

-----

  - **KA** : Command for channel 0
  - **RA** : Command for channel 1
  - **Format:** `KA<Parameter>[CR][LF]`
  - **Meaning:** Keep-alive packet transmit enable for checking TCP
    connection established
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 / 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used(Disabled) / 1: Used(Enabled)

  - If this option is active, the keep-alive packet is sent to the TCP
    connection peer according to the designated interval([KI](#ki) /
    [KE](#ke)).
  - If there is no response from the peer, the TCP connection will close
    and the socket will initialize (socket open).

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `KA1\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change whether keep-alive packet transmit enabled or not.

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### KI

-----

  - **KI** : Command for channel 0
  - **RS** : Command for channel 1
  - **Format:** `KI<Parameter>[CR][LF]`
  - **Meaning:** Initial TCP keep-alive packet transmission interval
    value
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used / 1 ~ 65535: Initial Keep-alive packet transmission interval (Unit: millisecond)

  - The keep-alive packet is sent to the TCP connection peer according
    to the designated packet transmission interval.
  - Keep-alive packet transmission becomes active only when at least one
    Ethernet data transmission has been made.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `KI7000\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change initial keep-alive packet transmission interval value

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### KE

-----

  - **KE** : Command for channel 0
  - **RE** : Command for channel 1
  - **Format:** `KE<Parameter>[CR][LF]`
  - **Meaning:** TCP Keep-alive packet transmission retry interval value
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used / 1 ~ 65535: Keep-alive packet transmission retry interval (Unit: millisecond)

  - After the first keep-alive packet transmission is done, the next
    keep-alive packet is sent to the TCP connection peer according to
    the designated packet transmission interval.
  - Keep-alive packet transmission becomes active only when at least one
    Ethernet data transmission has been made.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `KE5000\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change keep-alive packet transmission retry interval value

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### RI

-----

  - **RI** : Command for channel 0
  - **RR** : Command for channel 1
  - **Format:** `RI<Parameter>[CR][LF]`
  - **Meaning:** TCP client reconnection interval value (TCP client
    only)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 65535)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used / 1 ~ 65535: TCP client reconnection interval (Unit: millisecond)

  - If the TCP connection between the server is not successful during
    TCP client mode, the interval value between the next connection
    attempt is set. 

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `RI3000\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change TCP client reconnection interval value

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### EC

-----

  - **Format:** `EC<Parameter>[CR][LF]`
  - **Meaning:** UART Echoback function enable (Data UART port)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 / 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used(Disabled) / 1: Used(Enabled)

  - If this option is enabled, the received serial data becomes Echoback
    via serial port (Data UART).
  - This function can be used to check what the user enters via serial
    command mode.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `EC0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change whether UART echoback function enabled or not.

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

### Command Mode Switch Settings

-----

#### TE

-----

  - **Format:** `TE<Parameter>[CR][LF]`
  - **Meaning:** Serial command mode switch code enable
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 / 1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    0: Not used(Disabled) / 1: Used(Enabled)

  - This function must be active in order to enter serial command mode
    via 3-byte command mode switch code.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `TE1\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change weather command mode switch code enabled or not

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### SS

-----

  - **Format:** `SS<Parameter>[CR][LF]`
  - **Meaning:** Serial command mode switch code
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** String (3-byte hex only)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

    Default: 0x2B 0x2B 0x2B 

  - The command mode switch code must be composed of 3-byte(3
    characters) hex code.

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `SS2B2B2B\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change command mode switch code

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
  
  
  

### Device Control

-----

#### EX

-----

  - **Format:** `EX[CR][LF]`
  - **Meaning:** Command mode exit
  - **Command Type:** Write only (Control)
  - **Parameter / Return:** None
  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\>

  - **Without Parameter**
      - No response
      - Command mode exit and switch to data transmission mode

\</WRAP\>

  - While the serial debug message is being used, the following mode
    switch message will output via Data/Debug UART ports once the switch
    to data transmission mode is successful.
  - `> SEG:GW Mode`

\</WRAP\> \</WRAP\>

-----

#### SV

-----

  - **Format:** `SV[CR][LF]`
  - **Meaning:** Save changed settings
  - **Command Type:** Write only (Control)
  - **Parameter / Return:** None
  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\>

  - **Without Parameter**
      - No response
      - Save changed settings

\</WRAP\> \</WRAP\> \</WRAP\>

-----

#### RT

-----

  - **Format:** `RT[CR][LF]`
  - **Meaning:** Device reboot
  - **Command Type:** Write only (Control)
  - **Parameter / Return:** None
  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\>

  - **Without Parameter**
      - No response
      - All operations are closed and device reboot

\</WRAP\>

  - While the serial debug message is being used, the following message
    will output via data UART
  - `> REBOOT`

\</WRAP\> \</WRAP\>

-----

#### FR

-----

  - **Format:** `FR[CR][LF]`
  - **Meaning:** Device factory reset
  - **Command Type:** Write only (Control)
  - **Parameter / Return:** None
  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\>

  - **Without Parameter**
      - No response
      - Reset to device factory default setting

\</WRAP\>

  - The device’s default setting values can be found at **[WIZ750SR
    Factory
    Settings](/products/wiz750sr/gettingstarted/ko#wiz750sr_factory_settings)**
  - The device reboots after factory reset, like **[RT](#rt)** command.
      - While the serial debug message is being used, the following
        message will output via data UART.
      - `> REBOOT`

\</WRAP\> \</WRAP\>

  
  
  
  

### User I/O Settings

-----

#### CA - CD

-----

  - **Format:** `Cx<Parameter>[CR][LF] (CA ~ CD)`
  - **Meaning:** User I/O pin setting (type / direction)
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0 \~ 2)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>I/O Setting</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>Digital input</td>
<td>-</td>
</tr>
<tr class="even">
<td>1</td>
<td>Digital output</td>
<td>-</td>
</tr>
<tr class="odd">
<td>2</td>
<td>Analog input</td>
<td>-</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `CA2\r\n` `CB0\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change user I/Os setting

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
  
  
  

### User I/O Status / Value

-----

#### GA - GD

-----

  - **Format:** `Gx<Parameter>[CR][LF] (GA ~ GD)`
  - **Meaning:** User I/O pin status or value
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (Digital in/out: 0/1, Analog in:
    0 \~ 4095)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

<table>
<thead>
<tr class="header">
<th>I/O Setting</th>
<th>Parameter /<br />
Return value</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Digital in/out</td>
<td>0</td>
<td>Low</td>
</tr>
<tr class="even">
<td>:::</td>
<td>1</td>
<td>High</td>
</tr>
<tr class="odd">
<td>Analog in</td>
<td>0 ~ 4095</td>
<td>12-bit ADC resolution</td>
</tr>
</tbody>
</table>

  - Digital out: R/W
  - Digital in: Read only 
  - Analog in: Read only

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `GA4095\r\n (Analog input)`
      - In ASCII: `GC0\r\n (Digital input)`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change user I/O status - High or Low, **Digital output only**

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

  
### Status I/O

-----

#### SC

-----

  - **Format:** `SC<Parameter_0><Parameter_1>[CR][LF]`
  - **Meaning:** Set status I/O pin **[S0](#s0)(PA\_10) and
    [S1](#s1)(PA\_01)** operation mode
  - **Command Type:** Read / Write
  - **Parameter / Return Type:** Number (0/1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

  - **Parameter\_0** (upper byte)

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>PHY link status</td>
<td>Default</td>
</tr>
<tr class="even">
<td>1</td>
<td>DTR</td>
<td>Data Terminal Ready<br />
(RS-232/TTL only)</td>
</tr>
</tbody>
</table>

  - **Parameter\_1** (lower byte)

<table>
<thead>
<tr class="header">
<th>Parameter /<br />
Return value</th>
<th>Meaning</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>TCP connection status</td>
<td>Default</td>
</tr>
<tr class="even">
<td>1</td>
<td>DSR</td>
<td>Data Set Ready<br />
(RS-232/TTL only)</td>
</tr>
</tbody>
</table>

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: (Connection Status) `SC00\r\n`
      - In ASCII: (DTR / DSR) `SC11\r\n`

\</WRAP\> \<WRAP half column\>

  - **With Parameter (Set)**
      - No response
      - Change status I/O pins operation mode

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### S0

-----

  - **Format:** `S0<Parameter>[CR][LF]`
  - **Meaning:** Status I/O pin **S0(PA\_10)** value
  - **Command Type:** Read only
  - **Parameter / Return Type:** Number (0/1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

  - **When operating via PHY link status pin**

| Return value | Meaning       | Remarks |
| ------------ | ------------- | ------- |
| 0            | PHY link up   | \-      |
| 1            | PHY link down | \-      |

  - **When operating via DTR(Data Terminal Ready) pin**
      - Signal that the device communication is ready (RS-232, Output)
      - Connects with peer device's DSR pin

| Return value | Meaning                             | Remarks |
| ------------ | ----------------------------------- | ------- |
| 0            | The device is not ready             | \-      |
| 1            | The device ready for communications | \-      |

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `S00\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

#### S1

-----

  - **Format:** `S1<Parameter>[CR][LF]`
  - **Meaning:** Status I/O pin **S1(PA\_01)** value
  - **Command Type:** Read only
  - **Parameter / Return Type:** Number (0/1)
  - **Parameter / Return Value:**

\<WRAP indent\>\<WRAP indent\>

  - **When operating via TCP connection status pin**
      - TCP server / client / mixed mode only 

| Return value | Meaning                    | Remarks |
| ------------ | -------------------------- | ------- |
| 0            | TCP connection established | \-      |
| 1            | TCP disconnected           | \-      |

  - \*\* When operating via DSR(Data Set Ready) pin\*\*
      - Signal detect that the peer device communication is ready
        (RS-232, Input)
      - Connect with peer device's DTR pin

| Return value | Meaning                                  | Remarks |
| ------------ | ---------------------------------------- | ------- |
| 0            | The peer device is not ready             | \-      |
| 1            | The peer device ready for communications | \-      |

\</WRAP\> \</WRAP\>

  - **Response**

\<WRAP indent\>\<WRAP indent\> \<WRAP round box group\> \<WRAP half
column\>

  - **Without Parameter (Get)**
      - In ASCII: `S10\r\n`

\</WRAP\> \<WRAP half column\> \</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>

-----

## Navigation

-----

\<WRAP group\> \<WRAP centeralign third column\>
[![arrow\_back.png](/etc/arrow_back.png)](/products/wiz750sr/configtoolmanual/en)  
**Prev Page**  
[Configuration Tool Manual](/products/wiz750sr/configtoolmanual/en)
\</WRAP\>

\<WRAP centeralign third column\>
[![arrow\_upward.png](/etc/arrow_upward.png)](#wiz750sr_command_manual)  
**Scroll to Top** \</WRAP\>

\<WRAP centeralign third column\>
[![arrow\_forward.png](/etc/arrow_forward.png)](/products/wiz750sr/troubleshooting/en)  
**Next Page**  
[Troubleshooting Guide](/products/wiz750sr/troubleshooting/en) \</WRAP\>
\</WRAP\>

\<WRAP group\> \<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr/start)  
**Back to Product Main**  
[WIZ750SR](/products/wiz750sr/start) \</WRAP\>

\<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-100/start)  
**Back to Product Main**  
[WIZ750SR-100](/products/wiz750sr-100/start) \</WRAP\>

\<WRAP group\> \<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-105/start)  
**Back to Product Main**  
[WIZ750SR-105](/products/wiz750sr-105/start) \</WRAP\>

\<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-110/start)  
**Back to Product Main**  
[WIZ750SR-110](/products/wiz750sr-110/start) \</WRAP\>

-----

\<WRAP round box group\> \<WRAP half column\> \<WRAP centeralign\> \*\*
WIZ750SR series Common Documents \*\* \</WRAP\>

  - **[User's Manual](/products/wiz750sr/usermanual/en)** 

<!-- end list -->

  - **[Device Command Manual](/products/wiz750sr/commandmanual/en)**

<!-- end list -->

  - **[Troubleshooting Guide](/products/wiz750sr/troubleshooting/en)**

<!-- end list -->

  - **[Update History](/products/wiz750sr/history/en)**

-----

\<WRAP centeralign\> \*\* WIZ750SR series Downloads \*\* \</WRAP\>

  - **[Software Downloads](/products/wiz750sr/download/start)**

<!-- end list -->

  - **[Technical Reference](/products/wiz750sr/reference/start)**

\</WRAP\>

\<WRAP half column\> \<WRAP centeralign\> \*\* WIZ750SR Individual
documents \*\* \</WRAP\>

  - **[WIZ750SR Product Overview](/products/wiz750sr/overview/en)**
  - **[WIZ750SR Getting Started
    Guide](/products/wiz750sr/gettingstarted/en)**
  - **[WIZ750SR Datasheet](/products/wiz750sr/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-100 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-100 Product
    Overview](/products/wiz750sr-100/overview/en)**
  - **[WIZ750SR-100 Getting Started
    Guide](/products/wiz750sr-100/gettingstarted/en)**
  - **[WIZ750SR-100 Datasheet](/products/wiz750sr-100/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-105 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-105 Product
    Overview](/products/wiz750sr-105/overview/en)**
  - **[WIZ750SR-105 Getting Started
    Guide](/products/wiz750sr-105/gettingstarted/en)**
  - **[WIZ750SR-105 Datasheet](/products/wiz750sr-105/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-110 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-110 Product
    Overview](/products/wiz750sr-110/overview/en)**
  - **[WIZ750SR-110 Getting Started
    Guide](/products/wiz750sr-110/gettingstarted/en)**
  - **[WIZ750SR-110 Datasheet](/products/wiz750sr-110/datasheet/start)**

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>
