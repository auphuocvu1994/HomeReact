import React, { useState, useRef } from "react";
import './style.css';



function ToDoInput({ onAdd }) {
    const forcusInput = useRef();

    const [nameOfWord, setNameOfWord] = useState();

    const handleChange = (e) => {
        let value = e.target.value

        setNameOfWord(value);
    }

    const handleAdd = (e) => {
        e.preventDefault()
        forcusInput.current.focus()
        onAdd(nameOfWord)
        setNameOfWord('');
    }

    return (
        <form action="" className="todo__form">
            <input ref={forcusInput} type="text"
                className="form-control"
                placeholder="..."
                value={nameOfWord}
                onChange={e => handleChange(e)}
            />
            <button
                className="btn__add"
                onClick={e => handleAdd(e)} >Add</button>

        </form>
    );
}

export default ToDoInput;