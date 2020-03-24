---
id: pin_assignment
title: Pin Assignment
date: 2020-03-
---


## Content
\<markdown\> \#Pin Assignment \#\#Pin Layout

\!\[\](<http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500p:overview:20170718_w7500p_pinout.png>)

\#\#Pin Description

|     |      |             |
| --- | ---- | ----------- |
| Pin | Name | Description |

|--------

|       |                 |                                                                                                                                                                                                                                               |
| ----- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | PC\_08          | PWM0/CAP0/GPIO3\_8/SCL0/AIN7                                                                                                                                                                                                                  |
| 2     | PC\_09          | PWM1/CAP1/GPIO3\_9/SDA0/AIN6                                                                                                                                                                                                                  |
| 3     | PC\_10          | U\_TXD2/GPIO3\_10/PWM2/CAP2/AIN5                                                                                                                                                                                                              |
| 4     | PC\_11          | U\_RXD2/GPIO3\_11/PWM3/CAP3/AIN4                                                                                                                                                                                                              |
| 5     | PC\_12          | AIN3/GPIO3\_12/SSEL0                                                                                                                                                                                                                          |
| 6     | PC\_13          | AIN2/GPIO3\_13/SCLK0                                                                                                                                                                                                                          |
| 7     | PC\_14          | AIN1/GPIO14/MISO0                                                                                                                                                                                                                             |
| 8     | PC\_15          | AIN0/GPIO3\_15/MOSI0                                                                                                                                                                                                                          |
| 9     | GND             | GROUND                                                                                                                                                                                                                                        |
| 10    | VDD             | Digital Power Input: 3.3v                                                                                                                                                                                                                     |
| 11    | PC\_06          | GPIO3\_6/U\_TXD2                                                                                                                                                                                                                              |
| 12    | TEST            | TEST                                                                                                                                                                                                                                          |
| 13    | REGIN           | Register Power Input                                                                                                                                                                                                                          |
| 14    | LED0            | LED0 and PHY Address\[0\]                                                                                                                                                                                                                     |
| 15    | DUP/PB\_06      | GPIO2\_6/DUP                                                                                                                                                                                                                                  |
| 16    | GND             | GROUND                                                                                                                                                                                                                                        |
| 17    | LED\_3          | LED3 and PHY Address\[3\]                                                                                                                                                                                                                     |
| 18    | VDD\_IO         | Digital Power Input: 3.3v for I/O power supply                                                                                                                                                                                                |
| 19    | PA\_05          | SSEL0/GPIO1\_5/SCL1/PWM2/CAP2                                                                                                                                                                                                                 |
| 20    | PA\_06          | SCLK0/GPIO1\_6/SDA1/PWM3/CAP3                                                                                                                                                                                                                 |
| 21    | PA\_07          | MISO0/GPIO1\_7/U\_CTS1/PWM4/CAP4                                                                                                                                                                                                              |
| 22    | PA\_08          | MOSI0/GPIO1\_8/U\_RTS1/PWM5/CAP5                                                                                                                                                                                                              |
| 23    | PA\_09          | SCL0/GPIO1\_9/U\_TXD1/PWM6/CAP6                                                                                                                                                                                                               |
| 24    | PA\_10          | SDA0/GPIO1\_10/U\_RXD1/PWM7/CAP7                                                                                                                                                                                                              |
| 25    | VSS\_IO         | GROUND                                                                                                                                                                                                                                        |
| 26    | RSTN            | External RESET                                                                                                                                                                                                                                |
| 27    | PA\_00          | GPIO1\_0/PWM6/CAP6                                                                                                                                                                                                                            |
| 28    | PA\_01          | GPIO1\_1/PWM7/CAP7                                                                                                                                                                                                                            |
| 29    | PA\_02          | GPIO1\_2/CLKOUT                                                                                                                                                                                                                               |
| 30    | PA\_03          | SWCLK/GPIO1\_3                                                                                                                                                                                                                                |
| 31    | PA\_04          | SWDIO/GPIO1\_4                                                                                                                                                                                                                                |
| 32    | ISET            | Bandgap Circuit Resister: This pin should be connected to GND via a 6.19KΩ (1%) resistor to define the standard current of the internal citcuit                                                                                               |
| 33    | GND\_1V         | GROUND                                                                                                                                                                                                                                        |
| 34,35 | MDI\_RN/MDI\_RP | Receive Input Pair: Differential Pair shared by 100Base-TX and 10Base-T modes                                                                                                                                                                 |
| 36    | REGOUT          | Register Power Output: This is a regulator power output. A 10uF and 0.1uF should be connected to this pin to filter the power noise                                                                                                           |
| 37,38 | MDI\_TN/MDI\_TP | Transmit Output Pair: Differential pair shared by 100Base-TX and 10Base-T modes. When configured as 100Base-TX, output is an MLT-3 encoded waveform. When configured as 10Base-T, the output is Manchester code                               |
| 39    | GND             | GROUND                                                                                                                                                                                                                                        |
| 40    | AVDD            | Analoge Power input: 3.3V                                                                                                                                                                                                                     |
| 41    | PA\_11          | U\_CTS0/GPIO1\_11/SSEL1                                                                                                                                                                                                                       |
| 42    | PA\_12          | U\_RTS0/GPIO1\_12/SCLK1                                                                                                                                                                                                                       |
| 43    | PA\_13          | U\_TXD0/GPIO1\_13/MISO1                                                                                                                                                                                                                       |
| 44    | PA\_14          | U\_RXD0/GPIO1\_14/MOSI1                                                                                                                                                                                                                       |
| 45    | PB\_00          | SSEL1/GPIO2\_0/U\_CTS0                                                                                                                                                                                                                        |
| 46    | PB\_01          | SCLK1/GPIO2\_1/U\_RTS0                                                                                                                                                                                                                        |
| 47    | PB\_02          | MISO1/GPIO2\_2/U\_TXD0                                                                                                                                                                                                                        |
| 48    | PB\_03          | MOSI1/GPIO2\_3/U\_RXD0                                                                                                                                                                                                                        |
| 49    | GND             | GROUND                                                                                                                                                                                                                                        |
| 50    | XI              | 25MHz Crystal Input: Connects to crystal to provide the 25MHz crystal input. If a 25MHz oscillator is used, connect XI to the oscillator's output. If a 50MHz clock is applied to pin7 TXCLK/50M\_CLKI, XI must be connected to GND ot AGND33 |
| 51    | XO              | 25MHz Crystal Output: Connects to crystal to provide the 25MHz output. It must be left open when XI is driven with an external 25MHz oscillator                                                                                               |
| 52    | BOOT            | BOOT                                                                                                                                                                                                                                          |
| 53    | PC\_00          | U\_CTS1/GPIO0/PWM0/CAP0                                                                                                                                                                                                                       |
| 54    | PC\_01          | U\_RTS1/GPIO3\_1/PWM1/CAP1                                                                                                                                                                                                                    |
| 55    | PC\_02          | U\_TXD1/GPIO3\_2/PWM2/CAP2                                                                                                                                                                                                                    |
| 56    | PC\_03          | U\_RXD1/GPIO3\_3/PWM3/CAP3                                                                                                                                                                                                                    |
| 57    | PC\_04          | SCL1/GPIO3\_4/PWM4/CAP4                                                                                                                                                                                                                       |
| 58    | PC\_05          | SDA1/GPIO3\_5/PWM5/CAP5                                                                                                                                                                                                                       |
| 61    | VDD             | Digital Power Input: 3.3V                                                                                                                                                                                                                     |
| 62    | GND             | GROUND                                                                                                                                                                                                                                        |
| 63    | XTAL\_IN        | Oscillator Input                                                                                                                                                                                                                              |
| 64    | XTAL\_OUT       | Oscillator Output                                                                                                                                                                                                                             |

-----

\</markdown\>
