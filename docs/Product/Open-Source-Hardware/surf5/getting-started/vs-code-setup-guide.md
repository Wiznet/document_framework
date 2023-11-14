---
id: vs-code-setup-guide
title: How to install VS Code for Surf 5
date: 2023-11-14
keywords: [iMCU, ethernet, w7500]
description: How to install VS Code for Surf 5
---

**Guide to Setting up the Surf 5 Development Environment Using Visual Studio Code**

-----

# VS Code Setup Guide for Surf 5

## 1. Software Download
### Installing ARM GCC Compiler [Download link](https://developer.arm.com/downloads/-/gnu-rm)
<br />

Step 1. Download the .exe file that suits your user environment.

<img src="/img/osh/surf5/arndownload.png" width="400" /><br /><br />

Step 2. Press Next.

<img src="/img/osh/surf5/vsset1.png" width="400" /><br /><br />


Step 3. Set the path. We recommend installing it in the "C:\Program Files (x86)..." directory. Please remember this path, as it will be required in the VS Code environment settings below. If you have completed the path configuration, press Install.

<img src="/img/osh/surf5/vsset2.png" width="400" /><br /><br />

Step 4. Wait for the download to complete.

<img src="/img/osh/surf5/vsset3.png" width="400" /><br /><br />

Step 5. Click on the checkboxes below to match the picture and press Finish.

<img src="/img/osh/surf5/vsset4.png" width="400" /><br />

  <br />
  <br />
  <br />

### Installing CMake [Download link](https://cmake.org/download)
  <br />

Step 1. Download the file that suits your user environment.

<img src="/img/osh/surf5/cmakedownload.png" width="400" /><br /><br />

Step 2. Press Next.

<img src="/img/osh/surf5/vsset5.png" width="400" /><br /><br />

Step 3. Select "Add CMake to the system PATH for all users" and click Next.

<img src="/img/osh/surf5/vsset6.png" width="400" /><br /><br />

Step 4. Verify the download path and click Next.

<img src="/img/osh/surf5/vsset7.png" width="400" /><br /><br />

Step 5. Wait for the download to complete.

<img src="/img/osh/surf5/vsset8.png" width="400" /><br /><br />

Step 6. Press Finish to complete the installation.

<img src="/img/osh/surf5/vsset9.png" width="400" /><br />

  <br />
  <br />
  <br />

### Installing Build Tools for Visual Studio 2019 [Download link](https://visualstudio.microsoft.com/ko/downloads/)
  <br />

Step 1. Click on "Free download" for the Community version and download the installation file. If you already have Visual Studio, you don't need to install it again.

<img src="/img/osh/surf5/vsdownload.png" width="400" /><br /><br />

Step 2. Press Continue.

<img src="/img/osh/surf5/vsset10.png" width="400" /><br /><br />

Step 3. Wait for the download to complete.

<img src="/img/osh/surf5/vsset11.png" width="400" /><br /><br />

Step 4. Please check the "C++ build tools" under the "Desktop & Mobile" tab in the left box. Then, in the right box under the "Installation details" tab, click the checkboxes as shown in the picture below. and press Install.

<img src="/img/osh/surf5/vsset12.png" width="400" /><br /><br />

Step 5. Wait for the download to complete.

<img src="/img/osh/surf5/vsset13.png" width="400" /><br />

<img src="/img/osh/surf5/vsset14.png" width="400" /><br />

  <br />
  <br />
  <br />

### Installing Visual Studio Code [Download link](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2019)
  <br />

Step 1. Click on "Free download" for Visual Studio Code and download the installation file. If you already have Visual Studio Code, you don't need to install it again.

<img src="/img/osh/surf5/vscodedownload.png" width="400" /><br /><br />

Step 2. Click "I accept the agreement" and then press Next.

<img src="/img/osh/surf5/vsset15.png" width="400" /><br /><br />

Step 3. Verify the download path and press Next.

<img src="/img/osh/surf5/vsset16.png" width="400" /><br /><br />

Step 4. Click the checkboxes as shown in the picture below and press Next.

<img src="/img/osh/surf5/vsset17.png" width="400" /><br /><br />

Step 5. Wait for the download to complete.

<img src="/img/osh/surf5/vsset18.png" width="400" /><br /><br />

