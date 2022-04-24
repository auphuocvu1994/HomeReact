import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css';

function ToDoItem(props) {
    const [show, setShow] = useState(false);

    return (
        <li className={`list-item ${show ? "disable" : ""}`} onClick={() => setShow(prev => !prev)}>
            <span>{props.dataItem}</span>
            <FontAwesomeIcon className='btnDelete' icon={faTrash}

                onClick={() => props.onDelete(props.dataItem)}
            />
        </li>
    );
}

export default ToDoItem;