import React from "react";
import classes from './Feedback.module.css'
import FeedbackCard from "../../components/feedback_card/FeedbackCard";
import { Fade, Slide } from "react-awesome-reveal";
import { useState } from "react";

const Feedback = () => {


    const [form, setForm] = useState({
        name: '',
        product_name: '',
        review: ''
      })
    
      const changeHandler = (event: React.FormEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
      }

      const showState = () => {
        console.log(form)
      }
    


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
                            <input onChange={changeHandler} type="text" name="name" id="name" required />
                        </div>
                        <div className={classes.feedback_form}>
                            <label>Название товара </label>
                            <input onChange={changeHandler} type="text" name="product_name" id="product_name" required />
                        </div>
                        <div className={classes.feedback_form}>
                            <label className={classes.textarea_label}>Ваш отзыв о товаре</label>
                            <textarea onChange={changeHandler} name="review" id="review" required />
                        </div>
                    </Fade>
                    <Slide damping={0.25} triggerOnce cascade direction={"up"} >
                        <div className={classes.feedback_button}>
                            <input type="button" value="Отправить" onClick={showState} />
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