import React from "react";
import classes from './About.module.css'
import { Fade } from "react-awesome-reveal";


const About = () => {

    return (
        <div className={classes.page_container}>
            <div className={classes.page_head}>
                <h2 className="about_head">О компании</h2>
            </div>
            <div className={classes.page_content}>
                <div className={classes.content_about}>
                    <Fade cascade triggerOnce>
                        <p>
                            Наша компания занимается производством фасадов для «Ивент» диджеев уже более <br /> 2 лет. Наши фасады это <br /> находка для мобильного диджея!
                        </p>
                    </Fade>
                    <div className={classes.about_background}></div>
                </div>
                <div className={classes.content_why}>
                    <div className={classes.why_head}>
                        <h3>
                            Почему именно мы?
                        </h3>
                    </div>
                    <div className={classes.why_content}>
                        <ul>
                            <Fade triggerOnce damping={0.4} cascade>
                                <li>Цена=качество.</li>
                                <li> Своевременные сроки отправки.</li>
                                <li> Складная конструкция фасада(складывается «гармошкой»).</li>
                                <li> Материал наполнения ткань «Бифлекс»,прочная и одновременно эластичная.</li>
                                <li> Соединительные петли установлены на заклепки,что обеспечивает прочность и долговечность конструкции.</li>
                            </Fade>
                        </ul>
                    </div >
                </div >

            </div >
        </div >
    );
}

export default About;