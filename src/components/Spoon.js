import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

// Define the data that will be pulled
// const RECIPES = [
//     { id: 1, title: "Sugar snap/" },
//     { id: 2, title: "Barbeso" },
//     { id: 3, title: "Abraxo/" },

// ]



const Spoon = () => {


    // The function that will be the "useEffect", it goes into the external API to get the data. 
    // const recipesQuery = useQuery({
    //     queryKey: ['recipes'],
    //     queryFn: () => wait(1000).then(() => [...RECIPES]),
    // })

    // {

    //     // Original from tutorial.
    //     // [...RECIPES]),

    //     // my fetch to Spoonacular.
    //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad25a893b45f4e808dc312fa5cf225fa&addRecipeInformation=true&instructionsRequired=true&query=${userInput}`)
    //     fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad25a893b45f4e808dc312fa5cf225fa&addRecipeInformation=true&instructionsRequired=true&query=sugar`)
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data.results)
    //             // setRecipeData(data)
    //         })
    //         .catch(error => {
    //             console.error('Error with fetching the data', error);
    //             // setRecipeData([])
    //         })

    // }, [])

    // })

    // If loading and if Error notices.
    // if (recipesQuery.isLoading) return <h1>Loading recipes..</h1>
    // if (recipesQuery.isError) {
    //     return <pre>{JSON.stringify(recipesQuery.error)}</pre>
    // }

    // A manual time delay to simulate artificial load times.

    // function wait(duration) {
    //     return new Promise(resolve => setTimeout(resolve, duration))
    // }


    // StarWars API.
    const [starWarsData, setStarWarsData] = React.useState({})
    // const [recipeData, setRecipeData] = React.useState([])

    const [count, setCount] = React.useState(1)
    const [userInput, setUserInput] = React.useState('')

    console.log("Component renders...")
    React.useEffect(() => {
        // fetch(`https://swapi.dev/api/people/${count}`)
        // fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=3&ingredients=${userInput}&apiKey=350ed6a1f4c84c85ba247a1161be2077`)

        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&addRecipeInformation=true&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)
            .then(res => res.json())
            .then(data => setStarWarsData(data.results))
    }, [count])


    // React.useEffect(() => {

    //     // brandonkwhite3@gmail.com
    //     // 8150e43b22914ff0ab67ee2af6bb4338

    //     // all brandonwhitedev api keys...
    //     // Original COMPLEX SEARCH API call
    //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=350ed6a1f4c84c85ba247a1161be2077&number=3&instructionsRequired=true&ingredients=${userInput}`)
    //     // MODIFIED COMPLEX, to look for the recipe instructions.
    //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=3&ingredients=${userInput}&apiKey=350ed6a1f4c84c85ba247a1161be2077`)
    //     //     // fetch(`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=350ed6a1f4c84c85ba247a1161be2077`)

    //     //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=350ed6a1f4c84c85ba247a1161be2077&query=${userInput}`)
    //     //     // fetch('https://api.spoonacular.com/recipes/random?apiKey=350ed6a1f4c84c85ba247a1161be2077&query=${userInput}')

    //     //     // a rigormortonson api key
    //     //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&addRecipeInformation=true&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)

    //     //     // brandonkwhite3 key....
    //     fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&addRecipeInformation=true&number=3&apiKey=8150e43b22914ff0ab67ee2af6bb4338`)

    //         //         // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad25a893b45f4e808dc312fa5cf225fa&addRecipeInformation=true&instructionsRequired=true&query=${userInput}`)
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setRecipeData(data)
    //         })
    //         .catch(error => {
    //             console.error('Error with fetching the data', error);
    //             setRecipeData([])
    //         })

    // }, [userInput])






    // function handleChange(event) {
    //     setUserInput(event.target.value)


    // }

    // function handleSubmit(event) {
    //     // event.preventDefault()
    //     const url = recipeData[userInput]
    //     setRecipeData(prevRecipe => ({
    //         ...prevRecipe,
    //         newRecipe: url
    //     }))

    // }


    return (

        <>
            <h1>old useEffect call here.</h1>
            <form >
                <input type='text' placeholder='Search for an Ing.' />
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Advance.</button>

            </form>
            {/* <form onSubmit={handleSubmit}>
       
                <input type='text' name='userInput' onChange={handleChange} placeholder='sugar, cinnamon, cardamom...'></input>
                <button>Search!</button>
            </form> */}
            {/* <pre>{JSON.stringify(recipeData, null, 2)}</pre> */}
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h1>{starWarsData.glutenFree}</h1>
        </>

    )

}

export default Spoon;