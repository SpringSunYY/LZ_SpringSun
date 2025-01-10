import "./index.scss"
import {useTranslation} from "react-i18next";
import {Container, Grid} from "@mui/material";
import ImageWithZoom from "@/compoents/ImageWithZoom";

interface LocationFindStartProps {
    isMediumScreen?: boolean;
}

const LocationFindStart: React.FC<LocationFindStartProps> = ({isMediumScreen = false}) => {
    const {t} = useTranslation();
    console.log(t);
    return (
        <div className={"location-find-start"}>
            {!isMediumScreen ? (
                <Container>
                    <Grid container spacing={2} className={"container"}>
                        <Grid item xs={12} className={"content"}>
                            <Container>
                                <h1 className={"title"}>
                                    {t('Location Find Start Title')}
                                </h1>
                                <p className={"detail"}>
                                    {t('Location Find Start Detail')}
                                </p>
                            </Container>
                        </Grid>
                        <Grid item xs={6} className={"images"}>
                            <ImageWithZoom src={"/src/assets/images/location/location_1.jpg"} label={"GuangZhou"}
                                           width={"100%"} height={'313px'} labelFontSize={40}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={1} columns={10}>
                                <Grid item xs={5}>
                                    <ImageWithZoom src={"/src/assets/images/location/location_2.jpg"}
                                                   label={"GuangZhou"}
                                                   width={"280px"} height={'150px'}/>
                                </Grid>
                                <Grid item xs={5}>
                                    <ImageWithZoom src={"/src/assets/images/location/location_3.jpg"} label={"Europe"}
                                                   width={"280px"} height={'150px'}/>
                                </Grid>
                                <Grid item xs={5}>
                                    <ImageWithZoom src={"/src/assets/images/location/location_4.jpg"} label={"BeiJing"}
                                                   width={"280px"} height={'150px'}/>
                                </Grid>
                                <Grid item xs={5}>
                                    <ImageWithZoom src={"/src/assets/images/location/location_1.jpg"} label={"ShangHai"}
                                                   width={"280px"} height={'150px'}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            ) : (
                <Container>
                    <Grid container spacing={2} className={"container"}>
                        <Grid item xs={12} className={"content"}>
                            <Container>
                                <h1 className={"title"}>
                                    {t('Location Find Start Title')}
                                </h1>
                                <p className={"detail"}>
                                    {t('Location Find Start Detail')}
                                </p>
                            </Container>
                        </Grid>
                        <Grid item xs={12} className={"images"}>
                            <ImageWithZoom src={"/src/assets/images/location/location_1.jpg"} label={"GuangZhou"}
                                           width={"100%"} height={'400px'} labelFontSize={40}/>
                        </Grid>
                    </Grid>
                </Container>
            )
            }
        </div>
    )
}
export default LocationFindStart
