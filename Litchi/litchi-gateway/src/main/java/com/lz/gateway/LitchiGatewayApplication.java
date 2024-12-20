package com.lz.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

/**
 * 网关启动程序
 *
 * @author ruoyi
 */
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class LitchiGatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(LitchiGatewayApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  Hello 小猜   ლ(´ڡ`ლ)ﾞ  \n");
    }
}
