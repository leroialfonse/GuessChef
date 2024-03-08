// // import React from 'react';


// // // Let's set your API keys as variables, so that they'll be easier to use and reference, rather than typing them out all the time. These will be stored in your .env for security.
// // // bkw3key
// // const apiKey1 = '3c5e4c07d493466d82b44cd7af5e3457'
// // // bwdev key
// // // const apiKey2 = '0c6f59cdf5a4473cabde95a3bf90adce'

// // // Using react hook form... maybe.
// // // import { useForm } from "react-hook-form"

// // // Create a component  called loading screen, to trigger when we're waiting for result.

// // // import LoadingScreen from './LoadingScreen';
// // // import Card from 'react-bootstrap/Card';
// // // import Button from 'react-bootstrap/Button';
// // // import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"



// // const Spoon = () => {

// //     //     // my fetch to Spoonacular.
// //     //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad25a893b45f4e808dc312fa5cf225fa&addRecipeInformation=true&instructionsRequired=true&query=${userInput}`)
// //     //     fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad25a893b45f4e808dc312fa5cf225fa&addRecipeInformation=true&instructionsRequired=true&query=sugar`)
// //     //         .then(res => res.json())
// //     //         .then((data) => {
// //     //             console.log(data.results)
// //     //             // setRecipeData(data)
// //     //         })
// //     //         .catch(error => {
// //     //             console.error('Error with fetching the data', error);
// //     //             // setRecipeData([])
// //     //         })

// //     // }, [])

// //     // })



// //     // StarWars API.
// //     // const [starWarsData, setStarWarsData] = React.useState([])

// //     // Some state for the recipe information.

// //     // User's searched ingredient.
// //     const [userInput, setUserInput] = React.useState('');

// //     // The returned recipe info.
// //     const [recipeData, setRecipeData] = React.useState([]);

// //     // // And a bit of state for loading delays.
// //     // const [isLoading, setIsLoading] = React.useState(false)
// //     // // const [recipeInstructions, setRecipeInstructions] = React.useState()




// //     // The UseEffect that I had working as of 2/29/24
// //     React.useEffect(() => {
// //         // console.log("Component renders...")

// //         //     const getRecipe = () => {

// //         //         // Initialize the variabls that I need...
// //         //         let recipeInfo;
// //         //         let ingredients;

// //         //         // Set loading to true while data is fetched.
// //         //         setIsLoading(true)
// //         //         // Fetch the recipe based on user Input.
// //         //         // fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&number=1&apiKey=${apiKey2}`)
// //         //         fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userInput}&apiKey=${apiKey1}&number=1`)
// //         //             // await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&number=1&apiKey=${apiKey1}`)
// //         //             .then(res => res.json())
// //         //             .then(data => {
// //         //                 console.log(data)
// //         //                 setRecipeData(data)
// //         //             })
// //         //         // recipeInfo = res.data;
// //         //         // console.log(res.data)
// //         //         // // ingredients = res.data.extendedIngredients;
// //         //         // setRecipeData(res.data)
// //         //         // setIngreidents(ingredients)
// //         //         // // Switch setIsLoading to False after the fetch.


// //         //     }
// //         //     // // fetch(`https://swapi.dev/api/people/${count}`)
// //         //     // // fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=3&ingredients=${userInput}&apiKey=350ed6a1f4c84c85ba247a1161be2077`)

// //         //     // // fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&addRecipeInformation=true&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)


// //         //     // // cURRENTLY PULLING THIS ONE...
// //         //     // // Just finding recipes by ingredient, first. This one is a rigormortonson pull, I think.
// //         //     // // fetch(`https://api.spoonacular.com/recipes/findByIngredients?instructionsRequired=true&ingredients=${userInput}&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)

// //         //     // // Let me try to get the instrucutions directly with this call.
// //         //     // fetch(`https://api.spoonacular.com/recipes/404784/analyzedInstuctions&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)


// //         //     //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${userInput}&number=3&instructionsRequired=true&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)

