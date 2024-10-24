---
id: mqtt-connection-guide-en
title: MQTT Connection Guide
date: 2022-06-28
---



-----



## MQTT Connection Overview

**W55RP20-S2E** supports **MQTT client** and **MQTTS client** mode.



-----



## Required Hardware and Software



### Hardware


  - W55RP20-S2E
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

W55RP20-S2E supports MQTT client and MQTTS client mode, but this section guides how to connect to MQTT broker through Mosquitto based on MQTT client mode.

> **Note** : MQTTS client mode requires additional security-related settings, unlike MQTT client mode.



### Step 1: Run Config-tool

Run installed **'Config-tool'** 





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



### Step 4: Setup Device through WIZnet S2E Configuration Tool for MQTT Broker Connection

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

Device is successfully connected to the MQTT broker!

|                                                                            |
| :------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/status.png) |
| Figure: **Status**                                                         |

|                                                                                            |
| :----------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/connect_to_mqtt_broker.png) |
| Figure: **Connect to MQTT broker**                                                         |



-----


## How to connect to AWS using MQTT

### Step 1: Create a Thing and Policy in AWS and Download a Certificate

1. To use AWS services, you must first sign in. Click the link below to go to the sign in page.

**[AWS login page](https://aws.amazon.com/console/)**

<br />
<br />


2. Once logged in, search for “IoT Console” in the search bar and click on it.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/1_aws_iot_core.png" width="600" /> |
| Figure: **Search “IoT Console"**                                                         |

<br />
<br />

2. Click the “Things” tab on the left, then hit the orange “Create things” button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/2_aws_creating_thing.png" width="600" /> |
| Figure: **click "Create Things"**                                                         |

<br />
<br />


3. Select “Create single thing” and press the Next button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/3_aws_creating_thing.png" width="600" /> |
| Figure: **Select "Create things"**                                                         |

<br />
<br />


4. Enter “Thing name” and hit the Next button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/4_aws_creating_thing.png" width="600" /> |
| Figure: **Enter "Thing name"**                                                         |

<br />
<br />


5. Select “Auto-generate a new certificate (recommended)” and press the Next button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/5_aws_creating_thing.png" width="600" /> |
| Figure: **Select "Auto-generate a new certificate" and click "Next"**                                                         |

<br />
<br />


6. Next, you need to create a policy for securing your Thing. Click “Create policy”.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/6_aws_creating_policy.png" width="600" /> |
| Figure: **Click "Create policy"**                                                         |

<br />
<br />


7. Set a name for the policy, configure the Policy Document as shown, and hit the Create button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/7_aws_creating_policy.png" width="600" /> |
| Figure: **Setting policy information**                                                         |

<br />
<br />


8. Go back to the “Create single thing” page you opened earlier and press the “Create thing” button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/8_aws_combine_policy.png" width="600" /> |
| Figure: **Click "Create thing"**                                                         |

<br />
<br />


9. Download all keys and certificates.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/9_aws_downloading_cert_key.png" width="600" /> |
| Figure: **Download all keys and certificates**                                                         |

<br />
<br />
<br />
<br />

### Step 2: Enter the certificate on the device

1. In AWS, enter the MQTT Test Client tab and copy the endpoint.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/10_aws_copy_endpoint.png" width="600" /> |
| Figure: **Copy Endpoint**                                                         |

<br />
<br />

2. Turn on the configuration tool to detect your device and set the “Basic settings” tab as follows

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/1_device_search.png" width="600" /> |
| Figure: **Set the “Basic settings” tab in the configuration tool**                          |

<br />
<br />

3. Set up the “MQTT options” tab like this

- MQTT Topics Section
  - **Publish Topic:** $aws/things/my_w232n_thing/shadow/update
  - **Subscribe Topic:** $aws/things/my_w232n_thing/shadow/update/accepted

- MQTT Options
  - **Client ID:** my_w232n_thing
  - **Keep-Alive:** 60
  - **QoS:** QoS 0

- Remote Host / Port
  - **Remote Host:** Paste the copied endpoint  
  - **Remote Port:** 8883

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/2_MQTT_option.png" width="600" /> |
| Figure: **Set “MQTT options”**                                                         |

<br />
<br />


4. Go to the Certificate Manager tab and adjust the Root CA section as shown below.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/3_MQTT_cert_key.png" width="600" /> |
| Figure: **Adjust the Root CA section**                                                         |

<br />
<br />

5. Tap “Load file” to load the following certificate and key files

- **Root CA** : AmazonRootCA1.pem
- **Client Certificate** : xxxxx-certificate.pem.crt
- **Private Key** : xxxxx-private.pem.key

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/4_MQTT_cert_key.png" width="600" /> |
| Figure: **Load certificate and key files**                                                         |

<br />
<br />

6. Press each of the “Save to device” buttons.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/5_MQTT_cert_key.png" width="600" /> |
| Figure: **Save certificate and key files**                                                         |

<br />
<br />

7. click “Apply settings”.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/6_MQTT_cert_key.png" width="600" /> |
| Figure: **click “Apply settings”**                                                         |

<br />
<br />
<br />
<br />


### Step 3: Run (Subscribe)

1. Go back to the AWS IoT Console page and click “MQTT test client” under the “Test” section to enter it. Then, in the MQTT Topics Section of the configuration tool, enter the Publish Topic **$aws/things/my_w232n_thing/shadow/update** in the “Topic filter” and hit the Subscribe button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/1_aws_sub_topic.png" width="600" /> |
| Figure: **Subscrive topic**                                                         |

<br />
<br />

2. Open your device's serial port using a terminal tool to transfer data.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/2_aws_sub_topic.png" width="600" /> |
| Figure: **Transfer data**                                                         |

<br />
<br />

3. This will ensure that your MQTT communication with AWS is working correctly.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/3_aws_sub_topic.png" width="600" /> |
| Figure: **Successful MQTT communication with AWS**                                                         |

<br />
<br />
<br />
<br />

### Step 4: Run (Publish)

1. Return to the AWS IoT Console page and click “MQTT test client” under the “Test” section. Then in the MQTT Topics Section of the configuration tool, enter the Subscribe Topic $aws/things/my_w232n_thing/shadow/update/accepted in the “Topic name” and hit the Publish button.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/4_aws_pub_topic.png" width="600" /> |
| Figure: **Publish topic**                                                         |

<br />
<br />

2. In the Serials window, you can see the data sent by AWS.

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/5_aws_pub_topic.png" width="600" /> |
| Figure: **Successful MQTT communication with AWS**         |
