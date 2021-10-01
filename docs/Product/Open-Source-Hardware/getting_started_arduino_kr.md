---
id: getting_started_arduino_kr
title: Getting Started for Arduino (KR)
date: 2020-04-03
---

## WIZ Ethernet Library Update

** Step 1 : Download for Arduino WIZnet library **

  - WIZnet GitHub Repository에서 [WIZ Ethernet
    Library](https://github.com/Wiznet/WIZ_Ethernet_Library)를 download
    한다.
  - Download ZIP button을 클릭하여 다운로드 한다.

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/library_down.png").default}><img src={require("/img/osh/w5500_ethernet_shield/library_down.png").default} alt=""/></a>

-----

** Step 2 : Library Copy & Paste **

  - 받은 ZIP파일의 압축을 푼다.
  - C:\\Program Files\\Arduino\\libraries 경로로 접속한다.

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/folder_3.png").default}><img src={require("/img/osh/w5500_ethernet_shield/folder_3.png").default} alt=""/></a>

**Arduino IDE 1.0.x**

  - 1.0.x Version은 Arduino IDE 1.0.x 폴더 -\> Ethernet 폴더를 아래의 경로에 그대로
    복사&붙여넣기 한다.
  - 경로 = C:\\Program Files\\Arduino\\libraries

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/folder_1.png").default}><img src={require("/img/osh/w5500_ethernet_shield/folder_1.png").default} alt=""/></a>

**Arduino IDE 1.5.x**

  - 1.5.x 상위 Version은 Arduino IDE 1.5.x 폴더 -\> Ethernet -\> src 폴더만 복사하여
    아래의 경로에 복사&붙여넣기 한다.
  - 경로 = C:\\Program Files\\Arduino\\libraries\\Ethernet

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/folder_2.png").default}><img src={require("/img/osh/w5500_ethernet_shield/folder_2.png").default} alt=""/></a>

-----

** Step 3: Arduino Library Import **

  - Arduino IDE는 다음 그림과 같이 Library를 Import하여 사용할 수 있다.

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting3-1.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting3-1.png").default} alt=""/></a>

  - Arduino Ethernet shield를 활용하기 위한 library는 Sketch 메뉴의 Import Library
    \> Ethernet을 선택하면 프로젝트에 관련 header file들이 추가된다.

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting3-2.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting3-2.png").default} alt=""/></a>

-----

## Arduino Web Server Examples

** Step 1 : Arduino 시작하기 **

  - Arduino를 실행한다.
  - Examples -\> Ethernet -\> Webserver를 선택하여 실행한다.

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting4.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting4.png").default} alt=""/></a>

  - Uno, Mega, Due 등 보드 종류에 따라 알맞게 Setting한다.
  - 도구 -\> 보드 -\> Arduino Uno
  - 도구 -\> 포트 -\> COMx

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting5.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting5.png").default} alt=""/></a>

-----

** Step 2 : Arduino 동작확인 **

  - Verify을 클릭하여 코드 에러가 없는지 확인한다.
  - 이상없다면, Upload를 클릭하여 Arduino 보드에 Upload한다.

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting6.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting6.png").default} alt=""/></a>

  - Upload완료 후 Serial Monitor를 클릭
  - 다음과 같은 IP Address가 나오는지 확인한다.

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting7.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting7.png").default} alt=""/></a>

  - 이제 Internet Explore & Chrome을 이용하여 Serial Monitor에 나온 IP로 접속한다.
  - 다음과 같은 결과가 나온다면 정상동작하는 것이다.

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting8.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting8.png").default} alt=""/></a>

-----

** Step 6 : Enjoy it \! **

  - Let's play
  - Create your new application & new content

-----