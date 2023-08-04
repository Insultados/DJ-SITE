import React from "react";
import classes from './Products.module.css'
import Card from "../../components/product_card/ProductCard";
import { Fade } from "react-awesome-reveal";

let test_card = ["../../../public/images/image13.png", ["Фасад (“Бифлекс” и  “Масло”)", "Размер 200x110 см (разложенный) Три варианта расцветок: белый, коричневый, серый (антрацит)"], '5200']

const Products = () => {

    return (
        <div className={classes.page_container}>
            <div className={classes.page_head}>
                <h2 className="products_head" >Наши товары</h2>
            </div>
            <div className={classes.page_content}>
                <Fade triggerOnce cascade>
                    <Card photo={test_card[0]} info={test_card[1]} price={test_card[2]} />
                    <Card photo={test_card[0]} info={test_card[1]} price={test_card[2]} />
                    <Card photo={test_card[0]} info={test_card[1]} price={test_card[2]} />
                </Fade>
               
            </div>
        </div>
    );
}

export default Products;