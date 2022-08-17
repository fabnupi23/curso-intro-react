import React from 'react';  //Por cada uno de los componentes vamos a importar a React desde react
import './TodoSearch.css';

//Vamos a crear una función con el nombre de nuestro componente

function TodoSearch() {
    //Para el tema dele stado empezamos creando una variable...
  const [searchValue, setSearchValue] = React.useState(''); //...entonces pra crear un estado en ract vamos a llamar a React.useState, esta es la forma en que podemos agregar estados a nuestros componentes cuando los creamos como funciones 
  
  //El evento onChange que es un propeidad para que filtre todos los TodoItems  que tengan en su propiedad text el texto que osotros escribamos en el campo, para esto creamos un arrowFunction
  const onSearchValueChange = (event) => {  //Este evento es especial porque nos va a devolver el valor del input, es por eso que recibimos un parametro llamado 'event'
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  //Acá dentro vamos a retornar el codigo que necesitemos

  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}   //Debemos indicarle que el valor es el mismo estado searchValue
      onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };