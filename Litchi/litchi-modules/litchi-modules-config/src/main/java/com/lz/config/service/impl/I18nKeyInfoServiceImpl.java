package com.lz.config.service.impl;

import java.util.List;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.lz.common.core.exception.ServiceException;
import com.lz.common.core.exception.sql.MySQLIntegrityConstraintViolationException;
import com.lz.common.core.utils.DateUtils;
import com.lz.common.security.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lz.config.mapper.I18nKeyInfoMapper;
import com.lz.config.domain.I18nKeyInfo;
import com.lz.config.service.II18nKeyInfoService;

/**
 * 国际化键名Service业务层处理
 * 
 * @author YY
 * @date 2025-01-01
 */
@Service
public class I18nKeyInfoServiceImpl implements II18nKeyInfoService 
{
    @Autowired
    private I18nKeyInfoMapper i18nKeyInfoMapper;

    /**
     * 查询国际化键名
     * 
     * @param keyId 国际化键名主键
     * @return 国际化键名
     */
    @Override
    public I18nKeyInfo selectI18nKeyInfoByKeyId(Long keyId)
    {
        return i18nKeyInfoMapper.selectI18nKeyInfoByKeyId(keyId);
    }

    /**
     * 查询国际化键名列表
     * 
     * @param i18nKeyInfo 国际化键名
     * @return 国际化键名
     */
    @Override
    public List<I18nKeyInfo> selectI18nKeyInfoList(I18nKeyInfo i18nKeyInfo)
    {
        return i18nKeyInfoMapper.selectI18nKeyInfoList(i18nKeyInfo);
    }

    /**
     * 新增国际化键名
     * 
     * @param i18nKeyInfo 国际化键名
     * @return 结果
     */
    @Override
    public int insertI18nKeyInfo(I18nKeyInfo i18nKeyInfo)
    {
        i18nKeyInfo.setCreateBy(SecurityUtils.getUsername());
        i18nKeyInfo.setCreateTime(DateUtils.getNowDate());
        try {
            return i18nKeyInfoMapper.insertI18nKeyInfo(i18nKeyInfo);
        } catch (Exception e) {
            throw new MySQLIntegrityConstraintViolationException(e.getMessage());
        }
    }

    /**
     * 修改国际化键名
     * 
     * @param i18nKeyInfo 国际化键名
     * @return 结果
     */
    @Override
    public int updateI18nKeyInfo(I18nKeyInfo i18nKeyInfo)
    {
        //key不可修改
        I18nKeyInfo old = i18nKeyInfoMapper.selectI18nKeyInfoByKeyId(i18nKeyInfo.getKeyId());
        if (!old.getKeyName().equals(i18nKeyInfo.getKeyName())) {
            throw new ServiceException("键名不可修改！！！");
        }
        i18nKeyInfo.setUpdateBy(SecurityUtils.getUsername());
        i18nKeyInfo.setUpdateTime(DateUtils.getNowDate());
        return i18nKeyInfoMapper.updateI18nKeyInfo(i18nKeyInfo);
    }

    /**
     * 批量删除国际化键名
     * 
     * @param keyIds 需要删除的国际化键名主键
     * @return 结果
     */
    @Override
    public int deleteI18nKeyInfoByKeyIds(Long[] keyIds)
    {
        return i18nKeyInfoMapper.deleteI18nKeyInfoByKeyIds(keyIds);
    }

    /**
     * 删除国际化键名信息
     * 
     * @param keyId 国际化键名主键
     * @return 结果
     */
    @Override
    public int deleteI18nKeyInfoByKeyId(Long keyId)
    {
        return i18nKeyInfoMapper.deleteI18nKeyInfoByKeyId(keyId);
    }

    @Override
    public I18nKeyInfo selectI18nKeyInfoByKeyName(String keyName) {
        QueryWrapper<I18nKeyInfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("key_name", keyName);
        return i18nKeyInfoMapper.selectOne(queryWrapper);
    }
}
