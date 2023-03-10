import './App.css';
import MeatButton from './components/MeatButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Guess Chef
      </header>
      <div className="body">
        <h1>Welcome to Guess Chef!</h1>
        <p> Do you go to your fridge for a snack, only to find nothing and go back to the couch?
          Then, when you get there, you realize you're still hungry, so you go back to check again??</p>
        <div className="meats">
          < MeatButton />
          < MeatButton />
          < MeatButton />
          < MeatButton />
        </div>
      </div>
    </div>
  );
}

export default App;
