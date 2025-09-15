---
id: new-project-vscode-jp
title: Make New W6300-EVB-PICO2 Projects using VS Code
date: 2025-06-11
---

このページでは、VS Codeを使ってW6300-EVB-PICO2用プロジェクトを作成する方法を紹介します。

-----

## 1\. ファイルのインストール

### - 必要なプログラム一覧（ダウンロードリンク）

* 🌎[ARM GCC Compiler](https://developer.arm.com/downloads/-/gnu-rm)
* 🌎[CMake](https://cmake.org/download/)
* 🌎[Git](https://git-scm.com/downloads/win)
* 🌎[Python](https://www.python.org/downloads/)
* 🌎[Visual Studio Community](https://visualstudio.microsoft.com/ko/downloads/)
* 🌎[VS Code](https://code.visualstudio.com/)

### - ARM GCC Compilerのインストール

PATHを設定します。<span style={{ backgroundColor: '#f7ddbe' }}>"C:\Program Files (x86)..."</span>ディレクトリへのインストールを推奨します。このPATHは後述のVS Code環境設定で必要となるため、必ず覚えておいてください。PATHの設定が完了したら「Install」を押します。

<img src="/img/products/w6300/VS_CODE_SET_UP/install-gcc-1.png" width="500" /><br /><br />

下のチェックボックスを画像と同じように選択し、「Finish」を押してください。

<img src="/img/products/w6300/VS_CODE_SET_UP/install-gcc-2.png" width="500" /><br /><br />

### - CMakeのインストール

ご利用の環境に合ったファイルをダウンロードしてください。

<img src="/img/products/w6300/VS_CODE_SET_UP/install-cmake-1.png" width="500" /><br /><br />

<span style={{ backgroundColor: '#f7ddbe' }}>"Add CMake to the system PATH for all users"</span>を選択し、「Next」をクリックしてください。

<img src="/img/products/w6300/VS_CODE_SET_UP/install-cmake-2.png" width="500" /><br /><br />

### - Gitのインストール

<img src="/img/products/w6300/VS_CODE_SET_UP/install-git-1.png" width="500" /><br /><br />

### - Pythonのインストール

インストーラーを実行します。最初の画面で「Install launcher for all users (recommended)」が選択されていることを確認し、「Add Python to PATH」にチェックを入れてください。

<img src="/img/products/w6300/VS_CODE_SET_UP/install-python-1.png" width="500" /><br /><br />

### - Visual Studio Communityのインストール

Visual Studio 2022の<span style={{ backgroundColor: '#f7ddbe' }}>"Free download"</span>をクリックし、Communityのインストールファイルをダウンロードしてください。すでにVisual Studio 2022をお持ちの場合は再インストールの必要はありません。

<img src="/img/osh/surf5/vsdownload.png" width="400" /><br /><br /><br />

<span style={{ backgroundColor: '#f7ddbe' }}>"Desktop development with C++"</span>ワークロードを選択し、「Install」ボタンをクリックしてください。

<img src="/img/osh/surf5/visualstudio-install2.png" width="500" /><br /><br /><br /><br /><br />

### - VS Codeのインストール

ダウンロードPATHを確認し、「Next」を押してください。

<img src="/img/osh/surf5/vsset16.png" width="400" /><br /><br /><br />

下の画像のようにチェックボックスを選択し、「Next」を押してください。

<img src="/img/osh/surf5/vsset17.png" width="400" /><br /><br /><br />

ダウンロードが完了するまでお待ちください。

<img src="/img/osh/surf5/vsset18.png" width="400" /><br /><br /><br />

「Finish」を押してインストールを完了してください。

<img src="/img/osh/surf5/vsset19.png" width="400" /><br /><br /><br />

### - WIZnet Picoプロジェクトのインストール**

* [WIZnet-PICO-C (W5100S/W5500/W55RP20)](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)
* [WIZnet-PICO-v6-C (W6100/W6300)](https://github.com/WIZnet-ioNIC/WIZnet-PICO-v6-C)

まず、下記のGitHubリンクからWIZnet-PICO-Cライブラリをインストールしてください。
また、「PICO-SDK PATH」を必ず覚えておいてください。

<img src="/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-1.png" width="500" /><br /><br />

### - Environment Variablesの更新**

Windowsの検索バーで「View advanced system settings」と入力し、クリックしてください。

<img src="/img/osh/surf5/edit_sys_properties1.png" width="500" /><br /><br /><br />

「システムのプロパティ」画面で下部の「Environment Variables...」をクリックします。

<img src="/img/osh/surf5/edit_sys_properties2.png" width="500" /><br /><br /><br />

「xxxのユーザーEnvironment Variables」カテゴリの「Path」を選択し、「編集...」を押してください。

<img src="/img/products/w6300/VS_CODE_SET_UP/Environment_variables.png" width="500" /><br /><br /><br />

「新規」ボタンでtoolchainディレクトリとPICO-SDKを追加し、「OK」を押します。

<img src="/img/osh/surf5/edit_sys_properties3.png" width="500" /><br /><br /><br />

変数を追加した場合は、PCまたはノートパソコンを再起動してください。

<img src="/img/osh/surf5/edit_sys_properties5.png" width="300" /><br />

-----

## 2\. VS Code拡張機能のインストール

「Developer Command Prompt for VS 2022」でVS Codeを実行するには、`code` commandを呼び出す必要があります。下記のようにWindowsの検索バーで「Developer Command Prompt for VS 2022」を実行してください。

<img src="/img/osh/surf5/command_prompt1.png" width="500" />
<br />
<br />
<br />

「code」コマンドを入力してVS Codeを起動します。

<img src="/img/osh/surf5/command_prompt2.png" width="500" />
<br />
<br />
<br />

拡張機能の検索バーで、下記画像の3つの拡張機能を検索しインストールしてください。

<img src="/img/osh/surf5/vscodeextensions.png" width="700" />

<br />
<br />
<br />

CMake Toolsでは、<span style={{ backgroundColor: '#f7ddbe' }}>"歯車アイコン（設定） -> Extension Settings"</span>に移動します。

<img src="/img/osh/surf5/vsset26.png" width="700" />

<br />
<br />

「CMake: Generator」欄に「NMake Makefiles」と入力します。<span style={{ backgroundColor: '#f7ddbe' }}>"NMake Makefiles"</span>の大文字・小文字を正しく入力しているか確認してください。

| CMake: Generator    |
|---------------------|
|NMake Makefiles<br /> |

<img src="/img/osh/surf5/vsset29.png" width="600" />
<br />

-----

## 3\. VS Codeでプロジェクトをビルドする

F1キーを押してから、<span style={{ backgroundColor: '#f7ddbe' }}>"CMake: Select a Kit"</span>をクリックしてください。
<img src="/img/products/w6300/VS_CODE_SET_UP/select-a-kit.png" width="600" />
<br />
<br />

キットの設定には、<span style={{ backgroundColor: '#f7ddbe' }}>"GCC 10.x.x arm-none-eabi"</span> を選択してください。

<img src="/img/products/w6300/VS_CODE_SET_UP/select-a-kit-2.png" width="600" />
<br />
<br />

下部の <span style={{ backgroundColor: '#f7ddbe' }}>"Build"</span> ボタンをクリックするか、F7キーを押してビルドプロセスを開始します。

ビルドが成功すると、VS CodeのProblemsタブに以下のログが表示されます。

<img src="/img/products/w6300/VS_CODE_SET_UP/success_build-1.png" width="600" />

-----

## 4\. WIZnet PICOプログラムを使おう！

ビルドディレクトリにあるUF2ファイルをPICOストレージにアップロードして使用します！

<img src="/img/products/w6300/VS_CODE_SET_UP/success_build-2.png" width="300" />

-----

<!-- このページでは、VS Codeを使ってW6300-EVB-PICO2用プロジェクトを作成する方法を紹介します。

## VS Codeで新しいW6300-EVB-PICO2プロジェクトを作成する

-----

### 0. VS Codeのダウンロードとインストール

**必要なプログラム一覧（ダウンロードリンク）**

* 🌎[VS Code](https://code.visualstudio.com/)

### 1. WIZnet PICOプロジェクトのインストール

* [WIZnet-PICO-C (W5100S/W5500/W55RP20)](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)
* [WIZnet-PICO-v6-C (W6100/W6300)](https://github.com/WIZnet-ioNIC/WIZnet-PICO-v6-C)

まず、下記のGitHubリンクからWIZnet-PICO-Cライブラリがインストールされていることを確認してください。

![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-1.png)

-----

### 2\. VS CodeにRaspberry Pi Pico拡張機能をインストール

ライブラリをインストールしたら、Visual Studio Codeを開き、拡張機能タブに移動します。「Raspberry Pi Pico」と検索して拡張機能をインストールしてください。

![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-2.png)

-----

### 3\. プロジェクトのインポート

拡張機能のインストール後、下図のようにVS Codeの左側タブから「Raspberry Pi Pico」拡張機能を開きます。「Import Project」をクリックし、「Change」ボタンをクリックしてWIZnet-PICO-CライブラリのPATHを追加します。追加後、「Import」ボタンをクリックしてください。

![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-3.png)

-----

### 4\. プロジェクトのコンパイル

少し待つと、プロジェクトウィンドウが正常に開きます。再度「Raspberry Pi Pico」拡張機能を実行し、「Compile Project」ボタンをクリックしてください。
![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-4.png)

-----

### 5\. ビルドと実行の確認

ビルドが完了すると、下図のターミナルウィンドウのように、プロジェクトのBuildディレクトリにあるUF2ファイルを使ってPicoボードを動作させることができます。
![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-5.png)
![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-6.png)

----- -->