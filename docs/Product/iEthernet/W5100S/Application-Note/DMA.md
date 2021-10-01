---
id: dma
title: DMA
date: 2020-04-03
---


## Overview

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
| 1.0.0   | 2018-12-14 | <a href="/img/products/w5100s/w5100s_evb/w5100s_an_dma_v100k.pdf" target="_blank">W5100S\_AN\_DMA\_V100K.pdf</a> |
| :::     | 2019-04-16 | <a href="/img/products/w5100s/application/w5100s_an_dma_v100e.pdf" target="_blank">W5100S\_AN\_DMA\_V100E.pdf</a>            |

## Reference Code

-----

**Note** : DMA reference code is designed for W5100S. But if you use the
MCU of STM32F1xx,the other chips(W5100, W5100S, W5200, W5300, W5500) can
use this application.

### Revision history

| Version | Date       | Download                                                                      | ETC             |
| ------- | ---------- | ----------------------------------------------------------------------------- | --------------- |
| 1.0.0   | 2018-12-14 | <a href="https://github.com/Wiznet/W5100S-EVB" target="_blank">https://github.com/Wiznet/W5100S-EVB</a> | Initial Version |

## Comparison table

| Opearation Peripherals | Figure                                                  | Opearation Peripherals | Figure                                                    |
| ---------------------- | ------------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| SPI                    | <a target="_blank" href={require("/img/products/w5100s/w5100s_evb/spi_0.8mhz_8k_nd_2.jpg").default}><img src={require("/img/products/w5100s/w5100s_evb/spi_0.8mhz_8k_nd_2.jpg").default} alt=""/></a> | <a target="_blank" href={require("/img/products/w5100s/w5100s_evb/spi_dma_6.4mhz_8k_nd.jpg").default}><img src={require("/img/products/w5100s/w5100s_evb/spi_dma_6.4mhz_8k_nd.jpg").default} alt=""/></a> | 
| BUS                    | <a target="_blank" href={require("/img/products/w5100s/w5100s_evb/bus_3.7mhz_8k_nd.jpg").default}><img src={require("/img/products/w5100s/w5100s_evb/bus_3.7mhz_8k_nd.jpg").default} alt=""/></a> | <a target="_blank" href={require("/img/products/w5100s/w5100s_evb/spi_dma_6.4mhz_8k_nd.jpg").default}><img src={require("/img/products/w5100s/w5100s_evb/spi_dma_6.4mhz_8k_nd.jpg").default} alt=""/></a> |
