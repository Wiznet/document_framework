---
id: electrical_characteristics
title: Electrical Characteristics
date: 2020-04-03
---


## Content

# Electrical Characteristics

## Absolute maximum ratings

These are stress ratings only and functional operation of the device at
these conditions is not implied. Exposure to maximum rating conditions
for extended periods may affect device reliability.

### Voltage Characteristics

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol</th>
    <th class="tg-s6z2">Ratings</th>
    <th class="tg-s6z2">Min</th>
    <th class="tg-huh2">Max</th>
    <th class="tg-s6z2">Unit</th>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=V_{DD}-V_{SS}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?V_{DD}-V_{SS}" title="V_{DD}-V_{SS}" /></a></td>
    <td class="tg-s6z2">External main supply voltage (VDD)</td>
    <td class="tg-s6z2">-0.3</td>
    <td class="tg-s6z2">3.6</td>
    <td class="tg-s6z2">V</td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=V_{IN}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?V_{IN}" title="V_{IN}" /></a></td>
    <td class="tg-s6z2">Input voltage on IO pins</td>
    <td class="tg-s6z2">VSS - 0.3</td>
    <td class="tg-s6z2">3.6</td>
    <td class="tg-s6z2">V</td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=S_{VDDH}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?S_{VDDH}" title="S_{VDDH}" /></a></td>
    <td class="tg-s6z2">I/O Power on slope</td>
    <td class="tg-s6z2">3.3V/Sec</td>
    <td class="tg-s6z2">1V/uSec</td>
    <td class="tg-s6z2">-</td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=\bigtriangleup&space;V_{DD}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?\bigtriangleup&space;V_{DD}" title="\bigtriangleup V_{DD}" /></a></td>
    <td class="tg-s6z2">Variations between difference VDD power pins</td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">50</td>
    <td class="tg-s6z2">mV</td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=\bigtriangleup&space;V_{SS}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?\bigtriangleup&space;V_{SS}" title="\bigtriangleup V_{SS}" /></a></td>
    <td class="tg-s6z2">Variations between different ground pins</td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">50</td>
    <td class="tg-s6z2">mV</td>
  </tr>
</table>

### Current Characteristics

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol</th>
    <th class="tg-s6z2">Ratings</th>
    <th class="tg-huh2">Max</th>
    <th class="tg-s6z2">Unit</th>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=I_{VDD_SUM}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?I_{VDD_SUM}" title="I_{VDD_SUM}" /></a></td>
    <td class="tg-s6z2">Total current into sum of all VDD power lines (source)<br />  </td>
    <td class="tg-s6z2">100</td>
    <td class="tg-s6z2">mA</td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=I_{VDD}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?I_{VDD}" title="I_{VDD}" /></a></td>
    <td class="tg-s6z2">Maximum current into each ADD power pin (source)<br />  </td>
    <td class="tg-s6z2">90</td>
    <td class="tg-s6z2">mA</td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=I_{IO\_PAD}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?I_{IO\_PAD}" title="I_{IO\_ PAD}" /></a></td>
    <td class="tg-s6z2">Total output current sunk by sum of all IOs and control pins<br />  </td>
    <td class="tg-s6z2">75</td>
    <td class="tg-s6z2">mA</td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=I_{INJ\_PAD}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?I_{INJ\_PAD}" title="I_{INJ\_ PAD}" /></a></td>
    <td class="tg-s6z2">Single pin input injected current<br />  </td>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=\pm10" target="_blank"><img src="http://latex.codecogs.com/gif.latex?\pm10" title="\pm 10" /></a></td>
    <td class="tg-s6z2">mA</td>    
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=I_{INJ\_SUM}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?I_{INJ\_SUM}" title="I_{INJ\_SUM}" /></a></td>
    <td class="tg-s6z2">Sum of all input injected current<br />  </td>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=\pm50" target="_blank"><img src="http://latex.codecogs.com/gif.latex?\pm50" title="\pm 50" /></a></td>
    <td class="tg-s6z2">mA</td>
  </tr>
</table>

