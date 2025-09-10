---
id: mdk-arm
title: Setting up a KEIL uvision5 Development Environment
date: 2020-04-08
---

## 1\. MDK-ARM Install

### 1\) MDK-ARM Download

To download the MDK-ARM installer, go to the following link.

[MDK-ARM Download Page](https://www.keil.com/demo/eval/arm.htm)

Fill the form and submit.

![](/img/products/wiz750sr/developers/mdk-arm/1-mdk_arm.png)

Once submitted, you will be taken to the download page.

![](/img/products/wiz750sr/developers/mdk-arm/1-download.png)

Download the installer file(MDK525.EXE). (About 860MB)

-----

### 2\) Install KEIL uvision5

Run the downloaded file to proceed the installation. You can install it
with the default settings.

![](/img/products/wiz750sr/developers/mdk-arm/keil_install-01.png)
![](/img/products/wiz750sr/developers/mdk-arm/keil_install-02.png)
![](/img/products/wiz750sr/developers/mdk-arm/keil_install-03.png)
![](/img/products/wiz750sr/developers/mdk-arm/keil_install-04.png)
![](/img/products/wiz750sr/developers/mdk-arm/keil_install-05.png)
![](/img/products/wiz750sr/developers/mdk-arm/keil_install-fin.png)

-----

### 3\) Register License

#### Get the LIC

If the program installation is complete, proceed with the license
registration process.

Run Keil uVision5 installed <span class="underline">**as an
administrator.**</span>

Go to the 'File' - 'License Management'.

![](/img/products/wiz750sr/developers/mdk-arm/license-00.png)

Click the ‘Get LIC via Internet...’ button.

![](/img/products/wiz750sr/developers/mdk-arm/license-01.png)

Clicking the OK button will take you to the license registration page.

![](/img/products/wiz750sr/developers/mdk-arm/license-02.png)

Enter the required information with product serial number(PSN) and
submit it.

![](/img/products/wiz750sr/developers/mdk-arm/license_psn.png)

If the registration is complete, you **will receive an LIC(License ID
Code) by e-mail.**

-----

#### Register License

If you received an email include LIC, Go to ‘License Management’ menu of
Keil uVision5 and register that.

Enter LIC in 'New License ID Code (LIC)' field and press 'Add LIC'
button. If registered successfully, product information is displayed in
the upper list.

![](/img/products/wiz750sr/developers/mdk-arm/resiger_final.png)

Your license registration is complete\!

-----

## 2\. Install Legacy Support

Next, you need to install the Legacy Support of MDK version 5. Because
MDK-Lite version does not support W7500 example project devices.

Download the installer from the below link and install it. [MDK-ARM
Legacy Support Download page](http://www2.keil.com/mdk5/legacy)

(MDKCM524.EXE, about 350MB)

![](/img/products/wiz750sr/developers/mdk-arm/legacy-01.png)
![](/img/products/wiz750sr/developers/mdk-arm/legacy-02.png)
![](/img/products/wiz750sr/developers/mdk-arm/legacy-03.png)
![](/img/products/wiz750sr/developers/mdk-arm/legacy-04.png)
![](/img/products/wiz750sr/developers/mdk-arm/legacy-05.png)

Done\!

-----

## 3\. Import WIZ750SR Project

Download the project from WIZ750SR Github repository.

[WIZ750SR Github repository](https://github.com/Wiznet/WIZ750SR/releases)

Download the source code and unzip it.

Run the Keil uVision5.

Go to the 'Project - Open Project...' of Menu.

![](/img/products/wiz750sr/developers/mdk-arm/open_project.png)

and open the project file(**W7500x\_S2E.uvproj**) from
**WIZ750SR/Project/S2E\_App** path.

![](/img/products/wiz750sr/developers/mdk-arm/project_path.png)

-----