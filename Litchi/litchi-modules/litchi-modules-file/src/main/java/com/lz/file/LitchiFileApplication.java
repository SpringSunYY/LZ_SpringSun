package com.lz.file;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

/**
 * 文件服务
 *
 * @author ruoyi
 */
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class LitchiFileApplication {
    public static void main(String[] args) {
        SpringApplication.run(LitchiFileApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ 小猜 文件服务模块启动成功   ლ(´ڡ`ლ)ﾞ  \n");
    }
}