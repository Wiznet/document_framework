---
id: pin_assignment
title: Pin Assignment
date: 2020-04-03
---




## Pin Layout
### W7500 Pin Layout
<!---![GH-pages](/static/img/products/w7500/w7500_chip.png)--->
![pin layout](/img/products/w7500/2_w7500_pin_layout.png)
## Pin Description



|     |        |      | Description |           |             |           |
|-----|--------|------|-------------|-----------|-------------|-----------|
| **Pin**|**Symbol**|**Type**|**Main**|**2nd**| **3rd**  | **4th** |
| 1   | PC\_08 | AIO  | PWM0 / CAP0 | GPIO3\_8  | SCL0        | AIN7      |
| 2   | PC\_09 | AIO  | PWM1 / CAP1 | GPIO3\_9  | SDA0        | AIN6      |
| 3   | PC\_10 | AIO  | U\_TXD2     | GPIO3\_10 | PWM2 / CAP2 | AIN5      |
| 4   | PC\_11 | AIO  | U\_RXD2     | GPIO3\_11 | PWM3 / CAP3 | AIN4      |
| 5   | PC\_12 | AIO  | AIN3        | GPIO3\_12 | SSEL0       | AIN3      |
| 6   | PC\_13 | AIO  | AIN2        | GPIO3\_13 | SCLK0       | AIN2      |
| 7   | PC\_14 | AIO  | AIN1        | GPIO3\_14 | MISO0       | AIN1      |
| 8   | PC\_15 | AIO  | AIN0        | GPIO3\_15 | MOSI0       | AIN0      |
| 9   | GND    | GND  | Ground      |           |             |           |
| 10  | VDD    | PWR  | VDD         |           |             |           |
| 11  | PD\_00 | IO   | CRS/TXD3    | GPIO4\_0  |             |           |
| 12  | PD\_01 | IO   | RXDV/TXD2   | GPIO4\_1  |             |           |
| 13  | PD\_02 | IO   | RXD0/TXD1   | GPIO4\_2  |             |           |
| 14  | PD\_03 | IO   | RXD1/TXD0   | GPIO4\_3  |             |           |
| 15  | PD\_04 | IO   | RXD2/TXCLK  | GPIO4\_4  |             |           |
| 16  | PB\_06 | IO   | RXD3/DUP    | GPIO2\_6  |             |           |
| 17  | PB\_07 | IO   | RXCLK/RXCLK | GPIO2\_7  |             |           |
| 18  | PB\_08 | IO   | DUP/RXD3    | GPIO2\_8  |             |           |
| 19  | PB\_09 | IO   | TXCLK/RXD2  | GPIO2\_9  |             |           |
| 20  | PB\_10 | IO   | TXD0/RXD1   | GPIO2\_10 |             |           |
| 21  | PB\_11 | IO   | TXD1/RXD0   | GPIO2\_11 |             |           |
| 22  | PB\_12 | IO   | TXD2/RXDV   | GPIO2\_12 |             |           |
| 23  | PB\_13 | IO   | TXD3/CRS    | GPIO2\_13 |             |           |
| 24  | PB\_04 | IO   | TXEN        | GPIO2\_04 |             |           |
| 25  | PB\_05 | IO   | COL         | GPIO2\_05 |             |           |
| 26  | PB\_14 | IO   | MDIO/MDC    | GPIO2\_14 |             |           |
| 27  | PB\_15 | IO   | MDC/MDIO    | GPIO2\_15 |             |           |
| 28  | RSTn   | I    | RSTn        |           |             |           |
| 29  | PA\_00 | IO   | GPIO1\_0    | GPIO1\_0  | PWM6/CAP6   |           |
| 30  | PA\_01 | IO   | TXD0/RXD1   | GPIO1\_1  | PWM7/CAP7   |           |
| 31  | PA\_02 | IO   | GPIO1\_2    | GPIO1\_2  | CLKOUT      |           |
| 32  | TEST   | GND  | Ground      |           |             |           |
| 33  | PA\_05 | IO   | SSEL0       | GPIO1\_5  | SCL1        | PWM2/CAP2 |
| 34  | PA\_06 | IO   | SCLK0       | GPIO1\_6  | SDA1        | PWM3/CAP3 |
| 35  | PA\_07 | IO   | MISO0       | GPIO1\_7  | U\_CTS1     | PWM4/CAP4 |
| 36 | PA\_08    | IO  | MOSI0         | GPIO1\_8  | U\_RTS1   | PWM5/CAP5 |
| 37 | PA\_09    | IO  | SCL0          | GPIO1\_9  | U\_TXD1   | PWM6/CAP6 |
| 38 | PA\_10    | IO  | SDA0          | GPIO1\_10 | U\_RXD1   | PWM7/CAP7 |
| 39 | BOOT      | IO  | BOOT          |           |           |           |
| 40 | PA\_11    | IO  | U\_CTS0       | GPIO1\_11 | SSEL1     |           |
| 41 | PA\_12    | IO  | U\_RTS0       | GPIO1\_12 | SCLK1     |           |
| 42 | PA\_13    | IO  | U\_TXD0       | GPIO1\_13 | MISO1     |           |
| 43 | PA\_14    | IO  | U\_RXD0       | GPIO1\_14 | MOSI1     |           |
| 44 | PA\_15    | IO  | GPIO1\_15     | GPIO1\_15 |           |           |
| 45 | PB\_00    | IO  | SSEL1         | GPIO2\_0  | U\_CTS0   |           |
| 46 | PB\_01    | IO  | SCLK1         | GPIO2\_1  | U\_RTS0   |           |
| 47 | PB\_02    | IO  | MISO1         | GPIO2\_2  | U\_TXD0   |           |
| 48 | PB\_03    | IO  | MOSI1         | GPIO2\_3  | U\_RXD0   |           |
| 49 | PA\_03    | IO  | SWCLK         | GPIO1\_3  |           | PWM0/CAP0 |
| 50 | PA\_04    | IO  | SWDIO         | GPIO1\_4  |           | PWM1/CAP1 |
| 51 | PC\_06    | IO  | GPIO3\_6      | GPIO3\_6  | U\_TXD2   |           |
| 52 | PC\_07    | IO  | GPIO3\_7      | GPIO3\_7  | U\_RXD2   |           |
| 53 | PC\_00    | IO  | U\_CTS1       | GPIO3\_0  | PWM0/CAP0 |           |
| 54 | PC\_01    | IO  | U\_RTS1       | GPIO3\_1  | PWM1/CAP1 |           |
| 55 | PC\_02    | IO  | U\_TXD1       | GPIO3\_2  | PWM2/CAP2 |           |
| 56 | PC\_03    | IO  | U\_RXD1       | GPIO3\_3  | PWM3/CAP3 |           |
| 57 | PC\_04    | IO  | SCL1          | GPIO3\_4  | PWM4/CAP4 |           |
| 58 | PC\_05    | IO  | SDA1          | GPIO3\_5  | PWM5/CAP5 |           |
| 59 | GND       | GND | Ground        |           |           |           |
| 60 | NC        | NC  | Not Connected |           |           |           |
| 61 | VDD       | PWR | VDD           |           |           |           |
| 62 | GND       | GND | Ground        |           |           |           |
| 63 | XTAL\_IN  | I   | Xtal in       |           |           |           |
| 64 | XTAL\_OUT | O   | Xtal out      |           |           |           |

-----

