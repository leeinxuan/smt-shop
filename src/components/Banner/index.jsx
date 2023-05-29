import { Carousel } from 'antd';
import styles from "./banner.module.css";

const Banner = () => (
    <div className={styles.banner}>
        <Carousel autoplay>
            <div>
            <img className={styles.img} src="/images/banner_drama.png" />
            </div>
            <div>
            <img className={styles.img} src="/images/banner_music.png" />
            </div>
            <div>
            <img className={styles.img} src="/images/banner_md.png" />
            </div>
            <div>
            <img className={styles.img} src="/images/banner_show.png" />
            </div>
            <div>
            <img className={styles.img} src="/images/banner_concert.png" />
            </div>
        </Carousel>
    </div>
);
export default Banner;

