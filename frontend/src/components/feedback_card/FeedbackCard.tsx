import React from 'react';
import classes from './FeedbackCard.module.css'


type CardProps = {
  name: string
  product: string
  feedback: string
}

function FeedbackCard(props:CardProps) {
  return (
    <form action="" method="get" className={classes.reviews}>
      <div className={classes.feedback_form}>
        <input key={props.name} readOnly placeholder={props.name} type="text" name="name" id={"name_"+props.name} required />
      </div>
      <div className={classes.feedback_form}>
        <input key={props.product} readOnly placeholder={props.product} type="text" name="text" id={"product_"+props.product} required />
      </div>
      <div className={classes.feedback_form}>
        <textarea readOnly placeholder={props.feedback} name="text" id="text" required />
      </div>
    </form>
  );
}

export default FeedbackCard;
