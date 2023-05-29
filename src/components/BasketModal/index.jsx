import { Modal, Button,  Badge, Space, ConfigProvider,Checkbox } from "antd";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems,increase,decline } from "../../redux/cartSlice";
import { MinusOutlined, PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from "./basketmodal.module.css"
import { selectCartItems } from "../../redux/cartSlice";
import { useUserInfo } from "../../react-query";


export default function BasketModal({ isOpen, toggleModal, product }) {
    const [checked, setChecked] = useState(false);
    const { data: userInfo } = useUserInfo();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);
    
    const handleCancel = () => toggleModal(!isOpen);
    const getTotalPrice = () => {
        
        return ((cartItems.length > 0)&&(checked==true)) ?
            cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
            : 0;
    }
    const onChange = (e) => {
        console.log('checked = ', e.target.checked);
        setChecked(e.target.checked);
      };

    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }
    const checkoutHandler = () => {
        handleCancel();
        if (userInfo?.uid)
           navigate("/shop");
        else
           navigate("/auth/login?redirect=/shop");
     }
    return (
        <Modal
            title="Cart"
            open={isOpen}
            onCancel={handleCancel}
            footer={null}
        >
            {cartItems.length === 0 ? (
                <div>Cart is empty</div>
            ) : (
                cartItems.map(item => (
                    
                    <li key={item.id} className={styles.item}>
                        <Checkbox onChange={onChange} checked={checked}></Checkbox>
                        <Link to={`/products/id/${item.id}?qtyFromBasket=${item.qty}`}>
                            <div onClick={handleCancel}>
                                <img className={styles.image} src={item.image} alt={item.name} />
                            </div>
                        </Link>
                        <div className={styles.content}>
                            <div className={styles.name}>{item.sku}</div>
                            <div className={styles.name}>{item.name}</div>
                            <div>
                                <Space size="small">
                                    <Button size="small"  disabled={item.qty==1} onClick={() => dispatch(decline(item.id))} icon={<MinusOutlined style={{marginBottom:'3px'}} />} />
                                    <ConfigProvider theme={{
                                        token: { fontSizeSM: "18px", },
                                    }}>
                                        <Badge count={item.qty}
                                            key={item.qty}
                                            onChange={(qty) => dispatch(addCartItems({
                                                id: item.id,
                                                sku:item.sku,
                                                name: item.name,
                                                image: item.image,
                                                price: item.price,
                                                countInStock: item.countInStock,
                                                qty
                                            }))}
                                            color="#F18BA2" style={{ color: "black", fontSizeSM: "16px" }} >

                                        </Badge>
                                    </ConfigProvider>

                                    <Button size="small" disabled={item.qty==item.countInStock} onClick={() => dispatch(increase(item.id))} icon={<PlusOutlined style={{textAlign:"start"}} />} />
                                </Space>

                            </div>
                        </div>
                        <div >
                            <div className={styles.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                                x
                            </div>
                            <div className={styles.price}>
                                ${roundToTwo(item.price * item.qty)}
                            </div>
                        </div>
                    </li>
                ))
            )}
            <div className={styles.wrap}>
                Total
                <div className={styles.totalPrice}>${roundToTwo(getTotalPrice())}</div>
            </div>
            <Button
                className={styles.btn}
                type="primary"
                onClick={checkoutHandler}
            >
                <span style={{ marginLeft: 12 }}>PAY TO BILL<ArrowRightOutlined /></span>
            </Button>
        </Modal>
    );
}