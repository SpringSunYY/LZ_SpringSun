package com.lz.auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import com.lz.common.security.annotation.EnableRyFeignClients;

/**
 * 认证授权中心
 * 
 * @author ruoyi
 */
@EnableRyFeignClients
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class LitchiAuthApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(LitchiAuthApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  小猜  认证授权中心启动成功   ლ(´ڡ`ლ)ﾞ  \n" );
    }
}
