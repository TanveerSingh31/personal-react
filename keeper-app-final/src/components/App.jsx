import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';

function App() {

    const [taskArr , setArr] = useState([]);  
    const [taskArr2 , setArr2] = useState([]);  

    useEffect(()=>{
        async function getData(){
            let result = await axios.get("http://localhost:4000/");
            setArr2(result.data);   
        }
        getData();
    }, [taskArr]);   
    // whenever taskArr is changed, it will be changed only when addTask is pressed
    // and whenever taskArr is changed, this will invoke useEffect function which will then change taskArr2
    // and then we map on taskArr2 and give data to custom component <Note />


    async function addTask(task){
        let res = await axios.post('http://localhost:4000/', {   // we call API's before setting the arr value, because as soon as we call setArr method , it will cause change in taskArr , and this in turn will invoke useEffect function and which will hit get API for the tasks , which is still not added in the db , therefore it will not return the new task added, to avoid this we hit the API first and then render the page
            title: task.title, 
            body: task.content
        });

        setArr((prevValue)=>{
            return [...prevValue, task];
        });
        alert("Task Added !");
    }


    async function deleteTask(taskId){
        let res = await axios.delete('http://localhost:4000/', {
            params : { taskId }
        });

        setArr((prevValue)=>{
            return prevValue.filter((el)=>{
               return el.taskId !== taskId;
            });
        });
    }

    async function updateTask(taskData){
        let res = await axios.put('http://localhost:4000/', {
            taskData
        });
        console.log({taskData});
    }

    return (
    <div>
        <Header />
        <CreateArea addTask={addTask}/>
        { taskArr2.map( (el, i) => { return <Note key={el.taskId} title={el.title} content={el.body} taskId={el.taskId} deleteTask={deleteTask} updateTask={updateTask}/>})} 
        <Footer />
    </div>
    );
}

export default App;
