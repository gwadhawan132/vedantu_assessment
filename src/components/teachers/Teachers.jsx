import React from 'react'
import './Teachers.css'
import TeacherCard from './TeacherCard'
import { teacher_details } from '../../Data'

export default function Teachers() {
  return (
    <div className='teachers'>
        <div className="teachers_container">
        <div className="teacher_top">
            Teachers
        </div>
        <div className="teachers_bottom">
           {teacher_details.map(techr=>{
           return <TeacherCard key={techr.id} items={techr}/>
           })} 
            </div>
        </div>

    </div>
  )
}