// //         //     //     // The analyzeInstructions call? How do I get the id for the recipe I looked for here...?
// //         //     //     // let instructionsList = fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions&ingredients=${userInput}&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)
// //         //     //     .then(res => res.json())
// //         //     //     .then(data => {
// //         //     //         console.log(data)
// //         //     //         setRecipeData(data)
// //         //     //     })
// //         //     // getRecipe()

// //         //     // And the call to get the recipe information.
// //         //     getRecipe()
// //         // }, [userInput])




// //         /////////////////////////////////////////

// //         // GET REQUEST TO RECIEVE RECIPES
// //         function getRecipes(e) {
// //             // Prevent default submit action bahh this drove me crazy for a little
// //             e.preventDefault();
// //             //Initialize variable so value assigned is done each get
// //             let recipes;
// //             //Make get request using axios with query state object
// //             fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userInput}&apiKey=${apiKey1}&number=1`)
// //                 .then(res => {
// //                     //Assign response value to variable
// //                     recipes = res.data.results;
// //                     //Set response to recipes state
// //                     setRecipeData(recipes)
// //                 }, [userInput])
// //         }
// //     })

// //     ////////////////////////////////////////




// //     // React.useEffect(() => {
// //     //     console.log("Searching it up...")
// //     // })

// //     // React.useEffect(() => {

// //     //     // brandonkwhite3@gmail.com
// //     //     // 8150e43b22914ff0ab67ee2af6bb4338

// //     //     // all brandonwhitedev api keys...
// //     //     // Original COMPLEX SEARCH API call
// //     //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=350ed6a1f4c84c85ba247a1161be2077&number=3&instructionsRequired=true&ingredients=${userInput}`)
// //     //     // MODIFIED COMPLEX, to look for the recipe instructions.
// //     //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=3&ingredients=${userInput}&apiKey=350ed6a1f4c84c85ba247a1161be2077`)
// //     //     //     // fetch(`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=350ed6a1f4c84c85ba247a1161be2077`)

// //     //     //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=350ed6a1f4c84c85ba247a1161be2077&query=${userInput}`)
// //     //     //     // fetch('https://api.spoonacular.com/recipes/random?apiKey=350ed6a1f4c84c85ba247a1161be2077&query=${userInput}')

// //     //     //     // a rigormortonson api key
// //     //     //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&addRecipeInformation=true&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)

// //     //     //     // brandonkwhite3 key....
// //     //     fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&addRecipeInformation=true&number=3&apiKey=8150e43b22914ff0ab67ee2af6bb4338`)

// //     //         //         // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad25a893b45f4e808dc312fa5cf225fa&addRecipeInformation=true&instructionsRequired=true&query=${userInput}`)
// //     //         .then(res => res.json())
// //     //         .then((data) => {
// //     //             console.log(data)
// //     //             setRecipeData(data)
// //     //         })
// //     //         .catch(error => {
// //     //             console.error('Error with fetching the data', error);
// //     //             setRecipeData([])
// //     //         })

// //     // }, [userInput])



// //     // ///////////////////////////// Using react form hook



// //     //     const {

// //     //         ingredient
// //     //     // register,
// //     //         handleSubmit,
// //     //         watch,
// //     //         formState: { errors },
// //     //     } = useForm()


// //     //     const onSubmit = (data) => console.log(data)


// //     //     console.log(watch("ingredient")) // watch input value by passing the name of it


// //     //     return (
// //     //         /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
// //     //         <form onSubmit={handleSubmit(onSubmit)}>
// //     //             {/* register your input into the hook by invoking the "register" function */}
// //     //             <input defaultValue="sugar" {...register("example")} />


// //     //             {/* include validation with required or other standard HTML validation rules */}
// //     //             <input {...register("exampleRequired", { required: true })} />
// //     //             {/* errors will return when field validation fails  */}
// //     //             {errors.exampleRequired && <span>This field is required</span>}


// //     //             <input type="submit" />
// //     //         </form>
// //     //     )
// //     // }

// //     // //////////////////////////////////// End using react form hook.


