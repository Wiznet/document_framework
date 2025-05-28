---
id: modbus-connection-guide-jp  
title: Modbus Connection Guide  
date: 2025-05-27   
---






-----

## W55RP20-S2E Modbus接続概要

**W55RP20-S2E**は、**Modbus TCPサーバー/UDP**と**Modbus RTU/ASCII**間のプロトコル変換をサポートしています。

-----

## 必要なハードウェアおよびソフトウェア



### ハードウェア

  - W55RP20-S2E  
  - ケーブル (イーサネット / シリアル)

### ソフトウェア

  - WIZnet S2E Configuration Tool  
  > **注意** : Modbusプロトコルには、WIZnet-S2E-Tool-GUIバージョン1.5.5以上の最新バージョンが必要です。  
	- [最新バージョンのダウンロード](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)  
    - [GitHubリポジトリ](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)  
  - Modbus Poll & Slave:  
	- [ダウンロードリンク](https://www.modbustools.com/download.html)

-----



## Modbusへの接続方法




### ステップ1: Config-toolを実行

インストール済みの**「Config-tool」**を実行します。


### ステップ2: Modbus Poll & Slaveのセットアップ

Modbus Poll & Slaveプログラムをセットアップします。  

  - Modbus Pollは、設定に応じてModbus TCP/IPまたはModbus UDP/IPを介して接続します。  
  - Modbus Slaveは、シリアルポートを介して接続します。  

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/setup_modbus_program.png) |
| 図: **Modbus Poll & Slaveプログラムのセットアップ**                                                        |

### ステップ3: WIZnet S2E Configuration Toolを使用してW55RP20-S2EをModbus接続用に設定

1. **Operation mode**設定セクションで**TCP Server**または**UDP**モードを選択します。

|                                                                                               |
| :-------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/select_operation_mode.png) |
| 図: **TCP ServerまたはUDPモードの選択**                                                        |

2. Modbusオプションを設定します。

|                                                                                                         |
| :-----------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/setup_modbus_option.png) |
| 図: **Modbusオプションの設定**                                                        |

3. **Apply Settings**ボタンをクリックして設定を保存します。

|                                                                                                |
| :--------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/apply_settings.png) |
| 図: **Apply Settingsボタンのクリック**                                                        |

|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/saved_settings.png) |
| 図: **保存された設定**                                                        |

### ステップ4: 完了

W55RP20-S2EがModbusに正常に接続されました！  
|                                                                                   |
| :-------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/modbus-connection-guide/connect_modbus.png) |
| 図: **Modbusへの接続**  

-----  