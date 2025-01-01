import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import MySvgIcon from "@/compoents/SvgIcon";
import "./index.scss"; // 引入样式文件

// 定义 CSS 动画
const useStyles = {
    jump: {
        animation: 'jump 1s ease-out', // 动画持续 1s，更长的时间来显示跳动
    },
    disappear: {
        animation: 'disappear 0.8s ease-out forwards', // 向上消失的动画，持续 0.8s
    },
};

const BackToTop: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false);
    const [isDisappearing, setIsDisappearing] = useState<boolean>(false);
    const [hasAppeared, setHasAppeared] = useState<boolean>(false); // 控制是否已出现

    // 监听滚动事件，判断是否显示回到顶部按钮
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setVisible(true);

            if (!hasAppeared) {
                setTriggerAnimation(true);  // 只有第一次出现时才触发跳动动画
                setHasAppeared(true);        // 标记按钮已经出现
                setTimeout(() => setTriggerAnimation(false), 1000); // 动画结束后停止
            }
        } else {
            setVisible(false);
        }
    };

    // 回到顶部的功能
    const handleBackToTop = () => {
        setIsDisappearing(true); // 开始消失动画
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        // 动画结束后将按钮隐藏
        setTimeout(() => {
            setVisible(false);
            setIsDisappearing(false); // 完成消失动画
        }, 2000); // 消失动画持续 1s，更长时间
    };

    // 组件挂载时添加滚动监听事件，卸载时移除监听
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {visible && (
                <IconButton
                    className="backToTop" // 使用外部样式
                    onClick={handleBackToTop}
                    style={{
                        position: 'fixed',
                        bottom: '10vh',
                        right: '10vh',
                        height: '10vh',
                        width: '10vh',
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        ...(triggerAnimation ? useStyles.jump : {}),
                        ...(isDisappearing ? useStyles.disappear : {}), // 向上消失动画
                    }}
                >
                    <MySvgIcon name="back-to-top" size="5vh" /> {/* 使用自定义图标 */}
                </IconButton>
            )}
        </div>
    );
};

export default BackToTop;
