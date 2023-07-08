import React, { useState } from "react";

function TodoForm({ todos, setTodos }) {

  const initialState = {
    id: '',
    message: ''
  }

  const [todo, setTodo] = useState(initialState);

  const handleChange = e => {
    setTodo({
      id: Date.now(),
      message: e.target.value
    })  // this is gonna set this message to whatever is entered in the input bellow and set it as this variable "todo" in const above
    console.log(todo)
  };

  const handleSubmit = e => {
    e.preventDefault()
    setTodos([ todo, ...todos ])  // spreads in everything that exists in that todos array already and then adds the todo that I saved in te state on to it.
    setTodo(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={todo.message}
        placeholder="Enter your Todo item"
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
