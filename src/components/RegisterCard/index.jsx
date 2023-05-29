import { Form, Input, Button, Checkbox, ConfigProvider, Space, Divider } from 'antd';
import { WarningOutlined } from "@ant-design/icons";
import React, { useState,useEffect }  from "react";
import { Link,useNavigate  } from "react-router-dom";
import { useRegisterWithEmailPassword } from '../../react-query';
import styles from './registercard.module.css';


const RegisterCard = ({ redirect }) => {

    const { mutate, error, isLoading, isError, isSuccess, data } = useRegisterWithEmailPassword();
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
            name="register"
            className={styles.registerForm}
            form={form}
            scrollToFirstError
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
                    colorText:"#696D8A",
                
                }

            },
        }}
        >       <h4 style={{ fontSize: "20px", fontWeight: "400" }}>Name</h4>
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name",
                            whitespace: true,
                        },
                    ]}

                > 
                   
                    <Input
                        className={styles.inputbox}
                    />
                </Form.Item>
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

                >
                    
                    <Input
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
                        className={styles.inputbox} 
                    />
                </Form.Item>
                <h4 style={{ fontSize: "20px", fontWeight: "400" }}>Re-enter Password</h4>
                <Form.Item
                    name="rePassword"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please re-enter your password",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(
                                    new Error("The two passwords that you entered do not match!")
                                );
                            },
                        }),
                    ]}
                >
                    
                    <Input.Password
                        className={styles.inputbox}
                    />
                </Form.Item>
            </ConfigProvider >

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value
                                ? Promise.resolve()
                                : Promise.reject(new Error("Should accept agreement")),
                    },
                ]}
                style={{ alignSelf: "flex-start" }}
            >
                <Checkbox>
                    I have read the <Link to={"/"}>agreement</Link>
                </Checkbox>
            </Form.Item>

            <Form.Item>
                
                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.registerButton} >
                    REGISTER
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
                <p style={{ color: "#F18BA2",fontWeight:600}}>countinue with</p>
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
            <p style={{ fontSize: "20px", color: "#747BA8" }}>Already have an account ?</p>
            <Form.Item>
                <Link style={{ fontSize: "24px", color: "#434868", fontWeight: "bold" }} to={`/auth/login?redirect=${redirect}`}>Login</Link>
            </Form.Item>
        </Form>
    );
}
export default RegisterCard;