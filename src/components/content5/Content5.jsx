import React from 'react'
import './Content5.css'
import CardComp5 from '../CardComp5/CardComp5'


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
      <CardComp5 
        subject="chemistry"
        description="Mega boards on characteristics of chemical reactions"
        teacher="by Divyasha sidana"
        img="./images/teacher1.png"
      />
      <CardComp5 
        subject="Mathematics"
        description="Introduction to trigonometry master class"
        teacher="by Shivanshu Atrey"
        img="./images/teacher2.png"

      />
      <CardComp5 
        subject="Mathematics"
        description="Best approach to classification- general mental ability test"
        teacher="by Sahil bhatia"
        img="./images/teacher3.png"
      />
      </div>
      </div>
    </div>
  )
}
