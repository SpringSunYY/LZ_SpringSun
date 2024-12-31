import "./index.scss"
import {Grid} from "@mui/material";
import MySvgIcon from "@/compoents/SvgIcon";
import {useTranslation} from "react-i18next";

const Container1 = () => {
    const {t} = useTranslation();
    return (
        <div className={"container1"}>
            <Grid container spacing={2} className={"container"}>
                <Grid item sm={6} className="left">
                    <h1 className="item-title">{t('SpringSun')}</h1>
                    <p>Having real social contacts can sometimes be difficult FUN, everything becomes much
                        simpler!</p>
                    <div className="item-number">10,95,219</div>
                    <div className="conn-people">{t('Connected People')}</div>
                    <a href="/" className="button-slide">
                        <MySvgIcon name={"start"} size={40}></MySvgIcon>
                    </a>
                </Grid>
                <Grid item sm={6} className={"right"}>
                    <div className="shape"></div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Container1
