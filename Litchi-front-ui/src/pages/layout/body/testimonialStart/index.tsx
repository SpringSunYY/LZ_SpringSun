import "./index.scss"
import {useTranslation} from "react-i18next";
import {Container, Grid} from "@mui/material";
import ImageCarousel from "@/compoents/ImageCarousel";
import {useState} from "react";

interface TestimonialStartProps {
    isMediumScreen?: boolean;
}

const imageData = [
    {
        index: 1,
        src: "/src/assets/images/figure/author_1.jpg",
        title: "author_1.jpg",
        content: "你好你好你好1",
        isCentered: true
    },
    {
        index: 3,
        src: "/src/assets/images/figure/author_3.jpg",
        title: "author_3.jpg",
        content: "你好你好你好3",
        isCentered: false
    },
    {
        index: 4,
        src: "/src/assets/images/figure/author_4.jpg",
        title: "author_4.jpg",
        content: "你好你好你好4",
        isCentered: false
    },
    {
        index: 5,
        src: "/src/assets/images/figure/author_5.jpg",
        title: "author_5.jpg",
        content: "你好你好你好5",
        isCentered: false
    },
    {
        index: 6,
        src: "/src/assets/images/figure/author_6.jpg",
        title: "author_6.jpg",
        content: "你好你好你好",
        isCentered: false
    },
    {
        index: 7,
        src: "/src/assets/images/figure/author_7.jpg",
        title: "author_7.jpg",
        content: "你好你好你好7",
        isCentered: false
    },
    {
        index: 8,
        src: "/src/assets/images/figure/author_8.jpg",
        title: "author_8.jpg",
        content: "你好你好你好8",
        isCentered: false
    },
    {
        index: 9,
        src: "/src/assets/images/figure/author_9.jpg",
        title: "author_9.jpg",
        content: "你好你好你好9",
        isCentered: false
    },
]

const TestimonialStart: React.FC<TestimonialStartProps> = ({isMediumScreen = false}) => {
    const {t} = useTranslation();
    const [content, setContent] = useState<{ title: string; content: string }>({
        title: '',
        content: '',
    });
    console.log(t);
    // 激活图片时的回调
    const handleImageActivate = (title: string, content: string) => {
        setContent({title, content});
    };
    return (
        <div className={"testimonial-start"}>
            {!isMediumScreen ? (
                <Container>
                    <Grid container spacing={1} className={"container"}>
                        <Grid item xs={12} className={"content"}>
                            <Container>
                                <h1 className={"title"}>
                                    {t('Testimonial Start Title')}
                                </h1>
                                <p className={"detail"}>
                                    {t('Testimonial Start Detail')}
                                </p>
                            </Container>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={"container-info"}>
                        <Grid item xs={12} className={"content"}>
                            <Container>
                                <h1 className={"title"}>
                                    {content.title}
                                </h1>
                                <p className={"detail"}>
                                    {content.content}
                                </p>
                            </Container>
                        </Grid>
                    </Grid>
                    <div className={"container-bottom"}>
                        <ImageCarousel showText={true}
                                       slidesPerView={5}
                                       width={'100%'}
                                       height={250}
                                       loop={true}
                                       isCircle={true}
                                       autoPlayDelay={3000}
                                       direction={'horizontal'}
                                       images={imageData}
                                       onImageActivate={handleImageActivate}
                        ></ImageCarousel>
                    </div>
                </Container>
            ) : (
                <Container>
                    <Grid container spacing={2} className={"container"}>
                        <Grid item xs={12} className={"content"}>
                            <Container>
                                <h1 className={"title"}>
                                    {t('Groups Area Start Title')}
                                </h1>
                                <p className={"detail"}>
                                    {t('Groups Area Start Detail')}
                                </p>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            )
            }
        </div>
    )
}
export default TestimonialStart
