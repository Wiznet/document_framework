---
id: how_to_debug_wizwiki_w7500p
title: How to Debug WIZwiki-W7500p
date: 2020-04-07
---

On the WIZwiki-W7500p, there are SWD Header and CMSIS-DAP to debug
WIZwiki-W7500. At first, you need to set Flash Algorithm to use
debugging. This page shows how to set Flash Algorithm and how to use
ULINK Debugger and CMSIS-DAP Debugger.

---


## Set Flash Algorithm

### Download

  * W7500 128KB Flash project:
<a href="/img/products/w7500/overview/w7500_128kb_flash.zip" target="_blank">Download</a>

  * W7500 128KB Flash file:
<a href="/img/products/w7500/overview/w7500_128_flm.zip" target="_blank">Download</a>


### To follow

1. Download the attached File and unzip. Then you can find one folder
and one file in it. In 'W7500\_flash\_algo\_mdk' folder, open the
project and Build it.
<a target="_blank" href={require("/img/products/w7500/overview/flash_set.jpg").default}><img src={require("/img/products/w7500/overview/flash_set.jpg").default} alt=""/></a>

2\. After build, you can check the generated files in project folder.
Back to 'W7500\_128\_Flash' folder and copy 'W7500\_128\_FLM' flash
algorithm file into the Flash folder in Keil.
**C:\\Keil\_v5\\ARM\\Flash**
<a target="_blank" href={require("/img/products/w7500/overview/set_flash_algo2.png").default}><img src={require("/img/products/w7500/overview/set_flash_algo2.png").default} alt=""/></a>

---


## Using ULINK Debugger

To use ULINK Debugger, you should uncap SWD Debugger Sel Jumper usually
disconnected with cap. Do not forget to connect USB cable to supply
power to the board.

### To Follow

1. You can find SWD Header in the middle of WIZwiki-W7500 and Debugger
Sel Jumper with three caps above it. Then open the J3, J4, J5 jumper cap
in Debugger Sel Jumper. Now, your WIZwiki-W7500 is ready to connect the
SWD
debugger.<a target="_blank" href={require("/img/products/w7500/overview/swd_header_debugger_jumper.png").default}><img src={require("/img/products/w7500/overview/swd_header_debugger_jumper.png").default} alt=""/></a>

2. Connect ULINK debugger and SWD Header. At this moment, be careful of
matching pin number.

3. Click 'Flash' in top menu and open 'Configure Flash Tools'. Set
'Debug' on top menu with choosing 'ULINK2/ME Cortex Debugger'.
<a target="_blank" href={require("/img/products/w7500/overview/ulink_set1.jpg").default}><img src={require("/img/products/w7500/overview/ulink_set1.jpg").default} alt=""/></a>

4. Click 'Utilities' next Debug and choose 'CMSIS-DAP Debugger'. Open
'Setting' menu and unchecked 'SWJ' in Debug on top menu. Then confirm
'ARM CoreSight SW-DP' set on SW Device.
<a target="_blank" href={require("/img/products/w7500/overview/ulink_set2.jpg").default}><img src={require("/img/products/w7500/overview/ulink_set2.jpg").default} alt=""/></a>

5. Click 'Flash Download'. Set 'Erase Full Chip' in Download Function,
type '0x20000000 to 0x4000' in RAM for Algorithm and Add
'W7500\_128KB\_FLASH' on Programming Algorithm. After comparing with the
figure below, click 'OK'.
<a target="_blank" href={require("/img/products/w7500/overview/ulink_set3-1.jpg").default}><img src={require("/img/products/w7500/overview/ulink_set3-1.jpg").default} alt=""/></a>

6. Download the firmware into WIZwiki-W7500. You can check complete
message and the ULINK Debugger at the bottom. Chick the 'Debug icon' or
**Ctrl+F5** to debug.
<a target="_blank" href={require("/img/products/w7500/overview/ulink_set4.jpg").default}><img src={require("/img/products/w7500/overview/ulink_set4.jpg").default} alt=""/></a>

---

## Using CMSIS-DAP Debugger

CMSIS-DAP does support USB cable and Debugger as well. You need to [Set Flash Algorithm](#set_flash_algorithm) to use CMSIS-DAP Debugger in Keil.  

### To Follow

1. Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'. 
<a target="_blank" href={require("/img/products/wizwiki_w7500/cmsis_debug_1.jpg").default}><img src={require("/img/products/wizwiki_w7500/cmsis_debug_1.jpg").default} alt=""/></a>

2. Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device. 
<a target="_blank" href={require("/img/products/wizwiki_w7500/cmsis_debug_2-1.jpg").default}><img src={require("/img/products/wizwiki_w7500/cmsis_debug_2-1.jpg").default} alt=""/></a>

3. Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'. 
<a target="_blank" href={require("/img/products/wizwiki_w7500/cmsis_debug_3-1.jpg").default}><img src={require("/img/products/wizwiki_w7500/cmsis_debug_3-1.jpg").default} alt=""/></a>  

4. Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or **Ctrl+F5** to debug. 
<a target="_blank" href={require("/img/products/wizwiki_w7500/cmsis_debug_4.jpg").default}><img src={require("/img/products/wizwiki_w7500/cmsis_debug_4.jpg").default} alt=""/></a>


## When downloading multiple projects

In case of WIZ750SR code using W7500 chip, Boot and App project exist
respectively. Therefore, there is a problem when following the previous
explanations. Regardless of which debugger you use, you only need to pay
attention to the following settings.


### To Follow

- For general configuration, follow the previous instructions.

<a target="_blank" href={require("/img/products/w7500/overview/cmsis_debug_multi_project_1.png").default}><img src={require("/img/products/w7500/overview/cmsis_debug_multi_project_1.png").default} alt=""/></a>

1. Click 'Flash' in top menu and open 'Configure Flash Tools'.

2. Click 'Utilities' in tap menu.

3. And choose 'your debugger'.

4. Open 'Setting' menu next to it and click 'Flash Download' in tap
menu.

5. Only set 'Erase Sectors', 'Program', 'Verify' in Download Function.

6. Click W7500 128KB FLASH in Programming Algorithm and fill the
[Start] [Size] Box.


 You can get [Start] address and [Size] from target information like figure below.
 If everything is entered correctly, Click 'OK'.

<a target="_blank" href={require("/img/products/w7500/overview/cmsis_debug_target_info.png").default}><img src={require("/img/products/w7500/overview/cmsis_debug_target_info.png").default} alt=""/></a>

The remaining steps can be followed by the previous description.


### How to switch app & boot for debug You just need reset device and debug that you want!

---
