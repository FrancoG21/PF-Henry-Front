import React from "react";

export default function Paginate({ total, petsPerPage, paginateFunction}){
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total/petsPerPage); i++) { // 40/12 = 3.3 --> 4
        pageNumbers.push(i)        
    }

    return(
        <div >
            <ul>
                {pageNumbers.length && pageNumbers.map(page =>{
                    return (
                    <li key={page} onClick={()=>paginateFunction(page)} id={page}>
                        <a  href='#'>{page}</a>
                    </li>)
                })}
            </ul>
        </div> 
    )
}

