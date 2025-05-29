import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Products } from './Products/Products.jsx'
import { Recipes } from './Recipes/Recipes.jsx'
import { Users } from './Users/Users.jsx'
import Navbar from './Navbar/navbar.jsx'
function App() {
  return <div>
    <Navbar />

      <Routes>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Recipes' element={<Recipes />}/>
        <Route path='/Users' element={<Users/>}/>
      </Routes>
  </div>
}

export default App
