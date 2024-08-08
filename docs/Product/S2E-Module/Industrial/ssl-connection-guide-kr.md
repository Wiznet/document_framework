---
id: ssl-connection-guide-kr
title: SSL Connection Guide-[KR]
date: 2024-08-08
---



-----



## W232N SSL 연결 개요

**W232N**는 **SSL TCP client** 모드를 지원하니다. 



-----



## 필요한 하드웨어 및 소프트웨어



### 하드웨어

  - W232N
  - 5~36V 전원 어댑터
  - 데이터 케이블 (Ethernet / Serial)


### 소프트웨어

  - WIZnet S2E Configuration Tool
	  - [최신 버전 다운로드](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.5.0)
    - [GitHub Repository](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)
  - OpenSSL:
	 - [다운로드 링크](https://slproweb.com/products/Win32OpenSSL.html)



-----



## OpenSSL을 통해 SSL 서버에 연결하는 방법



### 1단계: Config-tool 실행

설치된 **'Config-tool'** 실행

### 2단계: OpenSSL 설정

SSL 서버로 사용할 OpenSSL을 설정합니다.

```bash
genrsa -des3 -out [key_name].key 2048
req -new -key [key_name].key -out [csr_name].csr
x509 -req -days [days] -in [csr_name].csr -signkey [key_name].key -out [crt_name].crt

Ex>
genrsa -des3 -out server.key 2048
req -new -key server.key -out server.csr
x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```



### 3단계: OpenSSL를 사용해 SSL서버 실행

OpenSSL을 SSL 서버로 사용하도록 설정한 경우 SSL 서버를 실행합니다.

```bash
s_server -accept [port] -cert [crt_name].crt -key [key_name].key

Ex>
s_server -accept 443 -cert server.crt -key server.key
```



### 4단계: Configuration Tool을 사용해 W232N을 SSL Server 연결할 수 있도록 설정

1.   **Operation mode** 섹션에서 **SSL TCP client** 모드를 선택

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/select_ssl_tcp_client_mode.png) |
| Figure: **Select SSL TCP client mode**                                                        |

2. **Remote host / port** 섹션의 **remote host IP (or URL)** 와 **remote port** 를 설정 

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/setup_remote_host_ip_and_remote_port.png) |
| Figure: **Setup remote host IP and remote port**                                                        |

3. **Apply Settings** 버튼을 눌러 세팅을 저장합니다.

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/click_apply_settings_button.png) |
| Figure: **Click Apply Settings button**                                                        |

|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/saved_settings.png) |
| Figure: **Saved settings**                                                        |


> **Note**: SSL 서버에 연결하기 위해 인증서가 필요한 경우 아래의 [SSL 서버에 연결하기 위해 인증서가 필요한 경우 어떻게 하나요?](#SSL-서버에-연결하기-위해-인증서가-필요한-경우)를 참고해주세요



### 5단계: 완료

W232N이 SSL 서버에 성공적으로 연결되었습니다!



-----



## SSL 서버에 연결하기 위해 인증서가 필요한 경우

Config-tool의 '**Certificate manager**' 탭에서 인증서를 업로드할 수 있습니다.
  - Root CA
  - Client Certificate
  - Private key

연결하려는 SSL 서버에 필요한 인증서를 업로드하고 설정합니다.

'**Load file**' 버튼을 클릭하여 인증서를 로드한 후, '**Save to device**' 버튼을 클릭하여 저장해야 합니다.

|                                                                                        |
| :------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/upload_certificates.png) |
| Figure: **Upload certificates**                                                        |



-----
