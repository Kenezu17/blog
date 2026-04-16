import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [open, setOpen]=useState(false)
    const links = ({isActive}) =>
        isActive ? 'text-yellow-400 font-bold': ''
    
  return (

   <nav className=' w-full h-14 bg-white flex justify-between items-center px-4 '>
    <span className='font-bold flex text-lg md:w-fit '>Pilipinas</span>
    <ul className=' hidden text-red-600 md:flex md:pr-200  md:px-100 gap-15'>
        <li> <NavLink to= '/' className={links}>Home</NavLink></li>
        <li><NavLink to= '/blog' className={links}>Blog</NavLink></li>
        <li> <NavLink to= '/about' className={links}>About</NavLink></li>
        <li> <NavLink to= '/contact' className={links}>Contact</NavLink></li>
    </ul>
    <button onClick={()=>setOpen(!open)}className='md:hidden text-black text-2xl'> ☰</button>


    {open &&(
        <ul className='absolute top-14 left-0 w-full bg-red-600 flex flex-col gap-4 p-4 md:hidden'>
        <li> <NavLink onClick={()=>setOpen(false)} to= '/' className={links}>Home</NavLink></li>
        <li><NavLink  onClick={()=>setOpen(false)} to= '/blog' className={links}>Blog</NavLink></li>
        <li> <NavLink  onClick={()=>setOpen(false)} to= '/about' className={links}>About</NavLink></li>
        <li> <NavLink  onClick={()=>setOpen(false)} to= '/contact' className={links}>Contact</NavLink></li>
    </ul>
    )}
   </nav>
    
  )
}

export default Navbar