package com.lz.config.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.lz.common.core.enums.config.CLocaleStatusEnum;
import com.lz.common.core.exception.ServiceException;
import com.lz.common.core.exception.sql.MySQLIntegrityConstraintViolationException;
import com.lz.common.core.utils.DateUtils;
import com.lz.common.core.utils.StringUtils;
import com.lz.common.redis.service.RedisService;
import com.lz.common.security.utils.SecurityUtils;
import com.lz.config.domain.I18nKeyInfo;
import com.lz.config.domain.I18nLocaleInfo;
import com.lz.config.domain.I18nMessageInfo;
import com.lz.config.mapper.I18nMessageInfoMapper;
import com.lz.config.service.IConfigInfoService;
import com.lz.config.service.II18nKeyInfoService;
import com.lz.config.service.II18nLocaleInfoService;
import com.lz.config.service.II18nMessageInfoService;
import com.lz.i18n.service.I18nService;
import jakarta.annotation.Resource;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.lz.common.core.constant.redis.RedisConfigConstants.DEFAULT_LANGUAGE_TIMEOUT;
import static com.lz.common.core.constant.redis.RedisConfigConstants.LOCALIZATION;
import static com.lz.common.core.constant.redis.RedisI18nConstants.FAILED_TO_SWITCH_LANGUAGE;

/**
 * 国际化信息Service业务层处理
 *
 * @author YY
 * @date 2024-12-20
 */
@Service
public class I18nMessageInfoServiceImpl implements II18nMessageInfoService {
    @Resource
    private I18nMessageInfoMapper i18nMessageInfoMapper;

    @Resource
    private II18nLocaleInfoService i18nLocaleInfoService;

    @Resource
    private RedisService redisService;

    @Resource
    private IConfigInfoService configInfoService;

    @Resource
    private I18nService i18nService;

    @Resource
    private II18nKeyInfoService i18nKeyInfoService;

    /**
     * 查询国际化信息
     *
     * @param messageId 国际化信息主键
     * @return 国际化信息
     */
    @Override
    public I18nMessageInfo selectI18nMessageInfoByMessageId(String messageId) {
        return i18nMessageInfoMapper.selectI18nMessageInfoByMessageId(messageId);
    }

    /**
     * 查询国际化信息列表
     *
     * @param i18nMessageInfo 国际化信息
     * @return 国际化信息
     */
    @Override
    public List<I18nMessageInfo> selectI18nMessageInfoList(I18nMessageInfo i18nMessageInfo) {
        return i18nMessageInfoMapper.selectI18nMessageInfoList(i18nMessageInfo);
    }

    /**
     * 新增国际化信息
     *
     * @param i18nMessageInfo 国际化信息
     * @return 结果
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public int insertI18nMessageInfo(I18nMessageInfo i18nMessageInfo) {
        //查询是否有这个key
        I18nKeyInfo keyInfo = i18nKeyInfoService.selectI18nKeyInfoByKeyName(i18nMessageInfo.getMessageKey());
        if (StringUtils.isNull(keyInfo)) {
            keyInfo = new I18nKeyInfo();
            keyInfo.setKeyName(i18nMessageInfo.getMessageKey());
            i18nKeyInfoService.insertI18nKeyInfo(keyInfo);
        }
        i18nMessageInfo.setCreateTime(DateUtils.getNowDate());
        i18nMessageInfo.setCreateBy(SecurityUtils.getUsername());
        int i = 0;
        try {
            i = i18nMessageInfoMapper.insertI18nMessageInfo(i18nMessageInfo);
        } catch (DataAccessException e) {
            throw new MySQLIntegrityConstraintViolationException(e.getMessage());
        }
        insertCacheKey(i18nMessageInfo);
        return i;
    }

    private void insertCacheKey(I18nMessageInfo i18nMessageInfo) {
        HashMap<String, String> map = new HashMap<>();
        map.put(i18nMessageInfo.getMessageKey(), i18nMessageInfo.getMessage());
        redisService.setCacheMap(LOCALIZATION + i18nMessageInfo.getLocale(), map);
    }

    /**
     * 修改国际化信息
     *
     * @param i18nMessageInfo 国际化信息
     * @return 结果
     */
    @Override
    public int updateI18nMessageInfo(I18nMessageInfo i18nMessageInfo) {
        int i = 0;
        try {
            i18nMessageInfo.setUpdateBy(SecurityUtils.getUsername());
            i18nMessageInfo.setUpdateTime(DateUtils.getNowDate());
            i = i18nMessageInfoMapper.updateI18nMessageInfo(i18nMessageInfo);
        } catch (DataAccessException exception) {
            throw new MySQLIntegrityConstraintViolationException(exception.getMessage());
        }
        //存入redis
        insertCacheKey(i18nMessageInfo);
        return i;
    }

    /**
     * 批量删除国际化信息
     *
     * @param messageIds 需要删除的国际化信息主键
     * @return 结果
     */
    @Override
    public int deleteI18nMessageInfoByMessageIds(String[] messageIds) {
        QueryWrapper<I18nMessageInfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.in("message_id", (Object[]) messageIds);
        List<I18nMessageInfo> i18nMessageInfos = i18nMessageInfoMapper.selectList(queryWrapper);
        for (I18nMessageInfo info : i18nMessageInfos) {
            redisService.deleteCacheMapValue(LOCALIZATION + info.getLocale(), info.getMessageKey());
        }
        return i18nMessageInfoMapper.deleteI18nMessageInfoByMessageIds(messageIds);
    }

    /**
     * 删除国际化信息信息
     *
     * @param messageId 国际化信息主键
     * @return 结果
     */
    @Override
    public int deleteI18nMessageInfoByMessageId(String messageId) {
        return i18nMessageInfoMapper.deleteI18nMessageInfoByMessageId(messageId);
    }

    @Override
    public Map<String, String> getLocalization(String locale) {
        Map<String, String> cacheMap = redisService.getCacheMap(LOCALIZATION + locale);
        //如果有缓存
        if (StringUtils.isNotEmpty(cacheMap)) {
            return cacheMap;
        }
        I18nLocaleInfo i18nLocaleInfo = i18nLocaleInfoService.selectI18nLocaleInfoByLocaleLocale(locale);
        if (StringUtils.isNull(i18nLocaleInfo) || !i18nLocaleInfo.getLocaleStatus().equals(CLocaleStatusEnum.LOCALE_STATUS_0.getValue())) {
            throw new ServiceException("语言不存在！！！");
        }
        I18nMessageInfo i18nMessageInfo = new I18nMessageInfo();
        i18nMessageInfo.setLocale(locale);
        List<I18nMessageInfo> i18nMessageInfos = i18nMessageInfoMapper.selectI18nMessageInfoList(i18nMessageInfo);
        //使用stream流转为map
        cacheMap = i18nMessageInfos.stream().collect(Collectors.toMap(I18nMessageInfo::getMessageKey, I18nMessageInfo::getMessage));
        redisService.setCacheMap(LOCALIZATION + i18nMessageInfo.getLocale(), cacheMap);
        return cacheMap;
    }

    @Override
    public void setUserI18n(String msg) {
        String value = configInfoService.selectConfigInfoByConfigKeyReturnValue(DEFAULT_LANGUAGE_TIMEOUT);
        try {
//            System.err.println(value);
            long parseLong = Long.parseLong(value);
            i18nService.setUserI18n(msg, parseLong);
        } catch (NumberFormatException e) {
            throw new ServiceException(i18nService.getMessage(FAILED_TO_SWITCH_LANGUAGE));
        }
    }
}
