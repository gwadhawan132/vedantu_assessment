import React from 'react'
import './Inspire.css'
import FeedbackCard from '../FeedbackCard/FeedbackCard'

export default function Inspire() {
  return (
    <div className='inspire'>
    <div className="inspire_container">
    <div className="inspire_heading">Stories that inspire</div>
      <div className="inspire_box">
    
        <div className="inspire_top">
            <div className="inspire_top_left">
                <img src="./images/inspire.png" alt="" className="inspire_img" />
            </div>
            <div className="inspire_top_right">
                <div className="inspire_txt1">After i joined the eklavya batch at Vedantu, i Cracked KVPY and WEBJEE and discovered my true potential.</div>
                <div className="inspire_txt2">Rhythm Sabharwal</div>
                <div className="inspire_txt3">AIR | NEET 2021</div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}
