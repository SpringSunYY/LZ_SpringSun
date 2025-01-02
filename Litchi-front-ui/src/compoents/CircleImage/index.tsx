import React, { useState } from 'react';
import './index.scss';

interface CircleImageProps {
    src: string;
    alt?: string;
    size?: number | string;  // 图片的大小，单位可以是 px, em, vh, vw, % 等
    title?: string;  // 鼠标悬停时显示的标题文字
    content?: string;  // 鼠标悬停时显示的内容文字
    titleFontSize?: number | string;  // title的字体大小
    contentFontSize?: number | string;  // content的字体大小
    hoverBackgroundColor?: string;  // 鼠标悬停时显示文字背景的颜色
}

const CircleImage: React.FC<CircleImageProps> = ({
                                                     src,
                                                     alt,
                                                     size = 200,
                                                     title,
                                                     content,
                                                     titleFontSize = 20,
                                                     contentFontSize = 16,
                                                     hoverBackgroundColor = 'rgba(0, 0, 0, 0.5)'  // 默认半透明黑色背景
                                                 }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="circle-image-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: size, height: size }}
        >
            <img
                className="circle-image"
                src={src}
                alt={alt}
                style={{ width: size, height: size }}
            />
            {isHovered && (
                <div
                    className="image-content"
                    style={{ backgroundColor: hoverBackgroundColor }}  // 使用自定义的背景颜色
                >
                    {title && <h1 style={{ fontSize: titleFontSize }}>{title}</h1>}
                    {content && <p style={{ fontSize: contentFontSize }}>{content}</p>}
                </div>
            )}
        </div>
    );
}

export default CircleImage;
