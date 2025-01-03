import "./index.scss"
import {Container, Grid} from "@mui/material";
import CircleImage from "@/compoents/ImageCircle";
import {useTranslation} from "react-i18next";
import SlideIconButton from "@/compoents/SlideIconButton";

interface Container4Props {
    isMediumScreen?: boolean;
}

const Container4: React.FC<Container4Props> = ({isMediumScreen = false}) => {
    const {t} = useTranslation();
    return (
        <div className={"container4"}>
            <Container className={"container"}>
                <div className="content-top">
                    <h1>{t('our team')}</h1>
                    <p>{t('our team detail')}</p>
                </div>
                {isMediumScreen ? (
                    <li>
                        <CircleImage src={"/src/assets/images/team/team_4.jpg"} size={"25em"} title={"XC"}
                                     hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"} alt={"img"}/>
                    </li>
                ) : (
                    <Grid container spacing={2} className="content-middle">
                        <Grid item xs={12} className={"middle-bottom"}>
                            <ul className="shape-wrap">
                                <li><img src="/src/assets/images/team/shape_9.png" alt="shape"/></li>
                                <li><img src="/src/assets/images/team/shape_1.png" alt="shape"/></li>
                                <li><img src="/src/assets/images/team/shape_2.png" alt="shape"/></li>
                                <li><img src="/src/assets/images/team/shape_circle_1.png" alt="shape"/></li>
                                <li><img src="/src/assets/images/team/shape_circle_2.png" alt="shape"/></li>
                                <li><img src="/src/assets/images/team/shape_circle_3.png" alt="shape"/></li>
                                <li><img src="/src/assets/images/team/shape_3.png" alt="shape"/></li>
                                <li><img src="/src/assets/images/team/shape_4.png" alt="shape"/></li>
                            </ul>
                        </Grid>
                        <Grid className={"middle-left"} item xs={4}>
                            <li>
                                <CircleImage src={"/src/assets/images/team/team_1.jpg"} size={"20em"}
                                             title={"SpringSun"}
                                             hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"}
                                             alt={"img"}/>
                            </li>
                            <li>
                                <CircleImage src={"/src/assets/images/team/team_3.jpg"} size={"10em"} title={"YY"}
                                             hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"}
                                             alt={"img"}/>
                            </li>
                            <li>
                                <CircleImage src={"/src/assets/images/team/team_3.jpg"} size={"15em"} title={"小猜"}
                                             hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"}
                                             alt={"img"}/>
                            </li>
                        </Grid>
                        <Grid item xs={4} className={"middle-middle"}>
                            <li>
                                <CircleImage src={"/src/assets/images/team/team_4.jpg"} size={"25em"} title={"XC"}
                                             hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"}
                                             alt={"img"}/>
                                <p className={"start-button"}><SlideIconButton label={t('our team button')}/></p>
                            </li>
                        </Grid>
                        <Grid item xs={4} className={"middle-right"}>
                            <li>
                                <CircleImage src={"/src/assets/images/team/team_5.jpg"} size={"15em"}
                                             title={"要是能重来我要学李白"}
                                             hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"}
                                             alt={"img"}/>
                            </li>
                            <li>
                                <CircleImage src={"/src/assets/images/team/team_6.jpg"} size={"10em"} title={"牛人"}
                                             hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"}
                                             alt={"img"}/>
                            </li>
                            <li>
                                <CircleImage src={"/src/assets/images/team/team_7.jpg"} size={"20em"} title={"牛人"}
                                             hoverBackgroundColor={"rgba(97,93,250,0.7)"} content={"1046"}
                                             alt={"img"}/>
                            </li>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </div>
    )
}
export default Container4
