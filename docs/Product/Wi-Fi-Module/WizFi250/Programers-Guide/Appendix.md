---
id: appendix
title: Appendix
date: 2020-04-24
---

# WizFi250 UART Throughput Test Report

## Test Environment

-----

  
![](/document_framework/img/products/wizfi250/wizfi250pg/appendix/uart_throughput_1.png)  
![](/document_framework/img/products/wizfi250/wizfi250pg/appendix/uart_throughput_2.png)  

## Test Result

-----

 1. Send 10Mbyte data to PC 

<table>
<thead>
<tr class="header">
<th>Baud rate</th>
<th>Time<br />
(Using Command Mode)</th>
<th>Speed(bit/s)</th>
<th>Flow Control</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>3686400</td>
<td>47s</td>
<td>1.74M</td>
<td>H/W</td>
</tr>
<tr class="even">
<td>1843200</td>
<td>1m 20s</td>
<td>1.00M</td>
<td>H/W</td>
</tr>
<tr class="odd">
<td>921600</td>
<td>2m 20s</td>
<td>585K</td>
<td>H/W</td>
</tr>
</tbody>
</table>

2. Send 1Mbyte data to PC 

| Baud rate | Data Mode |              | Command Mode |              | Flow Control |
| --------- | --------- | ------------ | ------------ | ------------ | ------------ |
| :::       | Time      | Speed(bit/s) | Time         | Speed(bit/s) | :::          |
| 3686400   | 24s       | 341K         | 5s           | 1.63M        | H/W          |
| 1843200   | 25s       | 327K         | 6s           | 1.36M        | H/W          |
| 921600    | 26s       | 315K         | 12s          | 682K         | H/W          |
| 115200    | 1m 35s    | 86K          | 1m 36s       | 85K          | H/W          |



  - Command Mode : To sending data, WizFi250 have to use AT+SSEND
    command.
  - Data Mode : Data Mode is the mode which passes data of application
    layers to peer-device directly, without commands.
  - For more information, Refer to [Command mode & Data
    mode](/products/wizfi250/wizfi250pg/at_command_set-cmd_data_mode).
