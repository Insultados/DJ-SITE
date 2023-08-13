import { Link } from 'react-scroll/modules'
import classes from './ProductCard.module.css'

type CardProps = {
  product_name: string
  product_info: string
  product_price: string
  product_image: string
  contactProductName?:string
  setContactProductName?:any
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
  window.location.reload()
}

function Card(props: CardProps) {
  return (
    <div className={classes.card}>
      {window.location.pathname === '/admin' &&
        (
          <button type="submit" onClick={deleteProduct} name={props.product_name} className={classes.delete_product_button} >
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
        <Link activeClass="active" className="to_contact_us" to="contact_head" spy={true} smooth={true} duration={500}>
          <button onClick={() => {props.setContactProductName(props.product_name); console.log(props.contactProductName)}}>Стоимость: от {props.product_price} р</button>
        </Link>
      </div>
    </div>

  );
}

export default Card;