###Thermal Characteristics

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol</th>
    <th class="tg-s6z2">Ratings</th>
    <th class="tg-huh2">Min</th>
    <th class="tg-s6z2">Max</th>
    <th class="tg-031e">Unit</th>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=T_{Storge}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?T_{Storge}" title="T_{Storge}" /></a></td>
    <td class="tg-s6z2">Storage temperature range</td>
    <td class="tg-s6z2">-55</td>
    <td class="tg-s6z2">+150</td>
    <td class="tg-031e">℃</td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=T_{Junc}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?T_{Junc}" title="T_{Junc}" /></a></td>
    <td class="tg-s6z2">Maximum junction temperature under bias</td>
    <td class="tg-s6z2">-40</td>
    <td class="tg-s6z2">+150</td>
    <td class="tg-031e">℃</td>
  </tr>
</table>

## Operating conditions

### General Operating Conditions

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol</th>
    <th class="tg-s6z2">Parameter</th>
    <th class="tg-huh2">Conditions</th>
    <th class="tg-s6z2">Min</th>
    <th class="tg-s6z2">Max</th>
    <th class="tg-s6z2">Unit</th>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=f_{FCLK}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?f_{FCLK}" title="f_{FCLK}" /></a><br />  </td>
    <td class="tg-s6z2">Internal CPU clock frequency<br />  </td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2">0<br />  </td>
    <td class="tg-s6z2">48<br />  </td>
    <td class="tg-s6z2">MHz<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=V_{DD}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?V_{DD}" title="V_{DD}" /></a><br />  </td>
    <td class="tg-s6z2">Standard operating voltage<br />  </td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2">2.7<br />  </td>
    <td class="tg-s6z2">3.6<br />  </td>
    <td class="tg-s6z2">V<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=V_{IO}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?V_{IO}" title="V_{IO}" /></a><br />  </td>
    <td class="tg-s6z2">Input voltage on PIN<br />  </td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=V_{SS}-0.3" target="_blank"><img src="http://latex.codecogs.com/gif.latex?V_{SS}-0.3" title="V_{SS}-0.3" /></a><br />  </td>
    <td class="tg-s6z2">3.6<br />  </td>
    <td class="tg-s6z2">V<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=T_{A}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?T_{A}" title="T_{A}" /></a><br />  </td>
    <td class="tg-s6z2">Ambient temperature <br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">-40<br />  </td>
    <td class="tg-s6z2">85<br />  </td>
    <td class="tg-s6z2">℃</td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=T_{J}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?T_{J}" title="T_{J}" /></a><br />  </td>
    <td class="tg-s6z2">Junction Temperature range<br />  </td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2">-30<br />  </td>
    <td class="tg-s6z2">105<br />  </td>
    <td class="tg-s6z2">℃</td>
  </tr>
</table>

### Supply Current Characteristics

#### Normal operation

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
.tg .tg-s6z2{vertical-align:middle; text-align:center}
.tg .tg-huh2{font-size:14px;text-align:center}
</style>
<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol</th>
    <th class="tg-s6z2">Parameter</th>
    <th class="tg-huh2">Conditions 1</th>
    <th class="tg-s6z2">Condition 2</th>
    <th class="tg-s6z2">Typ</th>
    <th class="tg-s6z2">Unit</th>
  </tr>
  <tr>
    <td class="tg-s6z2" rowspan="3"><a href="http://www.codecogs.com/eqnedit.php?latex=I_{DD\_NOR}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?I_{DD\_NOR}" title="I_{DD\_NOR}" /></a><br />  </td>
    <td class="tg-s6z2" rowspan="3">Supply current<br />  </td>
    <td class="tg-s6z2" rowspan="3">Active mode; code<br />  While(1) {}<br />  Executed from flash memory<br />  </td>
    <td class="tg-s6z2">System clock = 10MHz</td>
    <td class="tg-s6z2">6.14<br />  </td>
    <td class="tg-s6z2">mA<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">System clock = 20MHz<br />  </td>
    <td class="tg-s6z2">8.82<br />  </td>
    <td class="tg-s6z2">mA<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">System clock = 40MHz<br />  </td>
    <td class="tg-s6z2">14.09<br />  </td>
    <td class="tg-s6z2">mA<br />  </td>
  </tr>
</table>

