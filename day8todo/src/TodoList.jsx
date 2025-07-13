import { useState } from "react";

export function TodoList({ doing, delfunc, updfunc }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function startEdit(index, currentText) {
    setEditingIndex(index);
    setEditText(currentText);
  }

  function saveEdit() {
    updfunc(editingIndex, editText);
    setEditingIndex(null);
    setEditText("");
  }

  function cancelEdit() {
    setEditingIndex(null);
    setEditText("");
  }

  return (
    <>
      <ul>
        {doing.map((item, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input 
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                {item}
                <button onClick={() => delfunc(index)}>X</button>
                <button onClick={() => startEdit(index, item)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
