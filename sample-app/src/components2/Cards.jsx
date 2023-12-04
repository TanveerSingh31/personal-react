import React from 'react';
import Avatar from './Avatar'
import Info from './Info';


export default function Cards(props){
    
    return(
        <div className="card">
            <div className='top'>
                <h1 className="name"> { props.name} </h1>
                <Avatar imgUrl={ props.imgUrl }/>
            </div>
            <div className='bottom'>
                <Info phone={ props.phone } email={ props.email }/>
            </div>
        </div>
    );
   
}



