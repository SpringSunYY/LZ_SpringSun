import {Container, Grid} from "@mui/material";
import BlogCard from "@/compoents/BlogCard";
import "./index.scss"
import {useTranslation} from "react-i18next";

interface BlogAreaStartProps {
    isMediumScreen?: boolean
}

const BlogAreaStart: React.FC<BlogAreaStartProps> = (
    {
        isMediumScreen = false
    }) => {
    const {t} = useTranslation();
    return (
        <div className={"blog-area-start"}>
            <Container className={"container"}>
                {isMediumScreen ? (
                    <Grid spacing={2} container>
                        <Grid item xs={4}>
                            <h1 className={"title"}>{t('blog area start title')}</h1>
                        </Grid>
                        <Grid item xs={8}>
                            <h5 className={"detail"}>{t('blog area start detail')}</h5>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid spacing={2} container>
                        <Grid item xs={4}>
                            <h1 className={"title"}>{t('blog area start title')}</h1>
                        </Grid>
                        <Grid item xs={8}>
                            <h5 className={"detail"}>{t('blog area start detail')}</h5>
                        </Grid>
                        <Grid item xs={4} className={"bolg"}>
                            <BlogCard
                                imageUrl="/src/assets/images/blog/blog_1.jpg"
                                date="24 Jun"
                                title="Our 10 Steps to successful video for blogging & Challenging"
                                author="Admin"
                                imageHeight={"250px"}
                                forum={'Social Live'}
                                dateFontSize="1rem"
                            ></BlogCard>
                        </Grid>
                        <Grid item xs={4} className={"bolg"}>
                            <BlogCard
                                imageUrl="/src/assets/images/blog/blog_2.jpg"
                                date="24 Jun"
                                title="Our 10 Steps to successful video for blogging & Challenging"
                                author="Admin"
                                imageHeight={"250px"}
                                forum={'Social Live'}
                                dateFontSize="1rem"
                            ></BlogCard>
                        </Grid>
                        <Grid item xs={4} className={"bolg"}>
                            <BlogCard
                                imageUrl="/src/assets/images/blog/blog_3.jpg"
                                date="2025-01-11"
                                title="Our 10 Steps to successful video for blogging & Challenging"
                                author="Admin"
                                imageHeight={"250px"}
                                forum={'Social Live'}
                                dateFontSize="1rem"
                            ></BlogCard>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </div>
    )
}
export default BlogAreaStart;
