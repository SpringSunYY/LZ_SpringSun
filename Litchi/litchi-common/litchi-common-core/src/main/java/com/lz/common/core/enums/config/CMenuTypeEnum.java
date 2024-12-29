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
 * CreateTime: 2024-12-29 16:05:00
 * Description: CMenuTypeEnum
 * 菜单类型枚举
 * Version: 1.0
 */
public enum CMenuTypeEnum {

    MENU_TYPE_M("目录", "M"),
    MENU_TYPE_C("菜单", "C"),
    MENU_TYPE_B("按钮", "B"),
    MENU_TYPE_F("功能", "F"),
    MENU_TYPE_T("Tabs", "T");

    private final String text; // 字典描述（label）
    private final String value; // 字典值

    private static final Map<String, CMenuTypeEnum> VALUE_TO_ENUM = new ConcurrentHashMap<>();

    static {
        // 构建 value -> enum 的映射，以提高查找效率
        for (CMenuTypeEnum enumValue : CMenuTypeEnum.values()) {
            VALUE_TO_ENUM.put(enumValue.value, enumValue);
        }
    }

    // 构造函数
    CMenuTypeEnum(String text, String value) {
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
                .map(CMenuTypeEnum::getValue)  // 提取每个枚举常量的 value
                .collect(Collectors.toList());  // 转换为 List
    }

    /**
     * 根据 value 获取对应的枚举
     *
     * @param value 枚举的值
     * @return 对应的枚举对象，如果没有找到则返回 Optional.empty()
     */
    public static Optional<CMenuTypeEnum> getEnumByValue(String value) {
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
