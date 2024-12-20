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
import com.lz.config.domain.MenuInfo;
import com.lz.config.service.IMenuInfoService;
import com.lz.common.core.web.controller.BaseController;
import com.lz.common.core.web.domain.AjaxResult;
import com.lz.common.core.utils.poi.ExcelUtil;

/**
 * 菜单信息Controller
 * 
 * @author YY
 * @date 2024-12-20
 */
@RestController
@RequestMapping("/menuInfo")
public class MenuInfoController extends BaseController
{
    @Autowired
    private IMenuInfoService menuInfoService;

    /**
     * 查询菜单信息列表
     */
    @RequiresPermissions("config:menuInfo:list")
    @GetMapping("/list")
    public AjaxResult list(MenuInfo menuInfo)
    {
        List<MenuInfo> list = menuInfoService.selectMenuInfoList(menuInfo);
        return success(list);
    }

    /**
     * 导出菜单信息列表
     */
    @RequiresPermissions("config:menuInfo:export")
    @Log(title = "菜单信息", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, MenuInfo menuInfo)
    {
        List<MenuInfo> list = menuInfoService.selectMenuInfoList(menuInfo);
        ExcelUtil<MenuInfo> util = new ExcelUtil<MenuInfo>(MenuInfo.class);
        util.exportExcel(response, list, "菜单信息数据");
    }

    /**
     * 获取菜单信息详细信息
     */
    @RequiresPermissions("config:menuInfo:query")
    @GetMapping(value = "/{menuId}")
    public AjaxResult getInfo(@PathVariable("menuId") Long menuId)
    {
        return success(menuInfoService.selectMenuInfoByMenuId(menuId));
    }

    /**
     * 新增菜单信息
     */
    @RequiresPermissions("config:menuInfo:add")
    @Log(title = "菜单信息", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody MenuInfo menuInfo)
    {
        return toAjax(menuInfoService.insertMenuInfo(menuInfo));
    }

    /**
     * 修改菜单信息
     */
    @RequiresPermissions("config:menuInfo:edit")
    @Log(title = "菜单信息", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody MenuInfo menuInfo)
    {
        return toAjax(menuInfoService.updateMenuInfo(menuInfo));
    }

    /**
     * 删除菜单信息
     */
    @RequiresPermissions("config:menuInfo:remove")
    @Log(title = "菜单信息", businessType = BusinessType.DELETE)
	@DeleteMapping("/{menuIds}")
    public AjaxResult remove(@PathVariable Long[] menuIds)
    {
        return toAjax(menuInfoService.deleteMenuInfoByMenuIds(menuIds));
    }
}
