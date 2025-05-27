---
id: overview-jp  
title: 概要  
date: 2025-05-27   
---

# W55RP20

<p align="center">
  <img src="/img/products/w55rp20/W55RP20_Chip.jpg" />
</p>

<!-- ![](/img/products/w55rp20/W55RP20_Chip.jpg) -->

:::note

次世代のW55RP20チップで最適化されたネットワーキングを体験してください。シリアルインターフェースとEthernetを統合し、性能とセキュリティを向上させます。
:::

----

## 概要

- 最新のioNICはシリアルインターフェースとEthernet接続を統合し、用途に合わせたネットワーキングソリューションを提供します。多様なネットワークプロトコル、強化されたSSLセキュリティ機能、クラウドSDKに対応し、業界特化型アプリケーション向けに最適化された性能を実現します！

![](/img/products/w55rp20/w55rp20_overview.png)

----

W55RP20チップは、Raspberry PiのRP2040マイクロコントローラーとWIZnetのW5500 Ethernetコントローラーを統合したSystem-in-Package (SiP)ソリューションで、IoTデバイスやスマートアプリケーション向けにネットワーキングおよび処理能力を提供します。W5500はハードウェアTCP/IPスタックをサポートし、ネットワーク接続と通信管理を簡素化。外部メモリを必要とせず効率的なソリューションを提供します。一方、RP2040はデュアルコアARM Cortex-M0+プロセッサを搭載し、高速データ処理とマルチタスク処理が可能です。

このチップはPythonやC/C++などのプログラミング環境に対応しており、開発者がアプリケーションを簡単に実装できるよう設計されています。さらに、GPIO、ADC、UART、SPI、I2Cなどの外部インターフェースをサポートしており、センサーやアクチュエーター、その他の周辺機器との接続を容易にします。

![](/img/products/w55rp20/W55RP20_system_overview.png)

## ピンマップ

<p align="center">
  <img src="/img/products/w55rp20/W55RP20_pinout_v3.png" />
</p>

## 特徴
* デュアルARM Cortex-M0+ @ 133MHz  
* ハードウェアTCP/IPスタック  
* 2MByteオンチップフラッシュメモリ  
* 6つの独立バンクを持つ264kBオンチップSRAM  
* DMAコントローラー  
* フル接続AHBクロスバー  
* 補間器および整数除算周辺機能  
* コア電圧を生成するオンチッププログラム可能LDO  
* USBおよびコアクロックを生成する2つのオンチップPLL  
* 23のGPIOピン（うち4つはアナログ入力として使用可能）  
* 周辺機能  
    * 2つのUART  
    * 2つのSPIコントローラー  
    * 2つのI2Cコントローラー  
    * 16のPWMチャンネル  
    * USB 1.1コントローラーおよびPHY（ホストおよびデバイス対応）  
    * 8つのPIOステートマシン  
* 対応ネットワークプロトコル  
    * TCP  
    * UDP  
    * IPv4  
    * ICMP  
    * ARP  
    * IGMP  
    * PPPoE  

## 詳細
### ドキュメント
- データシート  
    - [W55RP20](https://docs.wiznet.io/Product/ioNIC/W55RP20/documents_md#data-sheet)  
    - [RP2040](https://docs.wiznet.io/Product/ioNIC/W55RP20/documents_md#rp2040-data-sheet)  
    - [W5500](https://docs.wiznet.io/Product/iEthernet/W5500/datasheet)  

### 関連EVB-Pico
- [W55RP20-EVB-Picoの説明](https://docs.wiznet.io/Product/ioNIC/W55RP20/w55rp20-evb-pico)  
    - 機能  
    - 技術リファレンス  
- ファームウェア例  
	- C/C++  
  	  - [Ethernet例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)  
  	  - [AWS例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AWS-C)  
  	  - [Azure例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-AZURE-C)  
  	  - [LwIP例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-LWIP-C)  
  	  - [FreeRTOS例](https://github.com/WIZnet-ioNIC/WIZnet-PICO-FREERTOS-C)  
	- MicroPython例  
  	  - [Ethernet例](https://github.com/WIZnet-ioNIC/WIZnet-ioNIC-micropython)  
	- CircuitPython例  
   	  - [CircuitPython例](https://github.com/WIZnet-ioNIC/WIZnet-ioNIC-Circuitpython)  
	- Arduino例  
  	  - [Arduino例](https://github.com/earlephilhower/arduino-pico)  
```