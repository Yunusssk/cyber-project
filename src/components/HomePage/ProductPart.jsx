// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './ProductPart.css';
import ProductCard from "./ProductCard.jsx";

// Buton vurgusunu ayarlayan fonksiyon
function highlightButton(event) {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove("highlight", "default-button"));
    event.target.classList.add("highlight");
}

const ProductPart = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProductsByCategory = async (category) => {
        setLoading(false);
        try {
            const response = await fetch(`http://localhost:3000/products?category=${category}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    // Başlangıçta 'new-arrival' kategorisini çekelim
    useEffect(() => {
        fetchProductsByCategory('new-arrival');
        const defaultButton = document.querySelector('.default-button');
        if (defaultButton) {
            defaultButton.classList.add("highlight");
        }
    }, []);

    const showBestSellers = (event) => {
        highlightButton(event);
        fetchProductsByCategory('best-seller');
    };

    const showNewArrivals = (event) => {
        highlightButton(event);
        fetchProductsByCategory('new-arrival');
    };

    const showFeaturedProducts = (event) => {
        highlightButton(event);
        fetchProductsByCategory('featured-products');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ProductPart">
            <div>
                <button onClick={showNewArrivals} className="button default-button">New Arrival</button>
                <button onClick={showBestSellers} className="button">Bestseller</button>
                <button onClick={showFeaturedProducts} className="button">Featured Products</button>
            </div>
            <div className="product">
                {product.map(product => (
                    <ProductCard key={product.id} id={product.id} image={product.image} title={product.title} price={product.price} />
                ))}
            </div>

        </div>
    );
}

export default ProductPart;





























