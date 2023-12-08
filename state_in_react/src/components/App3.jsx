import React, { useState } from "react";

function App() {
    let currTime = new Date().toLocaleTimeString();
    let oldtime = 123;

    function changeTime(){
        oldtime = currTime;
        console.log(oldtime);
        currTime = new Date().toLocaleTimeString();
        getTime(currTime);
    }

    setInterval(changeTime, 1000);

    function oldTime(){
        console.log(oldtime);
        getTime(oldtime);
    }

    let [time, getTime] = useState(currTime);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
      <button onClick={oldTime}>Get Old Time</button>
    </div>
  );
}

export default App;
