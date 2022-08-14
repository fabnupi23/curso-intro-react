import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react
import './TodoCounter.css';

//Vamos a crear una función con el nombre de nuestro componente 

function TodoCounter(){
    //Acá dentro vamos a retornar el codigo que necesitemos
    return(
        <section>
            <h1 className="TodoCounter">Bienvenido</h1>
            <h2 className="TodoCounter-segundo">Has completado 2 de 3 ToDos</h2>
        </section>
    );
}

export { TodoCounter };