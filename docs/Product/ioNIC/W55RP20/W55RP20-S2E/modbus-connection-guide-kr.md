---
id: modbus-connection-guide-kr
title: Modbus Connection Guide-[KR]
date: 2024-08-09
---





-----



## W232N Modbus 연결 개요

**W232N**는 **Modbus TCP server/UDP** 와 **Modbus RTU/ASCII** 사이의 프로토콜 변환 기능을 지원합니다.


-----



## 필요한 하드웨어 및 소프트웨어



### 하드웨어


  - W232N
  - 5~36V 전원 어댑터
  - 케이블 (이더넷 / 시리얼)



### 소프트웨어

  - WIZnet S2E Configuration Tool 
  > **Note** : Modbus protocol은 WIZnet-S2E-Tool-GUI 1.5.5 버전 이상이 필요합니다.
	- [Download the Latest Version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
  - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)
  - Modbus Poll & Slave:
	- [Download Link](https://www.modbustools.com/download.html)



-----



## Modbus 연결하는 법




### 1단계: Config-tool 실행

설치된 **'Config-tool'** 실행


### 2단계: Modbus Poll & Slave 설정

Modbus Poll & Slave 프로그램을 세팅합니다.

  - Modbus Poll은 설정에 따라 모드버스 TCP/IP 또는 모드버스 UDP/IP를 통해 연결됩니다.
  - Modbus Slave는 직렬 포트를 통해 연결됩니다.

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/setup_modbus_program.png) |
| Figure: **Setup Modbus Poll & Slave Program**                                                        |



### 3단계: Modbus 연결을 위해 W232N를 WIZnet S2E Configuration Tool로 세팅하기

1. **Operation mode**섹선에 있는 **TCP Server** 혹은 **UDP** 모드를 설정합니다.

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/select_operation_mode.png) |
| Figure: **Select TCP Server or UDP mode**                                                        |

2. Modbus 옵션을 설정합니다.

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/setup_modbus_option.png) |
| Figure: **Setup Setup Modbus Option**                                                        |

3. **Apply Settings**을 눌러서 세팅을 저장합니다.

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/apply_settings.png) |
| Figure: **Click Apply Settings button**                                                        |

|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/saved_settings.png) |
| Figure: **Saved settings**                                                        |




### 4단계: 완료

W232N가 모드버스에 성공적으로 연결되었습니다!
|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/connect_modbus.png) |
| Figure: **connected to the Modbus**  


-----

