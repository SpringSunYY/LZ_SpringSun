package com.lz.config.service.impl;

import java.util.List;
import com.lz.common.core.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lz.config.mapper.MenuInfoMapper;
import com.lz.config.domain.MenuInfo;
import com.lz.config.service.IMenuInfoService;

/**
 * 菜单信息Service业务层处理
 * 
 * @author YY
 * @date 2024-12-20
 */
@Service
public class MenuInfoServiceImpl implements IMenuInfoService 
{
    @Autowired
    private MenuInfoMapper menuInfoMapper;

    /**
     * 查询菜单信息
     * 
     * @param menuId 菜单信息主键
     * @return 菜单信息
     */
    @Override
    public MenuInfo selectMenuInfoByMenuId(Long menuId)
    {
        return menuInfoMapper.selectMenuInfoByMenuId(menuId);
    }

    /**
     * 查询菜单信息列表
     * 
     * @param menuInfo 菜单信息
     * @return 菜单信息
     */
    @Override
    public List<MenuInfo> selectMenuInfoList(MenuInfo menuInfo)
    {
        return menuInfoMapper.selectMenuInfoList(menuInfo);
    }

    /**
     * 新增菜单信息
     * 
     * @param menuInfo 菜单信息
     * @return 结果
     */
    @Override
    public int insertMenuInfo(MenuInfo menuInfo)
    {
        menuInfo.setCreateTime(DateUtils.getNowDate());
        return menuInfoMapper.insertMenuInfo(menuInfo);
    }

    /**
     * 修改菜单信息
     * 
     * @param menuInfo 菜单信息
     * @return 结果
     */
    @Override
    public int updateMenuInfo(MenuInfo menuInfo)
    {
        menuInfo.setUpdateTime(DateUtils.getNowDate());
        return menuInfoMapper.updateMenuInfo(menuInfo);
    }

    /**
     * 批量删除菜单信息
     * 
     * @param menuIds 需要删除的菜单信息主键
     * @return 结果
     */
    @Override
    public int deleteMenuInfoByMenuIds(Long[] menuIds)
    {
        return menuInfoMapper.deleteMenuInfoByMenuIds(menuIds);
    }

    /**
     * 删除菜单信息信息
     * 
     * @param menuId 菜单信息主键
     * @return 结果
     */
    @Override
    public int deleteMenuInfoByMenuId(Long menuId)
    {
        return menuInfoMapper.deleteMenuInfoByMenuId(menuId);
    }
}
