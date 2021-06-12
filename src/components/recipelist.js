import React,{useContext} from 'react'
import Recipe from './recipe'
import {ResipeContext} from './App'

export default function Recipelist({recipe}) {
    const {handelRecipeAdd}=useContext(ResipeContext)
    return (
        <>
        <div className="recipe-list">
        <div>
            {recipe.map(res=>{
                return<Recipe key={res.id} {...res}
                 />
            })}
        </div>
            <div className="recipe-list__add-recipe-btn-container">
                <button onClick={handelRecipeAdd} className="btn btn--primary">Add recipe</button>
            </div>
        </div>
        
        </>
    )
}
