---
id: aws-connection-guide
title: AWS Connection Guide
date: 2021-05-21
---

## Getting Started

### Hardware Requirement
-   Desktop or laptop computer
-   MicroUSB cable
-   LAN cable
-   WIZ510SSL
-   WIZ510SSL-EVB

### Software Requirement

-   Preferred Serial Terminal (TeraTerm, YAT, etc.)
-   AWS Console account

<details open>
<summary> AWS IoT Core preparation before start</summary>

- [**Sign to console**][Link-AWS-Console]
- [**Create a thing**][Link-create-thing]
- [**Create a policy**][Link-create-policy]

:::important
 Save certificates and key during creation.
![](/img/products/wiz510ssl/aws_connection_guide/sdk-attach-policy.png)
AWS root CA can be downloaded from [**here**][link-aws-ca]
:::

</details>

## Introduction

AWS IoT provides secure, bi-directional communication between Internet-connected devices such as sensors, actuators, embedded micro-controllers, or smart appliances and the AWS Cloud.
It is possible to connect to AWS via **WIZ510SSL** and send data using MQTTS.

In this document we will provide guide how to connect to AWS services.
Process consists of following steps:
- Creation of AWS account
- Creation & configuration of Thing in IoT Core
- Connection & Message transfer

For this guide we used evaluation board **WIZ510SSL-EVB**

## Device preparation

### Device connection

Please check COM port number in Device Manager.

![](/img/products/wiz510ssl/aws_connection_guide/DeviceManager.JPG)

:::tip
If COM port cannot be found in Device Manager, please install drivers below.
  - [Silicon Labs CP210x USB to UART Driver]
:::

## Configuration Description

There are two ways how to configure WIZ510SSL: using ConfigTool and using AT Commands.

### 1. Configuration using AT commands

Please refer to [Command Manual] to find information about all AT Commands.
Below we will describe commands created for AWS connection.

|  Description | Command | Remark |
|:--------|:--------|:--------|
| Set network configuration to DHCP | IM1 |  |
| Set operation mode to MQTTS client | OP6 |  |
| Set remote host | RH&lt;parameter&gt; | Use AWS endpoint |
| Set remote port to 8883 | RP8883 |  |
| Set packing time | PT500 | 500 is given as example |
| Set Client ID | QC&lt;parameter&gt; | Use Thing name |
| Set Public Topic| PU&lt;parameter&gt; | $aws/things/&lt;Thing Name&gt;/shadow/update |
| Set Subscribe Topic | U0&lt;parameter&gt; | $aws/things/&lt;Thing Name&gt;/shadow/update/accepted |
| Set MQTT Keep Alive time | QK60 | 60 is given as example |
| Set Root CA option | RC2 | 2 - required |
| Enable Client Certificate | CE1 | 1 - enabled |
| Save Root CA | OC |  |
| Save Client certificate | LC |  |
| Save Private Key | PK |  |
| Save settings | SV |  |
| Reboot device | RT |  |


Please note that WIZ510SSL supports multiple command setup.
It is possible to make above settings as following:
````cpp
IM1\r\nOP6\r\nPT500\r\nQC"Thing Name"\r\nRH"End Point".amazonaws.com\r\nRP8883\r\nPU$aws/things/"Thing Name"/shadow/update\r\nU0$aws/things/"Thing Name"/shadow/update/accepted\r\nQK60\r\nRC2\r\nCE1\r\n
````

To save Root CA, Client Certificate or Private Key we used YAT file transfer function.

First, add appropriate command name in the beginning of the file.

Refer to below example:

![](/img/products/wiz510ssl/aws_connection_guide/certificate_with_command.png)

Use following EOL settings:

![](/img/products/wiz510ssl/aws_connection_guide/yat_settings.png)

**Each certificate shall be sent separately.**

It is necessary to save settings and reboot device.
````cpp
SV\r\nRT\r\n
````

### 2. Configuration using Config Tool

Please refer to [Config Tool Manual] to find detail information about Config Tool.
Below we will show configuration required for AWS connection.

**Step 1.**

Setup DHCP select following:
![](/img/products/wiz510ssl/aws_connection_guide/basic_settings.png)

Make settings in MQTT Options tab:
![](/img/products/wiz510ssl/aws_connection_guide/mqtt_options_settings.png)

Make settings in Certificate Manager tab:
![](/img/products/wiz510ssl/aws_connection_guide/certificate_manager_settings.png)

**Step 2.**

To load certificates/keys follow below steps:

- Click "Load File" button. File explorer window will appear.
![](/img/products/wiz510ssl/aws_connection_guide/certificate_load.png)

- Select file and click "Open"
:::tip
Select original file, not the file with added AT command!
:::

- Click "Save to device" button. If succesful, "Upload Complete" pop-up window will appear.
![](/img/products/wiz510ssl/aws_connection_guide/certificate_saved.png)

:::tip
When saving certificate or key, "Save to device" button shall be pressed for each one.
"Apply settings" button will NOT save certificates/keys to device.
:::

**Step 3.**

Press "Apply settings" button to save settings made in Step 1.
Reboot device.

## Results

1. Send test message using Terminal

![](/img/products/wiz510ssl/aws_connection_guide/pub_message.png)

2. Since we subscribed to "updated" topic, when MQTT message is sent we can see reply message instantly.
Also it is possible to check in AWS IoT -> Manage -> Things -> Shadow or Activity

![](/img/products/wiz510ssl/aws_connection_guide/shadow_state_check.png)
![](/img/products/wiz510ssl/aws_connection_guide/activity_check.png)


**Congratulations**

WIZ510SSL is successfully connected to AWS!

[Link-AWS-Console]: https://aws.amazon.com/ko/console/
[Link-create-thing]: https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-resources.html#create-aws-thing
[Link-create-certi]: https://docs.aws.amazon.com/iot/latest/developerguide/create-device-certificate.html
[Link-create-policy]: https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-resources.html#create-iot-policy
[Link-attach-policy]: https://docs.aws.amazon.com/iot/latest/developerguide/attach-policy-to-certificate.html
[Link-attach-certi]: https://docs.aws.amazon.com/iot/latest/developerguide/attach-cert-thing.html

[Silicon Labs CP210x USB to UART Driver]: https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers

[link-aws-ca]: https://docs.aws.amazon.com/iot/latest/developerguide/server-authentication.html#server-authentication-certs