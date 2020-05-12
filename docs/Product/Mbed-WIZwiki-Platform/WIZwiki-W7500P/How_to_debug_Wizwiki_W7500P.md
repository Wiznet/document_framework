# How to Debug WIZwiki-W7500p

On the WIZwiki-W7500p, there are SWD Header and CMSIS-DAP to debug
WIZwiki-W7500. At first, you need to set Flash Algorithm to use
debugging. This page shows how to set Flash Algorithm and how to use
ULINK Debugger and CMSIS-DAP Debugger.

---


## Set Flash Algorithm

### Download

  * W7500 128KB Flash project:
[Download](/document_framework/img/products/w7500/overview/w7500_128kb_flash.zip)

  * W7500 128KB Flash file:
[Download](/document_framework/img/products/w7500/overview/w7500_128_flm.zip)


### To follow

1. Download the attached File and unzip. Then you can find one folder
and one file in it. In 'W7500\_flash\_algo\_mdk' folder, open the
project and Build it.
![](/document_framework/img/products/w7500/overview/flash_set.jpg)

2\. After build, you can check the generated files in project folder.
Back to 'W7500\_128\_Flash' folder and copy 'W7500\_128\_FLM' flash
algorithm file into the Flash folder in Keil.
**C:\\Keil\_v5\\ARM\\Flash**
![](/document_framework/img/products/w7500/overview/set_flash_algo2.png)

---


## Using ULINK Debugger

To use ULINK Debugger, you should uncap SWD Debugger Sel Jumper usually
disconnected with cap. Do not forget to connect USB cable to supply
power to the board.

### nTo Follow

1. You can find SWD Header in the middle of WIZwiki-W7500 and Debugger
Sel Jumper with three caps above it. Then open the J3, J4, J5 jumper cap
in Debugger Sel Jumper. Now, your WIZwiki-W7500 is ready to connect the
SWD
debugger.![](/document_framework/img/products/w7500/overview/swd_header_debugger_jumper.png)

2. Connect ULINK debugger and SWD Header. At this moment, be careful of
matching pin number.

1. Click 'Flash' in top menu and open 'Configure Flash Tools'. Set
'Debug' on top menu with choosing 'ULINK2/ME Cortex Debugger'.
![](/document_framework/img/products/w7500/overview/ulink_set1.jpg)

2. Click 'Utilities' next Debug and choose 'CMSIS-DAP Debugger'. Open
'Setting' menu and unchecked 'SWJ' in Debug on top menu. Then confirm
'ARM CoreSight SW-DP' set on SW Device.
![](/document_framework/img/products/w7500/overview/ulink_set2.jpg)
3. Click 'Flash Download'. Set 'Erase Full Chip' in Download Function,
type '0x20000000 to 0x4000' in RAM for Algorithm and Add
'W7500\_128KB\_FLASH' on Programming Algorithm. After comparing with the
figure below, click 'OK'.
![](/document_framework/img/products/w7500/overview/ulink_set3-1.jpg)

4. Download the firmware into WIZwiki-W7500. You can check complete
message and the ULINK Debugger at the bottom. Chick the 'Debug icon' or
**Ctrl+F5** to debug.
![](/document_framework/img/products/w7500/overview/ulink_set4.jpg)

---

![keil\_cmsis\_dap](/page\>products/wizwiki_w7500/start_getting_started/write_firmware/keil_cmsis_dap)



## When downloading multiple projects

In case of WIZ750SR code using W7500 chip, Boot and App project exist
respectively. Therefore, there is a problem when following the previous
explanations. Regardless of which debugger you use, you only need to pay
attention to the following settings.


### To Follow

\- For general configuration, follow the previous instructions.

![](/document_framework/img/products/w7500/overview/cmsis_debug_multi_project_1.png)

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

![](/document_framework/img/products/w7500/overview/cmsis_debug_target_info.png)

The remaining steps can be followed by the previous description.


### How to switch app & boot for debug You just need reset device and
debug that you want!

---
