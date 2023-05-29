import styles from "./footer.module.css";
import { theme } from 'antd';

export default function Footer() {
    const {
        token: { colorTextBase },
      } = theme.useToken();
    return (
        <div>
            <hr className={styles.hrFooterLine} />
            <div className={styles.Footer}>
                <p className={styles.webName} style={{color: colorTextBase,}}>SMTOWN&SHOP</p>
                <div className={styles.IconArea}>
                    <a href="https://www.facebook.com/smtown" target="_blank">
                        <img className={styles.icon} src="/images/FB_icon.png" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/smtown/" target="_blank">
                        <img className={styles.icon} src="/images/INS_icon.png" alt="instagram" />
                    </a>
                    <a href="https://twitter.com/SMTOWNGLOBAL" target="_blank">
                        <img className={styles.icon} src="/images/TWITTER_icon.png" alt="twitter" />
                    </a>
                    <a href="https://www.youtube.com/c/SMTOWN" target="_blank">
                        <img className={styles.icon} src="/images/YT_icon.png" alt="youtube" />
                    </a>
                </div>
                <p className={styles.copyRight} style={{color: colorTextBase,}}>© 2023 SMTOWN&SHOP</p>
            </div>
        </div>
    )
}
