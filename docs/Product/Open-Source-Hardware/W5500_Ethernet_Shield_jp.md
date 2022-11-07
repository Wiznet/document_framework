---
id: w5500_ethernet_shield_jp
title: W5500 イーサネットシールド
date: 2020-04-03
---

## 概要

  - **ARM mbed と互換**動作可能
  - **Arduinoピンと互換動作可能**
  - イーサネット(W5500ハードワイヤードTCP/IPチップ)

![](/img/osh/w5500_ethernet_shield/w5500_main_picture2.png)

W5500イーサネットシールドはW5500を元に制作されました。W5500の詳しい情報は下段のリンクを確認して下さい。W5500イーサネットシールドは3.3Vと5Vの環境で動作します。このイーサネットシールドはArduinoのプラットフォーム、またはARM
mbedのプラットフォームと互換して使用されます。

## 使用可能なボードリスト

  - ARM mbed ボード
      - [ARM mbed Platform](http://os.mbed.com/platforms/) : ARM
        mbed platform Site
      - [FRDM-KL25Z](http://os.mbed.com/platforms/) : Freescale
      - [NXP
        LPC800-MAX](http://os.mbed.com/platforms/NXP-LPC800-MAX/)
        : NXP
  - Arduino ボード
      - [Arduino board (e.g. the Uno, Mega,
        Due)](http://www.arduino.cc/en/Main/Products)
      - [Arduino
        Leonardo](http://arduino.cc/en/Main/ArduinoBoardLeonardo)
  - Arduino-compatible ボード
      - [Seeeduino v3.0](http://www.seeedstudio.com/wiki/Seeeduino_v3.0)
        : Based on [Arduino
        Duemilanove](http://arduino.cc/en/Main/ArduinoBoardDuemilanove)

-----

## Getting Started

  -  W5500 Ethernet shieldを使用するために、ArduinoIDEに含まれているWIZnet Ethernet
    LibraryのUpdateが必要である。（**必須**）
  - 下のリンクを参照してください。
      - このURLに従ってください[Getting Started\_jp](./getting_started_arduino_jp.md)

-----

## 言語

  - [Eng.Ver](./W5500_Ethernet_Shield.md)
  - [Kor.Ver](./W5500_Ethernet_Shield_kor.md)

-----

## 特徴

  - 3.3V/5Vの環境で動作。 
  - 高速イーサネットコントローラW5500チップ使用
  - 使用者が使うGPIOピンを選択可能
  - SPIインターフェイス
  - Tx/Rxバッファー用内蔵メモリ32Kbytes
  - 10/100イーサネットPHY搭載
  - 自動ネゴシエーション(Full and half duplex, 10 and 100-based) サポート
  - 以下のハードウェアTCP/IPプロトコルサポート: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
  - ストレージにするためにSD-cardスロットサボート
  - I2C/UARTインターフェイスサボート

## ハードウェア構成

  - RJ-45とトランスフォーマー:イーサネットポート
  - W5500:ハードワイヤードTCP/IPイーサネットコントローラ
  - リセットピン:押すとイーサネットシールドとArduinoをリセット
  - SDスロット:FAT16やFAT32のマイクロSDカードサポート(注意事項を読んでください)
  - I2C:I2Cインターフェイス
  - UART:UARTインターフェイス

## Arduino & ARM mbed ピンを使用

![](/img/osh/w5500_ethernet_shield/gpio_select.png)

W5500イーサネットシールドはGPIOピンを使用者が選択できます。

  - 使用者がチップセレクトを変更して他のモジュールにも使用可能
  - 他のボードと重畳して使用可能

**Caution)**
注意)使用者が5Vプラットフォームを使うとき、SDカードの動作は信頼性が低い。しかし、十分なテストをした後なら使用可能。信頼性を求めるならバッファーと100nFコンデンサーを設置して使用をおすすめします。

-----

## SPI Operation & Timing Diagram

**SPIオペレーション**

W5500イーサネットシールドにはW5500チップが使用されました。ですのでSPIオペレーションやタイミングダイアグラムは[W5500](./../iEthernet/W5500/Overview.md)と同一です。詳しい情報は下のW5500チップのデータシートをご覧ください。

  - <a href="/img/products/w5500/w5500_ds_v106e_141230.pdf" target="_blank">W5500 Datasheet v1.0.6 - English</a>
  - <a href="/img/products/w5500/w5500_ds_v106k_141230.pdf" target="_blank">W5500 Datasheet v1.0.6 - Korean</a>

-----

## Technical Reference

**ブロックダイアグラム**

  - バッファーなし

![](/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_blockdiagram.gif)

  - バッファーあり

![](/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_blockdiagram_buffer.jpg)

**概略図**

  - <a href="/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch_zip.zip" target="_blank">W5500 Ethernet shield Rev1.0 Schematic(Eagle CAD) with PCB file</a>
  - <a href="/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch.pdf" target="_blank">W5500 Ethernet shield Rev1.0 Schematic(PDF)</a>

**パーツリスト**

  - [W5500 Ethernet shield Rev1.0 Part list](/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v1.0_pl_150414.xlsx)

**ディメンション**

  - W5500 Ethernet shield Rev1.0 Dimension

![](/img/osh/w5500_ethernet_shield/w5500_shield_dimension.png)

-----

## Etc.

**ioShield-A使用者のWIZnetイーサネットライブラリ**

  - [Ethernet Library for ioShield-A](./ethernet_library_for_ioShield_A.md)

**例**

  - [Twitter test](twitter_test)

**イーサネットライブラリ**

  - <https://github.com/Wiznet/WIZ_Ethernet_Library>

-----

##  参考

![](/img/products/w5500/w5500_evb/icons/link.png) [WizWiki Forum](https://forum.wiznet.io/) : WIZnetの技術的サポートやプロジェクトを共有するフォーラム

[Ethernet Library for ioShield-A](./ethernet_library_for_ioShield_A.md) : WIZnet WIZ550ioの技術的サポート

<!--<http://wizwiki.net/jp> : WIZnet 日本ブログ-->

![](/img/products/w5500/w5500_evb/icons/download.png) 製品概要: 追加予定

-----