package com.lz.config.domain.dto;

/**
 * Project: Litchi
 * Package: com.lz.config.domain.dto
 * Author: YY
 * CreateTime: 2024-12-30  23:43
 * Description: LocalizationDto
 * Version: 1.0
 */
public class LocalizationDto {
    private String msg;

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "LocalizationDto{" +
                "msg='" + msg + '\'' +
                '}';
    }
}
