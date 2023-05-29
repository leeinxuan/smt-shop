import styles from "./video.module.css";
import { Button, Carousel } from 'antd';
import { RightOutlined, LeftOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useRef } from "react";
import { Row, Col } from "antd";
import { theme } from 'antd';


export default function Video({ video }) {
    const ref = useRef();
    const ref2 = useRef();
    const {
        token: { colorTextBase },
    } = theme.useToken();

    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
    };
    return (

        <div className={styles.layout}>
            <h1 className={styles.title}
                style={{ color: colorTextBase, }}
            >
                VIDEO
            </h1>
            <Row className={styles.contentArea} >
                <Col className={styles.slider} type="flex" justify="center" align="middle"
                    key={video.id}
                    sm={{ span: 24 }}
                    lg={{ span: 16 }}
                    xl={{ span: 16 }}
                    xxl={{ span: 16 }}
                >
                    <Carousel {...settings} ref={ref} >
                        {
                            video.map((video) => (
                                <div className={styles.slide}>
                                    <iframe src={video.src} key={video.id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            ))
                        }
                    </Carousel>
                </Col>
                <Col className={styles.slider2} type="flex" align="middle"
                    key={video.id}
                    sm={{ span: 16 }}
                    lg={{ span: 6 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 6 }}
                >
                    <Carousel {...settings} ref={ref2} >
                        {
                            video.map((video) => (
                                <div className={styles.slide2}>
                                    <h1 style={{ color: colorTextBase, }}>{video.name}</h1>
                                    <h2 style={{ color: colorTextBase, }}>{video.description}</h2>
                                </div>
                            ))
                        }
                    </Carousel>
                </Col>
                <Col type="flex" align="middle"
                    key={video.id}
                    sm={{ span: 8 }}
                    lg={{ span: 2 }}
                    xl={{ span: 2 }}
                    xxl={{ span: 2 }}
                >
                    <div className={styles.btn}>
                        <Button onClick={() => {
                            ref.current.next();
                            ref2.current.next();
                        }}
                        >
                            < RightOutlined />
                        </Button>
                    </div>
                </Col>
            </Row>
            <div className={styles.more}><a href="#"><p>More...</p></a></div>
        </div>

    )
}
