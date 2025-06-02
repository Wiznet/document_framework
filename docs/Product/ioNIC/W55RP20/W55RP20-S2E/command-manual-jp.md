---
id: command-manual-jp
title: Command Manual
date: 2025-06-02
---

-----

## W55RP20-S2E ATコマンド概要

W55RP20-S2Eは、製品の設定および制御のために様々なコマンドを提供します。各コマンドは**2バイトのアルファベット文字列**で構成され、すべて**大文字**です。これらのコマンドを使用することで、ユーザーはシリアルデバイスまたはメインMCUにスクリプトを追加して製品の設定を行ったり、ネットワーク経由でW55RP20-S2Eモジュールを制御するプログラムを作成したりできます。

各コマンドはパラメータによって読取り/書込みの操作が可能で、読取り専用コマンドも存在します。

コマンドの入力およびシリアルポートデバイスのコマンドモードへの切替は、**データUART**ポートを使用して行います。**Debug UART**ポートではコマンドの入力や操作はサポートされていません。

シリアルおよびEthernetネットワーク経由でコマンドによる製品設定時には同一の2バイト文字列を使用しますが、送信フレーム形式に違いがあります。本書では、すべてのコマンドの説明と各送信方法およびそのフレーム形式について案内します。

異なるコマンドモードは以下の通りです。

- [**シリアルコマンドモードによるデバイス制御**](#シリアルコマンドモードによるデバイス制御)
- [**Ethernetネットワークによるデバイス制御**](#Ethernetネットワークを利用したデバイス制御)

1. WIZnetが提供する**設定ツール**は、W55RP20-S2Eを制御するために同一のコマンドセットを使用します。

2. 例えば、MACアドレスを確認する**MC**コマンドや、Firmwareを確認する**VR**コマンドは同一です。

### 略語

| 略語        | 説明                                                                                 |
| :---------: | ------------------------------------------------------------------------------------ |
| CR          | キャリッジリターン、カーソルを行頭（開始位置）に移動（'\\r', 0x0D）                   |
| LF          | ラインフィード、カーソルを下の新しい行に移動（'\\n', 0x0A）                           |
| N           | コマンド数                                                                           |
| RW          | 読取り / 書込み                                                                      |
| RO          | 読取り専用                                                                           |
| WO          | 書込み専用                                                                           |

-----

## コマンドセットの使用方法

### シリアルコマンドモードによるデバイス制御

以下の2つの方法のいずれかでシリアルコマンドモードに入ることができます。

**1. ハードウェアトリガピンを使用してコマンドモードに入る**

- W55RP20-S2EのHW_TRIGピンを使用してコマンドモードに入ります。
- 電源投入時にピンを確認し、コマンドモードに入ります。リブート時にもトリガピンを使って再度コマンドモードに入ることができます。
- トリガピンはプルアップし、Lowアクティブで動作します。
- この方法は、製品動作中に設定を変更したい場合に使用します。

```
- ハードウェアHW_TRIGピンをLowに設定します。

- W55RP20-S2Eの電源を入れます。
· シリアルコマンドモードで動作している場合、Debug UARTポートで以下のメッセージを確認できます。
· <code>> SEG:AT Mode </code>

- シリアルポート（データUARTポート）から設定が必要なコマンドとパラメータを入力します。

- [[#ex|EX]]コマンドを使用してデータ伝送モード（GWモード）に切り替えます。
· データ伝送モードへの切替が成功すると、Debug UARTポートで以下のメッセージを確認できます。
· <code>> SEG:GW Mode </code>
```

**2. コマンドモードスイッチコードを使用してコマンドモードに入る**

- W55RP20-S2Eが提供するコマンドモードスイッチコードを使用してコマンドモードに入ることができます。
- コマンドモードスイッチコードは、設定ツールで有効化されている場合のみ使用可能です。（**デフォルト：有効**）
- コマンドモードスイッチコードは3バイトのHexコードで構成されており、必要に応じて別の値に変更できます。コードはHex値のみ受け付けます。（**デフォルト：Hex \[2B\]\[2B\]\[2B**\]）

```
- 設定ツールで「シリアルコマンドモードスイッチコード」が有効か、および3バイトの「コマンドモードスイッチコード」を確認します。

- データUARTポートから「コマンドモードスイッチコード」を入力してモードを切り替えます。
· コマンドモードへの切替時の注意事項は下記参照。
· シリアルコマンドモードで動作している場合、Debug UARTポートで以下のメッセージを確認できます。
· <code>> SEG:AT Mode </code>

- シリアルポートから設定が必要なコマンドとパラメータを入力します。

- [[#ex|EX]]コマンドを使用してデータ伝送モードに切り替えます。
· データ伝送モードで動作している場合、Debug UARTポートで以下のメッセージを確認できます。
· <code>> SEG:GW Mode </code>
```

1. データUARTポートによるコマンドモードスイッチトリガコード

2. 文字列 '+++'

**トリガコードを使用してコマンドモードを切り替える際はご注意ください。**

```
- 「コマンドモードスイッチコード」の開始と終了には、**少なくとも500ms**の時間間隔が必要です。これによりスイッチコードとして認識されます。

- 「3バイトコマンドモードスイッチコード」の各バイト間の入力時間は**500ms未満**でなければなりません。

- コマンドモードスイッチコードの末尾にCRやLFを追加しないでください（逆に、モード切替後のシリアルコマンドは必ずCRまたはLFで終了してください）。

- 上記1と2のデフォルト値は**500ms**です。これらの値は、シリアルデータパッキングオプションのタイマー値が設定されている場合、そのタイマー値に変更されます。
```

#### シリアルコマンドフレーム形式

各コマンドの末尾にはCRおよびLFを必ず含めてください。複数のコマンドを同時に入力する場合も、各コマンドの末尾にCRおよびLFを含める必要があります。

##### Getリクエスト

    [2バイトコマンドコード] [CR] [LF]
- パラメータなしでコマンドを入力してください。
- コマンドに関連する応答が返されます。

##### 設定リクエスト

    [2バイト コマンドコード] [パラメータ] [CR] [LF]

- 設定したいコマンドおよびパラメータを入力してください。
- 特に応答はなく、コマンドに関連するフィールド値が即座に変更されます。
- 設定を保存するには**[SV](#sv)**コマンドを、IP割り当て方式やその他初期動作の変更には**[RT](#rt)**コマンドを使用してください。

\* 注: UARTコマンドのエコーバックは**[EC](#ec)**コマンドで確認できます。

-----

### Ethernetネットワークを利用したデバイス制御

ユーザーは、下記のコマンドを用いてEthernet経由でW55RP20-S2Eを制御または監視できます。コマンド送信には**UDP**または**TCPClient **を使用し、コマンド処理用のポート番号は**50001**です。

**コマンド送信用ネットワーク情報:** **UDP / TCPサーバー : 50001**（ユーザーはデバイスに対しUDP/TCPClient でコマンド送信が可能）

#### Ethernetコマンドフレームフォーマット

W55RP20-S2EをEthernet経由で制御する際は、コマンドコード送信前に2つの追加コマンドが必要です。他の設定や動作は、データUARTポート経由でシリアルコマンドコードを送信する場合と同じです。

追加される2つのコマンドは**MA**と**PW**です。

- **\[MA\] コマンド**
- このフィールドは**製品のMACアドレス**を示します。
- TCPおよびUDPいずれの場合も、2バイトのMAコマンドの後に6バイトのMACアドレスを含める必要があります。
- ユーザーがUDP経由でGetリクエストのみをブロードキャストしたい場合、該当フィールド値をブロードキャストMACアドレスに設定可能です。複数のピアから応答を受け取れます。設定ツールの検索機能はこのように実装されています。

- **\[PW\] コマンド**

1. デバイスコマンド処理のため、ユーザーはUDPまたはTCPClient を使用する必要があります（UDPまたはTCPサーバーが動作中）。

2. データはブロードキャストIPアドレス255.255.255.255に送信され、同一ネットワーク内のすべてのピアに送信可能です。

3. FF:FF:FF:FF:FF:FF

4. 0x20の16進数はASCIIコードで空白を意味します。

##### Getリクエスト

**単一コマンド送信時**

MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] [Command] [CR] [LF]

**複数コマンド送信時**

MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] ([Command] [CR] [LF]) * コマンド数

- ‘Getリクエスト’の応答は、‘リクエスト’と同一形式でパラメータが含まれます。

##### 設定リクエスト

**単一コマンド送信時**

MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] [Command] [Parameters] [CR] [LF]

**複数コマンド送信時**

MA [MAC] [CR] [LF] PW [Search ID] [CR] [LF] ([Command] [Parameters] [CR] [LF]) * コマンド数

- ‘設定リクエスト’では、製品設定変更に対する追加応答は不要です。
- 変更後の設定を確認したい場合は、‘設定リクエストフレーム’の最後にパラメータなしのコマンドを送信してください（Set＋Getリクエスト形式）。

#### Ethernetコマンド例

##### 例1：UDP Getコマンドフレーム

- UDP経由で複数デバイスからMACおよびローカルIPを取得する場合
- Search IDは未使用

| ユーザーからのリクエスト |
| ---------------------- |

**コマンドフレーム**

MA [FF FF FF FF FF FF] [CR] [LF] PW [ ] [CR] [LF] MC [CR] [LF] LI [CR] [LF]

**コマンドフレームのHexコード版**

4D 41 FF FF FF FF FF FF 0D 0A 50 57 20 0D 0A 4D 43 0D 0A 4C 49 0D 0A

| W55RP20-S2Eからの応答 |
| ---------------------- |

1. ‘Getリクエスト’の応答は‘設定リクエスト’と同じ形式です。

**コマンドフレーム**

MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] MC [00 08 DC 00 00 11] [CR] [LF] LI [192.168.11.2] [CR] [LF]

