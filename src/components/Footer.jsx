import React from 'react'
import './Footer.css'
import log from '../assets/git.png'
import whatsapp from '../assets/whatsapp.webp'
import mail from '../assets/mail.webp'
const Footer = () => {
  return (
    <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li>
            <a href="/about">About us</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>get help</h4>
        <ul>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>online shop</h4>
        <ul>
          <li>
            <a href="#">Book</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
        <a href = "https://github.com/SurajChaudhary9">
    <img src={log}
     height={47}
     width={47}
     className="rounded-full"></img>
     {/* </Link> */}
     </a>
     <a href = " https://wa.me/7709911506?text=I'm%20interested%20in%20your%20book%20store%20app">
    <img src={whatsapp}
     height={47}
     width={47}
     className="rounded-full"></img>
     {/* </Link> */}
    </a>
     <a href = " mailto:surajchaudhary843@gmail.com?subject = FAQ&body = Message">
    <img src={mail}
     height={47}
     width={47}
     className="rounded-full"></img>
     {/* </Link> */}
     </a>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
