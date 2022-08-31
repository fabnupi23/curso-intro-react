import React from "react";
import { TodoContext } from '../TodoContext/index';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI(){
    return(
    <React.Fragment> 
      <TodoCounter/>      
      <TodoSearch/>

      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, completeTodo, deleteTodo, }) => (
          <TodoList> 
            {error && <p>Error al cargar la pagina...</p>}
            {loading && <p>Estamos cargando la pagina, tomalo con calma...</p>}  
            {(!loading && !searchedTodos.length) && <p>!Crea tu primer ToDo!</p>}
    
    
            {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>
          ))}
        </TodoList> 
        )}
      </TodoContext.Consumer>

      <CreateTodoButton/> 
      
    </React.Fragment>
    );
}

export { AppUI };