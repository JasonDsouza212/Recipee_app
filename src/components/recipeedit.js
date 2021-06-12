import React,{useContext} from 'react'
import Recipeingredientedit from './recipeingredientedit'
import {ResipeContext} from './App'
import nextId from "react-id-generator";

export default function Recipeedit({recipe}) {
    const {handelRecipeChange,handelRecipeSelect}=useContext(ResipeContext)

    function handelChange(changes){
       handelRecipeChange (recipe.id,{...recipe,...changes})
    }

       function handelIngredientChange(id,ingridient){
        const newIngridients=[...recipe.ingridient]
        const index=newIngridients.findIndex(i=> i.id === id)
        newIngridients[index]=ingridient
        handelChange({ingridient:newIngridients})
       }
       function handelIngredientAdd(){
         const newIngredient={
             id:nextId(),
             name:'',
             amount:''
         }
         handelChange({ingridient:[...recipe.ingridient,newIngredient]})
       }
       function handelIngredientDelete(id){
           handelChange({ingridient:recipe.ingridient.filter(i=>i.id!==id)})
       }
    
    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button onClick={()=>handelRecipeSelect(undefined)} className="btn recipe-edit__remove-button">&times;</button>
            </div>
            
            <div className="recipe-edit__details-grid">
                <label htmlFor="name" className="recipe-edit__label">Name</label>
                <input type="text" onInput={e=>handelChange({name:e.target.value})} value={recipe.name} name="name" id="name"  className="recipe-edit__input"></input>
                <label htmlFor="cooktime"  className="recipe-edit__label">Cook time</label>
                <input type="text" onInput={e=>handelChange({cooktime:e.target.value})}  value={recipe.cooktime} name="cooktime" id="cooktime"  className="recipe-edit__input"></input>
                <label htmlFor="Servings"  className="recipe-edit__label">Servings</label>
                <input type="number" onInput={e=>handelChange({servings:parseInt(e.target.value)||" "})}  value={recipe.servings} min="1" name="Servings" id="Servings"  className="recipe-edit__input"></input>
                <label htmlFor="instructions"  className="recipe-edit__label">Instructions</label>
                <textarea name="instructions" onInput={e=>handelChange({instructions:e.target.value})}  id="instructions" cols="30" rows="10" value={recipe.instructions}  className="recipe-edit__input"></textarea>
                 
                <label className="recipe-edit__label" >Ingredients</label>
                <br/>
                <div className="recipe-edit__ingredient-grid">
                    <div>Name</div>
                    <div>amount</div>
                    <div></div>
                    {recipe.ingridient.map(ingridient =>(
                               <Recipeingredientedit  key={ingridient.id} 
                               handelIngredientDelete={handelIngredientDelete}
                                handelIngredientChange={handelIngredientChange} 
                                ingridient={ingridient}/>
                      ))}
                </div >
                <br/>
                <div className="recipe-edit__add-ingredient-btn-container">
                 <button onClick={()=>handelIngredientAdd()} className="btn btn--primary">Add Ingredients</button>
                 </div>
            </div>
        </div>
    )
}
