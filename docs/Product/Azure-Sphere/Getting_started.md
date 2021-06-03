---
id: asg210_getting_started
title: Getting Started
date: 2021-06-03
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Software Development Environment Preparation

Complete the below steps to develop applications on a Windows or Linux System.

### Machine Environment

You can select Azure Sphere development kit for your machine and install software.

-	On Windows 10 (1st anniversary update or more) 
    -	Visual Studio Enterprise, Professional or Community 2019
    -	Visual Studio Code
-	On Linux 
    -	Visual Studio Code

### Azure Sphere SDK Installation

Download Azure Sphere SDK and install it.

- [Download Azure Sphere SDK](https://aka.ms/AzureSphereSDKDownload)

Then complete Azure Sphere SDK Extension Install for development tool.

- [For Visual Studio, Azure Sphere SDK Extension Install](https://docs.microsoft.com/en-us/azure-sphere/install/install-sdk?pivots=visual-studio)
- [For Visual Studio Code, Azure Sphere SDK Extension Instll](https://docs.microsoft.com/en-us/azure-sphere/install/install-sdk?pivots=vs-code)

### Visual Studio Code settings.json

Please check cmake options in settings.json for Visual Studio Code:

```
"cmake.cmakePath": "C:\\Program Files\\CMake\\bin\\cmake.exe",
   "cmake.configureSettings": {
      "CMAKE_MAKE_PROGRAM": "C:\\ninja\\ninja-v1.10.0\\ninja.exe",
   },
   "AzureSphere.ArmGnuPath": "C:\\Program Files (x86)\\GNU Arm Embedded Toolchain\\9 >2020-q2-update\\bin",
   "AzureSphere.SdkPath": "C:\\Program Files (x86)\\Microsoft Azure Sphere SDK",

```

### Azure Sphere Debugger

The MT3620 exposes two dedicated UARTs and SWD interface for debugging. The Azure Sphere PC software tools require the use of a USB-to-UART interface that exposes these interfaces to a PC in away that allows the tools to recognize and interact with them. For this, ASG200 components have a ‘Debugger’ board which can attaches to 18pin headers on ASG200. To use this debugger board, user should init the interface information with FTDI tools.

Please follow these steps described in this link:

- [FTDI FT_PROG programming tool](https://docs.microsoft.com/en-us/azure-sphere/hardware/mt3620-mcu-program-debug-interface#ftdi-ft_prog-programming-tool)

## Development Environment

### Azure Sphere CLI

The azsphere.exe command-line utility supports commands that manage Azure Sphere elements. For the more details, enter the below link:

- [azsphere command-line utility](https://docs.microsoft.com/en-us/azure-sphere/reference/overview)

On Azure Sphere Developer Command Prompt Preview, the option, -?, helps to show the command information.

<img src={useBaseUrl('img/AzureSphere/getting_started/azsphere_cli.png')} width="750"></img>

### Register User Account

To manage Azure Sphere elements for development, log in Azure Sphere Developer Command Prompt Preview with Microsoft account. To use Azure Sphere Security Service, Microsoft Account is required.

Log in on azsphere login command (Needed the option, –-newuser, with azsphere login command to register the account only have to sign in once.)

```
azsphere login –newuser <MS Account>
```

### Azure Sphere Tenant

An Azure Sphere tenant provides a secure way for your organization to remotely manage its Azure Sphere devices in isolation from other customer’s devices. And it is accessed based on RBAC (Role Based Access Control). Only people with an account in that directory will be able to manage devices within your Azure Sphere tenant.

#### Role assigned an account in the Azure Sphere tenant

Follow these steps to select the role assigned Azure Sphere tenant:

1.	Search the tenant list

```
azsphere tenant list
```

2.	Select the tenant from the list with tenant id

```
azsphere tenant select -I <tenant id>
```

3.	Check the selected tenant

```
azsphere tenant show-selected
```

#### Create new tenant

There is no existed Azure Sphere tenant or assigned role in it. User can create new Azure Sphere tenant.

```
azsphere tenant create -n <tenant name>
```

### Claim

Check the selected tenant for development environment. Once ASG200 claimed to the Azure Sphere tenant, claiming to other tenant is prohibited followed Azure Sphere Security policy.

```
azsphere device claim
```

### Recovery Interface

Once ASG200 is connected to the internet, Azure Sphere OS updates are initiated automatically via OTA (Over The Air) Wi-Fi interface. Also, user can manually update Azure Sphere OS with recovery. Recovery is the process of replacing the latest system software on the device using a special recovery bootloader instead of cloud update.

Follow these steps to update the latest Azure Sphere OS:

1.	Set Wi-Fi interface

```
azsphere device wifi add --ssid <SSID> --psk <Password>
```

2.	Check Wi-Fi status

```
azsphere device wifi show-status
```

3.	Recovery for Azure Sphere OS update

```
azsphere device recover
```

4.	Check Azure Sphere OS version

```
azsphere device show-os-version
```

### Development Mode

Connect Debugger board which is attached to ASG200 debug interface to PC and set development mode for debugging on In Azure Sphere Developer Command Prompt Preview.

On development mode, OTA is inactivated.

Development mode for debugging (Add option for RT App debugging).

*--enablertcoredebugging option requires administrator privilege because it installs USB driver for the debugger*

```
azsphere device enable-development --enablertcoredebugging
```

### Configuration Wi-Fi Network Settings

#### Scan for Wi-Fi Access Point

A quick-check of Wi-Fi reception can be done:

```
azsphere device wifi scan
```

#### Configuring the Wi-Fi Network Settings

1.	Set new Wi-Fi

```
azsphere device wifi add –-ssid <SSID> --psk <Password>

azsphere device wifi add -s <SSID> -p <Password>
```

2.	Verify the present Wi-Fi connectivity status

```
azsphere device wifi show-status
```