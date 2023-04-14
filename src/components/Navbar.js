import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex p-5'>
        <ul className='flex gap-20'>
            <li>Logo icon</li>
            <li>brand name</li>
        </ul>
        <ul className='flex items-center justify-around gap-40'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact us</li>
        <li>Gallery</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar