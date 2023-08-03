import React, { useEffect, useState } from 'react';
import './pagination.scss';
import ReactPaginate from 'react-paginate';

function Items({searchResult}) {
   
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;
  
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;            
        setCurrentItems(searchResult.slice(itemOffset, endOffset));    
       setPageCount(Math.ceil(searchResult.length / itemsPerPage));      
    }, [itemOffset, itemsPerPage, searchResult])
  
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % searchResult.length;
        setItemOffset(newOffset);
    };

    return (
        <>
         <section className="blogs">
        {currentItems.map((el, index) => (
          <div className="blog" key={index}>
            <img src={el.image} alt="photo" />
            <div className='textBlog'>
              <p className='titleBlog'>{el.title}</p> 
              <p className='blog-text'>{el.text}</p>   
              <a href="#">{el.learn}</a>
            </div>
          </div>
        ))}
      </section>              
            <ul className='pagination'>              
                <ReactPaginate
                      breakLabel="..."
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={6}
                      pageCount={pageCount}
                      previousLabel="< "
                      renderOnZeroPageCount={null}
                      pageLinkClassName="page-item"
                      containerClassName="pagination"
                      activeClassName="page-active"
                      previousLinkClassName="page-prev"
                      nextLinkClassName="page-next"
                />
            </ul>
        </>
    );
}

export default Items;