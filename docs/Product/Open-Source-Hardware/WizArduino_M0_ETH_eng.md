---
id: wizarduino_m0_eth_eng
title: WizArduino M0 ETH (ENG)
date: 2020-04-03
---

![](/img/osh/wizarduino_m0_eth/측면1.png)

-----

## Overview

WizArduino M0 ETH is built on 🌎[M0 board](http://www.arduino.org/products/boards/arduino-m0) but adds 🌎[W5500 TCP/IP Embedded Ethernet Controller](./../iEthernet/W5500/Overview.md), thus making it simple as Arduino UNO platform and applicable for IoT development.


![](/img/osh/wizarduino/m0_ethernetshield.png)

**WizArduino M0 ETH is a board that combines Arduino M0 and Ethernet Shield 2, start any IoT, Home Automation, Robot, drone or any DIY project**

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

![](/img/osh/wizarduino_m0_eth/pin_out.png)

-----

## Getting Started

WizArduino M0 ETH is 100% compatible with M0 board from Arduino.org. Install Arduino IDE and try connecting your board. It is recommended to use Arduino IDE v1.7.5 and higher. Select Arduino M0 when prompted to select your board.

For more details refer to next page.

🌎[Download the software](http://www.arduino.org/learning/tutorials/first-steps-with-arduino-ide) WizArduino M0 ETH is pin compatible with Arduino UNO, thus you can use your program not only with WizARduino M0 ETH, but also with other ARduino boards too. But there are some important notes to check before.

### Voltage

- The microcontroller mounted on the WizArduino M0 ETH operates at 3.3V. You should not apply more than 3.3V to input or output. If you use it with a typical Arduino board that operates at 5V, WizArduino M0 ETH could be damaged.
- The power of the WizArduino M0 ETH can be supplied by USB connectors or DC plugs.
- A linear voltage regulator is built-in, so when supplying power to an adapter with a high voltage, overheating may occur.

### Serial port on the M0

- WizArduino M0 ETH has one USB port.
- Called Native USB, it connects directly to the SAMD21 MCU, a microcontroller of WizArduino M0 ETH.
- This port is also used as a virtual port as "SerialUSB" in Arduino programming.

### ADC and PWM resolutions

- WizArduino M0 ETH supports 6 ADCs (12-bit) and 12 PWM (8-bit).

For more details please refer to next page.

🌎[Start with Arduino M0](http://www.arduino.org/learning/getting-started/getting-started-with-arduino-m0)

-----

## Examples

Before programming with WizArduino M0 ETH, there are few points to be checked.

### Checkpoint

#### Select board

- As mentioned in Getting Started, WizArduino M0 ETH is 100% compatible with Arduino.org's M0 board. Select Arduino M0 when prompted to Select board.

![](/img/osh/wizarduino_m0_eth/그림2.png) 

#### Serial message

##### SerialUSB

- As mentioned in Getting Started, WizArduino M0 ETH supports one USB port and connects with a USB cable to access virtual serial ports using Serial USB through programming.
- Please use the code below when using the serial message with the port.

```
void setup() {
SerialUSB.begin(9600);
while (!SerialUSB);
SerialUSB.println("Hello world");
}
```

##### Serial5

- WizArduino M0 ETH supports Serial5 using pins 0, 1 in addition to Serial USB.
- Please use the code below when using the serial message with the port.
 
```
void setup() {
Serial5.begin(9600);
while (!Serial5);
Serial5.println("Hello world");
}
```                  

For more details refer to 🌎[Serial ports](http://www.arduino.org/learning/tutorials/advanced-guides/guide-for-using-serial-ports-and-ad-converter-on-arduino-m0-and-m0-pro)
and 🌎[Start with Arduino M0](http://www.arduino.org/learning/getting-started/getting-started-with-arduino-m0).

#### Ethernet

- As mentioned in Overview, WizArduino M0 ETH is a board that combines Arduino M0 and Ethernet Shield 2.
- To use the Ethernet function, you need to add the Ethernet2.h file as below.
- When using the Ethernet function, **pin 10** is assigned for Ethernet control, thus it can't be used.

```
#include <SPI.h>
#include <Ethernet2.h>
```   

#### SD Card

- When using the SD Card function, **pin 4** is assigned for SD Card control, thus it can't be used.

-----

### Example

This example sketch was checked on **v1.7.5**.

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

![](/img/osh/wizarduino_m0_eth/wizarduino_m0_eth_ver1.0_dimension_180808.png)

### Part list

  - <a href="/img/osh/wizarduino/bom_wizarduino_m0_eth_rb1-145bg72a.pdf" target="_blank">Part List</a>  

-----

## FAQ

<details>
<summary>
How to recover a board blocked?
</summary>

Rescue Guide for Microcontroller ATSAMD21G18A 

If board is operating normally, press Reset and check in the device manager for changes from Arduino M0 (Bootloader Mode) Native Port (COMxx) to Arduino M0 Native Port (COMxx).

However, an unexpected error may fail to change to Arduino M0 Native Port (COMxx) after being searched with Arduino M0 (Bootloader Mode) Navy Port (COMxx). Therefore, in Arduino Sketch, there are cases where the sketch file cannot be uploaded because the port on the board cannot be searched.
Regarding the above failures, Arduino.org provides the [Recovery Guide](http://www.arduino.org/learning/tutorials/advanced-guides/rescue-guide-for-microcontroller-atsamd21g18a-2).

If the above failures occur, please follow the above recovery guide or the following information.
1. Connect the board to the PC.
2. Run Arduino Sketch Program.
3. Go to File -> Preferences.
4. In the Preferences menu, show detailed output during the following actions: Compile, Upload Check after choosing.
5. Terminate Arduino Sketch Program and rerun it.
6. Select Tools-Board-Arduino M0 in the menu
7. Select File-Example-Basic-Blink for the menu.
8. Select the upload button.
9. Press Reset on the board when you see the COM Port List while checking the log.

</details>  

<details>
<summary>
Where is the MAC address?
</summary>
Every Ethernet device has its own physical address.
The MAC address required for Ethernet communication with WizArduino M0 ETH is provided on a sticker, shown as below.

When creating a network application, check the MAC address and enter the MAC address as shown in the code below.

<img src="/img/osh/wizarduino/2뒷면.png" width="300"/>

```cpp
byte mac[] = {
  0x00, 0x08, 0xdc, 0x??, 0x??, 0x??
};
```
</details>
<details>
<summary>
How do I get a POE module?
</summary>
WizArduino M0 ETH has a pinheader in the center of the board for mounting POE module.

Possible module for installation is <a href="https://www.silvertel.com/images/datasheets/Ag9700-Datasheet-low-cost-isolated-Power-over-Ethernet-PoE-module-solution.pdf" target="_blank">Ag9700</a>(Ag9712-2BR, Ag9700 SIL Package, OutPut Voltage : 12.0V) from [Silvertel](https://www.silvertel.com/)

Among domestic please check products of local company <a href="http://www.powertelnet.co.kr/" target="_blank">PowerTelNet</a>.

</details>

-----