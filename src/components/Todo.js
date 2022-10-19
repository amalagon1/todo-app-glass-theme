import React from 'react'

const Todo = ({ text, todo, todos, setTodos, filteredTodos }) => {

    //function for completed task
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };

            }
            return item;
        }))
    }

    //function for delete task
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    //variable for completed todos

    const isCompleted = todos.find(todo => todo.completed === true)
    return (
        //implement ternary operator to change classname and styling of container div///
        <div className={`todo-container ${todo.completed ? "completed" : ''}`}>
            <p>{text}</p>
            <button onClick={completeHandler} className="btn-complete">
                <i className="fa-solid fa-square-check"></i>
            </button>
            <button onClick={deleteHandler} className="btn-trash">
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
