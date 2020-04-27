---
id: developers_guide-[KO]
title: Developer's Guide-[KO]
date: 2020-04-09
---

## Content

# WIZ750SR Developer's Guide

 **Supported Languages**  
 * [English](Developer's_Guide-[EN].md)  
 * [Korean](Developer's_Guide-[KO].md) (current page)

![](/products/wiz750sr/docs_icon.png)

-----

\*\* \* 이 문서는 WIZ750SR 하드웨어 혹은 소프트웨어를 기반으로 기능을 확장하는 등의 커스터마이징을 수행하려는
개발자들을 위해 제작되었습니다. \*\*

-----

## WIZ750SR 개발 환경 구축

### Arm Keil® MDK-ARM

  - [Setting up a KEIL uvision5 Development
    Environment](/products/wiz750sr/developers/mdk-arm/en)
      - 대표적인 Cortex-M 시리즈 개발 환경인 Arm KEIL uvision 5 개발 환경 구축 방법에 대해
        소개합니다.

\<WRAP center round info 90% centeralign\> **StablE Contest 참가자를 위한 KEIL
라이선스 제공 안내**  
\* WIZnet에서는 Hackster.io에서 개최되는 [Serial to Ethernet,
StablE](https://www.hackster.io/contests/wiznet) 컨테스트(2018 3/16 \~ 6/30)
참가자 중, 신청자를 대상으로 Arm에서 제공하는 Time-limited KEIL 라이선스를 발급해 드릴 예정입니다.  
\* 라이선스 신청 방법은 2018년 4월 중에 [CONTEST
BRIEF](https://www.hackster.io/contests/wiznet)에 안내됩니다. \</WRAP\>

### Eclipse IDE with GNU Arm toolchain

  - [Setting up a Eclipse IDE Development
    Environment](/products/wiz750sr/developers/eclipse/en) 
      - 대중적인 무료 embedded 개발 환경인 Eclipse IDE와 GNU Arm toolchain으로 개발 환경을
        구축하는 방법에 대해 소개합니다.
      - \*\* 곧 업데이트 될 예정입니다. \*\*

-----

## WIZ750SR 복구 가이드

### Overview

WIZ750SR 제품의 펌웨어 소스코드는 [GitHub
repository](https://github.com/Wiznet/WIZ750SR)를 통해 공개되어 있으며, [Apache
License 2.0](https://github.com/Wiznet/WIZ750SR/blob/master/LICENSE)를
채택하고 있기 때문에 누구나 제약 없이 자유롭게 수정(이하 커스터마이징) 및 배포 할 수 있습니다. 본 문서에서는
이러한 커스터마이징 과정 중 겪을 수 있는 문제 상황에 대응하기 위한 방법 중 하나로, 펌웨어를 새롭게 업데이트하여
제품을 복구 할 수 있는 방법들에 대해 설명합니다.

사용자가 WIZ750SR 제품의 Configuration tool을 그대로 활용(Device Search / Setting /
Update)하며 Application 영역만 커스터마이징 하고자 할 때는 Configuration tool의 'Network
Firmware Update' 기능을 활용하여 수정된 Application을 제품에 업데이트하고 즉시 동작을 확인 할 수
있습니다. 이 때, 수정된 application 펌웨어의 동작에 문제가 발생하여 검색 기능 등이 동작하지 않는
경우에는 **AppBoot mode**를 활용하여 검색 및 복구가 가능합니다.

WIZ750SR의 하드웨어만 유지한 채, 내부 펌웨어 전체를 커스터마이징 할 경우에는 W7500/W7500P 칩의 **W7500x
ISP Tool(WIZISP)**을 활용하면 Serial Port를 이용하여 제품 Code flash memory에
application binary를 직접 업데이트 할 수 있습니다. WIZ750SR-EVB는 MCU Boot mode 접근을 위한
Boot 스위치를 실장하고 있으며 EVB 측면에 위치한 Debug UART(Micro USB connector)를 통해
ISP(In-System Programming) 동작을 수행할 수 있습니다.

### Application Firmware Update in AppBoot mode

\++++ 펼쳐보기 |

![ko\&inline](/page\>products/wiz750sr/developers/fwupdate-appboot/ko&inline)

\++++

### Flash Programming using WIZISP Tool

\++++ 펼쳐보기 |

![ko\&inline](/page\>products/wiz750sr/developers/fwupdate-wizisp/ko&inline)

\++++

### How to re-enter the MAC address on your devices

++++ 펼쳐보기 |

![ko\&inline](/page\>products/wiz750sr/developers/restore-mac/ko&inline)

++++

-----

\<WRAP center round tip 80% centeralign\> **동작에 문제가 있나요?**  
**[Troubleshooting 가이드](/products/wiz750sr/troubleshooting/ko)** 문서를 참고해
보세요\! \</WRAP\>

-----
