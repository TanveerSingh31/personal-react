import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [taskArr , setArr] = useState([]);

    function addTask(task){
        setArr((prevValue)=>{
            return [...prevValue, task];
        });
        console.log(taskArr);
    }


    function deleteTask(id){
        setArr((prevValue)=>{
            return prevValue.filter((el, i)=>{
               return i !== id;
            });
        })
    }

    return (
    <div>
        <Header />
        <CreateArea addTask={addTask}/>
        { taskArr.map( (el, i) => { return <Note key={i} title={el.title} content={el.content} id={i} deleteTask={deleteTask}/>})} 
        <Footer />
    </div>
    );
}

export default App;
