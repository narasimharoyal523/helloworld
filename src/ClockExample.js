import React, { useState, useEffect } from "react";
import "./App.css";

function ClockExample() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(clock); // Cleanup
  }, []);

  return (
    <div className="card">
      <h3>Real-time Clock</h3>
      <p className="clock">{time}</p>
    </div>
  );
}

export default ClockExample;
