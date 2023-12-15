import React , { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props) {


  let [ editState , setEditState ] = useState(false);
  let [ currentTaskData, setTaskData ] = useState({
    taskId: props.taskId,
    title: props.title, 
    body: props.content
  })

  function changeText(e){
    let { name, value } = e.target;
    setTaskData((prevValue)=>{
      return ({
      ...prevValue,
      [name] : value 
      });
    });
  }

  return (
    <form>
      <div className="note">
      <input name="title" contentEditable={ editState && "true"} onChange={changeText} placeholder={props.title} disabled={!editState}></input>
      <input name="body" contentEditable = {editState && "true"} onChange={changeText} placeholder={props.content} disabled={!editState}></input>
      <button onClick={()=>{ props.deleteTask(props.taskId) }}><DeleteIcon /></button>

      <button onClick={(e)=>{
        setEditState(true);
        e.preventDefault();
      }}> Edit </button>

      { editState && <button onClick={(e)=>{ props.updateTask(currentTaskData); e.preventDefault() } }> Save </button> }
    </div>
    </form>
    
  );
}

export default Note;
