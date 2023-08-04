import React from "react";
import classes from './Footer.module.css'
import phone from './images/phone.png'
import email from './images/email.png'
import address from './images/address.png'

const Footer = () => {

    return (
        <footer className={classes.footer}>
            <div className={classes.contact_list}>
                <div className={classes.contact_item}>
                    <p>Телефон</p>
                    <img src={phone} alt="phone" />
                </div>
                <div className={classes.contact_item}>
                    <p>Адрес</p>
                    <img src={address} alt="address" />
                </div>
                <div className={classes.contact_item}>
                    <p>E-mail</p>
                    <img src={email} alt="email" />
                </div>
            </div>
            <div className={classes.address}>
                <p>Пермь, улица Максима Горького, 62<br />
                р-н Свердловский
                </p>
            </div>
        </footer>
    );
}

export default Footer;