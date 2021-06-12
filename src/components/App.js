import RecipeList from './recipelist'
import '../css/app.css'
import nextId from "react-id-generator";
import Recipeedit from './recipeedit'
import {createContext, useState,useEffect} from 'react';

const ResipeContext=createContext()
const LOCAL_STORAGE_KEY='cookingwithReact.recipes'

function App() {
  const [selectedRecipeId,setSelectedRecipeId]=useState()
 const [recipes,setRecipes]=useState(sample)
 const selectedRecipe=recipes.find(recipe=>recipe.id===selectedRecipeId)
 const recipeContextValue={
   handelRecipeAdd,
   deleteres,
   handelRecipeSelect,
   handelRecipeChange
 }
 function handelRecipeSelect(id){
   setSelectedRecipeId(id)
 }

function handelRecipeChange(id,recipe){
  const newRecipes=[...recipes]
  const index=newRecipes.findIndex(r=> r.id===id)
  newRecipes[index]=recipe
  setRecipes(newRecipes)
}
 useEffect(()=>{
  const recipeJson=localStorage.getItem(LOCAL_STORAGE_KEY)
  if(recipeJson!=null) setRecipes(JSON.parse(recipeJson))
 },[])
 useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
 },[recipes])


 function handelRecipeAdd(){
  const newRecipe={
    id:nextId(),
    name:"",
    servings:1,
    cooktime:"",
    instructions:'',
    ingridient:[{
      id:nextId(),
      name:'',
      value:''
    }]
  }
  setSelectedRecipeId(newRecipe.id)
  setRecipes([...recipes,newRecipe])
}
function deleteres(id){
  if(selectedRecipeId!= null && selectedRecipeId===id){
    selectedRecipeId(undefined)
  }
  setRecipes(recipes.filter(res=>res.id !== id))
}
  return (
  
    <ResipeContext.Provider value={recipeContextValue}>
   <RecipeList 
   
    recipe={recipes}
   />
   {selectedRecipe &&<Recipeedit recipe={selectedRecipe}/>}
    </ResipeContext.Provider>
  );
}


const sample=[{
  id:1,
  name:'Plain Chicken',
  servings:3,
  cooktime:"1:45",
  instructions:"1.Put salt on Chice \n 2.put Chicken in oven \n 3.eat chickediv",
  ingridient:[{
    id:1,
    name:"Jason",
    amount:"2kg"
  },],

},
{
  id:2,
  name:'Pork',
  servings:2,
  cooktime:"1:48",
  instructions:"1.Put salt on Chice \n 2.put Chicken in oven \n 3.eat chickediv",
  ingridient:[{
    id:2,
    name:"Mazan",
    amount:"5kg"
  }]

}]

export default App;
export{ResipeContext};
