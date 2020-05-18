---
id: dma
title: DMA
date: 2020-04-03
---


# Overview

W5100S-EVB support DMA(Direct Memory Addressing) of SPI Mode. To operate at its maximum speed, the SPI needs to be fed with the data for transmission and the data received on the Rx buffer should be read to avoid overrun.

## Development Environment

----
 - MCU : STM32F103VC 
   - System Clock : 72MHz,  SPI2 clock : 18MHz(Max clock))
 - Used program: Atollic True STUDIO 
 - W5100S Setting
   - Socket size : 8K, No Delay Ack 
   
   ## Application note

-----

### Revision history

| Version | Date       | Download                                                                           |
| ------- | ---------- | ---------------------------------------------------------------------------------- |
| 1.0.0   | 2018-12-14 | ![W5100S\_AN\_DMA\_V100K.pdf](/img/products/w5100s/w5100s_evb/w5100s_an_dma_v100k.pdf) |
| :::     | 2019-04-16 | ![W5100S\_AN\_DMA\_V100E.pdf](/img/products/w5100s/application/w5100s_an_dma_v100e.pdf)            |

## Reference Code

-----

**Note** : DMA reference code is designed for W5100S. But if you use the
MCU of STM32F1xx,the other chips(W5100, W5100S, W5200, W5300, W5500) can
use this application.

### Revision history

| Version | Date       | Download                                                                      | ETC             |
| ------- | ---------- | ----------------------------------------------------------------------------- | --------------- |
| 1.0.0   | 2018-12-14 | ![https://github.com/Wiznet/W5100S-EVB](https://github.com/Wiznet/W5100S-EVB) | Initial Version |

## Comparison table

| Opearation Peripherals | Figure                                                  | Opearation Peripherals | Figure                                                    |
| ---------------------- | ------------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| SPI                    | ![](/img/products/w5100s/w5100s_evb/spi_0.8mhz_8k_nd_2.jpg) | SPI\_DMA               | ![](/img/products/w5100s/w5100s_evb/spi_dma_6.4mhz_8k_nd.jpg) |
| BUS                    | ![](/img/products/w5100s/w5100s_evb/bus_3.7mhz_8k_nd.jpg)   | BUS\_DMA               | ![](/img/products/w5100s/w5100s_evb/bus_dma_9.6mhz_8k_nd.jpg) |
