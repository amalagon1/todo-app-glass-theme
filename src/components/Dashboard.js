import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

const Dashboard = ({ todos, setTodos, inputText, setInputText, setStatus, filteredTodos }) => {
    return (
        <div className="dashboard">
            {/* <h1>My Todo List</h1>
            <p>This is an app</p> */}
            <Form todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
                filteredTodos={filteredTodos}
            />
        </div>
    )
}

export default Dashboard
