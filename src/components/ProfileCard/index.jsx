import { Form, Input, Button, ConfigProvider, Space, Upload } from 'antd';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateProfile, useLogout, useUserInfo } from "../../react-query";
import styles from './profilecard.module.css';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const ProfileCard = ({ redirect }) => {

    const { data: userInfo } = useUserInfo() || {};
    console.log(userInfo, 'userInfo in Profile Card')
    const update = useUpdateProfile();
    const logout = useLogout();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onUpdate = async (values) => {
        console.log("Received update info: ", values);
        update.mutate({ ...values, uid: userInfo.uid });
    };

    const onLogout = () => {
        logout.mutate();
        navigate("/");
    }

    useEffect(() => {
        form.setFieldsValue(userInfo)
    }, [userInfo])


    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {

                setImageUrl(url);
            });
        }
    };
    const uploadButton = (

        <div>
            <img src="/images/LOGIN.png" width="125"
                height="125" />
        </div>

    );
    return (
        <Form
            name="normal_login"
            className={styles.profileForm}
            form={form}
            onFinish={onUpdate}
            initialValues={userInfo}
        >   <ConfigProvider theme={{
            token: {
                colorBgContainer: "#FCE1E7",
                colorPrimary: "#F18BA2",

            },
            components: {
                Input: {
                    colorBgContainer: "#FCE1E7",
                    colorBorder: "#FCE1E7",
                    colorText: "#696D8A"
                }

            },
        }}
        >
                <Form.Item>
                    <Upload
                        name="avatar"
                        listType="picture-circle"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}

                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                    width: '100%',
                                }}
                            />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </Form.Item>
                <div>
                    <h4 style={{ fontSize: "20px", fontWeight: "400" }}>Name</h4>
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your name",
                                whitespace: true,
                            },
                            {
                                type: "string",
                                message: "The input is not valid Name!",
                            },
                        ]}

                    >



                        <Input
                            className={styles.inputbox} placeholder={userInfo.name}
                        />
                    </Form.Item>
                    </div>
                    <div>
                    <h4 style={{ fontSize: "20px", fontWeight: "400" }}>Email</h4>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Email",
                            },
                            {
                                type: "string",
                                message: "The input is not valid Email!",
                            },
                        ]}


                    >

                        <Input
                            className={styles.inputbox} placeholder={userInfo.email}
                        />
                    </Form.Item>
                </div>
                <div>
                    <h4 style={{ fontSize: "20px", fontWeight: "400" }}>Address</h4>
                    <Form.Item
                        name="adrs"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Address",
                            },
                            {
                                type: "string",
                                message: "The input is not valid Address!",
                            },
                        ]}

                    >

                        <Input
                            className={styles.inputbox} placeholder={userInfo?.adrs || ""}
                        />
                    </Form.Item>
                </div>
                <div>
                    <h4 style={{ fontSize: "20px", fontWeight: "400" }}>Phone</h4>
                    <Form.Item
                        name="tel"

                        rules={[
                            {
                                required: true,
                                message: "Please input your Phone Number",
                            },
                            {
                                type: "string",
                                message: "The input is not valid Number!",
                            },
                        ]}
                    >

                        <Input
                            className={styles.inputbox} placeholder={userInfo?.tel || ""}
                        />
                    </Form.Item>
                </div>
            </ConfigProvider >



            <Form.Item>
                <div className={styles.btn}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.submitButton}>
                        SUBMIT
                    </Button>
                    <Button
                        type="primary"
                        onClick={onLogout}
                        className={styles.logoutButton}>
                        LOG OUT
                    </Button>
                </div>
            </Form.Item>


        </Form>
    );
}
export default ProfileCard;