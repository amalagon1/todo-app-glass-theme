
import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Circle from './components/Circle';

function App() {


  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filtereHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filtereHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };


  const getLocalTodos = () => {
    let list = JSON.parse(localStorage.getItem('todos'));
    if (list) {
      setTodos(list);
      console.log(list);
    }
  }
  return (
    <div className="wrapper">
      <h1 className="title">My Todo List</h1>
      <Dashboard todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <Circle />
    </div>
  );
}

export default App;
