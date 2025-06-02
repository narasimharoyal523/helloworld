import React from 'react';
import './App.css';

function App() {
    const numbers = [1,2,3,4,5];

    //const doubled = numbers.map(num => num * 2).join(" ")
    //const evenNumbers = numbers.filter(num => num % 2 ===0).join(" ");
    const sum = numbers.reduce((acc,num) => acc+num, 0);

    
    return (
        <><div>
            {}
        </div>
        <>
            <div>
                {}
            </div>
        <>
        <div>{sum}</div>
        </>    
        </></>
    )
} 

//function Hello() {
    //const name = "Royal";
    //console.log("Hello " + name + "!.");
    //return <h1>Hello JSX</h1>
//}

//function person() {
    //const myElement = <h1>I Love JSX!</h1>;

    //const root = ReactDOM.createRoot(document.getElementById('root'));
    //root.render(myElement);
    /*return (
        <div>{myElement}</div>
    )*/
//}

//function Welcome(props) {
   // return <h1>Hello, {props.name}!</h1>
//}

//function App() {
   // return (
      //  <div>
          //  <Welcome name="Royal" />
            //<Welcome name="Narasimha" />
        //</div>
   // )
//}
export default App;