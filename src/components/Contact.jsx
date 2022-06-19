import React from 'react'
import contact from '../assets/contact.png'
const Qr = () => {
  return (
    <div className="wrapper">
    <div className="background-container">
      <div className="bg-1" />
      <div className="bg-2">{/*div*/}</div>
      <div className="about-container">
        <div className="image-container">
          <img src={contact} alt="" />
        </div>
        <div className="text-container">
          <h1>Contact us</h1>
          <p>
           How Can We Help You ?<br></br><br></br>
           <p><i><small>"Write Us @surajchaudhary012@rediffmail.com; <br></br>
           IT Zone , PCMC,<br></br>
            Pune, Maharashtra - 411063"</small></i></p>
          </p><br></br>
         {/* <div className="text-con">
          <a href="/reg">Register Here</a> <a href="/login">Already a User ?</a>
          </div>  */}
          
        </div>
      </div>
      
    </div>
    
  </div>
  )
}

export default Qr