package com.lz.config.service;

import java.util.List;
import com.lz.config.domain.I18nLocaleInfo;

/**
 * 国际化国家Service接口
 * 
 * @author YY
 * @date 2024-12-20
 */
public interface II18nLocaleInfoService 
{
    /**
     * 查询国际化国家
     * 
     * @param localeId 国际化国家主键
     * @return 国际化国家
     */
    public I18nLocaleInfo selectI18nLocaleInfoByLocaleId(Long localeId);

    /**
     * 查询国际化国家列表
     * 
     * @param i18nLocaleInfo 国际化国家
     * @return 国际化国家集合
     */
    public List<I18nLocaleInfo> selectI18nLocaleInfoList(I18nLocaleInfo i18nLocaleInfo);

    /**
     * 新增国际化国家
     * 
     * @param i18nLocaleInfo 国际化国家
     * @return 结果
     */
    public int insertI18nLocaleInfo(I18nLocaleInfo i18nLocaleInfo);

    /**
     * 修改国际化国家
     * 
     * @param i18nLocaleInfo 国际化国家
     * @return 结果
     */
    public int updateI18nLocaleInfo(I18nLocaleInfo i18nLocaleInfo);

    /**
     * 批量删除国际化国家
     * 
     * @param localeIds 需要删除的国际化国家主键集合
     * @return 结果
     */
    public int deleteI18nLocaleInfoByLocaleIds(Long[] localeIds);

    /**
     * 删除国际化国家信息
     * 
     * @param localeId 国际化国家主键
     * @return 结果
     */
    public int deleteI18nLocaleInfoByLocaleId(Long localeId);

    /**
     * description:  根据地区简称查询
     * author: YY
     * method: selectI18nLocaleInfoByLocaleLocale
     * date: 2024/12/28 16:42
     * param:
     * @param: locale
     * return: com.lz.config.domain.I18nLocaleInfo
     **/
    I18nLocaleInfo selectI18nLocaleInfoByLocaleLocale(String locale);
}
