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
import TestimonialStart from "@/pages/layout/body/testimonialStart";
import BlogAreaStart from "@/pages/layout/body/BlogAreaStart";
import NewsLetterStart from "@/pages/layout/body/newsLetterStart";

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
            <div className={"testimonial-start-content"}>
                <TestimonialStart isMediumScreen={isMediumScreen}></TestimonialStart>
            </div>
            <div className={"blog-area-start-content"}>
                <BlogAreaStart isMediumScreen={isMediumScreen}></BlogAreaStart>
            </div>
            <div className={"news-letter-start-content"}>
                <NewsLetterStart></NewsLetterStart>
            </div>
        </div>
    )
}
export default Body
