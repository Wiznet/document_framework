---
id: install-keil-guide
title: How to install Keil uVision MDK-Lite version
date: 2023-11-14
keywords: [iMCU, ethernet, w7500]
description: How to setup keil with Surf 5
---

<!-- **This document serves as a guide for users to reference before using Surf 5.** -->

-----

## Download MDK

**Step 1**

Connect to [keil.com](http://www.keil.com/). And then click the **Downloads** button on the top.

<img src="/img/osh/surf5/keil-download1.png" width="400" />

<br />
<br />

**Step 2**

Select "MDK-Arm".

<img src="/img/osh/surf5/keil-download2.png" width="400" />

<br />
<br />

**Step 3**

Enter personal information and click "Submit".

<img src="/img/osh/surf5/keil-download3.png" width="400" />

<br />
<br />

**Step 4**

Click on the download file below.

<img src="/img/osh/surf5/keil-download4.png" width="400" />

<br />
<br />

**Step 5**

Once the download of the installation file is complete, run the installation file.

<img src="/img/osh/surf5/keil-download5.png" width="400" />

<br />
<br />

**Step 6**

Click on "Next".

<img src="/img/osh/surf5/keil-download6.png" width="400" />

<br />
<br />

**Step 7**

Agree and click "Next".

<img src="/img/osh/surf5/keil-download7.png" width="400" />

<br />
<br />

**Step 8**

Check the path and click "Next".

<img src="/img/osh/surf5/keil-download8.png" width="400" />

<br />
<br />

**Step 9**

Enter personal information and click "Next".

<img src="/img/osh/surf5/keil-download9.png" width="400" />

<br />
<br />

**Step 10**

Wait for the download to complete.

<img src="/img/osh/surf5/keil-download10.png" width="400" />

<br />
<br />

**Step 11**

Press "Finish" to complete the download and wait.

<img src="/img/osh/surf5/keil-download11.png" width="400" />

<br />
<br />

**Step 12**

After the download is complete, the "Pack Installer" window will appear. Click "OK".

<img src="/img/osh/surf5/keil-download12.png" width="400" />

<br />
<br />



## Install uVision MDK-Lite

After downloading is completed, double click the mdk514.exe file and then setup process will be started.

![keil_5](/img/products/w7500/documents/appnote/keil_4.jpg)

<br />
<br />


## Install MDK Version 5 - Legacy Support

After installation is completed, you need to install the MDK version 5 - legacy support because MDK-Lite version does not support W7500 example project devices.

[Download link](http://www2.keil.com/mdk5/legacy/)

Click **Download Legacy Support for Cortex-M Devices** button.

![keil_6](/img/products/w7500/documents/appnote/keil_6.jpg)

After downloading is completed, double click the **MDKCM514.EXE** file nad then setup process will be started.

![keil_7](/img/products/w7500/documents/appnote/keil_7.jpg)


## Install Arm Compiler 5.06 

If your Keil 5 version is 5.37 or newer, be sure to follow the steps below.

Finally, if you want to proceed with the build on <span style={{ backgroundColor: '#f7ddbe' }}>uVision MDK-Lite version 5.37 or later</span>, you must install the compiler appropriately in the path. If you have <span style={{ backgroundColor: '#f7ddbe' }}>uVision MDK-Lite version 5.37 or later</span>, follow the compiler download process below.


**Step 1**

 Pressing this [Download link](https://developer.arm.com/downloads/view/ACOMP5) button will take you to the screen similar to the one in the picture below. Click on the <span style={{ backgroundColor: '#f7ddbe' }}>"Download Now"</span> button to download the file. Since a login is required, please log in before proceeding.

<img src="/img/osh/surf5/keil_cp_download1.png" width="400" />


<br />
<br />

**Step 2**

 After extracting the downloaded file, navigate to the <span style={{ backgroundColor: '#f7ddbe' }}>"install" directory</span> within the path of the folder as shown in the picture below.

<img src="/img/osh/surf5/keil_cp_download2.png" width="400" />


<br />
<br />

**Step 3** 

Run the <span style={{ backgroundColor: '#f7ddbe' }}>"setup.exe"</span>  file inside the directory.

<img src="/img/osh/surf5/keil_cp_download3.png" width="400" />


<br />
<br />

**Step 4**

 Click <span style={{ backgroundColor: '#f7ddbe' }}>"Next"</span>.

<img src="/img/osh/surf5/keil_cp_download4.png" width="400" />


<br />
<br />

**Step 5** 

Click the checkbox for <span style={{ backgroundColor: '#f7ddbe' }}>"I accept the terms in the License Agreement"</span> and then click <span style={{ backgroundColor: '#f7ddbe' }}>"Next"</span>.

<img src="/img/osh/surf5/keil_cp_download5.png" width="400" />


<br />
<br />

**Step 6**

 Click the <span style={{ backgroundColor: '#f7ddbe' }}>"Browse..."</span> button.

<img src="/img/osh/surf5/keil_cp_download6.png" width="400" />


<br />
<br />

**Step 7**

Locate the directory where "Keil_v5" is installed on your PC, then create a folder within <span style={{ backgroundColor: '#f7ddbe' }}>"... \ keil_v5 \ ARM"</span> directory. Enter the name of the folder as <span style={{ backgroundColor: '#f7ddbe' }}>"ARM_Compiler_5.06u7"</span> and set the path to <span style={{ backgroundColor: '#f7ddbe' }}>"... \ keil_v5 \ ARM \ ARM_Compiler_5.06u7"</span>. Afterward, click <span style={{ backgroundColor: '#f7ddbe' }}>"OK"</span>

<img src="/img/osh/surf5/keil_cp_download7.png" width="400" />


<br />
<br />


**Step 8**

Confirm the following path and click <span style={{ backgroundColor: '#f7ddbe' }}>"Next"</span>.

<img src="/img/osh/surf5/keil_cp_download8.png" width="400" />


<br />
<br />

**Step 9** 

click <span style={{ backgroundColor: '#f7ddbe' }}>"Next"</span>.

<img src="/img/osh/surf5/keil_cp_download9.png" width="400" />


<br />
<br />

**Step 10** 

click <span style={{ backgroundColor: '#f7ddbe' }}>"Install"</span>.

<img src="/img/osh/surf5/keil_cp_download10.png" width="400" />


<br />
<br />

**Step 11** 

Wait for the download to complete.

<img src="/img/osh/surf5/keil_cp_download11.png" width="400" />


<br />
<br />

**Step 12** 

Click the <span style={{ backgroundColor: '#f7ddbe' }}>"Finish"</span> button to complete the download.

<img src="/img/osh/surf5/keil_cp_download12.png" width="400" />


<br />
<br />