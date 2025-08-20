import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onUpdateChecked, updatedText, onDelete }) => {
  return (
    <div className='TodoList'>
      <h4>Todo List ☑️</h4>
      <input type="text" placeholder='검색어 입력' />
      <div className="todos-wrapper">
        {todos.map((todo, i) => (<TodoItem key={i} todo={todo} onUpdateChecked={onUpdateChecked} updatedText={updatedText} onDelete={onDelete} />))}
      </div>
    </div>
  )
}

export default TodoList