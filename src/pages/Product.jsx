import { Helmet } from "react-helmet-async"
import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail"
import { useProductById } from '../react-query';
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

function Product() {
    const {
        token: { colorBg},
    } = theme.useToken();
    
    const { productId } = useParams();
    const { data, isLoading } = useProductById(productId);
    const product = data || {};
    return (
        <MotionPage className="mainLayout">
            <ScrollToTopOnMount />
            <Header className="layoutHeader" />
            <Helmet><style>{`
               body { 
                  background-color: ${colorBg}; 
               }
            `}</style></Helmet>
            <div className="layoutContent container">
                <ProductDetail product={product} isLoading={isLoading}/>

            </div>
            <Footer className="layoutFooter" />
        </MotionPage>


    );
}
export default Product;