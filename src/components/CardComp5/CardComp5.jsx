import React from 'react'
import './CardComp5.css'

export default function CardComp5({items}) {
  return (
    <div className='cardcomp5'>
    <div className="cardcomp5_container">
        <div className="top_part5">
            <img src={items.img} alt="" />
        </div>
        <div className="bottom_part5">
            <span className="subject5">
                {items.subject}
            </span>
            <span className="subject_desc">{items.description}</span>
            <span className="teacher_name">{items.teacher}</span>
            <button className="join_btn5">Join Now</button>
        </div>
    </div>      
    </div>
  )
}
