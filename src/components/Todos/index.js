import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

function Todos() {

  const [todoList, setTodoList] = useState([]);
  console.log('app.js', todoList);

  useEffect(() => {
    axios.get('http://localhost:8888/todos', {})
      .then(res => {
        setTodoList(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []) // [] is to prevent infinite loop

  const deleteHandler = id => {
    axios.delete(`http://localhost:8888/todos/${id}`)
      .then(res => {
        console.log(res);
        const newTodos = todoList.filter(item => {
          return item.id !== id;
      })
      setTodoList(newTodos);
      })
      .catch(err => {
        console.log(err);
      }
    )
  }

  const updateHandler = todo => {

    axios.put(`http://localhost:8888/todos/${todo.id}`, todo)
      .then(res => {
        setTodoList(todoList.map(item => {
          if (item.id === todo.id) {
            return {
              ...item,
              message: todo.message
            }
          } else {
            return item;
          }
        }))
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <TodoForm todos={todoList} setTodos={setTodoList} />
      <TodoList todos={todoList} deleteHandler={deleteHandler} updateHandler={updateHandler} />
    </div>
  )
}

export default Todos;
