---
id: w6300-evb-pico2-jp
title: W6300-EVB-Pico2
date: 2025-06-11
keywords: [raspberry pi pico2, rp2350 ethernet, pico ethernet, W6300]
description: W6300-EVB-Pico2は、PicoでのEthernet機能のプロトタイピングおよびテストのために作られました。
---

## 概要

W6300-EVB-Pico2は、Raspberry Pi RP2350および完全ハードワイヤードTCP/IPコントローラW6300をベースとしたマイコン評価ボードです。基本的にはRaspberry Pi Picoボードと同様に動作しますが、W6300によるEthernet機能が追加されています。

- Raspberry Pi Pico2クローン
- Ethernet（W6300 ハードワイヤードTCP/IPチップ）

![W6300-EVB-PICO2](/img/products/w6300-evb-pico2/w6300-evb-pico2-docs.png)

<!-- ![Powered By Raspberry Pi logo](/img/pbp-logo-small.jpg) -->

## リビジョン履歴

| 日付 | バージョン | 説明 |
| ---- | ------- | ----------- |
| 2025年5月 | 1.0 | 初回ボードリリース |

## 特徴

- **RP2350マイクロコントローラ（16Mbitフラッシュ内蔵）**
- 最大150MHzの対称デュアルArm Cortex-M33コア
- 520kByteマルチバンク高性能SRAM
- eXecute In Place（XIP）機能付き外部Quad-SPIフラッシュ
- 強化された性能のfull-crossbar bus fabric
- 最大48多機能汎用IO（RP2350-Bでは8本がADCとして利用可能）
- 1.8-5.0V IO電圧

- **セキュリティ機能**
- **ワンタイムプログラマブル（OTP）メモリ：** ブート構成とセキュアキーの保存に使用
- **セキュアブート：** OTPによるキー検証を利用し、認証されたソフトウェアのみがデバイス上で実行可能
- **Arm TrustZone Technology：** セキュアおよび非セキュアソフトウェア間のハードウェア分離を提供し、重要なアプリケーションのセキュリティを強化

- **アナログおよびデジタル周辺機能**
- 12ビット 500ksps アナログ-デジタルコンバータ（ADC）
- 2 × UART、2 × I2C、2 × SPI、16 × PWMチャンネル
- 1 × タイマー（4アラーム付）、1 × リアルタイムカウンタ
- 3 × プログラマブルIO（PIO）ブロック、合計12ステートマシン
- 柔軟でユーザープログラム可能な高速IO
- SDカードやVGA等のインターフェースをエミュレート可能

- **W6300 Ethernetコントローラ**
- ハードワイヤードTCP/IPプロトコル対応：TCP、UDP、IPv6、IPv4、ICMPv6、ICMPv4、IGMP、MLDv1、ARP、PPPoE
- IPv4/IPv6Dual Stack対応
- 64KBメモリで8つの独立SOCKETを同時サポート
- SOCKETレスコマンド：ARP、PING、ICMPv6（PING、ARP、DAD、NA、RS）コマンドによるIPv6自動設定＆ネットワーク監視
- 省電力のためのEthernetパワーダウンモード＆システムクロックスイッチング
- UDPによるWake on LAN対応
- シリアル＆パラレルホストインターフェース：高速QSPI（MODE 0/3）、2アドレス信号＆8bitデータのシステムバス
- TX/RXバッファ用内部32Kbytesメモリ（合計64Kbytesメモリ）
- 10BaseT / 10BaseTe / 100BaseTX Ethernet PHY integrated
- オートネゴシエーション対応（全二重/半二重、10/100ベース）
- オートネゴシエーションモード時のみAuto-MDIX対応
- IPフラグメンテーション非対応
- 3V動作、5V I/O信号耐性
- ネットワークインジケータLED（全二重/半二重、リンク、10/100スピード、アクティブ）
- 48ピンLQFP＆QFN鉛フリーパッケージ

