---
id: exercise_3_switch_kor
title: Exercise 3. Switch(Kor)
date: 2020-04-08
---

# 튜토리얼 예제3. 버튼으로 LED 깜박이기

## 개요

이 예제는 스위치를 눌러서 LED를 깜박이는 실습에 대한 것이다. 스위치로 WIZwiki 보드에 디지털입력을 주는 방법을 배울 수
있다. WIZwiki 보드의 특정 pin을 통해 디지털 출력을 내보내는 방법을 배울 수 있다.

## 준비물

  - WIZwiki-W7500 보드
  - USB 케이블
  - Breadboard (빵판)
  - Jumper wire
  - Switch
  - LED
  - 저항 (330 Ohm)

## 하드웨어

### 회로도

전체 회로도는 아래와 같다.

![Button and
LED](/document_framework/img/products/wizwiki_mbed_kit/kit_en/button_led_scheme.png)

실습에 사용할 LED는 WIZwiki 보드에 장착되어 있으며, 아래 회로도에서 빨간색으로 표시된 부분이다. !🌎[RGB
LED](/document_framework/img/products/wizwiki_mbed_kit/kit_en/3_board_led.png)

### 연결도

![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/3_board_all.png)

## 소프트웨어
### Example Code

예제 코드이다. mbed 환경에서 main.c에 아래 code를 복사해 붙여넣기 한 후 컴파일한다.

``` c
#include "mbed.h"

DigitalOut myled(LED1);
DigitalIn mybutton(D6);

int main() {
    while(1) {
        if (mybutton == 1)
          myled = 0;
        else
          myled = 1;
    }
}
```

### 실행 방법 및 결과

코드의 DigitalOut myled(LED1): 부분은 LED1을 출력모드로 설정한다. 코드의 DigitalIn
mybutton(D6); 부분은 D6 핀을 입력모드로 설정한다.

손으로 버튼을 누르면 LED가 켜진다. 3.3V 전압이 D6 핀으로 입력되면 mybutton이 "1"로 인식이 되고, myled가
"0"이 된다. myled가 "0"이 되면 WIZwiki 보드에 장착된 LED1 가 켜진다.

버튼에서 손을 떼면 LED가 꺼진다.

위 Example Code 부분 DigitalOut 과 DigitalIn 등의 Class와 API에 대한 학습은 mbed
Handbook 페이지를 참고한다. 🌎<https://developer.mbed.org/handbook/Homepage>

## 관련 링크

   * [스타터 킷 튜토리얼](Tutorial(Kor).md)

## 다음 예제

   * [예제4. PWM을 이용해 부저 울리기](Exercise_4._PWM(Kor).md)
