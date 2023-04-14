import React, { useState } from 'react'
import Gallery from '@/components/Gallery';
import Navbar from '@/components/Navbar';
// import { data } from 'autoprefixer';

const index = () => {


  const [isShow, setIsShow] = useState(true);




  return (
    <>
       <Navbar />
      {/* is buttom pe depend karra haii kii gallery show hogi ya nhi hogiii */}
      <button className='mx-4 my-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={() => setIsShow(!isShow)}>
        {isShow ? "hide" : "show"}
      </button>
      {isShow && <Gallery />}
    </>
  )
}

export default index