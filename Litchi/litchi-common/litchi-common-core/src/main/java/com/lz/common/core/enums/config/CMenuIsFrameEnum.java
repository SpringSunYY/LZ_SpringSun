package com.lz.common.core.enums.config;

import com.lz.common.core.utils.StringUtils;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

/**
 * Project: config
 * Package: com.lz.common.core.enums.config
 * Author: YY
 * CreateTime: 2024-12-29 16:00:00
 * Description: CMenuIsFrameEnum
 * 菜单是否为框架状态枚举
 * Version: 1.0
 */
public enum CMenuIsFrameEnum {

    MENU_IS_FRAME_0("否", "0"),
    MENU_IS_FRAME_1("是", "1");

    private final String text; // 字典描述（label）
    private final String value; // 字典值

    private static final Map<String, CMenuIsFrameEnum> VALUE_TO_ENUM = new ConcurrentHashMap<>();

    static {
        // 构建 value -> enum 的映射，以提高查找效率
        for (CMenuIsFrameEnum enumValue : CMenuIsFrameEnum.values()) {
            VALUE_TO_ENUM.put(enumValue.value, enumValue);
        }
    }

    // 构造函数
    CMenuIsFrameEnum(String text, String value) {
        this.text = text;
        this.value = value;
    }

    /**
     * 获取所有枚举常量的值列表
     *
     * @return 所有枚举常量的值列表
     */
    public static List<String> getValues() {
        return Arrays.stream(values())  // 获取所有枚举常量
                .map(CMenuIsFrameEnum::getValue)  // 提取每个枚举常量的 value
                .collect(Collectors.toList());  // 转换为 List
    }

    /**
     * 根据 value 获取对应的枚举
     *
     * @param value 枚举的值
     * @return 对应的枚举对象，如果没有找到则返回 Optional.empty()
     */
    public static Optional<CMenuIsFrameEnum> getEnumByValue(String value) {
        if (StringUtils.isEmpty(value)) {
            return Optional.empty();
        }
        return Optional.ofNullable(VALUE_TO_ENUM.get(value));
    }

    // 获取 value
    public String getValue() {
        return value;
    }

    // 获取 text
    public String getText() {
        return text;
    }
}
