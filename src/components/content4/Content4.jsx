import React from 'react'
import './Content4.css'
import CardComp41 from '../CardComp4-1/CardComp4-1'
import CardComp42 from '../CardComp4-2/CardComp4-2'

export default function Content4() {
  return (
    <div className='content4'>
      <div className="content4_container">
        <div className="top">
            <div className="top_desc">
                <span className="txt_top1">Vedantu</span>
            </div>
            <div className="top_cards">

                <CardComp41 
                title="Enhance Your JEE Preparation with Tatva Books"
                txt1="Cover the Full jee Syllabus"
                txt2="22 Printed books"
                txt3=" Delivered within 15 days"
                price= "6993"
                coupon="VCAR"
                 />
                   <CardComp41 
                title="Enhance Your JEE Preparation with Tatva Books"
                txt1="Cover the Full jee Syllabus"
                txt2="22 Printed books"
                txt3=" Delivered within 15 days"
                price= "6993"
                coupon="VCAR"
                 />
            </div>
        </div>
        <div className="bottom">
            <div className="bottom_desc">
                <span className="txt_bottom">Offerings</span>
            </div>
            <div className="bottom_cards">
        <CardComp42 class="class 12 pass"/>
        <CardComp42 class="class 12"/>
        <CardComp42 class="class 10"/>
        <CardComp42 class="class 9"/>
        <CardComp42 class="class 8"/>
        <CardComp42 class="class 7"/>
        <CardComp42 class="class 6"/>
        <CardComp42 class="class 1-5"/>
        
        
            </div>
        </div>
      </div>
    </div>
  )
}
