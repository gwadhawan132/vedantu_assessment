import React from 'react'
import './Feedback.css'
import FeedbackCard from './FeedbackCard'

export default function Feedback() {
  return (
    <div className='feedback'>
    <div className="feedback_container1">
      <FeedbackCard 
        name="Chandvi Taneja"
        rank="NEET 575"
        img="./images/feedback1.png"
      />
      <FeedbackCard 
        name="Arya Verma"
        rank="98.4% CBSE XII"
        img="./images/feedback2.png"
      />
      <FeedbackCard 
        name="Akshat kumar"
        rank="98.2% CBSE XII"
        img="./images/feedback3.png"
      />
      </div>
    </div>
  )
}
