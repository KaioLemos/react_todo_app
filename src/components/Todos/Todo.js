import React, { useState } from 'react';

function Todo({ todo, deleteHandler, updateHandler }) {

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState();

  const updatedTodoState = e => {
    // update the state with te value entered in the input
    setUpdatedTodo({
      id: todo.id,
      message: e.target.value
    })
    console.log(updatedTodoState)
  }

  const updateAndReset = (input, e) => {
    e.preventDefault();
    // call updateHandler with the input
    updateHandler(input)
    setIsEditing(false);
    console.log(updateAndReset)
  }

  return (
    <div>
      {isEditing ?
        <form onSubmit={e => updateAndReset(updatedTodo, e)}>
          <input
            type="text"
            defaulValue={todo.message}
            onChange={updatedTodoState}
          />
        </form>
        :
        <p onDoubleClick={() => setIsEditing(true)}>{todo.message}</p>
      }
      <button onClick={() => deleteHandler(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo;
