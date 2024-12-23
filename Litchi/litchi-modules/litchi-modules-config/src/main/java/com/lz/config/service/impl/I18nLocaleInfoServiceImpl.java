package com.lz.config.service.impl;

import java.util.List;
import com.lz.common.core.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lz.config.mapper.I18nLocaleInfoMapper;
import com.lz.config.domain.I18nLocaleInfo;
import com.lz.config.service.II18nLocaleInfoService;

/**
 * 国际化国家Service业务层处理
 * 
 * @author YY
 * @date 2024-12-20
 */
@Service
public class I18nLocaleInfoServiceImpl implements II18nLocaleInfoService 
{
    @Autowired
    private I18nLocaleInfoMapper i18nLocaleInfoMapper;

    /**
     * 查询国际化国家
     * 
     * @param messageId 国际化国家主键
     * @return 国际化国家
     */
    @Override
    public I18nLocaleInfo selectI18nLocaleInfoByMessageId(Long messageId)
    {
        i18nLocaleInfoMapper.selectById(messageId);
        return i18nLocaleInfoMapper.selectI18nLocaleInfoByMessageId(messageId);
    }

    /**
     * 查询国际化国家列表
     * 
     * @param i18nLocaleInfo 国际化国家
     * @return 国际化国家
     */
    @Override
    public List<I18nLocaleInfo> selectI18nLocaleInfoList(I18nLocaleInfo i18nLocaleInfo)
    {
        List<I18nLocaleInfo> i18nLocaleInfos = i18nLocaleInfoMapper.selectI18nLocaleInfoList(i18nLocaleInfo);
        for (I18nLocaleInfo info : i18nLocaleInfos) {
            System.err.println(info);
        }
        return i18nLocaleInfos;
    }

    /**
     * 新增国际化国家
     * 
     * @param i18nLocaleInfo 国际化国家
     * @return 结果
     */
    @Override
    public int insertI18nLocaleInfo(I18nLocaleInfo i18nLocaleInfo)
    {
        i18nLocaleInfo.setCreateTime(DateUtils.getNowDate());
        return i18nLocaleInfoMapper.insertI18nLocaleInfo(i18nLocaleInfo);
    }

    /**
     * 修改国际化国家
     * 
     * @param i18nLocaleInfo 国际化国家
     * @return 结果
     */
    @Override
    public int updateI18nLocaleInfo(I18nLocaleInfo i18nLocaleInfo)
    {
        i18nLocaleInfo.setUpdateTime(DateUtils.getNowDate());
        return i18nLocaleInfoMapper.updateI18nLocaleInfo(i18nLocaleInfo);
    }

    /**
     * 批量删除国际化国家
     * 
     * @param messageIds 需要删除的国际化国家主键
     * @return 结果
     */
    @Override
    public int deleteI18nLocaleInfoByMessageIds(Long[] messageIds)
    {
        return i18nLocaleInfoMapper.deleteI18nLocaleInfoByMessageIds(messageIds);
    }

    /**
     * 删除国际化国家信息
     * 
     * @param messageId 国际化国家主键
     * @return 结果
     */
    @Override
    public int deleteI18nLocaleInfoByMessageId(Long messageId)
    {
        return i18nLocaleInfoMapper.deleteI18nLocaleInfoByMessageId(messageId);
    }
}
