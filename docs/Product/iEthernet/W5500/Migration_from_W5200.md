---
id: migration_from_w5200
title: Migration from W5200
date: 2020-04-03
---

# Migration from W5200 to W5500

This page explains migration materials to W5200 users.

-----

### Driver for W5200 Users

  - Download :  [w5500_cortexm3_firmware_for_legacy.zip](/img/products/w5500/w5500_cortexm3_firmware_for_legacy.zip)

This driver is provided only for current W5200 users to help with a fast migration to W5500. TTo **get the new or latest BSD version driver**, splease refer to the [W5500 Driver](driver) page.

### W5500 vs W5200 Chip in Comparison

<table>
<tbody>
<tr>
<th>Device</th><th>W5500</th><th>W5200</th>
</tr>
<tr>
<td>Process</td>
<td>0.13um</td>
<td>0.18um</td>
</tr>
<tr>
<td>Package</td>
<td>48 LQFP (7*7 mm^2)</td>
<td>48 QFN  (7*7 mm^2)</td>
</tr>
<tr>
<td>IO Voltage / Core Voltage</td>
<td>3.3V / 1.2V </td>
<td>3.3V / 1.8V </td>
</tr>
<tr>
<td>Number of sockets</td>
<td>8 ea</td>
<td>8 ea</td>
</tr>
<tr>
<td rowspan="4">SPI Frame</td>
<td>ADD1|ADD2|Control|Data0|Data1…</td>
<td>ADD1|ADD0|OP+LEN1|LEN0|Data…</td>
</tr>
<tr>
<td>8bit |8bit |8bit |8bit | 8bit</td>
<td>8bit |8bit |1bit +7bit |8bit | 8bit</td>
</tr>
<tr>
<td>Control 1 byte (Block selection, Read/Write selection, SPI mode selection)</td>
<td>OP Code 1 bit (Read/Write Selection)</td>
</tr>
<tr>
<td>No Data Length field</td>
<td>Data Length 15bit</td>
</tr>
<tr>
<td>Memory Access</td>
<td>TX Memory and RX Memory can be used for general data memory.</td>
<td>TX Memory can be used for general data memory.</td>
</tr>
<tr>
<td>MCU Bus Interface</td>
<td>SPI</td>
<td>SPI / 8bit parallel indirect bus mode</td>
</tr>
<tr>
<td>Regulator Related Circuit</td>
<td>LDO output pin needs the capacitor. No need to supply the chip power (1.2V).</td>
<td>LDO output voltage (1.8V) must be applied to the chip power (1.8V) at the outer side of the chip package.</td>
</tr>
<tr>
<td>PHY Power Down Setting</td>
<td>PHY's power down mode can be set by configuring PHY Register.</td>
<td>PHY's power down mode can be set by external pin.</td>
</tr>
<tr>
<td>WOL Function</td>
<td>WOL over UDP Support</td>
<td>WOL over Ethernet Support</td>
</tr>
<tr>
<td>PHY Mode Setting</td>
<td>PHY mode can be set by Firmware</td>
<td></td>
</tr>
<tr>
<td>Status LED</td>
<td>4 LEDs (SPD / DUP / ACT / Link)</td>
<td>3 LEDs (SPD / DUP / Link)</td>
</tr>
<tr>
<td>PHY Auto MDIX Function</td>
<td>No Support</td>
<td>Support</td>
</tr>
<tr>
<td>Operating Current @100Mbps Full Link</td>
<td>Typical 132mA</td>
<td>Typical 160mA</td>
</tr>
</tbody>
</table>
