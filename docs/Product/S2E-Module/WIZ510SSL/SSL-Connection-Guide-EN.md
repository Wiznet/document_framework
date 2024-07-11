---
id: ssl-connection-guide
title: SSL Connection Guide
date: 2021-05-21
---

## Using the OpenSSL

The '**Using the OpenSSL**' section provides a guide to **connecting to the SSL server** through **OpenSSL**


## Required Hardware and Software


### Hardware

  - WIZ510SSL

  - WIZ510SSL-RS232/TTL-EVB Evaluation Board

  - Cables (Ethernet / Serial / Micro USB Type B)



### Software

  - WIZnet S2E Configuration Tool
	- [Download the latest version](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/v1.4.0)
    - [Download the older versions](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)

  - OpenSSL:
	- [Download the latest version](https://slproweb.com/products/Win32OpenSSL.html)



## How to Connect to SSL Server through OpenSSL

### Step 1: Set up environment to use the WIZ510SSL

The process of set up environment to use the WIZ510SS is available at the [WIZ510SSL Getting Started](./Getting-Started-EN.md) page.



### Step 2: Set up and run the SSL server through OpenSSL

  - Set up the SSL server

```
genrsa -des3 -out [key_name].key 2048              // Create the private key
req -new -key [key_name].key -out [csr_name].csr   // Create the CSR(Required for certificate signing request)
x509 -req -days [days] -in [csr_name].csr -signkey [key_name].key -out [crt_name].crt   // Create the certificate

Ex>
genrsa -des3 -out server.key 2048
req -new -key server.key -out server.csr
x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

  - Run the SSL server

```
s_server -accept [port] -cert [crt_name].crt -key [key_name].key   // Run SSL the server

Ex>
s_server -accept 443 -cert server.crt -key server.key
```

### Step 3: Set up the WIZ510SSL through the WIZnet S2E Configuration Tool for SSL server connection

  - Select **SSL TCP client** mode in the **Operation mode** setting section

|                                                               |
| --------------------------------------------------------------|
| ![](/img/products/wiz510ssl/ssl_connection_guide/select_ssl_tcp_client_mode.png) |
| Figure: ***Select SSL TCP client mode***                      |

  - Input the **remote host IP (or URL)** and **remote port** in the **Remote host / port** section

|                                                                             |
| ----------------------------------------------------------------------------|
| ![](/img/products/wiz510ssl/ssl_connection_guide/input_the_remote_host_ip_and_remote_port.png) |
| Figure: ***Input the remote host IP and remote port***                      |

  - Click the **Apply Settings** button to save the settings

|                                                        			 |
| -------------------------------------------------------------------|
| ![](/img/products/wiz510ssl/ssl_connection_guide/click_the_apply_settings_button.png) |
| Figure: ***Click the Apply Settings button***                      |

|                                                        			 |
| -------------------------------------------------------------------|
| ![](/img/products/wiz510ssl/ssl_connection_guide/saved_settings.png) |
| Figure: ***Saved settings***

※ **Note**: If you need certificates to connect to SSL server, please refer to the [**'Upload Certificates'**](#upload-certificates) section below.

### Step 4: Done

WIZ510SSL is successfully connected to SSL server through OpenSSL!

|                                           |
| ------------------------------------------|
| ![](/img/products/wiz510ssl/ssl_connection_guide/status.png) |
| Figure: ***Status***                      |

|                                                              |
| -------------------------------------------------------------|
| ![](/img/products/wiz510ssl/ssl_connection_guide/connect_to_the_ssl_server.png) |
| Figure: ***Connect to the SSL server***                      |


#### Upload Certificates

You can upload certificates below in the '**Certificate manager**' tab of the'WIZnet S2E Configuration Tool'.
  - Root CA
  - Client Certificate
  - Private key

Upload and set up the certificates required by the SSL server you want to connect to.

After loading the certificate by clicking the '**Load file**' button, be sure to save it by clicking the '**Save to device**' button.

|                                                        |
| -------------------------------------------------------|
| ![](/img/products/wiz510ssl/ssl_connection_guide/upload_certificates.png) |
| Figure: ***Upload Certificates***                      |