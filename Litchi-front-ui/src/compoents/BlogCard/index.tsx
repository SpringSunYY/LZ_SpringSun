import React from "react";
import './index.scss';
import MySvgIcon from "@/compoents/SvgIcon";  // 导入 SCSS 样式

interface BlogCardProps {
    imageUrl: string;           //图片路径
    date: string;               //时间
    dateIcon?: string;          //时间icon,使用的是自定义icon MySvgIcon
    title: string;              //标题
    author: string;             //作者
    forum: string;              //论坛
    fontSize?: string;          //字体大小 标题字体大小
    dateFontSize?: string;      //时间字体大小
    imageWidth?: string;        //图片宽度
    imageHeight?: string;       //图片高度
    avatar?: string;            //作者图片头像使用的是自定义icon MySvgIcon
}

/**
 * 自定义blogCard组件 用于展示博客信息
 * @constructor
 */
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
                    <span>  {date}</span>
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
