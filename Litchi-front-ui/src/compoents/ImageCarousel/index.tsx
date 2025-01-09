import React, {useState, useEffect, useRef} from 'react';
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
}

interface ImageCarouselProps {
    images: Image[];
    loop?: boolean; // 控制是否启用循环
    slidesPerView?: number; // 每页显示的图片数量
    autoPlayDelay?: number; // 自动播放延时
    showText?: boolean; // 是否显示文字
    textSize?: string; // 文字大小
    direction?: 'horizontal' | 'vertical'; // 横向或竖向
    width?: number|string; //单位px
    height?: number;
    isCircle?: boolean; // 是否为圆形图片，默认值为false
    onImageActivate?: (title: string, content: string) => void; // 激活图片时的回调
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
                                                         isCircle = false, // 默认值为false
                                                         onImageActivate, // 传递的回调函数
                                                     }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<any>(null); // 用于引用 Swiper 实例
    // 设置图片大小
    //@ts-ignore
    const imageWithActive = direction === 'horizontal' ? height * 0.8 + 'px' : width * 0.8 + 'px';
    //@ts-ignore
    const imageWithNoActive = direction === 'horizontal' ? height * 0.7 + 'px' : width * 0.7 + 'px';

    // 动态更新loop模式，根据图片数量
    const isLoopable = images.length >= 3;

    // 处理Swiper的`slideChange`事件，更新激活的图片索引
    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex); // 更新当前激活图片的索引
        // 滑动时恢复自动播放
        if (swiperRef.current && swiper.autoplay) {
            swiper.autoplay.start();
        }
        // 如果有传递回调，则传递激活的图片文字内容
        if (onImageActivate) {
            const activeImage = images[swiper.realIndex];
            onImageActivate(activeImage.title, activeImage.content);
        }
    };

    // 处理点击事件，停止自动播放
    const handleImageClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.stop(); // 点击图片时停止自动播放
        }
        // 点击激活图片时传递图片的文字内容
        if (onImageActivate) {
            const activeImage = images[activeIndex];
            onImageActivate(activeImage.title, activeImage.content);
        }
    };

    // 确保组件更新时检查loop模式
    useEffect(() => {
        if (!isLoopable) {
            // console.warn('Not enough slides for loop mode');
        }
    }, [images.length]);

    return (
        <div className="image-carousel" style={{width: width + 'px', height: height + 'px'}}>
            <Swiper
                ref={swiperRef} // 引用 Swiper 实例
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
                centeredSlides={true} // 激活的图片居中显示
                style={
                    {
                        width: width,
                        height: height
                    }
                }
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
                                onClick={handleImageClick} // 点击时停止自动播放
                                src={img.src}
                                alt={img.title}
                                style={{
                                    width: activeIndex === index ? imageWithActive : imageWithNoActive, // 激活图片宽度为80%，其他为70%
                                    height: 'auto',
                                    borderRadius: isCircle ? '50%' : '10px', // 根据isCircle决定是否为圆形
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
