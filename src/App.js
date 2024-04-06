import React, { useState, useEffect } from 'react';
import './index.css';

// import Spoon from './components/Spoon';






function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetch("http://localhost:8080/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, []);


  return (
    <>

      {/* <Spoon /> */}
      <div>
        <h1 >{message}</h1>
      </div>

    </>
  )

}
export default App;
