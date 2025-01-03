import "./index.scss"
import {useTranslation} from "react-i18next";

interface Container4Props {
    isMediumScreen?: boolean;
}

const Container5: React.FC<Container4Props> = ({isMediumScreen = false}: { isMediumScreen?: any }) => {
    const {t} = useTranslation();
    console.log(t)
    console.log(isMediumScreen);
    return (
        <div className={"container4"}>

        </div>
    )
}
export default Container5