Step 6. Press Finish to complete the installation.

<img src="/img/osh/surf5/vsset19.png" width="400" /><br />

  <br />
  <br />
  <br />

### Installing Xpack Build Tools [Download link](https://github.com/xpack-dev-tools/windows-build-tools-xpack/releases/)
  <br />

Click “Download Now” Button

<img src="/img/osh/surf5/vsset20.png" width="400" />

<br />
<br />
<br />
<br />
<br />
<br />


## 2. Extract xpack-windows-build-tools-4.x.x.x
Extract the xpack-windows-build-tool-4.x.x.x.zip archive. Save the extracted folder to the recommended path below.

<img src="/img/osh/surf5/vsset21.png" width="400" />

**Recommended storage path for the xpack-windows-build-tools folder** : C:\Program Files (x86)\xpack-windows-build-tools-4.x.x.
<!-- <br />
<br />
<br />
<br />
<br />

## 3. Create a New Workspace (Prevent Changes to Existing Settings)
Create a new workspace. The reason for creating a new workspace is to prevent changes to the existing settings.

<img src="/img/osh/surf5/vsset22.png" width="400" />

  <br />
  <br />

First, select "File -> Add Folder to Workspace."

<img src="/img/osh/surf5/vsset23.png" width="400" />

  <br />
  <br />

Select the "W7500P" project folder as the target for the workspace, and then click the "Add" button.
(The "W7500P" should be the top-level directory.)

<img src="/img/osh/surf5/vsset24.png" width="400" />

  <br />
  <br />

If you've added the workspace with the W7500P folder path, then click on "File -> Save Workspace As..." again.

<img src="/img/osh/surf5/vsset25.png" width="600" />

  <br />
  <br />

Simply press "Save" with the same file name.
<br />
<br />
<br />
<br />
<br />

## 4.  Save the CMake Extension Settings for the stored workspace.
In CMake Tools, go to the gear icon (settings) -> Extension Settings -> Navigate to the Workspace tab. In the top search bar, type "@ext:ms-vscode.cmake-tools" to search.

<img src="/img/osh/surf5/vsset26.png" width="400" />
<img src="/img/osh/surf5/vsset27.png" width="430" />

<br />
<br />

In the options, press "Add Item" in the Configure Args section and add the following two definitions:

-DCMAKE_MAKE_PROGRAM is the location of the make executable (inside the previously extracted xpack folder).

-DARM_TOOLCHAIN_DIR is the location of the GNU Arm compiler's executable files that you previously downloaded.

For example, the author used: 

| CMake: Configure Args                        |
|----------------------------------------------|
|-DARM_TOOLCHAIN_DIR=C:/Program Files (x86)/GNU Arm Embedded Toolchain/10 2021.10/bin<br /> |
|-DCMAKE_MAKE_PROGRAM=C:/Program Files (x86)/xpack-windows-build-tools-4.4.0-1/bin/make.exe |

<img src="/img/osh/surf5/vsset28.png" width="650" />

Adjust the Configure Args to match your own file paths according to your setup.
<br />
<br />

Once you have completed the path configuration, enter "Unix Makefiles" in the "CMake: Generator" field. Please make sure to check the case sensitivity of "Unix Makefiles".

| CMake: Generator    |
|---------------------|
|Unix Makefiles<br /> |

<img src="/img/osh/surf5/vsset29.png" width="600" />
<br />
<br />
<br />
<br />
<br />

## Build Project in VS Code

Press the F1 key, and then click on "CMake: Select a Kit."

<img src="/img/osh/surf5/vsset30.png" width="400" />
<br />
<br />

Select "GCC Arm Embedded" to configure the kit.

<img src="/img/osh/surf5/vsset31.png" width="400" />

<br />
<br />

Click the "Build" button at the bottom or press F7 to start the build process.

<img src="/img/osh/surf5/vsset32.png" width="400" />

<br />
<br />

Once the build is completed, you will see a message like the one above in the OUTPUT window.

<img src="/img/osh/surf5/vsset33.png" width="600" />

<br />
<br />

You will also be able to confirm that the Build directory has been created. The project folder within the Build directory contains the generated bin files. You can save these bin files to the W7500 device and use the project.

<img src="/img/osh/surf5/vsset34.png" width="400" />



   -->