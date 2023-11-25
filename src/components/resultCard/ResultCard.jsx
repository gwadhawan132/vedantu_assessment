import React from 'react'
import './ResultCard.css'
import StudentCard from './StudentCard'

export default function ResultCard() {
  return (
    <div className='resultcard'>
    <div className="resultcard_container">
        <div className="resultcard_top">
            Vedantu Stars Shine Yet Again in <span className="resultcardtop_txt">.  JEE ADVANCED 2023</span>
        </div>
        <div className="resultcard_bottom">
            <div className="resultcard_bottom_left"> 

            <StudentCard 
            img="./images/student1.png"
            name="prakhar"
            rank="AIR 21"
            /> 

            <StudentCard 
            img="./images/student2.png"
            name="Aakash"
            rank="AIR 28"
            /> 

            <StudentCard 
            img="./images/student3.png"
            name="aditi"
            rank="AIR 104"
            /> 
             </div>
            <div className="resultcard_bottom_right">
                <img src="./images/result.png" alt="" className="resultcard_img" />
            </div>
        </div>
    </div>
    </div>
  )
}

