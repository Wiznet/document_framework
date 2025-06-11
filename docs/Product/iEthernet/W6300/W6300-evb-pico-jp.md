---
id: w6300-evb-pico-jp
title: W6300-EVB-Pico
date: 2025-06-11
keywords: [raspberry pi pico, rp2040 ethernet, pico ethernet, W6300]
description: W6300-EVB-Picoは、PicoのEthernet機能のプロトタイピングとテストのために設計されています。
---

## 概要

W6300-EVB-Picoは、Raspberry Pi RP2040と完全ハードワイヤードTCP/IPcontroller	W6300を搭載したマイコン評価ボードです。基本的にはRaspberry Pi Picoボードと同様に動作しますが、W6300によるEthernet機能が搭載されています。

- Raspberry Pi Pico
- Ethernet（W6300 ハードワイヤードTCP/IPチップ）

![W6300-EVB-PICO](/img/products/w6300-evb-pico/w6300-evb-pico-docs.png)

<!-- ![Powered By Raspberry Pi logo](/img/pbp-logo-small.jpg) -->

## 改訂履歴

| 日付      | バージョン | 説明                     |
| --------- | ---------- | ------------------------ |
| 2025年5月 | 1.0        | 初期ボードリリース       |

## 特長

- 2MByteフラッシュ搭載RP2040マイクロcontroller	
- 最大133MHz動作のデュアルコアCortex M0+
- 264kByteマルチバンク高性能SRAM
- eXecute In Place (XIP)対応外部Quad-SPIフラッシュ
- 高性能フルクロスバーバスファブリック
- 30本の多機能汎用IO（うち4本はADCとして使用可能）
- 1.8-3.3V IO電圧（注：PicoのIO電圧は3.3V固定）
- 12ビット500kspsアナログ-デジタルコンバータ（ADC）
- 多様なデジタル周辺機能
- 2 × UART、2 × I2C、2 × SPI、16 × PWMチャンネル
- 1 × タイマー（4アラーム）、1 × リアルタイムカウンタ
- 2 × プログラマブルIO（PIO）ブロック、合計8ステートマシン
- 柔軟なユーザープログラム可能な高速IO
- SDカードやVGA等のインターフェースのエミュレーションが可能
- W6100搭載
- ハードワイヤードインターネットプロトコル対応：TCP、UDP、IPv6、IPv4、ICMPv6、ICMPv4、IGMP、MLDv1、ARP、PPPoE
- 32KBメモリで8つの独立したSOCKETを同時サポート
- 送受信バッファ用内蔵16Kbytesメモリ
- SPIインターフェース
- 電源・データ用Micro-USB Bポート（フラッシュの再書き込みにも対応）
- 40ピン 21x51 'DIP'スタイル、厚さ1mmのPCB、0.1インチスルーホールピン、エッジキャステレーション付き
- 3ピンARMシリアルワイヤデバッグ（SWD）ポート
- 10 / 100EthernetPHY内蔵
- オートネゴシエーション対応
- フル／ハーフデュプレックス
- 10 / 100ベース
- RJ45(RB1-125BAG1A)内蔵
- LDO (LM8805SF5-33V)内蔵

## ハードウェア仕様

### ピン配置 v1.0

<!-- ![w6300-evb-pico-pinout](/img/products/w6100-evb-pico2/w6100-evb-pico2-pinout.png) -->

PIN-OUT画像は近日公開予定

W6300-EVB-Picoのピン配置は、上記画像の通りRP2040のGPIOに直接接続されています。Raspberry Pi Picoボードと同じピン配置ですが、GPIO15、GPIO16、GPIO17、GPIO18、GPIO19、GPIO20、GPIO21、GPIO22は基板内のW6300に接続されています。これらのピンは、W6300とQSPI通信を行いEthernet機能を利用するためのものです。Ethernet機能を使用する場合、これらのピンは他の用途には使用できません。

W6300-EVB-Pico内で使用されているRP2040のGPIOは以下の通りです。

| I/O  | ピン名   | 説明                                               |
| :--: | ------- | -------------------------------------------------- |
|  O   | GPIO15  | W6300のINTnに接続                                  |
|  O   | GPIO16  | W6300のCSnに接続                                   |
|  O   | GPIO17  | W6300のSCLKに接続                                  |
| I/O  | GPIO18  | W6300のIO0（MOSI）（QSPI）に接続                   |
| I/O  | GPIO19  | W6300のIO1（MISO）（QSPI）に接続                   |
| I/O  | GPIO20  | W6300のIO2（QSPI）に接続                           |
| I/O  | GPIO21  | W6300のIO3（QSPI）に接続                           |
|  O   | GPIO22  | W6300のRSTnに接続                                  |
|  I   | GPIO24  | VBUSセンス - VBUSが存在する場合High、他はLow       |
|  O   | GPIO25  | ユーザーLEDに接続                                  |
|  I   | GPIO29  | ADCモード（ADC3）でVSYS/3の測定に使用              |

### QSPIモードIOライン

各QSPIモードのIOラインは以下の通りです。

