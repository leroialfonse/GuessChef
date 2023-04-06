import React from 'react'
import Card from './components/Card'
import ingredientsGeneral from './ingredientsGeneral'
import './App.css'
import keyIndex from "react-key-index"



function App() {

  // ///////////////////////////
  // var ingredientsGeneral = [];
  // ingredientsGeneral = keyIndex(ingredientsGeneral, 1)
  const cards = ingredientsGeneral.map(ing => {
    return (
      <>
        <Card
          key={ing.id}
          ingredient={ing.ingredient}
          description={ing.description}
          img={ing.imageUrl}
        />
      </>
    )
  })

  return (
    <div>
      <div className="cards-list">
        {cards}
      </div>
    </div>
  )

  // ////////////////
  // const cards = data.map(ing => {

  // return (
  //   <div className="App">
  //     <Header />
  //     <div className="body">
  //       <div className="info">
  //         <h1>Welcome to Guess Chef!</h1>
  //         <p> Do you go to your fridge for a snack, only to find nothing and go back to the couch?
  //           Then, when you get there, you realize you're still hungry, so you go back to check again??</p>
  //       </div>
  //       <div>
  //         <p>Happens to the best of us. So, let's make it easy to figure out what to eat! </p>
  //         <p> Just tell GuessChef what you have in the fridge (or the pantry!), and get back a few recipe ideas! Easy as pie! </p>
  //       </div>
  //       <h2>I have...</h2>
  //       {/* <Card /> */}

  //       <Card
  //       key={ing.id}
  //       ingredient={ing.ingredient}
  //       location={ing.location}
  //       googleMapsUrl={ing.googleMapsUrl}
  //       startDate={ing.startDate}
  //       endDate={ing.endDate}
  //       description={ing.description}
  //       img={ing.imageUrl}
  //       />



  // return (
  //       <div>
  //           <Header />
  //           <div className="cards-list">
  //           {cards}
  //           </div>
  //       </div>
  //   )

  //     </div>
  //   </div>
  //   )
  // }}

}
export default App;