**コマンドフレームのHexコード版**

4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4D 43 00 08 DC 00 00 11 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 32 0D 0A

##### 例2：TCP Getコマンドフレーム

- MACアドレスが00:08:DC:00:00:11のデバイスのローカルIPをTCP経由で取得する場合
- Search IDは未使用

| ユーザーからのリクエスト |
| ---------------------- |

**コマンドフレーム**

MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] LI [CR] [LF]

**コマンドフレームのHexコード版**

4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4C 49 0D 0A

| W55RP20-S2Eからの応答 |
| ---------------------- |

**コマンドフレーム**

MA [00 08 DC 00 00 11] [CR] [LF] PW [ ] [CR] [LF] LI [192.168.11.2] [CR] [LF]

**コマンドフレームのHexコード版**

4D 41 00 08 DC 00 00 11 0D 0A 50 57 20 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 32 0D 0A

##### 例3：TCP Setコマンドフレーム

- MACアドレスが00:08:DC:00:00:11のデバイスのローカルIPをTCP経由で取得する場合
- Search IDをHELLOに設定する場合
- またはローカルIPを192.168.11.5に変更する場合

| ユーザーからのリクエスト |
| ---------------------- |

**コマンドフレーム**

MA [00 08 DC 00 00 11] [CR] [LF] PW [HELLO] [CR] [LF] LI [192.168.11.5] [CR] [LF]

**コマンドフレームのHexコード版**

4D 41 00 08 DC 00 00 11 0D 0A 50 57 48 45 4C 4C 4F 0D 0A 4C 49 31 39 32 2E 31 36 38 2E 31 31 2E 35 0D 0A

| W55RP20-S2Eからの応答 |
| ------------------- |

なし

**IPアドレス形式を変更する際は、‘192.168.11.5’のように‘.’（ドット、0x2E）を必ず含めてください。**

-----

