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



## MQTT를 이용하여 AWS에 연결하는 방법

### 1단계: AWS에서 Thing 및 정책 생성 및 인증서 다운로드

1. AWS 서비스를 사용하려면 먼저 로그인해야 합니다. 아래 링크를 클릭하여 로그인 페이지로 이동하세요.

**[AWS 로그인 페이지](https://aws.amazon.com/console/)**

<br />
<br />


2. 로그인 후 검색 창에서 "IoT 콘솔"을 검색하고 클릭하세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/1_aws_iot_core.png" width="600" /> |
| 그림: **"IoT 콘솔" 검색**                                                         |

<br />
<br />

2. 왼쪽의 "Things" 탭을 클릭한 다음 오렌지색 "Create things" 버튼을 누르세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/2_aws_creating_thing.png" width="600" /> |
| 그림: **"Things 생성" 클릭**                                                         |

<br />
<br />


3. "Create single thing"을 선택하고 다음 버튼을 누르세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/3_aws_creating_thing.png" width="600" /> |
| 그림: **"Create things" 검색**                                                         |

<br />
<br />


4. "Thing name"을 입력하고 다음 버튼을 누르세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/4_aws_creating_thing.png" width="600" /> |
| 그림: **"Thing name" 입력**                                                         |

<br />
<br />


5. "Auto-generate a new certificate (recommended)"을 선택하고 다음 버튼을 누르세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/5_aws_creating_thing.png" width="600" /> |
| 그림: **"Auto-generate a new certificate" 선택 후 "Next"클릭**                                                         |

<br />
<br />


6. 다음으로, Thing의 보안을 위한 정책을 생성해야 합니다. "Create policy"를 클릭하세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/6_aws_creating_policy.png" width="600" /> |
| 그림: **"Create policy" 클릭**                                                         |

<br />
<br />


7. 정책의 이름을 설정하고 그림과 같이 Policy Document를 구성한 후 생성 버튼을 누르세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/7_aws_creating_policy.png" width="600" /> |
| 그림: **정책 정보 설정**                                                         |

<br />
<br />


8. 이전에 열었던 "Create single thing" 페이지로 돌아가서 "Create thing" 버튼을 누르세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/8_aws_combine_policy.png" width="600" /> |
| 그림: **"Create thing" 버튼 누르기**                                                         |

<br />
<br />


9. 모든 Key 및 인증서를 다운로드하세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/9_aws_downloading_cert_key.png" width="600" /> |
| 그림: **모든 Key 및 인증서 다운로드**                                                         |

<br />
<br />
<br />
<br />

### 2단계: S2E 모듈에 인증서 입력

1. AWS에서 MQTT 테스트 클라이언트 탭을 입력하고 엔드포인트를 복사하세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/10_aws_copy_endpoint.png" width="600" /> |
| 그림: **Endpoint 복사**                                                         |

<br />
<br />

2. Config-tool을 켜서 장치를 검색하고 다음과 같이 "Basic settings" 탭을 설정하세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/1_device_search.png" width="600" /> |
| 그림: **Config-tool을의 "Basic settings" 탭 설정**                                                         |

<br />
<br />

3. 다음과 같이 "MQTT options" 탭을 설정하세요.

- MQTT Topics Section
  - **Publish Topic:** $aws/things/my_w232n_thing/shadow/update
  - **Subscribe Topic:** $aws/things/my_w232n_thing/shadow/update/accepted

- MQTT Options
  - **Client ID:** my_w232n_thing
  - **Keep-Alive:** 60
  - **QoS:** QoS 0

- Remote Host / Port
  - **Remote Host:** 복사한 엔드포인트 붙여넣기  
  - **Remote Port:** 8883

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/2_MQTT_option.png" width="600" /> |
| 그림: **"MQTT options" 설정**                                                         |

<br />
<br />


4. Certificate Manager 탭으로 가서 아래 그림과 같이 Root CA 섹션을 조정하세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/3_MQTT_cert_key.png" width="600" /> |
| 그림: **Root CA 섹션 조정**                                                         |

<br />
<br />

5. "Load file"을 눌러 다음 인증서 및 키 파일을 로드하세요:

- **Root CA** : AmazonRootCA1.pem
- **Client Certificate** : xxxxx-certificate.pem.crt
- **Private Key** : xxxxx-private.pem.key

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/4_MQTT_cert_key.png" width="600" /> |
| 그림: **인증서 및 키 파일 로드**                                                         |

<br />
<br />

6. 표시한 "Save to device" 버튼을 각각 누르세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/5_MQTT_cert_key.png" width="600" /> |
| 그림: **인증서 및 키 파일 저장**                                                         |

<br />
<br />

7. "Apply settings"을 누르세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/6_MQTT_cert_key.png" width="600" /> |
| 그림: **"Apply settings" 누르기**                                                         |

<br />
<br />
<br />
<br />


### 3단계: 실행 (Subscribe)

1. AWS IoT 콘솔 페이지로 돌아가서 "Test" 섹션 아래의 "MQTT test client"를 클릭하여 들어갑니다. 그런 다음 구성 도구의 MQTT Topics Section에서 Publish Topic **$aws/things/my_w232n_thing/shadow/update**를 "Topic filter"에 입력하고 Subscribe 버튼을 누르세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/1_aws_sub_topic.png" width="600" /> |
| 그림: **주제 구독**                                                         |

<br />
<br />

2. 디바이스의 시리얼포트를 터미널 도구를 사용하여 열고 데이터를 전송하세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/2_aws_sub_topic.png" width="600" /> |
| 그림: **데이터 전송**                                                         |

<br />
<br />

3. 이렇게 하면 AWS와의 MQTT 통신이 올바르게 작동하는지 확인할 수 있습니다.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/3_aws_sub_topic.png" width="600" /> |
| 그림: **AWS와의 성공적인 MQTT 통신**                                                         |

<br />
<br />
<br />
<br />

### 4단계: 실행 (Publish)

1. AWS IoT 콘솔 페이지로 돌아가서 "Test" 섹션 아래의 "MQTT test client"를 클릭합니다. 그런 다음 구성 도구의 MQTT Topics Section에서 Subscribe Topic $aws/things/my_w232n_thing/shadow/update/accepted를 "Topic name"에 입력하고 Publish 버튼을 누르세요.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/4_aws_pub_topic.png" width="600" /> |
| 그림: **주제에 게시**                                                         |

<br />
<br />

2. 시리얼 창에서 AWS에서 보낸 데이터를 확인할 수 있습니다.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/5_aws_pub_topic.png" width="600" /> |
| 그림: **AWS와의 성공적인 MQTT 통신**         |
