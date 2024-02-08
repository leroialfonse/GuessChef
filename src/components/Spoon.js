import React from 'react';

// Using react hook form... maybe.
// import { useForm } from "react-hook-form"

// Create a component  called loading screen, to trigger when we're waiting for result.

// import LoadingScreen from './LoadingScreen';
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
    // const [starWarsData, setStarWarsData] = React.useState([])
    const [recipeData, setRecipeData] = React.useState([])
    // const [recipeInstructions, setRecipeInstructions] = React.useState()

    // const [count, setCount] = React.useState(1)
    const [userInput, setUserInput] = React.useState('')

    React.useEffect(() => {
        console.log("Component renders...")

        // fetch(`https://swapi.dev/api/people/${count}`)
        // fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=3&ingredients=${userInput}&apiKey=350ed6a1f4c84c85ba247a1161be2077`)

        // fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&addRecipeInformation=true&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)

        // Just finding recipes by ingredient, first. This one is a rigormortonson pull, I think.
        // fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userInput}&number=3&instructionsRequired=true&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)
        fetch(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${userInput}&number=3&instructionsRequired=true&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)

            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRecipeData(data)
            })
    }, [userInput])

    // React.useEffect(() => {
    //     console.log("Searching it up...")
    // })

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



    // ///////////////////////////// Using react form hook



    //     const {

    //         ingredient
    //     // register,
    //         handleSubmit,
    //         watch,
    //         formState: { errors },
    //     } = useForm()


    //     const onSubmit = (data) => console.log(data)


    //     console.log(watch("ingredient")) // watch input value by passing the name of it


    //     return (
    //         /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    //         <form onSubmit={handleSubmit(onSubmit)}>
    //             {/* register your input into the hook by invoking the "register" function */}
    //             <input defaultValue="sugar" {...register("example")} />


    //             {/* include validation with required or other standard HTML validation rules */}
    //             <input {...register("exampleRequired", { required: true })} />
    //             {/* errors will return when field validation fails  */}
    //             {errors.exampleRequired && <span>This field is required</span>}


    //             <input type="submit" />
    //         </form>
    //     )
    // }

    // //////////////////////////////////// End using react form hook.


    function handleChange(event) {
        setUserInput(event.target.value)


    }

    function handleSubmit(event) {
        event.preventDefault()



    }


    return (

        <>
            <h1>old useEffect call here.</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' placeholder='Search for an Ing.' />
                <button>Get a recipe</button>
            </form>
            {/* <form onSubmit={handleSubmit}>
       
                <input type='text' name='userInput' onChange={handleChange} placeholder='sugar, cinnamon, cardamom...'></input>
                <button>Search!</button>
            </form> */}
            {/* <pre>{JSON.stringify(recipeData, null, 1)}</pre> */}
            {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
            {!userInput ? <p>type above to get started!</p> : <pre> {recipeData.results.map(results =>
                <div className="card">
                    <img src={results.image} className="card-img-top" alt="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{results.title}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <button> Let's make it !</button>
                    </div>


                </div>)}</pre>}
        </>

    )

}

export default Spoon;