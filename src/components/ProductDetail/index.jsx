import { useState, useEffect } from "react";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { Badge, Button, Space } from 'antd';
import { ConfigProvider, Spin } from 'antd';
import { theme } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import AddToCart from "../AddToCart"
import styles from "./productdetail.module.css"
const { Option } = Badge;

function ProductDetail({ product, isLoading }) {
    const [searchParams] = useSearchParams();
    const qtyFromBasket = searchParams.get('qtyFromBasket');
    const initQty = !!qtyFromBasket ? Number(qtyFromBasket) : product.countInStock > 0 ? 1 : 0
    const [qty, setQty] = useState(initQty);
    const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#F18BA2" }} spin />;

    useEffect(() => {
        setQty(initQty)
    }, [initQty])
    const {
        token: { colorTextBase, colorTextBase2, colorTextBase3 },
    } = theme.useToken();

    // const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
    const sum = product.price * qty;
    const increase = () => {
        let newCount = qty + 1;
        if (newCount >= product.countInStock) {
            newCount = product.countInStock;
        }
        setQty(newCount);
    };
    const decline = () => {
        let newCount = qty - 1;
        if (newCount < 1) {
            newCount = 1;
        }
        setQty(newCount);
    };
    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }
    return (
        <>
            {isLoading
                ? (
                    <div className="spinner-wrap">
                        <Spin indicator={antIcon} className="spinner" />
                    </div>
                ) : (

                    <div className={styles.info} style={{ borderColor: colorTextBase3, }}>
                        <section key={product.name} >
                            <img
                                src={product.image}
                                alt={product.name} />
                        </section>
                        <section key={product.id} >
                            <h3 className={styles.author} style={{ color: colorTextBase2 }}>
                                {product.author}
                            </h3>
                            <h2 className={styles.name} style={{ color: colorTextBase, }}>
                                {product.name}
                            </h2>
                            <h3 className={styles.text} style={{ color: colorTextBase2 }}>
                                $ {product.price}
                            </h3>
                            {/* <p className={styles.status}>
                    Status: {product.countInStock > 0 ? "InStock" : "Unavailable."}
                </p> */}
                            <Space size="large">
                                <Button onClick={decline} icon={<MinusOutlined />} disabled={qty == 1} />
                                <ConfigProvider theme={{
                                    token: { fontSizeSM: "20px", },
                                }}>
                                    <Badge count={qty}
                                        key={qty}
                                        onChange={val => setQty(val)}
                                        color="white" style={{ color: "black", fontSizeSM: "16px" }} >

                                    </Badge>
                                </ConfigProvider>

                                <Button onClick={increase} icon={<PlusOutlined />} disabled={qty == product.countInStock} />
                            </Space>
                            <div className={styles.sum} style={{ color: colorTextBase2 }}>
                                <p className={styles.word}>
                                    TOTAL
                                </p>
                                <p className={styles.qty}>
                                    $ {roundToTwo(sum)}
                                </p>
                            </div>
                            <AddToCart product={product} qty={qty} />
                        </section>
                    </div>
                )
            }
        </>
    );
}
export default ProductDetail;