---
id: datasheet_chn
title: Datasheet(Chn)
date: 2020-03-
---


## Content
# 概述

本页提供 WIZ550S2E 及其RS232和RS422/485接口板的相关信息，包括以下内容。

  - 基本的硬件规格
  - 操作特性
  - 参考电路图
  - 模块尺寸信息

如有任何硬件参数或外观设计的改动，修订历史将在此页面更新。

-----
## 硬件规格

### WIZ550S2E

   * MCU LPC11E36FHN33
   * TCP/IP 控制器 W5500
   * RJ45(集成变压器)
   * 2.54mm 排针x2

![](/document_framework/img/products/wiz550s2e/wiz550s2eds/wiz550s2e_pin.jpg)

#### 引脚

| 参考编号 | 引脚编号  | 符号          | 类型      | 描述             |
| ---- | ----- | ----------- | ------- | -------------- |
| J1   | **1** | **3V3D**    | **P**   | 提供 DC+3.3V     |
| :::  | **2** | **RSVD1**   | **I/O** | 预留 I/O         |
| :::  | **3** | **RSVD2**   | **I/O** | 预留 I/O         |
| :::  | **4** | **nSYSRST** | **I**   | 系统复位输入. 低电平有效. |
| :::  | **5** | **nFACRST** | **I**   | 恢复出厂输入. 低电平有效. |
| :::  | **6** | **nHWTRIG** | **I**   | 硬件触发器输入.低电平有效  |
| :::  | **7** | **GND**     | **P**   | 电源接地           |
| :::  | **8** | **GND**     | **P**   | 电源接地           |

<table>
<thead>
<tr class="header">
<th>参考编号</th>
<th>引脚编号</th>
<th>符号</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>J2</td>
<td><strong>1</strong></td>
<td><strong>GND</strong></td>
<td><strong>P</strong></td>
<td>电源接地</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>2</strong></td>
<td><strong>NC</strong></td>
<td><strong>-</strong></td>
<td>无连接</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>3</strong></td>
<td><strong>STATUS1</strong></td>
<td><strong>O</strong></td>
<td>LED显示输出</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>4</strong></td>
<td><strong>STATUS2</strong></td>
<td><strong>O</strong></td>
<td>LED显示输出</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>5</strong></td>
<td><strong>nCTS</strong></td>
<td><strong>I</strong></td>
<td>清除UART发送输入</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>6</strong></td>
<td><strong>nRTS</strong></td>
<td><strong>O</strong></td>
<td>回应UART发送输出.<br />
此引脚也可用于RS485控制.</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>7</strong></td>
<td><strong>RXD</strong></td>
<td><strong>I</strong></td>
<td>UART接收器输入</td>
</tr>
<tr class="even">
<td>:::</td>
<td><strong>8</strong></td>
<td><strong>TXD</strong></td>
<td><strong>O</strong></td>
<td>UART发送器输出</td>
</tr>
<tr class="odd">
<td>:::</td>
<td><strong>9</strong></td>
<td><strong>3V3D</strong></td>
<td><strong>P</strong></td>
<td>供应 DC+3.3V</td>
</tr>
</tbody>
</table>

-----

### WIZ550S2E-232 接口板

   * 驱动芯片SP3232EBEY
   * 系统复位开关
   * 恢复出厂设置开关
   * 硬件触发器模式开关
   * LED状态灯
   * DC-Jack (用于+5V电源输入)

![](/document_framework/img/products/wiz550s2e/wiz550s2eds/rs232if_pin_20140729.jpg)
![](/products/wiz550s2e/wiz550s2eds/크기변환_wiz550s2e-232-evb.png)

-----

### WIZ550S2E-485/422 接口板

   * 驱动芯片SP3485EN
   * 系统复位开关
   * 恢复出厂设置开关
   * 硬件触发器模式开关
   * LED状态灯
   * DC-Jack (用于+5V电源输出)

![](/document_framework/img/products/wiz550s2e/wiz550s2eds/rs485-422if_pin_20140729.jpg)
![](/products/wiz550s2e/wiz550s2eds/크기변환_wiz550s2e-485-evb.png)

-----
# 特性

### WIZ550S2E

| 输入电源 | DC +3.3V     |
| ---- | ------------ |
| 电流消耗 | 140mA(Typ.)  |
| 工作温度 | \-40 \~ 85 ℃ |

### WIZ550S2E-232-EVB

| 输入电源              | DC +5V (插入类型: 外部尺寸 5.5Pi - 口径 2.1Pi) |
| ----------------- | ------------------------------------ |
| 电流消耗(连接WIZ550S2E) | 154mA(Max.)                          |
| 工作电压              | \-40 \~ 85 ℃                         |

### WIZ550S2E-485/422-EVB

| 输入电源               | DC +5V (插入类型: 外部尺寸 5.5Pi - 口径 2.1Pi)         |
| ------------------ | -------------------------------------------- |
| 电源消耗(连接 WIZ550S2E) | 179mA(Max.)@RS422Mode, 157mA(Max.)@RS485Mode |
| 工作温度               | \-40 \~ 85 ℃                                 |
## 原理图

| 列表                    | 版本  | 原理图(PDF)                                                           | 原理图(CAD)                                                             |
| --------------------- | --- | ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| WIZ550S2E             | 1.1 | ![Schematic\_PDF](/document_framework/img/products/wiz550s2e/schematic1_wiz550s2e_v1.pdf) | ![Schematic\_ORCAD](/document_framework/img/products/wiz550s2e/wiz550s2e_v1.1_20150917.zip) |
| WIZ550S2E-232 接口板     | 1.0 | ![](/document_framework/img/products/wiz550s2e/wiz550s2eds/rs232if_v1_0.pdf)              | ![](/document_framework/img/products/wiz550s2e/wiz550s2eds/rs232if_v1_0.zip)                |
| WIZ550S2E-485/422 接口板 | 1.0 | ![](/document_framework/img/products/wiz550s2e/wiz550s2eds/rs485-422if_v1_0.pdf)          | ![](/document_framework/img/products/wiz550s2e/wiz550s2eds/rs485-422if_v1_0.zip)            |

| 列表        | 版本  | Partlist                                                             | Gerber(Unit)                                            |
| --------- | --- | -------------------------------------------------------------------- | ------------------------------------------------------- |
| WIZ550S2E | 1.1 | ![Partlist\_PDF](/document_framework/img/products/wiz550s2e/wiz550s2e_ver1.1_pl_150916.pdf) | ![Gerber](/document_framework/img/products/wiz550s2e/wiz550s2e_v1.1.1_pcb.zip) |

  - Rev 1.1 更新 原理图

![](/document_framework/img/products/wiz550s2e/wiz550s2e_rev.png)

-----
## 尺寸

(单位: mm)

### WIZ550S2E

![](/document_framework/img/products/wiz550s2e/wiz550s2eds/wiz550s2e_dimension.jpg)

-----

### WIZ550S2E-232 接口板

![](/document_framework/img/products/wiz550s2e/wiz550s2eds/rs232if_dimension.jpg)

-----

### WIZ550S2E-485/422 接口板

![](/document_framework/img/products/wiz550s2e/wiz550s2eds/rs485-422if_dimension.jpg)

-----
