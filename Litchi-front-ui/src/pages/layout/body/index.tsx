import "./index.scss"
import BannerStart from "@/pages/layout/body/bannerStart";
import WhyChooseStart from "@/pages/layout/body/whyChooseStart";
import {useMediaQuery} from "@mui/material";
import CommunityStart from "@/pages/layout/body/communityStart";
import TeamAreaStart from "@/pages/layout/body/teamAreaStart";
import WhyChooseStartIng from "@/pages/layout/body/whyChooseStartIng";
import LocationFindStart from "@/pages/layout/body/locationFindStart";
import GroupsAreaStart from "@/pages/layout/body/groupsAreaStart";
import BannerAppsStart from "@/pages/layout/body/bannerAppsStart";

const Body = () => {
    const isMediumScreen = useMediaQuery('(max-width:1000px)'); // 检测屏幕尺寸
    return (
        <div className={"body"}>
            <div className={"banners-start-content"}>
                <BannerStart isMediumScreen={isMediumScreen}></BannerStart>
            </div>
            <div className={"why-choose-start-content"}>
                <WhyChooseStart></WhyChooseStart>
            </div>
            <div className={"community-start-content"}>
                <CommunityStart></CommunityStart>
            </div>
            <div className={"team-area-start-content"}>
                <TeamAreaStart isMediumScreen={isMediumScreen}></TeamAreaStart>
            </div>
            <div className={"why-choose-start-ing-content"}>
                <WhyChooseStartIng isMediumScreen={isMediumScreen}></WhyChooseStartIng>
            </div>
            <div className={"location-find-start-content"}>
                <LocationFindStart isMediumScreen={isMediumScreen}></LocationFindStart>
            </div>
            <div className={"banner-apps-start-content"}>
                <BannerAppsStart isMediumScreen={isMediumScreen}></BannerAppsStart>
            </div>
            <div className={"groups-area-start-content"}>
                <GroupsAreaStart isMediumScreen={isMediumScreen}></GroupsAreaStart>
            </div>
        </div>
    )
}
export default Body
