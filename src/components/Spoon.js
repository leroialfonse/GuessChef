import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {
    BroserRouter as ROuter,
    Switch,
    Route,
    Link
} from 'react-router-dom';





const Spoon = () => {


    const [recipeData, setRecipeData] = React.useState([])
    const [userInput, setUserInput] = React.useState('')



    React.useEffect(() => {

        // brandonkwhite3@gmail.com
        // 8150e43b22914ff0ab67ee2af6bb4338

        // all brandonwhitedev api keys...
        // Original COMPLEX SEARCH API call
        // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=350ed6a1f4c84c85ba247a1161be2077&number=3&instructionsRequired=true&ingredients=${userInput}`)
        // MODIFIED COMPLEX, to look for the recipe instructions.
        // fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=3&ingredients=${userInput}&apiKey=350ed6a1f4c84c85ba247a1161be2077`)
        // fetch(`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=350ed6a1f4c84c85ba247a1161be2077`)

        // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=350ed6a1f4c84c85ba247a1161be2077&query=${userInput}`)
        // fetch('https://api.spoonacular.com/recipes/random?apiKey=350ed6a1f4c84c85ba247a1161be2077&query=${userInput}')

        // a rigormortonson api key
        // fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&addRecipeInformation=true&number=1&apiKey=ad25a893b45f4e808dc312fa5cf225fa`)

        // brandonkwhite3 key....
        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=ingredients=${userInput}&addRecipeInformation=true&number=3&apiKey=8150e43b22914ff0ab67ee2af6bb4338`)

            // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad25a893b45f4e808dc312fa5cf225fa&addRecipeInformation=true&instructionsRequired=true&query=${userInput}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data.results)
                setRecipeData(data)
            })
            .catch(error => {
                console.error('Error with fetching the data', error);
                setRecipeData([])
            })

    }, [userInput])






    function handleChange(event) {
        setUserInput(event.target.value)


    }

    function handleSubmit(event) {
        event.preventDefault()
        // const url = recipeData[userInput]
        // setRecipeData(prevRecipe => ({
        //     ...prevRecipe,
        //     newRecipe: url
        // }))

    }


    return (

        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='sugar, cinnamon, nutmeg?'
                    onChange={handleChange}
                    name='ingredient'
                    value={userInput}
                />
                <button>Search for recipes!</button>
            </form>

            {/* <pre>{JSON.stringify(recipeData, null, 1)}</pre> */}
            {userInput ? recipeData.results.map(info =>
                <Card key={info.id} style={{ width: '18rem', border: '2px solid gray', margin: '2.5rem', display: 'flex', borderRadius: '8px' }}>
                    <Card.Img variant="top" src={info.image} alt='Recipe Image' style={{ height: '10rem', width: '10rem' }} />
                    <Card.Body>
                        <Card.Title><p>{info.title}</p></Card.Title>
                        <Card.Text>
                            <p>{info.analyzedItructions}</p>
                        </Card.Text>
                        <Link to={`https://api.spoonacular.com/recipes/${info.id}/information?apiKey=8150e43b22914ff0ab67ee2af6bb4338`}>Let's Make It</Link>
                        <Button variant="primary"  >Let's Make It!</Button>
                    </Card.Body>
                </Card >
            ) : "Type in some ingredients to get started!"}
        </>

    )

}

export default Spoon;