#### Sleep mode

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol<br />  </th>
    <th class="tg-s6z2">Parameter<br />  </th>
    <th class="tg-s6z2">Conditions 1<br />  </th>
    <th class="tg-s6z2">Condition 2<br />  </th>
    <th class="tg-031e">Typ<br />  </th>
    <th class="tg-031e">Unit</th>
  </tr>
  <tr>
    <td class="tg-s6z2" rowspan="3"><a href="http://www.codecogs.com/eqnedit.php?latex=I_{DD\_SLP}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?I_{DD\_SLP}"title="I_{DD\_SLP}" /></a><br /></td>
    <td class="tg-s6z2" rowspan="3">Supply current<br /></td>
    <td class="tg-s6z2" rowspan="3">After enter sleep mode<br />All peripheral clocks ON<br />(same as system clock)<br /></td>
    <td class="tg-s6z2">System clock = 10MHz<br /></td>
    <td class="tg-031e">3.51<br /></td>
    <td class="tg-031e">mA<br /></td>
  </tr>
  <tr>
    <td class="tg-s6z2">System clock = 20MHz<br /></td>
    <td class="tg-031e">5.65</td>
    <td class="tg-031e">mA<br /></td>
  </tr>
  <tr>
    <td class="tg-031e">System clock = 40MHz<br /></td>
    <td class="tg-031e">9.61<br /></td>
    <td class="tg-031e">mA<br /></td>
  </tr>
</table>

#### Deep sleep mode

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol<br />  </th>
    <th class="tg-s6z2">Parameter<br />  </th>
    <th class="tg-s6z2">Conditions1<br />  </th>
    <th class="tg-s6z2">Condition2<br />  </th>
    <th class="tg-031e">Typ<br />  </th>
    <th class="tg-031e">Unit</th>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=I_{DD\_SLP}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?I_{DD\_SLP}" title="I_{DD\_SLP}" /></a></td>
    <td class="tg-s6z2">Supply current</td>
    <td class="tg-s6z2">After enter deep sleep mode<br />  All peripheral clocks OFF<br />  </td>
    <td class="tg-s6z2">-</td>
    <td class="tg-031e">2.49</td>
    <td class="tg-031e"></td>
  </tr>
</table>

## I/O PAD Characteristics

### DC Specification

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol<br />  </th>
    <th class="tg-s6z2">Parameter<br />  </th>
    <th class="tg-s6z2">Conditions<br />  </th>
    <th class="tg-s6z2">Min</th>
    <th class="tg-s6z2">Max</th>
    <th class="tg-s6z2">Unit</th>
  </tr>
  <tr>
    <td class="tg-s6z2">VIH</td>
    <td class="tg-s6z2">I/O Input high voltage<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">2.145<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">V<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">VIL<br />  </td>
    <td class="tg-s6z2">I/O Input low voltage<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">1.155<br />  </td>
    <td class="tg-s6z2">V<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=V_{HYS}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?V_{HYS}" title="V_{HYS}" /></a><br />  </td>
    <td class="tg-s6z2">Schmitt trigger hysteresis<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">0.33<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">V<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">IIH<br />  </td>
    <td class="tg-s6z2">I/O Input high current<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">1<br />  </td>
    <td class="tg-s6z2">uA</td>
  </tr>
  <tr>
    <td class="tg-s6z2">IIL<br />  </td>
    <td class="tg-s6z2">I/O Input low current<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">-1<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">uA<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">VOH<br />  </td>
    <td class="tg-s6z2">I/O Output high voltage<br />  </td>
    <td class="tg-s6z2">High driving strength Iload = 6mA<br />  Low driving strength Iload = 3mA<br />  </td>
    <td class="tg-s6z2">2.5<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">V<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">VOL<br />  </td>
    <td class="tg-s6z2">I/O Output low voltage<br />  </td>
    <td class="tg-s6z2">High driving strength Iload = 6mA<br />Low driving strength Iload = 3mA</td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">0.5<br />  </td>
    <td class="tg-s6z2">V<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=R_{pup}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?R_{pup}" title="R_{pup}" /></a><br /> <a href="http://www.codecogs.com/eqnedit.php?latex=R_{pdn}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?R_{pdn}" title="R_{pdn}" /></a><br />  </td>
    <td class="tg-s6z2">Pull-up/Pull-down resistor<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">20<br />  </td>
    <td class="tg-s6z2">100<br />  </td>
    <td class="tg-s6z2">KOhm<br />  </td>
  </tr>
