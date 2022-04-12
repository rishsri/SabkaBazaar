import React,{useState} from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";


export default function Login() {
  const [state, setState] = useState({});
  const [touchValidate, setTouchValidate] = useState(false);

  const handleChange = (e) => {
    setState((preState) => ({ ...preState, [e.target.name]: e.target.value }));
    setTouchValidate(false);
  };
 
  const hasError = (field) => {
    let error;
    switch (field) {
      case "validateEmail":
        if (!state.email) {
          error = "Field cannot be empty";
        }
        break;
      case "validatePassword":
        if (!state.password) {
          error = "Field cannot be empty";
        }
        break;
      
      default:
        break;
    }
    return error;
  };

  const validateBookingId = () => {
    if (
      hasError("validateEmail") ||
      hasError("validatePassword") 
    ) {
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    setTouchValidate(true);
    if (!validateBookingId()) {
      
    console.log("data Submit");
  };
}


  return (
      <div className="login-form-container" >
          <div className="h1-form">
          <h1>
              Login
          </h1>
          <h5>Get access to your Wishlist and Recommendation</h5>
          </div>


    <div className="text-field">
      <TextField
        className="style-text"
        id="standard-password-input"
        label="Email"
        type="Email"
        variant="standard"
        name={"email"}
          value={state.email}
          onChange={handleChange}
          error={hasError("validateEmail") && touchValidate}
          helperText={
            hasError("validateEmail") && touchValidate
              ? hasError("validateEmail")
              : null
          }
      />
      <TextField
        className="style-text"
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        name={"password"}
        value={state.password}
        onChange={handleChange}
        error={hasError("validatePassword") && touchValidate}
        helperText={
          hasError("validatePassword") && touchValidate
            ? hasError("validatePassword")
            : null
        }
      />
      
      <div className="submit-btn">
      <Button  variant="contained" onClick = {onSubmit}>
        Login
      </Button>
      </div>
      
    </div>
    </div>
  );
}
