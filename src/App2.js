// Import the React library
import React from 'react';

// Define the main App component
function App() {

  // Create a function called sayHello that shows a popup alert
  const sayHello = () => {
    alert("Hello! Welcome to React 🚀"); // Show this message when button is clicked
  };

  // Return the JSX layout for rendering
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {/* Heading text */}*/
      <h1>React Event Example</h1>

      {/* Button with an onClick event that calls sayHello */}
      <button onClick={sayHello}>Click Me</button>
    </div>
  )
}

// Export the App component so it can be used in index.js
export default App;

//function App() {
  //const shoot = (msg) => {
    //alert(msg);
  //};

  //return (
    //<button onClick={() => shoot("GOAL!!!")}>Shoot</button>
  //);
//}
//export default App;