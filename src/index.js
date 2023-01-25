import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Components/Counter';
import ComponentChildren from './Components/ComponentWithChildren';
import PizzaList from './Components/PizzaList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter heading = "This is the button game" color1="red" color2="white"/> */}
    {/* <Counter heading = "This is the second button game" color1="yellow" color2="black"/> */}
    {/* <ComponentChildren>
      <p>Child1</p>
    </ComponentChildren> */}

    <PizzaList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
