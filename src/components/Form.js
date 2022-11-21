import React, { useState } from 'react'

// function TodoForm({ setInputText, todos, setTodos, inputText }) {
//     const inputTextHandler = (e) => {
//         console.log(e.target.value);
//         setInputText(e.target.value);
//     }

//     const submitTodoHandler = (e) => {
//         e.preventDefault();
//         setTodos([
//             ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
//         ]); setInputText("");
//     };
// }
const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]); setInputText("");
        console.log(todos)
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    const deleteAllHandler = () => {
        setTodos([])
    }
    return (
        <div className="form-container">
            <h2>Add a task</h2>
            <form>
                {/* <input value={inputText}
            onChange={inputTextHandler}
        >
        </input> */}
                {/* <button className="todo-btn" type="submit" onClick={submitTodoHandler}>
           
        </button> */}
                <div className="input-items">
                    <input value={inputText}
                        onChange={inputTextHandler}></input>
                    <button onClick={submitTodoHandler} className="add-btn">
                        <i className="fas fa-plus-square"></i>
                    </button>
                </div>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                <button className="delete-btn" onClick={deleteAllHandler}>Delete All Tasks</button>
            </form>

        </div>

    )
}

export default Form
