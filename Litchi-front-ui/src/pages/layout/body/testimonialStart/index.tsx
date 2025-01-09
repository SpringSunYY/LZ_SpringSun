import "./index.scss"
import {Container} from "@mui/material";
import {useTranslation} from "react-i18next";

interface TestimonialStartProps {
    isMediumScreen?: boolean;
}

const imageData = [
    {
        index:1,
        src: "/src/assets/images/figure/author_1.jpg",
        title: "author_1.jpg",
        content: "你好你好你好1",
        isCentered: true
    },
    {
        index:2,
        src: "/src/assets/images/figure/author_2.jpg",
        title: "author_2.jpg",
        content: "你好你好你好2",
        isCentered: false
    },
    {
        index:3,
        src: "/src/assets/images/figure/author_3.jpg",
        title: "author_3.jpg",
        content: "你好你好你好3",
        isCentered: false
    },
    {
        index:4,
        src: "/src/assets/images/figure/author_4.jpg",
        title: "author_4.jpg",
        content: "你好你好你好4",
        isCentered: false
    },
    {
        index:5,
        src: "/src/assets/images/figure/author_5.jpg",
        title: "author_5.jpg",
        content: "你好你好你好5",
        isCentered: false
    },
    {
        index:6,
        src: "/src/assets/images/figure/author_6.jpg",
        title: "author_6.jpg",
        content: "你好你好你好",
        isCentered: false
    },
    {
        index:7,
        src: "/src/assets/images/figure/author_7.jpg",
        title: "author_7.jpg",
        content: "你好你好你好7",
        isCentered: false
    },
    {
        index:8,
        src: "/src/assets/images/figure/author_8.jpg",
        title: "author_8.jpg",
        content: "你好你好你好8",
        isCentered: false
    },
    {
        index:9,
        src: "/src/assets/images/figure/author_9.jpg",
        title: "author_9.jpg",
        content: "你好你好你好9",
        isCentered: false
    },

]
const TestimonialStart: React.FC<TestimonialStartProps> = ({isMediumScreen = false}) => {
    const {t} = useTranslation();
    console.log(isMediumScreen);
    return (
        <div className={"testimonial-start"}>
            <Container className={"container"}>
                <div className="content-top">
                    <h1>{t('our team')}</h1>
                    <p>{t('our team detail')}</p>
                </div>
            </Container>
        </div>
    )
}
export default TestimonialStart
