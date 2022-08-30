import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react
import './CreateTodoButton.css';


//Vamos a crear una función con el nombre de nuestro componente 

function CreateTodoButton(props){

    //Creamos una variable  donde vamos a guardar nuestra función 
    const onClickButton = () => {
      alert('Aquí se debería abrir el modal');
    }

    //Acá dentro vamos a retornar el codigo que necesitemos
    return(
    
      <button className="CreateTodoButton" onClick={onClickButton}>
        +
      </button>
       
    );
}

export { CreateTodoButton };