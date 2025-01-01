package com.lz.config.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.lz.common.core.exception.sql.MySQLIntegrityConstraintViolationException;
import com.lz.common.core.utils.DateUtils;
import com.lz.common.core.utils.StringUtils;
import com.lz.common.redis.service.RedisService;
import com.lz.common.security.utils.SecurityUtils;
import com.lz.config.domain.ConfigInfo;
import com.lz.config.mapper.ConfigInfoMapper;
import com.lz.config.service.IConfigInfoService;
import jakarta.annotation.Resource;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.lz.common.core.constant.redis.RedisConfigConstants.CONFIG;

/**
 * 配置Service业务层处理
 *
 * @author YY
 * date 2024-12-20
 */
@Service
public class ConfigInfoServiceImpl implements IConfigInfoService {
    @Resource
    private ConfigInfoMapper configInfoMapper;

    @Resource
    private RedisService redisService;

    /**
     * 查询配置
     *
     * @param configId 配置主键
     * @return 配置
     */
    @Override
    public ConfigInfo selectConfigInfoByConfigId(Long configId) {
        return configInfoMapper.selectConfigInfoByConfigId(configId);
    }

    @Override
    public ConfigInfo selectConfigInfoByConfigKey(String configKey) {
        QueryWrapper<ConfigInfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("config_key", configKey);
        return configInfoMapper.selectOne(queryWrapper);
    }

    @Override
    public String selectConfigInfoByConfigKeyReturnValue(String configKey) {
        String cacheObject = redisService.getCacheObject(CONFIG + configKey);
        if (StringUtils.isNotEmpty(configKey)) {
            return cacheObject;
        }
        ConfigInfo configInfo = this.selectConfigInfoByConfigKey(configKey);
        redisService.setCacheObject(CONFIG + configKey, configInfo);
        return configInfo.getConfigValue();
    }

    /**
     * 查询配置列表
     *
     * @param configInfo 配置
     * @return 配置
     */
    @Override
    public List<ConfigInfo> selectConfigInfoList(ConfigInfo configInfo) {
        return configInfoMapper.selectConfigInfoList(configInfo);
    }

    /**
     * 新增配置
     *
     * @param configInfo 配置
     * @return 结果
     */
    @Override
    public int insertConfigInfo(ConfigInfo configInfo) {
        configInfo.setCreateBy(SecurityUtils.getUsername());
        configInfo.setCreateTime(DateUtils.getNowDate());
        try {
            int i = configInfoMapper.insertConfigInfo(configInfo);
            redisService.setCacheObject(CONFIG + configInfo.getConfigKey(), configInfo.getConfigValue());
            return i;
        } catch (DataAccessException e) {
            throw new MySQLIntegrityConstraintViolationException(e.getMessage());
        }
    }

    /**
     * 修改配置
     *
     * @param configInfo 配置
     * @return 结果
     */
    @Override
    public int updateConfigInfo(ConfigInfo configInfo) {
        //不可修改key，直接设置为null
        String configKey = configInfo.getConfigKey();
        configInfo.setConfigKey(null);
        configInfo.setUpdateBy(SecurityUtils.getUsername());
        configInfo.setUpdateTime(DateUtils.getNowDate());
        try {
            int i = configInfoMapper.updateConfigInfo(configInfo);
            redisService.setCacheObject(CONFIG + configKey, configInfo.getConfigValue());
            return i;
        } catch (DataAccessException e) {
            throw new MySQLIntegrityConstraintViolationException(e.getMessage());
        }
    }

    /**
     * 批量删除配置
     *
     * @param configIds 需要删除的配置主键
     * @return 结果
     */
    @Override
    public int deleteConfigInfoByConfigIds(Long[] configIds) {
        return configInfoMapper.deleteConfigInfoByConfigIds(configIds);
    }

    /**
     * 删除配置信息
     *
     * @param configId 配置主键
     * @return 结果
     */
    @Override
    public int deleteConfigInfoByConfigId(Long configId) {
        return configInfoMapper.deleteConfigInfoByConfigId(configId);
    }
}
