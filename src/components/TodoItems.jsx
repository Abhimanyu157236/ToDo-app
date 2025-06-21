import React, { useState } from "react";
import { useTodo } from "../context/todoContext";

const TodoItems = ({ todo }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);

  const { updateTodo, deleteTodo, completeTodo } = useTodo();

  const edit = () => {
    updateTodo(todo.id, { ...todo, todo: newTodo });
    setIsEditable(false);
  };

  const toggle = () => {
    completeTodo(todo.id);
  };

  return (
    <>
    <div className="flex justify-between mb-3">
      <div>
        <input
          type="checkbox"
          className="ml-2"
          value={todo.completed}
          onChange={toggle}
        />

        <input
          type="text"
          className={
            todo.completed
              ? "bg-transparent text-gray-400 outline-none ml-2 line-through"
              : "bg-transparent text-black outline-none ml-2"
          }
          value={newTodo}
          readOnly={!isEditable}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>

      <div className="flex justify-evenly text-lg ">
        <button
          className="border-2 border-slate-400 p-1 rounded-lg mr-1"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>

        <button
          className={
            todo.completed
              ? "border-2 border-slate-400 p-1 rounded-lg mr-1 cursor-not-allowed"
              : "border-2 border-slate-400 p-1 rounded-lg mr-1"
          }
          onClick={() => {
            if (todo.completed) return;

            if (isEditable) {
              edit();
            } else {
              setIsEditable((prev) => !prev);
            }
          }}
          disabled={todo.completed}
        >
          {isEditable ? "📁" : "✒️"}
        </button>
      </div>
    </div>
    </>
  );
};

export default TodoItems;
