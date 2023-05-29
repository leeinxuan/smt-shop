import styles from "./userinfo.module.css";
import { UserIcon } from "../Icons";
import {  useNavigate } from 'react-router-dom';
import { useUserInfo } from "../../react-query";
import { theme } from "antd";

export default function UserInfo(props) {
    const {
        token: { 
            colorTextBase
        },

    } = theme.useToken();

    const { data: userInfo} = useUserInfo();
    const navigate = useNavigate();
    const goToProfile = () => {
        if(userInfo?.name)
           navigate("/auth/profile")
        else
           navigate("/auth/login?redirect=/auth/profile");
     };

    return (
        <div onClick={goToProfile}  style={{ ...props.style }} className={styles.userInfo}>
            <UserIcon color={colorTextBase} />
            
            <p style={{color:colorTextBase}}>
            {!!userInfo?.name
               ? `${userInfo.name}'s`
               : `login`
            }</p>
        </div>
    );
}