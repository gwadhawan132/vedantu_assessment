import React from 'react'
import './Content5.css'
import CardComp5 from '../CardComp5/CardComp5'
import { class_details } from '../../Data'


export default function Content5() {
  return (
    <div className='content5'>
    <div className="content5_container">
    <div className="top5">
        <div className="top_left5">
            Free LIVE classes
        </div>
        <div className="top_right5">
            View all
        </div>
    </div>
    <div className="bottom5">
    {class_details.map(class_detail=>{
      return  <CardComp5 key={class_detail.id} items={class_detail}/>
    })}
     
      </div>
      </div>
    </div>
  )
}
