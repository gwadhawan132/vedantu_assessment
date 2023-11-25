import React from 'react'
import './StudenCard.css'
export default function StudentCard(items) {
  return (
    <div className='studentcard'>
    <div className="studentcard_container">
        <img src={items.img} alt="" className="student_img" />
        <div className="student_name">{items.name}</div>
        <div className="student_rank">{items.rank}</div>
    </div>
      
    </div>
  )
}
