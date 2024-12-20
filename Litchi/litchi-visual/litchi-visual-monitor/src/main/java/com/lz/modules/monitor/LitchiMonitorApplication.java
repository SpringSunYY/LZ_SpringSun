package com.lz.modules.monitor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import de.codecentric.boot.admin.server.config.EnableAdminServer;

/**
 * 监控中心
 *
 * @author ruoyi
 */
@EnableAdminServer
@SpringBootApplication
public class LitchiMonitorApplication {
    public static void main(String[] args) {
        SpringApplication.run(LitchiMonitorApplication.class, args);
        System.out.println("(♥◠‿◠)ﾉﾞ  小猜  监控中心启动成功   ლ(´ڡ`ლ)ﾞ  \n");
    }
}
