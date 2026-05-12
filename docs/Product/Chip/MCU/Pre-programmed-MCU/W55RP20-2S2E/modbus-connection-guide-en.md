---
id: modbus-connection-guide-en
title: Modbus Connection Guide
date: 2024-05-23
---





-----



## W55RP20-S2E Modbus Connection Overview

The **W55RP20-S2E** supports protocol conversion between **Modbus TCP server/UDP** and **Modbus RTU/ASCII**.


-----



## Required Hardware and Software



### Hardware


  - W55RP20-S2E
  - Cables (Ethernet / Serial)



### Software

  - WIZnet S2E Configuration Tool 
  > **Note** : Modbus protocol requires the latest version of WIZnet-S2E-Tool-GUI version 1.5.5 or higher.
	- [Download the Latest Version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)
  - Modbus Poll & Slave:
	- [Download Link](https://www.modbustools.com/download.html)



-----



## How to Connect to Modbus



### Step 1: Run Config-tool

Run installed **'Config-tool'**


### Step 2: Setup Modbus Poll & Slave

Setup Modbus Poll & Slave Program.

  - Modbus Poll connects via Modbus TCP/IP or Modbus UDP/IP depending on the settings.
  - Modbus Slave connects via the Serial Port.

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/setup_modbus_program.png) |
| Figure: **Setup Modbus Poll & Slave Program**                                                        |



### Step 3: Setup W55RP20-S2E through WIZnet S2E Configuration Tool for Modbus Connection

1. Select **TCP Server** or **UDP** mode in the **Operation mode** setting section

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/select_operation_mode.png) |
| Figure: **Select TCP Server or UDP mode**                                                        |

2. Setup Modbus Option

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/setup_modbus_option.png) |
| Figure: **Setup Setup Modbus Option**                                                        |

3. Click the **Apply Settings** button to save the settings

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/apply_settings.png) |
| Figure: **Click Apply Settings button**                                                        |

|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/saved_settings.png) |
| Figure: **Saved settings**                                                        |




### Step 4: Done

W55RP20-S2E is successfully connected to the Modbus!
|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/connect_modbus.png) |
| Figure: **connected to the Modbus**  


-----

