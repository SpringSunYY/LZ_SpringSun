import "./index.scss"
import {Container, Grid} from "@mui/material";
import MySvgIcon from "@/compoents/SvgIcon";
import {useTranslation} from "react-i18next";

const Container2 = () => {
    const {t} = useTranslation();
    return (
        <div className={"container2"}>
            <Container>
                <Grid container spacing={2} className={"container"}>
                    <Grid item sm={6} className="left">
                        <div className="item-join">what we do</div>
                        <h1 className="item-title">Why Join Our Cirkle from Social Network ?</h1>
                        <p className={"item-content"}>{t('why join detail')}</p>
                        <a href="/" className="svg">
                            <MySvgIcon name={"plant"} size={80}></MySvgIcon>
                        </a>
                    </Grid>
                    <Grid item sm={6} className={"right"}>
                        <Grid container spacing={2}>
                            <Grid item sm={4}>
                                <div className={"left-svg"}>
                                    <MySvgIcon name={"wx-full"} size={"3em"}/>
                                </div>
                            </Grid>
                            <Grid item sm={8} className={"right-content"}>
                                <h1 >Meet Great People</h1>
                                <p>
                                    when an unknown printer took a galley of scrambled it to make a type specimen It has
                                    survived not only.
                                </p>
                            </Grid>
                            <Grid item sm={5}>
                                <div className={"left-svg left-middle"}>
                                    <MySvgIcon name={"people-full"} size={"3em"}/>
                                </div>
                            </Grid>
                            <Grid item sm={7} className={"right-content"}>
                                <h1>Meet Great People</h1>
                                <p>
                                    when an unknown printer took a galley of scrambled it to make a type specimen It has
                                    survived not only.
                                </p>
                            </Grid>
                            <Grid item sm={4}>
                                <div className={"left-svg"}>
                                    <MySvgIcon name={"message-full"} size={"3em"}/>
                                </div>
                            </Grid>
                            <Grid item sm={8} className={"right-content"}>
                                <h1>Meet Great People</h1>
                                <p>
                                    when an unknown printer took a galley of scrambled it to make a type specimen It has
                                    survived not only.
                                </p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Container2
