import "./index.scss"
import Container1 from "@/pages/layout/body/container1";
import Container2 from "@/pages/layout/body/container2";
import {useMediaQuery} from "@mui/material";
import Container3 from "@/pages/layout/body/container3";
import Container4 from "@/pages/layout/body/container4";
import Container5 from "@/pages/layout/body/container5";
import Container6 from "@/pages/layout/body/container6";
import Container8 from "@/pages/layout/body/container8";

const Body = () => {
    const isMediumScreen = useMediaQuery('(max-width:1000px)'); // 检测屏幕尺寸
    return (
        <div className={"body"}>
            <div className={"container1"}>
                <Container1 isMediumScreen={isMediumScreen}></Container1>
            </div>
            <div className={"container2"}>
                <Container2></Container2>
            </div>
            <div className={"container3"}>
                <Container3></Container3>
            </div>
            <div className={"container4"}>
                <Container4 isMediumScreen={isMediumScreen}></Container4>
            </div>
            <div className={"container5"}>
                <Container5 isMediumScreen={isMediumScreen}></Container5>
            </div>
            <div className={"container6"}>
                <Container6 isMediumScreen={isMediumScreen}></Container6>
            </div>
            <div className={"container7"}>
                <Container8 isMediumScreen={isMediumScreen}></Container8>
            </div>
        </div>
    )
}
export default Body
