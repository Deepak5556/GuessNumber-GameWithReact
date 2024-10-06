import './App.css';
import { useState } from 'react';
import Result from './Result';
const SecretNumber = Math.floor(Math.random()*10)+1;


function App() {

  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value)
    console.log(number);
  }
  return (
    <div className="container">
      
      <div className="head">
        <label htmlFor="number">
          Guess The Number between 1 to 10 (Answer : {SecretNumber})
        </label>
      </div>
      <input type="text" id="number" name="number" onChange={handleChange} />
      <Result SecretNumber={SecretNumber} number={number}/>
    </div>
  );
}
export default App;
