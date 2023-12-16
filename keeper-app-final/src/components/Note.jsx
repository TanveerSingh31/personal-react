import React , { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props) {


  let [ editState , setEditState ] = useState(false);
  let [ taskStatus, setStatus ] = useState(false);
  let [ currentTaskData, setTaskData ] = useState({
    taskId: props.taskId,
    title: props.title, 
    body: props.content
  })

  useEffect(()=>{
    let {taskId} = currentTaskData;
    async function markStatus (){ await props.markTaskStatus(taskId, taskStatus) }
    markStatus();
  },[taskStatus]);

  

  function changeText(e){
    let { name, value } = e.target;
    setTaskData((prevValue)=>{
      return ({
      ...prevValue,
      [name] : value 
      });
    });
  }

  async function updateTask(e){
    e.preventDefault(); 
    await props.updateTask(currentTaskData); 
    setEditState(false);
  }

  async function taskCompleted(e){
    setStatus(!taskStatus);  
  }

  return (
    <form>
      <div className={`note ${taskStatus && "completed"}`} >
      <input type="checkbox" onClick={taskCompleted} value={taskStatus}></input>
      <input name="title" contentEditable={ editState && "true"} onChange={changeText} value={currentTaskData.title} disabled={!editState} ></input>
      <input name="body" contentEditable = {editState && "true"} onChange={changeText} value={currentTaskData.body} disabled={!editState}></input>
      <button onClick={(e)=>{ props.deleteTask(props.taskId); e.preventDefault() }}><DeleteIcon /></button>

      <button onClick={(e)=>{
        setEditState(true);
        e.preventDefault();
      }}> Edit </button>

      { editState && <button onClick={updateTask}> Save </button> }
    </div>
    </form>
    
  );
}

export default Note;
