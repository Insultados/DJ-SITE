import classes from './ProductCard.module.css'

type CardProps = {
  product_name: string
  product_info: string
  product_price: string
  product_image: string
}

const deleteProduct = async (event: any) => {

  const url = 'http://localhost:8080/products/'
  fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event.currentTarget.name)
  }).then(function (response) {
    return response.json()
  })

  alert('Товар успешно удален!')
}

function Card(props: CardProps) {
  return (
    <div className={classes.card}>
      {window.location.pathname === '/admin' &&
        (
          <button onClick={deleteProduct} name={props.product_name} className={classes.delete_product_button} type="button" >
            Удалить товар
          </button>
        )}
      <div className={classes.card_photo}>
        <img src={props.product_image} alt="card_photo" />
      </div>
      <div className={classes.card_info}>
        <h4>{props.product_name}</h4>
        <p>{props.product_info}</p>

      </div>
      <div className={classes.card_button}>
        <button>Стоимость: от {props.product_price} р</button>
      </div>
    </div>

  );
}

export default Card;
