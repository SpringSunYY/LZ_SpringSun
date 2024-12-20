package com.lz.config;

import com.lz.common.security.annotation.EnableCustomConfig;
import com.lz.common.security.annotation.EnableRyFeignClients;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Project: Litchi
 * Package: com.lz.config
 * Author: YY
 * CreateTime: 2024-12-20  16:18
 * Description: LitchiConfigApplication
 * Version: 1.0
 */
@EnableCustomConfig
@EnableRyFeignClients
@SpringBootApplication
public class LitchiConfigApplication {
    public static void main(String[] args) {
        SpringApplication.run(LitchiConfigApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  小猜  配置模块启动成功   ლ(´ڡ`ლ)ﾞ  \n");
    }
}
