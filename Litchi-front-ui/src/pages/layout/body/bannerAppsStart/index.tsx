import "./index.scss"
import {useTranslation} from "react-i18next";
import {Container, Grid} from "@mui/material";
import SlideIconButton from "@/compoents/SlideIconButton";

interface BannerAppsStartProps {
    isMediumScreen?: boolean;
}

const BannerAppsStart: React.FC<BannerAppsStartProps> = ({isMediumScreen = false}: { isMediumScreen?: boolean }) => {
    const {t} = useTranslation();
    return (
        <div className={"banner-apps-start"}>
            {!isMediumScreen ? (
                <Container>
                    <Grid container className={"container"}>
                        <Grid item xs={6} className={"left"}>
                            <h1 className={"title"}>{t('banner apps start title')}</h1>
                            <p className={"content"}>{t('banner apps start detail')}</p>
                            <p className={"icon-button"}>
                                <SlideIconButton label={t('banner apps start button')}/>
                            </p>
                        </Grid>
                        <Grid className={"right"} item xs={6}>
                            <div className={"right-img"}>
                                <img src="/src/assets/images/banner/apps.png" width={"55%"} height={"auto"}
                                     alt={"why_choose_1.png"}/>
                            </div>
                            <li>
                                <img src={"/src/assets/images/figure/multi_shape.png"} alt={"multi_shape"}/>
                            </li>
                        </Grid>
                    </Grid>
                </Container>
            ) : (
                <Container>
                    <Grid container className={"container"}>
                        <Grid item xs={12} className={"left"}>
                            <h1 className={"title"}>{t('banner apps start title')}</h1>
                            <p className={"content"}>{t('banner apps start detail')}</p>
                            <p className={"icon-button"}>
                                <SlideIconButton label={t('banner apps start button')}/>
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </div>
    )
}
export default BannerAppsStart
