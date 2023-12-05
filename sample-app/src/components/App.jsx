import React from "react";
import Form from './Form';

let isLoggedIn = false;

function App() {
  return (
    <div className="container">
        {/* Renders different components based on some condition */}
      { !isLoggedIn ? <Form /> : <h1>Hello</h1> }
    </div>
  );
}

export default App;
