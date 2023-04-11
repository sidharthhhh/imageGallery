import React, { useState } from 'react'
import Gallery from '@/components/Gallery';
// import { data } from 'autoprefixer';

const index = () => {

    const [images, setImages] = useState(null);
    const [isShow, setIsShow] = useState(false);


    const Getimage = async () =>{
          const stringData = await fetch("https://picsum.photos/v2/list")
            const json = await stringData.json()
            setImages(json);
    }

  return (
    <>
        <button onClick={()=> setIsShow(!isShow)}>
            {isShow ? "hide" : "show"}
            </button>
        {isShow && <Gallery />}
        <hr />
        <button onClick={Getimage}>get image</button>
        <hr />
        {images ? JSON.stringify(images) : "no images"}
    </>
  )
}

export default index