import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from "react";
import ToDoInput from '../components/Todo-Input/todo-input';
import ToDoItem from '../components/ToDo-Item/todo-item';

function ToDo() {

    const [lstNote, setlstNote] = useState([]);

    useEffect(() => {

        console.log("get data from storage" + lstNote)

        const lst = JSON.parse(localStorage.getItem('lstNote'));
        if (lst) {
            setlstNote(lst);
        }

    }, []);


    const handleDelete = (value) => {
        console.log(value);
        var arrayCopy = [...lstNote]; // make a separate copy of the array
        var index = arrayCopy.indexOf(value)
        if (index !== -1) {
            arrayCopy.splice(index, 1);

            localStorage.setItem('lstNote', JSON.stringify(arrayCopy))
        }
        setlstNote(arrayCopy);
    }

    const handleAdd = (value) => {
        const newArray = [...lstNote, value]

        localStorage.setItem('lstNote', JSON.stringify(newArray))

        setlstNote(newArray);
    }

    return (
        <div className="wrapper">
            <div className="todo__box">
                <ToDoInput onAdd={handleAdd}></ToDoInput>
                <ListGroup as="ul">
                    {
                        lstNote.map((item, index) => {
                            return (
                                <ToDoItem key={index} dataItem={item} onDelete={handleDelete}></ToDoItem>
                            )
                        })
                    }
                </ListGroup>
            </div>
        </div>
    );
}

export default ToDo;