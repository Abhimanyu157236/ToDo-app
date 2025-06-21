import React from 'react';
import { useTodo } from '../context/todoContext';
import plus from '../assets/add.png'
import { useState } from 'react';
const TodoForm = () => {
  const[todo,setTodo] = useState()
  const {addTodo} = useTodo()

  const add = (e) => {
     e.preventDefault() 

     if(!todo) return

     addTodo({todo, completed:false})
     setTodo("")
  }
  return (
    <div className='w-full' >
        <div className='flex justify-between'>
            <h1 className='text-2xl md:text-xl lg:text-2xl 2xl:text-4xl text-indigo-900 font-extrabold font-serif p-5 ml-[7%]'>To-Do List</h1>
            <button className='mr-9 mb-2'
            onClick={add}>
             <img src={plus} alt="" className=' w-9' />
            </button>
        </div>
        <div className='w-full flex justify-center mb-14'>
           <input type="text" placeholder='Add a task...' className=' border-2 border-black rounded-xl py-3 px-5 w-[95%] mx-3 bg-violet-200' 
           value={todo}
           onChange={(e)=>setTodo(e.target.value)}/>  
        </div>
       
    </div>
  );
}

export default TodoForm;
