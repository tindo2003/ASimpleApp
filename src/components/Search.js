
import React, { useEffect } from 'react'
import axios from 'axios';
import Card from './Card';
import '../App.css'
import './Search.css'
{/* 
1. First i will have a search bar 
2. I will make API calls based on that keyword
3. Display the information on cards
*/}

export default function Search() {
    const [recipes, setRecipe] = React.useState([])
    const [searchQuery, setSearchQuery] = React.useState({
        ing: "",
        counter: ""
    })
    const [formData, setFormData] = React.useState(
        {
            ingredient: "",
            count: 10
        }
    )

    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchQuery((oldValue) => {
            
            if(oldValue.ing != formData.ingredient) {
                return {
                    ...oldValue, ing:formData.ingredient
                }
            } else if(oldValue.counter != formData.ingredient) {
                return {
                    ...oldValue, counter: formData.count
                }
            }
            
        })
    }

    
    const handleChange = (event) => {
        const {name, value, type} = event.target
        setFormData((oldValue) => {
            return (
                {
                    ...oldValue, 
                    [name]: value
                }
            )
        })
        console.log(formData)
        
    }
    
    useEffect(() => {
        GetRecipesTitle()
    },  [searchQuery])


    {/* ............................................*/}
    function GetRecipesTitle() {
        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
            params: {ingredients: formData.ingredient, number: formData.count},
            headers: {
                'X-RapidAPI-Key': '3a0ea5e317msha7d6e84327f9b94p11bffejsn96c57480dc07',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        
        axios.request(options).then(function (response) {
            setRecipe(() => {
                return (
                    response.data
                )
            })
        }).catch(function (error) {
            console.error(error);
        });
        
    }
 



     {/* ............................................*/}

    {/* covert the info into individual card */}
    


    return (
        <div className="search--container">
            <form onSubmit={handleSubmit}>
    
                <div className="search--bar">
                    <label htmlFor="ingredient">Ingredient</label>
                    <input 
                        id="ingredient" 
                        type="text" 
                        name="ingredient"
                        value={formData.ingredient}
                        onChange={handleChange}
                    />
                     <label htmlFor="count">Number of recipes</label>
                    <input 
                        id="count"
                        type="number"
                        name="count"
                        value={formData.count}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <br />
                <button>Submit</button>
            </form>

            <div>
                {recipes.map((recipe) => {
                    return (
                        <Card 
                            key={recipe.id} 
                            title={recipe.title}
                            imageLink={recipe.image}
                            id={recipe.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}