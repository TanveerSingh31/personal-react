import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';

function App() {

    const [taskArr , setArr] = useState([]);    


    async function addTask(task){
        setArr((prevValue)=>{
            return [...prevValue, task];
        });

        let res = await axios.post('http://localhost:4000/', {
            title: task.title, 
            body: task.content
        });
        
        alert("Task Added !");
        console.log(taskArr);
    }


    async function deleteTask(id){
        setArr((prevValue)=>{
            return prevValue.filter((el, i)=>{
               return i !== id;
            });
        });

        let res = await axios.delete('http://localhost:4000/', {
            params : { taskId: id }
        });
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
