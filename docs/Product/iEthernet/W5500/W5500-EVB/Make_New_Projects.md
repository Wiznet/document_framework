---
id: make_new_projects
title: Make New Projects
date: 2020-04-07
---


# Make New W5500 EVB Projects

This page introduce that how to make project for W5500 EVB with
different IDEs like NXP LPCXpresso.


## Make a new W5500 EVB project with LPCXpresso IDE

### 0. download and install Dev. enviroment & compiler

NXP provide a free (also commercial version available) Dev. Enviroment
incl. IDE and C compiler. The free version compiler is limited to 8k
code but can be extended to 256k of code by a free registration.

Download the IDE + compiler here:  
🌎 http://www.lpcware.com/lpcxpresso/download  
Parallel to the download & install you register here:  
🌎 http://www.lpcware.com/user/register 
In the LPCXresso IDE you can go to:  
'Help' -> 'Create serial number and register (Free Edition)...'  
here, copy that serial number.

Then, logged in at 🌎 http://www.lpcware.com , you can create the
activation code using that 'serial number':
🌎 http://www.lpcware.com/lpcxpresso/activate  
copy the activation code here, and go to:  
'Help' -> 'Activate (Free Edition)...'  
enter (paste) the activation code and now you can create projects of
256k size.

Now, after a restart, your LPCXress IDE is running and you can create
new and your own projects for the NXP MCUs.


### 1. Select 'New project' and project type

QuickStart panel (Located in the lower left in LPCXpresso IDE as
default) -> Select 'New project'  

  - MCU category and Project type selection -> Select 'LPC11Exx' and
    'LPCOpen - C Project'
  - Target MCU selection -> Select 'LPC11E36/501'

![](/img/products/w5500/w5500_evb/figures/make_new_project_quickstart_box.jpg)

![](/img/products/w5500/w5500_evb/figures/make_new_project_newproject_box.jpg)

![](/img/products/w5500/w5500_evb/figures/make_new_project_select_mcu_box.jpg)

-----


### 2. Import libraries to LPCXpresso IDE workspace

You should import provided library projects to your new project for easy
to configure and utilize MCU APIs. This is the required library
components for new projects as follows.  

  - LPCOpen Chip Library - lpc\_chip\_11exx
  - LPCOpen Board Library (W5500 EVB Board Library) -
    wiznet\_evb\_w5500evb\_board
  - WIZnet ioLibrary - ioLibrary

Download the libraries and projects for W5500 EVB from
![](/img/products/w5500/w5500_evb/icons/link.png)[WIZnet GitHub
repository](https://github.com/Wiznet/W5500_EVB). After downloading,
import the required project libraries to your workspace.

![](/img/products/w5500/w5500_evb/figures/make_new_project_select_libs_box1.jpg)

![](/img/products/w5500/w5500_evb/figures/make_new_project_import_lib_box.jpg)

-----


### 3. Select Chip and Board libraries

W5500 EVB projects based on libraries as below. Select the LPCOpen Chip
and Board Library and add on your project.

  - LPCOpen Chip Library - lpc_chip_11exx
  - LPCOpen Board Library - wiznet_evb_w5500evb_board

![](/img/products/w5500/w5500_evb/figures/make_new_project_select_libs_box2.jpg)

![](/img/products/w5500/w5500_evb/figures/make_new_project_lib_chip_box.jpg)

![](/img/products/w5500/w5500_evb/figures/make_new_project_lib_board_box.jpg)

-----


### 4. Create a 'new project'

Set the remaining options for your environment and press the finish
button, the 'new project' is created.  
![](/img/products/w5500/w5500_evb/figures/make_new_project_project_explorer_box.jpg)

-----


### 5. Link the ioLibrary to your project

The LPCXpresso IDE provides 'Smart Update' function. it also provides a
simple mechanism for creating the links to a static library project from
an application project. For more details, please refer to
![](/img/products/w5500/w5500_evb/icons/link.png) [NXP FAQ page for 'Linking to library projects'](http://www.lpcware.com/content/faq/lpcxpresso/creating-linking-library-projects)

![](/img/products/w5500/w5500_evb/figures/make_new_project_smart_update.jpg)

![](/img/products/w5500/w5500_evb/figures/make_new_project_smart_update_select_box.jpg)

-----


### 6. Set the library type for serial debugging

If the 'printf(/)' / 'scanf(/)' functions to use a UART, user can
retargeting to Redlib's printf(/) as follows. For more details, please
refer to ![](/img/products/w5500/w5500_evb/icons/link.png) [NXP FAQ page for
'Using printf(/)'](http://www.lpcware.com/content/faq/lpcxpresso/using-printf)

![](/img/products/w5500/w5500_evb/figures/make_new_project_set_the_library_type_box.jpg)

-----


### 7. Change the C/C++ build commands for generate firmware image

Build command changes in project properties for generate 'BIN' and 'HEX'
files.  
The following changes to the 'build commands'.

``` make
arm-none-eabi-size "${BuildArtifactFileName}"
arm-none-eabi-objcopy -O ihex "${BuildArtifactFileName}" "${BuildArtifactFileBaseName}.hex"
arm-none-eabi-objcopy -O binary "${BuildArtifactFileName}" "${BuildArtifactFileBaseName}.bin"
checksum -p ${TargetChip} -d "${BuildArtifactFileBaseName}.bin"
```

![](/img/products/w5500/w5500_evb/figures/make_new_project_properties.jpg)

![](/img/products/w5500/w5500_evb/figures/make_new_project_properties_post-build_command_box.jpg)

-----


### 8. Complete settings

From now on, you can make your own application project based on newly
created project for W5500 EVB\!  
Please refer to !<a href="http://www.nxp.com/documents/other/LPCXpresso_Getting_Started_User_Guide.pdf" target="_blank">](/img/products/w5500/w5500_evb/icons/download.png) [NXP LPCXpresso Getting started user guide</a>
for more details.

-----
