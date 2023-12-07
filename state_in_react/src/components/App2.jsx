import React, { useState } from 'react';









export default function App2(){

    // useState returns array of 2 elements, first el. is the current state
    // second el. is a function using which we can set the state
    let [ counter, setCounter ] = useState(0);

    console.log(useState(0)); // returns [0, function] ==> 0 is current state , function is the callback fn. we can use to set the state acc. and whenever we want

    function Increase(){
        setCounter(counter+1);
    }
    
    function Decrease(){
        setCounter(counter-1);
    }

    return(
        <div>
            <p>{counter}</p>
            <button onClick={Increase}>+</button>
            <button onClick={Decrease}>-</button>
        </div>
    );
}