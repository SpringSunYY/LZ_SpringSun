package com.lz.config.controller;

import java.util.List;
import java.io.IOException;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.lz.common.log.annotation.Log;
import com.lz.common.log.enums.BusinessType;
import com.lz.common.security.annotation.RequiresPermissions;
import com.lz.config.domain.I18nKeyInfo;
import com.lz.config.service.II18nKeyInfoService;
import com.lz.common.core.web.controller.BaseController;
import com.lz.common.core.web.domain.AjaxResult;
import com.lz.common.core.utils.poi.ExcelUtil;
import com.lz.common.core.web.page.TableDataInfo;

/**
 * 国际化键名Controller
 * 
 * @author YY
 * @date 2025-01-01
 */
@RestController
@RequestMapping("/i18nKeyInfo")
public class I18nKeyInfoController extends BaseController
{
    @Autowired
    private II18nKeyInfoService i18nKeyInfoService;

    /**
     * 查询国际化键名列表
     */
    @RequiresPermissions("config:i18nKeyInfo:list")
    @GetMapping("/list")
    public TableDataInfo list(I18nKeyInfo i18nKeyInfo)
    {
        startPage();
        List<I18nKeyInfo> list = i18nKeyInfoService.selectI18nKeyInfoList(i18nKeyInfo);
        return getDataTable(list);
    }

    /**
     * 导出国际化键名列表
     */
    @RequiresPermissions("config:i18nKeyInfo:export")
    @Log(title = "国际化键名", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, I18nKeyInfo i18nKeyInfo)
    {
        List<I18nKeyInfo> list = i18nKeyInfoService.selectI18nKeyInfoList(i18nKeyInfo);
        ExcelUtil<I18nKeyInfo> util = new ExcelUtil<I18nKeyInfo>(I18nKeyInfo.class);
        util.exportExcel(response, list, "国际化键名数据");
    }

    /**
     * 获取国际化键名详细信息
     */
    @RequiresPermissions("config:i18nKeyInfo:query")
    @GetMapping(value = "/{keyId}")
    public AjaxResult getInfo(@PathVariable("keyId") Long keyId)
    {
        return success(i18nKeyInfoService.selectI18nKeyInfoByKeyId(keyId));
    }

    /**
     * 新增国际化键名
     */
    @RequiresPermissions("config:i18nKeyInfo:add")
    @Log(title = "国际化键名", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody I18nKeyInfo i18nKeyInfo)
    {
        return toAjax(i18nKeyInfoService.insertI18nKeyInfo(i18nKeyInfo));
    }

    /**
     * 修改国际化键名
     */
    @RequiresPermissions("config:i18nKeyInfo:edit")
    @Log(title = "国际化键名", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody I18nKeyInfo i18nKeyInfo)
    {
        return toAjax(i18nKeyInfoService.updateI18nKeyInfo(i18nKeyInfo));
    }

    /**
     * 删除国际化键名
     */
    @RequiresPermissions("config:i18nKeyInfo:remove")
    @Log(title = "国际化键名", businessType = BusinessType.DELETE)
	@DeleteMapping("/{keyIds}")
    public AjaxResult remove(@PathVariable Long[] keyIds)
    {
        return toAjax(i18nKeyInfoService.deleteI18nKeyInfoByKeyIds(keyIds));
    }
}
