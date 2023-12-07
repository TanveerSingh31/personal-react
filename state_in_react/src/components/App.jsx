import React from 'react';


let taskDone;


// this code doesnot work , because the components need to rerender on the screen , because their propeties have changed after they have been rendered on screen

//This can be achieved using Hooks. 
function Strike(){
    taskDone = true;
}

function UnStrike(){
    taskDone = false;
}

function App() {
  return (
    <div>
    <p style={{textDecoration : taskDone && "line-through"}}>Task 1</p>
    <button onClick={ Strike }> Done </button>
    <button onClick={ UnStrike }> UnDone </button>
    </div>
  );
}

export default App;
