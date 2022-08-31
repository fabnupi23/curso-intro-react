import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react

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

export { useLocalStorage };