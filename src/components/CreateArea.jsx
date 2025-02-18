import React, { useState } from "react";

function CreateArea(props) {
  const [MainNote, setMainNote] = useState({
    inputtitle: "",
    inputcontent: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setMainNote({ ...MainNote, [name]: value });
  }

  function Submit(event) {
    props.onAdd(MainNote);
    setMainNote({ inputtitle: "", inputcontent: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handlechange}
          value={MainNote.inputtitle}
          placeholder="Title"
          type="text"
        />
        <textarea
          name="content"
          onChange={handlechange}
          value={MainNote.inputcontent}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={Submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
