---
id: factory-rst-guide-jp  
title: Factory Reset Guide  
date: 2025-05-27  
---

-----

## ファクトリーリセットの概要

ファクトリーリセットを実行すると、**W55RP20-S2E**の設定が工場出荷時の状態に戻ります。

-----

## 必要なハードウェアおよびソフトウェア

### ハードウェア

- W55RP20-S2E  
- ケーブル（イーサネット / シリアル）

### ソフトウェア

- WIZnet S2E Configuration Tool  
  - [最新バージョンをダウンロード](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.5.0)  
  - [旧バージョンをダウンロード](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)  
  - [GitHubリポジトリ](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)

-----

## W55RP20-S2Eのファクトリーリセット方法

W55RP20-S2Eのファクトリーリセットを行う方法は2つあります。

- [Config-Toolを使用](#config-toolを使用)  
- [ファクトリーリセットスイッチを使用](#ファクトリーリセットスイッチを使用)  

## Config-Toolを使用

### ステップ1: Config-toolを起動

インストール済みの**「Config-tool」**を起動します。

### ステップ2: メニューアイコンから⑦Factory Resetを選択

<img src="/img/products/s2e_module/wiz5xxsr-rp/configuration_tool_manual/menu_icons.png" width="450" />

### ステップ3: ファクトリーリセットを実行

<img src="/img/products/w232n/config-fact.png" width="550" />

- **Yes**を選択します。

### ステップ4: 完了

<img src="/img/products/w232n/config-fact-ok.png" width="550" />

- ファクトリーリセットが正常に完了すると、完了通知が表示されます。

## ファクトリーリセットスイッチを使用

### ステップ1: Factory ResetピンをLowにする

<img src="/img/products/w55rp20-s2e/w55rp20-s2e-frst.png" width="700" />

- W55RP20-S2Eが通常起動している状態で、ファクトリーリセットスイッチを5秒間押し続けます。  
- RUN STATUS PIN、LINK_STATUS PIN、TCP_STATUS PINが2回速く点滅します。

### ステップ2: 完了

- Config-toolを使用して、初期化が正しく行われたか確認します。

-----  