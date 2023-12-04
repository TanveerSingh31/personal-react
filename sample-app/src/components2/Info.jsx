import React from 'react';

export default function Info(props){
    return (
        <div>
            <p className='info'> { props.phone }</p>
            <p className='info'> { props.email }</p>
        </div> 
    )
}

