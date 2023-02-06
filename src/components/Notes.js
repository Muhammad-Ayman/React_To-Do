import "./Note.css";
const Notes = (props) => {
  return (
    <div>
      <ul>
        {props.notes.map((note, i) => (
          <li key={note.ID}>
            <section className="note">
              <p>{note.Note}</p>
              <input
                name="isDone"
                type="checkbox"
                onChange={(e) => props.HandleChnge(e.target.checked, i)}
              />
              <button
                className="trash"
                onClick={() => {
                  props.Remove(i);
                }}
              >
                X
              </button>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
