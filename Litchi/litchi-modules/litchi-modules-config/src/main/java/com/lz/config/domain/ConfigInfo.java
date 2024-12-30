package com.lz.config.domain;

import com.baomidou.mybatisplus.annotation.TableId;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.lz.common.core.annotation.Excel;
import com.lz.common.core.web.domain.BaseEntity;

/**
 * 配置对象 c_config_info
 * 
 * @author YY
 * @date 2024-12-20
 */
public class ConfigInfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 编号 */
    @TableId
    private Long configId;

    /** 配置名称 */
    @Excel(name = "配置名称")
    private String configName;

    /** 配置键名 */
    @Excel(name = "配置键名")
    private String configKey;

    /** 配置键值 */
    @Excel(name = "配置键值")
    private String configValue;

    /** 配置类型 */
    @Excel(name = "配置类型")
    private String configType;

    public void setConfigId(Long configId) 
    {
        this.configId = configId;
    }

    public Long getConfigId() 
    {
        return configId;
    }
    public void setConfigName(String configName) 
    {
        this.configName = configName;
    }

    public String getConfigName() 
    {
        return configName;
    }
    public void setConfigKey(String configKey) 
    {
        this.configKey = configKey;
    }

    public String getConfigKey() 
    {
        return configKey;
    }
    public void setConfigValue(String configValue) 
    {
        this.configValue = configValue;
    }

    public String getConfigValue() 
    {
        return configValue;
    }
    public void setConfigType(String configType) 
    {
        this.configType = configType;
    }

    public String getConfigType() 
    {
        return configType;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("configId", getConfigId())
            .append("configName", getConfigName())
            .append("configKey", getConfigKey())
            .append("configValue", getConfigValue())
            .append("configType", getConfigType())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .append("remark", getRemark())
            .toString();
    }
}
