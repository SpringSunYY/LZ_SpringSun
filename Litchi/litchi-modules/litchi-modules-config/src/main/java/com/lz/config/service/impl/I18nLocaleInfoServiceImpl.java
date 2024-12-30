package com.lz.config.service.impl;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.lz.common.core.enums.config.CLocaleStatusEnum;
import com.lz.common.core.exception.sql.MySQLIntegrityConstraintViolationException;
import com.lz.common.core.utils.DateUtils;
import com.lz.common.redis.service.RedisService;
import com.lz.common.security.utils.SecurityUtils;
import com.lz.config.domain.I18nMessageInfo;
import com.lz.config.mapper.I18nMessageInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import com.lz.config.mapper.I18nLocaleInfoMapper;
import com.lz.config.domain.I18nLocaleInfo;
import com.lz.config.service.II18nLocaleInfoService;

import static com.lz.common.core.constant.redis.RedisConfigConstants.LOCALIZATION;

/**
 * 国际化国家Service业务层处理
 *
 * @author YY
 * @date 2024-12-20
 */
@Service
public class I18nLocaleInfoServiceImpl implements II18nLocaleInfoService {
    @Autowired
    private I18nLocaleInfoMapper i18nLocaleInfoMapper;

    @Autowired
    private RedisService redisService;

    @Autowired
    private I18nMessageInfoMapper messageInfoMapper;

    /**
     * 查询国际化国家
     *
     * @param localeId 国际化国家主键
     * @return 国际化国家
     */
    @Override
    public I18nLocaleInfo selectI18nLocaleInfoByLocaleId(Long localeId) {
        i18nLocaleInfoMapper.selectById(localeId);
        return i18nLocaleInfoMapper.selectI18nLocaleInfoByLocaleId(localeId);
    }

    /**
     * 查询国际化国家列表
     *
     * @param i18nLocaleInfo 国际化国家
     * @return 国际化国家
     */
    @Override
    public List<I18nLocaleInfo> selectI18nLocaleInfoList(I18nLocaleInfo i18nLocaleInfo) {
        return i18nLocaleInfoMapper.selectI18nLocaleInfoList(i18nLocaleInfo);
    }

    /**
     * 新增国际化国家
     *
     * @param i18nLocaleInfo 国际化国家
     * @return 结果
     */
    @Override
    public int insertI18nLocaleInfo(I18nLocaleInfo i18nLocaleInfo) {
        i18nLocaleInfo.setCreateTime(DateUtils.getNowDate());
        i18nLocaleInfo.setCreateBy(SecurityUtils.getUsername());
        try {
            return i18nLocaleInfoMapper.insertI18nLocaleInfo(i18nLocaleInfo);
        } catch (DataAccessException exception) {
            throw new MySQLIntegrityConstraintViolationException(exception.getMessage());
        }
    }

    /**
     * 修改国际化国家
     *
     * @param i18nLocaleInfo 国际化国家
     * @return 结果
     */
    @Override
    public int updateI18nLocaleInfo(I18nLocaleInfo i18nLocaleInfo) {
        //获取到存在数据库 local
        I18nLocaleInfo old = i18nLocaleInfoMapper.selectI18nLocaleInfoByLocaleId(i18nLocaleInfo.getLocaleId());
        boolean changedLocale = false;
        //如果简称不一致 证明已经改变
        if (!old.getLocale().equals(i18nLocaleInfo.getLocale())) {
            changedLocale = true;
            //删除之前的key
            redisService.deleteObject(LOCALIZATION + old.getLocale());
        }
        i18nLocaleInfo.setUpdateTime(DateUtils.getNowDate());
        i18nLocaleInfo.setUpdateBy(SecurityUtils.getUsername());
        //先更新数据库，索引会更新message的数据
        int i = 0;
        try {
            i = i18nLocaleInfoMapper.updateI18nLocaleInfo(i18nLocaleInfo);
        } catch (DataAccessException e) {
            throw new MySQLIntegrityConstraintViolationException(e.getMessage());
        }
        //如果是隐藏
        if (i18nLocaleInfo.getLocaleStatus().equals(CLocaleStatusEnum.LOCALE_STATUS_1.getValue())) {
            //删除之前的key
            redisService.deleteObject(LOCALIZATION + i18nLocaleInfo.getLocale());
        }
        //如果不是修改为隐藏
        if (changedLocale && i18nLocaleInfo.getLocaleStatus().equals(CLocaleStatusEnum.LOCALE_STATUS_0.getValue())) {
            I18nMessageInfo i18nMessageInfo = new I18nMessageInfo();
            i18nMessageInfo.setLocale(i18nLocaleInfo.getLocale());
            List<I18nMessageInfo> i18nMessageInfos = messageInfoMapper.selectI18nMessageInfoList(i18nMessageInfo);
            Map<String, String> map = i18nMessageInfos.stream().collect(Collectors.toMap(I18nMessageInfo::getMessageKey, I18nMessageInfo::getMessage));
            redisService.setCacheMap(LOCALIZATION + i18nLocaleInfo.getLocale(), map);
        }
        return i;
    }

    /**
     * 批量删除国际化国家
     *
     * @param localeIds 需要删除的国际化国家主键
     * @return 结果
     */
    @Override
    public int deleteI18nLocaleInfoByLocaleIds(Long[] localeIds) {
        return i18nLocaleInfoMapper.deleteI18nLocaleInfoByLocaleIds(localeIds);
    }

    /**
     * 删除国际化国家信息
     *
     * @param localeId 国际化国家主键
     * @return 结果
     */
    @Override
    public int deleteI18nLocaleInfoByLocaleId(Long localeId) {
        return i18nLocaleInfoMapper.deleteI18nLocaleInfoByLocaleId(localeId);
    }

    @Override
    public I18nLocaleInfo selectI18nLocaleInfoByLocaleLocale(String locale) {
        QueryWrapper<I18nLocaleInfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("locale", locale);
        return i18nLocaleInfoMapper.selectOne(queryWrapper);
    }
}
