# Random number generator(RNG)


## Introduction

RNG is a 32bit random number generator. RNG generates power on random number when power on reset. RNG can run/stop by software. RNG seed value and polynomial of RNG can be modified by software.


## Features 

*	32bit pseudo random number generator
*	Formula of pseudo random number generator (polynomial) can be modified.
*	Seed value of random generator can be modified.
*	Support power on reset random value
*	Random value can be obtained by control start/stop by software.


## Functional description.

The below Figure shows the RNG block diagram.

![](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:peripherals:rng_block_diagram.jpg "Figure 1 RNG block diagram")

### Operation-RNG

A random number is automatically generated after powering on reset, 
Follow the procedure below to manually generate a random number.

1.	Change MODE to start/stop by register.
2.	Change clock source / seed value / polynomial value if need.
3.	Run and Stop the RNG.
4.	Read Random value.

The below Figure show the flowchart of RNG operation. 

<html>
<style>
div.center { text-align: center; height: 100%; background: white; }
div.center img { width: 33%; height: auto; } 
</style>
<div class="center">
<img src = "http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:peripherals:rng_flow_chart.jpg">
</div>
</html>

------------------------------

## Peripheral_Examples
- [Random Number Generation example](rng_ex.md)