</table>

## Flash memory

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol<br />  </th>
    <th class="tg-s6z2">Parameter<br />  </th>
    <th class="tg-s6z2">Min<br />  </th>
    <th class="tg-s6z2">Unit<br />  </th>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=N_{END}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?N_{END}" title="N_{END}" /></a><br />  </td>
    <td class="tg-s6z2">Sector Endurance<br />  </td>
    <td class="tg-s6z2">10,000<br />  </td>
    <td class="tg-s6z2">Cycles<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=T_{DR}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?T_{DR}" title="T_{DR}" /></a><br />  </td>
    <td class="tg-s6z2">Data Retention<br />  </td>
    <td class="tg-s6z2">10<br />  </td>
    <td class="tg-s6z2"><br />  Years<br />  </td>
  </tr>
</table>

## Electrical Sensitivity Characteristics

### Electostatic discharge (ESD)

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol<br />  </th>
    <th class="tg-s6z2">Parameter<br />  </th>
    <th class="tg-huh2">Test Method<br />  </th>
    <th class="tg-s6z2">Min<br />  </th>
    <th class="tg-s6z2">Max<br />  </th>
    <th class="tg-s6z2">Unit<br />  </th>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=V_{ESD(HBM)}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?V_{ESD(HBM)}" title="V_{ESD(HBM)}" /></a><br />  </td>
    <td class="tg-s6z2">Electostatic discharge (Human body model)<br />  </td>
    <td class="tg-s6z2">AEC-Q100-002<br />  </td>
    <td class="tg-s6z2">±2000  </td>
    <td class="tg-s6z2">-<br />  </td>
    <td class="tg-s6z2">V<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=V_{ESD(CDM)}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?V_{ESD(CDM)}" title="V_{ESD(CDM)}" /></a><br />  </td>
    <td class="tg-s6z2">Electostatic discharge (Charge device model)<br />  </td>
    <td class="tg-s6z2">AEC-Q100-011<br />  </td>
    <td class="tg-s6z2">±500<br />  </td>
    <td class="tg-s6z2">-<br />  </td>
    <td class="tg-s6z2">V<br />  </td>
  </tr>
</table>

### Static latch-up

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol<br />  </th>
    <th class="tg-s6z2">Parameter<br />  </th>
    <th class="tg-huh2">Test Method<br />  </th>
    <th class="tg-s6z2">Min<br />  </th>
    <th class="tg-s6z2">Max<br />  </th>
    <th class="tg-s6z2">Unit<br />  </th>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=I_{LAT}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?I_{LAT}" title="I_{LAT}" /></a><br />  </td>
    <td class="tg-s6z2">Latch up current at 125℃ ambient temperature  </td>
    <td class="tg-s6z2">AEC-Q100-004<br />  </td>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=\pm100" target="_blank"><img src="http://latex.codecogs.com/gif.latex?\pm100" title="\pm100" /></a><br />  </td>
    <td class="tg-s6z2">-<br />  </td>
    <td class="tg-s6z2">V<br />  </td>
  </tr>
</table>

## ADC Characteristics

