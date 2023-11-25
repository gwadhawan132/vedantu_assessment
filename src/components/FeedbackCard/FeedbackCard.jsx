import React from 'react'
import './FeedbackCard.css'

export default function FeedbackCard(items) {
  return (
    <div className='feedbackcard'>
      <div className="feedbackcard_container">
        <div className="feedbackcard_top">
          <img src={items.img} alt="" className="feedback_img" />
        </div>
        <div className="feedbackcard_bottom">
          <div className="feedbackcard_bottom_left">
            <div className="feedbackcard_bottom_left_top"> {items.name}</div>
            <div className="feedbackcard_bottom_left_bottom">{items.rank}</div>
            </div>
            <div className="feedbackcard_bottom_right">Student</div>
          
        </div>
    
      </div>
    </div>
  )
}
