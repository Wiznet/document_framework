# How to write the firmware into WIZwiki-W7500

Writing firmware into WIZwiki-W7500 has four ways.  
 
   * Using the CMSIS-DAP (Drag and Drop)
   * [Using the CMSIS-DAP](through Keil uVision5)
   * [Go to ISP tool manual & Program download]()
   * [Using the SWD Debugger]()

-----


## Examples Binary

   * Hardware test & Loop back binary (WIZwiki-W7500 default binary) : {{:products:wizwiki_w7500:getting_started:w7500x_wztoe_manu.zip| Download}}
   * LED Blink binary : {{:products:wizwiki_w7500:getting_started:wizwki-w7500_led_blink.zip| Download}}
   * Serial Out binary : {{:products:wizwiki_w7500:getting_started:wizwki-w7500_serial_led.zip| Download}}

-----

## Using the CMSIS-DAP (Drag and Drop)

1. When you connect the USB cable to the WIZwiki-W7500, PC recognized
as a removable disk. Removable disk name is MBED.

2. You "drag and drop" or copy the firmware to the removable disk, the
firmware writing progress has completed. ![Drag and drop](/products/wizwiki_w7500/start_getting_started/drap_n_drop.png)
3. After completing the firmware writing, open to check the removable
disk.

4. If "fail.txt" file is exists in the removable disk, it means writing
the firmware has failed.

5. After pressing the Reset button (SW1) of WIZwiki- W7500, please
repeat the steps from step 2.

-----

![keil\_cmsis\_dap](/page\>products/wizwiki_w7500/start_getting_started/write_firmware/keil_cmsis_dap)

-----

### Reference

 * [[:products:wizwiki_w7500:start_getting_started:debugging_w7500#set_flash_algorithm | Set Flash Algorithm]]

-----

## Using the ISP

![ISP](/page\>products/wizwiki_w7500/start_getting_started/write_firmware/ISP)

-----

![write\_swd\_debugger](/page\>products/wizwiki_w7500/start_getting_started/write_swd_debugger)
