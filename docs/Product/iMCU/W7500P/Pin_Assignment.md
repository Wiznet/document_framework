---
id: pin_assignment
title: Pin Assignment
date: 2020-04-03
---


## Content

# Pin Assignment
## Pin Layout

![20170718_w7500p_pinout](/document_framework/img/products/w7500p/overview/20170718_w7500p_pinout.png)

## Pin Description

|Pin|Name|Description| |-------- |1|PC*08|PWM0/CAP0/GPIO3*8/SCL0/AIN7|
|2|PC*09|PWM1/CAP1/GPIO3*9/SDA0/AIN6|
|3|PC*10|U*TXD2/GPIO3*10/PWM2/CAP2/AIN5|
|4|PC*11|U*RXD2/GPIO3*11/PWM3/CAP3/AIN4| |5|PC*12|AIN3/GPIO3*12/SSEL0|
|6|PC*13|AIN2/GPIO3*13/SCLK0| |7|PC*14|AIN1/GPIO14/MISO0|
|8|PC*15|AIN0/GPIO3*15/MOSI0| |9|GND|GROUND| |10|VDD|Digital Power
Input: 3.3v| |11|PC*06|GPIO3*6/U*TXD2| |12|TEST|TEST| |13|REGIN|Register
Power Input| |14|LED0|LED0 and PHY Address\[0\]|
|15|DUP/PB*06|GPIO2*6/DUP| |16|GND|GROUND| |17|LED*3|LED3 and PHY
Address\[3\]| |18|VDD*IO|Digital Power Input: 3.3v for I/O power supply|
|19|PA*05|SSEL0/GPIO1*5/SCL1/PWM2/CAP2|
|20|PA*06|SCLK0/GPIO1*6/SDA1/PWM3/CAP3|
|21|PA*07|MISO0/GPIO1*7/U*CTS1/PWM4/CAP4|
|22|PA*08|MOSI0/GPIO1*8/U*RTS1/PWM5/CAP5|
|23|PA*09|SCL0/GPIO1*9/U*TXD1/PWM6/CAP6|
|24|PA*10|SDA0/GPIO1*10/U*RXD1/PWM7/CAP7| |25|VSS*IO|GROUND|
|26|RSTN|External RESET| |27|PA*00|GPIO1*0/PWM6/CAP6|
|28|PA*01|GPIO1*1/PWM7/CAP7| |29|PA*02|GPIO1*2/CLKOUT|
|30|PA*03|SWCLK/GPIO1*3| |31|PA*04|SWDIO/GPIO1*4| |32|ISET|Bandgap
Circuit Resister: This pin should be connected to GND via a 6.19KΩ (1%)
resistor to define the standard current of the internal citcuit|
|33|GND*1V|GROUND| |34,35|MDI*RN/MDI*RP|Receive Input Pair: Differential
Pair shared by 100Base-TX and 10Base-T modes| |36|REGOUT|Register Power
Output: This is a regulator power output. A 10uF and 0.1uF should be
connected to this pin to filter the power noise|
|37,38|MDI*TN/MDI*TP|Transmit Output Pair: Differential pair shared by
100Base-TX and 10Base-T modes. When configured as 100Base-TX, output is
an MLT-3 encoded waveform. When configured as 10Base-T, the output is
Manchester code| |39|GND|GROUND| |40|AVDD|Analoge Power input: 3.3V|
|41|PA*11|U*CTS0/GPIO1*11/SSEL1| |42|PA*12|U*RTS0/GPIO1*12/SCLK1|
|43|PA*13|U*TXD0/GPIO1*13/MISO1| |44|PA*14|U*RXD0/GPIO1*14/MOSI1|
|45|PB*00|SSEL1/GPIO2*0/U*CTS0| |46|PB*01|SCLK1/GPIO2*1/U*RTS0|
|47|PB*02|MISO1/GPIO2*2/U*TXD0| |48|PB*03|MOSI1/GPIO2*3/U*RXD0|
|49|GND|GROUND| |50|XI|25MHz Crystal Input: Connects to crystal to
provide the 25MHz crystal input. If a 25MHz oscillator is used, connect
XI to the oscillator's output. If a 50MHz clock is applied to pin7
TXCLK/50M*CLKI, XI must be connected to GND ot AGND33| |51|XO|25MHz
Crystal Output: Connects to crystal to provide the 25MHz output. It must
be left open when XI is driven with an external 25MHz oscillator|
|52|BOOT|BOOT| |53|PC*00|U*CTS1/GPIO0/PWM0/CAP0|
|54|PC*01|U*RTS1/GPIO3*1/PWM1/CAP1| |55|PC*02|U*TXD1/GPIO3*2/PWM2/CAP2|
|56|PC*03|U*RXD1/GPIO3*3/PWM3/CAP3| |57|PC*04|SCL1/GPIO3*4/PWM4/CAP4|
|58|PC*05|SDA1/GPIO3*5/PWM5/CAP5| |61|VDD|Digital Power Input: 3.3V|
|62|GND|GROUND| |63|XTAL*IN|Oscillator Input| |64|XTAL*OUT|Oscillator
Output|

---------
