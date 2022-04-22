---
id: kit-parts-datasheet-kor
title: Kit 구성물 데이터시트
date: 2020-04-08
---

## Kit 구성물

``` 
           Part Name                         Description                       Q.Ty
      WIZwiki-W7500        ARM Cortex-M0 Test Board                              1
      USB cable            USB Mini-B, 1meter                                    1
      LAN cable            CAT5, 1meter                                          1
      Breadboard           55 x 85 mm                                            2
      Resistor (330 Ohm)   1/4W J(5%) 330 Ohm                                   20
      Resistor (10K Ohm)   1/4W J(5%) 10K Ohm                                   20
      Pushbutton Switch    Momentary Pushbutton Switch                           4
      LED (Red)            5pi DIP type Red LED                                  5
      LED (Green)          5pi DIP type Green LED                                5
      LED (Yellow)         5pi DIP type Yellow LED                               5
      LED (RGB)            RED/GREEN/BLUE Triple Color LED                       3
      Rotary Potentiometer Rotary Potentiometer / 10K Ohm                        1
      Humidity & Temp Sensor DHT11 (Humidity & Temperature Sensor)               1
      Temperature Sensor   TMP36GT9 (Low Voltage Temperature Sensor)             1
      Photo Resistor       PGM5537D (CDS Photo Resistor)                         1
      Magnetic Buzzer      SM-1205C (Magnetic Buzzer)                            1
      Jumper Wire (M/M)    Various Colors, 26 AWG, 6" (15 cm) Jumper wires      40
      Jumper Wire (M/F)    Various Colors, 26 AWG, 8" (20 cm) Jumper wires      10
```

## Datasheet

#### LED (RGB)

![](/img/products/wizwiki_mbed_kit/kit_kr/rgb_led_common_anode.jpg)


  * Common Anode 타입
  * 내부에 세 개의 LED (RED, GREEN, BLUE)가 있음.
  * RGB LED의 리드 다리가 4개임. 각각의 LED에 음극 리드가 연결되어 있으며 세개의 LED의 양극 리드는 하나로 묶여 있음.
  * 공통으로 사용되는 양극핀은 4개의 다리 중 제일 긴 것임. 이 다리가 3.3V 파워에 연결되어야 함.


-----

#### DHT11 (Humidity & Temperature Sensor)

![](/img/products/wizwiki_mbed_kit/kit_kr/dht-11.png)

  *온도와 습도 측정
  *습도 측정 범위 : 20 -90% (5%  오차 )
  *온도 측정 범위 : 0 - 50 ℃ (2 ℃ 오차 )
  *데이터시트: {{:products:wizwiki_mbed_kit:kit_kr:datasheet-dht11.pdf|}}
  *참고: https://learn.adafruit.com/downloads/pdf/dht.pdf

-----

#### Temperature Sensor TMP36GT9 (Low Voltage Temperature Sensor)

![](/img/products/wizwiki_mbed_kit/kit_kr/tmp36gt9.jpg)
![](/img/products/wizwiki_mbed_kit/kit_kr/tmp36gt9_pin.png)

 *Vs : 3.3V 전원 공급
 *Vout : ADC 입력핀에 연결
 *GND : 그라운드와 연결
 *데이터시트: {{:products:wizwiki_mbed_kit:kit_kr:tmp35_36_37.pdf|}}
 *참고: http://www.analog.com/media/en/technical-documentation/data-sheets/TMP35_36_37.pdf


-----

#### Photo Resistor PGM5537D (CDS Photo Resistor)

![](/img/products/wizwiki_mbed_kit/kit_kr/light-detecting-resistor.jpg)

  * 빛의 밝기에 따라 저항값이 변하는 특성을 이용한 센서
  * 광센서, 포토셀 혹든 조도 센서라 불림
  * 데이터시트: {{:products:wizwiki_mbed_kit:kit_kr:cds-resistor-pgm.pdf|}}

-----