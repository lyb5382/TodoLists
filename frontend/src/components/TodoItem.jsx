import React, { useState } from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, onDelete, onUpdateChecked, onUpdateText }) => {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(todo.text)
  const isCompleted = !!todo.isCompleted
  const startEdit = () => {
    setText(todo.text)
    setEditing(true)
  }
  const cancleEdit = () => {
    setText(todo.text)
    setEditing(false)
  }
  const saveEdit = async () => {
    const next = text.trim()
    if (!next || next === todo.text) return setEditing(false)
    await onUpdateText(todo._id, next)
    setEditing(false)
  }
  const handleKeyDown = (e) => {
    if (e.key == 'Enter') saveEdit()
    if (e.key == 'Escape') cancleEdit()
  }
  return (
    <div className={`TodoItem ${isCompleted ? 'isCompleted' : ''}`}>
      <input type="checkbox" checked={todo.isCompleted} onChange={() => onUpdateChecked(todo._id, !todo.isCompleted)} readOnly />
      {editing ? (<div className="edit-wrap">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} placeholder='수정' />
        <div className="date">{new Date(`${todo.date}`).toISOString().slice(0, 10)}</div>
        <div className="btn-wrap">
          <button className="updateBtn" onClick={saveEdit}>✔️</button>
          <button className="deleteBtn" onClick={cancleEdit}>❌</button>
        </div>
      </div>
      ) : (<div className="content-wrap">
        <div className="content">{todo.text}</div>
        <div className="date">{new Date(`${todo.date}`).toISOString().slice(0, 10)}</div>
        <div className="btn-wrap">
          <button className="updateBtn" onClick={startEdit}>✏️</button>
          <button className="deleteBtn" onClick={() => { onDelete(todo._id) }}>🗑️</button>
        </div>
      </div>)}
    </div>
  )
}

export default TodoItem