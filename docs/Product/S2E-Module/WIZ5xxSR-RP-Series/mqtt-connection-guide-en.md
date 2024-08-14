---
id: mqtt-connection-guide
title: MQTT Connection Guide
date: 2022-06-28
---



-----



## WIZ5xxSR-RP MQTT Connection Overview

**WIZ5xxSR-RP** supports **MQTT client** and **MQTTS client** mode.



-----



## Required Hardware and Software



### Hardware

  - WIZ5xxSR-RP
    - [WIZ500SR-RP](./WIZ500SR-RP/overview-en.md)
    - [WIZ505SR-RP](./WIZ505SR-RP/overview-en.md)
    - [WIZ510SR-RP](./WIZ510SR-RP/overview-en.md)
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

  - [Getting Started: WIZ500SR-RP](./WIZ500SR-RP/getting-started-en.md)
  - [Getting Started: WIZ505SR-RP](./WIZ505SR-RP/getting-started-en.md)
  - [Getting Started: WIZ510SR-RP](./WIZ510SR-RP/getting-started-en.md)



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



## How to connect using MQTT with AWS

### Step 1: Creating a Thing and Policy in AWS and downloading the certificate

1. To use AWS services, you must first log in. Please click the link below to proceed to the login page.

**[AWS Login Page](https://aws.amazon.com/console/)**

2. After logging in, search for "IoT console" in the search bar and click on it.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/1_aws_iot_core.png) |
| Figure: **search for "IoT console"**                                                         |


2. Click on the "Things" tab on the left, and then press the orange "Create things" button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/2_aws_creating_thing.png) |
| Figure: **Click "create Things"**                                                         |


3. Select "Create single thing" and then press the Next button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/3_aws_creating_thing.png) |
| Figure: **search for "IoT console"**                                                         |


4. Enter the "Thing name" and press the Next button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/4_aws_creating_thing.png) |
| Figure: **Enter the "Thing name"**                                                         |

5. Select "Auto-generate a new certificate (recommended)" and press the Next button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/5_aws_creating_thing.png) |
| Figure: **Select "Device certificate"**                                                         |


6. Next, you need to create a policy for the security of the thing. Click on "Create policy"

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/6_aws_creating_policy.png) |
| Figure: **Click on "Create policy"**                                                         |


7. Set the name of the policy, configure the Policy Document as shown in the picture, and then press the Create button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/7_aws_creating_policy.png) |
| Figure: **Setting Policy Information**                                                         |


8. Return to the previously opened "Create single thing" page and press the "Create thing" button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/8_aws_combine_policy.png) |
| Figure: **press the "Create thing" button**                                                         |


9. Download all the Key & certificates.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/9_aws_downloading_cert_key.png) |
| Figure: **Downloading all the Key & certificates**                                                         |




### Step 2: Entering the certificate into the S2E module

1. Enter the MQTT test client tab in AWS and copy the endpoint.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/10_aws_copy_endpoint.png) |
| Figure: **search for "IoT console"**                                                         |

2. Turn on the configuration tool, search for the device, and set the "Basic settings" tab as follows.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/1_device_search.png) |
| Figure: **setting the "Basic settings" tab of configuration tool**                                                         |


3. Set the "MQTT options" tab as follows.

- MQTT Topics Section
  - **Publish Topic:** `$aws/things/my_w232n_thing/shadow/update`
  - **Subscribe Topic:** `$aws/things/my_w232n_thing/shadow/update/accepted`

- MQTT Options
  - **Client ID:** `my_w232n_thing`
  - **Keep-Alive:** `60`
  - **QoS:** `QoS 0`

- Remote Host / Port
  - **Remote Host:** `Paste the endpoint copied earlier`  
  - **Remote Port:** `8883`

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/2_MQTT_option.png) |
| Figure: **Setting the "MQTT options"**                                                         |

4. Go to the Certificate Manager tab and adjust the Root CA section to match the settings shown in the picture below.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/3_MQTT_cert_key.png) |
| Figure: **adjusting the Root CA section**                                                         |

5. Press "Load file" to load the following certificate and key files:

- **Root CA** : AmazonRootCA1.pem
- **Client Certificate** : xxxxx-certificate.pem.crt
- **Private Key** : xxxxx-private.pem.key

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/4_MQTT_cert_key.png) |
| Figure: **Load certificate and key files**                                                         |

6. Press the "Save to device" button three times.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/5_MQTT_cert_key.png) |
| Figure: **Save certificate and key files**                                                         |

7. Press "Apply settings"

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/6_MQTT_cert_key.png) |
| Figure: **Press "Apply settings"**                                                         |


### Step 3: execute (Subscribe)

1. Return to the AWS IoT console page and click on "MQTT test client" under the "Test" section to enter. Then, enter the Publish Topic **$aws/things/my_w232n_thing/shadow/update** from the MQTT Topics Section in the Configuration Tool into the "Topic filter". Press the Subscribe button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/1_aws_sub_topic.png) |
| Figure: **Subscribe to a topic**                                                         |

2. Open the USB port connected to the S2E module's UART using a serial terminal tool, and send the data.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/2_aws_sub_topic.png) |
| Figure: **Sending data**                                                         |

3. This way, you can confirm that the MQTT communication is working correctly with AWS.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/3_aws_sub_topic.png) |
| Figure: **sucessful MQTT communication with AWS**                                                         |


### Step 4: execute (Publish)

1. Return to the AWS IoT console page and click on "MQTT test client" under the "Test" section. Then, enter the Subscribe Topic $aws/things/my_w232n_thing/shadow/update/accepted from the MQTT Topics Section in the Configuration Tool into the "Topic name". Press the Publish button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/4_aws_pub_topic.png) |
| Figure: **Publish to a topic**                                                         |


2. You can verify the data sent from AWS in the serial window.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/w232n/aws_execute/5_aws_pub_topic.png) |
| Figure: **sucessful MQTT communication with AWS**                                                         |