package com.lz.config.service.impl;

import java.util.List;
import com.lz.common.core.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lz.config.mapper.ConfigInfoMapper;
import com.lz.config.domain.ConfigInfo;
import com.lz.config.service.IConfigInfoService;

/**
 * 配置Service业务层处理
 * 
 * @author YY
 * @date 2024-12-20
 */
@Service
public class ConfigInfoServiceImpl implements IConfigInfoService 
{
    @Autowired
    private ConfigInfoMapper configInfoMapper;

    /**
     * 查询配置
     * 
     * @param configId 配置主键
     * @return 配置
     */
    @Override
    public ConfigInfo selectConfigInfoByConfigId(Long configId)
    {
        return configInfoMapper.selectConfigInfoByConfigId(configId);
    }

    /**
     * 查询配置列表
     * 
     * @param configInfo 配置
     * @return 配置
     */
    @Override
    public List<ConfigInfo> selectConfigInfoList(ConfigInfo configInfo)
    {
        return configInfoMapper.selectConfigInfoList(configInfo);
    }

    /**
     * 新增配置
     * 
     * @param configInfo 配置
     * @return 结果
     */
    @Override
    public int insertConfigInfo(ConfigInfo configInfo)
    {
        configInfo.setCreateTime(DateUtils.getNowDate());
        return configInfoMapper.insertConfigInfo(configInfo);
    }

    /**
     * 修改配置
     * 
     * @param configInfo 配置
     * @return 结果
     */
    @Override
    public int updateConfigInfo(ConfigInfo configInfo)
    {
        configInfo.setUpdateTime(DateUtils.getNowDate());
        return configInfoMapper.updateConfigInfo(configInfo);
    }

    /**
     * 批量删除配置
     * 
     * @param configIds 需要删除的配置主键
     * @return 结果
     */
    @Override
    public int deleteConfigInfoByConfigIds(Long[] configIds)
    {
        return configInfoMapper.deleteConfigInfoByConfigIds(configIds);
    }

    /**
     * 删除配置信息
     * 
     * @param configId 配置主键
     * @return 结果
     */
    @Override
    public int deleteConfigInfoByConfigId(Long configId)
    {
        return configInfoMapper.deleteConfigInfoByConfigId(configId);
    }
}
