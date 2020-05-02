import React from 'react';
import './Header.module.css';
import classes from './Header.module.css'
import image1 from '../../assets/images/header1.jpg'
import image2 from '../../assets/images/header2.jpg'
import image0 from '../../assets/images/header0.jpg'

const getImage = () => {
    let i = Math.floor(Math.random() * Math.floor(3));
    switch (i) {
        case 0:
            return image0;
        case 1:
            return image1;
        default:
            return image2;
    }
};

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={getImage()} alt={'some alt'}/>
        </header>
    );
};

export default Header;