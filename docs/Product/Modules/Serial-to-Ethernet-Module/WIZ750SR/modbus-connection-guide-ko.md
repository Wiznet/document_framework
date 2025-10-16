---
id: modbus-connection-guide-ko
title: Modbus Connection Guide-[KO]
date: 2025-10-16
---





-----



## WIZ750SR Series Modbus Connection Overview

**WIZ750SR**는 **Modbus TCP 서버/UDP**와 **Modbus RTU/ASCII** 간의 프로토콜 변환을 지원합니다.


-----



## Required Hardware and Software



### Hardware


  - WIZ750SR Series Board
  - Cables (Ethernet / Serial)



### Software

  - WIZnet S2E Configuration Tool 
  > **Note** : Modbus 프로토콜은 Firmware 1.4.5 이상의 최신버전과, WIZnet-S2E-Tool-GUI 버전 1.5.8 이상의 최신 버전이 필요합니다.
	- [Download the Latest Version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)
  - Modbus Poll & Slave:
	- [Download Link](https://www.modbustools.com/download.html)



-----



## How to Connect to Modbus



### Step 1: Run Config-tool

Run installed **'Config-tool'**


### Step 2: Setup Modbus Poll & Slave

Modbus Poll & Slave 프로그램을 설정

  - Modbus Poll은 설정에 따라 Modbus TCP/IP 또는 Modbus UDP/IP로 연결됩니다.
  - Modbus Slave는 **시리얼 포트(Serial Port)**를 통해 연결됩니다.

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/setup_modbus_program.png) |
| Figure: **Setup Modbus Poll & Slave Program**                                                        |



### Step 3: Setup WIZ750SR Series through WIZnet S2E Configuration Tool for Modbus Connection

1. **Operation mode** 설정 영역에서 **TCP Server** 또는 **UDP** 모드를 선택합니다.

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/select_operation_mode.png) |
| Figure: **Select TCP Server or UDP mode**                                                        |

2. Modbus 옵션 설정

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/setup_modbus_option.png) |
| Figure: **Setup Setup Modbus Option**                                                        |

3. 설정을 저장하려면 **Apply Settings** 버튼을 클릭합니다.

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/apply_settings.png) |
| Figure: **Click Apply Settings button**                                                        |

|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/saved_settings.png) |
| Figure: **Saved settings**                                                        |




### Step 4: Done

WIZ750SR이 성공적으로 Modbus에 연결되었습니다!
|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz750sr-1xx/modbus-connection-guide/connect_modbus.png) |
| Figure: **connected to the Modbus**  


-----

