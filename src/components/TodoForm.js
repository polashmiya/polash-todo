import React, { useState, useEffect } from "react";
import TodoList1 from "./TodoList1";
const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    let arr = localStorage.getItem("todoList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTodoList(obj);
    }
  }, []);
  const createTodo = () => {
    if (title !== "") {
      const newTodo = {
        title,
        id: new Date().getTime().toString(),
        isCompleted: false,
      };
      let tempList = todoList;
      todoList.push(newTodo);
      localStorage.setItem("todoList", JSON.stringify(tempList));
      setTodoList(tempList);
      setTitle("");
    } else {
      alert("Plz Add A todo First..");
    }
    setToggle(false);
  };
  const deleteTodo = (id) => {
    window.confirm("Are you sure to delete?");
    const updateTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(updateTodo);
    localStorage.setItem("todoList", JSON.stringify(updateTodo));
  };
  const completeTodo = (id) => {
    const completeTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        const updateTodo = { ...todo, isCompleted: !todo.isCompleted };
        return updateTodo;
      }
      return todo;
    });
    setTodoList(completeTodoList);
  };
  const editTodo = (id) => {
    const updateTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(updateTodo);
    const currentTodo = todoList.find((todo) => todo.id === id);
    setTitle(currentTodo.title);
    setToggle(true);
  };
  return (
    <>
      <div className="todo-form">
        <div className="todo-title">
          <h1>Polash Todo App</h1>
          <h3>Create A New Todo</h3>
        </div>
        <div className="create-todo">
          <input
            className="todo-input"
            type="text"
            name="todo"
            required
            placeholder="Create One..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {toggle ? (
            <button
              type="button"
              name="addTodo"
              className="btn"
              onClick={createTodo}
            >
              update Todo
            </button>
          ) : (
            <button
              type="button"
              name="addTodo"
              className="btn"
              onClick={createTodo}
            >
              Add Todo
            </button>
          )}
        </div>
      </div>
      <TodoList1
        todoList={todoList}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
        toggle={toggle}
      />
    </>
  );
};

export default TodoForm;
