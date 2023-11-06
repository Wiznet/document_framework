---
id: w5100s-projects-stm32cubeide
title: Make New W5100S-EVB Projects using STM32CubeIDE
date: 2022-12-13
keywords: [w5100s,ethernet chip,wiznet,hardwired tcp/ip,arduino ethernet,pico ethernet]
description: W5100S chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology
---

This page introduces how to make the project for W5100S-EVB with
different IDEs such as STMicroelectronics STM32CubeIDE.

## Make a new W5100S-EVB project with STM32CubeIDE

### 0\. Download and install Dev. enviroment & compiler

STM32CubeIDE provides a free Dev. Environment incl. It include IDE and C
compiler.  
**Download the IDE + compiler here:**  
https://www.st.com/en/development-tools/stm32cubeide.html


### 1\. Import libraries to STM32CubeIDE workspace

You should import provided projects to your new project for easy to
configure.

Download the projects for W6100-EVB from
![](/img/link.png)[W5100S\_EVB GitHub repository](https://github.com/Wiznet/W5100S-EVB). After downloading,
import the required project to your reposiroty or workspace.

-----
1-1\. click .project file in reposiroty 
![](/img/products/w5100s/w5100s_evb/stm_cube_set1_1_1.png)

1-2\. Project File Creation Completed
![](/img/products/w5100s/w5100s_evb/stm_cube_set1_1_2.png)

-----

2-1\. mouse right click → click to \[Import\]
![](/img/products/w5100s/w5100s_evb/stm_cube_set1_2_1.png)

2-2\. Select -> [Project from folder or Archive]
![](/img/products/w5100s/w5100s_evb/stm_cube_set1_2_2.png)

2-3\. Select Folder from Github repository  
![](/img/products/w5100s/w5100s_evb/stm_cube_set1_2_3.png)

2-4\. Click Finish  
![](/img/products/w5100s/w5100s_evb/stm_cube_set1_2_4.png)

-----

### 2\. Project build And Complete settings

Before Complete, Users should check build configuration

1-1\. Project mouse right click -\> Click Properties
![](/img/products/w5100s/w5100s_evb/stm_cube_set2_1_1.png)

1-2\. \[C/C++Build\]-\>\[Settings\]-\>Click \[Convert to Intel Hex file\]
![](/img/products/w5100s/w5100s_evb/stm_cube_set2_1_2.png)

1-3\. \[C/C++General\]-\>\[Paths and Symbols\]-\>\[Includes\]-\> insert Paths
![](/img/products/w5100s/w5100s_evb/stm_cube_set2_1_3.png)

1-4\. \[C/C++General\]-\>\[Paths and Symbols\]-\>\[Includes\]-\> insert Symbols
![](/img/products/w5100s/w5100s_evb/stm_cube_set2_1_4.png)

-----
2-1\. Project mouse right click -\> Click \[Clean Project\]
![](/img/products/w5100s/w5100s_evb/stm_cube_set2_2_1.png)

2-2\. Project mouse right click -\> Click \[Build Project\]
![](/img/products/w5100s/w5100s_evb/stm_cube_set2_2_2.png)

-----

From now on, you can make your own application project based on the
newly created project for W5100S-EVB\!  
Enjoy W5100S-EVB \!\!

-----
