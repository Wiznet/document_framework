---
id: getting_started_guide_kor
title: Getting Started Guide(Kor)
date: 2020-04-13
---


## Content
# Getting Started Guide with WIZ550web

WIZ550web은 WIZnet W5500 Hardwired TCP/IP 칩을 기반으로 한 임베디드 웹 서버 모듈로써, 웹을 통해
16개의 Configurable Digital I/O와 4개의 ADC Input을 제어 및 모니터링 할 수 있도록 구성되어 있다.
또한 사용자의 목적에 따라 웹 페이지 및 제품 코드의 간단한 수정으로 웹 서버 응용을 구현할 수 있다.  
**이 페이지에서는 다음 내용에 대해 설명한다.**

  - **Product Preview**
  - **Hello world**
      - Product contents
      - SD card initialization
      - Data flash initialization
      - Serial debug message
  - **WIZ550web에 탑재된 Web Server의 기본 동작과 CGI**
  - **Basic Demo Webpage의 구성**
  - **WIZ550web Customizing을 돕기 위한 I/O 제어 예제**

![](/document_framework/img/products/wiz550web/wiz550web_front.png)

**WIZ550web GitHub Repository에서 다음 항목을 자유롭게 Download 할 수 있다.**

  - Firmware source code (The projects for Eclipse IDE)
      - Application / Boot
  - Demo webpage

 **WIZ550web GitHub Repository**

<https://github.com/Wiznet/WIZ550web>

 **WIZ550web GitHub Page**

<http://wiznet.github.io/WIZ550web> 

**개발 환경**

  - Eclipse IDE for C/C++ Developers, Kepler Service Release 2
  - ARM GCC 4.8.3 (2014q1)

## Product Preview

-----

![](/document_framework/img/products/wiz550web/wiz550webgsg/wiz550web_product_preview.png)

## Hello world

-----

### Product Contents

#### Ordering Part No: WIZ550web

  - WIZ550web module x 1

#### Ordering Part No: WIZ550web-EVB

  - WIZ550web module x 1
  - WIZ550web baseboard x 1
  - LAN cable x 1
  - Serial cable x 1
  - 12V Power adapter x 1
   **WIZ550web module 및
EVB는 SD card를 함께 제공한다.**
![](/products/wiz550web/sdcard/sandisk-4gb-micro-sd-memory-card.mobiles_productpage.left.png)
\* Sandisk 4GB microSD card를 제공하며, 제조사의 사정에 따라 동일한 품질의 다른 제품으로 제공 될 수
있다.

만약 다른 SD card를 사용 할 경우, list up 된 SD card를 사용할 것을 권장한다.

| Vendor    | Capacity(Bytes) | Type | Class |
| --------- | --------------- | ---- | ----- |
| Sandisk   | 2G              | SD   | n/a   |
| :::       | 4G              | SDHC | 4     |
| :::       | 8G              | SDHC | 4     |
| Samsung   | 4G              | SDHC | 6     |
| Transcend | 4G              | SDHC | 4,10  |

### SD card Initialization

WIZ550web은 Micro SD card를 web content storage로 이용하며, 별매품이다. SD card를 위한
file system으로 **FAT**\[1\] file system format을 지원하며, FAT32를 사용하는 것을
권장한다.

SD card를 WIZ550web의 web content storage로 이용하기 위한 전체 과정은 다음과 같다.

#### \>\> SD card를 사용하기 위해 준비해야 할 과정 (for Windows)

1\. 준비된 Micro SD card를 FAT32 file system으로 포맷(format)

Micro SD card를 SD card reader에 삽입하고, PC에 연결한 뒤 Windows 탐색기(explorer)에서
해당 장치의 포맷을 수행한다.

![](/document_framework/img/products/wiz550web/sdcard/sdcard_select_format_box.jpg)

![](/document_framework/img/products/wiz550web/sdcard/sdcard_format_process_box.jpg)

![](/document_framework/img/products/wiz550web/sdcard/sdcard_format_warning_box.jpg)

![](/document_framework/img/products/wiz550web/sdcard/sdcard_format_complete.jpg)

