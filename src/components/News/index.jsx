import styles from "./news.module.css";
import { Row, Col } from "antd";
import { Carousel } from 'antd';
import { theme } from 'antd';

export default function News() {
    const {
        token: { colorTextBase },
    } = theme.useToken();
    return (
        
            <div className={styles.layout}>
                <h1 className={styles.title} 
                    style={{color:colorTextBase,}}
                >
                    NEWS
                </h1>
                <Row className={styles.newsContent} gutter={[20, 20]}>
                    <Col type="flex" justify="center" align="middle"
                        sm={{ span: 24 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                        xxl={{ span: 12 }}
                    >
                        <a href="https://www.youtube.com/watch?v=xhXoiQDloV8" target="_blank">
                            <p className={styles.newsWord}>SM X Seoul Philharmonic Orchestra ‘Into the New World’ orchestra version</p>
                        </a>
                        <a href="https://www.allkpop.com/article/2022/08/1200-students-apply-for-sm-entertainments-k-pop-school" target="_blank">
                            <p className={styles.newsWord}>Recruiting transfer students for SM UNIVERSE</p>
                        </a>
                        <a href="https://www.hellokpop.com/news/kwon-yuri-gets-appointed-as-public-relations-ambassador-for-beautiful-mind/" target="_blank">
                            <p className={styles.newsWord}>KWON YURI is appointed as an  ambassador for 'Beautiful Mind'</p>
                        </a>
                        <a href="https://309ktyss.tistory.com/77" target="_blank">
                            <p className={styles.newsWord}>TAEYEON's Elle Taiwan Magazine Interview</p>
                        </a>
                        <a><p className={styles.more}>More...</p></a>
                    </Col>
                    <Col type="flex" justify="center" align="middle"
                        sm={{ span: 24 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                        xxl={{ span: 12 }}
                    >
                        <div className={styles.carousel}>
                            <Carousel autoplay autoplaySpeed={6000} fade={true} dots={false}>
                                <div>
                                    <img className={styles.newsPic} src="/images/intothenewworld.jpg" />
                                </div>
                                <div>
                                    <img className={styles.newsPic} src="/images/SMuniverse.jpg" />
                                </div>
                                <div>
                                    <img className={styles.newsPic} src="/images/YURI.jpg" />
                                </div>
                                <div>
                                    <img className={styles.newsPic} src="/images/TAEYEON.jpg" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </div>
        
    )
}

