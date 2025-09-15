---
id: pin-assignment
title: Pin Assignment
date: 2025-07-25
---

# Pin Assignment

For Detail information, please refer to [W55MH32 Datasheet](./Datasheet.md).

## Pin Layout

### W55MH32L Pin Layout

![W55MH32L Pin assignment](\img\products\W55MH32\W55MH32L_Pin_assignment.png)

## Pin Description

| **NO** | **Pin   Name** | **Type** | **I/O   Level** | **Main   Function    (after reset)** | **Remap**                           |
| ------ | -------------- | -------- | --------------- | ------------------------------------ | ----------------------------------- |
| 1      | TXN            | AO       | –               | TXN                                  | –                                   |
| 2      | TXP            | AO       | –               | TXP                                  |                                     |
| 3      | AGND           | AGND     | –               | –                                    | –                                   |
| 4      | AVDD           | PWR      | –               | –                                    | –                                   |
| 5      | RXN            | AI       | –               | RXN                                  | –                                   |
| 6      | RXP            | AI       | –               | RXP                                  |                                     |
| 7      | AVDD           | PWR      | –               | –                                    | –                                   |
| 8      | EXRES1         | –        | –               | –                                    | –                                   |
| 9      | PE3            | –        | –               | –                                    | –                                   |
| 10     | VBAT33         | VBAT     | S               | –                                    | –                                   |
| 11     | PC13–TAMPERRTC | I/O      | –               | PC13                                 | –                                   |
| 12     | PC14–OSC32_IN  | I/O      | –               | PC14                                 | –                                   |
| 13     | PC15–OSC32_OUT | I/O      | –               | PC15                                 | –                                   |
| 14     | PF8            | I/O      | –               | PF8                                  | –                                   |
| 15     | OSC_IN         | I        | –               | OSC_IN                               | –                                   |
| 16     | OSC_OUT        | O        | –               | OSC_OUT                              | –                                   |
| 17     | nRESET         | I        | –               | nRESET                               | –                                   |
| 18     | PC2            | I/O      | –               | PC2                                  | –                                   |
| 19     | AVDD33         | PWR      | –               | –                                    | –                                   |
| 20     | PA0–WKUP       | I/O      | –               | PA0                                  | –                                   |
| 21     | PA1            | I/O      | –               | PA1                                  | –                                   |
| 22     | PA2            | I/O      | –               | PA2                                  | –                                   |
| 23     | PA3            | I/O      | –               | PA3                                  | –                                   |
| 24     | VDD33          | PWR      | –               | –                                    |                                     |
| 25     | PA4            | I/O      | –               | PA4                                  | –                                   |
| 26     | PA5            | I/O      | –               | PA5                                  | –                                   |
| 27     | PA6            | I/O      | –               | PA6                                  | TIM1_BKIN                           |
| 28     | PA7            | I/O      | –               | PA7                                  | TIM1_CH1N                           |
| 29     | PC4            | I/O      | –               | PC4                                  | –                                   |
| 30     | PC5            | I/O      | –               | PC5                                  | –                                   |
| 31     | PB0            | I/O      | –               | PB0                                  | TIM1_CH2N                           |
| 32     | PB1            | I/O      | –               | PB1                                  | TIM1_CH3N                           |
| 33     | PB2            | I/O      | FT              | PB2/BOOT1                            | –                                   |
| 34     | PF11           | I/O      | FT              | PF11                                 | –                                   |
| 35     | PF13           | I/O      | FT              | PF13                                 | –                                   |
| 36     | AGND           | AGND     | –               | –                                    | –                                   |
| 37     | AVDD           | PWR      | –               | –                                    | –                                   |
| 38     | VBG            | AO       | –               | –                                    | –                                   |
| 39     | TOCAP          | AO       | –               | –                                    | –                                   |
| 40     | 1V2O           | PWR      | –               | –                                    | –                                   |
| 41     | SPDLED         | O        | –               | SPDLED                               | –                                   |
| 42     | LINKLED        | O        | –               | LINKLED                              | –                                   |
| 43     | DUPLED         | O        | –               | DUPLED                               | –                                   |
| 44     | ACTLED         | O        | –               | ACTLED                               |                                     |
| 45     | VDD            | PWR      | –               | –                                    | –                                   |
| 46     | XI             | AI       | –               | –                                    | –                                   |
| 47     | XO             | AO       | –               | –                                    | –                                   |
| 48     | PB10           | I/O      | FT              | PB10                                 | TIM2_CH3                            |
| 49     | PB11           | I/O      | FT              | PB11                                 | TIM2_CH4                            |
| 50     | VDD33          | PWR      | –               | –                                    | –                                   |
| 51     | PD11           | I/O      | FT              | PD11                                 | –                                   |
| 52     | PD12           | I/O      | FT              | PD12                                 | TIM4_CH1   /USART3_RX               |
| 53     | PD13           | I/O      | FT              | PD13                                 | TIM4_CH2                            |
| 54     | PD14           | I/O      | FT              | PD14                                 | TIM4_CH3                            |
| 55     | PD15           | I/O      | FT              | PD15                                 | TIM4_CH4                            |
| 56     | PG2            | I/O      | FT              | PG2                                  | –                                   |
| 57     | PG3            | I/O      | FT              | PG3                                  | –                                   |
| 58     | PG4            | I/O      | FT              | PG4                                  | –                                   |
| 59     | PG5            | I/O      | FT              | PG5                                  | –                                   |
| 60     | PG6            | I/O      | FT              | PG6                                  | –                                   |
| 61     | PG7            | I/O      | FT              | PG7                                  | –                                   |
| 62     | PG8            | I/O      | FT              | PG8                                  | –                                   |
| 63     | VDD33          | PWR      | –               | –                                    | –                                   |
| 64     | PC6            | I/O      | FT              | PC6                                  | TIM3_CH1                            |
| 65     | PC7            | I/O      | FT              | PC7                                  | TIM3_CH2                            |
| 66     | PC8            | I/O      | FT              | PC8                                  | TIM3_CH3                            |
| 67     | PC9            | I/O      | FT              | PC9                                  | TIM3_CH4                            |
| 68     | PA8            | I/O      | FT              | PA8                                  | –                                   |
| 69     | PA9            | I/O      | FT              | PA9                                  | –                                   |
| 70     | PA10           | I/O      | FT              | PA10                                 | –                                   |
| 71     | PMODE2         | I        | –               | –                                    | –                                   |
| 72     | PMODE1         | I        | –               | –                                    |                                     |
| 73     | PMODE0         | I        | –               | –                                    |                                     |
| 74     | PA11           | I/O      | –               | PA11                                 | –                                   |
| 75     | PA12           | I/O      | –               | PA12                                 | –                                   |
| 76     | PA13           | I/O      | FT              | JTMS–SWDIO                           | PA13                                |
| 77     | VDD33          | PWR      | –               | –                                    | –                                   |
| 78     | PA14           | I/O      | FT              | JTCK–SWCLK                           | PA14                                |
| 79     | PA15           | I/O      | FT              | JTDI                                 | TIM2_CH1_ETR/   PA15/SPI1_NSS       |
| 80     | PC10           | I/O      | FT              | PC10                                 | USART3_TX                           |
| 81     | PC11           | I/O      | FT              | PC11                                 | USART3_RX                           |
| 82     | PC12           | I/O      | FT              | PC12                                 | USART3_CK                           |
| 83     | PD0            | I/O      | FT              | PD0                                  | CAN_RX                              |
| 84     | PD1            | I/O      | FT              | PD1                                  | CAN_TX                              |
| 85     | PD2            | I/O      | FT              | PD2                                  | –                                   |
| 86     | PD3            | I/O      | FT              | PD3                                  | USART2_CTS                          |
| 87     | PD4            | I/O      | FT              | PD4                                  | USART2_RTS                          |
| 88     | PD5            | I/O      | FT              | PD5                                  | USART2_TX                           |
| 89     | PD6            | I/O      | FT              | PD6                                  | USART2_RX                           |
| 90     | PD7            | I/O      | FT              | PD7                                  | –                                   |
| 91     | PB3            | I/O      | FT              | JTDO                                 | PB3/TRACESWO   TIM2_CH2/   SPI1_SCK |
| 92     | PB4            | I/O      | FT              | NJTRST                               | PB4/TIM3_CH1/  SPI1_MISO            |
| 93     | PB5            | I/O      | –               | PB5                                  | TIM3_CH2/   SPI1_MOSI               |
| 94     | PB6            | I/O      | FT              | PB6                                  | USART1_TX                           |
| 95     | PB7            | I/O      | FT              | PB7                                  | USART1_RX                           |
| 96     | BOOT0          | I        | –               | BOOT0                                | –                                   |
| 97     | PB8            | I/O      | FT              | PB8                                  | I2C1_SCL/CAN_RX                     |
| 98     | PB9            | I/O      | FT              | PB9                                  | I2C1_SDA/CAN_TX                     |
| 99     | PE1            | I/O      | FT              | PE1                                  | –                                   |
| 100    | VDD33          | PWR      | –               | –                                    | –                                   |

