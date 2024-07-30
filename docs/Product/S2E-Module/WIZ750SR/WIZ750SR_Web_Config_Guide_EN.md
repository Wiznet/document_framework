---
id: WIZ750SR_Web_Config_Guide_EN
title: WIZ750SR Web Config Guide
date: 2024-07-30
---





-----



## WIZ750SR Web Server Configuration Overview

**WIZ750SR** supports **Web server for Configuration**.
  > **Note** : This content is available starting from F/W Version 1.4.0.



-----



## Required Hardware and Software



### Hardware

  - WIZ750SR
    - [WIZ750SR](./WIZ750SR/WIZ750SR.md)


### Software
  
  - Firmware 
    - [Firmware Ver 1.4.0 Download Link](https://github.com/Wiznet/WIZ750SR/releases/tag/v1.4.0)
  > **Note** : Version below 1.4.0 do not support web server configuration. **Be sure to download Version 1.4.0.**


### Configuration Tool

  - WIZnet S2E Configuration Tool 
    - [Download the Latest Version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
      - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)
    > **Note** : You need a configuration tool for the firmware update.


-----



## How to Configure in WIZ750SR Web server



### Step 1: Setup the S2E to an IP in the same range as the PC

After connecting the power and Ethernet cables to the WIZ750SR, run the Configuration Tool you downloaded from the 'Software' section above. Then, click the buttons in the order shown in the picture below to set the IP range to the same as the user's PC.

<img src="/img/products/wiz750sr/webserver_config_1.png" width="600" /><br /><br />



### Step 2: Access the web server for configuration

Using a web browser (e.g., Chrome), connect to the web server at port **50003** of the S2E module address you have configured.


<img src="/img/products/wiz750sr/webserver_config_2.png" width="600" /><br /><br />

|                                                                                            

### Step 3: Exploring the Configuration Feature

(1) Get WIZ750SR information

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_3.png" width="600" /> |
| Figure: **Click the "Get Settings" button to load the information from the WIZ750SR**                                                        |

<br />
<br />
<br />
<br />

(2) Description of Fields

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_4.png" width="600" /> |
| Figure: **Device Name Field**                                                        |

<br />
<br />

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_5.png" width="600" /> |
| Figure: **Network Information Field for WIZ750SR**                                                        |

<br />
<br />

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_6.png" width="600" /> |
| Figure: **Operation Mode and Port Field for WIZ750SR**                                                        |

<br />
<br />

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_7.png" width="600" /> |
| Figure: **UART Field for WIZ750SRR**                                                        |

<br />
<br />
<br />
<br />
(3) Set WIZ750SR information

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| <img src="/img/products/wiz750sr/webserver_config_8.png" width="600" /> |
| Figure: **Click "Get Settings" and save the updated information for the WIZ750SR**                                                        |
