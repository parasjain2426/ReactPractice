import React, { useEffect, useState } from 'react';

const Pagination = ()=>{
    let pages = [];
    const contentPerPage = 50;
    const [currentPage,setCurrentPage] = useState(1);
    const [totalContent, setTotalContent] = useState([]);

    useEffect(()=>{
        const loadData = ()=>{
            const http = new XMLHttpRequest();
            http.open('Get','https://jsonplaceholder.typicode.com/comments',true);
            http.onload = ()=>{
                setTotalContent(JSON.parse(http.response));
            }
            http.send();
        }
        loadData();
    },[]);
    
    const totalPages = Math.ceil(totalContent.length/contentPerPage);
    const upperLimit = Math.ceil(currentPage*contentPerPage);
    const lowerLimit = Math.ceil(upperLimit-contentPerPage);
    const currentContent = totalContent.slice(lowerLimit,upperLimit);

    const changePage = (pageNumber)=>{
        if(pageNumber<=totalPages && pageNumber>=1){
            setCurrentPage(pageNumber);
        }
    }

    for(let i=1;i<=totalPages;i++){
        pages = [...pages,i];
    }

    return (
       <div>
           <ul>
               {currentContent.map(content=>(
                   <li key={content.id}>{content.name}</li>
               ))}
           </ul>
           <ul style={{display:'flex',listStyle:'none',margin:'20px auto',width:'max-content'}}>
               <button onClick={()=>changePage(currentPage-1)}>
                    <li>Prev</li>
               </button>
               {pages.map(
                   page=>(
                       <button onClick={()=>changePage(page)} style={{padding:'10px',width:'50px',backgroundColor:page===currentPage?'yellow':''}} key={page}>
                           <li key={page}>{page}</li>
                       </button>
                   )
               )}
               <button onClick={()=>changePage(currentPage+1)}>
                    <li>Next</li>
               </button>
           </ul>
           <div>Page ends</div>
       </div>
    );
}

export default Pagination;