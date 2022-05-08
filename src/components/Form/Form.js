import React, { useContext } from "react";
import axios from "axios";

import "./Form.css";
import { UserContext } from "../../App";

function Form( {oldRefreshKey, onUpdate} ) {

    const { user } = useContext(UserContext);

    const saveTodo = (event) => {
        event.preventDefault();
        const todoName = event.target.elements.name.value;
        if(todoName === null || todoName === undefined || todoName === ""){
            alert("Please write What to do!!");return;
        }
        if(todoName.length > 25){
            alert("Please name a todo within 25 characters!"); return;
        }
        axios("/todo", {
            method: "POST",
            data:{
                name: todoName,
                userId: user.id,
            }
        }).then(res => {
            console.log(res.data.name);
            onUpdate(oldRefreshKey+1);
        }).catch((err) => { console.log(err); });
    };
    return (
        <form className="form" onSubmit={saveTodo}>
            <label className="label">What to do?</label>
            <input name="name" className="input" type="text" placeholder="Feed the cat"></input>
            <button className="button" type="submit">
                Add Todo
            </button>
        </form>
    );
}

export default Form;
