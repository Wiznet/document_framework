---
id: mac_address-write-guide-en
title: MAC Address write Guide
date: 2024-10-23
---



-----



## MAC Address write overview



The MAC address is stored in different memory address from the firmware area of the W55RP20-S2E.<br />Therefore, reflashing the W55RP20-S2E firmware will not erase the MAC address input if only the firmware area is overwritten.


-----



## Required Hardware and Software

### Hardware

  - Devices with W55RP20-S2E firmware downloaded
  - Cables (Ethernet / Serial)

### Software

  - [WIZMacTool](https://docs.wiznet.io/img/products/wiz750sr/developers/restore-mac/wizmactool_v20151127.zip)
  - [WIZnet S2E Configuration Tool](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)


## How to write MAC Address

There are two ways to write MAC Address

- [Using WIZMacTool](#using-wizmactool)
- [Using Serial Command](#using-serial-command)


## Using WIZMacTool

### Step 1: Connect UART1 of W55RP20-S2E to PC

At this step, you will need a separate UART to USB module.<br />
<img src="/img/products/w55rp20-s2e/usb-connect.png" width="500" />


### Step 2: Run WIZMacTool

Run **WIZMacTool** and connect the COM port to which the W55RP20-S2E is connected.<br />
<img src="/img/products/w55rp20-s2e/mac-tool1.png" width="500" />

### Step 3: Check INPUT MAC

After connecting the COM port of the W55RP20-S2E to WIZMacTool, reset the W55RP20-S2E and verify that "INPUT MAC" is displayed in WIZMacTool.<br />
<img src="/img/products/w55rp20-s2e/mac-tool2.png" width="500" />

### Step 4: Write MAC Address

Set up WIZMacTool as shown in the picture, enter the MAC address you wish to input, and click Write.<br />
<img src="/img/products/w55rp20-s2e/mac-tool4.png" width="500" />

If the MAC address is successfully written, the W55RP20-S2E will respond with the letter R and the MAC address you entered.<br />
<img src="/img/products/w55rp20-s2e/mac-tool5.png" width="500" />
<br />
For convenience when entering consecutive MAC addresses, WIZMacTool increments the MAC address by 1 after clicking Write MAC.

### Step 5: Done

You can verify the changed MAC address by searching with the config-tool <br />
<img src="/img/products/w55rp20-s2e/config-mac.png" width="500" /> <br />
or checking it via AT commands.<br />
<img src="/img/products/w55rp20-s2e/at-mac.png" width="500" /> <br />


## Using Serial Command

### Step 1: Connect UART1 of W55RP20-S2E to PC

At this step, you will need a separate UART to USB module.<br />
<img src="/img/products/w55rp20-s2e/usb-connect.png" width="500" />

### Step 2: Run serial program

Open the COM port connected to the W55RP20-S2E using a serial monitor program. In this manual, we used an open-source tool named Hercules.<br />
<img src="/img/products/w55rp20-s2e/hercul-open.png" width="500" />

### Step 3: Check INPUT MAC

After the COM port of the W55RP20-S2E is opened in the serial program, reset the W55RP20-S2E and verify that "INPUT MAC" is displayed.<br />
<img src="/img/products/w55rp20-s2e/hercul-input.png" width="500" />

### Step 4: Write MAC Address

Send the character 'S' followed by the MAC address you wish to input. The W55RP20-S2E will respond with the character 'R' and the MAC address you sent, indicating that the MAC address has been successfully written.<br />
<img src="/img/products/w55rp20-s2e/hercul-write-mac.png" width="500" />

### Step 5: Done

You can verify the changed MAC address by searching with the config-tool <br />
<img src="/img/products/w55rp20-s2e/config-mac.png" width="500" /> <br />
or checking it via AT commands.<br />
<img src="/img/products/w55rp20-s2e/at-mac.png" width="500" /> <br />