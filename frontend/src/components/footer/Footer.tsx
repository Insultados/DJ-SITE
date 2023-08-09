import React from "react";
import classes from './Footer.module.css'
import phone from './images/phone.png'
import email from './images/email.png'
import address from './images/address.png'
import { useState } from "react"
import Modal from "../Modal/Modal";
import Login from "../../auth/login/Login";

const Footer = () => {

    const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
        setModalActive(true);
    };
    const handleModalClose = () => {
        setModalActive(false);
    };




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
            <div className={classes.aouth_form_container}>
                {window.location.pathname === '/main' &&
                    (
                        <button className="button" type="button" onClick={handleModalOpen}>
                            Войти
                        </button>
                    )}
                {isModalActive && (
                    <Modal title="Войти в аккаунт" onClose={handleModalClose}>
                        <Login />
                    </Modal>
                )}
            </div>
        </footer>
    );
}

export default Footer;