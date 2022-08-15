import React from "react"; //Por cada uno de los componentes vamos a importar a React desde react
import './TodoItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';



//Vamos a crear una función con el nombre de nuestro componente 

function TodoItem(props){
    //Acá dentro vamos a retornar el codigo que necesitemos
    return(
      <div className="centrar">
        
        <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
        </span>
        
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>

        {props.text}

        </p>

        <span className="Icon Icon-delete">
          <FontAwesomeIcon icon={faTrashCan} />
        </span>         
      </li>
      </div>
    );
}

export { TodoItem };