### **W55MH32L Pin Layout**

![W55MH32Q Pin assignment](\img\products\W55MH32\W55MH32Q_Pin_assignment.png)

## Pin Description

| **NO** | **Pin   Name** | **Type** | **I/O   Level** | **Main   Function    (after reset)** | **Remap**                           |
| ------ | -------------- | -------- | --------------- | ------------------------------------ | ----------------------------------- |
| 1      | TXN            | AO       | –               | TXN                                  | –                                   |
| 2      | TXP            | AO       | –               | TXP                                  |                                     |
| 3      | AVDD           | PWR      | –               | –                                    | –                                   |
| 4      | RXN            | AI       | –               | RXN                                  | –                                   |
| 5      | RXP            | AI       | –               | RXP                                  |                                     |
| 6      | AVDD           | PWR      | –               | –                                    | –                                   |
| 7      | EXRES1         | –        | –               | –                                    | –                                   |
| 8      | AVDD           | PWR      | –               | –                                    | –                                   |
| 9      | VBAT33         | VBAT     | S               | –                                    | –                                   |
| 10     | PC13–TAMPERRTC | I/O      | –               | PC13                                 | –                                   |
| 11     | PC14–OSC32_IN  | I/O      | –               | PC14                                 | –                                   |
| 12     | PC15–OSC32_OUT | I/O      | –               | PC15                                 | –                                   |
| 13     | OSC_IN         | I        | –               | OSC_IN                               | –                                   |
| 14     | OSC_OUT        | O        | –               | OSC_OUT                              | –                                   |
| 15     | nRESET         | I        | –               | nRESET                               | –                                   |
| 16     | VDD33+  AVDD33 | PWR      | –               | –                                    | –                                   |
| 17     | PA0–WKUP       | I/O      | –               | PA0                                  | –                                   |
| 18     | PA3            | I/O      | –               | PA3                                  | –                                   |
| 19     | PA4            | I/O      | –               | PA4                                  | –                                   |
| 20     | PA5            | I/O      | –               | PA5                                  | –                                   |
| 21     | PA6            | I/O      | –               | PA6                                  | TIM1_BKIN                           |
| 22     | PA7            | I/O      | –               | PA7                                  | TIM1_CH1N                           |
| 23     | PC4            | I/O      | –               | PC4                                  | –                                   |
| 24     | PC5            | I/O      | –               | PC5                                  | –                                   |
| 25     | PB0            | I/O      | –               | PB0                                  | TIM1_CH2N                           |
| 26     | PB1            | I/O      | –               | PB1                                  | TIM1_CH3N                           |
| 27     | PB2            | I/O      | FT              | PB2/BOOT1                            | –                                   |
| 28     | PB10           | I/O      | FT              | PB10                                 | TIM2_CH3                            |
| 29     | PB11           | I/O      | FT              | PB11                                 | TIM2_CH4                            |
| 30     | VDD33          | PWR      | –               | –                                    | –                                   |
| 31     | AVDD           | PWR      | –               | –                                    | –                                   |
| 32     | VBG            | AO       | –               | –                                    | –                                   |
| 33     | TOCAP          | AO       | –               | –                                    | –                                   |
| 34     | AVDD           | PWR      | –               | –                                    | –                                   |
| 35     | 1V2O           | PWR      | –               | –                                    | –                                   |
| 36     | SPDLED         | O        | –               | SPDLED                               | –                                   |
| 37     | LINKLED        | O        | –               | LINKLED                              | –                                   |
| 38     | DUPLED         | O        | –               | DUPLED                               | –                                   |
| 39     | ACTLED         | O        | –               | ACTLED                               |                                     |
| 40     | VDD            | PWR      | –               | –                                    | –                                   |
| 41     | XI             | AI       | –               | –                                    | –                                   |
| 42     | XO             | AO       | –               | –                                    | –                                   |
| 43     | PA8            | I/O      | FT              | PA8                                  | –                                   |
| 44     | PA9            | I/O      | FT              | PA9                                  | –                                   |
| 45     | PA10           | I/O      | FT              | PA10                                 | –                                   |
| 46     | PA11           | I/O      | –               | PA11                                 | –                                   |
| 47     | PA12           | I/O      | –               | PA12                                 | –                                   |
| 48     | PA13           | I/O      | FT              | JTMS–SWDIO                           | PA13                                |
| 49     | VDD33          | PWR      | –               | –                                    | –                                   |
| 50     | PMODE2         | I        | –               | –                                    | –                                   |
| 51     | PMODE1         | I        | –               | –                                    |                                     |
| 52     | PMODE0         | I        | –               | –                                    |                                     |
| 53     | PA14           | I/O      | FT              | JTCK–SWCLK                           | PA14                                |
| 54     | PA15           | I/O      | FT              | JTDI                                 | TIM2_CH1_ETR/   PA15/SPI1_NSS       |
| 55     | PC10           | I/O      | FT              | PC10                                 | USART3_TX                           |
| 56     | PC11           | I/O      | FT              | PC11                                 | USART3_RX                           |
| 57     | PC12           | I/O      | FT              | PC12                                 | USART3_CK                           |
| 58     | PD5            | I/O      | FT              | PD5                                  | USART2_TX                           |
| 59     | PD6            | I/O      | FT              | PD6                                  | USART2_RX                           |
| 60     | PB3            | I/O      | FT              | JTDO                                 | PB3/TRACESWO   TIM2_CH2/   SPI1_SCK |
| 61     | PB4            | I/O      | FT              | NJTRST                               | PB4/TIM3_CH1/  SPI1_MISO            |
| 62     | PB5            | I/O      | –               | PB5                                  | TIM3_CH2/   SPI1_MOSI               |
| 63     | PB6            | I/O      | FT              | PB6                                  | USART1_TX                           |
| 64     | PB7            | I/O      | FT              | PB7                                  | USART1_RX                           |
| 65     | BOOT0          | I        | –               | BOOT0                                | –                                   |
| 66     | PB8            | I/O      | FT              | PB8                                  | I2C1_SCL/CAN_RX                     |
| 67     | PB9            | I/O      | FT              | PB9                                  | I2C1_SDA/CAN_TX                     |
| 68     | VDD33          | PWR      | –               | –                                    | –                                   |