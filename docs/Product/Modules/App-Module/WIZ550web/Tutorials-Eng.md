---
id: tutorials-eng
title: Tutorials(Eng)
date: 2020-04-13
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

I/O control of WIZ550web performs I/O control and monitoring using CGI. The web page is configured to obtain the status value (GET) of the web server or to transfer the changed value of the web page to the web server (POST) by utilizing the 🌎[HTTP GET / POST method](http://www.w3schools.com/tags/ref_httpmethods.asp). In order to perform this operation, the HTML/JavaScript(AJAX) of the web page and the CGI handler of the web server must be implemented in a consistent manner. A description of CGI is provided in [Getting Started Guide:CGI for WIZ550web](Getting-Started-Guide-Eng.md).

Users can understand and utilize I/O interface function implemented in WIZ550web through Tutorial. This allows users to access the Web server from a remote location, monitor the status of the user device, or create a user-specific WIZ550 web page that performs I/O on/off functions.

This tutorial covers the following topics:

Tutorial 0: **Introduce the I/O Interface functions and test webpage**

   * It introduces the basic operation of Web browser and WIZ550web, and introduces predefined I / O interface function and test page so that user can modify web page and configure web site for desired form of I/O control.
     
Tutorial 1: **Set the Digital I/O Status**

   * This tutorial introduces the creation of a Web page that can control the On / Off state of Digital I/O (16) provided by WIZ550web. This allows the user to control the LED / Relay of the product via the web. You can also create Digital I/O Direction (Input/Output/None) control functions by applying the functions learned through this tutorial.
     
Tutorial 2: Get the Digital I/O Status
Tutorial 3: Get the Analog Input Value
Tutorial 4: Get/Set the WIZ550web IP Settings
Tutorial 5: Real-time Data Update on WIZ550web Web page
Tutorial 6: How to Make Custom Interface Functions with WIZ550web

The specification for predefined I/O functions can be found in the following guide.

Guide Document
WIZ550web Get/Set Interface Functions Guide


<Tabs
  defaultValue="tutorial0"
  values={[
    {label: 'Tutorial 0', value: 'tutorial0'},
    {label: 'Tutorial 1', value: 'tutorial1'},
    {label: 'Tutorial 2', value: 'tutorial2'},
    {label: 'Tutorial 3', value: 'tutorial3'},
    {label: 'Tutorial 4', value: 'tutorial4'},
  ]}>
  <TabItem value="tutorial0">
    
## Overview

WIZ550web **provides HTTP Request function set** so that device name and
network setting, control and monitoring of each digital I/O and analog
input can be performed only by making web page without modification of
firmware.

The command consists of a Get and a Set request. When the request is
transmitted including the pre-defined CGI name to the Web server
(WIZ550web), the result can be easily checked by the AJAX method.

Control of I/O between user's web browser and WIZ550web product is done
as follows.

<img src="/img/products/wiz550web/web_tutorial/wiz550web_http_io_flow.png" class="align-center" />

The list of functions that can be controlled and confirmed using the
predefined interface function is as follows. In the web page, the
request can be transmitted using the provided JavaScript for AJAX
Get/Post.

Please refer to [WIZ550web Interface Functions Guide](tutorials_eng#interface-functions-guide-for-wiz550web) for details of CGI name and
parameters to utilize interface funcions.

## I/O Interface Functions

**Guide Document** [WIZ550web Get/Set Interface Functions Guide](tutorials_eng#interface-functions-guide-for-wiz550web)

### GET functions (HTTP GET Method)

-   **Device Informations**: Firmware version, Device name, Product
    code, MAC address
-   **Network Settings**: Device IP / Gateway / Subnet mask / DNS / DHCP
    enable
-   **Serial Port Settings**: Baudrate / Databit / Paritybit / Stopbit /
    Flowcontrol
-   **16-Digital I/O**: Digital I/O \[0 \~ 15\]'s State / Direction /
    Alias
-   **4-Analog Inputs**: Analog Input \[0 \~ 3\]'s Value

### SET functions (HTTP POST Method)

-   **Device Informations**: Device name
-   **Network Informations**: Device IP / Gateway / Subnet mask / DNS /
    DHCP enable
-   **Serial Port Informations**: Baudrate / Databit / Paritybit /
    Stopbit / Flowcontrol
-   **16-Digital I/O**: Digital I/O \[0 \~ 15\]'s State / Direction /
    Alias

## Example Webpage for Test

  The firmware of WIZ550web v1.0.1 or later provides a webpage example to
  test the Get/Set Interface function. \*\* func\_test.html \*\* is
  included with the product, so you can check the function test page after
  connecting to WIZ550web by using the following web browser. You can also
  check the code directly through the link to the func\_test.html file in
  the [GitHub repository](https://github.com/Wiznet/WIZ550web).

  **WIZ550web GitHub Repository: Webpage source code**

  [GET/SET Interface functions Testpage](https://github.com/Wiznet/WIZ550web/blob/master/WIZ550web_Webpages/1_Get_Set_Functions_Testpage/func_test.html)
  You can use the provided web page example to control each
  I/O and H/W monitoring and setting functions. Please refer to each
  tutorial for detailed implementation details.

  You can check the interface function test page using the web browser as
  follows.

  <img src="/img/products/wiz550web/web_tutorial/testpage_connect.png" class="align-center" />

  The interface function test page has the following structure.

  Device Information / Network Configuration / Serial Port Settings
  <img src="/img/products/wiz550web/web_tutorial/if_testpage_1.png" class="align-center" />

  Digital I/O: State, Direction, Alias
  <img src="/img/products/wiz550web/web_tutorial/if_testpage_2.png" class="align-center" />

  Analog Input Value and Bar
  <img src="/img/products/wiz550web/web_tutorial/if_testpage_3.png" class="align-center" />

  You can confirm the exchange of values between WIZ550web and webpage
  example by pressing Get / Set button for each function. For most web
  browsers such as MS Internet Explorer or Google Chrome, **activate the
  developer tool by pressing the \[F12\] key** and reload and get / set
  the example page to directly check the HTTP request and its response can
  do.

  Developer tools are also very useful for real-time debugging of
  JavaScript, so if you are aiming for webpage creation and customization,
  you should try it out.

  </TabItem>
  <TabItem value="tutorial1">
  </TabItem>
  <TabItem value="tutorial2">
  </TabItem>
  <TabItem value="tutorial3">
  </TabItem>
  <TabItem value="tutorial4">
  </TabItem>
</Tabs>

Tutorial 0:
Introduce the I/O Interface functions


## Interface Functions Guide for WIZ550web
![](/img/products/wiz550web/wiz550web_simple_requestcombination_diagram.png)

### Overview
WIZ550web provides the HTTP Request function set for CGI so that device name and network setting, control and monitoring of each digital I/O and analog input can be performed only by making web page without modification of firmware.

It is implemented with GET/SET interface. By using JavaScript and AJAX to request CGI corresponding to each function with HTTP GET/POST method, user can easily implement web page that can control WIZ550web Can be.

In the case of a GET command, it is configured to obtain a value in the form of a JavaScript Callback function for the corresponding request. For the SET command, you can send the value you want to set to WIZ550web by including it in the HTTP request with the CGI request in the form of specified Web form element.

Please refer to 'Getting Started Guide:CGI for WIZ550web' for the CGI of WIZ550web.

### Download and Link

Get/Set interface Web pages and firmware for testing using CGI can be downloaded from the following link.

WIZ550web GitHub Repository

🌎https://github.com/Wiznet/WIZ550web

WIZ550web GitHub Repository: Webpage source code

🌎[GET/SET Interface functions Testpage](https://github.com/Wiznet/WIZ550web/blob/master/WIZ550web_Webpages/1_Get_Set_Functions_Testpage/func_test.html)

## WIZ550web GET/SET Interface

The CGI list for the GET/SET interface of WIZ550web is shown below.

### GET Function List
   * Example
     * curl -G 🌎http://192.168.11.100/get_dio5.cgi or use web browser
     
#### Get: Functions Table

|HTTP Request CGI| name	Description|
|----------------|-----------------|
|widget.cgi|	Get Basic Settings|
|io.cgi|	Get I/O all status, include pin 90,91 on-board LED|
|io_alias.cgi|	Get all I/O status. direction and port names|
|adc.cgi|	Get all ADC Status/values|
|get_devinfo.cgi|	Get Device info|
|get_netinfo.cgi|	Get Network info|
|get_serial_data.cgi|	Get serial data from buffer (Console port)|
|get_uart0info.cgi	|Get Serial port 0 settings (UART1, Console)|
|get_uart1info.cgi|	Get Serial port 1 settings (UART2, AT command)|
|get_dio0.cgi ~ get_dio15.cgi	|Get I/O status per port|
|get_ain0.cgi ~ get_ain3.cgi	|Get ADC info per port|

|Section|	CGI name|	JavaScript Callback Parameter	|Return Type|	Description|Value (Example)|	Note|
|---------|------|--------------------------------|----------|---------|------|---|
|Device Information|	get_devinfo.cgi|	fwver|	String|	Firmware version|	1.0.0|	-|
|||devname	|String|	Device name|	WIZ550web|	-|
|||pcode|	String|	Product identifier|	1-2-0	For WIZ configuration tool mac	String	MAC address	00:08:DC:xx:xx:xx|	-|
|Network Information|	get_netinfo.cgi|	ip	|String	|IP address	|192.168.11.2	|-|
|||gw	|String|	Gateway IP address|	192.168.11.1|	-|
|||sub|	String|	Subnet Mask|	255.255.255.0|	-|
|||dns	|String|	DNS server IP address	|8.8.8.8|	-|
|||dhcp	|1-digit number	|DHCP enable|	0 or 1	|1 : Enabled,0 : Disabled|
|Serial Port Information|	get_uart0info.cgi get_uart1info.cgi|	baud|	1-digit number|	Baud rate|	0 ~ 9	|0:600,1:1200,2:2400,3:4800,4:9600,5:19200,6:38400,7:57600,8:115200,9:230400|
|||databit	|1-digit number|	Data bit	|0 or 1|	0:Databit8 1:Databit9|
|||parity	|1-digit number|	Parity bit|	0 ~ 2|	0:None 1:Odd 2:Even|
|||stopbit|	1-digit number	|Stopbit	|0 or 1|	0:Stopbit1 1:Stopbit2|
|||flow	|1-digit number|	Flow control	|0 ~ 3|	0:None 1:RTS/CTS,2:RS-422,3:RS-485|
|16-Digital I/O(0 ~ 15)|	get_dio0.cgi~get_dio15.cgi	|dio_p|	1 or 2-digit numbers|	I/O Pin Info.|	0|	-|
|||dio_s|	1-digit number|	I/O State|	0 or 1|	0 : Low,1 : High|
|||dio_d	|1-digit number	|I/O Direction|	0/1/2|	0 : NotUsed,1 : Input,2 : Output|
|||dio_a|	String|	I/O Alias	|Digital I/O #0|	-|
|4-Analog Inputs(12-bit ADC)|	get_ain0.cgi~get_ain3.cgi|	ain_p	|1-digit number|	Analog input pin	|0 ~ 3|	-|
|||ain_v	|1 ~ 4-digit numbers|	Analog input value|	0 ~ 4095	|The values need to transform for use.|

**Get: JavaScript Callback Function Name Table**

|HTTP Request CGI name	|JavaScript Function Name on Web page|
|-----------------------|------------------------|
|get_devinfo.cgi|	function DevinfoCallback(o)|
|get_netinfo.cgi	|function NetinfoCallback(o)|
|get_uart0info.cgi|	function UartinfoCallback(o)|
|get_uart1info.cgi| |
|get_dio0.cgi~get_dio15.cgi|	function DioCallback(o)|
|get_ain0.cgi~get_ain3.cgi	|function AinCallback(o)|

### SET Function List
  * Example
    * curl -d “pin=5&val=1” http://192.168.11.100/set_diostate.cgi (Set I/O port 5 to 
      On/High)
    * curl -d “lip=192.168.11.100” http://192.168.11.100/config.cgi (to set only the
      “lip” parameter
      
**Set: Functions Table**

|HTTP Request CGI name	|Description|
|------------------------|----------|
|config.cgi	|Set Basic Settings for 🌎[DemoPages](https://github.com/Wiznet/WIZ550web/tree/master/WIZ550web_Webpages/0_Basic_Demopages)|
|dout.cgi	|Set I/O port On/Off|
|save_alias.cgi|	Change name of I/O port|
|dir_change.cgi|	Change I/O direction|
|tx_serial_data.cgi|	Send serial data to UART1(Console port)|
|set_default_io_status.cgi|	IO Settings Factory Reset and Reboot|
|set_devinfo.cgi	|Set Device info (changes takes effect after reboot)|
|set_netinfo.cgi|	Set Network info (changes takes effect after reboot)|
|set_uart0info.cgi|	Set Serial port 0 settings (UART1, Console) (changes takes effect after reboot)|
|set_uart1info.cgi|	Set Serial port 1 settings (UART2, AT command) (changes takes effect after reboot)|
|set_diodir.cgi|	Change I/O direction. **same as dir_change.cgi**|
|set_diostate.cgi|	Set I/O port On/Off. almost the same as dout.cgi|
|set_dioalias.cgi|	|Change name of I/O port. same as save_alias.cgi|

config.cgi is for 🌎[DemoPages.](https://github.com/Wiznet/WIZ550web/tree/master/WIZ550web_Webpages/0_Basic_Demopages)

Other common APIs are from set_devinfo.cgi

|Section|	CGI name|	Parameter	|Webform Element|Description|Parameter Example|	Note|
|--------|----------|---------------|------------|--------------|------------|--------|
|Device Configuration|	config.cgi|	devicename|	Param: String|Device name| devicename=WIZ550WEB||	-|
|||dhcp	|Param: 0 or 1	|DHCP enable|	dhcp=0	|1 : Enabled<br/>0 : Disabled|
|||lib|	Param: Sting|	Local IP address|	lip=192.168.11.100	|Including dots|
|||gw| Param: String|	Gateway IP address|	gw=192.168.11.254|
|||sub	|Param: String	|Subnet Mask|	sub=255.255.255.192||
|||dns|	Param: String|	DNS server IP address|	dns=168.126.63.1||
|||baudrate|	Param: 1-digit number|	Baud rate|	baud=8	|||0:600,<br/>1:1200,<br/>2:2400,<br/>3:4800,<br/>4:9600,<br/>5:19200,<br/>6:38400,<br/>7:57600,<br/>8:115200,<br/>9:230400|
|||databit|	Param: 8~9|	Data bit|	databit=8	|8:Databit8,<br/>9:Databit9|
|||parity	|Param: 0~2	|Parity bit	|parity=0|	0:None,<br/>1:Odd,<br/>2:Even|
|||stopbit	|Param: 1~2|	Stopbit	|stopbit=1|	1:Stopbit1<br/>2:Stopbit2|
|||flowcontrol	|Param: 0~3|	Flow control|	flowcontrol=0	|0:None,<br/>1:RTS/CTS,<br/>2:RS-422,<br/>3:RS-485|
|Device Information	|set_devinfo.cgi|	devname	|Param: String|	Device name	|devname=Server1|	-|
|Network Information|	set_netinfo.cgi	|ip	|Param: String|	IP address|	ip= 192.168.11.3	|Including dots|
|||gw	|Param: String|	Gateway IP address|	gw= 192.168.11.254|
|||sub|	Param: String|	Subnet Mask	sub= 255.255.255.192|
|||dns|	Param: String|	DNS server IP address|	dns= 168.126.63.1|
|||dhcp|	Param: 0 or 1|	DHCP enable|	dhcp=0|	1 : Enabled <br/>0 : Disabled|
|Serial Port Information|	set_uart0info.cgi set_uart1info.cgi	|baud|	Param: 1-digit number|	Baud rate	|baud=8|	0:600,<br/>1:1200,<br/>2:2400,<br/>3:4800,<br/>4:9600,<br/>5:19200,<br/>6:38400,<br/>7:57600,<br/>8:115200,<br/>9:230400
|||databit|	Param: 8~9|	Data bit|	databit=8|	8:Databit8,<br/>9:Databit9|
|||parity	|Param: 0~2|	Parity bit|	parity=0|	0:None,<br/>1:Odd,<br/>2:Even|
|||stopbit|	Param: 1~2|	Stopbit	| stopbit=1|	1:Stopbit1,<br/>2:Stopbit2|
|||flow|	Param: 0~3|	Flow control|	flow=0|	0:None,<br/>1:RTS/CTS,<br/>2:RS-422,<br/>3:RS-485|
|16-Digital I/O(0 ~ 15)|	set_diostate.cgi|	pin / val	|Params: digit numbers|	I/O State|	pin=0&val=1|	pin:0~15,<br/>val=0(Low/On),<br/>val=1(High/Off)|
||set_diodir.cgi|	pin / val||	I/O Direction|	pin=1&val=2	|pin:0~15,<br/>val=0(Not used),<br/>val=1(Input),<br/>val=2(Output)|
||set_dioalias.cgi|	pin / val|	Params: digit numbers / String	|I/O Alias|	pin=1&val=pin#1|	pin:0~15<br/>value:string|
