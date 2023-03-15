import './App.css';
import MeatButton from './components/MeatButton';
import VeggieButton from './components/VeggieButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Guess Chef
      </header>
      <div className="body">
        <div className="info">
          <h1>Welcome to Guess Chef!</h1>
          <p> Do you go to your fridge for a snack, only to find nothing and go back to the couch?
            Then, when you get there, you realize you're still hungry, so you go back to check again??</p>
        </div>
        <div>
          <p>Happens to the best of us. So, let's make it easy to figure out what to eat! </p>
          <p> Just tell GuessChef what you have in the fridge (or the pantry!), and get back a few recipe ideas! Easy as pie! </p>
        </div>
        <h2>I have...</h2>

        <div className="meats">
          <button>Meats</button>
          < MeatButton />
          < MeatButton />
          < MeatButton />
          < MeatButton />
        </div>
        {/* <div className="veggies">
          <button>Veggies</button>
          < VeggieButton />
          < VeggieButton />
          < VeggieButton />
          < VeggieButton />
        </div> */}
        {/* <div className="seasonings">
          <button>Spices</button>
          < MeatButton />
          < MeatButton />
          < MeatButton />
          < MeatButton />
        </div> */}
      </div>
    </div>
  )
}

export default App;
