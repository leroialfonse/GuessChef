// import React, { useState, useEffect } from 'react';

// export default function Spoon() {

//     const IngForm = ({ onSearch }) => { }

//     // const [data, setData] = React.useState('')

//     // const fetchInfo = (e) => {
//     //     e.preventDefault();

//     //     return fetch(url)
//     //         .then((res) => res.json())
//     //         .then((d) => setData(d))
//     // }

//     // useEffect(() => {
//     //     fetchInfo();
//     // }, [])


//     < div className="info" >

//              const handleSubmit = async (e) => {
//             // Stop default behaviors..

//             e.preventDefault()

//         const response = await fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients', {
//             method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',

//             },
//         body: JSON.stringify({ingredients}),
//         })


//         const data = await response.json()

//         onLogin(data.ingredients)
//     }



//         return (
//         <form onSubmit={handleSubmit}>
//             <input type='text'
//                 placeholder='Username'
//                 value={username}
//                 onChange={(e) => setUserName(e.target.value)}

//             />
//             <input type='password'
//                 placeholder='Password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}

//             />

//             <button type='submit'>Login</button>
//         </form>

//     </div >
//     )
// }


import React, { useState } from 'react';

const Spoon = () => {

    const [ingredient, setIngredient] = useState('')
    // const [password, setPassword] = useState('')

    // What to do when the login form button is clicked.

    const handleSubmit = async (e) => {
        // Stop default behaviors..

        e.preventDefault()

        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=350ed6a1f4c84c85ba247a1161be2077&ingredients=${ingredient}&number=3`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },
            // body: JSON.stringify({ ingredient }),
        })


        const data = await response.json()

        console.log(data.image)
        return (
            <div>
                {data.image}, {data.title},
            </div>
        )
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                placeholder='ingredient'
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}

            />
            {/* <input type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}

            /> */}

            <button type='submit'>search</button>

        </form>

{ data.image }, { data.title }

    )
}




export default Spoon;