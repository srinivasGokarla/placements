import React, { useState, useEffect } from "react";
import "./Pagination.css" ;
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

export const Pagination = ({ users, setCurrentUsers }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const setPage = (pageNum) => {
        let newPage = pageNum;
        if (pageNum < 1) {
            newPage = 1
        } else if (pageNum > pageNumbers[pageNumbers.length - 1]) {
            newPage = pageNumbers[pageNumbers.length - 1]
        }
        setCurrentPage(newPage)
    }

    useEffect(() => {
        const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
        setCurrentUsers(currentUsers);
    }, [currentPage, users])


    return (
        <div>
            <span className="inactive" onClick={() => setPage(1)}> <AiOutlineDoubleLeft /> </span>

            <span className="inactive" onClick={() => setPage(currentPage - 1)}> <AiOutlineLeft /> </span>

            {pageNumbers.map(pageNumber => (<span key={pageNumber} className={currentPage === pageNumber ? "active" : "inactive"} onClick={() => setPage(pageNumber)}>{pageNumber}</span>))}

            <span className="inactive" onClick={() => setPage(currentPage + 1)}> <AiOutlineRight/> </span>

            <span className="inactive" onClick={() => setPage(pageNumbers[pageNumbers.length - 1])}> <AiOutlineDoubleRight /> </span>

            {/* <span> <button id="multiple_delete_btn" onClick={handleMultipleDelete}> Delete Selected </button> </span> */}
        </div>
    )
}