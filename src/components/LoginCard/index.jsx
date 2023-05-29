import { Form, Input, Button, Checkbox, ConfigProvider, Space, Divider } from 'antd';
import { WarningOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailPassword } from '../../react-query';
import styles from './logincard.module.css';
import { theme } from 'antd';

const LoginCard = ({ redirect }) => {

    const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
    const [isRemember, setIsRemember] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        mutate(values);
    };
    useEffect(() => {
        if (isSuccess) {
            navigate(redirect);
        }
    }, [isSuccess, redirect]);
    return (
        <Form
            name="normal_login"
            className={styles.loginForm}
            form={form}
            initialValues={{
                isRemember: true,
            }}
            onFinish={onFinish}
        >   <ConfigProvider theme={{
            token: {
                colorBgContainer: "#FCE1E7",
                colorPrimary: "#F18BA2",
            },
            components: {
                Input: {
                    colorBgContainer: "#FCE1E7",
                    colorBorder: "#FCE1E7",
                    colorText: "#696D8A",
                    colorTextPlaceholder: "#696D8A"
                }

            },
        }}
        >
                <div className={styles.inputArea}>
                    <h4 style={{ fontSize: "20px", fontWeight: "400" }}>Email</h4>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: "email",
                                message: "The input is not valid E-mail!",
                            },
                            {
                                required: true,
                                message: "Please input your E-mail",
                            },
                        ]}

                        hasFeedback
                    >
                        <Input
                            placeholder="Enter your E-Mail"
                            className={styles.inputbox}
                        />
                    </Form.Item>
                    <h4 style={{ fontSize: "20px", fontWeight: "400" }}>Password</h4>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            type="password"
                            placeholder="Enter your Password"
                            className={styles.inputbox}
                        />
                    </Form.Item>
                </div>
            </ConfigProvider >

            <Form.Item>
                <div className={styles.checkarea}>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember}>
                            Remember me
                        </Checkbox>
                    </Form.Item>
                    <Link className={styles.loginFormForgot} to={"/"}>
                        Forgot password ?
                    </Link>
                </div>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.loginButton}>
                    LOGIN
                </Button>

                {!isError ? (
                    <div></div>
                ) : (
                    <div className={styles.loginForm__errorWrap}>
                        <h3 className={styles.loginForm__errorTitle}>
                            <WarningOutlined />
                            {"  "}There was a problem
                        </h3>
                        <p className={styles.loginForm__errorMessage}>{error.message}</p>
                    </div>
                )}
            </Form.Item>
            <div className={styles.continue}>
                <div className={styles.line}></div>
                <p style={{ color: "#F18BA2", fontWeight: 600 }}>countinue with</p>
                <div className={styles.line}></div>
            </div>
            <Form.Item className={styles.loginFormOther}>

                <Link to={"/"}>
                    <img src="/images/fb_login.png" />
                </Link>
                <Link to={"/"}>
                    <img src="/images/google_login.png" />
                </Link>

                <Link to={"/"}>
                    <img src="/images/kakao_login.png" />
                </Link>

            </Form.Item>
            <p style={{ fontSize: "20px", color: "#747BA8" }}>Don't have an account ?</p>
            <Form.Item>
                <Link style={{ fontSize: "24px", color: "#434868", fontWeight: "bold" }} to={`/auth/register?redirect=/auth/profile`}>Sign Up</Link>
            </Form.Item>
        </Form>
    );
}
export default LoginCard;