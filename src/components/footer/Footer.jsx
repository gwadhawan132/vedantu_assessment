import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
    <div className="footer_container">
            <div className="footer_top_left">
                <div className="footer_top_left_first">Learn from <span className="footer_txt"> anywhere</span></div>
                <div className="footer_txt2">We're available on Android device and platforms. study from anywhere at your convinience.</div>
                <div className="playstore_btn">
                    <div className="playstore_left">
                        <img src="./images/playstore.png" alt="" className="playstore_img" />
                    </div>
                    <div className="playstore_right">Google Play</div>
                </div>
            </div>
            <div className="footer_top_right">
                <img src="./images/phone.png" alt="" className="footer_top_right_img" />
            </div>
    </div>
      
    </div>
  )
}
