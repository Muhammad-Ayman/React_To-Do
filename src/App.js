import { useState } from "react";
import Form from "./components/Form";
import Notes from "./components/Notes";

let counter = 0;
const App = () => {
  const [notes, setNotes] = useState([]);

  const append = (note) => {
    setNotes((prevNotes) => {
      return [{ Note: note, ID: counter++ }, ...prevNotes];
    });
  };

  const remove = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const NoteState = (isChecked, index) => {
    setNotes((prevNotes) => {
      let nwArr = [...prevNotes];
      if (isChecked) {
        nwArr.push(prevNotes[index]);
        nwArr.splice(index, 1);
      } else {
        nwArr = [prevNotes[index], ...prevNotes];
        nwArr.splice(index + 1, 1);
      }
      return nwArr;
    });
  };
  return (
    <div>
      <Form onSubmit={append}></Form>
      <Notes notes={notes} Remove={remove} HandleChnge={NoteState}></Notes>
    </div>
  );
};

export default App;
