import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react
import './TodoCounter.css';
import saludo from './img/saludo.svg';



//Vamos a crear una función con el nombre de nuestro componente 

function TodoCounter(){
    //Acá dentro vamos a retornar el codigo que necesitemos
    return(
        <div className="formulario">
            <img class="saludo" src={saludo} alt="Saludo"></img>
            <h1 className="TodoCounter"> Bienvenido</h1>
            <h2 className="TodoCounter-segundo">Has completado 2 de 3 ToDos</h2>
        </div>
    );
}

export { TodoCounter };
