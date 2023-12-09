import React from 'react'
import './CardComp6.css'

export default function CardComp6({items}) {
  return (
    <div className='cardComp6'>
    <div className="cardcomp_container5">
        <div className="top6">
            <span className="txt6">{items.book}</span>
            <span className="text6_bottom">{items.topic}</span>
        </div>
        <div className="bottom6_card">
            <img className='images_6' src={items.img} alt="" />
        </div>
    </div>
      
    </div>
  )
}
