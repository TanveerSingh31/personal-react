import React from 'react';
import reactDom from 'react-dom';

function Cards(props){
    <div>
        <h1> { props.name } </h1>
        <img src={props.img} />
        <p>{props.email}</p>
    </div>
}


reactDom.render(
    <div>
        <Cards name="Beyonce" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" email="b@bnc.com"/>
        {/* <Cards />
        <Cards /> */}
    </div>
    
    ,
    document.getElementById("root")
)
