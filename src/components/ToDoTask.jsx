import React, { useRef, useState } from 'react';

export default function ToDoTask({ handleTodos, todo }) {
  const [editMode, setEditMode] = useState();
  const inputRef = useRef();

  const _onChange = () => {
    handleTodos({
      ...todo,
      completed: !todo.completed,
    });
  };

  const _toggleEdit = (event, bool) => {
    event.stopPropagation();
    setEditMode(bool);
  };

  const _updateTaskName = (event) => {
    const value = inputRef.current.value.trim();

    if (value) {
      handleTodos(
        {
          ...todo,
          task: value,
        },
        true
      );
      _toggleEdit(event, false);
    }
  };

  return (
    <li className="todo-task-list-item">
      <input type="checkbox" checked={todo.completed} onChange={_onChange} />
      {(editMode && (
        <>
          <input type="text" defaultValue={todo.task} ref={inputRef} />
          <button onClick={_updateTaskName}>update</button>
        </>
      )) || (
        <span className={todo.completed ? 'completed' : ''} onClick={_onChange}>
          <>
            <span>{todo.task}</span>
            <a
              href="#self"
              onClick={(event) => _toggleEdit(event, true)}
              className="edit"
            >
              edit
            </a>
          </>
        </span>
      )}
    </li>
  );
}
