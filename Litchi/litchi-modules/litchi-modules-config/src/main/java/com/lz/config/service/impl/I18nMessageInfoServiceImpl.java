package com.lz.config.service.impl;

import java.util.List;
import com.lz.common.core.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lz.config.mapper.I18nMessageInfoMapper;
import com.lz.config.domain.I18nMessageInfo;
import com.lz.config.service.II18nMessageInfoService;

/**
 * 国际化信息Service业务层处理
 * 
 * @author YY
 * @date 2024-12-20
 */
@Service
public class I18nMessageInfoServiceImpl implements II18nMessageInfoService 
{
    @Autowired
    private I18nMessageInfoMapper i18nMessageInfoMapper;

    /**
     * 查询国际化信息
     * 
     * @param messageId 国际化信息主键
     * @return 国际化信息
     */
    @Override
    public I18nMessageInfo selectI18nMessageInfoByMessageId(String messageId)
    {
        return i18nMessageInfoMapper.selectI18nMessageInfoByMessageId(messageId);
    }

    /**
     * 查询国际化信息列表
     * 
     * @param i18nMessageInfo 国际化信息
     * @return 国际化信息
     */
    @Override
    public List<I18nMessageInfo> selectI18nMessageInfoList(I18nMessageInfo i18nMessageInfo)
    {
        return i18nMessageInfoMapper.selectI18nMessageInfoList(i18nMessageInfo);
    }

    /**
     * 新增国际化信息
     * 
     * @param i18nMessageInfo 国际化信息
     * @return 结果
     */
    @Override
    public int insertI18nMessageInfo(I18nMessageInfo i18nMessageInfo)
    {
        i18nMessageInfo.setCreateTime(DateUtils.getNowDate());
        return i18nMessageInfoMapper.insertI18nMessageInfo(i18nMessageInfo);
    }

    /**
     * 修改国际化信息
     * 
     * @param i18nMessageInfo 国际化信息
     * @return 结果
     */
    @Override
    public int updateI18nMessageInfo(I18nMessageInfo i18nMessageInfo)
    {
        i18nMessageInfo.setUpdateTime(DateUtils.getNowDate());
        return i18nMessageInfoMapper.updateI18nMessageInfo(i18nMessageInfo);
    }

    /**
     * 批量删除国际化信息
     * 
     * @param messageIds 需要删除的国际化信息主键
     * @return 结果
     */
    @Override
    public int deleteI18nMessageInfoByMessageIds(String[] messageIds)
    {
        return i18nMessageInfoMapper.deleteI18nMessageInfoByMessageIds(messageIds);
    }

    /**
     * 删除国际化信息信息
     * 
     * @param messageId 国际化信息主键
     * @return 结果
     */
    @Override
    public int deleteI18nMessageInfoByMessageId(String messageId)
    {
        return i18nMessageInfoMapper.deleteI18nMessageInfoByMessageId(messageId);
    }
}
