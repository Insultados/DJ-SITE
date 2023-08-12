import React from "react";
import classes from './Main.module.css'
import facade from './images/png.png'
import { Link } from "react-scroll";
import { Slide, Fade } from "react-awesome-reveal";

const Main = () => {

    return (
        <div className={classes.page_container}>
            <div className={classes.page_content}>
                <Slide>
                    <h1>Фасады для «Ивент»диджеев</h1>
                </Slide>
                <Fade triggerOnce cascade damping={0.25}>
                    <Link activeClass="active" className="about" to="about_head" spy={true} smooth={true} duration={500}><button className={classes.btn_about}>Подробнее</button></Link>
                        <Link activeClass="active" className="contact_us" to="contact_head" spy={true} smooth={true} duration={500}><button className={classes.btn_contact}>Оставить заявку</button></Link>
                        </Fade>
                    </div>
                    <div className={classes.page_photo}>
                        <img src={facade} alt="facade" />
                    </div>
            </div>
            );
}

            export default Main;