## コマンドリスト
- コマンド入力時にパラメータが含まれている場合、Setコマンドは該当値の設定を行います。
- コマンドのみを入力した場合、Getコマンドは該当値の読み取りを行います。
- 「Read only」表示がない場合、そのコマンドはGet / Setの両方に対応しています。
- Write onlyコマンドは、パラメータなしで製品を制御するためのものです。
- 基本コマンドリストと拡張コマンドリストがあります。
- コマンドモードでのIP割り当て設定やDNS動作設定などの設定は、**[SV](#sv)**コマンドで保存後、**[RT](#rt)**コマンドによる「モジュール再起動」が必要です。

1. IPアドレス、ゲートウェイアドレス、サブネットマスク、DNSサーバーアドレス、リモートIPアドレスなどのIPv4アドレス形式。

2. 設定保存、再起動、モード切替、工場出荷時リセットなど。

3. WIZ107SR / WIZ108SRの同期コマンドリスト（\[UN\]、\[UI\]コマンドを除く）

4. WIZ750SR / WIZ750SR-1xx / WIZ750SR-12xの同期コマンドリスト（\[UN\]、\[UI\]コマンドを含む）

5. WIZ510SSLの同期コマンドリスト（\[UN\]、\[UI\]コマンドを含む）

6. W55RP20-S2E専用コマンドリスト

7. リモートピアアドレスをIPアドレスからドメインに変更した場合

### 基本コマンド
<table>
<thead>
<tr class="header">
<th>コマンド</th>
<th>カテゴリ</th>
<th>説明</th>
<th>タイプ</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center"><a href="#mc">MC</a></td>
<td align="center">デバイス情報</td>
<td>MACアドレス</td>
<td align="center">RO</td>
</tr>
<tr class="even">
<td align="center"><a href="#vr">VR</a></td>
<td align="center">:::</td>
<td>Firmwareバージョン</td>
<td align="center">RO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#mn">MN</a></td>
<td align="center">:::</td>
<td>製品名</td>
<td align="center">RO</td>
</tr>
<tr class="even">
<td align="center"v><a href="#st">ST</a></td>
<td align="center">:::</td>
<td>動作状態</td>
<td align="center">RO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#un">UN</a></td>
<td align="center">:::</td>
<td>UARTインターフェース（文字列）</td>
<td align="center">RO</td>
</tr>
<tr class="even">
<td align="center"><a href="#ui">UI</a></td>
<td align="center">:::</td>
<td>UARTインターフェース（コード）</td>
<td align="center">RO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#op">OP</a></td>
<td align="center">ネットワーク設定</td>
<td>ネットワーク動作モード</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#im">IM</a></td>
<td align="center">:::</td>
<td>IPアドレス割当方法（静的/DHCP）</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#li">LI</a></td>
<td align="center">:::</td>
<td>ローカルIPアドレス</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#sm">SM</a></td>
<td align="center">:::</td>
<td>サブネットマスク</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#gw">GW</a></td>
<td align="center">:::</td>
<td>ゲートウェイアドレス</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#ds">DS</a></td>
<td align="center">:::</td>
<td>DNSサーバーアドレス</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#lp">LP</a></td>
<td align="center">:::</td>
<td>ローカルポート番号</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#rh">RH</a></td>
<td align="center">:::</td>
<td>リモートホストIPアドレス／ドメイン</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#rp">RP</a></td>
<td align="center">:::</td>
<td>リモートホストポート番号</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#br">BR</a></td>
<td align="center">データUART設定</td>
<td>UARTボーレート</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#db">DB</a></td>
<td align="center">:::</td>
<td>UARTデータビット</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#pr">PR</a></td>
<td align="center">:::</td>
<td>UARTパリティビット</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#sb">SB</a></td>
<td align="center">:::</td>
<td>UARTストップビット</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#fl">FL</a></td>
<td align="center">:::</td>
<td>UARTフロー制御</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#ec">EC</a></td>
<td align="center">:::</td>
<td>UARTエコーバック有効</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#pt">PT</a></td>
<td align="center">シリアルデータパッキングオプション</td>
<td>タイムデリミタ</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#ps">PS</a></td>
<td align="center">:::</td>
<td>サイズデリミタ</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#pd">PD</a></td>
<td align="center">:::</td>
<td>文字デリミタ</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#it">IT</a></td>
<td align="center">オプション</td>
<td>無通信タイマー値</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#ri">RI</a></td>
<td align="center">:::</td>
<td>TCP再接続間隔<br/>
（TCPClient のみ）</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#cp">CP</a></td>
<td align="center">:::</td>
<td>接続パスワード有効（TCPサーバーのみ）</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#np">NP</a></td>
<td align="center">:::</td>
<td>接続パスワード（TCPサーバーのみ）</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#sp">SP</a></td>
<td align="center">:::</td>
<td>検索IDコード</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#dg">DG</a></td>
<td align="center">:::</td>
<td>シリアルデバッグメッセージ有効</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#ka">KA</a></td>
<td align="center">:::</td>
<td>TCPKeep-Alive有効</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#ki">KI</a></td>
<td align="center">:::</td>
<td>TCPKeep-Alive初期間隔</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#ke">KE</a></td>
<td align="center">:::</td>
<td>TCPKeep-Alive再試行間隔</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#so">SO</a></td>
<td align="center">:::</td>
<td>SSL受信タイムアウト</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#po">PO</a></td>
<td align="center">Modbus設定</td>
<td>Modbusプロトコルタイプを選択（None / RTU / ASCII）</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#qu">QU</a></td>
<td align="center">MQTT設定</td>
<td>MQTTユーザー名</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#qp">QP</a></td>
<td align="center">:::</td>
<td>MQTTパスワード</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#qc">QC</a></td>
<td align="center">:::</td>
<td>MQTTClient ID</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#qk">QK</a></td>
<td align="center">:::</td>
<td>MQTTKeep-Alive</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#pu">PU</a></td>
<td align="center">:::</td>
<td>MQTTPublish Topic</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#u0">U0</a></td>
<td align="center">:::</td>
<td>MQTTSubscribe Topic1</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#u1">U1</a></td>
<td align="center">:::</td>
<td>MQTTSubscribe Topic2</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#u2">U2</a></td>
<td align="center">:::</td>
<td>MQTTSubscribe Topic3</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#qo">QO</a></td>
<td align="center">:::</td>
<td>MQTT QoSレベル</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#rc">RC</a></td>
<td align="center">証明書設定</td>
<td>Root CA検証オプション</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#ce">CE</a></td>
<td align="center">:::</td>
<td>Client 証明書有効化</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#oc">OC</a></td>
<td align="center">:::</td>
<td>Root CA</td>
<td align="center">WO</td>
</tr>
<tr class="even">
<td align="center"><a href="#lc">LC</a></td>
<td align="center">:::</td>
<td>Client 証明書</td>
<td align="center">WO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#pk">PK</a></td>
<td align="center">:::</td>
<td>秘密鍵</td>
<td align="center">WO</td>
</tr>
<tr class="even">
<td align="center"><a href="#te">TE</a></td>
<td align="center">コマンドモード切替設定</td>
<td>コマンドモード切替コード有効化</td>
<td align="center">RW</td>
</tr>
<tr class="odd">
<td align="center"><a href="#ss">SS</a></td>
<td align="center">:::</td>
<td>コマンドモード切替コード（3バイトHex）</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#ex">EX</a></td>
<td align="center">デバイス制御</td>
<td>コマンドモード終了（データ転送モードへ切替）</td>
<td align="center">WO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#sv">SV</a></td>
<td align="center">:::</td>
<td>デバイス設定保存</td>
<td align="center">WO</td>
</tr>
<tr class="even">
<td align="center"><a href="#rt">RT</a></td>
<td align="center">:::</td>
<td>デバイス再起動</td>
<td align="center">WO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#fr">FR</a></td>
<td align="center">:::</td>
<td>デバイス工場出荷時リセット</td>
<td align="center">WO</td>
</tr>
</tbody>
</table>

### 拡張コマンド

<table>
<thead>
<tr class="header">
<th>コマンド</th>
<th>カテゴリ</th>
<th>説明</th>
<th>タイプ</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center"><a href="#sc">SC</a></td>
<td align="center">ステータスI/O</td>
<td>ステータスピンS0 &amp; S1動作モード設定</td>
<td align="center">RW</td>
</tr>
<tr class="even">
<td align="center"><a href="#s0">S0</a></td>
<td align="center">:::</td>
<td>ピンS0のステータス（PHYリンクまたはDTR）</td>
<td align="center">RO</td>
</tr>
<tr class="odd">
<td align="center"><a href="#s1">S1</a></td>
<td align="center">:::</td>
<td>ピンS1のステータス（TCP接続またはDSR）</td>
<td align="center">RO</td>
</tr>
</tbody>
</table>

-----

## コマンド説明

### デバイス情報

---

#### MC

---

- **フォーマット:** `MC[CR][LF]`

- **意味:** 製品のMACアドレスを確認

- **コマンドタイプ:** 読み取り専用

- **戻り値タイプ:** 文字列

- **戻り値:**

コロン（:）付きのMACアドレス

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `MC00:08:DC:00:00:01\r\n`

---

#### VR

---

- **フォーマット:** `VR[CR][LF]`

- **意味:** 製品のFirmwareバージョンを確認

- **コマンドタイプ:** 読み取り専用

- **戻り値タイプ:** 文字列

- **戻り値:**

ドット（.）付きのFirmwareバージョン

⇒ メジャーバージョン番号 . マイナーバージョン番号 . メンテナンスバージョン番号

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `VR1.0.0\r\n`

---

#### MN

---

- **フォーマット:** `MN[CR][LF]`

- **意味:** 製品名を確認

- **コマンドタイプ:** 読み取り専用

- **戻り値タイプ:** 文字列

- **戻り値:**

デバイスモデル名

⇒ デフォルト: WIZ5XXRSR-RP

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `MNWIZ5XXRSR-RP\r\n`

---

#### ST

---

- **フォーマット:** `ST[CR][LF]`

- **意味:** 製品の動作状況を確認

- **コマンドタイプ:** 読み取り専用

- **戻り値タイプ:** 文字列

- **戻り値:**
| ステータス | 説明                                                         |
| :--------: | ------------------------------------------------------------ |
| BOOT       | ブートモード。ユーザーは製品の設定やFirmwareを更新可能。 |
| OPEN       | TCP接続が成功する前の状態。                                   |
| CONNECT    | TCP接続が成功した後の状態。                                   |
| UPGRADE    | Firmware更新中またはDHCP IP割り当て中の状態。           |
| ATMODE     | シリアルATコマンドモードの状態。                             |

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `STATMODE\r\n`

---

#### UN

---

- **フォーマット:** `UN[CR][LF]`

- **意味:** 製品のUARTインターフェースを確認

- **コマンドタイプ:** 読み取り専用

- **返却タイプ:** 文字列

- **返却値:**

| UARTインターフェース | 説明                                                        |
| :------------------: | ----------------------------------------------------------- |
| RS-232/TTL           | デバイスはRS-232CまたはTTL信号のUART入出力に対応。           |
| RS-422/485           | デバイスはRS-422およびRS-485信号のUART入出力に対応。         |

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `UNRS-232/TTL\r\n`

---

#### UI

---

- **フォーマット:** `UI[CR][LF]`

- **意味:** 製品のUARTインターフェースを確認

- **コマンドタイプ:** 読み取り専用

- **返却タイプ:** 文字列

- **返却値:**

| 返却値 | 説明                                                        | 備考        |
| :----: | ----------------------------------------------------------- | :---------: |
| 0      | デバイスはRS-232またはTTL信号のUART入出力に対応。            | RS-232/TTL  |
| 1      | デバイスはRS-422およびRS-485信号のUART入出力に対応。         | RS-422/485  |

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `UI0\r\n`

### ネットワーク設定

---

#### OP

---

- **フォーマット:** `OP<パラメータ>[CR][LF]`

- **意味:** 製品のネットワーク動作モード

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 返却タイプ:** 数値 (0 ~ 6)

- **パラメータ / 返却値:**

<table>
<thead>
<tr class="header">
<th>パラメータ /<br/>
返却値</th>
<th>意味</th>
<th>備考</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>TCPClient モード</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>TCPサーバーモード</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">2</td>
<td>TCP混合モード</td>
<td align="center">TCPサーバー/Client 混合モード</td>
</tr>
<tr class="even">
<td align="center">3</td>
<td>UDPモード</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">4</td>
<td>SSL TCPClient モード</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">5</td>
<td>MQTTClient モード</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">6</td>
<td>MQTTSClient モード</td>
<td align="center">-</td>
</tr>
</tbody>
</table>

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `OP0\r\n`

**パラメータあり（設定）**
- レスポンスなし
- ネットワーク動作モードを変更

---

#### IM

---

- **フォーマット:** `IM<パラメータ>[CR][LF]`

- **意味:** 製品のIPアドレス割り当て方式

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 返却タイプ:** 数値 (0 / 1)

- **パラメータ / 返却値:**

<table>
<thead>
<tr class="header">
<th>パラメータ /<br/>
返却値</th>
<th>意味</th>
<th>備考</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>静的</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>DHCP</td>
<td align="center">IPアドレスを自動取得</td>
</tr>
</tbody>
</table>

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `IM0\r\n`

**パラメータあり（設定）**
- レスポンスなし
- 製品のIPアドレス割り当て方式を変更

---

#### LI

---

- **フォーマット:** `LI<パラメータ>[CR][LF]`

- **意味:** 製品のIPアドレス

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 返却タイプ:** IPv4アドレス形式の文字列（ドット含む）

- **パラメータ / 返却値:**

例> 192.168.11.2

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `LI192.168.11.2\r\n`

**パラメータあり（設定）**
- レスポンスなし
- 製品のIPアドレスを変更

---

#### SM

---

- **フォーマット:** `SM<パラメータ>[CR][LF]`

- **意味:** 製品のサブネットマスク

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 返却タイプ:** IPv4アドレス形式の文字列（ドット含む）

- **パラメータ / 返却値:**

例> 255.255.255.0

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `SM255.255.255.0\r\n`

**パラメータあり（設定）**
- レスポンスなし
- 製品のサブネットマスクを変更

---

#### GW

---

- **フォーマット:** `GW<パラメータ>[CR][LF]`

- **意味:** 製品のゲートウェイアドレス

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 返却タイプ:** IPv4アドレス形式の文字列（ドット含む）

- **パラメータ / 返却値:**

例> 192.168.11.1

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `GW192.168.11.1\r\n`

**パラメータあり（設定）**
- レスポンスなし
- 製品のゲートウェイアドレスを変更

---

#### DS

---

- **フォーマット:** `DS<パラメータ>[CR][LF]`

- **意味:** 製品のDNSアドレス

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 返却タイプ:** IPv4アドレス形式の文字列（ドット含む）

- **パラメータ / 返却値:**

例> 8.8.8.8

Google Public DNS (IPv4)
- 8.8.8.8
- 8.8.4.4

- **レスポンス**

**パラメータなし（取得）**
- ASCIIの場合: `DS8.8.8.8\r\n`

**パラメータあり（設定）**
- レスポンスなし
- 製品のDNSを変更

---

#### LP

---

- **フォーマット:** `LP<パラメータ>[CR][LF]`

- **意味:** 製品のポート番号
- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 ~ 65535)

