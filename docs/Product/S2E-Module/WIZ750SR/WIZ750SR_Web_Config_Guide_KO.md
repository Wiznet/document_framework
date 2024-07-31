---
id: WIZ750SR_Web_Config_Guide_KO
title: WIZ750SR Web Server Configuration Guide-[KO]
date: 2024-07-30
---





-----



## 웹 서버를 이용한 WIZ750SR 설정 개요

**WIZ750SR**은 **웹 서버를 이용하여 WIZ750SR 설정**이 가능합니다.
  > **Note** : 
이 기능은 F/W 버전 1.4.0부터 사용 가능합니다. **Search identification code**가 설정되어 있으면 웹 서버를 이용한 WIZ750SR 설정이 작동하지 않습니다.
 



-----



## 필요한 하드웨어 및 소프트웨어



### 하드웨어

  - WIZ750SR
    - [WIZ750SR](./WIZ750SR/WIZ750SR.md)


### 소프트웨어
  
  - F/W
    - [F/W Ver 1.4.0 다운로드 링크](https://github.com/Wiznet/WIZ750SR/releases/tag/v1.4.0)
  > **Note** : 1.4.0 버전 이하에서는 웹 서버를 이용한 WIZ750SR 설정을 지원하지 않습니다. 반드시 **1.4.0 버전**을 다운로드하십시오.


### Configuration Tool

  - WIZnet S2E Configuration Tool 
    - [최신 버전 다운로드](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
      - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)
    > **Note** : 펌웨어 업데이트를 위한 configuration tool이 필요합니다.


-----



## 웹 서버를 이용하여 WIZ750SR을 설정하는 방법



### 1 단계 : PC와 같은 범위의 IP로 S2E를 설정하세요.

WIZ750SR에 전원과 이더넷 케이블을 연결한 후, 위의 '소프트웨어' 섹션에서 다운로드한 Configuration Tool을 실행하세요. 그런 다음, 아래 그림에 표시된 순서대로 버튼을 클릭하여 IP 대역을 사용자의 PC와 동일하게 설정하세요.

<img src="/img/products/wiz750sr/webserver_config_1.png" width="600" /><br /><br />



### 2 단계 : WIZ750SR 설정을 위한 웹 서버 접속

웹 브라우저(예: 크롬)를 사용하여 설정한 S2E 모듈 주소의 **50003** 포트에 접속하세요.


<img src="/img/products/wiz750sr/webserver_config_2.png" width="600" /><br /><br />

|                                                                                            

### 3 단계 3 : WIZ750SR 설정을 위한 웹 서버 구성 알아보기

(1) 모듈 정보 불러오기

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_3.png" width="600" /> |
| 그림: **"Het Settings" 버튼을 클릭하여 WIZ750SR에서 정보를 불러오세요.**                                                        |

<br />
<br />
<br />
<br />

(2) 설정 필드 설명

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_4.png" width="600" /> |
| 그림: **디바이스 이름을 설정하는 필드입니다.**                                                        |

<br />
<br />

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_5.png" width="600" /> |
| 그림: **WIZ750SR의 네트워크 정보를 설정하는 필드입니다.**                                                        |

<br />
<br />

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_6.png" width="600" /> |
| 그림: **WIZ750SR의 Operation Mode와 포트를 설정하는 필드입니다.**                                                        |

<br />
<br />

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_7.png" width="600" /> |
| 그림: **UART를 설정하는 필드입니다.**                                                        |

<br />
<br />
<br />
<br />
(3) 변경된 WIZ750SR의 정보를 저장하기

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_8.png" width="600" /> |
| 그림: **"Get Settings" 버튼을 클릭하여 변경된 WIZ750SR의 정보를 저장하세요.**                                                        |
