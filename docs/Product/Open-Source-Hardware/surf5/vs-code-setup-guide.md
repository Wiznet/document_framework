---
id: vs-code-setup-guide
title: VS Code Setup Guide
date: 2023-11-06
---

**Guide to Setting up the Surf 5 Development Environment Using Visual Studio Code**

# VS Code Setup Guide for Surf 5

## 1. Software Download
<br />

### Installing ARM GCC Compiler [Download link](https://developer.arm.com/downloads/-/gnu-rm)
<br />

<a target="_blank" href={require('/img/osh/surf5/arndownload.png').default}><img src={require('/img/osh/surf5/arndownload.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset1.png').default}><img src={require('/img/osh/surf5/vsset1.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset2.png').default}><img src={require('/img/osh/surf5/vsset2.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset3.png').default}><img src={require('/img/osh/surf5/vsset3.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset4.png').default}><img src={require('/img/osh/surf5/vsset4.png').default} alt="Surf5"/></a>
  <br />
  <br />
  <br />

### Installing CMake [Download link](https://cmake.org/download)
  <br />

<a target="_blank" href={require('/img/osh/surf5/cmakedownload.png').default}><img src={require('/img/osh/surf5/cmakedownload.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset5.png').default}><img src={require('/img/osh/surf5/vsset5.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset6.png').default}><img src={require('/img/osh/surf5/vsset6.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset7.png').default}><img src={require('/img/osh/surf5/vsset7.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset8.png').default}><img src={require('/img/osh/surf5/vsset8.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset9.png').default}><img src={require('/img/osh/surf5/vsset9.png').default} alt="Surf5"/></a>
  <br />
  <br />
  <br />

### Installing Build Tools for Visual Studio 2019 [Download link](https://visualstudio.microsoft.com/ko/downloads/)
  <br />

<a target="_blank" href={require('/img/osh/surf5/vsdownload.png').default}><img src={require('/img/osh/surf5/vsdownload.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset10.png').default}><img src={require('/img/osh/surf5/vsset10.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset11.png').default}><img src={require('/img/osh/surf5/vsset11.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset12.png').default}><img src={require('/img/osh/surf5/vsset12.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset13.png').default}><img src={require('/img/osh/surf5/vsset13.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset14.png').default}><img src={require('/img/osh/surf5/vsset14.png').default} alt="Surf5"/></a>
  <br />
  <br />
  <br />

  ### Installing Visual Studio Code [Download link](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2019)
  <br />

<a target="_blank" href={require('/img/osh/surf5/vscodedownload.png').default}><img src={require('/img/osh/surf5/vscodedownload.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset15.png').default}><img src={require('/img/osh/surf5/vsset15.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset16.png').default}><img src={require('/img/osh/surf5/vsset16.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset17.png').default}><img src={require('/img/osh/surf5/vsset17.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset18.png').default}><img src={require('/img/osh/surf5/vsset18.png').default} alt="Surf5"/></a>

<a target="_blank" href={require('/img/osh/surf5/vsset19.png').default}><img src={require('/img/osh/surf5/vsset19.png').default} alt="Surf5"/></a>
  <br />
  <br />
  <br />

### Installing Xpack Build Tools [Download link](https://github.com/xpack-dev-tools/windows-build-tools-xpack/releases/)
  <br />

Click “Download Now” Button

<a target="_blank" href={require('/img/osh/surf5/vsset20.png').default}><img src={require('/img/osh/surf5/vsset20.png').default} alt="Surf5"/></a>
<br />
<br />
<br />
<br />
<br />
<br />


## 2. Extract xpack-windows-build-tools-4.x.x.x
Extract the xpack-windows-build-tool-4.x.x.x.zip archive. Save the extracted folder to the recommended path below.

<a target="_blank" href={require('/img/osh/surf5/vsset21.png').default}><img src={require('/img/osh/surf5/vsset21.png').default} alt="Surf5"/></a>

**Recommended storage path for the xpack-windows-build-tools folder** : C:\Program Files (x86)\xpack-windows-build-tools-4.x.x.
<br />
<br />
<br />
<br />
<br />

