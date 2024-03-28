---
id: fw-examples
title: How to make Surf 5 Projects
date: 2023-11-14
keywords: [iMCU, ethernet, w7500]
description: How to set-up vs code and keil 5 before using Surf 5
---


-----
## Surf 5 Github Link

If you haven't downloaded the Surf 5 project yet, Click the link below to access GitHub and download it.

[Surf 5 Github Link](https://github.com/Wiznet/W7500x-Surf5/tree/main)

-----

## How to make Surf 5 Project in VS Code

### 1. Launching VS Code

**Step 1** 

In 'Developer Command Prompt for VS 2022', you must call the code command to run VS Code. Execute 'Developer Command Prompt for VS 2022' in the Windows search bar below.


<img src="/img/osh/surf5/command_prompt1.png" width="500" />
<br />
<br />
<br />

**Step 2** 

Call the 'Code' command to execute VS Code.


<img src="/img/osh/surf5/command_prompt2.png" width="500" />
<br />
<br />
<br />

**Step 3** 

Load the project folder of Surf 5 in VS Code.


<img src="/img/osh/surf5/vscodeon.png" width="700" />

<br />
<br />
<br />
<br />
<br />


### 2. Installing Extensions in VS Code


Search for and install the three extensions shown in the image below in the extension program search bar.


<img src="/img/osh/surf5/vscodeextensions.png" width="700" />


<br />
<br />
<br />
<br />
<br />

### 3.  Save the CMake Extension Settings for the stored workspace.

**Step 1** 

In CMake Tools, go to <span style={{ backgroundColor: '#f7ddbe' }}>"the gear icon (settings) -> Extension Settings </span> 

<img src="/img/osh/surf5/vsset26.png" width="700" />

<br />
<br />


**Step 2** 

enter "NMake Makefiles" in the "CMake: Generator" field. make sure to check the case sensitivity of <span style={{ backgroundColor: '#f7ddbe' }}>"NMake Makefiles"</span>.

| CMake: Generator    |
|---------------------|
|NMake Makefiles<br /> |

<img src="/img/osh/surf5/vsset29.png" width="700" />
<br />
<br />
<br />
<br />
<br />


### 4. Modifying the contents of the 'arm-none-eabi-gcc.cmake' file

Within the 'arm-none-eabi-gcc.cmake' file in the tools directory, you need to specify the 'ARM_TOOLCHAIN_DIR' path. 'ARM_TOOLCHAIN_DIR' is located inside the path where your GNU Arm Embedded Toolchain executable is installed. Find your path and enter it.

<span style={{ backgroundColor: '#f7ddbe' }}>When setting the path, be sure to delete the backslash (\) and enter it as a slash (/).</span>. You may refer to the example code below.

| arm-none-eabi-gcc.cmake                        |
|----------------------------------------------|
|set(ARM_TOOLCHAIN_DIR "C:/Program Files (x86)/GNU Arm Embedded Toolchain/10 2021.10/bin")<br /> |


<img src="/img/osh/surf5/cmakefile_edit.png" width="700" />

<br />
<br />
<br />
<br />
<br />

### 5. Build Project in VS Code

**Step 1** 

Press the F1 key, and then click on <span style={{ backgroundColor: '#f7ddbe' }}>"CMake: Select a Kit"</span>.

<img src="/img/osh/surf5/vsset30.png" width="700" />
<br />
<br />
<br />

**Step 2** 

click on <span style={{ backgroundColor: '#f7ddbe' }}>"[Scan for Kits]"</span>.

<img src="/img/osh/surf5/scanforkits.png" width="700" />
<br />
<br />
<br />

**Step 3** 

Select <span style={{ backgroundColor: '#f7ddbe' }}>"GCC 10.x.x arm-none-eabi"</span> to configure the kit.

<img src="/img/osh/surf5/vsset31.png" width="700" />
<br />
<br />
<br />

**Step 4** 

Click the <span style={{ backgroundColor: '#f7ddbe' }}>"Build"</span> button at the bottom or press F7 to start the build process.

<img src="/img/osh/surf5/vsset32.png" width="700" />
<br />
<br />
<br />

**Step 5** 

Once the build is completed, you will see a message like the one above in the OUTPUT window.

You will also be able to confirm that the Build directory has been created. The project folder within the Build directory contains the generated bin files. You can save these bin files to your Surf 5 and use the project.

<img src="/img/osh/surf5/vsset33.png" width="700" />
<br />
<br />
<br />

**Step 6** 

Flash the .bin file of the desired project in the 'build' directory to Surf 5 Project. If you want to know how to flash .bin files to Surf 5, refer to [How to use ISP tool](flashing-Surf5.md)

<img src="/img/osh/surf5/vsset34.png" width="500" />

<br />
<br />
<br />
<br />
<br />


### [How to solve Surf 5 build error in VS Code]


If the build is still not working despite configuring Visual Studio Code settings, follow the steps below.

<br />
<br />


**Before solving the error, Did you by any chance not install the programs required to build the Surf 5 project in VS Code?** 

Please check the following link to ensure that the programs needed for the build have not been installed.

[How to install VS Code for Surf 5](install-vscode-guide.md)

<br /><br /><br /><br />

**Step 1** 

Please recheck the path for the code section marked in red in the photo below. And when writing the code, make sure to enter the path with slashes(/) instead of backslashes.

<img src="/img/osh/surf5/cmakefile_edit.png" width="700" /><br /><br /><br /><br />


**Step 2** 

Click on the gear icon of the CMake Tools extension pack to go to 'Extension Settings'. Check if the code in the 'CMake: Generator' section is 'NMake Makefiles' as shown in the photo below. Also, make sure to enter this code with the exact case sensitivity.


<img src="/img/osh/surf5/vsset29.png" width="700" /><br /><br /><br /><br />




**Step 3** 

Next, delete the "Build" directory. Deleting this directory should not pose any issues for the build process.

<img src="/img/osh/surf5/error2.png" width="700" /><br /><br /><br /><br />






**Step 4** 

Press the F1 key, and then click on <span style={{ backgroundColor: '#f7ddbe' }}>"CMake: Select a Kit"</span>.

<img src="/img/osh/surf5/vsset30.png" width="700" /><br /><br /><br />

**Step 5**  

Select <span style={{ backgroundColor: '#f7ddbe' }}>"GCC 10.x.x arm-none-eabi"</span> to configure the kit.

<img src="/img/osh/surf5/vsset31.png" width="700" /><br /><br /><br /><br />




**Step 6**  

Rebuild now.
If you have completed the four steps above perfectly, try building the project again within VS Code.

<br /><br /><br /><br />

<span style={{ backgroundColor: '#bec2f7' }}>GCC 10.x.x arm-none-eabi' compiler is not appearing</span>


This issue may be due to the compiler's path not being added to the environment variables during installation. Follow the steps below to add the path of the compiler.

<br />
<br />

Search for 'View advanced system settings' in the Windows search bar and click on it.

<img src="/img/osh/surf5/edit_sys_properties1.png" width="500" /><br /><br /><br />

In System Properties, click on 'Environment Variables ...' below.

<img src="/img/osh/surf5/edit_sys_properties2.png" width="500" /><br /><br /><br />

Select 'Path' in the 'User variables for xxx' category and press 'Edit...'

<img src="/img/osh/surf5/edit_sys_properties3.png" width="500" /><br /><br /><br />


Press 'New' to add the toolchain directory and press 'OK'.

<img src="/img/osh/surf5/edit_sys_properties4.png" width="500" /><br /><br /><br />


If you have added the variable, restart your PC or laptop.

<img src="/img/osh/surf5/edit_sys_properties5.png" width="500" /><br /><br /><br />

In 'Developer Command Prompt for VS 2022', you must call the code command to run VS Code.
And in VS Code, press 'F1' and click on 'CMake: Select a Kit'.

<img src="/img/osh/surf5/vsset30.png" width="700" /><br /><br /><br />

Click on [Scan for Kits].

<img src="/img/osh/surf5/scanforkits.png" width="700" /><br /><br /><br />


Check the added compiler below and build it.

<img src="/img/osh/surf5/vsset31.png" width="700" /><br /><br /><br />

<!-- 
<br /><br /><br /><br />




<span style={{ backgroundColor: '#bec2f7' }}>If building Surf 5 Project still doesn't work in VS Code</span>


Enter the following path, then delete the Code director.

<img src="/img/osh/surf5/codedir.png" width="700" /><br /><br /><br />

Next, Reinstall VS Code and then rebuild.

<img src="/img/osh/surf5/vscodeinstaller.png" width="150" /><br /><br /><br /><br /> -->

<br />
<br />
<br />
<br />
<br />


-----

## How to make Surf 5 Project in Keil 5


### 1. Download Keil 5 & Compiler for Keil 5 

If you haven't installed the Keil 5 development environment and the compiler for Keil 5 (version 5.37 or later) yet, click the link below to install them first.

 [Install Keil 5 for Surf 5](install-keil-guide.md)

<br />
<br />
<br />

### 2. Set-up Compiler in Keil 5

**Step 1**

Run Keil 5 and click on the <span style={{ backgroundColor: '#f7ddbe' }}>"Project' -> 'Manage' -> 'Project Items..."</span> tab at the top.

<img src="/img/osh/surf5/keil5_setup1.png" width="800" />

<br />
<br />

**Step 2**

Click the <span style={{ backgroundColor: '#f7ddbe' }}>"..."</span> button under the 'Folders/Extensions' tab.

<img src="/img/osh/surf5/keil5_setup2.png" width="550" />


<br />
<br />

**Step 3**

Click the <span style={{ backgroundColor: '#f7ddbe' }}>"Add another ARM Compiler Version to List..."</span> button.

<img src="/img/osh/surf5/keil5_setup3.png" width="550" />


<br />
<br />

**Step 4**

Set the path to the installed compiler for the latest version of Keil 5 (version 5.37 or later). If you haven't installed the compiler for the latest version of Keil 5, refer to [[Install Keil 5 for Surf 5](install-keil-guide.md)].

<img src="/img/osh/surf5/keil5_setup4.png" width="550" />


<br />
<br />

**Step 5**

Verify that the compiler has been added and click the <span style={{ backgroundColor: '#f7ddbe' }}>"Close"</span> button.

<img src="/img/osh/surf5/keil5_setup5.png" width="550" />


<br />
<br />

**Step 6**

Press the <span style={{ backgroundColor: '#f7ddbe' }}>"OK"</span> button to complete the compiler path setup.

<img src="/img/osh/surf5/keil5_setup6.png" width="550" />


<br />
<br />
<br />

### 3. Build Surf 5 Project in Keil 5

**Step 1**

within the 'Project' tab at the top, click on <span style={{ backgroundColor: '#f7ddbe' }}>"Open Project..."</span>

<img src="/img/osh/surf5/keil5_setup7.png" width="700" />


<br />
<br />

**Step 2**

Open the project by selecting <span style={{ backgroundColor: '#f7ddbe' }}>"Project.uvproj"</span> from the path <span style={{ backgroundColor: '#f7ddbe' }}>"...\w7500x-surf5\Projects\W7500x_StdPeriph_Templates\MDK"</span> where the project files exist in the Surf 5 library.

<img src="/img/osh/surf5/keil5_setup8.png" width="550" />


<br />
<br />

**Step 3**

Within the 'Project' tab at the top, click on <span style={{ backgroundColor: '#f7ddbe' }}>"Options for Target 'W7500x'..."</span>

<img src="/img/osh/surf5/keil5_setup9.png" width="700" />


<br />
<br />

**Step 4**

Go to the <span style={{ backgroundColor: '#f7ddbe' }}>"Target"</span> tab at the top, set the ARM Compiler under Code Generation to <span style={{ backgroundColor: '#f7ddbe' }}>"V5.06 update 7 (build 960)"</span>, and click the <span style={{ backgroundColor: '#f7ddbe' }}>"OK"</span> button

<img src="/img/osh/surf5/keil5_setup10.png" width="550" />


<br />
<br />

**Step 5**

In the Keil 5 project, click on <span style={{ backgroundColor: '#f7ddbe' }}>"main.c"</span> in the <span style={{ backgroundColor: '#f7ddbe' }}>"User"</span> folder to open the file.

<img src="/img/osh/surf5/keil5_setup12.png" width="700" />


<br />
<br />

**Step 6**

Press the <span style={{ backgroundColor: '#f7ddbe' }}>"F7"</span> button to complete the build.

<img src="/img/osh/surf5/keil5_setup11.png" width="700" />


<br />
<br /> 

**Step 7** 

Flash 'W7500x.bin' file of the desired project in the 'obj' directory to Surf 5 Project. If you want to know how to flash W7500x.bin file to Surf 5, refer to [How to use ISP tool](flashing-Surf5.md)

<img src="/img/osh/surf5/vsset35.png" width="500" />


<!-- 
### 3. Build Surf 5 Project in Keil 5

**Step 1**

within the 'Project' tab at the top, click on <span style={{ backgroundColor: '#f7ddbe' }}>"New uVision Project..."</span>


<img src="/img/osh/surf5/keil5_setup7.png" width="400" />


<br />
<br />

**Step 2**

Open the project by selecting <span style={{ backgroundColor: '#f7ddbe' }}>"Project.uvproj"</span> from the path <span style={{ backgroundColor: '#f7ddbe' }}>"...\w7500x-surf5\Projects\W7500x_StdPeriph_Templates\MDK"</span> where the project files exist in the Surf 5 library.

<p align="center">
<img src="/img/osh/surf5/keil5_setup8.png" width="400" />
</p>

<br />
<br />

**Step 3**

Within the 'Project' tab at the top, click on <span style={{ backgroundColor: '#f7ddbe' }}>"Options for Target 'W7500x'..."</span>

<p align="center">
<img src="/img/osh/surf5/keil5_setup9.png" width="400" />
</p>

<br />
<br />

**Step 4**

Go to the <span style={{ backgroundColor: '#f7ddbe' }}>"Target"</span> tab at the top, set the ARM Compiler under Code Generation to <span style={{ backgroundColor: '#f7ddbe' }}>"V5.06 update 7 (build 960)"</span>, and click the <span style={{ backgroundColor: '#f7ddbe' }}>"OK"</span> button

<p align="center">
<img src="/img/osh/surf5/keil5_setup10.png" width="400" />
</p>

<br />
<br />

**Step 5**

In the Keil 5 project, click on <span style={{ backgroundColor: '#f7ddbe' }}>"main.c"</span> in the <span style={{ backgroundColor: '#f7ddbe' }}>"User"</span> folder to open the file.

<p align="center">
<img src="/img/osh/surf5/keil5_setup12.png" width="400" />
</p>

<br />
<br />

**Step 6**

Press the <span style={{ backgroundColor: '#f7ddbe' }}>"F7"</span> button to complete the build.

<p align="center">
<img src="/img/osh/surf5/keil5_setup11.png" width="400" />
</p>

<br />
<br /> -->
