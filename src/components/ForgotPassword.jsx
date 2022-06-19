import React from 'react'
import { Link } from "react-router-dom";
import "./ForgotPassword.css"
import { useState } from "react";
import TextField from '@mui/material/TextField';

import UserService from '../service/UserService';

export default function ForgotPassword(props) {

  const [email, setEmail] = useState("");



  const handleInput = (event) => {
    let value = event.target.value;
    setEmail(value);
    console.log(value);
  };

  const forgotPassword = (event) => {
    event.preventDefault();

    UserService.forgotPassword(email).then((response) => {
      setEmail("");
      console.log("Login" + response)
      alert("Reset Password otp Has Been Sent To Your Email Address");
      props.history.push({
        pathname: "/resetpass"
      })
    }).catch((response) => {
      alert(response.response.data.data);
    });

  };


  return (
    <div>

      <div className="form-content-forgot">

        <form className="form-forgot" action="#" onSubmit={forgotPassword} >

          <div className="form-head-content" font-family="corbel">
            <div className="form-head-forgot">FORGOT PASSWORD ?</div>
          </div>


          <div className="row-content-forgot">
            <label for="email">EmailId</label>
            <TextField
              className="input-forgot"
              id="outlined-helperText"
              type="text"
              name="email"
              label="Email"
              placeholder="Email"
              required
              value={email}
              onChange={handleInput}
            />
          </div>

          <div>
            <button className='button-forgot' type="login"> Reset Password</button>
          </div>

          <div className="link">
            <Link to="/login" className="link"> Back </Link>
          </div >

          {/* <div className="link">
            <Link to="/resetpass" className="link"> reset </Link>
          </div > */}


        </form>

      </div>
    </div>
  )
}
