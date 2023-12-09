import React, {useState} from "react";

function CreateArea(props) {

  const [ text, setText ] = useState({
    title: "",
    content: ""
  });

  function ChangeText(e){
    let {name, value} = e.target; 
    setText((prevValue)=>{
      return { ...prevValue, [name]: value}
    });
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={ChangeText} value={text.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={ChangeText} value={text.content}/>
        <button onClick={(e)=>{
          props.addTask(text);
          setText({title:"", content:""});
          e.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
