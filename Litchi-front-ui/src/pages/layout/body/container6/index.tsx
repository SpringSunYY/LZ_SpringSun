import "./index.scss"
import {useTranslation} from "react-i18next";
import {Container, Grid} from "@mui/material";
import SlideIconButton from "@/compoents/SlideIconButton";
import ImageWithZoom from "@/compoents/ImageWithZoom";

interface Container6Props {
    isMediumScreen?: boolean;
}

const Container6: React.FC<Container6Props> = ({isMediumScreen = false}: { isMediumScreen?: boolean }) => {
    const {t} = useTranslation();
    console.log(t);
    return (
        <div className={"container5"}>
            {!isMediumScreen ? (
                <Container>
                    <ImageWithZoom src={"/src/assets/images/location/location_1.jpg"} label={"广州"} width={600}
                                   height={400} labelFontSize={"60px"}></ImageWithZoom>
                </Container>
            ) : (
                <Container>
                    <Grid container className={"container"}>
                        <Grid item xs={12} className={"left"}>
                            <h1 className={"title"}>Cirkle Makes Your Life Easier & Simple</h1>
                            <p className={"content"}>Aliquam lorem ante dapibus in viverra quis feugiat atellu Peaselus
                                vierra nullaut metus
                                varius laoreet unknown printer took scrambled make.Aliquam lorem ante dapibus in viverra
                                quis feugiat atellu Peaselus vierra nullaut metus varius laoreet unknown printer took
                                scrambled make.</p>
                            <p className={"icon-button"}>
                                <SlideIconButton label={"Read more"}/>
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </div>
    )
}
export default Container6
