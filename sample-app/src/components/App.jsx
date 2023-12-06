import React from "react";
import Form from './Form';

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
        {/* Renders different components based on some condition */}
      <Form userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
