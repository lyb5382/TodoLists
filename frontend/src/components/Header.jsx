import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <h1>🗓︎ {new Date().toLocaleString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</h1>
    </header>
  )
}

export default Header