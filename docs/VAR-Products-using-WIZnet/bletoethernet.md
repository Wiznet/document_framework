# BLE to Ethernet

Using WIZnet TCP/IP Ethernet chip W5500 and the Nordic BLE SoC nRF52832
implemented the BLE to Ethernet. BLE Central/Peripheral communicate
using a UART Nordic Service (NUS) Profile. And BLE Central and W5500
communicate with SPI. W5500 also operates as a TCP Client, TCP Server to
communicate with the LAN (through the line). The purpose of this
Application Note is to build a low power IoT node environment.

![](/osh/cookie/1-1_bte_introduce.jpg)

![](/osh/cookie/ble_to_tcp_article_5.png) ------

## Development Environment

### Firmware

<https://github.com/Wiznet/WIZBLE510_ETHERNET>

### Hardware

| Product   | DataSheet Download link                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| nRF52832  | [Download](http://infocenter.nordicsemi.com/pdf/nRF52832_PS_v1.0.pdf)                                                           |
| PCA10040  | [Download](http://infocenter.nordicsemi.com/topic/com.nordic.infocenter.nrf52/dita/nrf52/development/nrf52_dev_kit.html?cp=2_0) |
| W5500     | [Download](http://wizwiki.net/wiki/doku.php?id=products:w5500:datasheet)                                                        |
| Schematic | [Download](https://drive.google.com/open?id=0Bx-BD_H8XJXxVWdrcVliY1E1RGM)                                                       |
| Altium    | [Download](https://drive.google.com/open?id=0Bx-BD_H8XJXxek13TlBubXZZclE)                                                       |
| Gerber    | [Download](https://drive.google.com/open?id=0Bx-BD_H8XJXxWmg0MDlnWVJLZ2M)                                                       |

### PC Tools

| PC Tools      | Download link                                                                        |
| ------------- | ------------------------------------------------------------------------------------ |
| Keil MDK 5.17 | [Download](https://www.keil.com/demo/eval/arm.htm)                                   |
| nRFgo Studio  | [Download](https://www.nordicsemi.com/eng/Products/2.4GHz-RF/nRFgo-Studio#Downloads) |
| Hercules      | [Download](http://hercules-setup.soft32.com/)                                        |

-----
## Base Protocol

The project made use of TCP and BLE NUS Service. Each document is on the
link below.

| Protocol           | Document                                                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| W5500 TCP          | [Doc Link](http://wizwiki.net/wiki/doku.php?id=products:w5500:application:tcp_function)                                           |
| BLE NUS Central    | [Doc Link](http://infocenter.nordicsemi.com/topic/com.nordic.infocenter.sdk5.v11.0.0/ble_sdk_app_nus_c.html?cp=5_0_0_4_2_0_3)     |
| BLE NUS Peripheral | [Doc Link](http://infocenter.nordicsemi.com/topic/com.nordic.infocenter.sdk5.v11.0.0/ble_sdk_app_nus_eval.html?cp=5_0_0_4_2_2_18) |

-----

## Code configuration

![](/oshw_using_wiznet/ethernet/2_bte_codeconfiguration.jpg)

### uart\_init

UART Initializes for communication with a PC. The pins can be changed
freely.

``` c
void uart_init(app_uart_event_handler_t event_handler, app_irq_priority_t irq_priority)
{
    uint32_t err_code;
    const app_uart_comm_params_t comm_params =
    {
        .rx_pin_no    = RX_PIN_NUMBER,
        .tx_pin_no    = TX_PIN_NUMBER,
        .rts_pin_no   = 0xFF,
        .cts_pin_no   = 0xFF,
        .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
        .use_parity   = false,
        .baud_rate    = UART_BAUDRATE_BAUDRATE_Baud115200
    };  
    APP_UART_FIFO_INIT(&comm_params,
                        UART_RX_BUF_SIZE,
                        UART_TX_BUF_SIZE,
                        event_handler,
                        irq_priority,
                        err_code);
    APP_ERROR_CHECK(err_code);
}
```

### ble\_stack\_init

Initialize BLE stack and RTC clock.

``` c
void ble_stack_init(void)
{
    uint32_t err_code;    
    nrf_clock_lf_cfg_t clock_lf_cfg = NRF_CLOCK_LFCLKSRC;    
    // Initialize the SoftDevice handler module.
    SOFTDEVICE_HANDLER_INIT(&clock_lf_cfg, NULL);   
    ble_enable_params_t ble_enable_params;
    err_code = softdevice_enable_get_default_config(CENTRAL_LINK_COUNT,
                                                    PERIPHERAL_LINK_COUNT,
                                                    &ble_enable_params);
    APP_ERROR_CHECK(err_code);    
    //Check the ram settings against the used number of links
    CHECK_RAM_START_ADDR(CENTRAL_LINK_COUNT,PERIPHERAL_LINK_COUNT);    
    // Enable BLE stack.
    err_code = softdevice_enable(&ble_enable_params);
    APP_ERROR_CHECK(err_code);
    // Register with the SoftDevice handler module for BLE events.
    err_code = softdevice_ble_evt_handler_set(ble_evt_dispatch);
    APP_ERROR_CHECK(err_code);
}
```
### nus\_c\_init

Initializes function that the NUS central service.

``` c
void nus_c_init(ble_nus_c_evt_handler_t evt_handler)
{
    uint32_t         err_code;
    ble_nus_c_init_t nus_c_init_t;
    nus_c_init_t.evt_handler = evt_handler;
    err_code = ble_nus_c_init(&user_m_ble_nus_c.m_ble_nus_c, &nus_c_init_t);
    APP_ERROR_CHECK(err_code);
    err_code = sd_ble_gap_address_get  (&user_m_ble_nus_c.own_addr); 
    APP_ERROR_CHECK(err_code);
}
```

### db\_discovery\_init

initializes database discovery.

``` c
void db_discovery_init(void)
{
    uint32_t err_code = ble_db_discovery_init(db_disc_handler);
    APP_ERROR_CHECK(err_code);
}
```

### spi0\_master\_init

initialize W5500 and SPI communication function. Pins can be changed
freely.

``` c
void spi0_master_init()
{
    SPIConfig_t spi_info = {.Config.Fields.BitOrder = SPI_BITORDER_MSB_LSB,
                        .Config.Fields.Mode     = SPI_MODE3,
                        .Frequency              = SPI_FREQ_8MBPS,
                        .Pin_SCK                = SPIM0_SCK_PIN,
                        .Pin_MOSI               = SPIM0_MOSI_PIN,
                        .Pin_MISO               = SPIM0_MISO_PIN,
                        .Pin_CSN                = SPIM0_SS_PIN};    
    spi_master_init(SPI0,&spi_info);
}
```

### user\_ethernet\_init

Function that initializes the W5500 through SPI.

``` c
void user_ethernet_init()
{
    uint8_t tmp;
    uint8_t memsize[2][8] = {{2,2,2,2,2,2,2,2},{2,2,2,2,2,2,2,2}};
    wiz_NetTimeout timeout_info;
    reg_wizchip_cs_cbfunc(wizchip_select, wizchip_deselect);
    reg_wizchip_spi_cbfunc(wizchip_read, wizchip_write);
    /* WIZCHIP SOCKET Buffer initialize */  
    printf("W5500 memory init\r\n");
    if(ctlwizchip(CW_INIT_WIZCHIP,(void*)memsize) == -1)
    {
        printf("WIZCHIP Initialized fail.\r\n");
       while(1);
    }
    /* PHY link status check */
    printf("W5500 PHY Link Status Check\r\n");
    do
    {
       if(ctlwizchip(CW_GET_PHYLINK, (void*)&tmp) == -1)
           printf("Unknown PHY Link stauts.\r\n");
    }while(tmp == PHY_LINK_OFF);
    timeout_info.retry_cnt = 1;
    timeout_info.time_100us = 0x3E8;    // timeout value = 10ms
    wizchip_settimeout(&timeout_info);
    /* Network initialization */
    network_init();
}
```
### user\_app\_timer\_init

App Timer Task registration and period setting.

``` c
static void user_app_timer_init(void)
{
    uint32_t err_code;    
    err_code = app_timer_create(&tcp_con_timer_id, APP_TIMER_MODE_REPEATED, tcp_con_timer);
    APP_ERROR_CHECK(err_code);
    err_code = app_timer_create(&ble_to_tcps_timer_id, APP_TIMER_MODE_REPEATED, ble_to_tcps);
    APP_ERROR_CHECK(err_code);  
    err_code = app_timer_create(&tcps_to_ble_timer_id, APP_TIMER_MODE_REPEATED, tcps_to_ble);
    APP_ERROR_CHECK(err_code);
}
```

### user\_app\_timer\_start

App\_timer Task Start

``` c
static void user_app_timer_start(void)
{
    uint32_t err_code;    
    err_code = app_timer_start(tcp_con_timer_id, TCP_CON_INTERVAL,NULL);
    APP_ERROR_CHECK(err_code);
    err_code = app_timer_start(ble_to_tcps_timer_id, BLE_TO_TCPS_INTERVAL, NULL);
    APP_ERROR_CHECK(err_code);
    err_code = app_timer_start(tcps_to_ble_timer_id, TCPS_TO_BLE_INTERVAL, NULL);
    APP_ERROR_CHECK(err_code);  
}
```

### tcp\_con\_timer

A connection with the TCP Server and checks periodically connected. It
tries to reconnect when disconnected.

``` c
void tcp_con_timer(void * p_context)
{
    int32_t ret; // return value for SOCK_ERRORs
   // Port number for TCP client (will be increased)
    uint16_t any_port = 50000;
   // Socket Status Transitions
   // Check the W5500 Socket n status register (Sn_SR, The 'Sn_SR' controlled by Sn_CR command or Packet send/recv status)
    switch(getSn_SR(SOCK_TCPC))
    {
        case SOCK_CLOSE_WAIT :
#ifdef _LOOPBACK_DEBUG_
         //printf("%d:CloseWait\r\n",sn);
#endif
            if((ret=disconnect(SOCK_TCPC)) != SOCK_OK) 
                printf("%d:Socket Closed Fail\r\n", SOCK_TCPC);
#ifdef _LOOPBACK_DEBUG_
            printf("%d:Socket Closed\r\n", SOCK_TCPC);
#endif
            break;
        case SOCK_INIT :
#ifdef _LOOPBACK_DEBUG_
            printf("%d:Try to connect to the %d.%d.%d.%d : %d\r\n", 
                    SOCK_TCPC, targetIP[0], targetIP[1], targetIP[2], targetIP[3],tcp_targetPort);
#endif
            if( (ret = connect(SOCK_TCPC, targetIP, tcp_targetPort)) != SOCK_OK) 
                printf("%d:Socket Connect Fail\r\n", SOCK_TCPC);    
                //Try to TCP connect to the TCP server (destination)
            break;
        case SOCK_CLOSED:
            close(SOCK_TCPC);
              if((ret=socket(SOCK_TCPC, Sn_MR_TCP, any_port++, 0x00)) != SOCK_TCPC)
                  printf("%d:Socket Open Fail\r\n", SOCK_TCPC); // TCP socket open with 'any_port' port number
            break;              
        default:
            break;
    }
}
```
### tcps\_to\_ble

Data from the TCP Server delivers on the BLE Peripheral.

``` c
void tcps_to_ble(void * p_context)
{
    uint32_t size, i, k=0;
    int32_t ret;
    char buf[DATA_BUF_SIZE];

    if((size = getSn_RX_RSR(SOCK_TCPC)) > 0) // Sn_RX_RSR: Socket n Received Size Register, Receiving data length
    {
        size = MIN(size, DATA_BUF_SIZE); // DATA_BUF_SIZE means user defined buffer size (array)
        ret = recv(SOCK_TCPC, (uint8_t *)buf, size); // Data Receive process (H/W Rx socket buffer -> User's buffer)
        if (ret<0)
        {
            close(SOCK_TCPC); // socket close
        }
        else
        {
            while(size)
            {
                i = MIN(size, BLE_NUS_MAX_DATA_LEN);
                while (ble_nus_c_string_send(&user_m_ble_nus_c.m_ble_nus_c, (uint8_t *)(buf+k), i) != NRF_SUCCESS)
                {
                      // repeat until sent.
                }
                size-=i;
                k+=i;
            }
        }
    }
}
```

### ble\_to\_tcps

Data from the BLE Peripheral delivers on the TCP Server.

``` c
void ble_to_tcps(void * p_context)
{
    int32_t ret;
    char buf[100] ;
    
    if (data_in_flag)
    {
        if (getSn_SR(SOCK_TCPC) == SOCK_ESTABLISHED)
        {
            sprintf(buf, "[From BLE_P] %02x:%02x:%02x:%02x:%02x:%02x ", 
            user_m_ble_nus_c.peer_addr.addr[0], user_m_ble_nus_c.peer_addr.addr[1], 
                    user_m_ble_nus_c.peer_addr.addr[2], user_m_ble_nus_c.peer_addr.addr[3],
                    user_m_ble_nus_c.peer_addr.addr[4], user_m_ble_nus_c.peer_addr.addr[5]);
                    ret = send(SOCK_TCPC,  (void *)buf, strlen(buf));
                    ret = send(SOCK_TCPC,  (void *)ble_input_data, ble_input_data_len); 
                    if(ret < 0) // Send Error occurred (sent data length < 0)
                        close(SOCK_TCPC); // socket close
    }
    data_in_flag = false;
    }
}
```

### ble\_nus\_c\_evt\_handler

Interrupt is occurred by data that comes from BLE Peripheral. Data from
BLE Peripheral stores on the ble\_input\_data buffer.

``` c
void nus_c_init(ble_nus_c_evt_handler_t evt_handler)
{
    uint32_t         err_code;
    ble_nus_c_init_t nus_c_init_t;
    
    nus_c_init_t.evt_handler = evt_handler;
    err_code = ble_nus_c_init(&user_m_ble_nus_c.m_ble_nus_c, &nus_c_init_t);
    APP_ERROR_CHECK(err_code);
    err_code = sd_ble_gap_address_get  (&user_m_ble_nus_c.own_addr); 
    APP_ERROR_CHECK(err_code);
}
```
### uart\_event\_handle

The Interrupt occurs when UART Data Input. And it sends it to UART Input
Data in BLE Peripheral.

``` c
void uart_event_handle(app_uart_evt_t * p_event)
{
    static uint8_t data_array[BLE_NUS_MAX_DATA_LEN];
    static uint8_t index = 0;
    switch (p_event->evt_type)
    {
        /**@snippet [Handling data from UART] */ 
        case APP_UART_DATA_READY:
            UNUSED_VARIABLE(app_uart_get(&data_array[index]));
            index++;
            if ((data_array[index - 1] == '\n') || (index >= (BLE_NUS_MAX_DATA_LEN)))
            {
                while (ble_nus_c_string_send(&user_m_ble_nus_c.m_ble_nus_c, data_array, index) != NRF_SUCCESS)
                {
                    // repeat until sent.
                }
                index = 0;
            }
            break;
        /**@snippet [Handling data from UART] */ 
        case APP_UART_COMMUNICATION_ERROR:
            APP_ERROR_HANDLER(p_event->data.error_communication);
            break;
        case APP_UART_FIFO_ERROR:
            APP_ERROR_HANDLER(p_event->data.error_code);
            break;
        default:
            break;
    }
}
```

-----

## Testing

### H/W Setting

![](/osh/cookie/ble_to_tcp_hw_settingpng.png)

### BLE Stack (SoftDevice) Writing

Program the S132\_nrf52\_2.0.1\_softdevice.hex attached to
nRF5\_SDK\_11.0.0\_W5500\_ble-to-ethernet.zip on two boards. (Ble to
Ethernet Board, PCA10040)

![](/osh/cookie/3-1_bte_testing.jpg)

### Ble to ethernet Board application Writing

Open the
nRF5\_SDK\_11.0.0\_W5500\_ble-to-ethernet\\examples\\ble\_central\\ble\_uart\_c\_to\_tcpc\\pca10040\\s132\\arm5\_no\_packs
path of the project. Put the IP Address of the TCP server PC to the 60th
line of the variable targetIP main.c, build, and Program a ble to
ethernet board.

![](/osh/cookie/ipconfig.png)

![](/osh/cookie/3-3_bte_testing.jpg)

![](/osh/cookie/3-4_bte_testing.jpg)

### PCA10040 application Writing

Build the project to open a path
nRF5\_SDK\_11.0.0\_89a8197\\examples\\ble\_peripheral\\ble\_app\_uart\\pca10040\\s132\\arm5\_no\_packs,
and Writing in PCA10040 board.

### Config HyperTerminal & TCP Server

Three open the Hercules. Two Hercules is set to 115200 baud rate in the
Serial Tab and open the Com port. One of the Hercules Port is set to
5000 in the TCP Server tab and click on the listen.

![](/osh/cookie/3-5_bte_testing.jpg)

![](/osh/cookie/3-6_bte_testing.jpg)

### Data Input

Input from the WIZNET PCA10040 Terminal can see that is sent to the TCP
Server.

![](/osh/cookie/3-7_bte_testing.jpg)

![](/osh/cookie/3-8_bte_testing.jpg)
