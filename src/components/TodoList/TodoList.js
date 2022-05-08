import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AiOutlineReload } from 'react-icons/ai';
import './TodoList.css';
import Todo from '../Todo/Todo';
import { UserContext } from '../../App';

const TodoList = ({parentRefreshKey}) => {
    const { user } = useContext(UserContext);
    const [todoList, setTodoList] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);
    const refreshList = () => { setRefreshKey(oldKey => oldKey + 1); }
    const URL = 'todo/'+user.id;
    const getAllTodo = () => {
        axios(URL, {
            method: "GET",
        }).then((res) => {
            setTodoList([...res.data]);
        }).catch((err) => {
            console.log(err.message);
        });
    }
    useEffect(getAllTodo, [refreshKey, parentRefreshKey]);
    console.log(todoList.length);
    return (
        <div className='todolist'>
            <div className='container'>
                <div className='heading'>{todoList.length} things todo</div>
                {/* <button className='refresh-btn' onClick={refreshList}><AiOutlineReload size={"25px"} color={"black"} /></button> */}
            </div>
            <div className='todolist-list'>
                {todoList.map((item, index) => <Todo key={item._id} index={index + 1} todo={item} oldRefreshKey={refreshKey} onUpdate={newKey => setRefreshKey(newKey)} />)}
            </div>
        </div>
    );

}

export default TodoList;