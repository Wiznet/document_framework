## Tutorial

-----

### Before Tutorial

-----

\<markdown\>

``` 
 - Download program file(CoIDE) and USB drive(ColinkEx) from [http://www.coocox.org/CoCenter.htm](http://www.coocox.org/CoCenter.html).
```

\!\[\](lib/exe/fetch.php?media=:osh:cookie:0.jpg) \</markdown\>

### Tutorial Using CoIDE

-----

\<markdown\>

\- Click the CoIDE icon

\!\[\](lib/exe/fetch.php?media=:osh:cookie:1.jpg)

\- The welcome page is a convenient entry for “Browse in Repository”,
“Create a New Project”, “Open a Project”, refer to “User Guide” and go
to “Forum"

\!\[\](lib/exe/fetch.php?media=:osh:cookie:2.jpg)

\- A wizard window will pop up, enter a name for the project (my project
name: LoopbackTest)),You can also modify the Project Path.

\!\[\](lib/exe/fetch.php?media=:osh:cookie:4.jpg)

\- Choose a model. For example, select ''Chip Model', then click “Next”.

\!\[\](lib/exe/fetch.php?media=:osh:cookie:5\_chip.jpg)

\- Select a chip. For example, select "M0516LBN"

\!\[\](lib/exe/fetch.php?media=:osh:cookie:6\_chip.jpg)

\- Click "Finish". CoIDE automatically generates LoopbackTest.coproj
file and one configuration: "LoopbackTest".

\- Click the Repository Button

\!\[\](lib/exe/fetch.php?media=:osh:cookie:7.jpg)

\- Check a component; for example, select
'GPIO`SPI`UART`CoX.cookie.M051.config`C library''Retarget printf'. CoIDE
will automatically check the components, which are depended by the
checked component.

\!\[\](lib/exe/fetch.php?media=:osh:cookie:7\_2.jpg) \</markdown\>

### Tutorial Using W5500

-----

\<markdown\> \#\#\#Change code before compile \</markdown\> \<markdown\>
- Select the file "stdio.h/printf.c". You want to use "printf", you have
to add as below. \</markdown\>

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

\<markdown\> - Select the define variable in "ethernet/w5500". You
should select interface mode and kind of chip. \</markdown\>

    #define _WIZCHIP_                      5500   // 5100, 5200, 5500
    
    #if (_WIZCHIP_ == 5500)
      #define _WIZCHIP_ID_                 "W5500\0"
    //   #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_FDM_
       #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_VDM_
       #include "W5500/w5500.h"
       \<markdown\> - Select the define variable in "common/common.h". You can
modify the Log Level. \</markdown\>

``` common.h
//------------------------------ Etc ------------------------------
#define WIZ_LOG_LEVEL   2       // 0: No print,  1: Error,  2: Error+Log,  3: Error+Log+Debug
```

\<markdown\> \#\# Download : \[Download
DriverV1.0.0\](lib/exe/fetch.php?media=:products:w5500:iolibrary\_v100.zip)

\- Enter the menu (view \> Configuration)

\!\[\](lib/exe/fetch.php?media=:osh:cookie:7\_3.jpg)

\- You can select the Hardware Adapter type(Colink EX)

\!\[\](lib/exe/fetch.php?media=:osh:cookie:7\_4.jpg)

\- In the project view, select the parent directory in which you want to
create the Group (If you do not select the parent directory, the default
is the root directory of the project), select Add Group and Add file in
context menu

\!\[\](lib/exe/fetch.php?media=:osh:cookie:8.jpg)

\- You should make up same file path

\!\[\](lib/exe/fetch.php?media=:osh:cookie:9.jpg)

\- Select the complie button. If necessary, you can select Rebuild to
recompile your project or select Clean to clean-up the project that has
been compiled.

\!\[\](lib/exe/fetch.php?media=:osh:cookie:9\_1.jpg)

\- compile result

\!\[\](lib/exe/fetch.php?media=:osh:cookie:10.jpg)

\- Click the "Download" button to download code to flash

\!\[\](lib/exe/fetch.php?media=:osh:cookie:10\_1.jpg)

\- download result

\!\[\](lib/exe/fetch.php?media=:osh:cookie:11.jpg)

\- You can confirm the serial value through terminal program

\!\[\](lib/exe/fetch.php?media=:osh:cookie:12.jpg)

\#\#Example : \[Example for cookie
board\](<http://wizwiki.net/wiki/doku.php?id=osh:cookie:loopback_test>)

\</markdown\>
