import React from "react";
import Term from './Term';
import Details from './Details';
import emojipedia from '../emojipedia';


function GetList(obj){

    return(
        <div className="term">
                <Term name={obj.name} emoji={obj.emoji}/>
                <Details meaning={obj.meaning}/>
        </div>
    );
}

export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className='dictionary'>
            { emojipedia.map(GetList) }
      </dl>
    </div>
  );
}

