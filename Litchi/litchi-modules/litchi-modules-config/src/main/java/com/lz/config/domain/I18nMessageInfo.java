package com.lz.config.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.lz.common.core.annotation.Excel;
import com.lz.common.core.web.domain.BaseEntity;

/**
 * 国际化信息对象 c_i18n_message_info
 * 
 * @author YY
 * @date 2024-12-20
 */
public class I18nMessageInfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 主键 */
    private Long messageId;

    /** 键 */
    @Excel(name = "键")
    private String messageKey;

    /** 简称 */
    @Excel(name = "简称")
    private String locale;

    /** 消息 */
    @Excel(name = "消息")
    private String message;

    public void setMessageId(Long messageId)
    {
        this.messageId = messageId;
    }

    public Long getMessageId()
    {
        return messageId;
    }
    public void setMessageKey(String messageKey) 
    {
        this.messageKey = messageKey;
    }

    public String getMessageKey() 
    {
        return messageKey;
    }
    public void setLocale(String locale) 
    {
        this.locale = locale;
    }

    public String getLocale() 
    {
        return locale;
    }
    public void setMessage(String message) 
    {
        this.message = message;
    }

    public String getMessage() 
    {
        return message;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("messageId", getMessageId())
            .append("messageKey", getMessageKey())
            .append("locale", getLocale())
            .append("message", getMessage())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .append("remark", getRemark())
            .toString();
    }
}
