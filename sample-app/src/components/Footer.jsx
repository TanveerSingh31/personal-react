import React from 'react';


let currDate = new Date();
let currYear = currDate.getFullYear();

export default function Footer(){
    return ( <footer>Copyright @ { currYear } </footer>);
}