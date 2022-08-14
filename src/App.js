import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

//import './App.css';


//Creamos una lista falsa de ToDos; Creamos un array que se llame Todos, y vamos a decirle que es un array con objetos y cada objeto va a tener varias propiedades.
const todos = [
  { text: 'Cortar cebolla', completed: true}, //Este texto va a tener una descripción de nuestra tarea pendiente y cada ToDo va a tener una propiedad llamada completed y por defecto ponerla False
  { text: 'Tomar curso intro a React', completed: false}, 
  { text: 'Iron Man - Tony Stark', completed: false} 
];


function App() {
  return (
    <React.Fragment> 
      <TodoCounter/>      
      <TodoSearch/>
      

      <TodoList> 
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList> 

      <CreateTodoButton/> 
      
    </React.Fragment>
  );
}

export default App;

