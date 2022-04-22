---
id: w5100s-projects-truestudio
title: Make New W5100S-EVB Projects using TrueSTUDIO
date: 2020-04-03
---

This page introduces that how to make the project for W5100S-EVB with
different IDEs like STMicroelectronics TrueSTUDIO.

## Make a new W5100S-EVB project with TrueSTUDIO IDE

### 0\. Download and install Dev. enviroment & compiler

TrueSTUDIO provides a free Dev. Environment incl. It include IDE and C
compiler.  
**Download the IDE + compiler here:**  
<https://atollic.com/>  

### 1\. Select 'New project' and project type

1\. Execute TrueSTUDIO IDE

  - Mouse right click in left side bar -\> New -\> select C Project

![](/img/products/w5100s/w5100s_evb/true_tool_set1.png)

2\. Select Embedded C Project

  - Write to the project name and click to 'next'  
    ![](/img/products/w5100s/w5100s_evb/true_tool_set2.png)

3\. Select to STM32F1 -\> MCUs -\> STM32F103VC and click to 'next'  
\* Select Thumb-2 and little Endian  
![](/img/products/w5100s/w5100s_evb/initial_set2.png)

4\. Select Newlib standard and click to 'next'  
![](/img/products/w5100s/w5100s_evb/initial_set3.png)

5\. Select ST-LINK Debug probe and click to 'next'  
![](/img/products/w5100s/w5100s_evb/initial_set4.png)

6\. Click to Finish  
![](/img/products/w5100s/w5100s_evb/initial_set5.png)

-----

### 2\. Import libraries to TrueSTUDIO IDE workspace

You should import provided library projects to your new project for easy
to configure. This is the required library components for new projects
as follows.  

  - Folder list
      - ioLibrary\_Driver
      - CMSIS
      - CMSIS\_boot
      - stm\_lib
      - syscalls

<!-- end list -->

  - File list
      - main.c
      - HALInit.c
      - HALInit.h
      - msgq.c
      - msgq.h
      - serialCommand.c
      - serialCommand.h
      - W5100SRelFunctions.c
      - W5100SRelFunctions.h

Download the libraries and projects for W5100S-EVB from
![](/img/products/w5500/w5500_evb/icons/link.png)[W5100S-EVB GitHub
repository](https://github.com/Wiznet/W5100S-EVB). After downloading,
import the required project libraries to your workspace.

1\. Delete "main.c", "tiny\_printf.c", "stm32f1xx\_it.c",
"stm32f1xx\_it.h" these files  
![](/img/products/w5100s/w5100s_evb/true_tool_set3.png)

2\. **Src folder** mouse right click -\> click to Import  
![](/img/products/w5100s/w5100s_evb/true_tool_set4.png)

3\. Select General -\> Archive File  
![](/img/products/w5100s/w5100s_evb/true_tool_set5.png)

4\. Select Library from Github repository  
![](/img/products/w5100s/w5100s_evb/tools_set4.png)

5\. check to import files as below picture  
\* Until now we loaded library file lists.

  - Next, we will load folder lists.

![](/img/products/w5100s/w5100s_evb/true_tool_set6.png)

6\. Mouse right click to **Libraries folder** -\> click to Import  
![](/img/products/w5100s/w5100s_evb/true_tool_set7.png)

7\. Select General -\> Archive File  
![](/img/products/w5100s/w5100s_evb/true_tool_set5.png)

8\. Select Library from Github repository  
![](/img/products/w5100s/w5100s_evb/tools_set4.png)

9\. Check to import folders as below picture

  - Until now we loaded all files
  - It is done to import files

![](/img/products/w5100s/w5100s_evb/true_tool_set8.png)

-----

### 3\. Set to Properties

Next step we will do set to Build & General setting in properties. **It
set must be necessary.**

1\. Execute properties in the menu (click project -\> properties)
![](/img/products/w5100s/w5100s_evb/true_tool_set9.png)

2\. Click C/C++ Build tap -\> Settings -\> Tool Settings -\> Assembler
-\> Symbols and adds defined symbols list as below picture  
![](/img/products/w5100s/w5100s_evb/true_tool_set11.png)

3\. As above action that adds defined symbols in C compiler Symbols as
below picture  
![](/img/products/w5100s/w5100s_evb/true_tool_set10.png)

4\. And Click Other tap-\> Output format and check to Convert build
output as below picture
![](/img/products/w5100s/w5100s_evb/true_tool_set12.png)

5\. Next, Click C/C+ General tap -\> Paths and Symbols -\> includes -\>
GNU C and adds include directories list as below picture
![](/img/products/w5100s/w5100s_evb/true_tool_set13.png)

6\. As above action that adds include directories in S,s,asm section as
below picture ![](/img/products/w5100s/w5100s_evb/true_tool_set14.png)

-----

### 4\. Modify stm32f10x.h file

Users should be modified to stm32f10x.h as below picture.

  - Modified point is refer to below words and picture
  - **"\#define HSE\_VALUE ((uint32\_t)8000000)" -\> "\#define
    HSE\_VALUE ((uint32\_t)12000000)"**

![](/img/products/w5100s/w5100s_evb/true_tool_set15.png)

-----

### 5\. Project build And Complete settings

Before Complete, Users should check build project

1\. Project mouse right click -\> Click clean project
![](/img/products/w5100s/w5100s_evb/true_tool_set16.png)

2\. Project mouse right click -\> Click project build
![](/img/products/w5100s/w5100s_evb/true_tool_set17.png)

From now on, you can make your own application project based on the
newly created project for W5100S-EVB\!  
Enjoy W5100S-EVB \!\!

-----