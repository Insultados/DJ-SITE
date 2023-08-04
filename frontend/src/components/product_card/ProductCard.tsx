import React from 'react';
import classes from './ProductCard.module.css'
import photo from './images/image13.png'

function Card(props:any) {
  return (
    <div className={classes.card}>
        <div className={classes.card_photo}>
            <img src={photo} alt="card_photo" />
        </div>
        <div className={classes.card_info}>
            <h4>{props.info[0]}</h4>
            <p>{props.info[1]}</p>

        </div>
        <div className={classes.card_button}>
            <button>Стоимость: от {props.price} р</button>
        </div>
    </div>

  );
}

export default Card;
