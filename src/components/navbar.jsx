import React from 'react'
import { Link } from 'react-router-dom'
import Landpage from '../page/landpage'

function Navbar() {
  return (
   <nav>
    <ul>
        <li>
            <Link to= '/'>Home</Link>
        </li>

    </ul>
   </nav>
    
  )
}

export default Navbar