| モード  | I/O  | ピン名   | 説明                                         |
| :-----: | :--: | ------- | -------------------------------------------- |
| シングル |  O   | GPIO18  | W6300のIO0（MOSI）に接続                     |
| シングル |  I   | GPIO19  | W6300のIO1（MISO）に接続                     |

| モード  | I/O  | ピン名   | 説明                                         |
| :-----: | :--: | ------- | -------------------------------------------- |
| デュアル | I/O  | GPIO18  | W6300のIO0（デュアルモード）に接続           |
| デュアル | I/O  | GPIO19  | W6300のIO1（デュアルモード）に接続           |

| モード  | I/O  | ピン名   | 説明                                         |
| :-----: | :--: | ------- | -------------------------------------------- |
| クアッド | I/O  | GPIO18  | W6300のIO0（クアッドモード）に接続           |
| クアッド | I/O  | GPIO19  | W6300のIO1（クアッドモード）に接続           |
| クアッド | I/O  | GPIO20  | W6300のIO2（クアッドモード）に接続           |
| クアッド | I/O  | GPIO21  | W6300のIO3（クアッドモード）に接続           |

GPIOおよびグランドピン以外に、メインの40ピンインターフェースには他に7つのピンがあります。
| ピン番号 | ピン名      | 説明                                                                                  |
| ------- | --------- | ------------------------------------------------------------------------------------- |
| PIN40   | VBUS      | Micro-USB入力電圧。micro-USBポートのピン1に接続。標準で5V。                             |
| PIN39   | VSYS      | メインシステム入力電圧。許容範囲は4.3V～5.5Vで、オンボードLDOにより3.3Vを生成するために使用。    |
| PIN37   | 3V3_EN    | オンボードLDOのイネーブルピンに接続。このピンをLowに短絡すると3.3Vが無効化され（RP2040およびW6300も電源オフ）、 |
| PIN36   | 3V3       | RP2040およびW6300へのメイン3.3V電源。オンボードLDOで生成。                              |
| PIN35   | ADC_VREF  | ADC電源（およびリファレンス）電圧。W6300-EVB-Pico2では3.3V電源をフィルタリングして生成。            |
| PIN33   | AGND      | GPIO26-29用のグランドリファレンス。                                                    |
| PIN30   | RUN       | RP2040イネーブルピン。RP2040をリセットするにはこのピンをLowに短絡。                      |

### 動作条件

| 項目                        | 説明                           |
| -------------------------- | ------------------------------ |
| 動作温度 最大               | 85℃（自己発熱を含む）           |
| 動作温度 最小               | -20℃                          |
| VBUS                       | DC 5V（±10%）                  |
| VSYS 最小                   | DC 4.3V                       |
| VSYS 最大                   | DC 5.5V                       |

推奨される最大動作周囲温度は70℃です。

## 技術リファレンス

### RP2040 データシート

- [ダウンロード](https://datasheets.raspberrypi.org/rp2040/rp2040-datasheet.pdf)

### W6300 データシート

- [ダウンロード](Overview-jp.md)

### 回路図

![W6300-EVB-RP2040](/img/products/w6300-evb-pico/w6300_evb_pico_schematic.png)

### 回路図・部品表・ガーバーファイル

- [Githubへ](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W6300/W6300-EVB-Pico_V100)

### 3Dファイル

-   ![](/img/products/w5500/w5500_evb/icons/download.png)
<a href="/img/products/3d-step-files/W6300-EVB-Pico.step" target="_blank"> ダウンロード</a>

### 寸法 v1.0（単位：mm）

![w6300-evb-pico-dimension](/img/products/w6300-evb-pico/dimension-w6300-evb-pico.png)

### ファームウェア例

ファームウェア例は下記リンクを参照してください。

C/C++

- [Ethernet例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)
<!-- - [FreeRTOS例](https://github.com/Wiznet/RP2040-v6-HAT-FREERTOS-C) -->

### 認証

#### CE

<!-- - <a href="/img/products/w6100-evb-pico2/Certificate-CE-W6100-EVB-Pico2.pdf" target="_blank">CE証明書</a>
- <a href="/img/products/w6100-evb-pico2/Test-Report-CE-W6100-EVB-Pico2.pdf" target="_blank">CEテストレポート</a> -->

<!-- | 日付    | 説明      |
| ------- | --------- |
| OCT2023 | \-        | -->

#### FCC

<!-- - <a href="/img/products/w6100-evb-pico2/Certificate-FCC-W6100-EVB-Pico2.pdf" target="_blank">FCC証明書</a>
- <a href="/img/products/w6100-evb-pico2/Test-Report-FCC-W6100-EVB-Pico2.pdf" target="_blank">FCCテストレポート</a> -->

<!-- | 日付    | 説明      |
| ------- | --------- |
| OCT2023 | \-        | -->

## 購入方法

<!-- [![WIZnetUS Online Shop, USA](/img/products/w5100s-evb-pico/icons/dollar.png)](https://eshop.wiznet.io/shop/module/w6100-evb-pico2/)
[![WIZnetKorea Online Shop, Korea](/img/products/w5100s-evb-pico/icons/won.png)](https://wiznetshop.io/product/detail.html?product_no=1097&cate_no=55&display_group=1) -->