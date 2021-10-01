---
id: booting_sequence
title: Booting Sequence
date: 2020-04-03
---

W7500 has three different boot modes that can be selected through the BOOT pin and TEST pin.

<table class="tg">
  <tr>
    <th class="tg-huh2" colspan="2">Mode Selection</th>
    <th class="tg-s6z2" rowspan="2">Mode</th>
    <th class="tg-huh2" rowspan="2">Aliasing</th>
  </tr>
  <tr>
    <td class="tg-s6z2">TEST</td>
    <td class="tg-s6z2">BOOT</td>
  </tr>
  <tr>
    <td class="tg-s6z2">0</td>
    <td class="tg-s6z2">0</td>
    <td class="tg-s6z2">APP</td>
    <td class="tg-031e">User code execute in Main Flash memory</td>
  </tr>
  <tr>
    <td class="tg-s6z2">0</td>
    <td class="tg-s6z2">1</td>
    <td class="tg-s6z2">ISP</td>
    <td class="tg-031e">In this mode, W7500 can support ISP function in order to control flash using serial interface.</td>
  </tr>

</table>

When W7500 is reset by hardware, it will be operated as below in embedded boot code.

<a target="_blank" href={require("/img/products/w7500/operation_boot_code.jpg").default}><img src={require("/img/products/w7500/operation_boot_code.jpg").default} alt="Figure 1 operation of boot code"/></a>