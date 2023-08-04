import React from "react";
import classes from './Contact.module.css'
import { Fade, Slide } from "react-awesome-reveal";


const Contact = () => {
    return (
        <div className={classes.page_container}>
            <div className={classes.page_head}>
                <h2 className="contact_head">Оставьте заявку</h2>
            </div>
            <div className={classes.page_content}>
                <form action="" method="get" className={classes.contact__form}>
                    <Fade triggerOnce cascade damping={0.25}>
                        <div className={classes.contact_form}>
                            <label >ФИО </label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className={classes.contact_form}>
                            <label>Номер телефона </label>
                            <input type="phone" name="phone" id="phone" required />
                        </div>
                        <div className={classes.contact_form}>
                            <label>E-mail: </label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className={classes.contact_form}>
                            <label>Название товара: </label>
                            <input type="name" name="name" id="name" required />
                        </div>
                    </Fade>
                    <Slide cascade triggerOnce damping={0.25}>
                    <div className={classes.contact_button}>
                        <input type="submit" value="Отправить" />
                    </div>
                    </Slide>

                </form>

            </div>
        </div>
    );
}

export default Contact;