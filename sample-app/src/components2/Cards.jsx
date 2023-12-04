import React from 'react';
import Avatar from './Avatar'


export default function Cards(props){
    
    return(
        <div className="card">
            <div className='top'>
                <h1 className="name"> { props.name} </h1>
                <Avatar imgUrl={ props.imgUrl }/>
            </div>
            <div className='bottom'>
                <p className='info'> { props.phone }</p>
                <p className='info'> { props.email }</p>
            </div>
        </div>
    );
   
}



