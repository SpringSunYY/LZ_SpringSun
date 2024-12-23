import {getCodeImage} from "@/apis/test.ts";

const Home = () => {
    const getCodeMsg = () => {
        getCodeImage().then((res) => {
            console.log(res)
        })
    }
    getCodeMsg();
    return <div>this is Home</div>
}

export default Home