### ADC Electrical characteristics

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol<br />  </th>
    <th class="tg-s6z2">Parameter<br />  </th>
    <th class="tg-huh2">Conditions<br />  </th>
    <th class="tg-s6z2">Min<br />  </th>
    <th class="tg-s6z2">Typ<br />  </th>
    <th class="tg-s6z2">Max<br />  </th>
    <th class="tg-031e">Unit<br />  </th>
  </tr>
  <tr>
    <td class="tg-s6z2">IN[15:0]<br />  </td>
    <td class="tg-s6z2">Analog input channel<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=V_{SS}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?V_{SS}" title="V_{SS}" /></a><br />  </td>
    <td class="tg-s6z2">-</td>
    <td class="tg-s6z2">VREFP<br />  </td>
    <td class="tg-031e">V<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">VREFP<br />  </td>
    <td class="tg-s6z2">Reference voltage of REFP<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=V_{DD}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?V_{DD}" title="V_{DD}" /></a><br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e">V<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">RES<br />  </td>
    <td class="tg-s6z2">Resolution<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">12</td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e">Bits<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">Offset error<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">-3.0<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">3.0<br />  </td>
    <td class="tg-031e">LSB<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">INL<br />  </td>
    <td class="tg-s6z2">Integral non-linearity error<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">-2.0<br />  </td>
    <td class="tg-s6z2">1.0<br />  </td>
    <td class="tg-s6z2">2.0<br />  </td>
    <td class="tg-031e">LSB<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">DNL<br />  </td>
    <td class="tg-s6z2">Differential non-linearity error<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">-1.0<br />  </td>
    <td class="tg-s6z2">0.8<br />  </td>
    <td class="tg-s6z2">1.5<br />  </td>
    <td class="tg-031e">LSB<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">Fclk<br />  </td>
    <td class="tg-s6z2">Clock frequency<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2">16<br />  </td>
    <td class="tg-031e">MHz<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">SPS<br />  </td>
    <td class="tg-s6z2">Sampling rate<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">30<br />  </td>
    <td class="tg-s6z2">500</td>
    <td class="tg-s6z2">1000<br />  </td>
    <td class="tg-031e">K<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">TS<br />  </td>
    <td class="tg-s6z2">Sampling time<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=4/F_{CLK}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?4/F_{CLK}" title="4/F_{CLK}" /></a><br />  </td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e"> <br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">TC<br />  </td>
    <td class="tg-s6z2">Conversion time<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">12<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e"><a href="http://www.codecogs.com/eqnedit.php?latex=1/F_{CLK}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?1/F_{CLK}" title="1/F_{CLK}" /></a><br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">SNDR<br />  </td>
    <td class="tg-s6z2">Signal-noise plus distortion ratio<br />  </td>
    <td class="tg-s6z2">At 10KHz</td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">64<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e">dB<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">THD<br />  </td>
    <td class="tg-s6z2">Total harmonic distortion<br />  </td>
    <td class="tg-s6z2">At 10KHz<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">-65<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e">dB<br />  </td>
  </tr>
  <tr>
    <td class="tg-031e">SFDR<br />  </td>
    <td class="tg-031e">Spurious-free dynamic range<br />  </td>
    <td class="tg-031e">At 10KHz<br />  </td>
    <td class="tg-031e"></td>
    <td class="tg-031e">64<br />  </td>
    <td class="tg-031e"></td>
    <td class="tg-031e">dB<br />  </td>
  </tr>
</table>

### ADC Transform function description

![Figure 1 ADC transform function](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:overview:adc_transform_function.jpg "Figure 1 ADC transform function")

## I2C interface Characteristics

