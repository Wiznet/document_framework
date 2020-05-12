---
id: io_pin
title: IO Pin
date: 2020-05-12
---

## PIN Description

|**Pin Name**|**Direction**|**Description**|
|------------|-------------|---------------|
|BOOT|IN|Enter into boot mode When boot or reset is performed, if this pin is tied low, it will enter into boot mode. Users can do APP/DCT(DCT : Device Configuration Table for WizFi250-Configuration-Data) upload or factory recovery in the boot mode through UART.* LOW : Start as boot mode *  HIGH: Start as application mode|
|FUNCTION|IN|Perform pre-defined action Perform pre-defined action at the booting or while running. This can be used when UART cannot be used.(Refer to [FUNCTION Pin Usage]())|
|LED1|OUT|Indicate WiFi Association When WiFi is joined (associated) with router in STA mode or with station in AP mode, it will be changed to low state (LED On). And when left(disassociated), it will be returned to high state (LED Off).♦ LOW (LED ON) : WiFi is Associated ♦ HIGH(LED OFF): WiFi is Not associated|
|LED2|OUT|	Indicate Data/Command Mode If serial (UART or SPI) interface mode is data mode, this pin will be tied low state (LED On). And if it is command mode, it will be tied high state (LED Off).♦ LOW (LED ON) : Data Mode ♦ HIGH(LED OFF): Command Mode|
|SPI_DATA_READY|OUT|Indicates that there is data to send through SPI When WizFi250 has data to send in the SPI mode, this will be changed to high state. This pin can be used for awakening host MCU.|
|GPIO 1|IN/OUT|User Defined GPIO 1 User can utilize this pin for GPIO through AT Command.|
|GPIO 5	|IN/OUT|	User Defined GPIO 5 User can utilize this pin for GPIO through AT Command.|
|GPIO 6	|IN/OUT|	User Defined GPIO 6 User can utilize this pin for GPIO through AT Command.|
|GPIO 7	|IN/OUT|	User Defined GPIO 7 User can utilize this pin for GPIO through AT Command.|
|GPIO 8	|IN/OUT|	User Defined GPIO 8 User can utilize this pin for GPIO through AT Command.|
|Reserved	|-|	Reserved for future use|

## FUNCTION Pin Usage

Through the function pin, users can perform specific actions without AT Command.

|**Action**|**How to enter**|
|----------|----------------|
|Factory Recovery	|While booting or reset, keep low state (pressing the button) together with BOOT pin over 3.5 seconds|
|AP Mode	|During running state, tie it to low state and release it for once.Refer to time diagram below.|
|OTA Mode	|While running state, tie it to low state and release it for twice.Refer to time diagram below.|
|Factory Default	|During running state, tie it to low state and release it for thrice.Refer to time diagram below.|


Time sequence graph is as below.
![](/document_framework/img/products/wizfi250/wizfi250pg/function_button_time_diagram.jpg)

|**Variable**|**Min**|	**Typ**|**Max**|
|------------|-------|---------|-------|
|t1|	100 ms|	-|	200 ms|
|t2	|100 ms	|-	|200 ms|
