import React from 'react'


export default function Recipeingredientedit({ingridient, handelIngredientChange,handelIngredientDelete}) {
    function handelChange(changes){
        handelIngredientChange(ingridient.id,{...ingridient, ...changes})}
    return (
        <>
        <input  value={ingridient.name} onInput={e=>handelChange({name:e.target.value})} className="recipe-edit__input" type="text" />
        <input   value={ingridient.amount} onInput={e=>handelChange({amount:e.target.value})}   className="recipe-edit__input" type="text" />
        <button onClick={()=>handelIngredientDelete(ingridient.id)} className="btn btn-danger">&times;</button>
        </>
    )
}
