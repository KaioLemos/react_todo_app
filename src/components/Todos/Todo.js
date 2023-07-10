import React, { useState } from "react";

function Todo({ todo, deleteHandler, updateHandler }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    id: todo.id,
    message: todo.message
  });
  const [isDone, setIsDone] = useState(false);

  const updatedTodoState = e => {
    setUpdatedTodo({
      id: todo.id,
      message: e.target.value
    });
    console.log(updatedTodoState);
  };

  const updateAndReset = (input, e) => {
    e.preventDefault();
    // call updateHandler with the input
    updateHandler(input);
    setIsEditing(false);
    console.log(updateAndReset);
  };

  const handleDoneClick = () => {
    setIsDone(true);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={e => updateAndReset(updatedTodo, e)}>
          <input type="text" defaultValue={todo.message} onChange={updatedTodoState} />
        </form>
      ) : (
        <p onDoubleClick={() => setIsEditing(true)}>{todo.message}</p>
      )}
      <div>
        <button onClick={() => deleteHandler(todo.id)}>Delete</button>
        {isDone ? (
          <button style={{ backgroundColor: "green", color: "white" }}>Done</button>
        ) : (
          <button style={{ backgroundColor: "gray" }} onClick={handleDoneClick}>
            To Do
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;
