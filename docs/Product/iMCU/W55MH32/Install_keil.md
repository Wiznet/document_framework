---
id: install_keil
title: Install Keil5 and Create a New Project
date: 2025-07-11
---

# How to Install KEIL5 and Create a New Project?

## Reminder

1. The installation path should not contain any other characters. It must be an English path.
2. The installation directory should not conflict with the KEIL for the 51 microcontroller or KEIL4. The directories of the three should be separated.
3. The installation of KEIL5 has one more step compared to KEIL4. The MCU library must be added, otherwise it cannot be used.
4. If there are inexplicable errors during use, first search for solutions on Google. Don't panic.

## Obtain the KEIL5 installation package

Go to the KEIL official website to download at: [Keil Product Downloads](https://www.keil.com/download/product/). It is recommended to use the latest version or a version close to the latest one.

![keil_1](\img\products\W55MH32\keil_1.png)

## Start Installing KEIL5

Double-click the KEIL5 installation package to start the installation. 

![keil_2](\img\products\W55MH32\keil_2.png)

Check "I agree to all the terms of the preceding License Agreement" and then click "Next":

![keil_3](\img\products\W55MH32\keil_3.png)

Select the installation path. The path cannot contain any other characters except English characters . 

> Note: There might be various chip packages for future use that will be installed under the Pack directory, which could take up a lot of space. It is recommended that users with limited free space on the C drive directly edit the path in the box and change C to D (or any other drive, just change the first character, and be careful not to delete the wrong symbols).

![keil_4](\img\products\W55MH32\keil_4.png)

Fill in the user information. Just fill in all the blanks (using the space key on the keyboard). 

![keil_5](\img\products\W55MH32\keil_5.png)

Press finish to completed the installation.

![keil_6](\img\products\W55MH32\keil_6.png)

## Install the W55MH32 Package

Open the "The Package and FLASH Algorithm" folder in the W55MH32 development kit folder. Double - click the "W55MH32_DFP.1.0.0.pack" package and install it.

[Download W55MH32 Package and FLASH Algorithm](./Datasheet.md)

![W55MH32 package](\img\products\W55MH32\package_1.png)

## Open the example project

Open the SDK\ModuleDemo folder in the data package. It contains most of the peripheral examples as well as the TOE engine examples. 

![example_1](\img\products\W55MH32\example_1.png)

Among them, the TOE engine examples include applications of various network protocols. 

![example_2](\img\products\W55MH32\example_2.png)

When opening a project file in KEIL5, mainly look for the file with the.uvprojx suffix. For most of the previous example routines, you can directly find the.uvprojx file and open it. Starting from the routine of the firmware library version in the newly created project, the project is opened in the form of a project template. At this time, the.uvprojx file is mainly stored in the Project folder. Find it and double-click to open it. 

![example_3](\img\products\W55MH32\example_3.png)

Let's briefly familiarize ourselves with the main window interface of KEIL5:

- Menu Bar: Includes items such as File, Edit, View, Project, and Help.
- Toolbar: Features shortcut buttons for common tools. Some frequently used tools will be highlighted below.
- Project Window: Primarily displays project contents, including file groups, source files, and header files.
- Editing Window: The area where you write code.
- Editing Window: Provides feedback on compilation and programming information.
- Status Bar: Shows status information such as cursor position (row and column), character encoding, and keyboard NUM lock status.

![example_4](\img\products\W55MH32\example_4.png)

The following are the three types of frequently used tool shortcut buttons:

![example_5](\img\products\W55MH32\example_5.png)

1. Shortcut buttons for simulation: They are used during simulation and have the function of marking breakpoints. 

   |       English  name        | keyboard  shortcuts |
   | :------------------------: | :-----------------: |
   | Start/Stop  Debug Session  |     Ctrl  + F5      |
   | Insert/Remove  Breakpoint  |         F9          |
   | Enable/Disable  Breakpoint |     Ctrl  + F9      |
   |  Disable  All Breakpoints  |         --          |
   |   Kill  All Breakpoints    | Ctrl  + Shift + F9  |

2. Compilation-related shortcut buttons: Used to compile and download code.

   | English  name | keyboard  shortcuts |
   | :-----------: | :-----------------: |
   |   Translate   |     Ctrl  + F7      |
   |     Build     |         F7          |
   |    Rebuild    |          -          |
   | Batch  Build  |          -          |
   |  Stop  Build  |          -          |
   |   Download    |         F8          |

3. The Project Target Options, also known as the magic wand, is used for configuring the project target, such as selecting the chip device, setting the C/C++ options, configuring the simulation, and so on. 

## New construction project

Next, we will work with all of you to build a new project step by step.

First, we will click Project -> New μVision Project... ：

![project_1](\img\products\W55MH32\project_1.png)

Then create a new folder to store the project files (note that the path should not contain any characters except english)-> Enter the name of the project file -> Click Save:

![project_2](\img\products\W55MH32\project_2.png)

After saving, a window named "Select Device for Target 'Target 1'..." will pop up. Click on WIZnet -> W55M3 Series, then select the W55MH32L chip, and finally click OK.

![project_3](\img\products\W55MH32\project_3.png)

> Note: If the chip is not displayed, it means the pack package is not installed. Just find it in the development kit and install it.

Continue to click OK:

![project_4](\img\products\W55MH32\project_4.png)

Click on the triangular button (Manage Project Items):

![project_5](\img\products\W55MH32\project_5.png)

In this window, we can add or delete projects, folders and files, and also rename them. Files can be added as needed. If you are not sure about the function of a file or find it troublesome to add files repeatedly later, you can add all of them at once.

![project_6](\img\products\W55MH32\project_6.png)

New file -> Input " #include "w55mh32.h" " in this file to add the header file > Click the save button at the top left corner -> Create a USER folder and double-click to open it -> Input the file name and file type as "main.c" -> Click save:

![project_7](\img\products\W55MH32\project_7.png)

Double-click on the "USER" folder -> Locate "main.c" and click to select it -> Click "Add" to add the file:

![project_8](\img\products\W55MH32\project_8.png)

Click the magic wand -> Click C/C++ -> Enter "USE_STDPERIPH_DRIVER" as the pre-defined value in Define -> Click the "... " button on the right side of Include Paths to set the folder path inclusion -> Add the path -> Click the "... " button on the right side of the path to preview and select the folder -> Click OK -> Click OK:

![project_9](\img\products\W55MH32\project_9.png)

Click the Magic Wand again -> Click Target -> Select Compiler Version as V5:

![project_10](\img\products\W55MH32\project_10.png)

Click on "Output" -> Enter the name of the output file -> Check "Create HEX file"

![project_11](\img\products\W55MH32\project_11.png)

Click Debug -> Select CMSIS-DAP Debugger as the download and debugging method -> Click Settings -> Click Flash Download -> Check the box for Automatic Reset -> Click OK -> Click OK:

![project_12](\img\products\W55MH32\project_12.png)

In the main.c file, write the main function. After clicking on "Compile", 25 errors are found and it prompts that the "w55mh32_conf.h" file is missing:

![project_13](\img\products\W55MH32\project_13.png)

w55mh32_conf.h is the user configuration file, and we can find it within the routine. Open the ModuleDemo folder under the 1.SDK folder, and randomly select a routine. Then, in the USER folder, copy and paste the w55mh32_conf.h file into the USER folder of our newly created project:

![project_14](\img\products\W55MH32\project_14.png)

Also include the Include path of the USER file:

![project_15](\img\products\W55MH32\project_15.png)

Click "Compile" again, and there are 0 errors and 0 warnings.

![project_16](\img\products\W55MH32\project_16.png)

In this way, we successfully created a new project.