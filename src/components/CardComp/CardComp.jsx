import React from 'react'
import "./CardComp.css"
export default function CardComp(items) {
  return (
    <div>
      <div className="card_container">
        <span className="class">{items.class}</span>
        <span className="course_name">{items.course}</span>
        <div className="course_objectives1">
            <div className="course_objective1">{items.objective1}</div>
            <div className="course_objective1">{items.objective2}</div>
            <div className="course_objective1">{items.objective3}</div>
        </div>
        <button className="explore_btn1">Explore Courses</button>
      </div>
    </div>
  )
}
