import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    // console.log(todos)
    return (
        <ul className="todo-list">
            {/* <h2>Task List</h2> */}
            {filteredTodos.map(todo => (
                <Todo
                    setTodos={setTodos}
                    todos={todos}
                    todo={todo}
                    key={todo.id}
                    text={todo.text}
                />
            ))}

        </ul>
    )
}

export default TodoList
