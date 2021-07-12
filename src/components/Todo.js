import React from "react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
const Todo = ({ todo, deleteTodo, completeTodo, editTodo }) => {
  return (
    <li>
      <div className={todo.isCompleted ? "line-through" : null}>
        {todo.title}
      </div>
      <div className="icons">
        <BsPencil
          className="ic"
          title="Edit"
          onClick={() => editTodo(todo.id)}
        />
        <FaCheckCircle
          title="Complete"
          className={`"check-box ic ${todo.isCompleted ? "green" : "blue"}`}
          onClick={() => completeTodo(todo.id)}
        />
        <FaTrash
          className="ic"
          title="Delete"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </li>
  );
};

export default Todo;
