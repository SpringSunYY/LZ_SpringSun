import React, {useState} from 'react';
import './index.scss';

interface ImageWithZoomProps {
    src: string;
    alt?: string;
    width?: number | string;  // 图片的宽度
    height?: number | string;  // 图片的高度
    label?: string;  // 显示的标题文字（现在称为 label）
    labelFontSize?: number | string;  // label的字体大小
    labelColor?: string;
    labelFontWeight?: string;
}

const ImageWithZoom: React.FC<ImageWithZoomProps> = ({
                                                         src,
                                                         alt,
                                                         width = 300,  // 默认宽度为 300px
                                                         height = 200,  // 默认高度为 200px
                                                         label,
                                                         labelFontSize = 30,  // 默认字体大小为 20px
                                                         labelColor = "#ffffff",  // 默认字体大小为 20px
                                                         labelFontWeight = 'bold'
                                                     }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="image-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{width, height}}  // 单独设置宽高
        >
            <img
                className={`image ${isHovered ? 'zoomed' : ''}`}  // 添加放大效果的类
                src={src}
                alt={alt}
                style={{width, height}}  // 图片宽高
            />
            {label && (
                <div className="image-label"
                     style={{fontSize: labelFontSize, color: labelColor, fontWeight: labelFontWeight}}>
                    {label}
                </div>
            )}
        </div>
    );
};

export default ImageWithZoom;
