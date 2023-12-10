import React from 'react'
import './ResultCard.css'
import StudentCard from './StudentCard'
import { student_details } from '../../Data'

export default function ResultCard() {
  return (
    <div className='resultcard'>
    <div className="resultcard_container">
        <div className="resultcard_top">
            Vedantu Stars Shine Yet Again in <span className="resultcardtop_txt">.  JEE ADVANCED 2023</span>
        </div>
        <div className="resultcard_bottom">
            <div className="resultcard_bottom_left"> 

          { student_details.map((stdnt)=>{
            return <StudentCard items={stdnt}/>
          }) }
             </div>
            <div className="resultcard_bottom_right">
                <img src="./images/result.png" alt="" className="resultcard_img" />
            </div>
        </div>
    </div>
    </div>
  )
}

