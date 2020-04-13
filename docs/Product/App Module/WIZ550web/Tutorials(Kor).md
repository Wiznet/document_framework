---
id: tutorials_kor
title: Tutorials(Kor)
date: 2020-04-13
---


## Content
## WIZ550web Tutorials
### Overview
WIZ550web의 I/O 제어는 CGI를 이용하여 I/O의 제어와 모니터링을 수행한다. 웹 페이지는 🌎[HTTP GET / POST method]()를 활용하여 웹 서버의 상태 값을 얻거나(GET) 웹 페이지의 변경된 값을 웹 서버로 전달(POST)하도록 구성되어 있으며, 이러한 동작을 수행하기 위하여 웹 페이지의 HTML / JavaScript(AJAX)와 웹 서버의 CGI handler가 일치하도록 구현되어 있어야 한다. CGI에 관한 설명은 ['Getting Started Guide: WIZ550web의 CGI']()에 설명되어 있다.

사용자는 Tutorial을 통해 WIZ550web에 구현된 I/O interface function의 이해와 활용이 가능하다. 이를 통해 사용자는 원격지에서 웹 서버로 접속하고, 사용자 device의 상태를 모니터링 하거나 I/O의 on/off 기능을 수행하는 사용자만의 **WIZ550web용** 웹 페이지를 제작할 수 있다.

본 Tutorial 에서는 다음과 같은 내용을 다룬다.

Tutorial 0: [**Introduce the I/O Interface functions and test webpage**]()
     * Web browser와 WIZ550web의 기본적인 동작에 대해 소개하고, 사용자가 웹 페이지만 수정하  여 원하는 형태의 I/O 제어용 웹 사이트를 구성 할 수 있도록 미리 정의된 I/O interface function과 테스트 페이지를 소개한다.
     
**Tutorial 1: [Set the Digital I/O Status**]()
     * WIZ550web에서 제공하는 Digital I/O (16)의 On - Off 상태를 제어 할 수 있는 Web page 제작에 대해 다룬다. 이를 통해 사용자는 웹을 통해 제품의 LED / Relay 등을 제어 할 수 있다. 이 Tutorial을 통해 학습한 기능을 응용하면 Digital I/O의 Direction (Input / Output / None) 제어 기능도 제작 할 수 있다.
     
Tutorial 2: [Get the Digital I/O Status]()
Tutorial 3: [Get the Analog Input Value]()
Tutorial 4: [Get/Set the WIZ550web IP Settings]()
Tutorial 5: [Real-time Data Update on WIZ550web Web page]()
Tutorial 6: [How to Make Custom Interface Functions with WIZ550web]()

미리 정의된 I/O Function에 대한 명세는 다음 가이드에서 확인 할 수 있다.

Guide Document
[WIZ550web Get/Set Interface Functions Guide]()


Tutorial 0:
[Introduce the I/O Interface functions]()


## Interface Functions Guide for WIZ550web


### Overview
WIZ550web은 펌웨어의 수정 없이 웹 페이지의 제작만으로 장치 이름 및 Network 설정, 각각의 Digital I/O와 Analog input의 제어와 모니터링을 수행할 수 있도록 CGI를 위한 HTTP Request function set을 제공한다.

GET / SET interface로 나뉘어 구현되어 있으며, 사용자는 JavaScript와 AJAX를 이용한 HTTP GET / POST method로 각 기능에 해당하는 CGI를 요청하는 방법을 활용하면 손쉽게 WIZ550web을 제어할 수 있는 웹 페이지를 구현 및 제작 할 수 있다. GET 명령의 경우 해당하는 요청에 대한 JavaScript Callback function의 형태로 값을 얻도록 구성 되었으며, SET 명령의 경우 CGI 요청과 함께 설정하고자 하는 값을 지정된 Web form element의 형태로 HTTP request에 포함하여 WIZ550web으로 전송하면 된다.

