import {Container, Grid} from "@mui/material";
import BlogCard from "@/compoents/BlogCard";

interface BlogAreaStartProps {
    isMediumScreen?: boolean
}

const BlogAreaStart: React.FC<BlogAreaStartProps> = (
    {
        isMediumScreen = false
    }) => {
    console.log(isMediumScreen)
    return (
        <div className={"blog-area-start"}>
            <Container>
                <Grid spacing={2} container className={"container"}>
                    <Grid item xs={4} className={"bolg"}>
                        <BlogCard
                            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog_1.jpg-cnbnev6cM6YfML4xPmoxZGIWyVG2Pw.jpeg"
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
                            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog_1.jpg-cnbnev6cM6YfML4xPmoxZGIWyVG2Pw.jpeg"
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
                            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog_1.jpg-cnbnev6cM6YfML4xPmoxZGIWyVG2Pw.jpeg"
                            date="2025-01-11"
                            title="Our 10 Steps to successful video for blogging & Challenging"
                            author="Admin"
                            imageHeight={"250px"}
                            forum={'Social Live'}
                            dateFontSize="1rem"
                        ></BlogCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default BlogAreaStart;
