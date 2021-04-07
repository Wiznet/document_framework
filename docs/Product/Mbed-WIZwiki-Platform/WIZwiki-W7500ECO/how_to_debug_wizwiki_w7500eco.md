---
id: how_to_debug_wizwiki_w7500eco
title: How to Debug WIZwiki-W7500ECO
date: 2020-04-07
---

On the WIZwiki-W7500ECO, there is CMSIS-DAP to debug WIZwiki-W7500ECO.
At first, you need to set Flash Algorithm to use debugging. This page
shows how to set Flash Algorithm and how to use CMSIS-DAP Debugger.

---

## Set Flash Algorithm

### Download

* W7500 128KB Flash project:
<a href="/img/products/wizwiki_w7500/start_getting_started/w7500_128KB_flash.zip" target="_blank">Download</a>
* W7500 128KB Flash file:
<a href="/img/products/wizwiki_w7500/start_getting_started/w7500_128_flm.zip" target="_blank">Download</a>

### To follow

1. Download the attached File and unzip. Then you can find one folder
and one file in it. In 'W7500\_flash\_algo\_mdk' folder, open the
project and Build it.
![](/img/products/wizwiki_w7500/start_getting_started/flash_set.jpg)

2. After build, you can check the generated files in project folder.
Back to 'W7500\_128\_Flash' folder and copy 'W7500\_128\_FLM' flash
algorithm file into the Flash folder in Keil.
**C:\\Keil\_v5\\ARM\\Flash**
![](/img/products/wizwiki_w7500/start_getting_started/set_flash_algo2.png)

---

## Using CMSIS-DAP Debugger

CMSIS-DAP does support USB cable and Debugger as well. You need to [Set Flash Algorithm](../WIZwiki-W7500/how_to_debug_wizwiki_w7500#set_flash_algorithm) to use CMSIS-DAP Debugger in Keil.

### To Follow

1. Click 'Flash' in top menu and open 'Configure Flash Tools'. Set
'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.
![](/img/products/wizwiki_w7500/start_getting_started/cmsis_debug_1.jpg)

2. Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings'
menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight
SW-DP' set on SW Device.
![](/img/products/wizwiki_w7500/start_getting_started/cmsis_debug_2-1.jpg)

3. Next to the Debug menu bar, Click 'Flash Download' and set 'Erase
Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for
Algorithm, Add 'W7500\_128KB\_FLASH' on Programming Algorithm. After
checking it with below figure, click 'OK'.
![](/img/products/wizwiki_w7500/start_getting_started/cmsis_debug_3-1.jpg)

4. Download the firmware into WIZwiki-W7500. You can check complete
message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon'
or **Ctrl+F5** to debug.
![](/img/products/wizwiki_w7500/start_getting_started/cmsis_debug_4.jpg)
