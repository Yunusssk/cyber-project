// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Pagination from './Pagination';
import './Smartphones.css';
import ProductCard from "../../HomePage/ProductCard.jsx";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// eslint-disable-next-line no-unused-vars
import Button from '@mui/material/Button';

const Smartphones = () => {
    const [smartphones, setSmartphones] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9;
    const [selectedCategories, setSelectedCategories] = useState([]); // Seçilen kategoriler
    const [categories, setCategories] = useState([]); // Kategorileri saklamak için state

    useEffect(() => {
        // API çağrısı
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:3000/smartphones`);
            const data = await response.json();
            setSmartphones(data);
            // eslint-disable-next-line no-unused-vars
            const uniqueCategories = Array.from(new Set(data.map(product => product.category)));
            setCategories(uniqueCategories);
        };
        fetchProducts();
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter((c) => c !== category)
                : [...prevSelected, category]
        );
    };

    const filterProductsByCategory = (products, selectedCategories) => {
        if (selectedCategories.length === 0) {
            return products; // Tüm ürünleri döndür
        } else {
            return products.filter(product => selectedCategories.includes(product.category)); // Seçilen kategorilere göre ürünleri filtrele
        }
    };

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const filteredProducts = filterProductsByCategory(smartphones, selectedCategories);
    const offset = currentPage * itemsPerPage;
    const currentPageData = filteredProducts.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <>
            <div className="SmartphonesBreadcrumbs">
                <Link className="CatalogLink" to='/'>Home</Link>
                <img className="CatalogIcon" src="../src/assets/images/Arrow.png" />
                <Link className="CatalogLink" to='/catalog'>Catalog</Link>
                <img className="CatalogIcon" src="../src/assets/images/Arrow.png"/>
                <Link className="CatalogLink" to='/catalog/smartphones'>Smartphones</Link>
            </div>
            <div className="Content">
                <div className="filters">
                    <input className="filterSearch" type="text" />
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Categories
                        </AccordionSummary>
                        <AccordionDetails>
                            {categories.map((category) => (
                                <div className="filterActive" key={category}>
                                    <input className="filterCheckbox"
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                    />
                                    <label>
                                        {category}
                                    </label>
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel2-header"
                        >
                            Battery capacity
                        </AccordionSummary>
                        <AccordionDetails>
                            {categories.map((category) => (
                                <div className="filterActive" key={category}>
                                    <input className="filterCheckbox"
                                           type="checkbox"
                                           checked={selectedCategories.includes(category)}
                                           onChange={() => handleCategoryChange(category)}
                                    />
                                    <label>
                                        {category}
                                    </label>
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel1-header"
                        >
                            Built-in memory
                        </AccordionSummary>
                        <AccordionDetails>
                            {categories.map((category) => (
                                <div className="filterActive" key={category}>
                                    <input className="filterCheckbox"
                                           type="checkbox"
                                           checked={selectedCategories.includes(category)}
                                           onChange={() => handleCategoryChange(category)}
                                    />
                                    <label>
                                        {category}
                                    </label>
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="SmartphonesProductPart">
                    <div className="SmartphonesProductPartMap">
                        {currentPageData.map((smartphones) => (
                        <ProductCard key={smartphones.id} id={smartphones.id} image={smartphones.image} title={smartphones.title} price={smartphones.price} />
                    ))}
                    </div>

                    <div className="SmartphonesProductPartPagination">
                        <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Smartphones;
