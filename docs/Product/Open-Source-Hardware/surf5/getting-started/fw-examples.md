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


### 1. Create a New Workspace (Prevent Changes to Existing Settings)

**Step 1** 

Create a new workspace. The reason for creating a new workspace is to prevent changes to the existing settings.

First, select <span style={{ backgroundColor: '#f7ddbe' }}>"File -> Add Folder to Workspace"</span>.

<img src="/img/osh/surf5/vsset22.png" width="700" />


  <br />
  <br />
  <br />

**Step 2** 

Select the <span style={{ backgroundColor: '#f7ddbe' }}>"W7500x-Surf5"</span> project folder as the target for the workspace, and then click the <span style={{ backgroundColor: '#f7ddbe' }}>"Add"</span> button. 
(The "W7500x-Surf5" should be the top-level directory.)

<img src="/img/osh/surf5/vsset23.png" width="400" />

  <br />
  <br />
  <br />
  
**Step 3** 

If you've added the workspace with the W7500x-Surf5 folder path, then click on <span style={{ backgroundColor: '#f7ddbe' }}>"File -> Save Workspace As..."</span> again.

<img src="/img/osh/surf5/vsset24.png" width="700" />

  <br />
  <br />
  <br />

**Step 4** 

Simply press <span style={{ backgroundColor: '#f7ddbe' }}>"Save"</span> with the same file name.

<img src="/img/osh/surf5/vsset25.png" width="600" />
<br />
<br />
<br />
<br />
<br />

### 2.  Save the CMake Extension Settings for the stored workspace.

**Step 1** 

In CMake Tools, go to <span style={{ backgroundColor: '#f7ddbe' }}>"the gear icon (settings) -> Extension Settings </span> 

<img src="/img/osh/surf5/vsset26.png" width="700" />

<br />
<br />

Go to the Workspace tab in the red box. In the top search bar, type <span style={{ backgroundColor: '#f7ddbe' }}>"@ext:ms-vscode.cmake-tools"</span> to search.


<img src="/img/osh/surf5/vsset27.png" width="700" />

<br />
<br />
<br />

**Step 2** 

In the options, press <span style={{ backgroundColor: '#f7ddbe' }}>"Add Item"</span> in the Configure Args section and add the following two definitions:

<span style={{ backgroundColor: '#f7ddbe' }}>-DCMAKE_MAKE_PROGRAM</span> is the location of the make executable (inside the previously extracted xpack folder).

<span style={{ backgroundColor: '#f7ddbe' }}>-DARM_TOOLCHAIN_DIR</span> is the location of the GNU Arm compiler's executable files that you previously downloaded.

For example, the author used: 

| CMake: Configure Args                        |
|----------------------------------------------|
|-DARM_TOOLCHAIN_DIR=C:/Program Files (x86)/GNU Arm Embedded Toolchain/10 2021.10/bin<br /> |
|-DCMAKE_MAKE_PROGRAM=C:/Program Files (x86)/xpack-windows-build-tools-4.4.0-1/bin/make.exe |

<img src="/img/osh/surf5/vsset28.png" width="700" />

Adjust the Configure Args to match your own file paths according to your setup.
<br />
<br />
<br />

**Step 3** 

Once you have completed the path configuration, enter "Unix Makefiles" in the "CMake: Generator" field. Please make sure to check the case sensitivity of <span style={{ backgroundColor: '#f7ddbe' }}>"Unix Makefiles"</span>.

<img src="/img/osh/surf5/vsset29.png" width="700" />

| CMake: Generator    |
|---------------------|
|Unix Makefiles<br /> |

<br />
<br />
<br />
<br />

### 3. Build Project in VS Code

**Step 1** 

Press the F1 key, and then click on <span style={{ backgroundColor: '#f7ddbe' }}>"CMake: Select a Kit"</span>.

<img src="/img/osh/surf5/vsset30.png" width="700" />
<br />
<br />
<br />

**Step 2** 

Select <span style={{ backgroundColor: '#f7ddbe' }}>"GCC Arm Embedded"</span> to configure the kit.

<img src="/img/osh/surf5/vsset31.png" width="700" />
<br />
<br />
<br />

**Step 3** 

Click the <span style={{ backgroundColor: '#f7ddbe' }}>"Build"</span> button at the bottom or press F7 to start the build process.

<img src="/img/osh/surf5/vsset32.png" width="700" />
<br />
<br />
<br />

