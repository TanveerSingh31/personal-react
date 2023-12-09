import React, {useState} from 'react';


export default function App4(){
    let currName;

    let [customStyle , setStyle] = useState();


    // gets called on hover
    function onHover(){
       let customStyleObj = {
            backgroundColor: "black",
            color: "white"
        }
        setStyle(customStyleObj);
        console.log(customStyle);
    }

    // gets called on mouse out
    function onOut(){
        let customStyleObj = {
            backgroundColor: "#6bbe92",
            color: "white"
        }

        setStyle(customStyleObj);
    }

    let [name, setName] = useState();

    function SetName(){
        currName = document.querySelector('input').value;
        console.log(currName);
        setName(currName);
    }


    return(
        <div>
            <h1>Hello , {name}</h1>
            <input placeholder='Enter Your Name'></input>
            <button onClick={SetName} onMouseOver={onHover} onMouseOut={onOut} style={customStyle}>Submit</button>
        </div>
    )
}