import React from 'react'
// import Card from './components/Card'
// import ingredientsGeneral from './ingredientsGeneral'
import './index.css'
// // import keyIndex from "react-key-index"

// import Header from "./components/Header";
import Spoon from './components/Spoon';
import Recipes from './components/Recipes';
// import Spoons from './components/Spoons';
// import Info from './components/Info';






// server.js
// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());

// app.get("/", (req, res) => {
//   res.json({ message: "hello world" });
// });

// app.listen(3000, () => {
//   console.log("API server listening on port 3000");
// });










function App() {


  return (
    <>
      {/* <Header /> */}
      {/* <div className='info'> */}
      {/* <Info /> */}
      <div className='info'>
        {/* <Recipes /> */}
        <Spoon />
        {/* <Spoons /> */}
      </div>
      {/* </div> */}
    </>
  )

}
export default App;
