---
id: w55rp20-evb-pico-s2e
title: Getting Started with W55RP20-EVB-PICO
date: 2024-10-24
---



-----



## Overview



This manual is a guide for downloading the W55RP20-S2E firmware to the W55RP20-EVB-PICO hardware and using it as a serial to ethernet.


-----



## Required Hardware and Software

### Hardware

  - W55RP20-EVB-PICO
  - Cables (Ethernet / USB-C)

### Software
  - [W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)
  - [WIZMacTool](https://docs.wiznet.io/img/products/wiz750sr/developers/restore-mac/wizmactool_v20151127.zip)
  - [WIZnet S2E Configuration Tool](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)


## Use W55RP20-EVB-PICO as a serial to ethernet device


### Step 1: Flash W55RP20-S2E Firmware onto W55RP20-EVB-PICO

Download the last verson of W55RP20-S2E Bin_Files_VXXX.zip<br />
[W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)
<img src="/img/products/w55rp20-s2e/S2E_BIN.png" width="550" /> <br />


Unzip the Bin_Files_VXXX.zip<br />
<img src="/img/products/w55rp20-s2e/S2E_folder.png" width="200" /> <br />

Connect the w55rp20-evb-pico via USB. While holding down the BOOTSEL button, press the Reset button briefly once.<br />
<img src="/img/products/w55rp20-s2e/w55rp20-evb-pico-bt.png" width="500" />

You can see RPI-RP2 removable disk will appear.<br />
Drag and drop App_linker.uf2 and Boot.uf2, one by one, from the Bin_Files_VXXX folder.<br />
<img src="/img/products/w55rp20-s2e/drag-drop.png" width="400" />

:::tip
After dropping the first file onto the drive, the drive will disappear. To proceed, you need to put the board into BOOTSEL mode again and then drop the second file onto the drive.

:::

### Step 2: Write MAC address

To write MAC address refer this [link](./mac_address-write-guide-en.md)


### Step 3: Done

Once the MAC address input is completed, the user LED on the W55RP20-EVB-PICO will change to the Running LED. <br />This toggles every second while the S2E application is running.<br />
<img src="/img/products/w55rp20-s2e/w55rp20-evb-pico-user.png" width="500" />

After uploading the W55RP20-S2E firmware to the W55RP20-EVB-PICO, the pin map is as follows:<br />
<img src="/img/products/w55rp20-s2e/w55rp20-evb-pinmap.png" width="500" />
