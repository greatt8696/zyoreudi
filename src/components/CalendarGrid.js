import React from 'react'

const CalendarGrid = (props) => {
  const { content, className, delay } = props



  return (
    <div onClick={clickHandler} className={className} style={{
      animationDelay: delay
    }}>
      <p>{content}</p>
    </div>
  )
}
const clickHandler = (e) => {
  e.target.classList.toggle("selected")
}

export default CalendarGrid