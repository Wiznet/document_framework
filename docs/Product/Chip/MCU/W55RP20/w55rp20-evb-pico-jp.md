---
id: w55rp20-evb-pico-jp
title: W55RP20-EVB-PICO  
date: 2025-05-27 
keywords: [Raspberry Pi Pico, RP2040, Pico Ethernet, W5500]  
description: W55RP20-EVB-Picoは、Pico上でEthernet機能のプロトタイピングとテストを行うために設計されています。  
---

## 概要

W55RP20-EVB-Picoは、W5500（有線TCP/IPコントローラー）とRP2040を統合したチップ「W55RP20」の評価ボードです。  
そのため、Raspberry Pi Picoの機能とW5500の機能の両方を利用できます。

- Raspberry Pi Picoクローン  
- Ethernet（W55RP20 ハードワイヤードTCP/IPチップ）  
- [AWS IoT Core認定](https://partners.amazonaws.com/devices/a3Gaq00000000cjEAA/W55RP20-EVB-Pico)  

![W55RP20-EVB-Pico](/img/products/w55rp20-evb-pico/w55rp20-evb-pico-docs.png)  

![Powered By Raspberry Pi logo](/img/pbp-logo-small.jpg)  

## 特徴

- W55RP20マイクロコントローラー  
  - 内蔵2MByteフラッシュ  
  - デュアルコアCortex M0+（最大133MHz）  
  - 264kByteのマルチバンク高性能SRAM  
  - 外部Quad-SPIフラッシュ（eXecute In Place (XIP)対応）  
  - 高性能フルクロスバスファブリック  
  - 22の多機能GPIO（うち4つはADCとして使用可能）  
    - 1.8-3.3V IO電圧（注：PicoのIO電圧は3.3V固定）  
  - 12ビット500kspsのアナログ-デジタルコンバーター（ADC）  
  - 多様なデジタルペリフェラル  
    - 2 × UART、2 × I2C、2 × SPI、16 × PWMチャネル  
    - 1 × タイマー（4つのアラーム付き）、1 × リアルタイムカウンター  
  - 2 × プログラマブルIO（PIO）ブロック、合計8ステートマシン  
  - 柔軟でユーザーがプログラム可能な高速IO  
  - SDカードやVGAなどのインターフェースをエミュレート可能  
  - ハードワイヤードインターネットプロトコル対応：TCP、UDP、ICMP、IPv4、ARP、IGMP、PPPoE  
  - 最大8つの独立したハードウェアソケットを同時にサポート  
  - TX/RXバッファ用の内蔵32Kbytesメモリ  
  - 高速シリアルペリフェラルインターフェース（SPI MODE 0、3）対応  
- 電源およびデータ用USB-Cポート（フラッシュの再プログラミングも可能）  
- 3ピンARMシリアルワイヤデバッグ（SWD）ポート  
- 10 / 100 Ethernet PHY内蔵  
- オートネゴシエーション対応  
  - フル/ハーフデュプレックス  
  - 10 / 100 Base対応  
- RJ45（POE）内蔵  
- 内蔵DCDC（PWM/PFM）  
- POEを可能にする追加モジュールを搭載  

## ハードウェア仕様

### ピンアウト

![W55RP20-EVB-PICO](/img/products/w55rp20-evb-pico/w55rp20-evb-pico-pinout.png)  

W55RP20-EVB-Picoのピンアウトは、上記の図に示されているようにRP2040のGPIOに直接接続されています。Raspberry Pi Picoボードと同じピンアウトを持っています。ただし、GPIO17、GPIO20、GPIO21、GPIO22、GPIO23、GPIO24、およびGPIO25はボード内部で接続されているため利用できません。

W55RP20-EVB-Pico内部で使用されるW55RP20のGPIOは以下の通りです。

| I/O  | ピン名   | 説明                                                |
| :--: | -------- | ---------------------------------------------------- |
|  O   | GPIO16   | DCDCモード選択ピン                                   |
|  I   | GPIO18   | VBUSセンス - VBUSが存在する場合はハイ、それ以外はロー |
|  O   | GPIO19   | ユーザーLEDに接続                                    |
|  I   | GPIO29   | ADCモード（ADC3）で使用され、VSYS/3を測定            |

GPIOとグランドピン以外に、メイン40ピンインターフェースには以下の7つのピンがあります。

| ピン番号 | ピン名   | 説明                                                              |
| ------- | -------- | ----------------------------------------------------------------- |
| PIN40   | VBUS     | Micro-USB入力電圧。Micro-USBポートのピン1に接続。公称5V。          |
| PIN39   | VSYS     | メインシステム入力電圧。許容範囲は4.3V〜5.5Vで、オンボードLDOが3.3Vを生成。 |
| PIN37   | 3V3_EN   | オンボードLDOの有効化ピンに接続。3.3Vを無効化するには、このピンをローに短絡。 |
| PIN36   | 3V3      | RP2040およびW5500用のメイン3.3V電源。オンボードLDOによって生成。   |
| PIN35   | ADC_VREF | ADC電源供給（および基準）電圧。W5500-EVB-Picoでは3.3V電源をフィルタリングして生成。 |
| PIN33   | AGND     | GPIO26-29のグランドリファレンス。                                   |
| PIN30   | RUN      | RP2040有効化ピン。RP2040をリセットするには、このピンをローに短絡。 |

### 動作条件

| 項目                      | 説明                        |
| ------------------------- | -------------------------- |
| 動作温度 MAX             | 85℃（自己発熱を含む）      |
| 動作温度 MIN             | -45℃                       |
| VBUS                     | DC 5V（±10%）              |
| VSYS Min                 | DC 4.3V                    |
| VSYS Max                 | DC 5.5V                    |

推奨動作周囲温度の最大値は70℃です。

## 技術リファレンス

### RP2040データシート

- <a href="https://datasheets.raspberrypi.org/rp2040/rp2040-datasheet.pdf" target="_blank">ダウンロード</a>  

### W5500データシート

- <a href="https://docs.wiznet.io/Product/Chip/Ethernet/W5500/datasheet" target="_blank">ダウンロード</a>  

### W55RP20データシート

- <a href="https://docs.wiznet.io/Product/Chip/MCU/W55RP20/documents_md#w55rp20-datasheet" target="_blank">ダウンロード</a>  

### 回路図

![schematics-w55rp20-evb-pico](/img/products/w55rp20-evb-pico/schematics-w55rp20-evb-pico.png)  

### 回路図＆部品リスト＆Gerberファイル

- [Githubへ移動](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/09_ioNIC)  

### 寸法（単位：mm）

![W5500-EVB-RP2040](/img/products/w55rp20-evb-pico/w55rp20-evb-pico-dimension.png)  

### 認証
- <a href="/img/products/w55rp20-evb-pico/Certificate-CE-W55RP20-EVB-Pico.pdf" target="_blank">CE 適合宣言 (DoC)</a>  
- <a href="/img/products/w55rp20-evb-pico/Test-Report-CE-W55RP20-EVB-Pico.pdf" target="_blank">CE テストレポート</a>  
- <a href="/img/products/w55rp20-evb-pico/Certificate-FCC-W55RP20-EVB-Pico.pdf" target="_blank">FCC 適合宣言 (DoC)</a>  
- <a href="/img/products/w55rp20-evb-pico/Test-Report-FCC-W55RP20-EVB-Pico.pdf" target="_blank">FCC テストレポート</a>  

### AWS 認証

W55RP20-EVB-Pico は RP2040 ベースのデバイスで、AWS IoT Core 認証を取得しています。

![](/img/products/w55rp20/aws_qualified_device_badge.png)

- [AWS パートナーデバイスカタログ](https://partners.amazonaws.com/devices/a3Gaq00000000cjEAA/W55RP20-EVB-Pico)  
- <a href="https://github.com/WIZnet-ioNIC/WIZnet-PICO-AWS-C?tab=readme-ov-file#getting-started-guide-for-aws-iot-core" target="_blank">AWS IoT Core のスタートガイド</a>  

### ファームウェア例  
以下のリンクからファームウェア例をご確認ください。

- C/C++  
  - [Ethernet の例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)  
  - [AWS の例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AWS-C)  
  - [Azure の例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AZURE-C)  
  - [LwIP の例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-LWIP-C)  
  - [FreeRTOS の例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-FREERTOS-C)  
- MicroPython の例  
  - [Ethernet の例](https://github.com/WIZnet-ioNIC/WIZnet-ioNIC-micropython)  
- CircuitPython の例  
  - [CircuitPython の例](https://github.com/WIZnet-ioNIC/WIZnet-ioNIC-Circuitpython)  
- Arduino の例  
  - [Arduino の例](https://github.com/earlephilhower/arduino-pico)  

### アプリケーションノート  

#### C/C++  
- Ethernet の例  
  - <a href="/img/application_notes/PICO-C/DHCP_DNS_EXAMPLE_AN_V100.pdf" target="_blank">DHCP_DNS_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/FTP_Client_EXAMPLE_AN_V100.pdf" target="_blank">FTP_Client_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/FTP_Server_EXAMPLE_AN_V100.pdf" target="_blank">FTP_Server_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/HTTP_Server_EXAMPLE_AN_V100.pdf" target="_blank">HTTP_Server_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/LOOPBACK_EXAMPLE_AN_V100.pdf" target="_blank">LOOPBACK_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/MQTT_Publish_EXAMPLE_AN_V100.pdf" target="_blank">MQTT_Publish_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/MQTT_Publish_Subscribe_EXAMPLE_AN_V100.pdf" target="_blank">MQTT_Publish_Subscribe_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/MQTT_Subscribe_EXAMPLE_AN_V100.pdf" target="_blank">MQTT_Subscribe_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/NETBIOS_EXAMPLE_AN_V100.pdf" target="_blank">NETBIOS_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/SNTP_EXAMPLE_AN_V100.pdf" target="_blank">SNTP_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/TCP_Client_over_SSL_EXAMPLE_AN_V100.pdf" target="_blank">TCP_Client_over_SSL_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/TFTP_Client_EXAMPLE_AN_V100.pdf" target="_blank">TFTP_Client_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-C/UDP_multicast_receiver_EXAMPLE_AN_V100.pdf" target="_blank">UDP_multicast_receiver_EXAMPLE_AN_V100 - 英語</a>  
- AWS の例  
  - <a href="/img/application_notes/PICO-AWS-C/AWS_IoT_HTTP_EXAMPLE_AN_V100.pdf" target="_blank">AWS_IoT_HTTP_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-AWS-C/AWS_IoT_MQTT_EXAMPLE_AN_V100.pdf" target="_blank">AWS_IoT_MQTT_EXAMPLE_AN_V100 - 英語</a>  
- Azure の例  
  - <a href="/img/application_notes/PICO-AZURE-C/AZURE_telemetry_EXAMPLE_AN_V100.pdf" target="_blank">AZURE_telemetry_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-AZURE-C/AZURE_2CD_EXAMPLE_AN_V100.pdf" target="_blank">AZURE_2CD_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-AZURE-C/AZURE_client_X509_EXAMPLE_AN_V100.pdf" target="_blank">AZURE_client_X509_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-AZURE-C/AZURE_prov_X509_EXAMPLE_AN_V100.pdf" target="_blank">AZURE_prov_X509_EXAMPLE_AN_V100 - 英語</a>  
- LwIP の例  
  - <a href="/img/application_notes/PICO-LWIP-C/lwIP_DHCP_DNS_EXAMPLE_AN_V100.pdf" target="_blank">lwIP_DHCP_DNS_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-LWIP-C/lwIP_iPerf_EXAMPLE_AN_V100.pdf" target="_blank">lwIP_iPerf_EXAMPLE_AN_V100 - 英語</a>  
  - <a href="/img/application_notes/PICO-LWIP-C/lwIP_LOOPBACK_EXAMPLE_AN_V100.pdf" target="_blank">lwIP_LOOPBACK_EXAMPLE_AN_V100 - 英語</a>  

## 購入方法  

[![WIZnetUS オンラインショップ (米国)](/img/products/w5500-evb-pico/icons/dollar.png)](https://eshop.wiznet.io/shop/module/w55rp20-evb-pico/) [![WIZnetKorea オンラインショップ (韓国)](/img/products/w5500-evb-pico/icons/won.png)](https://wiznetshop.io/product/detail.html?product_no=1094&cate_no=55&display_group=1)  