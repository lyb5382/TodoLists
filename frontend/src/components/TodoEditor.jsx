import React from 'react'
import './TodoEditor.css'

const TodoEditor = () => {
  return (
    <form className='TodoEditor'>
      <input type="text" placeholder='new Todo' />
      <button>추가</button>
    </form>
  )
}

export default TodoEditor