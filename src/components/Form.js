import { useState } from "react";
import "./Form.css";
const Form = (props) => {
  let [task, seTask] = useState("");

  let [isValid, setValid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim().length > 0) {
      props.onSubmit(task);
      setValid(true);
    } else setValid(false);

    seTask("");
    setValid(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ borderColor: isValid ? "blue" : "red" }}
        name="WhatToDO"
        type="text"
        placeholder="To-Do..."
        value={task}
        onChange={(e) => {
          seTask(e.target.value);
          setValid(e.target.value.trim().length > 0);
        }}
      />
      <button
        style={{
          backgroundColor:
            task.trim().length > 0 ? "rgb(39, 181, 228)" : "lightblue",
        }}
        type="submit"
      >
        Add Note
      </button>
    </form>
  );
};

export default Form;