## 3. Create a New Workspace (Prevent Changes to Existing Settings)
Create a new workspace. The reason for creating a new workspace is to prevent changes to the existing settings.

<a target="_blank" href={require('/img/osh/surf5/vsset22.png').default}><img src={require('/img/osh/surf5/vsset22.png').default} alt="Surf5"/></a>
  <br />
  <br />

First, select "File -> Add Folder to Workspace."

<a target="_blank" href={require('/img/osh/surf5/vsset23.png').default}><img src={require('/img/osh/surf5/vsset23.png').default} alt="Surf5"/></a>
  <br />
  <br />

Select the "W7500P" project folder as the target for the workspace, and then click the "Add" button.
(The "W7500P" should be the top-level directory.)

<a target="_blank" href={require('/img/osh/surf5/vsset24.png').default}><img src={require('/img/osh/surf5/vsset24.png').default} alt="Surf5"/></a>
  <br />
  <br />

If you've added the workspace with the W7500P folder path, then click on "File -> Save Workspace As..." again.

<a target="_blank" href={require('/img/osh/surf5/vsset25.png').default}><img src={require('/img/osh/surf5/vsset25.png').default} alt="Surf5"/></a>
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

<a target="_blank" href={require('/img/osh/surf5/vsset26.png').default}><img src={require('/img/osh/surf5/vsset26.png').default} alt="Surf5"/></a>
<a target="_blank" href={require('/img/osh/surf5/vsset27.png').default}><img src={require('/img/osh/surf5/vsset27.png').default} alt="Surf5"/></a>
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

<!-- 

***-DARM_TOOLCHAIN_DIR=C:/Program Files (x86)/GNU Arm Embedded Toolchain/10 2021.10/bin***

***-DCMAKE_MAKE_PROGRAM=C:/Program Files (x86)/xpack-windows-build-tools-4.4.0-1/bin/make.exe*** -->

<a target="_blank" href={require('/img/osh/surf5/vsset28.png').default}><img src={require('/img/osh/surf5/vsset28.png').default} alt="Surf5"/></a>

Adjust the Configure Args to match your own file paths according to your setup.
<br />
<br />

Once you have completed the path configuration, enter "Unix Makefiles" in the "CMake: Generator" field. Please make sure to check the case sensitivity of "Unix Makefiles".

| CMake: Generator    |
|---------------------|
|Unix Makefiles<br /> |

<a target="_blank" href={require('/img/osh/surf5/vsset29.png').default}><img src={require('/img/osh/surf5/vsset29.png').default} alt="Surf5"/></a>
<br />
<br />
<br />
<br />
<br />

## Build Project in VS Code

Press the F1 key, and then click on "CMake: Select a Kit."

<a target="_blank" href={require('/img/osh/surf5/vsset30.png').default}><img src={require('/img/osh/surf5/vsset30.png').default} alt="Surf5"/></a>
<br />
<br />

Select "GCC Arm Embedded" to configure the kit.

<a target="_blank" href={require('/img/osh/surf5/vsset31.png').default}><img src={require('/img/osh/surf5/vsset31.png').default} alt="Surf5"/></a>
<br />
<br />

Click the "Build" button at the bottom or press F7 to start the build process.

<a target="_blank" href={require('/img/osh/surf5/vsset32.png').default}><img src={require('/img/osh/surf5/vsset32.png').default} alt="Surf5"/></a>
<br />
<br />

Once the build is completed, you will see a message like the one above in the OUTPUT window.

<a target="_blank" href={require('/img/osh/surf5/vsset33.png').default}><img src={require('/img/osh/surf5/vsset33.png').default} alt="Surf5"/></a>
<br />
<br />

You will also be able to confirm that the Build directory has been created. The project folder within the Build directory contains the generated bin files. You can save these bin files to the W7500 device and use the project.

<a target="_blank" href={require('/img/osh/surf5/vsset34.png').default}><img src={require('/img/osh/surf5/vsset34.png').default} alt="Surf5"/></a>


  