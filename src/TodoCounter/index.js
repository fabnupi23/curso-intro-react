import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react
import './TodoCounter.css';
import saludo from '../img/saludo.svg';




//Vamos a crear una función con el nombre de nuestro componente 

function TodoCounter({total, completed}){
    //Acá dentro vamos a retornar el codigo que necesitemos
    return(
        <div className="formulario">
            <img className="saludo" src={saludo} alt="Saludo"></img>
            <h1 className="TodoCounter"> Bienvenido</h1>
            <h2 className="TodoCounter-segundo">Has completado {completed} de {total} ToDos</h2>
        </div>
    );
}

export { TodoCounter };
