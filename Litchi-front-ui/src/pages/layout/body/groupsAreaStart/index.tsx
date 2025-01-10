import "./index.scss"
import {useTranslation} from "react-i18next";
import {Container, Grid} from "@mui/material";
import ImageMask from "@/compoents/ImageMask";

interface GroupsAreaStartProps {
    isMediumScreen?: boolean;
}

const GroupsAreaStart: React.FC<GroupsAreaStartProps> = ({isMediumScreen = false}) => {
    const {t} = useTranslation();
    console.log(t);
    return (
        <div className={"groups-area-start"}>
            {!isMediumScreen ? (
                <Container>
                    <Grid container spacing={1} className={"container"}>
                        <Grid item xs={12} className={"content"}>
                            <Container>
                                <h1 className={"title"}>
                                    {t('Groups Area Start Title')}
                                </h1>
                                <p className={"detail"}>
                                    {t('Groups Area Start Detail')}
                                </p>
                            </Container>
                        </Grid>
                        <Grid container spacing={1} className={"images"}>
                            <Grid item xs={3}>
                                <ImageMask src={"/src/assets/images/groups/groups_1.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={20}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ImageMask src={"/src/assets/images/groups/groups_2.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={20}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ImageMask src={"/src/assets/images/groups/groups_3.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={20}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ImageMask src={"/src/assets/images/groups/groups_4.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={20}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ImageMask src={"/src/assets/images/groups/groups_5.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={20}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ImageMask src={"/src/assets/images/groups/groups_6.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={20}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ImageMask src={"/src/assets/images/groups/groups_7.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={20}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ImageMask src={"/src/assets/images/groups/groups_8.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={20}
                                           content={"小小ITYY也有大大梦想呀"}/>
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
                                    {t('Groups Area Start Title')}
                                </h1>
                                <p className={"detail"}>
                                    {t('Groups Area Start Detail')}
                                </p>
                            </Container>
                        </Grid>
                        <Grid container spacing={1} className={"images"}>
                            <Grid item xs={6}>
                                <ImageMask src={"/src/assets/images/groups/groups_1.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={16} contentFontSize={10}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                            <Grid item xs={6}>
                                <ImageMask src={"/src/assets/images/groups/groups_2.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={16} contentFontSize={10}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                            <Grid item xs={6}>
                                <ImageMask src={"/src/assets/images/groups/groups_3.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={16} contentFontSize={10}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                            <Grid item xs={6}>
                                <ImageMask src={"/src/assets/images/groups/groups_4.jpg"} title={"GuangZhou"}
                                           width={"100%"} height={'auto'} titleFontSize={16} contentFontSize={10}
                                           content={"小小ITYY也有大大梦想呀"}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            )
            }
        </div>
    )
}
export default GroupsAreaStart
