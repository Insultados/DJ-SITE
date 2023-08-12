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
                    <Link activeClass="active" className="to_about" to="about_head" spy={true} smooth={true} duration={500}><p>О компании</p></Link>
                    <Link activeClass="active" className="to_products" to="products_head" spy={true} smooth={true} duration={500}><p>Товары</p></Link>
                    <Link activeClass="active" className="to_contact_us" to="contact_head" spy={true} smooth={true} duration={500}><p>Оставить заявку</p></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;