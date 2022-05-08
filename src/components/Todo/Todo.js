import React from 'react';
import axios from 'axios';

import { AiOutlineDelete } from 'react-icons/ai';

import './Todo.css';

const Todo = ({ index, todo, oldRefreshKey, onUpdate }) => {
    const name = todo.name;
    const _id = todo._id;
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const createdDate = (new Date(todo.createdDate)).toLocaleDateString("en-IN", options);
    const deleteTodo = () => {
        const URL = "/todo/" + _id;
        axios(URL, {
            method: "DELETE",
        }).then((res) => {
            onUpdate(oldRefreshKey + 1);
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <div className='todo'>
            <div className='todo-info'>
                <div className='todo-info-index'>{index}</div>
                <div className='todo-info-container'>
                    <div>{name}</div>
                    <div className='todo-info-container-date'>{createdDate}</div>
                </div>
            </div>
            <button className='todo-btn-del' onClick={deleteTodo}><AiOutlineDelete/></button>
        </div>
    );
}

export default Todo;