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
Create a new workspace. The reason for creating a new workspace is to prevent changes to the existing settings.

<img src="/img/osh/surf5/vsset22.png" width="400" />

  <br />
  <br />

First, select "File -> Add Folder to Workspace."

<img src="/img/osh/surf5/vsset23.png" width="400" />

  <br />
  <br />

Select the "W7500x-Surf5" project folder as the target for the workspace, and then click the "Add" button.
(The "W7500x-Surf5" should be the top-level directory.)

<img src="/img/osh/surf5/vsset24.png" width="400" />

  <br />
  <br />

If you've added the workspace with the W7500x-Surf5 folder path, then click on "File -> Save Workspace As..." again.

<img src="/img/osh/surf5/vsset25.png" width="600" />

  <br />
  <br />

Simply press "Save" with the same file name.
<br />
<br />
<br />
<br />
<br />

### 2.  Save the CMake Extension Settings for the stored workspace.
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
<br />
<br />


Once you have completed the path configuration, enter "Unix Makefiles" in the "CMake: Generator" field. Please make sure to check the case sensitivity of "Unix Makefiles".

<img src="/img/osh/surf5/vsset29.png" width="600" />

| CMake: Generator    |
|---------------------|
|Unix Makefiles<br /> |

<br />
<br />
<br />
<br />

### 3. Build Project in VS Code

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

You will also be able to confirm that the Build directory has been created. The project folder within the Build directory contains the generated bin files. You can save these bin files to your Surf 5 and use the project.

<img src="/img/osh/surf5/vsset34.png" width="400" />


<br />
<br />
<br />

### How to solve Surf 5 build error in VS Code


If the build is still not working despite configuring Visual Studio Code settings, follow the steps below.
<br />
<br />
<br />
<br />

**Step 1. Delete files within the .vscode directory, excluding "cmake-kits.json"**

If other files have appeared in the .vscode directory, please structure the directory as shown in the image below. You should delete all files except "cmake-kits.json."

<img src="/img/osh/surf5/error1.png" width="500" />
<br />
<br />


**Step 2. Verify the path settings of "CMake: Configure Args" and "CMake: Generator" command in the "Extension Settings" of "CMake Tools**

Please check the path that was previously set in CMake: Configure Args. If it hasn't been saved to the workspace, it is advisable to add it again and save. Configure "CMake: Configure Args" according to your own path as shown in the picture below. Also, check if the directory exists on your PC at that path.

<img src="/img/osh/surf5/vsset28.png" width="600" />

<br />
<br />

Please check the command for the CMake generator. If the command is not entered, please input the command as follows:

<img src="/img/osh/surf5/vsset29.png" width="600" />
<br />
<br />

**Step 3. Delete the "Build" directory**

Next, please delete the "Build" directory. Deleting this directory should not pose any issues for the build process.

<img src="/img/osh/surf5/error2.png" width="500" />
<br />
<br />
**Step 4. Rebuild**

If you have completed the three steps above perfectly, try building the project again within VS Code.

<br />
<br />
<br />
<br />
<br />
-----

## How to make Surf 5 Project in Keil 5


### 1. Download and install KEIL5!

![keil0](/img/products/w7500/documents/appnote/keil0.jpg)

