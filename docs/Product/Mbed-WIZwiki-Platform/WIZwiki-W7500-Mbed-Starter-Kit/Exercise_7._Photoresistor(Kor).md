---
id: exercise_7_photoresistor_kor
title: 튜토리얼 예제7. 조도 센서 값 읽어내기
date: 2020-04-08
---

## 개요

ADC를 이용해서 조도 센서 값을 읽어내는 예제이다. 아날로그 값을 수식으로 변환 해 0 \~ 3.3V 사이의 값으로 시리얼
포트를 통해 화면에 보여준다. 지정된 아날로그 값과 비교해서 LED를 키거나 끈다.

## 준비물

  - WIZwiki-W7500 보드
  - USB 케이블
  - Breadboard (빵판)
  - Jumper wire
  - PGM5537D (CDS Photo Resistor)

## 하드웨어

### 회로도

전체 회로도는 아래와 같다.

![](/img/products/wizwiki_mbed_kit/kit_en/cds_sensor_schem.png)

### 연결도

![](/img/products/wizwiki_mbed_kit/kit_en/exam_cds_sensor.png)

## 소프트웨어

### Example Code

예제 코드이다.

아래 페이지를 열고 "Import this program" 으로 프로그램을 불러와 컴파일 한다.

🌎<https://developer.mbed.org/teams/IOP/code/CDS_HelloWorld_WIZwiki-W7500/>

또는, mbed 환경에서 main.c에 아래 code를 복사해 붙여넣기 한 후 컴파일한다.

``` c
#include "mbed.h"
 
DigitalOut redled(LED1); // RED
DigitalOut blueled(LED3); // BLUE
AnalogIn CDS(A0);
 
int main() {
    printf("Hello WizWIki-W7500!\n\r");
    printf("===========================================\n\r");
    
    int CDS_data = 0;
    double CDS_vol = 0;
    
    while(1) {
        CDS_data = CDS.read()*1000;
        CDS_vol = CDS.read()*3.3;
        
        //CDS Seneor ADC Low Data
        printf("CDS Data : %3d\r\n",CDS_data);      
        //CDS Sensor Voltage data
        printf("CDS Voltage : %3.3lfV\r\n",CDS_vol);
        printf("===========================================\n\r");
        
        wait(1);     
        //Status is bright.
        if(CDS_data < 500){
            redled = 1;
            blueled = 0;
        }
        //Status is dark.
        else  {
            redled = 0;
            blueled = 1;
        }
    }
}
```


### 실행 방법 및 결과

다음은 예제의 실행 화면이다. CDS 값과 3.3V 기준으로 측정된 CDS전압 값이 번갈아 보인다.
![](/img/products/wizwiki_mbed_kit/kit_en/cds_sensor_result.jpg)

## 학습 자료

조도 센서의 스펙은 아래 링크를 참조한다.


  * [ Kit 구성물 데이터시트](kit_parts_datasheet_kor)


## 관련 링크

   * [스타터 킷 튜토리얼](tutorial_kor)
