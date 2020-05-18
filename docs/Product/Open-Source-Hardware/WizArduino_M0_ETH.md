---
id: wizarduino_m0_eth
title: WizArduino M0 ETH
date: 2020-04-03
---

![](/img/osh/wizarduino_m0_eth/%EC%B8%A1%EB%A9%B41.png)

-----

## Overview

WizArduino M0 ETH는 Arduino.org의 🌎[M0
board](http://www.arduino.org/products/boards/arduino-m0)를 기반으로 🌎[W5500
TCP/IP Embedded Ethernet
Controller](http://wizwiki.net/wiki/doku.php?id=products:w5500:start) 가
추가되어 Arduino UNO 플랫폼처럼 간단하면서도 IoT기능 구현을 위한 기본 기능을 가지고 있습니다.
![](/osh/wizarduino/m0_ethernetshield.png)

**Arduino M0 와 Ethernet Shield 2가 합쳐진**

**경제적인 WizArduino M0 ETH와 함께**

**IoT, 홈 오토메이션, 로봇, 드론 등 메이커 프로젝트를 시작해 보세요.**

-----

## Hardware Features

### WizArduino Microcontroller

  - Microcontroller : [ATSAMD21G18](/osh/wizarduino/atmel-42181-sam-d21_datasheet.pdf), 48pins LQFP
  - Architecture : ARM Cortex-M0+
  - Operation Voltage : 3.3V
  - Flash Memory : 256KB
  - SRAM : 32KB
  - Clock Speed : 48MHz
  - Analog I/O Pins : 6 + 1 DAC
  - DC Current per I/O Pins : 7mA (I/O Pins)

### General features

  - Ethernet : WIZnet [W5500](/osh/wizarduino/w5500_kor.pdf) Ethernet Controller
  - Input Voltage : 7-15V
  - Input Voltage PoE : 36 – 57V
  - Digital I/O Pins : 20, with 12 PWM and UART
  - PWM Output : 12
  - Power Consumption : 80mA
  - PCB Size : 53 x 68.5mm
  - Card Reader : Micro SD Card, with active voltage translators
  - Weight : 28g
### PinOut

![](/img/osh/wizarduino_m0_eth/pin_out.png)

-----

## Getting Started

WizArduino M0 ETH는 Arduino.org 의 M0 board와 100% 호환 됩니다. Arduino IDE를 설치
하고, 보드를 연결 하세요. 반드시 Arduino IDE 1.7.5 또는 이후 버전을 사용해야 합니다. Select board
시 Arduino M0를 선택 하세요.

자세한 내용은 아래 페이지를 참고 하세요.

🌎[Download the
software](http://www.arduino.org/learning/tutorials/first-steps-with-arduino-ide)  
WizArduino M0 ETH는 Arduino UNO와 같은 핀맵을 가짐으로, 당신의 Program을 WizArduino M0
ETH 뿐만 아니라, 여러 Arduino board에서 사용 할 수 있습니다. 하지만, 몇 가지 중요한 다른 점이 있습니다.

### Voltage

  - WizArduino M0 ETH에 실장된 microcontroller은 3.3V로 동작 합니다. input, output에
    3.3V 이상을 적용 시키면 안됩니다. 5V로 동작하는 일반적인 Arduino board와 같이 사용하면
    WizArduino M0 ETH에게 손상을 줄 수 있습니다.
  - WizArduino M0 ETH의 power는 USB connectors 또는 DC plug 로 공급 할 수 있습니다.
  - 리니어 voltage regulator 가 실장되어 전압이 높은 어댑터로 power를 공급시 발열이 있을 수 있습니다.

### Serial port on the M0

  - WizArduino M0 ETH는 하나의 USB port가 있습니다.
  - Native USB라고 불리우며, WizArduino M0 ETH의 microcontroller인 SAMD21 MCU에
    바로 연결 됩니다. 
  - 이 port는 Arduino programming 에서 "SerialUSB"로 가상 port로도 사용됩니다.

### ADC and PWM resolutions

  - WizArduino M0 ETH는 6개의 ADC(12-bit) 그리고 12개의 PWM(8-bit)을 지원 합니다.

자세한 내용은 아래 페이지를 참고 하세요.

🌎[Start with Arduino
M0](http://www.arduino.org/learning/getting-started/getting-started-with-arduino-m0)

-----

## Examples

WizArduino M0 ETH로 Programming을 하기에 앞서 몇 가지 확인 사항이 있습니다.

### Checkpoint

#### Select board

  - Getting Started에 언급 한 바와 같이 WizArduino M0 ETH는 Arduino.org 의 M0
    board와 100% 호환 됩니다. Select board 시 Arduino M0를 선택 하세요.
    ![](/img/osh/wizarduino_m0_eth/%EA%B7%B8%EB%A6%BC2.png) 

#### Serial message

##### SerialUSB

  - Getting Started에 언급 한 바와 같이 WizArduino M0 ETH는 하나의 USB port를 지원 하며,
    USB cable로 연결하여 Programming으로 SerialUSB를 사용 하여 가상 Serial port에 접근이
    가능 합니다. 
  - 해당 포트로 Serial message 이용시 아래 Code를 사용해 주세요. 
  
  >
                    void setup() {
                    SerialUSB.begin(9600);
                    while (!SerialUSB);
                    SerialUSB.println("Hello world");
                    }
>

##### Serial5

  - WizArduino M0 ETH 는 SerialUSB외에 0, 1번 핀을 이용하는 Serial5도 존재 합니다.
  - 해당 포트로 Serial message 이용시 아래 Code를 사용해 주세요. 
 
 >
                    void setup() {
                    Serial5.begin(9600);
                    while (!Serial5);
                    Serial5.println("Hello world");
                    }
>                    

더 자세한 내용은 🌎[Serial
ports](http://www.arduino.org/learning/tutorials/advanced-guides/guide-for-using-serial-ports-and-ad-converter-on-arduino-m0-and-m0-pro)
와 🌎[Start with Arduino
M0](http://www.arduino.org/learning/getting-started/getting-started-with-arduino-m0)
를 참고 하세요.

#### Ethernet

  - Overview에 언급 한 바와 같이 WizArduino M0 ETH는 Arduino M0와 Ethernet Shield
    2가 합쳐진 board입니다. 
  - Ethernet 기능을 사용 하려면, 아래와 같이 Ethernet2.h 파일을 추가 해야 합니다.
  - Ethernet 기능을 사용 할 시 \<wrap em\>**pin 10**\</wrap\>은 Ethernet 제어를 위해
    할당 되어 있으니 사용하지 마세요. 
    
>
    #include <SPI.h>
    #include <Ethernet2.h>
>   

#### SD Card

  - SD Card기능을 사용 할 시 \<wrap em\>**pin 4**\</wrap\>은 SD Card 제어를 위해 할당
    되어 있으니 사용하지 마세요.

-----

### Example

본 예제는 아두이노 스케치 **\<wrap em\>v1.7.5\</wrap\>** 에서 정상 동작 확인 되었습니다.

#### Basic

  - ![GPIO](/osh/wizarduino/1.gpio_digitalpin_example.zip)  
  * ![INTERRUPT](/osh/wizarduino/2.interrupt_example.zip)  
  * ![ADC](/osh/wizarduino/3.adc_analog_example.zip)  
  * ![PWM](/osh/wizarduino/4.pwm_example.zip)  
  * ![UART](/osh/wizarduino/5.uart_serial_example.zip)  
  * ![I2C](/osh/wizarduino/6.i2c_example.zip)
#### IoT

  - ![TCP LOOPBACK](/osh/wizarduino/tcp_loopback.zip)  
  * ![TCP LOOPBACK LED](/osh/wizarduino/tcp_loopback_led.zip)  
  * ![VERY SIMPLE TCP
    LOOPBACK](/osh/wizarduino/very_simple_tcp_loopback.zip)  
  * ![WEBSERVER LED](/osh/wizarduino/webserver_led.zip)  
  * ![SIMPLE WEBSERVER](/osh/wizarduino/simple_web_server.zip)  
  * ![WEATHER STATION](/osh/wizarduino/weather_station.zip)  
  * ![DWEET IO](/osh/wizarduino/dweet.io_example.zip)
  - 🌎[Dweet.io
    연동](http://wiznetian.com/article/wizarduino-cloud%ec%97%90-%ec%84%bc%ec%84%9c-%ec%a0%95%eb%b3%b4-%ec%a0%80%ec%9e%a5%ed%95%98%ea%b8%b0-dweet-io/)
  - 🌎[OpenWeatherMap
    연동](http://wiznetian.com/article/wizarduino%eb%a1%9c-openweathermap-%ec%82%ac%ec%9d%b4%ed%8a%b8%ec%97%90%ec%84%9c-%eb%82%a0%ec%94%a8%eb%8d%b0%ec%9d%b4%ed%84%b0-%ea%b0%80%ec%a0%b8%ec%98%a4%ea%b8%b0/)
  - 🌎[Ubidots
    연동](http://wiznetian.com/article/wizarduino-ubidots-%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c-%ec%97%b0%eb%8f%99/)
  - 🌎[CoAP
    통신](http://wiznetian.com/article/wizaruino-coap-%ed%86%b5%ec%8b%a0%ed%95%98%ea%b8%b0/)

-----

## Maker Projects

  - Coming soon

-----

## Technical Reference

### Schematic & Reference Design

  - [schematic.pdf](/osh/wizarduino/wizarduino_m0_eth_rb1-145bg72a.pdf)  
  * [reference design.zip](/osh/wizarduino/wizarduino.zip)

### Dimension

![](/osh/wizarduino_m0_eth/wizarduino_m0_eth_ver1.0_dimension_180808.png)

### Part list

  - [Part List](/osh/wizarduino/bom_wizarduino_m0_eth_rb1-145bg72a.pdf)  

-----

## FAQ

  - [How to recover a board blocked?](How_to_recover_a_board_blocked.md)
  - [Where is the MAC address?](Where_is_the_MAC_address.md)
  - [How do i get a POE module?](How_do_i_get_a_POE_module.md)

-----

## Where to Buy



![WIZnet Online Shop](/img/osh/wizarduino_m0_eth/buynow.png)  
[![WIZnetKorea Online Shop,
Korea](/img/osh/wizarduino_m0_eth/won.png)](http://shop.wiznet.co.kr/front/contents/product/view.asp?cateid=90&pid=1271)



-----
