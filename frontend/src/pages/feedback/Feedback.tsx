import React from "react";
import classes from './Feedback.module.css'
import FeedbackCard from "../../components/feedback_card/FeedbackCard";
import { Fade, Slide } from "react-awesome-reveal";

const Feedback = () => {

    return (
        <div className={classes.page_container}>
            <div className={classes.page_head}>
                <h2>Отзывы</h2>
            </div>
            <div className={classes.page_content}>
                <h2>Оставьте свой отзыв!</h2>
                <form action="" method="get" className={classes.feedback__form}>
                    <Fade damping={0.25} triggerOnce cascade>
                        <div className={classes.feedback_form}>
                            <label >Ваше имя </label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className={classes.feedback_form}>
                            <label>Название товара </label>
                            <input type="text" name="text" id="text" required />
                        </div>
                        <div className={classes.feedback_form}>
                            <label className={classes.textarea_label}>Ваш отзыв о товаре</label>
                            <textarea name="text" id="text" required />
                        </div>
                    </Fade>
                    <Slide damping={0.25} triggerOnce cascade direction={"up"} >
                        <div className={classes.feedback_button}>
                            <input type="submit" value="Отправить" />
                        </div>
                    </Slide>
                </form>

                <br />
                <br />

                <h2>Наши отзывы!</h2>
                <Fade triggerOnce cascade damping={0.25}>
                    <FeedbackCard name={'Мария'} product={'Фассад Бифлекс'} feedback={'Отличный товар! Хорошее качество и своевременная доставка!'} />
                    <FeedbackCard name={'Елена'} product={'Фассад Бифлекс'} feedback={'Отличный товар! Хорошее качество и своевременная доставка!'} />
                </Fade>
            </div>
        </div>
    );
}

export default Feedback;