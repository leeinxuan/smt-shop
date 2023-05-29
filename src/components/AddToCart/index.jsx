import { Button,message } from "antd"
import styles from "./addtocart.module.css"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const openMessage = () => {
    message.open({
      type: 'success',
      content: `${product.name} have been added to your cart.`,
      style: {
        marginTop: '10vh',
      },
    });
  };

  const addToCart = () => {
    openMessage();
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))
  };

  return (
    <Button type="primary" className={styles.btn} onClick={addToCart}>
      Add To Bag
    </Button>
  );
}
