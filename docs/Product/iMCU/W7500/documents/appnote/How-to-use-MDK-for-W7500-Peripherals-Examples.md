---
id: how-to-use-mdk-for-w7500-peripherals-examples
title: How to use MDK for W7500 Peripherals Examples
date: 2020-04-20
--- 

# How to use MDK for W7500 Peripherals Examples

******************************************************************************
(C) COPYRIGHT 2015 WIZnet

  * author  : IOP Team
  * version : V1.0.0
  * date    : 1-May-2015
  * brief   : Description of How to use W7500 Peripheral example with Keil project.

******************************************************************************
## Introduction

This application note guides user to use W7500 peripheral examples with Keil uVision compiler. Here we use TCP/IP core Offload Engine(TOE) among W7500 peripherals and loopback test example as sample.

This document is based on Keil uVision MDK-Lite version:5.14.0.0 compiler and WIZwiki-W7500 platform as hardware.

## Download W7500 library and example

You can download the library and example zip file at [link].

Download and abstract the file then you can see some folder.

## Directory structure

The extracted files consist of the CMSIS, driver and peripheral example.

The W7500 standard peripheral library provides a rich set of examples covering the main features of each peripheral. 

![Figure 1 W7500 library and example directory](/img/products/w7500/documents/appnote/directory.jpg)

## Example of WZTOE directory

In WZTOE folder, directory structure is as follows.

![directory3](/img/products/w7500/documents/appnote/directory3.jpg)

DHCPClient, DNSClient and LoopbackTest are example project and ioLibrary contains library of socket APIs, DHCP APIs, DNS APIs and etc.

In LoopbackTest folder, directory structure is as follows.

![directory2](/img/products/w7500/documents/appnote/directory2.jpg)

The **main.c** file is main body of the project.

The **retarget.c** file is for using printf function for debug.

The **W7500x_conf.h** file contains all peripheral headers.

If you want to enable/disable peripheral header file, uncomment/comment the line.

The **W7500x_it.c** file contains interrupt handlers for the project.

The **readme.md** file contains the example description, hardware and software environment and description of how to use.

The **MDK** folder is for Keil IDE compiler and the **GCC** folder is for GCC compiler.

## Open Keil projects

In MDK directory is here a file: Keil project file. Double click the file, then Keil uVision will be opened.

![project_explorer](/img/products/w7500/documents/appnote/project_explorer.jpg)

You can see upper image at left side on your uVision. In **W7500x_Periph** group are peripheral drivers which are used for this project.

The **User** group contains main function.

## Compile

![compile](/img/products/w7500/documents/appnote/compile.jpg)

Click the build icon on menu bar or 'F7'. Then compile will be done. After compile, **W7500x_WZTOE_Loopback.bin** file is generated in Obj folder.

## Download code

WIZwiki-W7500 board supports CMSIS-DAP, so you can just drag & drop the code file to download into 'mbed' directory on your system.

![draganddrop](/img/products/w7500/documents/appnote/draganddrop.jpg)

## Connect to WIZwiki-W7500 and do the loopback test

Now, WIZwiki-W7500 is running TCP server: IP - 192.168.77.9, PORT - 5000.
Type IP address and Port number(This application note use Hercules as TCP client program). And then click 'Connect' button.

![tcp_client1](/img/products/w7500/documents/appnote/tcp_client1.jpg)

After connection, send some string and you can see the same as you sent.

![tcp_client2](/img/products/w7500/documents/appnote/tcp_client2.jpg)
