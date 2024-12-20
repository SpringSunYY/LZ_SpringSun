package com.lz.gen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.lz.common.security.annotation.EnableCustomConfig;
import com.lz.common.security.annotation.EnableRyFeignClients;

/**
 * 代码生成
 *
 * @author ruoyi
 */
@EnableCustomConfig
@EnableRyFeignClients
@SpringBootApplication
public class LitchiGenApplication {
    public static void main(String[] args) {
        SpringApplication.run(LitchiGenApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  小猜  代码生成模块启动成功   ლ(´ڡ`ლ)ﾞ  \n");
    }
}
