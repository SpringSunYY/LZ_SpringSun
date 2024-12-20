package com.lz.system;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.lz.common.security.annotation.EnableCustomConfig;
import com.lz.common.security.annotation.EnableRyFeignClients;

/**
 * 系统模块
 *
 * @author ruoyi
 */
@EnableCustomConfig
@EnableRyFeignClients
@SpringBootApplication
public class LitchiSystemApplication {
    public static void main(String[] args) {
        SpringApplication.run(LitchiSystemApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  小猜  系统模块启动成功   ლ(´ڡ`ლ)ﾞ  \n");
    }
}
