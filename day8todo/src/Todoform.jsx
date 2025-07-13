import { useState } from "react";
import { TodoList } from "./TodoList";
export function TodoForm() {
  const [todotext, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function addTodo() {
    if (todotext.trim() !== "") {
      setTodos([...todos, todotext]);
      setTodo("");
    }
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_,i) => i !== index));
  }

  function updateTodo(index, newValue) {
    if (newValue.trim() !== "") {
      setTodos(todos.map((_, i) => (i === index ? newValue : _)));
    }
  }


  return (
    <>
      <input type="text" value={todotext} onChange={handleInputChange} />
      <button onClick={addTodo}>Add Todo</button>
      <TodoList doing={todos} delfunc={deleteTodo} updfunc={updateTodo  } />
    </>
  );
}
