import React from 'react'
import './Content1.css'
import CardComp from '../CardComp/CardComp'


export default function Content1() {
  return (
    <div className='content1'>
      <div className="content1_container">
        <div className="cards">
            <div className="card">
            <CardComp 
            class="class 5-13" 
            course="Competitive exams"
            objective1="JEE / NEET"
            objective2="Olympiad"
            objective3="EAMCAT"    
            />
            </div>
            <div className="card">
            <CardComp 
            class="class 5-13" 
            course="Competitive exams"
            objective1="JEE / NEET"
            objective2="Olympiad"
            objective3="EAMCAT"    
            />
            </div>
            <div className="card">
            <CardComp 
            class="class 5-13" 
            course="Competitive exams"
            objective1="JEE / NEET"
            objective2="Olympiad"
            objective3="EAMCAT"    
            />
            </div>
        </div>
      </div>
    </div>
  )
}
