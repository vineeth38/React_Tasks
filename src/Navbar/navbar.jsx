import { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
 function Navbar(){
    return <div id='navbar'>
        <h1 style={{color:"dodgerblue"}}>Vishal Mart</h1>
        <div id='nav_links'>
         <Link to="/Products"><span>Products</span></Link>
         <Link to="/Recipes"><span>Recipes</span></Link>
         <Link to="/Users"><span>Users</span></Link>
        </div>
    </div>
 }
 export default Navbar;