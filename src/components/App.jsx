import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);

  // console.log(MainNote.InitTitle);
  function AddNote(NewNote) {
    setnotes([...notes, NewNote]);
  }

  function DeleteNote(delNote_id) {
    setnotes(
      notes.filter((noteitem, index) => {
        return delNote_id != index;
      })
    );
    // setnotes((perNote) => {
    //   return notes.filter((NoteItem, index) => {
    //     return index != delNote_id;
    //   });
    // });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDel={() => {
              return DeleteNote(index);
            }}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
