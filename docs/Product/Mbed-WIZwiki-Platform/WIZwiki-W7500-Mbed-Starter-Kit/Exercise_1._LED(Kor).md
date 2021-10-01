---
id: exercise_1_led_kor
title: 튜토리얼 예제1. LED 깜박이기
date: 2020-04-08
---

## 개요

mbed 회원 가입을 하는 방법을 알 수 있다. mbed 플랫폼 보드를 PC에 연결하고, 온라인으로 컴파일 해 볼 수 있다.
플랫폼 보드를 위해 제공하는 예제 프로그램을 이용하여 LED를 깜빡이게 할 수 있다.

## 준비물

  - WIZwiki-W7500 보드
  - USB 케이블

## mbed 사이트 로그인 하기

mbed 회원 가입이 되어 있으면 🌎[mbed 개발자 사이트](https://developer.mbed.org)로 로그인 한다.

mbed 회원 가입이 안 되어 있는 경우엔 아래 페이지를 참고해 회원 가입을 한다.

[mbed 회원
가입하기](sign_up_at_arm_mbed_kor)

#### PC와 mbed 플랫폼을 연결하자

PC와 WIZwiki 보드를 USB 케이블로 연결한다.

<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/bd_usb_connected.jpg").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/bd_usb_connected.jpg").default} alt=""/></a>

연결하면 USB드라이브처럼 PC의 특정 드라이브로 인식된다.

#### mbed 컴파일러를 구동해보자

  - 오른쪽의 Open mbed Compiler를 클릭한다.

<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/105_wizwiki.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/105_wizwiki.png").default} alt=""/></a>

팝업 메뉴가 뜨면서 플랫폼에 해당하는 Template으로 Blinky LED Hello World로 지정되고, Default
프로그램 이름으로 mbed\_blinky 가 선택된다.
<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/106_program_name.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/106_program_name.png").default} alt=""/></a>

OK를 클릭하면, 내 Program Workspace로 mbed\_blinky 프로그램이 복사된다.
<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/107_mbed_blinky_main.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/107_mbed_blinky_main.png").default} alt=""/></a>

메뉴 상단의 Compile 아이콘을 클릭해서 예제 Code를 컴파일한다. 컴파일에서 에러가 발생하지 않으면, 창 아래에
Success\!라는 메시지가 보인다.

<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/108_compile_end.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/108_compile_end.png").default} alt=""/></a>

컴파일이 완료되면 웹 브라우저는 mbed\_blinky\_WIZWIKI\_W7500.bin 파일을 PC의 지정된 디렉토리로
다운로드한다. <a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/109_bin.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/109_bin.png").default} alt=""/></a>
### Example Code

``` c
#include "mbed.h"

DigitalOut myled(LED1);

int main(/) {
    while(1) {
        myled = 1;
        wait(0.2);
        myled = 0;
        wait(0.2);
    }
}
```

### 예제 실행 및 결과

PC에 복사된 파일인 mbed\_blinky\_WIZWIKI\_W7500.bin 파일을 mbed 드라이브 (예를 들면, E: 또는
F: 등)로 복사한다.

<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/110_copy.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/110_copy.png").default} alt=""/></a>

그리고, 리셋 핀을 눌러준다. 연결도의 그림에서 파란색 동그라미 내부의 D4 부분이 0.2초 간격으로 깜박인다.

<a target="_blank" href={require("/img/products/wizwiki_mbed_kit/kit_en/wizwiki_led1.png").default}><img src={require("/img/products/wizwiki_mbed_kit/kit_en/wizwiki_led1.png").default} alt="WIZwiki-W7500 LED1"/></a>

LED가 깜박이고 있으면 WIZwiki-W7500 플랫폼 보드에서 예제 코드가 정상동작하고 있는 것이다. 이렇게 LED를 깜박이게
만드는 LED Blink 예제를 보통 "Hello World"라고도 부른다.

사용자는 wait 함수의 시간 값을 바꿔가며 테스트 해 볼 수 있다.

## 관련 링크

   * [스타터 킷 튜토리얼](tutorial_kor)