echo off
setlocal
SET SCRIPT_DIR=%~dp0

set ProgX86="C:\Program Files (x86)\STMicroelectronics\STM32Cube\STM32CubeProgrammer\bin\STM32_Programmer_CLI.exe"
set Prog64="C:\Program Files\STMicroelectronics\STM32Cube\STM32CubeProgrammer\bin\STM32_Programmer_CLI.exe"

if exist  %Prog64% (
set stm32programmercli=%Prog64%
) else (
	if exist %ProgX86% (
		set stm32programmercli=%ProgX86%
	) else 	(
		echo ****************ERROR*********************
		echo STM32CubeProgrammer not found
		echo Please update STM32CubeProgrammer path in C:\STM32SecuWS\Tools\Other\SetEnv.bat
		echo ******************************************
		pause
	)
)

echo "STEP1 prepare WIZ510SSL for TFM script"
set connect_no_reset="-c port=SWD mode=HotPlug"
set connect="-c port=SWD mode=HotPlug --hardRst"
set do_mass_erase="-e all -rst"
%stm32programmercli% %connect_no_reset% %do_mass_erase%

set disable_dbank="-ob DBANK=0"
%stm32programmercli% %connect_no_reset% %disable_dbank%

set activate_TZ__ob="-ob TZEN=1"
set default_ob1="-ob SECWM1_PSTRT=0 SECWM1_PEND=12" 
set default_ob2="-ob SECWM2_PSTRT=1 SECWM2_PEND=0" 

%stm32programmercli% %connect_no_reset% %activate_TZ__ob%
%stm32programmercli% %connect_no_reset% %default_ob1%
%stm32programmercli% %connect_no_reset% %default_ob2%
echo "**************************************************************"
echo "Option setting"
echo "**************************************************************"
echo "TZ          : enabled "
echo "DBANK       : disabled "
echo "SECWM1_PSTRT: 0x0     -> 0x08000000"
echo "SECWM1_PEND : 0xc     -> 0x0800c000"
echo "SECWM2_PSTRT: 0x1     -> 0x08041000"
echo "SECWM2_PEND : 0x0     -> 0x08040000"
echo "**************************************************************"
echo "Board is ready to receive the WIZ510SSL binaries, press any key to continue"
pause

:: part ot be updated according to flash_layout.h
set slot0=0x0C000000
echo "Write WIZ510SSL Secure""
%stm32programmercli% %connect% -d WIZ510SSL_Secure.bin %slot0% -v
echo "WIZ510SSL Secure Written, press a key to flash the WIZ510SSL NonSecure"
pause
set slot1=0x08010000
echo "Write WIZ510SSL NonSecure""
%stm32programmercli% %connect% -d WIZ510SSL_NonSecure.bin %slot1% -v 

echo "WIZ510SSL NonSecure Written, press a key"
pause