- **パラメータ / 戻り値:**

例＞ 5000

- **応答**

**パラメータなし（取得時）**
- ASCIIの場合: `LP5000\r\n`

**パラメータあり（設定時）**
- 応答なし
- 製品のポート番号を変更

---

#### RH

---

- **フォーマット:** `RH<パラメータ>[CR][LF]`

- **意味:** 製品のリモートホストIPアドレス / ドメイン名

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** IPv4アドレス形式（ドット含む）の文字列 または ドメイン文字列

- **パラメータ / 戻り値:**

例＞ 192.168.11.3

- **応答**

**パラメータなし（取得時）**
- ASCIIの場合: `RH192.168.11.3\r\n`

**パラメータあり（設定時）**
- 応答なし
- 製品のリモートホストIPアドレスを変更

---

#### RP

---

- **フォーマット:** `RP<パラメータ>[CR][LF]`

- **意味:** 製品のリモートホストポート番号

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 ~ 65535)

- **パラメータ / 戻り値:**

例＞ 5000

- **応答**

**パラメータなし（取得時）**
- ASCIIの場合: `RP5000\r\n`

**パラメータあり（設定時）**
- 応答なし
- 製品のリモートホストポート番号を変更

### データUART設定

---

#### BR

---

- **フォーマット:** `BR<パラメータ>[CR][LF]`