- **接続性**
- 電源・データ用CタイプUSBポート（フラッシュ再書き込みにも対応）
- 40ピン 21x51 'DIP'スタイル、1mm厚PCB、0.1"スルーホールピン、エッジカステレーション付き
- 3ピンARMシリアルワイヤデバッグ（SWD）ポート

- **ネットワーキング**
- 10 / 100 Ethernet PHY integrated
- オートネゴシエーション対応
- フル/ハーフデュプレックス（10 / 100ベース）
- RJ45（RB1-125BAG1A）内蔵

- **電源**
- Switch-mode DC-DC converter内蔵（LDOを置き換え、電力効率向上）

## ハードウェア仕様

### ピンアウト v1.0

<!-- ![w6300-evb-pico-pinout](/img/products/w6100-evb-pico2/w6100-evb-pico2-pinout.png) -->

ピンアウト画像近日公開

W6300-EVB-Pico2のピンアウトは、上記の図の通りRP2350のGPIOに直接接続されています。Raspberry Pi Pico2ボードと同じピン配置ですが、GPIO15、GPIO16、GPIO17、GPIO18、GPIO19、GPIO20、GPIO21、GPIO22は基板内でW6300に接続されています。これらのピンは、Ethernet機能を使用するためにW6300とのQSPI通信を可能にします。Ethernet機能を使用する場合、これらのピンは他の用途には使用できません。

W6300-EVB-Pico内で使用されているRP2350のGPIOは以下の通りです。

| I/O  | ピン名   | 説明                                         |
| :--: | -------- | ---------------------------------------------- |
|  O   | GPIO15   | W6300のINTnに接続                             |
|  O   | GPIO16   | W6300のCSnに接続                              |
|  O   | GPIO17   | W6300のSCLKに接続                             |
| I/O  | GPIO18   | W6300のIO0（MOSI）（QSPI）に接続              |
| I/O  | GPIO19   | W6300のIO1（MISO）（QSPI）に接続              |
| I/O  | GPIO20   | W6300のIO2（QSPI）に接続                      |
| I/O  | GPIO21   | W6300のIO3（QSPI）に接続                      |
|  O   | GPIO22   | W6300のRSTnに接続                             |
|  I   | GPIO24   | VBUSセンシング - VBUSが存在すればHigh、なければLow |
|  O   | GPIO25   | ユーザーLEDに接続                             |
|  I   | GPIO29   | ADCモード（ADC3）でVSYS/3の計測に使用         |

### QSPIモードIOライン

各QSPIモードのIOラインは以下の通りです。

| モード  | I/O  | ピン名   | 説明                                         |
| :----: | :--: | -------- | ---------------------------------------------- |
| シングル |  O   | GPIO18   | W6300のIO0（MOSI）に接続                      |
| シングル |  I   | GPIO19   | W6300のIO1（MISO）に接続                      |
| モード | I/O  | ピン名   | 説明                                         |
| :----: | :--: | ------- | ------------------------------------------ |
| Dual   | I/O  | GPIO18  | W6300のIO0に接続（デュアルモード）          |
| Dual   | I/O  | GPIO19  | W6300のIO1に接続（デュアルモード）          |

| モード | I/O  | ピン名   | 説明                                         |
| :----: | :--: | ------- | ------------------------------------------ |
| Quad   | I/O  | GPIO18  | W6300のIO0に接続（クアッドモード）           |
| Quad   | I/O  | GPIO19  | W6300のIO1に接続（クアッドモード）           |
| Quad   | I/O  | GPIO20  | W6300のIO2に接続（クアッドモード）           |
| Quad   | I/O  | GPIO21  | W6300のIO3に接続（クアッドモード）           |

GPIOおよびGNDピン以外に、メインの40ピンインターフェースには他に7つのピンがあります：

