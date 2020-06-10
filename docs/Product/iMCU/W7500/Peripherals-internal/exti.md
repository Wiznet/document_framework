---
id: exti
title: External Interrupt(EXTI)
date: 2020-06-10
--- 

## Introduction

Each functional pads are connected to the external interrupt(EXTINT) source.


## Features 

*	All functional pads can be used as an external interrupt source regardless of any set of pad function.  
*	External Interrupt controller has the following functions and can be controlled by registers.
  * Interrupt mask (enable or disable, default : disable)
  * Interrupt polarity (rising or falling, default : rising)

## Functional description

All pads are connected to the control register individually. (External interrupt mask register and External Interrupt polarity register)  
External interrupt working as following expression:
 
* Each pad interrupt = Interrupt mask & (Interrupt polarity ^ Pad input)
* EXTINT = any Each pad interrupt

![](/img/products/w7500p/peripheral/external_interrupt_diagram.jpg "Figure1 External Interrupt diagram")

------------------------------

## Peripheral_Examples
- [EXTI LED_Toggle example](led_toggle.md)
- [EXTI Sleep example](sleep.md)
