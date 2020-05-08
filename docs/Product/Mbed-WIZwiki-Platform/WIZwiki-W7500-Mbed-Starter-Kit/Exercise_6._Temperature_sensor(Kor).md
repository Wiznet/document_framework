---
id: exercise_6_temperature_sensor_kor
title: Exercise 6. Temperature sensor(Kor)
date: 2020-04-08
---


# 튜토리얼 예제6. 온도 센서 값 읽어내기

## 개요

ADC를 이용해서 아날로그 온도 센서 값을 읽어내는 예제이다. 아날로그 값을 수식을 사용해 섭씨와 화씨로 변환한다. 변환 된 값을
시리얼 포트를 통해 화면에 보연준다.

## 준비물

  - WIZwiki-W7500 보드
  - USB 케이블
  - Breadboard (빵판)
  - Jumper wire
  - Temperature Sensor TMP36GT9 (Low Voltage Temperature Sensor)

## 하드웨어

### 회로도

전체 회로도는 아래와 같다.
![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/cds_sensor_schem.png)

### 연결도

![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/exam_cds_sensor.png)

## 소프트웨어

### Example Code

예제 코드이다.

아래 페이지를 열고 "Import this program" 으로 프로그램을 불러와 컴파일 한다.

🌎https://developer.mbed.org/teams/IOP/code/Temp36_HelloWorld_WIZwiki-W7500/

또는, mbed 환경에서 main.c에 아래 code를 복사해 붙여넣기 한 후 컴파일한다.

``` c
/* Analog Input "Temp36" Temperature Sensor Example Program */
 
#include "mbed.h"
 
// Initialize a pins to perform analog input fucntions
AnalogIn   ain(A2); // connect A0(WIZwiki-W7500) to Vout(Temp36)
 
int main(void)
{
    while (1)
    {
        float V = ain.read() * 3.3; // connect Vs(Temp36) to 3.3V(WIZwiki-W7500) 
        //float V = ain.read() * 5; // connect Vs(Temp36) to 5V(WIZwiki-W7500)
        
        float tempC = (V-0.5) * 100; // calculate temperature C
        float tempF = (tempC * 9 / 5) + 32.0; // calculate temperature F
        
        printf("tempC value : %5.2f C \r\n", tempC);
        printf("tempF value : %5.2f F \r\n", tempF);
        
        wait(1.0);
    }
}
```


### 실행 방법 및 결과

다음은 예제의 실행 화면이다. 섭씨와 화씨 온도 값이 번갈아 보인다.

![](/document_framework/img/products/wizwiki_mbed_kit/kit_en/temp_sensor_result.jpg)

## 학습 자료

온도 센서 자료는 아래 링크를 참조한다.


 * [Kit 구성물 데이터시트]()  


## 관련 링크

  * [스타터 킷 튜토리얼](Tutorial(Kor).md)

## 다음 예제

  * [예제7. 조도 센서 값 읽어내기](Exercise_7._Photoresistor(Kor).md)