* Download MDK-ARM v5 : [KEIL5](https://www.keil.com/download/product/)
* Installation instructions, please see the Link : [Install](how_to_install_KEIL)

### 2. Download W7500 Library!

![keil1](/img/products/w7500/documents/appnote/keil1.jpg)

You can download W7500 Library from WIZnet's Github repository : [W7500 Library](https://github.com/Wiznet/W7500)

### 3. make workspace! and move the W7500 Library to workspace!

![keil2](/img/products/w7500/documents/appnote/keil2.jpg)

In this example, it is **D:\workspace\project\Library**

### 4. Execute KEIL5 and make new project!

![keil3](/img/products/w7500/documents/appnote/keil3.jpg)

Click to New uVision Project...

![keil4](/img/products/w7500/documents/appnote/keil4.jpg)

Select a project save folder and choose project name.
In this example, **D:\workspace\project\W7500_test\W7500_Test.uvproj**

![keil5](/img/products/w7500/documents/appnote/keil5.jpg)

Choose 'Cortex-M0' because W7500 MCU is based on Cortex-M0

### 5. W7500 start up code and system code setting!

![keil7](/img/products/w7500/documents/appnote/keil7.jpg)

Return to project. You need to make the same folders like the image which is shown on right side

![keil8](/img/products/w7500/documents/appnote/keil8.jpg)
![direction_leftdown](/img/products/w7500/documents/appnote/direction_leftdown.jpg)
![keil9](/img/products/w7500/documents/appnote/keil9.jpg)
![direction_leftdown](/img/products/w7500/documents/appnote/direction_leftdown.jpg)
![keil10](/img/products/w7500/documents/appnote/keil10.jpg)
![direction_leftdown](/img/products/w7500/documents/appnote/direction_leftdown.jpg)
![keil11](/img/products/w7500/documents/appnote/keil11.jpg)
![direction_leftdown](/img/products/w7500/documents/appnote/direction_leftdown.jpg)
![keil12](/img/products/w7500/documents/appnote/keil12.jpg)
![direction_leftdown](/img/products/w7500/documents/appnote/direction_leftdown.jpg)
![keil13](/img/products/w7500/documents/appnote/keil13.jpg)

Follow like upper images. 

![keil14](/img/products/w7500/documents/appnote/keil14.jpg)

And in the same way...  CMSIS Folder include D:\workspace\project\Libraries\CMSIS\Device\WIZnet\W7500\Source\system_W7500.c file

W7500_Periphs folder includes Peripherals to use.

And User folder has to include main.c and so on.


Let's make main.c

![keil15](/img/products/w7500/documents/appnote/keil15.jpg)

Click to Add New Item to the Group.

![keil16](/img/products/w7500/documents/appnote/keil16.jpg)

Select C file and Name it with 'main' and click 'Add'.

![keil17](/img/products/w7500/documents/appnote/keil17.jpg)

Include **w7500x.h** header but... you should show red X because you did not path.

### 6. setting for include paths

![keil18](/img/products/w7500/documents/appnote/keil18.jpg)

Click to Options for Target...

![keil19](/img/products/w7500/documents/appnote/keil19.jpg)

Select 'Include Paths' in C\C++ tap and click the folder icon and click to ... icon

![keil20](/img/products/w7500/documents/appnote/keil20.jpg)

![keil+](/img/products/w7500/documents/appnote/keil_.jpg)

Set 'include path' with

   **D:\workspace\project\Libraries\CMSIS\Device\WIZnet\W7500\Include**
   **D:\workspace\project\Libraries\W7500x_stdPeriph_Driver\inc**
   **D:\workspace\project\Libraries\CMSIS\Include**

![keil21](/img/products/w7500/documents/appnote/keil21.jpg)



### 7. Memory setting!

![](/img/products/w7500/documents/appnote/keil18.jpg)

Click "Options for Target..."

![keil22-1](/img/products/w7500/documents/appnote/keil22-1.jpg)
![direction_down](/img/products/w7500/documents/appnote/direction_down.jpg)
![keil22-2](/img/products/w7500/documents/appnote/keil22-2.jpg)

Click "Target" tap and set with the values which are shown in above pictures

![keil23](/img/products/w7500/documents/appnote/keil23.jpg)

And click "Linker" tap and check [Use Memory Layout from Target Dialog]

### 8. Selection of Peripherals to use 

![keil18](/img/products/w7500/documents/appnote/keil18.jpg)

Click "Options for Target..."

![keil24](/img/products/w7500/documents/appnote/keil24.jpg)

Click "C/C++" tap and add **CORTEX_M0 USE_STDPERIPH_DRIVER** in "Define" field.

### 9. Setting user program to use with the created bin file

![keil18](/img/products/w7500/documents/appnote/keil18.jpg)

Click "Options for Target..."

![keil25](/img/products/w7500/documents/appnote/keil25.jpg)

Click "User" tap and check "Run #1" in "Run User Programs After Build/Rebuild" section  
and write this command **[fromelf --bin -o "$L@L.bin" "#L"]** in order CMSIS DAP to use the bin file.

### 10. Compile the example

![keil26](/img/products/w7500/documents/appnote/keil26.jpg)

Let's compile the example code in **D:\workspace\project\Projects\Peripheral_Examples\GPIO\Blink_LED**
This fold consists of **main.c**,  **W7500x_conf.h**, **W7500x_it.c** and **W7500x_it.h** and you should copy these four files to **D:\workspace\project\W7500_Test**(my project folder)

![keil27](/img/products/w7500/documents/appnote/keil27.jpg)

And copy W7500x_gpio.c into W7500_Periphs folder in order to use gpio peripheral 

![keil28](/img/products/w7500/documents/appnote/keil28.jpg)

And copy **W7500x_it.c** into User folder for interrupt handlers

Add "Include Path" for **W7500x_conf.h** and **W7500x_it.h**

![keil18](/img/products/w7500/documents/appnote/keil18.jpg)

Click "Options for Target..."

![keil19](/img/products/w7500/documents/appnote/keil19.jpg)

Click "Include Paths" in C\C++ tap, "folder icon and ... icon

![keil29](/img/products/w7500/documents/appnote/keil29.jpg)

Set "include path" with **D:\workspace\project\W7500_Test**

![keil30](/img/products/w7500/documents/appnote/keil30.jpg)

Now compile this project!! by pressing **F7** or clicking **Build icon**

![keil31](/img/products/w7500/documents/appnote/keil31.jpg)

After compile, **W7500_Test.bin** file will be created.
And then WIZwiki-W7500 will upload this bin file on itself via the User program you registered.

![](/img/products/w7500/documents/appnote/pdf.jpg)

If you want to convert this document to the PDF file? Click to [Export to PDF]

&copy; COPYRIGHT 2015 WIZnet Co.,Ltd.