**Step 4** 

Once the build is completed, you will see a message like the one above in the OUTPUT window.

You will also be able to confirm that the Build directory has been created. The project folder within the Build directory contains the generated bin files. You can save these bin files to your Surf 5 and use the project.

<img src="/img/osh/surf5/vsset33.png" width="700" />

<br />
<br />
<br />
<br />
<br />

### 4. How to solve Surf 5 build error in VS Code


If the build is still not working despite configuring Visual Studio Code settings, follow the steps below.
<br />
<br />
<br />

**Step 1** 

If other files have appeared in the .vscode directory, please structure the directory as shown in the image below. You should delete all files <span style={{ backgroundColor: '#f7ddbe' }}>except "cmake-kits.json"</span>.

<img src="/img/osh/surf5/error1.png" width="500" />
<br />
<br />
<br />
<br />



**Step 2** 

Please check the path that was previously set in CMake: Configure Args. If it hasn't been saved to the workspace, it is advisable to add it again and save. Configure <span style={{ backgroundColor: '#f7ddbe' }}>"CMake: Configure Args"</span> according to your own path as shown in the picture below. Also, check if the directory exists on your PC at that path.

<img src="/img/osh/surf5/vsset28.png" width="600" /><br /><br /><br />

Please check the command for the CMake generator. If the command is not entered, please input the command as follows:

<img src="/img/osh/surf5/vsset29.png" width="600" /><br /><br /><br /><br />





**Step 3** 

Next, please delete the "Build" directory. Deleting this directory should not pose any issues for the build process.

<img src="/img/osh/surf5/error2.png" width="400" /><br /><br /><br /><br />






**Step 4** 

Press the F1 key, and then click on <span style={{ backgroundColor: '#f7ddbe' }}>"CMake: Select a Kit"</span>.

<img src="/img/osh/surf5/vsset30.png" width="400" /><br /><br /><br />

Select <span style={{ backgroundColor: '#f7ddbe' }}>"GCC Arm Embedded"</span> to configure the kit.

<img src="/img/osh/surf5/vsset31.png" width="400" /><br /><br /><br /><br />




**Step 5**  

Rebuild now.
If you have completed the four steps above perfectly, try building the project again within VS Code.

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

Set the path to the installed compiler for the latest version of Keil 5 (version 5.37 or later). If you haven't installed the compiler for the latest version of Keil 5, please refer to [[Install Keil 5 for Surf 5](install-keil-guide.md)].

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

within the 'Project' tab at the top, click on <span style={{ backgroundColor: '#f7ddbe' }}>"New uVision Project..."</span>

<img src="/img/osh/surf5/keil5_setup7.png" width="400" />


<br />
<br />

**Step 2**

Open the project by selecting <span style={{ backgroundColor: '#f7ddbe' }}>"Project.uvproj"</span> from the path <span style={{ backgroundColor: '#f7ddbe' }}>"...\w7500x-surf5\Projects\W7500x_StdPeriph_Templates\MDK"</span> where the project files exist in the Surf 5 library.

<img src="/img/osh/surf5/keil5_setup8.png" width="550" />


<br />
<br />

**Step 3**

Within the 'Project' tab at the top, click on <span style={{ backgroundColor: '#f7ddbe' }}>"Options for Target 'W7500x'..."</span>

<img src="/img/osh/surf5/keil5_setup9.png" width="400" />


<br />
<br />

**Step 4**

Go to the <span style={{ backgroundColor: '#f7ddbe' }}>"Target"</span> tab at the top, set the ARM Compiler under Code Generation to <span style={{ backgroundColor: '#f7ddbe' }}>"V5.06 update 7 (build 960)"</span>, and click the <span style={{ backgroundColor: '#f7ddbe' }}>"OK"</span> button

<img src="/img/osh/surf5/keil5_setup10.png" width="550" />


<br />
<br />

**Step 5**

In the Keil 5 project, click on <span style={{ backgroundColor: '#f7ddbe' }}>"main.c"</span> in the <span style={{ backgroundColor: '#f7ddbe' }}>"User"</span> folder to open the file.

<img src="/img/osh/surf5/keil5_setup12.png" width="550" />


<br />
<br />

**Step 6**

Press the <span style={{ backgroundColor: '#f7ddbe' }}>"F7"</span> button to complete the build.

<img src="/img/osh/surf5/keil5_setup11.png" width="550" />


<br />
<br /> 


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
