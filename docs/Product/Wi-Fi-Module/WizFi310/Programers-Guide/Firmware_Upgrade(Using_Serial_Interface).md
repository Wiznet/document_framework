---
id: firmware_upgrade_using_serial_interface
title: Firmware Upgrade(Using Serial Interface)
date: 2020-05-13
---

# Firmware Upgrade (Using Serial Interface)

WizFi310 can be upgraded using serial interface. These are methods how
to upload firmware using serial interface.

## Using Firmware Upgrade Tool

WIZnet supports \<WizFi310\_Update\_Tool\> for uploading firmware. This
tool used XMODEM protocol with WizFi310 and it can be downloaded at
[WizFi310 Firmware(Using
Serial)](/document_framework/img/products/wizfi310/wizfi310pg/upgrade_tool_1.png).

### Step 1

Execute "WizFi310\_Update\_Tool.exe" and select serial port and baud
rate. For your information, WizFi310 is set to 115200 for default
baudrate.

![](/document_framework/img/products/wizfi310/wizfi310pg/upgrade_tool_1.png)

### Step 2

If you push \<browse\> button, you can select binary file.

![](/document_framework/img/products/wizfi310/wizfi310pg/upgrade_tool_2.png)

### Step 3

If you select \<Upload\> button, This tool will try to upload firmware
to WizFi310 as below.

![](/document_framework/img/products/wizfi310/wizfi310pg/upgrade_tool_3.png)

If it is done successfully, you can see message as below.

![](/document_framework/img/products/wizfi310/wizfi310pg/upgrade_tool_4.png)

If this tool is displayed error message as below, you have to check your
binary whether it is right.

![](/document_framework/img/products/wizfi310/wizfi310pg/upgrade_tool_5.png)

## Using TeraTerm

TeraTerm is terminal emulator. This software is open source software
under BSD License. For more detailed information, Refer to it. 🌎(
<https://ttssh2.osdn.jp/> ) You can download TeraTerm at this URL. 🌎(
<https://en.osdn.jp/projects/ttssh2/releases/> )

In order to set for upgrading firmware, You can use
[AT+MUPGRADE]()
command.

#### Step 1

After enter
[AT+MUPGRADE]()
in TeraTerm after WizFi310 restart. It will display 'C' message as
below.

![](/document_framework/img/products/wizfi310/wizfi310pg/teraterm_1.png)

#### Step 2

Select \[File\]-\[Transfer\]-\[XMODEM\]-\[Send\]
![](/document_framework/img/products/wizfi310/wizfi310pg/teraterm_2.png)

#### Step 3

Select binary file. ( In this case, you have to use CRC option. )

![](/document_framework/img/products/wizfi310/wizfi310pg/teraterm_3.png)

#### Step 4

After select binary, Teraterm will send binary via XMODEM and If it is
done successfully, WizFi310 will restart and display firmware version as
below.

![](/document_framework/img/products/wizfi310/wizfi310pg/teraterm_4.png)

![](/document_framework/img/products/wizfi310/wizfi310pg/teraterm_5.png)
