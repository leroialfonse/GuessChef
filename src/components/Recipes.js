import React, { useState } from 'react';
import axios from 'axios';
import RecipeItem from './RecipeItem';
import '../index.css';


// const apiKey = '350ed6a1f4c84c85ba247a1161be2077'
// Got all my api keys just in the open. SMH.

const Recipes = () => {
    // create functional state
    const [query, setQuery] = useState('');
    const [recipeData, setRecipeData] = useState([]);

    // GET REQUEST TO RECIEVE RECIPES
    const getRecipes = (e) => {
        // Prevent default submit action bahh this drove me crazy for a little 
        e.preventDefault();
        //Initialize variable so value assigned is done each get
        let recipeData;
        //Make get request using axios with query state object
        // fetch(`https://api.spoonacular.com/recipes/search?apiKey=350ed6a1f4c84c85ba247a1161be2077&query=${query}&instructionsRequired=true&number=6`)
        axios.get(`https://api.spoonacular.com/recipes/search?apiKey=ad25a893b45f4e808dc312fa5cf225fa&query=${query}&instructionsRequired=true&number=6`)

            // ad25a893b45f4e808dc312fa5cf225fa
            .then(res => {
                // res.json()
                // console.log(res)
                // //Assign response value to variable
                recipeData = res.data.results
                // //Set response to recipes state
                setRecipeData(recipeData)
            })
        // .then(data => console.log(data))
    }

    return (
        <div className="App" style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '15vh' }}>
                <h1 style={fontStyle}>HAANGRY</h1>
                {/* Pass in event as arg to preventDefault action of form submit */}
                <form style={{ marginTop: '10vh' }} onSubmit={(e) => getRecipes(e)}>
                    <input style={inputStyles} type="text" placeholder="Steak, Mediterranean, green, etc..." onChange={(e) => setQuery(e.target.value)} />
                    <div style={{ margin: '1em' }}>
                        <button className="btn btn-large" style={btnStyle} type='submit'>Feed Me!</button>
                    </div>
                </form>
            </div>
            <div>
                {recipeData.map((rec) => (
                    <RecipeItem key={rec.id} obj={rec} />
                ))}
                {/* <RecipeItem key={recipeData.id} obj={recipeData} /> */}
                {/* {recipeData.title} */}

            </div>
        </div>
    );
}

const btnStyle = {
    backgroundColor: '#19B5FE'
}

const fontStyle = {
    fontSize: '5em',
    color: 'white',
    letterSpacing: '5px',
    textShadow: '-2px 2px 1px rgba(150, 150, 150, 1)'
}

const inputStyles = {
    width: '40%',
    padding: '0.6em',
    fontSize: '1.4em',
    backgroundColor: 'black',
    color: 'azure'
}

export default Recipes;