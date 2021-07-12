import React from "react";
import Todo from "./Todo";
const TodoList1 = ({ todoList, deleteTodo, completeTodo, editTodo }) => {
  return (
    <div className="todo-list">
      <section>
        <ul>
          {todoList.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                editTodo={editTodo}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default TodoList1;
