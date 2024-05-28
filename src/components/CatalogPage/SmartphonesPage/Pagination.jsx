// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';
// eslint-disable-next-line no-unused-vars
import Navbar from "../../HomePage/Navbar.jsx";


// eslint-disable-next-line react/prop-types,no-unused-vars
const Pagination = ({ pageCount, handlePageChange }) => {
    return(
        <>
            <div className="pagination">
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </>
    )
}
export default Pagination;