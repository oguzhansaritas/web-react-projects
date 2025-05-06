import './Create.css'
import React, { useRef,useState, useEffect} from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'


export default function Create() {

  const [title, setTitle]= useState('')
  const [method, setMethod]= useState('')
  const [cookingTime, setCookingTime]= useState('')
  const [newIngredient, setNewIngredient]= useState('')
  const [ingredient, setIngredient]= useState([])
  const ingredientInput =useRef(null)
  const history = useHistory()

  const {postData, data, error} = useFetch("http://localhost:3000/recipes", "POST");


  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredient, method, cookingTime: cookingTime + "minutes"})
  }

  {/*add ingedients */}
  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim();

    if(ing && !ingredient.includes(ing)){
      setIngredient(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  //redirect the user when we get data response
  useEffect(() => {
    if(data) {
        history.push('/')
      }
  },[data])



  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input 
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className='ingredients'>
            <input 
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className='btn'>add</button>
          
          </div>
        </label>

        {/*shows the ingredients in the recipe*/}
        <p>Current ingredients: {ingredient.map(i => <em key={i}>{i}, </em>)}</p>
        

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input 
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className='btn'>Submit</button>
      </form>


    </div>
  )
}
