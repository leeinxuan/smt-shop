import styles from './productitem.module.css';
import _ from 'lodash';
import Link from '../Link';
import { Button, theme } from "antd"
import { useNavigate } from "react-router-dom";
import { FavIcon } from '../Icons';
import { useToggleFavoriteProduct, useUserInfo } from '../../react-query';

export default function ProductItem({ product }) {
    const {
        token: { colorTextBase, colorTextBase2 },
    } = theme.useToken();
    const { mutate } = useToggleFavoriteProduct();
    const navigate = useNavigate();
    const { data: userInfo } = useUserInfo() || {};
    const favorites = userInfo.favorites || [];
    let isFavorite = _.includes(favorites, product.id);
    const toggleFavorite = () => {
        if (!!userInfo?.uid) {
            mutate({ productId: product.id, uid: userInfo?.uid })
            navigate("/shop");
        }
        else
            navigate("/auth/login?redirect=/shop");
    }

    return (
        <div className={styles.item}>

            <section>

                <Link to={`/products/id/${product.id}`}>
                    <img
                        style={{ width: '17rem', height: '17rem' }}
                        src={product.image}
                        alt={product.name} />
                </Link>

                <div className={styles.info}>
                    <h4 className={styles.author} style={{ color: colorTextBase, }}>
                        {product.author}
                    </h4>
                    <h3 className={styles.name} style={{ color: colorTextBase, }}>
                        {product.name}
                    </h3>
                    <span className={styles.text} style={{ color: colorTextBase2, }}>
                        $ {product.price}
                        <div onClick={toggleFavorite} className={styles.favorite}>
                            <FavIcon color={isFavorite ? '#FD2A5A' : colorTextBase} />
                        </div>
                        {/* <Button type="link" className={styles.btn} >
                            <Link to={`/products/id/${product.id}`}><Icon size={30} color={colorTextBase2} /></Link>
                        </Button> */}
                    </span>
                </div>
            </section>
        </div>
    );
}