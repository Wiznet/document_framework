---
id: mqtt-connection-guide-kr
title: MQTT Connection Guide-[KR]
date: 2024-08-08
---



-----



## W232N MQTT 연결 개요

**W232N** 는 **MQTT client** 와 **MQTTS client** 모드를 지원합니다.



-----



## 필요한 하드웨어 및 소프트웨어



### 하드웨어


  - W232N
  - 5V~36V의 전원 어댑터
  - 데이터 케이블 (이더넷 / 시리얼)



### 소프트웨어

  - WIZnet S2E Configuration Tool 
    - [최신 버전 다운로드](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)
  - Mosquitto
	  - [Download Link](https://mosquitto.org/download/)



-----



## Mosquitto를 통한 MQTT Broker 연결 방법

W232N은 MQTT 클라이언트 모드와 MQTTS 클라이언트 모드를 지원하만, 본 문서는 MQTT 클라이언트 모드를 기준으로 Mosquitto를 통해 MQTT 브로커에 연결하는 방법을 안내합니다.

> **Note** : MQTTS 클라이언트 모드는 MQTT 클라이언트 모드와 달리 추가적인 보안 관련 설정이 필요합니다.



### 1단계: Config-tool 실행

설치된 **'Config-tool'** 실행




### 2단계: Mosquitto 설정

Mosquitto 버전에 따라 모스키토 설정이 필요할 수 있으므로 아래를 참조하여 설정하세요.

  - 2.0V 이전 버전에서는 클라이언트가 인증 없이 연결할 수 있도록 허용하는 것이 기본값입니다.
  - 2.0V 이상에서는 클라이언트가 연결하기 전에 인증 옵션을 명시적으로 선택해야 합니다.

따라서 버전 2.0 이상을 사용하는 경우, 다음 링크를 참조하여 Mosquitto가 설치된 디렉토리에 'mosquitto.conf'를 설정하세요.

  - [인증 방법](https://mosquitto.org/documentation/authentication-methods/)



### 3단계: Mosquitto를 통해 MQTT 브로커 실행하기

```bash
Ex>
mosquitto -c mosquitto.conf -p 1883 -v
```

|                                                                                                       |
| :---------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/run_mqtt_broker_through_mosquitto.png) |
| Figure: **Mosquitto를 통해 MQTT 브로커 실행**                                                         |



### 4단계: MQTT 브로커 연결을 위해 Config-Tool을 사용해 W232N을 설정하기

1. **Operation mode** 설정 섹션에서 **MQTT client** 모드를 선택합니다.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/select_mqtt_client_mode.png) |
| Figure: **MQTT client mode 선택**                                                         |

2. **Remote host / port** 설정 섹션에서 **remote host IP (or URL)** 와 **remote port** 를 설정합니다.

|                                                                                                          |
| :------------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/setup_remote_host_ip_and_remote_port.png) |
| Figure: **remote host IP 와 remote port 설정**                                                         |

3. MQTT options 설정

|                                                                                        |
| :------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/setup_mqtt_options.png) |
| Figure: **MQTT options 설정**                                                         |

4. **Apply Settings** 버튼을 눌러 세팅값 적용.

|                                                                                                 |
| :---------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/click_apply_settings_button.png) |
| Figure: **Apply Settings 클릭**                                                         |

|                                                                                    |
| :--------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/saved_settings.png) |
| Figure: **세팅값 저장**                                                         |



### 5단계: 완료

W232N이 MQTT 브로커에 성공적으로 연결되었습니다!

|                                                                            |
| :------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/status.png) |
| Figure: **Status**                                                         |

|                                                                                            |
| :----------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/connect_to_mqtt_broker.png) |
| Figure: **Connect to MQTT broker**                                                         |



-----
