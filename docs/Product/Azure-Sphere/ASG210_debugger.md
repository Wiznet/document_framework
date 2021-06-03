---
id: asg210_debugger
title: Debugger Board
date: 2021-06-03
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Description

ASG Debugger board supports programming and debugging Azure Sphere 3 Cores, A7 Core and Dual M4 Cores, and downloading and debugging Uart BLE module in MT3620 combo. There are 2 Micro-USB connectors and 1 JLINK interface pin-header. Each Micro USB connectors support Azure Sphere Cores debugging and JLINK interface pin-header supports BLE software download and debugging.

<img src={useBaseUrl('img/AzureSphere/debugger/asg210_debuggerboard.png')} width="300"></img>

## USB-Debug/Prog. UART Interface 

ASG210 supports Debuger Connector for ASG Debugger board to debug and program. ASG Debugger board includes on-board, the Microsoft-specified FTDI 4-port USB to Serial bridge implementation of the RECOVERY, SERVICE, DEBUG and SWD interfaces. These interfaces are primarily used for software application development and/or programming of USI Azure Sphere Combo module onboarded on ASG210. This requires a USB cable to be connected from Micro-USB PortA, to a Windows-10 (or Linux) computer on which Azure Sphere SDK and the relevant USB drivers have been installed.

ASG Debugger board also supports Micro-USB PortB to debug M4 cores and BT SWD to download/debug BT in USI Azure Sphere Combo module. User can debug M4 cores using Micro-USB PortB with baud rate of 115200. 

A simplified block diagram of ASG Debugger board is shown below:

<img src={useBaseUrl('img/AzureSphere/debugger/debugger_blockdiagram.png')} width="750"></img>

## Installation Overview

Users need ASG Debugger board to install ASG210 with Micro usb cable and 5V2A power adaptor. ASG Debugger board can be attached to ASG210’s debugger connector for debugging and programing. ASG Debugger board supports 2*Micro usb connectors and JLINK pin header. 
2*Micro usb connectors are for programming and debugging Azure Sphere MT3620 A7/Dual M4 Cores. It also supports Azure Sphere CLI connection. JLINK pin header is for download and debugging BLE.

User applications for ASG210 are developed in C using Microsoft’s Visual Studio IDE and Azure Sphere SDK. Visual Studio provides a powerful development environment for compiling and debugging application codes. And Azure Sphere SDK also supports Azure Sphere Development command prompt to set Azure Sphere module for user application development. 

*These components are optional. Needed additional purchase.*

<img src={useBaseUrl('img/AzureSphere/debugger/asg210_components.png')} width="750"></img>

<img src={useBaseUrl('img/AzureSphere/debugger/asg210_with_debugger.png')} width="750"></img>

###	ASG Debugger board connector

ASG Debugger board supports connectors and interface as follows:

| Name           | Type             | Description |
| -------------- | ---------------- | ----------- |
| AZURE Debugger | Micro USB PortA  | A7 Core program and debugger port <br /> Supports Aure Sphere CLI |
| M4 Debugger    | Micro USB PortB  | Dual M4 Cores program and debugger port |
| JLINK          | 3V3              | 3V3 |
|                | SWDIO            | Data I/O Pin |
|                | SWDCLK           | Clock Pin |
|                | BTRST            | BLE Reset Pin |
|                | GND              | GND |

<img src={useBaseUrl('img/AzureSphere/debugger/debugger_connectors.png')} width="750"></img>
