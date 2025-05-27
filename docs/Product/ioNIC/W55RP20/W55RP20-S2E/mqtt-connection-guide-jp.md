---
id: mqtt-connection-guide-jp  
title: MQTT Connection Guide  
date: 2025-05-27  
---

-----

## MQTT接続概要

**W55RP20-S2E**は、**MQTTクライアント**および**MQTTSクライアント**モードをサポートしています。

-----

## 必要なハードウェアとソフトウェア

### ハードウェア

- W55RP20-S2E  
- ケーブル (イーサネット / シリアル)

### ソフトウェア

- WIZnet S2E Configuration Tool  
- [最新バージョンをダウンロード](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.5.0)  
- [旧バージョンをダウンロード](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases)  
- [GitHubリポジトリ](https://github.com/Wiznet/WIZnet-S2E-Tool-GUI)  
- Mosquitto:  
  - [ダウンロードリンク](https://mosquitto.org/download/)

-----

## Mosquittoを使用してMQTTブローカーに接続する方法

W55RP20-S2EはMQTTクライアントおよびMQTTSクライアントモードをサポートしていますが、このセクションではMQTTクライアントモードを基にMosquittoを使用してMQTTブローカーに接続する方法を説明します。

> **注意**: MQTTSクライアントモードでは、MQTTクライアントモードとは異なり、セキュリティ関連の追加設定が必要です。

### ステップ1: Config-toolを起動

インストール済みの**「Config-tool」**を起動します。

### ステップ2: Mosquittoを設定

Mosquittoのバージョンによっては設定が必要になる場合があります。以下を参考に設定してください。

- Mosquittoのバージョンが2.0より前の場合、デフォルトで認証なしでクライアントの接続が許可されます。  
- 2.0以降では、クライアントが接続する前に認証オプションを明示的に選択する必要があります。

そのため、バージョン2.0以降を使用している場合は、Mosquittoがインストールされているディレクトリ内の「mosquitto.conf」を設定するために、以下のリンクを参照してください。  

- [認証方法 (Authentication Methods)](https://mosquitto.org/documentation/authentication-methods/)

### ステップ3: Mosquittoを使用してMQTTブローカーを起動

```bash
例:
mosquitto -c mosquitto.conf -p 1883 -v
```

|                                                                                                       |
| :---------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/run_mqtt_broker_through_mosquitto.png) |
| 図: **Mosquittoを使用してMQTTブローカーを起動**                                                        |

### ステップ4: WIZnet S2E Configuration Toolを使用してデバイスをMQTTブローカー接続用に設定

1. **Operation mode**設定セクションで**MQTTクライアント**モードを選択

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/select_mqtt_client_mode.png) |
| 図: **MQTTクライアントモードを選択**                                                        |

2. **Remote host / port**セクションで**リモートホストIP (またはURL)**と**リモートポート**を設定

|                                                                                                          |
| :------------------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/setup_remote_host_ip_and_remote_port.png) |
| 図: **リモートホストIPとリモートポートを設定**                                                           |

3. MQTTオプションを設定

|                                                                                        |
| :------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/setup_mqtt_options.png) |
| 図: **MQTTオプションを設定**                                                           |

4. **Apply Settings**ボタンをクリックして設定を保存

|                                                                                                 |
| :---------------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/click_apply_settings_button.png) |
| 図: **Apply Settingsボタンをクリック**                                                          |

|                                                                                    |
| :--------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/saved_settings.png) |
| 図: **設定が保存されました**                                                        |

### ステップ5: 完了

デバイスがMQTTブローカーに正常に接続されました！

|                                                                            |
| :------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/status.png) |
| 図: **ステータス**                                                         |

|                                                                                            |
| :----------------------------------------------------------------------------------------: |
| ![](/img/products/s2e_module/wiz5xxsr-rp/mqtt_connection_guide/connect_to_mqtt_broker.png) |
| 図: **MQTTブローカーに接続**                                                               |

-----

## MQTTを使用してAWSに接続する方法

### ステップ1: AWSでThingとポリシーを作成し、証明書をダウンロード

1. AWSサービスを利用するには、最初にサインインする必要があります。以下のリンクをクリックしてサインインページにアクセスしてください。