WIZ550web의 CGI에 관한 내용은 ['Getting Started Guide: WIZ550web의 CGI']() 챕터를 참조하기 바란다.

### Download and Link
Get/Set interface CGI를 이용한 테스트 용 웹 페이지 및 펌웨어는 다음 링크에서 다운로드 할 수 있다.

WIZ550web GitHub Repository

🌎https://github.com/Wiznet/WIZ550web

WIZ550web GitHub Repository: Webpage source code

🌎[GET/SET Interface functions Testpage]()

## WIZ550web GET/SET Interface

WIZ550web의 GET/SET interface를 위한 CGI 리스트는 아래와 같다.

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
|Device Configuration|	config.cgi|	devicename|	Param: String|Device name|	|devicename=WIZ550WEB|	-|
|||dhcp	|Param: 0 or 1	|DHCP enable|	dhcp=0	|1 : Enabled 0 : Disabled|
|||lib|	Param: Sting|	Local IP address|	lip=192.168.11.100	|Including dots|
|||gw	Param: String|	Gateway IP address|	gw=192.168.11.254||
|||sub	|Param: String	|Subnet Mask|	sub=255.255.255.192||
|||dns|	Param: String|	DNS server IP address|	dns=168.126.63.1||
|||baudrate|	Param: 1-digit number|	Baud rate|	baud=8	|||0:600,1:1200,2:2400,3:4800,4:9600,5:19200,6:38400,7:57600,8:115200,9:230400|
|||databit|	Param: 8~9|	Data bit|	databit=8	|8:Databit8,9:Databit9|
|||parity	|Param: 0~2	|Parity bit	|parity=0|	0:None ,1:Odd ,2:Even|
|||stopbit	|Param: 1~2|	Stopbit	|stopbit=1|	1:Stopbit1 2:Stopbit2|
|||flowcontrol	|Param: 0~3|	Flow control|	flowcontrol=0	|0:None,1:RTS/CTS,2:RS-422,3:RS-485|
|Device Information	|set_devinfo.cgi|	devname	|Param: String|	Device name	|devname=Server1|	-|
|Network Information|	set_netinfo.cgi	|ip	|Param: String|	IP address|	ip= 192.168.11.3	|Including dots|
|||gw	|Param: String|	Gateway IP address|	gw= 192.168.11.254|
|||sub|	Param: String|	Subnet Mask	sub= 255.255.255.192|
|dns|	Param: String|	DNS server IP address|	dns= 168.126.63.1|
|dhcp|	Param: 0 or 1|	DHCP enable|	dhcp=0|	1 : Enabled 0 : Disabled|
|Serial Port Information|	set_uart0info.cgi set_uart1info.cgi	|baud|	Param: 1-digit number|	Baud rate	|baud=8|	0:600,1:1200,2:2400,3:4800,4:9600,5:19200,6:38400,7:57600,8:115200,9:230400
|||databit|	Param: 8~9|	Data bit|	databit=8|	8:Databit8,9:Databit9|
|||parity	|Param: 0~2|	Parity bit|	parity=0|	0:None,1:Odd,2:Even|
|||stopbit|	Param: 1~2|	Stopbit	stopbit=1|	1:Stopbit1,2:Stopbit2|
|||flow|	Param: 0~3|	Flow control|	flow=0|	0:None,1:RTS/CTS,2:RS-422,3:RS-485|
|16-Digital I/O(0 ~ 15)|	set_diostate.cgi|	pin / val	|Params: digit numbers|	I/O State|	pin=0&val=1|	pin:0~15,val=0(Low/On),val=1(High/Off)|
||set_diodir.cgi|	pin / val||	I/O Direction|	pin=1&val=2	|pin:0~15 ,val=0(Not used),val=1(Input),val=2(Output)|
||set_dioalias.cgi|	pin / val|	Params: digit numbers / String	|I/O Alias|	pin=1&val=pin#1|	pin:0~15 value:string|
