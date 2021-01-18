import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example" className='mt-5'>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a onClick={(e) => currentPage === 1 ? paginate(pageNumbers.length, e) : paginate(--currentPage, e)} className="page-link" href="!#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <i onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </i>
                    </li>
                ))}
                <li className="page-item">
                    <a onClick={(e) => currentPage === pageNumbers.length ? paginate(1, e) : paginate(++currentPage, e)} className="page-link" href="!#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination
