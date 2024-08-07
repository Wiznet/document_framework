---
id: mqtt-connection-guide-kr
title: MQTT Connection Guide-[KR]
date: 2022-06-28
---



-----



## WIZ5xxSR-RP MQTT Connection Overview

**WIZ5xxSR-RP** supports **MQTT client** and **MQTTS client** mode.



-----



## Required Hardware and Software



### Hardware


  - WIZ5xxSR-RP Evaluation Board (WIZ510SR-RP can be used without WIZ5xxSR-RP Evaluation Board.)
  - 5V Power adapter
  - Cables (Ethernet / Serial)



### Software

  - WIZnet S2E Configuration Tool
	- [Download the Latest Version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.5.0)
    - [Download the Older Versions](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)
  - Mosquitto:
	- [Download Link](https://mosquitto.org/download/)



-----



## How to Connect to MQTT Broker through Mosquitto

WIZ5xxSR-RP supports MQTT client and MQTTS client mode, but this section guides how to connect to MQTT broker through Mosquitto based on MQTT client mode.

> **Note** : MQTTS client mode requires additional security-related settings, unlike MQTT client mode.



### Step 1: Setup Environment to Use WIZ5xxSR-RP

The process of setup environment to use the WIZ5xxSR-RP each product is available at the **'Getting Started'** document below.





### Step 2: Setup Mosquitto

Depending on the Mosquitto version, you may need to setup Mosquitto, so refer to the below to setup.

  - In Mosquitto versions earlier than 2.0 the default is to allow clients to connect without authentication.
  - In 2.0 and up, you must choose your authentication options explicitly before clients can connect.

Therefore, if you are using version 2.0 or later, refer to following link to setup 'mosquitto.conf' in the directory where Mosquitto is installed.

  - [Authentication Methods](https://mosquitto.org/documentation/authentication-methods/)



### Step 3: Run MQTT Broker through Mosquitto

```bash
Ex>
mosquitto -c mosquitto.conf -p 1883 -v
```

|                                                                                                       |
| :---------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/run_mqtt_broker_through_mosquitto.png) |
| Figure: **Run MQTT broker through Mosquitto**                                                         |



### Step 4: Setup WIZ5xxSR-RP through WIZnet S2E Configuration Tool for MQTT Broker Connection

1. Select **MQTT client** mode in the **Operation mode** setting section

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/select_mqtt_client_mode.png) |
| Figure: **Select MQTT client mode**                                                         |

2. Setup the **remote host IP (or URL)** and **remote port** in the **Remote host / port** section

|                                                                                                          |
| :------------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/setup_remote_host_ip_and_remote_port.png) |
| Figure: **Setup remote host IP and remote port**                                                         |

3. Setup MQTT options

|                                                                                        |
| :------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/setup_mqtt_options.png) |
| Figure: **Setup MQTT options**                                                         |

4. Click the **Apply Settings** button to save the settings

|                                                                                                 |
| :---------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/click_apply_settings_button.png) |
| Figure: **Click Apply Settings button**                                                         |

|                                                                                    |
| :--------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/saved_settings.png) |
| Figure: **Saved settings**                                                         |



### Step 5: Done

WIZ5xxSR-RP is successfully connected to the MQTT broker!

|                                                                            |
| :------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/status.png) |
| Figure: **Status**                                                         |

|                                                                                            |
| :----------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/connect_to_mqtt_broker.png) |
| Figure: **Connect to MQTT broker**                                                         |



-----
