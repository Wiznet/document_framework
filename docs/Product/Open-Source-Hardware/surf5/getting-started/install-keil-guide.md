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

Connect to [keil.com](http://www.keil.com/). And then click the **Downloads** button on the top.

![keil_1](/img/products/w7500/documents/appnote/keil_1.jpg)

And then click **MDK-ARM v5**.

![keil_2](/img/products/w7500/documents/appnote/keil_2.jpg)

Free version of MDK is required some user information:name, e-mail, company and etc. After fill the blanks, and then click 'Submit' button at the bottom.

![keil_5](/img/products/w7500/documents/appnote/keil_5.jpg)

If you click **MDK514.EXE**, downloading has started.

![keil_3](/img/products/w7500/documents/appnote/keil_3.jpg)

## Install uVision MDK-Lite

After downloading is completed, double click the mdk514.exe file and then setup process will be started.

![keil_4](/img/products/w7500/documents/appnote/keil_4.jpg)

## Install MDK Version 5 - Legacy Support

After installation is completed, you need to install the MDK version 5 - legacy support because MDK-Lite version does not support W7500 example project devices.

[Download link](http://www2.keil.com/mdk5/legacy/)

Click **Download Legacy Support for Cortex-M Devices** button.

![keil_6](/img/products/w7500/documents/appnote/keil_6.jpg)

After downloading is completed, double click the **MDKCM514.EXE** file nad then setup process will be started.

![keil_7](/img/products/w7500/documents/appnote/keil_7.jpg)


## Install Arm Compiler 5.06 

If you've just downloaded uVision MDK-Lite from the ARM website, it's highly likely to be version 5.37 or newer.

Finally, if you want to proceed with the build on uVision MDK-Lite version 5.37 or later, you must install the compiler appropriately in the path. If you have uVision MDK-Lite version 5.37, follow the compiler download process below.


Step 1. Pressing this [Download link](https://developer.arm.com/downloads/view/ACOMP5) button will take you to the screen similar to the one in the picture below. Click on the "Download Now" button to download the file. Since a login is required, please log in before proceeding.

<img src="/img/osh/surf5/keil_cp_download1.png" width="400" />


<br />
<br />

Step 2. After extracting the downloaded file, navigate to the "install" directory within the path of the folder as shown in the picture below.

<img src="/img/osh/surf5/keil_cp_download2.png" width="400" />


<br />
<br />

Step 3. Run the "setup.exe" file inside the directory.

<img src="/img/osh/surf5/keil_cp_download3.png" width="400" />


<br />
<br />

Step 4. Click "Next."

<img src="/img/osh/surf5/keil_cp_download4.png" width="400" />


<br />
<br />

Step 5. Click the checkbox for "I accept the terms in the License Agreement" and then click "Next."

<img src="/img/osh/surf5/keil_cp_download5.png" width="400" />


<br />
<br />

Step 6. Click the "Browse..." button.

<img src="/img/osh/surf5/keil_cp_download6.png" width="400" />


<br />
<br />

Step 7. Locate the directory where "Keil_v5" is installed on your PC, then create a folder within "... \ keil_v5 \ ARM" directory. Enter the name of the folder as "ARM_Compiler_5.06u7" and set the path to "... \ keil_v5 \ ARM \ ARM_Compiler_5.06u7". Afterward, click "OK"

<img src="/img/osh/surf5/keil_cp_download7.png" width="400" />


<br />
<br />


Step 8. Confirm the following path and click "Next"

<img src="/img/osh/surf5/keil_cp_download8.png" width="400" />


<br />
<br />

Step 9. click "Next"

<img src="/img/osh/surf5/keil_cp_download9.png" width="400" />


<br />
<br />

Step 10. click "Install"

<img src="/img/osh/surf5/keil_cp_download10.png" width="400" />


<br />
<br />

Step 11. Wait for the download to complete.

<img src="/img/osh/surf5/keil_cp_download11.png" width="400" />


<br />
<br />

Step 12. Click the "Finish" button to complete the download.

<img src="/img/osh/surf5/keil_cp_download12.png" width="400" />


<br />
<br />