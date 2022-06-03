---
id: ssl-connection-guide
title: SSL Connection Guide
date: 2022-06-02
---



-----



## WIZ5xxSR-RP SSL Connection Overview

**WIZ5xxSR-RP** supports **SSL TCP client** mode.



-----



## Required Hardware and Software



### Hardware

  - WIZ5xxSR-RP
    - [WIZ500SR-RP](./WIZ500SR-RP/overview_en.md)
    - [WIZ505SR-RP](./WIZ505SR-RP/overview_en.md)
    - [WIZ510SR-RP](./WIZ510SR-RP/overview_en.md)
  - WIZ5xxSR-RP Evaluation Board (WIZ510SR-RP can be used without WIZ5xxSR-RP Evaluation Board.)
  - 5V Power adapter
  - Cables (Ethernet / Serial)



### Software

  - WIZnet S2E Configuration Tool
	- [Download the Latest Version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.4.2)
    - [Download the Older Versions](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)
  - OpenSSL:
	- [Download Link](https://slproweb.com/products/Win32OpenSSL.html)



-----



## How to Connect to SSL Server through OpenSSL



### Step 1: Setup Environment to Use WIZ5xxSR-RP

The process of setup environment to use the WIZ5xxSR-RP each product is available at the **'Getting Started'** document below.

  - [Getting Started: WIZ500SR-RP](./WIZ500SR-RP/getting-started_en.md)
  - [Getting Started: WIZ505SR-RP](./WIZ505SR-RP/getting-started_en.md)
  - [Getting Started: WIZ510SR-RP](./WIZ510SR-RP/getting-started_en.md)



### Step 2: Setup OpenSSL

Setup OpenSSL to use as the SSL Server.

```bash
genrsa -des3 -out [key_name].key 2048
req -new -key [key_name].key -out [csr_name].csr
x509 -req -days [days] -in [csr_name].csr -signkey [key_name].key -out [crt_name].crt

Ex>
genrsa -des3 -out server.key 2048
req -new -key server.key -out server.csr
x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```



### Step 3: Run SSL Server through OpenSSL

If you have setup the OpenSSL to use as the SSL server, run the SSL server.

```bash
s_server -accept [port] -cert [crt_name].crt -key [key_name].key

Ex>
s_server -accept 443 -cert server.crt -key server.key
```



### Step 4: Setup WIZ5xxSR-RP through WIZnet S2E Configuration Tool for SSL Server Connection

1. Select **SSL TCP client** mode in the **Operation mode** setting section

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/select_ssl_tcp_client_mode.png) |
| Figure: **Select SSL TCP client mode**                                                        |

2. Setup the **remote host IP (or URL)** and **remote port** in the **Remote host / port** section

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/setup_remote_host_ip_and_remote_port.png) |
| Figure: **Setup remote host IP and remote port**                                                        |

3. Click the **Apply Settings** button to save the settings

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/click_apply_settings_button.png) |
| Figure: **Click Apply Settings button**                                                        |

|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/saved_settings.png) |
| Figure: **Saved settings**                                                        |


> **Note**: If you need certificates to connect to the SSL server, please refer to the [**'What If I Need Certificates to Connect to SSL Server'**](#what-if-i-need-certificates-to-connect-to-ssl-server?) section below.



### Step 5: Done

WIZ5xxSR-RP is successfully connected to the SSL server!



-----



## Appendix



### What If I Need Certificates to Connect to SSL Server?

You can upload certificates below in the '**Certificate manager**' tab of the'WIZnet S2E Configuration Tool'.
  - Root CA
  - Client Certificate
  - Private key

Upload and setup the certificates required by the SSL server you want to connect to.

After loading the certificate by clicking the '**Load file**' button, be sure to save it by clicking the '**Save to device**' button.

|                                                                                        |
| :------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/upload_certificates.png) |
| Figure: **Upload certificates**                                                        |



-----



**If there is any problem?**  
Please refer to our **Troubleshooting Guide**!



-----
