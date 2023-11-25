import React from 'react'
import './HeaderFooter.css'

export default function HeaderFooter() {
  return (
    <div className='headerfooter'>
          <div className="headerfooter_container">
            <div className="headerfooter_container_top">
                <span className="headerfooter_container_top_txt">Popular Courses   </span>
            </div>
            <div className="headerfooter_container_cards">
                <div className="headerfooter_container_card">
                    <span className='card_text'>JEE crash</span>
                </div>
                <div className="headerfooter_container_card">
                    <span className='card_text'>NEET crash</span>
                </div>
                <div className="headerfooter_container_card">
                    <span className='card_text'>early learning</span>
                </div>
                <div className="headerfooter_container_card">
                    <span className='card_text'>InstaSolve-the doubt app</span>
                </div>
                <div className="headerfooter_container_card">
                    <span className='card_text'>one to one classes</span>
                </div>
            </div>
        </div>

    </div>
  )
}
