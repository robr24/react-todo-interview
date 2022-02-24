import React, { useCallback, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ToDoInput({ handleTodos, todos }) {
  const inputRef = useRef();
  const [unique, setUnique] = useState(true);

  useEffect(() => {
    _isUnique();
  }, [todos]);

  const _isUnique = useCallback(() => {
    const value = inputRef.current.value;
    const fields = Object.keys(todos).map((td) => todos[td].task);
    const isUnique = !fields.some((f) => f === value.trim());
    setUnique(isUnique);
  }, [todos]);

  const _onSubmit = (event) => {
    event.preventDefault();
    let myuuid = uuidv4();

    const value = inputRef.current.value.trim();

    if (unique && value) {
      handleTodos(
        {
          id: myuuid,
          task: value,
          completed: false,
        },
        true
      );
    }
  };

  return (
    <form onSubmit={_onSubmit} className="todo-form">
      <input
        type="text"
        ref={inputRef}
        placeholder="Add task"
        className={unique ? 'unique' : ''}
        onChange={_isUnique}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
