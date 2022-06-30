import React from "react";
import { ButtonPage, Page, LinkButton } from "./StyledPaginate";

export default function Paginate({ total, petsPerPage, paginateFunction}){
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total/petsPerPage); i++) { // 40/12 = 3.3 --> 4
        pageNumbers.push(i)        
    }

    return(
        <Page>
                {pageNumbers.length && pageNumbers.map(page =>{
                    return (
                        <ButtonPage key={page} onClick={()=>paginateFunction(page)} id={page}>
                            <LinkButton  href='#'>{page}</LinkButton>
                        </ButtonPage>
                    )
                })}
        </Page> 
    )
}

