package com.lz.job;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.lz.common.security.annotation.EnableCustomConfig;
import com.lz.common.security.annotation.EnableRyFeignClients;

/**
 * 定时任务
 * 
 * @author ruoyi
 */
@EnableCustomConfig
@EnableRyFeignClients   
@SpringBootApplication
public class LitchiJobApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(LitchiJobApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  小猜  定时任务模块启动成功   ლ(´ڡ`ლ)ﾞ  \n");
    }
}
