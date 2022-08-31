import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react
import { useLocalStorage } from '../hooks/useLocalStorage';

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const TodoContext = React.createContext(); //Esta herramienta nos permite crear contextos.

function TodoProvider(props){

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []); // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
    
    
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
        searchedTodos = todos.filter(todo => {    //Nuestro array donde realmente vamos a buscar los componentes que vamos a renderizar
          const todoText = todo.text.toLowerCase(); //creamos una variable para que en la busqueda no discrimine tipografia
          const searchText = searchValue.toLowerCase();
          //Ahora vamos a filtrar a definir si cada uno de nuestros ToDos tiene el texto que incluye algo de lo que digitamos en nuestro input de busqueda
          return todoText.includes(searchText); //Lo retornamos para decirle a nuestro metodo filter que ese es el criterio de evaluación todoText.includes(searchText) para determianr que ToDos muestra y cuales no.
        });
      }
    
      
    
    
    
      
      //Esta función Es para marcar los ToDos como completados. 
      const completeTodo = (text) => { //cuando llamemos a la funcion completeTodos, vamos a enviarle un texto es decir el texto de nuestro ToDo 
        const todoIndex = todos.findIndex(todo => todo.text === text); //Buscamos la posicion o el index en ToDo que tenga el mismo texto que estamos recibiendo como parametros
        const newTodos = [...todos];  //Creamos una copia de los ToDos
        newTodos[todoIndex].completed = true; //...Les estamos marcando a esos ToDos de tener esas mismas condiciiones de tener ese mismo texto la propiedad completed como true
        saveTodos(newTodos);//Volvemos a llamar esta funcón para actualizar la lista 
      };
    
      //Eliminar ToDos
      const deleteTodo = (text) => {  
        const todoIndex = todos.findIndex(todo => todo.text === text); //Buscamos la posicion o el index en ToDo que tenga el mismo texto que estamos recibiendo como parametros
        const newTodos = [...todos];   //Creamos una copia de los ToDos
        newTodos.splice(todoIndex, 1);//En este metodo enviamos dos argumentos 
        saveTodos(newTodos); //Volvemos a llamar esta funcón para actualizar la lista 
      };






    return(
        <TodoContext.Provider value={{
           loading,
           error,
           totalTodos,
           completedTodos,
           searchValue, 
           setSearchValue,
           searchedTodos,
           completeTodo,
           deleteTodo,
        }}>
            {props.children} 
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };
