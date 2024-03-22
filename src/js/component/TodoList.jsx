import React, {useState} from 'react'
import { FaTrashCan } from "react-icons/fa6";

const TodoList = () => {

    const [task, setTask] = useState("")
    const [list, setList] = useState([])

    const handlerInput = (e) => {
        let text = e.target.value ;
        if (e.keyCode == 13){
            setTask(text);
            setList([...list,text]);
            e.target.value = "";
        }
    }

    const deleteTask = (index) => {
        let newList = list.slice();
        newList = newList.filter((item , index2) => {
            return index2 != index;
        })
        setList(newList);
    }

  return (
    <div className="notebook">
        <h1>To Do List</h1>
        <input onKeyUp={(e)=>{handlerInput(e)}} placeholder='Write your task'></input>
        <ol>
            {list.map((item,index)=>{

                return <li key={index}>{item} 
                <button onClick={(e) => {deleteTask(index)}}><FaTrashCan /></button>
                </li>

            })}
            <p>{list.length} pending tasks</p>
        </ol>
        <div className="wooden-table"></div>
    </div>
  )
}

export default TodoList