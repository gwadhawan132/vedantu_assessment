import React from 'react'
import './Teachers.css'
import TeacherCard from './TeacherCard'

export default function Teachers() {
  return (
    <div className='teachers'>
        <div className="teachers_container">
        <div className="teacher_top">
            Teachers
        </div>
        <div className="teachers_bottom">
            <TeacherCard 
                img="./images/teacher6.png"
                exp="11+ years exp"
                name="Shreyas"
                sub="Physics master"
                college="NIT Nagpur"
            />
            <TeacherCard 
                img="./images/teacher4.png"
                exp="4+ years exp"
                name="Nidhi"
                sub="Chemistry master"
                college="Jamia hamdard"
            />
            <TeacherCard 
                img="./images/teacher5.png"
                exp="2+ years exp"
                name="Luv"
                sub="Chemistry master"
                college="IISc bangalore"
            />
            </div>
        </div>

    </div>
  )
}
