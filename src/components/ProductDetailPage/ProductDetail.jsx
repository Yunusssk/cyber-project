// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import ProductCard from '../HomePage/ProductCard.jsx'
import {useLocation, useNavigate, useParams} from "react-router-dom";

const ProductDetail = () => {

    const { id } = useParams();

    return(
        <>
            <p className="yunus">ÜRÜN ID: {id}</p>
            <div>LNDKAFMALFKNAMDADADADALNDK</div>
            <ProductCard />
        </>
    )
}
export default ProductDetail;