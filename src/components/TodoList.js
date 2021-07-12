import React, { useState } from "react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";

const TodoList = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const { completeTodo, deleteTodo, title } = props;
  let todoArr =
    props.todoArr.length > 0
      ? props.todoArr
      : JSON.parse(localStorage.getItem("todos"));
  const editControl = () => {
    setShowEdit(!showEdit);
  };
  const viewTodo = () => (
    <ul>
      {todoArr && todoArr.length > 0
        ? todoArr.map((el) => {
            console.log(el);
            return (
              <li key={el.id}>
                <div className={el["done"] ? "line-through" : null}>
                  {el.title}
                </div>
                <div className="icons">
                  <BsPencil className="ic" title="Edit" onClick={editControl} />
                  <FaCheckCircle
                    title="Complete"
                    className={`"check-box ic ${el["done"] ? "green" : "blue"}`}
                    onClick={() => completeTodo(el.id)}
                  />
                  <FaTrash
                    className="ic"
                    title="Delete"
                    onClick={() => deleteTodo(el.id)}
                  />
                </div>
              </li>
            );
          })
        : null}
    </ul>
  );
  // const editTodo = () => (
  // 	<form>
  // 		return <input type='text' defaultValue={title} />;
  // 	</form>
  // );

  return (
    <div className="todo-list">
      <section>{viewTodo()}</section>
    </div>
  );
};

export default TodoList;
