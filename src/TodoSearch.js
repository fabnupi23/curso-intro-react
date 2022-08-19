import React from 'react';  //Por cada uno de los componentes vamos a importar a React desde react
import './TodoSearch.css';

//Vamos a crear una función con el nombre de nuestro componente

function TodoSearch({searchValue, setSearchValue}) { //acá en la función recibimos en el parametro dos props
    
  //El evento onChange que es un propeidad para que filtre todos los TodoItems  que tengan en su propiedad text, el texto que nosotros escribamos en el campo, para esto creamos un arrowFunction
  const onSearchValueChange = (event) => {  //Este evento es especial porque nos va a devolver el valor del input, es por eso que recibimos un parametro llamado 'event'
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  //Acá dentro vamos a retornar el codigo que necesitemos

  return (
    <input
      className="TodoSearch"
      placeholder="Introduce el ToDo"
      value={searchValue}   //Debemos indicarle que el valor es el mismo estado searchValue
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };