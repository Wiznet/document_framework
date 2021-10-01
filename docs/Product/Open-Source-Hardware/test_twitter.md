---
id: twitter_test
title: Twitter Test
date: 2020-04-03
---

## Before Compile

1.  Before tweeting, get a token at <http://arduino-tweet.appspot.com/>
    . This library send a tweet via the site to avoid using up the
    memory of Arduino by complex OAuth signature stuff.
    ![](/img/osh/ioshield-a/tweet_library_for_arduino.png)
2.  Then you can get the token-code.
    ![](/img/osh/ioshield-a/arduino_tweet_lib_token.png)
3.  Update new "Ethernet" library for ioShield. please refer [Update
    Ethernet Library](/osh/ioshield-a/updatelib)
4.  You can see an example sketch from "File -\> Examples -\> Ethernet
    -\> Twitter\_SimplePost".
5.  Done\~\~.
6.  original source from
    <http://playground.arduino.cc/Code/TwitterLibrary>

## Change code & Compile

You need to create an instance of Twitter class like below:

in Twitter\_SimplePost.ino..

``` cpp
// If you don't specify the IP address, DHCP is used(only in Arduino 1.0 or later).
// fill in an available IP address on your network here,
IPAddress ip(1,1,1,1);
IPAddress gw(1,1,1,1);
IPAddress snip(1,1,1,1);
IPAddress dnsip(1,1,1,1);

// Your Token to Tweet (get it from http://arduino-tweet.appspot.com/)
Twitter twitter("YOUR-TOKEN-HERE"); // this was YourID:Password in 1.0.1
```

You need also to refer [begin Ethernet
library](http://arduino.cc/en/Reference/EthernetBegin).

please refer the below image to change code.
![](/img/osh/ioshield-a/cap_2013-08-19_15-09-30-656.png)

and compile, upload code on your Arduino Board.

## Result

During the run the program, You can see the log message via Serial
Monitor as follow: ![](/img/osh/ioshield-a/cap_2013-08-19_15-08-00-229.png)

-----

and, you can see the first message in your twitter timeline as follow:
![](/img/osh/ioshield-a/twitter.png)