import "./index.scss"
import Container1 from "@/pages/layout/body/container1";
import Container2 from "@/pages/layout/body/container2";
import {Grid, useMediaQuery} from "@mui/material";

const Body = () => {
    const isMediumScreen = useMediaQuery('(max-width:1000px)'); // 检测屏幕尺寸
    return (
        <div className={"body"}>
            <Grid>
                <Container1 isMediumScreen={isMediumScreen}></Container1>
            </Grid>
            <Grid>
                <Container2></Container2>
            </Grid>
        </div>
    )
}
export default Body
