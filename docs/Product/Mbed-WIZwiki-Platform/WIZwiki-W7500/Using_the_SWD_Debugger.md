# How to connect an external SWD debugger to WIZwiki-W7500

This page shows how to write and debug firmware in WIZwiki-W7500 with an external SWD debugger. When you need to debug firmware, you have two ways. One is debugging with an external SWD debugger and the other is using the CMSIS-DAP debugger. In this page, how to debug firmware with the SWD debugger is posted only.

----

## Using the SWD debugger


1. You can find SWD Header in the middle of WIZwiki-W7500 and Debugger Sel Jumper with three caps above it.  
Then open the J3, J4, J5 jumper cap in Debugger Sel Jumper.  
Now, your WIZwiki-W7500 is ready to connect the SWD debugger.
![](/document_framework/img/products/wizwiki_w7500/swd_header_debugger_jumper.png)  

  
  
2. Connect ULINK debugger and SWD Header. At this moment, be careful of matching pin number.

3. Setting [Flash Algorithm](http://wizwiki.net/wiki/doku.php?id=products:wizwiki_w7500:start_getting_started:debugging_w7500#set_flash_algorithm) and ULINK debugger in Keil and  
Download on WIZwiki-W7500. Then you can check the success message.

![](/document_framework/img/products/wizwiki_w7500/set_ulink_in_keil5.png)

![](/document_framework/img/products/wizwiki_w7500/set_flash_in_keil.png)

---

### Reference

- [How to set Flash Algorithm](http://wizwiki.net/wiki/doku.php?id=products:wizwiki_w7500:start_getting_started:debugging_w7500#set_flash_algorithm)

---
