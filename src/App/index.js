import React from "react";
import { AppUI } from "./AppUI";



//import './App.css';


//Creamos una lista falsa de ToDos; Creamos un array que se llame Todos, y vamos a decirle que es un array con objetos y cada objeto va a tener varias propiedades.
/* const defaultTodos = [
  { text: 'Maquetación React', completed: true}, //Este texto va a tener una descripción de nuestra tarea pendiente y cada ToDo va a tener una propiedad llamada completed y por defecto ponerla False
  { text: 'Personalizar maquetación', completed: false}, 
  { text: 'Funcionalidad React', completed: false},
  { text: 'Subir a GitHub', completed: true}  
]; */



function useLocalStorage(itemName, initialValue){ // Recibimos como parámetros el nombre y el estado inicial de nuestro item.
  const[error, setError] = React.useState(false);  
  const[loading, setLoading] = React.useState(true);  
  const [item, setItem] = React.useState(initialValue); // ¡Podemos utilizar otros hooks!

  React.useEffect(() =>{
    setTimeout(() =>{
      try{
        const localStorageItem = localStorage.getItem(itemName);  // Guardamos nuestro item en una constante
        let parsedItem;

        if (!localStorageItem) {    
          localStorage.setItem(itemName, JSON.stringify(initialValue)); // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
          parsedItem = initialValue;  //le damos un estado por defecto a nuestra aplcación
        }else{
          parsedItem = JSON.parse(localStorageItem);  // Si existen TODOs en el localStorage los regresamos como nuestros todos
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(error){
         setError(error);
      }
    }, 1000);
  });
  

  const saveItem = (newItem) => { // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
    try {
      const stringifiedItem = JSON.stringify(newItem);  // Convertimos a string nuestros TODOs
      localStorage.setItem(itemName, stringifiedItem);  // Los guardamos en el localStorage
      setItem(newItem); // Actualizamos nuestro estado
    } catch (error) {
      setError(error);
    }
  }; 

  // Regresamos los datos que necesitamos en nuestro reactHook
  return {
    item,
    saveItem,
    loading,
    error,
  };

}


function App() {

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


 //TodoList solo va a renderizar unos todoItems, no todos y para ellos utilizamos el parametro searchedTodos lo cual nos mostrar la lista por defecto y se realizara el filtrado
  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos} 
      completedTodos={completedTodos}

      searchValue={searchValue} 
      setSearchValue={setSearchValue}

      searchedTodos={searchedTodos}

      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />    
  );
}

export default App;
