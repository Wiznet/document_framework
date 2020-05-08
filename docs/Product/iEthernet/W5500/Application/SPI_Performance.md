---
id: spi_performance
title: SPI Performance
date: 2020-04-07
---


## Content

### W5500 Performance

#### W5500 SPI transmission


  * Cortex-M3 
    * #### Loopback Test(Only TCPs/1CH) #### 
- MCU : STM32F103C8 -
Development Tool : CoIDE v1.7.4 - ARM Ver : 4.7 2013q2 - Main Clock :
72MHz, SPI Clock(Max) : 36MHz - Test Project
:[W5500_SPI_Performance.zip](/document_framework/img/products/w5500/application/w5500_spi_performance.zip)
- Test Tool : AX2, unit of measure: Mbps

|                     |          |          |          |          |          |
| ------------------- | -------- | -------- | -------- | -------- | -------- |
| buf(KB)\\socket(KB) | 1        | 2        | 4        | 8        | 16       |
| -----------        | ------- | ------- | ------- | ------- | ------- |
| 1                   | 2.648    | 3.208    | 3.208    | 3.208    | 3.195    |
| 2                   | X        | 2.779    | 3.342    | 3.337    | 3.337    |
| 4                   | X        | X        | 3.384    | 3.407    | 3.407    |
| 8                   | X        | X        | X        | 3.441    | 3.443    |
| 16                  | X        | X        | X        | X        | 3.284    |

  - **buf : memory of MCU**/**socket : socket size of W5500** 




  * Cortex-M0
    * #### Loopback Test(Only TCPs/1CH) #### 
- MCU : M0516LBN -
Development Tool : CoIDE v1.7.4 - ARM Ver : 4.7 2013q2 - Main Clock :
50MHz, SPI Clock(Max) : 25MHz - Test Project
:[W5500_SPI_Performance.zip](/document_framework/img/products/w5500/application/w5500_spi_performance.zip)
- Test Tool : AX2, unit of measure : Mbps

|                     |          |          |          |          |          |
| ------------------- | -------- | -------- | -------- | -------- | -------- |
| buf(KB)\\socket(KB) | 1        | 2        | 4        | 8        | 16       |
| -----------        | ------- | ------- | ------- | ------- | ------- |
| 1                   | 1.49     | 1.624    | 1.624    | 1.624    | 1.624    |
| 2                   | X        | 1.592    | 1.693    | 1.693    | 1.693    |



    * Memory Size (Flash/SRAM)
      * STMicro STM32F103C8 (64KB / 20KB)
      * Nuvoton M0516LBN    (64KB / 4KB)


 --- 

#### Data throughput according to SPI clock speed


  * Cortex-M3
    * #### Loopback Test #### 
- MCU : STM32F103C8 - Development Tool :
CoIDE v1.7.4 - ARM Ver : 4.7 2013q2 - Main Clock : 72MHz, SPI Clock :
36MHz/18MHz/9MHz/4.5MHz/2.25MHz/1.12MHz/0.562Mz/0.281MHz - Test Project
:[SPI_SPEEP_TEST.zip](/document_framework/img/products/w5500/application/w5500_spispeed_test_loopback_20140212.zip)
- Test Setting : Only TCPs / 1CH / Databuf(2K) / No Delay ack X - Test
Tool : AX2, unit of measure : Mbps

|                |          |          |          |          |          |
| -------------- | -------- | -------- | -------- | -------- | -------- |
| Hz /socket(KB) | 1        | 2        | 4        | 8        | 16       |
| -----------   | ------- | ------- | ------- | ------- | ------- |
| 0.281M         | 0.124    | 0.126    | 0.129    | 0.129    | 0.129    |
| 0.562M         | 0.243    | 0.249    | 0.257    | 0.257    | 0.257    |
| 1.12M          | 0.447    | 0.456    | 0.484    | 0.484    | 0.484    |
| 2.25M          | 0.761    | 0.779    | 0.863    | 0.863    | 0.863    |
| 4.5M           | 1.196    | 1.226    | 1.417    | 1.418    | 1.418    |
| 9M             | 1.621    | 1.671    | 2.090    | 2.090    | 2.093    |
| 18M            | 2.055    | 2.108    | 2.738    | 2.738    | 2.738    |
| 36M            | 2.435    | 2.534    | 3.501    | 3.501    | 3.501    |

  - SPI36MHz / SOCKBUF16K / DATABUF16K / No Delay ACK : **3.63Mbps**
  - **socket : socket size of W5500** 
  - Test result :
    [SPI_SPEED_TEST.xls](/document_framework/img/products/w5500/application/spi_speed.xlsx)
