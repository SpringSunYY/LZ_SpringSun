import {FormEvent, useState} from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {LoginUser} from "@/types/common";
import {useDispatch} from "react-redux";
import {fetchLogin, fetchUserInfo} from "@/store/module/user";

const Login = () => {
    const [loginUser, setLoginUser] = useState<LoginUser>({
        username: "admin",
        password: "admin123",
    });
    const dispatch = useDispatch()

    // 处理输入框的变化
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginUser((prev) => ({
            ...prev,
            [name]: value, // 自动根据 name 更新对应字段
        }));
    };

    // 提交表单
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // @ts-ignore
        await dispatch(fetchLogin(loginUser))
        // @ts-ignore
        await dispatch(fetchUserInfo())
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField
                    label="Username"
                    variant="outlined"
                    value={loginUser.username}
                    onChange={handleChange}
                    name="username" // 与 state 对应
                />
            </div>
            <div>
                <TextField
                    label="Password"
                    variant="outlined"
                    value={loginUser.password}
                    onChange={handleChange}
                    name="password" // 与 state 对应
                    type="password"
                />
            </div>
            <div>
                <Button variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </div>
        </form>
    );
};

export default Login;
