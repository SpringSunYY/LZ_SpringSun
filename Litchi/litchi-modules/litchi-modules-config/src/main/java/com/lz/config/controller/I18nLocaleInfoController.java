package com.lz.config.controller;

import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
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
import com.lz.config.domain.I18nLocaleInfo;
import com.lz.config.service.II18nLocaleInfoService;
import com.lz.common.core.web.controller.BaseController;
import com.lz.common.core.web.domain.AjaxResult;
import com.lz.common.core.utils.poi.ExcelUtil;
import com.lz.common.core.web.page.TableDataInfo;

/**
 * 国际化国家Controller
 * 
 * @author YY
 * @date 2024-12-20
 */
@RestController
@RequestMapping("/i18nLocaleInfo")
public class I18nLocaleInfoController extends BaseController
{
    @Autowired
    private II18nLocaleInfoService i18nLocaleInfoService;

    /**
     * 查询国际化国家列表
     */
    @RequiresPermissions("config:i18nLocaleInfo:list")
    @GetMapping("/list")
    public TableDataInfo list(I18nLocaleInfo i18nLocaleInfo)
    {
        startPage();
        List<I18nLocaleInfo> list = i18nLocaleInfoService.selectI18nLocaleInfoList(i18nLocaleInfo);
        return getDataTable(list);
    }

    /**
     * 导出国际化国家列表
     */
    @RequiresPermissions("config:i18nLocaleInfo:export")
    @Log(title = "国际化国家", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, I18nLocaleInfo i18nLocaleInfo)
    {
        List<I18nLocaleInfo> list = i18nLocaleInfoService.selectI18nLocaleInfoList(i18nLocaleInfo);
        ExcelUtil<I18nLocaleInfo> util = new ExcelUtil<I18nLocaleInfo>(I18nLocaleInfo.class);
        util.exportExcel(response, list, "国际化国家数据");
    }

    /**
     * 获取国际化国家详细信息
     */
    @RequiresPermissions("config:i18nLocaleInfo:query")
    @GetMapping(value = "/{localeId}")
    public AjaxResult getInfo(@PathVariable("localeId") Long localeId)
    {
        return success(i18nLocaleInfoService.selectI18nLocaleInfoByLocaleId(localeId));
    }

    /**
     * 新增国际化国家
     */
    @RequiresPermissions("config:i18nLocaleInfo:add")
    @Log(title = "国际化国家", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody I18nLocaleInfo i18nLocaleInfo)
    {
        return toAjax(i18nLocaleInfoService.insertI18nLocaleInfo(i18nLocaleInfo));
    }

    /**
     * 修改国际化国家
     */
    @RequiresPermissions("config:i18nLocaleInfo:edit")
    @Log(title = "国际化国家", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody I18nLocaleInfo i18nLocaleInfo)
    {
        return toAjax(i18nLocaleInfoService.updateI18nLocaleInfo(i18nLocaleInfo));
    }

    /**
     * 删除国际化国家
     */
    @RequiresPermissions("config:i18nLocaleInfo:remove")
    @Log(title = "国际化国家", businessType = BusinessType.DELETE)
	@DeleteMapping("/{localeIds}")
    public AjaxResult remove(@PathVariable Long[] localeIds)
    {
        return toAjax(i18nLocaleInfoService.deleteI18nLocaleInfoByLocaleIds(localeIds));
    }

    @GetMapping("/time")
    public String getTime() {
        ZonedDateTime time = ZonedDateTime.now(ZoneOffset.UTC);
        String format = time.format(DateTimeFormatter.ISO_INSTANT);
        System.err.println("format = " + format);
        return format;  // 返回 UTC 时间
    }
}
