import React, { useEffect } from "react";
import "./App.css";

function IntervalExample() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("🔁 Logging every 2 seconds");
    }, 2000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="card">
      <h3>setInterval Example</h3>
      <p>Check your console every 2 seconds ⏱️</p>
    </div>
  );
}

export default IntervalExample;
