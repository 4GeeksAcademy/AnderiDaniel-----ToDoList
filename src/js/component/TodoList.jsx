import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const TodoList = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const handlerInput = (e) => {
        let text = e.target.value;
        if (e.keyCode === 13) {
            setTask(text);
            setList([...list, text]);
            e.target.value = "";
        }
    }

    const deleteTask = (index) => {
        let newList = list.filter((item, index2) => index2 !== index);
        setList(newList);
    }

    return (
        <div className="notebook">
            <h1>To Do List</h1>
            <input onKeyUp={(e) => { handlerInput(e) }}></input>
            <ol>
                {list.map((item, index) => (
                    <li key={index}>
                        {index + 1}. {item}
                        <button onClick={() => { deleteTask(index) }}>
                            <FaTrashAlt />
                        </button>
                    </li>
                ))}
            </ol>
            <p>{list.length == 0? "No tasks, add a task": `${list.length} pending tasks`} </p>
            <div className="wooden-table"></div>
        </div>
    )
}

export default TodoList;
