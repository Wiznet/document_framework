---
id: new-project-vscode
title: Make New W6300-EVB-PICO2 Projects using VS Code
date: 2025-02-27
---

This page introduces how to make the project for W6300-EVB-PICO2 with
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

![](/static/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-1.png)

-----

### 2\. Install the Raspberry Pi Pico Extension in VS Code

Once the library is installed, open Visual Studio Code and go to the Extensions tab. Search for "Raspberry Pi Pico" and install the extension.

![](/static/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-2.png)

-----

### 3\. Import the Project


After installing the extension, open the "Raspberry Pi Pico" extension from the left-hand side tab in VS Code, as shown in the image below. Click on "Import Project," then click the "Change" button to add the path of your WIZnet-PICO-C library. Once added, click on the "Import" button.


![](/static/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-3.png)

-----

### 4\. Compile the Project


After a short waiting time, if the project window opens successfully, run the "Raspberry Pi Pico" extension again and click the "Compile Project" button.
![](/static/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-4.png)

-----

### 5\. Check the Build and Run


Once the build is complete, as shown in the terminal window in the image below, you can use the UF2 file located in the Build directory of the project to operate your Pico board.
![](/static/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-5.png)
![](/static/img/products/w6300/VS_CODE_SET_UP/vs-code-set-up-6.png)

-----

