import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react
import './TodoList.css'

//Vamos a crear una función con el nombre de nuestro componente 

function TodoList(props){
    //Acá dentro vamos a retornar el codigo que necesitemos
    return(
        <section>
           <ul>
            {props.children}
           </ul>
        </section>
    );
}

export { TodoList };