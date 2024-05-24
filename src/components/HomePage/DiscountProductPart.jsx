// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
// eslint-disable-next-line no-unused-vars
import {Link} from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import './DiscountProductPart.css'

const DiscountProductPart = () => {
    const [discountProducts, setDiscountProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // API'den veri çekme işlemini gerçekleştirecek olan useEffect kullanalım
    useEffect(() => {
        const fetchDiscountProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3000/products?category=discount-part');
                const data = await response.json();
                setDiscountProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching discount products:', error);
                setLoading(false);
            }
        };

        fetchDiscountProducts();
    }, []); // Boş dependency array kullanarak sadece bir kere çağrılmasını sağlayalım

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <>
            <div className="discountPart">
                <p className="discountTitle">Discounts up to -50%</p>
                <div className="discountProductPart">
                    {discountProducts.map(product => (
                        <ProductCard key={product.id} image={product.image} title={product.title} price={product.price}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default DiscountProductPart;