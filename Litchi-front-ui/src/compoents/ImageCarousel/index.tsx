import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Navigation} from "swiper/modules";  // 导入Swiper的样式

// 定义组件的 Props 类型
interface ImageCarouselProps {
    images: {
        src: string;
        title: string;
        content: string;
    }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Swiper
                modules={[Navigation]}  // 启用导航模块
                slidesPerView={3}
                spaceBetween={20}
                loop={true}  // 启用循环模式
                centeredSlides={true}  // 中心对齐
                autoplay={{ delay: 3000 }}  // 自动播放，每3秒切换
                navigation={true}  // 启用左右箭头导航
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                style={{
                                    width: '80%',  // 激活图片占 80%
                                    height: 'auto',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s ease', // 动画效果
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    color: '#fff',
                                    textAlign: 'center',
                                    background: 'rgba(0, 0, 0, 0.5)', // 背景阴影，增强文字可见性
                                    padding: '5px',
                                    borderRadius: '5px',
                                }}
                            >
                                <h3>{img.title}</h3>
                                <p>{img.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageCarousel;
