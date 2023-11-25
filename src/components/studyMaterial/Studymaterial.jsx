import React from 'react'
import './StudyMaterial.css'
import CardComp6 from '../CardComp6/CardComp6'

export default function Studymaterial() {
  return (
    <div className='studymaterial'>
    <div className="studymaterial_container">
    <div className="top6">
      Study Materials
    </div>
    <div className="bottom_content6">
      <CardComp6 
        book="NCERT"
        topic="solutions"
        img="./images/book1.png"
      />
        <CardComp6 
        book="Previous year"
        topic="questions"
        img="./images/book2.png"
      />
        <CardComp6 
        book="sample"
        topic="Solutions"
        img="./images/book3.png"
      />
        <CardComp6 
        book="NCERT"
        topic="Books"
        img="./images/book4.png"
      />
      </div>
      </div>
    </div>
  )
}
