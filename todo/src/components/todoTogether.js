import React, { useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export const TodoTogether = () => {
 const [state, dispatch]   = useReducer(todoReducer, initialState);
 console.log(state, dispatch);

const addItem = newItemText => dispatch({type: "ADD_TODO", text: newItemText});

const toggleCompleted = id => dispatch({type: "TOGGLE_COMPLETED", id: id});

const clearCompleted = () => dispatch({type: "CLEAR_COMPLETED"});

 return (
     <div>
         <TodoForm addItem={addItem}/>
         <TodoList clearCompleted={clearCompleted} toggleCompleted={toggleCompleted} todo={state.todo}/>
     </div>
 )
}