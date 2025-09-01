import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
export const ToDos = () => {
  const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  useEffect(()=>{

const fetchTodos = async()=>{
    try{
        setIsLoading(true);
        setError(null);
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(response.data.slice(0,10));
        console.log(response.data);
    }
    catch(error){
        setError("Error fetching todos........");
        console.error("error fetching todos:", error);
    }finally{
        setIsLoading(false);
    }
    };
    fetchTodos(); //call the async function
  },[])

  const deleteTodos = async(id)=>{
    try{
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
    }
    catch(error){
        console.error("error deleting todo:", error);
    }
  };


    return (
      <div>
        <h1>Todo using useEffect async</h1>
        {isLoading && <p>Loading todos...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!isLoading && !error && (
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.title}
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteTodos(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
}
