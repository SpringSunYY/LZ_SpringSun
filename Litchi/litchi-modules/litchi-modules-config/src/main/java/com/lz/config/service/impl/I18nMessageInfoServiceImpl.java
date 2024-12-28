package com.lz.config.service.impl;

import com.lz.common.core.exception.ServiceException;
import com.lz.common.core.exception.sql.MySQLIntegrityConstraintViolationException;
import com.lz.common.core.utils.DateUtils;
import com.lz.common.redis.service.RedisService;
import com.lz.common.security.utils.SecurityUtils;
import com.lz.config.domain.I18nMessageInfo;
import com.lz.config.mapper.I18nMessageInfoMapper;
import com.lz.config.service.II18nLocaleInfoService;
import com.lz.config.service.II18nMessageInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.List;

import static com.lz.common.core.constant.RedisConfigConstants.LOCALIZATION;

/**
 * 国际化信息Service业务层处理
 *
 * @author YY
 * @date 2024-12-20
 */
@Service
public class I18nMessageInfoServiceImpl implements II18nMessageInfoService {
    @Autowired
    private I18nMessageInfoMapper i18nMessageInfoMapper;

    @Autowired
    private II18nLocaleInfoService i18nLocaleInfoService;

    @Autowired
    private RedisService redisService;

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
    @Override
    public int insertI18nMessageInfo(I18nMessageInfo i18nMessageInfo) {
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
}
