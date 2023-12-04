import React from 'react';


export default function Term(props){
    return (
        <dt>
            <span className="emoji" role="img" aria-label={props.label}>
              {props.emoji}
            </span>
            <span>{props.name}</span>
        </dt>
    );
} 
