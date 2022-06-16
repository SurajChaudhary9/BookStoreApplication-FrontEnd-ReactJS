import React from 'react'
import './About.css';
import book from '../assets/book.jpg'
const About = () => {
  return (
   <div className="wrapper">
   <div className="background-container">
     <div className="bg-1" />
     <div className="bg-2">{/*div*/}</div>
     <div className="about-container">
       <div className="image-container">
         <img src={book} alt="" />
       </div>
       <div className="text-container">
         <h1>About us</h1>
         <p>
          Welcome To Book Store App<br></br><br></br>
          <p><i><small>"Books are the quietest and most constant of friends; <br></br>
          they are the most accessible and wisest of counselors,<br></br>
           and the most patient of teachers."</small></i></p>
         </p>
        
         <a href="/reg">Register Here</a>
       </div>
     </div>
   </div>
 </div>
 
  )
}

export default About