// //     function handleChange(event) {
// //         setUserInput(event.target.value)


// //     }

// //     // function handleSubmit(event) {
// //     //     event.preventDefault()



// //     // }



// //     // function getInstuctions() {
// //     //     // let info = setRecipeData.id

// //     //     fetch(`https://api.spoonacular.com/recipes/800780/analyzedInstructions&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)
// //     //         .then(res => res.json())
// //     //         .then(data => console.log(data))
// //     // }

// //     return (

// //         <>
// //             <h1>old useEffect call here.</h1>
// //             {/* show the loading message until some data is resolved, bud. */}

// //             {!isLoading ? <div> recipe={recipeData} ingredients={userInput} </div> : < h1 style={{ textAlign: 'center' }}>Loading.....</h1>}
// //             <form onSubmit={getRecipes}>
// //                 <input onChange={(e) => setUserInput(e.target.value)} type='text' placeholder='Search for an Ing.' />
// //                 <button>Get a recipe</button>
// //             </form>
// //             {/* <form onSubmit={handleSubmit}>

// //                 <input type='text' name='userInput' onChange={handleChange} placeholder='sugar, cinnamon, cardamom...'></input>
// //                 <button>Search!</button>
// //             </form> */}
// //             <pre>{JSON.stringify(recipeData, null, 1)}</pre>

// //             <div>
// //                 {recipes.map((rec) => (
// //                     <RecipeItem key={rec.id} obj={rec} />
// //                 ))}
// //             </div>
// //             {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
// //             {/* {!userInput ? <p>type above to get started!</p> : <pre> {recipeData.map(results =>
// //                 <div className="card">
// //                     <img src={results.image} className="card-img-top" alt="card-img-top" />
// //                     <div className="card-body">
// //                         <h5 className="card-title">{results.title}</h5>
// //                         <p className="card-text">{results.summary}</p>
// //                         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
// //                         <button
// //                         // onClick={getInstuctions}
// //                         > Let's make it !</button>
// //                     </div>


// //                 </div>)}</pre>} */}
// //         </>

// //     )

// // }

// // export default Spoon;



import React, { useState, useEffect } from 'react';
import '../index.css';

// Let's set your API keys as variables, so that they'll be easier to use and reference, rather than typing them out all the time. These will be stored in your .env for security.
// bkw3key
// const apiKey1 = '3c5e4c07d493466d82b44cd7af5e3457'
// bwdev key
// const apiKey2 = '0c6f59cdf5a4473cabde95a3bf90adce'
// rigor key
const apiKey3 = 'ad25a893b45f4e808dc312fa5cf225fa'


