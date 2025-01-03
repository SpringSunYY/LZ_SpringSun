import React, {useState} from 'react';
import './index.scss';

interface ImageMaskProps {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
    title?: string;
    titleFontSize?: string;
    titleColor?: string;
    titleFontWeight?: string;
    content?: string;
    contentFontSize?: string;
    contentFontColor?: string;
}

const ImageMask: React.FC<ImageMaskProps> = ({
                                                 src,
                                                 alt,
                                                 width = 300,  // 默认宽度为 300px
                                                 height = 200,  // 默认高度为 200px
                                                 title,
                                                 titleFontSize = 30,  // 默认字体大小为 30px
                                                 titleColor = "#ffffff",  // 默认字体颜色为白色
                                                 titleFontWeight = 'bold',
                                                 content,
                                                 contentFontSize = 16,  // 默认content文字大小为 16px
                                                 contentFontColor = '#ffffff'  // 默认content文字颜色为白色
                                             }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="image-mask"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{width, height}}  // 单独设置宽高
        >
            {/* 灰色滤镜遮罩层 */}
            <div
                className={`image-overlay ${isHovered ? 'image-overlay--hide' : ''}`}  // 鼠标悬停时遮罩层消失
            ></div>

            <img
                className={`image ${isHovered ? 'image--zoomed' : ''}`}  // 添加放大效果的类
                src={src}
                alt={alt}
                style={{
                    width,
                    height,
                    filter: isHovered ? 'none' : 'grayscale(100%)'  // 鼠标悬停时移除灰色滤镜
                }}
            />

            {/* 显示 Title */}
            {title && (
                <div
                    className={`image-mask__title ${isHovered ? 'image-mask__title--hover' : ''}`}
                    style={{
                        fontSize: titleFontSize,
                        color: titleColor,
                        fontWeight: titleFontWeight
                    }}
                >
                    {title}
                </div>
            )}

            {/* 显示 content */}
            {content && (
                <div
                    className={`image-mask__content ${isHovered ? 'image-mask__content--fade-in' : ''}`}
                    style={{
                        fontSize: contentFontSize,
                        color: contentFontColor
                    }}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default ImageMask;
