package com.lz.config.service;

import java.util.List;

import com.lz.config.domain.ConfigInfo;

/**
 * 配置Service接口
 *
 * @author YY
 * @date 2024-12-20
 */
public interface IConfigInfoService {
    /**
     * 查询配置
     *
     * @param configId 配置主键
     * @return 配置
     */
    public ConfigInfo selectConfigInfoByConfigId(Long configId);

    /**
     * 查询配置
     *
     * @param configKey 配置key
     * @return 配置
     */
    public ConfigInfo selectConfigInfoByConfigKey(String configKey);

    /**
     * description:
     * author: YY
     * method: selectConfigInfoByConfigKeyReturnValue
     * date: 2024/12/30 21:47
     * param: configKey
     * return: java.lang.String
     **/
    public String selectConfigInfoByConfigKeyReturnValue(String configKey);

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
     * 批量删除配置
     *
     * @param configIds 需要删除的配置主键集合
     * @return 结果
     */
    public int deleteConfigInfoByConfigIds(Long[] configIds);

    /**
     * 删除配置信息
     *
     * @param configId 配置主键
     * @return 结果
     */
    public int deleteConfigInfoByConfigId(Long configId);
}
