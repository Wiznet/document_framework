---
id: download
title: Download
date: 2020-04-16
---

## Firmware

### Binary

We will use the 🌎[release](https://github.com/Wiznet/WIZ550S2E/releases) page of wiz550s2e's in github.  
  
<a href="https://github.com/Wiznet/WIZ550S2E-Modbus/releases/download/v1.4.0/Binary_v140.zip" target="_blank">Ver 1.4.0 - Modbus Ver</a>  
 * Added features - Modbus

    * Source code - https://github.com/Wiznet/WIZ550S2E-Modbus
    * v1.31 Configuration Tool or later is required.

<a href="https://github.com/Wiznet/WIZ550S2E/releases/download/v1.3.0/Binary_v130.zip" target="_blank">Ver 1.3.0 - MQTT Ver</a>  
  *  Added features - MQTT
      * Source code - https://github.com/Wiznet/WIZ550S2E
      * AT+MQTTSET : (AT command) This command is used to initialize the necessary parameters of MQTT connection(set information automatically saved)
      * AT+MQTTCON : (AT command) Implement MQTT to connect the Broker
      * AT+MQTTPUB : (AT command) Publish the message to subscribed Client(set topic automatically saved)
      * AT+MQTTSUB : (AT command) Such topics will be pushed to the WIZ550S2E when received by the Broker(set topic automatically saved)

### Archive

For more information about the changes for each version, please see
[Revision History](https://github.com/Wiznet/WIZ550S2E/blob/master/README.md#RevisionHistory)  
For all revision binary files including below, you can see at the
[release](https://github.com/Wiznet/WIZ550S2E/releases) page of
wiz550s2e's in GitHub.

  - <a href="/img/products/wiz550s2e/binary_v1.0.3.zip" target="_blank">Ver 1.0.3</a>
  - <a href="/img/products/wiz550s2e/binary_v1.0.2.zip" target="_blank">Ver 1.0.2</a>
  - <a href="/img/products/wiz550s2e/binary_v1.0.1.zip" target="_blank">Ver 1.0.1</a>
  - <a href="/img/products/wiz550s2e/wiz550s2e.zip" target="_blank">Ver 1.0.0</a>

### Firmware upload(TFTP) guide

<a href="/img/products/wiz550s2e/wiz550s2e_fw_uploading_tftp.pdf" target="_blank">Guide Document</a>  

-  **Notice**
   - a working gateway is needed
   - pc and module has to same subnet
   - WIZ550S2E must be done Factory reset, After a firmware update. (Factory reset pin Active Low > 5sec)

[Guide Video](/img/products/wiz550s2e/without_subtitle.mp4)

### Source code

![](/img/products/w5500/w5500_evb/icons/github.png)
<https://github.com/Wiznet/WIZ550S2E>

-----

## Configuration Tool

### ConfigTool

We will not upload files in here.  
We will use the [release](https://github.com/Wiznet/WIZnet_Configuration_Tool/releases)
page of configuration's in github.  

Please refer to below compatibility table and use appropriate version.

| FW Version | Configuration Tool Version |
|------------|----------------------------|
| 1.0.3      | 1.0.3                      |
| 1.3.0      | 1.3.2                      |
| 1.4.0      | 1.4.0 or 1.3.2             |



- [Ver 1.3.2](https://github.com/Wiznet/WIZnet_Configuration_Tool/releases/download/1.3.2/WIZnet_Configuration_Tool.jar)
- [Ver 1.3.1](https://github.com/Wiznet/WIZnet_Configuration_Tool/releases/download/v1.3.1/WIZnet_Configuration_Tool.jar)  
- <a href="/img/products/wiz550s2e/wiznet_configuration_tool_ver1.10.zip" target="_blank">Ver 1.1.0</a>  
- <a href="/img/products/wiz550sr/wiz550sr_download/wiznet_configuration_tool_ver1.03.zip" target="_blank">Ver 1.0.3</a>  
- <a href="/img/products/wiz550s2e/wiznet_configuration_tool_ver1.02.zip" target="_blank">Ver 1.0.2</a>  
- <a href="/img/products/wiz550s2e/wiz550s2e_configuration_tool_ver1.00_0724.zip" target="_blank">Ver 1.0.0</a>


### Configuration Tool 실행 가이드

![](/img/github.png)
<https://github.com/Wiznet/WIZ550S2E>

### Source code

![](/img/github.png)
<https://github.com/Wiznet/WIZnet_Configuration_Tool>
