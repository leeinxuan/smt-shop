import { Badge, theme } from "antd";
import { FavoriteIcon } from "../Icons";
import { useUserInfo } from "../../react-query";
import styles from "./favorite.module.css";

export default function Favorite() {
    const {
        token: { colorTextBase },

    } = theme.useToken();
    const { data: userInfo } = useUserInfo() || {};
    const favorites = userInfo.favorites || [];
    const count = favorites.length;
    const toggleOpen = () => { };

    return (
        <div onClick={toggleOpen} className={styles.favorite}>
            <Badge count={count} color='red' style={{ color: "white", marginTop: '10px', marginRight: '3px' }}>
                <FavoriteIcon color={colorTextBase} />
            </Badge>
        </div>
    );
}