- **意味:** シリアルインターフェース（データUART）のボーレート

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 ~ 13)

- **パラメータ / 戻り値:**

<table>
<thead>
<tr class="header">
<th>パラメータ /<br/>
戻り値</th>
<th>ボーレート</th>
<th>備考</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>300</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>600</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">2</td>
<td>1200</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">3</td>
<td>1800</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">4</td>
<td>2400</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">5</td>
<td>4800</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">6</td>
<td>9600</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">7</td>
<td>14400</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">8</td>
<td>19200</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">9</td>
<td>28800</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">10</td>
<td>38400</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">11</td>
<td>57600</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">12</td>
<td>115200</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">13</td>
<td>230400</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">14</td>
<td>460800</td>
<td align="center">-</td>
</tr>
</tbody>
</table>

- **応答**

**パラメータなし（取得時）**
- ASCIIの場合: `BR12\r\n`

**パラメータあり（設定時）**
- 応答なし
- シリアルインターフェースのボーレートを変更

---

#### DB

---

- **フォーマット:** `DB<パラメータ>[CR][LF]`

- **意味:** シリアルインターフェース（データUART）のデータビット

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 / 1)

- **パラメータ / 戻り値:**

<table>
<thead>
<tr class="header">
<th>パラメータ /<br/>
戻り値</th>
<th>データビット</th>
<th>備考</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>7ビット</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>8ビット</td>
<td align="center">-</td>
</tr>
</tbody>
</table>

- **応答**

**パラメータなし（取得時）**
- ASCIIの場合: `DB1\r\n`

**パラメータあり（設定時）**
- 応答なし
- シリアルインターフェースのデータビットを変更

---

#### PR

---

- **フォーマット:** `PR<パラメータ>[CR][LF]`

- **意味:** シリアルインターフェース（データUART）のパリティビット

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 ~ 2)

- **パラメータ / 戻り値:**

<table>
<thead>
<tr class="header">
<th>パラメータ /<br/>
戻り値</th>
<th>パリティビット</th>
<th>備考</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>なし</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>奇数</td>
<td align="center">-</td>
</tr>
<tr class="odd">
<td align="center">2</td>
<td>偶数</td>
<td align="center">-</td>
</tr>
</tbody>
</table>

- **応答**

**パラメータなし（取得時）**
- ASCIIの場合: `PR0\r\n`

**パラメータあり（設定時）**
- 応答なし
- シリアルインターフェースのパリティビットを変更

---

#### SB

---

- **フォーマット:** `SB<パラメータ>[CR][LF]`

- **意味:** シリアルインターフェース（データUART）のストップビット

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 / 1)

- **パラメータ / 戻り値:**

<table>
<thead>
<tr class="header">
<th>パラメータ /<br/>
戻り値</th>
<th>ストップビット</th>
<th>備考</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>1ビット</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>2ビット</td>
<td align="center">-</td>
</tr>
</tbody>
</table>

- **応答**

**パラメータなし（取得時）**
- ASCIIの場合: `SB0\r\n`

**パラメータあり（設定時）**
- 応答なし
- シリアルインターフェースのストップビットを変更

---

#### FL

---

- **フォーマット:** `FL<パラメータ>[CR][LF]`

- **意味:** シリアルインターフェース（データUART）のフロー制御 / （RS-232/TTLインターフェースのみ）

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 ~ 4)
<table>
<thead>
<tr class="header">
<th>パラメータ /<br/>
戻り値</th>
<th>フロー制御</th>
<th>備考</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="center">0</td>
<td>なし</td>
<td align="center">-</td>
</tr>
<tr class="even">
<td align="center">1</td>
<td>XON/XOFF</td>
<td align="center">ソフトウェアフロー制御</td>
</tr>
<tr class="odd">
<td align="center">2</td>
<td>RTS/CTS</td>
<td align="center">ハードウェアフロー制御</td>
</tr>
<tr class="even">
<td align="center">3</td>
<td>RTS on TX</td>
<td align="center">ハードウェアフロー制御</td>
</tr>
<tr class="odd">
<td align="center">4</td>
<td>RTS on TX(反転)</td>
<td align="center">ハードウェアフロー制御</td>
</tr>
</tbody>
</table>

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `FL0\r\n`

**パラメータ指定（設定）**
- 応答なし
- シリアルインターフェースのフロー制御を変更

---

#### EC

---

- **フォーマット:** `EC<パラメータ>[CR][LF]`

- **意味:** UARTエコーバック機能有効化（データUART）

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値タイプ:** 数値 (0 / 1)

- **パラメータ / 戻り値:**

0: 使用しない（無効）
1: 使用する（有効）

このオプションが有効な場合、受信したシリアルデータはシリアルポート（データUART）経由でエコーバックされます。
この機能は、ユーザーがシリアルコマンドモードで入力した内容を確認するために利用できます。

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `EC0\r\n`

**パラメータ指定（設定）**
- 応答なし
- UARTエコーバック機能の有効/無効を変更

### シリアルデータパッキングオプション

---

#### PT

---

- **フォーマット:** `PT<パラメータ>[CR][LF]`

- **意味:** シリアルインターフェース（データUART）のデータパッキング - 時間デリミタ

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値タイプ:** 数値 (0 ~ 65535)

- **パラメータ / 戻り値:**

0: 使用しない
1 ~ 65535: データパッキング時間（単位：ミリ秒）

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `PT0\r\n`

**パラメータ指定（設定）**
- なし
- シリアルデータパッキングの時間デリミタ値を変更

---

#### PS

---

- **フォーマット:** `PS<パラメータ>[CR][LF]`

