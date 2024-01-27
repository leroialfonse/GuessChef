import { useQuery, useMutation } from "@tanstack/react-query";


const RECIPES = [
    { id: 1, title: "Here's a thing" },
    { id: 2, title: "Here's another thing" }
]

// const userInput = document.querySelector(".userInputItem").textContent

function Spoons() {
    const recipesQuery = useQuery({
        queryKey: ["recipes"],
        //     queryFn: () => wait(1000).then(() => fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad25a893b45f4e808dc312fa5cf225fa&addRecipeInformation=true&instructionsRequired=true&query=${userInput}`)
        //         .then(res => res.json()))
        // })

        queryFn: () => wait(1000).then(() => [...RECIPES])
    })


    if (recipesQuery.isLoading) return <h1>Loadin...</h1>
    if (recipesQuery.isError) {
        return <pre>{JSON.stringify(recipesQuery.error)}</pre>
    }
    return (
        <>
            <h1>TanStack Run.</h1>

            <div> {recipesQuery.data.map(recipe => (
                <div key={recipe.id}>{recipe.title}</div>))}
            </div>
            {/* <form>
                <input class="userInputItem" type='text' ></input>
            </form> */}
        </>
    )


}


function wait(duration) {
    return new Promise(resolve => setTimeout(resolve, duration))
}

export default Spoons