<table class="tg">
  <tr>
    <th class="tg-huh2" rowspan="2">Symbol</th>
    <th class="tg-s6z2" rowspan="2">Parameter</th>
    <th class="tg-huh2" colspan="2">Standard</th>
    <th class="tg-s6z2" colspan="2">Fast</th>
    <th class="tg-031e" rowspan="2">Unit</th>
  </tr>
  <tr>
    <td class="tg-s6z2">Min</td>
    <td class="tg-s6z2">Max</td>
    <td class="tg-s6z2">Min</td>
    <td class="tg-s6z2">Max</td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=f_{SCL}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?f_{SCL}" title="f_{SCL}" /></a><br />  </td>
    <td class="tg-s6z2">CLK clock frequency<br />  </td>
    <td class="tg-s6z2">0<br />  </td>
    <td class="tg-s6z2">100<br />  </td>
    <td class="tg-s6z2">0<br />  </td>
    <td class="tg-s6z2">400<br />  </td>
    <td class="tg-031e">KHz<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{LOW}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{LOW}" title="t_{LOW}" /></a><br />  </td>
    <td class="tg-s6z2">Low period of the SCL clock<br />  </td>
    <td class="tg-s6z2">4.5<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">1.0<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e">us<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{HIGH}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{HIGH}" title="t_{HIGH}" /></a><br />  </td>
    <td class="tg-s6z2">High period of SCL clock<br />  </td>
    <td class="tg-s6z2">3.8<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">0.5</td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e">us<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{r}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{r}" title="t_{r}" /></a><br />  </td>
    <td class="tg-s6z2">Rise time of SCL and SDA<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">1000<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">300<br />  </td>
    <td class="tg-031e">ns<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{f}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{f}" title="t_{f}" /></a><br />  </td>
    <td class="tg-s6z2">Fall time SCL and SDA<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">300<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">300<br />  </td>
    <td class="tg-031e">ns<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{HD\_DAT}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{HD\_DAT}" title="t_{HD\_DAT}" /></a><br />  </td>
    <td class="tg-s6z2">Data hold time<br />  </td>
    <td class="tg-s6z2">0<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">0<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e">us<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{VD\_DAT}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{VD\_DAT}" title="t_{VD\_DAT}" /></a><br />  </td>
    <td class="tg-s6z2">Data valid time<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">3.5<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">1.0<br />  </td>
    <td class="tg-031e">us<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{SU\_DAT}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{SU\_DAT}" title="t_{SU\_DAT}" /></a><br />  </td>
    <td class="tg-s6z2">Data setup time<br />  </td>
    <td class="tg-s6z2">200<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">90<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e">ns<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{VD\_ACK}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{VD\_ACK}" title="t_{VD\_ACK}" /></a><br />  </td>
    <td class="tg-s6z2">Data valid acknowledge time<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">3.5<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">1.0<br />  </td>
    <td class="tg-031e">us<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{HD\_STA}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{HD\_STA}" title="t_{HD\_STA}" /></a><br />  </td>
    <td class="tg-s6z2">Hold time START condition<br />  </td>
    <td class="tg-s6z2">3.8<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">0.5<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e">us<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{SU\_STA}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{SU\_STA}" title="t_{SU\_STA}" /></a><br />  </td>
    <td class="tg-s6z2">Set-up time for a repeat START condition<br />  </td>
    <td class="tg-s6z2">4.5<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">0.5<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-031e">us<br />  </td>
  </tr>
  <tr>
    <td class="tg-031e"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{SU\_STO}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{SU\_STO}" title="t_{SU\_STO}" /></a></td>
    <td class="tg-031e">Set-up time for STOP condition<br />  </td>
    <td class="tg-031e">3.8<br />  </td>
    <td class="tg-031e"></td>
    <td class="tg-031e">0.5<br />  </td>
    <td class="tg-031e"></td>
    <td class="tg-031e"><br />  us<br />  </td>
  </tr>
</table>

![Figure 2 I2C bus AC waveform](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:overview:i2c_bus_ac_waveform.jpg "Figure 2 I2C bus AC waveform")

## SSP Interface Characteristics

