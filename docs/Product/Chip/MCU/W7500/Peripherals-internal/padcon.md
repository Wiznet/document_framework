---
id: padcon
title: Pad Controller (PADCON)
date: 2020-04-03
---

## Introduction

Pads of W7500 are controllable. User can control pad’s characteristic.


## Features 

  * W7500 have digital I/O pads and digital/analog mux I/O pads
  * Controllable characteristics of pad are pull-up, pull-down, driving strength, input enable and CMOS/Schmitt trigger input buffer
  * Each pad can be control individually by register.

## Functional description

The below Figure shows the function schematic of digital I/O pad of W7500.

![](/img/products/w7500p/peripheral/schem_digital_iopad.jpg "Figure 1 function schematic of digital I/O pad")

The below Figure shows the function schematic of digital/analog mux IO pad of W7500

![](/img/products/w7500p/peripheral/schem_a_d_iopad.jpg "Figure 2 function schematic of analog/digital mux I/O pad")

Initials of Pad diagram is same as below.

P - PAD  
YA – Analog Input (connect to ADC input)  
Y – Digital Input  
IE – Input buffer enable 

<table>
  <tr>
    <th colspan="2">Condition</th>
    <th>A</th>
    <th>Y</th>
    <th>P</th>
  </tr>
  <tr>
    <td rowspan="2">Input buffer enable<br />(IE =1)</td>
    <td>Output mode</td>
    <td>OUT</td>
    <td>OUT</td>
    <td>OUT</td>
  </tr>
  <tr>
    <td>Input mode</td>
    <td>No use</td>
    <td>IN</td>
    <td>IN</td>
  </tr>
  <tr>
    <td rowspan="2">Input buffer enable<br />(IE = 0)</td>
    <td>Output mode</td>
    <td>OUT</td>
    <td>Low(0)</td>
    <td>OUT</td>
  </tr>
  <tr>
    <td>Input mode</td>
    <td>No use</td>
    <td>IN</td>
    <td>IN</td>
  </tr>
</table>


CS – CMOS/Schmitt trigger input buffer select  
PU – Pull-up enable  
A – Digital Output  
DS – Driving strength select

<table>
  <tr>
    <th colspan="2">Condition</th>
    <th colspan="2">Rise/Fall Time(nSec)</th>
    <th colspan="2">Propagation Delay(nSec)</th>
  </tr>
  <tr>
    <td>Driving Strength</td>
    <td>Capacitance loading</td>
    <td>Min</td>
    <td>Max</td>
    <td>Min</td>
    <td>Max</td>
  </tr>
  <tr>
    <td rowspan="2">High<br />(DS = 1)</td>
    <td>25pF</td>
    <td>4</td>
    <td>18</td>
    <td>7</td>
    <td>27</td>
  </tr>
  <tr>
    <td>100pF</td>
    <td>11</td>
    <td>53</td>
    <td>11</td>
    <td>44</td>
  </tr>
  <tr>
    <td rowspan="2">Low<br />(DS = 0)</td>
    <td>25pF</td>
    <td>1</td>
    <td>8</td>
    <td>4</td>
    <td>16</td>
  </tr>
  <tr>
    <td>100pF</td>
    <td>4</td>
    <td>23</td>
    <td>7</td>
    <td></td>
  </tr>
</table>

PD – Pull-down enable  

User can set pad condition with IE, CS, PU/PD, DS by register.  
And pads are can be controlled individually. 
