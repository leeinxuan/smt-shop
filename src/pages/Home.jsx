import ContentList from "../components/ContentList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async"
import artists from "../json/album.json"
import video from "../json/video.json"
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



function Home() {
    
    
    const {
        token: { colorBg},
    } = theme.useToken();
    return (
        <MotionPage className="mainLayout">
            <ScrollToTopOnMount />
            <Helmet>
                <title>SMTOWN&SHOP</title>
                <style>{`
            body { 
              background-color: ${colorBg};
            }
        `}</style>
            </Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <ContentList  artists={artists} video={video} />
            </div>
            <Footer className="layoutFooter" />
        </MotionPage>

    )
}

export default Home;