import React, { useState } from 'react';
import styles from './navbar2.module.css';
import { Button, Carousel } from "antd"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Slider = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => prevIndex - 1);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => prevIndex + 1);
    };
    return (
        <div>
            <Button onClick={handlePrev} disabled={activeIndex === 0}>
                <LeftOutlined />
            </Button>
            <ul className="slider-navbar">
                {slides.map((slide, index) => (
                    <li
                        key={index}
                        className={index === activeIndex ? 'active' : ''}
                    >
                        <NavLink to="/products/category/album" 
                            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                            ALBUM
                        </NavLink>
                        <NavLink to="/products/category/photobook"
                            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                            PHOTOBOOK
                        </NavLink>
                        <NavLink to="/products/category/concert"
                            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                            CONCERT
                        </NavLink>
                        <NavLink to="/products/category/fashion"
                            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                            FASHION
                        </NavLink>
                        <NavLink to="/products/category/exclusive"
                            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                            EXCLUSIVE
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Button onClick={handleNext} disabled={activeIndex === slides.length - 1}>
                <RightOutlined />
            </Button>
        </div>
    );
};
export default Slider;