const Spoon = () => {
    // create functional state
    const [userInput, setUserInput] = useState('');
    const [recipeData, setRecipeData] = useState([]);
    // const [instructionsId, setInstructionsId] = React.useState({});
    const [instructionsList, setInstructionsList] = React.useState([]);

    // Considering a loading delay and animation while a user awaits data...
    const [isLoading, setIsLoading] = React.useState(false)


    // Go get three recipes with first Spoonacular call.
    // Let's make it async.
    const getRecipes = async (e) => {
        // Prevent default on the submit.
        e.preventDefault();
        // Do something while the recipe info is loading in...
        setIsLoading(true)
        //Fetch the recipes based on user input, and store the recipe id for use later.
        await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userInput}&apiKey=${apiKey3}&instructionsRequired=true&number=3`)
            .then(res => res.json())
            .then(data => {
                // const recipeIds = data.map(recipe => recipe.id)
                // console.log(recipeData.id)
                // Grabbing the id.
                // setInstructionsId(recipeData.id)
                // console.log(data.id)
                //Assign response value to variable
                //Set response to recipes state
                setRecipeData(data)
                // Clear old instructions
                setInstructionsList([])
                console.log(data);
                setIsLoading(false)
            })

    };

    useEffect(() => {
        getRecipes()
    }, [userInput])


    // Pull those actual instructions, for the recipe that needs them.
    const getInstructions = async (recipeId) => {
        // Prevent default submit action bahh this drove me crazy for a little 
        // e.preventDefault();
        //Initialize variable so value assigned is done each get
        // let instructionsId;
        // Checking that I'm pulling the id correctly
        console.log("instructions Id:", recipeId);
        // fetch(`https://api.spoonacular.com/recipes/${instructionsId}/analyzedInstructions$apiKey=${apiKey1}`)
        await fetch(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${apiKey3}`)

            .then(res => res.json())
            .then(instructionData => {
                console.log(instructionData)
                // Use the recipeId from the function param
                setInstructionsList(prevList => [...prevList, { recipeId, instructions: instructionData }]);

            })
    };

    // A function to trigger a loading gif ?? I'll come back to this.
    // const loadingDisplay = () => {
    //     if (isLoading) {
    //         <video autoPlay='true' source="../public/images/spinner.gif" />
    //     }
    // }

    return (
        <>
            {/* 
            <header>
            </header> */}

            {/* <div className="App" style={{ textAlign: 'center' }}> */}
            <h1 style={fontStyle}>Guess Chef!</h1>

            {/* <img onLoad={loadingDisplay} /> */}
            <div className='searchIngredients'>

                {/* Pass in event as arg to preventDefault action of form submit */}
                <form onSubmit={(e) => getRecipes(e)}>
                    <input style={inputStyles} type="text" placeholder="sugar, taragon, salsa..." onChange={(e) => setUserInput(e.target.value)} />
                    {/* <div style={{ margin: '1em' }}> */}
                    <button className="btn btn-large" style={btnStyle} type='submit'>Let's eat!</button>

                    {/* Thinking about adding a "Suprise me!" Button for random recipes. */}
                    {/* <button className="btn btn-large" style={btnStyle} type='submit'>Let's eat!</button> */}

                    {/* </div> */}
                </form>
            </div >
            <div className='recipes'>
                {/* Let's loop through the Recipes and call the data info... */}

                {recipeData.map(info => (
                    < div key={info.id} >
                        <div style={{ padding: '2rem' }} className="card">
                            <img src={info.image} className="card-img-top" alt={info.title} style={{ width: '90%', borderRadius: '10px' }} />
                            <h3 className="card-title">{info.title}</h3>
                            <h5>What you'll need:</h5>
                            <div className="card-body">
                                {info.missedIngredients.map(item => item.original).concat(info.usedIngredients.map(remainder => remainder.orginal))}

                                {/* <h3 className='card-title'>   {info.missedIngredients} </h3> */}
                                <div>
                                    <button style={{ padding: '.1rem .5rem', margin: '1rem' }} onClick={() => getInstructions(info.id)}>Let's Make It!</button>
                                    {/* Loop through the recipes and displayy the instructions */}
                                    {instructionsList.map(entry => {
                                        return entry.recipeId === info.id ?
                                            entry.instructions[0].steps.map(step => <p key={step.number} className='card-text'>{step.number}: {step.step}</p>) : null;

                                    })}
                                </div>

                            </div>
                        </div>

                    </div>


                ))}
            </div>

            {/* </div > */}
            {/* <footer>
                <span><small>BrandonWhite &copy; 2024</small></span>
            </footer> */}
        </>

    );



}


const btnStyle = {
    backgroundColor: '#8ac926',
    borderRadius: '.3rem',
    padding: '.2rem .4rem',
    margin: '1rem'


    // reddish color : ff595e
    // greenish : 8ac926
    // yellow : ffca3a
    // orange: EFA31E
}

const fontStyle = {
    fontSize: '5em',
    color: 'green',
    letterSpacing: '5px',
    textShadow: '-2px 2px 1px rgba(150, 150, 150, 1)',
    // margin: '3rem'

}

const inputStyles = {
    width: '40%',
    fontSize: '1.4em',
    backgroundColor: 'black',
    color: 'azure',
    textIndent: '.6rem',
    borderRadius: '.3rem',
    height: '1.8rem'
}

export default Spoon;