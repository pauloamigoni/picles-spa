import styled from "./Pagination.module.css"


interface IPagination {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}


export function Pagination({currentPage, totalPages, onPageChange}: IPagination) 
{
const pageNumber = Array.from({length: totalPages}, (_, i) => i + 1)

    return <nav>
        <ul className={styled.pagination}>
            {
                pageNumber.map((number) => (
                    <li key={number} className={`${currentPage === number ? styled.active : null}`}>
                        <button onClick={() => onPageChange(number)}>{number}</button>
                    </li>
                ))
            }
        </ul>
        </nav>
}   