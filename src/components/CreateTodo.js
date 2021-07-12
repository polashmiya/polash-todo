import React, { useState } from "react";
import swal from "sweetalert";
import TodoList from "./TodoList";
const CreateTodo = () => {
  const [todo, setTodo] = useState({ title: "", done: false, id: "" });
  const [todoArr, setTodoArr] = useState([]);
  let todos = localStorage.hasOwnProperty("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const onChangeHandle = (e) => {
    let { value } = e.target;
    let obj = {};
    obj["title"] = value;
    obj["done"] = false;
    obj["id"] = new Date().getTime().toString();
    setTodo(obj);
  };
  const createTodo = (e) => {
    const { name } = e.target;
    if (e.key === "Enter" || name === "addTodo") {
      if (todo.title !== "") {
        todos.unshift(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodo({ title: "", done: false });
      } else {
        swal("Opps", " Please Add Any Todo First", "error");
      }
    }
  };
  const completeTodo = (id) => {
    if (todos[id]["done"] !== true) {
      todos[id]["done"] = true;
      localStorage.setItem("todos", JSON.stringify(todos));
      setTodoArr(todos);
      swal("Good Job!", "Todo Complete", "success");
    }
  };
  const deleteTodo = (id) => {
    swal({
      title: "Are you sure ?",
      text: "If you deleted once, you will not be able to recover it!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((res) => {
      if (res) {
        todos.splice(id, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodoArr(todos);
      }
    });
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
            placeholder="Create One..."
            value={todo.title}
            onChange={onChangeHandle}
            onKeyPress={createTodo}
          />
          <button
            type="button"
            name="addTodo"
            className="btn"
            onClick={createTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
      <TodoList
        todoArr={todoArr}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        title={todo.title}
      />
    </>
  );
};

export default CreateTodo;
