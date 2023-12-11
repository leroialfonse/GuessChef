import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Spoon = () => {

    const [recipeData, setRecipeData] = React.useState([])
    const [userInput, setUserInput] = React.useState('')



    React.useEffect(() => {
        if (userInput.trim() !== '') {
            // all brandonwhitedev api keys...
            // fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=350ed6a1f4c84c85ba247a1161be2077&ingredients=${userInput}`)
            // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=350ed6a1f4c84c85ba247a1161be2077&query=${userInput}`)
            // fetch('https://api.spoonacular.com/recipes/random?apiKey=350ed6a1f4c84c85ba247a1161be2077')

            // a rigormortonson api key
            fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad25a893b45f4e808dc312fa5cf225fa&addRecipeInformation=true&instructionsRequired=true&query=${userInput}`)
                .then(res => res.json())
                // .then(data => setRecipeData(data.results.map(recipe => recipe.title)))
                .then(data => {
                    console.log(data)
                    setRecipeData(data.results.map(recipe => [recipe.title, recipe.analyzedInstructions]))
                })
            // .then(data => setRecipeData(data.results.map(recipe => 

        }
    }, [userInput])

    function handleChange(event) {
        setUserInput(event.target.value)
    }




    function handleSubmit(event) {
        event.preventDefault()

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='ingredient?'
                    onChange={handleChange}
                    name='ingredient'
                    value={userInput}
                />
                <button>Search for recipes!</button>
            </form>
            {recipeData.map((title, results, analyzedInstructions, id) => (<p key={id}>{title} {analyzedInstructions}</p>))}
            {/* {recipeData.map((title, index) => (<p key={index}>{title}</p>))}
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title><p>{setRecipeData.title}</p></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </>
        </> */}
        </>
    )

}





export default Spoon;

// import React from 'react';

// const Spoon = () => {
//     const [recipeData, setRecipeData] = React.useState([]);
//     const [userInput, setUserInput] = React.useState('');

//     React.useEffect(() => {
//         if (userInput.trim() !== '') {
//             fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=350ed6a1f4c84c85ba247a1161be2077&query=${userInput}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     // Assuming data.results is an array of recipes
//                     // Update state with an array of titles
//                     setRecipeData(data.results.map(recipe => recipe.title));
//                 })
//                 .catch(error => console.error('Error fetching data:', error));
//         }
//     }, [userInput]);

//     function handleChange(event) {
//         setUserInput(event.target.value);
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         // No need to log recipeData here, as it will be updated by the useEffect
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type='text'
//                     placeholder='ingredient?'
//                     onChange={handleChange}
//                     name='ingredient'
//                     value={userInput}
//                 />
//                 <button>Search for recipes!</button>
//             </form>

//             {/* Display each recipe title in a separate paragraph */}
//             {recipeData.map((title, index) => (
//                 <p key={index}>{title}</p>
//             ))}
//         </>
//     );
// };

// export default Spoon;
