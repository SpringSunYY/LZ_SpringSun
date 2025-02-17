import "./index.scss"
import {Container, Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

const CommunityStart = () => {
    const {t} = useTranslation();
    return (
        <div className={"community-start"}>
            <Container>
                <Grid container spacing={2} className={"container"}>
                    <Grid item sm={6} className="left">
                        <ul className="map-marker">
                            <li><img src="src/assets/images/marker_1.png" alt="marker"/></li>
                            <li><img src="src/assets/images/marker_2.png" alt="marker"/></li>
                            <li><img src="src/assets/images/marker_3.png" alt="marker"/></li>
                            <li><img src="src/assets/images/marker_4.png" alt="marker"/></li>
                            <li><img src="src/assets/images/marker_5.png" alt="marker"/></li>
                        </ul>
                    </Grid>
                    <Grid item sm={6} className={"right"}>
                        <p className={"item-content"}>{t('Our scope')}</p>
                        <h1 className="item-title">{t('SpringSun')}</h1>
                        <div className="item-detail">{t('Our scope detail')}</div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default CommunityStart
