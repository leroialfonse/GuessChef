import React, { useState, useEffect } from 'react';
import '../index.css';


const apiKey = process.env.REACT_APP_API


const Spoon = () => {

    console.log(localStorage)

    const [items, setItems] = useState([])


    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])
    ///////////////
    // I Want to use local storage to save user's favorite recipes.



    ///////////////////////



    // create some state state for user input, recipe data and recipe instructions.
    const [userInput, setUserInput] = useState('');
    const [recipeData, setRecipeData] = useState([]);

    // Favorite a recipe
    const [isFavorite, setIsFavorite] = useState({})

    const [instructionsList, setInstructionsList] = React.useState([]);

    // TODO:
    // Considering a loading delay and animation while a user awaits data...



    // Go get three recipes with first Spoonacular call.
    // Let's make it async.
    const getRecipes = async (e) => {
        // Prevent search bar automatic fire.
        e.preventDefault();

        // Check if there is no user input
        if (!userInput) {
            // Display a message on the screen
            document.getElementById("warning").innerHTML = "Hey! You haven't searched for anything yet!!"

            return;


        }



        /* Do something while the recipe info is loading in... I think I'd like to add a spinner and a delay. Maybe some food ingreditents like, circle around.... */



        // Fetch the recipes based on user input, and store the recipe id for use later.
        await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userInput}&apiKey=${apiKey}&instructionsRequired=true&number=3`)
            .then(res => res.json())
            .then(data => {
                // Set response to recipes state
                setRecipeData(data);

                console.log(recipeData)
                // Clear old instructions
                setInstructionsList([]);
                // setIsLoading(false);
                // Scroll to recipes
                // if (recipeSectionRef.current) {
                //     recipeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                // }
            });

    };


    useEffect(() => {
        getRecipes()
    }, [recipeData]);


    // Pull those actual instructions, for the recipe that needs them.
    const getInstructions = async (recipeId, e) => {
        // Prevent default submit action bahh this drove me crazy for a little 
        // e.preventDefault();
        //Initialize variable so value assigned is done each get
        // let instructionsId;
        // Checking that I'm pulling the id correctly
        console.log("instructions Id:", recipeId);
        // fetch(`https://api.spoonacular.com/recipes/${instructionsId}/analyzedInstructions$apiKey=${apiKey1}`)
        await fetch(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${apiKey}`)

            .then(res => res.json())
            .then(instructionData => {
                console.log(instructionData)
                // Use the recipeId from the function param
                setInstructionsList(prevList => [...prevList, { recipeId, instructions: instructionData }]);


            })


    };




    // Mark a recipe as a favorite
    const markFavorite = (recipeId) => {
        setIsFavorite(prevFavorite => {
            const updatedFavorite = { ...prevFavorite };
            updatedFavorite[recipeId] = !updatedFavorite[recipeId]
            // document.getElementById('#reactToast').innerText = 'Saved!'

            setItems(prevItems => {
                {...items, }
})

    return updatedFavorite

})
        // What I want to do, is mark a favorite, and then send that favorite to the favorite list, to be recalled later.
        // setFavorites(prevFavorite => {
        // I'm pretty sure I can use the existing code, and add the capability to add these items to a favorite list.

        // })
    }

// And, return the favorited recipes ...

const getFavorites = async (favoriteRecipeId) => {
    // Prevent default submit action bahh this drove me crazy for a little 
    // e.preventDefault();
    //Initialize variable so value assigned is done each get
    // let instructionsId;
    // Checking that I'm pulling the id correctly
    console.log("favorites Id:", favoriteRecipeId);
    // fetch(`https://api.spoonacular.com/recipes/${instructionsId}/analyzedInstructions$apiKey=${apiKey1}`)
    await fetch(`https://api.spoonacular.com/recipes/${favoriteRecipeId}/analyzedInstructions?apiKey=${apiKey}`)

        .then(res => res.json())
        .then(instructionData => {
            console.log(instructionData)
            // Use the recipeId from the function param
            setInstructionsList(prevList => [...prevList, { favoriteRecipeId, instructions: instructionData }]);


        })


};

// let heartIcon = isFavorite ? '/images/filledHeart.png' : '/images/lilHeart.png'



