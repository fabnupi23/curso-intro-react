import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react
import './CreateTodoButton.css';


//Vamos a crear una función con el nombre de nuestro componente 

function CreateTodoButton(props){
    //Acá dentro vamos a retornar el codigo que necesitemos
    return(
    
      <button className="CreateTodoButton">+</button>
       
    );
}

export { CreateTodoButton };