<table class="tg">
  <tr>
    <th class="tg-huh2">Symbol</th>
    <th class="tg-s6z2">Parameter</th>
    <th class="tg-huh2">Conditions</th>
    <th class="tg-s6z2">Min</th>
    <th class="tg-s6z2">Max</th>
    <th class="tg-s6z2">Unit</th>
  </tr>
  <tr>
    <td class="tg-s6z2" rowspan="2"><a href="http://www.codecogs.com/eqnedit.php?latex=f_{SCL}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?f_{SCL}" title="f_{SCL}" /></a><br />  </td>
    <td class="tg-s6z2" rowspan="2">SSP clock frequency<br />  </td>
    <td class="tg-s6z2">Master mode<br />  </td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2">20</td>
    <td class="tg-s6z2">MHz<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">Slave mode<br />  </td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2">20</td>
    <td class="tg-s6z2">MHz<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{r\_SCK}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{r\_SCK}" title="t_{r\_SCK}" /></a><br />  </td>
    <td class="tg-s6z2">SSP clock rising and fall time<br />  </td>
    <td class="tg-s6z2">Capacitive load : C = 25pF<br />  </td>
    <td class="tg-s6z2"> <br />  </td>
    <td class="tg-s6z2">8</td>
    <td class="tg-s6z2">ns<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{SU\_M}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{SU\_M}" title="t_{SU\_M}" /></a><br />  </td>
    <td class="tg-s6z2" rowspan="2">Data input setup time<br />  </td>
    <td class="tg-s6z2">Master mode<br />  </td>
    <td class="tg-s6z2">5</td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">ns<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{SU\_S}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{SU\_S}" title="t_{SU\_S}" /></a><br />  </td>
    <td class="tg-s6z2">Slave mode<br />  </td>
    <td class="tg-s6z2">6</td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">ns<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{H\_M}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{H\_M}" title="t_{H\_M}" /></a><br />  </td>
    <td class="tg-s6z2" rowspan="2">Data input hold time<br />  </td>
    <td class="tg-s6z2">Master mode<br />  </td>
    <td class="tg-s6z2">5</td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">ns<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{H\_S}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{H\_S}" title="t_{H\_S}" /></a><br />  </td>
    <td class="tg-s6z2">Slave mode<br />  </td>
    <td class="tg-s6z2">6</td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">ns<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{V\_M}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{V\_M}" title="t_{V\_M}" /></a><br />  </td>
    <td class="tg-s6z2" rowspan="2">Data output valid time<br />  </td>
    <td class="tg-s6z2">Master mode<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">20</td>
    <td class="tg-s6z2">ns<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{V\_S}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{V\_S}" title="t_{V\_S}" /></a><br />  </td>
    <td class="tg-s6z2">Slave mode<br />  </td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2">5</td>
    <td class="tg-s6z2">ns<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{H\_M}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{H\_M}" title="t_{H\_M}" /></a><br />  </td>
    <td class="tg-s6z2" rowspan="2">Data output hold time<br />  </td>
    <td class="tg-s6z2">Master mode<br />  </td>
    <td class="tg-s6z2">13</td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"> <br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><a href="http://www.codecogs.com/eqnedit.php?latex=t_{H\_S}" target="_blank"><img src="http://latex.codecogs.com/gif.latex?t_{H\_S}" title="t_{H\_S}" /></a><br />  </td>
    <td class="tg-s6z2">Slave mode<br />  </td>
    <td class="tg-s6z2">3</td>
    <td class="tg-s6z2"></td>
    <td class="tg-s6z2"> <br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">DuCy<br />  </td>
    <td class="tg-s6z2">SSP slave input clock duty cycle<br />  </td>
    <td class="tg-s6z2">Slavemode</td>
    <td class="tg-s6z2">45</td>
    <td class="tg-s6z2">55<br />  </td>
    <td class="tg-s6z2">%<br />  </td>
  </tr>
</table>

# Package Characteristics
## Package dimension information
![Figure 3 Package Dimension Information](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:overview:package_dimention_information.png "Figure 3 Package Dimension Information")

