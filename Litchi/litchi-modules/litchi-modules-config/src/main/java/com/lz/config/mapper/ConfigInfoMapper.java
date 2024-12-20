package com.lz.config.mapper;

import java.util.List;
import com.lz.config.domain.ConfigInfo;

/**
 * 配置Mapper接口
 * 
 * @author YY
 * @date 2024-12-20
 */
public interface ConfigInfoMapper 
{
    /**
     * 查询配置
     * 
     * @param configId 配置主键
     * @return 配置
     */
    public ConfigInfo selectConfigInfoByConfigId(Long configId);

    /**
     * 查询配置列表
     * 
     * @param configInfo 配置
     * @return 配置集合
     */
    public List<ConfigInfo> selectConfigInfoList(ConfigInfo configInfo);

    /**
     * 新增配置
     * 
     * @param configInfo 配置
     * @return 结果
     */
    public int insertConfigInfo(ConfigInfo configInfo);

    /**
     * 修改配置
     * 
     * @param configInfo 配置
     * @return 结果
     */
    public int updateConfigInfo(ConfigInfo configInfo);

    /**
     * 删除配置
     * 
     * @param configId 配置主键
     * @return 结果
     */
    public int deleteConfigInfoByConfigId(Long configId);

    /**
     * 批量删除配置
     * 
     * @param configIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteConfigInfoByConfigIds(Long[] configIds);
}
