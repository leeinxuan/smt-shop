import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileCard from '../components/ProfileCard';
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


function Profile() {
    const {
        token: { colorBg, colorTextBase },
    } = theme.useToken();
    return (
        <MotionPage className="mainLayout">
            <ScrollToTopOnMount />
            <Helmet>
                <title>Profile</title>
                <style>{`
            body { 
                background-color: ${colorBg}; 
                color: ${colorTextBase}
                }
            `}</style></Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent container">
                <title style={{color:colorTextBase}}>PROFILE</title>
                <ProfileCard />
            </div>
            <Footer className="layoutFooter" />
        </MotionPage>
    );
}
export default Profile;