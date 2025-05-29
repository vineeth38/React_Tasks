import { useState } from 'react'
import RData from './RecipesData'
import Recipe from './Recipe.jsx'
import './recipes.css'
export function Recipes(){
    return <div id='recipes_container'>
        {
            RData.map((recipe)=>{
                return <Recipe RDetails={recipe} />
            })
        }
    </div>
}