package com.lz.config.service;

import java.util.List;
import java.util.Map;

import com.lz.config.domain.I18nMessageInfo;

/**
 * 国际化信息Service接口
 *
 * @author YY
 * @date 2024-12-20
 */
public interface II18nMessageInfoService {
    /**
     * 查询国际化信息
     *
     * @param messageId 国际化信息主键
     * @return 国际化信息
     */
    public I18nMessageInfo selectI18nMessageInfoByMessageId(String messageId);

    /**
     * 查询国际化信息列表
     *
     * @param i18nMessageInfo 国际化信息
     * @return 国际化信息集合
     */
    public List<I18nMessageInfo> selectI18nMessageInfoList(I18nMessageInfo i18nMessageInfo);

    /**
     * 新增国际化信息
     *
     * @param i18nMessageInfo 国际化信息
     * @return 结果
     */
    public int insertI18nMessageInfo(I18nMessageInfo i18nMessageInfo);

    /**
     * 修改国际化信息
     *
     * @param i18nMessageInfo 国际化信息
     * @return 结果
     */
    public int updateI18nMessageInfo(I18nMessageInfo i18nMessageInfo);

    /**
     * 批量删除国际化信息
     *
     * @param messageIds 需要删除的国际化信息主键集合
     * @return 结果
     */
    public int deleteI18nMessageInfoByMessageIds(String[] messageIds);

    /**
     * 删除国际化信息信息
     *
     * @param messageId 国际化信息主键
     * @return 结果
     */
    public int deleteI18nMessageInfoByMessageId(String messageId);


    /**
     * description: 获取到语言信息
     * author: YY
     * method: getLocalization
     * date: 2024/12/28 21:03
     * param:
     *
     * @param: locale
     * return: Map<String,String>
     **/
    Map<String, String> getLocalization(String locale);

    /**
     * description: 设置用户国际化配置超时
     * author: YY
     * method: setUserI18n
     * date: 2024/12/31 15:25
     * param:
     * param: msg
     * return: void
     **/
    void setUserI18n(String msg);
}
