---
id: developers_guide-KO
title: Developer's Guide-[KO]
date: 2020-04-08
---

**Supported Languages**  
[English](developers_guide-EN)  
[Korean](developers_guide-KO) (current page)

<a target="_blank" href={require("/img/products/wiz750sr/docs_icon.png").default}><img src={require("/img/products/wiz750sr/docs_icon.png").default} alt=""/></a>

-----

**이 문서는 WIZ750SR 하드웨어 혹은 소프트웨어를 기반으로 기능을 확장하는 등의 커스터마이징을 수행하려는 개발자들을 위해 제작되었습니다.**

-----

## WIZ750SR 개발 환경 구축

### Arm Keil® MDK-ARM

  - [Setting up a KEIL uvision5 Development Environment](mdk-arm)
      - 대표적인 Cortex-M 시리즈 개발 환경인 Arm KEIL uvision 5 개발 환경 구축 방법에 대해 소개합니다.

**StablE Contest 참가자를 위한 KEIL 라이선스 제공 안내**  
WIZnet에서는 Hackster.io에서 개최되는 [Serial to Ethernet, StablE](https://www.hackster.io/contests/wiznet) 컨테스트(2018 3/16 \~ 6/30) 참가자 중, 신청자를 대상으로 Arm에서 제공하는 Time-limited KEIL 라이선스를 발급해 드릴 예정입니다. 라이선스 신청 방법은 2018년 4월 중에 [CONTEST BRIEF](https://www.hackster.io/contests/wiznet)에 안내됩니다.

### Eclipse IDE with GNU Arm toolchain

  - [Setting up a Eclipse IDE Development Environment](/img/products/wiz750sr/developers/eclipse/en) 
      - 대중적인 무료 embedded 개발 환경인 Eclipse IDE와 GNU Arm toolchain으로 개발 환경을 구축하는 방법에 대해 소개합니다.
      - **곧 업데이트 될 예정입니다.**

-----

## WIZ750SR 복구 가이드

### Overview

WIZ750SR 제품의 펌웨어 소스코드는 [GitHub repository](https://github.com/Wiznet/WIZ750SR)를 통해 공개되어 있으며, [Apache License 2.0](https://github.com/Wiznet/WIZ750SR/blob/master/LICENSE)를 채택하고 있기 때문에 누구나 제약 없이 자유롭게 수정(이하 커스터마이징) 및 배포 할 수 있습니다. 본 문서에서는 이러한 커스터마이징 과정 중 겪을 수 있는 문제 상황에 대응하기 위한 방법 중 하나로, 펌웨어를 새롭게 업데이트하여 제품을 복구 할 수 있는 방법들에 대해 설명합니다.

사용자가 WIZ750SR 제품의 Configuration tool을 그대로 활용(Device Search / Setting / Update)하며 Application 영역만 커스터마이징 하고자 할 때는 Configuration tool의 'Network Firmware Update' 기능을 활용하여 수정된 Application을 제품에 업데이트하고 즉시 동작을 확인 할 수 있습니다. 이 때, 수정된 application 펌웨어의 동작에 문제가 발생하여 검색 기능 등이 동작하지 않는 경우에는 **AppBoot mode**를 활용하여 검색 및 복구가 가능합니다.

WIZ750SR의 하드웨어만 유지한 채, 내부 펌웨어 전체를 커스터마이징 할 경우에는 W7500/W7500P 칩의 **W7500x ISP Tool(WIZISP)**을 활용하면 Serial Port를 이용하여 제품 Code flash memory에 application binary를 직접 업데이트 할 수 있습니다. WIZ750SR-EVB는 MCU Boot mode 접근을 위한 Boot 스위치를 실장하고 있으며 EVB 측면에 위치한 Debug UART(Micro USB connector)를 통해 ISP(In-System Programming) 동작을 수행할 수 있습니다.

### Application Firmware Update in AppBoot mode

<details>
<summary>펼쳐보기</summary>

수정된 Application 펌웨어가 정상적으로 동작하지 않을 경우, WIZ750SR 제품을 AppBoot mode로 부팅하여
복구할 수 있습니다. AppBoot 영역은 WIZ750SR 장치 Application의 펌웨어 업데이트와 복구 등을
지원하기 위해 준비된 것으로, Code flash memory의 **초기 28KB 부분(0x0000\_0000 \~
0x0000\_6FFF)**에 위치하여 다음 기능을 수행할 수 있도록 디자인 되었습니다.

  - **Configuration tool을 이용한 장치 검색 기능**
  - **장치의 설정 값 변경 및 저장 기능**
      - Factory reset 기능 포함
  - **Application 영역 펌웨어의 네트워크 업데이트 기능**

따라서, 사용자 목적에 맞춰 수정된 Application 펌웨어에 오류가 있는 등의 이유로 인해 정상적인 동작이 이루어지지 않을
경우에도 AppBoot 모드를 활용하면 Configurtation tool로 제품을 검색하고 새로운 펌웨어를 업데이트 하는
것이 가능합니다. WIZ750SR-EVB를 활용할 경우, EVB 보드의 AppBoot 스위치를 'Boot'에 위치 시킨 후
Reboot를 수행하면 AppBoot 모드로 접근할 수 있습니다.

다음 단계를 따라 AppBoot mode를 이용한 네트워크 펌웨어 업데이트를 수행 할 수 있습니다. (WIZ750SR-EVB
Rev1.0 기준)

** 1. WIZ750SR을 AppBoot 모드로 전환 **

  - WIZ750SR-EVB의 'App\_Boot' 스위치를 'Boot'로 변경한 후 장치를 Reboot하면 AppBoot
    모드가 활성화 됩니다.
  - 성공적으로 AppBoot 모드가 활성화 되면 모듈의 Status LED가 빠르게 번갈아 점멸합니다.

<a target="_blank" href={require("/img/products/wiz750sr/developers/wiz750sr-evb-appboot-boxxx.png").default}><img src={require("/img/products/wiz750sr/developers/wiz750sr-evb-appboot-boxxx.png").default} alt=""/></a>

** 2. Configuration Tool을 이용하여 제품 검색 **

  - WIZnet-S2E-Tool-GUI(Configuration tool for WIZ750SR series)로 장치
    검색(Search)을 수행합니다.
  - Configuration tool을 이용한 장치의 검색과 펌웨어 업데이트는 TCP/IP 네트워크를 통해 이루어지므로,
    사용자 PC와 Device는 서로 네트워킹이 가능하여야 합니다.
  - 장치가 AppBoot 모드인 경우, 검색된 장치의 status가 'BOOT'로 표시됩니다.

<a target="_blank" href={require("/img/products/wiz750sr/developers/configtool-status-boot-box.png").default}><img src={require("/img/products/wiz750sr/developers/configtool-status-boot-box.png").default} alt=""/></a>

** 3. 장치에 새로운 펌웨어 업데이트 **

  - Configuration tool의 펌웨어 업데이트(Upload) 버튼을 눌러 새로운 펌웨어를 선택한 후 'Open'을
    누릅니다.
      - 최신 버전의 Configuration tool은 [WIZnet-S2E-Tool-GUI GitHub
        repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)에서
        다운로드 할 수 있습니다.
  - 해당 과정은 일반적인 application 펌웨어 업데이트 과정과 동일합니다.

** 4. 장치를 Application 동작 모드로 전환 **

  - WIZ750SR-EVB의 'App\_Boot' 스위치를 'Normal'로 변경한 후 장치를 Reboot합니다.
  - 이제 사용자의 application 펌웨어가 동작하는 것을 확인할 수 있습니다.

</details>

### Flash Programming using WIZISP Tool

<details>
<summary>펼쳐보기</summary>

사용자는 ISP Tool을 사용하여 WIZ750SR의 전체(App+Boot) 펌웨어 업데이트를 진행할 수 있습니다.

:::note
[Go to ISP tool manual & Program download](/img/products/w7500/documents/appnote/isptool)  
:::

먼저, Micro USB type B 케이블을 이용하여 PC와 장치를 연결합니다.

장치관리자를 열어 인식된 시리얼 포트 번호를 확인합니다.  
('Silicon Labs CP210x USB to UART Bridge(COMX)')

<a target="_blank" href={require("/img/products/wiz750sr/developerguide/dev_manager.png").default}><img src={require("/img/products/wiz750sr/developerguide/dev_manager.png").default} alt="장치관리자 포트 확인"/></a>

:::note
디바이스 드라이버가 자동으로 설치되지 않는 경우 아래 링크에서 테스트
환경에 맞는 드라이버를 다운받아 설치합니다.

[CP210x Driver download page](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
:::

**1. WIZ750SR을 Boot 모드로 전환**

\- WIZ750SR-EVB의 'Boot' 스위치를 'Boot'로 변경한 후 장치를 Reboot하면 Boot 모드로 전환됩니다.
Boot 모드 활성화 상태에서는 모듈의 Link LED(blue)가 꺼집니다.

<a target="_blank" href={require("/img/products/wiz750sr/developerguide/boot_sw.png").default}><img src={require("/img/products/wiz750sr/developerguide/boot_sw.png").default} alt=""/></a>

**2. 펌웨어 업데이트**

W7500 ISP 프로그램을 실행합니다.

  - 'Step 1 - Serial Option' 부분의 시리얼 포트와 Baud rate를 설정합니다. (default:
    115200)
  - 'Open' 버튼을 클릭하여 포트를 오픈하고, 하단 상태 바의 Serial open complete 메시지를 확인합니다.

<a target="_blank" href={require("/img/products/wiz750sr/developers/fwupdate-wizisp/isp_tool-1-201807.png").default}><img src={require("/img/products/wiz750sr/developers/fwupdate-wizisp/isp_tool-1-201807.png").default} alt=""/></a>

  - **'Step 2 - Erase' 설정에서 'Erase All Code Memory'을 선택합니다.**

<a target="_blank" href={require("/img/products/wiz750sr/developers/fwupdate-wizisp/isp_tool-2-201807.png").default}><img src={require("/img/products/wiz750sr/developers/fwupdate-wizisp/isp_tool-2-201807.png").default} alt=""/></a>

:::note
**'Erase All Data/Code Memory' 옵션으로
진행할 경우 Mac address를 포함한 모든 데이터가 초기화됩니다.**
:::

  - Browse 버튼을 눌러 업데이트 할 바이너리 파일을 선택합니다.
  - ISP Start 버튼을 눌러 firmware writing을 시작합니다.

<a target="_blank" href={require("/img/products/wiz750sr/developerguide/processing.png").default}><img src={require("/img/products/wiz750sr/developerguide/processing.png").default} alt=""/></a>

  - 펌웨어 업데이트가 완료되면 Download Complete라는 메시지와 함께 팝업창이 나타납니다.

<a target="_blank" href={require("/img/products/wiz750sr/developerguide/complete.png").default}><img src={require("/img/products/wiz750sr/developerguide/complete.png").default} alt=""/></a>

업데이트가 완료되면 Link LED가 켜집니다.

'Boot' 스위치를 'Normal'로 변경한 후 Reboot 하여 펌웨어 업데이트를 완료합니다.

</details>

### How to re-enter the MAC address on your devices

<details>
<summary>펼쳐보기</summary>

만약 실수로 WIZISP 프로그램을 이용한 펌웨어 프로그래밍 중 'Erase Data Block All Code Block'
Erase 옵션이 선택된 경우, Data flash block에 위치한 MAC 주소 및 제품 설정 정보가 삭제됩니다. 이 때,
MAC 주소는 다음 과정을 통해 재입력 할 수 있습니다.

:::note
<a href="/img/products/wiz750sr/developers/restore-mac/wizmactool_v20151127.zip" target="_blank">Download the WizMACTool Program</a>  
:::

MAC 주소 재 입력 과정은 WIZ750SR의 Debug UART (ISP port)를 통해 이루어집니다. 따라서 Windows
장치관리자를 통해 'Silicon Labs CP210x USB to UART Bridge (COMX)'의 COM port
번호를 확인하시기 바랍니다.

<a target="_blank" href={require("/img/products/wiz750sr/developerguide/isptool/en_device_manager.png").default}><img src={require("/img/products/wiz750sr/developerguide/isptool/en_device_manager.png").default} alt="Device Manager"/></a>

:::note
디바이스 드라이버가 자동으로 설치되지 않는 경우 아래 링크에서 테스트
환경에 맞는 드라이버를 다운받아 설치합니다. [CP210x Driver download
page](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
:::

**1. WIZ750SR을 Normal 모드로 전환**

  - WIZ750SR-EVB의 모든 slide switch를 'normal'로 변경 한 후 장치를 Reboot 합니다.

<a target="_blank" href={require("/img/products/wiz750sr/developers/restore-mac/wiz750sr-evb-switch_normal.png").default}><img src={require("/img/products/wiz750sr/developers/restore-mac/wiz750sr-evb-switch_normal.png").default} alt=""/></a>

**2. WizMACTool 프로그램 실행**

**3. 아래와 같이 프로그램 설정**

  - 확인한 시리얼 설정 적용(baud rate: 115200) 후 Open 버튼을 눌러 포트 오픈
  - 제품에 입력할 MAC 주소를 colon(:)과 함께 입력
  - 'For Writing WIZ107SR MAC' 옵션 체크(WIZ750SR과 호환)

<a target="_blank" href={require("/img/products/wiz750sr/developers/restore-mac/wiz750sr-wizmactool-1.png").default}><img src={require("/img/products/wiz750sr/developers/restore-mac/wiz750sr-wizmactool-1.png").default} alt=""/></a>

**4. 'Write MAC' 버튼을 눌러 입력**

**5. 완료**

  - MAC 주소가 성공적으로 입력될 경우, 하단 Serial terminal을 통해 장치에 입력된 MAC 주소 정보를 확인 할
    수 있습니다.

<a target="_blank" href={require("/img/products/wiz750sr/developers/restore-mac/wiz750sr-wizmactool-2.png").default}><img src={require("/img/products/wiz750sr/developers/restore-mac/wiz750sr-wizmactool-2.png").default} alt=""/></a>

</details>

-----

**동작에 문제가 있나요?**  
**[Troubleshooting 가이드](trouble_shooting-KO)** 문서를 참고해 보세요

-----
