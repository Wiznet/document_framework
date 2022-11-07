---
id: asg210-running-application
title: Running Application
date: 2021-06-03
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This section describes how to run Dual-Ethernet Application on ASG210 (For the more details, please refer to [Dual Ethernet Operating System Block Diagram](./ASG210-datasheet.md#dual-ethernet-operating-system-block-diagram). ASG210 Dual-Ethernet Application consists of High-level application and Real-time capable application.

## Step 1. Clone repository

Clone the [repository](https://github.com/WIZnet-Azure-Sphere/ASG210_App)

```
$ git clone https://github.com/WIZnet-Azure-Sphere/ASG210_App
```

## Step 2. Network configuration

This application sends local data to Azure cloud. User should configure ASG210 connection to Local network and Global network as shown below.

<img src={useBaseUrl('img/AzureSphere/running_app/network_config.png')} width="750"></img>

## Step 3. Real-time Capable Application

### Set Local Network Information

To run Real-time capable application, user should set Local Network information. User can select static network and DHCP network.

#### Set up Static network

User can set up static network in ASG210_RTApp code. Go to this directory in ASG210_App, ASG210_App/Software/ASG210_RTApp_W5500_SPI_BareMetal and open main.c. Enable **#define NETINFO_USE_MANUAL** and set local network information.

<img src={useBaseUrl('img/AzureSphere/running_app/static_network.png')} width="750"></img>

#### Set up DHCP network

User can set up DHCP network in ASG210_RTApp code. Go to this directory in ASG210_App, ASG210_App/Software/ASG210_RTApp_W5500_SPI_BareMetal and open main.c. Disable **#define NETINFO_USE_MANUAL**.

<img src={useBaseUrl('img/AzureSphere/running_app/dhcp_network.png')} width="750"></img>

### Build and download

From the Select Startup Item menum on the tool bar, select GDB Debugger (RTCore). Click Build All on Build menu. Press F5 or Click Startup Item to start the RT application with debugging.
(Please check Azure Sphere Development mode with Azure Sphere Developer Command Prompt.)

Prepare Azure Sphere development mode:

```
azsphere device enable-development
```

<img src={useBaseUrl('img/AzureSphere/running_app/rtapp_debugging.png')} width="750"></img>

<img src={useBaseUrl('img/AzureSphere/running_app/initiall_rtapp_serialdata.png')} width="750"></img>

## Step 4. Set High-Level application

### Set up Azure IoT Hub for ASG210

To run this application, user should set up user’s own Azure IoT Hub service for ASG210. In this link, it describes how to create Azure IoT Hub and DPS service, then guides ASG210 authentication using DPS service.

[https://docs.microsoft.com/en-us/azure-sphere/app-development/setup-iot-hub](https://docs.microsoft.com/en-us/azure-sphere/app-development/setup-iot-hub)

### Set Azure Cloud Parameters

To connect Azure Cloud, user must fullfil the parameters about Azure IoT Hub, DPS and Tenant ID on app_manifest.json in ASG210_HLApp.

<img src={useBaseUrl('img/AzureSphere/running_app/cloud_parameters.png')} width="750"></img>

#### Azure DPS Scope ID

Copy the ID Scope from Device Provisioning Service in Azure Portal.

<img src={useBaseUrl('img/AzureSphere/running_app/scope_id.png')} width="750"></img>

#### Azure IoT Hub endpoint URL

Copy the IoT Hub endpoint URL from IoT Hun in Azure Portal.

<img src={useBaseUrl('img/AzureSphere/running_app/iothub_endpoint.png')} width="750"></img>

#### Azure Sphere Tenant ID

Copy the Azure Sphere Tenant ID from Azure Sphere Developer Command Prompt

```
azsphere tenant show-selected
```

<img src={useBaseUrl('img/AzureSphere/running_app/tenant_id.png')} width="750"></img>

### Set Wi-Fi Information

ASG210 supports auto switching between Public Ethernet and Wi-Fi. Public Ethernet interface has high priority. Please refer [Configuration Wi-Fi Network Settings](./Getting-started.md#configuration-wi-fi-network-settings).

###	Set up Public Ethernet interface

To enable ethernet interface for public network and communication with Azure IoT, install ethernet imagepackage by deploying a board configuration image to ASG210. The board configuration image contains information that the Azure Sphere Security Service requires to add support for Ethernet to the Azure Sphere OS.

Follow these steps to enable public ethernet interface:

1.	Create a board configuration image package

```
azsphere image-package pack-board-config –-preset lan-enc28j60-isu0-int5 –-output 
```

2.	Prepare ASG210 for development mode

```
azsphere device enable-development
```

3.	Sideload a board configuration image package

```
azsphere device sideload deploy --imagepackage enc28j60-isu0-int5.imagepackage
```

4.	Check the sideloaded imagepackage

```
azsphere device image list-installed
```

###	Build and download

From the Select Startup Item menum on the tool bar, select GDB Debugger (HLCore). Click Build All on Build menu. Press F5 or Click Startup Item to start the HL application with debugging.
(Please check Azure Sphere Development mode with Azure Sphere Developer Command Prompt.)

Prepare Azure Sphere development mode:

```
azsphere device enable-development
```

<img src={useBaseUrl('img/AzureSphere/running_app/start_hl_app.png')} width="750"></img>

<img src={useBaseUrl('img/AzureSphere/running_app/debugging_message.png')} width="750"></img>

## Step 5. Check application operation

### Send data to ASG210 from Local Network

Set user device network address range and connect to ASG210 network address in Local network with TCP Client. After connection between user device and ASG210, user device can send JSON format data to transmit it to Azure Cloud through ASG210. 

<img src={useBaseUrl('img/AzureSphere/running_app/network_address.png')} width="750"></img>

<img src={useBaseUrl('img/AzureSphere/running_app/send_json.png')} width="750"></img>

### Check the data in Azure Cloud

ASG210 sends user device data to Azure Cloud. User can check the data sent from user device in Azure Cosmos DB or Storage. 

<img src={useBaseUrl('img/AzureSphere/running_app/azure_cosmosdb.png')} width="750"></img>

###	Auto Switch in ASG210 Network Interface

This application supports auto switching network interface to guarantee Azure Cloud connection. If Ethernet connection is not working anymore, ASG210 switches from Ethernet to Wi-Fi interface and re-connects to Azure Cloud. (Vice versa works as well.)

<img src={useBaseUrl('img/AzureSphere/running_app/autonetwork_switching.png')} width="750"></img>
