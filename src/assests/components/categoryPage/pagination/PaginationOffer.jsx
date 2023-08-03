import React, { useEffect, useState } from 'react';
import './paginationOffer.scss';
import ReactPaginate from 'react-paginate';

function PaginationOffer({ isOffers }) {

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(isOffers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(isOffers.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, isOffers])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % isOffers.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="offers">
        {currentItems.map((el, index) => (
          <div className="offer" key={index}>
            <img src={el.image} alt="photo" />
            <div className='offer-text'>
              <p>{el.category}</p>
              <p className='title-offer'>{el.title}</p>
              <p className='text-offer'>{el.description}</p>
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

export default PaginationOffer;