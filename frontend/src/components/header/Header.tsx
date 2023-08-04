import React from "react";
import classes from './Header.module.css'
import logo from '../../images/logo.png'
import { Link } from "react-scroll";

const Header = () => {


    return (
        <header className={classes.header} >
            <div className={classes.header_logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={classes.header_nav}>
                <div className={classes.nav}>
                    <Link activeClass="active" className="about" to="about_head" spy={true} smooth={true} duration={500}><a href="#about">О компании</a></Link>
                    <Link activeClass="active" className="products" to="products_head" spy={true} smooth={true} duration={500}><a href="#products">Товары</a></Link>
                    <Link activeClass="active" className="contact_us" to="contact_head" spy={true} smooth={true} duration={500}><a href="#contact_us">Оставить заявку</a></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;