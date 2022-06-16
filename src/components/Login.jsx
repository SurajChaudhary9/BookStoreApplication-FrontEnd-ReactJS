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
const Login = () => {
  const [loginDetails, setLoginDetails] = React.useState({
    email: "",
    password: "",
  });
  const loginDetailsHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
    console.log(loginDetails);
  };

  const loginHandler = (e) => {
e.preventDefault();
let user={
    email:loginDetails.email,
    password:loginDetails.password
}
UserService.loginUser(user)
.then((response)=>{
    console.log(response)
    alert(response.data.message)
})
.catch((error)=>{
    console.log(error)
    alert(error.response.data.data)
});
  }

  const paperStyle = {
    padding: 20,
    height: "55vh",
    width: 480,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
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
          name="email"
          value={loginDetails.email}
          onChange={loginDetailsHandler}
          placeholder="Enter Email"
          fullWidth
          required
        />
        <TextField
          label="Password"
          name="password"
          value={loginDetails.password}
          onChange={loginDetailsHandler}
          placeholder="Enter password"
          type="password"
          fullWidth
          required
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
          onClick={loginHandler}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="/forgot">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="\reg">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
