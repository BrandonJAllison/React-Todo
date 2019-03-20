
import React from 'react'
import Todo from './Todo.js'


const TodoList = props => {
    return (
      <div>
        {props.items.map(todo => (
          <Todo
            key={todo.id}
            todo={todo.task}
          />
        ))}
      </div>
    );
  };
  
  


export default TodoList;