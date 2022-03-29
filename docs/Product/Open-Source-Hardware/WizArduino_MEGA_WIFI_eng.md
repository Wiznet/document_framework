---
id: wizarduino_mega_wifi_eng
title: WizArduino MEGA WIFI (ENG)
date: 2020-04-03
---

![](/img/osh/wizarduino_mega_wifi/1st_1894_1.png)

-----

## Overview

WizArduino MEGA WIFI is composed of 🌎[MEGA 2560 board](http://www.arduino.org/products/boards/arduino-mega-2560) and [WizFi310](../Wi-Fi-Module/WizFi310/WizFi310.md), which makes it as simple as the Arduino UNO platform and applicable for IoT development.

![](/img/osh/wizarduino_mega_wifi/mega2560_wizfi310_1.png)

**WizArduino Mega WIFI is an ideal board to start any IoT, Home Automation, Robot, drone, and DIY project**

-----

## Features

### Hardware Features

  - Microcontroller : ATmega2560
  - Operating Voltage : 5V
  - Digital I/O Pins : 20 (of which 12 provide PWM output)
  - Analog Input Pins : 6
  - DC Current per I/O Pin : 20 mA
  - DC Current for 3.3V Pin : 50 mA
  - Flash Memory : 256 KB of which 8 KB used by bootloader
  - SRAM : 8 KB
  - EEPROM : 4 KB
  - Clock Speed : 16 MHz
  - PCB Size : 53 x 68.5mm

### WiFi Features

  - Single band 2.4GHz IEEE 802.11b/g/n
  - Serial Interface : UART
  - UART Max Baud : 921600 bps
  - Soft AP : Enough memory retention, Wi-Fi Security (WEP,
    WPA/WPA2PSK), L2 Switching
  - OTA(Over The Air F/W Upgrading)
  - For more details refer to [WizFi310 page](../Wi-Fi-Module/WizFi310/wizfi310).

### Pinout

![](/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_pinout_170316.png)

-----

## Getting Started

### Basic

WizArduino MEGA WIFI is compatible with Arduino MEGA 2560 board. Install Arduino IDE and connect your board. Choose Arduino MEGA 2560 when prompted to Select board.

For more details refer to next page.

🌎 [Arduino org](http://www.arduino.org/learning/tutorials/first-steps-with-arduino-ide) 

🌎 [Arduino cc](https://www.arduino.cc/en/Guide/HomePage)  

![](/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_jumper_cap_170320.png)

### WiFi

#### Hardware

To use WiFi functions it is necessary to install jumper on 2x2 Pin Header as shown in image above.

| WiFi | MCU |
| ---- | --- |
| RX   | TX  |
| TX   | RX  |

#### Software

WizFi310 is connected to the main chip (ATmega 2560) by serial (Serial #3) inside of WizArduino MEGA WIFI. It is necessary to initialize it as below.

```cpp
#include "WizFi310.h"
void setup()
{
    Serial3.begin(115200);
    WiFi.init(&Serial3);
}
```
Please refer to [**Examples/IoT**](#examples) section for more information on WiFi usage.

-----

## WiFi Library

Users must use the library for WizFi310 to program WizArduino MEGA WIFI.

Refer to below guide for downloading and installing Arduino sketch from Github.

### GitHub

1.  Download 🌎[WizFi310 Arduino Library](https://github.com/Wiznet/WizFi310_arduino_library)
    ![](/img/osh/wizarduino_mega_wifi/github_1.png)
    ![](/img/osh/wizarduino_mega_wifi/github_2.png)

2. Unzip downloaded file and copy to **Documents/Arduino/Libraries**
    - There will be one more folder once archive is unzipped. Copy that folder
    - \WizFi310\arduino\library-master\ **WizFi310_arduino_library-master**

3. If you can see WizFi310 examples as shown below, then library was installed properly.

    ![](/img/osh/wizarduino_mega_wifi/github3.png)

### Sketch

1. In menu Sketch -> Include library -> **Manage libraries**

![](/img/osh/wizarduino_mega_wifi/wizfi310_library_manager1.png)

2.  Search for **wizfi** in pop-up window

![](/img/osh/wizarduino_mega_wifi/wizfi310_library_manager3.png)

3.  Find and install WizFi310 library

![](/img/osh/wizarduino_mega_wifi/wizfi310_library_manager4.png)
![](/img/osh/wizarduino_mega_wifi/wizfi310_library_manager5.png)

4.  Wait for installation and check sample projects.

![](/img/osh/wizarduino_mega_wifi/wizfi310_library_manager6.png)
![](/img/osh/wizarduino_mega_wifi/wizfi310_library_manager7.png)

-----

## Examples

### IoT

  - 🌎[Connect to ThingSpeak](http://wiznetian.com/article/wizarduino-wifi-thingspeak-%EC%97%B0%EB%8F%99%ED%95%98%EA%B3%A0-%EC%84%BC%EC%84%9C-%EA%B0%92%EC%9D%84-%EB%B3%B4%EB%82%B4%EA%B8%B0/)
  - 🌎[Connect to OpenWeatherMap](http://wiznetian.com/article/wizarduino-wifi%EB%A1%9C-openweathermap-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90%EC%84%9C-%EB%82%A0%EC%94%A8%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0/)
  - 🌎[Connect to Dweet.io](http://wiznetian.com/article/wizarduino-wifi-cloud%ec%97%90-%ec%84%bc%ec%84%9c-%ec%a0%95%eb%b3%b4-%ec%a0%80%ec%9e%a5%ed%95%98%ea%b8%b0-dweet-io/)
  - 🌎[Connect to CoAP](http://wiznetian.com/article/wizaruino-wifi-coap-%ed%86%b5%ec%8b%a0%ed%95%98%ea%b8%b0/)
  - 🌎[Connect to Ubidots](http://wiznetian.com/article/wizarduino-wifi-ubidots-%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c-%ec%97%b0%eb%8f%99/)
  - 🌎[MQTT](http://wiznetian.com/article/wizarduino-wifimqtt-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/)
  - You can find more examples at
    🌎[WizFi310_arduino_library/examples](https://github.com/Wiznet/WizFi310_arduino_library/tree/master/examples)

-----
## Maker Projects

  - Coming Soon

-----

## Technical Reference

### Schematic & Reference Design

  - <a href="/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_sch_170314.pdf" target="_blank">schematic.pdf</a>
  - <a href="/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_design_170314.zip" target="_blank">reference design.zip</a>

### Dimension

![](/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_dimension_170315.png)

### Part List

  - <a href="/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_ver1.0_pl_170320.pdf" target="_blank">Part List</a>  

-----

## FAQ

<details><summary>
What are the differences between WizFi310 and other WiFi modules?
</summary>
WizFi310 description

There are many Embedded WiFi modules these days, and the technology has been leveled to some extent (except for some low-cost WiFi modules), so there is no special difference in specifications or features.

- Control using AT Command through UART interface.
- 802.11 bgn support.
- Support for WEP, WPA/WPA2, TKIP/AES.
- Support for Soft AP mode.
- It can be set up/controlled using a smartphone.
- TCP/UDP, SSL, MQTT/MQTTS, and multi-socket support.
- WizFi 310 also supports all of the above specifications.

However, it is a product developed directly by Wiznet, so we can say that its advantage is that WizFi310 can be easily connected to IoT platforms of domestic telecommunication companies such as SKT Thingplug and KT IoT Makers.

The Wiznet Academy provides training sessions for using WizFi310 with SKT Thingplug, which has a built-in ThingPlug connection, and KT IoTMakers is registered as the official Compatible Product (for the first time as a WiFi module).

- [Training](http://wiznetacademy.com/index.php?module=lecture&act=dispLectureView&lecture_seq=2253&schedule_seq=3)
- [GIGA IoTMakers](https://iotmakers.kt.com/openp/index.html#/home)

It would be a particularly good choice for customers who want to connect to SKT or KT's IoT platforms through Wi-Fi.
</details>
<details>
<summary>
What is WiFi range?
</summary>
As a result of internal testing, WizFi310 signal can range up to 160m outdoors. (However, in this case, there could be a difference in performance depending on the antenna of the router used.)
</details>

-----
