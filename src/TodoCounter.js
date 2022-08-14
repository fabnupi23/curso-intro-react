import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react
import './TodoCounter.css';

//Vamos a crear una función con el nombre de nuestro componente 

function TodoCounter(){
    //Acá dentro vamos a retornar el codigo que necesitemos
    return(
        <h2 className="TodoCounter">Has completado 2 de 3 ToDos</h2>
    );
}

export { TodoCounter };