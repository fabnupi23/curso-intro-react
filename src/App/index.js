import React from "react";
import { TodoProvider } from "../TodoContext/index";
import { AppUI } from "./AppUI";



function App() {

  //TodoList solo va a renderizar unos todoItems, no todos y para ellos utilizamos el parametro searchedTodos lo cual nos mostrar la lista por defecto y se realizara el filtrado
  return (
    <TodoProvider>
      <AppUI/> 
    </TodoProvider>   
  );
}

export default App;

