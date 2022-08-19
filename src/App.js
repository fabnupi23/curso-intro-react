import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";


//import './App.css';


//Creamos una lista falsa de ToDos; Creamos un array que se llame Todos, y vamos a decirle que es un array con objetos y cada objeto va a tener varias propiedades.
const defaultTodos = [
  { text: 'Maquetación React', completed: true}, //Este texto va a tener una descripción de nuestra tarea pendiente y cada ToDo va a tener una propiedad llamada completed y por defecto ponerla False
  { text: 'Personalizar maquetación', completed: false}, 
  { text: 'Funcionalidad React', completed: false},
  { text: 'Subir a GitHub', completed: true}  
];


function App() {
  //Acá vamos a crear nuestros ToDos para que el usuario los pueda generar y no esten hardcodeados; es decir, creamos un nuevo estado para nuestros ToDos
  const [todos, setTodos] = React.useState(defaultTodos);

  //Acá vamos a crear a nuestro estado 
  const [searchValue, setSearchValue] = React.useState(''); //...entonces para crear un estado en react vamos a llamar a React.useState, esta es la forma en que podemos agregar estados a nuestros componentes cuando los creamos como funciones 

  //Acá vamos a contar cuantos Todos hemos completado y cuantos tenemos en total 
  const completedTodos = todos.filter(todo => !!todo.completed).length; //Cada vez que se renderice nuestro componente vamos a hacer esta cuenta, es decir cuantos ToDos se han marcado como completados 
  const totalTodos = todos.length; //Acá vamos a tener el total de ToDos

  //vamos a filtrar la cantidad de ToDos por medio de un array vacio
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;    //va a ser igual la lista de ToDos que tenemos por defecto
  }else{
    //Nuestro array donde realmente vamos a buscar los componentes que vamos a renderizar 
    searchedTodos = todos.filter(todo => {
      //creamos una variable para que en la busqueda no discrimine tipografia
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      //Ahora vamos a filtrar a definir si cada uno de nuestros ToDos tiene el texto que incluye algo de lo que digitamos en nuestro input de busqueda
      return todoText.includes(searchText); //Lorestornamos para decirle a nuestro metodo filter que ese es el criterio de evaluación todoText.includes(searchText) para determianr que ToDos muestra y cuales no.
    });
  }

//TodoList solo va a renderizar unos todoItems, no todos y para ellos utilizamos el parametro searchedTodos lo cual nos mostrar la lista por defecto y se realizara el filtrado
  return (
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
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList> 

      <CreateTodoButton/> 
      
    </React.Fragment>
  );
}

export default App;

