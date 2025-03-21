---
id: install-usb-driver
title: How to Install UART to USB Driver
date: 2023-11-14
keywords: [iMCU, ethernet, w7500]
description: How to install usb driver for Surf 5
---


-----
  ## Install UART to USB driver

  Surf 5 has UART to USB converter IC(CH340N) that need to install driver.
  you can download driver <a href="https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/01_iMCU/W7500/Surf5/R100/Doc/CH340N/Driver.ZIP">here</a> or CH340 manufacturer's web
  CH340N's manufacture [link](https://wch-ic.com/downloads/CH341SER_ZIP.html)

<img src="/img/osh/surf5/Setup_img.png" />

After unzipping the downloaded ZIP file, you'll find a <span style={{ backgroundColor: '#f7ddbe' }}>SETUP.EXE</span> executable in the folder, which you'll need to run.

<img src="/img/osh/surf5/install_img.png" width="500" />

When you run <span style={{ backgroundColor: '#f7ddbe' }}>SETUP.EXE</span>, the DriverSetup window appears, and you can select <span style={{ backgroundColor: '#f7ddbe' }}>INSTALL</span> to install the driver.

<img src="/img/osh/surf5/Driver_install.png" width="500" />
After Install the driver, you can find <span style={{ backgroundColor: '#f7ddbe' }}>"USB-SERIAL CH340"</span>on your Device manager when you connect Surf5.
