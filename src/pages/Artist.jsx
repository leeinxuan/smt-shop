import Footer from "../components/Footer";
import Header from "../components/Header";
import ArtistTop from "../components/ArtistTop";
import { Helmet } from "react-helmet-async"
import Gallery from "../components/Gallery";
import artists from "../json/artist.json"
import Search from "../components/Search";
import ArtistSelect from "../components/ArtistSelect";
import { useParams } from 'react-router-dom';
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

function Artist() {
    const {
        token: { colorBg, colorTextBase },
    } = theme.useToken();
    const { artcategoryName } = useParams();
    const _artists = !artcategoryName
        ? artists
        : artists.filter(
            x => x?.category.toUpperCase() === artcategoryName.toUpperCase()
        );

    return (
        <MotionPage className="mainLayout">
            <ScrollToTopOnMount />
            <Helmet>
                <title>ARTIST</title>
                <style>{`
            body { 
              background-color: ${colorBg}; 
              color: ${colorTextBase}
            }
        `}</style>
            </Helmet>
            <Header className="layoutHeader" />
            <div className="layoutContent" >
                <ArtistTop />
                <div className="search">
                    <Search />
                </div>
                <div className="search">
                    <ArtistSelect/>
                </div>
                <Gallery artist={_artists} />
            </div>
            <Footer className="layoutFooter" />
        </MotionPage>

    )
}

export default Artist;