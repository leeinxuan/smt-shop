import { Pagination } from 'antd';
import { Helmet } from "react-helmet-async"
import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Search from '../components/Search';
import NavBar2 from '../components/NavBar2'
import Dropdown from '../components/DropDown';
import ProductList from "../components/ProductList";
import { useState } from 'react';
import { useProducts } from '../react-query';
import { useQueries } from 'react-query';
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

function Shop() {
    const {
        token: { colorBg, colorTextBase },
    } = theme.useToken();
    
    const { data, isLoading } = useProducts();
   
    const products = data || [];

    // const _products = !categoryName
    //     ? products
    //     : products.filter(
    //         x => x?.category.toUpperCase() === categoryName.toUpperCase(),

    //     )

    // const _pd = !categoryName
    //     ? products
    //     : products.filter(
    //         x => x?.sku.toUpperCase() === categoryName.toUpperCase(),
    //     );

    const { currentPage, setCurrentPage } = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [posts, setPosts] = useState([]);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (

        <MotionPage className="mainLayout">

            <Header className="layoutHeader" />
            <ScrollToTopOnMount />
            <Helmet>
                <title>SHOP</title>
                <style>{`
            body { 
                background-color: ${colorBg}; 
                color: ${colorTextBase}
                }
            `}</style></Helmet>
            <div className="layoutContent">
                <div className="title">
                    <title style={{color: colorTextBase}}>SHOP</title>
                    <Search />
                    <NavBar2/>
                    <Dropdown />
                </div>
                <ProductList products={products} posts={currentPosts} isLoading={isLoading} />
                {/* onChange={(page,pageSize)=>{setCurrentPage(page)}} */}

                <div className="title">
                    <Pagination defaultCurrent={1} postsPerPage={postsPerPage} total={50} />
                </div>

            </div>
            <Footer className="layoutFooter" />

        </MotionPage>


    );
}
export default Shop;