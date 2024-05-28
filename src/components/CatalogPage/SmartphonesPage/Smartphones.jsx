// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import Pagination from './Pagination';
import './Smartphones.css'
import ProductCard from "../../HomePage/ProductCard.jsx";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';




const Smartphones = () => {

    // const Accordion = styled(Accordion)({
    //     backgroundColor: '#f5f5f5',
    //     margin: '10px 0',
    // });

    const [products, setProducts] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [currentPage, setCurrentPage] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const itemsPerPage = 9;

    useEffect(() => {
        // Simulated API call
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:3000/smartphones`);
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentPageData = products.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(products.length / itemsPerPage);


    return(
        <>
            <div className="breadcrumbs">
                <Link className="CatalogLink" to='/'>Home</Link>
                <img className="CatalogIcon" src="../src/assets/images/Arrow.png" />
                <Link className="CatalogLink" to='/catalog'>Catalog</Link>
                <img className="CatalogIcon" src="../src/assets/images/Arrow.png"/>
                 <Link className="CatalogLink" to='/catalog/smartphones'>Smartphones</Link>
            </div>
            <div className="Content">
                <div className="filters">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Accordion 1
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            Accordion 2
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            Accordion Actions
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                        <AccordionActions>
                            <Button>Cancel</Button>
                            <Button>Agree</Button>
                        </AccordionActions>
                    </Accordion>
                </div>
                <div className="SmartphonesProductPart">
                    {currentPageData.map((product) => (
                        <ProductCard key={product.id} id={product.id} image={product.image} title={product.title} price={product.price} />
                    ))}
                    <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
                </div>
            </div>
        </>
    )
}
export default Smartphones;