package com.lz.config.domain;

import com.baomidou.mybatisplus.annotation.TableId;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.lz.common.core.annotation.Excel;
import com.lz.common.core.web.domain.BaseEntity;

/**
 * 国际化键名对象 c_i18n_key_info
 * 
 * @author YY
 * @date 2025-01-01
 */
public class I18nKeyInfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 编号 */
    @TableId
    private Long keyId;

    /** 键 */
    @Excel(name = "键")
    private String keyName;

    public void setKeyId(Long keyId) 
    {
        this.keyId = keyId;
    }

    public Long getKeyId() 
    {
        return keyId;
    }
    public void setKeyName(String keyName) 
    {
        this.keyName = keyName;
    }

    public String getKeyName() 
    {
        return keyName;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("keyId", getKeyId())
            .append("keyName", getKeyName())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .append("remark", getRemark())
            .toString();
    }
}
