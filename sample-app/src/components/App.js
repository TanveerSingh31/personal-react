import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from '../notes';

function CreateNote(obj){
  return(
    <Note title={obj.title} content={obj.content}/>
  )
}

function App() {
  return (
    <div>
      <Header />
      { notes.map(CreateNote) }
      <Footer />
    </div>
  );
}

export default App;
