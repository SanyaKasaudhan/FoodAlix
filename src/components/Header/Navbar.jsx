import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.jpg'
const Navbar = () => {
  return (
    <>
      {/* Navbar start */}
     <nav className='bg-orange-200'>
      <div className='flex'>
      <img src={logo} alt="logo" className='w-24 h-24' />
      <ul className='flex flex mt-8 ml-80 space-x-12 '>
        <Link to="/">Home</Link>
        <Link to="/about">About </Link>
        
        <li className='cursor-pointer hover:h-7 rounded-md hover:bg-orange-300'>About Us</li>
        <li className='cursor-pointer hover:h-7 rounded-md hover:bg-orange-300'>Contact Us</li>
      </ul>
      <div className='flex flex mb-7 ml-80 space-x-12 '>
        <button className='mt-8 ml-40 space-x-12 '>Sign In</button>
        <button  className='mt-8 ml-40 space-x-12 '>Register</button>
      </div>
      </div>
     </nav>
     
      {/* Navbar ends */}
    </>
  )
}

export default Navbar