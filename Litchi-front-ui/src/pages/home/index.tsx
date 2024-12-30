import {getCodeImage, listUser} from "@/apis/test";
import Button from "@mui/material/Button";
import {useState} from "react";
import {ToastContainer} from "react-toastify";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {checkPermiSingle} from "@/utils/permission.ts";
import {getMsg} from "@/apis/config/i18nMessageInfo.ts";

const Home = () => {
    const getCodeMsg = () => {
        getCodeImage().then((res) => {
            console.log('res', res.msg);
        }).catch((error) => {
            console.error('获取用户列表失败:', error);
        });
    };

    const [userList, setUserList] = useState([{
        userName: '',
        userId: ''
    }]);

    const getUserList = () => {
        listUser().then((res) => {
            setUserList(res?.rows || [])
        }).catch((error) => {
            console.error('获取用户列表失败:', error);
        });
    };
    const getMsgInfo = () => {
        const msg="hello";
        console.log(msg);
        getMsg(msg).then(r => {
            console.log('res', r);
        })
    }
    const userInfo = useSelector((state: RootState) => state.user.userInfo);  // 从 Redux 中获取用户数据
    const getUserInfo = () => {
        console.log(userInfo);
    }
    getCodeMsg();
    return (
        <div>
            <ToastContainer
                style={{
                    top: '20%',         // 距离顶部 10px
                    left: '50%',         // 居中
                    transform: 'translateX(-50%)', // 调整位置为水平居中
                }}/>
            <Button variant="contained" color="primary" onClick={getUserList}>
                获取用户
            </Button>
            <Button variant="contained" color="primary" onClick={getMsgInfo}>
                获取信息
            </Button>
            <Button disabled={!checkPermiSingle('system:config:remove')} variant="contained" color="primary"
                    onClick={getUserInfo}>
                获取用户信息
            </Button>
            {userList.length > 0 ? (
                userList.map((item) => (
                    <div key={item?.userId}>
                        <p>1 </p>{item?.userName}
                    </div>
                ))
            ) : (
                <p>没有用户数据</p>  // Show a message if there are no users
            )}
        </div>
    );
};

export default Home;
