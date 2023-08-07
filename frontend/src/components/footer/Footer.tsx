import React from "react";
import classes from './Footer.module.css'
import phone from './images/phone.png'
import email from './images/email.png'
import address from './images/address.png'
import { useState } from "react"
import Modal from "../Modal/Modal";

const Footer = () => {


    const [form, setForm] = useState({
        login: '',
        password: '',
    })

    const changeHandler = (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
    }

    const showState = () => {
        console.log(form)
    }

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
                <button className="button" type="button" onClick={handleModalOpen}>
                    Войти
                </button>
                {isModalActive && (
                    <Modal title="Войти в аккаунт" onClose={handleModalClose}>
                        <form action="" method="get" className={classes.aouth__form}>
                            <div className={classes.aouth_form}>
                                <label > Логин: </label>
                                <input onChange={changeHandler} type="login" name="login" id="login" required />
                            </div>
                            <div className={classes.aouth_form}>
                                <label> Пароль: </label>
                                <input onChange={changeHandler} type="password" name="password" id="password" required />
                            </div>
                            <div className={classes.aouth_button}>
                                <input type="button" value="Войти" onClick={showState} />
                            </div>
                        </form>
                    </Modal>
                )}
            </div>
        </footer>
    );
}

export default Footer;