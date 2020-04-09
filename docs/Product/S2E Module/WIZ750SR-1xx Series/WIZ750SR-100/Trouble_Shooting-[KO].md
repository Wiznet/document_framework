---
id: trouble_shooting-[KO]
title: Trouble Shooting-[KO]
date: 2020-03-
---

## Content

# WIZ750SR Troubleshooting Guide

\*\* Supported Languages \*\*  
\* [English](/products/wiz750sr/troubleshooting/en)  
\* [Korean](/products/wiz750sr/troubleshooting/ko) (current page)

-----

  - 최종 업데이트: ***Jan. 2018***

-----

## 잘 알려진 내용

| Configuration Tool 관련 문제 |
| ------------------------ |

\++++ WIZ750SR 제품의 Configuration tool은 어디서 찾을 수 있나요? |

  - WIZ750SR은 WIZ107/108SR과 호환 되도록 제작된 제품입니다. 때문에 별도의 Configuration
    tool을 제공하지 않으며, WIZ107/107SR 제품의 Configuration tool로 제품의 설정을 수행 할
    수 있습니다.

<!-- end list -->

  - 최신 버전의 Configuration tool은 [다운로드
    페이지](/products/wiz750sr/download/start) 에서 찾을 수 있습니다.

\++++

\++++ 제품의 Search가 되지 않습니다. |

  - 제품의 전원 및 이더넷 케이블의 연결을 확인 바랍니다.

<!-- end list -->

  - PC에서 모듈로 Ping 요청과 응답이 정상적으로 수행 되는지 확인 부탁 드립니다.
      - Windows의 경우 다음과 같이 확인 할 수 있습니다.
        1.  실행 \> cmd 입력
        2.  ping 192.168.xxx.xxx (제품에 할당된 IP 입력)
        3.  응답 확인

|                                                         |
| ------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/windows_cmd.png) |
| Windows Run에서 'cmd' 커맨드 입력 실행                           |

|                                                            |
| ---------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/ping_success_0.png) |
| Ping request / reply 성공                                    |

|                                                           |
| --------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/ping_failed_0.png) |
| Ping request / reply 실패                                   |

  - WIZ750SR 제품의 설정 툴에서 제공하는 UDP Search 기능은 **UDP broadcast, 포트
    50001번**을 이용합니다. **OS의 방화벽**과 **백신 프로그램**을 해제 하신 후 다시 테스트 부탁
    드립니다. 

<!-- end list -->

  - 만약 UDP 포트 관련 문제 인 경우, OS의 인바운드 / 아웃바운드 포트 규칙 설정을 통해 Search 및 펌웨어
    업데이트용 포트 (UDP/TCP 50001, TCP 50002)를 열도록 설정 할 수 있습니다.

<!-- end list -->

  - 여러 개의 네트워크 어댑터를 사용하는 경우, 네트워크 인터페이스 메트릭(Metric) 우선 순위에 따라 패킷 전달에 오류가
    발생 할 수 있습니다. OS 설정에서 사용 중인 하나의 네트워크 어댑터를 제외한 나머지를 **비 활성화 후 다시 테스트**
    바랍니다.
      - 이러한 상황은 VMware 혹은 Virtual Box 등의 **가상머신(VM) 사용 시, VM의 네트워킹을 위해
        생성된 '가상 이더넷 어댑터'에 의해 발생** 할 수 있습니다.
        
        \++++

\++++ 제품의 설정 변경이 적용되지 않습니다. |

  - 설정을 변경 하신 후, Configuration tool 상단의 'Setting' 아이콘을 클릭하시면 제품의 재시작과 함께
    변경된 설정 내용이 적용됩니다.

|                                                       |
| ----------------------------------------------------- |
| ![](/products/wiz750sr/gettingstarted/configtool.png) |
| WIZ107/108SR & **WIZ750SR** Configuration Tool        |

\++++

\++++ 펌웨어 버전은 어떻게 확인 할 수 있습니까? |

1.  Configuration tool에서 'Search' 후, 왼쪽에 위치한 제품 MAC 주소의 '+' 아이콘을 클릭하여 제품
    정보 펼치기
2.  'Firmware version' 항목 확인

<!-- end list -->

  - 최신 펌웨어 버전은 [제품 업데이트 히스토리 페이지](/products/wiz750sr/history/ko)와 [다운로드
    페이지](/products/wiz750sr/download/start) 에서 확인 할 수 있습니다.

\++++

\++++ 펌웨어 업데이트에 실패합니다. |

  - WIZ750SR은 펌웨어 업데이트를 위한 TCP server가 별도로 내장되어 동작하고 있습니다.
      - TCP 포트: 50002

<!-- end list -->

  - PC에서 모듈로 Ping 요청과 응답이 정상적으로 수행 되는지 확인 부탁 드립니다.
      - Windows의 경우 다음과 같이 확인 할 수 있습니다.
        1.  실행 \> cmd 입력
        2.  ping 192.168.xxx.xxx (제품에 할당된 IP 입력)
        3.  응답 확인

|                                                         |
| ------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/windows_cmd.png) |
| Windows Run에서 'cmd' 커맨드 입력 실행                           |

|                                                            |
| ---------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/ping_success_0.png) |
| Ping request / reply 성공                                    |

|                                                           |
| --------------------------------------------------------- |
| ![](/products/wiz750sr/troubleshooting/ping_failed_0.png) |
| Ping request / reply 실패                                   |

  - 펌웨어 업데이트 시, Config-tool이 동작 중인 PC와 WIZ750SR 모듈의 IP 대역이 일치해야 합니다.
      - **DHCP 모드** (자동 IP 할당) 사용 시, PC와 제품이 동일한 공유기로부터 IP를 할당 받도록 구성
        바랍니다.
      - **Static 모드** (직접 IP 할당) 사용 시, 다음 예와 같이 설정 바랍니다.
          - 예) 제품의 IP 주소: 192.168.11.2
          - 예) PC의 IP 주소: 192.168.11.3 (동일한 Class C 사설 IP 대역의 다른 IP 주소)

