import React from 'react';
import '../Banner/Banner.css';
import Header from '../Header/Header';
import NavMenu from '../NavMenu/NavMenu';
const Banner = () => {
    return (
        <div className="home">
            <NavMenu></NavMenu>
            <Header></Header>
        </div>
    );
};

export default Banner;