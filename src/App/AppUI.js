import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue, 
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}){
    return(
    <React.Fragment> 
      <TodoCounter
        total={totalTodos} 
        completed={completedTodos}     
      />      
      <TodoSearch
        searchValue={searchValue} 
        setSearchValue={setSearchValue}      
      />
      

      <TodoList> 

        {error && <p>Error al cargar la pagina...</p>}
        {loading && <p>Estamos cargando la pagina, tomalo con calma...</p>}  
        {(!loading && !searchedTodos.length) && <p>!Crea tu primer ToDo!</p>}


        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>
        ))}
      </TodoList> 

      <CreateTodoButton/> 
      
    </React.Fragment>
    );
}

export { AppUI };