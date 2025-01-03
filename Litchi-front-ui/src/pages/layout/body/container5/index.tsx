import "./index.scss"
import {useTranslation} from "react-i18next";
import {Container, Grid} from "@mui/material";
import SlideIconButton from "@/compoents/SlideIconButton";

interface Container5Props {
    isMediumScreen?: boolean;
}

const Container5: React.FC<Container5Props> = ({isMediumScreen = false}: { isMediumScreen?: boolean }) => {
    const {t} = useTranslation();
    return (
        <div className={"container5"}>
            {!isMediumScreen ? (
                <Container>
                    <Grid container className={"container"}>
                        <Grid item xs={6} className={"left"}>
                            <h1 className={"title"}>{t('why choose title')}</h1>
                            <p className={"content"}>{t('why choose detail')}</p>
                            <p className={"icon-button"}>
                                <SlideIconButton label={t('why choose button')}/>
                            </p>
                            <li>
                                <img src={"/src/assets/images/figure/multi_shape.png"} alt={"multi_shape"}/>
                            </li>
                        </Grid>
                        <Grid className={"right"} item xs={6}>
                            <div>
                                <img src="/src/assets/images/figure/why_choose_1.jpg" width={"100%"} height={"auto"}
                                     alt={"why_choose_1.png"}/>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            ) : (
                <Container>
                    <Grid container className={"container"}>
                        <Grid item xs={12} className={"left"}>
                            <h1 className={"title"}>{t('why choose title')}</h1>
                            <p className={"content"}>{t('why choose detail')}</p>
                            <p className={"icon-button"}>
                                <SlideIconButton label={t('why choose button')}/>
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </div>
    )
}
export default Container5
