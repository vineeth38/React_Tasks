import { useState } from 'react'
import './recipes.css'
function Recipe(recipe){
    return <div className='recipe'>
        <img src={recipe.RDetails.image} alt=""/>
        <h3>{recipe.RDetails.name}</h3>
        <span>rating :{recipe.RDetails.rating}</span>
        <span>Meal Type :{recipe.RDetails.mealType[0]}</span>
    </div>
}
export default Recipe;