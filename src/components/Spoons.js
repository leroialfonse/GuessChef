import { useQuery, useMutation } from "@tanstack/react-query";


const RECIPES = [
    { id: 1, title: "Here's a thing" },
    { id: 2, title: "Here's another thing" }
]


function Spoons() {
    const recipesQuery = useQuery({
        queryKey: ["posts"],
        queryFn: () => wait(1000).then(() => fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ad25a893b45f4e808dc312fa5cf225fa&addRecipeInformation=true&instructionsRequired=true&query`)
            .then(res => res.json()))
    })

    if (recipesQuery.isLoading) return <h1>Loadin...</h1>
    if (recipesQuery.isError) {
        return <pre>{JSON.stringify(recipesQuery.error)}</pre>
    }
    return (
        <h1>TanStack Run.</h1>


    )


}


function wait(duration) {
    return new Promise(resolve => setTimeout(resolve, duration))
}

export default Spoons