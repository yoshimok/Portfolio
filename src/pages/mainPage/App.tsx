import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import "./App.css";

function App() {
  const [speed, setSpeed] = useState(20);

  const spinProperty = {
    animation: `App-logo-spin infinite ${speed}s linear`
  };

  const up = () => {
    if (speed < 2) {
      setSpeed(speed - 0.05);

      return;
    }
    setSpeed(speed - 2);
  };

  const down = () => {
    setSpeed(speed + 2);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={spinProperty} />
        <div className={"button-group"}>
          <div className="button" onClick={up}>
            ↑
          </div>
          <div className="button" onClick={down}>
            ↓
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
