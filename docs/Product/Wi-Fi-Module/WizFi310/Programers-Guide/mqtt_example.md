---
id: mqtt_example
title: WizFi310 MQTT Example
date: 2020-04-15
---

## MQTT

MQTT is a light weight messaging protocol for use on top of the TCP/IP
protocol. It is designed for connections with remote locations where a
"small code footprint" is required or the network bandwidth is
limited.  
It is a communication protocol which almost can link all networked
objects with the external, and it is used as a sensor.  
[Wikipedia](https://en.wikipedia.org/wiki/MQTT)  
  
## How to use MQTT in WizFi310
  
### MQTT AT Command Set

There are the necessary Commands for MQTT protocol in the WizFi310.  
  

```
AT+MQTTSET=<UserName>,<Password>,<ClientID>,<AliveTime>  
AT+MQTTCON=<Con/Discon>,<BrokerIP>,<BrokerPort>,<SSL_Enable>  
AT+MQTTSUB=<Sub/Unsub>,<Topic>  
AT+MQTTPUB=<Topic>,<Length>  
```

You can find the detailed description about the AT Commands for MQTT
at the link below.  
[AT Commands list for MQTT](./AT_Commands.md#mqtt-commands)

  
### Example AT Command

#### Connection

- Connect to Broker with non SSL

```
Already Joined AP.
    
AT+MQTTSET=wiznet,8df22daf1fc8427999953b796cdfb1df,wizfi310,60
[OK]
AT+MQTTCON=1,52.70.203.194,1883,0
    
[MQTT CONNECT]
[OK]
```

- Connect to Broker with SSL

```
Already Joined AP.
    
AT+MQTTSET=wiznet,8df22daf1fc8427999953b796cdfb1df,wizfi310_ssl,60
[OK]
AT+MQTTCON=1,52.70.203.194,8883,1
    
[MQTT CONNECT]
[OK]
```

#### Subscribe & Unsubscribe

- Subscribe & Receive Message

```
Already Connected with MQTT broker.
    
AT+MQTTSUB=1,wiznet/f/WizFi310
[OK]
...
when the message received.
...
{Q,wiznet/f/WizFi310,,9}test_data
```

- Unsubscribe

``` 
Already Connected with MQTT broker.

AT+MQTTSUB=0,wiznet/f/WizFi310
[OK]

```

#### Publish

``` 
Already Connected with MQTT broker.

AT+MQTTPUB=wiznet/f/WizFi310,3
[3]
...
Input 3bytes to Serial interface.
...
[OK]

```

-----

## MQTT Example

  
### Setup the Broker

[Adafruit](https://io.adafruit.com/) Broker would be used at this
Example. Adafruit MQTT broker can support non SSL and SSL Connection and
the Adafruit shows the collected data as the Dashboard.  
  
[Adafruit MQTT API
Guide](https://learn.adafruit.com/adafruit-io/mqtt-api)  

### Make Topic

Create the Feeds in Adafruit. it is equal to Topic in MQTT.  
![](/img/products/wizfi310/wizfi310pg/1_feeds.png)
![](/img/products/wizfi310/wizfi310pg/2_newfeed.png)  
Then, You can see the graph that was made up of raw data.  
![](/img/products/wizfi310/wizfi310pg/3_create_aio_key_1.png)

### Connect to Adafruit Broker
Before connection, you have to know the information below.  

- Username
- Adafruit AIO Key
- Adafruit IP & Port

#### Adafruit Username

It is a username registered in Adafruit.  

#### Adafruit AIO Key

It is an authentication key for connection to broker. It can be found in
"VIEW AIO KEYS" button.  
![](/img/products/wizfi310/wizfi310pg/4_create_aio_key_2.png)  

#### Adafruit IP & Port

It is a information about Connection.

- You can see the IP address using ** AT+FDNS=io.adafruiot.com ** Command.
- non SSL Port is ** 1883 **, or SSL Port is ** 8883 **.

** There are AT Commands for setting up the WizFi310. That is used
when using above information and non SSL connection. **  

```
AT+FDNS=io.adafruit.com,3000
52.70.203.194
[OK]
AT+MQTTSET=wiznet,8df22daf1fc8427999953b796cdfb1df,wiznet_1,60
[OK]
AT+MQTTCON=1,52.70.203.194,8883,1
    
[MQTT CONNECT]
[OK]
```

** Client ID(wiznet\_1) is identifier of each MQTT Client and it
should be unique per broker. **  
** KeepAlive time(60 seconds)**  

### Publish the message

Adafruit IO's MQTT API exposes feed data using special topics. You can
publish a new value for a feed to its topic, or you can subscribe to a
feed's topic to be notified when the feed has a new value. Any one of
the following topic forms is valid for a feed  
For Examples.

  - wiznet/feeds/WizFi310
  - wiznet/f/WizFi310

```
AT+MQTTPUB=wiznet/f/WizFi310,4
[4]
...
Input 4bytes to Serial interface.
...
[OK]
```
** 2nd parameter of AT+MQTTPUB command is '4'. it means that you can publish the 4 byte. **

### Display the message in io.adafruit.com

You can see the published data in io.adafruit.com.

![](/img/products/wizfi310/wizfi310pg/5_display_value.png)
