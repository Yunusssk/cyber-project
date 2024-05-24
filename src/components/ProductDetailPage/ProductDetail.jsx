// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductCard from '../HomePage/ProductCard.jsx'
import {useParams} from "react-router-dom";

const ProductDetail = () => {

    const { id } = useParams();

    return(
        <>
            <ProductCard />
            <p className="yunus">ÜRÜN ID: {id}</p>
            <div>LNDKAFMALFKNAMDADADADALNDK</div>



        </>
    )
}
export default ProductDetail;