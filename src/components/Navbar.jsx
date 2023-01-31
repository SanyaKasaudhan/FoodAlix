import React from 'react'
import logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <div>
      {/* Navbar start */}
      <h1 className='bg-slate-700'>hi</h1>
      <h2 className='text-7xl'>Hello sanya</h2>
     <nav>
      <img src={logo} alt="logo" className='h-4 w-4'/>
      <ul>
        <li>Home</li>
        <li>About Us</li>
      </ul>
     </nav>
      {/* Navbar ends */}
    </div>
  )
}

export default Navbar