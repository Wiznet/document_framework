---
id: exercise_5_variable_resistor_kor
title: Exercise 5. Variable resistor(Kor)
date: 2020-03-
---


## Content
# 튜토리얼 예제5. 가변저항기의 아날로그 값 읽어내기

## 개요

가변 저항기로 만든 아날로그 값을 읽어내는 예제이다. WIZwiki보드가 지원하는 ADC (Analog Digital
Converter)를 이용한다. 아날로그 값을 출력하는 센서들의 출력 데이터를 읽는 방법을 학습할 수 있다.

## 준비물

  - WIZwiki-W7500 보드
  - USB 케이블
  - Breadboard (빵판)
  - Jumper wire
  - Rotary Potentiometer (가변저항기, 10K Ohm)

## 하드웨어

### 회로도

전체 회로도는 아래와 같다.

![](/products/wizwiki_mbed_kit/kit_kr/5_potentiometer_schem.png)

### 연결도

![WIZwiki 와 가변저항 연결도](/products/wizwiki_mbed_kit/kit_kr/5_board_all.jpg)
![](/products/wizwiki_mbed_kit/kit_kr/5_board_analog1.jpg)
![](/products/wizwiki_mbed_kit/kit_kr/5_board_analog2.jpg)

## 소프트웨어

### Example Code

예제 코드이다. mbed 환경에서 main.c에 아래 code를 복사해 붙여넣기 한 후 컴파일한다.

``` c
#include "mbed.h"
 
AnalogIn analog_value(A0);
 
DigitalOut led(LED1);

int main() {
    float meas;
    
    printf("\nAnalogIn example\n");
    
    while(1) {
        meas = analog_value.read(); // Converts and read the analog input value (value from 0.0 to 1.0)
        meas = meas * 3300; // Change the value to be in the 0 to 3300 range
        printf("measure = %.0f mV\n", meas);
        if (meas > 2000) { // If the value is greater than 2V then switch the LED on
          led = 0;
        }
        else {
          led = 1;
        }
        wait(0.2); // 200 ms
    }
}
```

### 실행 방법 및 결과

가변저항기의 다이얼을 움직여 가며 시리얼 포트의 메시지를 확인한다. 사진과 같이 주기적으로 밀리볼트 (mV) 단위의 measure
값을 확인할 수 있다. ![](/products/wizwiki_mbed_kit/kit_kr/5_test_result.jpg)

이 예제에서는 가변기의 다이얼을 시계방향으로 회전시키면 measure 값이 올라간다. measure 값이 2000mV 이상이면
WIZwiki 보드에 장착된 LED1이 켜진다. measure 값이 2000mV 이하이면 LED1이 꺼진다.

WIZwiki 보드는 외부 회로의 아날로그 값을 읽어서 디지털 값으로 변환할 수 있다.

## 학습 자료

🌎[가변저항](https://ko.wikipedia.org/wiki/%EA%B0%80%EB%B3%80%EC%A0%80%ED%95%AD)

🌎[아날로그-디지털
변환회로(위키백과](https://ko.wikipedia.org/wiki/%EC%95%84%EB%82%A0%EB%A1%9C%EA%B7%B8-%EB%94%94%EC%A7%80%ED%84%B8_%EB%B3%80%ED%99%98%ED%9A%8C%EB%A1%9C)

🌎[Analog-to-digital converter, from
wikipedia](https://en.wikipedia.org/wiki/Analog-to-digital_converter)

## 관련 링크

   * [스타터 킷 튜토리얼]()

## 다음 예제

   * [예제6. 온도 센서 값 읽어내기]()
