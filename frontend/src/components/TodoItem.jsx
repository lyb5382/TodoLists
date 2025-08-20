import React from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, onDelete, onUpdateChecked }) => {
  const isCompleted = !!todo.isCompleted
  return (
    <div className='TodoItem'>
      <input type="checkbox" checked={todo.isCompleted} onChange={() => onUpdateChecked(todo._id, !todo.isCompleted)} readOnly />
      <div className="content">{todo.text}</div>
      <div className="date">{new Date(`${todo.date}`).toISOString().slice(0, 10)}</div>
      <div className="btn-wrap">
        <button className="updateBtn">✏️</button>
        <button className="deleteBtn" onClick={() => { onDelete(todo._id) }}>🗑️</button>
      </div>
    </div>
  )
}

export default TodoItem