import { useState } from "react";
import { Badge, theme } from "antd";
import BasketModal from "../BasketModal"
import { CartIcon } from "./Icons";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cartSlice";

import styles from "./cartsummary.module.css"

export default function CartSummary() {
    const {
        token : {colorTextBase},

    }=theme.useToken();
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => setIsOpen(!isOpen);
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0;
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <nav onClick={toggleModal} className={styles.cartSummary} >
            <Badge count={count} color="red" style={{ color: 'white', marginTop: '5px' }}>
                <CartIcon size={40} color={colorTextBase} />
            </Badge>
            <BasketModal
                isOpen={isOpen}
                toggleModal={toggleOpen}
            />
        </nav>
    );
}