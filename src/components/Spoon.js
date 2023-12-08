import React, { useState, useEffect } from 'react';

const Spoon = () => {

    const [formData, setFormData] = React.useState({
        ingredient: ''
    })
    // console.log(formData)

    React.useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=350ed6a1f4c84c85ba247a1161be2077&ingredients=$&number=3`)
    }, [])

    function handleChange(event) {
        // const [name, value, type] = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.prevent.default()
        fetch()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='ingredient?'
                onChange={handleChange}
                name='ingredient'
                value={formData.ingredient}
            />
            <button>Search for recipes!</button>
        </form>
    )
}





export default Spoon;