\++++

| WIZ750SR 개발 보드(EVB) 관련 문제 |
| ------------------------- |

\++++ WIZ750SR 개발 보드의 시리얼 인터페이스를 PC와 연결하여 테스트 하려면 어떻게 해야하나요? |

  - WIZ750SR 개발 보드는 RS-232/TTL, RS-422/485의 두 가지 버전이 있으며, 각기 다른 시리얼
    인터페이스 커넥터로 구성되어 있습니다.

<!-- end list -->

  - **RS-232/TTL 버전**의 경우 **DB9 커넥터**를 제공합니다. PC의 시리얼 포트에 연결하거나 시중에 판매
    중인 RS-232 to USB 컨버터(\*별매)를 이용하여 연결 할 수 있습니다.

<!-- end list -->

  - **RS-422/485 버전**의 경우 **터미널 블록** 인터페이스를 제공합니다. 이는 사용자 시리얼 장치와의 직접
    연결을 위한 것으로써, 만약 PC에 연결하고자 하면 시중에 판매 중인 RS-422/485 to USB
    커넥터(\*별매)를 이용하여 연결 할 수 있습니다.

\++++

-----

## 문제를 해결 할 수 없습니다\!

\++++ 문제 해결 가이드를 통해 문제가 해결되지 않는 경우는 어떻게 해야 하나요? |

  - [위즈네트 포럼](https://forum.wiznet.io/)을 통해 빠르고 간단하게 기술 문의가 가능합니다.
      - <https://forum.wiznet.io/>

<!-- end list -->

  - 위즈네트의 모든 제품들을 구입 또는 사용하시는 경우 최초 구매일로부터 **1년간 보증**됩니다.
  - 제품 문의를 통해 문제가 해결되지 않는 경우, 제품을 구입하신 구매처 혹은 대리점을 통해 위즈네트 본사로 **RMA**를
    요청하여 주십시오.

\++++

-----

## Navigation

-----

\<WRAP group\> \<WRAP centeralign third column\>
[![arrow\_back.png](/etc/arrow_back.png)](/products/wiz750sr/commandmanual/ko)  
**Prev Page**  
[Device Command Manual](/products/wiz750sr/commandmanual/ko) \</WRAP\>

\<WRAP centeralign third column\>
[![arrow\_upward.png](/etc/arrow_upward.png)](#wiz750sr_troubleshooting_guide)  
**Scroll to Top** \</WRAP\>

\<WRAP centeralign third column\>
[![arrow\_forward.png](/etc/arrow_forward.png)](/products/wiz750sr/history/ko)  
**Next Page**  
[Update History](/products/wiz750sr/history/ko) \</WRAP\> \</WRAP\>

\<WRAP group\> \<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr/start)  
**Back to Product Main**  
[WIZ750SR](/products/wiz750sr/start) \</WRAP\>

\<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-100/start)  
**Back to Product Main**  
[WIZ750SR-100](/products/wiz750sr-100/start) \</WRAP\>

\<WRAP group\> \<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-105/start)  
**Back to Product Main**  
[WIZ750SR-105](/products/wiz750sr-105/start) \</WRAP\>

\<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-110/start)  
**Back to Product Main**  
[WIZ750SR-110](/products/wiz750sr-110/start) \</WRAP\>

-----

\<WRAP round box group\> \<WRAP half column\> \<WRAP centeralign\> \*\*
WIZ750SR series Common Documents \*\* \</WRAP\>

  - **[User's Manual](/products/wiz750sr/usermanual/ko)** 

<!-- end list -->

  - **[Device Command Manual](/products/wiz750sr/commandmanual/ko)**

<!-- end list -->

  - **[Troubleshooting Guide](/products/wiz750sr/troubleshooting/ko)**

<!-- end list -->

  - **[Update History](/products/wiz750sr/history/ko)**

-----

\<WRAP centeralign\> \*\* WIZ750SR series Downloads \*\* \</WRAP\>

  - **[Software Downloads](/products/wiz750sr/download/start)**

<!-- end list -->

  - **[Technical Reference](/products/wiz750sr/reference/start)**

\</WRAP\>


\<WRAP half column\> \<WRAP centeralign\> \*\* WIZ750SR Individual
documents \*\* \</WRAP\>

  - **[WIZ750SR Product Overview](/products/wiz750sr/overview/ko)**
  - **[WIZ750SR Getting Started
    Guide](/products/wiz750sr/gettingstarted/ko)**
  - **[WIZ750SR Datasheet](/products/wiz750sr/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-100 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-100 Product
    Overview](/products/wiz750sr-100/overview/ko)**
  - **[WIZ750SR-100 Getting Started
    Guide](/products/wiz750sr-100/gettingstarted/ko)**
  - **[WIZ750SR-100 Datasheet](/products/wiz750sr-100/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-105 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-105 Product
    Overview](/products/wiz750sr-105/overview/ko)**
  - **[WIZ750SR-105 Getting Started
    Guide](/products/wiz750sr-105/gettingstarted/ko)**
  - **[WIZ750SR-105 Datasheet](/products/wiz750sr-105/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-110 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-110 Product
    Overview](/products/wiz750sr-110/overview/ko)**
  - **[WIZ750SR-110 Getting Started
    Guide](/products/wiz750sr-110/gettingstarted/ko)**
  - **[WIZ750SR-110 Datasheet](/products/wiz750sr-110/datasheet/start)**

\</WRAP\> \</WRAP\> \</WRAP\> \</WRAP\>
