import React from 'react';
import {Button} from '@mui/material';
import './index.scss';
import MySvgIcon from "@/compoents/SvgIcon"; // 引入 SCSS 文件

interface SlideIconButtonProps {
    label: string; // 按钮文本
    iconName?: string; // 自定义图标组件
    buttonColor?: string; // 按钮背景色
    fillColor?: string; // 填充颜色
    contentColor?: string;
    bgColor?: string;
    width?: string | number; // 自定义宽度
    height?: string | number; // 自定义高度
    borderRadius?: number | string;
}

const SlideIconButton: React.FC<SlideIconButtonProps> = ({
                                                             label,
                                                             iconName = 'right-arrow',
                                                             buttonColor = '#070707', // 默认按钮背景色
                                                             fillColor = '#17a2b8', // 默认填充颜色
                                                             bgColor = 'rgb(255,255,255)',
                                                             width = '200px', // 默认宽度自适应
                                                             height = '40px', // 默认高度自适应
                                                             borderRadius = '50px',
                                                         }) => {
    return (
        <Button
            variant="outlined"
            className="slide-icon-button"
            endIcon={<MySvgIcon name={iconName} color={bgColor}/>}
            style={{
                backgroundColor: bgColor, // 按钮背景色
                color: buttonColor, // 按钮文字颜色
                '--fill-color': fillColor,// 设置 CSS 变量来传递 fillColor
                '--icon-bg-color': fillColor // 设置 CSS 变量来传递 fillColor
            } as React.CSSProperties}
            sx={{
                width: width, // 设置按钮宽度
                height: height, // 设置按钮高度
                borderColor: 'rgba(0,0,0,0.12)',
                borderRadius: borderRadius,
            }}
        >
            {label}
        </Button>
    );
};

export default SlideIconButton;
