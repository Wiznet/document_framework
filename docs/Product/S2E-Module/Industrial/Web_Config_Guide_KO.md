---
id: Web_Config_Guide_KO
title: Web Server Configuration Guide-[KO]
date: 2024-07-30
---







## 개요

본 문서는 산업용 Ethernet to RS232 데이터 변환 디바이스인 W232N의 웹서버 Config 가이드입니다.

-----

## 필요한 하드웨어 및 소프트웨어


### 하드웨어

  - 웹 서버 Config 지원 디바이스 목록
    - W232N

### 소프트웨어  

  - WIZnet S2E Configuration Tool 
    - [최신 버전 다운로드](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)



## 웹 서버를 이용하여 W232N을 설정하는 방법



### 1 단계 : PC와 같은 범위의 IP로 S2E를 설정하세요.

W232N에 전원과 이더넷 케이블을 연결한 후, 위의 '소프트웨어' 섹션에서 다운로드한 Configuration Tool을 실행하세요. 그런 다음, 아래 그림에 표시된 순서대로 버튼을 클릭하여 IP 대역을 사용자의 PC와 동일하게 설정하세요.

<img src="/img/products/wiz750sr/webserver_config_1.png" width="600" /><br /><br />



### 2 단계 : W232N 설정을 위한 웹 서버 접속

웹 브라우저(예: 크롬)를 사용하여 설정한 S2E 모듈 주소의 **50003** 포트에 접속하세요.


<img src="/img/products/wiz750sr/webserver_config_2.png" width="600" /><br /><br />

|                                                                                            

### 3 단계 : W232N 설정을 위한 웹 서버 구성 알아보기

(1) 모듈 정보 불러오기

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_3.png" width="600" /> |
| 그림: **"Get Settings" 버튼을 클릭하여 W232N에서 정보를 불러오세요.**                                                        |

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
| 그림: **W232N의 네트워크 정보를 설정하는 필드입니다.**                                                        |

<br />
<br />

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_6.png" width="600" /> |
| 그림: **W232N의 Operation Mode와 포트를 설정하는 필드입니다.**                                                        |

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
(3) 변경된 W232N의 정보를 저장하기

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_8.png" width="600" /> |
| 그림: **"Set Settings" 버튼을 클릭하여 변경된 W232N의 정보를 저장하세요.**                                                        |
