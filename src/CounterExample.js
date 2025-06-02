import React, { useState, useEffect } from "react";
import "./App.css";

function CounterExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(counter); // Cleanup
  }, []);

  return (
    <div className="card">
      <h3>Counter</h3>
      <p className="counter">🔢 {count}</p>
    </div>
  );
}

export default CounterExample;
