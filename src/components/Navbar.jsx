import React from 'react'
import education from "../assets/education.svg"
import signin from "../assets/log.jpg"
// import { Link } from 'react-router-dom';
const Navbar = () => {

//   const loginHandler = () => {
// props.history.push({
//   pathname: "/signin"
// })
// console.log("fafaffdgg")
//   }
  return (
    <div className="bg-red-700">
    <div className="h-16 px-20 flex items-center">
    <img src={education}
     height={20}
     width={25}></img>
      <p className="text-white font-normal font-sans px-2" >BookStore</p>
      <div className="h-16 flex items-center absolute right-3">
    {/* <Link to ="/signin"> */}
    <img src={signin}
     height={25}
     width={25}
     className="rounded-full"></img>
     {/* </Link> */}
     </div>
    </div>
  </div>
  )
}

export default Navbar