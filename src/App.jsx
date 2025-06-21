import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./context/todoContext";
import TodoItems from "./components/TodoItems";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id)=>{
    setTodos((prev) => prev.filter((prevTodo)=>(prevTodo.id !== id)))
  }

  const completeTodo = (id) =>{
      setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ?
        {...prevTodo, completed : !prevTodo.completed} : prevTodo)))
    }

  return (
    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, completeTodo }}>
      <div className="w-full h-max flex justify-center mt-[15%] ">
      <div className=' lg:w-[60%] 2xl:w-[40%] rounded-2xl bg-white shadow-[17px_40px_15px_15px_rgba(0,_0,_0,_0.3)] flex flex-col justify-center items-center pt-[3%] pb-[9%]'>
        <TodoForm />
       <div className="w-[100%]">
        {
          todos.length === 0?<h1 className="text-red-600 text-center font-serif font-bold text-lg">
            No Todo to show
          </h1>:
          todos.map((todo)=>{
            return <div key={todo.id} >
               <TodoItems todo={todo} />
            </div>
          })
        }
       </div>
      </div>
      </div>
    </TodoProvider>
  );
};

export default App;
