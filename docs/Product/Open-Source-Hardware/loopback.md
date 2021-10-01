---
id: loopback
title: Loopback
date: 2020-04-03
---

## TCP Server Loopback

-----
** Download : <a href="/img/osh/cookie/w5500_cookie_v100.zip" target="_blank">Project download</a>,[Hercules test program](http://www.hw-group.com/products/hercules/index_en.html) **

 - Select TCP Client tab in Hercules and type Server IP address
displaying in Tera Term at Module IP and port number box.

![](/img/osh/cookie/loopback2.jpg)

 - Click Connect. 
 - If connection is done successfully, you can see
message as follows.

![](/img/osh/cookie/loopback4.jpg)

 - Type data you want to send and click Send button. If you want to send
string data, uncheck HEX checkbox. 
 - After send data, you can see sent
data and received data.

![](/img/osh/cookie/loopback5.jpg)

## UDP Loopback

-----

 - Select UDP tab in Hercules and type IP address and port number displaying in Tera Term at Module IP and Port box in Hercules. And then, type port number you want in Local port box and click Listen button. Now, UDP socket opened.

![](/img/osh/cookie/loopback7.jpg)

 - Type data you want to send and click Send button. If you want to send string data, uncheck HEX checkbox. 
 - After send data, you can see sent data and received data.

![](/img/osh/cookie/loopback8.jpg)