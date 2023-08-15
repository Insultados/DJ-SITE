import React from 'react';
import classes from './FeedbackCard.module.css'




type CardProps = {
  name: string
  product: string
  feedback: string
  token?: string
}

function FeedbackCard(props: CardProps) {

  const deleteReview = async (event: any) => {


    const url = 'http://localhost:8080/reviews/'
    fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: props.token, name: event.currentTarget.name })
    }).then(function (response) {
      return response.json()
    })

    alert('Отзыв успешно удален!')
    window.location.reload()

  }

  return (

    <form action="" method="get" className={classes.reviews}>
      {window.location.pathname === '/admin' &&
        (
          <button onClick={deleteReview} name={props.name} className={classes.delete_review_button} type="button" >
            Удалить отзыв
          </button>
        )}
      <div className={classes.feedback_form}>
        <input key={props.name} readOnly placeholder={props.name} type="text" name="name" id={"name_" + props.name} required />
      </div>
      <div className={classes.feedback_form}>
        <input key={props.product} readOnly placeholder={props.product} type="text" name="text" id={"product_" + props.product} required />
      </div>
      <div className={classes.feedback_form}>
        <textarea readOnly placeholder={props.feedback} name="text" id={"client_review" + props.product} required />
      </div>
    </form>
  );
}

export default FeedbackCard;