- **意味:** シリアルインターフェース（データUART）のデータパッキング - データサイズデリミタ

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値タイプ:** 数値 (0 ~ 255)

- **パラメータ / 戻り値:**

0: 使用しない
1 ~ 255: データパッキングサイズ（単位：バイト）

1. 受信したシリアルデータは、指定された時間が経過するまで蓄積され、一括してEthernet経由で送信されます。この時間はシリアルデータの受信が停止した時点からカウントされ、指定時間内に追加のシリアルデータを受信した場合はカウントがリセットされます。
2. 受信したシリアルデータは、指定されたデータ長に達するまで蓄積され、一括してEthernet経由で送信されます。

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `PS0\r\n`

**パラメータ指定（設定）**
- なし
- シリアルデータパッキングのデータサイズを変更

---

#### PD

---

- **フォーマット:** `PD<パラメータ>[CR][LF]`

- **意味:** シリアルインターフェース（データUART）のデータパッキング - 指定文字デリミタ

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値タイプ:** 1バイト文字（16進のみ）

- **パラメータ / 戻り値:**

00: 使用しない
その他: 指定文字

指定文字はデータに含まれません。

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `PD00\r\n`

**パラメータ指定（設定）**
- なし
- シリアルデータパッキングの指定文字デリミタを変更

受信したシリアルデータは、指定された文字を受信するまで蓄積され、一括してEthernet経由で送信されます。

### オプション

---

#### IT

---

- **フォーマット:** `IT<パラメータ>[CR][LF]`

- **意味:** データのやり取りがない場合のTCP接続切断用アイドルタイマー値

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値タイプ:** 数値 (0 ~ 65535)

- **パラメータ / 戻り値:**

0: 使用しない
1 ~ 65535: アイドルタイマー値（単位：秒）

タイマーが有効な場合、データのやり取りがないとTCP接続が切断されます。
設定したアイドルタイマー値に達する前にEthernetデータのやり取りがあれば、タイマーはリセットされます。

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `IT0\r\n`

**パラメータ指定（設定）**
- 応答なし
- アイドルタイマー値を変更

---

#### CP

---

- **フォーマット:** `CP<パラメータ>[CR][LF]`

- **意味:** TCP接続パスワード有効化（TCPサーバーモードのみ）

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値タイプ:** 数値 (0 / 1)

- **パラメータ / 戻り値:**

0: 使用しない（無効）
1: 使用する（有効）

このオプションは、製品が**TCPサーバー**として動作している場合のみ適用されます。
有効な場合、デバイスに接続を希望するTCPClient は、まずTCP接続パスワードと確認情報を送信しなければ、実際のデータ送信ができません。

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `CP0\r\n`

**パラメータ指定（設定）**
- 応答なし
- TCP接続パスワードの有効/無効を変更

---

#### NP

---

- **フォーマット:** `NP<パラメータ>[CR][LF]`

- **意味:** TCP接続パスワード（TCPサーバーモードのみ）

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値タイプ:** 文字列（最大8バイト）

- **パラメータ / 戻り値:** デフォルト：なし（null）

このオプションは、製品が**TCPサーバー**として動作している場合のみ適用されます。
パスワードは最大8文字まで設定可能です。

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `NP\r\n`

**パラメータ指定（設定）**
- 応答なし
- TCP接続パスワードを変更

---

#### SP

---

- **フォーマット:** `SP<パラメータ>[CR][LF]`

- **意味:** 検索識別コード

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値タイプ:** 文字列（最大8バイト）
- **パラメータ / 戻り値:** デフォルト: なし(null)

このオプションが有効な場合、設定ツールによる製品検索ではIDが一致する製品のみが検索されます。
検索IDコードは最大8文字まで指定できます。

- **応答**

**パラメータなし (Get)**
- ASCII表記: `SP\r\n`

**パラメータあり (Set)**
- 応答なし
- 検索IDコードを変更

---

#### DG

---

- **フォーマット:** `DG<パラメータ>[CR][LF]`

- **意味:** シリアルデバッグメッセージ有効化（Debug UART）

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 / 1)

- **パラメータ / 戻り値:**

0: 使用しない（無効）
1: 使用する（有効）

このオプションが有効な場合、製品設定やエラーメッセージがDebug UARTポートから出力されます。

- **応答**

**パラメータなし (Get)**
- ASCII表記: `DG1\r\n`

**パラメータあり (Set)**
- 応答なし
- シリアルデバッグメッセージの有効/無効を変更

---

#### KA

---

- **フォーマット:** `KA<パラメータ>[CR][LF]`

- **意味:** TCP接続確立確認のためのKeep-Aliveパケット送信有効化

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 / 1)

- **パラメータ / 戻り値:**

0: 使用しない（無効）
1: 使用する（有効）

このオプションが有効な場合、指定された間隔([KI](#ki) / [KE](#ke))でTCP接続相手にKeep-Aliveパケットが送信されます。
相手から応答がない場合はTCP接続を切断し、ソケットを初期化（ソケットオープン）します。

- **応答**

**パラメータなし (Get)**
- ASCII表記: `KA1\r\n`

**パラメータあり (Set)**
- 応答なし
- Keep-Aliveパケット送信の有効/無効を変更

---

#### KI

---

- **フォーマット:** `KI<パラメータ>[CR][LF]`

- **意味:** 初回TCPKeep-Aliveパケット送信間隔値

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 ~ 65535)

- **パラメータ / 戻り値:**

0: 使用しない
1 ~ 65535: 初回Keep-Aliveパケット送信間隔（単位：ミリ秒）

指定されたパケット送信間隔でTCP接続相手にKeep-Aliveパケットが送信されます。
Keep-Aliveパケット送信は、Ethernetデータ送信が1回以上行われた場合のみ有効となります。

- **応答**

**パラメータなし (Get)**
- ASCII表記: `KI7000\r\n`

**パラメータあり (Set)**
- 応答なし
- 初回Keep-Aliveパケット送信間隔値を変更

---

#### KE

---

- **フォーマット:** `KE<パラメータ>[CR][LF]`

- **意味:** TCPKeep-Aliveパケット再送信間隔値

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 ~ 65535)

- **パラメータ / 戻り値:**

0: 使用しない
1 ~ 65535: Keep-Aliveパケット再送信間隔（単位：ミリ秒）

最初のKeep-Aliveパケット送信後、指定されたパケット送信間隔で次のKeep-AliveパケットがTCP接続相手に送信されます。
Keep-Aliveパケット送信は、Ethernetデータ送信が1回以上行われた場合のみ有効となります。

- **応答**

**パラメータなし (Get)**
- ASCII表記: `KE5000\r\n`

**パラメータあり (Set)**
- 応答なし
- Keep-Aliveパケット再送信間隔値を変更

---

#### SO

---

- **フォーマット:** `SO<パラメータ>[CR][LF]`

- **意味:** SSL接続終了時のSSL受信タイムアウト値

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 ~ 60000)

