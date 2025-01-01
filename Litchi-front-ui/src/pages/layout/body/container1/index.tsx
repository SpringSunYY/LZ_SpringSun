import "./index.scss"
import {Container, Grid} from "@mui/material";
import MySvgIcon from "@/compoents/SvgIcon";
import {useTranslation} from "react-i18next";
import people_1 from "@/assets/images/people_1.png"

interface Container1Props {
    isMediumScreen?: boolean;
}

const Container1: React.FC<Container1Props> = ({isMediumScreen = false}) => {
    const {t} = useTranslation();
    return (
        <div className={"container1"}>
            <Container>
                {!isMediumScreen ? (
                    <Grid container spacing={2} className={"container"}>
                        <Grid item sm={6} className="left">
                            <h1 className="item-title">{t('SpringSun')}</h1>
                            <p className={"item-content"}>Having real social contacts can sometimes be difficult FUN, everything becomes much
                                simpler!</p>
                            <div className="item-number">10,95,219</div>
                            <div className="conn-people">{t('Connected People')}</div>
                            <a href="/" className="button-slide">
                                <MySvgIcon name={"start"} size={40}></MySvgIcon>
                            </a>
                        </Grid>
                        <Grid item sm={6} className={"right"}>
                            <div className="shape">
                                <img src={people_1}></img>
                            </div>
                        </Grid>
                    </Grid>
                ) : (<Grid container spacing={2} className={"container"}>
                    <Grid item sm={12} className="left">
                        <h1 className="item-title">{t('SpringSun')}</h1>
                        <p>Having real social contacts can sometimes be difficult FUN, everything becomes much
                            simpler!</p>
                        <div className="item-number">10,95,219</div>
                        <div className="conn-people">{t('Connected People')}</div>
                        <a href="/" className="button-slide">
                            <MySvgIcon name={"start"} size={40}></MySvgIcon>
                        </a>
                    </Grid>
                </Grid>)}
            </Container>
        </div>
    )
}
export default Container1
