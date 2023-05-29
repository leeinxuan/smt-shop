import styles from "./artistselect.module.css";
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import NavLink from '../NavLink';
const items = [
    
    {
        label: <NavLink to="/artist/artcategory/solo"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            SOLO
        </NavLink>,
        key: '1',
    },
    {
        label: <NavLink to="/artist/artcategory/boys-team"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            BOYS TEAM
        </NavLink>,
        key: '2',
    },
    {
        label: <NavLink to="/artist/artcategory/girls-team"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            GIRLS TEAM
        </NavLink>,
        key: '3',
    },
    {
        label: <NavLink to="/artist"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            ALL
        </NavLink>,
        key: '4',
    },
];

const menuProps = {
    items,
};
const ArtistSelect = () => (
    <Space wrap>
        <Dropdown menu={menuProps} overlayStyle={{ colorBgElevated:"#F2C3CE" }} >
            <Button style={{
                width: 260,
                height: 40,
                borderRadius: 13,
                marginBottom: 62,
                marginTop: 57
            }}>
                <a onClick={(e) => e.preventDefault()}>
                <Space style={{ fontSize: 20,width:200,justifyContent:"space-between" }}>
                    ALL
                    <DownOutlined />
                </Space></a>
            </Button>
        </Dropdown>
    </Space>
);
export default ArtistSelect;
