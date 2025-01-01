import "./index.scss"
import {Grid} from "@mui/material";

const Container2 = () => {
    // const {t} = useTranslation();
    return (
        <div className={"container2"}>
            <Grid container spacing={2} className={"container"}>
                <Grid item sm={6} className="left">

                </Grid>
                <Grid item sm={6} className={"right"}>

                </Grid>
            </Grid>
        </div>
    )
}
export default Container2
