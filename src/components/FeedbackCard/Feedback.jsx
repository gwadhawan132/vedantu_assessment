import React from 'react'
import './Feedback.css'
import FeedbackCard from './FeedbackCard'
import { feedback } from '../../Data'

export default function Feedback() {
  return (
    <div className='feedback'>
    <div className="feedback_container1">

    {feedback.map(student=>{
      return  <FeedbackCard key={student.id} items={student}/>
    })}
      </div>
    </div>
  )
}
