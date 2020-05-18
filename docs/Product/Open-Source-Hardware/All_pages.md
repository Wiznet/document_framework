# Overview

Cookie is Open-Source Hardware platform and is provided
from CooCox. Cookie is Hardware compatible Arduino Board and based on
Cortex M core instead of AVR. So, it can use with Arduino Shield as
[ioShield-A](Product/Open-Source-Hardware/ioShield-A.md).
[ioShield-A](Product/Open-Source-Hardware/ioShield-A.md) allows
Cookie to connect to the Internet.

Cookie is developed on IDE as CoIDE provided from CooCox, and For
reducing host dependency code provides with CoX peripheral interface
library.

-----

## Cookie board

-----
Cookie is an open-source Arduino™ form-factor compatible
ARM prototyping platform based on 32-bit ARM Cortex M0/3/4 MCUs plus
hardware and software building blocks.


[Learn more](<http://www.coocox.org/Cookie.html>)

[Cookie Numirco
Edition](<http://www.coocox.org/Cookie/Cookie_Nuvoton.html>)

-----
  * [CooCox](CooCox.md)
  * [Tutorial](Tutorial.md)
  * [IP Configuration](IP_Configuration.md)
    * [loopback](loopback.md)
  * [All pages](All_pages.md)  
  # CooCox

Visit to the Web site

URL :🌎<http://www.coocox.org/Index.html>\](<http://www.coocox.org/Index.html>.


-----

## Installation

-----
CoIDE just provides development environment without
tool-chains. So you need to install tool-chains at first. We use ARM gcc
4.7 for tool-chains.

**ARM GCC 4.7 Features:**

\- All GCC 4.7 features, plus latest mainline features - Additional code
size optimizations - Newlib-nano: newlib branch optimized for code size

[Download the latest
arm-gcc-embbed](https://launchpad.net/gcc-arm-embedded/+download)


## CooCox Open IDE

-----
**CooCox** provides integration development environment
called **CoIDE** for ARM Cortex M series microcontrollers. **CoIDE**
supports ARM gcc based development environment of **eclipse**.

**System requirements:**

\- Windows XP SP3 / Windows Vista / Windows 7

**Features:**

\- Free to use - Full functional IDE - Component-oriented development
platform - Internet-based, efficient integration of network resources -
Integrates CoOS - Peripheral registers

[CoIDE Download and learn
more](http://www.coocox.org/CooCox_CoIDE.htm) 

## Tool-chains setting in CoIDE

-----

Before you use CoIDE to start your project, you need to
config the GCC compiler at first.

[Compiler Setting in
CoIDE](http://www.coocox.org/CoIDE/Compiler_Settings.html)


## CoX-Peripheral Interface

-----
**Cox-Peripheral interface** is Common Wrapper Interface to
port peripheral easily which is different in each vendors. If SPI is
designed by Cox-Peripheral Interface starting as x(e.g. xGPIOModeSet),
you can operate by changing just SPI interface PIN setting in each MCUs
or EVB-boards.

[Learn more](http://www.coocox.org/COX.html)
## Tutorial

-----

### Before Tutorial

-----

 - Download program file(CoIDE) and USB drive(ColinkEx) from [http://www.coocox.org/CoCenter.htm](http://www.coocox.org/CoCenter.html).



### Tutorial Using CoIDE

-----


 - Click the CoIDE icon


 - The welcome page is a convenient entry for “Browse in Repository”,
“Create a New Project”, “Open a Project”, refer to “User Guide” and go
to “Forum"



 - A wizard window will pop up, enter a name for the project (my project
name: LoopbackTest)),You can also modify the Project Path.



 - Choose a model. For example, select ''Chip Model', then click “Next”.


 - Select a chip. For example, select "M0516LBN"


 - Click "Finish". CoIDE automatically generates LoopbackTest.coproj
file and one configuration: "LoopbackTest".

 - Click the Repository Button


 - Check a component; for example, select
'GPIO`SPI`UART`CoX.cookie.M051.config`C library''Retarget printf'. CoIDE
will automatically check the components, which are depended by the
checked component.


### Tutorial Using W5500

-----
### Change code before compile 
- Select the file "stdio.h/printf.c". You want to use "printf", you have
to add as below.

``` cpp

void PrintChar(char c)
{
    /* Send a char like: 
       while(Transfer not completed);
       Transmit a char;
    */  
   xUARTCharPut(xUART0_BASE,c); // additional items
}
```

- Select the define variable in "ethernet/w5500". You
should select interface mode and kind of chip. 
>

    #define _WIZCHIP_                      5500   // 5100, 5200, 5500
    
    #if (_WIZCHIP_ == 5500)
      #define _WIZCHIP_ID_                 "W5500\0"
    //   #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_FDM_
       #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_VDM_
       #include "W5500/w5500.h"
       \<markdown\> - Select the define variable in "common/common.h". You can
modify the Log Level. 

``` common.h
//------------------------------ Etc ------------------------------
#define WIZ_LOG_LEVEL   2       // 0: No print,  1: Error,  2: Error+Log,  3: Error+Log+Debug
```
## Download : 

 - Enter the menu (view \> Configuration)



 - You can select the Hardware Adapter type(Colink EX)



 - In the project view, select the parent directory in which you want to
create the Group (If you do not select the parent directory, the default
is the root directory of the project), select Add Group and Add file in
context menu



 - You should make up same file path



 - Select the complie button. If necessary, you can select Rebuild to
recompile your project or select Clean to clean-up the project that has
been compiled.



 - compile result



 - Click the "Download" button to download code to flash



 - download result



 - You can confirm the serial value through terminal program



## Example : 
## IP Configuration

-----

## IP configuration in PC

-----

If IP address of your PC and WIZ550io are different, you
need to configure your PC network setting.

  - Click on the Start Menu and open the Control Panel.
  - Enter to'Network and Internet' and enter to Network and Sharing Center.
  - Click'Change adapter settings at left side.



  - Double click Local Area Connection icon and click Properties and
enter IPv4 Properties.


  - Then, set your IP address and subnet mask as same as WIZ550io's IP
address and subnet mask. 
  - Or, you can add IP address by setting
Advanced. Click Advanced.. button.



  - Click Add... button and add IP address and subnet mask.
## TCP Server Loopback

-----
### Download : [Project download](/img/osh/cookie/w5500_cookie_v100.zip),[Hercules test program](http://www.hw-group.com/products/hercules/index_en.html)

 - Select TCP Client tab in Hercules and type Server IP address
displaying in Tera Term at Module IP and port number box.

 - Click Connect. 
 - If connection is done successfully, you can see
message as follows.

 - Type data you want to send and click Send button. If you want to send
string data, uncheck HEX checkbox. 
 - After send data, you can see sent
data and received data.



## UDP Loopback

-----

 - Select UDP tab in Hercules and type IP address and port
number displaying in Tera Term at Module IP and Port box in Hercules.
And then, type port number you want in Local port box and click Listen
button. Now, UDP socket opened.



 - Type data you want to send and click Send button. If you want to send
string data, uncheck HEX checkbox. 
 - After send data, you can see sent
data and received data.

