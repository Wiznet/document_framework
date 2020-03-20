# ST AZURE Dashboard 가이드

## 목차

-   [시작하기 전에](#Prerequisites)
-   [소개](#Introduction)
-   [ST AZURE Dashboard 기능 설명](#FunctionExamplanation)

<a name="Prerequisites"></a>
## 시작하기 전에

> * 하드웨어 설정과 개발환경 구축은 **[WIZnet IoT Shield(WIoT-QC01)와 STM32L496 Nucleo-144를 이용한 X-CUBE-AZURE SDK 개발 환경 구축][nucleo-stm32l496_azure-st-sdk]** 문서에 상세히 설명되어 있습니다.
>
> * Cat.M1과 같은 Cellular IoT 디바이스는 통신 서비스 사업자의 운영 기준 및 규정에 따라 모듈 펌웨어 및 동작 방식에 차이가 있을 수 있습니다. 본 문서는 한국 **[SK Telecom Cat.M1 서비스](https://www.sktiot.com/iot/developer/guide/guide/catM1/menu_05/page_01)** 를 기준으로 작성되었습니다.


<a name="Introduction"></a>
## 소개

이 문서는 X-CUBE-AZURE SDK 기반 디바이스와 ST AZURE Dashboard를 연동하기위한 절차를 설명하며, 아래 그림에서 ST AZURE Dashboard를 설명합니다.

![][st-azure-sdk-outline]

각 과정에는 다음 내용들이 포함되어 있습니다.
- ST AZURE Dashboard 접속 및 회원가입
- X-CUBE-AZURE SDK 기반 디바이스 등록
- 디바이스가 보낸 데이터 확인

<a name="FunctionExamplanation"></a>
## ST AZURE Dashboard 기능 설명

### 1) ST AZURE Dashboard 접속
해당 [링크](https://stm32ode-v2.azurewebsites.net)를 접속하면 다음과 같이 ST AZURE Dashboard 홈페이지에 접속할 수 있습니다.

![][1]

### 2) 회원가입 및 로그인
좌측 메뉴의 `Sign-Up`을 클릭하여 회원가입을 한 후, 로그인을 합니다.

![][2]

### 3) 디바이스 등록
디바이스를 등록하기 위해 메뉴의 `Devices`를 클릭하고 `+`버튼을 클릭합니다.
![][3]

`DeviceID`는 **[WIZnet IoT Shield(WIoT-QC01)와 STM32L496 Nucleo-144를 이용한 X-CUBE-AZURE SDK 개발 환경 구축][nucleo-stm32l496_azure-st-sdk]** 가이드에서 확인한 12자리 문자로 구성된 값을 입력합니다.
Device Type은 `Auto-provisioned`로 선택하여 `SUBMIT`버튼을 클릭합니다.
![][4]

정상적으로 디바이스가 등록되고, Cat.M1 디바이스가 ST AZURE Dashboard와 연결되면 해당 디바이스의 상태가 `Connected`로 변경됩니다.

![][5]
### 4) 데이터 확인
데이터를 확인 하기 위해 메뉴의 `Telemetry`을 클릭하고, 데이터를 조회할 디바이스, 데이터, 조회 기간을 선택하신 후 오른쪽 화실표를 클릭하시면, 하단에 그래프가 출력되는 것을 확인 할 수 있습니다.

본 예제는 온도데이터를 실시간으로 선택한 화면 입니다.
![][6]

이와 같이 ST AZURE Dashboard에 X-CUBE-AZURE SDK 기반 디바이스를 등록하고 디바이스가 보낸 데이터를 확인하는 방법을 알아보았습니다.

<a name="ReadMore"></a>
## 더 보기
* [WIZnet IoT Shield(WIoT-QC01)와 STM32L496 Nucleo-144를 이용한 X-CUBE-AZURE SDK 개발 환경 구축][nucleo-stm32l496_azure-st-sdk]
* [Raspberry Pi를 이용한 X-CUBE-AZURE SDK 개발 환경 구축][raspberrypi-azure-c-sdk]


[nucleo-stm32l496_azure-st-sdk]: ../IoT_device/Connectivities/LTE/Cat.M1/nucleo_stm32l496_azure_st_sdk_bg96.md
[raspberrypi-azure-c-sdk]: ../IoT_device/Connectivities/LTE/Cat.M1/raspberrypi_azure_c_sdk.md

[st-azure-sdk-outline]: ../../images/st-azure-sdk-outline.PNG "ST AZURE SDK 개요도"

[1]: ../../images/st-azure-dashboard-1.PNG "ST AZURE Dashboard 접속 화면"
[2]: ../../images/st-azure-dashboard-2.PNG "회원가입 및 로그인 화면"
[3]: ../../images/st-azure-dashboard-3.PNG "디바이스 등록 화면 (1)"
[4]: ../../images/st-azure-dashboard-4.PNG "디바이스 등록 화면 (2)"
[5]: ../../images/st-azure-dashboard-5.PNG "디바이스 등록 및 연결 확인 화면"
[6]: ../../images/st-azure-dashboard-6.PNG "데이터 확인 화면"