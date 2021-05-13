---
id: how_to_write_firmware_wizwiki_w7500eco
title: How to write firmware into WIZwiki W7500ECO
date: 2020-04-07
---

There are three ways to write firmware into WIZwiki-W7500ECO.

* Using the CMSIS-DAP (Drag and Drop)
* [Using the CMSIS-DAP](../WIZwiki-W7500/using_cmsis_dap_debugger)
* [Go to ISP tool manual & Program download](../../W7500/documents/appnote/How_to_use_ISP_tool.md)

-----

## Examples Binary

   * <a href="/img/products/w7500/overview/w7500x_wztoe_manu.zip" target="_blank">Hardware test & Loop back binary</a>
   * <a href="/img/products/w7500/overview/wizwki-w7500_led_blink.zip" target="_blank">LED Blink binary</a>
   * <a href="/img/products/w7500/overview/wizwki-w7500_serial_led.zip" target="_blank">Serial Out binary</a>

-----

## Using the CMSIS-DAP (Drag and Drop)

1. When you connect the USB cable to the WIZwiki-W7500ECO, PC
recognized as a removable disk. Removable disk name is MBED.

2. You "drag and drop" or copy the firmware to the removable disk, the
firmware writing progress has completed.  
![Drag and drop](/img/products/wizwiki_w7500/start_getting_started/drap_n_drop.png)

3. After completing the firmware writing, open to check the removable
disk.

4. If "fail.txt" file is exists in the removable disk, it means writing
the firmware has failed.

5. After pressing the Reset button (SW1) of WIZwiki- W7500ECO, please
repeat the steps from step 2.

-----

## Using CMSIS-DAP Debugger

CMSIS-DAP does support USB cable and Debugger as well. You need to [Set Flash Algorithm](how_to_debug_wizwiki_w7500#set-flash-algorithm) to use CMSIS-DAP Debugger in Keil.  

### To Follow

1. Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'. 
![](/img/products/wizwiki_w7500/cmsis_debug_1.jpg)

2. Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device. 
![](/img/products/wizwiki_w7500/cmsis_debug_2-1.jpg)

3. Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'. 
![](/img/products/wizwiki_w7500/cmsis_debug_3-1.jpg)  

4. Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or **Ctrl+F5** to debug. 
![](/img/products/wizwiki_w7500/cmsis_debug_4.jpg)


-----


### Reference

 [Set Flash Algorithm](how_to_debug_wizwiki_w7500#set-flash-algorithm)

-----

## Using the ISP

**W7500 ISP Program**

[Go to ISP tool manual & Program download](../../iMCU/W7500/documents/appnote/how_to_use_isp_tool)

When W7500 is in the boot mode, firmware writing is possible via the ISP
since WIZwiki-W7500 has built-in an ISP header. As ISP header supports
the UART signals, you need a converter like TTL to RS232 or TTL to USB
in order to connect to your PC.  
Please refer the block diagram setting as below.  

![ISP Block Diagram](/img/products/wizwiki_w7500/getting_started/isp_block_2.png)

To follow

1. Run "W7500\_ISP (20xxxxxx) .exe".  

![ISP Program](/img/products/wizwiki_w7500/getting_started/isp.png)

2. **To make WIZwiki-W7500 enter the Boot Mode, supply power once while pressing the SW2,BOOT switch.**  

3. Select the device connected to the ISP header from "Serial Port" and
click "Open". If you entered Boot Mode successfully, then "Serial Open
Complete" message will be printed on the status bar at the bottom of
window.  

> **Before click the open button of ISP tool, we suggest you to test it
> in other terminal windows.  
> After opening serial port using the terminal windows,enter the capital
> "U". If it is in the ISP mode, you can see the returned character.**

![ISP Program Setting](/img/products/wizwiki_w7500/getting_started/isp_set.png)

4. Click "Browse" to select the binary file.  
![ISP Program Binary Select](/img/products/wizwiki_w7500/getting_started/isp_start.png)

5. Click "ISP Start" button, then the firmware writing will be
performed.

6. After the firmware writing completes, the window like below will pop
up.

![ISP Complete](/img/products/wizwiki_w7500/getting_started/isp_complete.png)

-----