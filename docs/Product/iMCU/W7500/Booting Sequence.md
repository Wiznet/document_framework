---
id: booting_sequence
title: Booting Sequence
date: 2020-03-
---


## Content
 \# Booting Sequence

W7500 has three different boot modes that can be selected through the
BOOT pin and TEST pin.

\<style type="text/css"\> .tg
{border-collapse:collapse;border-spacing:0;} .tg td{font-family:Arial,
sans-serif;font-size:14px;padding:10px
5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial,
sans-serif;font-size:14px;font-weight:normal;padding:10px
5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-s6z2{text-align:center; vertical-align:middle} .tg
.tg-huh2{font-size:14px;text-align:center; vertical-align:middle}
\</style\> \<table class="tg"\>

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

\</table\>

When W7500 is reset by hardware, it will be operated as below in
embedded boot code.

\!\[Figure 1 I2C Bus
Configuration\](<http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:documents:boot.jpg>
"Figure 1 operation of boot code")


