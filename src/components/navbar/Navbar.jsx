 import { useState } from 'react';
import './Navbar.css';
import { IoIosMore } from "react-icons/io";
 import { FaAngleDown } from "react-icons/fa";
 import { GiHamburgerMenu } from "react-icons/gi";
 import { FaBuilding } from "react-icons/fa";
 import { IoBookSharp } from "react-icons/io5";
 import { TbMoodKid } from "react-icons/tb";
 import { FaClipboardList } from "react-icons/fa6";


export default function Navbar() {
    const[show,setShow]=useState(false);
  return (
    <div className="navbar">
    <div className="container">
        <div className="logo">
            <span className="text">Vedantu</span>
        </div>
        <div className="options">
            <button className="courses_bar">Course <FaAngleDown className='down_arrow'/> </button>
            <span className="option">Courses for kids <FaAngleDown className='down_arrow'/></span>
            <span className="option">Free study material <FaAngleDown className='down_arrow'/></span>
            <span className="option">Offline centres <FaAngleDown className='down_arrow'/></span>
            <span className="option">More <FaAngleDown className='down_arrow'/></span>   
        </div>
        <div className="contact_info">
            <div className="phone_icon"></div>
            <div className="contact">
                <div className="contact_description">talk to our experts</div>
                <div className="contact_number">1800-120-456-456</div> 
            </div>
        </div>
    <div className="signin_button">
        <button className="signin">sign in</button>
    </div>
        
        
        <div className="hamburger_menu">
        <GiHamburgerMenu className='hamburger_icon' onClick={()=>setShow(!show)} />
        </div>
    </div>
    <div className="hamburger_menu_container">
           { show && <div className="hamburger_menu_items">
            <span className="hamburger_menu_item"><FaClipboardList /> Course </span>
            <span className="hamburger_menu_item"><TbMoodKid /> Courses for kids </span>
            <span className="hamburger_menu_item"><IoBookSharp /> Free study material </span>
            <span className="hamburger_menu_item"> <FaBuilding /> Offline centres </span>
            <span className="hamburger_menu_item"><IoIosMore className='icon'/> More </span>   
            </div>
}
        </div>
    </div>
  )
}
