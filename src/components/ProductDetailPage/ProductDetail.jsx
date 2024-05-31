// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
// import ProductCard from '../HomePage/ProductCard.jsx'
// eslint-disable-next-line no-unused-vars
import {Link, useParams} from "react-router-dom";
import './ProductDetail.css'

const ProductDetail = () => {
    const {id, category} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async (loading = setLoading(true)) => {
            loading;
            try {
                let response;
                if (category === 'smartphones') {
                    response = await fetch('http://localhost:3000/smartphones');
                    console.log(response);
                } else {
                    response = await fetch('http://localhost:3000/products');
                    console.log(response);
                }
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                // console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        if (!product) {
            return <div>Loading...</div>;
        }

        return (
            <>

            </>
        )
    });
    export default ProductDetail;