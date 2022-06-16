import React from "react";

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import UserService from "../service/UserService";
import { useState } from "react";

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
          pathname: "/resetPass"
        })
      }).catch((response) => {
        alert(response.response.data.data);
      });
  
    };

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 480,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "rgb(193 6 6)" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Registered Email"
          fullWidth
          required
          name="email"
          value={email}
          onChange={handleInput}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onSubmit={forgotPassword} 
        >
          Get Reset Link
        </Button>
        <Typography>
          {" "}
          Remember Your Password ?<Link href="/login">Login</Link>
        </Typography>
        <Typography>
          {" "}
          Reset Your Password ?<Link href="/login">Reset Password</Link>
        </Typography>
        {/* <div className="row-content">
            <Link className="link"  to="/resetPassword">Reset Password?</Link>
          </div> */}
      </Paper>
    </Grid>
  );
};

// export default ForgotPassword
