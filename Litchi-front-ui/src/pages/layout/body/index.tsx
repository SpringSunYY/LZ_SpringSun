import "./index.scss"
import Container1 from "@/pages/layout/body/container1";
import Container2 from "@/pages/layout/body/container2";
import {useMediaQuery} from "@mui/material";
import Container3 from "@/pages/layout/body/container3";
import Container4 from "@/pages/layout/body/container4";
import Container5 from "@/pages/layout/body/container5";

const Body = () => {
    const isMediumScreen = useMediaQuery('(max-width:1000px)'); // 检测屏幕尺寸
    return (
        <div className={"body"}>
            <Container1 isMediumScreen={isMediumScreen}></Container1>
            <Container2></Container2>
            <Container3></Container3>
            <Container4 isMediumScreen={isMediumScreen}></Container4>
            <Container5 isMediumScreen={isMediumScreen}></Container5>
        </div>
    )
}
export default Body
