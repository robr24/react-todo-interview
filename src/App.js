import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import './style.css';

export default function App() {
  const [loading, setLoading] = useState();
  const date = new Date();

  const _onLoad = (bool) => {
    setLoading(bool);
  };

  return (
    <>
      <div className={loading ? 'loading' : ''}></div>
      <div>
        <h1>ToDo List: {date.toDateString()}</h1>
        <ToDoList onLoad={_onLoad} />
      </div>
    </>
  );
}
