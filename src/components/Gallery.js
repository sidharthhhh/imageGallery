import React from 'react'
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import css from '../styles/Gallery.module.css'

const Gallery = () => {

  const [countpage, setCountpage] = useState(1);
  const [images, setImages] = useState(null);

  const GetImages = async () => {
    const stringdata = await fetch(`https://picsum.photos/v2/list?page=${countpage}&limit=8`);
    const json = await stringdata.json();
    setImages(json);
  }

  useEffect(() => {
    GetImages();
  })

  const handlePageClick = (e) => {
    setCountpage(e.selected + 1)
  }
  return (
    <div>
      <div className={`${css.gg} bg-dark`} >
        {images
          ? images.map((image) => (
            <div key={image.id}>
              <img
                className='w-full'
                src={image.download_url}
                alt=""
              />
              <p>{image.author}</p>
            </div>
          ))
          : "Loading..."}
      </div>
      {/* <button className='mx-4 my-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={() => setCountpage(countpage - 1)}>Prev</button>
      <button className='mx-4 my-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={() => setCountpage(countpage + 1)}>Next</button> */}

      <ReactPaginate
        breakLabel="..."
        nextLabel=">>>"
        onPageChange={handlePageClick}
        pageCount={5}
        previousLabel="<<<"
        className='flex gap-10 bg-red-100 mx-96 text-2xl '
      />
    </div>
  )
}

export default Gallery