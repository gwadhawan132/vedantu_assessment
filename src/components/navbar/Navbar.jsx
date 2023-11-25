import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
    <div className="container">
        <div className="logo">
            <span className="text">Vedantu</span>
        </div>
        <div className="options">
            <button className="courses_bar">Course ↓</button>
            <span className="option">Courses for kids ↓</span>
            <span className="option">Free study material ↓</span>
            <span className="option">Offline centres ↓</span>
            <span className="option">More ↓</span>   
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
    </div>
    </div>
  )
}