| ピン番号 | ピン名    | 説明                                                                  |
| ------- | -------- | --------------------------------------------------------------------- |
| PIN40   | VBUS     | Micro-USB入力電圧。micro-USBポートのピン1に接続。標準5V。                |
| PIN39   | VSYS     | メインシステム入力電圧。許容範囲は4.3V～5.5V。オンボードLDOで3.3Vを生成。   |
| PIN37   | 3V3_EN   | オンボードLDOのイネーブルピンに接続。3.3Vを無効化（RP2350とW6300も無電源）するには、このピンをLowに短絡。|
| PIN36   | 3V3      | RP2350およびW6300へのメイン3.3V電源。オンボードLDOで生成。                |
| PIN35   | ADC_VREF | ADC電源（およびリファレンス）電圧。W6300-EVB-Pico2で3.3V電源をフィルタリングして生成。|
| PIN33   | AGND     | GPIO26-29用のグランドリファレンス。                                   |
| PIN30   | RUN      | RP2350のイネーブルピン。RP2350をリセットするには、このピンをLowに短絡。     |

### 動作条件

| 項目                        | 説明                              |
| --------------------------- | --------------------------------- |
| 動作温度 最大                | 85℃（自己発熱を含む）             |
| 動作温度 最小                | -20℃                             |
| VBUS                        | DC 5V（±10%）                     |
| VSYS 最小                    | DC 4.3V                           |
| VSYS 最大                    | DC 5.5V                           |

動作時の推奨最大周囲温度は70℃です。

## 技術リファレンス

### RP2350 データシート

<!-- - [ダウンロード](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf) -->

### W6300 データシート

- [ダウンロード](Overview-jp.md)

### 回路図 v1.0

![W6300-EVB-PICO2](/img/products/w6300-evb-pico2/w6300_evb_pico2_schematic.png)

### 回路図 & 部品表 & ガーバーファイル

- [Githubへ](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W6300/W6300-EVB-Pico2_V100)

### 3Dファイル

-   ![](/img/products/w5500/w5500_evb/icons/download.png)
<a href="/img/products/3d-step-files/W6100-EVB-Pico2_V100.step" target="_blank"> ダウンロード</a>

### 外形寸法 v1.0（単位：mm）

![w6300-evb-pico2-dimension](/img/products/w6300-evb-pico2/dimension-w6300-evb-pico2.png) -->

### ファームウェア例

ファームウェア例については以下のリンクを参照してください。

C/C++

- [Ethernet サンプル](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)
<!-- - [FreeRTOS サンプル](https://github.com/Wiznet/RP2040-v6-HAT-FREERTOS-C) -->

### 認証

#### CE

<!-- - <a href="/img/products/w6100-evb-pico2/Certificate-CE-W6100-EVB-Pico2.pdf" target="_blank">CE証明書</a>
- <a href="/img/products/w6100-evb-pico2/Test-Report-CE-W6100-EVB-Pico2.pdf" target="_blank">CE試験報告書</a> -->

<!-- | 日付    | 説明       |
| ------- | ---------- |
| 2023年10月 | \-         | -->

#### FCC

<!-- - <a href="/img/products/w6100-evb-pico2/Certificate-FCC-W6100-EVB-Pico2.pdf" target="_blank">FCC証明書</a>
- <a href="/img/products/w6100-evb-pico2/Test-Report-FCC-W6100-EVB-Pico2.pdf" target="_blank">FCC試験報告書</a> -->

<!-- | 日付    | 説明       |
| ------- | ---------- |
| 2023年10月 | \-         | -->

## 購入方法

<!-- [![WIZnetUS Online Shop, USA](/img/products/w5100s-evb-pico/icons/dollar.png)](https://eshop.wiznet.io/shop/module/w6100-evb-pico2/)
[![WIZnetKorea Online Shop, Korea](/img/products/w5100s-evb-pico/icons/won.png)](https://wiznetshop.io/product/detail.html?product_no=1097&cate_no=55&display_group=1) -->