2\. [WIZ550web GitHub repository](https://github.com/Wiznet/WIZ550web)에서
Web page demo 다운로드

![](/document_framework/img/products/wiz550web/sdcard/sdcard_github_clone_box.jpg)

3\. Web page demo를 Micro SD card로 복사

![](/document_framework/img/products/wiz550web/sdcard/sdcard_webpage_folder_merge_box.jpg)

4\. Micro SD card를 WIZ550web의 SD card slot에 삽입

5\. 완료

### Data flash Initialization

 **버전 v1.1.0 이상부터는 메모리 카드 뿐만 아니라 data
flash를 추가 지원한다.** <https://github.com/Wiznet/WIZ550web/releases>

1.  메모리 카드 또는 data flash 중 하나를 이용 가능하며 마운트 되는 우선순위는 메모리 카드가 data flash
    보다 우선한다.
2.  메모리 카드를 이용할 경우 웹페이지를 메모리 카드에 복사한 후 슬롯에 장착한다.
3.  메모리 카드가 없는 경우 data flash를 이용할 수 있다.
    1.  Data flash를 이용하는 경우 적어도 한 번은 초기화 과정을 진행해야 한다.
    2.  초기화를 위해 SW1과 SW2를 동시에 누룬 후 타겟을 리셋한다.
    3.  웹페이지는 ALFTP 클라이언트 프로그램으로 복사
        가능하다.([ALFTP](http://www.altools.com/ALTools/ALFTP.aspx))



참조 : WIZ550web+FatFS+FTPServer Project Tutorial.
(<http://youtu.be/XtnT2_CNgaY>)

참조 : WIZ550web+WindowsFTP Tutorial. (<http://youtu.be/kelGSGj3kOQ>)
**commit
[cfce843](https://github.com/Wiznet/WIZ550web/commit/cfce843031bf4657fc9530e5c505a9a3d555fc91)
적용 필요.** 

참조 : WIZ550web+LinuxFTP Tutorial. (<http://youtu.be/6qsPZA5QKEI>)

### Serial Debug Message

WIZ550web에 전원이 인가되면 UART1을 통해 다음과 같은 Serial Debug 메시지가 출력된다. 이를 통해 장치의
이름 및 각종 네트워크 정보, SD Card의 정보를 확인할 수 있다.

![](/products/wiz550web/wiz550webgsg/serialdebug_terminal_initial_cut.jpg)

 WIZ550web Firmware의 초기화 루틴에서 PHY
link status와 SD card의 유무를 검사하여 정상 상태일 때만 올바르게 동작한다. 따라서, **제품에 전원을 인가하여도
동작하지 않을 경우 다음 항목을 확인한다.**

1.  **LAN cable 연결 여부 및 Link 성립 여부 (LAN port의 Act LED)**
2.  **SD card 삽입 여부**



UART1의 Default 설정은 다음과 같으며, Demo 웹 페이지와 AT command를 통해 변경 가능하다.

  - **115200-8-N-1**
      - Baud Rate : 115200
      - Data Bit : 8
      - Parity : NONE
      - Stop Bit : 1
      - Flow Control : NONE
      
      ## WIZ550web Web Server

-----

### Web Server의 기본 동작

일반적인 Web server와 Web browser 간 동작은 다음과 같이 이루어진다.

1.  Web browser (사용자 Webpage) 에서 HTTP 요청(HTTP request) 발생
2.  Web server는 사용자 요청에 따라 작업을 수행하고, 응답할 결과 준비
3.  Web server가 작업 수행 결과에 따라 HTTP 응답(HTTP response) 전송
4.  다양한 사용자 요청에 따라 위 1\~3 과정 반복

따라서, WIZ550web의 Web server(HTTP server)는 크게 다음과 같은 프로세스로 구성되어 있으며, Web
browser(HTTP client)의 매 요청마다 다음 flowchart에 따라 동작한다.

  - **HTTP Request Parser**
      - 사용자의 요청 (HTTP Request) 해석
  - **Web Content (web resources) Loader**
      - 사용자가 요청한 web content를 지정된 Web content storage (e.g., SD card)에서
        찾고, 찾은 결과에 따른 응답 준비 
  - **HTTP Response Sender**
      - Web server의 처리 결과에 따라 준비된 응답 (HTTP Response) 전송
      - 요청의 처리에 따라 여러 가지 결과로 응답
          - e.g., 처리 성공 : HTTP/1.1 200 OK
          - e.g., 요청 페이지가 없는 경우 : HTTP/1.1 404 Not Found
  - **CGI Handler**
      - 웹을 통해 요청된 H/W 제어 등의 **'사용자 요청'**을 처리
      - I/O의 상태 및 값 설정이나 현재 입력값 등을 얻을 때 CGI를 이용

![](/document_framework/img/products/wiz550web/wiz550webgsg/wiznet_httpserver_flowchart_v1.png)

-----

### WIZ550web의 CGI

WIZ550web은 네크워크 설정 및 IO의 제어와 모니터링 등에 CGI를 사용한다.

CGI는 Common Gateway Interface의 약자로, 웹을 통해 클라이언트에서 서버의 프로그램을 실행하고 그 결과를
얻는 방법이다. CGI는 특정 언어나 플랫폼에 의존하지 않으며, 웹 브라우저를 통해 서버의 프로그램을 실행하기 위한
약속이므로 웹 페이지와 서버 간의 설정과 규정만 만족하면 된다.

![](/document_framework/img/products/wiz550web/wiz550webgsg/wiz550web_simple_server-client_diagram.png)

WIZ550web의 CGI는 GET / POST method를 이용한 ‘파일명 + 확장자 .cgi’ 에 대한 요청 (HTTP
Request) 으로 구성되며, 다음의 각각 HTTP method에 따라 동작한다.
**GET**

  - 웹 서버의 값을 얻기 위한 방법
  - **JavaScript callback function parameter**의 형태로 전달
      - **JSON**\[1\]과 동일한 구조
      - 웹 서버 측에서 웹 페이지의 JavaScript 함수명과 동일한 이름을 가진 묶음의 데이터를 전달해야 함
      - e.g., 웹 페이지의 JavaScript 함수명이 `function IoStatusCallback` 인 경우, 웹
        서버는 `IoStatusCallback({"din":[{"v":"1"}, {"v":"0"}],
        "led":[{"v":"1"}, {"v":"0"}]})` 데이터 형태로 전달해야 처리 가능

**POST**

  - 웹 서버에 변경된 값을 전달하기 위한 방법
  - **Web form element**를 통한 값 전달
  - **Name-value pair**의 형태로 표현. ‘&’로 각각 pair가 구분되며 한 pair의 name에 대한
    value는 ‘=’로 표시
      - e.g., ‘Pin : 1, Val : 1’ =\> ‘Pin=1\&Val=1’

임베디드 웹 서버의 제한적인 리소스 안에서 효율적인 데이터 처리를 위해 각 요청은 **AJAX**\[2\]로 처리한다. 이를 통해
웹 브라우저의 페이지 이동(Web page reload) 없이 변경된 서버의 값 표현이 가능하며 수신 데이터의 양이 적어지기
때문에 웹 서버의 데이터 처리에 대한 부하를 줄일 수 있다.

-----

## Basic Demo Web Pages

 Basic Demo Web Page의 Screenshot은 **Google
Chrome Browser version 37**에서 이루어졌다.

WIZ550web에 기본적으로 제공되는 Demo webpage는 index.html 하나의 파일에 탭(Tab) 형태의 구조이며,
다음과 같은 세부 탭 항목으로 구성되어 있다. 각 탭은 다음과 같은 목적으로 구성된다.

  - **Device Settings**: WIZ550web의 각종 정보 확인 및 Network / Serial Port 설정
      - Device Information
      - Network Configuration
      - Serial Port (for Data & Debug / AT commands)
          - UART1 : Data/Console/Debug/Program port (EVB 경우 RS232)
          - UART2 : AT command port (EVB 경우 RS485/422)

<!-- end list -->

  - **Digital I/O Status**: Digital I/O의 Direction 및 Status 표시
      - On-board LED Status
      - Digital I/O Direction / Status: Output Pin의 경우 On/Off 설정 가능

<!-- end list -->

  - **ADC Status**: Analog 입력의 값 변화 표시
      - Analog Input Signals

<!-- end list -->

  - **I/O Configuration**: Digital I/O의 Direction 및 Alias 설정 
      - Digital I/O State and Alias Configuration
      - Digital I/O Settings Factory Default

<!-- end list -->

  - **Serial Data**: 웹 페이지와 UART1의 Serial data 입/출력 확인
      - Serial Tx (Web to UART1) / Rx (UART1 to Web)
      - GitHub의 WIZ550web 오픈 코드는 Tx기능만 구현

<!-- end list -->


Device Settings 탭의 기본 구성은 다음과 같다.
![](/products/wiz550web/webpage_basicdemo/basic_demopage_1.jpg)

Device Settings 탭에서는 모듈의 MAC 주소, 펌웨어의 버전 정보 등을 확인할 수 있으며 Device Name 및
각종 Network 정보(IP 주소, DHCP 사용 여부 등)와 Serial Port 설정 정보를 변경할 수 있다. 각종
정보 변경 후 **\[Save Settings and Reboot\]** 버튼을 누르면 변경된 정보가 저장되고
WIZ550web이 Reboot된다. Network 정보 설정 등이 이루어지는 만큼, 설정 이후 모듈이 Reboot 됨에
주의하여야 한다.  
  
DHCP를 이용하여 IP를 할당 받도록 설정하는 경우, Network 정보 입력 창이 'Read Only' 속성으로 변경되며 모듈
Reboot 이후 DHCP server를 통해 정상적으로 Network 정보를 할당 받으면 다음과 같이 DHCP 관련 정보가 추가
된 Debug message가 출력된다.

![](/document_framework/img/products/wiz550web/webpage_basicdemo/basic_demopage_dhcp_enabled_checked.jpg)

![](/document_framework/img/products/wiz550web/webpage_basicdemo/serialdebug_terminal_dhcp_checked.jpg)

### Digital I/O Status

Digital I/O Status 탭의 기본 구성은 다음과 같다.
![](/document_framework/img/products/wiz550web/webpage_basicdemo/basic_demopage_2.jpg)

On-board LED의 On/Off 버튼을 이용하여 WIZ550web의 LED를 제어할 수 있다.  
Digital I/O Status를 통해 I/O 각각의 상태를 확인하고 Output인 경우 On/Off 버튼을 통해 해당 I/O의
출력 값을 변경할 수 있다. Digital I/O Status의 각각 I/O 정보는 다음과 같이 구성된다.

  - **Pin number** (e.g., D0)**: Direction** (Input / Output / NotUsed)
  - **Status LED Images**
    (![](/document_framework/img/products/wiz550web/webpage_basicdemo/dio_on.png) Blue LED /
    ![](/document_framework/img/products/wiz550web/webpage_basicdemo/di_on.png) Green LED /
    ![](/document_framework/img/products/wiz550web/webpage_basicdemo/di_off.png) Off)
  - **On/Off 버튼** (Output의 경우)

Input의 경우,  
\- On/Off 버튼은 없으며 Input signal이 있는 경우 Green LED가 점등된다.  
Output의 경우,  
\- On/Off 버튼으로 설정이 가능하며 Output On인 경우 Blue LED가 점등된다.  
NotUsed의 경우,  
\- On/Off 버튼은 없으며 Off LED만 표시된다.  
  
각각 I/O의 Direction은 I/O configuration 페이지에서 설정할 수 있으며, 예를 들어 다음과 같이 설정할 수
있다.

![](/document_framework//img/products/wiz550web/webpage_basicdemo/basic_demopage_2_io_examples.jpg)

### ADC Status

ADC Status 탭의 기본 구성은 다음과 같다.
![](/document_framework/img/products/wiz550web/webpage_basicdemo/basic_demopage_3_cut.jpg)

ADC를 통해 입력된 Pin A0 \~ A3의 Analog signal 변화 값이 막대 그래프 (bar graph)를 통해
실시간으로 표시된다.  
  
WIZ550web Baseboard에는 A0에 가변저항 (Potentiometer), A1에 온도 센서 (Temperature
sensor)가 연결되어 있으며 예를 들어 가변저항 (A0)의 값을 조절하면 다음과 같은 그래프 변화를 확인할 수 있다.

![](/document_framework/img/products/wiz550web/webpage_basicdemo/basic_demopage_3_cut_a0_adjust_checked.jpg)

### I/O Configuration

I/O Configuration 탭의 기본 구성은 다음과 같다.
![](/document_framework/img/products/wiz550web/webpage_basicdemo/basic_demopage_4.jpg)

각 I/O의 Direction과 Alias설정은 변경 즉시 반영되어 확인할 수 있다. 각각 I/O의 Direction에 따른
LED 이미지 색은 Off / Blue / Green으로 동일하며, NotUsed의 경우만 Visibility를 고려하여
**'X'**로 표기된다. **\[IO Settings Factory Reset and Reboot\]** 버튼을 누르면 설정 값
초기화와 함께 WIZ550web 모듈이 Reboot 됨을 유의해야 한다.  
  
각종 설정을 변경하면 다음과 같이 표시되며, 변경 즉시 확인 할 수 있다.

![](/document_framework/img/products/wiz550web/webpage_basicdemo/basic_demopage_4_adjust_cut.jpg)

### Serial Data

Serial Data 탭의 기본 구성은 다음과 같다.
![](/document_framework/img/products/wiz550web/webpage_basicdemo/basic_demopage_5_cut.jpg)

이 페이지에서는 Webpage와 UART1 간의 Serial data 입/출력 (Serial data Tx/Rx)을 확인 할 수
있다. **'Data to send'**에 'hello world\!'를 입력하고 **\[Send\]** 버튼을 누른다.

![](/document_framework/img/products/wiz550web/webpage_basicdemo/basic_demopage_5_cut_helloworld_checked.jpg)

Serial terminal에서 Webpage를 통해 UART1으로 전송된 문자열을 확인 할 수 있다.

![](/document_framework/img/products/wiz550web/webpage_basicdemo/serialdebug_terminal_helloworld_checked.jpg)

반대로, Serial terminal에서 문자열을 입력하면 **'Received data'**를 통해 확인 할 수 있다.

![](/document_framework/img/products/wiz550web/webpage_basicdemo/basic_demopage_5_cut_thanks_checked.jpg)

### Note

**Favicon**  
Favicon은 즐겨찾기(favorites)와 아이콘(icon)의 합성어로, 주소창 등에 조그만 아이콘으로 표시된다. 이를 통해
해당 웹 페이지의 제공자를 쉽게 확인할 수 있으며 예제로 제공되는 Basic demo webpage에도 favicon이
포함되어 있다.

![](/document_framework/img/products/wiz550web/webpage_basicdemo/favicon_ex.jpg)

다음과 같이 Favicon을 추가할 수 있다.

1.  목적하는 이미지로 16x16 크기의 icon을 만들고, 이름을 favicon.ico로 지정한다.
2.  웹 페이지가 위치한 Content storage에 해당 icon을 저장한다.
3.  index.html 페이지 상단에 다음과 같은 링크 코드를 삽입한다.

e.g., `<link rel='shortcut icon' href='/favicon.ico'
type='image/x-icon'>`

-----

## WIZ550web Customizing

-----

### Basics

WIZ550web은 사용자의 목적에 맞는 웹 서버를 제작할 수 있는 기반을 제공한다. 사용자는 웹 페이지와 펌웨어 소스코드를
수정하여 손쉽게 I/O를 제어하는 임베디드 웹 서버를 구현할 수 있다.

웹 브라우저의 웹 페이지를 통해 I/O를 제어 / 모니터링 하거나 USART를 이용하기도 하고, MCU와 W5500 칩의
레지스터를 제어하는 등 사용자가 원하는 목적에 따라 다양한 조합이 발생할 수 있다.

![](/products/wiz550web/wiz550webgsg/wiz550web_simple_requestcombination_diagram.png)

때문에 올바른 기능 추가를 위해서는 사용자 웹 페이지의 HTML 코드 및 JavaScript 코드와 C 코드로 구성된 펌웨어
소스코드를 수정할 수 있어야 한다.

이 페이지에서는 예제로 제공하는 Basic demo 웹 페이지를 통해 WIZ550web 모듈 I/O의 현재 상태 값을 얻고,
새로운 값을 설정하는 방법에 대한 설명을 제공한다.

이를 통해 웹 페이지에서 하드웨어를 조작하고 상태를 조작하는 방법을 알 수 있으며, 사용자가 추가적인 기능을 구현하고자 할 때
이와 동일한 방법을 이용하면 된다.

-----

### 웹을 이용한 I/O 제어 예제

 This Section is **UNDER
CONSTRUCTION**.  
Check back soon. 

---
 1.  **FAT: File Allocation Table**
디지털 카메라 등에 장착되는 대부분의 메모리 카드와 수많은 컴퓨터 시스템에 널리 쓰이는 컴퓨터 파일 시스템 구조. FAT 포맷의 주요 버전은 12, 16, 32와 같은 이름을 가진다. WIZ550web에서 지원하는 FAT32에서 하나의 파일은 최대 4기가바이트-1바이트의 용량을 가질 수 있다.
 2.  **JSON: JavaScript Object Notation**

 3.  **AJAX: Asynchronous JavaScript And XML**  
    비동기 자바스크립트와 XML을 의미하며 대화식 웹 애플리케이션의 제작을 위해 HTML, CSS, JavaScript,
    XML, JSON 등의 조합을 이용하는 웹 개발 기법. 비동기 처리로 페이지의 새로고침 없이 받은 데이터를 가공하여
    DOM을 조작할 수 있으며, 필요한 데이터만을 웹서버에 요청해서 받은 후 클라이언트에서 데이터에 대한 처리를 할 수
    있다. AJAX 기법을 활용하면 웹 브라우저와 웹 서버 사이에 교환되는 데이터량과 웹서버의 데이터 처리량도 줄어들기
    때문에 애플리케이션의 응답성이 좋아진다. 또한 웹 서버의 데이터 처리에 대한 부하를 줄여주는 일이 요청을 주는 수 많은
    컴퓨터에 대해서 일어나기 때문에 전체적인 웹 서버 처리량도 줄어들게 된다.
    ### Device Settings
