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
import com.lz.config.domain.I18nMessageInfo;
import com.lz.config.service.II18nMessageInfoService;
import com.lz.common.core.web.controller.BaseController;
import com.lz.common.core.web.domain.AjaxResult;
import com.lz.common.core.utils.poi.ExcelUtil;
import com.lz.common.core.web.page.TableDataInfo;

/**
 * 国际化信息Controller
 * 
 * @author YY
 * @date 2024-12-20
 */
@RestController
@RequestMapping("/i18nMessageInfo")
public class I18nMessageInfoController extends BaseController
{
    @Autowired
    private II18nMessageInfoService i18nMessageInfoService;

    /**
     * 查询国际化信息列表
     */
    @RequiresPermissions("config:i18nMessageInfo:list")
    @GetMapping("/list")
    public TableDataInfo list(I18nMessageInfo i18nMessageInfo)
    {
        startPage();
        List<I18nMessageInfo> list = i18nMessageInfoService.selectI18nMessageInfoList(i18nMessageInfo);
        return getDataTable(list);
    }

    /**
     * 导出国际化信息列表
     */
    @RequiresPermissions("config:i18nMessageInfo:export")
    @Log(title = "国际化信息", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, I18nMessageInfo i18nMessageInfo)
    {
        List<I18nMessageInfo> list = i18nMessageInfoService.selectI18nMessageInfoList(i18nMessageInfo);
        ExcelUtil<I18nMessageInfo> util = new ExcelUtil<I18nMessageInfo>(I18nMessageInfo.class);
        util.exportExcel(response, list, "国际化信息数据");
    }

    /**
     * 获取国际化信息详细信息
     */
    @RequiresPermissions("config:i18nMessageInfo:query")
    @GetMapping(value = "/{messageId}")
    public AjaxResult getInfo(@PathVariable("messageId") String messageId)
    {
        return success(i18nMessageInfoService.selectI18nMessageInfoByMessageId(messageId));
    }

    /**
     * 新增国际化信息
     */
    @RequiresPermissions("config:i18nMessageInfo:add")
    @Log(title = "国际化信息", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody I18nMessageInfo i18nMessageInfo)
    {
        return toAjax(i18nMessageInfoService.insertI18nMessageInfo(i18nMessageInfo));
    }

    /**
     * 修改国际化信息
     */
    @RequiresPermissions("config:i18nMessageInfo:edit")
    @Log(title = "国际化信息", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody I18nMessageInfo i18nMessageInfo)
    {
        return toAjax(i18nMessageInfoService.updateI18nMessageInfo(i18nMessageInfo));
    }

    /**
     * 删除国际化信息
     */
    @RequiresPermissions("config:i18nMessageInfo:remove")
    @Log(title = "国际化信息", businessType = BusinessType.DELETE)
	@DeleteMapping("/{messageIds}")
    public AjaxResult remove(@PathVariable String[] messageIds)
    {
        return toAjax(i18nMessageInfoService.deleteI18nMessageInfoByMessageIds(messageIds));
    }

    /**
     * 获取到国际化信息
     */
    @GetMapping("/ing/{ing}")
    public AjaxResult getLocalization(@PathVariable("ing") String ing){
        return success(i18nMessageInfoService.getLocalization(ing));
    }
}
