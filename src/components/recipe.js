import React,{useContext} from 'react'
import {ResipeContext} from './App'

import IngridientList from './ingridientList'


export default function Recipe(props) {
    const {deleteres,handelRecipeSelect}=useContext(ResipeContext)
    const {id,name,cooktime,servings,instructions, ingridient}=props
    return (
        <div className='recipe'>
            <div className="recipe__header">
                <h1 className="recipe__title">{name}</h1>
                <div>
                    <button onClick={()=>handelRecipeSelect(id)} className="btn btn--primary mr-1">Edit</button>
                    <button onClick={()=>deleteres(id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Cook time</span>
                <span className="recipe__value">{cooktime}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Servings</span>
                <span className="recipe__value">{servings}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Instructions</span>
                <div className="recipe__value recipe__instructions recipe__value--indented">{instructions}</div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Ingredients:</span>
                <div className="recipe__value recipe__value--indented"><IngridientList  ingridient={ ingridient}/>
                </div>
            </div>
        </div>
    )
}
