import React from 'react'
import './CardComp4-1.css'
export default function CardComp41(items) {
  return (
    <div>
      <div className="cardComponent4-1_container">
        <div className="top_section">
            <span className="top_desc1">{items.title}</span>
        </div>
        <div className="middle_section">
            <span className="txt_2">✔ {items.txt1} </span>
            <span className="txt_2">✔ {items.txt2}</span>
            <span className="txt_2">✔ {items.txt3}</span>
        </div>
        <div className="bottom_section">
            <div className="bottom_section_left">
                <div className="first_part">
                    <span className="first_part_desc">
                        Only at
                    </span>
                    <span className="price">
                        $ {items.price}
                    </span>
                </div>
                <div className="second_part">
                    <span className="coupon_desc">
                        Use coupon
                    </span>
                    <span className="coupon">{items.coupon}</span>
                </div>
            </div>
            <div className="bottom_section_right">
                <button className="buy_btn">Buy now</button>
            </div>
        </div>
      </div>
    </div>
  )
}
