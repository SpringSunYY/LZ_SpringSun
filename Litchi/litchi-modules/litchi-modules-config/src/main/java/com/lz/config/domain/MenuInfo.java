package com.lz.config.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.lz.common.core.annotation.Excel;
import com.lz.common.core.web.domain.TreeEntity;

/**
 * 菜单信息对象 c_menu_info
 * 
 * @author YY
 * @date 2024-12-20
 */
public class MenuInfo extends TreeEntity
{
    private static final long serialVersionUID = 1L;

    /** 编号 */
    private Long menuId;

    /** 菜单名称 */
    @Excel(name = "菜单名称")
    private String menuName;

    /** 路由地址 */
    @Excel(name = "路由地址")
    private String path;

    /** 组件路径 */
    @Excel(name = "组件路径")
    private String component;

    /** 路由参数 */
    @Excel(name = "路由参数")
    private String query;

    /** 路由名称 */
    @Excel(name = "路由名称")
    private String routeName;

    /** 显示位置 */
    @Excel(name = "显示位置")
    private String menuAddress;

    /** 是否外链 */
    @Excel(name = "是否外链")
    private String isFrame;

    /** 是否缓存 */
    @Excel(name = "是否缓存")
    private String isChache;

    /** 菜单类型 */
    @Excel(name = "菜单类型")
    private String menuType;

    /** 是否显示 */
    @Excel(name = "是否显示")
    private String visible;

    /** 菜单状态 */
    @Excel(name = "菜单状态")
    private String status;

    /** 权限标识 */
    @Excel(name = "权限标识")
    private String perms;

    /** 菜单图标 */
    @Excel(name = "菜单图标")
    private String icon;

    public void setMenuId(Long menuId) 
    {
        this.menuId = menuId;
    }

    public Long getMenuId() 
    {
        return menuId;
    }
    public void setMenuName(String menuName) 
    {
        this.menuName = menuName;
    }

    public String getMenuName() 
    {
        return menuName;
    }
    public void setPath(String path) 
    {
        this.path = path;
    }

    public String getPath() 
    {
        return path;
    }
    public void setComponent(String component) 
    {
        this.component = component;
    }

    public String getComponent() 
    {
        return component;
    }
    public void setQuery(String query) 
    {
        this.query = query;
    }

    public String getQuery() 
    {
        return query;
    }
    public void setRouteName(String routeName) 
    {
        this.routeName = routeName;
    }

    public String getRouteName() 
    {
        return routeName;
    }
    public void setMenuAddress(String menuAddress) 
    {
        this.menuAddress = menuAddress;
    }

    public String getMenuAddress() 
    {
        return menuAddress;
    }
    public void setIsFrame(String isFrame) 
    {
        this.isFrame = isFrame;
    }

    public String getIsFrame() 
    {
        return isFrame;
    }
    public void setIsChache(String isChache) 
    {
        this.isChache = isChache;
    }

    public String getIsChache() 
    {
        return isChache;
    }
    public void setMenuType(String menuType) 
    {
        this.menuType = menuType;
    }

    public String getMenuType() 
    {
        return menuType;
    }
    public void setVisible(String visible) 
    {
        this.visible = visible;
    }

    public String getVisible() 
    {
        return visible;
    }
    public void setStatus(String status) 
    {
        this.status = status;
    }

    public String getStatus() 
    {
        return status;
    }
    public void setPerms(String perms) 
    {
        this.perms = perms;
    }

    public String getPerms() 
    {
        return perms;
    }
    public void setIcon(String icon) 
    {
        this.icon = icon;
    }

    public String getIcon() 
    {
        return icon;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("menuId", getMenuId())
            .append("menuName", getMenuName())
            .append("parentId", getParentId())
            .append("orderNum", getOrderNum())
            .append("path", getPath())
            .append("component", getComponent())
            .append("query", getQuery())
            .append("routeName", getRouteName())
            .append("menuAddress", getMenuAddress())
            .append("isFrame", getIsFrame())
            .append("isChache", getIsChache())
            .append("menuType", getMenuType())
            .append("visible", getVisible())
            .append("status", getStatus())
            .append("perms", getPerms())
            .append("icon", getIcon())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .append("remark", getRemark())
            .toString();
    }
}
