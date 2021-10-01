---
id: how_to_use_web_configuration
title: How to Use Web Configuration
date: 2020-04-24
---

## Main Page

This picture shows the main page of WizFi250’s web server. In order to enter this page, WizFi250 should operate as SoftAP mode or associate to target AP as STA mode.
The web server is launched automatically when joined to target AP or operate SoftAP. If you do not want to operate the web server, you can use &#60;AT+FWEBS&#62; command. For detailed information about &#60;AT+FWEBS&#62; command, refer to AT+FWEBS. After entering this page, users have to input user id and user password. Its default value is admin. If you want to change user id or user password, you can use &#60;AT+MCWUI&#62; command. For detailed information about &#60;AT+MCWUI&#62; command, refer to AT+MCWUI.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-2-1.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-2-1.png").default} alt=""/></a>

After input user information, user can choose an item to perform among below listed 5 items.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-2.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-2.png").default} alt=""/></a>

## Serial to Wi-Fi Setting

If you select “S2W Setting & Scan Network” icon, you can enter into web page as shown in this picture. On this page, you can set parameters for using AP Mode or Station Mode and TCP/UDP.

### Set AP Mode

If you want to use AP Mode and TCP Server, you can select parameter as showm on picture. If you want to use TCP Server or UDP Server, you don't need to input &#60;Remote IP&#62; and &#60;Remote Port&#62;.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-2.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-2.png").default} alt=""/></a>

If WizFi250 was set successfully, you willsee the success message as below.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-4.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-4.png").default} alt=""/></a>

And after checking success result, click the &#60;Next_Step&#62; button in order to move on to the next page. If wrong value was inputted, WizFi250 will return fail message like below.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-5.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-5.png").default} alt=""/></a>

On the next page users can set AP information like SSID, Security and Security Key value as below.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-5-1.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-5-1.png").default} alt=""/></a>

If it finishes successfully, the user will see the message as below.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-5-2.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-5-2.png").default} alt=""/></a>

### Station Mode

If the user seta Station Mode on this web page, the user can select protocol and other information as Remote IP, Remote Port and Local Port. In this example, we will explain how to set Station Mode and TCP Client.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-3-1.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-3-1.png").default} alt=""/></a>

If WizFi250 was set successfully, you will see the success message as below.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-4-1.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-4-1.png").default} alt=""/></a>

Then you can select DHCP mode or Static mode. In this example we chose DHCP mode. When using DHCP, it is not required to select IP information.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-6.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-6.png").default} alt=""/></a>

Enter a Password and then Select the &#60;Join&#62; button you want to associate to SSID.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-6-1.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-6-1.png").default} alt=""/></a>

If you can see “Device Started. Web server and access point stopped. See UART for further information.” message in the web browser and “Successfully joined” message in the serial terminal, WizFi250 is associated to AP successfully.
This picture is serial message when WizFi250 is associated to AP successfully.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-7.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-7.png").default} alt=""/></a>

## WPS(Push Button)

This section explains how to set the protocol as TCP or UDP and then associate to Access Point by WPS method. If you select „WPS(Push button)“, you can see the web page as on this picture. For more detailed information, refer to Serial to Wi-Fi Setting.
<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-4-2.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-4-2.png").default} alt=""/></a>

If you click the next_step button after finishing the setting, the web page will be shown as below.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-8.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-8.png").default} alt=""/></a>

If you click the &#60;Go&#62; button on this web page, WizFi250 will scan the Access-Point in order to connect to it. The Access-Point must be set with &#60;WPS-PBC&#62; function as in this picture.
( In this example, we used LINKSYS Access-Point )

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-9.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-9.png").default} alt=""/></a>

This picture shows the log message stating that WizFi250 finished the WPS function successfully.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-10.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-10.png").default} alt=""/></a>

## WPS(PIN)

This section explains how to set the protocol as TCP or UDP and then associate it to the Access Point by WPS method. If you select “WPS(PIN)“, you will see the webpage as shown in this picture. For detailed information, refer to [Serial to Wi-Fi Setting](/).

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-4-2.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-4-2.png").default} alt=""/></a>

If you click the next_step button after finishing the setting, the web page will be shown as below.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-11.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-11.png").default} alt=""/></a>

If you enter PIN number and click &#60;Go&#62; button, WizFi250 will scan the Access-Point in order to connect to it. Access-Point must be set as &#60;WPS-PIN&#62; function as below. ( In this example, we used LINKSYS Access-Point )

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-12.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-12.png").default} alt=""/></a>

If the WPS-PIN function is successful, you will see a serial log message as on this picture.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-10.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-10.png").default} alt=""/></a>

## Change to OTA Mode

If you select “Change to OTA Mode” icon, you will see the web page as on this picture.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-13.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-13.png").default} alt=""/></a>

If you click the &#60;Change to OTA mode&#62; button on this page, WizFi250 will run in OTA Mode. For detailed information about OTA Mode, refer to [Upload newest firmware in OTA mode](/)

## GPIO Control

If you select the “GPIO Control” icon you will see the web page as shown on this picture.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-13-1.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-13-1.png").default} alt=""/></a>

On this page, you can select “Get GPIO Status” menu or “Set GPIO Status” menu.

If you click “Next” button after selecting “Get GPIO Status” menu, you can see the web page as this picture.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-13-2.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-13-2.png").default} alt=""/></a>

On this page, you can check the real time GPIO status of WizFi250.

If you select “Set GPIO Status” menu, you will see the web page as on this picture.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-13-3.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-13-3.png").default} alt=""/></a>

On this page, you can set gpio mode and gpio value of WizFi250.

   * When set as output mode… mode, WizFi250 will set gpio config value to  
     OUTPUT_PUSH_PULL.
   * When set as input mode, WizFi250 will set gpio config value to
     INPUT_HIGH_IMPEDANCE.
     
For detailed information about it, refer to AT+FGPIO.

## Serial Setting

If you select “Serial Setting” icon, you can see the web page as this picture.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-23.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-23.png").default} alt=""/></a>

On this page, you can set serial information. When you select the &#60;Set Serial Config&#62; button after your choice values, WizFi250 will be restarted in order to change serial information.
For detailed information about it, refer to AT+USET.

## User Information Setting

If you select the „User Information“ icon, you will see the web page as in this picture.

<a target="_blank" href={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-24.png").default}><img src={require("/img/products/wizfi250/wizfi250pg/wizfi250pg-24.png").default} alt=""/></a>

On this page, you can change user id and user password. For changing user information, you have to input current id and password.

If you select &#60;Setting&#62; button after input value, WizFi250 will be restarted in order to change user information.
For detailed information about it, refer to AT+MCWUI.