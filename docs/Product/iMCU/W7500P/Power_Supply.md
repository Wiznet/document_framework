---
id: power_supply
title: Power Supply
date: 2020-04-03
---


## Introduction

W7500P embeds a voltage regulator in order to supply the internal 1.5V digital power domain.

- Require a 2.7V ~ 5.5V operating supply voltage (VDD)
- ADC ref voltage is same as VDD


## Voltage regulator 

The voltage regulator is always enabled after Reset and works on in only one mode.

- In Run mode, the regulator supplies full power to the 1.5V domain.
- There is no power down or sleep mode.
## Power supply supervisor

W7500 has an integrated reset (POR) circuit which is always active and ensure proper operation above a threshold of 0.6V

- The POR monitors only the VDD supply voltage. During the startup phase VDD must arrive first and be greater than or equal to 0.6V

![Figure 1 POR reset waveform](/img/products/w7500/por_reset_waveform.jpg)

## Low power modes
W7500P is in RUN mode after a system or power reset. There are two low power modes to save power when the CPU does not need to be kept running. These modes are useful for instances like when the CPU is waiting for an external interrupt. Please note that there is no power-off mode for W7500P.

The device features two low power modes:

- Sleep mode
- Deep Sleep mode

Additionally, the power consumption can be reducing by following method:

- User can slow down the system clocks
- User can block the clocks to the peripherals while they are unused.

### Sleep mode vs. Deep sleep mode

W7500P has two kinds of sleep modes. One is Sleep mode and the other is Deep sleep mode.
Two of them are almost the same except the clock gated peripherals kinds. 

<table>
  <tr>
    <th>Mode</th>
    <th>Entry</th>
    <th>Wakeup</th>
    <th>Effect-on-clocks</th>
  </tr>
  <tr>
    <td rowspan="2">Sleep mode</td>
    <td>DEEPSLEEP = 0<br />Enable WFI</td>
    <td>Any interrupt</td>
    <td rowspan="2">CPU Clock OFF<br />APB Bus Clock ON<br />AHB Bus Clock ON<br />Memory Clock ON</td>
  </tr>
  <tr>
    <td>DEEPSLEEP = 0<br />Enable WFE</td>
    <td>Wakeup event</td>
  </tr>
  <tr>
    <td rowspan="2">Deep Sleep mode</td>
    <td>DEEPSLEEP = 1<br />Enable WFI</td>
    <td>Any interrupt</td>
    <td rowspan="2">CPU Clock OFF<br />APB Bus Clock OFF<br />AHB Bus Clock OFF<br />Memory Clock OFF</td>
  </tr>
  <tr>
    <td>DEEPSLEEP = 1<br />Enable WFE</td>
    <td>Wakeup event</td>
  </tr>
</table>


### Peripheral clock gating

In Run mode, individual clocks can be stopped at any time to reduce power.
Peripheral clock gating is controlled by the CRG block.
Below is the list of clocks which can be gating in CRG block.

- ADC clock (ADCCLK)
- SSP0, SSP1 clock (SSPCLK)
- UART0, UART1 clock (UARTCLK)
- Two Timer clocks (TIMCLK0, TIMCLK1)
- 8 PWM clocks (PWMCLK0 ~ PWMCLK7)
- WDOG clock (WDOGCLK)
- Random number generator clock (RNGCLK)
