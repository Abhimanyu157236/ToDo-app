import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo:[
        {
            id : 1,
            todo : "",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    updateTodo : (todo,id) => {},
    completeTodo : (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider