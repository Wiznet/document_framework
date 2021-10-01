---
id: getting_started_arduino_jp
title: Getting Started for Arduino (JP)
date: 2020-04-03
---

## WIZ Ethernet Library Update

**Step 1 : Download for Arduino WIZnet library**

  - WIZnet GitHub Repositoryから [WIZ Ethernet
    Library](https://github.com/Wiznet/WIZ_Ethernet_Library)を ダウンロードします。
  - Download ZIP ボタンをクリックしてダウンロードします。

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/library_down.png").default}><img src={require("/img/osh/w5500_ethernet_shield/library_down.png").default} alt=""/></a>

-----

**Step 2 : Library Copy & Paste**

  - ダウンロードしたZIP圧縮ファイルを解凍します。
  - C:\\Program Files\\Arduino\\libraries経路に接続します。

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/folder_3.png").default}><img src={require("/img/osh/w5500_ethernet_shield/folder_3.png").default} alt=""/></a>

**Arduino IDE 1.0.x**

  - 1.0.x VersionはArduino IDE 1.0.xフォルダ →
    Ethernetフォルダを下の経路にそのままコピー＆ペーストします。
  - 経路 = C:\\Program Files\\Arduino\\libraries

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/folder_1.png").default}><img src={require("/img/osh/w5500_ethernet_shield/folder_1.png").default} alt=""/></a>

**Arduino IDE 1.5.x**

  - 1.5.x上位VersionはArduino IDE 1.5.xフォルダ → Ethernet →
    srcフォルダだけをコピーして下の経路にそのままコピー＆ペーストします。
  - 経路 = C:\\Program Files\\Arduino\\libraries\\Ethernet

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/folder_2.png").default}><img src={require("/img/osh/w5500_ethernet_shield/folder_2.png").default} alt=""/></a>

-----

**Step 3: Arduino Library Import**

  - Arduino IDEは次の写真のように必要なライブラリをImportして使用できます。

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting3-1.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting3-1.png").default} alt=""/></a>

  - Ethernet LibraryをクリックするとEthernetの該当ライブラリが\#include\<header\>に追加されます。

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting3-2.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting3-2.png").default} alt=""/></a>

-----

## Arduino Web Server Examples

**Step 1 : Arduino を始める**

  - Arduinoを起動させます。
  - Examples -\> Ethernet -\> Webserverを選択して実行させます。

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting4.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting4.png").default} alt=""/></a>

  - Uno, Mega, Dueeなど、ボードの種類によって適切にセッティングします。
  - 道具 -\> ボード -\> Arduino Uno
  - 道具 -\> ポート -\> COMx

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting5.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting5.png").default} alt=""/></a>

-----

**Step 2 : Arduinoの動作確認**

  - Verifyをクリックしてコードエラーがないか確認します。
  - エラーがなければ、UploadをクリックしてArduinoボードにアップロードします。

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting6.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting6.png").default} alt=""/></a>

  - アップロードが完了した後Serial Monitorをクリックします。
  - 次のようなIP アドレスが出るか確認します。

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting7.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting7.png").default} alt=""/></a>

  - Internet Explore & ChromeからSerial Monitorに出たIPに接続します。
  - 次のような結果が出たら正常動作していることです。

<a target="_blank" href={require("/img/osh/w5500_ethernet_shield/getting8.png").default}><img src={require("/img/osh/w5500_ethernet_shield/getting8.png").default} alt=""/></a>

-----

**Step 6 : Enjoy it!**

  - Let's play
  - Create your new application & new content

-----