---
id: command_manual-[EN]
title: Command_Manual-[EN]
date: 2020-03-
---

## Content
# WIZ750SR Command Manual

\*\* Supported Languages \*\*  
\* [English](/products/wiz750sr/commandmanual/en) (current page)  
\* [Korean](/products/wiz750sr/commandmanual/ko)

![](/products/wiz750sr/docs_icon.png)

-----

## WIZ750SR Command Overview

WIZ750SR provides various commands for the product’s setting and
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

  - **[Control device using Ethernet network](#command_over_ethernet)**

### Abbreviations

| CR | Carriage Return, moves the cursor to the far left(starting) position ('\\r', 0x0D) |
| -- | ---------------------------------------------------------------------------------- |
| LF | Line Feed, moves the cursor to the new line below ('\\n', 0x0A)                    |
| N  | Number of commands                                                                 |
| RW | Read / Write                                                                       |
| RO | Read only                                                                          |
| WO | Write only                                                                         |

-----

1.  The **Configuration tool** provided by WIZnet uses the identical
    command set to control WIZ750SR.

2.  For example, when the **MC** command for checking the MAC address
    and the **VR** command for checking the firmware are identical.
