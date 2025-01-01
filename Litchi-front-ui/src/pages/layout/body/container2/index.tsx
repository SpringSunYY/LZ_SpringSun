import "./index.scss"
import {Grid} from "@mui/material";
import MySvgIcon from "@/compoents/SvgIcon";
import {useTranslation} from "react-i18next";

const Container2 = () => {
    const {t} = useTranslation();
    return (
        <div className={"container2"}>
            <Grid container spacing={2} className={"container"}>
                <Grid item sm={6} className="left">
                    <div className="item-join">10,95,219</div>
                    <h1 className="item-title">{t('SpringSun')}</h1>
                    <p>Having real social contacts can sometimes be difficult FUN, everything becomes much
                        simpler!</p>
                    <a href="/" className="button-slide">
                        <MySvgIcon name={"start"} size={40}></MySvgIcon>
                    </a>
                </Grid>
                <Grid item sm={6} className={"right"}>

                </Grid>
            </Grid>
        </div>
    )
}
export default Container2