- **パラメータ / 戻り値:**

0: 使用しない
1 ~ 60000: SSL受信タイムアウト（単位：ミリ秒）

タイムアウトが設定されている場合、SSL受信タイムアウトを超えるとSSL接続が切断されます。

- **応答**

**パラメータなし (Get)**
- ASCII表記: `SO2000\r\n`

**パラメータあり (Set)**
- 応答なし
- SSL受信タイムアウト値を変更

---

#### RI

---

- **フォーマット:** `RI<パラメータ>[CR][LF]`

- **意味:** TCPClient 再接続間隔値（TCPClient のみ）

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 ~ 65535)

- **パラメータ / 戻り値:**

0: 使用しない
1 ~ 65535: TCPClient 再接続間隔（単位：ミリ秒）

TCPClient モード時にサーバーとのTCP接続が確立できなかった場合、次の接続試行までの間隔値を設定します。

- **応答**

**パラメータなし (Get)**
- ASCII表記: `RI3000\r\n`

**パラメータあり (Set)**
- 応答なし
- TCPClient 再接続間隔値を変更

### Modbus設定

---

#### PO

---

- **フォーマット:** `PO<パラメータ>[CR][LF]`

- **意味:** TCPサーバーモード動作時のModbusプロトコルタイプを設定

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 ~ 2)

- **パラメータ / 戻り値:**

| 値   | 説明           |
|:----:|----------------|
| 0    | なし           |
| 1    | Modbus RTU     |
| 2    | Modbus ASCII   |

- **応答**

**パラメータなし (Get)**
- ASCII表記: `PO0\r\n`

**パラメータあり (Set)**
- 応答なし
- Modbusオプションを変更

### MQTT設定

---

#### QU

---

- **フォーマット:** `QU<パラメータ>[CR][LF]`

- **意味:** ブローカー認証で使用されるMQTTユーザー名

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 文字列（最大128バイト）

- **パラメータ / 戻り値:** デフォルト: なし(null)

- **応答**

**パラメータなし (Get)**
- ASCII表記: `QU\r\n`

**パラメータあり (Set)**
- 応答なし
- MQTTユーザー名を変更

---

#### QP

---

- **フォーマット:** `QP<パラメータ>[CR][LF]`

- **意味:** ブローカー認証で使用されるMQTTパスワード

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 文字列（最大128バイト）

- **パラメータ / 戻り値:** デフォルト: なし(null)

- **応答**

**パラメータなし (Get)**
- ASCII表記: `QU\r\n`

**パラメータあり（Set）**  
- 応答なし  
- MQTTパスワードを変更  

---

#### QC

---

- **フォーマット:** `QC<Parameter>[CR][LF]`

- **意味:** ブローカーに接続するMQTTClient ID

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 文字列（最大128バイト）

- **パラメータ / 戻り値:** デフォルト：なし（null）

- **応答**

**パラメータなし（Get）**  
- ASCIIの場合：`QC\r\n`

**パラメータあり（Set）**  
- 応答なし  
- MQTTClient IDを変更  

---

#### QK

---

- **フォーマット:** `QK<Parameter>[CR][LF]`

- **意味:** ブローカーとのMQTTKeep-Alive時間設定

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値（0 ～ 65535）

- **パラメータ / 戻り値:**

例＞ 0

入力数値の単位はミリ秒（ms）

- **応答**

**パラメータなし（Get）**  
- ASCIIの場合：`QK0\r\n`

**パラメータあり（Set）**  
- 応答なし  
- MQTTKeep-Alive時間を変更  

---

#### PU

---

- **フォーマット:** `PU<Parameter>[CR][LF]`

- **意味:** MQTTPublish Topic

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 文字列（最大128バイト）

- **パラメータ / 戻り値:** デフォルト：なし（null）

- **応答**

**パラメータなし（Get）**  
- ASCIIの場合：`PU\r\n`

**パラメータあり（Set）**  
- 応答なし  
- MQTTPublish Topicを変更  

---

#### U0

---

- **フォーマット:** `U0<Parameter>[CR][LF]`

- **意味:** MQTTSubscribe Topic1

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 文字列（最大128バイト）

- **パラメータ / 戻り値:** デフォルト：なし（null）

- **応答**

**パラメータなし（Get）**  
- ASCIIの場合：`U0\r\n`

**パラメータあり（Set）**  
- 応答なし  
- MQTTSubscribe Topicを変更  

---

#### U1

---

- **フォーマット:** `U1<Parameter>[CR][LF]`

- **意味:** MQTTSubscribe Topic2

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 文字列（最大128バイト）

- **パラメータ / 戻り値:** デフォルト：なし（null）

- **応答**

**パラメータなし（Get）**  
- ASCIIの場合：`U1\r\n`

**パラメータあり（Set）**  
- 応答なし  
- MQTTSubscribe Topicを変更  

---

#### U2

---

- **フォーマット:** `U2<Parameter>[CR][LF]`

- **意味:** MQTTSubscribe Topic3

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 文字列（最大128バイト）

- **パラメータ / 戻り値:** デフォルト：なし（null）

- **応答**

**パラメータなし（Get）**  
- ASCIIの場合：`U2\r\n`

**パラメータあり（Set）**  
- 応答なし  
- MQTTSubscribe Topicを変更  

---

#### QO

---

- **フォーマット:** `QO<Parameter>[CR][LF]`

- **意味:** MQTT QoSレベル

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値（0 ～ 2）

- **パラメータ / 戻り値:**

| 戻り値 | 意味  | 備考 |
| :----: | ---- | :--: |
| 0      | QoS0 |  -   |
| 1      | QoS1 |  -   |
| 2      | QoS2 |  -   |

- **応答**

**パラメータなし（Get）**  
- ASCIIの場合：`QO0\r\n`

**パラメータあり（Set）**  
- 応答なし  
- MQTT QoSレベルを変更  

### 証明書設定

---

#### RC

---

- **フォーマット:** `RC<Parameter>[CR][LF]`

- **意味:** SSLClient Root CA検証オプション

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値（0 ～ 2）

- **パラメータ / 戻り値:**

| 戻り値 | 意味                           | 備考 |
| :----: | ----------------------------- | :--: |
| 0      | Client Root CA検証なし   |  -   |
| 1      | Client Root CA検証オプション |  -   |
| 2      | Client Root CA検証必須   |  -   |

- **応答**

**パラメータなし（Get）**  
- ASCIIの場合：`RC0\r\n`

**パラメータあり（Set）**  
- 応答なし  
- SSLClient Root CA検証オプションを変更  

---

#### CE

---

- **フォーマット:** `CE<Parameter>[CR][LF]`

- **意味:** SSLClient 証明書有効化オプション

- **コマンド種別:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値（0 / 1）

- **パラメータ / 戻り値:**

