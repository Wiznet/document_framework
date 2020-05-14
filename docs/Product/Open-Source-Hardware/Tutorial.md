## Tutorial

-----

### Before Tutorial

-----

``` 
 - Download program file(CoIDE) and USB drive(ColinkEx) from [http://www.coocox.org/CoCenter.htm](http://www.coocox.org/CoCenter.html).
```


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
should select interface mode and kind of chip. \</markdown\>

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


