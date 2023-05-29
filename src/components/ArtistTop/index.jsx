import styles from "./artisttop.module.css";
import { theme } from 'antd';

export default function ArtistTop(){
    const {
        token: { colorTextBase },
      } = theme.useToken();
    
    return(
        <div className={styles.layout}>
            <h1 className={styles.title} style={{color: colorTextBase,}}>ARTIST</h1>
        </div>
    )
}
