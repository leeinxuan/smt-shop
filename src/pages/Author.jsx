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
import { useProductsBySku } from '../react-query';
import { useQueries } from 'react-query';


function Shop() {
    const {
        token: { colorBg, colorTextBase },
    } = theme.useToken();
    const { sku } = useParams();
    const { data, isLoading } = useProductsBySku(sku);

    const products = data || [];

    const { currentPage, setCurrentPage } = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [posts, setPosts] = useState([]);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (

        <div className="mainLayout">

            <Header className="layoutHeader" />
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
                    <title style={{ color: colorTextBase }}>SHOP</title>

                    <Search />
                    <NavBar2 />
                    <Dropdown />
                </div>
                <ProductList products={products} posts={currentPosts} />
                {/* onChange={(page,pageSize)=>{setCurrentPage(page)}} */}
                <div className="title">
                    <Pagination defaultCurrent={1} postsPerPage={postsPerPage} total={50} />
                </div>
            </div>
            <Footer className="layoutFooter" />

        </div>


    );
}
export default Shop;