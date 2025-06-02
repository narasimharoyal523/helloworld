import React, { useEffect, useState } from "react";
import "./App.css";

function TimeoutExample() {
  const [message, setMessage] = useState("⏳ Waiting...");

  useEffect(() => {
    setTimeout(() => {
      setMessage("✅ Timeout completed after 3 seconds!");
    }, 3000);
  }, []);

  return (
    <div className="card">
      <h3>setTimeout Example</h3>
      <p>{message}</p>
    </div>
  );
}

export default TimeoutExample;
