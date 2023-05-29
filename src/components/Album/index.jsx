import styles from "./album.module.css";
import { Button, Carousel } from 'antd';
import { RightOutlined, LeftOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useRef } from "react";
import { theme } from 'antd';


export default function Album({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const ref = useRef();
  const {
    token: { colorTextBase },
  } = theme.useToken();

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    SlidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          SlidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          SlidesToScroll: 1,
        }
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
        }
      }
    ]
  };
  return (

    <div className={styles.album}>
      <div className={styles.layout}>
        <h1 className={styles.title} style={{color: colorTextBase,}}>ALBUM</h1>
        <div className={styles.slider}>
          <Carousel {...settings} ref={ref} key={images.id}>
            {
              images.map((img, idx) => (
                <div className={idx === imageIndex ? styles.activeSlide : styles.slide}>
                  <a><img src={img.img} /></a>
                  <div className={styles.description} style={{color: colorTextBase,}}>
                    <p className={styles.name}>{img.name}</p>
                    <p className={styles.albumName}>{img.description}</p>
                  </div>
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
      <div className={styles.btn}>
        <Button onClick={() => {
          ref.current.prev();
        }}
        >
          <LeftOutlined />
        </Button>
        <Button onClick={() => {
          ref.current.next();
        }}
        >
          < RightOutlined />
        </Button>
      </div>
      <div className={styles.more}><a href="#"> <p>More...</p></a></div>
    </div>

  );
}
