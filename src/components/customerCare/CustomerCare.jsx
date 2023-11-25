import React from 'react'
import './CustomerCare.css'

export default function CustomerCare() {
  return (
    <div className='customercare'>
    <div className="customercare_container">
        <div className="customercare_container_left">
            <div className="customercare_container_left_txt1">Happy to help you!</div>
            <div className="customercare_container_left_txt2">Need more details? Our academic counsellors will be happy to patiently explain everything that you want to know.</div>
            <button className="customercare_container_left_btn">Speak to an expert</button>
        </div>
        <div className="customercare_container_right">
            <img src="./images/people.png" alt="" className="customercare_container_right_img" />
        </div>
    </div>
      
    </div>
  )
}
