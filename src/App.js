import React from "react";
import "./App.css";
import TimeoutExample from "./TimeoutExample";
import IntervalExample from "./IntervalExample";
import ClockExample from "./ClockExample";
import CounterExample from "./CounterExample";

function App() {
  return (
    <div className="app-container">
      <h1>🕒 React Timer Examples with CSS</h1>
      <TimeoutExample />
      <IntervalExample />
      <ClockExample />
      <CounterExample />
    </div>
  );
}

export default App;
