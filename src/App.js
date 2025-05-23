import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [message, setMessage] = useState("");

  let calculateBMI = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid Weight and Height !!!");
    } else {
      let bmi = weight / (height / 100) ** 2;
      setBMI(bmi.toFixed(1));

      if (bmi < 16) {
        setMessage("You have a Severe Thinness!!!");
      } else if (bmi >= 16 && bmi <= 17) {
        setMessage("You have a Moderate Thinness");
      } else if (bmi >= 17 && bmi <= 18.5) {
        setMessage("You have a Mild Thinnesst :)");
      } else if (bmi >= 18.5 && bmi <= 25) {
        setMessage("You have a Balanced Weight ;)");
      } else if (bmi >= 25 && bmi <= 30) {
        setMessage("You have a Overweight");
      } else if (bmi >= 30 && bmi <= 35) {
        setMessage("You have a Obese Class I");
      } else if (bmi >= 35 && bmi <= 40) {
        setMessage("You have a Obese Class II");
      } else {
        setMessage("You are Obese Class III");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label>Weight (KG)</label>
            <input
              type="text"
              placeholder="Enter your Weight in KG"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (Cm)</label>
            <input
              type="text"
              placeholder="Enter your Height in CM"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