// A function to trigger a loading gif ?? I'll come back to this.
// const loadingDisplay = () => {
//     if (isLoading) {
//         <video autoPlay='true' source="../public/images/spinner.gif" />
//     }
// }
// console.log(favorites)
return (
    <>
        <main>


            {/* <div className="App" style={{ textAlign: 'center' }}> */}
            <h1>Guess Chef!</h1>
            <h2>Let's make a Snack!!</h2>

            {/* <img onLoad={loadingDisplay} /> */}
            <div className='searchIngredients'>


                <h3 className='explainer'>Hungry, but can't decide what to have? Let Guess Chef help! Just type in ingredients you have into the search bar, and Guess Chef will suggest a few easy recipes you could make!</h3>

                {/* Pass in event as arg to preventDefault action of form submit */}

                <form onSubmit={(e) => getRecipes(e)}>
                    <input className='inputStyle' type="text" placeholder="search by Ingredient..." onChange={(e) => setUserInput(e.target.value)} />
                    {/* <div style={{ margin:h'1em' }}> */}
                    <div id='warning'></div>
                    {/* <button className="btn btn-large" style={btnStyle} type='submit'>Let's eat!</button> */}
                    <button className="btn btn-large" type='submit'>Let's eat!</button>

                    {/* Thinking about adding a "Suprise me!" Button for random recipes. */}
                    {/* <button className="btn btn-large" style={btnStyle} type='submit'>Let's eat!</button> */}

                    {/* </div> */}
                </form>
            </div>
            {/* <p id='loading'></p> */}

            <div className='recipes'>

                {/* Let's loop through the Recipes and call the data info... */}

                {recipeData.map((info) => (

                    < div key={info.id} >
                        <div className="card">
                            <img src={info.image} className="card-img-top" alt={info.title} style={{ borderRadius: '10px' }} />

                            <h3 className="card-title">{info.title}</h3>
                            <h4>What you'll need:</h4>
                            <div className="card-body">
                                {/* {info.missedIngredients.map(item => item.original).concat(info.usedIngredients.map(remainder => remainder.orginal))} */}
                                {info.missedIngredients.concat(info.usedIngredients).map(item => <ul><li><p>{item.original}</p></li></ul>)}
                                {/* <h3 className='card-title'>   {info.missedIngredients} </h3> */}
                                <div>
                                    <div className='actionButtons'>
                                        <button onClick={() => { getInstructions(info.id) }}>Let's Make It!</button>
                                        <button items={items} setItems={setItems}><img src={isFavorite[info.id] ? '/images/filledHeart.png' : '/images/lilHeart.png'
                                        } className="favorite" onClick={() => markFavorite(info.id)} alt='Mark as Favorite' /></button>

                                    </div>

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
            </div >

            {/* </div// > */}
            {/* <footer>
                <span><small>BrandonWhite &copy; 2024</small></span>
                <span><small>Recipes provided by Spoonacular API</small></span>
            </footer> */}

        </main>
        {/* <footer>
                <span><small>BrandonWhite &copy; 2024</small></span>
                <br></br>
                <span><small>Recipes provided by Spoonacular API</small></span>
            </footer> */}
    </>

);



}


// const btnStyle = {
//     backgroundColor: '#8ac926',
//     borderRadius: '.3rem',
//     padding: '.2rem .4rem',
//     margin: '1rem'


// reddish color : ff595e
// greenish : 8ac926
// yellow : ffca3a
// orange: EFA31E
// }

// const fontStyle = {
//     fontSize: '5rem',
//     color: 'green',
//     letterSpacing: '3px',
//     textShadow: '-2px 2px 1px rgba(150, 150, 150, 1)',
//     margin: '2rem',
//     font: 'Bebas Neue'

// }

// const fontStyle2 = {
//     fontSize: '3rem',
//     color 'var(--color2)',

//     letter:Spacing: '3px',
//  textShadow: '-2px 2px 1px rgba(150, 150, 150, 1)',
//     margin: '-2rem 2.5rem '

// }


// const inputStyles = {
//     width: '40%',
//     fontSize: '1.4em',
//     backgroundColor: 'black',
//     color: 'azure',
//     textIndent: '.6rem',
//     borderRadius: '.3rem',
//     height: '1.8rem'
// }

export default Spoon;