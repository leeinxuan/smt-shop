import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import RegisterCard from '../components/RegisterCard';
import MotionPage from '../components/MotionPage';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTopOnMount() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Register() {
    const {
        token: { colorBg, colorTextBase },
    } = theme.useToken();

    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');
    return (
        <MotionPage className="mainLayout">
            <ScrollToTopOnMount />
            <Helmet>
                <title>Register</title>
                <style>{`
            body { 
                background-color: ${colorBg}; 
                color: ${colorTextBase}
                }
            `}</style></Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent container">
                <title style={{color:colorTextBase}}>REGISTER</title>
                <RegisterCard redirect={redirect}/>
            </div>
            <Footer className="layoutFooter" />
        </MotionPage>
    );
}
export default Register;