---
id: how_to_use_gcc_for_w7500_peripherals_examples
title: How to use GCC for W7500 Peripherals Examples
date: 2020-04-20
--- 

# How to use the makefile with windows7

******************************************************************************
(C) COPYRIGHT 2015 WIZnet

  * author  : IOP Team
  * version : V1.0.0
  * date    : 1-May-2015
  * brief   : Description use a makefile with windows7.
  * develop environment : Windows 7 32/64bits
  * arm-gcc version : gcc-arm-none-eabi-4_9-2015q1-20150306-win32

******************************************************************************

## Step 1. Gunwin32 Installation

※ For reference, gunwin32 operate both windows7 32bit and 64bit

1. Enter a **gnuwin32** in web search engine or visit the <a href="http://gnuwin32.sourceforge.net/" title="http://gnuwin32.sourceforge.net/"> http://gnuwin32.sourceforge.net/</a>
<a target="_blank" href={require("/img/products/w7500/documents/appnote/1_gnuwin32.jpg").default}><img src={require("/img/products/w7500/documents/appnote/1_gnuwin32.jpg").default} alt="gnuwin32"/></a>

2. Click the packages in left category.
<a target="_blank" href={require("/img/products/w7500/documents/appnote/2_gnuwin32.jpg").default}><img src={require("/img/products/w7500/documents/appnote/2_gnuwin32.jpg").default} alt="gnuwin32"/></a>

3. Find the **Make** file using scroll and click, Click the **Setup program** in Download.
<a target="_blank" href={require("/img/products/w7500/documents/appnote/3_gnuwin32.jpg").default}><img src={require("/img/products/w7500/documents/appnote/3_gnuwin32.jpg").default} alt="gnuwin32"/></a>

4. When download time left as '0', you get the **setup file**.
<a target="_blank" href={require("/img/products/w7500/documents/appnote/4_gnuwin32.jpg").default}><img src={require("/img/products/w7500/documents/appnote/4_gnuwin32.jpg").default} alt="gnuwin32"/></a>

5. Finish the setup,copy the program setup path(you reach until **make.exe**)

<a target="_blank" href={require("/img/products/w7500/documents/appnote/5_gnuwin32.jpg").default}><img src={require("/img/products/w7500/documents/appnote/5_gnuwin32.jpg").default} alt="gnuwin32"/></a>

6. In my case,the setup path is **C:\Program Files\GnuWin32\bin**

<a target="_blank" href={require("/img/products/w7500/documents/appnote/6_gnuwin32.jpg").default}><img src={require("/img/products/w7500/documents/appnote/6_gnuwin32.jpg").default} alt="gnuwin32"/></a>


7. **Computer** &gt; **click the right of mouse**  &gt;  **properties** &gt;  **Advanced** &gt; **Environment Variables** &gt; **System variables** &gt;  **Edit**&gt;  ** variable value** Copy and Paste.

<a target="_blank" href={require("/img/products/w7500/documents/appnote/7_gnuwin32.jpg").default}><img src={require("/img/products/w7500/documents/appnote/7_gnuwin32.jpg").default} alt="gnuwin32"/></a>

* * *

## Step 2. Arm gcc Installation

1. You can download the setup file from the ["https://launchpad.net/gcc-arm-embedded/+download"](https://launchpad.net/gcc-arm-embedded/+download)
(main post of <strong>2015.04.16</strong>)

<a target="_blank" href={require("/img/products/w7500/documents/appnote/1_armgcc.jpg").default}><img src={require("/img/products/w7500/documents/appnote/1_armgcc.jpg").default} alt="armgcc"/></a>
2. Download the **[gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe](https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q1-update/+download/gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe)** because I use the Windows7 32bit.


3. After choice the Language selection, click the **'OK'**

<a target="_blank" href={require("/img/products/w7500/documents/appnote/2_armgcc.jpg").default}><img src={require("/img/products/w7500/documents/appnote/2_armgcc.jpg").default} alt="armgcc"/></a>

4. The installation path setup and click the **'NEXT'**, click the **'NEXT'** again.

<a target="_blank" href={require("/img/products/w7500/documents/appnote/4_armgcc.jpg").default}><img src={require("/img/products/w7500/documents/appnote/4_armgcc.jpg").default} alt="armgcc"/></a>

5. Finally,Check the box "**Add path to environment variale**" and click the **'Finish'**
(If you check the box, It will automatically set the environment variable.)

<a target="_blank" href={require("/img/products/w7500/documents/appnote/5_armgcc.jpg").default}><img src={require("/img/products/w7500/documents/appnote/5_armgcc.jpg").default} alt="armgcc"/></a>

6. The command window will be opened,you can know the arm gcc setup path it. 

<a target="_blank" href={require("/img/products/w7500/documents/appnote/6_make.jpg").default}><img src={require("/img/products/w7500/documents/appnote/6_make.jpg").default} alt="make"/></a>

7. Confirm the version of arm gcc using the command of below.
> arm-none-eabi-gcc --version

<a target="_blank" href={require("/img/products/w7500/documents/appnote/7_make.jpg").default}><img src={require("/img/products/w7500/documents/appnote/7_make.jpg").default} alt="make"/></a>
* * *
## Step 3. Execute the makefile

1. You set the path, you want to compile gcc compile. and enter the **make**
>**make** 

<a target="_blank" href={require("/img/products/w7500/documents/appnote/8_make.jpg").default}><img src={require("/img/products/w7500/documents/appnote/8_make.jpg").default} alt="make"/></a>

2. You can see the compile as below.
<a target="_blank" href={require("/img/products/w7500/documents/appnote/9_make.jpg").default}><img src={require("/img/products/w7500/documents/appnote/9_make.jpg").default} alt="make"/></a>


3. If success, the files will create. The path of make file is a place the makefile.

<a target="_blank" href={require("/img/products/w7500/documents/appnote/10_make.jpg").default}><img src={require("/img/products/w7500/documents/appnote/10_make.jpg").default} alt="make"/></a>



# When compile error occur

If you can't compile or you don't create the files, you directly set the environment variable.

>**Computer** &gt; **click the right of mouse**  &gt;  **properties** &gt;  **Advanced** &gt; **Environment Variables** &gt; **System variables** &gt;  **Edit**&gt;  **variable value** Copy and Paste.
>
>Copy path is **c:\Program Files\GNU Tools ARM Embedded\4.9 2015q1\bin** : setup path

<a target="_blank" href={require("/img/products/w7500/documents/appnote/7_gnuwin32.jpg").default}><img src={require("/img/products/w7500/documents/appnote/7_gnuwin32.jpg").default} alt="gnuwin32"/></a>
