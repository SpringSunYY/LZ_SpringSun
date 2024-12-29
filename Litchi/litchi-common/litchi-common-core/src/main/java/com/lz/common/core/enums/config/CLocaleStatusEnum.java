package com.lz.common.core.enums.config;

import com.lz.common.core.utils.StringUtils;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Project: config
 * Package: com.lz.common.core.enums.config
 * Author: YY
 * CreateTime: 2024-12-29 15:30:00
 * Description: CLocaleStatusEnum
 * 语言状态枚举
 * Version: 1.1
 */
public enum CLocaleStatusEnum {

    LOCALE_STATUS_0("正常", "0"),
    LOCALE_STATUS_1("隐藏", "1");

    private final String text; // 字典描述（label）
    private final String value; // 字典值

    private static final Map<String, CLocaleStatusEnum> VALUE_TO_ENUM = new ConcurrentHashMap<>();

    static {
        // 构建 value -> enum 的映射，以提高查找效率
        for (CLocaleStatusEnum enumValue : CLocaleStatusEnum.values()) {
            VALUE_TO_ENUM.put(enumValue.value, enumValue);
        }
    }

    // 构造函数
    CLocaleStatusEnum(String text, String value) {
        this.text = text;
        this.value = value;
    }

    /**
     * 获取所有枚举常量的值列表
     *
     * @return 所有枚举常量的值列表
     */
    public static List<String> getValues() {
        // 直接通过枚举常量的流来获取值列表
        return Arrays.stream(values())  // 获取所有枚举常量
                .map(CLocaleStatusEnum::getValue)  // 提取每个枚举常量的 value
                .collect(Collectors.toList());  // 转换为 List
    }

    /**
     * 根据 value 获取对应的枚举
     *
     * @param value 枚举的值
     * @return 对应的枚举对象，如果没有找到则返回 Optional.empty()
     */
    public static Optional<CLocaleStatusEnum> getEnumByValue(String value) {
        // 优化：通过 Map 查找 value 对应的枚举，避免全遍历
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
