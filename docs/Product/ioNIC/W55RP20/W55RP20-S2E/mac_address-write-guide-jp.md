---
id: mac_address-write-guide-jp
title: MAC Address write Guide
date: 2025-05-27
---

-----

## MACアドレス書き込み概要

MACアドレスは、W55RP20-S2Eのファームウェア領域とは異なるメモリアドレスに保存されます。<br />そのため、W55RP20-S2Eのファームウェアを再書き込みしても、ファームウェア領域のみが上書きされる場合、入力済みのMACアドレスは消去されません。

WIZnetのMACアドレスOUIは**00:08:DC**:XX:XX:XXです。
異なるOUIを使用する必要がある場合は、[W55RP20-S2E FW](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)バージョン1.1.2以降を使用し、  
**port/app/configuration/inc/ConfigData.h**内のMAC_OUI0、MAC_OUI1、MAC_OUI2の定義を希望するOUIに変更してください。その後、新しいファームウェアをビルドしてダウンロードし、セットアップガイドを進めてください。<br />
<img src="/img/products/w55rp20-s2e/diff_oui.png" width="400" />

-----

## 必要なハードウェアとソフトウェア

### ハードウェア

  - W55RP20-S2Eファームウェアがダウンロードされたデバイス
  - ケーブル（Ethernet / シリアル）

### ソフトウェア

  - [WIZMacTool](https://docs.wiznet.io/img/products/wiz750sr/developers/restore-mac/wizmactool_v20151127.zip)
  - [WIZnet S2E Configuration Tool](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)

## MACアドレスの書き込み方法

MACアドレスの書き込み方法は2通りあります。
- [WIZMacToolを使用する場合](#using-wizmactool)
- [シリアルコマンドを使用する場合](#using-serial-command)

## WIZMacToolを使用する場合

### ステップ1: W55RP20-S2EのUART1をPCに接続する

このステップでは、別途UART to USBモジュールが必要です。<br />
<img src="/img/products/w55rp20-s2e/usb-connect.png" width="500" />

### ステップ2: WIZMacToolを起動

**WIZMacTool**を起動し、W55RP20-S2Eが接続されているCOMポートに接続します。<br />
<img src="/img/products/w55rp20-s2e/mac-tool1.png" width="500" />

### ステップ3: INPUT MACを確認

WIZMacToolでW55RP20-S2EのCOMポートに接続した後、W55RP20-S2Eをリセットし、WIZMacToolに「INPUT MAC」が表示されることを確認します。<br />
<img src="/img/products/w55rp20-s2e/mac-tool2.png" width="500" />

### ステップ4: MACアドレスを書き込む

画像のようにWIZMacToolを設定し、入力したいMACアドレスを入力して「Write」をクリックします。<br />
<img src="/img/products/w55rp20-s2e/mac-tool4.png" width="500" />

MACアドレスが正常に書き込まれると、W55RP20-S2Eは「R」と入力したMACアドレスを返答します。<br />
<img src="/img/products/w55rp20-s2e/mac-tool5.png" width="500" />
<br />
連続してMACアドレスを入力する場合、WIZMacToolは「Write MAC」クリック後にMACアドレスを1ずつ自動で増加させます。

### ステップ5: 完了

変更されたMACアドレスは、config-toolで検索するか、<br />
<img src="/img/products/w55rp20-s2e/config-mac.png" width="500" /> <br />
またはATコマンドで確認できます。<br />
<img src="/img/products/w55rp20-s2e/at-mac.png" width="500" /> <br />

## シリアルコマンドを使用する場合

### ステップ1: W55RP20-S2EのUART1をPCに接続する

このステップでは、別途UART to USBモジュールが必要です。<br />
<img src="/img/products/w55rp20-s2e/usb-connect.png" width="500" />

### ステップ2: シリアルプログラムを起動

シリアルモニタープログラムを使用して、W55RP20-S2Eが接続されているCOMポートを開きます。このマニュアルでは、オープンソースツールのHerculesを使用しました。<br />
<img src="/img/products/w55rp20-s2e/hercul-open.png" width="500" />

### ステップ3: INPUT MACを確認

シリアルプログラムでW55RP20-S2EのCOMポートを開いた後、W55RP20-S2Eをリセットし、「INPUT MAC」が表示されることを確認します。<br />
<img src="/img/products/w55rp20-s2e/hercul-input.png" width="500" />

### ステップ4: MACアドレスを書き込む

入力したいMACアドレスの前に文字「S」を付けて送信します。W55RP20-S2Eは文字「R」と送信したMACアドレスを返答し、MACアドレスが正常に書き込まれたことを示します。<br />
<img src="/img/products/w55rp20-s2e/hercul-write-mac.png" width="500" />

### ステップ5: 完了

変更されたMACアドレスは、config-toolで検索するか、<br />
<img src="/img/products/w55rp20-s2e/config-mac.png" width="500" /> <br />
またはATコマンドで確認できます。<br />
<img src="/img/products/w55rp20-s2e/at-mac.png" width="500" /> <br />
```