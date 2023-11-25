import React from 'react'
import  './Content2.css';
import CardComp2 from '../CardComp2/CardComp2';

export default function Content2() {
  return (
    <div className='content2'>
    <div className="content2_container">
        <div className="top_part2">
        <div className="top_left2">
            <div className="topleftupper">
                <span className="txt1">Topic specific courses</span>
            </div>
            <div className="topleftbottom">
                <span className="txt2">Master any topic for just $1</span>
            </div>
        </div>
        <div className="top_right2">
            <button className="explore_button">Explore topic</button>
        </div>
        </div>
        <div className="bottom_part2">
            <div className="bottom_cards2">
                <CardComp2 classes="JEE" duration="28 Topics • 40+ hours"/>
                <CardComp2 classes="JEE" duration="28 Topics • 40+ hours"/>
                <CardComp2 classes="JEE" duration="28 Topics • 40+ hours"/>
                <CardComp2 classes="JEE" duration="28 Topics • 40+ hours"/>
            </div>
        </div>
    </div>
      
    </div>
  )
}
