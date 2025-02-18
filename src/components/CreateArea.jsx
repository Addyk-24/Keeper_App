import React, { useState } from "react";

function CreateArea(props) {
  const [MainNote, setMainNote] = useState({
    Inputtitle: "",
    Inputcontent: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setMainNote({ ...MainNote, [name]: value });
  }

  function Submit(event) {
    props.onAdd(MainNote);
    setMainNote({ Inputtitle: "", Inputcontent: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handlechange}
          value={MainNote.Inputtitle}
          placeholder="Title"
          type="text"
        />
        <textarea
          name="content"
          onChange={handlechange}
          value={MainNote.Inputcontent}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={Submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
