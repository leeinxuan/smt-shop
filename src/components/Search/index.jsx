import { Input, Space } from 'antd';
import { ConfigProvider } from 'antd';
import styles from "./search.module.css"
const { Search } = Input;

const onSearch = (value) => console.log(value);
const Searchbox = () => (
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#696D8A',
            colorText: "#FFF",
            colorTextPlaceholder: "#FFF",
            colorPrimaryHover: "rgba(241, 139, 162, 1)",
            controlOutline: "#FFF",
            
        },
        components: {
            Button: {
                colorBgContainer: "#696D8A",
                colorBorder: "#FFF",
                lineWidth: "1",
            },
        },
    }}
    >
        <div >
            <Space >
                <Search className={styles.search}
                    placeholder="search"
                    allowClear
                    size="large"
                    onSearch={onSearch}
                    style={{
                        colorIcon: "#FFF"
                    }}
                />
            </Space>
        </div>
    </ConfigProvider>
);
export default Searchbox;