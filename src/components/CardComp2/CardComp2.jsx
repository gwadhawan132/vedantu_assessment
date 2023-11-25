import React from 'react'
import "./CardComp2.css"
export default function CardComp(items) {
  return (
    <div>
      <div className="card2_container">
        <span className="classes">{items.classes}</span>
        <span className="duration">{items.duration}</span>
       
       </div>
    </div>
  )
}
