---
id: pin_assignment
title: Pin Assignment
date: 2020-04-03
---

## Pin Layout

![20170718_w7500p_pinout](/document_framework/img/products/w7500p/overview/20170718_w7500p_pinout.png)

## Pin Description

|Pin|Name|Description|
|--------|---|------|
|1|PC_08|PWM0/CAP0/GPIO3_8/SCL0/AIN7|
|2|PC_09|PWM1/CAP1/GPIO3_9/SDA0/AIN6|
|3|PC_10|U_TXD2/GPIO3_10/PWM2/CAP2/AIN5|
|4|PC_11|U_RXD2/GPIO3_11/PWM3/CAP3/AIN4|
|5|PC_12|AIN3/GPIO3_12/SSEL0|
|6|PC_13|AIN2/GPIO3_13/SCLK0|
|7|PC_14|AIN1/GPIO14/MISO0|
|8|PC_15|AIN0/GPIO3_15/MOSI0|
|9|GND|GROUND|
|10|VDD|Digital Power Input: 3.3v|
|11|PC_06|GPIO3_6/U_TXD2|
|12|TEST|TEST|
|13|REGIN|Register Power Input|
|14|LED0|LED0 and PHY Address[0]|
|15|DUP/PB_06|GPIO2_6/DUP|
|16|GND|GROUND|
|17|LED_3|LED3 and PHY Address[3]|
|18|VDD_IO|Digital Power Input: 3.3v for I/O power supply|
|19|PA_05|SSEL0/GPIO1_5/SCL1/PWM2/CAP2|
|20|PA_06|SCLK0/GPIO1_6/SDA1/PWM3/CAP3|
|21|PA_07|MISO0/GPIO1_7/U_CTS1/PWM4/CAP4|
|22|PA_08|MOSI0/GPIO1_8/U_RTS1/PWM5/CAP5|
|23|PA_09|SCL0/GPIO1_9/U_TXD1/PWM6/CAP6|
|24|PA_10|SDA0/GPIO1_10/U_RXD1/PWM7/CAP7|
|25|VSS_IO|GROUND|
|26|RSTN|External RESET|
|27|PA_00|GPIO1_0/PWM6/CAP6|
|28|PA_01|GPIO1_1/PWM7/CAP7|
|29|PA_02|GPIO1_2/CLKOUT|
|30|PA_03|SWCLK/GPIO1_3|
|31|PA_04|SWDIO/GPIO1_4|
|32|ISET|Bandgap Circuit Resister: This pin should be connected to GND via a 6.19KΩ (1%) resistor to define the standard current of the internal citcuit|
|33|GND_1V|GROUND|
|34,35|MDI_RN/MDI_RP|Receive Input Pair: Differential Pair shared by 100Base-TX and 10Base-T modes|
|36|REGOUT|Register Power Output: This is a regulator power output. A 10uF and 0.1uF should be connected to this pin to filter the power noise|
|37,38|MDI_TN/MDI_TP|Transmit Output Pair: Differential pair shared by 100Base-TX and 10Base-T modes. When configured as 100Base-TX, output is an MLT-3 encoded waveform. When configured as 10Base-T, the output is Manchester code|
|39|GND|GROUND|
|40|AVDD|Analoge Power input: 3.3V|
|41|PA_11|U_CTS0/GPIO1_11/SSEL1|
|42|PA_12|U_RTS0/GPIO1_12/SCLK1|
|43|PA_13|U_TXD0/GPIO1_13/MISO1|
|44|PA_14|U_RXD0/GPIO1_14/MOSI1|
|45|PB_00|SSEL1/GPIO2_0/U_CTS0|
|46|PB_01|SCLK1/GPIO2_1/U_RTS0|
|47|PB_02|MISO1/GPIO2_2/U_TXD0|
|48|PB_03|MOSI1/GPIO2_3/U_RXD0|
|49|GND|GROUND|
|50|XI|25MHz Crystal Input: Connects to crystal to provide the 25MHz crystal input. If a 25MHz oscillator is used, connect XI to the oscillator's output. If a 50MHz clock is applied to pin7 TXCLK/50M_CLKI, XI must be connected to GND ot AGND33|
|51|XO|25MHz Crystal Output: Connects to crystal to provide the 25MHz output. It must be left open when XI is driven with an external 25MHz oscillator|
|52|BOOT|BOOT|
|53|PC_00|U_CTS1/GPIO0/PWM0/CAP0|
|54|PC_01|U_RTS1/GPIO3_1/PWM1/CAP1|
|55|PC_02|U_TXD1/GPIO3_2/PWM2/CAP2|
|56|PC_03|U_RXD1/GPIO3_3/PWM3/CAP3|
|57|PC_04|SCL1/GPIO3_4/PWM4/CAP4|
|58|PC_05|SDA1/GPIO3_5/PWM5/CAP5|
|61|VDD|Digital Power Input: 3.3V|
|62|GND|GROUND|
|63|XTAL_IN|Oscillator Input|
|64|XTAL_OUT|Oscillator Output|


---------
