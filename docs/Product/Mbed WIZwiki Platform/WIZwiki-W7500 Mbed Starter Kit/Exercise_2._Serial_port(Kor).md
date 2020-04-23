---
id: exercise_2_serial_port_kor
title: Exercise 2. Serial port(Kor)
date: 2020-04-08
---


## Content
# 튜토리얼 예제2. 시리얼 포트를 이용해 데이터 출력하기

## 개요

WIZwiki 보드의 시리얼 포트를 이용하면 데이터를 PC로 내보내거나, PC에서 데이터를 입력하여 WIZwiki 보드로 보낼 수
있다. 이 예제에서는 WIZwiki 보드에 구현된 코드가 동작하는 중에 원하는 메시지를 PC로 확인하는 방법을 실습한다.

## 준비물

  - PC
  - WIZwiki-W7500 보드
  - USB 케이블
  - 테스트용 소프트웨어
    * 시리얼 데이터를 확인하기 위해서는 PC에 터미널 프로그램을 설치해야 한다. 이 예제에서는 아래와 같은 버전의 Tera Term 이라는 프로그램으로 테스트 했다.


![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/2_teraterm.png)

## 하드웨어

PC와 WIZwiki 보드를 USB 케이블로 연결한다.

![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/bd_usb_connected.jpg)

## 소프트웨어

### Example Code

예제 코드이다. 기존 code를 지우고 아래 code를 복사해 붙여넣기 한 후 컴파일한다.

``` c
#include "mbed.h"

DigitalOut myled(LED1);
Serial pc(SERIAL_TX, SERIAL_RX);

int count_blink = 0;

int main() {
    while(1) {
        myled = 1;
        //pc.printf("myled = 1\n");
        wait(0.2);
        myled = 0;
        //pc.printf("myled = 0\n");
        wait(0.2);
        count_blink++;
        pc.printf("The number of blink = %d\n", count_blink);
    }
}
```
### 실행 방법 및 결과

먼저 mbed\_blinky 프로그램을 원하는 다른 이름 (예를 들면 serial)으로 바꾼후 프로그램을 만든다.

![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/2a.png)

![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/2b.png)

왼쪽 프로그램 작업장 (Program Workspace)에서 main.cpp를 선택해 편집 모드로 간다.

기존 code를 지우고 Example Code를 복사해 붙여넣기 한 후 컴파일한다.

테라텀을 다음 그림과 같이 설정한다. ![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/2c.png)

WIZwiki 보드와 PC를 연결하면 포트(port)가 추가된다. 아래 그림과 같이 COM11을 선택한다. (COM 번호는 사용자
PC 환경마다 다를 수 있다. ![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/2d.png)

프로그램 실행 결과는 다음과 같다.

![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/2e.png)

## 다른 실습 예제

  - Serial\_HelloWorld\_WIZwiki-W7500

데이터 출력뿐만이 아니라 입력도 테스트 할 수 있는 예제이다. 이 예제는 WIZnet 팀에서 만든 예제이다. 아래 링크를 클릭한
후 main.cpp를 열어 코드를 복사해 테스트해 볼 수도 있고, Import해서 실행할 수도 있다.
🌎<https://developer.mbed.org/teams/WIZnet/code/Serial_HelloWorld_WIZwiki-W7500/>

## 관련 링크

   * [스타터 킷 튜토리얼](Tutorial(Kor).md)

## 다음 예제

   * [예제3. 버튼으로 LED 깜박이기](Exercise_3._Switch(Kor).md)
