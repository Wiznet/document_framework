---
id: firmware-update-guide-jp  
title: Firmware Upload & Update guide  
date: 2025-05-27 
---

-----

## W55RP20-S2E ファームウェアアップロード＆アップデート概要

### メモリマップ

- 内部フラッシュ  
- メインフラッシュサイズ: 2 Mbytes  

```cpp
 Top Flash Memory Address /-------------------------------------------\  0x10200000
                          |                                           |
                          ~                                           ~
                          |             Reserved (832KB)              |
                          |-------------------------------------------|  0x10130000
                          |                                           |
                          |             Parameters (64KB)             |
                          |                                           |
                          |-------------------------------------------|  0x10120000
                          |                                           |
                          |                                           |
                          |                                           |
                          |                                           |
                          |        Firmware Binary Bank (512KB)       |
                          |                                           |
                          |                                           |
                          |                                           |
                          |-------------------------------------------|  0x100A0000
                          |                                           |
                          |                                           |
                          |                                           |
                          |                                           |
                          |        Application Bank (512KB)           |
                          |                                           |
                          |                                           |
                          |                                           |
                          |-------------------------------------------|  0x10020000
                          |                                           |
      Page 1 (256KB)      |                                           |
                          |             Bootloader (128KB)            |
      Page 0 (256KB)      |                                           |
                          |                                           |
                          \-------------------------------------------/  0x10000000
```

## W55RP20-S2E ファームウェアをアップロードまたはアップデートする方法

W55RP20-S2Eは、ファームウェアをアップロードまたはアップデートするための3つの方法を提供します。

- [Config-Toolを使用する](./firmware-update-guide-jp.md) **アプリケーションバンクのみ**  
- [Web-Configを使用する](./firmware-update-guide-jp.md) **アプリケーションバンクのみ**  
- [USBを使用する](./firmware-update-guide-jp.md)  
- [SWDを使用する](./firmware-update-guide-jp.md)  


-----




## Configuration Toolを使用する


### Configuration Toolを使用したアップデート手順

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_update_sequence.png) |
| 図: **アプリケーションバンクアップデート手順**                                               |

**Configuration Toolを使用したファームウェアアップデートは、アプリケーション領域のみを更新できます。**

### 必要なハードウェアとソフトウェア


#### ハードウェア

- W55RP20-S2E  
- ケーブル (Ethernet / シリアル)  

#### ソフトウェア

- [W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)  
- [WIZnet S2E Configuration Tool](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)  


### ステップ1: Config-toolを実行する

インストール済みの **'Config-tool'** を実行します。  

Config-toolを使用したファームウェアアップデートでは、デバイスとPCが**同じサブネット**内にある必要があります。  
(例: PC: 192.168.**11**.197, デバイス: 192.168.**11**.2)

#### ステップ2: ファームウェアをアップロードする

1. **Firmware Upload** ボタンをクリックします。  

|                                                                                                  |
| :----------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/click_firmware_upload_button.png) |
| 図: **Firmware Uploadボタンをクリック**                                                         |

2. アップロードするファームウェアを選択します。  

ファームウェアを選択する際には、**.bin**(*_linker.bin)を選択する必要があります。  
Config-toolはアプリケーションバンクのみを更新できるため、**Boot.binをアップロードしないでください**。  
|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/config-fw.png) |
| 図: **アップロードするファームウェアを選択**                                                   |

3. ファームウェアをアップロードします。  

|                                                                                        |
| :------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/uploading_firmware.png) |
| 図: **ファームウェアをアップロード中**                                                  |



#### ステップ3: 完了

ファームウェアのアップロードまたはアップデートが完了しました！

ファームウェアのアップロードまたはアップデート完了後、約5秒後にConfiguration ToolでW55RP20-S2Eが検索されます。  

|                                                                                                        |
| :----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_upload_or_update_complete.png) |
| 図: **ファームウェアのアップロードまたはアップデート完了**                                             |

## Web Configを使用する

### Web Configを使用したアップデート手順  
|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/firmware_update_guide/firmware_update_sequence.png) |
| 図：**アプリケーションバンク更新シーケンス**                                                    |

**Web設定を使用したファームウェアの更新では、アプリケーションエリアのみを更新できます。**

### 必要なハードウェアとソフトウェア

#### ハードウェア

- W55RP20-S2E  
- ケーブル (イーサネット / シリアル)

#### ソフトウェア

- [W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)  
- [WIZnet S2E Configuration Tool](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)

### ステップ1: W55RP20-S2EのIPアドレスを確認

デバイスのIPアドレスは**Config-tool**または**ATコマンド**を使用して確認できます。<br />
Web設定を使用したファームウェアの更新では、デバイスとPCが**同じサブネット**内にある必要があります。<br />
(例: PC: 192.168.**11**.197, デバイス: 192.168.**11**.2)

### ステップ2: Webサーバーにアクセス

Webブラウザ（例: Chrome）を使用して、設定したS2Eモジュールのアドレスのポート50003に接続します。<br />
**GET Settings**をクリックすると、デバイス情報が表示されます。  
|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/w55rp20-s2e-web-fw.png)                                        |
| 図：**Webサーバー設定**                                                                      |

### ステップ3: ファームウェアをアップロード

[W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)<br />
binファイル（App_linker.bin）を選択します。<br />
Webサーバーはアプリケーションバンクのみを更新できるため、**Boot.binをアップロードしないでください**。  
|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/w55rp20-s2e-web-up.png)                                        |
| 図：**Binファイルの選択**                                                                    |

.binファイルを選択したら、**Module Update**をクリックし、**Confirm**を選択します。  
|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/w55rp20-s2e-web-update.png)                                    |
| 図：**モジュール更新**                                                                        |

#### ステップ4: 完了

ファームウェアの更新が成功すると、**「F/W Update Complete. Device Reboot Please wait a few seconds.」**というメッセージが表示されます。<br />
Web設定ページは自動的に更新されないため、再度「IPアドレス:50003」に接続してください。

## USBを使用

### 必要なハードウェアとソフトウェア

#### ハードウェア

- W55RP20-S2E  
- ケーブル (イーサネット / USB)

#### ソフトウェア

- [W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)

### ステップ1: USBケーブルでW55RP20-S2EとPCを接続

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/w55rp20-s2e-usb.png)                                           |
| 図：**USB接続**                                                                              |

### ステップ2: ブートモードに入る

BOOTピン（ピン番号63）をLowに保持し、RUNピンを短くLowにします。<br />
すると、RPI-RP2という名前のマスストレージデバイスが表示されます。  

|                                                                                              |
| :------------------------------------------------------------------------------------------: |
| ![](/img/products/w55rp20-s2e/w55rp20-s2e-rpi-rp2.png)                                       |
| 図：**RPI-RP2**                                                                              |

### ステップ3: W55RP20-S2Eファームウェアをフラッシュ

[W55RP20-S2E](https://github.com/WIZnet-ioNIC/W55RP20-S2E/releases)<br />
Bin_Files_VXXXフォルダからApp_linker.uf2とBoot.uf2を1つずつドラッグ＆ドロップします。<br />
<img src="/img/products/w55rp20-s2e/drag-drop.png" width="400" />

### ステップ4: 完了

ファームウェアのアップロードまたは更新が完了しました！

ファームウェアのアップロードまたは更新が完了すると、約5秒後にConfiguration ToolでW55RP20-S2Eが検索されます。

MACアドレスがMACアドレスメモリに保存されていない場合は、追加のMACアドレス入力が必要です。<br />
[MACアドレスの書き込み方法](./mac_address-write-guide-jp.md)

## SWDを使用
- 近日公開