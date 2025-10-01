---
id: ssl-connection-guide-jp  
title: SSL Connection Guide  
date: 2025-05-27  
---

-----

## W55RP20-S2E SSL接続概要

**W55RP20-S2E**は、**SSL TCPクライアント**モードをサポートしています。

-----


## 必要なハードウェアとソフトウェア


### ハードウェア
  - W55RP20-S2E  
  - ケーブル（イーサネット / シリアル）  



### ソフトウェア
  - WIZnet S2E Configuration Tool  
    - [最新バージョンをダウンロード](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.5.0)  
    - [旧バージョンをダウンロード](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)  
    - [GitHubリポジトリ](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)  
  - OpenSSL:  
    - [ダウンロードリンク](https://slproweb.com/products/Win32OpenSSL.html)  


-----


## OpenSSLを使用してSSLサーバーに接続する方法


### ステップ1: Config-toolを実行
インストールした**「Config-tool」**を実行します。


### ステップ2: OpenSSLのセットアップ
OpenSSLをSSLサーバーとして使用するように設定します。

```bash
genrsa -des3 -out [key_name].key 2048
req -new -key [key_name].key -out [csr_name].csr
x509 -req -days [days] -in [csr_name].csr -signkey [key_name].key -out [crt_name].crt

例>
genrsa -des3 -out server.key 2048
req -new -key server.key -out server.csr
x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

### ステップ3: OpenSSLを使用してSSLサーバーを実行
OpenSSLをSSLサーバーとして設定した場合、SSLサーバーを実行します。

```bash
s_server -accept [port] -cert [crt_name].crt -key [key_name].key

例>
s_server -accept 443 -cert server.crt -key server.key
```

### ステップ4: WIZnet S2E Configuration Toolを使用してW55RP20-S2EをSSLサーバー接続用に設定

1. **Operation mode**設定セクションで**SSL TCPクライアント**モードを選択します。

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/select_ssl_tcp_client_mode.png) |
| 図: **SSL TCPクライアントモードを選択**                                                        |

2. **Remote host / port**セクションで、**リモートホストIP（またはURL）**と**リモートポート**を設定します。

|                                                                                                 |
| :---------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/setup_remote_host_ip_and_remote_port.png) |
| 図: **リモートホストIPとリモートポートを設定**                                                          |

3. **Apply Settings**ボタンをクリックして設定を保存します。

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/click_apply_settings_button.png) |
| 図: **Apply Settingsボタンをクリック**                                                        |

|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/saved_settings.png) |
| 図: **保存された設定**                                                            |

> **注意**: SSLサーバーに接続するために証明書が必要な場合は、以下の[**「SSLサーバーに接続するために証明書が必要な場合**](#sslサーバーに接続するために証明書が必要な場合)セクションを参照してください。

### ステップ5: 完了
W55RP20-S2EはSSLサーバーに正常に接続されました！

-----

## 付録

### SSLサーバーに接続するために証明書が必要な場合
**WIZnet S2E Configuration Tool**の「**Certificate manager**」タブで以下の証明書をアップロードできます。
  - ルートCA (Root CA)  
  - クライアント証明書 (Client Certificate)  
  - 秘密鍵 (Private Key)  

接続したいSSLサーバーで必要な証明書をアップロードして設定します。

「**Load file**」ボタンをクリックして証明書を読み込んだ後、必ず「**Save to device**」ボタンをクリックして保存してください。

|                                                                                        |
| :------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/ssl_connection_guide/upload_certificates.png) |
| 図: **証明書のアップロード**                                                          |

-----