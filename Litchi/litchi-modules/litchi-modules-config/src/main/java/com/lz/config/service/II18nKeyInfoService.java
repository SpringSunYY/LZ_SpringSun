package com.lz.config.service;

import java.util.List;
import com.lz.config.domain.I18nKeyInfo;

/**
 * 国际化键名Service接口
 * 
 * @author YY
 * @date 2025-01-01
 */
public interface II18nKeyInfoService 
{
    /**
     * 查询国际化键名
     * 
     * @param keyId 国际化键名主键
     * @return 国际化键名
     */
    public I18nKeyInfo selectI18nKeyInfoByKeyId(Long keyId);

    /**
     * 查询国际化键名列表
     * 
     * @param i18nKeyInfo 国际化键名
     * @return 国际化键名集合
     */
    public List<I18nKeyInfo> selectI18nKeyInfoList(I18nKeyInfo i18nKeyInfo);

    /**
     * 新增国际化键名
     * 
     * @param i18nKeyInfo 国际化键名
     * @return 结果
     */
    public int insertI18nKeyInfo(I18nKeyInfo i18nKeyInfo);

    /**
     * 修改国际化键名
     * 
     * @param i18nKeyInfo 国际化键名
     * @return 结果
     */
    public int updateI18nKeyInfo(I18nKeyInfo i18nKeyInfo);

    /**
     * 批量删除国际化键名
     * 
     * @param keyIds 需要删除的国际化键名主键集合
     * @return 结果
     */
    public int deleteI18nKeyInfoByKeyIds(Long[] keyIds);

    /**
     * 删除国际化键名信息
     * 
     * @param keyId 国际化键名主键
     * @return 结果
     */
    public int deleteI18nKeyInfoByKeyId(Long keyId);

    /**
     * description: 根据key名查询key
     * author: YY
     * method: selectI18nKeyInfoByKeyName
     * date: 2025/1/1 15:49
     * param:
     * param: keyName
     * return: com.lz.config.domain.I18nKeyInfo
     **/
    I18nKeyInfo selectI18nKeyInfoByKeyName(String keyName);
}
