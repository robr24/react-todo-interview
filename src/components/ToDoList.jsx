import React from 'react';
import React, { useState } from 'react';
import ToDoInput from './ToDoInput';
import ToDoTask from './ToDoTask';

export default function ToDoList({ onLoad }) {
  const [todos, setTodos] = useState({});

  const _handleTodos = (todo, useLoader) => {
    const DELAY = useLoader ? 1000 : 0;
    if (useLoader) {
      onLoad(true);
    }
    window.setTimeout(() => {
      setTodos((prevState) => ({
        ...prevState,
        [todo.id]: {
          id: todo.id,
          task: todo.task,
          completed: todo.completed,
        },
      }));
      if (useLoader) {
        onLoad(false);
      }
    }, DELAY);
  };

  return (
    <div className="todo-list">
      <ToDoInput handleTodos={_handleTodos} todos={todos} />
      <ol>
        {Object.keys(todos).map((td, index) => (
          <ToDoTask
            todo={todos[td]}
            handleTodos={_handleTodos}
            key={`${index}-${td}`}
          />
        ))}
      </ol>
    </div>
  );
}
