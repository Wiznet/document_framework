---
id: rng
title: Random number generator (RNG)
date: 2020-04-03
---

## Introduction

RNG is a 32bit random number generator. RNG generates power on random number when power on reset. RNG can run/stop by software. RNG seed value and polynomial of RNG can be modified by software.


## Features 

- 32bit pseudo random number generator
- Formula of pseudo random number generator (polynomial) can be modified.
- Seed value of random generator can be modified.
- Support power on reset random value
- Random value can be obtained by control start/stop by software.


## Functional description.

The below Figure shows the RNG block diagram.

![Figure 1 RNG block diagram](/img/products/w7500p/peripheral/rng_block_diagram.jpg)

### Operation-RNG

A random number is automatically generated after powering on reset, 
Follow the procedure below to manually generate a random number.

1.	Change MODE to start/stop by register.
2.	Change clock source/seed value/polynomial value if need.
3.	Run and Stop the RNG.
4.	Read Random value.

The below Figure show the flowchart of RNG operation. 

![](/img/products/w7500p/peripheral/rng_flow_chart.jpg)


------------------------------

## Peripheral_Examples
- [Random Number Generation example](rng-ex.md)
