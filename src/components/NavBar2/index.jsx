import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Grid } from 'antd';
const { useBreakpoint } = Grid;
import { motion } from "framer-motion";
import { useState } from "react";
import NavLink from '../NavLink';
import MotionNavLink from '../MotionNavLink';
import styles from './navbar2.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function NavBar2() {
  const { lg } = useBreakpoint();
  const [selected, setSelected] = useState(0);
    
    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div className={styles.left} style={{ ...style }} onClick={onClick}>
            <FaAngleLeft />
          </div>
        );
      };
    
      const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div className={styles.right} style={{ ...style }} onClick={onClick}>
            <FaAngleRight/>
          </div>
        );
      };
    const settings = {
        focusOnSelect: true,
        dots:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
                
            }
        ],
    };
    

  const NavBarContent = (props) => (
    <motion.ul {...props} style={{ listStyleType: 'none' }}>
      <MotionNavLink
        onClick={() => setSelected(0)}
        id={0}
        selected={selected}
        to="/products/category/album">
        ALBUM
      </MotionNavLink>
      <MotionNavLink
        onClick={() => setSelected(1)}
        id={1}
        selected={selected}
        to="/products/category/photobook">
        PHOTOBOOK
      </MotionNavLink>
      <MotionNavLink
        onClick={() => setSelected(2)}
        id={2}
        selected={selected}
        to="/products/category/concert">
        CONCERT
      </MotionNavLink>
      <MotionNavLink
        onClick={() => setSelected(3)}
        id={3}
        selected={selected}
        to="/products/category/fashion">
        FASHION
      </MotionNavLink>
      <MotionNavLink
        onClick={() => setSelected(4)}
        id={4}
        selected={selected}
        to="/products/category/exclusive">
        EXCLUSIVE
      </MotionNavLink>
    </motion.ul>
  )


  return (
    <motion.div>
      {lg ? (
        <motion.div>
          <NavBarContent className={styles.layoutNavBar} />
        </motion.div>
      ) : (
        <div className={styles.navBar}>
          <Slider {...settings} className={styles.content} >

            <NavLink to="/products/category/album"
              className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
              <p>ALBUM</p>
            </NavLink>

            <NavLink to="/products/category/photobook"
              className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
              <p>PHOTOBOOK</p>
            </NavLink>
            <NavLink to="/products/category/concert"
              className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
              <p>CONCERT</p>
            </NavLink>
            <NavLink to="/products/category/fashion"
              className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
              <p>FASHION</p>
            </NavLink>
            <NavLink to="/products/category/exclusive"
              className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
              <p>EXCLUSIVE</p>
            </NavLink>

          </Slider>

        </div>
      )}

    </motion.div>

  );
}