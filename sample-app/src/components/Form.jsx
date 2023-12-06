import React from 'react';
import Input from './Input';


function Form(props) {
  return (
    <form className="form">
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />
    { props.userIsRegistered === false && <Input type="password" placeholder="Confirm Password" /> } 
    <button type="submit">{ props.userIsRegistered ? "Login" : "SignUp" } </button>
    </form>
  );
}

export default Form;
