import React from 'react';


// Let's set your API keys as variables, so that they'll be easier to use and reference, rather than typing them out all the time. These will be stored in your .env for security.
const apiKey1 = 'ad25a893b45f4e808dc312fa5cf225fa'
const apiKey2 = '0c6f59cdf5a4473cabde95a3bf90adce'

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



const Spoon = (props) => {


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

    // Some state for the recipe information.
    const [recipeData, setRecipeData] = React.useState([]);
    // Some state for the actual ingredients.
    const [ingredients, setIngredients] = React.useState([]);

    // And a bit of state for loading delays.
    const [isLoading, setIsLoading] = React.useState(false)
    // const [recipeInstructions, setRecipeInstructions] = React.useState()

    // const [count, setCount] = React.useState(1)
    const [userInput, setUserInput] = React.useState('')


    // Gonna try to use an async as suggested by my friend.


    // The UseEffect that I had working as of 2/29/24
    React.useEffect(() => {
        console.log("Component renders...")

        const getRecipe = () => {

            // Initialize the variabls that I need... 
            let recipeInfo;
            let ingredients;

            // Set loading to true while data is fetched. 
            setIsLoading(true)
            // Fetch the recipe based on user Input. 
            // fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&number=1&apiKey=${apiKey2}`)
            fetch(`           https://api.spoonacular.com/recipes/findByIngredients?ingredients=sugar&apiKey=${apiKey2}&number=1`)
                // await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&number=1&apiKey=${apiKey1}`)
                .then(res => {
                    res.json()
                        .then(data => console.log(data))
                    // recipeInfo = res.data;
                    // console.log(res.data)
                    // // ingredients = res.data.extendedIngredients;
                    // setRecipeData(res.data)
                    // setIngredients(ingredients)
                    // // Switch setIsLoading to False after the fetch.

                })
        }
        // // fetch(`https://swapi.dev/api/people/${count}`)
        // // fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=3&ingredients=${userInput}&apiKey=350ed6a1f4c84c85ba247a1161be2077`)

        // // fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&addRecipeInformation=true&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)


        // // cURRENTLY PULLING THIS ONE...
        // // Just finding recipes by ingredient, first. This one is a rigormortonson pull, I think.
        // // fetch(`https://api.spoonacular.com/recipes/findByIngredients?instructionsRequired=true&ingredients=${userInput}&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)

        // // Let me try to get the instrucutions directly with this call. 
        // fetch(`https://api.spoonacular.com/recipes/404784/analyzedInstuctions&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)


        //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${userInput}&number=3&instructionsRequired=true&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)

        //     // The analyzeInstructions call? How do I get the id for the recipe I looked for here...?
        //     // let instructionsList = fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions&ingredients=${userInput}&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setRecipeData(data)
        //     })
        // getRecipe()

        // And the call to get the recipe information.
        getRecipe()
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



    // function getInstuctions() {
    //     // let info = setRecipeData.id

    //     fetch(`https://api.spoonacular.com/recipes/800780/analyzedInstructions&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }

    return (

        <>
            <h1>old useEffect call here.</h1>
            {/* show the loading message until some data is resolved, bud. */}

            {!isLoading ? <div> recipe={recipeData} ingredients={ingredients} </div> : < h1 style={{ textAlign: 'center' }}>Loading.....</h1>}
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' placeholder='Search for an Ing.' />
                <button>Get a recipe</button>
            </form>
            {/* <form onSubmit={handleSubmit}>
       
                <input type='text' name='userInput' onChange={handleChange} placeholder='sugar, cinnamon, cardamom...'></input>
                <button>Search!</button>
            </form> */}
            <pre>{JSON.stringify(recipeData, null, 1)}</pre>
            {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
            {/* {!userInput ? <p>type above to get started!</p> : <pre> {recipeData.map(results =>
                <div className="card">
                    <img src={results.image} className="card-img-top" alt="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{results.title}</h5>
                        <p className="card-text">{results.summary}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <button
                        // onClick={getInstuctions}
                        > Let's make it !</button>
                    </div>


                </div>)}</pre>} */}
        </>

    )

}

export default Spoon;