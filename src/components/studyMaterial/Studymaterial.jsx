import React from 'react'
import './StudyMaterial.css'
import CardComp6 from '../CardComp6/CardComp6'
import { study_material } from '../../Data'

export default function Studymaterial() {
  return (
    <div className='studymaterial'>
    <div className="studymaterial_container">
    <div className="top6">
      Study Materials
    </div>
    <div className="bottom_content6">

    {study_material.map(material=>{
      return<CardComp6 key={material.id} items={material}/>
    })}
      
      </div>
      </div>
    </div>
  )
}
