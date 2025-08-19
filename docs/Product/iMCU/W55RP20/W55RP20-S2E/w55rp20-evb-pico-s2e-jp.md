---
id: w55rp20-evb-pico-s2e-jp  
title: Getting Started with W55RP20-EVB-PICO  
date: 2025-05-27  
---


-----

## 概要  

このマニュアルは、W55RP20-EVB-PICOハードウェアにW55RP20-S2Eファームウェアをダウンロードし、シリアルからイーサネットへの変換デバイスとして使用するためのガイドです。

-----

## 必要なハードウェアとソフトウェア  

### ハードウェア  

- W55RP20-EVB-PICO  
- ケーブル (イーサネット / USB-C)  

### ソフトウェア  

- [W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)  
- [WIZMacTool](https://docs.wiznet.io/img/products/wiz750sr/developers/restore-mac/wizmactool_v20151127.zip)  
- [WIZnet S2E Configuration Tool](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)  

## W55RP20-EVB-PICOをシリアルからイーサネットデバイスとして使用する方法  

### ステップ1: W55RP20-S2EファームウェアをW55RP20-EVB-PICOにフラッシュする  

最新バージョンのW55RP20-S2E Bin_Files_VXXX.zipをダウンロードします。  
[W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)  
<img src="/img/products/w55rp20-s2e/S2E_BIN.png" width="550" />  

Bin_Files_VXXX.zipを解凍します。  
<img src="/img/products/w55rp20-s2e/S2E_folder.png" width="200" />  

USB経由でW55RP20-EVB-PICOを接続します。BOOTSELボタンを押しながら、リセットボタンを一度短く押します。  
<img src="/img/products/w55rp20-s2e/w55rp20-evb-pico-bt.png" width="500" />  

RPI-RP2というリムーバブルディスクが表示されます。  
Bin_Files_VXXXフォルダからApp_linker.uf2とBoot.uf2を1つずつドラッグ＆ドロップします。  
<img src="/img/products/w55rp20-s2e/drag-drop.png" width="400" />  

:::tip  
最初のファイルをドライブにドロップした後、ドライブが消えることがあります。その場合、再度BOOTSELモードに設定し、次のファイルをドライブにドロップしてください。  

:::

### ステップ2: MACアドレスの書き込み  

MACアドレスの書き込みについては、こちらの[リンク](./mac_address-write-guide-jp.md)を参照してください。  

### ステップ3: 完了  

MACアドレスの入力が完了すると、W55RP20-EVB-PICOのユーザーLEDがRunning LEDに変わります。  
S2Eアプリケーションが実行中の場合、このLEDは1秒ごとに点滅します。  
<img src="/img/products/w55rp20-s2e/w55rp20-evb-pico-user.png" width="500" />  

W55RP20-S2EファームウェアをW55RP20-EVB-PICOにアップロードした後のピンマップは以下の通りです。  
<img src="/img/products/w55rp20-s2e/w55rp20-evb-pinmap.png" width="500" />  