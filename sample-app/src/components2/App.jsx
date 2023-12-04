import React from 'react';
import reactDom from 'react-dom';
import contact from '../contact'
import Cards from './Cards'

console.log(contact);


export default function App(){
    return (
    <div>
        <h1 className='heading'>My Contacts</h1>
        <Cards name={contact[0].name} imgUrl={contact[0].imgURL} phone={contact[0].phone} email={contact[0].email}/>
        <Cards name={contact[1].name} imgUrl={contact[1].imgURL} phone={contact[1].phone} email={contact[1].email}/>
        <Cards name={contact[2].name} imgUrl={contact[2].imgURL} phone={contact[2].phone} email={contact[2].email}/>
    </div>
    );
}