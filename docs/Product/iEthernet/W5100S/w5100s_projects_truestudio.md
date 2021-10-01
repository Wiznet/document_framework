---
id: w5100s_projects_truestudio
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

<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set1.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set1.png").default} alt=""/></a>

2\. Select Embedded C Project

  - Write to the project name and click to 'next'  
    <a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set2.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set2.png").default} alt=""/></a>

3\. Select to STM32F1 -\> MCUs -\> STM32F103VC and click to 'next'  
\* Select Thumb-2 and little Endian  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/initial_set2.png").default}><img src={require("/img/products/w5100s/w5100s_evb/initial_set2.png").default} alt=""/></a>

4\. Select Newlib standard and click to 'next'  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/initial_set3.png").default}><img src={require("/img/products/w5100s/w5100s_evb/initial_set3.png").default} alt=""/></a>

5\. Select ST-LINK Debug probe and click to 'next'  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/initial_set4.png").default}><img src={require("/img/products/w5100s/w5100s_evb/initial_set4.png").default} alt=""/></a>

6\. Click to Finish  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/initial_set5.png").default}><img src={require("/img/products/w5100s/w5100s_evb/initial_set5.png").default} alt=""/></a>

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
<a target="_blank" href={require("/img/products/w5500/w5500_evb/icons/link.png").default}><img src={require("/img/products/w5500/w5500_evb/icons/link.png").default} alt=""/></a>[W5100S-EVB GitHub
repository](https://github.com/Wiznet/W5100S-EVB). After downloading,
import the required project libraries to your workspace.

1\. Delete "main.c", "tiny\_printf.c", "stm32f1xx\_it.c",
"stm32f1xx\_it.h" these files  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set3.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set3.png").default} alt=""/></a>

2\. **Src folder** mouse right click -\> click to Import  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set4.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set4.png").default} alt=""/></a>

3\. Select General -\> Archive File  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set5.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set5.png").default} alt=""/></a>

4\. Select Library from Github repository  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/tools_set4.png").default}><img src={require("/img/products/w5100s/w5100s_evb/tools_set4.png").default} alt=""/></a>

5\. check to import files as below picture  
\* Until now we loaded library file lists.

  - Next, we will load folder lists.

<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set6.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set6.png").default} alt=""/></a>

6\. Mouse right click to **Libraries folder** -\> click to Import  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set7.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set7.png").default} alt=""/></a>

7\. Select General -\> Archive File  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set5.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set5.png").default} alt=""/></a>

8\. Select Library from Github repository  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/tools_set4.png").default}><img src={require("/img/products/w5100s/w5100s_evb/tools_set4.png").default} alt=""/></a>

9\. Check to import folders as below picture

  - Until now we loaded all files
  - It is done to import files

<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set8.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set8.png").default} alt=""/></a>

-----

### 3\. Set to Properties

Next step we will do set to Build & General setting in properties. **It
set must be necessary.**

1\. Execute properties in the menu (click project -\> properties)
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set9.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set9.png").default} alt=""/></a>

2\. Click C/C++ Build tap -\> Settings -\> Tool Settings -\> Assembler
-\> Symbols and adds defined symbols list as below picture  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set11.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set11.png").default} alt=""/></a>

3\. As above action that adds defined symbols in C compiler Symbols as
below picture  
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set10.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set10.png").default} alt=""/></a>

4\. And Click Other tap-\> Output format and check to Convert build
output as below picture
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set12.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set12.png").default} alt=""/></a>

5\. Next, Click C/C+ General tap -\> Paths and Symbols -\> includes -\>
GNU C and adds include directories list as below picture
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set13.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set13.png").default} alt=""/></a>

6\. As above action that adds include directories in S,s,asm section as
below picture <a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set14.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set14.png").default} alt=""/></a>

-----

### 4\. Modify stm32f10x.h file

Users should be modified to stm32f10x.h as below picture.

  - Modified point is refer to below words and picture
  - **"\#define HSE\_VALUE ((uint32\_t)8000000)" -\> "\#define
    HSE\_VALUE ((uint32\_t)12000000)"**

<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set15.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set15.png").default} alt=""/></a>

-----

### 5\. Project build And Complete settings

Before Complete, Users should check build project

1\. Project mouse right click -\> Click clean project
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set16.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set16.png").default} alt=""/></a>

2\. Project mouse right click -\> Click project build
<a target="_blank" href={require("/img/products/w5100s/w5100s_evb/true_tool_set17.png").default}><img src={require("/img/products/w5100s/w5100s_evb/true_tool_set17.png").default} alt=""/></a>

From now on, you can make your own application project based on the
newly created project for W5100S-EVB\!  
Enjoy W5100S-EVB \!\!

-----