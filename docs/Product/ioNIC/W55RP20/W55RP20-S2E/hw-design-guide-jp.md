---
id: hw-design-guide-jp  
title: HW design guide  
date: 2025-05-27  
keywords: [wiznet, w55rp20, w232n データシート, ハードウェアTCP/IP, シリアル-イーサネット, w5500, rp2040]  

---

# W55RP20 シリアル-イーサネット公式デザインガイド  

## はじめに  
W55RP20は、WIZnetのW5500イーサネットコントローラーとRaspberry PiのRP2040 MCUを組み合わせたもので、UART TTL、RS-232、RS-422、RS-485通信をサポートするシリアル-イーサネットアプリケーション向けに特化して設計されています。  

## ピン配置説明  

### 設定ピン  

| ピン         | ピン配置 | 名称       | 説明                                   |  
|--------------|----------|------------|----------------------------------------|  
| RST          | 29       | RUN        | MCUリセット（アクティブLow）           |  
| BOOT Mode    | 21       | GP15       | ファームウェアのブートモード制御        |  
| AT Mode      | 20       | GP14       | ATコマンドモードへの切り替え（アクティブLow）|  
| RP BOOT      | 63       | BOOT       | フラッシュリセット＆RP2040ブート（アクティブLow）|  
| 232/485 Select| 18      | GP12       | Low: TTL/RS-232, High: RS-422/485      |  
| Factory RST  | 40       | GP18       | IP設定のリセット（ファームウェアは保持）|  

- RSTピン  
    このピンはMCUのリセット用で、アクティブLowで動作します。  

- BOOT Modeピン  
    シリアル-イーサネット内部ファームウェアのブートモードを制御するために設計されています。  

- AT Modeピン  
    アクティブLowで動作し、このピンを制御することでシリアル経由でATコマンドモードに入ることができます。  

- RP BOOTピン  
    内部フラッシュメモリのリセットピンで、RP2040のブートシーケンスに従いアクティブLowで動作します。  

- 232/485 Selectピン  
    初期チップ動作時の状態に基づき通信方式を決定します。  
    - Low: UARTまたはRS-232モード  
    - High: RS-422またはRS-485モード  

- Factory RSTピン  
  IP設定を工場出荷時のデフォルトにリセットしますが、ファームウェアはそのまま保持されます。  

### データピン  

| ピン         | ピン配置 | 名称       | 説明                                   |  
|--------------|----------|------------|----------------------------------------|  
| UART_TX      | 9        | GP4        | UARTデータ送信                        |  
| UART_RX      | 10       | GP5        | UARTデータ受信                        |  
| UART_RTS     | 12       | GP7        | UART送信要求（フロー制御）            |  
| UART_CTS     | 11       | GP6        | UART送信許可（フロー制御）            |  
| UART_DTR     | 14       | GP8        | UARTデータ端末準備完了（フロー制御）  |  
| UART_DSR     | 15       | GP9        | UARTデータセット準備完了（フロー制御）|  

- **UART_RTSピン**  
  UART送信要求（フロー制御）。通信モードを決定します（RS-485の場合はフロート、RS-422の場合はLow）。  

### LEDインジケーター - 状態  

| ピン         | ピン配置 | 名称       | 説明                                   |  
|--------------|----------|------------|----------------------------------------|  
| RUN          | 41       | GP19       | MCUステータスLED。MCUが正常動作中に点滅します。|  
| PHY LINK     | 16       | GP10       | PHYリンクステータスを表示します。        |  
| TCP Connection| 17      | GP11       | アクティブなTCP接続を表示します。        |  

## ファームウェアのアップロード  
ファームウェアのアップロード方法は以下の3つです:  

- **USB (UF2)**  
  - RP-BOOTピンをLowに設定してリセットし、`Boot.uf2`および`app.uf2`を「RPI-RP2」ドライブにドラッグします。  

- **SWD (J-Link)**  
  - J-Linkを使用してHEX/BINファイルをアップロードします（RP2040標準と同様）。  

- **Ethernet (BIN)**  
  - WIZnet Configuration Toolを使用してアプリケーションを更新します（初回アップロードには使用不可）。  

## MACアドレス設定  
初回のファームウェアアップロードはUSB/SWD経由で行う必要があります。その後、WIZnet MAC Tool（115200ボー）を使用してMACアドレスを設定します。MACアドレスは別途購入が必要です。  
  - [ダウンロード - WIZMacTool](https://docs.wiznet.io/img/products/wiz750sr/developers/restore-mac/wizmactool_v20151127.zip)  
  - [WIZMacToolの使用方法](../W55RP20-S2E/mac_address-write-guide-jp.md)  
  - [シリアルコマンドの使用](../W55RP20-S2E/mac_address-write-guide-jp.md)  

## 設定  
詳細な設定およびさらなる構成は、最新のWIZnet Configuration Toolを使用して行うことができます。  

  - [設定ガイド](./Config-tool-Guide-jp.md)  