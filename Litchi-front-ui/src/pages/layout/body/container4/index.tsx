import "./index.scss"
import {Container} from "@mui/material";
import CircleImage from "@/compoents/CircleImage";

const Container4 = () => {
    // const {t} = useTranslation();
    return (
        <div className={"container4"}>
            <Container className={"container"}>
                <div className="content-top">
                    <h1>我们活跃的会员</h1>
                    <p>我们拥有活跃的会员，他们不仅参与各种活动，还在社区中分享经验与知识，为平台的发展贡献力量。</p>
                </div>
                <div className="content-middle">
                    <ul>
                        <li>
                            <CircleImage src={"/src/assets/images/team_1.jpg"} size={"10em"} title={"SpringSun"}
                                         hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"} alt={"img"}/>
                        </li>
                        <li>
                            <CircleImage src={"/src/assets/images/team_3.jpg"} size={"10em"} title={"YY"}
                                         hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"} alt={"img"}/>
                        </li>
                        <li>
                            <CircleImage src={"/src/assets/images/team_3.jpg"} size={"10em"} title={"小猜"}
                                         hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"} alt={"img"}/>
                        </li>
                        <li>
                            <CircleImage src={"/src/assets/images/team_4.jpg"} size={"10em"} title={"XC"}
                                         hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"} alt={"img"}/>
                        </li>
                        <li>
                            <CircleImage src={"/src/assets/images/team_5.jpg"} size={"10em"} title={"要是能重来我要学李白"}
                                         hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"} alt={"img"}/>
                        </li>
                        <li>
                            <CircleImage src={"/src/assets/images/team_6.jpg"} size={"10em"} title={"牛人"}
                                         hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"} alt={"img"}/>
                        </li>
                        <li>
                            <CircleImage src={"/src/assets/images/team_7.jpg"} size={"10em"} title={"牛人"}
                                         hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"} alt={"img"}/>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}
export default Container4
