import React from 'react'
import './TeacherCard.css'
export default function TeacherCard(items) {
  return (
    <div className='teacherCard'>
    <div className="teachercard_container1">
        <div className="teachercard_img1">
            <img src={items.img} alt="" className="teachercard_img12" />
        </div>
        <div className="teachercard_bottom1">
            <div className="teacher_experience">
              {items.exp}
            </div>
            <div className="teacher_name1">{items.name}</div>
            <div className="teacher_subject1">{items.sub}</div>
            <div className="teacher_college">{items.college}</div>
        </div>
    </div>
    </div>
  )
}
