import React from 'react'
import './Header.css'
import HeaderFooter from './HeaderFooter'

export default function Header() {
  return (
    <div className='header'>
        <div className="header_container">
        <div className="header_top">
        <div className="header_desc">
        <span className="first_line">This Diwali</span>
        <span className="second_line">Get JEE main + adv. + Board</span>
        <span className="second_line">Preparation at just 8000</span>
       </div>
        <div className="header_btn">
        <button className="enrol_btn">Enrol Now</button>
        </div>
        </div>
    </div>
    </div>
  )
}
