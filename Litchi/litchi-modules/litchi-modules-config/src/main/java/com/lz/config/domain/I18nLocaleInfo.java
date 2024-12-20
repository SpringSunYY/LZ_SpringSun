package com.lz.config.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.lz.common.core.annotation.Excel;
import com.lz.common.core.web.domain.BaseEntity;

/**
 * 国际化国家对象 c_i18n_locale_info
 * 
 * @author YY
 * @date 2024-12-20
 */
public class I18nLocaleInfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 编号 */
    private Long messageId;

    /** 国家地区 */
    @Excel(name = "国家地区")
    private String localeName;

    /** 简称 */
    @Excel(name = "简称")
    private String locale;

    /** 状态 */
    @Excel(name = "状态")
    private String localeStatus;

    public void setMessageId(Long messageId) 
    {
        this.messageId = messageId;
    }

    public Long getMessageId() 
    {
        return messageId;
    }
    public void setLocaleName(String localeName) 
    {
        this.localeName = localeName;
    }

    public String getLocaleName() 
    {
        return localeName;
    }
    public void setLocale(String locale) 
    {
        this.locale = locale;
    }

    public String getLocale() 
    {
        return locale;
    }
    public void setLocaleStatus(String localeStatus) 
    {
        this.localeStatus = localeStatus;
    }

    public String getLocaleStatus() 
    {
        return localeStatus;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("messageId", getMessageId())
            .append("localeName", getLocaleName())
            .append("locale", getLocale())
            .append("localeStatus", getLocaleStatus())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .append("remark", getRemark())
            .toString();
    }
}
