---
id: modbus-connection-guide-en
title: Modbus Connection Guide-[EN]
date: 2025-10-16
---





-----



## WIZ750SR Series Modbus Connection Overview

The **WIZ750SR** supports protocol conversion between **Modbus TCP server/UDP** and **Modbus RTU/ASCII**.


-----



## Required Hardware and Software



### Hardware


  - WIZ750SR Series Board
  - Cables (Ethernet / Serial)



### Software

  - WIZnet S2E Configuration Tool 
  > **Note** : The Modbus protocol requires the latest Firmware version 1.4.5 or higher and WIZnet-S2E-Tool-GUI version 1.5.8 or higher.
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
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/setup_modbus_program.png) |
| Figure: **Setup Modbus Poll & Slave Program**                                                        |



### Step 3: Setup WIZ750SR Series through WIZnet S2E Configuration Tool for Modbus Connection

1. Select **TCP Server** or **UDP** mode in the **Operation mode** setting section

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/select_operation_mode.png) |
| Figure: **Select TCP Server or UDP mode**                                                        |

2. Setup Modbus Option

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/setup_modbus_option.png) |
| Figure: **Setup Setup Modbus Option**                                                        |

3. Click the **Apply Settings** button to save the settings

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/apply_settings.png) |
| Figure: **Click Apply Settings button**                                                        |

|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/saved_settings.png) |
| Figure: **Saved settings**                                                        |




### Step 4: Done

WIZ750SR is successfully connected to the Modbus!
|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/connect_modbus.png) |
| Figure: **connected to the Modbus**  


-----

