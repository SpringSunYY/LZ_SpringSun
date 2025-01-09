import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, Navigation} from 'swiper/modules';

// 定义组件的 Props 类型
interface Image {
    index: number;
    src: string;
    title: string;
    content: string;
    realIndex?: number;
    isCentered: boolean;
}

interface ImageCarouselProps {
    images: Image[];
    loop?: boolean; // 控制是否启用循环
    slidesPerView?: number; // 每页显示的图片数量
    autoPlayDelay?: number; // 自动播放延时
    showText?: boolean; // 是否显示文字
    textSize?: string; // 文字大小
    direction?: 'horizontal' | 'vertical'; // 横向或竖向
    width?: number;
    height?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
                                                         images,
                                                         loop = true,
                                                         slidesPerView = 3,
                                                         autoPlayDelay = 3000,
                                                         showText = true,
                                                         textSize = '16px',
                                                         direction = 'horizontal',
                                                         width = '100',
                                                         height = '100',
                                                     }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // 设置图片大小
    const imageWithActive = direction === 'horizontal' ? {height: '80%'} : {width: '80%'};
    const imageWithNoActive = direction === 'horizontal' ? {height: '70%'} : {width: '70%'};

    // 动态更新loop模式，根据图片数量
    const isLoopable = images.length >= 3;

    // 处理Swiper的`slideChange`事件，更新激活的图片索引
    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex); // 更新当前激活图片的索引
    };

    // 确保组件更新时检查loop模式
    useEffect(() => {
        if (!isLoopable) {
            console.warn('Not enough slides for loop mode');
        }
    }, [images.length]);

    // 动态调整`height`根据`slidesPerView`和图片数量
    const calculateHeight = () => {
        if (direction === 'vertical') {
            return `${parseInt(height as string) * slidesPerView}px`;
        }
        return height;
    };

    return (
        <div className="image-carousel" style={{width: width, height: calculateHeight()}}>
            <Swiper
                loop={isLoopable && loop} // 根据图片数量决定是否启用循环模式
                slidesPerView={slidesPerView} // 每页显示多张图片
                spaceBetween={20} // 图片之间的间距
                autoplay={{
                    delay: autoPlayDelay,
                    disableOnInteraction: false, // 用户交互后继续自动播放
                }} // 自动播放配置
                direction={direction} // 横向或竖向
                onSlideChange={handleSlideChange} // 监听图片切换事件
                modules={[Autoplay, Navigation]} // 启用自动播放和导航模块
                width={width}
                height={height}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div
                            onClick={() => setActiveIndex(index)} // 点击激活图片
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                cursor: 'pointer', // 点击效果
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                style={{
                                    width: activeIndex === index ? imageWithActive : imageWithNoActive, // 激活图片宽度为80%，其他为70%
                                    height: 'auto',
                                    borderRadius: '10px',
                                    filter: activeIndex === index ? 'none' : 'grayscale(100%)', // 激活的图片不灰色
                                    transition: 'all 0.3s ease', // 动画效果
                                }}
                            />
                            {/* 只有当图片被激活时才显示文字 */}
                            {showText && activeIndex === index && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        color: '#fff',
                                        textAlign: 'center',
                                        fontSize: textSize,
                                    }}
                                >
                                    <h3>{img.title}</h3>
                                    <p>{img.content}</p>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageCarousel;
