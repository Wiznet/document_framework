---
id: wizarduino_m0_eth
title: WizArduino M0 ETH
date: 2020-04-03
---

<a target="_blank" href={require("/img/osh/wizarduino_m0_eth/측면1.png").default}><img src={require("/img/osh/wizarduino_m0_eth/측면1.png").default} alt=""/></a>

-----

## Overview

WizArduino M0 ETH는 Arduino.org의 🌎[M0
board](http://www.arduino.org/products/boards/arduino-m0)를 기반으로 🌎[W5500 TCP/IP Embedded Ethernet Controller](../iEthernet/W5500/overview) 가
추가되어 Arduino UNO 플랫폼처럼 간단하면서도 IoT기능 구현을 위한 기본 기능을 가지고 있습니다.
<a target="_blank" href={require("/img/osh/wizarduino/m0_ethernetshield.png").default}><img src={require("/img/osh/wizarduino/m0_ethernetshield.png").default} alt=""/></a>

**Arduino M0 와 Ethernet Shield 2가 합쳐진**

**경제적인 WizArduino M0 ETH와 함께**

**IoT, 홈 오토메이션, 로봇, 드론 등 메이커 프로젝트를 시작해 보세요.**

-----

## Hardware Features

### WizArduino Microcontroller

  - Microcontroller : <a href="/img/osh/wizarduino/atmel-42181-sam-d21_datasheet.pdf" target="_blank">ATSAMD21G18</a>, 48pins LQFP
  - Architecture : ARM Cortex-M0+
  - Operation Voltage : 3.3V
  - Flash Memory : 256KB
  - SRAM : 32KB
  - Clock Speed : 48MHz
  - Analog I/O Pins : 6 + 1 DAC
  - DC Current per I/O Pins : 7mA (I/O Pins)

### General features

  - Ethernet : WIZnet <a href="/img/osh/wizarduino/w5500_kor.pdf" target="_blank">W5500</a> Ethernet Controller
  - Input Voltage : 7-15V
  - Input Voltage PoE : 36 – 57V
  - Digital I/O Pins : 20, with 12 PWM and UART
  - PWM Output : 12
  - Power Consumption : 80mA
  - PCB Size : 53 x 68.5mm
  - Card Reader : Micro SD Card, with active voltage translators
  - Weight : 28g
### PinOut

<a target="_blank" href={require("/img/osh/wizarduino_m0_eth/pin_out.png").default}><img src={require("/img/osh/wizarduino_m0_eth/pin_out.png").default} alt=""/></a>

-----

## Getting Started

WizArduino M0 ETH는 Arduino.org 의 M0 board와 100% 호환 됩니다. Arduino IDE를 설치
하고, 보드를 연결 하세요. 반드시 Arduino IDE 1.7.5 또는 이후 버전을 사용해야 합니다. Select board
시 Arduino M0를 선택 하세요.

자세한 내용은 아래 페이지를 참고 하세요.

🌎[Download the software](http://www.arduino.org/learning/tutorials/first-steps-with-arduino-ide)  
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

🌎[Start with Arduino M0](http://www.arduino.org/learning/getting-started/getting-started-with-arduino-m0)

-----

## Examples

WizArduino M0 ETH로 Programming을 하기에 앞서 몇 가지 확인 사항이 있습니다.

### Checkpoint

#### Select board

  - Getting Started에 언급 한 바와 같이 WizArduino M0 ETH는 Arduino.org 의 M0
    board와 100% 호환 됩니다. Select board 시 Arduino M0를 선택 하세요.
    <a target="_blank" href={require("/img/osh/wizarduino_m0_eth/그림2.png").default}><img src={require("/img/osh/wizarduino_m0_eth/그림2.png").default} alt=""/></a> 

#### Serial message

##### SerialUSB

  - Getting Started에 언급 한 바와 같이 WizArduino M0 ETH는 하나의 USB port를 지원 하며,
    USB cable로 연결하여 Programming으로 SerialUSB를 사용 하여 가상 Serial port에 접근이
    가능 합니다. 
  - 해당 포트로 Serial message 이용시 아래 Code를 사용해 주세요. 
  
  >
                    void setup(/) {
                    SerialUSB.begin(9600);
                    while (!SerialUSB);
                    SerialUSB.println("Hello world");
                    }
>

##### Serial5

  - WizArduino M0 ETH 는 SerialUSB외에 0, 1번 핀을 이용하는 Serial5도 존재 합니다.
  - 해당 포트로 Serial message 이용시 아래 Code를 사용해 주세요. 
 
 >
                    void setup(/) {
                    Serial5.begin(9600);
                    while (!Serial5);
                    Serial5.println("Hello world");
                    }
>                    

더 자세한 내용은 🌎[Serial ports](http://www.arduino.org/learning/tutorials/advanced-guides/guide-for-using-serial-ports-and-ad-converter-on-arduino-m0-and-m0-pro)
와 🌎[Start with Arduino M0](http://www.arduino.org/learning/getting-started/getting-started-with-arduino-m0)
를 참고 하세요.

#### Ethernet

  - Overview에 언급 한 바와 같이 WizArduino M0 ETH는 Arduino M0와 Ethernet Shield
    2가 합쳐진 board입니다. 
  - Ethernet 기능을 사용 하려면, 아래와 같이 Ethernet2.h 파일을 추가 해야 합니다.
  - Ethernet 기능을 사용 할 시 \<wrap em\>**pin 10**은 Ethernet 제어를 위해
    할당 되어 있으니 사용하지 마세요. 
    
>
    #include <SPI.h>
    #include <Ethernet2.h>
>   

#### SD Card

  - SD Card기능을 사용 할 시 \<wrap em\>**pin 4**은 SD Card 제어를 위해 할당
    되어 있으니 사용하지 마세요.

-----

### Example

본 예제는 아두이노 스케치 **\<wrap em\>v1.7.5** 에서 정상 동작 확인 되었습니다.

#### Basic

  * <a href="/img/osh/wizarduino/1.gpio_digitalpin_example.zip" target="_blank">GPIO</a>  
  * <a href="/img/osh/wizarduino/2.interrupt_example.zip" target="_blank">INTERRUPT</a>  
  * <a href="/img/osh/wizarduino/3.adc_analog_example.zip" target="_blank">ADC</a>  
  * <a href="/img/osh/wizarduino/4.pwm_example.zip" target="_blank">PWM</a>  
  * <a href="/img/osh/wizarduino/5.uart_serial_example.zip" target="_blank">UART</a>  
  * <a href="/img/osh/wizarduino/6.i2c_example.zip" target="_blank">I2C</a>

#### IoT

  * <a href="/img/osh/wizarduino/tcp_loopback.zip" target="_blank">TCP LOOPBACK</a>  
  * <a href="/img/osh/wizarduino/tcp_loopback_led.zip" target="_blank">TCP LOOPBACK LED</a>  
  * <a href="/img/osh/wizarduino/very_simple_tcp_loopback.zip" target="_blank">VERY SIMPLE TCP LOOPBACK</a>  
  * <a href="/img/osh/wizarduino/webserver_led.zip" target="_blank">WEBSERVER LED</a>  
  * <a href="/img/osh/wizarduino/simple_web_server.zip" target="_blank">SIMPLE WEBSERVER</a>  
  * <a href="/img/osh/wizarduino/weather_station.zip" target="_blank">WEATHER STATION</a>  
  * <a href="/img/osh/wizarduino/dweet.io_example.zip" target="_blank">DWEET IO</a>
  - 🌎[Dweet.io 연동](http://wiznetian.com/article/wizarduino-cloud%ec%97%90-%ec%84%bc%ec%84%9c-%ec%a0%95%eb%b3%b4-%ec%a0%80%ec%9e%a5%ed%95%98%ea%b8%b0-dweet-io/)
  - 🌎[OpenWeatherMap 연동](http://wiznetian.com/article/wizarduino%eb%a1%9c-openweathermap-%ec%82%ac%ec%9d%b4%ed%8a%b8%ec%97%90%ec%84%9c-%eb%82%a0%ec%94%a8%eb%8d%b0%ec%9d%b4%ed%84%b0-%ea%b0%80%ec%a0%b8%ec%98%a4%ea%b8%b0/)
  - 🌎[Ubidots 연동](http://wiznetian.com/article/wizarduino-ubidots-%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c-%ec%97%b0%eb%8f%99/)
  - 🌎[CoAP 통신](http://wiznetian.com/article/wizaruino-coap-%ed%86%b5%ec%8b%a0%ed%95%98%ea%b8%b0/)

-----

## Maker Projects

  - Coming soon

-----

## Technical Reference

### Schematic & Reference Design

  - <a href="/img/osh/wizarduino/wizarduino_m0_eth_rb1-145bg72a.pdf" target="_blank">schematic.pdf</a>  
  * <a href="/img/osh/wizarduino/wizarduino.zip" target="_blank">reference design.zip</a>

### Dimension

<a target="_blank" href={require("/img/osh/wizarduino_m0_eth/wizarduino_m0_eth_ver1.0_dimension_180808.png").default}><img src={require("/img/osh/wizarduino_m0_eth/wizarduino_m0_eth_ver1.0_dimension_180808.png").default} alt=""/></a>

### Part list

  - <a href="/img/osh/wizarduino/bom_wizarduino_m0_eth_rb1-145bg72a.pdf" target="_blank">Part List</a>  

-----

## FAQ

  - How to recover a board blocked?

   Rescue guide for microcontroller ATSAMD21G18A

    정상적인 보드의 경우 Reset을 누르면  
    장치 관리자에서 Arduino M0 (Bootloader Mode) Navtive Port(COMxx)로
    검색이 된 후  
    Arduino M0 Native Port(COMxx)로 변경되어 검색이 됩니다.  
      
    하지만, 예상치 못한 오류로  
    Arduino M0 (Bootloader Mode) Navtive Port(COMxx)로 검색이 된 후  
    Arduino M0 Native Port(COMxx)로 변경되지 못 할 경우가 있습니다. 그래서
    아두이노 스케치에서 역시 보드의 포트가 검색이 안되어 스케치 파일을
    업로드 할 수 없는 경우가 발생 합니다.

    위 증상과 관련하여 Arduino.org에서 [복구 가이드](http://www.arduino.org/learning/tutorials/advanced-guides/rescue-guide-for-microcontroller-atsamd21g18a-2)를 제공 합니다.  
      
    만약 위와 같은 증상이 발생 한다면, 위 복구 가이드 또는 아래 내용을 따라
    하여 복구 하시기 바랍니다.

    1.  보드를 PC와 연결
    2.  아두이노 스케치 프로그램을 실행
    3.  메뉴의 파일-환경설정 선택
    4.  환경설정 메뉴에서 다음 동작중 자세한 출력 보이기: 컴파일, 업로드
        선택 후 확인
    5.  아두이노 스케치 프로그램을 종료 후 재 실행
    6.  메뉴의 도구-보드-Arduino M0 선택
    7.  메뉴의 파일-예제-Basic-Blink 선택
    8.  업로드 버튼 선택
    9.  로그를 확인하다가 COM Port List 가 보일때 보드의 Reset 누름

  - Where is the MAC address?

      Ethernet을 하는 모든 장치에는 고유의 물리적인 주소가 존재합니다.  
      WizArduino M0 ETH로 Ethernet통신을 할 시 필요한 MAC address는 아래
      사진의 위치에 스티커로 부착 되어 제공 하고 있습니다.  
      <img src="/osh/wizarduino/faq/2뒷면.png" width="300" />  
      네트워크 응용 프로그램을 만들때 MAC address를 확인 하신 후 아래 코드와
      같이 확인한 MAC address를 입력하여 사용하세요.

          byte mac[] = {
            0x00, 0x08, 0xdc, 0x??, 0x??, 0x??
          };

  - How do i get a POE module?
    WizArduino M0 ETH 에는 Board 중앙 부분에 POE Module을 장착 할 수 있는 핀헤더 소켓이 있습니다.

    장착 가능한 모듈은  
    [Silvertel](https://www.silvertel.com/) 사의 [Ag9700 제품](https://www.silvertel.com/images/datasheets/Ag9700-Datasheet-low-cost-isolated-Power-over-Ethernet-PoE-module-solution.pdf) (Ag9712-2BR, Ag9700 SIL Package, OutPut Voltage : 12.0V) 입니다.

    국내에서는 [파워텔넷](http://www.powertelnet.co.kr/)사에서 취급하고 있으니 참고 하시기 바랍니다.

-----