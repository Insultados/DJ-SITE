import React, { useState } from "react";
import classes from './Products.module.css'
import Card from "../../components/product_card/ProductCard";
import { Fade } from "react-awesome-reveal";
import Modal from "../../components/modal/Modal";
import useFetch from "../../hooks/useFetch";

type ProductProps = {

    productName: string
    setProductName: any
}

const Products = (props: ProductProps) => {

    const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
        setModalActive(true);
    };
    const handleModalClose = () => {
        setModalActive(false);
    };

    const [baseImage, setBaseImage] = useState((prev: any) => prev);


    const [form, setForm] = useState({
        product_name: String,
        product_info: String,
        product_price: String,
    })

    const uploadImage = async (e: any) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    const convertBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const changeHandler = (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
    }



    const url = 'http://localhost:8080/products/'
    const showState = async () => {

        console.log('Submitting form')
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([form.product_name, form.product_info, form.product_price, baseImage])
        }).then(function (response) {
            return response.json()
        })



        console.log('Form submitted.')
        alert('Ваш товар успешно Добавлен')
        window.location.reload()
    }


    const responseData = useFetch(url);
    const [products]: any | any[] = Object.values(responseData)


    return (
        <div className={classes.page_container}>
            <div className={classes.page_head}>
                <h2 className="products_head" >Наши товары</h2>
            </div>
            <div className={classes.page_content}>
                <Fade className={classes.product_card_list} triggerOnce cascade>
                    {(Array.isArray(products))
                        ? products.map((e: any | any[], index: number) => (
                            (products !== null && e !== '')
                                ?
                                <Card contactProductName={props.productName} setContactProductName={props.setProductName} key={index} product_name={products[products.length - 1 - index][0]} product_info={products[products.length - 1 - index][1]} product_price={products[products.length - 1 - index][2]} product_image={products[products.length - 1 - index][3]} />
                                : <p>На данный момент нет доступных товаров</p>

                        ))
                        : <></>
                    }
                </Fade>
                {isModalActive && (
                    <Modal title="Добавить новый товар" onClose={handleModalClose}>
                        <form onSubmit={showState} method="get" className={classes.add_product__form}>
                            <div className={classes.add_product_form}>
                                <label > Название товара: </label>
                                <input
                                    onChange={changeHandler}
                                    type="text"
                                    name="product_name"
                                    id="product_name"
                                    required
                                />
                            </div>
                            <div className={classes.add_product_form}>
                                <label> Информация о товаре: </label>
                                <input
                                    onChange={changeHandler}
                                    type="text"
                                    name="product_info"
                                    id="product_info"
                                    required
                                />

                            </div>
                            <div className={classes.add_product_form}>
                                <label> Цена товара: </label>
                                <input
                                    onChange={changeHandler}
                                    type="text"
                                    name="product_price"
                                    id="product_price"
                                    required
                                />

                            </div>
                            <div className={classes.add_product_file}>
                                <label> Изображение: </label>
                                <input
                                    type="file"
                                    onChange={(e) => {
                                        uploadImage(e);
                                    }}
                                    name="product_image"
                                    id="product_image"
                                    required
                                />

                            </div>
                            <div className={classes.add_product_form_button}>
                                <input type="button" value="Добавить" onClick={showState} />
                            </div>
                        </form>
                    </Modal>
                )}
            </div>

            {window.location.pathname === '/admin' &&
                (
                    <button className={classes.add_product_button} type="button" onClick={handleModalOpen} >
                        Добавить товар
                    </button>
                )}
        </div>
    );
}

export default Products;