**[AWSログインページ](https://aws.amazon.com/console/)**

<br />
<br />

2. サインイン後、検索バーで「IoT Console」と検索し、それをクリックします。
### ステップ1: AWS IoT Coreで「Thing」を作成する

1. 左側のメニューから「IoTコンソール (IoT Console)」を検索します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/1_aws_iot_core.png" width="600" /> |
| 図: **「IoTコンソール」を検索**                                                         |

<br />
<br />

2. 左側の「Things」タブをクリックし、オレンジ色の「Create things」ボタンを押します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/2_aws_creating_thing.png" width="600" /> |
| 図: **「Create Things」をクリック**                                                         |

<br />
<br />

3. 「Create single thing」を選択し、「Next」ボタンを押します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/3_aws_creating_thing.png" width="600" /> |
| 図: **「Create single thing」を選択**                                                         |

<br />
<br />

4. 「Thing name」を入力し、「Next」ボタンを押します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/4_aws_creating_thing.png" width="600" /> |
| 図: **「Thing name」を入力**                                                         |

<br />
<br />

5. 「Auto-generate a new certificate (recommended)」を選択し、「Next」ボタンを押します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/5_aws_creating_thing.png" width="600" /> |
| 図: **「Auto-generate a new certificate」を選択し、「Next」をクリック**                                                         |

<br />
<br />

6. 次に、Thingを保護するためのポリシーを作成する必要があります。「Create policy」をクリックします。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/6_aws_creating_policy.png" width="600" /> |
| 図: **「Create policy」をクリック**                                                         |

<br />
<br />

7. ポリシーの名前を設定し、ポリシードキュメントを指示通りに構成して、「Create」ボタンを押します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/7_aws_creating_policy.png" width="600" /> |
| 図: **ポリシー情報を設定**                                                         |

<br />
<br />

8. 先ほど開いていた「Create single thing」ページに戻り、「Create thing」ボタンを押します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/8_aws_combine_policy.png" width="600" /> |
| 図: **「Create thing」をクリック**                                                         |

<br />
<br />

9. すべてのキーと証明書をダウンロードします。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/9_aws_downloading_cert_key.png" width="600" /> |
| 図: **すべてのキーと証明書をダウンロード**                                                         |

<br />
<br />
<br />
<br />

### ステップ2: デバイスに証明書を入力する

1. AWSで「MQTT Test Client」タブに入り、エンドポイントをコピーします。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/10_aws_copy_endpoint.png" width="600" /> |
| 図: **エンドポイントをコピー**                                                         |

<br />
<br />

2. 設定ツールを起動し、デバイスを検出して「Basic settings」タブを次のように設定します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/1_device_search.png" width="600" /> |
| 図: **設定ツールで「Basic settings」タブを設定**                          |

<br />
<br />

3. 「MQTT options」タブを以下のように設定します。

- MQTT Topicsセクション  
  - **Publish Topic:** $aws/things/my_w232n_thing/shadow/update  
  - **Subscribe Topic:** $aws/things/my_w232n_thing/shadow/update/accepted  

- MQTT Options  
  - **Client ID:** my_w232n_thing  
  - **Keep-Alive:** 60  
  - **QoS:** QoS 0  

- Remote Host / Port  
  - **Remote Host:** コピーしたエンドポイントを貼り付け  
  - **Remote Port:** 8883  
|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/2_MQTT_option.png" width="600" /> |
| 図: **「MQTTオプション」を設定**                                                         |

<br />
<br />

4. Certificate Managerタブに移動し、以下のようにRoot CAセクションを調整します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/3_MQTT_cert_key.png" width="600" /> |
| 図: **Root CAセクションを調整**                                                         |

<br />
<br />

5. 「Load file」をタップして、以下の証明書とキーのファイルを読み込みます。

- **Root CA** : AmazonRootCA1.pem  
- **クライアント証明書 (Client Certificate)** : xxxxx-certificate.pem.crt  
- **秘密鍵 (Private Key)** : xxxxx-private.pem.key  

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/4_MQTT_cert_key.png" width="600" /> |
| 図: **証明書とキーのファイルを読み込む**                                                         |

<br />
<br />

6. 各「Save to device」ボタンを押します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/5_MQTT_cert_key.png" width="600" /> |
| 図: **証明書とキーのファイルを保存**                                                         |

<br />
<br />

7. 「Apply settings」をクリックします。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/6_MQTT_cert_key.png" width="600" /> |
| 図: **「Apply settings」をクリック**                                                         |

<br />
<br />
<br />
<br />

### ステップ3: 実行 (Subscribe)

1. AWS IoTコンソールページに戻り、「Test」セクション内の「MQTT test client」をクリックして開きます。その後、設定ツールのMQTT Topicsセクションで、Publish Topic **$aws/things/my_w232n_thing/shadow/update** を「Topic filter」に入力し、「Subscribe」ボタンを押します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/1_aws_sub_topic.png" width="600" /> |
| 図: **Subscribe Topic**                                                         |

<br />
<br />

2. ターミナルツールを使用してデバイスのシリアルポートを開き、データを転送します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/2_aws_sub_topic.png" width="600" /> |
| 図: **データ転送**                                                         |

<br />
<br />

3. これにより、AWSとのMQTT通信が正しく機能していることを確認できます。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/3_aws_sub_topic.png" width="600" /> |
| 図: **AWSとのMQTT通信が成功**                                                         |

<br />
<br />
<br />
<br />

### ステップ4: 実行 (Publish)

1. AWS IoTコンソールページに戻り、「Test」セクション内の「MQTT test client」をクリックします。その後、設定ツールのMQTT Topicsセクションで、Subscribe Topic **$aws/things/my_w232n_thing/shadow/update/accepted** を「Topic name」に入力し、「Publish」ボタンを押します。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/4_aws_pub_topic.png" width="600" /> |
| 図: **Publish Topic**                                                         |

<br />
<br />

2. シリアルウィンドウで、AWSから送信されたデータを確認できます。

|                                                                                             |
| :-----------------------------------------------------------------------------------------: |
| <img src="/img/products/w232n/aws_execute/5_aws_pub_topic.png" width="600" /> |
| 図: **AWSとのMQTT通信が成功**         |