<table class="tg">
  <tr>
    <th class="tg-huh2" rowspan="2">Symbol</th>
    <th class="tg-huh2" colspan="3">Dimension (MM)</th>
    <th class="tg-huh2" colspan="3">Dimension (MIL)</th>
  </tr>
  <tr>
    <td class="tg-huh2">Min</td>
    <td class="tg-huh2">Nom</td>
    <td class="tg-huh2">Max</td>
    <td class="tg-huh2">Min</td>
    <td class="tg-huh2">Nom</td>
    <td class="tg-huh2">Max</td>
  </tr>
  <tr>
    <td class="tg-s6z2">A<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">1.20<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">47.2<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">A1<br />  </td>
    <td class="tg-s6z2">0.05<br />  </td>
    <td class="tg-s6z2">0.10<br />  </td>
    <td class="tg-s6z2">0.15<br />  </td>
    <td class="tg-s6z2">2.0<br />  </td>
    <td class="tg-s6z2">3.9<br />  </td>
    <td class="tg-s6z2">5.9<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">A2<br />  </td>
    <td class="tg-s6z2">0.95<br />  </td>
    <td class="tg-s6z2">1.00<br />  </td>
    <td class="tg-s6z2">1.05<br />  </td>
    <td class="tg-s6z2">37.4<br />  </td>
    <td class="tg-s6z2">39.4<br />  </td>
    <td class="tg-s6z2">41.3<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">b<br />  </td>
    <td class="tg-s6z2">0.13<br />  </td>
    <td class="tg-s6z2">0.18<br />  </td>
    <td class="tg-s6z2">0.23<br />  </td>
    <td class="tg-s6z2">5.1<br />  </td>
    <td class="tg-s6z2">7.1<br />  </td>
    <td class="tg-s6z2">9.1<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">b1<br />  </td>
    <td class="tg-s6z2">0.13<br />  </td>
    <td class="tg-s6z2">0.16<br />  </td>
    <td class="tg-s6z2">0.19<br />  </td>
    <td class="tg-s6z2">5.1<br />  </td>
    <td class="tg-s6z2">6.3<br />  </td>
    <td class="tg-s6z2">7.5<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">c<br />  </td>
    <td class="tg-s6z2">0.09<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">0.20<br />  </td>
    <td class="tg-s6z2">3.5<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">7.9<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">c1<br />  </td>
    <td class="tg-s6z2">0.09<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">0.16<br />  </td>
    <td class="tg-s6z2">3.5<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">6.3<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">D<br />  </td>
    <td class="tg-s6z2">8.90<br />  </td>
    <td class="tg-s6z2">9.00<br />  </td>
    <td class="tg-s6z2">9.10<br />  </td>
    <td class="tg-s6z2">350.4<br />  </td>
    <td class="tg-s6z2">354.3<br />  </td>
    <td class="tg-s6z2">358.3<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">D1<br />  </td>
    <td class="tg-s6z2">6.90<br />  </td>
    <td class="tg-s6z2">7.00<br />  </td>
    <td class="tg-s6z2">7.10<br />  </td>
    <td class="tg-s6z2">271.7<br />  </td>
    <td class="tg-s6z2">275.6<br />  </td>
    <td class="tg-s6z2">279.5<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2"><img src="http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:overview:20151118_092628.jpg"><br />  </td>
    <td class="tg-s6z2">0.35<br />  </td>
    <td class="tg-s6z2">0.40<br />  </td>
    <td class="tg-s6z2">0.45<br />  </td>
    <td class="tg-s6z2">13.8<br />  </td>
    <td class="tg-s6z2">15.7<br />  </td>
    <td class="tg-s6z2">17.7<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">L<br />  </td>
    <td class="tg-s6z2">0.45<br />  </td>
    <td class="tg-s6z2">0.60<br />  </td>
    <td class="tg-s6z2">0.75<br />  </td>
    <td class="tg-s6z2">17.7<br />  </td>
    <td class="tg-s6z2">23.6<br />  </td>
    <td class="tg-s6z2">29.5<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">L1<br />  </td>
    <td class="tg-s6z2">0.90<br />  </td>
    <td class="tg-s6z2">1.00<br />  </td>
    <td class="tg-s6z2">1.10<br />  </td>
    <td class="tg-s6z2">35.4<br />  </td>
    <td class="tg-s6z2">39.4<br />  </td>
    <td class="tg-s6z2">43.3<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">R1<br />  </td>
    <td class="tg-s6z2">0.08<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">3.1<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2"><br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">R2<br />  </td>
    <td class="tg-s6z2">0.08<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">0.20<br />  </td>
    <td class="tg-s6z2">3.1<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">7.9<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">Y<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">0.08<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">3.1<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">θ<br />  </td>
    <td class="tg-s6z2">0°<br />  </td>
    <td class="tg-s6z2">3.5°<br />  </td>
    <td class="tg-s6z2">7°<br />  </td>
    <td class="tg-s6z2">0°<br />  </td>
    <td class="tg-s6z2">3.5°<br />  </td>
    <td class="tg-s6z2">7°<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">θ1<br />  </td>
    <td class="tg-s6z2">0°<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2">0°<br />  </td>
    <td class="tg-s6z2"><br />  </td>
    <td class="tg-s6z2"><br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">θ2<br />  </td>
    <td class="tg-s6z2">11°<br />  </td>
    <td class="tg-s6z2">12°<br />  </td>
    <td class="tg-s6z2">13°<br />  </td>
    <td class="tg-s6z2">11°<br />  </td>
    <td class="tg-s6z2">12°<br />  </td>
    <td class="tg-s6z2">13°<br />  </td>
  </tr>
  <tr>
    <td class="tg-s6z2">θ3<br />  </td>
    <td class="tg-s6z2">11°<br />  </td>
    <td class="tg-s6z2">12°<br />  </td>
    <td class="tg-s6z2">13°<br />  </td>
    <td class="tg-s6z2">11°<br />  </td>
    <td class="tg-s6z2">12°<br />  </td>
    <td class="tg-s6z2">13°<br />  </td>
  </tr>
</table>

## Package footprint information
![Figure 4 Package Footprint Information](http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:overview:package_footprint_information.jpg "Figure 4 Package Footprint Information")

