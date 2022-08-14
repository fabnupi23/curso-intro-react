import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react
import './TodoSearch.css';

//Vamos a crear una función con el nombre de nuestro componente 

function TodoSearch(){
    //Acá dentro vamos a retornar el codigo que necesitemos
    return(
        <input className="TodoSearch" placeholder="Cebolla" />
    );
}

export { TodoSearch };