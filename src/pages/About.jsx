import Footer from "../components/Footer";
import Header from "../components/Header";
import History from "../components/History";
import CompanyItro from "../components/CompanyItro";
import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MotionPage from '../components/MotionPage';


function ScrollToTopOnMount() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function About() {
    const {
        token: { colorBg, colorTextBase},
    } = theme.useToken();
    
    return (
        <MotionPage className="mainLayout">
            <ScrollToTopOnMount />
            <Helmet>
                <title>ABOUT</title>
                <style>{`
            body { background-color: ${colorBg}; }
        `}</style>
            </Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <div className="search">
                    <title style={{color: colorTextBase}}>Company Introduction</title>
                </div>
                <CompanyItro/>
                <div className="title">
                    <title style={{color: colorTextBase}}>History</title>
                </div>
                <History/>
            </div>
            <Footer className="layoutFooter" />
        </MotionPage>

    )
}

export default About;