import React from "react";

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleCompleted(props.todo.id)}
            className={`todo${props.todo.completed ? ' completed' : ''}`}
            >
                <p>{props.todo.item}</p>
        </div>
    );
};

export default Todo;