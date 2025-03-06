---
id: new-project-vscode
title: Make New W6300-EVB-PICO2 Projects using VS Code
date: 2025-02-27
---

This page introduces how to make the project for W6300-EVB-PICO2 with
VS Code.

## Make a new W6300-EVB-PICO2 project with VS Code (for Window)

-----

### 1\. Install Files


#### - Your need program list here(Download links)

  * 🌎[ARM GCC Compiler](https://developer.arm.com/downloads/-/gnu-rm)
  * 🌎[CMake](https://cmake.org/download/)
  * 🌎[Git](https://git-scm.com/downloads/win)
  * 🌎[Python](https://www.python.org/downloads/)
  * 🌎[Visual Studio Community](https://visualstudio.microsoft.com/ko/downloads/)  
  * 🌎[VS Code](https://code.visualstudio.com/)

#### - Install ARM GCC Compiler

Set the path. We recommend installing it in the <span style={{ backgroundColor: '#f7ddbe' }}>"C:\Program Files (x86)..."</span> directory. Please remember this path, as it will be required in the VS Code environment settings below. If you have completed the path configuration, press Install.

<img src="/img/products/w6300/VS_CODE_SET_UP/install-gcc-1.png" width="500" /><br /><br />

Click on the checkboxes below to match the picture and press Finish.

<img src="/img/products/w6300/VS_CODE_SET_UP/install-gcc-2.png" width="500" /><br /><br />

#### - Install CMake

Download the file that suits your user environment.

<img src="/img/products/w6300/VS_CODE_SET_UP/install-cmake-1.png" width="500" /><br /><br />

Select <span style={{ backgroundColor: '#f7ddbe' }}>"Add CMake to the system PATH for all users"</span> and click Next.

<img src="/img/products/w6300/VS_CODE_SET_UP/install-cmake-2.png" width="500" /><br /><br />

#### - Install Git

<img src="/img/products/w6300/VS_CODE_SET_UP/install-git-1.png" width="500" /><br /><br />

#### - Install Python

Run the installer. On the first screen, make sure that "Install launcher for all users (recommended)" is selected and check "Add Python to PATH".

<img src="/img/products/w6300/VS_CODE_SET_UP/install-python-1.png" width="500" /><br /><br />


#### - Install Visual Studio Community



Click on <span style={{ backgroundColor: '#f7ddbe' }}>"Free download"</span> for Visual Studio 2022 and download the installation file of Commmunity. If you already have Visual Studio 2022, you don't need to install it again.



<img src="/img/osh/surf5/vsdownload.png" width="400" /><br /><br /><br />



Choose the <span style={{ backgroundColor: '#f7ddbe' }}>"Desktop development with C++"</span> workload. and Click install button. 

<img src="/img/osh/surf5/visualstudio-install2.png" width="500" /><br /><br /><br /><br /><br />




#### - Install VS Code


Verify the download path and press Next.


<img src="/img/osh/surf5/vsset16.png" width="400" /><br /><br /><br />



Click the checkboxes as shown in the picture below and press Next.


<img src="/img/osh/surf5/vsset17.png" width="400" /><br /><br /><br />


Wait for the download to complete.



<img src="/img/osh/surf5/vsset18.png" width="400" /><br /><br /><br />


Press Finish to complete the installation.


<img src="/img/osh/surf5/vsset19.png" width="400" /><br /><br /><br />


#### - Install WIZnet Pico Project**

* [WIZnet-PICO-C (W5100S/W5500/W55RP20)](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)
* [WIZnet-PICO-v6-C (W6100/W6300)](https://github.com/WIZnet-ioNIC/WIZnet-PICO-v6-C)


First, make sure you've installed the WIZnet-PICO-C library from the GitHub link provided below.
and Please Remember "PICO-SDK PATH".

<img src="/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-1.png" width="500" /><br /><br />

#### - Update Environment Variables**

Search for 'View advanced system settings' in the Windows search bar and click on it.

<img src="/img/osh/surf5/edit_sys_properties1.png" width="500" /><br /><br /><br />

In System Properties, click on 'Environment Variables ...' below.

<img src="/img/osh/surf5/edit_sys_properties2.png" width="500" /><br /><br /><br />

Select 'Path' in the 'User variables for xxx' category and press 'Edit...'

<img src="/img/products/w6300/VS_CODE_SET_UP/Environment_variables.png" width="500" /><br /><br /><br />

Press 'New' to add the toolchain directory & PICO-SDK and press 'OK'.

<img src="/img/osh/surf5/edit_sys_properties3.png" width="500" /><br /><br /><br />

If you have added the variable, restart your PC or laptop.

<img src="/img/osh/surf5/edit_sys_properties5.png" width="300" /><br />

-----


### 2\. Install VS Code Extensions


In 'Developer Command Prompt for VS 2022', you must call the code command to run VS Code. Execute 'Developer Command Prompt for VS 2022' in the Windows search bar below.


<img src="/img/osh/surf5/command_prompt1.png" width="500" />
<br />
<br />
<br />


Call the 'Code' command to execute VS Code.


<img src="/img/osh/surf5/command_prompt2.png" width="500" />
<br />
<br />
<br />



Search for and install the three extensions shown in the image below in the extension program search bar.


<img src="/img/osh/surf5/vscodeextensions.png" width="700" />


<br />
<br />
<br />

In CMake Tools, go to <span style={{ backgroundColor: '#f7ddbe' }}>"the gear icon (settings) -> Extension Settings </span> 

<img src="/img/osh/surf5/vsset26.png" width="700" />

<br />
<br />


enter "NMake Makefiles" in the "CMake: Generator" field. make sure to check the case sensitivity of <span style={{ backgroundColor: '#f7ddbe' }}>"NMake Makefiles"</span>.

| CMake: Generator    |
|---------------------|
|NMake Makefiles<br /> |

<img src="/img/osh/surf5/vsset29.png" width="600" />
<br />

-----

### 3\. Build Project in VS Code



Press the F1 key, and then click on <span style={{ backgroundColor: '#f7ddbe' }}>"CMake: Select a Kit"</span>.

<img src="/img/products/w6300/VS_CODE_SET_UP/select-a-kit.png" width="600" />
<br />
<br />


Select <span style={{ backgroundColor: '#f7ddbe' }}>"GCC 10.x.x arm-none-eabi"</span> to configure the kit.

<img src="/img/products/w6300/VS_CODE_SET_UP/select-a-kit-2.png" width="600" />
<br />
<br />

Click the <span style={{ backgroundColor: '#f7ddbe' }}>"Build"</span> button at the bottom or press F7 to start the build process.

If the build is successful, the following logs will appear in the Problems tab of VS Code.

<img src="/img/products/w6300/VS_CODE_SET_UP/success_build-1.png" width="600" />

-----

### 4\. Use WIZnet PICO Program!


Upload the UF2 file located in the build directory to the PICO storage to use it!

<img src="/img/products/w6300/VS_CODE_SET_UP/success_build-2.png" width="300" />

-----


<!-- This page introduces how to make the project for W6300-EVB-PICO2 with
VS Code.

## Make a new W6300-EVB-PICO2 project with VS Code

-----

### 0. Download and install VS Code


**Your need program list here(Download links)**  

  * 🌎[VS Code](https://code.visualstudio.com/)

      
### 1. Install WIZnet PICO Project

* [WIZnet-PICO-C (W5100S/W5500/W55RP20)](https://github.com/WIZnet-ioNIC/WIZnet-PICO-C)
* [WIZnet-PICO-v6-C (W6100/W6300)](https://github.com/WIZnet-ioNIC/WIZnet-PICO-v6-C)


First, make sure you've installed the WIZnet-PICO-C library from the GitHub link provided below.

![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-1.png)

-----

### 2\. Install the Raspberry Pi Pico Extension in VS Code

Once the library is installed, open Visual Studio Code and go to the Extensions tab. Search for "Raspberry Pi Pico" and install the extension.

![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-2.png)

-----

### 3\. Import the Project


After installing the extension, open the "Raspberry Pi Pico" extension from the left-hand side tab in VS Code, as shown in the image below. Click on "Import Project," then click the "Change" button to add the path of your WIZnet-PICO-C library. Once added, click on the "Import" button.


![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-3.png)

-----

### 4\. Compile the Project


After a short waiting time, if the project window opens successfully, run the "Raspberry Pi Pico" extension again and click the "Compile Project" button.
![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-4.png)

-----

### 5\. Check the Build and Run


Once the build is complete, as shown in the terminal window in the image below, you can use the UF2 file located in the Build directory of the project to operate your Pico board.
![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-5.png)
![](/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-6.png)

----- -->

