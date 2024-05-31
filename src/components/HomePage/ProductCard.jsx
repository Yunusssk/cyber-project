// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ProductCard.css'
import {Link} from "react-router-dom";

const ProductCard = (props) => {
    // eslint-disable-next-line
    const id = props.id;
    // eslint-disable-next-line
    const image = props.image;
    // eslint-disable-next-line
    const title = props.title;
    // eslint-disable-next-line
    const price = props.price;
    // const detailPath = `/productDetail/${id}`;

    // eslint-disable-next-line react/prop-types
    const product = props.category;
    console.log(product)

    return(
        <>
            <div className="productContainer" key={id}>
                <span className="material-symbols-outlined span">favorite</span>
                <img className="productImage" src={image} />
                <p className="productTitle">{title}</p>
                <p className="productPrice">{price}</p>
                <Link className="productP productButton" to={`/productDetail/${id}`}><p className="writePosition">Buy Now</p></Link>
            </div>
        </>
    )
}
export default ProductCard;