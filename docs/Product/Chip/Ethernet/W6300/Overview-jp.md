---
id: overview-jp
title: Overview
date: 2025-06-11
keywords: [w6300,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: w6300チップは、WIZnetテクノロジーによる完全ハードワイヤードTCP/IPスタックを搭載したハードワイヤードインターネットコントローラです。
---




---

## W6300

![](/img/products/w6300/overview/w6300_chip.png)

W6300は、WIZnetの10/100 TOE Ethernet chipであり、高速なEthernet performanceとデュアルIPv4/v6ハードウェアスタックを組み合わせています。  
80Mbps以上のEthernet performanceをサポートするため、150MHzシステムクロックおよびQSPIインターフェース（4データラインを含む）をサポートしています。  
W6300は8ソケット用に合計64KBのSRAMをサポートし、それぞれのソケットにはデフォルトで4KBのTX/RXバッファが割り当てられています。


<img src="/img/products/w6300/overview/W6300_block_diagram_250228.png" width="500" />

---

## ピンマップ

<!-- ![W6300_pinmap](https://github.com/Wiznet/document_framework/assets/77008882/1651376c-6a33-48b4-a6c0-338f08095b17) -->
<img src="https://github.com/Wiznet/document_framework/assets/77008882/1651376c-6a33-48b4-a6c0-338f08095b17" width="500" />
--- 


## 特長
 - ハードワイヤードTCP/IPプロトコル対応：TCP、UDP、IPv6、IPv4、ICMPv6、ICMPv4、IGMP、MLDv1、ARP、PPPoE
 - IPv4/IPv6デュアルスタック対応
 - 64KBメモリで8つの独立したSOCKETを同時サポート
 - SOCKETレスコマンド対応：ARP、PING、ICMPv6（PING、ARP、DAD、NA、RS）コマンドによるIPv6自動構成＆ネットワークモニタリング
 - Ethernet Power Down Mode＆省電力のためのシステムクロックスイッチング対応
 - UDP経由のWake on LAN対応
 - シリアル＆パラレルホストインターフェース対応：高速QSPI（MODE 0/3）、2アドレス信号＆8ビットデータによるシステムバス
 - TX/RXバッファ用に内部32Kバイトメモリ（合計64Kバイトメモリ）
 - 10BaseT / 10BaseTe / 100BaseTXEthernet PHY integrated
 - オートネゴシエーション対応（全二重・半二重、10/100ベース）
 - オートネゴシエーションモード時のみAuto-MDIX対応
 - IPフラグメンテーション非対応
 - 3V動作で5V I/O信号耐性あり
 - ネットワークインジケータLED（全二重/半二重、リンク、10/100スピード、アクティブ）
 - 48ピンLQFP＆QFN鉛フリーパッケージ

---

# 対象アプリケーション
 - ホームネットワーク機器：セットトップボックス、PVR、デジタルメディアアダプタ
 - シリアル-イーサネット変換：アクセスコントロール、LEDディスプレイ、ワイヤレスAPリレー等
 - パラレル-イーサネット変換：POS / ミニプリンター、コピー機
 - USB-イーサネット変換：ストレージ機器、ネットワークプリンター
 - GPIO-イーサネット変換：ホームネットワークセンサー
 - セキュリティシステム：DVR、ネットワークカメラ、キオスク端末
 - 工場、ビル、ホームオートメーション
 - 医療モニタリング機器
 - 組み込みサーバ
 - IoT（モノのインターネット）機器
 - IoTクラウド機器

---

## iperf 3テスト結果

### RP2350使用時

このテストでは、**RP2350**と**W6300**を用いて**iperf 3**でネットワーク速度を測定しました。目的は、異なるモード（**SINGLE**、**DUAL**、**QUAD**）およびクロックスピードでの性能比較です。

<img src="/img/products/w6300/overview/iperf_test_1.png" width="600" />

#### テスト方法
- **クロックスピード：** 5MHz ～ 43MHz
- **通信モード：** QSPI SINGLE/DUAL/QUAD
- **測定ツール：** iperf 3

#### 主な結果
- **SINGLEモード：** 最大**36.32 Mbits/sec**
- **DUALモード：** 最大**62.53 Mbits/sec**
- **QUADモード：** 最大**91.2 Mbits/sec**

最高速度は**QUADモード**・**43MHz**時に**91.2 Mbits/sec**を達成しました。

## [LWIP] iperf 3テスト結果

### RP2350使用時

このテストでは、**RP2350**と**W6300**を用いて**iperf 3**でネットワーク速度を測定しました。目的は、異なるモード（**SINGLE**、**DUAL**、**QUAD**）およびクロックスピードでの**ソフトウェアベースlwIP**の性能比較です。

<img src="/img/products/w6300/overview/iperf_test_Lwip.png" width="600" />

#### テスト方法
- **TCP/IPスタック：** lwip（ソフトウェア）
- **クロックスピード：** 5MHz ～ 43MHz
- **通信モード：** QSPI SINGLE/DUAL/QUAD
- **測定ツール：** iperf 3

#### 主な結果
- **SINGLEモード：** 最大**18.1 Mbits/sec**
- **DUALモード：** 最大**22.5 Mbits/sec**
- **QUADモード：** 最大**24.4 Mbits/sec**

最高速度は**QUADモード**・**43MHz**時に**24.4 Mbits/sec**を達成しました。



<!-- ### with STM32 -->


---