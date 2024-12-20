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
import com.lz.config.domain.ConfigInfo;
import com.lz.config.service.IConfigInfoService;
import com.lz.common.core.web.controller.BaseController;
import com.lz.common.core.web.domain.AjaxResult;
import com.lz.common.core.utils.poi.ExcelUtil;
import com.lz.common.core.web.page.TableDataInfo;

/**
 * 配置Controller
 * 
 * @author YY
 * @date 2024-12-20
 */
@RestController
@RequestMapping("/configInfo")
public class ConfigInfoController extends BaseController
{
    @Autowired
    private IConfigInfoService configInfoService;

    /**
     * 查询配置列表
     */
    @RequiresPermissions("config:configInfo:list")
    @GetMapping("/list")
    public TableDataInfo list(ConfigInfo configInfo)
    {
        startPage();
        List<ConfigInfo> list = configInfoService.selectConfigInfoList(configInfo);
        return getDataTable(list);
    }

    /**
     * 导出配置列表
     */
    @RequiresPermissions("config:configInfo:export")
    @Log(title = "配置", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, ConfigInfo configInfo)
    {
        List<ConfigInfo> list = configInfoService.selectConfigInfoList(configInfo);
        ExcelUtil<ConfigInfo> util = new ExcelUtil<ConfigInfo>(ConfigInfo.class);
        util.exportExcel(response, list, "配置数据");
    }

    /**
     * 获取配置详细信息
     */
    @RequiresPermissions("config:configInfo:query")
    @GetMapping(value = "/{configId}")
    public AjaxResult getInfo(@PathVariable("configId") Long configId)
    {
        return success(configInfoService.selectConfigInfoByConfigId(configId));
    }

    /**
     * 新增配置
     */
    @RequiresPermissions("config:configInfo:add")
    @Log(title = "配置", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody ConfigInfo configInfo)
    {
        return toAjax(configInfoService.insertConfigInfo(configInfo));
    }

    /**
     * 修改配置
     */
    @RequiresPermissions("config:configInfo:edit")
    @Log(title = "配置", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody ConfigInfo configInfo)
    {
        return toAjax(configInfoService.updateConfigInfo(configInfo));
    }

    /**
     * 删除配置
     */
    @RequiresPermissions("config:configInfo:remove")
    @Log(title = "配置", businessType = BusinessType.DELETE)
	@DeleteMapping("/{configIds}")
    public AjaxResult remove(@PathVariable Long[] configIds)
    {
        return toAjax(configInfoService.deleteConfigInfoByConfigIds(configIds));
    }
}
