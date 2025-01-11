import {Container, InputAdornment, TextField} from "@mui/material";
import "./index.scss"
import SlideIconButton from "@/compoents/SlideIconButton";
import {useTranslation} from "react-i18next";


const NewsLetterStart = () => {
    const {t} = useTranslation();
    return (
        <div className={"news-letter-start"}>
            <Container>
                <div className={"cloud"}>
                    <ul className="section-cloud">
                        <li><img src="/src/assets/images/figure/cloud_1.png" alt="shape"/></li>
                        <li><img src="/src/assets/images/figure/cloud_2.png" alt="shape"/></li>
                        <li><img src="/src/assets/images/figure/cloud_2.png" alt="shape"/></li>
                        <li><img src="/src/assets/images/figure/cloud_1.png" alt="shape"/></li>
                    </ul>
                </div>
                <div className={"shape"}>
                    <ul className="section-shape">
                        <li><img src="/src/assets/images/figure/shape_1.png" alt="shape"/></li>
                        <li><img src="/src/assets/images/figure/shape_2.png" alt="shape"/></li>
                        <li><img src="/src/assets/images/figure/shape_3.png" alt="shape"/></li>
                        <li><img src="/src/assets/images/figure/shape_4.png" alt="shape"/></li>
                        <li><img src="/src/assets/images/figure/shape_5.png" alt="shape"/></li>
                    </ul>
                </div>
                <div className={"news-top"}>
                    <h1 className={"top-title"}>{t('news letter start title')}</h1>
                    <p className={"top-detail"}>{t('news letter start detail')}</p>
                </div>
                <div className={"news-medium"}>
                    <div className={"medium-content"}>
                        <TextField fullWidth
                                   label={t('news letter start email')}
                                   id="fullWidth"
                                   variant="standard"
                                   InputProps={{
                                       endAdornment: (
                                           <InputAdornment
                                               position="end"
                                               sx={{
                                                   display: 'flex',
                                                   alignItems: 'center',  // 垂直居中
                                                   paddingBottom: '0.5em',
                                               }}
                                           >
                                               <SlideIconButton
                                                   label="submit"
                                                   height="100%"
                                               />
                                           </InputAdornment>
                                       ),
                                   }}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default NewsLetterStart