| 戻り値 | 意味                | 備考 |
| :----: | ------------------ | :--: |
| 0      | Client 証明書無効 |  -   |
| 1      | Client 証明書有効 |  -   |

- **応答**

**パラメータなし（Get）**  
- ASCIIの場合：`CE0\r\n`

**パラメータあり（Set）**  
- 応答なし  
- Client 証明書有効化オプションを変更  

---

#### OC

---

- **フォーマット:** `OC[CR][LF]<Parameter>[CR][LF]`

- **意味:** SSLClient Root CA

- **コマンド種別:** 書き込み専用

- **パラメータ / 戻り値の型:** 文字列（最大2048バイト）

- **パラメータ / 戻り値:** デフォルト：なし（null）

ターミナルプログラムのファイル転送機能を使用してClient Root CAを入力することも可能です。

- **応答**

**パラメータなし**  
- 応答なし  
- SSLClient Root CAを変更  

---

#### LC

---

- **フォーマット:** `LC[CR][LF]<Parameter>[CR][LF]`

- **意味:** SSLClient 証明書

- **コマンド種別:** 書き込み専用

- **パラメータ / 戻り値の型:** 文字列（最大2048バイト）

- **パラメータ / 戻り値:** デフォルト：なし（null）

ターミナルプログラムのファイル転送機能を使用してClient 証明書を入力することも可能です。

- **応答**

**パラメータなし**  
- 応答なし  
- SSLClient 証明書を変更  

---

#### PK

---

- **フォーマット:** `PK[CR][LF]<Parameter>[CR][LF]`

- **意味:** SSL秘密鍵

- **コマンド種別:** 書き込み専用

- **パラメータ / 戻り値の型:** 文字列（最大2048バイト）

- **パラメータ / 戻り値:** デフォルト：なし（null）

ターミナルプログラムのファイル転送機能を使用して秘密鍵を入力することも可能です。

- **応答**

**パラメータなし**  
- 応答なし  
- SSL秘密鍵を変更  

### コマンドモード切替設定

---

#### TE

---

- **フォーマット:** `TE<Parameter>[CR][LF]`
- **意味:** シリアルコマンドモードスイッチコード有効化

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 数値 (0 / 1)

- **パラメータ / 戻り値:**

0: 使用しない（無効）
1: 使用する（有効）

この機能が有効でなければ、3バイトのコマンドモードスイッチコードでシリアルコマンドモードに入ることはできません。

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `TE1\r\n`

**パラメータあり（設定）**
- 応答なし
- コマンドモードスイッチコードの有効/無効を切り替え

---

#### SS

---

- **フォーマット:** `SS<Parameter>[CR][LF]`

- **意味:** シリアルコマンドモードスイッチコード

- **コマンドタイプ:** 読み取り / 書き込み

- **パラメータ / 戻り値の型:** 文字列（3バイトの16進数のみ）

- **パラメータ / 戻り値:** デフォルト: 0x2B 0x2B 0x2B

コマンドモードスイッチコードは3バイト（3文字）の16進数コードで構成されている必要があります。

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `SS2B2B2B\r\n`

**パラメータあり（設定）**
- 応答なし
- コマンドモードスイッチコードを変更

### デバイス制御

---

#### EX

---

- **フォーマット:** `EX[CR][LF]`

- **意味:** コマンドモード終了

- **コマンドタイプ:** 書き込みのみ（制御）

- **パラメータ / 戻り値:** なし

- **応答**

**パラメータなし**
- 応答なし
- コマンドモードを終了し、データ転送モードに切り替え

シリアルデバッグメッセージが使用中の場合、データ転送モードへの切り替えが成功すると、以下のモード切替メッセージがData/Debug UARTポートから出力されます。

`> SEG:GW Mode`

---

#### SV

---

- **フォーマット:** `SV[CR][LF]`

- **意味:** 変更設定の保存

- **コマンドタイプ:** 書き込みのみ（制御）

- **パラメータ / 戻り値:** なし

- **応答**

**パラメータなし**
- 応答なし
- 変更した設定を保存

---

#### RT

---

- **フォーマット:** `RT[CR][LF]`

- **意味:** デバイス再起動

- **コマンドタイプ:** 書き込みのみ（制御）

- **パラメータ / 戻り値:** なし

- **応答**

**パラメータなし**
- 応答なし
- すべての操作を終了し、デバイスを再起動

シリアルデバッグメッセージが使用中の場合、以下のメッセージがデータUARTから出力されます。

`> REBOOT`

---

#### FR

---

- **フォーマット:** `FR[CR][LF]`

- **意味:** デバイス初期化（工場出荷時リセット）

- **コマンドタイプ:** 書き込みのみ（制御）

- **パラメータ / 戻り値:** なし

- **応答**

**パラメータなし**
- 応答なし
- デバイスを工場出荷時の設定にリセット

`> REBOOT`

### ステータスI/O

---

#### S0

---

- **フォーマット:** `S0<Parameter>[CR][LF]`

- **意味:** ステータスI/Oピン **S0(GP\_10)** の値

- **コマンドタイプ:** 読み取り専用

- **パラメータ / 戻り値の型:** 数値 (0 / 1)

- **パラメータ / 戻り値:**

- **PHYリンクステータスピンで動作する場合**

| 戻り値 | 意味           | 備考 |
| :----: | -------------- | :--: |
| 0      | PHYリンクアップ | -    |
| 1      | PHYリンクダウン | -    |

- **DTR(Data Terminal Ready)ピンで動作する場合**
- デバイス通信準備完了を示す信号（RS-232、出力）
- 相手機器のDSRピンに接続

| 戻り値 | 意味                      | 備考 |
| :----: | ------------------------- | :--: |
| 0      | デバイスは未準備          | -    |
| 1      | デバイスは通信準備完了    | -    |

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `S00\r\n`

---

#### S1

---

- **フォーマット:** `S1<Parameter>[CR][LF]`

- **意味:** ステータスI/Oピン **S1(GP\_11)** の値

- **コマンドタイプ:** 読み取り専用

- **パラメータ / 戻り値の型:** 数値 (0 / 1)

- **パラメータ / 戻り値:**

- **TCP接続ステータスピンで動作する場合**
- TCPClient  / TCPサーバー / TCP混合モードのみ

| 戻り値 | 意味                  | 備考 |
| :----: | --------------------- | :--: |
| 0      | TCP接続確立           | -    |
| 1      | TCP切断               | -    |

-	**DSR(Data Set Ready)ピンで動作する場合**
- 相手機器の通信準備完了を検出する信号（RS-232、入力）
- 相手機器のDTRピンに接続

| 戻り値 | 意味                           | 備考 |
| :----: | ------------------------------ | :--: |
| 0      | 相手機器は未準備               | -    |
| 1      | 相手機器は通信準備完了         | -    |

- **応答**

**パラメータなし（取得）**
- ASCIIの場合: `S10\r\n`

-----