import React from "react";
import './index.scss';
import MySvgIcon from "@/compoents/SvgIcon";  // 导入 SCSS 样式

interface BlogCardProps {
    imageUrl: string;
    date: string;
    dateIcon?: string;
    title: string;
    author: string;
    forum: string;
    fontSize?: string;
    dateFontSize?: string;
    imageWidth?: string;
    imageHeight?: string;
    avatar?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
                                               imageUrl,
                                               date,
                                               dateIcon = "date",
                                               title = "",
                                               author = "",
                                               forum = "",
                                               fontSize = "1.5rem",
                                               dateFontSize = "0.875rem",
                                               imageWidth = "100%",  // 默认宽度
                                               imageHeight = "auto", // 默认高度
                                               avatar = "avatar",
                                           }) => {
    return (
        <div
            className="blog-card"
            style={{
                maxWidth: "42rem",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                overflow: "hidden",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            }}
        >
            <div className="blog-card-image-container"
                 style={{
                     width: imageWidth,
                     height: imageHeight,
                 }}>
                <img
                    src={imageUrl}
                    alt="blog image"
                    className="blog-card-image"
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                />
                <div
                    className="blog-card-date"
                    style={{fontSize: dateFontSize}}
                >
                    <MySvgIcon size={"1.2em"} name={dateIcon} style={{verticalAlign: 'middle'}}/>
                    <span >  {date}</span>
                </div>
            </div>
            <div className="blog-card-content">
                <h2 className={"title"} style={{fontSize: fontSize}}>{title}
                </h2>
                <div className="blog-card-meta">
                    <div className="blog-card-author">
                        <MySvgIcon name={avatar}/> <span style={{color: "#9CA3AF"}}>by</span> {author}
                    </div>
                    <span style={{color: "#D1D5DB"}}>/</span>
                    <div className="blog-card-categories">
                        {forum}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
